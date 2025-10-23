(function() {
  const M = document.createElement("link").relList;
  if (M && M.supports && M.supports("modulepreload")) return;
  for (const U of document.querySelectorAll('link[rel="modulepreload"]')) v(U);
  new MutationObserver((U) => {
    for (const O of U) if (O.type === "childList") for (const B of O.addedNodes) B.tagName === "LINK" && B.rel === "modulepreload" && v(B);
  }).observe(document, { childList: true, subtree: true });
  function R(U) {
    const O = {};
    return U.integrity && (O.integrity = U.integrity), U.referrerPolicy && (O.referrerPolicy = U.referrerPolicy), U.crossOrigin === "use-credentials" ? O.credentials = "include" : U.crossOrigin === "anonymous" ? O.credentials = "omit" : O.credentials = "same-origin", O;
  }
  function v(U) {
    if (U.ep) return;
    U.ep = true;
    const O = R(U);
    fetch(U.href, O);
  }
})();
var mi = { exports: {} }, Oe = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var _v;
function fh() {
  if (_v) return Oe;
  _v = 1;
  var g = Symbol.for("react.transitional.element"), M = Symbol.for("react.fragment");
  function R(v, U, O) {
    var B = null;
    if (O !== void 0 && (B = "" + O), U.key !== void 0 && (B = "" + U.key), "key" in U) {
      O = {};
      for (var Z in U) Z !== "key" && (O[Z] = U[Z]);
    } else O = U;
    return U = O.ref, { $$typeof: g, type: v, key: B, ref: U !== void 0 ? U : null, props: O };
  }
  return Oe.Fragment = M, Oe.jsx = R, Oe.jsxs = R, Oe;
}
var Mv;
function ch() {
  return Mv || (Mv = 1, mi.exports = fh()), mi.exports;
}
var xl = ch(), di = { exports: {} }, L = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ov;
function ih() {
  if (Ov) return L;
  Ov = 1;
  var g = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), B = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), il = Symbol.iterator;
  function el(o) {
    return o === null || typeof o != "object" ? null : (o = il && o[il] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var ol = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, nl = Object.assign, w = {};
  function I(o, A, D) {
    this.props = o, this.context = A, this.refs = w, this.updater = D || ol;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(o, A) {
    if (typeof o != "object" && typeof o != "function" && o != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, o, A, "setState");
  }, I.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function P() {
  }
  P.prototype = I.prototype;
  function X(o, A, D) {
    this.props = o, this.context = A, this.refs = w, this.updater = D || ol;
  }
  var x = X.prototype = new P();
  x.constructor = X, nl(x, I.prototype), x.isPureReactComponent = true;
  var Dl = Array.isArray;
  function Ul() {
  }
  var W = { H: null, A: null, T: null, S: null }, Wl = Object.prototype.hasOwnProperty;
  function Dt(o, A, D) {
    var H = D.ref;
    return { $$typeof: g, type: o, key: A, ref: H !== void 0 ? H : null, props: D };
  }
  function Ju(o, A) {
    return Dt(o.type, A, o.props);
  }
  function Ut(o) {
    return typeof o == "object" && o !== null && o.$$typeof === g;
  }
  function $l(o) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(D) {
      return A[D];
    });
  }
  var Ou = /\/+/g;
  function qt(o, A) {
    return typeof o == "object" && o !== null && o.key != null ? $l("" + o.key) : A.toString(36);
  }
  function _t(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(Ul, Ul) : (o.status = "pending", o.then(function(A) {
          o.status === "pending" && (o.status = "fulfilled", o.value = A);
        }, function(A) {
          o.status === "pending" && (o.status = "rejected", o.reason = A);
        })), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function b(o, A, D, H, V) {
    var $ = typeof o;
    ($ === "undefined" || $ === "boolean") && (o = null);
    var vl = false;
    if (o === null) vl = true;
    else switch ($) {
      case "bigint":
      case "string":
      case "number":
        vl = true;
        break;
      case "object":
        switch (o.$$typeof) {
          case g:
          case M:
            vl = true;
            break;
          case j:
            return vl = o._init, b(vl(o._payload), A, D, H, V);
        }
    }
    if (vl) return V = V(o), vl = H === "" ? "." + qt(o, 0) : H, Dl(V) ? (D = "", vl != null && (D = vl.replace(Ou, "$&/") + "/"), b(V, A, D, "", function(Ca) {
      return Ca;
    })) : V != null && (Ut(V) && (V = Ju(V, D + (V.key == null || o && o.key === V.key ? "" : ("" + V.key).replace(Ou, "$&/") + "/") + vl)), A.push(V)), 1;
    vl = 0;
    var Vl = H === "" ? "." : H + ":";
    if (Dl(o)) for (var Ml = 0; Ml < o.length; Ml++) H = o[Ml], $ = Vl + qt(H, Ml), vl += b(H, A, D, $, V);
    else if (Ml = el(o), typeof Ml == "function") for (o = Ml.call(o), Ml = 0; !(H = o.next()).done; ) H = H.value, $ = Vl + qt(H, Ml++), vl += b(H, A, D, $, V);
    else if ($ === "object") {
      if (typeof o.then == "function") return b(_t(o), A, D, H, V);
      throw A = String(o), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
    }
    return vl;
  }
  function p(o, A, D) {
    if (o == null) return o;
    var H = [], V = 0;
    return b(o, H, "", "", function($) {
      return A.call(D, $, V++);
    }), H;
  }
  function Q(o) {
    if (o._status === -1) {
      var A = o._result;
      A = A(), A.then(function(D) {
        (o._status === 0 || o._status === -1) && (o._status = 1, o._result = D);
      }, function(D) {
        (o._status === 0 || o._status === -1) && (o._status = 2, o._result = D);
      }), o._status === -1 && (o._status = 0, o._result = A);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var ml = typeof reportError == "function" ? reportError : function(o) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o), error: o });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", o);
      return;
    }
    console.error(o);
  }, gl = { map: p, forEach: function(o, A, D) {
    p(o, function() {
      A.apply(this, arguments);
    }, D);
  }, count: function(o) {
    var A = 0;
    return p(o, function() {
      A++;
    }), A;
  }, toArray: function(o) {
    return p(o, function(A) {
      return A;
    }) || [];
  }, only: function(o) {
    if (!Ut(o)) throw Error("React.Children.only expected to receive a single React element child.");
    return o;
  } };
  return L.Activity = q, L.Children = gl, L.Component = I, L.Fragment = R, L.Profiler = U, L.PureComponent = X, L.StrictMode = v, L.Suspense = _, L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, L.__COMPILER_RUNTIME = { __proto__: null, c: function(o) {
    return W.H.useMemoCache(o);
  } }, L.cache = function(o) {
    return function() {
      return o.apply(null, arguments);
    };
  }, L.cacheSignal = function() {
    return null;
  }, L.cloneElement = function(o, A, D) {
    if (o == null) throw Error("The argument must be a React element, but you passed " + o + ".");
    var H = nl({}, o.props), V = o.key;
    if (A != null) for ($ in A.key !== void 0 && (V = "" + A.key), A) !Wl.call(A, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && A.ref === void 0 || (H[$] = A[$]);
    var $ = arguments.length - 2;
    if ($ === 1) H.children = D;
    else if (1 < $) {
      for (var vl = Array($), Vl = 0; Vl < $; Vl++) vl[Vl] = arguments[Vl + 2];
      H.children = vl;
    }
    return Dt(o.type, V, H);
  }, L.createContext = function(o) {
    return o = { $$typeof: B, _currentValue: o, _currentValue2: o, _threadCount: 0, Provider: null, Consumer: null }, o.Provider = o, o.Consumer = { $$typeof: O, _context: o }, o;
  }, L.createElement = function(o, A, D) {
    var H, V = {}, $ = null;
    if (A != null) for (H in A.key !== void 0 && ($ = "" + A.key), A) Wl.call(A, H) && H !== "key" && H !== "__self" && H !== "__source" && (V[H] = A[H]);
    var vl = arguments.length - 2;
    if (vl === 1) V.children = D;
    else if (1 < vl) {
      for (var Vl = Array(vl), Ml = 0; Ml < vl; Ml++) Vl[Ml] = arguments[Ml + 2];
      V.children = Vl;
    }
    if (o && o.defaultProps) for (H in vl = o.defaultProps, vl) V[H] === void 0 && (V[H] = vl[H]);
    return Dt(o, $, V);
  }, L.createRef = function() {
    return { current: null };
  }, L.forwardRef = function(o) {
    return { $$typeof: Z, render: o };
  }, L.isValidElement = Ut, L.lazy = function(o) {
    return { $$typeof: j, _payload: { _status: -1, _result: o }, _init: Q };
  }, L.memo = function(o, A) {
    return { $$typeof: E, type: o, compare: A === void 0 ? null : A };
  }, L.startTransition = function(o) {
    var A = W.T, D = {};
    W.T = D;
    try {
      var H = o(), V = W.S;
      V !== null && V(D, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(Ul, ml);
    } catch ($) {
      ml($);
    } finally {
      A !== null && D.types !== null && (A.types = D.types), W.T = A;
    }
  }, L.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, L.use = function(o) {
    return W.H.use(o);
  }, L.useActionState = function(o, A, D) {
    return W.H.useActionState(o, A, D);
  }, L.useCallback = function(o, A) {
    return W.H.useCallback(o, A);
  }, L.useContext = function(o) {
    return W.H.useContext(o);
  }, L.useDebugValue = function() {
  }, L.useDeferredValue = function(o, A) {
    return W.H.useDeferredValue(o, A);
  }, L.useEffect = function(o, A) {
    return W.H.useEffect(o, A);
  }, L.useEffectEvent = function(o) {
    return W.H.useEffectEvent(o);
  }, L.useId = function() {
    return W.H.useId();
  }, L.useImperativeHandle = function(o, A, D) {
    return W.H.useImperativeHandle(o, A, D);
  }, L.useInsertionEffect = function(o, A) {
    return W.H.useInsertionEffect(o, A);
  }, L.useLayoutEffect = function(o, A) {
    return W.H.useLayoutEffect(o, A);
  }, L.useMemo = function(o, A) {
    return W.H.useMemo(o, A);
  }, L.useOptimistic = function(o, A) {
    return W.H.useOptimistic(o, A);
  }, L.useReducer = function(o, A, D) {
    return W.H.useReducer(o, A, D);
  }, L.useRef = function(o) {
    return W.H.useRef(o);
  }, L.useState = function(o) {
    return W.H.useState(o);
  }, L.useSyncExternalStore = function(o, A, D) {
    return W.H.useSyncExternalStore(o, A, D);
  }, L.useTransition = function() {
    return W.H.useTransition();
  }, L.version = "19.2.0", L;
}
var pv;
function Ei() {
  return pv || (pv = 1, di.exports = ih()), di.exports;
}
var al = Ei(), ri = { exports: {} }, pe = {}, Si = { exports: {} }, gi = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Dv;
function sh() {
  return Dv || (Dv = 1, (function(g) {
    function M(b, p) {
      var Q = b.length;
      b.push(p);
      l: for (; 0 < Q; ) {
        var ml = Q - 1 >>> 1, gl = b[ml];
        if (0 < U(gl, p)) b[ml] = p, b[Q] = gl, Q = ml;
        else break l;
      }
    }
    function R(b) {
      return b.length === 0 ? null : b[0];
    }
    function v(b) {
      if (b.length === 0) return null;
      var p = b[0], Q = b.pop();
      if (Q !== p) {
        b[0] = Q;
        l: for (var ml = 0, gl = b.length, o = gl >>> 1; ml < o; ) {
          var A = 2 * (ml + 1) - 1, D = b[A], H = A + 1, V = b[H];
          if (0 > U(D, Q)) H < gl && 0 > U(V, D) ? (b[ml] = V, b[H] = Q, ml = H) : (b[ml] = D, b[A] = Q, ml = A);
          else if (H < gl && 0 > U(V, Q)) b[ml] = V, b[H] = Q, ml = H;
          else break l;
        }
      }
      return p;
    }
    function U(b, p) {
      var Q = b.sortIndex - p.sortIndex;
      return Q !== 0 ? Q : b.id - p.id;
    }
    if (g.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var O = performance;
      g.unstable_now = function() {
        return O.now();
      };
    } else {
      var B = Date, Z = B.now();
      g.unstable_now = function() {
        return B.now() - Z;
      };
    }
    var _ = [], E = [], j = 1, q = null, il = 3, el = false, ol = false, nl = false, w = false, I = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, X = typeof setImmediate < "u" ? setImmediate : null;
    function x(b) {
      for (var p = R(E); p !== null; ) {
        if (p.callback === null) v(E);
        else if (p.startTime <= b) v(E), p.sortIndex = p.expirationTime, M(_, p);
        else break;
        p = R(E);
      }
    }
    function Dl(b) {
      if (nl = false, x(b), !ol) if (R(_) !== null) ol = true, Ul || (Ul = true, $l());
      else {
        var p = R(E);
        p !== null && _t(Dl, p.startTime - b);
      }
    }
    var Ul = false, W = -1, Wl = 5, Dt = -1;
    function Ju() {
      return w ? true : !(g.unstable_now() - Dt < Wl);
    }
    function Ut() {
      if (w = false, Ul) {
        var b = g.unstable_now();
        Dt = b;
        var p = true;
        try {
          l: {
            ol = false, nl && (nl = false, P(W), W = -1), el = true;
            var Q = il;
            try {
              t: {
                for (x(b), q = R(_); q !== null && !(q.expirationTime > b && Ju()); ) {
                  var ml = q.callback;
                  if (typeof ml == "function") {
                    q.callback = null, il = q.priorityLevel;
                    var gl = ml(q.expirationTime <= b);
                    if (b = g.unstable_now(), typeof gl == "function") {
                      q.callback = gl, x(b), p = true;
                      break t;
                    }
                    q === R(_) && v(_), x(b);
                  } else v(_);
                  q = R(_);
                }
                if (q !== null) p = true;
                else {
                  var o = R(E);
                  o !== null && _t(Dl, o.startTime - b), p = false;
                }
              }
              break l;
            } finally {
              q = null, il = Q, el = false;
            }
            p = void 0;
          }
        } finally {
          p ? $l() : Ul = false;
        }
      }
    }
    var $l;
    if (typeof X == "function") $l = function() {
      X(Ut);
    };
    else if (typeof MessageChannel < "u") {
      var Ou = new MessageChannel(), qt = Ou.port2;
      Ou.port1.onmessage = Ut, $l = function() {
        qt.postMessage(null);
      };
    } else $l = function() {
      I(Ut, 0);
    };
    function _t(b, p) {
      W = I(function() {
        b(g.unstable_now());
      }, p);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, g.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Wl = 0 < b ? Math.floor(1e3 / b) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return il;
    }, g.unstable_next = function(b) {
      switch (il) {
        case 1:
        case 2:
        case 3:
          var p = 3;
          break;
        default:
          p = il;
      }
      var Q = il;
      il = p;
      try {
        return b();
      } finally {
        il = Q;
      }
    }, g.unstable_requestPaint = function() {
      w = true;
    }, g.unstable_runWithPriority = function(b, p) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var Q = il;
      il = b;
      try {
        return p();
      } finally {
        il = Q;
      }
    }, g.unstable_scheduleCallback = function(b, p, Q) {
      var ml = g.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? ml + Q : ml) : Q = ml, b) {
        case 1:
          var gl = -1;
          break;
        case 2:
          gl = 250;
          break;
        case 5:
          gl = 1073741823;
          break;
        case 4:
          gl = 1e4;
          break;
        default:
          gl = 5e3;
      }
      return gl = Q + gl, b = { id: j++, callback: p, priorityLevel: b, startTime: Q, expirationTime: gl, sortIndex: -1 }, Q > ml ? (b.sortIndex = Q, M(E, b), R(_) === null && b === R(E) && (nl ? (P(W), W = -1) : nl = true, _t(Dl, Q - ml))) : (b.sortIndex = gl, M(_, b), ol || el || (ol = true, Ul || (Ul = true, $l()))), b;
    }, g.unstable_shouldYield = Ju, g.unstable_wrapCallback = function(b) {
      var p = il;
      return function() {
        var Q = il;
        il = p;
        try {
          return b.apply(this, arguments);
        } finally {
          il = Q;
        }
      };
    };
  })(gi)), gi;
}
var Uv;
function oh() {
  return Uv || (Uv = 1, Si.exports = sh()), Si.exports;
}
var bi = { exports: {} }, Ll = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Rv;
function vh() {
  if (Rv) return Ll;
  Rv = 1;
  var g = Ei();
  function M(_) {
    var E = "https://react.dev/errors/" + _;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++) E += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return "Minified React error #" + _ + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function R() {
  }
  var v = { d: { f: R, r: function() {
    throw Error(M(522));
  }, D: R, C: R, L: R, m: R, X: R, S: R, M: R }, p: 0, findDOMNode: null }, U = Symbol.for("react.portal");
  function O(_, E, j) {
    var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: U, key: q == null ? null : "" + q, children: _, containerInfo: E, implementation: j };
  }
  var B = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Z(_, E) {
    if (_ === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return Ll.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v, Ll.createPortal = function(_, E) {
    var j = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11) throw Error(M(299));
    return O(_, E, null, j);
  }, Ll.flushSync = function(_) {
    var E = B.T, j = v.p;
    try {
      if (B.T = null, v.p = 2, _) return _();
    } finally {
      B.T = E, v.p = j, v.d.f();
    }
  }, Ll.preconnect = function(_, E) {
    typeof _ == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, v.d.C(_, E));
  }, Ll.prefetchDNS = function(_) {
    typeof _ == "string" && v.d.D(_);
  }, Ll.preinit = function(_, E) {
    if (typeof _ == "string" && E && typeof E.as == "string") {
      var j = E.as, q = Z(j, E.crossOrigin), il = typeof E.integrity == "string" ? E.integrity : void 0, el = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      j === "style" ? v.d.S(_, typeof E.precedence == "string" ? E.precedence : void 0, { crossOrigin: q, integrity: il, fetchPriority: el }) : j === "script" && v.d.X(_, { crossOrigin: q, integrity: il, fetchPriority: el, nonce: typeof E.nonce == "string" ? E.nonce : void 0 });
    }
  }, Ll.preinitModule = function(_, E) {
    if (typeof _ == "string") if (typeof E == "object" && E !== null) {
      if (E.as == null || E.as === "script") {
        var j = Z(E.as, E.crossOrigin);
        v.d.M(_, { crossOrigin: j, integrity: typeof E.integrity == "string" ? E.integrity : void 0, nonce: typeof E.nonce == "string" ? E.nonce : void 0 });
      }
    } else E == null && v.d.M(_);
  }, Ll.preload = function(_, E) {
    if (typeof _ == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var j = E.as, q = Z(j, E.crossOrigin);
      v.d.L(_, j, { crossOrigin: q, integrity: typeof E.integrity == "string" ? E.integrity : void 0, nonce: typeof E.nonce == "string" ? E.nonce : void 0, type: typeof E.type == "string" ? E.type : void 0, fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0, referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0, imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0, imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0, media: typeof E.media == "string" ? E.media : void 0 });
    }
  }, Ll.preloadModule = function(_, E) {
    if (typeof _ == "string") if (E) {
      var j = Z(E.as, E.crossOrigin);
      v.d.m(_, { as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0, crossOrigin: j, integrity: typeof E.integrity == "string" ? E.integrity : void 0 });
    } else v.d.m(_);
  }, Ll.requestFormReset = function(_) {
    v.d.r(_);
  }, Ll.unstable_batchedUpdates = function(_, E) {
    return _(E);
  }, Ll.useFormState = function(_, E, j) {
    return B.H.useFormState(_, E, j);
  }, Ll.useFormStatus = function() {
    return B.H.useHostTransitionStatus();
  }, Ll.version = "19.2.0", Ll;
}
var Nv;
function yh() {
  if (Nv) return bi.exports;
  Nv = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
    } catch (M) {
      console.error(M);
    }
  }
  return g(), bi.exports = vh(), bi.exports;
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Hv;
function hh() {
  if (Hv) return pe;
  Hv = 1;
  var g = oh(), M = Ei(), R = yh();
  function v(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++) t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function U(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function O(l) {
    var t = l, u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (u = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function B(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Z(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function _(l) {
    if (O(l) !== l) throw Error(v(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (t = O(l), t === null) throw Error(v(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return _(e), l;
          if (n === a) return _(e), t;
          n = n.sibling;
        }
        throw Error(v(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = false, c = e.child; c; ) {
          if (c === u) {
            f = true, u = e, a = n;
            break;
          }
          if (c === a) {
            f = true, a = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = true, u = n, a = e;
              break;
            }
            if (c === a) {
              f = true, a = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(v(189));
        }
      }
      if (u.alternate !== a) throw Error(v(190));
    }
    if (u.tag !== 3) throw Error(v(188));
    return u.stateNode.current === u ? l : t;
  }
  function j(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = j(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var q = Object.assign, il = Symbol.for("react.element"), el = Symbol.for("react.transitional.element"), ol = Symbol.for("react.portal"), nl = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), X = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), Dl = Symbol.for("react.suspense"), Ul = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), Wl = Symbol.for("react.lazy"), Dt = Symbol.for("react.activity"), Ju = Symbol.for("react.memo_cache_sentinel"), Ut = Symbol.iterator;
  function $l(l) {
    return l === null || typeof l != "object" ? null : (l = Ut && l[Ut] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ou = Symbol.for("react.client.reference");
  function qt(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === Ou ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case nl:
        return "Fragment";
      case I:
        return "Profiler";
      case w:
        return "StrictMode";
      case Dl:
        return "Suspense";
      case Ul:
        return "SuspenseList";
      case Dt:
        return "Activity";
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case ol:
        return "Portal";
      case X:
        return l.displayName || "Context";
      case P:
        return (l._context.displayName || "Context") + ".Consumer";
      case x:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case W:
        return t = l.displayName || null, t !== null ? t : qt(l.type) || "Memo";
      case Wl:
        t = l._payload, l = l._init;
        try {
          return qt(l(t));
        } catch {
        }
    }
    return null;
  }
  var _t = Array.isArray, b = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = R.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = { pending: false, data: null, method: null, action: null }, ml = [], gl = -1;
  function o(l) {
    return { current: l };
  }
  function A(l) {
    0 > gl || (l.current = ml[gl], ml[gl] = null, gl--);
  }
  function D(l, t) {
    gl++, ml[gl] = l.current, l.current = t;
  }
  var H = o(null), V = o(null), $ = o(null), vl = o(null);
  function Vl(l, t) {
    switch (D($, t), D(V, l), D(H, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? wo(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI) t = wo(t), l = Wo(t, l);
        else switch (l) {
          case "svg":
            l = 1;
            break;
          case "math":
            l = 2;
            break;
          default:
            l = 0;
        }
    }
    A(H), D(H, l);
  }
  function Ml() {
    A(H), A(V), A($);
  }
  function Ca(l) {
    l.memoizedState !== null && D(vl, l);
    var t = H.current, u = Wo(t, l.type);
    t !== u && (D(V, l), D(H, u));
  }
  function De(l) {
    V.current === l && (A(H), A(V)), vl.current === l && (A(vl), ze._currentValue = Q);
  }
  var $n, zi;
  function pu(l) {
    if ($n === void 0) try {
      throw Error();
    } catch (u) {
      var t = u.stack.trim().match(/\n( *(at )?)/);
      $n = t && t[1] || "", zi = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + $n + l + zi;
  }
  var Fn = false;
  function kn(l, t) {
    if (!l || Fn) return "";
    Fn = true;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var z = function() {
              throw Error();
            };
            if (Object.defineProperty(z.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(z, []);
              } catch (r) {
                var d = r;
              }
              Reflect.construct(l, [], z);
            } else {
              try {
                z.call();
              } catch (r) {
                d = r;
              }
              l.call(z.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (r) {
              d = r;
            }
            (z = l()) && typeof z.catch == "function" && z.catch(function() {
            });
          }
        } catch (r) {
          if (r && d && typeof r.stack == "string") return [r.stack, d.stack];
        }
        return [null, null];
      } };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      e && e.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), m = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; e < m.length && !m[e].includes("DetermineComponentFrameRoot"); ) e++;
        if (a === i.length || e === m.length) for (a = i.length - 1, e = m.length - 1; 1 <= a && 0 <= e && i[a] !== m[e]; ) e--;
        for (; 1 <= a && 0 <= e; a--, e--) if (i[a] !== m[e]) {
          if (a !== 1 || e !== 1) do
            if (a--, e--, 0 > e || i[a] !== m[e]) {
              var S = `
` + i[a].replace(" at new ", " at ");
              return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
            }
          while (1 <= a && 0 <= e);
          break;
        }
      }
    } finally {
      Fn = false, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? pu(u) : "";
  }
  function Gv(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return pu(l.type);
      case 16:
        return pu("Lazy");
      case 13:
        return l.child !== t && t !== null ? pu("Suspense Fallback") : pu("Suspense");
      case 19:
        return pu("SuspenseList");
      case 0:
      case 15:
        return kn(l.type, false);
      case 11:
        return kn(l.type.render, false);
      case 1:
        return kn(l.type, true);
      case 31:
        return pu("Activity");
      default:
        return "";
    }
  }
  function Ai(l) {
    try {
      var t = "", u = null;
      do
        t += Gv(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var In = Object.prototype.hasOwnProperty, Pn = g.unstable_scheduleCallback, lf = g.unstable_cancelCallback, jv = g.unstable_shouldYield, Xv = g.unstable_requestPaint, at = g.unstable_now, Qv = g.unstable_getCurrentPriorityLevel, _i = g.unstable_ImmediatePriority, Mi = g.unstable_UserBlockingPriority, Ue = g.unstable_NormalPriority, Zv = g.unstable_LowPriority, Oi = g.unstable_IdlePriority, Lv = g.log, xv = g.unstable_setDisableYieldValue, qa = null, et = null;
  function tu(l) {
    if (typeof Lv == "function" && xv(l), et && typeof et.setStrictMode == "function") try {
      et.setStrictMode(qa, l);
    } catch {
    }
  }
  var nt = Math.clz32 ? Math.clz32 : Jv, Vv = Math.log, Kv = Math.LN2;
  function Jv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Vv(l) / Kv | 0) | 0;
  }
  var Re = 256, Ne = 262144, He = 4194304;
  function Du(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ce(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = Du(a) : (f &= c, f !== 0 ? e = Du(f) : u || (u = c & ~l, u !== 0 && (e = Du(u))))) : (c = a & ~n, c !== 0 ? e = Du(c) : f !== 0 ? e = Du(f) : u || (u = a & ~l, u !== 0 && (e = Du(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Ba(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function wv(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function pi() {
    var l = He;
    return He <<= 1, (He & 62914560) === 0 && (He = 4194304), l;
  }
  function tf(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Ya(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Wv(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, m = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var S = 31 - nt(u), z = 1 << S;
      c[S] = 0, i[S] = -1;
      var d = m[S];
      if (d !== null) for (m[S] = null, S = 0; S < d.length; S++) {
        var r = d[S];
        r !== null && (r.lane &= -536870913);
      }
      u &= ~z;
    }
    a !== 0 && Di(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function Di(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - nt(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function Ui(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - nt(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Ri(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : uf(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function uf(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function af(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ni() {
    var l = p.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Sv(l.type));
  }
  function Hi(l, t) {
    var u = p.p;
    try {
      return p.p = l, t();
    } finally {
      p.p = u;
    }
  }
  var uu = Math.random().toString(36).slice(2), Gl = "__reactFiber$" + uu, Fl = "__reactProps$" + uu, wu = "__reactContainer$" + uu, ef = "__reactEvents$" + uu, $v = "__reactListeners$" + uu, Fv = "__reactHandles$" + uu, Ci = "__reactResources$" + uu, Ga = "__reactMarker$" + uu;
  function nf(l) {
    delete l[Gl], delete l[Fl], delete l[ef], delete l[$v], delete l[Fv];
  }
  function Wu(l) {
    var t = l[Gl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[wu] || u[Gl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null) for (l = tv(l); l !== null; ) {
          if (u = l[Gl]) return u;
          l = tv(l);
        }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function $u(l) {
    if (l = l[Gl] || l[wu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function ja(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(v(33));
  }
  function Fu(l) {
    var t = l[Ci];
    return t || (t = l[Ci] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Bl(l) {
    l[Ga] = true;
  }
  var qi = /* @__PURE__ */ new Set(), Bi = {};
  function Uu(l, t) {
    ku(l, t), ku(l + "Capture", t);
  }
  function ku(l, t) {
    for (Bi[l] = t, l = 0; l < t.length; l++) qi.add(t[l]);
  }
  var kv = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Yi = {}, Gi = {};
  function Iv(l) {
    return In.call(Gi, l) ? true : In.call(Yi, l) ? false : kv.test(l) ? Gi[l] = true : (Yi[l] = true, false);
  }
  function qe(l, t, u) {
    if (Iv(t)) if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
          l.removeAttribute(t);
          return;
        case "boolean":
          var a = t.toLowerCase().slice(0, 5);
          if (a !== "data-" && a !== "aria-") {
            l.removeAttribute(t);
            return;
          }
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Be(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Bt(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  function mt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function ji(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Pv(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, n = a.set;
      return Object.defineProperty(l, t, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(f) {
        u = "" + f, n.call(this, f);
      } }), Object.defineProperty(l, t, { enumerable: a.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(f) {
        u = "" + f;
      }, stopTracking: function() {
        l._valueTracker = null, delete l[t];
      } };
    }
  }
  function ff(l) {
    if (!l._valueTracker) {
      var t = ji(l) ? "checked" : "value";
      l._valueTracker = Pv(l, t, "" + l[t]);
    }
  }
  function Xi(l) {
    if (!l) return false;
    var t = l._valueTracker;
    if (!t) return true;
    var u = t.getValue(), a = "";
    return l && (a = ji(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), true) : false;
  }
  function Ye(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var ly = /[\n"\\]/g;
  function dt(l) {
    return l.replace(ly, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function cf(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + mt(t)) : l.value !== "" + mt(t) && (l.value = "" + mt(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? sf(l, f, mt(t)) : u != null ? sf(l, f, mt(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + mt(c) : l.removeAttribute("name");
  }
  function Qi(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        ff(l);
        return;
      }
      u = u != null ? "" + mt(u) : "", t = t != null ? "" + mt(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), ff(l);
  }
  function sf(l, t, u) {
    t === "number" && Ye(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Iu(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++) t["$" + u[e]] = true;
      for (u = 0; u < l.length; u++) e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = true);
    } else {
      for (u = "" + mt(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = true, a && (l[e].defaultSelected = true);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Zi(l, t, u) {
    if (t != null && (t = "" + mt(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + mt(u) : "";
  }
  function Li(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(v(92));
        if (_t(a)) {
          if (1 < a.length) throw Error(v(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = mt(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), ff(l);
  }
  function Pu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var ty = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function xi(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || ty.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Vi(l, t, u) {
    if (t != null && typeof t != "object") throw Error(v(62));
    if (l = l.style, u != null) {
      for (var a in u) !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t) a = t[e], t.hasOwnProperty(e) && u[e] !== a && xi(l, e, a);
    } else for (var n in t) t.hasOwnProperty(n) && xi(l, n, t[n]);
  }
  function of(l) {
    if (l.indexOf("-") === -1) return false;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var uy = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), ay = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ge(l) {
    return ay.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Yt() {
  }
  var vf = null;
  function yf(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var la = null, ta = null;
  function Ki(l) {
    var t = $u(l);
    if (t && (l = t.stateNode)) {
      var u = l[Fl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (cf(l, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll('input[name="' + dt("" + t) + '"][type="radio"]'), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Fl] || null;
                if (!e) throw Error(v(90));
                cf(a, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name);
              }
            }
            for (t = 0; t < u.length; t++) a = u[t], a.form === l.form && Xi(a);
          }
          break l;
        case "textarea":
          Zi(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && Iu(l, !!u.multiple, t, false);
      }
    }
  }
  var hf = false;
  function Ji(l, t, u) {
    if (hf) return l(t, u);
    hf = true;
    try {
      var a = l(t);
      return a;
    } finally {
      if (hf = false, (la !== null || ta !== null) && (Mn(), la && (t = la, l = ta, ta = la = null, Ki(t), l))) for (t = 0; t < l.length; t++) Ki(l[t]);
    }
  }
  function Xa(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Fl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = false;
    }
    if (l) return null;
    if (u && typeof u != "function") throw Error(v(231, t, typeof u));
    return u;
  }
  var Gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), mf = false;
  if (Gt) try {
    var Qa = {};
    Object.defineProperty(Qa, "passive", { get: function() {
      mf = true;
    } }), window.addEventListener("test", Qa, Qa), window.removeEventListener("test", Qa, Qa);
  } catch {
    mf = false;
  }
  var au = null, df = null, je = null;
  function wi() {
    if (je) return je;
    var l, t = df, u = t.length, a, e = "value" in au ? au.value : au.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return je = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Xe(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Qe() {
    return true;
  }
  function Wi() {
    return false;
  }
  function kl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l) l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? Qe : Wi, this.isPropagationStopped = Wi, this;
    }
    return q(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = false), this.isDefaultPrevented = Qe);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = true), this.isPropagationStopped = Qe);
    }, persist: function() {
    }, isPersistent: Qe }), t;
  }
  var Ru = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(l) {
    return l.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ze = kl(Ru), Za = q({}, Ru, { view: 0, detail: 0 }), ey = kl(Za), rf, Sf, La, Le = q({}, Za, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: bf, button: 0, buttons: 0, relatedTarget: function(l) {
    return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
  }, movementX: function(l) {
    return "movementX" in l ? l.movementX : (l !== La && (La && l.type === "mousemove" ? (rf = l.screenX - La.screenX, Sf = l.screenY - La.screenY) : Sf = rf = 0, La = l), rf);
  }, movementY: function(l) {
    return "movementY" in l ? l.movementY : Sf;
  } }), $i = kl(Le), ny = q({}, Le, { dataTransfer: 0 }), fy = kl(ny), cy = q({}, Za, { relatedTarget: 0 }), gf = kl(cy), iy = q({}, Ru, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sy = kl(iy), oy = q({}, Ru, { clipboardData: function(l) {
    return "clipboardData" in l ? l.clipboardData : window.clipboardData;
  } }), vy = kl(oy), yy = q({}, Ru, { data: 0 }), Fi = kl(yy), hy = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, my = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, dy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ry(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = dy[l]) ? !!t[l] : false;
  }
  function bf() {
    return ry;
  }
  var Sy = q({}, Za, { key: function(l) {
    if (l.key) {
      var t = hy[l.key] || l.key;
      if (t !== "Unidentified") return t;
    }
    return l.type === "keypress" ? (l = Xe(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? my[l.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: bf, charCode: function(l) {
    return l.type === "keypress" ? Xe(l) : 0;
  }, keyCode: function(l) {
    return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  }, which: function(l) {
    return l.type === "keypress" ? Xe(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  } }), gy = kl(Sy), by = q({}, Le, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ki = kl(by), Ey = q({}, Za, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: bf }), Ty = kl(Ey), zy = q({}, Ru, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ay = kl(zy), _y = q({}, Le, { deltaX: function(l) {
    return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
  }, deltaY: function(l) {
    return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), My = kl(_y), Oy = q({}, Ru, { newState: 0, oldState: 0 }), py = kl(Oy), Dy = [9, 13, 27, 32], Ef = Gt && "CompositionEvent" in window, xa = null;
  Gt && "documentMode" in document && (xa = document.documentMode);
  var Uy = Gt && "TextEvent" in window && !xa, Ii = Gt && (!Ef || xa && 8 < xa && 11 >= xa), Pi = " ", ls = false;
  function ts(l, t) {
    switch (l) {
      case "keyup":
        return Dy.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function us(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ua = false;
  function Ry(l, t) {
    switch (l) {
      case "compositionend":
        return us(t);
      case "keypress":
        return t.which !== 32 ? null : (ls = true, Pi);
      case "textInput":
        return l = t.data, l === Pi && ls ? null : l;
      default:
        return null;
    }
  }
  function Ny(l, t) {
    if (ua) return l === "compositionend" || !Ef && ts(l, t) ? (l = wi(), je = df = au = null, ua = false, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ii && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Hy = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function as(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Hy[l.type] : t === "textarea";
  }
  function es(l, t, u, a) {
    la ? ta ? ta.push(a) : ta = [a] : la = a, t = Hn(t, "onChange"), 0 < t.length && (u = new Ze("onChange", "change", null, u, a), l.push({ event: u, listeners: t }));
  }
  var Va = null, Ka = null;
  function Cy(l) {
    Zo(l, 0);
  }
  function xe(l) {
    var t = ja(l);
    if (Xi(t)) return l;
  }
  function ns(l, t) {
    if (l === "change") return t;
  }
  var fs = false;
  if (Gt) {
    var Tf;
    if (Gt) {
      var zf = "oninput" in document;
      if (!zf) {
        var cs = document.createElement("div");
        cs.setAttribute("oninput", "return;"), zf = typeof cs.oninput == "function";
      }
      Tf = zf;
    } else Tf = false;
    fs = Tf && (!document.documentMode || 9 < document.documentMode);
  }
  function is() {
    Va && (Va.detachEvent("onpropertychange", ss), Ka = Va = null);
  }
  function ss(l) {
    if (l.propertyName === "value" && xe(Ka)) {
      var t = [];
      es(t, Ka, l, yf(l)), Ji(Cy, t);
    }
  }
  function qy(l, t, u) {
    l === "focusin" ? (is(), Va = t, Ka = u, Va.attachEvent("onpropertychange", ss)) : l === "focusout" && is();
  }
  function By(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return xe(Ka);
  }
  function Yy(l, t) {
    if (l === "click") return xe(t);
  }
  function Gy(l, t) {
    if (l === "input" || l === "change") return xe(t);
  }
  function jy(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var ft = typeof Object.is == "function" ? Object.is : jy;
  function Ja(l, t) {
    if (ft(l, t)) return true;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return false;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return false;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!In.call(t, e) || !ft(l[e], t[e])) return false;
    }
    return true;
  }
  function os(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function vs(l, t) {
    var u = os(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t) return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = os(u);
    }
  }
  function ys(l, t) {
    return l && t ? l === t ? true : l && l.nodeType === 3 ? false : t && t.nodeType === 3 ? ys(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : false : false;
  }
  function hs(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Ye(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = false;
      }
      if (u) l = t.contentWindow;
      else break;
      t = Ye(l.document);
    }
    return t;
  }
  function Af(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Xy = Gt && "documentMode" in document && 11 >= document.documentMode, aa = null, _f = null, wa = null, Mf = false;
  function ms(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Mf || aa == null || aa !== Ye(a) || (a = aa, "selectionStart" in a && Af(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), wa && Ja(wa, a) || (wa = a, a = Hn(_f, "onSelect"), 0 < a.length && (t = new Ze("onSelect", "select", null, t, u), l.push({ event: t, listeners: a }), t.target = aa)));
  }
  function Nu(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var ea = { animationend: Nu("Animation", "AnimationEnd"), animationiteration: Nu("Animation", "AnimationIteration"), animationstart: Nu("Animation", "AnimationStart"), transitionrun: Nu("Transition", "TransitionRun"), transitionstart: Nu("Transition", "TransitionStart"), transitioncancel: Nu("Transition", "TransitionCancel"), transitionend: Nu("Transition", "TransitionEnd") }, Of = {}, ds = {};
  Gt && (ds = document.createElement("div").style, "AnimationEvent" in window || (delete ea.animationend.animation, delete ea.animationiteration.animation, delete ea.animationstart.animation), "TransitionEvent" in window || delete ea.transitionend.transition);
  function Hu(l) {
    if (Of[l]) return Of[l];
    if (!ea[l]) return l;
    var t = ea[l], u;
    for (u in t) if (t.hasOwnProperty(u) && u in ds) return Of[l] = t[u];
    return l;
  }
  var rs = Hu("animationend"), Ss = Hu("animationiteration"), gs = Hu("animationstart"), Qy = Hu("transitionrun"), Zy = Hu("transitionstart"), Ly = Hu("transitioncancel"), bs = Hu("transitionend"), Es = /* @__PURE__ */ new Map(), pf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  pf.push("scrollEnd");
  function Mt(l, t) {
    Es.set(l, t), Uu(t, [l]);
  }
  var Ve = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l), error: l });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, rt = [], na = 0, Df = 0;
  function Ke() {
    for (var l = na, t = Df = na = 0; t < l; ) {
      var u = rt[t];
      rt[t++] = null;
      var a = rt[t];
      rt[t++] = null;
      var e = rt[t];
      rt[t++] = null;
      var n = rt[t];
      if (rt[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && Ts(u, e, n);
    }
  }
  function Je(l, t, u, a) {
    rt[na++] = l, rt[na++] = t, rt[na++] = u, rt[na++] = a, Df |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Uf(l, t, u, a) {
    return Je(l, t, u, a), we(l);
  }
  function Cu(l, t) {
    return Je(l, null, null, t), we(l);
  }
  function Ts(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = false, n = l.return; n !== null; ) n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = true)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - nt(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function we(l) {
    if (50 < de) throw de = 0, jc = null, Error(v(185));
    for (var t = l.return; t !== null; ) l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var fa = {};
  function xy(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ct(l, t, u, a) {
    return new xy(l, t, u, a);
  }
  function Rf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function jt(l, t) {
    var u = l.alternate;
    return u === null ? (u = ct(l.tag, t, l.key, l.mode), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function zs(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), l;
  }
  function We(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") Rf(l) && (f = 1);
    else if (typeof l == "string") f = W1(l, u, H.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (l) {
      case Dt:
        return l = ct(31, u, t, e), l.elementType = Dt, l.lanes = n, l;
      case nl:
        return qu(u.children, e, n, t);
      case w:
        f = 8, e |= 24;
        break;
      case I:
        return l = ct(12, u, t, e | 2), l.elementType = I, l.lanes = n, l;
      case Dl:
        return l = ct(13, u, t, e), l.elementType = Dl, l.lanes = n, l;
      case Ul:
        return l = ct(19, u, t, e), l.elementType = Ul, l.lanes = n, l;
      default:
        if (typeof l == "object" && l !== null) switch (l.$$typeof) {
          case X:
            f = 10;
            break l;
          case P:
            f = 9;
            break l;
          case x:
            f = 11;
            break l;
          case W:
            f = 14;
            break l;
          case Wl:
            f = 16, a = null;
            break l;
        }
        f = 29, u = Error(v(130, l === null ? "null" : typeof l, "")), a = null;
    }
    return t = ct(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function qu(l, t, u, a) {
    return l = ct(7, l, a, t), l.lanes = u, l;
  }
  function Nf(l, t, u) {
    return l = ct(6, l, null, t), l.lanes = u, l;
  }
  function As(l) {
    var t = ct(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Hf(l, t, u) {
    return t = ct(4, l.children !== null ? l.children : [], l.key, t), t.lanes = u, t.stateNode = { containerInfo: l.containerInfo, pendingChildren: null, implementation: l.implementation }, t;
  }
  var _s = /* @__PURE__ */ new WeakMap();
  function St(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = _s.get(l);
      return u !== void 0 ? u : (t = { value: l, source: t, stack: Ai(t) }, _s.set(l, t), t);
    }
    return { value: l, source: t, stack: Ai(t) };
  }
  var ca = [], ia = 0, $e = null, Wa = 0, gt = [], bt = 0, eu = null, Rt = 1, Nt = "";
  function Xt(l, t) {
    ca[ia++] = Wa, ca[ia++] = $e, $e = l, Wa = t;
  }
  function Ms(l, t, u) {
    gt[bt++] = Rt, gt[bt++] = Nt, gt[bt++] = eu, eu = l;
    var a = Rt;
    l = Nt;
    var e = 32 - nt(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - nt(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, Rt = 1 << 32 - nt(t) + e | u << e | a, Nt = n + l;
    } else Rt = 1 << n | u << e | a, Nt = l;
  }
  function Cf(l) {
    l.return !== null && (Xt(l, 1), Ms(l, 1, 0));
  }
  function qf(l) {
    for (; l === $e; ) $e = ca[--ia], ca[ia] = null, Wa = ca[--ia], ca[ia] = null;
    for (; l === eu; ) eu = gt[--bt], gt[bt] = null, Nt = gt[--bt], gt[bt] = null, Rt = gt[--bt], gt[bt] = null;
  }
  function Os(l, t) {
    gt[bt++] = Rt, gt[bt++] = Nt, gt[bt++] = eu, Rt = t.id, Nt = t.overflow, eu = l;
  }
  var jl = null, El = null, ul = false, nu = null, Et = false, Bf = Error(v(519));
  function fu(l) {
    var t = Error(v(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw $a(St(t, l)), Bf;
  }
  function ps(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Gl] = l, t[Fl] = a, u) {
      case "dialog":
        k("cancel", t), k("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        k("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Se.length; u++) k(Se[u], t);
        break;
      case "source":
        k("error", t);
        break;
      case "img":
      case "image":
      case "link":
        k("error", t), k("load", t);
        break;
      case "details":
        k("toggle", t);
        break;
      case "input":
        k("invalid", t), Qi(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
        break;
      case "select":
        k("invalid", t);
        break;
      case "textarea":
        k("invalid", t), Li(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === true || Ko(t.textContent, u) ? (a.popover != null && (k("beforetoggle", t), k("toggle", t)), a.onScroll != null && k("scroll", t), a.onScrollEnd != null && k("scrollend", t), a.onClick != null && (t.onclick = Yt), t = true) : t = false, t || fu(l, true);
  }
  function Ds(l) {
    for (jl = l.return; jl; ) switch (jl.tag) {
      case 5:
      case 31:
      case 13:
        Et = false;
        return;
      case 27:
      case 3:
        Et = true;
        return;
      default:
        jl = jl.return;
    }
  }
  function sa(l) {
    if (l !== jl) return false;
    if (!ul) return Ds(l), ul = true, false;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Pc(l.type, l.memoizedProps)), u = !u), u && El && fu(l), Ds(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(v(317));
      El = lv(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(v(317));
      El = lv(l);
    } else t === 27 ? (t = El, Eu(l.type) ? (l = ei, ei = null, El = l) : El = t) : El = jl ? zt(l.stateNode.nextSibling) : null;
    return true;
  }
  function Bu() {
    El = jl = null, ul = false;
  }
  function Yf() {
    var l = nu;
    return l !== null && (tt === null ? tt = l : tt.push.apply(tt, l), nu = null), l;
  }
  function $a(l) {
    nu === null ? nu = [l] : nu.push(l);
  }
  var Gf = o(null), Yu = null, Qt = null;
  function cu(l, t, u) {
    D(Gf, t._currentValue), t._currentValue = u;
  }
  function Zt(l) {
    l._currentValue = Gf.current, A(Gf);
  }
  function jf(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Xf(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++) if (c.context === t[i]) {
            n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), jf(n.return, u, l), a || (f = null);
            break l;
          }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(v(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), jf(f, u, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else for (f = e; f !== null; ) {
        if (f === l) {
          f = null;
          break;
        }
        if (e = f.sibling, e !== null) {
          e.return = f.return, f = e;
          break;
        }
        f = f.return;
      }
      e = f;
    }
  }
  function oa(l, t, u, a) {
    l = null;
    for (var e = t, n = false; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = true;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(v(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          ft(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === vl.current) {
        if (f = e.alternate, f === null) throw Error(v(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(ze) : l = [ze]);
      }
      e = e.return;
    }
    l !== null && Xf(t, l, u, a), t.flags |= 262144;
  }
  function Fe(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ft(l.context._currentValue, l.memoizedValue)) return true;
      l = l.next;
    }
    return false;
  }
  function Gu(l) {
    Yu = l, Qt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Xl(l) {
    return Us(Yu, l);
  }
  function ke(l, t) {
    return Yu === null && Gu(l), Us(l, t);
  }
  function Us(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Qt === null) {
      if (l === null) throw Error(v(308));
      Qt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Qt = Qt.next = t;
    return u;
  }
  var Vy = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = { aborted: false, addEventListener: function(u, a) {
      l.push(a);
    } };
    this.abort = function() {
      t.aborted = true, l.forEach(function(u) {
        return u();
      });
    };
  }, Ky = g.unstable_scheduleCallback, Jy = g.unstable_NormalPriority, Rl = { $$typeof: X, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Qf() {
    return { controller: new Vy(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Fa(l) {
    l.refCount--, l.refCount === 0 && Ky(Jy, function() {
      l.controller.abort();
    });
  }
  var ka = null, Zf = 0, va = 0, ya = null;
  function wy(l, t) {
    if (ka === null) {
      var u = ka = [];
      Zf = 0, va = Vc(), ya = { status: "pending", value: void 0, then: function(a) {
        u.push(a);
      } };
    }
    return Zf++, t.then(Rs, Rs), t;
  }
  function Rs() {
    if (--Zf === 0 && ka !== null) {
      ya !== null && (ya.status = "fulfilled");
      var l = ka;
      ka = null, va = 0, ya = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Wy(l, t) {
    var u = [], a = { status: "pending", value: null, reason: null, then: function(e) {
      u.push(e);
    } };
    return l.then(function() {
      a.status = "fulfilled", a.value = t;
      for (var e = 0; e < u.length; e++) (0, u[e])(t);
    }, function(e) {
      for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++) (0, u[e])(void 0);
    }), a;
  }
  var Ns = b.S;
  b.S = function(l, t) {
    mo = at(), typeof t == "object" && t !== null && typeof t.then == "function" && wy(l, t), Ns !== null && Ns(l, t);
  };
  var ju = o(null);
  function Lf() {
    var l = ju.current;
    return l !== null ? l : bl.pooledCache;
  }
  function Ie(l, t) {
    t === null ? D(ju, ju.current) : D(ju, t.pool);
  }
  function Hs() {
    var l = Lf();
    return l === null ? null : { parent: Rl._currentValue, pool: l };
  }
  var ha = Error(v(460)), xf = Error(v(474)), Pe = Error(v(542)), ln = { then: function() {
  } };
  function Cs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function qs(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Yt, Yt), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Ys(l), l;
      default:
        if (typeof t.status == "string") t.then(Yt, Yt);
        else {
          if (l = bl, l !== null && 100 < l.shellSuspendCounter) throw Error(v(482));
          l = t, l.status = "pending", l.then(function(a) {
            if (t.status === "pending") {
              var e = t;
              e.status = "fulfilled", e.value = a;
            }
          }, function(a) {
            if (t.status === "pending") {
              var e = t;
              e.status = "rejected", e.reason = a;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Ys(l), l;
        }
        throw Qu = t, ha;
    }
  }
  function Xu(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Qu = u, ha) : u;
    }
  }
  var Qu = null;
  function Bs() {
    if (Qu === null) throw Error(v(459));
    var l = Qu;
    return Qu = null, l;
  }
  function Ys(l) {
    if (l === ha || l === Pe) throw Error(v(483));
  }
  var ma = null, Ia = 0;
  function tn(l) {
    var t = Ia;
    return Ia += 1, ma === null && (ma = []), qs(ma, l, t);
  }
  function Pa(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function un(l, t) {
    throw t.$$typeof === il ? Error(v(525)) : (l = Object.prototype.toString.call(t), Error(v(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
  }
  function Gs(l) {
    function t(y, s) {
      if (l) {
        var h = y.deletions;
        h === null ? (y.deletions = [s], y.flags |= 16) : h.push(s);
      }
    }
    function u(y, s) {
      if (!l) return null;
      for (; s !== null; ) t(y, s), s = s.sibling;
      return null;
    }
    function a(y) {
      for (var s = /* @__PURE__ */ new Map(); y !== null; ) y.key !== null ? s.set(y.key, y) : s.set(y.index, y), y = y.sibling;
      return s;
    }
    function e(y, s) {
      return y = jt(y, s), y.index = 0, y.sibling = null, y;
    }
    function n(y, s, h) {
      return y.index = h, l ? (h = y.alternate, h !== null ? (h = h.index, h < s ? (y.flags |= 67108866, s) : h) : (y.flags |= 67108866, s)) : (y.flags |= 1048576, s);
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 67108866), y;
    }
    function c(y, s, h, T) {
      return s === null || s.tag !== 6 ? (s = Nf(h, y.mode, T), s.return = y, s) : (s = e(s, h), s.return = y, s);
    }
    function i(y, s, h, T) {
      var Y = h.type;
      return Y === nl ? S(y, s, h.props.children, T, h.key) : s !== null && (s.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Wl && Xu(Y) === s.type) ? (s = e(s, h.props), Pa(s, h), s.return = y, s) : (s = We(h.type, h.key, h.props, null, y.mode, T), Pa(s, h), s.return = y, s);
    }
    function m(y, s, h, T) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== h.containerInfo || s.stateNode.implementation !== h.implementation ? (s = Hf(h, y.mode, T), s.return = y, s) : (s = e(s, h.children || []), s.return = y, s);
    }
    function S(y, s, h, T, Y) {
      return s === null || s.tag !== 7 ? (s = qu(h, y.mode, T, Y), s.return = y, s) : (s = e(s, h), s.return = y, s);
    }
    function z(y, s, h) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint") return s = Nf("" + s, y.mode, h), s.return = y, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case el:
            return h = We(s.type, s.key, s.props, null, y.mode, h), Pa(h, s), h.return = y, h;
          case ol:
            return s = Hf(s, y.mode, h), s.return = y, s;
          case Wl:
            return s = Xu(s), z(y, s, h);
        }
        if (_t(s) || $l(s)) return s = qu(s, y.mode, h, null), s.return = y, s;
        if (typeof s.then == "function") return z(y, tn(s), h);
        if (s.$$typeof === X) return z(y, ke(y, s), h);
        un(y, s);
      }
      return null;
    }
    function d(y, s, h, T) {
      var Y = s !== null ? s.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return Y !== null ? null : c(y, s, "" + h, T);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case el:
            return h.key === Y ? i(y, s, h, T) : null;
          case ol:
            return h.key === Y ? m(y, s, h, T) : null;
          case Wl:
            return h = Xu(h), d(y, s, h, T);
        }
        if (_t(h) || $l(h)) return Y !== null ? null : S(y, s, h, T, null);
        if (typeof h.then == "function") return d(y, s, tn(h), T);
        if (h.$$typeof === X) return d(y, s, ke(y, h), T);
        un(y, h);
      }
      return null;
    }
    function r(y, s, h, T, Y) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return y = y.get(h) || null, c(s, y, "" + T, Y);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case el:
            return y = y.get(T.key === null ? h : T.key) || null, i(s, y, T, Y);
          case ol:
            return y = y.get(T.key === null ? h : T.key) || null, m(s, y, T, Y);
          case Wl:
            return T = Xu(T), r(y, s, h, T, Y);
        }
        if (_t(T) || $l(T)) return y = y.get(h) || null, S(s, y, T, Y, null);
        if (typeof T.then == "function") return r(y, s, h, tn(T), Y);
        if (T.$$typeof === X) return r(y, s, h, ke(s, T), Y);
        un(s, T);
      }
      return null;
    }
    function N(y, s, h, T) {
      for (var Y = null, fl = null, C = s, J = s = 0, tl = null; C !== null && J < h.length; J++) {
        C.index > J ? (tl = C, C = null) : tl = C.sibling;
        var cl = d(y, C, h[J], T);
        if (cl === null) {
          C === null && (C = tl);
          break;
        }
        l && C && cl.alternate === null && t(y, C), s = n(cl, s, J), fl === null ? Y = cl : fl.sibling = cl, fl = cl, C = tl;
      }
      if (J === h.length) return u(y, C), ul && Xt(y, J), Y;
      if (C === null) {
        for (; J < h.length; J++) C = z(y, h[J], T), C !== null && (s = n(C, s, J), fl === null ? Y = C : fl.sibling = C, fl = C);
        return ul && Xt(y, J), Y;
      }
      for (C = a(C); J < h.length; J++) tl = r(C, y, J, h[J], T), tl !== null && (l && tl.alternate !== null && C.delete(tl.key === null ? J : tl.key), s = n(tl, s, J), fl === null ? Y = tl : fl.sibling = tl, fl = tl);
      return l && C.forEach(function(Mu) {
        return t(y, Mu);
      }), ul && Xt(y, J), Y;
    }
    function G(y, s, h, T) {
      if (h == null) throw Error(v(151));
      for (var Y = null, fl = null, C = s, J = s = 0, tl = null, cl = h.next(); C !== null && !cl.done; J++, cl = h.next()) {
        C.index > J ? (tl = C, C = null) : tl = C.sibling;
        var Mu = d(y, C, cl.value, T);
        if (Mu === null) {
          C === null && (C = tl);
          break;
        }
        l && C && Mu.alternate === null && t(y, C), s = n(Mu, s, J), fl === null ? Y = Mu : fl.sibling = Mu, fl = Mu, C = tl;
      }
      if (cl.done) return u(y, C), ul && Xt(y, J), Y;
      if (C === null) {
        for (; !cl.done; J++, cl = h.next()) cl = z(y, cl.value, T), cl !== null && (s = n(cl, s, J), fl === null ? Y = cl : fl.sibling = cl, fl = cl);
        return ul && Xt(y, J), Y;
      }
      for (C = a(C); !cl.done; J++, cl = h.next()) cl = r(C, y, J, cl.value, T), cl !== null && (l && cl.alternate !== null && C.delete(cl.key === null ? J : cl.key), s = n(cl, s, J), fl === null ? Y = cl : fl.sibling = cl, fl = cl);
      return l && C.forEach(function(nh) {
        return t(y, nh);
      }), ul && Xt(y, J), Y;
    }
    function Sl(y, s, h, T) {
      if (typeof h == "object" && h !== null && h.type === nl && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case el:
            l: {
              for (var Y = h.key; s !== null; ) {
                if (s.key === Y) {
                  if (Y = h.type, Y === nl) {
                    if (s.tag === 7) {
                      u(y, s.sibling), T = e(s, h.props.children), T.return = y, y = T;
                      break l;
                    }
                  } else if (s.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Wl && Xu(Y) === s.type) {
                    u(y, s.sibling), T = e(s, h.props), Pa(T, h), T.return = y, y = T;
                    break l;
                  }
                  u(y, s);
                  break;
                } else t(y, s);
                s = s.sibling;
              }
              h.type === nl ? (T = qu(h.props.children, y.mode, T, h.key), T.return = y, y = T) : (T = We(h.type, h.key, h.props, null, y.mode, T), Pa(T, h), T.return = y, y = T);
            }
            return f(y);
          case ol:
            l: {
              for (Y = h.key; s !== null; ) {
                if (s.key === Y) if (s.tag === 4 && s.stateNode.containerInfo === h.containerInfo && s.stateNode.implementation === h.implementation) {
                  u(y, s.sibling), T = e(s, h.children || []), T.return = y, y = T;
                  break l;
                } else {
                  u(y, s);
                  break;
                }
                else t(y, s);
                s = s.sibling;
              }
              T = Hf(h, y.mode, T), T.return = y, y = T;
            }
            return f(y);
          case Wl:
            return h = Xu(h), Sl(y, s, h, T);
        }
        if (_t(h)) return N(y, s, h, T);
        if ($l(h)) {
          if (Y = $l(h), typeof Y != "function") throw Error(v(150));
          return h = Y.call(h), G(y, s, h, T);
        }
        if (typeof h.then == "function") return Sl(y, s, tn(h), T);
        if (h.$$typeof === X) return Sl(y, s, ke(y, h), T);
        un(y, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, s !== null && s.tag === 6 ? (u(y, s.sibling), T = e(s, h), T.return = y, y = T) : (u(y, s), T = Nf(h, y.mode, T), T.return = y, y = T), f(y)) : u(y, s);
    }
    return function(y, s, h, T) {
      try {
        Ia = 0;
        var Y = Sl(y, s, h, T);
        return ma = null, Y;
      } catch (C) {
        if (C === ha || C === Pe) throw C;
        var fl = ct(29, C, null, y.mode);
        return fl.lanes = T, fl.return = y, fl;
      } finally {
      }
    };
  }
  var Zu = Gs(true), js = Gs(false), iu = false;
  function Vf(l) {
    l.updateQueue = { baseState: l.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Kf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = { baseState: l.baseState, firstBaseUpdate: l.firstBaseUpdate, lastBaseUpdate: l.lastBaseUpdate, shared: l.shared, callbacks: null });
  }
  function su(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ou(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (sl & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = we(l), Ts(l, null, u), t;
    }
    return Je(l, a, t, u), we(l);
  }
  function le(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Ui(l, u);
    }
  }
  function Jf(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = { lane: u.lane, tag: u.tag, payload: u.payload, callback: null, next: null };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = { baseState: a.baseState, firstBaseUpdate: e, lastBaseUpdate: n, shared: a.shared, callbacks: a.callbacks }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var wf = false;
  function te() {
    if (wf) {
      var l = ya;
      if (l !== null) throw l;
    }
  }
  function ue(l, t, u, a) {
    wf = false;
    var e = l.updateQueue;
    iu = false;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, m = i.next;
      i.next = null, f === null ? n = m : f.next = m, f = i;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== f && (c === null ? S.firstBaseUpdate = m : c.next = m, S.lastBaseUpdate = i));
    }
    if (n !== null) {
      var z = e.baseState;
      f = 0, S = m = i = null, c = n;
      do {
        var d = c.lane & -536870913, r = d !== c.lane;
        if (r ? (ll & d) === d : (a & d) === d) {
          d !== 0 && d === va && (wf = true), S !== null && (S = S.next = { lane: 0, tag: c.tag, payload: c.payload, callback: null, next: null });
          l: {
            var N = l, G = c;
            d = t;
            var Sl = u;
            switch (G.tag) {
              case 1:
                if (N = G.payload, typeof N == "function") {
                  z = N.call(Sl, z, d);
                  break l;
                }
                z = N;
                break l;
              case 3:
                N.flags = N.flags & -65537 | 128;
              case 0:
                if (N = G.payload, d = typeof N == "function" ? N.call(Sl, z, d) : N, d == null) break l;
                z = q({}, z, d);
                break l;
              case 2:
                iu = true;
            }
          }
          d = c.callback, d !== null && (l.flags |= 64, r && (l.flags |= 8192), r = e.callbacks, r === null ? e.callbacks = [d] : r.push(d));
        } else r = { lane: d, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, S === null ? (m = S = r, i = z) : S = S.next = r, f |= d;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null) break;
          r = c, c = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
        }
      } while (true);
      S === null && (i = z), e.baseState = i, e.firstBaseUpdate = m, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), du |= f, l.lanes = f, l.memoizedState = z;
    }
  }
  function Xs(l, t) {
    if (typeof l != "function") throw Error(v(191, l));
    l.call(t);
  }
  function Qs(l, t) {
    var u = l.callbacks;
    if (u !== null) for (l.callbacks = null, l = 0; l < u.length; l++) Xs(u[l], t);
  }
  var da = o(null), an = o(0);
  function Zs(l, t) {
    l = Ft, D(an, l), D(da, t), Ft = l | t.baseLanes;
  }
  function Wf() {
    D(an, Ft), D(da, da.current);
  }
  function $f() {
    Ft = an.current, A(da), A(an);
  }
  var it = o(null), Tt = null;
  function vu(l) {
    var t = l.alternate;
    D(Ol, Ol.current & 1), D(it, l), Tt === null && (t === null || da.current !== null || t.memoizedState !== null) && (Tt = l);
  }
  function Ff(l) {
    D(Ol, Ol.current), D(it, l), Tt === null && (Tt = l);
  }
  function Ls(l) {
    l.tag === 22 ? (D(Ol, Ol.current), D(it, l), Tt === null && (Tt = l)) : yu();
  }
  function yu() {
    D(Ol, Ol.current), D(it, it.current);
  }
  function st(l) {
    A(it), Tt === l && (Tt = null), A(Ol);
  }
  var Ol = o(0);
  function en(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || ui(u) || ai(u))) return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Lt = 0, K = null, dl = null, Nl = null, nn = false, ra = false, Lu = false, fn = 0, ae = 0, Sa = null, $y = 0;
  function Al() {
    throw Error(v(321));
  }
  function kf(l, t) {
    if (t === null) return false;
    for (var u = 0; u < t.length && u < l.length; u++) if (!ft(l[u], t[u])) return false;
    return true;
  }
  function If(l, t, u, a, e, n) {
    return Lt = n, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = l === null || l.memoizedState === null ? M0 : hc, Lu = false, n = u(a, e), Lu = false, ra && (n = Vs(t, u, a, e)), xs(l), n;
  }
  function xs(l) {
    b.H = fe;
    var t = dl !== null && dl.next !== null;
    if (Lt = 0, Nl = dl = K = null, nn = false, ae = 0, Sa = null, t) throw Error(v(300));
    l === null || Hl || (l = l.dependencies, l !== null && Fe(l) && (Hl = true));
  }
  function Vs(l, t, u, a) {
    K = l;
    var e = 0;
    do {
      if (ra && (Sa = null), ae = 0, ra = false, 25 <= e) throw Error(v(301));
      if (e += 1, Nl = dl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      b.H = O0, n = t(u, a);
    } while (ra);
    return n;
  }
  function Fy() {
    var l = b.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? ee(t) : t, l = l.useState()[0], (dl !== null ? dl.memoizedState : null) !== l && (K.flags |= 1024), t;
  }
  function Pf() {
    var l = fn !== 0;
    return fn = 0, l;
  }
  function lc(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function tc(l) {
    if (nn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      nn = false;
    }
    Lt = 0, Nl = dl = K = null, ra = false, ae = fn = 0, Sa = null;
  }
  function Kl() {
    var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Nl === null ? K.memoizedState = Nl = l : Nl = Nl.next = l, Nl;
  }
  function pl() {
    if (dl === null) {
      var l = K.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = dl.next;
    var t = Nl === null ? K.memoizedState : Nl.next;
    if (t !== null) Nl = t, dl = l;
    else {
      if (l === null) throw K.alternate === null ? Error(v(467)) : Error(v(310));
      dl = l, l = { memoizedState: dl.memoizedState, baseState: dl.baseState, baseQueue: dl.baseQueue, queue: dl.queue, next: null }, Nl === null ? K.memoizedState = Nl = l : Nl = Nl.next = l;
    }
    return Nl;
  }
  function cn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ee(l) {
    var t = ae;
    return ae += 1, Sa === null && (Sa = []), l = qs(Sa, l, t), t = K, (Nl === null ? t.memoizedState : Nl.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? M0 : hc), l;
  }
  function sn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ee(l);
      if (l.$$typeof === X) return Xl(l);
    }
    throw Error(v(438, String(l)));
  }
  function uc(l) {
    var t = null, u = K.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = K.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function(e) {
        return e.slice();
      }), index: 0 })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = cn(), K.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0) for (u = t.data[t.index] = Array(l), a = 0; a < l; a++) u[a] = Ju;
    return t.index++, u;
  }
  function xt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function on(l) {
    var t = pl();
    return ac(t, dl, l);
  }
  function ac(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(v(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, m = t, S = false;
      do {
        var z = m.lane & -536870913;
        if (z !== m.lane ? (ll & z) === z : (Lt & z) === z) {
          var d = m.revertLane;
          if (d === 0) i !== null && (i = i.next = { lane: 0, revertLane: 0, gesture: null, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }), z === va && (S = true);
          else if ((Lt & d) === d) {
            m = m.next, d === va && (S = true);
            continue;
          } else z = { lane: 0, revertLane: m.revertLane, gesture: null, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }, i === null ? (c = i = z, f = n) : i = i.next = z, K.lanes |= d, du |= d;
          z = m.action, Lu && u(n, z), n = m.hasEagerState ? m.eagerState : u(n, z);
        } else d = { lane: z, revertLane: m.revertLane, gesture: m.gesture, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }, i === null ? (c = i = d, f = n) : i = i.next = d, K.lanes |= z, du |= z;
        m = m.next;
      } while (m !== null && m !== t);
      if (i === null ? f = n : i.next = c, !ft(n, l.memoizedState) && (Hl = true, S && (u = ya, u !== null))) throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function ec(l) {
    var t = pl(), u = t.queue;
    if (u === null) throw Error(v(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      ft(n, t.memoizedState) || (Hl = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function Ks(l, t, u) {
    var a = K, e = pl(), n = ul;
    if (n) {
      if (u === void 0) throw Error(v(407));
      u = u();
    } else u = t();
    var f = !ft((dl || e).memoizedState, u);
    if (f && (e.memoizedState = u, Hl = true), e = e.queue, cc(Ws.bind(null, a, e, l), [l]), e.getSnapshot !== t || f || Nl !== null && Nl.memoizedState.tag & 1) {
      if (a.flags |= 2048, ga(9, { destroy: void 0 }, ws.bind(null, a, e, u, t), null), bl === null) throw Error(v(349));
      n || (Lt & 127) !== 0 || Js(a, t, u);
    }
    return u;
  }
  function Js(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = K.updateQueue, t === null ? (t = cn(), K.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function ws(l, t, u, a) {
    t.value = u, t.getSnapshot = a, $s(t) && Fs(l);
  }
  function Ws(l, t, u) {
    return u(function() {
      $s(t) && Fs(l);
    });
  }
  function $s(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !ft(l, u);
    } catch {
      return true;
    }
  }
  function Fs(l) {
    var t = Cu(l, 2);
    t !== null && ut(t, l, 2);
  }
  function nc(l) {
    var t = Kl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Lu) {
        tu(true);
        try {
          u();
        } finally {
          tu(false);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: xt, lastRenderedState: l }, t;
  }
  function ks(l, t, u, a) {
    return l.baseState = u, ac(l, dl, typeof a == "function" ? a : xt);
  }
  function ky(l, t, u, a, e) {
    if (hn(l)) throw Error(v(485));
    if (l = t.action, l !== null) {
      var n = { payload: e, action: l, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(f) {
        n.listeners.push(f);
      } };
      b.T !== null ? u(true) : n.isTransition = false, a(n), u = t.pending, u === null ? (n.next = t.pending = n, Is(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function Is(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = b.T, f = {};
      b.T = f;
      try {
        var c = u(e, a), i = b.S;
        i !== null && i(f, c), Ps(l, t, c);
      } catch (m) {
        fc(l, t, m);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), b.T = n;
      }
    } else try {
      n = u(e, a), Ps(l, t, n);
    } catch (m) {
      fc(l, t, m);
    }
  }
  function Ps(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(function(a) {
      l0(l, t, a);
    }, function(a) {
      return fc(l, t, a);
    }) : l0(l, t, u);
  }
  function l0(l, t, u) {
    t.status = "fulfilled", t.value = u, t0(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, Is(l, u)));
  }
  function fc(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, t0(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function t0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function u0(l, t) {
    return t;
  }
  function a0(l, t) {
    if (ul) {
      var u = bl.formState;
      if (u !== null) {
        l: {
          var a = K;
          if (ul) {
            if (El) {
              t: {
                for (var e = El, n = Et; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = zt(e.nextSibling), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                El = zt(e.nextSibling), a = e.data === "F!";
                break l;
              }
            }
            fu(a);
          }
          a = false;
        }
        a && (t = u[0]);
      }
    }
    return u = Kl(), u.memoizedState = u.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: u0, lastRenderedState: t }, u.queue = a, u = z0.bind(null, K, a), a.dispatch = u, a = nc(false), n = yc.bind(null, K, false, a.queue), a = Kl(), e = { state: t, dispatch: null, action: l, pending: null }, a.queue = e, u = ky.bind(null, K, e, n, u), e.dispatch = u, a.memoizedState = l, [t, u, false];
  }
  function e0(l) {
    var t = pl();
    return n0(t, dl, l);
  }
  function n0(l, t, u) {
    if (t = ac(l, t, u0)[0], l = on(xt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var a = ee(t);
    } catch (f) {
      throw f === ha ? Pe : f;
    }
    else a = t;
    t = pl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (K.flags |= 2048, ga(9, { destroy: void 0 }, Iy.bind(null, e, u), null)), [a, n, l];
  }
  function Iy(l, t) {
    l.action = t;
  }
  function f0(l) {
    var t = pl(), u = dl;
    if (u !== null) return n0(t, u, l);
    pl(), t = t.memoizedState, u = pl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, false];
  }
  function ga(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = K.updateQueue, t === null && (t = cn(), K.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function c0() {
    return pl().memoizedState;
  }
  function vn(l, t, u, a) {
    var e = Kl();
    K.flags |= l, e.memoizedState = ga(1 | t, { destroy: void 0 }, u, a === void 0 ? null : a);
  }
  function yn(l, t, u, a) {
    var e = pl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    dl !== null && a !== null && kf(a, dl.memoizedState.deps) ? e.memoizedState = ga(t, n, u, a) : (K.flags |= l, e.memoizedState = ga(1 | t, n, u, a));
  }
  function i0(l, t) {
    vn(8390656, 8, l, t);
  }
  function cc(l, t) {
    yn(2048, 8, l, t);
  }
  function Py(l) {
    K.flags |= 4;
    var t = K.updateQueue;
    if (t === null) t = cn(), K.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function s0(l) {
    var t = pl().memoizedState;
    return Py({ ref: t, nextImpl: l }), function() {
      if ((sl & 2) !== 0) throw Error(v(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function o0(l, t) {
    return yn(4, 2, l, t);
  }
  function v0(l, t) {
    return yn(4, 4, l, t);
  }
  function y0(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null) return l = l(), t.current = l, function() {
      t.current = null;
    };
  }
  function h0(l, t, u) {
    u = u != null ? u.concat([l]) : null, yn(4, 4, y0.bind(null, t, l), u);
  }
  function ic() {
  }
  function m0(l, t) {
    var u = pl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && kf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function d0(l, t) {
    var u = pl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && kf(t, a[1])) return a[0];
    if (a = l(), Lu) {
      tu(true);
      try {
        l();
      } finally {
        tu(false);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function sc(l, t, u) {
    return u === void 0 || (Lt & 1073741824) !== 0 && (ll & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = So(), K.lanes |= l, du |= l, u);
  }
  function r0(l, t, u, a) {
    return ft(u, t) ? u : da.current !== null ? (l = sc(l, u, a), ft(l, t) || (Hl = true), l) : (Lt & 42) === 0 || (Lt & 1073741824) !== 0 && (ll & 261930) === 0 ? (Hl = true, l.memoizedState = u) : (l = So(), K.lanes |= l, du |= l, t);
  }
  function S0(l, t, u, a, e) {
    var n = p.p;
    p.p = n !== 0 && 8 > n ? n : 8;
    var f = b.T, c = {};
    b.T = c, yc(l, false, t, u);
    try {
      var i = e(), m = b.S;
      if (m !== null && m(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var S = Wy(i, a);
        ne(l, t, S, yt(l));
      } else ne(l, t, a, yt(l));
    } catch (z) {
      ne(l, t, { then: function() {
      }, status: "rejected", reason: z }, yt());
    } finally {
      p.p = n, f !== null && c.types !== null && (f.types = c.types), b.T = f;
    }
  }
  function l1() {
  }
  function oc(l, t, u, a) {
    if (l.tag !== 5) throw Error(v(476));
    var e = g0(l).queue;
    S0(l, e, t, Q, u === null ? l1 : function() {
      return b0(l), u(a);
    });
  }
  function g0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: Q, baseState: Q, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: xt, lastRenderedState: Q }, next: null };
    var u = {};
    return t.next = { memoizedState: u, baseState: u, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: xt, lastRenderedState: u }, next: null }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function b0(l) {
    var t = g0(l);
    t.next === null && (t = l.alternate.memoizedState), ne(l, t.next.queue, {}, yt());
  }
  function vc() {
    return Xl(ze);
  }
  function E0() {
    return pl().memoizedState;
  }
  function T0() {
    return pl().memoizedState;
  }
  function t1(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = yt();
          l = su(u);
          var a = ou(t, l, u);
          a !== null && (ut(a, t, u), le(a, t, u)), t = { cache: Qf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function u1(l, t, u) {
    var a = yt();
    u = { lane: a, revertLane: 0, gesture: null, action: u, hasEagerState: false, eagerState: null, next: null }, hn(l) ? A0(t, u) : (u = Uf(l, t, u, a), u !== null && (ut(u, l, a), _0(u, t, a)));
  }
  function z0(l, t, u) {
    var a = yt();
    ne(l, t, u, a);
  }
  function ne(l, t, u, a) {
    var e = { lane: a, revertLane: 0, gesture: null, action: u, hasEagerState: false, eagerState: null, next: null };
    if (hn(l)) A0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
        var f = t.lastRenderedState, c = n(f, u);
        if (e.hasEagerState = true, e.eagerState = c, ft(c, f)) return Je(l, t, e, 0), bl === null && Ke(), false;
      } catch {
      } finally {
      }
      if (u = Uf(l, t, e, a), u !== null) return ut(u, l, a), _0(u, t, a), true;
    }
    return false;
  }
  function yc(l, t, u, a) {
    if (a = { lane: 2, revertLane: Vc(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, hn(l)) {
      if (t) throw Error(v(479));
    } else t = Uf(l, u, a, 2), t !== null && ut(t, l, 2);
  }
  function hn(l) {
    var t = l.alternate;
    return l === K || t !== null && t === K;
  }
  function A0(l, t) {
    ra = nn = true;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function _0(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Ui(l, u);
    }
  }
  var fe = { readContext: Xl, use: sn, useCallback: Al, useContext: Al, useEffect: Al, useImperativeHandle: Al, useLayoutEffect: Al, useInsertionEffect: Al, useMemo: Al, useReducer: Al, useRef: Al, useState: Al, useDebugValue: Al, useDeferredValue: Al, useTransition: Al, useSyncExternalStore: Al, useId: Al, useHostTransitionStatus: Al, useFormState: Al, useActionState: Al, useOptimistic: Al, useMemoCache: Al, useCacheRefresh: Al };
  fe.useEffectEvent = Al;
  var M0 = { readContext: Xl, use: sn, useCallback: function(l, t) {
    return Kl().memoizedState = [l, t === void 0 ? null : t], l;
  }, useContext: Xl, useEffect: i0, useImperativeHandle: function(l, t, u) {
    u = u != null ? u.concat([l]) : null, vn(4194308, 4, y0.bind(null, t, l), u);
  }, useLayoutEffect: function(l, t) {
    return vn(4194308, 4, l, t);
  }, useInsertionEffect: function(l, t) {
    vn(4, 2, l, t);
  }, useMemo: function(l, t) {
    var u = Kl();
    t = t === void 0 ? null : t;
    var a = l();
    if (Lu) {
      tu(true);
      try {
        l();
      } finally {
        tu(false);
      }
    }
    return u.memoizedState = [a, t], a;
  }, useReducer: function(l, t, u) {
    var a = Kl();
    if (u !== void 0) {
      var e = u(t);
      if (Lu) {
        tu(true);
        try {
          u(t);
        } finally {
          tu(false);
        }
      }
    } else e = t;
    return a.memoizedState = a.baseState = e, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: l, lastRenderedState: e }, a.queue = l, l = l.dispatch = u1.bind(null, K, l), [a.memoizedState, l];
  }, useRef: function(l) {
    var t = Kl();
    return l = { current: l }, t.memoizedState = l;
  }, useState: function(l) {
    l = nc(l);
    var t = l.queue, u = z0.bind(null, K, t);
    return t.dispatch = u, [l.memoizedState, u];
  }, useDebugValue: ic, useDeferredValue: function(l, t) {
    var u = Kl();
    return sc(u, l, t);
  }, useTransition: function() {
    var l = nc(false);
    return l = S0.bind(null, K, l.queue, true, false), Kl().memoizedState = l, [false, l];
  }, useSyncExternalStore: function(l, t, u) {
    var a = K, e = Kl();
    if (ul) {
      if (u === void 0) throw Error(v(407));
      u = u();
    } else {
      if (u = t(), bl === null) throw Error(v(349));
      (ll & 127) !== 0 || Js(a, t, u);
    }
    e.memoizedState = u;
    var n = { value: u, getSnapshot: t };
    return e.queue = n, i0(Ws.bind(null, a, n, l), [l]), a.flags |= 2048, ga(9, { destroy: void 0 }, ws.bind(null, a, n, u, t), null), u;
  }, useId: function() {
    var l = Kl(), t = bl.identifierPrefix;
    if (ul) {
      var u = Nt, a = Rt;
      u = (a & ~(1 << 32 - nt(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = fn++, 0 < u && (t += "H" + u.toString(32)), t += "_";
    } else u = $y++, t = "_" + t + "r_" + u.toString(32) + "_";
    return l.memoizedState = t;
  }, useHostTransitionStatus: vc, useFormState: a0, useActionState: a0, useOptimistic: function(l) {
    var t = Kl();
    t.memoizedState = t.baseState = l;
    var u = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = u, t = yc.bind(null, K, true, u), u.dispatch = t, [l, t];
  }, useMemoCache: uc, useCacheRefresh: function() {
    return Kl().memoizedState = t1.bind(null, K);
  }, useEffectEvent: function(l) {
    var t = Kl(), u = { impl: l };
    return t.memoizedState = u, function() {
      if ((sl & 2) !== 0) throw Error(v(440));
      return u.impl.apply(void 0, arguments);
    };
  } }, hc = { readContext: Xl, use: sn, useCallback: m0, useContext: Xl, useEffect: cc, useImperativeHandle: h0, useInsertionEffect: o0, useLayoutEffect: v0, useMemo: d0, useReducer: on, useRef: c0, useState: function() {
    return on(xt);
  }, useDebugValue: ic, useDeferredValue: function(l, t) {
    var u = pl();
    return r0(u, dl.memoizedState, l, t);
  }, useTransition: function() {
    var l = on(xt)[0], t = pl().memoizedState;
    return [typeof l == "boolean" ? l : ee(l), t];
  }, useSyncExternalStore: Ks, useId: E0, useHostTransitionStatus: vc, useFormState: e0, useActionState: e0, useOptimistic: function(l, t) {
    var u = pl();
    return ks(u, dl, l, t);
  }, useMemoCache: uc, useCacheRefresh: T0 };
  hc.useEffectEvent = s0;
  var O0 = { readContext: Xl, use: sn, useCallback: m0, useContext: Xl, useEffect: cc, useImperativeHandle: h0, useInsertionEffect: o0, useLayoutEffect: v0, useMemo: d0, useReducer: ec, useRef: c0, useState: function() {
    return ec(xt);
  }, useDebugValue: ic, useDeferredValue: function(l, t) {
    var u = pl();
    return dl === null ? sc(u, l, t) : r0(u, dl.memoizedState, l, t);
  }, useTransition: function() {
    var l = ec(xt)[0], t = pl().memoizedState;
    return [typeof l == "boolean" ? l : ee(l), t];
  }, useSyncExternalStore: Ks, useId: E0, useHostTransitionStatus: vc, useFormState: f0, useActionState: f0, useOptimistic: function(l, t) {
    var u = pl();
    return dl !== null ? ks(u, dl, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
  }, useMemoCache: uc, useCacheRefresh: T0 };
  O0.useEffectEvent = s0;
  function mc(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : q({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var dc = { enqueueSetState: function(l, t, u) {
    l = l._reactInternals;
    var a = yt(), e = su(a);
    e.payload = t, u != null && (e.callback = u), t = ou(l, e, a), t !== null && (ut(t, l, a), le(t, l, a));
  }, enqueueReplaceState: function(l, t, u) {
    l = l._reactInternals;
    var a = yt(), e = su(a);
    e.tag = 1, e.payload = t, u != null && (e.callback = u), t = ou(l, e, a), t !== null && (ut(t, l, a), le(t, l, a));
  }, enqueueForceUpdate: function(l, t) {
    l = l._reactInternals;
    var u = yt(), a = su(u);
    a.tag = 2, t != null && (a.callback = t), t = ou(l, a, u), t !== null && (ut(t, l, u), le(t, l, u));
  } };
  function p0(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Ja(u, a) || !Ja(e, n) : true;
  }
  function D0(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && dc.enqueueReplaceState(t, t.state, null);
  }
  function xu(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t) a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = q({}, u));
      for (var e in l) u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function U0(l) {
    Ve(l);
  }
  function R0(l) {
    console.error(l);
  }
  function N0(l) {
    Ve(l);
  }
  function mn(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function H0(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, { componentStack: u.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function rc(l, t, u) {
    return u = su(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      mn(l, t);
    }, u;
  }
  function C0(l) {
    return l = su(l), l.tag = 3, l;
  }
  function q0(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        H0(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      H0(t, u, a), typeof e != "function" && (ru === null ? ru = /* @__PURE__ */ new Set([this]) : ru.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, { componentStack: c !== null ? c : "" });
    });
  }
  function a1(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && oa(t, u, e, true), u = it.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Tt === null ? On() : u.alternate === null && _l === 0 && (_l = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === ln ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Zc(l, a, e)), false;
          case 22:
            return u.flags |= 65536, a === ln ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Zc(l, a, e)), false;
        }
        throw Error(v(435, u.tag));
      }
      return Zc(l, a, e), On(), false;
    }
    if (ul) return t = it.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Bf && (l = Error(v(422), { cause: a }), $a(St(l, u)))) : (a !== Bf && (t = Error(v(423), { cause: a }), $a(St(t, u))), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = St(a, u), e = rc(l.stateNode, a, e), Jf(l, e), _l !== 4 && (_l = 2)), false;
    var n = Error(v(520), { cause: a });
    if (n = St(n, u), me === null ? me = [n] : me.push(n), _l !== 4 && (_l = 2), t === null) return true;
    a = St(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = rc(u.stateNode, a, l), Jf(u, l), false;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ru === null || !ru.has(n)))) return u.flags |= 65536, e &= -e, u.lanes |= e, e = C0(e), q0(e, l, u, a), Jf(u, e), false;
      }
      u = u.return;
    } while (u !== null);
    return false;
  }
  var Sc = Error(v(461)), Hl = false;
  function Ql(l, t, u, a) {
    t.child = l === null ? js(t, null, u, a) : Zu(t, l.child, u, a);
  }
  function B0(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a) c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Gu(t), a = If(l, t, u, f, n, e), c = Pf(), l !== null && !Hl ? (lc(l, t, e), Vt(l, t, e)) : (ul && c && Cf(t), t.flags |= 1, Ql(l, t, a, e), t.child);
  }
  function Y0(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !Rf(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, G0(l, t, n, a, e)) : (l = We(u.type, null, a, t, t.mode, e), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !Mc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ja, u(f, a) && l.ref === t.ref) return Vt(l, t, e);
    }
    return t.flags |= 1, l = jt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function G0(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ja(n, a) && l.ref === t.ref) if (Hl = false, t.pendingProps = a = n, Mc(l, e)) (l.flags & 131072) !== 0 && (Hl = true);
      else return t.lanes = l.lanes, Vt(l, t, e);
    }
    return gc(l, t, u, a, e);
  }
  function j0(l, t, u, a) {
    var e = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | u : u, l !== null) {
          for (a = t.child = l.child, e = 0; a !== null; ) e = e | a.lanes | a.childLanes, a = a.sibling;
          a = e & ~n;
        } else a = 0, t.child = null;
        return X0(l, t, n, u, a);
      }
      if ((u & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ie(t, n !== null ? n.cachePool : null), n !== null ? Zs(t, n) : Wf(), Ls(t);
      else return a = t.lanes = 536870912, X0(l, t, n !== null ? n.baseLanes | u : u, u, a);
    } else n !== null ? (Ie(t, n.cachePool), Zs(t, n), yu(), t.memoizedState = null) : (l !== null && Ie(t, null), Wf(), yu());
    return Ql(l, t, e, u), t.child;
  }
  function ce(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
  }
  function X0(l, t, u, a, e) {
    var n = Lf();
    return n = n === null ? null : { parent: Rl._currentValue, pool: n }, t.memoizedState = { baseLanes: u, cachePool: n }, l !== null && Ie(t, null), Wf(), Ls(t), l !== null && oa(l, t, a, true), t.childLanes = e, null;
  }
  function dn(l, t) {
    return t = Sn({ mode: t.mode, children: t.children }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Q0(l, t, u) {
    return Zu(t, l.child, null, u), l = dn(t, t.pendingProps), l.flags |= 2, st(t), t.memoizedState = null, l;
  }
  function e1(l, t, u) {
    var a = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (ul) {
        if (a.mode === "hidden") return l = dn(t, a), t.lanes = 536870912, ce(null, l);
        if (Ff(t), (l = El) ? (l = Po(l, Et), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: eu !== null ? { id: Rt, overflow: Nt } : null, retryLane: 536870912, hydrationErrors: null }, u = As(l), u.return = t, t.child = u, jl = t, El = null)) : l = null, l === null) throw fu(t);
        return t.lanes = 536870912, null;
      }
      return dn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Ff(t), e) if (t.flags & 256) t.flags &= -257, t = Q0(l, t, u);
      else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
      else throw Error(v(558));
      else if (Hl || oa(l, t, u, false), e = (u & l.childLanes) !== 0, Hl || e) {
        if (a = bl, a !== null && (f = Ri(a, u), f !== 0 && f !== n.retryLane)) throw n.retryLane = f, Cu(l, f), ut(a, l, f), Sc;
        On(), t = Q0(l, t, u);
      } else l = n.treeContext, El = zt(f.nextSibling), jl = t, ul = true, nu = null, Et = false, l !== null && Os(t, l), t = dn(t, a), t.flags |= 4096;
      return t;
    }
    return l = jt(l.child, { mode: a.mode, children: a.children }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function rn(l, t) {
    var u = t.ref;
    if (u === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object") throw Error(v(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function gc(l, t, u, a, e) {
    return Gu(t), u = If(l, t, u, a, void 0, e), a = Pf(), l !== null && !Hl ? (lc(l, t, e), Vt(l, t, e)) : (ul && a && Cf(t), t.flags |= 1, Ql(l, t, u, e), t.child);
  }
  function Z0(l, t, u, a, e, n) {
    return Gu(t), t.updateQueue = null, u = Vs(t, a, u, e), xs(l), a = Pf(), l !== null && !Hl ? (lc(l, t, n), Vt(l, t, n)) : (ul && a && Cf(t), t.flags |= 1, Ql(l, t, u, n), t.child);
  }
  function L0(l, t, u, a, e) {
    if (Gu(t), t.stateNode === null) {
      var n = fa, f = u.contextType;
      typeof f == "object" && f !== null && (n = Xl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = dc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Vf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Xl(f) : fa, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (mc(t, u, f, a), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && dc.enqueueReplaceState(n, n.state, null), ue(t, a, n, e), te(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = true;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = xu(u, c);
      n.props = i;
      var m = n.context, S = u.contextType;
      f = fa, typeof S == "object" && S !== null && (f = Xl(S));
      var z = u.getDerivedStateFromProps;
      S = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || m !== f) && D0(t, n, a, f), iu = false;
      var d = t.memoizedState;
      n.state = d, ue(t, a, n, e), te(), m = t.memoizedState, c || d !== m || iu ? (typeof z == "function" && (mc(t, u, z, a), m = t.memoizedState), (i = iu || p0(t, u, i, a, d, m, f)) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = m), n.props = a, n.state = m, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = false);
    } else {
      n = t.stateNode, Kf(l, t), f = t.memoizedProps, S = xu(u, f), n.props = S, z = t.pendingProps, d = n.context, m = u.contextType, i = fa, typeof m == "object" && m !== null && (i = Xl(m)), c = u.getDerivedStateFromProps, (m = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== z || d !== i) && D0(t, n, a, i), iu = false, d = t.memoizedState, n.state = d, ue(t, a, n, e), te();
      var r = t.memoizedState;
      f !== z || d !== r || iu || l !== null && l.dependencies !== null && Fe(l.dependencies) ? (typeof c == "function" && (mc(t, u, c, a), r = t.memoizedState), (S = iu || p0(t, u, S, a, d, r, i) || l !== null && l.dependencies !== null && Fe(l.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, r, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, r, i)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && d === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && d === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = r), n.props = a, n.state = r, n.context = i, a = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && d === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && d === l.memoizedState || (t.flags |= 1024), a = false);
    }
    return n = a, rn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Zu(t, l.child, null, e), t.child = Zu(t, null, u, e)) : Ql(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = Vt(l, t, e), l;
  }
  function x0(l, t, u, a) {
    return Bu(), t.flags |= 256, Ql(l, t, u, a), t.child;
  }
  var bc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Ec(l) {
    return { baseLanes: l, cachePool: Hs() };
  }
  function Tc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= vt), l;
  }
  function V0(l, t, u) {
    var a = t.pendingProps, e = false, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? false : (Ol.current & 2) !== 0), f && (e = true, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (ul) {
        if (e ? vu(t) : yu(), (l = El) ? (l = Po(l, Et), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: eu !== null ? { id: Rt, overflow: Nt } : null, retryLane: 536870912, hydrationErrors: null }, u = As(l), u.return = t, t.child = u, jl = t, El = null)) : l = null, l === null) throw fu(t);
        return ai(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, e ? (yu(), e = t.mode, c = Sn({ mode: "hidden", children: c }, e), a = qu(a, e, u, null), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = Ec(u), a.childLanes = Tc(l, f, u), t.memoizedState = bc, ce(null, a)) : (vu(t), zc(t, c));
    }
    var i = l.memoizedState;
    if (i !== null && (c = i.dehydrated, c !== null)) {
      if (n) t.flags & 256 ? (vu(t), t.flags &= -257, t = Ac(l, t, u)) : t.memoizedState !== null ? (yu(), t.child = l.child, t.flags |= 128, t = null) : (yu(), c = a.fallback, e = t.mode, a = Sn({ mode: "visible", children: a.children }, e), c = qu(c, e, u, null), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, Zu(t, l.child, null, u), a = t.child, a.memoizedState = Ec(u), a.childLanes = Tc(l, f, u), t.memoizedState = bc, t = ce(null, a));
      else if (vu(t), ai(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var m = f.dgst;
        f = m, a = Error(v(419)), a.stack = "", a.digest = f, $a({ value: a, source: null, stack: null }), t = Ac(l, t, u);
      } else if (Hl || oa(l, t, u, false), f = (u & l.childLanes) !== 0, Hl || f) {
        if (f = bl, f !== null && (a = Ri(f, u), a !== 0 && a !== i.retryLane)) throw i.retryLane = a, Cu(l, a), ut(f, l, a), Sc;
        ui(c) || On(), t = Ac(l, t, u);
      } else ui(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, El = zt(c.nextSibling), jl = t, ul = true, nu = null, Et = false, l !== null && Os(t, l), t = zc(t, a.children), t.flags |= 4096);
      return t;
    }
    return e ? (yu(), c = a.fallback, e = t.mode, i = l.child, m = i.sibling, a = jt(i, { mode: "hidden", children: a.children }), a.subtreeFlags = i.subtreeFlags & 65011712, m !== null ? c = jt(m, c) : (c = qu(c, e, u, null), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, ce(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = Ec(u) : (e = c.cachePool, e !== null ? (i = Rl._currentValue, e = e.parent !== i ? { parent: i, pool: i } : e) : e = Hs(), c = { baseLanes: c.baseLanes | u, cachePool: e }), a.memoizedState = c, a.childLanes = Tc(l, f, u), t.memoizedState = bc, ce(l.child, a)) : (vu(t), u = l.child, l = u.sibling, u = jt(u, { mode: "visible", children: a.children }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function zc(l, t) {
    return t = Sn({ mode: "visible", children: t }, l.mode), t.return = l, l.child = t;
  }
  function Sn(l, t) {
    return l = ct(22, l, null, t), l.lanes = 0, l;
  }
  function Ac(l, t, u) {
    return Zu(t, l.child, null, u), l = zc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
  }
  function K0(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), jf(l.return, t, u);
  }
  function _c(l, t, u, a, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: u, tailMode: e, treeForkCount: n } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = u, f.tailMode = e, f.treeForkCount = n);
  }
  function J0(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    a = a.children;
    var f = Ol.current, c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, D(Ol, f), Ql(l, t, a, u), a = ul ? Wa : 0, !c && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
      if (l.tag === 13) l.memoizedState !== null && K0(l, u, t);
      else if (l.tag === 19) K0(l, u, t);
      else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break l;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) break l;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    switch (e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; ) l = u.alternate, l !== null && en(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), _c(t, false, e, u, n, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && en(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        _c(t, true, u, null, n, a);
        break;
      case "together":
        _c(t, false, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Vt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), du |= t.lanes, (u & t.childLanes) === 0) if (l !== null) {
      if (oa(l, t, u, false), (u & t.childLanes) === 0) return null;
    } else return null;
    if (l !== null && t.child !== l.child) throw Error(v(153));
    if (t.child !== null) {
      for (l = t.child, u = jt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; ) l = l.sibling, u = u.sibling = jt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function Mc(l, t) {
    return (l.lanes & t) !== 0 ? true : (l = l.dependencies, !!(l !== null && Fe(l)));
  }
  function n1(l, t, u) {
    switch (t.tag) {
      case 3:
        Vl(t, t.stateNode.containerInfo), cu(t, Rl, l.memoizedState.cache), Bu();
        break;
      case 27:
      case 5:
        Ca(t);
        break;
      case 4:
        Vl(t, t.stateNode.containerInfo);
        break;
      case 10:
        cu(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, Ff(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (vu(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? V0(l, t, u) : (vu(t), l = Vt(l, t, u), l !== null ? l.sibling : null);
        vu(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (oa(l, t, u, false), a = (u & t.childLanes) !== 0), e) {
          if (a) return J0(l, t, u);
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), D(Ol, Ol.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, j0(l, t, u, t.pendingProps);
      case 24:
        cu(t, Rl, l.memoizedState.cache);
    }
    return Vt(l, t, u);
  }
  function w0(l, t, u) {
    if (l !== null) if (l.memoizedProps !== t.pendingProps) Hl = true;
    else {
      if (!Mc(l, u) && (t.flags & 128) === 0) return Hl = false, n1(l, t, u);
      Hl = (l.flags & 131072) !== 0;
    }
    else Hl = false, ul && (t.flags & 1048576) !== 0 && Ms(t, Wa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Xu(t.elementType), t.type = l, typeof l == "function") Rf(l) ? (a = xu(l, a), t.tag = 1, t = L0(null, t, l, a, u)) : (t.tag = 0, t = gc(null, t, l, a, u));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === x) {
                t.tag = 11, t = B0(null, t, l, a, u);
                break l;
              } else if (e === W) {
                t.tag = 14, t = Y0(null, t, l, a, u);
                break l;
              }
            }
            throw t = qt(l) || l, Error(v(306, t, ""));
          }
        }
        return t;
      case 0:
        return gc(l, t, t.type, t.pendingProps, u);
      case 1:
        return a = t.type, e = xu(a, t.pendingProps), L0(l, t, a, e, u);
      case 3:
        l: {
          if (Vl(t, t.stateNode.containerInfo), l === null) throw Error(v(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Kf(l, t), ue(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, cu(t, Rl, a), a !== n.cache && Xf(t, [Rl], u, true), te(), a = f.element, n.isDehydrated) if (n = { element: a, isDehydrated: false, cache: f.cache }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
            t = x0(l, t, a, u);
            break l;
          } else if (a !== e) {
            e = St(Error(v(424)), t), $a(e), t = x0(l, t, a, u);
            break l;
          } else {
            switch (l = t.stateNode.containerInfo, l.nodeType) {
              case 9:
                l = l.body;
                break;
              default:
                l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
            }
            for (El = zt(l.firstChild), jl = t, ul = true, nu = null, Et = true, u = js(t, null, a, u), t.child = u; u; ) u.flags = u.flags & -3 | 4096, u = u.sibling;
          }
          else {
            if (Bu(), a === e) {
              t = Vt(l, t, u);
              break l;
            }
            Ql(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return rn(l, t), l === null ? (u = nv(t.type, null, t.pendingProps, null)) ? t.memoizedState = u : ul || (u = t.type, l = t.pendingProps, a = Cn($.current).createElement(u), a[Gl] = t, a[Fl] = l, Zl(a, u, l), Bl(a), t.stateNode = a) : t.memoizedState = nv(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return Ca(t), l === null && ul && (a = t.stateNode = uv(t.type, t.pendingProps, $.current), jl = t, Et = true, e = El, Eu(t.type) ? (ei = e, El = zt(a.firstChild)) : El = e), Ql(l, t, t.pendingProps.children, u), rn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && ul && ((e = a = El) && (a = B1(a, t.type, t.pendingProps, Et), a !== null ? (t.stateNode = a, jl = t, El = zt(a.firstChild), Et = false, e = true) : e = false), e || fu(t)), Ca(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Pc(e, n) ? a = null : f !== null && Pc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = If(l, t, Fy, null, null, u), ze._currentValue = e), rn(l, t), Ql(l, t, a, u), t.child;
      case 6:
        return l === null && ul && ((l = u = El) && (u = Y1(u, t.pendingProps, Et), u !== null ? (t.stateNode = u, jl = t, El = null, l = true) : l = false), l || fu(t)), null;
      case 13:
        return V0(l, t, u);
      case 4:
        return Vl(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = Zu(t, null, a, u) : Ql(l, t, a, u), t.child;
      case 11:
        return B0(l, t, t.type, t.pendingProps, u);
      case 7:
        return Ql(l, t, t.pendingProps, u), t.child;
      case 8:
        return Ql(l, t, t.pendingProps.children, u), t.child;
      case 12:
        return Ql(l, t, t.pendingProps.children, u), t.child;
      case 10:
        return a = t.pendingProps, cu(t, t.type, a.value), Ql(l, t, a.children, u), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Gu(t), e = Xl(e), a = a(e), t.flags |= 1, Ql(l, t, a, u), t.child;
      case 14:
        return Y0(l, t, t.type, t.pendingProps, u);
      case 15:
        return G0(l, t, t.type, t.pendingProps, u);
      case 19:
        return J0(l, t, u);
      case 31:
        return e1(l, t, u);
      case 22:
        return j0(l, t, u, t.pendingProps);
      case 24:
        return Gu(t), a = Xl(Rl), l === null ? (e = Lf(), e === null && (e = bl, n = Qf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, Vf(t), cu(t, Rl, e)) : ((l.lanes & u) !== 0 && (Kf(l, t), ue(t, null, null, u), te()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), cu(t, Rl, a)) : (a = n.cache, cu(t, Rl, a), a !== e.cache && Xf(t, [Rl], u, true))), Ql(l, t, t.pendingProps.children, u), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(v(156, t.tag));
  }
  function Kt(l) {
    l.flags |= 4;
  }
  function Oc(l, t, u, a, e) {
    if ((t = (l.mode & 32) !== 0) && (t = false), t) {
      if (l.flags |= 16777216, (e & 335544128) === e) if (l.stateNode.complete) l.flags |= 8192;
      else if (To()) l.flags |= 8192;
      else throw Qu = ln, xf;
    } else l.flags &= -16777217;
  }
  function W0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !ov(t)) if (To()) l.flags |= 8192;
    else throw Qu = ln, xf;
  }
  function gn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? pi() : 536870912, l.lanes |= t, za |= t);
  }
  function ie(l, t) {
    if (!ul) switch (l.tailMode) {
      case "hidden":
        t = l.tail;
        for (var u = null; t !== null; ) t.alternate !== null && (u = t), t = t.sibling;
        u === null ? l.tail = null : u.sibling = null;
        break;
      case "collapsed":
        u = l.tail;
        for (var a = null; u !== null; ) u.alternate !== null && (a = u), u = u.sibling;
        a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
    }
  }
  function Tl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t) for (var e = l.child; e !== null; ) u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else for (e = l.child; e !== null; ) u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function f1(l, t, u) {
    var a = t.pendingProps;
    switch (qf(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tl(t), null;
      case 1:
        return Tl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Zt(Rl), Ml(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (sa(t) ? Kt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Yf())), Tl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Kt(t), n !== null ? (Tl(t), W0(t, n)) : (Tl(t), Oc(t, e, null, a, u))) : n ? n !== l.memoizedState ? (Kt(t), Tl(t), W0(t, n)) : (Tl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Kt(t), Tl(t), Oc(t, e, l, a, u)), null;
      case 27:
        if (De(t), u = $.current, e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(v(166));
            return Tl(t), null;
          }
          l = H.current, sa(t) ? ps(t) : (l = uv(e, a, u), t.stateNode = l, Kt(t));
        }
        return Tl(t), null;
      case 5:
        if (De(t), e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(v(166));
            return Tl(t), null;
          }
          if (n = H.current, sa(t)) ps(t);
          else {
            var f = Cn($.current);
            switch (n) {
              case 1:
                n = f.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                n = f.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    n = f.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof a.is == "string" ? f.createElement("select", { is: a.is }) : f.createElement("select"), a.multiple ? n.multiple = true : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? f.createElement(e, { is: a.is }) : f.createElement(e);
                }
            }
            n[Gl] = t, n[Fl] = a;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t) break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (Zl(n, e, a), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = true;
                break l;
              default:
                a = false;
            }
            a && Kt(t);
          }
        }
        return Tl(t), Oc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, u), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Kt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(v(166));
          if (l = $.current, sa(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = jl, e !== null) switch (e.tag) {
              case 27:
              case 5:
                a = e.memoizedProps;
            }
            l[Gl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === true || Ko(l.nodeValue, u)), l || fu(t, true);
          } else l = Cn(l).createTextNode(a), l[Gl] = t, t.stateNode = l;
        }
        return Tl(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = sa(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(v(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(v(557));
              l[Gl] = t;
            } else Bu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Tl(t), l = false;
          } else u = Yf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = true;
          if (!l) return t.flags & 256 ? (st(t), t) : (st(t), null);
          if ((t.flags & 128) !== 0) throw Error(v(558));
        }
        return Tl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = sa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(v(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(v(317));
              e[Gl] = t;
            } else Bu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Tl(t), e = false;
          } else e = Yf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = true;
          if (!e) return t.flags & 256 ? (st(t), t) : (st(t), null);
        }
        return st(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), gn(t, t.updateQueue), Tl(t), null);
      case 4:
        return Ml(), l === null && Wc(t.stateNode.containerInfo), Tl(t), null;
      case 10:
        return Zt(t.type), Tl(t), null;
      case 19:
        if (A(Ol), a = t.memoizedState, a === null) return Tl(t), null;
        if (e = (t.flags & 128) !== 0, n = a.rendering, n === null) if (e) ie(a, false);
        else {
          if (_l !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
            if (n = en(l), n !== null) {
              for (t.flags |= 128, ie(a, false), l = n.updateQueue, t.updateQueue = l, gn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; ) zs(u, l), u = u.sibling;
              return D(Ol, Ol.current & 1 | 2), ul && Xt(t, a.treeForkCount), t.child;
            }
            l = l.sibling;
          }
          a.tail !== null && at() > An && (t.flags |= 128, e = true, ie(a, false), t.lanes = 4194304);
        }
        else {
          if (!e) if (l = en(n), l !== null) {
            if (t.flags |= 128, e = true, l = l.updateQueue, t.updateQueue = l, gn(t, l), ie(a, true), a.tail === null && a.tailMode === "hidden" && !n.alternate && !ul) return Tl(t), null;
          } else 2 * at() - a.renderingStartTime > An && u !== 536870912 && (t.flags |= 128, e = true, ie(a, false), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = at(), l.sibling = null, u = Ol.current, D(Ol, e ? u & 1 | 2 : u & 1), ul && Xt(t, a.treeForkCount), l) : (Tl(t), null);
      case 22:
      case 23:
        return st(t), $f(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (Tl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Tl(t), u = t.updateQueue, u !== null && gn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && A(ju), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Zt(Rl), Tl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(v(156, t.tag));
  }
  function c1(l, t) {
    switch (qf(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Zt(Rl), Ml(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return De(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (st(t), t.alternate === null) throw Error(v(340));
          Bu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (st(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null) throw Error(v(340));
          Bu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return A(Ol), null;
      case 4:
        return Ml(), null;
      case 10:
        return Zt(t.type), null;
      case 22:
      case 23:
        return st(t), $f(), l !== null && A(ju), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Zt(Rl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $0(l, t) {
    switch (qf(t), t.tag) {
      case 3:
        Zt(Rl), Ml();
        break;
      case 26:
      case 27:
      case 5:
        De(t);
        break;
      case 4:
        Ml();
        break;
      case 31:
        t.memoizedState !== null && st(t);
        break;
      case 13:
        st(t);
        break;
      case 19:
        A(Ol);
        break;
      case 10:
        Zt(t.type);
        break;
      case 22:
      case 23:
        st(t), $f(), l !== null && A(ju);
        break;
      case 24:
        Zt(Rl);
    }
  }
  function se(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      hl(t, t.return, c);
    }
  }
  function hu(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = u, m = c;
              try {
                m();
              } catch (S) {
                hl(e, i, S);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (S) {
      hl(t, t.return, S);
    }
  }
  function F0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        Qs(t, u);
      } catch (a) {
        hl(l, l.return, a);
      }
    }
  }
  function k0(l, t, u) {
    u.props = xu(l.type, l.memoizedProps), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      hl(l, t, a);
    }
  }
  function oe(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (e) {
      hl(l, t, e);
    }
  }
  function Ht(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null) if (typeof a == "function") try {
      a();
    } catch (e) {
      hl(l, t, e);
    } finally {
      l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
    }
    else if (typeof u == "function") try {
      u(null);
    } catch (e) {
      hl(l, t, e);
    }
    else u.current = null;
  }
  function I0(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      hl(l, l.return, e);
    }
  }
  function pc(l, t, u) {
    try {
      var a = l.stateNode;
      U1(a, l.type, u, t), a[Fl] = t;
    } catch (e) {
      hl(l, l.return, e);
    }
  }
  function P0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Eu(l.type) || l.tag === 4;
  }
  function Dc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || P0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Eu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Uc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6) l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Yt));
    else if (a !== 4 && (a === 27 && Eu(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null)) for (Uc(l, t, u), l = l.sibling; l !== null; ) Uc(l, t, u), l = l.sibling;
  }
  function bn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6) l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && Eu(l.type) && (u = l.stateNode), l = l.child, l !== null)) for (bn(l, t, u), l = l.sibling; l !== null; ) bn(l, t, u), l = l.sibling;
  }
  function lo(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      Zl(t, a, u), t[Gl] = l, t[Fl] = u;
    } catch (n) {
      hl(l, l.return, n);
    }
  }
  var Jt = false, Cl = false, Rc = false, to = typeof WeakSet == "function" ? WeakSet : Set, Yl = null;
  function i1(l, t) {
    if (l = l.containerInfo, kc = Qn, l = hs(l), Af(l)) {
      if ("selectionStart" in l) var u = { start: l.selectionStart, end: l.selectionEnd };
      else l: {
        u = (u = l.ownerDocument) && u.defaultView || window;
        var a = u.getSelection && u.getSelection();
        if (a && a.rangeCount !== 0) {
          u = a.anchorNode;
          var e = a.anchorOffset, n = a.focusNode;
          a = a.focusOffset;
          try {
            u.nodeType, n.nodeType;
          } catch {
            u = null;
            break l;
          }
          var f = 0, c = -1, i = -1, m = 0, S = 0, z = l, d = null;
          t: for (; ; ) {
            for (var r; z !== u || e !== 0 && z.nodeType !== 3 || (c = f + e), z !== n || a !== 0 && z.nodeType !== 3 || (i = f + a), z.nodeType === 3 && (f += z.nodeValue.length), (r = z.firstChild) !== null; ) d = z, z = r;
            for (; ; ) {
              if (z === l) break t;
              if (d === u && ++m === e && (c = f), d === n && ++S === a && (i = f), (r = z.nextSibling) !== null) break;
              z = d, d = z.parentNode;
            }
            z = r;
          }
          u = c === -1 || i === -1 ? null : { start: c, end: i };
        } else u = null;
      }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Ic = { focusedElem: l, selectionRange: u }, Qn = false, Yl = t; Yl !== null; ) if (t = Yl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, Yl = l;
    else for (; Yl !== null; ) {
      switch (t = Yl, n = t.alternate, l = t.flags, t.tag) {
        case 0:
          if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null)) for (u = 0; u < l.length; u++) e = l[u], e.ref.impl = e.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((l & 1024) !== 0 && n !== null) {
            l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
            try {
              var N = xu(u.type, e);
              l = a.getSnapshotBeforeUpdate(N, n), a.__reactInternalSnapshotBeforeUpdate = l;
            } catch (G) {
              hl(u, u.return, G);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9) ti(l);
            else if (u === 1) switch (l.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                ti(l);
                break;
              default:
                l.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((l & 1024) !== 0) throw Error(v(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, Yl = l;
        break;
      }
      Yl = t.return;
    }
  }
  function uo(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Wt(l, u), a & 4 && se(5, u);
        break;
      case 1:
        if (Wt(l, u), a & 4) if (l = u.stateNode, t === null) try {
          l.componentDidMount();
        } catch (f) {
          hl(u, u.return, f);
        }
        else {
          var e = xu(u.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
          } catch (f) {
            hl(u, u.return, f);
          }
        }
        a & 64 && F0(u), a & 512 && oe(u, u.return);
        break;
      case 3:
        if (Wt(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null) switch (u.child.tag) {
            case 27:
            case 5:
              t = u.child.stateNode;
              break;
            case 1:
              t = u.child.stateNode;
          }
          try {
            Qs(l, t);
          } catch (f) {
            hl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && lo(u);
      case 26:
      case 5:
        Wt(l, u), t === null && a & 4 && I0(u), a & 512 && oe(u, u.return);
        break;
      case 12:
        Wt(l, u);
        break;
      case 31:
        Wt(l, u), a & 4 && no(l, u);
        break;
      case 13:
        Wt(l, u), a & 4 && fo(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = S1.bind(null, u), G1(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Jt, !a) {
          t = t !== null && t.memoizedState !== null || Cl, e = Jt;
          var n = Cl;
          Jt = a, (Cl = t) && !n ? $t(l, u, (u.subtreeFlags & 8772) !== 0) : Wt(l, u), Jt = e, Cl = n;
        }
        break;
      case 30:
        break;
      default:
        Wt(l, u);
    }
  }
  function ao(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, ao(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && nf(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var zl = null, Il = false;
  function wt(l, t, u) {
    for (u = u.child; u !== null; ) eo(l, t, u), u = u.sibling;
  }
  function eo(l, t, u) {
    if (et && typeof et.onCommitFiberUnmount == "function") try {
      et.onCommitFiberUnmount(qa, u);
    } catch {
    }
    switch (u.tag) {
      case 26:
        Cl || Ht(u, t), wt(l, t, u), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Cl || Ht(u, t);
        var a = zl, e = Il;
        Eu(u.type) && (zl = u.stateNode, Il = false), wt(l, t, u), be(u.stateNode), zl = a, Il = e;
        break;
      case 5:
        Cl || Ht(u, t);
      case 6:
        if (a = zl, e = Il, zl = null, wt(l, t, u), zl = a, Il = e, zl !== null) if (Il) try {
          (zl.nodeType === 9 ? zl.body : zl.nodeName === "HTML" ? zl.ownerDocument.body : zl).removeChild(u.stateNode);
        } catch (n) {
          hl(u, t, n);
        }
        else try {
          zl.removeChild(u.stateNode);
        } catch (n) {
          hl(u, t, n);
        }
        break;
      case 18:
        zl !== null && (Il ? (l = zl, ko(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, u.stateNode), Ra(l)) : ko(zl, u.stateNode));
        break;
      case 4:
        a = zl, e = Il, zl = u.stateNode.containerInfo, Il = true, wt(l, t, u), zl = a, Il = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        hu(2, u, t), Cl || hu(4, u, t), wt(l, t, u);
        break;
      case 1:
        Cl || (Ht(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && k0(u, t, a)), wt(l, t, u);
        break;
      case 21:
        wt(l, t, u);
        break;
      case 22:
        Cl = (a = Cl) || u.memoizedState !== null, wt(l, t, u), Cl = a;
        break;
      default:
        wt(l, t, u);
    }
  }
  function no(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ra(l);
      } catch (u) {
        hl(t, t.return, u);
      }
    }
  }
  function fo(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
      Ra(l);
    } catch (u) {
      hl(t, t.return, u);
    }
  }
  function s1(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new to()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new to()), t;
      default:
        throw Error(v(435, l.tag));
    }
  }
  function En(l, t) {
    var u = s1(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e = g1.bind(null, l, a);
        a.then(e, e);
      }
    });
  }
  function Pl(l, t) {
    var u = t.deletions;
    if (u !== null) for (var a = 0; a < u.length; a++) {
      var e = u[a], n = l, f = t, c = f;
      l: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (Eu(c.type)) {
              zl = c.stateNode, Il = false;
              break l;
            }
            break;
          case 5:
            zl = c.stateNode, Il = false;
            break l;
          case 3:
          case 4:
            zl = c.stateNode.containerInfo, Il = true;
            break l;
        }
        c = c.return;
      }
      if (zl === null) throw Error(v(160));
      eo(n, f, e), zl = null, Il = false, n = e.alternate, n !== null && (n.return = null), e.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) co(t, l), t = t.sibling;
  }
  var Ot = null;
  function co(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pl(t, l), lt(l), a & 4 && (hu(3, l, l.return), se(3, l), hu(5, l, l.return));
        break;
      case 1:
        Pl(t, l), lt(l), a & 512 && (Cl || u === null || Ht(u, u.return)), a & 64 && Jt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = Ot;
        if (Pl(t, l), lt(l), a & 512 && (Cl || u === null || Ht(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null) if (a === null) if (l.stateNode === null) {
            l: {
              a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
              t: switch (a) {
                case "title":
                  n = e.getElementsByTagName("title")[0], (!n || n[Ga] || n[Gl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(n, e.querySelector("head > title"))), Zl(n, a, u), n[Gl] = l, Bl(n), a = n;
                  break l;
                case "link":
                  var f = iv("link", "href", e).get(a + (u.href || ""));
                  if (f) {
                    for (var c = 0; c < f.length; c++) if (n = f[c], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                      f.splice(c, 1);
                      break t;
                    }
                  }
                  n = e.createElement(a), Zl(n, a, u), e.head.appendChild(n);
                  break;
                case "meta":
                  if (f = iv("meta", "content", e).get(a + (u.content || ""))) {
                    for (c = 0; c < f.length; c++) if (n = f[c], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                      f.splice(c, 1);
                      break t;
                    }
                  }
                  n = e.createElement(a), Zl(n, a, u), e.head.appendChild(n);
                  break;
                default:
                  throw Error(v(468, a));
              }
              n[Gl] = l, Bl(n), a = n;
            }
            l.stateNode = a;
          } else sv(e, l.type, l.stateNode);
          else l.stateNode = cv(e, a, l.memoizedProps);
          else n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? sv(e, l.type, l.stateNode) : cv(e, a, l.memoizedProps)) : a === null && l.stateNode !== null && pc(l, l.memoizedProps, u.memoizedProps);
        }
        break;
      case 27:
        Pl(t, l), lt(l), a & 512 && (Cl || u === null || Ht(u, u.return)), u !== null && a & 4 && pc(l, l.memoizedProps, u.memoizedProps);
        break;
      case 5:
        if (Pl(t, l), lt(l), a & 512 && (Cl || u === null || Ht(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Pu(e, "");
          } catch (N) {
            hl(l, l.return, N);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, pc(l, e, u !== null ? u.memoizedProps : e)), a & 1024 && (Rc = true);
        break;
      case 6:
        if (Pl(t, l), lt(l), a & 4) {
          if (l.stateNode === null) throw Error(v(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (N) {
            hl(l, l.return, N);
          }
        }
        break;
      case 3:
        if (Yn = null, e = Ot, Ot = qn(t.containerInfo), Pl(t, l), Ot = e, lt(l), a & 4 && u !== null && u.memoizedState.isDehydrated) try {
          Ra(t.containerInfo);
        } catch (N) {
          hl(l, l.return, N);
        }
        Rc && (Rc = false, io(l));
        break;
      case 4:
        a = Ot, Ot = qn(l.stateNode.containerInfo), Pl(t, l), lt(l), Ot = a;
        break;
      case 12:
        Pl(t, l), lt(l);
        break;
      case 31:
        Pl(t, l), lt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, En(l, a)));
        break;
      case 13:
        Pl(t, l), lt(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (zn = at()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, En(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, m = Jt, S = Cl;
        if (Jt = m || e, Cl = S || i, Pl(t, l), Cl = S, Jt = m, lt(l), a & 8192) l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Jt || Cl || Vu(l)), u = null, t = l; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (u === null) {
              i = u = t;
              try {
                if (n = i.stateNode, e) f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                else {
                  c = i.stateNode;
                  var z = i.memoizedProps.style, d = z != null && z.hasOwnProperty("display") ? z.display : null;
                  c.style.display = d == null || typeof d == "boolean" ? "" : ("" + d).trim();
                }
              } catch (N) {
                hl(i, i.return, N);
              }
            }
          } else if (t.tag === 6) {
            if (u === null) {
              i = t;
              try {
                i.stateNode.nodeValue = e ? "" : i.memoizedProps;
              } catch (N) {
                hl(i, i.return, N);
              }
            }
          } else if (t.tag === 18) {
            if (u === null) {
              i = t;
              try {
                var r = i.stateNode;
                e ? Io(r, true) : Io(i.stateNode, false);
              } catch (N) {
                hl(i, i.return, N);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === l) break l;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break l;
            u === t && (u = null), t = t.return;
          }
          u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
        }
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, En(l, u))));
        break;
      case 19:
        Pl(t, l), lt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, En(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pl(t, l), lt(l);
    }
  }
  function lt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (P0(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(v(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = Dc(l);
            bn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Pu(f, ""), u.flags &= -33);
            var c = Dc(l);
            bn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, m = Dc(l);
            Uc(l, m, i);
            break;
          default:
            throw Error(v(161));
        }
      } catch (S) {
        hl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function io(l) {
    if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
      var t = l;
      io(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
    }
  }
  function Wt(l, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) uo(l, t.alternate, t), t = t.sibling;
  }
  function Vu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          hu(4, t, t.return), Vu(t);
          break;
        case 1:
          Ht(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && k0(t, t.return, u), Vu(t);
          break;
        case 27:
          be(t.stateNode);
        case 26:
        case 5:
          Ht(t, t.return), Vu(t);
          break;
        case 22:
          t.memoizedState === null && Vu(t);
          break;
        case 30:
          Vu(t);
          break;
        default:
          Vu(t);
      }
      l = l.sibling;
    }
  }
  function $t(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          $t(e, n, u), se(4, n);
          break;
        case 1:
          if ($t(e, n, u), a = n, e = a.stateNode, typeof e.componentDidMount == "function") try {
            e.componentDidMount();
          } catch (m) {
            hl(a, a.return, m);
          }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null) for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++) Xs(i[e], c);
            } catch (m) {
              hl(a, a.return, m);
            }
          }
          u && f & 64 && F0(n), oe(n, n.return);
          break;
        case 27:
          lo(n);
        case 26:
        case 5:
          $t(e, n, u), u && a === null && f & 4 && I0(n), oe(n, n.return);
          break;
        case 12:
          $t(e, n, u);
          break;
        case 31:
          $t(e, n, u), u && f & 4 && no(e, n);
          break;
        case 13:
          $t(e, n, u), u && f & 4 && fo(e, n);
          break;
        case 22:
          n.memoizedState === null && $t(e, n, u), oe(n, n.return);
          break;
        case 30:
          break;
        default:
          $t(e, n, u);
      }
      t = t.sibling;
    }
  }
  function Nc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Fa(u));
  }
  function Hc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Fa(l));
  }
  function pt(l, t, u, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) so(l, t, u, a), t = t.sibling;
  }
  function so(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        pt(l, t, u, a), e & 2048 && se(9, t);
        break;
      case 1:
        pt(l, t, u, a);
        break;
      case 3:
        pt(l, t, u, a), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Fa(l)));
        break;
      case 12:
        if (e & 2048) {
          pt(l, t, u, a), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(f, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
          } catch (i) {
            hl(t, t.return, i);
          }
        } else pt(l, t, u, a);
        break;
      case 31:
        pt(l, t, u, a);
        break;
      case 13:
        pt(l, t, u, a);
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? pt(l, t, u, a) : ve(l, t) : n._visibility & 2 ? pt(l, t, u, a) : (n._visibility |= 2, ba(l, t, u, a, (t.subtreeFlags & 10256) !== 0 || false)), e & 2048 && Nc(f, t);
        break;
      case 24:
        pt(l, t, u, a), e & 2048 && Hc(t.alternate, t);
        break;
      default:
        pt(l, t, u, a);
    }
  }
  function ba(l, t, u, a, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, m = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ba(n, f, c, i, e), se(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null ? S._visibility & 2 ? ba(n, f, c, i, e) : ve(n, f) : (S._visibility |= 2, ba(n, f, c, i, e)), e && m & 2048 && Nc(f.alternate, f);
          break;
        case 24:
          ba(n, f, c, i, e), e && m & 2048 && Hc(f.alternate, f);
          break;
        default:
          ba(n, f, c, i, e);
      }
      t = t.sibling;
    }
  }
  function ve(l, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var u = l, a = t, e = a.flags;
      switch (a.tag) {
        case 22:
          ve(u, a), e & 2048 && Nc(a.alternate, a);
          break;
        case 24:
          ve(u, a), e & 2048 && Hc(a.alternate, a);
          break;
        default:
          ve(u, a);
      }
      t = t.sibling;
    }
  }
  var ye = 8192;
  function Ea(l, t, u) {
    if (l.subtreeFlags & ye) for (l = l.child; l !== null; ) oo(l, t, u), l = l.sibling;
  }
  function oo(l, t, u) {
    switch (l.tag) {
      case 26:
        Ea(l, t, u), l.flags & ye && l.memoizedState !== null && $1(u, Ot, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        Ea(l, t, u);
        break;
      case 3:
      case 4:
        var a = Ot;
        Ot = qn(l.stateNode.containerInfo), Ea(l, t, u), Ot = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = ye, ye = 16777216, Ea(l, t, u), ye = a) : Ea(l, t, u));
        break;
      default:
        Ea(l, t, u);
    }
  }
  function vo(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function he(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var u = 0; u < t.length; u++) {
        var a = t[u];
        Yl = a, ho(a, l);
      }
      vo(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) yo(l), l = l.sibling;
  }
  function yo(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        he(l), l.flags & 2048 && hu(9, l, l.return);
        break;
      case 3:
        he(l);
        break;
      case 12:
        he(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Tn(l)) : he(l);
        break;
      default:
        he(l);
    }
  }
  function Tn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var u = 0; u < t.length; u++) {
        var a = t[u];
        Yl = a, ho(a, l);
      }
      vo(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          hu(8, t, t.return), Tn(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, Tn(t));
          break;
        default:
          Tn(t);
      }
      l = l.sibling;
    }
  }
  function ho(l, t) {
    for (; Yl !== null; ) {
      var u = Yl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          hu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Fa(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Yl = a;
      else l: for (u = l; Yl !== null; ) {
        a = Yl;
        var e = a.sibling, n = a.return;
        if (ao(a), a === u) {
          Yl = null;
          break l;
        }
        if (e !== null) {
          e.return = n, Yl = e;
          break l;
        }
        Yl = n;
      }
    }
  }
  var o1 = { getCacheForType: function(l) {
    var t = Xl(Rl), u = t.data.get(l);
    return u === void 0 && (u = l(), t.data.set(l, u)), u;
  }, cacheSignal: function() {
    return Xl(Rl).controller.signal;
  } }, v1 = typeof WeakMap == "function" ? WeakMap : Map, sl = 0, bl = null, F = null, ll = 0, yl = 0, ot = null, mu = false, Ta = false, Cc = false, Ft = 0, _l = 0, du = 0, Ku = 0, qc = 0, vt = 0, za = 0, me = null, tt = null, Bc = false, zn = 0, mo = 0, An = 1 / 0, _n = null, ru = null, ql = 0, Su = null, Aa = null, kt = 0, Yc = 0, Gc = null, ro = null, de = 0, jc = null;
  function yt() {
    return (sl & 2) !== 0 && ll !== 0 ? ll & -ll : b.T !== null ? Vc() : Ni();
  }
  function So() {
    if (vt === 0) if ((ll & 536870912) === 0 || ul) {
      var l = Ne;
      Ne <<= 1, (Ne & 3932160) === 0 && (Ne = 262144), vt = l;
    } else vt = 536870912;
    return l = it.current, l !== null && (l.flags |= 32), vt;
  }
  function ut(l, t, u) {
    (l === bl && (yl === 2 || yl === 9) || l.cancelPendingCommit !== null) && (_a(l, 0), gu(l, ll, vt, false)), Ya(l, u), ((sl & 2) === 0 || l !== bl) && (l === bl && ((sl & 2) === 0 && (Ku |= u), _l === 4 && gu(l, ll, vt, false)), Ct(l));
  }
  function go(l, t, u) {
    if ((sl & 6) !== 0) throw Error(v(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ba(l, t), e = a ? m1(l, t) : Qc(l, t, true), n = a;
    do {
      if (e === 0) {
        Ta && !a && gu(l, t, 0, false);
        break;
      } else {
        if (u = l.current.alternate, n && !y1(u)) {
          e = Qc(l, t, false), n = false;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n) var f = 0;
          else f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = me;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (_a(c, f).flags |= 256), f = Qc(c, f, false), f !== 2) {
                if (Cc && !i) {
                  c.errorRecoveryDisabledLanes |= n, Ku |= n, e = 4;
                  break l;
                }
                n = tt, tt = e, n !== null && (tt === null ? tt = n : tt.push.apply(tt, n));
              }
              e = f;
            }
            if (n = false, e !== 2) continue;
          }
        }
        if (e === 1) {
          _a(l, 0), gu(l, t, 0, true);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(v(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              gu(a, t, vt, !mu);
              break l;
            case 2:
              tt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(v(329));
          }
          if ((t & 62914560) === t && (e = zn + 300 - at(), 10 < e)) {
            if (gu(a, t, vt, !mu), Ce(a, 0, true) !== 0) break l;
            kt = t, a.timeoutHandle = $o(bo.bind(null, a, u, tt, _n, Bc, t, vt, Ku, za, mu, n, "Throttled", -0, 0), e);
            break l;
          }
          bo(a, u, tt, _n, Bc, t, vt, Ku, za, mu, n, null, -0, 0);
        }
      }
      break;
    } while (true);
    Ct(l);
  }
  function bo(l, t, u, a, e, n, f, c, i, m, S, z, d, r) {
    if (l.timeoutHandle = -1, z = t.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Yt }, oo(t, n, z);
      var N = (n & 62914560) === n ? zn - at() : (n & 4194048) === n ? mo - at() : 0;
      if (N = F1(z, N), N !== null) {
        kt = n, l.cancelPendingCommit = N(po.bind(null, l, t, n, u, a, e, f, c, i, S, z, null, d, r)), gu(l, n, f, !m);
        return;
      }
    }
    po(l, t, n, u, a, e, f, c, i);
  }
  function y1(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null))) for (var a = 0; a < u.length; a++) {
        var e = u[a], n = e.getSnapshot;
        e = e.value;
        try {
          if (!ft(n(), e)) return false;
        } catch {
          return false;
        }
      }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null) u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function gu(l, t, u, a) {
    t &= ~qc, t &= ~Ku, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - nt(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && Di(l, u, t);
  }
  function Mn() {
    return (sl & 6) === 0 ? (re(0), false) : true;
  }
  function Xc() {
    if (F !== null) {
      if (yl === 0) var l = F.return;
      else l = F, Qt = Yu = null, tc(l), ma = null, Ia = 0, l = F;
      for (; l !== null; ) $0(l.alternate, l), l = l.return;
      F = null;
    }
  }
  function _a(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, H1(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), kt = 0, Xc(), bl = l, F = u = jt(l.current, null), ll = t, yl = 0, ot = null, mu = false, Ta = Ba(l, t), Cc = false, za = vt = qc = Ku = du = _l = 0, tt = me = null, Bc = false, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0) for (l = l.entanglements, a &= t; 0 < a; ) {
      var e = 31 - nt(a), n = 1 << e;
      t |= l[e], a &= ~n;
    }
    return Ft = t, Ke(), u;
  }
  function Eo(l, t) {
    K = null, b.H = fe, t === ha || t === Pe ? (t = Bs(), yl = 3) : t === xf ? (t = Bs(), yl = 4) : yl = t === Sc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ot = t, F === null && (_l = 1, mn(l, St(t, l.current)));
  }
  function To() {
    var l = it.current;
    return l === null ? true : (ll & 4194048) === ll ? Tt === null : (ll & 62914560) === ll || (ll & 536870912) !== 0 ? l === Tt : false;
  }
  function zo() {
    var l = b.H;
    return b.H = fe, l === null ? fe : l;
  }
  function Ao() {
    var l = b.A;
    return b.A = o1, l;
  }
  function On() {
    _l = 4, mu || (ll & 4194048) !== ll && it.current !== null || (Ta = true), (du & 134217727) === 0 && (Ku & 134217727) === 0 || bl === null || gu(bl, ll, vt, false);
  }
  function Qc(l, t, u) {
    var a = sl;
    sl |= 2;
    var e = zo(), n = Ao();
    (bl !== l || ll !== t) && (_n = null, _a(l, t)), t = false;
    var f = _l;
    l: do
      try {
        if (yl !== 0 && F !== null) {
          var c = F, i = ot;
          switch (yl) {
            case 8:
              Xc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              it.current === null && (t = true);
              var m = yl;
              if (yl = 0, ot = null, Ma(l, c, i, m), u && Ta) {
                f = 0;
                break l;
              }
              break;
            default:
              m = yl, yl = 0, ot = null, Ma(l, c, i, m);
          }
        }
        h1(), f = _l;
        break;
      } catch (S) {
        Eo(l, S);
      }
    while (true);
    return t && l.shellSuspendCounter++, Qt = Yu = null, sl = a, b.H = e, b.A = n, F === null && (bl = null, ll = 0, Ke()), f;
  }
  function h1() {
    for (; F !== null; ) _o(F);
  }
  function m1(l, t) {
    var u = sl;
    sl |= 2;
    var a = zo(), e = Ao();
    bl !== l || ll !== t ? (_n = null, An = at() + 500, _a(l, t)) : Ta = Ba(l, t);
    l: do
      try {
        if (yl !== 0 && F !== null) {
          t = F;
          var n = ot;
          t: switch (yl) {
            case 1:
              yl = 0, ot = null, Ma(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Cs(n)) {
                yl = 0, ot = null, Mo(t);
                break;
              }
              t = function() {
                yl !== 2 && yl !== 9 || bl !== l || (yl = 7), Ct(l);
              }, n.then(t, t);
              break l;
            case 3:
              yl = 7;
              break l;
            case 4:
              yl = 5;
              break l;
            case 7:
              Cs(n) ? (yl = 0, ot = null, Mo(t)) : (yl = 0, ot = null, Ma(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (F.tag) {
                case 26:
                  f = F.memoizedState;
                case 5:
                case 27:
                  var c = F;
                  if (f ? ov(f) : c.stateNode.complete) {
                    yl = 0, ot = null;
                    var i = c.sibling;
                    if (i !== null) F = i;
                    else {
                      var m = c.return;
                      m !== null ? (F = m, pn(m)) : F = null;
                    }
                    break t;
                  }
              }
              yl = 0, ot = null, Ma(l, t, n, 5);
              break;
            case 6:
              yl = 0, ot = null, Ma(l, t, n, 6);
              break;
            case 8:
              Xc(), _l = 6;
              break l;
            default:
              throw Error(v(462));
          }
        }
        d1();
        break;
      } catch (S) {
        Eo(l, S);
      }
    while (true);
    return Qt = Yu = null, b.H = a, b.A = e, sl = u, F !== null ? 0 : (bl = null, ll = 0, Ke(), _l);
  }
  function d1() {
    for (; F !== null && !jv(); ) _o(F);
  }
  function _o(l) {
    var t = w0(l.alternate, l, Ft);
    l.memoizedProps = l.pendingProps, t === null ? pn(l) : F = t;
  }
  function Mo(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Z0(u, t, t.pendingProps, t.type, void 0, ll);
        break;
      case 11:
        t = Z0(u, t, t.pendingProps, t.type.render, t.ref, ll);
        break;
      case 5:
        tc(t);
      default:
        $0(u, t), t = F = zs(t, Ft), t = w0(u, t, Ft);
    }
    l.memoizedProps = l.pendingProps, t === null ? pn(l) : F = t;
  }
  function Ma(l, t, u, a) {
    Qt = Yu = null, tc(t), ma = null, Ia = 0;
    var e = t.return;
    try {
      if (a1(l, e, t, u, ll)) {
        _l = 1, mn(l, St(u, l.current)), F = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw F = e, n;
      _l = 1, mn(l, St(u, l.current)), F = null;
      return;
    }
    t.flags & 32768 ? (ul || a === 1 ? l = true : Ta || (ll & 536870912) !== 0 ? l = false : (mu = l = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = it.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Oo(t, l)) : pn(t);
  }
  function pn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Oo(t, mu);
        return;
      }
      l = t.return;
      var u = f1(t.alternate, t, Ft);
      if (u !== null) {
        F = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        F = t;
        return;
      }
      F = t = l;
    } while (t !== null);
    _l === 0 && (_l = 5);
  }
  function Oo(l, t) {
    do {
      var u = c1(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, F = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        F = l;
        return;
      }
      F = l = u;
    } while (l !== null);
    _l = 6, F = null;
  }
  function po(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      Dn();
    while (ql !== 0);
    if ((sl & 6) !== 0) throw Error(v(327));
    if (t !== null) {
      if (t === l.current) throw Error(v(177));
      if (n = t.lanes | t.childLanes, n |= Df, Wv(l, u, n, f, c, i), l === bl && (F = bl = null, ll = 0), Aa = t, Su = l, kt = u, Yc = n, Gc = e, ro = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, b1(Ue, function() {
        return Ho(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null, e = p.p, p.p = 2, f = sl, sl |= 4;
        try {
          i1(l, t, u);
        } finally {
          sl = f, p.p = e, b.T = a;
        }
      }
      ql = 1, Do(), Uo(), Ro();
    }
  }
  function Do() {
    if (ql === 1) {
      ql = 0;
      var l = Su, t = Aa, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = b.T, b.T = null;
        var a = p.p;
        p.p = 2;
        var e = sl;
        sl |= 4;
        try {
          co(t, l);
          var n = Ic, f = hs(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && ys(c.ownerDocument.documentElement, c)) {
            if (i !== null && Af(c)) {
              var m = i.start, S = i.end;
              if (S === void 0 && (S = m), "selectionStart" in c) c.selectionStart = m, c.selectionEnd = Math.min(S, c.value.length);
              else {
                var z = c.ownerDocument || document, d = z && z.defaultView || window;
                if (d.getSelection) {
                  var r = d.getSelection(), N = c.textContent.length, G = Math.min(i.start, N), Sl = i.end === void 0 ? G : Math.min(i.end, N);
                  !r.extend && G > Sl && (f = Sl, Sl = G, G = f);
                  var y = vs(c, G), s = vs(c, Sl);
                  if (y && s && (r.rangeCount !== 1 || r.anchorNode !== y.node || r.anchorOffset !== y.offset || r.focusNode !== s.node || r.focusOffset !== s.offset)) {
                    var h = z.createRange();
                    h.setStart(y.node, y.offset), r.removeAllRanges(), G > Sl ? (r.addRange(h), r.extend(s.node, s.offset)) : (h.setEnd(s.node, s.offset), r.addRange(h));
                  }
                }
              }
            }
            for (z = [], r = c; r = r.parentNode; ) r.nodeType === 1 && z.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < z.length; c++) {
              var T = z[c];
              T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
            }
          }
          Qn = !!kc, Ic = kc = null;
        } finally {
          sl = e, p.p = a, b.T = u;
        }
      }
      l.current = t, ql = 2;
    }
  }
  function Uo() {
    if (ql === 2) {
      ql = 0;
      var l = Su, t = Aa, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = b.T, b.T = null;
        var a = p.p;
        p.p = 2;
        var e = sl;
        sl |= 4;
        try {
          uo(l, t.alternate, t);
        } finally {
          sl = e, p.p = a, b.T = u;
        }
      }
      ql = 3;
    }
  }
  function Ro() {
    if (ql === 4 || ql === 3) {
      ql = 0, Xv();
      var l = Su, t = Aa, u = kt, a = ro;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ql = 5 : (ql = 0, Aa = Su = null, No(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (ru = null), af(u), t = t.stateNode, et && typeof et.onCommitFiberRoot == "function") try {
        et.onCommitFiberRoot(qa, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (a !== null) {
        t = b.T, e = p.p, p.p = 2, b.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          b.T = t, p.p = e;
        }
      }
      (kt & 3) !== 0 && Dn(), Ct(l), e = l.pendingLanes, (u & 261930) !== 0 && (e & 42) !== 0 ? l === jc ? de++ : (de = 0, jc = l) : de = 0, re(0);
    }
  }
  function No(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Fa(t)));
  }
  function Dn() {
    return Do(), Uo(), Ro(), Ho();
  }
  function Ho() {
    if (ql !== 5) return false;
    var l = Su, t = Yc;
    Yc = 0;
    var u = af(kt), a = b.T, e = p.p;
    try {
      p.p = 32 > u ? 32 : u, b.T = null, u = Gc, Gc = null;
      var n = Su, f = kt;
      if (ql = 0, Aa = Su = null, kt = 0, (sl & 6) !== 0) throw Error(v(331));
      var c = sl;
      if (sl |= 4, yo(n.current), so(n, n.current, f, u), sl = c, re(0, false), et && typeof et.onPostCommitFiberRoot == "function") try {
        et.onPostCommitFiberRoot(qa, n);
      } catch {
      }
      return true;
    } finally {
      p.p = e, b.T = a, No(l, t);
    }
  }
  function Co(l, t, u) {
    t = St(u, t), t = rc(l.stateNode, t, 2), l = ou(l, t, 2), l !== null && (Ya(l, 2), Ct(l));
  }
  function hl(l, t, u) {
    if (l.tag === 3) Co(l, l, u);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Co(t, l, u);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ru === null || !ru.has(a))) {
          l = St(u, l), u = C0(2), a = ou(t, u, 2), a !== null && (q0(u, a, t, l), Ya(a, 2), Ct(a));
          break;
        }
      }
      t = t.return;
    }
  }
  function Zc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new v1();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (Cc = true, e.add(u), l = r1.bind(null, l, t, u), t.then(l, l));
  }
  function r1(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, bl === l && (ll & u) === u && (_l === 4 || _l === 3 && (ll & 62914560) === ll && 300 > at() - zn ? (sl & 2) === 0 && _a(l, 0) : qc |= u, za === ll && (za = 0)), Ct(l);
  }
  function qo(l, t) {
    t === 0 && (t = pi()), l = Cu(l, t), l !== null && (Ya(l, t), Ct(l));
  }
  function S1(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), qo(l, u);
  }
  function g1(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(v(314));
    }
    a !== null && a.delete(t), qo(l, u);
  }
  function b1(l, t) {
    return Pn(l, t);
  }
  var Un = null, Oa = null, Lc = false, Rn = false, xc = false, bu = 0;
  function Ct(l) {
    l !== Oa && l.next === null && (Oa === null ? Un = Oa = l : Oa = Oa.next = l), Rn = true, Lc || (Lc = true, T1());
  }
  function re(l, t) {
    if (!xc && Rn) {
      xc = true;
      do
        for (var u = false, a = Un; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - nt(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = true, jo(a, n));
          } else n = ll, n = Ce(a, a === bl ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || Ba(a, n) || (u = true, jo(a, n));
          a = a.next;
        }
      while (u);
      xc = false;
    }
  }
  function E1() {
    Bo();
  }
  function Bo() {
    Rn = Lc = false;
    var l = 0;
    bu !== 0 && N1() && (l = bu);
    for (var t = at(), u = null, a = Un; a !== null; ) {
      var e = a.next, n = Yo(a, t);
      n === 0 ? (a.next = null, u === null ? Un = e : u.next = e, e === null && (Oa = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (Rn = true)), a = e;
    }
    ql !== 0 && ql !== 5 || re(l), bu !== 0 && (bu = 0);
  }
  function Yo(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - nt(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = wv(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = bl, u = ll, u = Ce(l, l === t ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, u === 0 || l === t && (yl === 2 || yl === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && lf(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Ba(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && lf(a), af(u)) {
        case 2:
        case 8:
          u = Mi;
          break;
        case 32:
          u = Ue;
          break;
        case 268435456:
          u = Oi;
          break;
        default:
          u = Ue;
      }
      return a = Go.bind(null, l), u = Pn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && lf(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Go(l, t) {
    if (ql !== 0 && ql !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Dn() && l.callbackNode !== u) return null;
    var a = ll;
    return a = Ce(l, l === bl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (go(l, a, t), Yo(l, at()), l.callbackNode != null && l.callbackNode === u ? Go.bind(null, l) : null);
  }
  function jo(l, t) {
    if (Dn()) return null;
    go(l, t, true);
  }
  function T1() {
    C1(function() {
      (sl & 6) !== 0 ? Pn(_i, E1) : Bo();
    });
  }
  function Vc() {
    if (bu === 0) {
      var l = va;
      l === 0 && (l = Re, Re <<= 1, (Re & 261888) === 0 && (Re = 256)), bu = l;
    }
    return bu;
  }
  function Xo(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ge("" + l);
  }
  function Qo(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function z1(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = Xo((e[Fl] || null).action), f = a.submitter;
      f && (t = (t = f[Fl] || null) ? Xo(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new Ze("action", "action", null, a, e);
      l.push({ event: c, listeners: [{ instance: null, listener: function() {
        if (a.defaultPrevented) {
          if (bu !== 0) {
            var i = f ? Qo(e, f) : new FormData(e);
            oc(u, { pending: true, data: i, method: e.method, action: n }, null, i);
          }
        } else typeof n == "function" && (c.preventDefault(), i = f ? Qo(e, f) : new FormData(e), oc(u, { pending: true, data: i, method: e.method, action: n }, n, i));
      }, currentTarget: e }] });
    }
  }
  for (var Kc = 0; Kc < pf.length; Kc++) {
    var Jc = pf[Kc], A1 = Jc.toLowerCase(), _1 = Jc[0].toUpperCase() + Jc.slice(1);
    Mt(A1, "on" + _1);
  }
  Mt(rs, "onAnimationEnd"), Mt(Ss, "onAnimationIteration"), Mt(gs, "onAnimationStart"), Mt("dblclick", "onDoubleClick"), Mt("focusin", "onFocus"), Mt("focusout", "onBlur"), Mt(Qy, "onTransitionRun"), Mt(Zy, "onTransitionStart"), Mt(Ly, "onTransitionCancel"), Mt(bs, "onTransitionEnd"), ku("onMouseEnter", ["mouseout", "mouseover"]), ku("onMouseLeave", ["mouseout", "mouseover"]), ku("onPointerEnter", ["pointerout", "pointerover"]), ku("onPointerLeave", ["pointerout", "pointerover"]), Uu("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Uu("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Uu("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Uu("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Uu("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Uu("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Se = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), M1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Se));
  function Zo(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t) for (var f = a.length - 1; 0 <= f; f--) {
          var c = a[f], i = c.instance, m = c.currentTarget;
          if (c = c.listener, i !== n && e.isPropagationStopped()) break l;
          n = c, e.currentTarget = m;
          try {
            n(e);
          } catch (S) {
            Ve(S);
          }
          e.currentTarget = null, n = i;
        }
        else for (f = 0; f < a.length; f++) {
          if (c = a[f], i = c.instance, m = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped()) break l;
          n = c, e.currentTarget = m;
          try {
            n(e);
          } catch (S) {
            Ve(S);
          }
          e.currentTarget = null, n = i;
        }
      }
    }
  }
  function k(l, t) {
    var u = t[ef];
    u === void 0 && (u = t[ef] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (Lo(t, l, 2, false), u.add(a));
  }
  function wc(l, t, u) {
    var a = 0;
    t && (a |= 4), Lo(u, l, a, t);
  }
  var Nn = "_reactListening" + Math.random().toString(36).slice(2);
  function Wc(l) {
    if (!l[Nn]) {
      l[Nn] = true, qi.forEach(function(u) {
        u !== "selectionchange" && (M1.has(u) || wc(u, false, l), wc(u, true, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Nn] || (t[Nn] = true, wc("selectionchange", false, t));
    }
  }
  function Lo(l, t, u, a) {
    switch (Sv(t)) {
      case 2:
        var e = P1;
        break;
      case 8:
        e = lh;
        break;
      default:
        e = si;
    }
    u = e.bind(null, t, u, l), e = void 0, !mf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = true), a ? e !== void 0 ? l.addEventListener(t, u, { capture: true, passive: e }) : l.addEventListener(t, u, true) : e !== void 0 ? l.addEventListener(t, u, { passive: e }) : l.addEventListener(t, u, false);
  }
  function $c(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) l: for (; ; ) {
      if (a === null) return;
      var f = a.tag;
      if (f === 3 || f === 4) {
        var c = a.stateNode.containerInfo;
        if (c === e) break;
        if (f === 4) for (f = a.return; f !== null; ) {
          var i = f.tag;
          if ((i === 3 || i === 4) && f.stateNode.containerInfo === e) return;
          f = f.return;
        }
        for (; c !== null; ) {
          if (f = Wu(c), f === null) return;
          if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
            a = n = f;
            continue l;
          }
          c = c.parentNode;
        }
      }
      a = a.return;
    }
    Ji(function() {
      var m = n, S = yf(u), z = [];
      l: {
        var d = Es.get(l);
        if (d !== void 0) {
          var r = Ze, N = l;
          switch (l) {
            case "keypress":
              if (Xe(u) === 0) break l;
            case "keydown":
            case "keyup":
              r = gy;
              break;
            case "focusin":
              N = "focus", r = gf;
              break;
            case "focusout":
              N = "blur", r = gf;
              break;
            case "beforeblur":
            case "afterblur":
              r = gf;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              r = $i;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = fy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = Ty;
              break;
            case rs:
            case Ss:
            case gs:
              r = sy;
              break;
            case bs:
              r = Ay;
              break;
            case "scroll":
            case "scrollend":
              r = ey;
              break;
            case "wheel":
              r = My;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = vy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = ki;
              break;
            case "toggle":
            case "beforetoggle":
              r = py;
          }
          var G = (t & 4) !== 0, Sl = !G && (l === "scroll" || l === "scrollend"), y = G ? d !== null ? d + "Capture" : null : d;
          G = [];
          for (var s = m, h; s !== null; ) {
            var T = s;
            if (h = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || h === null || y === null || (T = Xa(s, y), T != null && G.push(ge(s, T, h))), Sl) break;
            s = s.return;
          }
          0 < G.length && (d = new r(d, N, null, u, S), z.push({ event: d, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (d = l === "mouseover" || l === "pointerover", r = l === "mouseout" || l === "pointerout", d && u !== vf && (N = u.relatedTarget || u.fromElement) && (Wu(N) || N[wu])) break l;
          if ((r || d) && (d = S.window === S ? S : (d = S.ownerDocument) ? d.defaultView || d.parentWindow : window, r ? (N = u.relatedTarget || u.toElement, r = m, N = N ? Wu(N) : null, N !== null && (Sl = O(N), G = N.tag, N !== Sl || G !== 5 && G !== 27 && G !== 6) && (N = null)) : (r = null, N = m), r !== N)) {
            if (G = $i, T = "onMouseLeave", y = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (G = ki, T = "onPointerLeave", y = "onPointerEnter", s = "pointer"), Sl = r == null ? d : ja(r), h = N == null ? d : ja(N), d = new G(T, s + "leave", r, u, S), d.target = Sl, d.relatedTarget = h, T = null, Wu(S) === m && (G = new G(y, s + "enter", N, u, S), G.target = h, G.relatedTarget = Sl, T = G), Sl = T, r && N) t: {
              for (G = O1, y = r, s = N, h = 0, T = y; T; T = G(T)) h++;
              T = 0;
              for (var Y = s; Y; Y = G(Y)) T++;
              for (; 0 < h - T; ) y = G(y), h--;
              for (; 0 < T - h; ) s = G(s), T--;
              for (; h--; ) {
                if (y === s || s !== null && y === s.alternate) {
                  G = y;
                  break t;
                }
                y = G(y), s = G(s);
              }
              G = null;
            }
            else G = null;
            r !== null && xo(z, d, r, G, false), N !== null && Sl !== null && xo(z, Sl, N, G, true);
          }
        }
        l: {
          if (d = m ? ja(m) : window, r = d.nodeName && d.nodeName.toLowerCase(), r === "select" || r === "input" && d.type === "file") var fl = ns;
          else if (as(d)) if (fs) fl = Gy;
          else {
            fl = By;
            var C = qy;
          }
          else r = d.nodeName, !r || r.toLowerCase() !== "input" || d.type !== "checkbox" && d.type !== "radio" ? m && of(m.elementType) && (fl = ns) : fl = Yy;
          if (fl && (fl = fl(l, m))) {
            es(z, fl, u, S);
            break l;
          }
          C && C(l, d, m), l === "focusout" && m && d.type === "number" && m.memoizedProps.value != null && sf(d, "number", d.value);
        }
        switch (C = m ? ja(m) : window, l) {
          case "focusin":
            (as(C) || C.contentEditable === "true") && (aa = C, _f = m, wa = null);
            break;
          case "focusout":
            wa = _f = aa = null;
            break;
          case "mousedown":
            Mf = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Mf = false, ms(z, u, S);
            break;
          case "selectionchange":
            if (Xy) break;
          case "keydown":
          case "keyup":
            ms(z, u, S);
        }
        var J;
        if (Ef) l: {
          switch (l) {
            case "compositionstart":
              var tl = "onCompositionStart";
              break l;
            case "compositionend":
              tl = "onCompositionEnd";
              break l;
            case "compositionupdate":
              tl = "onCompositionUpdate";
              break l;
          }
          tl = void 0;
        }
        else ua ? ts(l, u) && (tl = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (tl = "onCompositionStart");
        tl && (Ii && u.locale !== "ko" && (ua || tl !== "onCompositionStart" ? tl === "onCompositionEnd" && ua && (J = wi()) : (au = S, df = "value" in au ? au.value : au.textContent, ua = true)), C = Hn(m, tl), 0 < C.length && (tl = new Fi(tl, l, null, u, S), z.push({ event: tl, listeners: C }), J ? tl.data = J : (J = us(u), J !== null && (tl.data = J)))), (J = Uy ? Ry(l, u) : Ny(l, u)) && (tl = Hn(m, "onBeforeInput"), 0 < tl.length && (C = new Fi("onBeforeInput", "beforeinput", null, u, S), z.push({ event: C, listeners: tl }), C.data = J)), z1(z, l, m, u, S);
      }
      Zo(z, t);
    });
  }
  function ge(l, t, u) {
    return { instance: l, listener: t, currentTarget: u };
  }
  function Hn(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Xa(l, u), e != null && a.unshift(ge(l, e, n)), e = Xa(l, t), e != null && a.push(ge(l, e, n))), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function O1(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function xo(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, m = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || m === null || (i = m, e ? (m = Xa(u, n), m != null && f.unshift(ge(u, m, i))) : e || (m = Xa(u, n), m != null && f.push(ge(u, m, i)))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var p1 = /\r\n?/g, D1 = /\u0000|\uFFFD/g;
  function Vo(l) {
    return (typeof l == "string" ? l : "" + l).replace(p1, `
`).replace(D1, "");
  }
  function Ko(l, t) {
    return t = Vo(t), Vo(l) === t;
  }
  function rl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Pu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Pu(l, "" + a);
        break;
      case "className":
        Be(l, "class", a);
        break;
      case "tabIndex":
        Be(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Be(l, u, a);
        break;
      case "style":
        Vi(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Be(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ge("" + a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(u, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof n == "function" && (u === "formAction" ? (t !== "input" && rl(l, t, "name", e.name, e, null), rl(l, t, "formEncType", e.formEncType, e, null), rl(l, t, "formMethod", e.formMethod, e, null), rl(l, t, "formTarget", e.formTarget, e, null)) : (rl(l, t, "encType", e.encType, e, null), rl(l, t, "method", e.method, e, null), rl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ge("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Yt);
        break;
      case "onScroll":
        a != null && k("scroll", l);
        break;
      case "onScrollEnd":
        a != null && k("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(v(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(v(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Ge("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", u);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "" + a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === true ? l.setAttribute(u, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        k("beforetoggle", l), k("toggle", l), qe(l, "popover", a);
        break;
      case "xlinkActuate":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        qe(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = uy.get(u) || u, qe(l, u, a));
    }
  }
  function Fc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Vi(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(v(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(v(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Pu(l, a) : (typeof a == "number" || typeof a == "bigint") && Pu(l, "" + a);
        break;
      case "onScroll":
        a != null && k("scroll", l);
        break;
      case "onScrollEnd":
        a != null && k("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Yt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Bi.hasOwnProperty(u)) l: {
          if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[Fl] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
            typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
            break l;
          }
          u in l ? l[u] = a : a === true ? l.setAttribute(u, "") : qe(l, u, a);
        }
    }
  }
  function Zl(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        k("error", l), k("load", l);
        var a = false, e = false, n;
        for (n in u) if (u.hasOwnProperty(n)) {
          var f = u[n];
          if (f != null) switch (n) {
            case "src":
              a = true;
              break;
            case "srcSet":
              e = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(v(137, t));
            default:
              rl(l, t, n, f, u, null);
          }
        }
        e && rl(l, t, "srcSet", u.srcSet, u, null), a && rl(l, t, "src", u.src, u, null);
        return;
      case "input":
        k("invalid", l);
        var c = n = f = e = null, i = null, m = null;
        for (a in u) if (u.hasOwnProperty(a)) {
          var S = u[a];
          if (S != null) switch (a) {
            case "name":
              e = S;
              break;
            case "type":
              f = S;
              break;
            case "checked":
              i = S;
              break;
            case "defaultChecked":
              m = S;
              break;
            case "value":
              n = S;
              break;
            case "defaultValue":
              c = S;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (S != null) throw Error(v(137, t));
              break;
            default:
              rl(l, t, a, S, u, null);
          }
        }
        Qi(l, n, c, i, m, f, e, false);
        return;
      case "select":
        k("invalid", l), a = f = n = null;
        for (e in u) if (u.hasOwnProperty(e) && (c = u[e], c != null)) switch (e) {
          case "value":
            n = c;
            break;
          case "defaultValue":
            f = c;
            break;
          case "multiple":
            a = c;
          default:
            rl(l, t, e, c, u, null);
        }
        t = n, u = f, l.multiple = !!a, t != null ? Iu(l, !!a, t, false) : u != null && Iu(l, !!a, u, true);
        return;
      case "textarea":
        k("invalid", l), n = e = a = null;
        for (f in u) if (u.hasOwnProperty(f) && (c = u[f], c != null)) switch (f) {
          case "value":
            a = c;
            break;
          case "defaultValue":
            e = c;
            break;
          case "children":
            n = c;
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(v(91));
            break;
          default:
            rl(l, t, f, c, u, null);
        }
        Li(l, a, e, n);
        return;
      case "option":
        for (i in u) if (u.hasOwnProperty(i) && (a = u[i], a != null)) switch (i) {
          case "selected":
            l.selected = a && typeof a != "function" && typeof a != "symbol";
            break;
          default:
            rl(l, t, i, a, u, null);
        }
        return;
      case "dialog":
        k("beforetoggle", l), k("toggle", l), k("cancel", l), k("close", l);
        break;
      case "iframe":
      case "object":
        k("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Se.length; a++) k(Se[a], l);
        break;
      case "image":
        k("error", l), k("load", l);
        break;
      case "details":
        k("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        k("error", l), k("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (m in u) if (u.hasOwnProperty(m) && (a = u[m], a != null)) switch (m) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(137, t));
          default:
            rl(l, t, m, a, u, null);
        }
        return;
      default:
        if (of(t)) {
          for (S in u) u.hasOwnProperty(S) && (a = u[S], a !== void 0 && Fc(l, t, S, a, u, void 0));
          return;
        }
    }
    for (c in u) u.hasOwnProperty(c) && (a = u[c], a != null && rl(l, t, c, a, u, null));
  }
  function U1(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, m = null, S = null;
        for (r in u) {
          var z = u[r];
          if (u.hasOwnProperty(r) && z != null) switch (r) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              i = z;
            default:
              a.hasOwnProperty(r) || rl(l, t, r, null, a, z);
          }
        }
        for (var d in a) {
          var r = a[d];
          if (z = u[d], a.hasOwnProperty(d) && (r != null || z != null)) switch (d) {
            case "type":
              n = r;
              break;
            case "name":
              e = r;
              break;
            case "checked":
              m = r;
              break;
            case "defaultChecked":
              S = r;
              break;
            case "value":
              f = r;
              break;
            case "defaultValue":
              c = r;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (r != null) throw Error(v(137, t));
              break;
            default:
              r !== z && rl(l, t, d, r, a, z);
          }
        }
        cf(l, f, c, i, m, S, n, e);
        return;
      case "select":
        r = f = c = d = null;
        for (n in u) if (i = u[n], u.hasOwnProperty(n) && i != null) switch (n) {
          case "value":
            break;
          case "multiple":
            r = i;
          default:
            a.hasOwnProperty(n) || rl(l, t, n, null, a, i);
        }
        for (e in a) if (n = a[e], i = u[e], a.hasOwnProperty(e) && (n != null || i != null)) switch (e) {
          case "value":
            d = n;
            break;
          case "defaultValue":
            c = n;
            break;
          case "multiple":
            f = n;
          default:
            n !== i && rl(l, t, e, n, a, i);
        }
        t = c, u = f, a = r, d != null ? Iu(l, !!u, d, false) : !!a != !!u && (t != null ? Iu(l, !!u, t, true) : Iu(l, !!u, u ? [] : "", false));
        return;
      case "textarea":
        r = d = null;
        for (c in u) if (e = u[c], u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            rl(l, t, c, null, a, e);
        }
        for (f in a) if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null)) switch (f) {
          case "value":
            d = e;
            break;
          case "defaultValue":
            r = e;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (e != null) throw Error(v(91));
            break;
          default:
            e !== n && rl(l, t, f, e, a, n);
        }
        Zi(l, d, r);
        return;
      case "option":
        for (var N in u) if (d = u[N], u.hasOwnProperty(N) && d != null && !a.hasOwnProperty(N)) switch (N) {
          case "selected":
            l.selected = false;
            break;
          default:
            rl(l, t, N, null, a, d);
        }
        for (i in a) if (d = a[i], r = u[i], a.hasOwnProperty(i) && d !== r && (d != null || r != null)) switch (i) {
          case "selected":
            l.selected = d && typeof d != "function" && typeof d != "symbol";
            break;
          default:
            rl(l, t, i, d, a, r);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var G in u) d = u[G], u.hasOwnProperty(G) && d != null && !a.hasOwnProperty(G) && rl(l, t, G, null, a, d);
        for (m in a) if (d = a[m], r = u[m], a.hasOwnProperty(m) && d !== r && (d != null || r != null)) switch (m) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (d != null) throw Error(v(137, t));
            break;
          default:
            rl(l, t, m, d, a, r);
        }
        return;
      default:
        if (of(t)) {
          for (var Sl in u) d = u[Sl], u.hasOwnProperty(Sl) && d !== void 0 && !a.hasOwnProperty(Sl) && Fc(l, t, Sl, void 0, a, d);
          for (S in a) d = a[S], r = u[S], !a.hasOwnProperty(S) || d === r || d === void 0 && r === void 0 || Fc(l, t, S, d, a, r);
          return;
        }
    }
    for (var y in u) d = u[y], u.hasOwnProperty(y) && d != null && !a.hasOwnProperty(y) && rl(l, t, y, null, a, d);
    for (z in a) d = a[z], r = u[z], !a.hasOwnProperty(z) || d === r || d == null && r == null || rl(l, t, z, d, a, r);
  }
  function Jo(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function R1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e = u[a], n = e.transferSize, f = e.initiatorType, c = e.duration;
        if (n && c && Jo(f)) {
          for (f = 0, c = e.responseEnd, a += 1; a < u.length; a++) {
            var i = u[a], m = i.startTime;
            if (m > c) break;
            var S = i.transferSize, z = i.initiatorType;
            S && Jo(z) && (i = i.responseEnd, f += S * (i < c ? 1 : (c - m) / (i - m)));
          }
          if (--a, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var kc = null, Ic = null;
  function Cn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function wo(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Wo(l, t) {
    if (l === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Pc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var li = null;
  function N1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === li ? false : (li = l, true) : (li = null, false);
  }
  var $o = typeof setTimeout == "function" ? setTimeout : void 0, H1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Fo = typeof Promise == "function" ? Promise : void 0, C1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fo < "u" ? function(l) {
    return Fo.resolve(null).then(l).catch(q1);
  } : $o;
  function q1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Eu(l) {
    return l === "head";
  }
  function ko(l, t) {
    var u = t, a = 0;
    do {
      var e = u.nextSibling;
      if (l.removeChild(u), e && e.nodeType === 8) if (u = e.data, u === "/$" || u === "/&") {
        if (a === 0) {
          l.removeChild(e), Ra(t);
          return;
        }
        a--;
      } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&") a++;
      else if (u === "html") be(l.ownerDocument.documentElement);
      else if (u === "head") {
        u = l.ownerDocument.head, be(u);
        for (var n = u.firstChild; n; ) {
          var f = n.nextSibling, c = n.nodeName;
          n[Ga] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
        }
      } else u === "body" && be(l.ownerDocument.body);
      u = e;
    } while (u);
    Ra(t);
  }
  function Io(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (u.nodeType === 1 ? t ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (t ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), a && a.nodeType === 8) if (u = a.data, u === "/$") {
        if (l === 0) break;
        l--;
      } else u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = a;
    } while (u);
  }
  function ti(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ti(u), nf(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function B1(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Ga]) switch (t) {
          case "meta":
            if (!l.hasAttribute("itemprop")) break;
            return l;
          case "link":
            if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
            if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title)) break;
            return l;
          case "style":
            if (l.hasAttribute("data-precedence")) break;
            return l;
          case "script":
            if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
            return l;
          default:
            return l;
        }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (l = zt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Y1(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = zt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Po(l, t) {
    for (; l.nodeType !== 8; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = zt(l.nextSibling), l === null)) return null;
    return l;
  }
  function ui(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function ai(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function G1(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading") t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function zt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var ei = null;
  function lv(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0) return zt(l.nextSibling);
          t--;
        } else u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function tv(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else u !== "/$" && u !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function uv(l, t, u) {
    switch (t = Cn(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(v(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(v(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(v(454));
        return l;
      default:
        throw Error(v(451));
    }
  }
  function be(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    nf(l);
  }
  var At = /* @__PURE__ */ new Map(), av = /* @__PURE__ */ new Set();
  function qn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var It = p.d;
  p.d = { f: j1, r: X1, D: Q1, C: Z1, L: L1, m: x1, X: K1, S: V1, M: J1 };
  function j1() {
    var l = It.f(), t = Mn();
    return l || t;
  }
  function X1(l) {
    var t = $u(l);
    t !== null && t.tag === 5 && t.type === "form" ? b0(t) : It.r(l);
  }
  var pa = typeof document > "u" ? null : document;
  function ev(l, t, u) {
    var a = pa;
    if (a && typeof t == "string" && t) {
      var e = dt(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), av.has(e) || (av.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Zl(t, "link", l), Bl(t), a.head.appendChild(t)));
    }
  }
  function Q1(l) {
    It.D(l), ev("dns-prefetch", l, null);
  }
  function Z1(l, t) {
    It.C(l, t), ev("preconnect", l, t);
  }
  function L1(l, t, u) {
    It.L(l, t, u);
    var a = pa;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + dt(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + dt(u.imageSrcSet) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + dt(u.imageSizes) + '"]')) : e += '[href="' + dt(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Da(l);
          break;
        case "script":
          n = Ua(l);
      }
      At.has(n) || (l = q({ rel: "preload", href: t === "image" && u && u.imageSrcSet ? void 0 : l, as: t }, u), At.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(Ee(n)) || t === "script" && a.querySelector(Te(n)) || (t = a.createElement("link"), Zl(t, "link", l), Bl(t), a.head.appendChild(t)));
    }
  }
  function x1(l, t) {
    It.m(l, t);
    var u = pa;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + dt(a) + '"][href="' + dt(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ua(l);
      }
      if (!At.has(n) && (l = q({ rel: "modulepreload", href: l }, t), At.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Te(n))) return;
        }
        a = u.createElement("link"), Zl(a, "link", l), Bl(a), u.head.appendChild(a);
      }
    }
  }
  function V1(l, t, u) {
    It.S(l, t, u);
    var a = pa;
    if (a && l) {
      var e = Fu(a).hoistableStyles, n = Da(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(Ee(n))) c.loading = 5;
        else {
          l = q({ rel: "stylesheet", href: l, "data-precedence": t }, u), (u = At.get(n)) && ni(l, u);
          var i = f = a.createElement("link");
          Bl(i), Zl(i, "link", l), i._p = new Promise(function(m, S) {
            i.onload = m, i.onerror = S;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Bn(f, t, a);
        }
        f = { type: "stylesheet", instance: f, count: 1, state: c }, e.set(n, f);
      }
    }
  }
  function K1(l, t) {
    It.X(l, t);
    var u = pa;
    if (u && l) {
      var a = Fu(u).hoistableScripts, e = Ua(l), n = a.get(e);
      n || (n = u.querySelector(Te(e)), n || (l = q({ src: l, async: true }, t), (t = At.get(e)) && fi(l, t), n = u.createElement("script"), Bl(n), Zl(n, "link", l), u.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, a.set(e, n));
    }
  }
  function J1(l, t) {
    It.M(l, t);
    var u = pa;
    if (u && l) {
      var a = Fu(u).hoistableScripts, e = Ua(l), n = a.get(e);
      n || (n = u.querySelector(Te(e)), n || (l = q({ src: l, async: true, type: "module" }, t), (t = At.get(e)) && fi(l, t), n = u.createElement("script"), Bl(n), Zl(n, "link", l), u.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, a.set(e, n));
    }
  }
  function nv(l, t, u, a) {
    var e = (e = $.current) ? qn(e) : null;
    if (!e) throw Error(v(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = Da(u.href), u = Fu(e).hoistableStyles, a = u.get(t), a || (a = { type: "style", instance: null, count: 0, state: null }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Da(u.href);
          var n = Fu(e).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, n.set(l, f), (n = e.querySelector(Ee(l))) && !n._p && (f.instance = n, f.state.loading = 5), At.has(l) || (u = { rel: "preload", as: "style", href: u.href, crossOrigin: u.crossOrigin, integrity: u.integrity, media: u.media, hrefLang: u.hrefLang, referrerPolicy: u.referrerPolicy }, At.set(l, u), n || w1(e, l, u, f.state))), t && a === null) throw Error(v(528, ""));
          return f;
        }
        if (t && a !== null) throw Error(v(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ua(u), u = Fu(e).hoistableScripts, a = u.get(t), a || (a = { type: "script", instance: null, count: 0, state: null }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(v(444, l));
    }
  }
  function Da(l) {
    return 'href="' + dt(l) + '"';
  }
  function Ee(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function fv(l) {
    return q({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function w1(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Zl(t, "link", u), Bl(t), l.head.appendChild(t));
  }
  function Ua(l) {
    return '[src="' + dt(l) + '"]';
  }
  function Te(l) {
    return "script[async]" + l;
  }
  function cv(l, t, u) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var a = l.querySelector('style[data-href~="' + dt(u.href) + '"]');
        if (a) return t.instance = a, Bl(a), a;
        var e = q({}, u, { "data-href": u.href, "data-precedence": u.precedence, href: null, precedence: null });
        return a = (l.ownerDocument || l).createElement("style"), Bl(a), Zl(a, "style", e), Bn(a, u.precedence, l), t.instance = a;
      case "stylesheet":
        e = Da(u.href);
        var n = l.querySelector(Ee(e));
        if (n) return t.state.loading |= 4, t.instance = n, Bl(n), n;
        a = fv(u), (e = At.get(e)) && ni(a, e), n = (l.ownerDocument || l).createElement("link"), Bl(n);
        var f = n;
        return f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Zl(n, "link", a), t.state.loading |= 4, Bn(n, u.precedence, l), t.instance = n;
      case "script":
        return n = Ua(u.src), (e = l.querySelector(Te(n))) ? (t.instance = e, Bl(e), e) : (a = u, (e = At.get(n)) && (a = q({}, u), fi(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Bl(e), Zl(e, "link", a), l.head.appendChild(e), t.instance = e);
      case "void":
        return null;
      default:
        throw Error(v(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Bn(a, u.precedence, l));
    return t.instance;
  }
  function Bn(l, t, u) {
    for (var a = u.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function ni(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function fi(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Yn = null;
  function iv(l, t, u) {
    if (Yn === null) {
      var a = /* @__PURE__ */ new Map(), e = Yn = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else e = Yn, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Ga] || n[Gl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function sv(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(u, t === "title" ? l.querySelector("head > title") : null);
  }
  function W1(l, t, u) {
    if (u === 1 || t.itemProp != null) return false;
    switch (l) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return true;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return true;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
    }
    return false;
  }
  function ov(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function $1(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = Da(a.href), n = t.querySelector(Ee(e));
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Gn.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, Bl(n);
          return;
        }
        n = t.ownerDocument || t, a = fv(a), (e = At.get(e)) && ni(a, e), n = n.createElement("link"), Bl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Zl(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Gn.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var ci = 0;
  function F1(l, t) {
    return l.stylesheets && l.count === 0 && Xn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Xn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && ci === 0 && (ci = 62500 * R1());
      var e = setTimeout(function() {
        if (l.waitingForImages = false, l.count === 0 && (l.stylesheets && Xn(l, l.stylesheets), l.unsuspend)) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, (l.imgBytes > ci ? 50 : 800) + t);
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(e);
      };
    } : null;
  }
  function Gn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Xn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var jn = null;
  function Xn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, jn = /* @__PURE__ */ new Map(), t.forEach(k1, l), jn = null, Gn.call(l));
  }
  function k1(l, t) {
    if (!(t.state.loading & 4)) {
      var u = jn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), jn.set(l, u);
        for (var e = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = Gn.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var ze = { $$typeof: X, Provider: null, Consumer: null, _currentValue: Q, _currentValue2: Q, _threadCount: 0 };
  function I1(l, t, u, a, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = tf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tf(0), this.hiddenUpdates = tf(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function vv(l, t, u, a, e, n, f, c, i, m, S, z) {
    return l = new I1(l, t, u, f, i, m, S, z, c), t = 1, n === true && (t |= 24), n = ct(3, null, null, t), l.current = n, n.stateNode = l, t = Qf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = { element: a, isDehydrated: u, cache: t }, Vf(n), l;
  }
  function yv(l) {
    return l ? (l = fa, l) : fa;
  }
  function hv(l, t, u, a, e, n) {
    e = yv(e), a.context === null ? a.context = e : a.pendingContext = e, a = su(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = ou(l, a, t), u !== null && (ut(u, l, t), le(u, l, t));
  }
  function mv(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function ii(l, t) {
    mv(l, t), (l = l.alternate) && mv(l, t);
  }
  function dv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Cu(l, 67108864);
      t !== null && ut(t, l, 67108864), ii(l, 67108864);
    }
  }
  function rv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = yt();
      t = uf(t);
      var u = Cu(l, t);
      u !== null && ut(u, l, t), ii(l, t);
    }
  }
  var Qn = true;
  function P1(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = p.p;
    try {
      p.p = 2, si(l, t, u, a);
    } finally {
      p.p = n, b.T = e;
    }
  }
  function lh(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = p.p;
    try {
      p.p = 8, si(l, t, u, a);
    } finally {
      p.p = n, b.T = e;
    }
  }
  function si(l, t, u, a) {
    if (Qn) {
      var e = oi(a);
      if (e === null) $c(l, t, a, Zn, u), gv(l, a);
      else if (uh(e, l, t, u, a)) a.stopPropagation();
      else if (gv(l, a), t & 4 && -1 < th.indexOf(l)) {
        for (; e !== null; ) {
          var n = $u(e);
          if (n !== null) switch (n.tag) {
            case 3:
              if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                var f = Du(n.pendingLanes);
                if (f !== 0) {
                  var c = n;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                    var i = 1 << 31 - nt(f);
                    c.entanglements[1] |= i, f &= ~i;
                  }
                  Ct(n), (sl & 6) === 0 && (An = at() + 500, re(0));
                }
              }
              break;
            case 31:
            case 13:
              c = Cu(n, 2), c !== null && ut(c, n, 2), Mn(), ii(n, 2);
          }
          if (n = oi(a), n === null && $c(l, t, a, Zn, u), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else $c(l, t, a, null, u);
    }
  }
  function oi(l) {
    return l = yf(l), vi(l);
  }
  var Zn = null;
  function vi(l) {
    if (Zn = null, l = Wu(l), l !== null) {
      var t = O(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = B(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = Z(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Zn = l, null;
  }
  function Sv(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Qv()) {
          case _i:
            return 2;
          case Mi:
            return 8;
          case Ue:
          case Zv:
            return 32;
          case Oi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var yi = false, Tu = null, zu = null, Au = null, Ae = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), _u = [], th = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function gv(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Tu = null;
        break;
      case "dragenter":
      case "dragleave":
        zu = null;
        break;
      case "mouseover":
      case "mouseout":
        Au = null;
        break;
      case "pointerover":
      case "pointerout":
        Ae.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _e.delete(t.pointerId);
    }
  }
  function Me(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = { blockedOn: t, domEventName: u, eventSystemFlags: a, nativeEvent: n, targetContainers: [e] }, t !== null && (t = $u(t), t !== null && dv(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function uh(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return Tu = Me(Tu, l, t, u, a, e), true;
      case "dragenter":
        return zu = Me(zu, l, t, u, a, e), true;
      case "mouseover":
        return Au = Me(Au, l, t, u, a, e), true;
      case "pointerover":
        var n = e.pointerId;
        return Ae.set(n, Me(Ae.get(n) || null, l, t, u, a, e)), true;
      case "gotpointercapture":
        return n = e.pointerId, _e.set(n, Me(_e.get(n) || null, l, t, u, a, e)), true;
    }
    return false;
  }
  function bv(l) {
    var t = Wu(l.target);
    if (t !== null) {
      var u = O(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = B(u), t !== null) {
            l.blockedOn = t, Hi(l.priority, function() {
              rv(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Z(u), t !== null) {
            l.blockedOn = t, Hi(l.priority, function() {
              rv(u);
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Ln(l) {
    if (l.blockedOn !== null) return false;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = oi(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(u.type, u);
        vf = a, u.target.dispatchEvent(a), vf = null;
      } else return t = $u(u), t !== null && dv(t), l.blockedOn = u, false;
      t.shift();
    }
    return true;
  }
  function Ev(l, t, u) {
    Ln(l) && u.delete(t);
  }
  function ah() {
    yi = false, Tu !== null && Ln(Tu) && (Tu = null), zu !== null && Ln(zu) && (zu = null), Au !== null && Ln(Au) && (Au = null), Ae.forEach(Ev), _e.forEach(Ev);
  }
  function xn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, yi || (yi = true, g.unstable_scheduleCallback(g.unstable_NormalPriority, ah)));
  }
  var Vn = null;
  function Tv(l) {
    Vn !== l && (Vn = l, g.unstable_scheduleCallback(g.unstable_NormalPriority, function() {
      Vn === l && (Vn = null);
      for (var t = 0; t < l.length; t += 3) {
        var u = l[t], a = l[t + 1], e = l[t + 2];
        if (typeof a != "function") {
          if (vi(a || u) === null) continue;
          break;
        }
        var n = $u(u);
        n !== null && (l.splice(t, 3), t -= 3, oc(n, { pending: true, data: e, method: u.method, action: a }, a, e));
      }
    }));
  }
  function Ra(l) {
    function t(i) {
      return xn(i, l);
    }
    Tu !== null && xn(Tu, l), zu !== null && xn(zu, l), Au !== null && xn(Au, l), Ae.forEach(t), _e.forEach(t);
    for (var u = 0; u < _u.length; u++) {
      var a = _u[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < _u.length && (u = _u[0], u.blockedOn === null); ) bv(u), u.blockedOn === null && _u.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null) for (a = 0; a < u.length; a += 3) {
      var e = u[a], n = u[a + 1], f = e[Fl] || null;
      if (typeof n == "function") f || Tv(u);
      else if (f) {
        var c = null;
        if (n && n.hasAttribute("formAction")) {
          if (e = n, f = n[Fl] || null) c = f.formAction;
          else if (vi(e) !== null) continue;
        } else c = f.action;
        typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), Tv(u);
      }
    }
  }
  function zv() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({ handler: function() {
        return new Promise(function(f) {
          return e = f;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function t() {
      e !== null && (e(), e = null), a || setTimeout(u, 20);
    }
    function u() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, { state: n.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var a = false, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(u, 100), function() {
        a = true, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function hi(l) {
    this._internalRoot = l;
  }
  Kn.prototype.render = hi.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(v(409));
    var u = t.current, a = yt();
    hv(u, a, l, t, null, null);
  }, Kn.prototype.unmount = hi.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      hv(l.current, 2, null, l, null, null), Mn(), t[wu] = null;
    }
  };
  function Kn(l) {
    this._internalRoot = l;
  }
  Kn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Ni();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < _u.length && t !== 0 && t < _u[u].priority; u++) ;
      _u.splice(u, 0, l), u === 0 && bv(l);
    }
  };
  var Av = M.version;
  if (Av !== "19.2.0") throw Error(v(527, Av, "19.2.0"));
  p.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0) throw typeof l.render == "function" ? Error(v(188)) : (l = Object.keys(l).join(","), Error(v(268, l)));
    return l = E(t), l = l !== null ? j(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var eh = { bundleType: 0, version: "19.2.0", rendererPackageName: "react-dom", currentDispatcherRef: b, reconcilerVersion: "19.2.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jn.isDisabled && Jn.supportsFiber) try {
      qa = Jn.inject(eh), et = Jn;
    } catch {
    }
  }
  return pe.createRoot = function(l, t) {
    if (!U(l)) throw Error(v(299));
    var u = false, a = "", e = U0, n = R0, f = N0;
    return t != null && (t.unstable_strictMode === true && (u = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = vv(l, 1, false, null, null, u, a, null, e, n, f, zv), l[wu] = t.current, Wc(l), new hi(t);
  }, pe.hydrateRoot = function(l, t, u) {
    if (!U(l)) throw Error(v(299));
    var a = false, e = "", n = U0, f = R0, c = N0, i = null;
    return u != null && (u.unstable_strictMode === true && (a = true), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.formState !== void 0 && (i = u.formState)), t = vv(l, 1, true, t, u ?? null, a, e, i, n, f, c, zv), t.context = yv(null), u = t.current, a = yt(), a = uf(a), e = su(a), e.callback = null, ou(u, e, a), u = a, t.current.lanes = u, Ya(t, u), Ct(t), l[wu] = t.current, Wc(l), new Kn(t);
  }, pe.version = "19.2.0", pe;
}
var Cv;
function mh() {
  if (Cv) return ri.exports;
  Cv = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
    } catch (M) {
      console.error(M);
    }
  }
  return g(), ri.exports = hh(), ri.exports;
}
var dh = mh();
const Jl = 450, wl = 450, Wn = 20, rh = "#090914", wn = "#f0f0f0", Sh = "#f064b4", qv = "#f0dc5a", gh = "#dc5a5a";
function Ti(g, M) {
  let R = g % Jl;
  R < 0 && (R += Jl);
  let v = M % wl;
  return v < 0 && (v += wl), [R, v];
}
function bh(g) {
  return g * Math.PI / 180;
}
function lu(g) {
  const M = bh(g);
  return [Math.cos(M), -Math.sin(M)];
}
function Na(g, M) {
  return Math.hypot(g[0] - M[0], g[1] - M[1]);
}
const _ht = class _ht {
  constructor() {
    this.pos = [Jl / 2, wl / 2], this.vel = [0, 0], this.angle = 90, this.radius = 12, this.thrusting = false, this.invulnerable = true, this.invulnerableTimer = _ht.INVULNERABLE_TIME;
  }
  update(M) {
    if (this.thrusting) {
      const [O, B] = lu(this.angle);
      this.vel[0] += O * _ht.SHIP_THRUST * M, this.vel[1] += B * _ht.SHIP_THRUST * M;
    }
    const R = Math.hypot(this.vel[0], this.vel[1]);
    R > 0 && (_ht.FRICTION * M > R ? (this.vel[0] = 0, this.vel[1] = 0) : (this.vel[0] -= this.vel[0] * _ht.FRICTION * M / R, this.vel[1] -= this.vel[1] * _ht.FRICTION * M / R));
    const [v, U] = Ti(this.pos[0] + this.vel[0] * M, this.pos[1] + this.vel[1] * M);
    this.pos[0] = v, this.pos[1] = U, this.invulnerable && (this.invulnerableTimer -= M, this.invulnerableTimer <= 0 && (this.invulnerable = false));
  }
};
_ht.SHIP_THRUST = 200;
_ht.SHIP_ROT_SPEED = 220;
_ht.FRICTION = 10;
_ht.INVULNERABLE_TIME = 2;
let ht = _ht;
const _Ha = class _Ha {
  constructor(M, R, v) {
    this.pos = [M[0], M[1]];
    const [U, O] = lu(R);
    this.vel = [v[0] + U * _Ha.BULLET_SPEED, v[1] + O * _Ha.BULLET_SPEED], this.life = _Ha.BULLET_LIFETIME;
  }
  update(M) {
    this.pos[0] += this.vel[0] * M, this.pos[1] += this.vel[1] * M;
    const [R, v] = Ti(this.pos[0], this.pos[1]);
    this.pos[0] = R, this.pos[1] = v, this.life -= M;
  }
  alive() {
    return this.life > 0;
  }
};
_Ha.BULLET_SPEED = 500;
_Ha.BULLET_LIFETIME = 1.6;
let Ha = _Ha;
const _Pt = class _Pt {
  constructor(M, R = 3) {
    if (M) this.pos = [M[0], M[1]];
    else {
      const Z = ["left", "right", "top", "bottom"][Math.floor(Math.random() * 4)];
      let _ = 0, E = 0;
      const j = _Pt.ASTEROID_SIZES.get(R) ?? 24;
      Z === "left" ? (_ = -j * 2, E = Math.random() * wl) : Z === "right" ? (_ = Jl + j * 2, E = Math.random() * wl) : Z === "top" ? (_ = Math.random() * Jl, E = -j * 2) : (_ = Math.random() * Jl, E = wl + j * 2), this.pos = [_, E];
    }
    this.size = R, this.radius = _Pt.ASTEROID_SIZES.get(R) ?? 24;
    const v = Math.random() * 360, U = (Math.random() * (_Pt.ASTEROID_MAX_SPEED - _Pt.ASTEROID_MIN_SPEED) + _Pt.ASTEROID_MIN_SPEED) * (R === 1 ? 1.2 : 1), [O, B] = lu(v);
    this.vel = [O * U, B * U], this.vertexCount = 8 + Math.floor(Math.random() * 5), this.jag = Array.from({ length: this.vertexCount }, () => 0.7 + Math.random() * 0.6);
  }
  update(M) {
    const [R, v] = Ti(this.pos[0] + this.vel[0] * M, this.pos[1] + this.vel[1] * M);
    this.pos[0] = R, this.pos[1] = v;
  }
};
_Pt.ASTEROID_MIN_SPEED = 10;
_Pt.ASTEROID_MAX_SPEED = 60;
_Pt.ASTEROID_SIZES = /* @__PURE__ */ new Map([[3, 40], [2, 24], [1, 12]]);
let Pt = _Pt;
function Bv(g) {
  if (g.size > 1) {
    const M = [];
    for (let R = 0; R < 2; R++) {
      const v = new Pt([g.pos[0], g.pos[1]], g.size - 1);
      v.vel[0] += Math.random() * 2.4 - 1.2, v.vel[1] += Math.random() * 2.4 - 1.2, M.push(v);
    }
    return M;
  }
  return [];
}
function Eh(g, M) {
  const R = lu(M.angle), v = lu(M.angle + 130), U = lu(M.angle - 130), O = 14, B = [[M.pos[0] + R[0] * O, M.pos[1] + R[1] * O], [M.pos[0] + v[0] * O * 0.9, M.pos[1] + v[1] * O * 0.9], [M.pos[0] + U[0] * O * 0.9, M.pos[1] + U[1] * O * 0.9]], Z = M.invulnerable && Math.floor(Date.now() / 120) % 2 === 0;
  g.strokeStyle = M.invulnerable && Z ? qv : Sh, g.lineWidth = 2, g.beginPath(), g.moveTo(B[0][0], B[0][1]), g.lineTo(B[1][0], B[1][1]), g.lineTo(B[2][0], B[2][1]), g.closePath(), g.stroke();
}
function Th(g, M) {
  const R = M.pos[0], v = M.pos[1];
  g.strokeStyle = wn, g.lineWidth = 2, g.beginPath();
  for (let U = 0; U < M.vertexCount; U++) {
    const O = 360 * U / M.vertexCount, [B, Z] = lu(O), _ = M.radius * M.jag[U], E = R + B * _, j = v + Z * _;
    U === 0 ? g.moveTo(E, j) : g.lineTo(E, j);
  }
  g.closePath(), g.stroke();
}
function Yv(g, M, R, v, U) {
  g.fillStyle = rh, g.fillRect(0, 0, Jl, wl), v.forEach((O) => Th(g, O)), R.forEach((O) => {
    g.beginPath(), g.fillStyle = qv, g.arc(O.pos[0], O.pos[1], 2, 0, Math.PI * 2), g.fill();
  }), Eh(g, M), g.fillStyle = wn, g.font = "16px Consolas, monospace", g.textBaseline = "top", U === "TITLE" ? (g.fillStyle = wn, g.font = "48px Consolas, monospace", g.textAlign = "center", g.fillText("ASTEROIDS", Jl / 2, wl / 2 - 40), g.font = "14px Consolas, monospace", g.fillText("Arrow keys/AWD to move & Space to shoot", Jl / 2, wl / 2 + 20), g.textAlign = "left") : U === "PAUSED" ? (g.fillStyle = wn, g.font = "48px Consolas, monospace", g.textAlign = "center", g.fillText("PAUSED", Jl / 2, wl / 2), g.textAlign = "left") : U === "GAMEOVER" && (g.fillStyle = gh, g.font = "48px Consolas, monospace", g.textAlign = "center", g.fillText("GAME OVER", Jl / 2, wl / 2 - 30));
}
function zh({ gameStarted: g, announceBotCollision: M }) {
  const R = al.useRef(null), v = al.useRef(null), U = al.useRef(null), O = al.useRef(new ht()), B = al.useRef(new ht()), Z = al.useRef([]), _ = al.useRef([]), E = al.useRef("TITLE"), j = al.useRef(null), q = al.useRef(null), il = al.useCallback((w) => {
    for (let I = 0; I < w; I++) {
      const P = new Pt();
      Na(P.pos, B.current.pos) < 120 && (P.pos[0] += 200, P.pos[1] += 200), _.current.push(P);
    }
  }, []), el = al.useCallback(() => {
    O.current = new ht(), B.current = new ht(), Z.current = [], _.current = [], il(Wn), E.current = "TITLE";
  }, [il]), ol = al.useCallback((w, I) => {
    if (w === null) return;
    const P = B.current;
    switch (P.thrusting = false, w) {
      case 0:
        P.thrusting = true;
        break;
      case 1:
        P.angle -= 220 * I;
        break;
      case 2:
        P.angle += 220 * I;
        break;
      case 3: {
        const [X, x] = lu(P.angle);
        Z.current.push(new Ha([P.pos[0] + X * 18, P.pos[1] + x * 18], P.angle, P.vel));
        break;
      }
    }
    P.angle = (P.angle + 360) % 360;
  }, []);
  function nl(w) {
    if (E.current === "PLAYING" && O.current.update(w), j.current !== null && E.current === "PLAYING" && (ol(j.current, w), B.current.update(w)), E.current === "PLAYING") {
      Z.current.forEach((x) => x.update(w)), _.current.forEach((x) => x.update(w)), Z.current = Z.current.filter((x) => x.alive());
      const I = [], P = [], X = /* @__PURE__ */ new Set();
      Z.current.forEach((x, Dl) => {
        _.current.forEach((Ul, W) => {
          Na(x.pos, Ul.pos) < Ul.radius + 2 && (X.add(Dl), I.push(W), P.push(...Bv(Ul)));
        });
      }), Z.current = Z.current.filter((x, Dl) => !X.has(Dl)), Array.from(new Set(I)).sort((x, Dl) => Dl - x).forEach((x) => {
        x >= 0 && x < _.current.length && _.current.splice(x, 1);
      }), _.current.push(...P), _.current.length === 0 && il(Wn + 1);
      for (let x = 0; x < _.current.length; x++) if (Na(B.current.pos, _.current[x].pos) < _.current[x].radius + B.current.radius - 3) {
        M(), E.current = "GAMEOVER", _.current.splice(x, 1), j.current = null;
        break;
      }
    }
  }
  return al.useEffect(() => {
    const I = R.current.getContext("2d");
    I.imageSmoothingEnabled = false;
    function P(X) {
      U.current || (U.current = X);
      const x = Math.min((X - U.current) / 1e3, 1 / 12);
      U.current = X, nl(x), Yv(I, B.current, Z.current, _.current, E.current), v.current = requestAnimationFrame(P);
    }
    return v.current = requestAnimationFrame(P), () => {
      v.current && cancelAnimationFrame(v.current);
    };
  }, []), al.useEffect(() => (q.current = new Worker(new URL("" + new URL("botWorker-BU-LmIsK.js", import.meta.url).href, import.meta.url)), q.current.onmessage = (w) => {
    j.current = w.data;
  }, () => {
    var _a;
    (_a = q.current) == null ? void 0 : _a.terminate();
  }), []), al.useEffect(() => {
    const w = setInterval(() => {
      q.current && E.current === "PLAYING" && q.current.postMessage({ ship: { pos: B.current.pos, vel: B.current.vel, angle: B.current.angle }, asteroids: _.current.map((I) => ({ pos: I.pos, vel: I.vel, radius: I.radius })) });
    }, 66.66666666666667);
    return () => clearInterval(w);
  }, []), al.useEffect(() => {
    g && (el(), E.current = "PLAYING");
  }, [g, el]), xl.jsx("div", { className: "p-4 canvas-wrapper", children: xl.jsx("canvas", { ref: R, width: Jl, height: wl, style: { width: `${Jl}px`, height: `${wl}px`, borderRadius: 8, boxShadow: "0 6px 18px rgba(0,0,0,0.5)" } }) });
}
function Ah({ announceHumanCollision: g, announceGameStart: M }) {
  const R = al.useRef(null), v = al.useRef(null), U = al.useRef(null), O = al.useRef(new ht()), B = al.useRef([]), Z = al.useRef([]), _ = al.useRef("TITLE"), E = al.useRef({ left: false, right: false, up: false, shoot: false }), j = al.useCallback((el) => {
    for (let ol = 0; ol < el; ol++) {
      const nl = new Pt();
      Na(nl.pos, O.current.pos) < 120 && (nl.pos[0] += 200, nl.pos[1] += 200), Z.current.push(nl);
    }
  }, []), q = al.useCallback(() => {
    O.current = new ht(), B.current = [], Z.current = [], j(Wn), _.current = "TITLE";
  }, [j]), il = al.useCallback((el) => {
    if (_.current !== "PLAYING") return;
    const ol = E.current;
    let nl = 0;
    ol.left && (nl = 1), ol.right && (nl = -1), O.current.thrusting = ol.up, nl !== 0 && (O.current.angle += nl * 220 * el, O.current.angle %= 360), O.current.update(el), B.current.forEach((X) => X.update(el)), Z.current.forEach((X) => X.update(el)), B.current = B.current.filter((X) => X.alive());
    const w = [], I = [], P = /* @__PURE__ */ new Set();
    if (B.current.forEach((X, x) => {
      Z.current.forEach((Dl, Ul) => {
        Na(X.pos, Dl.pos) < Dl.radius + 2 && (P.add(x), w.push(Ul), I.push(...Bv(Dl)));
      });
    }), B.current = B.current.filter((X, x) => !P.has(x)), Array.from(new Set(w)).sort((X, x) => x - X).forEach((X) => {
      X >= 0 && X < Z.current.length && Z.current.splice(X, 1);
    }), Z.current.push(...I), !O.current.invulnerable) {
      for (let X = 0; X < Z.current.length; X++) if (Na(O.current.pos, Z.current[X].pos) < Z.current[X].radius + O.current.radius - 3) {
        g(), _.current = "GAMEOVER", Z.current.splice(X, 1);
        break;
      }
    }
    Z.current.length === 0 && j(Wn + 1), ol.shoot = false;
  }, [j, g]);
  return al.useEffect(() => {
    const ol = R.current.getContext("2d");
    ol.imageSmoothingEnabled = false;
    function nl(w) {
      U.current || (U.current = w);
      const I = Math.min((w - U.current) / 1e3, 1 / 12);
      U.current = w, il(I), Yv(ol, O.current, B.current, Z.current, _.current), v.current = requestAnimationFrame(nl);
    }
    return v.current = requestAnimationFrame(nl), () => {
      v.current && cancelAnimationFrame(v.current);
    };
  }, [il]), al.useEffect(() => {
    const el = E.current, ol = (w) => {
      switch (w.key.toLowerCase()) {
        case "arrowleft":
        case "a":
          el.left = true;
          break;
        case "arrowright":
        case "d":
          el.right = true;
          break;
        case "arrowup":
        case "w":
          el.up = true;
          break;
        case " ":
          if (w.preventDefault(), el.shoot = true, _.current === "PLAYING") {
            const [P, X] = lu(O.current.angle);
            B.current.push(new Ha([O.current.pos[0] + P * 18, O.current.pos[1] + X * 18], O.current.angle, O.current.vel));
          }
          break;
        case "enter":
          (_.current === "TITLE" || _.current === "GAMEOVER") && (M(), q(), _.current = "PLAYING");
          break;
        case "p":
          _.current = _.current === "PLAYING" ? "PAUSED" : "PLAYING";
          break;
        case "escape":
          _.current = "PAUSED";
          break;
      }
    }, nl = (w) => {
      switch (w.key.toLowerCase()) {
        case "arrowleft":
        case "a":
          el.left = false;
          break;
        case "arrowright":
        case "d":
          el.right = false;
          break;
        case "arrowup":
        case "w":
          el.up = false;
          break;
        case " ":
          el.shoot = false;
          break;
      }
    };
    return window.focus(), window.addEventListener("keydown", ol), window.addEventListener("keyup", nl), () => {
      window.removeEventListener("keydown", ol), window.removeEventListener("keyup", nl);
    };
  }, [q, M]), xl.jsx("div", { className: "p-4 canvas-wrapper", children: xl.jsx("canvas", { ref: R, width: Jl, height: wl, style: { width: `${Jl}px`, height: `${wl}px`, borderRadius: 8, boxShadow: "0 6px 18px rgba(0,0,0,0.5)" } }) });
}
function _h() {
  const [g, M] = al.useState(true), [R, v] = al.useState(true), [U, O] = al.useState(false);
  return xl.jsxs("div", { className: "container", children: [xl.jsx("h1", { className: "main-title", children: "BEAT THE BOT" }), xl.jsxs("div", { className: "games-container", children: [xl.jsxs("div", { className: "game-column", children: [xl.jsx("h2", { className: "game-title", children: "YOU" }), xl.jsx(Ah, { announceHumanCollision: () => {
    M(false), O(false);
  }, announceGameStart: () => {
    M(true), O(true), console.log(" Game Started "), v(true);
  } })] }), xl.jsxs("div", { className: "game-column", children: [xl.jsx("h2", { className: "game-title", children: "BOT" }), xl.jsx(zh, { gameStarted: U, announceBotCollision: () => {
    v(false);
  } })] })] }), !U && xl.jsx("div", { style: { textAlign: "center", marginTop: "20px", fontSize: "18px", fontFamily: "Consolas, monospace", color: "#ffffff" }, children: "Press Enter to Start" })] });
}
const Mh = dh.createRoot(document.getElementById("root"));
Mh.render(xl.jsx(al.StrictMode, { children: xl.jsx(_h, {}) }));
