import Fa, { createContext as fe, useState as k, useContext as me } from "react";
var ca = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma;
function be() {
  return Ma || (Ma = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Fa, u = Symbol.for("react.element"), m = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), P = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), q = Symbol.iterator, X = "@@iterator";
    function J(a) {
      if (a === null || typeof a != "object")
        return null;
      var e = q && a[q] || a[X];
      return typeof e == "function" ? e : null;
    }
    var O = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function s(a) {
      {
        for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          r[n - 1] = arguments[n];
        aa("error", a, r);
      }
    }
    function aa(a, e, r) {
      {
        var n = O.ReactDebugCurrentFrame, l = n.getStackAddendum();
        l !== "" && (e += "%s", r = r.concat([l]));
        var c = r.map(function(o) {
          return String(o);
        });
        c.unshift("Warning: " + e), Function.prototype.apply.call(console[a], console, c);
      }
    }
    var ea = !1, w = !1, M = !1, N = !1, G = !1, B;
    B = Symbol.for("react.module.reference");
    function ka(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === C || a === v || G || a === b || a === j || a === p || N || a === L || ea || w || M || typeof a == "object" && a !== null && (a.$$typeof === E || a.$$typeof === y || a.$$typeof === _ || a.$$typeof === P || a.$$typeof === S || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === B || a.getModuleId !== void 0));
    }
    function Ja(a, e, r) {
      var n = a.displayName;
      if (n)
        return n;
      var l = e.displayName || e.name || "";
      return l !== "" ? r + "(" + l + ")" : r;
    }
    function da(a) {
      return a.displayName || "Context";
    }
    function D(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && s("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case C:
          return "Fragment";
        case m:
          return "Portal";
        case v:
          return "Profiler";
        case b:
          return "StrictMode";
        case j:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case P:
            var e = a;
            return da(e) + ".Consumer";
          case _:
            var r = a;
            return da(r._context) + ".Provider";
          case S:
            return Ja(a, a.render, "ForwardRef");
          case y:
            var n = a.displayName || null;
            return n !== null ? n : D(a.type) || "Memo";
          case E: {
            var l = a, c = l._payload, o = l._init;
            try {
              return D(o(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, V = 0, fa, ma, ba, va, Sa, Ca, pa;
    function ga() {
    }
    ga.__reactDisabledLog = !0;
    function Ga() {
      {
        if (V === 0) {
          fa = console.log, ma = console.info, ba = console.warn, va = console.error, Sa = console.group, Ca = console.groupCollapsed, pa = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: ga,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        V++;
      }
    }
    function Va() {
      {
        if (V--, V === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, a, {
              value: fa
            }),
            info: x({}, a, {
              value: ma
            }),
            warn: x({}, a, {
              value: ba
            }),
            error: x({}, a, {
              value: va
            }),
            group: x({}, a, {
              value: Sa
            }),
            groupCollapsed: x({}, a, {
              value: Ca
            }),
            groupEnd: x({}, a, {
              value: pa
            })
          });
        }
        V < 0 && s("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ra = O.ReactCurrentDispatcher, na;
    function U(a, e, r) {
      {
        if (na === void 0)
          try {
            throw Error();
          } catch (l) {
            var n = l.stack.trim().match(/\n( *(at )?)/);
            na = n && n[1] || "";
          }
        return `
` + na + a;
      }
    }
    var ta = !1, H;
    {
      var za = typeof WeakMap == "function" ? WeakMap : Map;
      H = new za();
    }
    function ha(a, e) {
      if (!a || ta)
        return "";
      {
        var r = H.get(a);
        if (r !== void 0)
          return r;
      }
      var n;
      ta = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = ra.current, ra.current = null, Ga();
      try {
        if (e) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (A) {
              n = A;
            }
            Reflect.construct(a, [], o);
          } else {
            try {
              o.call();
            } catch (A) {
              n = A;
            }
            a.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            n = A;
          }
          a();
        }
      } catch (A) {
        if (A && n && typeof A.stack == "string") {
          for (var t = A.stack.split(`
`), h = n.stack.split(`
`), d = t.length - 1, f = h.length - 1; d >= 1 && f >= 0 && t[d] !== h[f]; )
            f--;
          for (; d >= 1 && f >= 0; d--, f--)
            if (t[d] !== h[f]) {
              if (d !== 1 || f !== 1)
                do
                  if (d--, f--, f < 0 || t[d] !== h[f]) {
                    var T = `
` + t[d].replace(" at new ", " at ");
                    return a.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", a.displayName)), typeof a == "function" && H.set(a, T), T;
                  }
                while (d >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        ta = !1, ra.current = c, Va(), Error.prepareStackTrace = l;
      }
      var I = a ? a.displayName || a.name : "", wa = I ? U(I) : "";
      return typeof a == "function" && H.set(a, wa), wa;
    }
    function Wa(a, e, r) {
      return ha(a, !1);
    }
    function $a(a) {
      var e = a.prototype;
      return !!(e && e.isReactComponent);
    }
    function Z(a, e, r) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return ha(a, $a(a));
      if (typeof a == "string")
        return U(a);
      switch (a) {
        case j:
          return U("Suspense");
        case p:
          return U("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case S:
            return Wa(a.render);
          case y:
            return Z(a.type, e, r);
          case E: {
            var n = a, l = n._payload, c = n._init;
            try {
              return Z(c(l), e, r);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, Ra = {}, Pa = O.ReactDebugCurrentFrame;
    function Q(a) {
      if (a) {
        var e = a._owner, r = Z(a.type, a._source, e ? e.type : null);
        Pa.setExtraStackFrame(r);
      } else
        Pa.setExtraStackFrame(null);
    }
    function Ya(a, e, r, n, l) {
      {
        var c = Function.call.bind(K);
        for (var o in a)
          if (c(a, o)) {
            var t = void 0;
            try {
              if (typeof a[o] != "function") {
                var h = Error((n || "React class") + ": " + r + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              t = a[o](e, o, n, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              t = d;
            }
            t && !(t instanceof Error) && (Q(l), s("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", r, o, typeof t), Q(null)), t instanceof Error && !(t.message in Ra) && (Ra[t.message] = !0, Q(l), s("Failed %s type: %s", r, t.message), Q(null));
          }
      }
    }
    var qa = Array.isArray;
    function oa(a) {
      return qa(a);
    }
    function Ua(a) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, r = e && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return r;
      }
    }
    function Ha(a) {
      try {
        return ya(a), !1;
      } catch {
        return !0;
      }
    }
    function ya(a) {
      return "" + a;
    }
    function Ea(a) {
      if (Ha(a))
        return s("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ua(a)), ya(a);
    }
    var z = O.ReactCurrentOwner, Za = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ta, _a, ia;
    ia = {};
    function Ka(a) {
      if (K.call(a, "ref")) {
        var e = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Qa(a) {
      if (K.call(a, "key")) {
        var e = Object.getOwnPropertyDescriptor(a, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Xa(a, e) {
      if (typeof a.ref == "string" && z.current && e && z.current.stateNode !== e) {
        var r = D(z.current.type);
        ia[r] || (s('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(z.current.type), a.ref), ia[r] = !0);
      }
    }
    function ae(a, e) {
      {
        var r = function() {
          Ta || (Ta = !0, s("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        r.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function ee(a, e) {
      {
        var r = function() {
          _a || (_a = !0, s("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        r.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var re = function(a, e, r, n, l, c, o) {
      var t = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: a,
        key: e,
        ref: r,
        props: o,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(t, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(t, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    };
    function ne(a, e, r, n, l) {
      {
        var c, o = {}, t = null, h = null;
        r !== void 0 && (Ea(r), t = "" + r), Qa(e) && (Ea(e.key), t = "" + e.key), Ka(e) && (h = e.ref, Xa(e, l));
        for (c in e)
          K.call(e, c) && !Za.hasOwnProperty(c) && (o[c] = e[c]);
        if (a && a.defaultProps) {
          var d = a.defaultProps;
          for (c in d)
            o[c] === void 0 && (o[c] = d[c]);
        }
        if (t || h) {
          var f = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          t && ae(o, f), h && ee(o, f);
        }
        return re(a, t, h, l, n, z.current, o);
      }
    }
    var sa = O.ReactCurrentOwner, ja = O.ReactDebugCurrentFrame;
    function F(a) {
      if (a) {
        var e = a._owner, r = Z(a.type, a._source, e ? e.type : null);
        ja.setExtraStackFrame(r);
      } else
        ja.setExtraStackFrame(null);
    }
    var la;
    la = !1;
    function ua(a) {
      return typeof a == "object" && a !== null && a.$$typeof === u;
    }
    function Da() {
      {
        if (sa.current) {
          var a = D(sa.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function te(a) {
      {
        if (a !== void 0) {
          var e = a.fileName.replace(/^.*[\\\/]/, ""), r = a.lineNumber;
          return `

Check your code at ` + e + ":" + r + ".";
        }
        return "";
      }
    }
    var Aa = {};
    function oe(a) {
      {
        var e = Da();
        if (!e) {
          var r = typeof a == "string" ? a : a.displayName || a.name;
          r && (e = `

Check the top-level render call using <` + r + ">.");
        }
        return e;
      }
    }
    function Oa(a, e) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var r = oe(e);
        if (Aa[r])
          return;
        Aa[r] = !0;
        var n = "";
        a && a._owner && a._owner !== sa.current && (n = " It was passed a child from " + D(a._owner.type) + "."), F(a), s('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, n), F(null);
      }
    }
    function xa(a, e) {
      {
        if (typeof a != "object")
          return;
        if (oa(a))
          for (var r = 0; r < a.length; r++) {
            var n = a[r];
            ua(n) && Oa(n, e);
          }
        else if (ua(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var l = J(a);
          if (typeof l == "function" && l !== a.entries)
            for (var c = l.call(a), o; !(o = c.next()).done; )
              ua(o.value) && Oa(o.value, e);
        }
      }
    }
    function ie(a) {
      {
        var e = a.type;
        if (e == null || typeof e == "string")
          return;
        var r;
        if (typeof e == "function")
          r = e.propTypes;
        else if (typeof e == "object" && (e.$$typeof === S || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        e.$$typeof === y))
          r = e.propTypes;
        else
          return;
        if (r) {
          var n = D(e);
          Ya(r, a.props, "prop", n, a);
        } else if (e.PropTypes !== void 0 && !la) {
          la = !0;
          var l = D(e);
          s("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && s("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function se(a) {
      {
        for (var e = Object.keys(a.props), r = 0; r < e.length; r++) {
          var n = e[r];
          if (n !== "children" && n !== "key") {
            F(a), s("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        a.ref !== null && (F(a), s("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function La(a, e, r, n, l, c) {
      {
        var o = ka(a);
        if (!o) {
          var t = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (t += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = te(l);
          h ? t += h : t += Da();
          var d;
          a === null ? d = "null" : oa(a) ? d = "array" : a !== void 0 && a.$$typeof === u ? (d = "<" + (D(a.type) || "Unknown") + " />", t = " Did you accidentally export a JSX literal instead of a component?") : d = typeof a, s("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, t);
        }
        var f = ne(a, e, r, l, c);
        if (f == null)
          return f;
        if (o) {
          var T = e.children;
          if (T !== void 0)
            if (n)
              if (oa(T)) {
                for (var I = 0; I < T.length; I++)
                  xa(T[I], a);
                Object.freeze && Object.freeze(T);
              } else
                s("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xa(T, a);
        }
        return a === C ? se(f) : ie(f), f;
      }
    }
    function le(a, e, r) {
      return La(a, e, r, !0);
    }
    function ue(a, e, r) {
      return La(a, e, r, !1);
    }
    var ce = ue, de = le;
    W.Fragment = C, W.jsx = ce, W.jsxs = de;
  }()), W;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Na;
function ve() {
  if (Na)
    return $;
  Na = 1;
  var i = Fa, u = Symbol.for("react.element"), m = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, b = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(P, S, j) {
    var p, y = {}, E = null, L = null;
    j !== void 0 && (E = "" + j), S.key !== void 0 && (E = "" + S.key), S.ref !== void 0 && (L = S.ref);
    for (p in S)
      C.call(S, p) && !v.hasOwnProperty(p) && (y[p] = S[p]);
    if (P && P.defaultProps)
      for (p in S = P.defaultProps, S)
        y[p] === void 0 && (y[p] = S[p]);
    return { $$typeof: u, type: P, key: E, ref: L, props: y, _owner: b.current };
  }
  return $.Fragment = m, $.jsx = _, $.jsxs = _, $;
}
process.env.NODE_ENV === "production" ? ca.exports = ve() : ca.exports = be();
var g = ca.exports;
const Se = {
  provincias: {
    1: {
      nombre: "San José",
      cantones: {
        "01": {
          nombre: "Central",
          distritos: {
            "01": "Carmen",
            "02": "Merced",
            "03": "Hospital",
            "04": "Catedral",
            "05": "Zapote",
            "06": "San Francisco De Dos Rios",
            "07": "Uruca",
            "08": "Mata Redonda",
            "09": "Pavas",
            10: "Hatillo",
            11: "San Sebastián"
          }
        },
        "02": {
          nombre: "Escazú",
          distritos: {
            "01": "Escazú",
            "02": "San Antonio",
            "03": "San Rafael"
          }
        },
        "03": {
          nombre: "Desamparados",
          distritos: {
            "01": "Desamparados",
            "02": "San Miguel",
            "03": "San Juan De Dios",
            "04": "San Rafael Arriba",
            "05": "San Rafael Abajo",
            "06": "San Antonio",
            "07": "Frailes",
            "08": "Patarra",
            "09": "San Cristobal",
            10: "Rosario",
            11: "Damas",
            12: "Gravilias",
            13: "Los Guido"
          }
        },
        "04": {
          nombre: "Puriscal",
          distritos: {
            "01": "Santiago",
            "02": "Mercedes Sur",
            "03": "Barbacoas",
            "04": "Grifo Alto",
            "05": "San Rafael",
            "06": "Candelarita",
            "07": "Desamparaditos",
            "08": "San Antonio",
            "09": "Chires"
          }
        },
        "05": {
          nombre: "Tarrazú",
          distritos: {
            "01": "San Marcos",
            "02": "San Lorenzo",
            "03": "San Carlos"
          }
        },
        "06": {
          nombre: "Aserrí",
          distritos: {
            "01": "Aserrí",
            "02": "Tarbaca",
            "03": "Vuelta De Jorco",
            "04": "San Gabriel",
            "05": "Legua",
            "06": "Monterrey",
            "07": "Salitrillos"
          }
        },
        "07": {
          nombre: "Mora",
          distritos: {
            "01": "Colón",
            "02": "Guayabo",
            "03": "Tabarcia",
            "04": "Piedras Negras",
            "05": "Picagres",
            "06": "Jaris"
          }
        },
        "08": {
          nombre: "Goicoechea",
          distritos: {
            "01": "Guadalupe",
            "02": "San Francisco",
            "03": "Calle Blancos",
            "04": "Mata De Platano",
            "05": "Ipís",
            "06": "Rancho Redondo",
            "07": "Purral"
          }
        },
        "09": {
          nombre: "Santa Ana",
          distritos: {
            "01": "Santa Ana",
            "02": "Salitral",
            "03": "Pozos",
            "04": "Uruca",
            "05": "Piedades",
            "06": "Brasil"
          }
        },
        10: {
          nombre: "Alajuelita",
          distritos: {
            "01": "Alajuelita",
            "02": "San Josecito",
            "03": "San Antonio",
            "04": "Concepción",
            "05": "San Felipe"
          }
        },
        11: {
          nombre: "Vázquez De Coronado",
          distritos: {
            "01": "San Isidro",
            "02": "San Rafael",
            "03": "Dulce Nombre De Jesus",
            "04": "Patalillo",
            "05": "Cascajal"
          }
        },
        12: {
          nombre: "Acosta",
          distritos: {
            "01": "San Ignacio",
            "02": "Guaitil",
            "03": "Palmichal",
            "04": "Cangrejal",
            "05": "Sabanillas"
          }
        },
        13: {
          nombre: "Tibás",
          distritos: {
            "01": "San Juan",
            "02": "Cinco Esquinas",
            "03": "Anselmo Llorente",
            "04": "Leon XII",
            "05": "Colima"
          }
        },
        14: {
          nombre: "Moravia",
          distritos: {
            "01": "San Vicente",
            "02": "San Jeronimo",
            "03": "La Trinidad"
          }
        },
        15: {
          nombre: "Montes De Oca",
          distritos: {
            "01": "San Pedro",
            "02": "Sabanilla",
            "03": "Mercedes",
            "04": "San Rafael"
          }
        },
        16: {
          nombre: "Turrubares",
          distritos: {
            "01": "San Pablo",
            "02": "San Pedro",
            "03": "San Juan De Mata",
            "04": "San Luis",
            "05": "Carara"
          }
        },
        17: {
          nombre: "Dota",
          distritos: {
            "01": "Santa María",
            "02": "Jardin",
            "03": "Copey"
          }
        },
        18: {
          nombre: "Curridabat",
          distritos: {
            "01": "Curridabat",
            "02": "Granadilla",
            "03": "Sanchez",
            "04": "Tirrases"
          }
        },
        19: {
          nombre: "Pérez Zeledón",
          distritos: {
            "01": "San Isidro De El General",
            "02": "El General",
            "03": "Daniel Flores",
            "04": "Rivas",
            "05": "San Pedro",
            "06": "Platanares",
            "07": "Pejibaye",
            "08": "Cajon",
            "09": "Baru",
            10: "Rio Nuevo",
            11: "Páramo"
          }
        },
        20: {
          nombre: "León Cortés Castro",
          distritos: {
            "01": "San Pablo",
            "02": "San Andres",
            "03": "Llano Bonito",
            "04": "San Isidro",
            "05": "Santa Cruz",
            "06": "San Antonio"
          }
        }
      }
    },
    2: {
      nombre: "Alajuela",
      cantones: {
        "01": {
          nombre: "Central",
          distritos: {
            "01": "Alajuela",
            "02": "San José",
            "03": "Carrizal",
            "04": "San Antonio",
            "05": "Guácima",
            "06": "San Isidro",
            "07": "Sabanilla",
            "08": "San Rafael",
            "09": "Rio Segundo",
            10: "Desamparados",
            11: "Turrucares",
            12: "Tambor",
            13: "Garita",
            14: "Sarapiquí"
          }
        },
        "02": {
          nombre: "San Ramón",
          distritos: {
            "01": "San Ramón",
            "02": "Santiago",
            "03": "San Juan",
            "04": "Piedades Norte",
            "05": "Piedades Sur",
            "06": "San Rafael",
            "07": "San Isidro",
            "08": "Angeles",
            "09": "Alfaro",
            10: "Volio",
            11: "Concepción",
            12: "Zapotal",
            13: "Peñas Blancas"
          }
        },
        "03": {
          nombre: "Grecia",
          distritos: {
            "01": "Grecia",
            "02": "San Isidro",
            "03": "San José",
            "04": "San Roque",
            "05": "Tacares",
            "06": "Rio Cuarto",
            "07": "Puente De Piedra",
            "08": "Bolivar"
          }
        },
        "04": {
          nombre: "San Mateo",
          distritos: {
            "01": "San Mateo",
            "02": "Desmonte",
            "03": "Jesús María",
            "04": "Labrador"
          }
        },
        "05": {
          nombre: "Atenas",
          distritos: {
            "01": "Atenas",
            "02": "Jesús",
            "03": "Mercedes",
            "04": "San Isidro",
            "05": "Concepción",
            "06": "San José",
            "07": "Santa Eulalia",
            "08": "Escobal"
          }
        },
        "06": {
          nombre: "Naranjo",
          distritos: {
            "01": "Naranjo",
            "02": "San Miguel",
            "03": "San José",
            "04": "Cirrí Sur",
            "05": "San Jerónimo",
            "06": "San Juan",
            "07": "El Rosario",
            "08": "Palmitos"
          }
        },
        "07": {
          nombre: "Palmares",
          distritos: {
            "01": "Palmares",
            "02": "Zaragoza",
            "03": "Buenos Aires",
            "04": "Santiago",
            "05": "Candelaria",
            "06": "Esquipulas",
            "07": "La Granja"
          }
        },
        "08": {
          nombre: "Poás",
          distritos: {
            "01": "San Pedro",
            "02": "San Juan",
            "03": "San Rafael",
            "04": "Carrillos",
            "05": "Sabana Redonda"
          }
        },
        "09": {
          nombre: "Orotina",
          distritos: {
            "01": "Orotina",
            "02": "El Mastate",
            "03": "Hacienda Vieja",
            "04": "Coyolar",
            "05": "La Ceiba"
          }
        },
        10: {
          nombre: "San Carlos",
          distritos: {
            "01": "Quesada",
            "02": "Florencia",
            "03": "Buenavista",
            "04": "Aguas Zarcas",
            "05": "Venecia",
            "06": "Pital",
            "07": "La Fortuna",
            "08": "La Tigra",
            "09": "La Palmera",
            10: "Venado",
            11: "Cutris",
            12: "Monterrey",
            13: "Pocosol"
          }
        },
        11: {
          nombre: "Zarcero",
          distritos: {
            "01": "Zarcero",
            "02": "Laguna",
            "03": "Tapesco",
            "04": "Guadalupe",
            "05": "Palmira",
            "06": "Zapote",
            "07": "Brisas"
          }
        },
        12: {
          nombre: "Sarchí",
          distritos: {
            "01": "Sarchí Norte",
            "02": "Sarchí Sur",
            "03": "Toro Amarillo",
            "04": "San Pedro",
            "05": "Rodriguez"
          }
        },
        13: {
          nombre: "Upala",
          distritos: {
            "01": "Upala",
            "02": "Aguas Claras",
            "03": "San José o Pizote",
            "04": "Bijagua",
            "05": "Delicias",
            "06": "Dos Rios",
            "07": "Yolillal",
            "08": "Canalete"
          }
        },
        14: {
          nombre: "Los Chiles",
          distritos: {
            "01": "Los Chiles",
            "02": "Caño Negro",
            "03": "El Amparo",
            "04": "San Jorge"
          }
        },
        15: {
          nombre: "Guatuso",
          distritos: {
            "01": "San Rafael",
            "02": "Buenavista",
            "03": "Cote",
            "04": "Katira"
          }
        },
        16: {
          nombre: "Río Cuarto",
          distritos: {
            "01": "Río Cuarto"
          }
        }
      }
    },
    3: {
      nombre: "Cartago",
      cantones: {
        "01": {
          nombre: "Central",
          distritos: {
            "01": "Oriental",
            "02": "Occidental",
            "03": "Carmen",
            "04": "San Nicolás",
            "05": "Aguacaliente o San Francisco",
            "06": "Guadalupe o Arenilla",
            "07": "Corralillo",
            "08": "Tierra Blanca",
            "09": "Dulce Nombre",
            10: "Llano Grande",
            11: "Quebradilla"
          }
        },
        "02": {
          nombre: "Paraíso",
          distritos: {
            "01": "Paraiso",
            "02": "Santiago",
            "03": "Orosi",
            "04": "Cachí",
            "05": "Llanos de Santa Lucía"
          }
        },
        "03": {
          nombre: "La Unión",
          distritos: {
            "01": "Tres Rios",
            "02": "San Diego",
            "03": "San Juan",
            "04": "San Rafael",
            "05": "Concepción",
            "06": "Dulce Nombre",
            "07": "San Ramón",
            "08": "Rio Azul"
          }
        },
        "04": {
          nombre: "Jiménez",
          distritos: {
            "01": "Juan Viñas",
            "02": "Tucurrique",
            "03": "Pejibaye"
          }
        },
        "05": {
          nombre: "Turrialba",
          distritos: {
            "01": "Turrialba",
            "02": "La Suiza",
            "03": "Peralta",
            "04": "Santa Cruz",
            "05": "Santa Teresita",
            "06": "Pavones",
            "07": "Tuis",
            "08": "Tayutic",
            "09": "Santa Rosa",
            10: "Tres Equis",
            11: "La Isabel",
            12: "Chirripó"
          }
        },
        "06": {
          nombre: "Alvarado",
          distritos: {
            "01": "Pacayas",
            "02": "Cervantes",
            "03": "Capellades"
          }
        },
        "07": {
          nombre: "Oreamuno",
          distritos: {
            "01": "San Rafael",
            "02": "Cot",
            "03": "Potrero Cerrado",
            "04": "Cipreses",
            "05": "Santa Rosa"
          }
        },
        "08": {
          nombre: "El Guarco",
          distritos: {
            "01": "El Tejar",
            "02": "San Isidro",
            "03": "Tobosi",
            "04": "Patio De Agua"
          }
        }
      }
    },
    4: {
      nombre: "Heredia",
      cantones: {
        "01": {
          nombre: "Central",
          distritos: {
            "01": "Heredia",
            "02": "Mercedes",
            "03": "San Francisco",
            "04": "Ulloa",
            "05": "Varablanca"
          }
        },
        "02": {
          nombre: "Barva",
          distritos: {
            "01": "Barva",
            "02": "San Pedro",
            "03": "San Pablo",
            "04": "San Roque",
            "05": "Santa Lucía",
            "06": "San José de la Montaña"
          }
        },
        "03": {
          nombre: "Santo Domingo",
          distritos: {
            "01": "Santo Domingo",
            "02": "San Vicente",
            "03": "San Miguel",
            "04": "Paracito",
            "05": "Santo Tomás",
            "06": "Santa Rosa",
            "07": "Tures",
            "08": "Para"
          }
        },
        "04": {
          nombre: "Santa Barbara",
          distritos: {
            "01": "Santa Bárbara",
            "02": "San Pedro",
            "03": "San Juan",
            "04": "Jesús",
            "05": "Santo Domingo",
            "06": "Puraba"
          }
        },
        "05": {
          nombre: "San Rafael",
          distritos: {
            "01": "San Rafael",
            "02": "San Josecito",
            "03": "Santiago",
            "04": "Los Ángeles",
            "05": "Concepción"
          }
        },
        "06": {
          nombre: "San Isidro",
          distritos: {
            "01": "San Isidro",
            "02": "San José",
            "03": "Concepción",
            "04": "San Francisco"
          }
        },
        "07": {
          nombre: "Belén",
          distritos: {
            "01": "San Antonio",
            "02": "La Ribera",
            "03": "La Asuncion"
          }
        },
        "08": {
          nombre: "Flores",
          distritos: {
            "01": "San Joaquín",
            "02": "Barrantes",
            "03": "Llorente"
          }
        },
        "09": {
          nombre: "San Pablo",
          distritos: {
            "01": "San Pablo",
            "02": "Rincon De Sabanilla"
          }
        },
        10: {
          nombre: "Sarapiquí",
          distritos: {
            "01": "Puerto Viejo",
            "02": "La Virgen",
            "03": "Las Horquetas",
            "04": "Llanuras Del Gaspar",
            "05": "Cureña"
          }
        }
      }
    },
    5: {
      nombre: "Guanacaste",
      cantones: {
        "01": {
          nombre: "Liberia",
          distritos: {
            "01": "Liberia",
            "02": "Cañas Dulces",
            "03": "Mayorga",
            "04": "Nacascolo",
            "05": "Curubande"
          }
        },
        "02": {
          nombre: "Nicoya",
          distritos: {
            "01": "Nicoya",
            "02": "Mansión",
            "03": "San Antonio",
            "04": "Quebrada Honda",
            "05": "Sámara",
            "06": "Nosara",
            "07": "Belén De Nosarita"
          }
        },
        "03": {
          nombre: "Santa Cruz",
          distritos: {
            "01": "Santa Cruz",
            "02": "Bolson",
            "03": "Veintisiete de Abril",
            "04": "Tempate",
            "05": "Cartagena",
            "06": "Cuajiniquil",
            "07": "Diria",
            "08": "Cabo Velas",
            "09": "Tamarindo"
          }
        },
        "04": {
          nombre: "Bagaces",
          distritos: {
            "01": "Bagaces",
            "02": "La Fortuna",
            "03": "Mogote",
            "04": "Rio Naranjo"
          }
        },
        "05": {
          nombre: "Carrillo",
          distritos: {
            "01": "Filadelfia",
            "02": "Palmira",
            "03": "Sardinal",
            "04": "Belen"
          }
        },
        "06": {
          nombre: "Cañas",
          distritos: {
            "01": "Cañas",
            "02": "Palmira",
            "03": "San Miguel",
            "04": "Bebedero",
            "05": "Porozal"
          }
        },
        "07": {
          nombre: "Abangares",
          distritos: {
            "01": "Las Juntas",
            "02": "Sierra",
            "03": "San Juan",
            "04": "Colorado"
          }
        },
        "08": {
          nombre: "Tilarán",
          distritos: {
            "01": "Tilarán",
            "02": "Quebrada Grande",
            "03": "Tronadora",
            "04": "Santa Rosa",
            "05": "Líbano",
            "06": "Tierras Morenas",
            "07": "Arenal"
          }
        },
        "09": {
          nombre: "Nandayure",
          distritos: {
            "01": "Carmona",
            "02": "Santa Rita",
            "03": "Zapotal",
            "04": "San Pablo",
            "05": "Porvenir",
            "06": "Bejuco"
          }
        },
        10: {
          nombre: "La Cruz",
          distritos: {
            "01": "La Cruz",
            "02": "Santa Cecilia",
            "03": "La Garita",
            "04": "Santa Elena"
          }
        },
        11: {
          nombre: "Hojancha",
          distritos: {
            "01": "Hojancha",
            "02": "Monte Romo",
            "03": "Puerto Carrillo",
            "04": "Huacas"
          }
        }
      }
    },
    6: {
      nombre: "Puntarenas",
      cantones: {
        "01": {
          nombre: "Central",
          distritos: {
            "01": "Puntarenas",
            "02": "Pitahaya",
            "03": "Chomes",
            "04": "Lepanto",
            "05": "Paquera",
            "06": "Manzanillo",
            "07": "Guacimal",
            "08": "Barranca",
            "09": "Monte Verde",
            10: "Isla Del Coco",
            11: "Cóbano",
            12: "Chacarita",
            13: "Chira",
            14: "Acapulco",
            15: "El Roble",
            16: "Arancibia"
          }
        },
        "02": {
          nombre: "Esparza",
          distritos: {
            "01": "Espíritu Santo",
            "02": "San Juan Grande",
            "03": "Macacona",
            "04": "San Rafael",
            "05": "San Jerónimo"
          }
        },
        "03": {
          nombre: "Buenos Aires",
          distritos: {
            "01": "Buenos Aires",
            "02": "Volcán",
            "03": "Potrero Grande",
            "04": "Boruca",
            "05": "Pilas",
            "06": "Colinas",
            "07": "Changuena",
            "08": "Biolley",
            "09": "Brunka"
          }
        },
        "04": {
          nombre: "Montes De Oro",
          distritos: {
            "01": "Miramar",
            "02": "La Unión",
            "03": "San Isidro"
          }
        },
        "05": {
          nombre: "Osa",
          distritos: {
            "01": "Puerto Cortés",
            "02": "Palmar",
            "03": "Sierpe",
            "04": "Bahía Ballena",
            "05": "Piedras Blancas",
            "06": "Bahía Drake"
          }
        },
        "06": {
          nombre: "Quepos",
          distritos: {
            "01": "Quepos",
            "02": "Savegre",
            "03": "Naranjito"
          }
        },
        "07": {
          nombre: "Golfito",
          distritos: {
            "01": "Golfito",
            "02": "Puerto Jiménez",
            "03": "Guaycara",
            "04": "Pavón"
          }
        },
        "08": {
          nombre: "Coto Brus",
          distritos: {
            "01": "San Vito",
            "02": "Sabalito",
            "03": "Aguabuena",
            "04": "Limoncito",
            "05": "Pittier"
          }
        },
        "09": {
          nombre: "Parrita",
          distritos: {
            "01": "Parrita"
          }
        },
        10: {
          nombre: "Corredores",
          distritos: {
            "01": "Corredor",
            "02": "La Cuesta",
            "03": "Canoas",
            "04": "Laurel"
          }
        },
        11: {
          nombre: "Garabito",
          distritos: {
            "01": "Jacó",
            "02": "Tárcoles"
          }
        }
      }
    },
    7: {
      nombre: "Limón",
      cantones: {
        "01": {
          nombre: "Central",
          distritos: {
            "01": "Limón",
            "02": "Valle La Estrella",
            "03": "Rio Blanco",
            "04": "Matama"
          }
        },
        "02": {
          nombre: "Pococí",
          distritos: {
            "01": "Guapiles",
            "02": "Jiménez",
            "03": "Rita",
            "04": "Roxana",
            "05": "Cariari",
            "06": "Colorado",
            "07": "La Colonia"
          }
        },
        "03": {
          nombre: "Siquirres",
          distritos: {
            "01": "Siquirres",
            "02": "Pacuarito",
            "03": "Florida",
            "04": "Germania",
            "05": "El Cairo",
            "06": "Alegría"
          }
        },
        "04": {
          nombre: "Talamanca",
          distritos: {
            "01": "Bratsi",
            "02": "Sixaola",
            "03": "Cahuita",
            "04": "Telire"
          }
        },
        "05": {
          nombre: "Matina",
          distritos: {
            "01": "Matina",
            "02": "Batán",
            "03": "Carrandi"
          }
        },
        "06": {
          nombre: "Guácimo",
          distritos: {
            "01": "Guácimo",
            "02": "Mercedes",
            "03": "Pocora",
            "04": "Rio Jiménez",
            "05": "Duacari"
          }
        }
      }
    }
  }
}, R = Se.provincias;
function Ba(i, u) {
  return Object.keys(i).find((m) => i[m].nombre === u);
}
function Ce(i, u) {
  return Object.keys(i).find((m) => i[m] === u);
}
const Ia = fe(null), ge = ({ children: i }) => {
  const [u, m] = k("1"), [C, b] = k("01"), [v, _] = k("01"), [P, S] = k(R[1].cantones), [j, p] = k(
    R[u].cantones["01"].distritos
  ), [y, E] = k({
    provincia: R[u].nombre,
    canton: P[C].nombre,
    distrito: j[v]
  });
  function L(s) {
    m(s), S(R[s].cantones), p(
      R[s].cantones["01"].distritos
    ), b("01"), _("01"), E({
      provincia: R[s].nombre,
      canton: R[s].cantones["01"].nombre,
      distrito: R[s].cantones["01"].distritos["01"]
    });
  }
  function q(s) {
    p(P[s].distritos), b(s), _("01"), E({
      ...y,
      canton: P[s].nombre,
      distrito: P[s].distritos["01"]
    });
  }
  function X(s) {
    _(s), E({
      ...y,
      distrito: j[s]
    });
  }
  function J() {
    m("1"), S(R[1].cantones), b("01"), p(R[1].cantones["01"].distritos), _("01");
  }
  function O({
    province: s,
    municipality: aa,
    district: ea
  }) {
    const w = Ba(R, s);
    if (!w)
      return J(), console.log("Wrong default values for province"), null;
    m(w);
    const M = R[w].cantones;
    S(M);
    const N = Ba(M, aa);
    if (!N)
      return J(), console.log("Wrong default values for municipality"), null;
    b(N);
    const G = M[N].distritos;
    p(G);
    const B = Ce(G, ea);
    if (!B)
      return J(), console.log("Wrong default values for district"), null;
    _(B), E({
      provincia: R[w].nombre,
      canton: M[N].nombre,
      distrito: G[B]
    });
  }
  return /* @__PURE__ */ g.jsx(
    Ia.Provider,
    {
      value: {
        handleProvince: L,
        handleCanton: q,
        handleDistrito: X,
        cantones: P,
        distritos: j,
        selectedProvince: u,
        selectedCanton: C,
        selectedDistrito: v,
        location: y,
        useSetLocationValues: O
      },
      children: i
    }
  );
}, Y = () => me(Ia), he = (i) => {
  const u = Y();
  if (!u)
    return /* @__PURE__ */ g.jsx("div", { children: "no context" });
  const { handleProvince: m, selectedProvince: C } = u;
  return /* @__PURE__ */ g.jsxs("div", { className: i.ContainerClassName, children: [
    /* @__PURE__ */ g.jsx("label", { className: i.LabelClassName, children: i.LabelContent ?? "Provincias" }),
    /* @__PURE__ */ g.jsx(
      "select",
      {
        onChange: (b) => m(b.target.value),
        className: i.SelectInputClassName,
        value: C,
        children: Object.keys(R).map((b) => /* @__PURE__ */ g.jsx("option", { value: b, children: R[b].nombre }, b))
      }
    )
  ] });
}, Re = (i) => {
  const u = Y();
  if (!u)
    return /* @__PURE__ */ g.jsx("div", { children: "no context" });
  const { cantones: m, handleCanton: C, selectedCanton: b } = u;
  return /* @__PURE__ */ g.jsxs("div", { className: i.ContainerClassName, children: [
    /* @__PURE__ */ g.jsx("label", { className: i.LabelClassName, children: i.LabelContent ?? "Cantones" }),
    /* @__PURE__ */ g.jsx(
      "select",
      {
        onChange: (v) => C(v.target.value),
        className: i.SelectInputClassName,
        value: b,
        children: Object.keys(u.cantones).map((v) => /* @__PURE__ */ g.jsx("option", { value: v, children: m[v].nombre }, v))
      }
    )
  ] });
}, Pe = (i) => {
  const u = Y();
  if (!u)
    return /* @__PURE__ */ g.jsx("div", { children: "no context" });
  const { selectedDistrito: m, distritos: C, handleDistrito: b } = u;
  return /* @__PURE__ */ g.jsxs("div", { className: i.ContainerClassName, children: [
    /* @__PURE__ */ g.jsx("label", { className: i.LabelClassName, children: i.LabelContent ?? "Distritos" }),
    /* @__PURE__ */ g.jsx(
      "select",
      {
        onChange: (v) => b(v.target.value),
        className: i.SelectInputClassName,
        value: m,
        children: Object.keys(C).map((v) => /* @__PURE__ */ g.jsx("option", { value: v, children: C[v] }, v))
      }
    )
  ] });
};
function ye() {
  const i = Y();
  if (!i)
    return { provincia: null, canton: null, distrito: null };
  const { provincia: u, canton: m, distrito: C } = i.location;
  return { provincia: u, canton: m, distrito: C };
}
function Ee() {
  const i = Y();
  if (!i)
    return null;
  const { useSetLocationValues: u } = i;
  return { useSetLocationValues: u };
}
export {
  ge as ContextProvider,
  Pe as DistrictSelect,
  ye as Location,
  Ee as LocationMethods,
  Re as MunicipalitySelect,
  he as ProvinceSelect
};
