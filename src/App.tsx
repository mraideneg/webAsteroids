// AsteroidsWebBot.tsx
import React, { useRef, useEffect, useCallback } from "react";

interface AppProps {
  gameStarted: boolean;
  announceBotCollision: () => void;
}

// Constants
const WIDTH = 450;
const HEIGHT = 450;
const FPS = 60;
const SHIP_THRUST = 200;
const SHIP_ROT_SPEED = 220;
const FRICTION = 10;
const BULLET_SPEED = 500;
const BULLET_LIFETIME = 1.6;
const ASTEROID_MIN_SPEED = 10;
const ASTEROID_MAX_SPEED = 60;
const ASTEROID_SIZES = new Map<number, number>([[3, 40], [2, 24], [1, 12]]);
const START_ASTEROIDS = 20;
const INVULNERABLE_TIME = 2.0;

const BG = "#090914";
const WHITE = "#f0f0f0";
const PINK = "#f064b4";
const YELLOW = "#f0dc5a";
const RED = "#dc5a5a";

type Vec2 = [number, number];

function wrapPosition(x: number, y: number): Vec2 {
  let nx = x % WIDTH; if (nx < 0) nx += WIDTH;
  let ny = y % HEIGHT; if (ny < 0) ny += HEIGHT;
  return [nx, ny];
}
function rad(deg: number) { return deg * Math.PI / 180; }
function vecFromAngleDeg(angleDeg: number): Vec2 {
  const r = rad(angleDeg); return [Math.cos(r), -Math.sin(r)];
}
function dist(a: Vec2, b: Vec2) { return Math.hypot(a[0]-b[0], a[1]-b[1]); }

// Ship
class Ship {
  pos: Vec2; vel: Vec2; angle: number; radius: number; thrusting: boolean;
  invulnerable: boolean; invulnerableTimer: number;
  constructor() {
    this.pos = [WIDTH/2, HEIGHT/2]; this.vel=[0,0]; this.angle=90;
    this.radius=12; this.thrusting=false;
    this.invulnerable=true; this.invulnerableTimer=INVULNERABLE_TIME;
  }
  update(dt: number) {
    if (this.thrusting) {
      const [dx,dy] = vecFromAngleDeg(this.angle);
      this.vel[0]+=dx*SHIP_THRUST*dt; this.vel[1]+=dy*SHIP_THRUST*dt;
    }
    const speed = Math.hypot(this.vel[0], this.vel[1]);
    if(speed>0){
      const accel=FRICTION*dt;
      if(accel>speed){ this.vel[0]=0; this.vel[1]=0; }
      else { this.vel[0]-=(this.vel[0]*FRICTION*dt)/speed; this.vel[1]-=(this.vel[1]*FRICTION*dt)/speed; }
    }
    const [nx,ny]=wrapPosition(this.pos[0]+this.vel[0]*dt,this.pos[1]+this.vel[1]*dt);
    this.pos[0]=nx; this.pos[1]=ny;
    if(this.invulnerable){ this.invulnerableTimer-=dt; if(this.invulnerableTimer<=0)this.invulnerable=false; }
  }
}

// Bullet
class Bullet {
  pos: Vec2; vel: Vec2; life: number;
  constructor(pos: Vec2, angle: number, shipVel: Vec2){
    this.pos=[pos[0],pos[1]]; const [dx,dy]=vecFromAngleDeg(angle);
    this.vel=[shipVel[0]+dx*BULLET_SPEED,shipVel[1]+dy*BULLET_SPEED];
    this.life=BULLET_LIFETIME;
  }
  update(dt:number){
    this.pos[0]+=this.vel[0]*dt; this.pos[1]+=this.vel[1]*dt;
    const [nx,ny]=wrapPosition(this.pos[0],this.pos[1]); this.pos[0]=nx; this.pos[1]=ny;
    this.life-=dt;
  }
  alive(){return this.life>0;}
}

// Asteroid
class Asteroid {
  pos: Vec2; size: number; radius: number; vel: Vec2; vertexCount:number; jag:number[];
  constructor(pos?:Vec2,size=3){
    if(!pos){ const side=["left","right","top","bottom"][Math.floor(Math.random()*4)];
      let x=0,y=0; const r=ASTEROID_SIZES.get(size)??24;
      if(side==="left"){x=-r*2;y=Math.random()*HEIGHT;} else if(side==="right"){x=WIDTH+r*2;y=Math.random()*HEIGHT;}
      else if(side==="top"){x=Math.random()*WIDTH;y=-r*2;} else {x=Math.random()*WIDTH;y=HEIGHT+r*2;}
      this.pos=[x,y];
    } else this.pos=[pos[0],pos[1]];
    this.size=size; this.radius=ASTEROID_SIZES.get(size)??24;
    const angle=Math.random()*360; const spd=(Math.random()*(ASTEROID_MAX_SPEED-ASTEROID_MIN_SPEED)+ASTEROID_MIN_SPEED)*(size===1?1.2:1);
    const [dx,dy]=vecFromAngleDeg(angle); this.vel=[dx*spd,dy*spd];
    this.vertexCount=8+Math.floor(Math.random()*5); this.jag=Array.from({length:this.vertexCount},()=>0.7+Math.random()*0.6);
  }
  update(dt:number){ const [nx,ny]=wrapPosition(this.pos[0]+this.vel[0]*dt,this.pos[1]+this.vel[1]*dt); this.pos[0]=nx; this.pos[1]=ny;}
}

// Main component
export default function AsteroidsWebBot( {gameStarted, announceBotCollision}: AppProps ): JSX.Element {
  const canvasRef=useRef<HTMLCanvasElement|null>(null);
  const rafRef=useRef<number|null>(null);
  const lastTimeRef=useRef<number|null>(null);

  // Game state
  const shipRef=useRef<Ship>(new Ship());
  const bulletsRef=useRef<Bullet[]>([]);
  const asteroidsRef=useRef<Asteroid[]>([]);
  const stateRef=useRef<string>("TITLE");

  // Bot
  const botMoveRef=useRef<number|null>(null);
  const workerRef=useRef<Worker|null>(null);

  const spawnWave=useCallback((n:number)=>{
    for(let i=0;i<n;i++){
      const a=new Asteroid();
      if(dist(a.pos,shipRef.current.pos)<120){a.pos[0]+=200;a.pos[1]+=200;}
      asteroidsRef.current.push(a);
    }
  },[]);

  const reset=useCallback(()=>{
    shipRef.current=new Ship(); bulletsRef.current=[]; asteroidsRef.current=[];
    spawnWave(START_ASTEROIDS); stateRef.current="TITLE";
  },[spawnWave]);

  function splitAsteroid(a:Asteroid):Asteroid[]{
    if(a.size>1){ const children:Asteroid[]=[]; for(let i=0;i<2;i++){
      const na=new Asteroid([a.pos[0],a.pos[1]],a.size-1);
      na.vel[0]+=(Math.random()*2.4-1.2); na.vel[1]+=(Math.random()*2.4-1.2);
      children.push(na);
    } return children;}
    return [];
  }

  function applyBotMove(move: number | null, dt: number) {
    if (move === null || move === undefined) return;

    shipRef.current.thrusting = false;

    switch (move) {
      case 0: // accelerate
        shipRef.current.thrusting = true;
        break;
      case 1: // turn left
        shipRef.current.angle -= SHIP_ROT_SPEED * dt;
        break;
      case 2: // turn right
        shipRef.current.angle += SHIP_ROT_SPEED * dt;
        break;
      default:
        break;
    }

    // Keep angle in [0, 360)
    shipRef.current.angle = (shipRef.current.angle + 360) % 360;
  }

  function updateGame(dt: number) {
    if (stateRef.current !== "PLAYING") return;

    // Apply bot move
    applyBotMove(botMoveRef.current, dt);

    // Update ship
    shipRef.current.update(dt);

    // Update bullets and asteroids
    bulletsRef.current.forEach(b => b.update(dt));
    asteroidsRef.current.forEach(a => a.update(dt));
    bulletsRef.current = bulletsRef.current.filter(b => b.alive());

    // Bullet collisions
    const toRemoveAst: number[] = [];
    const toAddAst: Asteroid[] = [];
    const bulletRemoveIdxs = new Set<number>();

    bulletsRef.current.forEach((b, bi) => {
      asteroidsRef.current.forEach((a, ai) => {
        if (dist(b.pos, a.pos) < a.radius + 2) {
          bulletRemoveIdxs.add(bi);
          toRemoveAst.push(ai);
          toAddAst.push(...splitAsteroid(a));
        }
      });
    });

    bulletsRef.current = bulletsRef.current.filter((_, i) => !bulletRemoveIdxs.has(i));

    // Remove asteroids safely
    const uniqueRemove = Array.from(new Set(toRemoveAst)).sort((a, b) => b - a);
    uniqueRemove.forEach(idx => {
      if (idx >= 0 && idx < asteroidsRef.current.length) asteroidsRef.current.splice(idx, 1);
    });
    asteroidsRef.current.push(...toAddAst);

    // Ship collisions
    if (!shipRef.current.invulnerable) {
      announceBotCollision();
      for (let i = 0; i < asteroidsRef.current.length; i++) {
        const a = asteroidsRef.current[i];
        if (dist(shipRef.current.pos, a.pos) < a.radius + shipRef.current.radius - 3) {
          stateRef.current = "GAMEOVER";
          asteroidsRef.current.splice(i, 1);
          break;
        }
      }
    }

    // Spawn new wave if cleared
    if (asteroidsRef.current.length === 0) {
      spawnWave(START_ASTEROIDS + 1);
    }

    // Bot shooting (optional, same as human)
    if (botMoveRef.current === 3) { // 3 = shoot
      const ship = shipRef.current;
      const [dx, dy] = vecFromAngleDeg(ship.angle);
      const spawn: Vec2 = [ship.pos[0] + dx * 18, ship.pos[1] + dy * 18];
      bulletsRef.current.push(new Bullet(spawn, ship.angle, ship.vel));
    }
  }

  function drawAsteroid(ctx:CanvasRenderingContext2D,a:Asteroid){
    const cx=a.pos[0], cy=a.pos[1];
    ctx.strokeStyle=WHITE; ctx.lineWidth=2; ctx.beginPath();
    for(let i=0;i<a.vertexCount;i++){
      const ang=(360*i)/a.vertexCount;
      const [vx,vy]=vecFromAngleDeg(ang);
      const r=a.radius*a.jag[i];
      const x=cx+vx*r, y=cy+vy*r;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.closePath(); ctx.stroke();
  }

  function drawShip(ctx:CanvasRenderingContext2D,ship:Ship){
    const nose=vecFromAngleDeg(ship.angle), left=vecFromAngleDeg(ship.angle+130), right=vecFromAngleDeg(ship.angle-130);
    const scale=14;
    const pts:[[number,number],[number,number],[number,number]]=[
      [ship.pos[0]+nose[0]*scale,ship.pos[1]+nose[1]*scale],
      [ship.pos[0]+left[0]*scale*0.9,ship.pos[1]+left[1]*scale*0.9],
      [ship.pos[0]+right[0]*scale*0.9,ship.pos[1]+right[1]*scale*0.9]
    ];
    const blink=ship.invulnerable && Math.floor(Date.now()/120)%2===0;
    ctx.strokeStyle=ship.invulnerable && blink ? YELLOW : PINK; ctx.lineWidth=2;
    ctx.beginPath(); ctx.moveTo(pts[0][0],pts[0][1]); ctx.lineTo(pts[1][0],pts[1][1]); ctx.lineTo(pts[2][0],pts[2][1]); ctx.closePath(); ctx.stroke();
    if(ship.thrusting){ const f=vecFromAngleDeg(ship.angle+180); const fscale=8+(Math.random()*4-2); ctx.strokeStyle=RED; ctx.lineWidth=3;
      ctx.beginPath(); ctx.moveTo((pts[1][0]+pts[2][0])/2,(pts[1][1]+pts[2][1])/2);
      ctx.lineTo(ship.pos[0]+f[0]*fscale, ship.pos[1]+f[1]*fscale); ctx.stroke();
    }
  }

  function drawGame(ctx: CanvasRenderingContext2D, now: number) {
    // Background
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Asteroids
    for (const a of asteroidsRef.current) drawAsteroid(ctx, a);

    // Bullets
    for (const b of bulletsRef.current) {
      ctx.beginPath();
      ctx.fillStyle = YELLOW;
      ctx.arc(b.pos[0], b.pos[1], 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Ship
    drawShip(ctx, shipRef.current);

    // Overlays
    if (stateRef.current === "TITLE") {
      ctx.fillStyle = WHITE;
      ctx.font = "48px Consolas, monospace";
      ctx.textAlign = "center";
      ctx.fillText("ASTEROIDS", WIDTH / 2, HEIGHT / 2 - 40);

      ctx.font = "14px Consolas, monospace";
      ctx.fillText("Bot controlled version • Press ENTER to start", WIDTH / 2, HEIGHT / 2 + 20);
      ctx.textAlign = "left";
    } else if (stateRef.current === "PAUSED") {
      ctx.fillStyle = WHITE;
      ctx.font = "48px Consolas, monospace";
      ctx.textAlign = "center";
      ctx.fillText("PAUSED", WIDTH / 2, HEIGHT / 2);
      ctx.textAlign = "left";
    } else if (stateRef.current === "GAMEOVER") {
      ctx.fillStyle = RED;
      ctx.font = "48px Consolas, monospace";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER", WIDTH / 2, HEIGHT / 2 - 30);

      ctx.fillStyle = WHITE;
      ctx.font = "16px Consolas, monospace";
      ctx.textAlign = "left";
    }
  }

  // Main loop
  useEffect(()=>{
    const canvas=canvasRef.current!; const ctx=canvas.getContext("2d")!;
    ctx.imageSmoothingEnabled=false;
    reset();
    function step(now:number){
      if(!lastTimeRef.current) lastTimeRef.current=now;
      const dt=Math.min((now-lastTimeRef.current)/1000,1/12);
      lastTimeRef.current=now;
      updateGame(dt); drawGame(ctx);
      rafRef.current=requestAnimationFrame(step);
    }
    rafRef.current=requestAnimationFrame(step);
    return ()=>{ if(rafRef.current) cancelAnimationFrame(rafRef.current); }
  },[reset]);

  // Bot worker
  useEffect(()=>{
    workerRef.current=new Worker(new URL('./wasm/botWorker.js', import.meta.url));
    workerRef.current.onmessage=(ev)=>{ botMoveRef.current=ev.data; }
    return ()=>{ workerRef.current?.terminate(); }
  },[]);

  useEffect(()=>{
    const interval=setInterval(()=>{
      if(workerRef.current){
        workerRef.current.postMessage({
          ship:{pos:shipRef.current.pos,vel:shipRef.current.vel,angle:shipRef.current.angle},
          asteroids:asteroidsRef.current.map(a=>({pos:a.pos,vel:a.vel,radius:a.radius}))
        });
      }
    },1000/15);
    return ()=>clearInterval(interval);
  },[]);

  useEffect(() => {
    if (gameStarted) {
      reset();
      stateRef.current = "PLAYING"
    }
  }, [gameStarted])

  return (
    <div className="p-4 canvas-wrapper">
      <canvas ref={canvasRef} width={450} height={450} style={{width: "450px", height: "450px", borderRadius: 8, boxShadow: "0 6px 18px rgba(0,0,0,0.5)"}} />
    </div>
  );
}
