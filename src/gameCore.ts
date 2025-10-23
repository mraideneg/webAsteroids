// gameCore.ts
export const WIDTH = 450;
export const HEIGHT = 450;
export const FPS = 60;
export const START_ASTEROIDS = 20;

export const BG = "#090914";
export const WHITE = "#f0f0f0";
export const PINK = "#f064b4";   // add this
export const YELLOW = "#f0dc5a";
export const RED = "#dc5a5a";

export type Vec2 = [number, number];

export function wrapPosition(x: number, y: number): Vec2 {
  let nx = x % WIDTH; if (nx < 0) nx += WIDTH;
  let ny = y % HEIGHT; if (ny < 0) ny += HEIGHT;
  return [nx, ny];
}

export function rad(deg: number) { return deg * Math.PI / 180; }
export function vecFromAngleDeg(angleDeg: number): Vec2 {
  const r = rad(angleDeg); return [Math.cos(r), -Math.sin(r)];
}
export function dist(a: Vec2, b: Vec2) { return Math.hypot(a[0]-b[0], a[1]-b[1]); }

// Ship
export class Ship {
  pos: Vec2; vel: Vec2; angle: number; radius: number; thrusting: boolean;
  invulnerable: boolean; invulnerableTimer: number;
  static SHIP_THRUST = 200;
  static SHIP_ROT_SPEED = 220;
  static FRICTION = 10;
  static INVULNERABLE_TIME = 2.0;

  constructor() {
    this.pos = [WIDTH/2, HEIGHT/2];
    this.vel = [0,0];
    this.angle = 90;
    this.radius = 12;
    this.thrusting = false;
    this.invulnerable = true;
    this.invulnerableTimer = Ship.INVULNERABLE_TIME;
  }

  update(dt: number) {
    if (this.thrusting) {
      const [dx,dy] = vecFromAngleDeg(this.angle);
      this.vel[0] += dx*Ship.SHIP_THRUST*dt;
      this.vel[1] += dy*Ship.SHIP_THRUST*dt;
    }
    const speed = Math.hypot(this.vel[0], this.vel[1]);
    if(speed>0){
      const accel=Ship.FRICTION*dt;
      if(accel>speed){ this.vel[0]=0; this.vel[1]=0; }
      else { this.vel[0]-=(this.vel[0]*Ship.FRICTION*dt)/speed; this.vel[1]-=(this.vel[1]*Ship.FRICTION*dt)/speed; }
    }
    const [nx,ny] = wrapPosition(this.pos[0]+this.vel[0]*dt, this.pos[1]+this.vel[1]*dt);
    this.pos[0]=nx; this.pos[1]=ny;
    if(this.invulnerable){ this.invulnerableTimer-=dt; if(this.invulnerableTimer<=0) this.invulnerable=false; }
  }
}

// Bullet
export class Bullet {
  pos: Vec2; vel: Vec2; life: number;
  static BULLET_SPEED = 500;
  static BULLET_LIFETIME = 1.6;

  constructor(pos: Vec2, angle: number, shipVel: Vec2){
    this.pos = [pos[0], pos[1]];
    const [dx, dy] = vecFromAngleDeg(angle);
    this.vel = [shipVel[0]+dx*Bullet.BULLET_SPEED, shipVel[1]+dy*Bullet.BULLET_SPEED];
    this.life = Bullet.BULLET_LIFETIME;
  }

  update(dt: number){
    this.pos[0]+=this.vel[0]*dt; this.pos[1]+=this.vel[1]*dt;
    const [nx,ny] = wrapPosition(this.pos[0], this.pos[1]); this.pos[0]=nx; this.pos[1]=ny;
    this.life -= dt;
  }

  alive(){ return this.life>0; }
}

// Asteroid
export class Asteroid {
  pos: Vec2; size: number; radius: number; vel: Vec2; vertexCount:number; jag:number[];
  static ASTEROID_MIN_SPEED = 10;
  static ASTEROID_MAX_SPEED = 60;
  static ASTEROID_SIZES = new Map<number, number>([[3,40],[2,24],[1,12]]);

  constructor(pos?:Vec2, size=3){
    if(!pos){
      const side=["left","right","top","bottom"][Math.floor(Math.random()*4)];
      let x=0,y=0; const r=Asteroid.ASTEROID_SIZES.get(size) ?? 24;
      if(side==="left"){x=-r*2;y=Math.random()*HEIGHT;} else if(side==="right"){x=WIDTH+r*2;y=Math.random()*HEIGHT;}
      else if(side==="top"){x=Math.random()*WIDTH;y=-r*2;} else {x=Math.random()*WIDTH;y=HEIGHT+r*2;}
      this.pos=[x,y];
    } else this.pos = [pos[0], pos[1]];

    this.size = size;
    this.radius = Asteroid.ASTEROID_SIZES.get(size) ?? 24;
    const angle=Math.random()*360;
    const spd=(Math.random()*(Asteroid.ASTEROID_MAX_SPEED-Asteroid.ASTEROID_MIN_SPEED)+Asteroid.ASTEROID_MIN_SPEED)*(size===1?1.2:1);
    const [dx,dy]=vecFromAngleDeg(angle); this.vel=[dx*spd, dy*spd];

    this.vertexCount = 8 + Math.floor(Math.random()*5);
    this.jag = Array.from({length:this.vertexCount}, ()=>0.7 + Math.random()*0.6);
  }

  update(dt:number){ const [nx,ny]=wrapPosition(this.pos[0]+this.vel[0]*dt,this.pos[1]+this.vel[1]*dt); this.pos[0]=nx; this.pos[1]=ny; }
}

// Helpers
export function spawnWave(asteroids: Asteroid[], shipPos: Vec2, n: number){
  for(let i=0;i<n;i++){
    const a = new Asteroid();
    if(dist(a.pos, shipPos)<120){ a.pos[0]+=200; a.pos[1]+=200; }
    asteroids.push(a);
  }
}

export function splitAsteroid(a: Asteroid): Asteroid[] {
  if(a.size>1){
    const children: Asteroid[] = [];
    for(let i=0;i<2;i++){
      const na = new Asteroid([a.pos[0], a.pos[1]], a.size-1);
      na.vel[0] += (Math.random()*2.4-1.2); na.vel[1] += (Math.random()*2.4-1.2);
      children.push(na);
    }
    return children;
  }
  return [];
}

// Drawing
export function drawShip(ctx: CanvasRenderingContext2D, ship: Ship){
  const nose = vecFromAngleDeg(ship.angle), left=vecFromAngleDeg(ship.angle+130), right=vecFromAngleDeg(ship.angle-130);
  const scale=14;
  const pts:[[number,number],[number,number],[number,number]] = [
    [ship.pos[0]+nose[0]*scale, ship.pos[1]+nose[1]*scale],
    [ship.pos[0]+left[0]*scale*0.9, ship.pos[1]+left[1]*scale*0.9],
    [ship.pos[0]+right[0]*scale*0.9, ship.pos[1]+right[1]*scale*0.9]
  ];
  const blink = ship.invulnerable && Math.floor(Date.now()/120)%2===0;
  ctx.strokeStyle = ship.invulnerable && blink ? YELLOW : PINK;
  ctx.lineWidth=2;
  ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); ctx.lineTo(pts[1][0], pts[1][1]); ctx.lineTo(pts[2][0], pts[2][1]); ctx.closePath(); ctx.stroke();
}

export function drawAsteroid(ctx: CanvasRenderingContext2D, a: Asteroid){
  const cx = a.pos[0], cy = a.pos[1];
  ctx.strokeStyle = WHITE; ctx.lineWidth = 2; ctx.beginPath();
  for(let i=0;i<a.vertexCount;i++){
    const ang=(360*i)/a.vertexCount;
    const [vx,vy]=vecFromAngleDeg(ang);
    const r = a.radius * a.jag[i];
    const x = cx + vx*r, y = cy + vy*r;
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  }
  ctx.closePath(); ctx.stroke();
}

export function drawGame(
  ctx: CanvasRenderingContext2D,
  ship: Ship,
  bullets: Bullet[],
  asteroids: Asteroid[],
  gameState: string,
) {
  ctx.fillStyle = BG;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  asteroids.forEach(a => drawAsteroid(ctx, a));

  bullets.forEach(b => {
    ctx.beginPath();
    ctx.fillStyle = YELLOW;
    ctx.arc(b.pos[0], b.pos[1], 2, 0, Math.PI * 2);
    ctx.fill();
  });

  drawShip(ctx, ship);

  ctx.fillStyle = WHITE;
  ctx.font = "16px Consolas, monospace";
  ctx.textBaseline = "top";

  if (gameState === "TITLE") {
    ctx.fillStyle = WHITE;
    ctx.font = "48px Consolas, monospace";
    ctx.textAlign = "center";
    ctx.fillText("ASTEROIDS", WIDTH / 2, HEIGHT / 2 - 40);
    ctx.font = "14px Consolas, monospace";
    ctx.fillText("Arrow keys/AWD to move & Space to shoot", WIDTH / 2, HEIGHT / 2 + 20);
    ctx.textAlign = "left";
  } else if (gameState === "PAUSED") {
    ctx.fillStyle = WHITE;
    ctx.font = "48px Consolas, monospace";
    ctx.textAlign = "center";
    ctx.fillText("PAUSED", WIDTH / 2, HEIGHT / 2);
    ctx.textAlign = "left";
  } else if (gameState === "GAMEOVER") {
    ctx.fillStyle = RED;
    ctx.font = "48px Consolas, monospace";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", WIDTH / 2, HEIGHT / 2 - 30);
  }
}