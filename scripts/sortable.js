/*! Sortable 1.15.3 - MIT | git://github.com/SortableJS/Sortable.git */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Sortable = e()
}(this, function() {
    "use strict";
    function e(e, t) {
        var n, o = Object.keys(e);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e),
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        o.push.apply(o, n)),
        o
    }
    function I(o) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? e(Object(i), !0).forEach(function(t) {
                var e, n;
                e = o,
                t = i[n = t],
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach(function(t) {
                Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(i, t))
            })
        }
        return o
    }
    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function a() {
        return (a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n, o = arguments[e];
                for (n in o)
                    Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
            }
            return t
        }
        ).apply(this, arguments)
    }
    function i(t, e) {
        if (null == t)
            return {};
        var n, o = function(t, e) {
            if (null == t)
                return {};
            for (var n, o = {}, i = Object.keys(t), r = 0; r < i.length; r++)
                n = i[r],
                0 <= e.indexOf(n) || (o[n] = t[n]);
            return o
        }(t, e);
        if (Object.getOwnPropertySymbols)
            for (var i = Object.getOwnPropertySymbols(t), r = 0; r < i.length; r++)
                n = i[r],
                0 <= e.indexOf(n) || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
        return o
    }
    function r(t) {
        return function(t) {
            if (Array.isArray(t))
                return l(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                return Array.from(t)
        }(t) || function(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return l(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
            }
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++)
            o[n] = t[n];
        return o
    }
    function t(t) {
        if ("undefined" != typeof window && window.navigator)
            return !!navigator.userAgent.match(t)
    }
    var y = t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i)
      , w = t(/Edge/i)
      , s = t(/firefox/i)
      , u = t(/safari/i) && !t(/chrome/i) && !t(/android/i)
      , n = t(/iP(ad|od|hone)/i)
      , c = t(/chrome/i) && t(/android/i)
      , d = {
        capture: !1,
        passive: !1
    };
    function h(t, e, n) {
        t.addEventListener(e, n, !y && d)
    }
    function f(t, e, n) {
        t.removeEventListener(e, n, !y && d)
    }
    function p(t, e) {
        if (e && (">" === e[0] && (e = e.substring(1)),
        t))
            try {
                if (t.matches)
                    return t.matches(e);
                if (t.msMatchesSelector)
                    return t.msMatchesSelector(e);
                if (t.webkitMatchesSelector)
                    return t.webkitMatchesSelector(e)
            } catch (t) {
                return
            }
    }
    function g(t) {
        return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
    }
    function P(t, e, n, o) {
        if (t) {
            n = n || document;
            do {
                if (null != e && (">" !== e[0] || t.parentNode === n) && p(t, e) || o && t === n)
                    return t
            } while (t !== n && (t = g(t)))
        }
        return null
    }
    var m, v = /\s+/g;
    function k(t, e, n) {
        var o;
        t && e && (t.classList ? t.classList[n ? "add" : "remove"](e) : (o = (" " + t.className + " ").replace(v, " ").replace(" " + e + " ", " "),
        t.className = (o + (n ? " " + e : "")).replace(v, " ")))
    }
    function R(t, e, n) {
        var o = t && t.style;
        if (o) {
            if (void 0 === n)
                return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle),
                void 0 === e ? n : n[e];
            o[e = !(e in o || -1 !== e.indexOf("webkit")) ? "-webkit-" + e : e] = n + ("string" == typeof n ? "" : "px")
        }
    }
    function b(t, e) {
        var n = "";
        if ("string" == typeof t)
            n = t;
        else
            do {
                var o = R(t, "transform")
            } while (o && "none" !== o && (n = o + " " + n),
            !e && (t = t.parentNode));
        var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
        return i && new i(n)
    }
    function E(t, e, n) {
        if (t) {
            var o = t.getElementsByTagName(e)
              , i = 0
              , r = o.length;
            if (n)
                for (; i < r; i++)
                    n(o[i], i);
            return o
        }
        return []
    }
    function O() {
        var t = document.scrollingElement;
        return t || document.documentElement
    }
    function X(t, e, n, o, i) {
        if (t.getBoundingClientRect || t === window) {
            var r, a, l, s, c, u, d = t !== window && t.parentNode && t !== O() ? (a = (r = t.getBoundingClientRect()).top,
            l = r.left,
            s = r.bottom,
            c = r.right,
            u = r.height,
            r.width) : (l = a = 0,
            s = window.innerHeight,
            c = window.innerWidth,
            u = window.innerHeight,
            window.innerWidth);
            if ((e || n) && t !== window && (i = i || t.parentNode,
            !y))
                do {
                    if (i && i.getBoundingClientRect && ("none" !== R(i, "transform") || n && "static" !== R(i, "position"))) {
                        var h = i.getBoundingClientRect();
                        a -= h.top + parseInt(R(i, "border-top-width")),
                        l -= h.left + parseInt(R(i, "border-left-width")),
                        s = a + r.height,
                        c = l + r.width;
                        break
                    }
                } while (i = i.parentNode);
            return o && t !== window && (o = (e = b(i || t)) && e.a,
            t = e && e.d,
            e && (s = (a /= t) + (u /= t),
            c = (l /= o) + (d /= o))),
            {
                top: a,
                left: l,
                bottom: s,
                right: c,
                width: d,
                height: u
            }
        }
    }
    function Y(t, e, n) {
        for (var o = M(t, !0), i = X(t)[e]; o; ) {
            var r = X(o)[n];
            if (!("top" === n || "left" === n ? r <= i : i <= r))
                return o;
            if (o === O())
                break;
            o = M(o, !1)
        }
        return !1
    }
    function B(t, e, n, o) {
        for (var i = 0, r = 0, a = t.children; r < a.length; ) {
            if ("none" !== a[r].style.display && a[r] !== jt.ghost && (o || a[r] !== jt.dragged) && P(a[r], n.draggable, t, !1)) {
                if (i === e)
                    return a[r];
                i++
            }
            r++
        }
        return null
    }
    function F(t, e) {
        for (var n = t.lastElementChild; n && (n === jt.ghost || "none" === R(n, "display") || e && !p(n, e)); )
            n = n.previousElementSibling;
        return n || null
    }
    function j(t, e) {
        var n = 0;
        if (!t || !t.parentNode)
            return -1;
        for (; t = t.previousElementSibling; )
            "TEMPLATE" === t.nodeName.toUpperCase() || t === jt.clone || e && !p(t, e) || n++;
        return n
    }
    function D(t) {
        var e = 0
          , n = 0
          , o = O();
        if (t)
            do {
                var i = b(t)
                  , r = i.a
                  , i = i.d
            } while (e += t.scrollLeft * r,
            n += t.scrollTop * i,
            t !== o && (t = t.parentNode));
        return [e, n]
    }
    function M(t, e) {
        if (!t || !t.getBoundingClientRect)
            return O();
        var n = t
          , o = !1;
        do {
            if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
                var i = R(n);
                if (n.clientWidth < n.scrollWidth && ("auto" == i.overflowX || "scroll" == i.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == i.overflowY || "scroll" == i.overflowY)) {
                    if (!n.getBoundingClientRect || n === document.body)
                        return O();
                    if (o || e)
                        return n;
                    o = !0
                }
            }
        } while (n = n.parentNode);
        return O()
    }
    function S(t, e) {
        return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
    }
    function _(e, n) {
        return function() {
            var t;
            m || (1 === (t = arguments).length ? e.call(this, t[0]) : e.apply(this, t),
            m = setTimeout(function() {
                m = void 0
            }, n))
        }
    }
    function H(t, e, n) {
        t.scrollLeft += e,
        t.scrollTop += n
    }
    function C(t) {
        var e = window.Polymer
          , n = window.jQuery || window.Zepto;
        return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
    }
    function T(t, e) {
        R(t, "position", "absolute"),
        R(t, "top", e.top),
        R(t, "left", e.left),
        R(t, "width", e.width),
        R(t, "height", e.height)
    }
    function x(t) {
        R(t, "position", ""),
        R(t, "top", ""),
        R(t, "left", ""),
        R(t, "width", ""),
        R(t, "height", "")
    }
    function L(n, o, i) {
        var r = {};
        return Array.from(n.children).forEach(function(t) {
            var e;
            P(t, o.draggable, n, !1) && !t.animated && t !== i && (e = X(t),
            r.left = Math.min(null !== (t = r.left) && void 0 !== t ? t : 1 / 0, e.left),
            r.top = Math.min(null !== (t = r.top) && void 0 !== t ? t : 1 / 0, e.top),
            r.right = Math.max(null !== (t = r.right) && void 0 !== t ? t : -1 / 0, e.right),
            r.bottom = Math.max(null !== (t = r.bottom) && void 0 !== t ? t : -1 / 0, e.bottom))
        }),
        r.width = r.right - r.left,
        r.height = r.bottom - r.top,
        r.x = r.left,
        r.y = r.top,
        r
    }
    var K = "Sortable" + (new Date).getTime();
    function A() {
        var e, o = [];
        return {
            captureAnimationState: function() {
                o = [],
                this.options.animation && [].slice.call(this.el.children).forEach(function(t) {
                    var e, n;
                    "none" !== R(t, "display") && t !== jt.ghost && (o.push({
                        target: t,
                        rect: X(t)
                    }),
                    e = I({}, o[o.length - 1].rect),
                    !t.thisAnimationDuration || (n = b(t, !0)) && (e.top -= n.f,
                    e.left -= n.e),
                    t.fromRect = e)
                })
            },
            addAnimationState: function(t) {
                o.push(t)
            },
            removeAnimationState: function(t) {
                o.splice(function(t, e) {
                    for (var n in t)
                        if (t.hasOwnProperty(n))
                            for (var o in e)
                                if (e.hasOwnProperty(o) && e[o] === t[n][o])
                                    return Number(n);
                    return -1
                }(o, {
                    target: t
                }), 1)
            },
            animateAll: function(t) {
                var c = this;
                if (!this.options.animation)
                    return clearTimeout(e),
                    void ("function" == typeof t && t());
                var u = !1
                  , d = 0;
                o.forEach(function(t) {
                    var e = 0
                      , n = t.target
                      , o = n.fromRect
                      , i = X(n)
                      , r = n.prevFromRect
                      , a = n.prevToRect
                      , l = t.rect
                      , s = b(n, !0);
                    s && (i.top -= s.f,
                    i.left -= s.e),
                    n.toRect = i,
                    n.thisAnimationDuration && S(r, i) && !S(o, i) && (l.top - i.top) / (l.left - i.left) == (o.top - i.top) / (o.left - i.left) && (t = l,
                    s = r,
                    r = a,
                    a = c.options,
                    e = Math.sqrt(Math.pow(s.top - t.top, 2) + Math.pow(s.left - t.left, 2)) / Math.sqrt(Math.pow(s.top - r.top, 2) + Math.pow(s.left - r.left, 2)) * a.animation),
                    S(i, o) || (n.prevFromRect = o,
                    n.prevToRect = i,
                    e = e || c.options.animation,
                    c.animate(n, l, i, e)),
                    e && (u = !0,
                    d = Math.max(d, e),
                    clearTimeout(n.animationResetTimer),
                    n.animationResetTimer = setTimeout(function() {
                        n.animationTime = 0,
                        n.prevFromRect = null,
                        n.fromRect = null,
                        n.prevToRect = null,
                        n.thisAnimationDuration = null
                    }, e),
                    n.thisAnimationDuration = e)
                }),
                clearTimeout(e),
                u ? e = setTimeout(function() {
                    "function" == typeof t && t()
                }, d) : "function" == typeof t && t(),
                o = []
            },
            animate: function(t, e, n, o) {
                var i, r;
                o && (R(t, "transition", ""),
                R(t, "transform", ""),
                i = (r = b(this.el)) && r.a,
                r = r && r.d,
                i = (e.left - n.left) / (i || 1),
                r = (e.top - n.top) / (r || 1),
                t.animatingX = !!i,
                t.animatingY = !!r,
                R(t, "transform", "translate3d(" + i + "px," + r + "px,0)"),
                this.forRepaintDummy = t.offsetWidth,
                R(t, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")),
                R(t, "transform", "translate3d(0,0,0)"),
                "number" == typeof t.animated && clearTimeout(t.animated),
                t.animated = setTimeout(function() {
                    R(t, "transition", ""),
                    R(t, "transform", ""),
                    t.animated = !1,
                    t.animatingX = !1,
                    t.animatingY = !1
                }, o))
            }
        }
    }
    var N = []
      , W = {
        initializeByDefault: !0
    }
      , z = {
        mount: function(e) {
            for (var t in W)
                !W.hasOwnProperty(t) || t in e || (e[t] = W[t]);
            N.forEach(function(t) {
                if (t.pluginName === e.pluginName)
                    throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once")
            }),
            N.push(e)
        },
        pluginEvent: function(e, n, o) {
            var t = this;
            this.eventCanceled = !1,
            o.cancel = function() {
                t.eventCanceled = !0
            }
            ;
            var i = e + "Global";
            N.forEach(function(t) {
                n[t.pluginName] && (n[t.pluginName][i] && n[t.pluginName][i](I({
                    sortable: n
                }, o)),
                n.options[t.pluginName] && n[t.pluginName][e] && n[t.pluginName][e](I({
                    sortable: n
                }, o)))
            })
        },
        initializePlugins: function(n, o, i, t) {
            for (var e in N.forEach(function(t) {
                var e = t.pluginName;
                (n.options[e] || t.initializeByDefault) && ((t = new t(n,o,n.options)).sortable = n,
                t.options = n.options,
                n[e] = t,
                a(i, t.defaults))
            }),
            n.options) {
                var r;
                n.options.hasOwnProperty(e) && (void 0 !== (r = this.modifyOption(n, e, n.options[e])) && (n.options[e] = r))
            }
        },
        getEventProperties: function(e, n) {
            var o = {};
            return N.forEach(function(t) {
                "function" == typeof t.eventProperties && a(o, t.eventProperties.call(n[t.pluginName], e))
            }),
            o
        },
        modifyOption: function(e, n, o) {
            var i;
            return N.forEach(function(t) {
                e[t.pluginName] && t.optionListeners && "function" == typeof t.optionListeners[n] && (i = t.optionListeners[n].call(e[t.pluginName], o))
            }),
            i
        }
    };
    function G(t) {
        var e = t.sortable
          , n = t.rootEl
          , o = t.name
          , i = t.targetEl
          , r = t.cloneEl
          , a = t.toEl
          , l = t.fromEl
          , s = t.oldIndex
          , c = t.newIndex
          , u = t.oldDraggableIndex
          , d = t.newDraggableIndex
          , h = t.originalEvent
          , f = t.putSortable
          , p = t.extraEventProperties;
        if (e = e || n && n[K]) {
            var g, m = e.options, t = "on" + o.charAt(0).toUpperCase() + o.substr(1);
            !window.CustomEvent || y || w ? (g = document.createEvent("Event")).initEvent(o, !0, !0) : g = new CustomEvent(o,{
                bubbles: !0,
                cancelable: !0
            }),
            g.to = a || n,
            g.from = l || n,
            g.item = i || n,
            g.clone = r,
            g.oldIndex = s,
            g.newIndex = c,
            g.oldDraggableIndex = u,
            g.newDraggableIndex = d,
            g.originalEvent = h,
            g.pullMode = f ? f.lastPutMode : void 0;
            var v, b = I(I({}, p), z.getEventProperties(o, e));
            for (v in b)
                g[v] = b[v];
            n && n.dispatchEvent(g),
            m[t] && m[t].call(e, g)
        }
    }
    function U(t, e) {
        var n = (o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).evt
          , o = i(o, q);
        z.pluginEvent.bind(jt)(t, e, I({
            dragEl: Z,
            parentEl: $,
            ghostEl: Q,
            rootEl: J,
            nextEl: tt,
            lastDownEl: et,
            cloneEl: nt,
            cloneHidden: ot,
            dragStarted: mt,
            putSortable: ct,
            activeSortable: jt.active,
            originalEvent: n,
            oldIndex: it,
            oldDraggableIndex: at,
            newIndex: rt,
            newDraggableIndex: lt,
            hideGhostForTarget: Xt,
            unhideGhostForTarget: Yt,
            cloneNowHidden: function() {
                ot = !0
            },
            cloneNowShown: function() {
                ot = !1
            },
            dispatchSortableEvent: function(t) {
                V({
                    sortable: e,
                    name: t,
                    originalEvent: n
                })
            }
        }, o))
    }
    var q = ["evt"];
    function V(t) {
        G(I({
            putSortable: ct,
            cloneEl: nt,
            targetEl: Z,
            rootEl: J,
            oldIndex: it,
            oldDraggableIndex: at,
            newIndex: rt,
            newDraggableIndex: lt
        }, t))
    }
    var Z, $, Q, J, tt, et, nt, ot, it, rt, at, lt, st, ct, ut, dt, ht, ft, pt, gt, mt, vt, bt, yt, wt, Et = !1, Dt = !1, St = [], _t = !1, Ct = !1, Tt = [], xt = !1, Ot = [], Mt = "undefined" != typeof document, At = n, Nt = w || y ? "cssFloat" : "float", It = Mt && !c && !n && "draggable"in document.createElement("div"), Pt = function() {
        if (Mt) {
            if (y)
                return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto",
            "auto" === t.style.pointerEvents
        }
    }(), kt = function(t, e) {
        var n = R(t)
          , o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth)
          , i = B(t, 0, e)
          , r = B(t, 1, e)
          , a = i && R(i)
          , l = r && R(r)
          , s = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + X(i).width
          , t = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + X(r).width;
        if ("flex" === n.display)
            return "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal";
        if ("grid" === n.display)
            return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (i && a.float && "none" !== a.float) {
            e = "left" === a.float ? "left" : "right";
            return !r || "both" !== l.clear && l.clear !== e ? "horizontal" : "vertical"
        }
        return i && ("block" === a.display || "flex" === a.display || "table" === a.display || "grid" === a.display || o <= s && "none" === n[Nt] || r && "none" === n[Nt] && o < s + t) ? "vertical" : "horizontal"
    }, Rt = function(t) {
        function l(r, a) {
            return function(t, e, n, o) {
                var i = t.options.group.name && e.options.group.name && t.options.group.name === e.options.group.name;
                if (null == r && (a || i))
                    return !0;
                if (null == r || !1 === r)
                    return !1;
                if (a && "clone" === r)
                    return r;
                if ("function" == typeof r)
                    return l(r(t, e, n, o), a)(t, e, n, o);
                e = (a ? t : e).options.group.name;
                return !0 === r || "string" == typeof r && r === e || r.join && -1 < r.indexOf(e)
            }
        }
        var e = {}
          , n = t.group;
        n && "object" == o(n) || (n = {
            name: n
        }),
        e.name = n.name,
        e.checkPull = l(n.pull, !0),
        e.checkPut = l(n.put),
        e.revertClone = n.revertClone,
        t.group = e
    }, Xt = function() {
        !Pt && Q && R(Q, "display", "none")
    }, Yt = function() {
        !Pt && Q && R(Q, "display", "")
    };
    Mt && !c && document.addEventListener("click", function(t) {
        if (Dt)
            return t.preventDefault(),
            t.stopPropagation && t.stopPropagation(),
            t.stopImmediatePropagation && t.stopImmediatePropagation(),
            Dt = !1
    }, !0);
    function Bt(t) {
        if (Z) {
            t = t.touches ? t.touches[0] : t;
            var e = (i = t.clientX,
            r = t.clientY,
            St.some(function(t) {
                var e = t[K].options.emptyInsertThreshold;
                if (e && !F(t)) {
                    var n = X(t)
                      , o = i >= n.left - e && i <= n.right + e
                      , e = r >= n.top - e && r <= n.bottom + e;
                    return o && e ? a = t : void 0
                }
            }),
            a);
            if (e) {
                var n, o = {};
                for (n in t)
                    t.hasOwnProperty(n) && (o[n] = t[n]);
                o.target = o.rootEl = e,
                o.preventDefault = void 0,
                o.stopPropagation = void 0,
                e[K]._onDragOver(o)
            }
        }
        var i, r, a
    }
    function Ft(t) {
        Z && Z.parentNode[K]._isOutsideThisEl(t.target)
    }
    function jt(t, e) {
        if (!t || !t.nodeType || 1 !== t.nodeType)
            throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
        this.el = t,
        this.options = e = a({}, e),
        t[K] = this;
        var n, o, i = {
            group: null,
            sort: !0,
            disabled: !1,
            store: null,
            handle: null,
            draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
            swapThreshold: 1,
            invertSwap: !1,
            invertedSwapThreshold: null,
            removeCloneOnHide: !0,
            direction: function() {
                return kt(t, this.options)
            },
            ghostClass: "sortable-ghost",
            chosenClass: "sortable-chosen",
            dragClass: "sortable-drag",
            ignore: "a, img",
            filter: null,
            preventOnFilter: !0,
            animation: 0,
            easing: null,
            setData: function(t, e) {
                t.setData("Text", e.textContent)
            },
            dropBubble: !1,
            dragoverBubble: !1,
            dataIdAttr: "data-id",
            delay: 0,
            delayOnTouchOnly: !1,
            touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
            forceFallback: !1,
            fallbackClass: "sortable-fallback",
            fallbackOnBody: !1,
            fallbackTolerance: 0,
            fallbackOffset: {
                x: 0,
                y: 0
            },
            supportPointer: !1 !== jt.supportPointer && "PointerEvent"in window && !u,
            emptyInsertThreshold: 5
        };
        for (n in z.initializePlugins(this, t, i),
        i)
            n in e || (e[n] = i[n]);
        for (o in Rt(e),
        this)
            "_" === o.charAt(0) && "function" == typeof this[o] && (this[o] = this[o].bind(this));
        this.nativeDraggable = !e.forceFallback && It,
        this.nativeDraggable && (this.options.touchStartThreshold = 1),
        e.supportPointer ? h(t, "pointerdown", this._onTapStart) : (h(t, "mousedown", this._onTapStart),
        h(t, "touchstart", this._onTapStart)),
        this.nativeDraggable && (h(t, "dragover", this),
        h(t, "dragenter", this)),
        St.push(this.el),
        e.store && e.store.get && this.sort(e.store.get(this) || []),
        a(this, A())
    }
    function Ht(t, e, n, o, i, r, a, l) {
        var s, c, u = t[K], d = u.options.onMove;
        return !window.CustomEvent || y || w ? (s = document.createEvent("Event")).initEvent("move", !0, !0) : s = new CustomEvent("move",{
            bubbles: !0,
            cancelable: !0
        }),
        s.to = e,
        s.from = t,
        s.dragged = n,
        s.draggedRect = o,
        s.related = i || e,
        s.relatedRect = r || X(e),
        s.willInsertAfter = l,
        s.originalEvent = a,
        t.dispatchEvent(s),
        c = d ? d.call(u, s, a) : c
    }
    function Lt(t) {
        t.draggable = !1
    }
    function Kt() {
        xt = !1
    }
    function Wt(t) {
        return setTimeout(t, 0)
    }
    function zt(t) {
        return clearTimeout(t)
    }
    jt.prototype = {
        constructor: jt,
        _isOutsideThisEl: function(t) {
            this.el.contains(t) || t === this.el || (vt = null)
        },
        _getDirection: function(t, e) {
            return "function" == typeof this.options.direction ? this.options.direction.call(this, t, e, Z) : this.options.direction
        },
        _onTapStart: function(e) {
            if (e.cancelable) {
                var n = this
                  , o = this.el
                  , t = this.options
                  , i = t.preventOnFilter
                  , r = e.type
                  , a = e.touches && e.touches[0] || e.pointerType && "touch" === e.pointerType && e
                  , l = (a || e).target
                  , s = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l
                  , c = t.filter;
                if (!function(t) {
                    Ot.length = 0;
                    var e = t.getElementsByTagName("input")
                      , n = e.length;
                    for (; n--; ) {
                        var o = e[n];
                        o.checked && Ot.push(o)
                    }
                }(o),
                !Z && !(/mousedown|pointerdown/.test(r) && 0 !== e.button || t.disabled) && !s.isContentEditable && (this.nativeDraggable || !u || !l || "SELECT" !== l.tagName.toUpperCase()) && !((l = P(l, t.draggable, o, !1)) && l.animated || et === l)) {
                    if (it = j(l),
                    at = j(l, t.draggable),
                    "function" == typeof c) {
                        if (c.call(this, e, l, this))
                            return V({
                                sortable: n,
                                rootEl: s,
                                name: "filter",
                                targetEl: l,
                                toEl: o,
                                fromEl: o
                            }),
                            U("filter", n, {
                                evt: e
                            }),
                            void (i && e.cancelable && e.preventDefault())
                    } else if (c = c && c.split(",").some(function(t) {
                        if (t = P(s, t.trim(), o, !1))
                            return V({
                                sortable: n,
                                rootEl: t,
                                name: "filter",
                                targetEl: l,
                                fromEl: o,
                                toEl: o
                            }),
                            U("filter", n, {
                                evt: e
                            }),
                            !0
                    }))
                        return void (i && e.cancelable && e.preventDefault());
                    t.handle && !P(s, t.handle, o, !1) || this._prepareDragStart(e, a, l)
                }
            }
        },
        _prepareDragStart: function(t, e, n) {
            var o, i = this, r = i.el, a = i.options, l = r.ownerDocument;
            n && !Z && n.parentNode === r && (o = X(n),
            J = r,
            $ = (Z = n).parentNode,
            tt = Z.nextSibling,
            et = n,
            st = a.group,
            ut = {
                target: jt.dragged = Z,
                clientX: (e || t).clientX,
                clientY: (e || t).clientY
            },
            pt = ut.clientX - o.left,
            gt = ut.clientY - o.top,
            this._lastX = (e || t).clientX,
            this._lastY = (e || t).clientY,
            Z.style["will-change"] = "all",
            o = function() {
                U("delayEnded", i, {
                    evt: t
                }),
                jt.eventCanceled ? i._onDrop() : (i._disableDelayedDragEvents(),
                !s && i.nativeDraggable && (Z.draggable = !0),
                i._triggerDragStart(t, e),
                V({
                    sortable: i,
                    name: "choose",
                    originalEvent: t
                }),
                k(Z, a.chosenClass, !0))
            }
            ,
            a.ignore.split(",").forEach(function(t) {
                E(Z, t.trim(), Lt)
            }),
            h(l, "dragover", Bt),
            h(l, "mousemove", Bt),
            h(l, "touchmove", Bt),
            h(l, "mouseup", i._onDrop),
            h(l, "touchend", i._onDrop),
            h(l, "touchcancel", i._onDrop),
            s && this.nativeDraggable && (this.options.touchStartThreshold = 4,
            Z.draggable = !0),
            U("delayStart", this, {
                evt: t
            }),
            !a.delay || a.delayOnTouchOnly && !e || this.nativeDraggable && (w || y) ? o() : jt.eventCanceled ? this._onDrop() : (h(l, "mouseup", i._disableDelayedDrag),
            h(l, "touchend", i._disableDelayedDrag),
            h(l, "touchcancel", i._disableDelayedDrag),
            h(l, "mousemove", i._delayedDragTouchMoveHandler),
            h(l, "touchmove", i._delayedDragTouchMoveHandler),
            a.supportPointer && h(l, "pointermove", i._delayedDragTouchMoveHandler),
            i._dragStartTimer = setTimeout(o, a.delay)))
        },
        _delayedDragTouchMoveHandler: function(t) {
            t = t.touches ? t.touches[0] : t;
            Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
        },
        _disableDelayedDrag: function() {
            Z && Lt(Z),
            clearTimeout(this._dragStartTimer),
            this._disableDelayedDragEvents()
        },
        _disableDelayedDragEvents: function() {
            var t = this.el.ownerDocument;
            f(t, "mouseup", this._disableDelayedDrag),
            f(t, "touchend", this._disableDelayedDrag),
            f(t, "touchcancel", this._disableDelayedDrag),
            f(t, "mousemove", this._delayedDragTouchMoveHandler),
            f(t, "touchmove", this._delayedDragTouchMoveHandler),
            f(t, "pointermove", this._delayedDragTouchMoveHandler)
        },
        _triggerDragStart: function(t, e) {
            e = e || "touch" == t.pointerType && t,
            !this.nativeDraggable || e ? this.options.supportPointer ? h(document, "pointermove", this._onTouchMove) : h(document, e ? "touchmove" : "mousemove", this._onTouchMove) : (h(Z, "dragend", this),
            h(J, "dragstart", this._onDragStart));
            try {
                document.selection ? Wt(function() {
                    document.selection.empty()
                }) : window.getSelection().removeAllRanges()
            } catch (t) {}
        },
        _dragStarted: function(t, e) {
            var n;
            Et = !1,
            J && Z ? (U("dragStarted", this, {
                evt: e
            }),
            this.nativeDraggable && h(document, "dragover", Ft),
            n = this.options,
            t || k(Z, n.dragClass, !1),
            k(Z, n.ghostClass, !0),
            jt.active = this,
            t && this._appendGhost(),
            V({
                sortable: this,
                name: "start",
                originalEvent: e
            })) : this._nulling()
        },
        _emulateDragOver: function() {
            if (dt) {
                this._lastX = dt.clientX,
                this._lastY = dt.clientY,
                Xt();
                for (var t = document.elementFromPoint(dt.clientX, dt.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(dt.clientX, dt.clientY)) !== e; )
                    e = t;
                if (Z.parentNode[K]._isOutsideThisEl(t),
                e)
                    do {
                        if (e[K])
                            if (e[K]._onDragOver({
                                clientX: dt.clientX,
                                clientY: dt.clientY,
                                target: t,
                                rootEl: e
                            }) && !this.options.dragoverBubble)
                                break
                    } while (e = g(t = e));
                Yt()
            }
        },
        _onTouchMove: function(t) {
            if (ut) {
                var e = this.options
                  , n = e.fallbackTolerance
                  , o = e.fallbackOffset
                  , i = t.touches ? t.touches[0] : t
                  , r = Q && b(Q, !0)
                  , a = Q && r && r.a
                  , l = Q && r && r.d
                  , e = At && wt && D(wt)
                  , a = (i.clientX - ut.clientX + o.x) / (a || 1) + (e ? e[0] - Tt[0] : 0) / (a || 1)
                  , l = (i.clientY - ut.clientY + o.y) / (l || 1) + (e ? e[1] - Tt[1] : 0) / (l || 1);
                if (!jt.active && !Et) {
                    if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n)
                        return;
                    this._onDragStart(t, !0)
                }
                Q && (r ? (r.e += a - (ht || 0),
                r.f += l - (ft || 0)) : r = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: a,
                    f: l
                },
                r = "matrix(".concat(r.a, ",").concat(r.b, ",").concat(r.c, ",").concat(r.d, ",").concat(r.e, ",").concat(r.f, ")"),
                R(Q, "webkitTransform", r),
                R(Q, "mozTransform", r),
                R(Q, "msTransform", r),
                R(Q, "transform", r),
                ht = a,
                ft = l,
                dt = i),
                t.cancelable && t.preventDefault()
            }
        },
        _appendGhost: function() {
            if (!Q) {
                var t = this.options.fallbackOnBody ? document.body : J
                  , e = X(Z, !0, At, !0, t)
                  , n = this.options;
                if (At) {
                    for (wt = t; "static" === R(wt, "position") && "none" === R(wt, "transform") && wt !== document; )
                        wt = wt.parentNode;
                    wt !== document.body && wt !== document.documentElement ? (wt === document && (wt = O()),
                    e.top += wt.scrollTop,
                    e.left += wt.scrollLeft) : wt = O(),
                    Tt = D(wt)
                }
                k(Q = Z.cloneNode(!0), n.ghostClass, !1),
                k(Q, n.fallbackClass, !0),
                k(Q, n.dragClass, !0),
                R(Q, "transition", ""),
                R(Q, "transform", ""),
                R(Q, "box-sizing", "border-box"),
                R(Q, "margin", 0),
                R(Q, "top", e.top),
                R(Q, "left", e.left),
                R(Q, "width", e.width),
                R(Q, "height", e.height),
                R(Q, "opacity", "0.8"),
                R(Q, "position", At ? "absolute" : "fixed"),
                R(Q, "zIndex", "100000"),
                R(Q, "pointerEvents", "none"),
                jt.ghost = Q,
                t.appendChild(Q),
                R(Q, "transform-origin", pt / parseInt(Q.style.width) * 100 + "% " + gt / parseInt(Q.style.height) * 100 + "%")
            }
        },
        _onDragStart: function(t, e) {
            var n = this
              , o = t.dataTransfer
              , i = n.options;
            U("dragStart", this, {
                evt: t
            }),
            jt.eventCanceled ? this._onDrop() : (U("setupClone", this),
            jt.eventCanceled || ((nt = C(Z)).removeAttribute("id"),
            nt.draggable = !1,
            nt.style["will-change"] = "",
            this._hideClone(),
            k(nt, this.options.chosenClass, !1),
            jt.clone = nt),
            n.cloneId = Wt(function() {
                U("clone", n),
                jt.eventCanceled || (n.options.removeCloneOnHide || J.insertBefore(nt, Z),
                n._hideClone(),
                V({
                    sortable: n,
                    name: "clone"
                }))
            }),
            e || k(Z, i.dragClass, !0),
            e ? (Dt = !0,
            n._loopId = setInterval(n._emulateDragOver, 50)) : (f(document, "mouseup", n._onDrop),
            f(document, "touchend", n._onDrop),
            f(document, "touchcancel", n._onDrop),
            o && (o.effectAllowed = "move",
            i.setData && i.setData.call(n, o, Z)),
            h(document, "drop", n),
            R(Z, "transform", "translateZ(0)")),
            Et = !0,
            n._dragStartId = Wt(n._dragStarted.bind(n, e, t)),
            h(document, "selectstart", n),
            mt = !0,
            u && R(document.body, "user-select", "none"))
        },
        _onDragOver: function(n) {
            var o, i, r, t, e, a = this.el, l = n.target, s = this.options, c = s.group, u = jt.active, d = st === c, h = s.sort, f = ct || u, p = this, g = !1;
            if (!xt) {
                if (void 0 !== n.preventDefault && n.cancelable && n.preventDefault(),
                l = P(l, s.draggable, a, !0),
                O("dragOver"),
                jt.eventCanceled)
                    return g;
                if (Z.contains(n.target) || l.animated && l.animatingX && l.animatingY || p._ignoreWhileAnimating === l)
                    return A(!1);
                if (Dt = !1,
                u && !s.disabled && (d ? h || (i = $ !== J) : ct === this || (this.lastPutMode = st.checkPull(this, u, Z, n)) && c.checkPut(this, u, Z, n))) {
                    if (r = "vertical" === this._getDirection(n, l),
                    o = X(Z),
                    O("dragOverValid"),
                    jt.eventCanceled)
                        return g;
                    if (i)
                        return $ = J,
                        M(),
                        this._hideClone(),
                        O("revert"),
                        jt.eventCanceled || (tt ? J.insertBefore(Z, tt) : J.appendChild(Z)),
                        A(!0);
                    var m = F(a, s.draggable);
                    if (m && (S = n,
                    c = r,
                    x = X(F((D = this).el, D.options.draggable)),
                    D = L(D.el, D.options, Q),
                    !(c ? S.clientX > D.right + 10 || S.clientY > x.bottom && S.clientX > x.left : S.clientY > D.bottom + 10 || S.clientX > x.right && S.clientY > x.top) || m.animated)) {
                        if (m && (t = n,
                        e = r,
                        C = X(B((_ = this).el, 0, _.options, !0)),
                        _ = L(_.el, _.options, Q),
                        e ? t.clientX < _.left - 10 || t.clientY < C.top && t.clientX < C.right : t.clientY < _.top - 10 || t.clientY < C.bottom && t.clientX < C.left)) {
                            var v = B(a, 0, s, !0);
                            if (v === Z)
                                return A(!1);
                            if (E = X(l = v),
                            !1 !== Ht(J, a, Z, o, l, E, n, !1))
                                return M(),
                                a.insertBefore(Z, v),
                                $ = a,
                                N(),
                                A(!0)
                        } else if (l.parentNode === a) {
                            var b, y, w, E = X(l), D = Z.parentNode !== a, S = (S = Z.animated && Z.toRect || o,
                            x = l.animated && l.toRect || E,
                            _ = (e = r) ? S.left : S.top,
                            t = e ? S.right : S.bottom,
                            C = e ? S.width : S.height,
                            v = e ? x.left : x.top,
                            S = e ? x.right : x.bottom,
                            x = e ? x.width : x.height,
                            !(_ === v || t === S || _ + C / 2 === v + x / 2)), _ = r ? "top" : "left", C = Y(l, "top", "top") || Y(Z, "top", "top"), v = C ? C.scrollTop : void 0;
                            if (vt !== l && (y = E[_],
                            _t = !1,
                            Ct = !S && s.invertSwap || D),
                            0 !== (b = function(t, e, n, o, i, r, a, l) {
                                var s = o ? t.clientY : t.clientX
                                  , c = o ? n.height : n.width
                                  , t = o ? n.top : n.left
                                  , o = o ? n.bottom : n.right
                                  , n = !1;
                                if (!a)
                                    if (l && yt < c * i) {
                                        if (_t = !_t && (1 === bt ? t + c * r / 2 < s : s < o - c * r / 2) ? !0 : _t)
                                            n = !0;
                                        else if (1 === bt ? s < t + yt : o - yt < s)
                                            return -bt
                                    } else if (t + c * (1 - i) / 2 < s && s < o - c * (1 - i) / 2)
                                        return function(t) {
                                            return j(Z) < j(t) ? 1 : -1
                                        }(e);
                                if ((n = n || a) && (s < t + c * r / 2 || o - c * r / 2 < s))
                                    return t + c / 2 < s ? 1 : -1;
                                return 0
                            }(n, l, E, r, S ? 1 : s.swapThreshold, null == s.invertedSwapThreshold ? s.swapThreshold : s.invertedSwapThreshold, Ct, vt === l)))
                                for (var T = j(Z); (w = $.children[T -= b]) && ("none" === R(w, "display") || w === Q); )
                                    ;
                            if (0 === b || w === l)
                                return A(!1);
                            bt = b;
                            var x = (vt = l).nextElementSibling
                              , D = !1
                              , S = Ht(J, a, Z, o, l, E, n, D = 1 === b);
                            if (!1 !== S)
                                return 1 !== S && -1 !== S || (D = 1 === S),
                                xt = !0,
                                setTimeout(Kt, 30),
                                M(),
                                D && !x ? a.appendChild(Z) : l.parentNode.insertBefore(Z, D ? x : l),
                                C && H(C, 0, v - C.scrollTop),
                                $ = Z.parentNode,
                                void 0 === y || Ct || (yt = Math.abs(y - X(l)[_])),
                                N(),
                                A(!0)
                        }
                    } else {
                        if (m === Z)
                            return A(!1);
                        if ((l = m && a === n.target ? m : l) && (E = X(l)),
                        !1 !== Ht(J, a, Z, o, l, E, n, !!l))
                            return M(),
                            m && m.nextSibling ? a.insertBefore(Z, m.nextSibling) : a.appendChild(Z),
                            $ = a,
                            N(),
                            A(!0)
                    }
                    if (a.contains(Z))
                        return A(!1)
                }
                return !1
            }
            function O(t, e) {
                U(t, p, I({
                    evt: n,
                    isOwner: d,
                    axis: r ? "vertical" : "horizontal",
                    revert: i,
                    dragRect: o,
                    targetRect: E,
                    canSort: h,
                    fromSortable: f,
                    target: l,
                    completed: A,
                    onMove: function(t, e) {
                        return Ht(J, a, Z, o, t, X(t), n, e)
                    },
                    changed: N
                }, e))
            }
            function M() {
                O("dragOverAnimationCapture"),
                p.captureAnimationState(),
                p !== f && f.captureAnimationState()
            }
            function A(t) {
                return O("dragOverCompleted", {
                    insertion: t
                }),
                t && (d ? u._hideClone() : u._showClone(p),
                p !== f && (k(Z, (ct || u).options.ghostClass, !1),
                k(Z, s.ghostClass, !0)),
                ct !== p && p !== jt.active ? ct = p : p === jt.active && ct && (ct = null),
                f === p && (p._ignoreWhileAnimating = l),
                p.animateAll(function() {
                    O("dragOverAnimationComplete"),
                    p._ignoreWhileAnimating = null
                }),
                p !== f && (f.animateAll(),
                f._ignoreWhileAnimating = null)),
                (l === Z && !Z.animated || l === a && !l.animated) && (vt = null),
                s.dragoverBubble || n.rootEl || l === document || (Z.parentNode[K]._isOutsideThisEl(n.target),
                t || Bt(n)),
                !s.dragoverBubble && n.stopPropagation && n.stopPropagation(),
                g = !0
            }
            function N() {
                rt = j(Z),
                lt = j(Z, s.draggable),
                V({
                    sortable: p,
                    name: "change",
                    toEl: a,
                    newIndex: rt,
                    newDraggableIndex: lt,
                    originalEvent: n
                })
            }
        },
        _ignoreWhileAnimating: null,
        _offMoveEvents: function() {
            f(document, "mousemove", this._onTouchMove),
            f(document, "touchmove", this._onTouchMove),
            f(document, "pointermove", this._onTouchMove),
            f(document, "dragover", Bt),
            f(document, "mousemove", Bt),
            f(document, "touchmove", Bt)
        },
        _offUpEvents: function() {
            var t = this.el.ownerDocument;
            f(t, "mouseup", this._onDrop),
            f(t, "touchend", this._onDrop),
            f(t, "pointerup", this._onDrop),
            f(t, "touchcancel", this._onDrop),
            f(document, "selectstart", this)
        },
        _onDrop: function(t) {
            var e = this.el
              , n = this.options;
            rt = j(Z),
            lt = j(Z, n.draggable),
            U("drop", this, {
                evt: t
            }),
            $ = Z && Z.parentNode,
            rt = j(Z),
            lt = j(Z, n.draggable),
            jt.eventCanceled || (_t = Ct = Et = !1,
            clearInterval(this._loopId),
            clearTimeout(this._dragStartTimer),
            zt(this.cloneId),
            zt(this._dragStartId),
            this.nativeDraggable && (f(document, "drop", this),
            f(e, "dragstart", this._onDragStart)),
            this._offMoveEvents(),
            this._offUpEvents(),
            u && R(document.body, "user-select", ""),
            R(Z, "transform", ""),
            t && (mt && (t.cancelable && t.preventDefault(),
            n.dropBubble || t.stopPropagation()),
            Q && Q.parentNode && Q.parentNode.removeChild(Q),
            (J === $ || ct && "clone" !== ct.lastPutMode) && nt && nt.parentNode && nt.parentNode.removeChild(nt),
            Z && (this.nativeDraggable && f(Z, "dragend", this),
            Lt(Z),
            Z.style["will-change"] = "",
            mt && !Et && k(Z, (ct || this).options.ghostClass, !1),
            k(Z, this.options.chosenClass, !1),
            V({
                sortable: this,
                name: "unchoose",
                toEl: $,
                newIndex: null,
                newDraggableIndex: null,
                originalEvent: t
            }),
            J !== $ ? (0 <= rt && (V({
                rootEl: $,
                name: "add",
                toEl: $,
                fromEl: J,
                originalEvent: t
            }),
            V({
                sortable: this,
                name: "remove",
                toEl: $,
                originalEvent: t
            }),
            V({
                rootEl: $,
                name: "sort",
                toEl: $,
                fromEl: J,
                originalEvent: t
            }),
            V({
                sortable: this,
                name: "sort",
                toEl: $,
                originalEvent: t
            })),
            ct && ct.save()) : rt !== it && 0 <= rt && (V({
                sortable: this,
                name: "update",
                toEl: $,
                originalEvent: t
            }),
            V({
                sortable: this,
                name: "sort",
                toEl: $,
                originalEvent: t
            })),
            jt.active && (null != rt && -1 !== rt || (rt = it,
            lt = at),
            V({
                sortable: this,
                name: "end",
                toEl: $,
                originalEvent: t
            }),
            this.save())))),
            this._nulling()
        },
        _nulling: function() {
            U("nulling", this),
            J = Z = $ = Q = tt = nt = et = ot = ut = dt = mt = rt = lt = it = at = vt = bt = ct = st = jt.dragged = jt.ghost = jt.clone = jt.active = null,
            Ot.forEach(function(t) {
                t.checked = !0
            }),
            Ot.length = ht = ft = 0
        },
        handleEvent: function(t) {
            switch (t.type) {
            case "drop":
            case "dragend":
                this._onDrop(t);
                break;
            case "dragenter":
            case "dragover":
                Z && (this._onDragOver(t),
                function(t) {
                    t.dataTransfer && (t.dataTransfer.dropEffect = "move");
                    t.cancelable && t.preventDefault()
                }(t));
                break;
            case "selectstart":
                t.preventDefault()
            }
        },
        toArray: function() {
            for (var t, e = [], n = this.el.children, o = 0, i = n.length, r = this.options; o < i; o++)
                P(t = n[o], r.draggable, this.el, !1) && e.push(t.getAttribute(r.dataIdAttr) || function(t) {
                    var e = t.tagName + t.className + t.src + t.href + t.textContent
                      , n = e.length
                      , o = 0;
                    for (; n--; )
                        o += e.charCodeAt(n);
                    return o.toString(36)
                }(t));
            return e
        },
        sort: function(t, e) {
            var n = {}
              , o = this.el;
            this.toArray().forEach(function(t, e) {
                e = o.children[e];
                P(e, this.options.draggable, o, !1) && (n[t] = e)
            }, this),
            e && this.captureAnimationState(),
            t.forEach(function(t) {
                n[t] && (o.removeChild(n[t]),
                o.appendChild(n[t]))
            }),
            e && this.animateAll()
        },
        save: function() {
            var t = this.options.store;
            t && t.set && t.set(this)
        },
        closest: function(t, e) {
            return P(t, e || this.options.draggable, this.el, !1)
        },
        option: function(t, e) {
            var n = this.options;
            if (void 0 === e)
                return n[t];
            var o = z.modifyOption(this, t, e);
            n[t] = void 0 !== o ? o : e,
            "group" === t && Rt(n)
        },
        destroy: function() {
            U("destroy", this);
            var t = this.el;
            t[K] = null,
            f(t, "mousedown", this._onTapStart),
            f(t, "touchstart", this._onTapStart),
            f(t, "pointerdown", this._onTapStart),
            this.nativeDraggable && (f(t, "dragover", this),
            f(t, "dragenter", this)),
            Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(t) {
                t.removeAttribute("draggable")
            }),
            this._onDrop(),
            this._disableDelayedDragEvents(),
            St.splice(St.indexOf(this.el), 1),
            this.el = t = null
        },
        _hideClone: function() {
            ot || (U("hideClone", this),
            jt.eventCanceled || (R(nt, "display", "none"),
            this.options.removeCloneOnHide && nt.parentNode && nt.parentNode.removeChild(nt),
            ot = !0))
        },
        _showClone: function(t) {
            "clone" === t.lastPutMode ? ot && (U("showClone", this),
            jt.eventCanceled || (Z.parentNode != J || this.options.group.revertClone ? tt ? J.insertBefore(nt, tt) : J.appendChild(nt) : J.insertBefore(nt, Z),
            this.options.group.revertClone && this.animate(Z, nt),
            R(nt, "display", ""),
            ot = !1)) : this._hideClone()
        }
    },
    Mt && h(document, "touchmove", function(t) {
        (jt.active || Et) && t.cancelable && t.preventDefault()
    }),
    jt.utils = {
        on: h,
        off: f,
        css: R,
        find: E,
        is: function(t, e) {
            return !!P(t, e, t, !1)
        },
        extend: function(t, e) {
            if (t && e)
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        },
        throttle: _,
        closest: P,
        toggleClass: k,
        clone: C,
        index: j,
        nextTick: Wt,
        cancelNextTick: zt,
        detectDirection: kt,
        getChild: B,
        expando: K
    },
    jt.get = function(t) {
        return t[K]
    }
    ,
    jt.mount = function() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
        (e = e[0].constructor === Array ? e[0] : e).forEach(function(t) {
            if (!t.prototype || !t.prototype.constructor)
                throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));
            t.utils && (jt.utils = I(I({}, jt.utils), t.utils)),
            z.mount(t)
        })
    }
    ,
    jt.create = function(t, e) {
        return new jt(t,e)
    }
    ;
    var Gt, Ut, qt, Vt, Zt, $t, Qt = [], Jt = !(jt.version = "1.15.3");
    function te() {
        Qt.forEach(function(t) {
            clearInterval(t.pid)
        }),
        Qt = []
    }
    function ee() {
        clearInterval($t)
    }
    var ne, oe = _(function(n, t, e, o) {
        if (t.scroll) {
            var i, r = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, l = t.scrollSensitivity, s = t.scrollSpeed, c = O(), u = !1;
            Ut !== e && (Ut = e,
            te(),
            Gt = t.scroll,
            i = t.scrollFn,
            !0 === Gt && (Gt = M(e, !0)));
            var d = 0
              , h = Gt;
            do {
                var f = h
                  , p = X(f)
                  , g = p.top
                  , m = p.bottom
                  , v = p.left
                  , b = p.right
                  , y = p.width
                  , w = p.height
                  , E = void 0
                  , D = void 0
                  , S = f.scrollWidth
                  , _ = f.scrollHeight
                  , C = R(f)
                  , T = f.scrollLeft
                  , p = f.scrollTop
                  , D = f === c ? (E = y < S && ("auto" === C.overflowX || "scroll" === C.overflowX || "visible" === C.overflowX),
                w < _ && ("auto" === C.overflowY || "scroll" === C.overflowY || "visible" === C.overflowY)) : (E = y < S && ("auto" === C.overflowX || "scroll" === C.overflowX),
                w < _ && ("auto" === C.overflowY || "scroll" === C.overflowY))
                  , T = E && (Math.abs(b - r) <= l && T + y < S) - (Math.abs(v - r) <= l && !!T)
                  , p = D && (Math.abs(m - a) <= l && p + w < _) - (Math.abs(g - a) <= l && !!p);
                if (!Qt[d])
                    for (var x = 0; x <= d; x++)
                        Qt[x] || (Qt[x] = {});
                Qt[d].vx == T && Qt[d].vy == p && Qt[d].el === f || (Qt[d].el = f,
                Qt[d].vx = T,
                Qt[d].vy = p,
                clearInterval(Qt[d].pid),
                0 == T && 0 == p || (u = !0,
                Qt[d].pid = setInterval(function() {
                    o && 0 === this.layer && jt.active._onTouchMove(Zt);
                    var t = Qt[this.layer].vy ? Qt[this.layer].vy * s : 0
                      , e = Qt[this.layer].vx ? Qt[this.layer].vx * s : 0;
                    "function" == typeof i && "continue" !== i.call(jt.dragged.parentNode[K], e, t, n, Zt, Qt[this.layer].el) || H(Qt[this.layer].el, e, t)
                }
                .bind({
                    layer: d
                }), 24))),
                d++
            } while (t.bubbleScroll && h !== c && (h = M(h, !1)));
            Jt = u
        }
    }, 30), c = function(t) {
        var e = t.originalEvent
          , n = t.putSortable
          , o = t.dragEl
          , i = t.activeSortable
          , r = t.dispatchSortableEvent
          , a = t.hideGhostForTarget
          , t = t.unhideGhostForTarget;
        e && (i = n || i,
        a(),
        e = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e,
        e = document.elementFromPoint(e.clientX, e.clientY),
        t(),
        i && !i.el.contains(e) && (r("spill"),
        this.onSpill({
            dragEl: o,
            putSortable: n
        })))
    };
    function ie() {}
    function re() {}
    ie.prototype = {
        startIndex: null,
        dragStart: function(t) {
            t = t.oldDraggableIndex;
            this.startIndex = t
        },
        onSpill: function(t) {
            var e = t.dragEl
              , n = t.putSortable;
            this.sortable.captureAnimationState(),
            n && n.captureAnimationState();
            t = B(this.sortable.el, this.startIndex, this.options);
            t ? this.sortable.el.insertBefore(e, t) : this.sortable.el.appendChild(e),
            this.sortable.animateAll(),
            n && n.animateAll()
        },
        drop: c
    },
    a(ie, {
        pluginName: "revertOnSpill"
    }),
    re.prototype = {
        onSpill: function(t) {
            var e = t.dragEl
              , t = t.putSortable || this.sortable;
            t.captureAnimationState(),
            e.parentNode && e.parentNode.removeChild(e),
            t.animateAll()
        },
        drop: c
    },
    a(re, {
        pluginName: "removeOnSpill"
    });
    var ae, le, se, ce, ue, de = [], he = [], fe = !1, pe = !1, ge = !1;
    function me(n, o) {
        he.forEach(function(t, e) {
            e = o.children[t.sortableIndex + (n ? Number(e) : 0)];
            e ? o.insertBefore(t, e) : o.appendChild(t)
        })
    }
    function ve() {
        de.forEach(function(t) {
            t !== se && t.parentNode && t.parentNode.removeChild(t)
        })
    }
    return jt.mount(new function() {
        function t() {
            for (var t in this.defaults = {
                scroll: !0,
                forceAutoScrollFallback: !1,
                scrollSensitivity: 30,
                scrollSpeed: 10,
                bubbleScroll: !0
            },
            this)
                "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this))
        }
        return t.prototype = {
            dragStarted: function(t) {
                t = t.originalEvent;
                this.sortable.nativeDraggable ? h(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? h(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? h(document, "touchmove", this._handleFallbackAutoScroll) : h(document, "mousemove", this._handleFallbackAutoScroll)
            },
            dragOverCompleted: function(t) {
                t = t.originalEvent;
                this.options.dragOverBubble || t.rootEl || this._handleAutoScroll(t)
            },
            drop: function() {
                this.sortable.nativeDraggable ? f(document, "dragover", this._handleAutoScroll) : (f(document, "pointermove", this._handleFallbackAutoScroll),
                f(document, "touchmove", this._handleFallbackAutoScroll),
                f(document, "mousemove", this._handleFallbackAutoScroll)),
                ee(),
                te(),
                clearTimeout(m),
                m = void 0
            },
            nulling: function() {
                Zt = Ut = Gt = Jt = $t = qt = Vt = null,
                Qt.length = 0
            },
            _handleFallbackAutoScroll: function(t) {
                this._handleAutoScroll(t, !0)
            },
            _handleAutoScroll: function(e, n) {
                var o, i = this, r = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, t = document.elementFromPoint(r, a);
                Zt = e,
                n || this.options.forceAutoScrollFallback || w || y || u ? (oe(e, this.options, t, n),
                o = M(t, !0),
                !Jt || $t && r === qt && a === Vt || ($t && ee(),
                $t = setInterval(function() {
                    var t = M(document.elementFromPoint(r, a), !0);
                    t !== o && (o = t,
                    te()),
                    oe(e, i.options, t, n)
                }, 10),
                qt = r,
                Vt = a)) : this.options.bubbleScroll && M(t, !0) !== O() ? oe(e, this.options, M(t, !1), !1) : te()
            }
        },
        a(t, {
            pluginName: "scroll",
            initializeByDefault: !0
        })
    }
    ),
    jt.mount(re, ie),
    jt.mount(new function() {
        function t() {
            this.defaults = {
                swapClass: "sortable-swap-highlight"
            }
        }
        return t.prototype = {
            dragStart: function(t) {
                t = t.dragEl;
                ne = t
            },
            dragOverValid: function(t) {
                var e = t.completed
                  , n = t.target
                  , o = t.onMove
                  , i = t.activeSortable
                  , r = t.changed
                  , a = t.cancel;
                i.options.swap && (t = this.sortable.el,
                i = this.options,
                n && n !== t && (t = ne,
                ne = !1 !== o(n) ? (k(n, i.swapClass, !0),
                n) : null,
                t && t !== ne && k(t, i.swapClass, !1)),
                r(),
                e(!0),
                a())
            },
            drop: function(t) {
                var e, n, o = t.activeSortable, i = t.putSortable, r = t.dragEl, a = i || this.sortable, l = this.options;
                ne && k(ne, l.swapClass, !1),
                ne && (l.swap || i && i.options.swap) && r !== ne && (a.captureAnimationState(),
                a !== o && o.captureAnimationState(),
                n = ne,
                t = (e = r).parentNode,
                l = n.parentNode,
                t && l && !t.isEqualNode(n) && !l.isEqualNode(e) && (i = j(e),
                r = j(n),
                t.isEqualNode(l) && i < r && r++,
                t.insertBefore(n, t.children[i]),
                l.insertBefore(e, l.children[r])),
                a.animateAll(),
                a !== o && o.animateAll())
            },
            nulling: function() {
                ne = null
            }
        },
        a(t, {
            pluginName: "swap",
            eventProperties: function() {
                return {
                    swapItem: ne
                }
            }
        })
    }
    ),
    jt.mount(new function() {
        function t(o) {
            for (var t in this)
                "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this));
            o.options.avoidImplicitDeselect || (o.options.supportPointer ? h(document, "pointerup", this._deselectMultiDrag) : (h(document, "mouseup", this._deselectMultiDrag),
            h(document, "touchend", this._deselectMultiDrag))),
            h(document, "keydown", this._checkKeyDown),
            h(document, "keyup", this._checkKeyUp),
            this.defaults = {
                selectedClass: "sortable-selected",
                multiDragKey: null,
                avoidImplicitDeselect: !1,
                setData: function(t, e) {
                    var n = "";
                    de.length && le === o ? de.forEach(function(t, e) {
                        n += (e ? ", " : "") + t.textContent
                    }) : n = e.textContent,
                    t.setData("Text", n)
                }
            }
        }
        return t.prototype = {
            multiDragKeyDown: !1,
            isMultiDrag: !1,
            delayStartGlobal: function(t) {
                t = t.dragEl;
                se = t
            },
            delayEnded: function() {
                this.isMultiDrag = ~de.indexOf(se)
            },
            setupClone: function(t) {
                var e = t.sortable
                  , t = t.cancel;
                if (this.isMultiDrag) {
                    for (var n = 0; n < de.length; n++)
                        he.push(C(de[n])),
                        he[n].sortableIndex = de[n].sortableIndex,
                        he[n].draggable = !1,
                        he[n].style["will-change"] = "",
                        k(he[n], this.options.selectedClass, !1),
                        de[n] === se && k(he[n], this.options.chosenClass, !1);
                    e._hideClone(),
                    t()
                }
            },
            clone: function(t) {
                var e = t.sortable
                  , n = t.rootEl
                  , o = t.dispatchSortableEvent
                  , t = t.cancel;
                this.isMultiDrag && (this.options.removeCloneOnHide || de.length && le === e && (me(!0, n),
                o("clone"),
                t()))
            },
            showClone: function(t) {
                var e = t.cloneNowShown
                  , n = t.rootEl
                  , t = t.cancel;
                this.isMultiDrag && (me(!1, n),
                he.forEach(function(t) {
                    R(t, "display", "")
                }),
                e(),
                ue = !1,
                t())
            },
            hideClone: function(t) {
                var e = this
                  , n = (t.sortable,
                t.cloneNowHidden)
                  , t = t.cancel;
                this.isMultiDrag && (he.forEach(function(t) {
                    R(t, "display", "none"),
                    e.options.removeCloneOnHide && t.parentNode && t.parentNode.removeChild(t)
                }),
                n(),
                ue = !0,
                t())
            },
            dragStartGlobal: function(t) {
                t.sortable;
                !this.isMultiDrag && le && le.multiDrag._deselectMultiDrag(),
                de.forEach(function(t) {
                    t.sortableIndex = j(t)
                }),
                de = de.sort(function(t, e) {
                    return t.sortableIndex - e.sortableIndex
                }),
                ge = !0
            },
            dragStarted: function(t) {
                var e, n = this, t = t.sortable;
                this.isMultiDrag && (this.options.sort && (t.captureAnimationState(),
                this.options.animation && (de.forEach(function(t) {
                    t !== se && R(t, "position", "absolute")
                }),
                e = X(se, !1, !0, !0),
                de.forEach(function(t) {
                    t !== se && T(t, e)
                }),
                fe = pe = !0)),
                t.animateAll(function() {
                    fe = pe = !1,
                    n.options.animation && de.forEach(function(t) {
                        x(t)
                    }),
                    n.options.sort && ve()
                }))
            },
            dragOver: function(t) {
                var e = t.target
                  , n = t.completed
                  , t = t.cancel;
                pe && ~de.indexOf(e) && (n(!1),
                t())
            },
            revert: function(t) {
                var n, o, e = t.fromSortable, i = t.rootEl, r = t.sortable, a = t.dragRect;
                1 < de.length && (de.forEach(function(t) {
                    r.addAnimationState({
                        target: t,
                        rect: pe ? X(t) : a
                    }),
                    x(t),
                    t.fromRect = a,
                    e.removeAnimationState(t)
                }),
                pe = !1,
                n = !this.options.removeCloneOnHide,
                o = i,
                de.forEach(function(t, e) {
                    e = o.children[t.sortableIndex + (n ? Number(e) : 0)];
                    e ? o.insertBefore(t, e) : o.appendChild(t)
                }))
            },
            dragOverCompleted: function(t) {
                var e, n = t.sortable, o = t.isOwner, i = t.insertion, r = t.activeSortable, a = t.parentEl, l = t.putSortable, t = this.options;
                i && (o && r._hideClone(),
                fe = !1,
                t.animation && 1 < de.length && (pe || !o && !r.options.sort && !l) && (e = X(se, !1, !0, !0),
                de.forEach(function(t) {
                    t !== se && (T(t, e),
                    a.appendChild(t))
                }),
                pe = !0),
                o || (pe || ve(),
                1 < de.length ? (o = ue,
                r._showClone(n),
                r.options.animation && !ue && o && he.forEach(function(t) {
                    r.addAnimationState({
                        target: t,
                        rect: ce
                    }),
                    t.fromRect = ce,
                    t.thisAnimationDuration = null
                })) : r._showClone(n)))
            },
            dragOverAnimationCapture: function(t) {
                var e = t.dragRect
                  , n = t.isOwner
                  , t = t.activeSortable;
                de.forEach(function(t) {
                    t.thisAnimationDuration = null
                }),
                t.options.animation && !n && t.multiDrag.isMultiDrag && (ce = a({}, e),
                e = b(se, !0),
                ce.top -= e.f,
                ce.left -= e.e)
            },
            dragOverAnimationComplete: function() {
                pe && (pe = !1,
                ve())
            },
            drop: function(t) {
                var e = t.originalEvent
                  , n = t.rootEl
                  , o = t.parentEl
                  , i = t.sortable
                  , r = t.dispatchSortableEvent
                  , a = t.oldIndex
                  , l = t.putSortable
                  , s = l || this.sortable;
                if (e) {
                    var c, u, d, h = this.options, f = o.children;
                    if (!ge)
                        if (h.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(),
                        k(se, h.selectedClass, !~de.indexOf(se)),
                        ~de.indexOf(se))
                            de.splice(de.indexOf(se), 1),
                            ae = null,
                            G({
                                sortable: i,
                                rootEl: n,
                                name: "deselect",
                                targetEl: se,
                                originalEvent: e
                            });
                        else {
                            if (de.push(se),
                            G({
                                sortable: i,
                                rootEl: n,
                                name: "select",
                                targetEl: se,
                                originalEvent: e
                            }),
                            e.shiftKey && ae && i.el.contains(ae)) {
                                var p = j(ae)
                                  , t = j(se);
                                if (~p && ~t && p !== t)
                                    for (var g, m = p < t ? (g = p,
                                    t) : (g = t,
                                    p + 1); g < m; g++)
                                        ~de.indexOf(f[g]) || (k(f[g], h.selectedClass, !0),
                                        de.push(f[g]),
                                        G({
                                            sortable: i,
                                            rootEl: n,
                                            name: "select",
                                            targetEl: f[g],
                                            originalEvent: e
                                        }))
                            } else
                                ae = se;
                            le = s
                        }
                    ge && this.isMultiDrag && (pe = !1,
                    (o[K].options.sort || o !== n) && 1 < de.length && (c = X(se),
                    u = j(se, ":not(." + this.options.selectedClass + ")"),
                    !fe && h.animation && (se.thisAnimationDuration = null),
                    s.captureAnimationState(),
                    fe || (h.animation && (se.fromRect = c,
                    de.forEach(function(t) {
                        var e;
                        t.thisAnimationDuration = null,
                        t !== se && (e = pe ? X(t) : c,
                        t.fromRect = e,
                        s.addAnimationState({
                            target: t,
                            rect: e
                        }))
                    })),
                    ve(),
                    de.forEach(function(t) {
                        f[u] ? o.insertBefore(t, f[u]) : o.appendChild(t),
                        u++
                    }),
                    a === j(se) && (d = !1,
                    de.forEach(function(t) {
                        t.sortableIndex !== j(t) && (d = !0)
                    }),
                    d && (r("update"),
                    r("sort")))),
                    de.forEach(function(t) {
                        x(t)
                    }),
                    s.animateAll()),
                    le = s),
                    (n === o || l && "clone" !== l.lastPutMode) && he.forEach(function(t) {
                        t.parentNode && t.parentNode.removeChild(t)
                    })
                }
            },
            nullingGlobal: function() {
                this.isMultiDrag = ge = !1,
                he.length = 0
            },
            destroyGlobal: function() {
                this._deselectMultiDrag(),
                f(document, "pointerup", this._deselectMultiDrag),
                f(document, "mouseup", this._deselectMultiDrag),
                f(document, "touchend", this._deselectMultiDrag),
                f(document, "keydown", this._checkKeyDown),
                f(document, "keyup", this._checkKeyUp)
            },
            _deselectMultiDrag: function(t) {
                if (!(void 0 !== ge && ge || le !== this.sortable || t && P(t.target, this.options.draggable, this.sortable.el, !1) || t && 0 !== t.button))
                    for (; de.length; ) {
                        var e = de[0];
                        k(e, this.options.selectedClass, !1),
                        de.shift(),
                        G({
                            sortable: this.sortable,
                            rootEl: this.sortable.el,
                            name: "deselect",
                            targetEl: e,
                            originalEvent: t
                        })
                    }
            },
            _checkKeyDown: function(t) {
                t.key === this.options.multiDragKey && (this.multiDragKeyDown = !0)
            },
            _checkKeyUp: function(t) {
                t.key === this.options.multiDragKey && (this.multiDragKeyDown = !1)
            }
        },
        a(t, {
            pluginName: "multiDrag",
            utils: {
                select: function(t) {
                    var e = t.parentNode[K];
                    e && e.options.multiDrag && !~de.indexOf(t) && (le && le !== e && (le.multiDrag._deselectMultiDrag(),
                    le = e),
                    k(t, e.options.selectedClass, !0),
                    de.push(t))
                },
                deselect: function(t) {
                    var e = t.parentNode[K]
                      , n = de.indexOf(t);
                    e && e.options.multiDrag && ~n && (k(t, e.options.selectedClass, !1),
                    de.splice(n, 1))
                }
            },
            eventProperties: function() {
                var n = this
                  , o = []
                  , i = [];
                return de.forEach(function(t) {
                    var e;
                    o.push({
                        multiDragElement: t,
                        index: t.sortableIndex
                    }),
                    e = pe && t !== se ? -1 : pe ? j(t, ":not(." + n.options.selectedClass + ")") : j(t),
                    i.push({
                        multiDragElement: t,
                        index: e
                    })
                }),
                {
                    items: r(de),
                    clones: [].concat(he),
                    oldIndicies: o,
                    newIndicies: i
                }
            },
            optionListeners: {
                multiDragKey: function(t) {
                    return "ctrl" === (t = t.toLowerCase()) ? t = "Control" : 1 < t.length && (t = t.charAt(0).toUpperCase() + t.substr(1)),
                    t
                }
            }
        })
    }
    ),
    jt
});
