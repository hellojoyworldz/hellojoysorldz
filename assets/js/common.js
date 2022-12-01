/*!
 * GSAP 3.5.1
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  "use strict";
  function _inheritsLoose(t, e) {
    (t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e);
  }
  function _assertThisInitialized(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function n(t) {
    return "string" == typeof t;
  }
  function o(t) {
    return "function" == typeof t;
  }
  function p(t) {
    return "number" == typeof t;
  }
  function q(t) {
    return void 0 === t;
  }
  function r(t) {
    return "object" == typeof t;
  }
  function s(t) {
    return !1 !== t;
  }
  function t() {
    return "undefined" != typeof window;
  }
  function u(t) {
    return o(t) || n(t);
  }
  function K(t) {
    return (l = mt(t, ot)) && ae;
  }
  function L(t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  }
  function M(t, e) {
    return !e && console.warn(t);
  }
  function N(t, e) {
    return (t && (ot[t] = e) && l && (l[t] = e)) || ot;
  }
  function O() {
    return 0;
  }
  function Y(t) {
    var e,
      i,
      n = t[0];
    if ((r(n) || o(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
      for (i = _t.length; i-- && !_t[i].targetTest(n); );
      e = _t[i];
    }
    for (i = t.length; i--; )
      (t[i] && (t[i]._gsap || (t[i]._gsap = new It(t[i], e)))) ||
        t.splice(i, 1);
    return t;
  }
  function Z(t) {
    return t._gsap || Y(bt(t))[0]._gsap;
  }
  function $(t, e, r) {
    return (r = t[e]) && o(r)
      ? t[e]()
      : (q(r) && t.getAttribute && t.getAttribute(e)) || r;
  }
  function _(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function aa(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function ba(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
    return i < r;
  }
  function ca(t, e, r) {
    var i,
      n = p(t[1]),
      a = (n ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[a];
    if ((n && (o.duration = t[1]), (o.parent = r), e)) {
      for (i = o; r && !("immediateRender" in i); )
        (i = r.vars.defaults || {}), (r = s(r.vars.inherit) && r.parent);
      (o.immediateRender = s(i.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[a - 1]);
    }
    return o;
  }
  function da() {
    var t,
      e,
      r = ht.length,
      i = ht.slice(0);
    for (lt = {}, t = ht.length = 0; t < r; t++)
      (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function ea(t, e, r, i) {
    ht.length && da(), t.render(e, r, i), ht.length && da();
  }
  function fa(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(st).length < 2
      ? e
      : n(t)
      ? t.trim()
      : t;
  }
  function ga(t) {
    return t;
  }
  function ha(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function ia(t, e) {
    for (var r in e)
      r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
  }
  function ka(t, e) {
    for (var i in e) t[i] = r(e[i]) ? ka(t[i] || (t[i] = {}), e[i]) : e[i];
    return t;
  }
  function la(t, e) {
    var r,
      i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  }
  function ma(t) {
    var e = t.parent || E,
      r = t.keyframes ? ia : ha;
    if (s(t.inherit))
      for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  }
  function pa(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
      a = e._next;
    n ? (n._next = a) : t[r] === e && (t[r] = a),
      a ? (a._prev = n) : t[i] === e && (t[i] = n),
      (e._next = e._prev = e.parent = null);
  }
  function qa(t, e) {
    !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t),
      (t._act = 0);
  }
  function ra(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
    return t;
  }
  function ua(t) {
    return t._repeat ? gt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function wa(t, e) {
    return (
      (t - e._start) * e._ts +
      (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  }
  function xa(t) {
    return (t._end = aa(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || U) || 0)
    ));
  }
  function ya(t, e) {
    var r = t._dp;
    return (
      r &&
        r.smoothChildTiming &&
        t._ts &&
        ((t._start = aa(
          t._dp._time -
            (0 < t._ts
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        xa(t),
        r._dirty || ra(r, t)),
      t
    );
  }
  function za(t, e) {
    var r;
    if (
      ((e._time || (e._initted && !e._dur)) &&
        ((r = wa(t.rawTime(), e)),
        (!e._dur || yt(0, e.totalDuration(), r) - e._tTime > U) &&
          e.render(r, !0)),
      ra(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (r = t; r._dp; )
          0 <= r.rawTime() && r.totalTime(r._tTime), (r = r._dp);
      t._zTime = -U;
    }
  }
  function Aa(t, e, r, i) {
    return (
      e.parent && qa(e),
      (e._start = aa(r + e._delay)),
      (e._end = aa(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      (function _addLinkedListItem(t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var a,
          s = t[i];
        if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
        s
          ? ((e._next = s._next), (s._next = e))
          : ((e._next = t[r]), (t[r] = e)),
          e._next ? (e._next._prev = e) : (t[i] = e),
          (e._prev = s),
          (e.parent = e._dp = t);
      })(t, e, "_first", "_last", t._sort ? "_start" : 0),
      (t._recent = e),
      i || za(t, e),
      t
    );
  }
  function Ba(t, e) {
    return (
      (ot.ScrollTrigger || L("scrollTrigger", e)) &&
      ot.ScrollTrigger.create(e, t)
    );
  }
  function Ca(t, e, r, i) {
    return (
      Nt(t, e),
      t._initted
        ? !r &&
          t._pt &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          d !== At.frame
          ? (ht.push(t), (t._lazy = [e, i]), 1)
          : void 0
        : 1
    );
  }
  function Fa(t, e, r, i) {
    var n = t._repeat,
      a = aa(e) || 0,
      s = t._tTime / t._tDur;
    return (
      s && !i && (t._time *= a / t._dur),
      (t._dur = a),
      (t._tDur = n ? (n < 0 ? 1e10 : aa(a * (n + 1) + t._rDelay * n)) : a),
      s && !i ? ya(t, (t._tTime = t._tDur * s)) : t.parent && xa(t),
      r || ra(t.parent, t),
      t
    );
  }
  function Ga(t) {
    return t instanceof Bt ? ra(t) : Fa(t, t._dur);
  }
  function Ia(t, e) {
    var r,
      i,
      a = t.labels,
      s = t._recent || vt,
      o = t.duration() >= B ? s.endTime(!1) : t._dur;
    return n(e) && (isNaN(e) || e in a)
      ? "<" === (r = e.charAt(0)) || ">" === r
        ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) +
          (parseFloat(e.substr(1)) || 0)
        : (r = e.indexOf("=")) < 0
        ? (e in a || (a[e] = o), a[e])
        : ((i = +(e.charAt(r - 1) + e.substr(r + 1))),
          1 < r ? Ia(t, e.substr(0, r - 1)) + i : o + i)
      : null == e
      ? o
      : +e;
  }
  function Ja(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function La(t) {
    return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t)
      ? t
      : "";
  }
  function Oa(t, e) {
    return (
      t &&
      r(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && r(t[0]))) &&
      !t.nodeType &&
      t !== i
    );
  }
  function Ra(t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  }
  function Sa(t) {
    if (o(t)) return t;
    var _ = r(t) ? t : { each: t },
      c = Rt(_.ease),
      m = _.from || 0,
      g = parseFloat(_.base) || 0,
      v = {},
      e = 0 < m && m < 1,
      y = isNaN(m) || e,
      T = _.axis,
      b = m,
      w = m;
    return (
      n(m)
        ? (b = w = { center: 0.5, edges: 0.5, end: 1 }[m] || 0)
        : !e && y && ((b = m[0]), (w = m[1])),
      function (t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = (r || _).length,
          p = v[d];
        if (!p) {
          if (!(f = "auto" === _.grid ? 0 : (_.grid || [1, B])[1])) {
            for (
              h = -B;
              h < (h = r[f++].getBoundingClientRect().left) && f < d;

            );
            f--;
          }
          for (
            p = v[d] = [],
              i = y ? Math.min(f, d) * b - 0.5 : m % f,
              n = y ? (d * w) / f - 0.5 : (m / f) | 0,
              l = B,
              u = h = 0;
            u < d;
            u++
          )
            (a = (u % f) - i),
              (s = n - ((u / f) | 0)),
              (p[u] = o = T ? Math.abs("y" === T ? s : a) : J(a * a + s * s)),
              h < o && (h = o),
              o < l && (l = o);
          "random" === m && Ra(p),
            (p.max = h - l),
            (p.min = l),
            (p.v = d =
              (parseFloat(_.amount) ||
                parseFloat(_.each) *
                  (d < f
                    ? d - 1
                    : T
                    ? "y" === T
                      ? d / f
                      : f
                    : Math.max(f, d / f)) ||
                0) * ("edges" === m ? -1 : 1)),
            (p.b = d < 0 ? g - d : g),
            (p.u = La(_.amount || _.each) || 0),
            (c = c && d < 0 ? Ft(c) : c);
        }
        return (
          (d = (p[t] - p.min) / p.max || 0),
          aa(p.b + (c ? c(d) : d) * p.v) + p.u
        );
      }
    );
  }
  function Ta(e) {
    var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
    return function (t) {
      return (
        Math.floor(Math.round(parseFloat(t) / e) * e * r) / r +
        (p(t) ? 0 : La(t))
      );
    };
  }
  function Ua(u, t) {
    var h,
      l,
      e = tt(u);
    return (
      !e &&
        r(u) &&
        ((h = e = u.radius || B),
        u.values
          ? ((u = bt(u.values)), (l = !p(u[0])) && (h *= h))
          : (u = Ta(u.increment))),
      Ja(
        t,
        e
          ? o(u)
            ? function (t) {
                return (l = u(t)), Math.abs(l - t) <= h ? l : t;
              }
            : function (t) {
                for (
                  var e,
                    r,
                    i = parseFloat(l ? t.x : t),
                    n = parseFloat(l ? t.y : 0),
                    a = B,
                    s = 0,
                    o = u.length;
                  o--;

                )
                  (e = l
                    ? (e = u[o].x - i) * e + (r = u[o].y - n) * r
                    : Math.abs(u[o] - i)) < a && ((a = e), (s = o));
                return (
                  (s = !h || a <= h ? u[s] : t),
                  l || s === t || p(t) ? s : s + La(t)
                );
              }
          : Ta(u)
      )
    );
  }
  function Va(t, e, r, i) {
    return Ja(tt(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return tt(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) /
              i;
    });
  }
  function Za(e, r, t) {
    return Ja(t, function (t) {
      return e[~~r(t)];
    });
  }
  function ab(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
      (i = t.indexOf(")", e)),
        (n = "[" === t.charAt(e + 7)),
        (r = t.substr(e + 7, i - e - 7).match(n ? st : et)),
        (s +=
          t.substr(a, e - a) + Va(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
        (a = i + 1);
    return s + t.substr(a, t.length - a);
  }
  function db(t, e, r) {
    var i,
      n,
      a,
      s = t.labels,
      o = B;
    for (i in s)
      (n = s[i] - e) < 0 == !!r &&
        n &&
        o > (n = Math.abs(n)) &&
        ((a = i), (o = n));
    return a;
  }
  function fb(t) {
    return qa(t), t.progress() < 1 && xt(t, "onInterrupt"), t;
  }
  function kb(t, e, r) {
    return (
      ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
        ? e + (r - e) * t * 6
        : t < 0.5
        ? r
        : 3 * t < 2
        ? e + (r - e) * (2 / 3 - t) * 6
        : e) *
        kt +
        0.5) |
      0
    );
  }
  function lb(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      d,
      _ = t ? (p(t) ? [t >> 16, (t >> 8) & kt, t & kt] : 0) : Ot.black;
    if (!_) {
      if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ot[t]))
        _ = Ot[t];
      else if ("#" === t.charAt(0))
        4 === t.length &&
          (t =
            "#" +
            (i = t.charAt(1)) +
            i +
            (n = t.charAt(2)) +
            n +
            (a = t.charAt(3)) +
            a),
          (_ = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & kt, t & kt]);
      else if ("hsl" === t.substr(0, 3))
        if (((_ = d = t.match(et)), e)) {
          if (~t.indexOf("="))
            return (_ = t.match(rt)), r && _.length < 4 && (_[3] = 1), _;
        } else
          (s = (+_[0] % 360) / 360),
            (o = _[1] / 100),
            (i =
              2 * (u = _[2] / 100) -
              (n = u <= 0.5 ? u * (o + 1) : u + o - u * o)),
            3 < _.length && (_[3] *= 1),
            (_[0] = kb(s + 1 / 3, i, n)),
            (_[1] = kb(s, i, n)),
            (_[2] = kb(s - 1 / 3, i, n));
      else _ = t.match(et) || Ot.transparent;
      _ = _.map(Number);
    }
    return (
      e &&
        !d &&
        ((i = _[0] / kt),
        (n = _[1] / kt),
        (a = _[2] / kt),
        (u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2),
        h === l
          ? (s = o = 0)
          : ((f = h - l),
            (o = 0.5 < u ? f / (2 - h - l) : f / (h + l)),
            (s =
              h === i
                ? (n - a) / f + (n < a ? 6 : 0)
                : h === n
                ? (a - i) / f + 2
                : (i - n) / f + 4),
            (s *= 60)),
        (_[0] = ~~(s + 0.5)),
        (_[1] = ~~(100 * o + 0.5)),
        (_[2] = ~~(100 * u + 0.5))),
      r && _.length < 4 && (_[3] = 1),
      _
    );
  }
  function mb(t) {
    var r = [],
      i = [],
      n = -1;
    return (
      t.split(Mt).forEach(function (t) {
        var e = t.match(it) || [];
        r.push.apply(r, e), i.push((n += e.length + 1));
      }),
      (r.c = i),
      r
    );
  }
  function nb(t, e, r) {
    var i,
      n,
      a,
      s,
      o = "",
      u = (t + o).match(Mt),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (
      ((u = u.map(function (t) {
        return (
          (t = lb(t, e, 1)) &&
          h +
            (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) +
            ")"
        );
      })),
      r && ((a = mb(t)), (i = r.c).join(o) !== a.c.join(o)))
    )
      for (s = (n = t.replace(Mt, "1").split(it)).length - 1; l < s; l++)
        o +=
          n[l] +
          (~i.indexOf(l)
            ? u.shift() || h + "0,0,0,0)"
            : (a.length ? a : u.length ? u : r).shift());
    if (!n) for (s = (n = t.split(Mt)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s];
  }
  function qb(t) {
    var e,
      r = t.join(" ");
    if (((Mt.lastIndex = 0), Mt.test(r)))
      return (
        (e = Ct.test(r)),
        (t[1] = nb(t[1], e)),
        (t[0] = nb(t[0], e, mb(t[1]))),
        !0
      );
  }
  function zb(t) {
    var e = (t + "").split("("),
      r = Dt[e[0]];
    return r && 1 < e.length && r.config
      ? r.config.apply(
          null,
          ~t.indexOf("{")
            ? [
                (function _parseObjectInString(t) {
                  for (
                    var e,
                      r,
                      i,
                      n = {},
                      a = t.substr(1, t.length - 3).split(":"),
                      s = a[0],
                      o = 1,
                      u = a.length;
                    o < u;
                    o++
                  )
                    (r = a[o]),
                      (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
                      (i = r.substr(0, e)),
                      (n[s] = isNaN(i) ? i.replace(zt, "").trim() : +i),
                      (s = r.substr(e + 1).trim());
                  return n;
                })(e[1]),
              ]
            : (function _valueInParentheses(t) {
                var e = t.indexOf("(") + 1,
                  r = t.indexOf(")"),
                  i = t.indexOf("(", e);
                return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
              })(t)
                .split(",")
                .map(fa)
        )
      : Dt._CE && St.test(t)
      ? Dt._CE("", t)
      : r;
  }
  function Bb(t, e) {
    for (var r, i = t._first; i; )
      i instanceof Bt
        ? Bb(i, e)
        : !i.vars.yoyoEase ||
          (i._yoyo && i._repeat) ||
          i._yoyo === e ||
          (i.timeline
            ? Bb(i.timeline, e)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = e))),
        (i = i._next);
  }
  function Db(t, e, r, i) {
    void 0 === r &&
      (r = function easeOut(t) {
        return 1 - e(1 - t);
      }),
      void 0 === i &&
        (i = function easeInOut(t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var n,
      a = { easeIn: e, easeOut: r, easeInOut: i };
    return (
      _(t, function (t) {
        for (var e in ((Dt[t] = ot[t] = a), (Dt[(n = t.toLowerCase())] = r), a))
          Dt[
            n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
          ] = Dt[t + "." + e] = a[e];
      }),
      a
    );
  }
  function Eb(e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
    };
  }
  function Fb(r, t, e) {
    function ul(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * W((t - a) * n) + 1;
    }
    var i = 1 <= t ? t : 1,
      n = (e || (r ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (n / V) * (Math.asin(1 / i) || 0),
      s =
        "out" === r
          ? ul
          : "in" === r
          ? function (t) {
              return 1 - ul(1 - t);
            }
          : Eb(ul);
    return (
      (n = V / n),
      (s.config = function (t, e) {
        return Fb(r, t, e);
      }),
      s
    );
  }
  function Gb(e, r) {
    function Cl(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }
    void 0 === r && (r = 1.70158);
    var t =
      "out" === e
        ? Cl
        : "in" === e
        ? function (t) {
            return 1 - Cl(1 - t);
          }
        : Eb(Cl);
    return (
      (t.config = function (t) {
        return Gb(e, t);
      }),
      t
    );
  }
  var E,
    i,
    a,
    h,
    l,
    f,
    d,
    c,
    m,
    g,
    v,
    y,
    T,
    b,
    w,
    x,
    k,
    C,
    A,
    P,
    D,
    S,
    z,
    F,
    R,
    j = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    I = { duration: 0.5, overwrite: !1, delay: 0 },
    B = 1e8,
    U = 1 / B,
    V = 2 * Math.PI,
    X = V / 4,
    G = 0,
    J = Math.sqrt,
    Q = Math.cos,
    W = Math.sin,
    H =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    tt = Array.isArray,
    et = /(?:-?\.?\d|\.)+/gi,
    rt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
    it = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    nt = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
    at = /[+-]=-?[\.\d]+/,
    st = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
    ot = {},
    ut = {},
    ht = [],
    lt = {},
    ft = {},
    dt = {},
    pt = 30,
    _t = [],
    ct = "",
    mt = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    gt = function _animationCycle(t, e) {
      return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
    },
    vt = { _start: 0, endTime: O },
    yt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    Tt = [].slice,
    bt = function toArray(t, e) {
      return !n(t) || e || (!a && Pt())
        ? tt(t)
          ? (function _flatten(t, e, r) {
              return (
                void 0 === r && (r = []),
                t.forEach(function (t) {
                  return (n(t) && !e) || Oa(t, 1)
                    ? r.push.apply(r, bt(t))
                    : r.push(t);
                }) || r
              );
            })(t, e)
          : Oa(t)
          ? Tt.call(t, 0)
          : t
          ? [t]
          : []
        : Tt.call(h.querySelectorAll(t), 0);
    },
    wt = function mapRange(e, t, r, i, n) {
      var a = t - e,
        s = i - r;
      return Ja(n, function (t) {
        return r + (((t - e) / a) * s || 0);
      });
    },
    xt = function _callback(t, e, r) {
      var i,
        n,
        a = t.vars,
        s = a[e];
      if (s)
        return (
          (i = a[e + "Params"]),
          (n = a.callbackScope || t),
          r && ht.length && da(),
          i ? s.apply(n, i) : s.call(n)
        );
    },
    kt = 255,
    Ot = {
      aqua: [0, kt, kt],
      lime: [0, kt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, kt],
      navy: [0, 0, 128],
      white: [kt, kt, kt],
      olive: [128, 128, 0],
      yellow: [kt, kt, 0],
      orange: [kt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [kt, 0, 0],
      pink: [kt, 192, 203],
      cyan: [0, kt, kt],
      transparent: [kt, kt, kt, 0],
    },
    Mt = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
      for (t in Ot) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Ct = /hsl[a]?\(/,
    At =
      ((x = Date.now),
      (k = 500),
      (C = 33),
      (A = x()),
      (P = A),
      (S = D = 1e3 / 240),
      (T = {
        time: 0,
        frame: 0,
        tick: function tick() {
          qk(!0);
        },
        deltaRatio: function deltaRatio(t) {
          return b / (1e3 / (t || 60));
        },
        wake: function wake() {
          f &&
            (!a &&
              t() &&
              ((i = a = window),
              (h = i.document || {}),
              (ot.gsap = ae),
              (i.gsapVersions || (i.gsapVersions = [])).push(ae.version),
              K(l || i.GreenSockGlobals || (!i.gsap && i) || {}),
              (y = i.requestAnimationFrame)),
            g && T.sleep(),
            (v =
              y ||
              function (t) {
                return setTimeout(t, (S - 1e3 * T.time + 1) | 0);
              }),
            (m = 1),
            qk(2));
        },
        sleep: function sleep() {
          (y ? i.cancelAnimationFrame : clearTimeout)(g), (m = 0), (v = O);
        },
        lagSmoothing: function lagSmoothing(t, e) {
          (k = t || 1e8), (C = Math.min(e, k, 0));
        },
        fps: function fps(t) {
          (D = 1e3 / (t || 240)), (S = 1e3 * T.time + D);
        },
        add: function add(t) {
          z.indexOf(t) < 0 && z.push(t), Pt();
        },
        remove: function remove(t) {
          var e;
          ~(e = z.indexOf(t)) && z.splice(e, 1) && e <= w && w--;
        },
        _listeners: (z = []),
      })),
    Pt = function _wake() {
      return !m && At.wake();
    },
    Dt = {},
    St = /^[\d.\-M][\d.\-,\s]/,
    zt = /["']/g,
    Ft = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Rt = function _parseEase(t, e) {
      return (t && (o(t) ? t : Dt[t] || zb(t))) || e;
    };
  function qk(t) {
    var e,
      r,
      i,
      n,
      a = x() - P,
      s = !0 === t;
    if (
      (k < a && (A += a - C),
      (0 < (e = (i = (P += a) - A) - S) || s) &&
        ((n = ++T.frame),
        (b = i - 1e3 * T.time),
        (T.time = i /= 1e3),
        (S += e + (D <= e ? 4 : D - e)),
        (r = 1)),
      s || (g = v(qk)),
      r)
    )
      for (w = 0; w < z.length; w++) z[w](i, b, n, t);
  }
  function Tl(t) {
    return t < R
      ? F * t * t
      : t < 0.7272727272727273
      ? F * Math.pow(t - 1.5 / 2.75, 2) + 0.75
      : t < 0.9090909090909092
      ? F * (t -= 2.25 / 2.75) * t + 0.9375
      : F * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  _("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Db(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Dt.Linear.easeNone = Dt.none = Dt.Linear.easeIn),
    Db("Elastic", Fb("in"), Fb("out"), Fb()),
    (F = 7.5625),
    (R = 1 / 2.75),
    Db(
      "Bounce",
      function (t) {
        return 1 - Tl(1 - t);
      },
      Tl
    ),
    Db("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Db("Circ", function (t) {
      return -(J(1 - t * t) - 1);
    }),
    Db("Sine", function (t) {
      return 1 === t ? 1 : 1 - Q(t * X);
    }),
    Db("Back", Gb("in"), Gb("out"), Gb()),
    (Dt.SteppedEase =
      Dt.steps =
      ot.SteppedEase =
        {
          config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              i = t + (e ? 0 : 1),
              n = e ? 1 : 0;
            return function (t) {
              return (((i * yt(0, 0.99999999, t)) | 0) + n) * r;
            };
          },
        }),
    (I.ease = Dt["quad.out"]),
    _(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (ct += t + "," + t + "Params,");
      }
    );
  var Et,
    It = function GSCache(t, e) {
      (this.id = G++),
        ((t._gsap = this).target = t),
        (this.harness = e),
        (this.get = e ? e.get : $),
        (this.set = e ? e.getSetter : Qt);
    },
    Lt =
      (((Et = Animation.prototype).delay = function delay(t) {
        return t || 0 === t
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (Et.duration = function duration(t) {
        return arguments.length
          ? this.totalDuration(
              0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur;
      }),
      (Et.totalDuration = function totalDuration(t) {
        return arguments.length
          ? ((this._dirty = 0),
            Fa(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (Et.totalTime = function totalTime(t, e) {
        if ((Pt(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (ya(this, t); r.parent; )
            r.parent._time !==
              r._start +
                (0 <= r._ts
                  ? r._tTime / r._ts
                  : (r.totalDuration() - r._tTime) / -r._ts) &&
              r.totalTime(r._tTime, !0),
              (r = r.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((0 < this._ts && t < this._tDur) ||
              (this._ts < 0 && 0 < t) ||
              (!this._tDur && !t)) &&
            Aa(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && Math.abs(this._zTime) === U) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), ea(this, t, e)),
          this
        );
      }),
      (Et.time = function time(t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + ua(this)) % this._dur ||
                (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (Et.totalProgress = function totalProgress(t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (Et.progress = function progress(t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                ua(this),
              e
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (Et.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * r, e)
          : this._repeat
          ? gt(this._tTime, r) + 1
          : 1;
      }),
      (Et.timeScale = function timeScale(t) {
        if (!arguments.length) return this._rts === -U ? 0 : this._rts;
        if (this._rts === t) return this;
        var e =
          this.parent && this._ts ? wa(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -U ? 0 : this._rts),
          (function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          })(this.totalTime(yt(-this._delay, this._tDur, e), !0))
        );
      }),
      (Et.paused = function paused(t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t)
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Pt(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      (this._tTime -= U) &&
                      Math.abs(this._zTime) !== U
                  ))),
            this)
          : this._ps;
      }),
      (Et.startTime = function startTime(t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return (
            !e || (!e._sort && this.parent) || Aa(e, this, t - this._delay),
            this
          );
        }
        return this._start;
      }),
      (Et.endTime = function endTime(t) {
        return (
          this._start +
          (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        );
      }),
      (Et.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? wa(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (Et.globalTime = function globalTime(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
          (r = e._start + r / (e._ts || 1)), (e = e._dp);
        return r;
      }),
      (Et.repeat = function repeat(t) {
        return arguments.length ? ((this._repeat = t), Ga(this)) : this._repeat;
      }),
      (Et.repeatDelay = function repeatDelay(t) {
        return arguments.length ? ((this._rDelay = t), Ga(this)) : this._rDelay;
      }),
      (Et.yoyo = function yoyo(t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (Et.seek = function seek(t, e) {
        return this.totalTime(Ia(this, t), s(e));
      }),
      (Et.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, s(e));
      }),
      (Et.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (Et.reverse = function reverse(t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (Et.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (Et.resume = function resume() {
        return this.paused(!1);
      }),
      (Et.reversed = function reversed(t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -U : 0)),
            this)
          : this._rts < 0;
      }),
      (Et.invalidate = function invalidate() {
        return (this._initted = 0), (this._zTime = -U), this;
      }),
      (Et.isActive = function isActive() {
        var t,
          e = this.parent || this._dp,
          r = this._start;
        return !(
          e &&
          !(
            this._ts &&
            this._initted &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= r &&
            t < this.endTime(!0) - U
          )
        );
      }),
      (Et.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length
          ? (e
              ? ((i[t] = e),
                r && (i[t + "Params"] = r),
                "onUpdate" === t && (this._onUpdate = e))
              : delete i[t],
            this)
          : i[t];
      }),
      (Et.then = function then(t) {
        var i = this;
        return new Promise(function (e) {
          function jn() {
            var t = i.then;
            (i.then = null),
              o(r) && (r = r(i)) && (r.then || r === i) && (i.then = t),
              e(r),
              (i.then = t);
          }
          var r = o(t) ? t : ga;
          (i._initted && 1 === i.totalProgress() && 0 <= i._ts) ||
          (!i._tTime && i._ts < 0)
            ? jn()
            : (i._prom = jn);
        });
      }),
      (Et.kill = function kill() {
        fb(this);
      }),
      Animation);
  function Animation(t, e) {
    var r = t.parent || E;
    (this.vars = t),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat || 0) &&
        ((this._rDelay = t.repeatDelay || 0),
        (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
      (this._ts = 1),
      Fa(this, +t.duration, 1, 1),
      (this.data = t.data),
      m || At.wake(),
      r && Aa(r, this, e || 0 === e ? e : r._time, 1),
      t.reversed && this.reverse(),
      t.paused && this.paused(!0);
  }
  ha(Lt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -U,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Bt = (function (i) {
    function Timeline(t, e) {
      var r;
      return (
        void 0 === t && (t = {}),
        ((r = i.call(this, t, e) || this).labels = {}),
        (r.smoothChildTiming = !!t.smoothChildTiming),
        (r.autoRemoveChildren = !!t.autoRemoveChildren),
        (r._sort = s(t.sortChildren)),
        r.parent && za(r.parent, _assertThisInitialized(r)),
        t.scrollTrigger && Ba(_assertThisInitialized(r), t.scrollTrigger),
        r
      );
    }
    _inheritsLoose(Timeline, i);
    var t = Timeline.prototype;
    return (
      (t.to = function to(t, e, r, i) {
        return new Xt(t, ca(arguments, 0, this), Ia(this, p(e) ? i : r)), this;
      }),
      (t.from = function from(t, e, r, i) {
        return new Xt(t, ca(arguments, 1, this), Ia(this, p(e) ? i : r)), this;
      }),
      (t.fromTo = function fromTo(t, e, r, i, n) {
        return new Xt(t, ca(arguments, 2, this), Ia(this, p(e) ? n : i)), this;
      }),
      (t.set = function set(t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          ma(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new Xt(t, e, Ia(this, r), 1),
          this
        );
      }),
      (t.call = function call(t, e, r) {
        return Aa(this, Xt.delayedCall(0, t, e), Ia(this, r));
      }),
      (t.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || i),
          (r.onComplete = a),
          (r.onCompleteParams = s),
          (r.parent = this),
          new Xt(t, r, Ia(this, n)),
          this
        );
      }),
      (t.staggerFrom = function staggerFrom(t, e, r, i, n, a, o) {
        return (
          (r.runBackwards = 1),
          (ma(r).immediateRender = s(r.immediateRender)),
          this.staggerTo(t, e, r, i, n, a, o)
        );
      }),
      (t.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, o, u) {
        return (
          (i.startAt = r),
          (ma(i).immediateRender = s(i.immediateRender)),
          this.staggerTo(t, e, i, n, a, o, u)
        );
      }),
      (t.render = function render(t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          p,
          _,
          c = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = this !== E && m - U < t && 0 <= t ? m : t < U ? 0 : t,
          y = this._zTime < 0 != t < 0 && (this._initted || !g);
        if (v !== this._tTime || r || y) {
          if (
            (c !== this._time &&
              g &&
              ((v += this._time - c), (t += this._time - c)),
            (i = v),
            (f = this._start),
            (u = !(l = this._ts)),
            y && (g || (c = this._zTime), (!t && e) || (this._zTime = t)),
            this._repeat &&
              ((p = this._yoyo),
              (o = g + this._rDelay),
              (i = aa(v % o)),
              v === m
                ? ((s = this._repeat), (i = g))
                : ((s = ~~(v / o)) && s === v / o && ((i = g), s--),
                  g < i && (i = g)),
              (d = gt(this._tTime, o)),
              !c && this._tTime && d !== s && (d = s),
              p && 1 & s && ((i = g - i), (_ = 1)),
              s !== d && !this._lock))
          ) {
            var T = p && 1 & d,
              b = T === (p && 1 & s);
            if (
              (s < d && (T = !T),
              (c = T ? 0 : g),
              (this._lock = 1),
              (this.render(c || (_ ? 0 : aa(s * o)), e, !g)._lock = 0),
              !e && this.parent && xt(this, "onRepeat"),
              this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1),
              c !== this._time || u != !this._ts)
            )
              return this;
            if (
              ((g = this._dur),
              (m = this._tDur),
              b &&
                ((this._lock = 2),
                (c = T ? g : -1e-4),
                this.render(c, !0),
                this.vars.repeatRefresh && !_ && this.invalidate()),
              (this._lock = 0),
              !this._ts && !u)
            )
              return this;
            Bb(this, _);
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (h = (function _findNextPauseTween(t, e, r) {
                var i;
                if (e < r)
                  for (i = t._first; i && i._start <= r; ) {
                    if (!i._dur && "isPause" === i.data && i._start > e)
                      return i;
                    i = i._next;
                  }
                else
                  for (i = t._last; i && i._start >= r; ) {
                    if (!i._dur && "isPause" === i.data && i._start < e)
                      return i;
                    i = i._prev;
                  }
              })(this, aa(c), aa(i))) &&
              (v -= i - (i = h._start)),
            (this._tTime = v),
            (this._time = i),
            (this._act = !l),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t)),
            c || !i || e || xt(this, "onStart"),
            c <= i && 0 <= t)
          )
            for (n = this._first; n; ) {
              if (
                ((a = n._next), (n._act || i >= n._start) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (i - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (i - n._start) * n._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = -U);
                  break;
                }
              }
              n = a;
            }
          else {
            n = this._last;
            for (var w = t < 0 ? t : i; n; ) {
              if (
                ((a = n._prev), (n._act || w <= n._end) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (w - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (w - n._start) * n._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = w ? -U : U);
                  break;
                }
              }
              n = a;
            }
          }
          if (
            h &&
            !e &&
            (this.pause(),
            (h.render(c <= i ? 0 : -U)._zTime = c <= i ? 1 : -1),
            this._ts)
          )
            return (this._start = f), xa(this), this.render(t, e, r);
          this._onUpdate && !e && xt(this, "onUpdate", !0),
            ((v === m && m >= this.totalDuration()) || (!v && c)) &&
              ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                this._lock ||
                ((!t && g) ||
                  !((v === m && 0 < this._ts) || (!v && this._ts < 0)) ||
                  qa(this, 1),
                e ||
                  (t < 0 && !c) ||
                  (!v && !c) ||
                  (xt(this, v === m ? "onComplete" : "onReverseComplete", !0),
                  !this._prom ||
                    (v < m && 0 < this.timeScale()) ||
                    this._prom())));
        }
        return this;
      }),
      (t.add = function add(t, e) {
        var r = this;
        if ((p(e) || (e = Ia(this, e)), !(t instanceof Lt))) {
          if (tt(t))
            return (
              t.forEach(function (t) {
                return r.add(t, e);
              }),
              this
            );
          if (n(t)) return this.addLabel(t, e);
          if (!o(t)) return this;
          t = Xt.delayedCall(0, t);
        }
        return this !== t ? Aa(this, t, e) : this;
      }),
      (t.getChildren = function getChildren(t, e, r, i) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === i && (i = -B);
        for (var n = [], a = this._first; a; )
          a._start >= i &&
            (a instanceof Xt
              ? e && n.push(a)
              : (r && n.push(a),
                t && n.push.apply(n, a.getChildren(!0, e, r)))),
            (a = a._next);
        return n;
      }),
      (t.getById = function getById(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r];
      }),
      (t.remove = function remove(t) {
        return n(t)
          ? this.removeLabel(t)
          : o(t)
          ? this.killTweensOf(t)
          : (pa(this, t),
            t === this._recent && (this._recent = this._last),
            ra(this));
      }),
      (t.totalTime = function totalTime(t, e) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = aa(
                At.time -
                  (0 < this._ts
                    ? t / this._ts
                    : (this.totalDuration() - t) / -this._ts)
              )),
            i.prototype.totalTime.call(this, t, e),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function addLabel(t, e) {
        return (this.labels[t] = Ia(this, e)), this;
      }),
      (t.removeLabel = function removeLabel(t) {
        return delete this.labels[t], this;
      }),
      (t.addPause = function addPause(t, e, r) {
        var i = Xt.delayedCall(0, e || O, r);
        return (
          (i.data = "isPause"), (this._hasPause = 1), Aa(this, i, Ia(this, t))
        );
      }),
      (t.removePause = function removePause(t) {
        var e = this._first;
        for (t = Ia(this, t); e; )
          e._start === t && "isPause" === e.data && qa(e), (e = e._next);
      }),
      (t.killTweensOf = function killTweensOf(t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--; )
          qt !== i[n] && i[n].kill(t, e);
        return this;
      }),
      (t.getTweensOf = function getTweensOf(t, e) {
        for (var r, i = [], n = bt(t), a = this._first, s = p(e); a; )
          a instanceof Xt
            ? ba(a._targets, n) &&
              (s
                ? (!qt || (a._initted && a._ts)) &&
                  a.globalTime(0) <= e &&
                  a.globalTime(a.totalDuration()) > e
                : !e || a.isActive()) &&
              i.push(a)
            : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r),
            (a = a._next);
        return i;
      }),
      (t.tweenTo = function tweenTo(t, e) {
        e = e || {};
        var r = this,
          i = Ia(r, t),
          n = e.startAt,
          a = e.onStart,
          s = e.onStartParams,
          o = Xt.to(
            r,
            ha(e, {
              ease: "none",
              lazy: !1,
              time: i,
              overwrite: "auto",
              duration:
                e.duration ||
                Math.abs(
                  (i - (n && "time" in n ? n.time : r._time)) / r.timeScale()
                ) ||
                U,
              onStart: function onStart() {
                r.pause();
                var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                o._dur !== t && Fa(o, t, 0, 1).render(o._time, !0, !0),
                  a && a.apply(o, s || []);
              },
            })
          );
        return o;
      }),
      (t.tweenFromTo = function tweenFromTo(t, e, r) {
        return this.tweenTo(e, ha({ startAt: { time: Ia(this, t) } }, r));
      }),
      (t.recent = function recent() {
        return this._recent;
      }),
      (t.nextLabel = function nextLabel(t) {
        return void 0 === t && (t = this._time), db(this, Ia(this, t));
      }),
      (t.previousLabel = function previousLabel(t) {
        return void 0 === t && (t = this._time), db(this, Ia(this, t), 1);
      }),
      (t.currentLabel = function currentLabel(t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + U);
      }),
      (t.shiftChildren = function shiftChildren(t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, a = this.labels; n; )
          n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (i in a) a[i] >= r && (a[i] += t);
        return ra(this);
      }),
      (t.invalidate = function invalidate() {
        var t = this._first;
        for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
        return i.prototype.invalidate.call(this);
      }),
      (t.clear = function clear(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
          (e = r._next), this.remove(r), (r = e);
        return (
          (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          ra(this)
        );
      }),
      (t.totalDuration = function totalDuration(t) {
        var e,
          r,
          i,
          n = 0,
          a = this,
          s = a._last,
          o = B;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -t : t)
          );
        if (a._dirty) {
          for (i = a.parent; s; )
            (e = s._prev),
              s._dirty && s.totalDuration(),
              o < (r = s._start) && a._sort && s._ts && !a._lock
                ? ((a._lock = 1), (Aa(a, s, r - s._delay, 1)._lock = 0))
                : (o = r),
              r < 0 &&
                s._ts &&
                ((n -= r),
                ((!i && !a._dp) || (i && i.smoothChildTiming)) &&
                  ((a._start += r / a._ts), (a._time -= r), (a._tTime -= r)),
                a.shiftChildren(-r, !1, -Infinity),
                (o = 0)),
              s._end > n && s._ts && (n = s._end),
              (s = e);
          Fa(a, a === E && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (Timeline.updateRoot = function updateRoot(t) {
        if ((E._ts && (ea(E, wa(t, E)), (d = At.frame)), At.frame >= pt)) {
          pt += j.autoSleep || 120;
          var e = E._first;
          if ((!e || !e._ts) && j.autoSleep && At._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || At.sleep();
          }
        }
      }),
      Timeline
    );
  })(Lt);
  ha(Bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  function Nb(t, e, i, a, s, u) {
    var h, l, f, d;
    if (
      ft[t] &&
      !1 !==
        (h = new ft[t]()).init(
          s,
          h.rawVars
            ? e[t]
            : (function _processVars(t, e, i, a, s) {
                if (
                  (o(t) && (t = jt(t, s, e, i, a)),
                  !r(t) || (t.style && t.nodeType) || tt(t) || H(t))
                )
                  return n(t) ? jt(t, s, e, i, a) : t;
                var u,
                  h = {};
                for (u in t) h[u] = jt(t[u], s, e, i, a);
                return h;
              })(e[t], a, s, u, i),
          i,
          a,
          u
        ) &&
      ((i._pt = l = new ie(i._pt, s, t, 0, 1, h.render, h, 0, h.priority)),
      i !== c)
    )
      for (f = i._ptLookup[i._targets.indexOf(s)], d = h._props.length; d--; )
        f[h._props[d]] = l;
    return h;
  }
  var qt,
    Yt = function _addPropTween(t, e, r, i, a, s, u, h, l) {
      o(i) && (i = i(a || 0, t, s));
      var f,
        d = t[e],
        p =
          "get" !== r
            ? r
            : o(d)
            ? l
              ? t[
                  e.indexOf("set") || !o(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](l)
              : t[e]()
            : d,
        _ = o(d) ? (l ? Jt : Zt) : Gt;
      if (
        (n(i) &&
          (~i.indexOf("random(") && (i = ab(i)),
          "=" === i.charAt(1) &&
            (i =
              parseFloat(p) +
              parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) +
              (La(p) || 0))),
        p !== i)
      )
        return isNaN(p * i)
          ? (d || e in t || L(e, i),
            function _addComplexStringPropTween(t, e, r, i, n, a, s) {
              var o,
                u,
                h,
                l,
                f,
                d,
                p,
                _,
                c = new ie(this._pt, t, e, 0, 1, Ht, null, n),
                m = 0,
                g = 0;
              for (
                c.b = r,
                  c.e = i,
                  r += "",
                  (p = ~(i += "").indexOf("random(")) && (i = ab(i)),
                  a && (a((_ = [r, i]), t, e), (r = _[0]), (i = _[1])),
                  u = r.match(nt) || [];
                (o = nt.exec(i));

              )
                (l = o[0]),
                  (f = i.substring(m, o.index)),
                  h ? (h = (h + 1) % 5) : "rgba(" === f.substr(-5) && (h = 1),
                  l !== u[g++] &&
                    ((d = parseFloat(u[g - 1]) || 0),
                    (c._pt = {
                      _next: c._pt,
                      p: f || 1 === g ? f : ",",
                      s: d,
                      c:
                        "=" === l.charAt(1)
                          ? parseFloat(l.substr(2)) *
                            ("-" === l.charAt(0) ? -1 : 1)
                          : parseFloat(l) - d,
                      m: h && h < 4 ? Math.round : 0,
                    }),
                    (m = nt.lastIndex));
              return (
                (c.c = m < i.length ? i.substring(m, i.length) : ""),
                (c.fp = s),
                (at.test(i) || p) && (c.e = 0),
                (this._pt = c)
              );
            }.call(this, t, e, p, i, _, h || j.stringFilter, l))
          : ((f = new ie(
              this._pt,
              t,
              e,
              +p || 0,
              i - (p || 0),
              "boolean" == typeof d ? $t : Wt,
              0,
              _
            )),
            l && (f.fp = l),
            u && f.modifier(u, this, t),
            (this._pt = f));
    },
    Nt = function _initTween(t, e) {
      var r,
        i,
        n,
        a,
        o,
        u,
        h,
        l,
        f,
        d,
        p,
        _,
        c,
        m = t.vars,
        g = m.ease,
        v = m.startAt,
        y = m.immediateRender,
        T = m.lazy,
        b = m.onUpdate,
        w = m.onUpdateParams,
        x = m.callbackScope,
        k = m.runBackwards,
        O = m.yoyoEase,
        M = m.keyframes,
        C = m.autoRevert,
        A = t._dur,
        P = t._startAt,
        D = t._targets,
        S = t.parent,
        z = S && "nested" === S.data ? S.parent._targets : D,
        F = "auto" === t._overwrite,
        R = t.timeline;
      if (
        (!R || (M && g) || (g = "none"),
        (t._ease = Rt(g, I.ease)),
        (t._yEase = O ? Ft(Rt(!0 === O ? g : O, I.ease)) : 0),
        O &&
          t._yoyo &&
          !t._repeat &&
          ((O = t._yEase), (t._yEase = t._ease), (t._ease = O)),
        !R)
      ) {
        if (
          ((_ = (l = D[0] ? Z(D[0]).harness : 0) && m[l.prop]),
          (r = la(m, ut)),
          P && P.render(-1, !0).kill(),
          v)
        ) {
          if (
            (qa(
              (t._startAt = Xt.set(
                D,
                ha(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: S,
                    immediateRender: !0,
                    lazy: s(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: b,
                    onUpdateParams: w,
                    callbackScope: x,
                    stagger: 0,
                  },
                  v
                )
              ))
            ),
            y)
          )
            if (0 < e) C || (t._startAt = 0);
            else if (A && !(e < 0 && P)) return void (e && (t._zTime = e));
        } else if (k && A)
          if (P) C || (t._startAt = 0);
          else if (
            (e && (y = !1),
            (n = ha(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: y && s(T),
                immediateRender: y,
                stagger: 0,
                parent: S,
              },
              r
            )),
            _ && (n[l.prop] = _),
            qa((t._startAt = Xt.set(D, n))),
            y)
          ) {
            if (!e) return;
          } else _initTween(t._startAt, U);
        for (
          t._pt = 0, T = (A && s(T)) || (T && !A), i = 0;
          i < D.length;
          i++
        ) {
          if (
            ((h = (o = D[i])._gsap || Y(D)[i]._gsap),
            (t._ptLookup[i] = d = {}),
            lt[h.id] && ht.length && da(),
            (p = z === D ? i : z.indexOf(o)),
            l &&
              !1 !== (f = new l()).init(o, _ || r, t, p, z) &&
              ((t._pt = a =
                new ie(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority)),
              f._props.forEach(function (t) {
                d[t] = a;
              }),
              f.priority && (u = 1)),
            !l || _)
          )
            for (n in r)
              ft[n] && (f = Nb(n, r, t, p, o, z))
                ? f.priority && (u = 1)
                : (d[n] = a =
                    Yt.call(t, o, n, "get", r[n], p, z, 0, m.stringFilter));
          t._op && t._op[i] && t.kill(o, t._op[i]),
            F &&
              t._pt &&
              ((qt = t),
              E.killTweensOf(o, d, t.globalTime(0)),
              (c = !t.parent),
              (qt = 0)),
            t._pt && T && (lt[h.id] = 1);
        }
        u && re(t), t._onInit && t._onInit(t);
      }
      (t._from = !R && !!m.runBackwards),
        (t._onUpdate = b),
        (t._initted = (!t._op || t._pt) && !c);
    },
    jt = function _parseFuncOrString(t, e, r, i, a) {
      return o(t)
        ? t.call(e, r, i, a)
        : n(t) && ~t.indexOf("random(")
        ? ab(t)
        : t;
    },
    Ut = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    Vt = (Ut + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
    Xt = (function (S) {
      function Tween(t, e, i, n) {
        var a;
        "number" == typeof e && ((i.duration = e), (e = i), (i = null));
        var o,
          h,
          l,
          f,
          d,
          _,
          c,
          m,
          g = (a = S.call(this, n ? e : ma(e), i) || this).vars,
          v = g.duration,
          y = g.delay,
          T = g.immediateRender,
          b = g.stagger,
          w = g.overwrite,
          x = g.keyframes,
          k = g.defaults,
          C = g.scrollTrigger,
          A = g.yoyoEase,
          P = a.parent,
          D = (tt(t) || H(t) ? p(t[0]) : "length" in e) ? [t] : bt(t);
        if (
          ((a._targets = D.length
            ? Y(D)
            : M(
                "GSAP target " + t + " not found. https://greensock.com",
                !j.nullTargetWarn
              ) || []),
          (a._ptLookup = []),
          (a._overwrite = w),
          x || b || u(v) || u(y))
        ) {
          if (
            ((e = a.vars),
            (o = a.timeline =
              new Bt({ data: "nested", defaults: k || {} })).kill(),
            (o.parent = _assertThisInitialized(a)),
            x)
          )
            ha(o.vars.defaults, { ease: "none" }),
              x.forEach(function (t) {
                return o.to(D, t, ">");
              });
          else {
            if (((f = D.length), (c = b ? Sa(b) : O), r(b)))
              for (d in b) ~Ut.indexOf(d) && ((m = m || {})[d] = b[d]);
            for (h = 0; h < f; h++) {
              for (d in ((l = {}), e)) Vt.indexOf(d) < 0 && (l[d] = e[d]);
              (l.stagger = 0),
                A && (l.yoyoEase = A),
                m && mt(l, m),
                (_ = D[h]),
                (l.duration = +jt(v, _assertThisInitialized(a), h, _, D)),
                (l.delay =
                  (+jt(y, _assertThisInitialized(a), h, _, D) || 0) - a._delay),
                !b &&
                  1 === f &&
                  l.delay &&
                  ((a._delay = y = l.delay), (a._start += y), (l.delay = 0)),
                o.to(_, l, c(h, _, D));
            }
            o.duration() ? (v = y = 0) : (a.timeline = 0);
          }
          v || a.duration((v = o.duration()));
        } else a.timeline = 0;
        return (
          !0 === w &&
            ((qt = _assertThisInitialized(a)), E.killTweensOf(D), (qt = 0)),
          P && za(P, _assertThisInitialized(a)),
          (T ||
            (!v &&
              !x &&
              a._start === aa(P._time) &&
              s(T) &&
              (function _hasNoPausedAncestors(t) {
                return !t || (t._ts && _hasNoPausedAncestors(t.parent));
              })(_assertThisInitialized(a)) &&
              "nested" !== P.data)) &&
            ((a._tTime = -U), a.render(Math.max(0, -y))),
          C && Ba(_assertThisInitialized(a), C),
          a
        );
      }
      _inheritsLoose(Tween, S);
      var t = Tween.prototype;
      return (
        (t.render = function render(t, e, r) {
          var i,
            n,
            a,
            s,
            o,
            u,
            h,
            l,
            f,
            d = this._time,
            p = this._tDur,
            _ = this._dur,
            c = p - U < t && 0 <= t ? p : t < U ? 0 : t;
          if (_) {
            if (
              c !== this._tTime ||
              !t ||
              r ||
              (this._startAt && this._zTime < 0 != t < 0)
            ) {
              if (((i = c), (l = this.timeline), this._repeat)) {
                if (
                  ((s = _ + this._rDelay),
                  (i = aa(c % s)),
                  c === p
                    ? ((a = this._repeat), (i = _))
                    : ((a = ~~(c / s)) && a === c / s && ((i = _), a--),
                      _ < i && (i = _)),
                  (u = this._yoyo && 1 & a) && ((f = this._yEase), (i = _ - i)),
                  (o = gt(this._tTime, s)),
                  i === d && !r && this._initted)
                )
                  return this;
                a !== o &&
                  (l && this._yEase && Bb(l, u),
                  !this.vars.repeatRefresh ||
                    u ||
                    this._lock ||
                    ((this._lock = r = 1),
                    (this.render(aa(s * a), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (Ca(this, t < 0 ? t : i, r, e))
                  return (this._tTime = 0), this;
                if (_ !== this._dur) return this.render(t, e, r);
              }
              for (
                this._tTime = c,
                  this._time = i,
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  this.ratio = h = (f || this._ease)(i / _),
                  this._from && (this.ratio = h = 1 - h),
                  !i || d || e || xt(this, "onStart"),
                  n = this._pt;
                n;

              )
                n.r(h, n.d), (n = n._next);
              (l && l.render(t < 0 ? t : !i && u ? -U : l._dur * h, e, r)) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                  xt(this, "onUpdate")),
                this._repeat &&
                  a !== o &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  xt(this, "onRepeat"),
                (c !== this._tDur && c) ||
                  this._tTime !== c ||
                  (t < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startAt.render(t, !0, !0),
                  (!t && _) ||
                    !(
                      (c === this._tDur && 0 < this._ts) ||
                      (!c && this._ts < 0)
                    ) ||
                    qa(this, 1),
                  e ||
                    (t < 0 && !d) ||
                    (!c && !d) ||
                    (xt(this, c === p ? "onComplete" : "onReverseComplete", !0),
                    !this._prom ||
                      (c < p && 0 < this.timeScale()) ||
                      this._prom()));
            }
          } else
            !(function _renderZeroDurationTween(t, e, r, i) {
              var n,
                a,
                s = t.ratio,
                o =
                  e < 0 ||
                  (!e && s && !t._start && t._zTime > U && !t._dp._lock) ||
                  ((t._ts < 0 || t._dp._ts < 0) &&
                    "isFromStart" !== t.data &&
                    "isStart" !== t.data)
                    ? 0
                    : 1,
                u = t._rDelay,
                h = 0;
              if (
                (u &&
                  t._repeat &&
                  ((h = yt(0, t._tDur, e)),
                  gt(h, u) !== (a = gt(t._tTime, u)) &&
                    ((s = 1 - o),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                o !== s || i || t._zTime === U || (!e && t._zTime))
              ) {
                if (!t._initted && Ca(t, e, i, r)) return;
                for (
                  a = t._zTime,
                    t._zTime = e || (r ? U : 0),
                    r = r || (e && !a),
                    t.ratio = o,
                    t._from && (o = 1 - o),
                    t._time = 0,
                    t._tTime = h,
                    r || xt(t, "onStart"),
                    n = t._pt;
                  n;

                )
                  n.r(o, n.d), (n = n._next);
                t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                  t._onUpdate && !r && xt(t, "onUpdate"),
                  h && t._repeat && !r && t.parent && xt(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === o &&
                    (o && qa(t, 1),
                    r ||
                      (xt(t, o ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
            })(this, t, e, r);
          return this;
        }),
        (t.targets = function targets() {
          return this._targets;
        }),
        (t.invalidate = function invalidate() {
          return (
            (this._pt =
              this._op =
              this._startAt =
              this._onUpdate =
              this._act =
              this._lazy =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(),
            S.prototype.invalidate.call(this)
          );
        }),
        (t.kill = function kill(t, e) {
          if (
            (void 0 === e && (e = "all"),
            !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
          )
            return fb(this);
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, qt && !0 !== qt.vars.overwrite)
                ._first || fb(this),
              this.parent &&
                r !== this.timeline.totalDuration() &&
                Fa(this, (this._dur * this.timeline._tDur) / r, 0, 1),
              this
            );
          }
          var i,
            a,
            s,
            o,
            u,
            h,
            l,
            f = this._targets,
            d = t ? bt(t) : f,
            p = this._ptLookup,
            c = this._pt;
          if (
            (!e || "all" === e) &&
            (function _arraysMatch(t, e) {
              for (
                var r = t.length, i = r === e.length;
                i && r-- && t[r] === e[r];

              );
              return r < 0;
            })(f, d)
          )
            return "all" === e && (this._pt = 0), fb(this);
          for (
            i = this._op = this._op || [],
              "all" !== e &&
                (n(e) &&
                  ((u = {}),
                  _(e, function (t) {
                    return (u[t] = 1);
                  }),
                  (e = u)),
                (e = (function _addAliasesToVars(t, e) {
                  var r,
                    i,
                    n,
                    a,
                    s = t[0] ? Z(t[0]).harness : 0,
                    o = s && s.aliases;
                  if (!o) return e;
                  for (i in ((r = mt({}, e)), o))
                    if ((i in r))
                      for (n = (a = o[i].split(",")).length; n--; )
                        r[a[n]] = r[i];
                  return r;
                })(f, e))),
              l = f.length;
            l--;

          )
            if (~d.indexOf(f[l]))
              for (u in ((a = p[l]),
              "all" === e
                ? ((i[l] = e), (o = a), (s = {}))
                : ((s = i[l] = i[l] || {}), (o = e)),
              o))
                (h = a && a[u]) &&
                  (("kill" in h.d && !0 !== h.d.kill(u)) || pa(this, h, "_pt"),
                  delete a[u]),
                  "all" !== s && (s[u] = 1);
          return this._initted && !this._pt && c && fb(this), this;
        }),
        (Tween.to = function to(t, e, r) {
          return new Tween(t, e, r);
        }),
        (Tween.from = function from(t, e) {
          return new Tween(t, ca(arguments, 1));
        }),
        (Tween.delayedCall = function delayedCall(t, e, r, i) {
          return new Tween(e, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i,
          });
        }),
        (Tween.fromTo = function fromTo(t, e, r) {
          return new Tween(t, ca(arguments, 2));
        }),
        (Tween.set = function set(t, e) {
          return (
            (e.duration = 0), e.repeatDelay || (e.repeat = 0), new Tween(t, e)
          );
        }),
        (Tween.killTweensOf = function killTweensOf(t, e, r) {
          return E.killTweensOf(t, e, r);
        }),
        Tween
      );
    })(Lt);
  ha(Xt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    _("staggerTo,staggerFrom,staggerFromTo", function (r) {
      Xt[r] = function () {
        var t = new Bt(),
          e = Tt.call(arguments, 0);
        return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
      };
    });
  function Yb(t, e, r) {
    return t.setAttribute(e, r);
  }
  function ec(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }
  var Gt = function _setterPlain(t, e, r) {
      return (t[e] = r);
    },
    Zt = function _setterFunc(t, e, r) {
      return t[e](r);
    },
    Jt = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r);
    },
    Qt = function _getSetter(t, e) {
      return o(t[e]) ? Zt : q(t[e]) && t.setAttribute ? Yb : Gt;
    },
    Wt = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
    },
    $t = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    Ht = function _renderComplexString(t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            i),
            (r = r._next);
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    Kt = function _renderPropTweens(t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    te = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a; )
        (n = a._next), a.p === i && a.modifier(t, e, r), (a = n);
    },
    ee = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i; )
        (r = i._next),
          (i.p === t && !i.op) || i.op === t
            ? pa(this, i, "_pt")
            : i.dep || (e = 1),
          (i = r);
      return !e;
    },
    re = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a; ) {
        for (e = a._next, r = i; r && r.pr > a.pr; ) r = r._next;
        (a._prev = r ? r._prev : n) ? (a._prev._next = a) : (i = a),
          (a._next = r) ? (r._prev = a) : (n = a),
          (a = e);
      }
      t._pt = i;
    },
    ie =
      ((PropTween.prototype.modifier = function modifier(t, e, r) {
        (this.mSet = this.mSet || this.set),
          (this.set = ec),
          (this.m = t),
          (this.mt = r),
          (this.tween = e);
      }),
      PropTween);
  function PropTween(t, e, r, i, n, a, s, o, u) {
    (this.t = e),
      (this.s = i),
      (this.c = n),
      (this.p = r),
      (this.r = a || Wt),
      (this.d = s || this),
      (this.set = o || Gt),
      (this.pr = u || 0),
      (this._next = t) && (t._prev = this);
  }
  _(
    ct +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (ut[t] = 1);
    }
  ),
    (ot.TweenMax = ot.TweenLite = Xt),
    (ot.TimelineLite = ot.TimelineMax = Bt),
    (E = new Bt({
      sortChildren: !1,
      defaults: I,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (j.stringFilter = qb);
  var ne = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      e.forEach(function (t) {
        return (function _createPlugin(t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = o(t),
            i =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            n = {
              init: O,
              render: Kt,
              add: Yt,
              kill: ee,
              modifier: te,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Qt,
              aliases: {},
              register: 0,
            };
          if ((Pt(), t !== i)) {
            if (ft[e]) return;
            ha(i, ha(la(t, n), a)),
              mt(i.prototype, mt(n, la(t, a))),
              (ft[(i.prop = e)] = i),
              t.targetTest && (_t.push(i), (ut[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          N(e, i), t.register && t.register(ae, i, ie);
        })(t);
      });
    },
    timeline: function timeline(t) {
      return new Bt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return E.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, r) {
      n(i) && (i = bt(i)[0]);
      var a = Z(i || {}).get,
        s = e ? ga : fa;
      return (
        "native" === e && (e = ""),
        i
          ? t
            ? s(((ft[t] && ft[t].get) || a)(i, t, e, r))
            : function (t, e, r) {
                return s(((ft[t] && ft[t].get) || a)(i, t, e, r));
              }
          : i
      );
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = bt(r)).length) {
        var n = r.map(function (t) {
            return ae.quickSetter(t, e, i);
          }),
          a = n.length;
        return function (t) {
          for (var e = a; e--; ) n[e](t);
        };
      }
      r = r[0] || {};
      var s = ft[e],
        o = Z(r),
        u = (o.harness && (o.harness.aliases || {})[e]) || e,
        h = s
          ? function (t) {
              var e = new s();
              (c._pt = 0),
                e.init(r, i ? t + i : t, c, 0, [r]),
                e.render(1, e),
                c._pt && Kt(1, c);
            }
          : o.set(r, u);
      return s
        ? h
        : function (t) {
            return h(r, u, i ? t + i : t, o, 1);
          };
    },
    isTweening: function isTweening(t) {
      return 0 < E.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Rt(t.ease, I.ease)), ka(I, t || {});
    },
    config: function config(t) {
      return ka(j, t || {});
    },
    registerEffect: function registerEffect(t) {
      var n = t.name,
        i = t.effect,
        e = t.plugins,
        a = t.defaults,
        s = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return (
          t && !ft[t] && !ot[t] && M(n + " effect requires " + t + " plugin.")
        );
      }),
        (dt[n] = function (t, e, r) {
          return i(bt(t), ha(e || {}, a), r);
        }),
        s &&
          (Bt.prototype[n] = function (t, e, i) {
            return this.add(dt[n](t, r(e) ? e : (i = e) && {}, this), i);
          });
    },
    registerEase: function registerEase(t, e) {
      Dt[t] = Rt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Rt(t, e) : Dt;
    },
    getById: function getById(t) {
      return E.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
        i,
        n = new Bt(t);
      for (
        n.smoothChildTiming = s(t.smoothChildTiming),
          E.remove(n),
          n._dp = 0,
          n._time = n._tTime = E._time,
          r = E._first;
        r;

      )
        (i = r._next),
          (!e &&
            !r._dur &&
            r instanceof Xt &&
            r.vars.onComplete === r._targets[0]) ||
            Aa(n, r, r._start - r._delay),
          (r = i);
      return Aa(E, n, 0), n;
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return tt(e)
          ? Za(e, wrap(0, e.length), t)
          : Ja(r, function (t) {
              return ((i + ((t - e) % i)) % i) + e;
            });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
          n = 2 * i;
        return tt(e)
          ? Za(e, wrapYoyo(0, e.length - 1), t)
          : Ja(r, function (t) {
              return e + (i < (t = (n + ((t - e) % n)) % n || 0) ? n - t : t);
            });
      },
      distribute: Sa,
      random: Va,
      snap: Ua,
      normalize: function normalize(t, e, r) {
        return wt(t, e, 0, 1, r);
      },
      getUnit: La,
      clamp: function clamp(e, r, t) {
        return Ja(t, function (t) {
          return yt(e, r, t);
        });
      },
      splitColor: lb,
      toArray: bt,
      mapRange: wt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || La(t));
        };
      },
      interpolate: function interpolate(e, r, t, i) {
        var a = isNaN(e + r)
          ? 0
          : function (t) {
              return (1 - t) * e + t * r;
            };
        if (!a) {
          var s,
            o,
            u,
            h,
            l,
            f = n(e),
            d = {};
          if ((!0 === t && (i = 1) && (t = null), f))
            (e = { p: e }), (r = { p: r });
          else if (tt(e) && !tt(r)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++)
              u.push(interpolate(e[o - 1], e[o]));
            h--,
              (a = function func(t) {
                t *= h;
                var e = Math.min(l, ~~t);
                return u[e](t - e);
              }),
              (t = r);
          } else i || (e = mt(tt(e) ? [] : {}, e));
          if (!u) {
            for (s in r) Yt.call(d, e, s, "get", r[s]);
            a = function func(t) {
              return Kt(t, d) || (f ? e.p : e);
            };
          }
        }
        return Ja(t, a);
      },
      shuffle: Ra,
    },
    install: K,
    effects: dt,
    ticker: At,
    updateRoot: Bt.updateRoot,
    plugins: ft,
    globalTimeline: E,
    core: {
      PropTween: ie,
      globals: N,
      Tween: Xt,
      Timeline: Bt,
      Animation: Lt,
      getCache: Z,
      _removeLinkedListItem: pa,
    },
  };
  _("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (ne[t] = Xt[t]);
  }),
    At.add(Bt.updateRoot),
    (c = ne.to({}, { duration: 0 }));
  function ic(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
      r = r._next;
    return r;
  }
  function kc(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, i, e) {
        e._onInit = function (t) {
          var e, r;
          if (
            (n(i) &&
              ((e = {}),
              _(i, function (t) {
                return (e[t] = 1);
              }),
              (i = e)),
            a)
          ) {
            for (r in ((e = {}), i)) e[r] = a(i[r]);
            i = e;
          }
          !(function _addModifiers(t, e) {
            var r,
              i,
              n,
              a = t._targets;
            for (r in e)
              for (i = a.length; i--; )
                (n = (n = t._ptLookup[i][r]) && n.d) &&
                  (n._pt && (n = ic(n, r)),
                  n && n.modifier && n.modifier(e[r], t, a[i], r));
          })(t, i);
        };
      },
    };
  }
  var ae =
    ne.registerPlugin(
      {
        name: "attr",
        init: function init(t, e, r, i, n) {
          var a, s;
          for (a in e)
            (s = this.add(
              t,
              "setAttribute",
              (t.getAttribute(a) || 0) + "",
              e[a],
              i,
              n,
              0,
              0,
              a
            )) && (s.op = a),
              this._props.push(a);
        },
      },
      {
        name: "endArray",
        init: function init(t, e) {
          for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
        },
      },
      kc("roundProps", Ta),
      kc("modifiers"),
      kc("snap", Ua)
    ) || ne;
  (Xt.version = Bt.version = ae.version = "3.5.1"), (f = 1), t() && Pt();
  function Vc(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function Wc(t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
      e
    );
  }
  function Xc(t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
      e
    );
  }
  function Yc(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function Zc(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function $c(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function _c(t, e, r) {
    return (t.style[e] = r);
  }
  function ad(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function bd(t, e, r) {
    return (t._gsap[e] = r);
  }
  function cd(t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  }
  function dd(t, e, r, i, n) {
    var a = t._gsap;
    (a.scaleX = a.scaleY = r), a.renderTransform(n, a);
  }
  function ed(t, e, r, i, n) {
    var a = t._gsap;
    (a[e] = r), a.renderTransform(n, a);
  }
  function id(t, e) {
    var r = oe.createElementNS
      ? oe.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : oe.createElement(t);
    return r.style ? r : oe.createElement(t);
  }
  function jd(t, e, r) {
    var i = getComputedStyle(t);
    return (
      i[e] ||
      i.getPropertyValue(e.replace(Ie, "-$1").toLowerCase()) ||
      i.getPropertyValue(e) ||
      (!r && jd(t, Ue(e) || e, 1)) ||
      ""
    );
  }
  function md() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() &&
      window.document &&
      ((se = window),
      (oe = se.document),
      (ue = oe.documentElement),
      (le = id("div") || { style: {} }),
      (fe = id("div")),
      (Ye = Ue(Ye)),
      (Ne = Ye + "Origin"),
      (le.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (pe = !!Ue("perspective")),
      (he = 1));
  }
  function nd(t) {
    var e,
      r = id(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      n = this.nextSibling,
      a = this.style.cssText;
    if (
      (ue.appendChild(r),
      r.appendChild(this),
      (this.style.display = "block"),
      t)
    )
      try {
        (e = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = nd);
      } catch (t) {}
    else this._gsapBBox && (e = this._gsapBBox());
    return (
      i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
      ue.removeChild(r),
      (this.style.cssText = a),
      e
    );
  }
  function od(t, e) {
    for (var r = e.length; r--; )
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function pd(e) {
    var r;
    try {
      r = e.getBBox();
    } catch (t) {
      r = nd.call(e, !0);
    }
    return (
      (r && (r.width || r.height)) || e.getBBox === nd || (r = nd.call(e, !0)),
      !r || r.width || r.x || r.y
        ? r
        : {
            x: +od(e, ["x", "cx", "x1"]) || 0,
            y: +od(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
    );
  }
  function qd(t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !pd(t));
  }
  function rd(t, e) {
    if (e) {
      var r = t.style;
      e in ze && e !== Ne && (e = Ye),
        r.removeProperty
          ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            r.removeProperty(e.replace(Ie, "-$1").toLowerCase()))
          : r.removeAttribute(e);
    }
  }
  function sd(t, e, r, i, n, a) {
    var s = new ie(t._pt, e, r, 0, 1, a ? $c : Zc);
    return ((t._pt = s).b = i), (s.e = n), t._props.push(r), s;
  }
  function ud(t, e, r, i) {
    var n,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = le.style,
      f = Le.test(e),
      d = "svg" === t.tagName.toLowerCase(),
      p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
      _ = "px" === i,
      c = "%" === i;
    return i === h || !u || Ve[i] || Ve[h]
      ? u
      : ("px" === h || _ || (u = ud(t, e, r, "px")),
        (o = t.getCTM && qd(t)),
        c && (ze[e] || ~e.indexOf("adius"))
          ? aa((u / (o ? t.getBBox()[f ? "width" : "height"] : t[p])) * 100)
          : ((l[f ? "width" : "height"] = 100 + (_ ? h : i)),
            (a =
              ~e.indexOf("adius") || ("em" === i && t.appendChild && !d)
                ? t
                : t.parentNode),
            o && (a = (t.ownerSVGElement || {}).parentNode),
            (a && a !== oe && a.appendChild) || (a = oe.body),
            (s = a._gsap) && c && s.width && f && s.time === At.time
              ? aa((u / s.width) * 100)
              : ((!c && "%" !== h) || (l.position = jd(t, "position")),
                a === t && (l.position = "static"),
                a.appendChild(le),
                (n = le[p]),
                a.removeChild(le),
                (l.position = "absolute"),
                f && c && (((s = Z(a)).time = At.time), (s.width = a[p])),
                aa(_ ? (n * u) / 100 : n && u ? (100 / n) * u : 0))));
  }
  function vd(t, e, r, i) {
    var n;
    return (
      he || md(),
      e in qe &&
        "transform" !== e &&
        ~(e = qe[e]).indexOf(",") &&
        (e = e.split(",")[0]),
      ze[e] && "transform" !== e
        ? ((n = Qe(t, i)),
          (n =
            "transformOrigin" !== e
              ? n[e]
              : We(jd(t, Ne)) + " " + n.zOrigin + "px"))
        : ((n = t.style[e]) &&
            "auto" !== n &&
            !i &&
            !~(n + "").indexOf("calc(")) ||
          (n =
            (Ge[e] && Ge[e](t, e, r)) ||
            jd(t, e) ||
            $(t, e) ||
            ("opacity" === e ? 1 : 0)),
      r && !~(n + "").indexOf(" ") ? ud(t, e, n, r) + r : n
    );
  }
  function wd(t, e, r, i) {
    if (!r || "none" === r) {
      var n = Ue(e, t, 1),
        a = n && jd(t, n, 1);
      a && a !== r
        ? ((e = n), (r = a))
        : "borderColor" === e && (r = jd(t, "borderTopColor"));
    }
    var s,
      o,
      u,
      h,
      l,
      f,
      d,
      p,
      _,
      c,
      m,
      g,
      v = new ie(this._pt, t.style, e, 0, 1, Ht),
      y = 0,
      T = 0;
    if (
      ((v.b = r),
      (v.e = i),
      (r += ""),
      "auto" === (i += "") &&
        ((t.style[e] = i), (i = jd(t, e) || i), (t.style[e] = r)),
      qb((s = [r, i])),
      (i = s[1]),
      (u = (r = s[0]).match(it) || []),
      (i.match(it) || []).length)
    ) {
      for (; (o = it.exec(i)); )
        (d = o[0]),
          (_ = i.substring(y, o.index)),
          l
            ? (l = (l + 1) % 5)
            : ("rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5)) || (l = 1),
          d !== (f = u[T++] || "") &&
            ((h = parseFloat(f) || 0),
            (m = f.substr((h + "").length)),
            (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) &&
              (d = d.substr(2)),
            (p = parseFloat(d)),
            (c = d.substr((p + "").length)),
            (y = it.lastIndex - c.length),
            c ||
              ((c = c || j.units[e] || m),
              y === i.length && ((i += c), (v.e += c))),
            m !== c && (h = ud(t, e, f, c) || 0),
            (v._pt = {
              _next: v._pt,
              p: _ || 1 === T ? _ : ",",
              s: h,
              c: g ? g * p : p - h,
              m: l && l < 4 ? Math.round : 0,
            }));
      v.c = y < i.length ? i.substring(y, i.length) : "";
    } else v.r = "display" === e && "none" === i ? $c : Zc;
    return at.test(i) && (v.e = 0), (this._pt = v);
  }
  function yd(t) {
    var e = t.split(" "),
      r = e[0],
      i = e[1] || "50%";
    return (
      ("top" !== r && "bottom" !== r && "left" !== i && "right" !== i) ||
        ((t = r), (r = i), (i = t)),
      (e[0] = Xe[r] || r),
      (e[1] = Xe[i] || i),
      e.join(" ")
    );
  }
  function zd(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        i,
        n,
        a = e.t,
        s = a.style,
        o = e.u,
        u = a._gsap;
      if ("all" === o || !0 === o) (s.cssText = ""), (i = 1);
      else
        for (n = (o = o.split(",")).length; -1 < --n; )
          (r = o[n]),
            ze[r] && ((i = 1), (r = "transformOrigin" === r ? Ne : Ye)),
            rd(a, r);
      i &&
        (rd(a, Ye),
        u &&
          (u.svg && a.removeAttribute("transform"), Qe(a, 1), (u.uncache = 1)));
    }
  }
  function Dd(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function Ed(t) {
    var e = jd(t, Ye);
    return Dd(e) ? Ze : e.substr(7).match(rt).map(aa);
  }
  function Fd(t, e) {
    var r,
      i,
      n,
      a,
      s = t._gsap || Z(t),
      o = t.style,
      u = Ed(t);
    return s.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (u = [
          (n = t.transform.baseVal.consolidate().matrix).a,
          n.b,
          n.c,
          n.d,
          n.e,
          n.f,
        ]).join(",")
        ? Ze
        : u
      : (u !== Ze ||
          t.offsetParent ||
          t === ue ||
          s.svg ||
          ((n = o.display),
          (o.display = "block"),
          ((r = t.parentNode) && t.offsetParent) ||
            ((a = 1), (i = t.nextSibling), ue.appendChild(t)),
          (u = Ed(t)),
          n ? (o.display = n) : rd(t, "display"),
          a &&
            (i
              ? r.insertBefore(t, i)
              : r
              ? r.appendChild(t)
              : ue.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function Gd(t, e, r, i, n, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = n || Fd(t, !0),
      f = h.xOrigin || 0,
      d = h.yOrigin || 0,
      p = h.xOffset || 0,
      _ = h.yOffset || 0,
      c = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      T = l[5],
      b = e.split(" "),
      w = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0;
    r
      ? l !== Ze &&
        (o = c * v - m * g) &&
        ((u = w * (-m / o) + x * (c / o) - (c * T - m * y) / o),
        (w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o),
        (x = u))
      : ((w = (s = pd(t)).x + (~b[0].indexOf("%") ? (w / 100) * s.width : w)),
        (x = s.y + (~(b[1] || b[0]).indexOf("%") ? (x / 100) * s.height : x))),
      i || (!1 !== i && h.smooth)
        ? ((y = w - f),
          (T = x - d),
          (h.xOffset = p + (y * c + T * g) - y),
          (h.yOffset = _ + (y * m + T * v) - T))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = w),
      (h.yOrigin = x),
      (h.smooth = !!i),
      (h.origin = e),
      (h.originIsAbsolute = !!r),
      (t.style[Ne] = "0px 0px"),
      a &&
        (sd(a, h, "xOrigin", f, w),
        sd(a, h, "yOrigin", d, x),
        sd(a, h, "xOffset", p, h.xOffset),
        sd(a, h, "yOffset", _, h.yOffset)),
      t.setAttribute("data-svg-origin", w + " " + x);
  }
  function Jd(t, e, r) {
    var i = La(e);
    return aa(parseFloat(e) + parseFloat(ud(t, "x", r + "px", i))) + i;
  }
  function Qd(t, e, r, i, a, s) {
    var o,
      u,
      h = 360,
      l = n(a),
      f = parseFloat(a) * (l && ~a.indexOf("rad") ? Fe : 1),
      d = s ? f * s : f - i,
      p = i + d + "deg";
    return (
      l &&
        ("short" === (o = a.split("_")[1]) &&
          (d %= h) !== d % 180 &&
          (d += d < 0 ? h : -h),
        "cw" === o && d < 0
          ? (d = ((d + 36e9) % h) - ~~(d / h) * h)
          : "ccw" === o && 0 < d && (d = ((d - 36e9) % h) - ~~(d / h) * h)),
      (t._pt = u = new ie(t._pt, e, r, i, d, Wc)),
      (u.e = p),
      (u.u = "deg"),
      t._props.push(r),
      u
    );
  }
  function Rd(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l = fe.style,
      f = r._gsap;
    for (n in ((l.cssText =
      getComputedStyle(r).cssText + ";position:absolute;display:block;"),
    (l[Ye] = e),
    oe.body.appendChild(fe),
    (i = Qe(fe, 1)),
    ze))
      (a = f[n]) !== (s = i[n]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
        ((o = La(a) !== (h = La(s)) ? ud(r, n, a, h) : parseFloat(a)),
        (u = parseFloat(s)),
        (t._pt = new ie(t._pt, f, n, o, u - o, Vc)),
        (t._pt.u = h || 0),
        t._props.push(n));
    oe.body.removeChild(fe);
  }
  var se,
    oe,
    ue,
    he,
    le,
    fe,
    de,
    pe,
    _e = Dt.Power0,
    ce = Dt.Power1,
    me = Dt.Power2,
    ge = Dt.Power3,
    ve = Dt.Power4,
    ye = Dt.Linear,
    Te = Dt.Quad,
    be = Dt.Cubic,
    we = Dt.Quart,
    xe = Dt.Quint,
    ke = Dt.Strong,
    Oe = Dt.Elastic,
    Me = Dt.Back,
    Ce = Dt.SteppedEase,
    Ae = Dt.Bounce,
    Pe = Dt.Sine,
    De = Dt.Expo,
    Se = Dt.Circ,
    ze = {},
    Fe = 180 / Math.PI,
    Re = Math.PI / 180,
    Ee = Math.atan2,
    Ie = /([A-Z])/g,
    Le = /(?:left|right|width|margin|padding|x)/i,
    Be = /[\s,\(]\S/,
    qe = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Ye = "transform",
    Ne = Ye + "Origin",
    je = "O,Moz,ms,Ms,Webkit".split(","),
    Ue = function _checkPropPrefix(t, e, r) {
      var i = (e || le).style,
        n = 5;
      if (t in i && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(je[n] + t in i);

      );
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? je[n] : "") + t;
    },
    Ve = { deg: 1, rad: 1, turn: 1 },
    Xe = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Ge = {
      clearProps: function clearProps(t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var a = (t._pt = new ie(t._pt, e, r, 0, 0, zd));
          return (a.u = i), (a.pr = -10), (a.tween = n), t._props.push(r), 1;
        }
      },
    },
    Ze = [1, 0, 0, 1, 0, 0],
    Je = {},
    Qe = function _parseTransform(t, e) {
      var r = t._gsap || new It(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        p,
        _,
        c,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        k,
        O,
        M,
        C,
        A,
        P,
        D,
        S,
        z,
        F,
        R,
        E = t.style,
        I = r.scaleX < 0,
        L = "deg",
        B = jd(t, Ne) || "0";
      return (
        (i = n = a = u = h = l = f = d = p = 0),
        (s = o = 1),
        (r.svg = !(!t.getCTM || !qd(t))),
        (m = Fd(t, r.svg)),
        r.svg &&
          ((M = !r.uncache && t.getAttribute("data-svg-origin")),
          Gd(t, M || B, !!M || r.originIsAbsolute, !1 !== r.smooth, m)),
        (_ = r.xOrigin || 0),
        (c = r.yOrigin || 0),
        m !== Ze &&
          ((T = m[0]),
          (b = m[1]),
          (w = m[2]),
          (x = m[3]),
          (i = k = m[4]),
          (n = O = m[5]),
          6 === m.length
            ? ((s = Math.sqrt(T * T + b * b)),
              (o = Math.sqrt(x * x + w * w)),
              (u = T || b ? Ee(b, T) * Fe : 0),
              (f = w || x ? Ee(w, x) * Fe + u : 0) && (o *= Math.cos(f * Re)),
              r.svg && ((i -= _ - (_ * T + c * w)), (n -= c - (_ * b + c * x))))
            : ((R = m[6]),
              (z = m[7]),
              (P = m[8]),
              (D = m[9]),
              (S = m[10]),
              (F = m[11]),
              (i = m[12]),
              (n = m[13]),
              (a = m[14]),
              (h = (g = Ee(R, S)) * Fe),
              g &&
                ((M = k * (v = Math.cos(-g)) + P * (y = Math.sin(-g))),
                (C = O * v + D * y),
                (A = R * v + S * y),
                (P = k * -y + P * v),
                (D = O * -y + D * v),
                (S = R * -y + S * v),
                (F = z * -y + F * v),
                (k = M),
                (O = C),
                (R = A)),
              (l = (g = Ee(-w, S)) * Fe),
              g &&
                ((v = Math.cos(-g)),
                (F = x * (y = Math.sin(-g)) + F * v),
                (T = M = T * v - P * y),
                (b = C = b * v - D * y),
                (w = A = w * v - S * y)),
              (u = (g = Ee(b, T)) * Fe),
              g &&
                ((M = T * (v = Math.cos(g)) + b * (y = Math.sin(g))),
                (C = k * v + O * y),
                (b = b * v - T * y),
                (O = O * v - k * y),
                (T = M),
                (k = C)),
              h &&
                359.9 < Math.abs(h) + Math.abs(u) &&
                ((h = u = 0), (l = 180 - l)),
              (s = aa(Math.sqrt(T * T + b * b + w * w))),
              (o = aa(Math.sqrt(O * O + R * R))),
              (g = Ee(k, O)),
              (f = 2e-4 < Math.abs(g) ? g * Fe : 0),
              (p = F ? 1 / (F < 0 ? -F : F) : 0)),
          r.svg &&
            ((M = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !Dd(jd(t, Ye))),
            M && t.setAttribute("transform", M))),
        90 < Math.abs(f) &&
          Math.abs(f) < 270 &&
          (I
            ? ((s *= -1),
              (f += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((o *= -1), (f += f <= 0 ? 180 : -180))),
        (r.x =
          ((r.xPercent =
            i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)
            ? 0
            : i) + "px"),
        (r.y =
          ((r.yPercent =
            n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)
            ? 0
            : n) + "px"),
        (r.z = a + "px"),
        (r.scaleX = aa(s)),
        (r.scaleY = aa(o)),
        (r.rotation = aa(u) + L),
        (r.rotationX = aa(h) + L),
        (r.rotationY = aa(l) + L),
        (r.skewX = f + L),
        (r.skewY = d + L),
        (r.transformPerspective = p + "px"),
        (r.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (E[Ne] = We(B)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = j.force3D),
        (r.renderTransform = r.svg ? rr : pe ? er : $e),
        (r.uncache = 0),
        r
      );
    },
    We = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    $e = function _renderNon3DTransforms(t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        er(t, e);
    },
    He = "0deg",
    Ke = "0px",
    tr = ") ",
    er = function _renderCSSTransforms(t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        p = r.scaleX,
        _ = r.scaleY,
        c = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (l !== He || h !== He)) {
        var b,
          w = parseFloat(h) * Re,
          x = Math.sin(w),
          k = Math.cos(w);
        (w = parseFloat(l) * Re),
          (b = Math.cos(w)),
          (a = Jd(g, a, x * b * -v)),
          (s = Jd(g, s, -Math.sin(w) * -v)),
          (o = Jd(g, o, k * b * -v + v));
      }
      c !== Ke && (y += "perspective(" + c + tr),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        (!T && a === Ke && s === Ke && o === Ke) ||
          (y +=
            o !== Ke || T
              ? "translate3d(" + a + ", " + s + ", " + o + ") "
              : "translate(" + a + ", " + s + tr),
        u !== He && (y += "rotate(" + u + tr),
        h !== He && (y += "rotateY(" + h + tr),
        l !== He && (y += "rotateX(" + l + tr),
        (f === He && d === He) || (y += "skew(" + f + ", " + d + tr),
        (1 === p && 1 === _) || (y += "scale(" + p + ", " + _ + tr),
        (g.style[Ye] = y || "translate(0, 0)");
    },
    rr = function _renderSVGTransforms(t, e) {
      var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        d = o.rotation,
        p = o.skewX,
        _ = o.skewY,
        c = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        k = parseFloat(f);
      (d = parseFloat(d)),
        (p = parseFloat(p)),
        (_ = parseFloat(_)) && ((p += _ = parseFloat(_)), (d += _)),
        d || p
          ? ((d *= Re),
            (p *= Re),
            (r = Math.cos(d) * c),
            (i = Math.sin(d) * c),
            (n = Math.sin(d - p) * -m),
            (a = Math.cos(d - p) * m),
            p &&
              ((_ *= Re),
              (s = Math.tan(p - _)),
              (n *= s = Math.sqrt(1 + s * s)),
              (a *= s),
              _ &&
                ((s = Math.tan(_)), (r *= s = Math.sqrt(1 + s * s)), (i *= s))),
            (r = aa(r)),
            (i = aa(i)),
            (n = aa(n)),
            (a = aa(a)))
          : ((r = c), (a = m), (i = n = 0)),
        ((x && !~(l + "").indexOf("px")) || (k && !~(f + "").indexOf("px"))) &&
          ((x = ud(g, "x", l, "px")), (k = ud(g, "y", f, "px"))),
        (v || y || T || b) &&
          ((x = aa(x + v - (v * r + y * n) + T)),
          (k = aa(k + y - (v * i + y * a) + b))),
        (u || h) &&
          ((s = g.getBBox()),
          (x = aa(x + (u / 100) * s.width)),
          (k = aa(k + (h / 100) * s.height))),
        (s =
          "matrix(" +
          r +
          "," +
          i +
          "," +
          n +
          "," +
          a +
          "," +
          x +
          "," +
          k +
          ")"),
        g.setAttribute("transform", s),
        w && (g.style[Ye] = s);
    };
  _("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
      i = "Bottom",
      n = "Left",
      o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(
        function (t) {
          return r < 2 ? e + t : "border" + t + e;
        }
      );
    Ge[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4)
        return (
          (a = o.map(function (t) {
            return vd(e, t, r);
          })),
          5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s
        );
      (a = (i + "").split(" ")),
        (s = {}),
        o.forEach(function (t, e) {
          return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        e.init(t, s, n);
    };
  });
  var ir,
    nr,
    ar,
    sr = {
      name: "css",
      register: md,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, r, i, n) {
        var a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          p,
          _,
          c,
          m,
          g,
          v,
          y,
          T = this._props,
          b = t.style;
        for (f in (he || md(), e))
          if (
            "autoRound" !== f &&
            ((s = e[f]), !ft[f] || !Nb(f, e, r, i, t, n))
          )
            if (
              ((h = typeof s),
              (l = Ge[f]),
              "function" === h && (h = typeof (s = s.call(r, i, t, n))),
              "string" === h && ~s.indexOf("random(") && (s = ab(s)),
              l)
            )
              l(this, t, f, s, r) && (y = 1);
            else if ("--" === f.substr(0, 2))
              this.add(
                b,
                "setProperty",
                getComputedStyle(t).getPropertyValue(f) + "",
                s + "",
                i,
                n,
                0,
                0,
                f
              );
            else if ("undefined" !== h) {
              if (
                ((a = vd(t, f)),
                (u = parseFloat(a)),
                (_ =
                  "string" === h && "=" === s.charAt(1)
                    ? +(s.charAt(0) + "1")
                    : 0) && (s = s.substr(2)),
                (o = parseFloat(s)),
                f in qe &&
                  ("autoAlpha" === f &&
                    (1 === u &&
                      "hidden" === vd(t, "visibility") &&
                      o &&
                      (u = 0),
                    sd(
                      this,
                      b,
                      "visibility",
                      u ? "inherit" : "hidden",
                      o ? "inherit" : "hidden",
                      !o
                    )),
                  "scale" !== f &&
                    "transform" !== f &&
                    ~(f = qe[f]).indexOf(",") &&
                    (f = f.split(",")[0])),
                (c = f in ze))
              )
                if (
                  (m ||
                    ((g = t._gsap).renderTransform || Qe(t),
                    (v = !1 !== e.smoothOrigin && g.smooth),
                    ((m = this._pt =
                      new ie(
                        this._pt,
                        b,
                        Ye,
                        0,
                        1,
                        g.renderTransform,
                        g,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === f)
                )
                  (this._pt = new ie(
                    this._pt,
                    g,
                    "scaleY",
                    g.scaleY,
                    _ ? _ * o : o - g.scaleY
                  )),
                    T.push("scaleY", f),
                    (f += "X");
                else {
                  if ("transformOrigin" === f) {
                    (s = yd(s)),
                      g.svg
                        ? Gd(t, s, 0, v, 0, this)
                        : ((p = parseFloat(s.split(" ")[2]) || 0) !==
                            g.zOrigin && sd(this, g, "zOrigin", g.zOrigin, p),
                          sd(this, b, f, We(a), We(s)));
                    continue;
                  }
                  if ("svgOrigin" === f) {
                    Gd(t, s, 1, v, 0, this);
                    continue;
                  }
                  if (f in Je) {
                    Qd(this, g, f, u, s, _);
                    continue;
                  }
                  if ("smoothOrigin" === f) {
                    sd(this, g, "smooth", g.smooth, s);
                    continue;
                  }
                  if ("force3D" === f) {
                    g[f] = s;
                    continue;
                  }
                  if ("transform" === f) {
                    Rd(this, s, t);
                    continue;
                  }
                }
              else f in b || (f = Ue(f) || f);
              if (
                c ||
                ((o || 0 === o) && (u || 0 === u) && !Be.test(s) && f in b)
              )
                (o = o || 0),
                  (d = (a + "").substr((u + "").length)) !==
                    (p = La(s) || (f in j.units ? j.units[f] : d)) &&
                    (u = ud(t, f, a, p)),
                  (this._pt = new ie(
                    this._pt,
                    c ? g : b,
                    f,
                    u,
                    _ ? _ * o : o - u,
                    "px" !== p || !1 === e.autoRound || c ? Vc : Yc
                  )),
                  (this._pt.u = p || 0),
                  d !== p && ((this._pt.b = a), (this._pt.r = Xc));
              else if (f in b) wd.call(this, t, f, a, s);
              else {
                if (!(f in t)) {
                  L(f, s);
                  continue;
                }
                this.add(t, f, t[f], s, i, n);
              }
              T.push(f);
            }
        y && re(this);
      },
      get: vd,
      aliases: qe,
      getSetter: function getSetter(t, e, r) {
        var i = qe[e];
        return (
          i && i.indexOf(",") < 0 && (e = i),
          e in ze && e !== Ne && (t._gsap.x || vd(t, "x"))
            ? r && de === r
              ? "scale" === e
                ? cd
                : bd
              : (de = r || {}) && ("scale" === e ? dd : ed)
            : t.style && !q(t.style[e])
            ? _c
            : ~e.indexOf("-")
            ? ad
            : Qt(t, e)
        );
      },
      core: { _removeProperty: rd, _getMatrix: Fd },
    };
  (ae.utils.checkPrefix = Ue),
    (ar = _(
      (ir = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (nr = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        ze[t] = 1;
      }
    )),
    _(nr, function (t) {
      (j.units[t] = "deg"), (Je[t] = 1);
    }),
    (qe[ar[13]] = ir + "," + nr),
    _(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        qe[e[1]] = ar[e[0]];
      }
    ),
    _(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        j.units[t] = "px";
      }
    ),
    ae.registerPlugin(sr);
  var or = ae.registerPlugin(sr) || ae,
    ur = or.core.Tween;
  (e.Back = Me),
    (e.Bounce = Ae),
    (e.CSSPlugin = sr),
    (e.Circ = Se),
    (e.Cubic = be),
    (e.Elastic = Oe),
    (e.Expo = De),
    (e.Linear = ye),
    (e.Power0 = _e),
    (e.Power1 = ce),
    (e.Power2 = me),
    (e.Power3 = ge),
    (e.Power4 = ve),
    (e.Quad = Te),
    (e.Quart = we),
    (e.Quint = xe),
    (e.Sine = Pe),
    (e.SteppedEase = Ce),
    (e.Strong = ke),
    (e.TimelineLite = Bt),
    (e.TimelineMax = Bt),
    (e.TweenLite = Xt),
    (e.TweenMax = ur),
    (e.default = or),
    (e.gsap = or);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

/*!
 * ScrollTrigger 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function q() {
    return (
      we ||
      ("undefined" != typeof window &&
        (we = window.gsap) &&
        we.registerPlugin &&
        we)
    );
  }
  function y(e, t) {
    return ~Fe.indexOf(e) && Fe[Fe.indexOf(e) + 1][t];
  }
  function z(e) {
    return !!~t.indexOf(e);
  }
  function A(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function B(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function E() {
    return (ze && ze.isPressed) || Le.cache++;
  }
  function F(r, n) {
    function Sc(e) {
      if (e || 0 === e) {
        o && (Ae.history.scrollRestoration = "manual");
        var t = ze && ze.isPressed;
        (e = Sc.v = Math.round(e) || (ze && ze.iOS ? 1 : 0)),
          r(e),
          (Sc.cacheID = Le.cache),
          t && i("ss", e);
      } else (n || Le.cache !== Sc.cacheID || i("ref")) && ((Sc.cacheID = Le.cache), (Sc.v = r()));
      return Sc.v + Sc.offset;
    }
    return (Sc.offset = 0), r && Sc;
  }
  function I(e) {
    return (
      we.utils.toArray(e)[0] ||
      ("string" == typeof e && !1 !== we.config().nullTargetWarn
        ? console.warn("Element not found:", e)
        : null)
    );
  }
  function J(t, e) {
    var r = e.s,
      n = e.sc;
    z(t) && (t = Ee.scrollingElement || Me);
    var o = Le.indexOf(t),
      i = n === Ne.sc ? 1 : 2;
    ~o || (o = Le.push(t) - 1), Le[o + i] || t.addEventListener("scroll", E);
    var a = Le[o + i],
      s =
        a ||
        (Le[o + i] =
          F(y(t, r), !0) ||
          (z(t)
            ? n
            : F(function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              })));
    return (
      (s.target = t),
      a || (s.smooth = "smooth" === we.getProperty(t, "scrollBehavior")),
      s
    );
  }
  function K(e, t, o) {
    function od(e, t) {
      var r = He();
      t || n < r - s
        ? ((a = i), (i = e), (l = s), (s = r))
        : o
        ? (i += e)
        : (i = a + ((e - a) / (r - l)) * (s - l));
    }
    var i = e,
      a = e,
      s = He(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: od,
      reset: function reset() {
        (a = i = o ? 0 : i), (l = s = 0);
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = He();
        return (
          (!e && 0 !== e) || e === i || od(e),
          s === l || c < n - l
            ? 0
            : ((i + (o ? r : -r)) / ((o ? n : s) - t)) * 1e3
        );
      },
    };
  }
  function L(e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  }
  function M(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function N() {
    (Ie = we.core.globals().ScrollTrigger) &&
      Ie.core &&
      (function _integrate() {
        var e = Ie.core,
          r = e.bridge || {},
          t = e._scrollers,
          n = e._proxies;
        t.push.apply(t, Le),
          n.push.apply(n, Fe),
          (Le = t),
          (Fe = n),
          (i = function _bridge(e, t) {
            return r[e](t);
          });
      })();
  }
  function O(e) {
    return (
      (we = e || q()) &&
        "undefined" != typeof document &&
        document.body &&
        ((Ae = window),
        (Me = (Ee = document).documentElement),
        (Ce = Ee.body),
        (t = [Ae, Ee, Me, Ce]),
        we.utils.clamp,
        (De = "onpointerenter" in Ce ? "pointer" : "mouse"),
        (Oe = k.isTouch =
          Ae.matchMedia &&
          Ae.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Ae ||
              0 < navigator.maxTouchPoints ||
              0 < navigator.msMaxTouchPoints
            ? 2
            : 0),
        (Be = k.eventTypes =
          (
            "ontouchstart" in Me
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Me
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (o = 0);
        }, 500),
        N(),
        (ke = 1)),
      ke
    );
  }
  var we,
    ke,
    Ae,
    Ee,
    Me,
    Ce,
    Oe,
    De,
    Ie,
    t,
    ze,
    Be,
    o = 1,
    Re = [],
    Le = [],
    Fe = [],
    He = Date.now,
    i = function _bridge(e, t) {
      return t;
    },
    r = "scrollLeft",
    n = "scrollTop",
    Je = {
      s: r,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: F(function (e) {
        return arguments.length
          ? Ae.scrollTo(e, Ne.sc())
          : Ae.pageXOffset || Ee[r] || Me[r] || Ce[r] || 0;
      }),
    },
    Ne = {
      s: n,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Je,
      sc: F(function (e) {
        return arguments.length
          ? Ae.scrollTo(Je.sc(), e)
          : Ae.pageYOffset || Ee[n] || Me[n] || Ce[n] || 0;
      }),
    };
  (Je.op = Ne), (Le.cache = 0);
  var k =
    ((Observer.prototype.init = function init(e) {
      ke || O(we) || console.warn("Please gsap.registerPlugin(Observer)"),
        Ie || N();
      var o = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        n = e.target,
        r = e.lineHeight,
        i = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        d = e.event,
        p = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        v = e.onPress,
        b = e.onRelease,
        m = e.onRight,
        y = e.onLeft,
        x = e.onUp,
        S = e.onDown,
        w = e.onChangeX,
        _ = e.onChangeY,
        T = e.onChange,
        k = e.onToggleX,
        P = e.onToggleY,
        C = e.onHover,
        D = e.onHoverEnd,
        R = e.onMove,
        X = e.ignoreCheck,
        F = e.isNormalizer,
        Y = e.onGestureStart,
        H = e.onGestureEnd,
        V = e.onWheel,
        W = e.onEnable,
        j = e.onDisable,
        q = e.onClick,
        U = e.scrollSpeed,
        G = e.capture,
        $ = e.allowClicks,
        Q = e.lockAxis,
        Z = e.onLockAxis;
      function Pe() {
        return (ye = He());
      }
      function Qe(e, t) {
        return (
          ((se.event = e) && u && ~u.indexOf(e.target)) ||
          (t && ge && "touch" !== e.pointerType) ||
          (X && X(e, t))
        );
      }
      function Se() {
        var e = (se.deltaX = M(be)),
          t = (se.deltaY = M(me)),
          r = Math.abs(e) >= o,
          n = Math.abs(t) >= o;
        T && (r || n) && T(se, e, t, be, me),
          r &&
            (m && 0 < se.deltaX && m(se),
            y && se.deltaX < 0 && y(se),
            w && w(se),
            k && se.deltaX < 0 != le < 0 && k(se),
            (le = se.deltaX),
            (be[0] = be[1] = be[2] = 0)),
          n &&
            (S && 0 < se.deltaY && S(se),
            x && se.deltaY < 0 && x(se),
            _ && _(se),
            P && se.deltaY < 0 != ce < 0 && P(se),
            (ce = se.deltaY),
            (me[0] = me[1] = me[2] = 0)),
          (ne || re) && (R && R(se), re && (h(se), (re = !1)), (ne = !1)),
          ie && !(ie = !1) && Z && Z(se),
          oe && (V(se), (oe = !1)),
          (ee = 0);
      }
      function Te(e, t, r) {
        (be[r] += e),
          (me[r] += t),
          se._vx.update(e),
          se._vy.update(t),
          i ? (ee = ee || requestAnimationFrame(Se)) : Se();
      }
      function Ue(e, t) {
        Q &&
          !ae &&
          ((se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y"), (ie = !0)),
          "y" !== ae && ((be[2] += e), se._vx.update(e, !0)),
          "x" !== ae && ((me[2] += t), se._vy.update(t, !0)),
          i ? (ee = ee || requestAnimationFrame(Se)) : Se();
      }
      function Ve(e) {
        if (!Qe(e, 1)) {
          var t = (e = L(e, s)).clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y,
            i = se.isDragging;
          (se.x = t),
            (se.y = r),
            (i ||
              Math.abs(se.startX - t) >= a ||
              Math.abs(se.startY - r) >= a) &&
              (h && (re = !0),
              i || (se.isDragging = !0),
              Ue(n, o),
              i || (p && p(se)));
        }
      }
      function Xe(t) {
        if (!Qe(t, 1)) {
          B(F ? n : ve, Be[1], Ve, !0);
          var e =
              se.isDragging &&
              (3 < Math.abs(se.x - se.startX) ||
                3 < Math.abs(se.y - se.startY)),
            r = L(t);
          e ||
            (se._vx.reset(),
            se._vy.reset(),
            s &&
              $ &&
              we.delayedCall(0.08, function () {
                if (300 < He() - ye && !t.defaultPrevented)
                  if (t.target.click) t.target.click();
                  else if (ve.createEvent) {
                    var e = ve.createEvent("MouseEvents");
                    e.initMouseEvent(
                      "click",
                      !0,
                      !0,
                      Ae,
                      1,
                      r.screenX,
                      r.screenY,
                      r.clientX,
                      r.clientY,
                      !1,
                      !1,
                      !1,
                      !1,
                      0,
                      null
                    ),
                      t.target.dispatchEvent(e);
                  }
              })),
            (se.isDragging = se.isGesturing = se.isPressed = !1),
            l && !F && te.restart(!0),
            g && e && g(se),
            b && b(se, e);
        }
      }
      function Ye(e) {
        return (
          e.touches &&
          1 < e.touches.length &&
          (se.isGesturing = !0) &&
          Y(e, se.isDragging)
        );
      }
      function Ze() {
        return (se.isGesturing = !1) || H(se);
      }
      function $e(e) {
        if (!Qe(e)) {
          var t = ue(),
            r = fe();
          Te((t - de) * U, (r - pe) * U, 1),
            (de = t),
            (pe = r),
            l && te.restart(!0);
        }
      }
      function _e(e) {
        if (!Qe(e)) {
          (e = L(e, s)), V && (oe = !0);
          var t =
            (1 === e.deltaMode ? r : 2 === e.deltaMode ? Ae.innerHeight : 1) *
            f;
          Te(e.deltaX * t, e.deltaY * t, 0), l && !F && te.restart(!0);
        }
      }
      function af(e) {
        if (!Qe(e)) {
          var t = e.clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y;
          (se.x = t), (se.y = r), (ne = !0), (n || o) && Ue(n, o);
        }
      }
      function bf(e) {
        (se.event = e), C(se);
      }
      function cf(e) {
        (se.event = e), D(se);
      }
      function df(e) {
        return Qe(e) || (L(e, s) && q(se));
      }
      (this.target = n = I(n) || Me),
        (this.vars = e),
        (u = u && we.utils.toArray(u)),
        (o = o || 1e-9),
        (a = a || 0),
        (f = f || 1),
        (U = U || 1),
        (t = t || "wheel,touch,pointer"),
        (i = !1 !== i),
        (r = r || parseFloat(Ae.getComputedStyle(Ce).lineHeight) || 22);
      var ee,
        te,
        re,
        ne,
        oe,
        ie,
        ae,
        se = this,
        le = 0,
        ce = 0,
        ue = J(n, Je),
        fe = J(n, Ne),
        de = ue(),
        pe = fe(),
        ge =
          ~t.indexOf("touch") &&
          !~t.indexOf("pointer") &&
          "pointerdown" === Be[0],
        he = z(n),
        ve = n.ownerDocument || Ee,
        be = [0, 0, 0],
        me = [0, 0, 0],
        ye = 0,
        xe = (se.onPress = function (e) {
          Qe(e, 1) ||
            ((se.axis = ae = null),
            te.pause(),
            (se.isPressed = !0),
            (e = L(e)),
            (le = ce = 0),
            (se.startX = se.x = e.clientX),
            (se.startY = se.y = e.clientY),
            se._vx.reset(),
            se._vy.reset(),
            A(F ? n : ve, Be[1], Ve, s, !0),
            (se.deltaX = se.deltaY = 0),
            v && v(se));
        });
      (te = se._dc =
        we
          .delayedCall(c || 0.25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
          })
          .pause()),
        (se.deltaX = se.deltaY = 0),
        (se._vx = K(0, 50, !0)),
        (se._vy = K(0, 50, !0)),
        (se.scrollX = ue),
        (se.scrollY = fe),
        (se.isDragging = se.isGesturing = se.isPressed = !1),
        (se.enable = function (e) {
          return (
            se.isEnabled ||
              (A(he ? ve : n, "scroll", E),
              0 <= t.indexOf("scroll") && A(he ? ve : n, "scroll", $e, s, G),
              0 <= t.indexOf("wheel") && A(n, "wheel", _e, s, G),
              ((0 <= t.indexOf("touch") && Oe) || 0 <= t.indexOf("pointer")) &&
                (A(n, Be[0], xe, s, G),
                A(ve, Be[2], Xe),
                A(ve, Be[3], Xe),
                $ && A(n, "click", Pe, !1, !0),
                q && A(n, "click", df),
                Y && A(ve, "gesturestart", Ye),
                H && A(ve, "gestureend", Ze),
                C && A(n, De + "enter", bf),
                D && A(n, De + "leave", cf),
                R && A(n, De + "move", af)),
              (se.isEnabled = !0),
              e && e.type && xe(e),
              W && W(se)),
            se
          );
        }),
        (se.disable = function () {
          se.isEnabled &&
            (Re.filter(function (e) {
              return e !== se && z(e.target);
            }).length || B(he ? ve : n, "scroll", E),
            se.isPressed &&
              (se._vx.reset(), se._vy.reset(), B(F ? n : ve, Be[1], Ve, !0)),
            B(he ? ve : n, "scroll", $e, G),
            B(n, "wheel", _e, G),
            B(n, Be[0], xe, G),
            B(ve, Be[2], Xe),
            B(ve, Be[3], Xe),
            B(n, "click", Pe, !0),
            B(n, "click", df),
            B(ve, "gesturestart", Ye),
            B(ve, "gestureend", Ze),
            B(n, De + "enter", bf),
            B(n, De + "leave", cf),
            B(n, De + "move", af),
            (se.isEnabled = se.isPressed = se.isDragging = !1),
            j && j(se));
        }),
        (se.kill = function () {
          se.disable();
          var e = Re.indexOf(se);
          0 <= e && Re.splice(e, 1), ze === se && (ze = 0);
        }),
        Re.push(se),
        F && z(n) && (ze = se),
        se.enable(d);
    }),
    (function _createClass(e, t, r) {
      return (
        t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
      );
    })(Observer, [
      {
        key: "velocityX",
        get: function get() {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function get() {
          return this._vy.getVelocity();
        },
      },
    ]),
    Observer);
  function Observer(e) {
    this.init(e);
  }
  (k.version = "3.11.3"),
    (k.create = function (e) {
      return new k(e);
    }),
    (k.register = O),
    (k.getAll = function () {
      return Re.slice();
    }),
    (k.getById = function (t) {
      return Re.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    q() && we.registerPlugin(k);
  function xa() {
    return (ot = 1);
  }
  function ya() {
    return (ot = 0);
  }
  function za(e) {
    return e;
  }
  function Aa(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function Ba() {
    return "undefined" != typeof window;
  }
  function Ca() {
    return Ke || (Ba() && (Ke = window.gsap) && Ke.registerPlugin && Ke);
  }
  function Da(e) {
    return !!~s.indexOf(e);
  }
  function Ea(e) {
    return (
      y(e, "getBoundingClientRect") ||
      (Da(e)
        ? function () {
            return (Xt.width = We.innerWidth), (Xt.height = We.innerHeight), Xt;
          }
        : function () {
            return Mt(e);
          })
    );
  }
  function Ha(e, t) {
    var r = t.s,
      n = t.d2,
      o = t.d,
      i = t.a;
    return (r = "scroll" + n) && (i = y(e, r))
      ? i() - Ea(e)()[o]
      : Da(e)
      ? (qe[r] || Ge[r]) -
        (We["inner" + n] || qe["client" + n] || Ge["client" + n])
      : e[r] - e["offset" + n];
  }
  function Ia(e, t) {
    for (var r = 0; r < p.length; r += 3)
      (t && !~t.indexOf(p[r + 1])) || e(p[r], p[r + 1], p[r + 2]);
  }
  function Ja(e) {
    return "string" == typeof e;
  }
  function Ka(e) {
    return "function" == typeof e;
  }
  function La(e) {
    return "number" == typeof e;
  }
  function Ma(e) {
    return "object" == typeof e;
  }
  function Na(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function Oa(e, t) {
    if (e.enabled) {
      var r = t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function db(e) {
    return We.getComputedStyle(e);
  }
  function fb(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function hb(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function ib(e) {
    var t,
      r = [],
      n = e.labels,
      o = e.duration();
    for (t in n) r.push(n[t] / o);
    return r;
  }
  function kb(o) {
    var i = Ke.utils.snap(o),
      a =
        Array.isArray(o) &&
        o.slice(0).sort(function (e, t) {
          return e - t;
        });
    return a
      ? function (e, t, r) {
          var n;
          if ((void 0 === r && (r = 0.001), !t)) return i(e);
          if (0 < t) {
            for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
            return a[n - 1];
          }
          for (n = a.length, e += r; n--; ) if (a[n] <= e) return a[n];
          return a[0];
        }
      : function (e, t, r) {
          void 0 === r && (r = 0.001);
          var n = i(e);
          return !t || Math.abs(n - e) < r || n - e < 0 == t < 0
            ? n
            : i(t < 0 ? e - o : e + o);
        };
  }
  function mb(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function nb(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function ob(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function pb(e, t, r) {
    return r && r.wheelHandler && e(t, "wheel", r);
  }
  function tb(e, t) {
    if (Ja(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in D
            ? D[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }
  function ub(e, t, r, n, o, i, a, s) {
    var l = o.startColor,
      c = o.endColor,
      u = o.fontSize,
      f = o.indent,
      d = o.fontWeight,
      p = je.createElement("div"),
      g = Da(r) || "fixed" === y(r, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      v = g ? Ge : r,
      b = -1 !== e.indexOf("start"),
      m = b ? l : c,
      x =
        "border-color:" +
        m +
        ";font-size:" +
        u +
        ";color:" +
        m +
        ";font-weight:" +
        d +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (x += "position:" + ((h || s) && g ? "fixed;" : "absolute;")),
      (!h && !s && g) ||
        (x += (n === Ne ? _ : T) + ":" + (i + parseFloat(f)) + "px;"),
      a &&
        (x +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (p._isStart = b),
      p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (p.style.cssText = x),
      (p.innerText = t || 0 === t ? e + "-" + t : e),
      v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
      (p._offset = p["offset" + n.op.d2]),
      R(p, 0, n, b),
      p
    );
  }
  function zb() {
    return 34 < gt() - ht && (S = S || requestAnimationFrame(j));
  }
  function Ab() {
    (h && h.isPressed && !(h.startX > Ge.clientWidth)) ||
      (Le.cache++,
      h ? (S = S || requestAnimationFrame(j)) : j(),
      ht || H("scrollStart"),
      (ht = gt()));
  }
  function Bb() {
    (m = We.innerWidth), (b = We.innerHeight);
  }
  function Cb() {
    Le.cache++,
      nt ||
        g ||
        je.fullscreenElement ||
        je.webkitFullscreenElement ||
        (v &&
          m === We.innerWidth &&
          !(Math.abs(We.innerHeight - b) > 0.25 * We.innerHeight)) ||
        l.restart(!0);
  }
  function Fb() {
    return ob(Z, "scrollEnd", Fb) || zt(!0);
  }
  function Ib(e) {
    for (var t = 0; t < V.length; t += 5)
      (!e || (V[t + 4] && V[t + 4].query === e)) &&
        ((V[t].style.cssText = V[t + 1]),
        V[t].getBBox && V[t].setAttribute("transform", V[t + 2] || ""),
        (V[t + 3].uncache = 1));
  }
  function Jb(e, t) {
    var r;
    for (it = 0; it < Ot.length; it++)
      !(r = Ot[it]) ||
        (t && r._ctx !== t) ||
        (e ? r.kill(1) : r.revert(!0, !0));
    t && Ib(t), t || H("revert");
  }
  function Kb(e, t) {
    Le.cache++,
      (!t && ut) ||
        Le.forEach(function (e) {
          return Ka(e) && e.cacheID++ && (e.rec = 0);
        }),
      Ja(e) && (We.history.scrollRestoration = x = e);
  }
  function Xb(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var o, i = U.length, a = t.style, s = e.style; i--; )
        a[(o = U[i])] = r[o];
      (a.position = "absolute" === r.position ? "absolute" : "relative"),
        "inline" === r.display && (a.display = "inline-block"),
        (s[T] = s[_] = "auto"),
        (a.flexBasis = r.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[mt] = hb(e, Je) + Et),
        (a[yt] = hb(e, Ne) + Et),
        (a[Tt] = s[kt] = s.top = s.left = "0"),
        Rt(n),
        (s[mt] = s.maxWidth = r[mt]),
        (s[yt] = s.maxHeight = r[yt]),
        (s[Tt] = r[Tt]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }
  function $b(e) {
    for (var t = G.length, r = e.style, n = [], o = 0; o < t; o++)
      n.push(G[o], r[G[o]]);
    return (n.t = e), n;
  }
  function bc(e, t, r, n, o, i, a, s, l, c, u, f, d) {
    Ka(e) && (e = e(s)),
      Ja(e) &&
        "max" === e.substr(0, 3) &&
        (e = f + ("=" === e.charAt(4) ? tb("0" + e.substr(3), r) : 0));
    var p,
      g,
      h,
      v = d ? d.time() : 0;
    if ((d && d.seek(0), La(e))) a && R(a, r, n, !0);
    else {
      Ka(t) && (t = t(s));
      var b,
        m,
        y,
        x,
        S = (e || "0").split(" ");
      (h = I(t) || Ge),
        ((b = Mt(h) || {}) && (b.left || b.top)) ||
          "none" !== db(h).display ||
          ((x = h.style.display),
          (h.style.display = "block"),
          (b = Mt(h)),
          x ? (h.style.display = x) : h.style.removeProperty("display")),
        (m = tb(S[0], b[n.d])),
        (y = tb(S[1] || "0", r)),
        (e = b[n.p] - l[n.p] - c + m + o - y),
        a && R(a, y, n, r - y < 20 || (a._isStart && 20 < y)),
        (r -= r - y);
    }
    if (i) {
      var w = e + r,
        _ = i._isStart;
      (p = "scroll" + n.d2),
        R(
          i,
          w,
          n,
          (_ && 20 < w) ||
            (!_ && (u ? Math.max(Ge[p], qe[p]) : i.parentNode[p]) <= w + 1)
        ),
        u &&
          ((l = Mt(a)),
          u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + Et));
    }
    return (
      d &&
        h &&
        ((p = Mt(h)),
        d.seek(f),
        (g = Mt(h)),
        (d._caScrollDist = p[n.p] - g[n.p]),
        (e = (e / d._caScrollDist) * f)),
      d && d.seek(v),
      d ? e : Math.round(e)
    );
  }
  function dc(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
        i,
        a = e.style;
      if (t === Ge) {
        for (o in ((e._stOrig = a.cssText), (i = db(e))))
          +o ||
            Q.test(o) ||
            !i[o] ||
            "string" != typeof a[o] ||
            "0" === o ||
            (a[o] = i[o]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (Ke.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function ec(l, e) {
    function Sj(e, t, r, n, o) {
      var i = Sj.tween,
        a = t.onComplete,
        s = {};
      return (
        (r = r || f()),
        (o = (n && o) || 0),
        (n = n || e - r),
        i && i.kill(),
        (c = Math.round(r)),
        (t[d] = e),
        ((t.modifiers = s)[d] = function (e) {
          return (
            (e = Math.round(f())) !== c &&
            e !== u &&
            3 < Math.abs(e - c) &&
            3 < Math.abs(e - u)
              ? (i.kill(), (Sj.tween = 0))
              : (e = r + n * i.ratio + o * i.ratio * i.ratio),
            (u = c),
            (c = Math.round(e))
          );
        }),
        (t.onComplete = function () {
          (Sj.tween = 0), a && a.call(i);
        }),
        (i = Sj.tween = Ke.to(l, t))
      );
    }
    var c,
      u,
      f = J(l, e),
      d = "_scroll" + e.p2;
    return (
      ((l[d] = f).wheelHandler = function () {
        return Sj.tween && Sj.tween.kill() && (Sj.tween = 0);
      }),
      nb(l, "wheel", f.wheelHandler),
      Sj
    );
  }
  var Ke,
    a,
    We,
    je,
    qe,
    Ge,
    s,
    l,
    et,
    tt,
    rt,
    c,
    nt,
    ot,
    u,
    it,
    f,
    d,
    p,
    at,
    st,
    g,
    h,
    v,
    b,
    m,
    P,
    lt,
    x,
    ct,
    S,
    ut,
    ft,
    dt,
    pt = 1,
    gt = Date.now,
    w = gt(),
    ht = 0,
    vt = 0,
    bt = Math.abs,
    _ = "right",
    T = "bottom",
    mt = "width",
    yt = "height",
    xt = "Right",
    St = "Left",
    wt = "Top",
    _t = "Bottom",
    Tt = "padding",
    kt = "margin",
    At = "Width",
    C = "Height",
    Et = "px",
    Mt = function _getBounds(e, t) {
      var r =
          t &&
          "matrix(1, 0, 0, 1, 0, 0)" !== db(e)[u] &&
          Ke.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    Pt = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Ct = { toggleActions: "play", anticipatePin: 0 },
    D = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    R = function _positionMarker(e, t, r, n) {
      var o = { display: "block" },
        i = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (o[r.a + "Percent"] = n ? -100 : 0),
        (o[r.a] = n ? "1px" : 0),
        (o["border" + i + At] = 1),
        (o["border" + a + At] = 0),
        (o[r.p] = t + "px"),
        Ke.set(e, o);
    },
    Ot = [],
    Dt = {},
    X = {},
    Y = [],
    H = function _dispatch(e) {
      return (
        (X[e] &&
          X[e].map(function (e) {
            return e();
          })) ||
        Y
      );
    },
    V = [],
    It = 0,
    zt = function _refreshAll(e, t) {
      if (!ht || e) {
        (ut = Z.isRefreshing = !0),
          Le.forEach(function (e) {
            return Ka(e) && e.cacheID++ && (e.rec = e());
          });
        var r = H("refreshInit");
        at && Z.sort(),
          t || Jb(),
          Le.forEach(function (e) {
            Ka(e) &&
              (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
          }),
          Ot.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          Ot.forEach(function (e, t) {
            if (e._subPinOffset && e.pin) {
              var r = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                n = e.pin[r];
              e.revert(!0, 1),
                e.adjustPinSpacing(e.pin[r] - n),
                e.revert(!1, 1);
            }
          }),
          Ot.forEach(function (e) {
            return (
              "max" === e.vars.end &&
              e.setPositions(
                e.start,
                Math.max(e.start + 1, Ha(e.scroller, e._dir))
              )
            );
          }),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          Le.forEach(function (e) {
            Ka(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = "smooth");
                }),
              e.rec && e(e.rec));
          }),
          Kb(x, 1),
          l.pause(),
          It++,
          j(2),
          Ot.forEach(function (e) {
            return Ka(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (ut = Z.isRefreshing = !1),
          H("refresh");
      } else nb(Z, "scrollEnd", Fb);
    },
    W = 0,
    Bt = 1,
    j = function _updateAll(e) {
      if (!ut || 2 === e) {
        (Z.isUpdating = !0), dt && dt.update(0);
        var t = Ot.length,
          r = gt(),
          n = 50 <= r - w,
          o = t && Ot[0].scroll();
        if (
          ((Bt = o < W ? -1 : 1),
          (W = o),
          n &&
            (ht && !ot && 200 < r - ht && ((ht = 0), H("scrollEnd")),
            (rt = w),
            (w = r)),
          Bt < 0)
        ) {
          for (it = t; 0 < it--; ) Ot[it] && Ot[it].update(0, n);
          Bt = 1;
        } else for (it = 0; it < t; it++) Ot[it] && Ot[it].update(0, n);
        Z.isUpdating = !1;
      }
      S = 0;
    },
    U = [
      "left",
      "top",
      T,
      _,
      kt + _t,
      kt + xt,
      kt + wt,
      kt + St,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    G = U.concat([
      mt,
      yt,
      "boxSizing",
      "max" + At,
      "max" + C,
      "position",
      kt,
      Tt,
      Tt + wt,
      Tt + xt,
      Tt + _t,
      Tt + St,
    ]),
    $ = /([A-Z])/g,
    Rt = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0;
        for ((e.t._gsap || Ke.core.getCache(e.t)).uncache = 1; i < o; i += 2)
          (r = e[i + 1]),
            (t = e[i]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace($, "-$1").toLowerCase());
      }
    },
    Xt = { left: 0, top: 0 },
    Q = /(webkit|moz|length|cssText|inset)/i,
    Z =
      ((ScrollTrigger.prototype.init = function init(_, T) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), vt)
        ) {
          var k,
            n,
            p,
            A,
            E,
            M,
            P,
            C,
            O,
            D,
            z,
            e,
            B,
            R,
            X,
            L,
            F,
            t,
            Y,
            b,
            H,
            N,
            m,
            K,
            x,
            S,
            r,
            w,
            V,
            W,
            o,
            g,
            j,
            q,
            U,
            G,
            $,
            i,
            Q = (_ = fb(Ja(_) || La(_) || _.nodeType ? { trigger: _ } : _, Ct))
              .onUpdate,
            Z = _.toggleClass,
            a = _.id,
            ee = _.onToggle,
            te = _.onRefresh,
            re = _.scrub,
            ne = _.trigger,
            oe = _.pin,
            ie = _.pinSpacing,
            ae = _.invalidateOnRefresh,
            se = _.anticipatePin,
            s = _.onScrubComplete,
            h = _.onSnapComplete,
            le = _.once,
            ce = _.snap,
            ue = _.pinReparent,
            l = _.pinSpacer,
            fe = _.containerAnimation,
            de = _.fastScrollEnd,
            pe = _.preventOverlaps,
            ge =
              _.horizontal || (_.containerAnimation && !1 !== _.horizontal)
                ? Je
                : Ne,
            he = !re && 0 !== re,
            ve = I(_.scroller || We),
            c = Ke.core.getCache(ve),
            be = Da(ve),
            me =
              "fixed" ===
              ("pinType" in _
                ? _.pinType
                : y(ve, "pinType") || (be && "fixed")),
            ye = [_.onEnter, _.onLeave, _.onEnterBack, _.onLeaveBack],
            xe = he && _.toggleActions.split(" "),
            u = "markers" in _ ? _.markers : Ct.markers,
            Se = be ? 0 : parseFloat(db(ve)["border" + ge.p2 + At]) || 0,
            we = this,
            _e =
              _.onRefreshInit &&
              function () {
                return _.onRefreshInit(we);
              },
            Te = (function _getSizeFunc(e, t, r) {
              var n = r.d,
                o = r.d2,
                i = r.a;
              return (i = y(e, "getBoundingClientRect"))
                ? function () {
                    return i()[n];
                  }
                : function () {
                    return (t ? We["inner" + o] : e["client" + o]) || 0;
                  };
            })(ve, be, ge),
            ke = (function _getOffsetsFunc(e, t) {
              return !t || ~Fe.indexOf(e)
                ? Ea(e)
                : function () {
                    return Xt;
                  };
            })(ve, be),
            Ae = 0,
            Ee = 0,
            Me = J(ve, ge);
          if (
            (lt(we),
            (we._dir = ge),
            (se *= 45),
            (we.scroller = ve),
            (we.scroll = fe ? fe.time.bind(fe) : Me),
            (A = Me()),
            (we.vars = _),
            (T = T || _.animation),
            "refreshPriority" in _ &&
              ((at = 1), -9999 === _.refreshPriority && (dt = we)),
            (c.tweenScroll = c.tweenScroll || {
              top: ec(ve, Ne),
              left: ec(ve, Je),
            }),
            (we.tweenTo = k = c.tweenScroll[ge.p]),
            (we.scrubDuration = function (e) {
              (o = La(e) && e)
                ? W
                  ? W.duration(e)
                  : (W = Ke.to(T, {
                      ease: "expo",
                      totalProgress: "+=0.001",
                      duration: o,
                      paused: !0,
                      onComplete: function onComplete() {
                        return s && s(we);
                      },
                    }))
                : (W && W.progress(1).kill(), (W = 0));
            }),
            T &&
              ((T.vars.lazy = !1),
              T._initted ||
                (!1 !== T.vars.immediateRender &&
                  !1 !== _.immediateRender &&
                  T.duration() &&
                  T.render(0, !0, !0)),
              (we.animation = T.pause()),
              (T.scrollTrigger = we).scrubDuration(re),
              (w = 0),
              (a = a || T.vars.id)),
            Ot.push(we),
            ce &&
              ((Ma(ce) && !ce.push) || (ce = { snapTo: ce }),
              "scrollBehavior" in Ge.style &&
                Ke.set(be ? [Ge, qe] : ve, { scrollBehavior: "auto" }),
              Le.forEach(function (e) {
                return (
                  Ka(e) &&
                  e.target === (be ? je.scrollingElement || qe : ve) &&
                  (e.smooth = !1)
                );
              }),
              (p = Ka(ce.snapTo)
                ? ce.snapTo
                : "labels" === ce.snapTo
                ? (function _getClosestLabel(t) {
                    return function (e) {
                      return Ke.utils.snap(ib(t), e);
                    };
                  })(T)
                : "labelsDirectional" === ce.snapTo
                ? (function _getLabelAtDirection(r) {
                    return function (e, t) {
                      return kb(ib(r))(e, t.direction);
                    };
                  })(T)
                : !1 !== ce.directional
                ? function (e, t) {
                    return kb(ce.snapTo)(e, gt() - Ee < 500 ? 0 : t.direction);
                  }
                : Ke.utils.snap(ce.snapTo)),
              (g = ce.duration || { min: 0.1, max: 2 }),
              (g = Ma(g) ? tt(g.min, g.max) : tt(g, g)),
              (j = Ke.delayedCall(ce.delay || o / 2 || 0.1, function () {
                var e = Me(),
                  t = gt() - Ee < 500,
                  r = k.tween;
                if (
                  !(t || Math.abs(we.getVelocity()) < 10) ||
                  r ||
                  ot ||
                  Ae === e
                )
                  we.isActive && Ae !== e && j.restart(!0);
                else {
                  var n = (e - M) / B,
                    o = T && !he ? T.totalProgress() : n,
                    i = t ? 0 : ((o - V) / (gt() - rt)) * 1e3 || 0,
                    a = Ke.utils.clamp(-n, 1 - n, (bt(i / 2) * i) / 0.185),
                    s = n + (!1 === ce.inertia ? 0 : a),
                    l = tt(0, 1, p(s, we)),
                    c = Math.round(M + l * B),
                    u = ce.onStart,
                    f = ce.onInterrupt,
                    d = ce.onComplete;
                  if (e <= P && M <= e && c !== e) {
                    if (r && !r._initted && r.data <= bt(c - e)) return;
                    !1 === ce.inertia && (a = l - n),
                      k(
                        c,
                        {
                          duration: g(
                            bt(
                              (0.185 * Math.max(bt(s - o), bt(l - o))) /
                                i /
                                0.05 || 0
                            )
                          ),
                          ease: ce.ease || "power3",
                          data: bt(c - e),
                          onInterrupt: function onInterrupt() {
                            return j.restart(!0) && f && f(we);
                          },
                          onComplete: function onComplete() {
                            we.update(),
                              (Ae = Me()),
                              (w = V =
                                T && !he ? T.totalProgress() : we.progress),
                              h && h(we),
                              d && d(we);
                          },
                        },
                        e,
                        a * B,
                        c - e - a * B
                      ),
                      u && u(we, k.tween);
                  }
                }
              }).pause())),
            a && (Dt[a] = we),
            (i =
              (i =
                (ne = we.trigger = I(ne || oe)) &&
                ne._gsap &&
                ne._gsap.stRevert) && i(we)),
            (oe = !0 === oe ? ne : I(oe)),
            Ja(Z) && (Z = { targets: ne, className: Z }),
            oe &&
              (!1 === ie ||
                ie === kt ||
                (ie =
                  !(
                    !ie &&
                    oe.parentNode &&
                    oe.parentNode.style &&
                    "flex" === db(oe.parentNode).display
                  ) && Tt),
              (we.pin = oe),
              (n = Ke.core.getCache(oe)).spacer
                ? (R = n.pinState)
                : (l &&
                    ((l = I(l)) &&
                      !l.nodeType &&
                      (l = l.current || l.nativeElement),
                    (n.spacerIsNative = !!l),
                    l && (n.spacerState = $b(l))),
                  (n.spacer = F = l || je.createElement("div")),
                  F.classList.add("pin-spacer"),
                  a && F.classList.add("pin-spacer-" + a),
                  (n.pinState = R = $b(oe))),
              !1 !== _.force3D && Ke.set(oe, { force3D: !0 }),
              (we.spacer = F = n.spacer),
              (r = db(oe)),
              (m = r[ie + ge.os2]),
              (Y = Ke.getProperty(oe)),
              (b = Ke.quickSetter(oe, ge.a, Et)),
              Xb(oe, F, r),
              (L = $b(oe))),
            u)
          ) {
            (e = Ma(u) ? fb(u, Pt) : Pt),
              (D = ub("scroller-start", a, ve, ge, e, 0)),
              (z = ub("scroller-end", a, ve, ge, e, 0, D)),
              (t = D["offset" + ge.op.d2]);
            var f = I(y(ve, "content") || ve);
            (C = this.markerStart = ub("start", a, f, ge, e, t, 0, fe)),
              (O = this.markerEnd = ub("end", a, f, ge, e, t, 0, fe)),
              fe && ($ = Ke.quickSetter([C, O], ge.a, Et)),
              me ||
                (Fe.length && !0 === y(ve, "fixedMarkers")) ||
                ((function _makePositionable(e) {
                  var t = db(e).position;
                  e.style.position =
                    "absolute" === t || "fixed" === t ? t : "relative";
                })(be ? Ge : ve),
                Ke.set([D, z], { force3D: !0 }),
                (x = Ke.quickSetter(D, ge.a, Et)),
                (S = Ke.quickSetter(z, ge.a, Et)));
          }
          if (fe) {
            var d = fe.vars.onUpdate,
              v = fe.vars.onUpdateParams;
            fe.eventCallback("onUpdate", function () {
              we.update(0, 0, 1), d && d.apply(v || []);
            });
          }
          (we.previous = function () {
            return Ot[Ot.indexOf(we) - 1];
          }),
            (we.next = function () {
              return Ot[Ot.indexOf(we) + 1];
            }),
            (we.revert = function (e, t) {
              if (!t) return we.kill(!0);
              var r = !1 !== e || !we.enabled,
                n = nt;
              r !== we.isReverted &&
                (r &&
                  ((U = Math.max(Me(), we.scroll.rec || 0)),
                  (q = we.progress),
                  (G = T && T.progress())),
                C &&
                  [C, O, D, z].forEach(function (e) {
                    return (e.style.display = r ? "none" : "block");
                  }),
                r && ((nt = 1), we.update(r)),
                oe &&
                  (r
                    ? (function _swapPinOut(e, t, r) {
                        Rt(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Rt(n.spacerState);
                        else if (e._gsap.swappedIn) {
                          var o = t.parentNode;
                          o && (o.insertBefore(e, t), o.removeChild(t));
                        }
                        e._gsap.swappedIn = !1;
                      })(oe, F, R)
                    : (ue && we.isActive) || Xb(oe, F, db(oe), K)),
                r || we.update(r),
                (nt = n),
                (we.isReverted = r));
            }),
            (we.refresh = function (e, t) {
              if ((!nt && we.enabled) || t)
                if (oe && e && ht) nb(ScrollTrigger, "scrollEnd", Fb);
                else {
                  !ut && _e && _e(we),
                    (nt = 1),
                    (Ee = gt()),
                    k.tween && (k.tween.kill(), (k.tween = 0)),
                    W && W.pause(),
                    ae && T && T.revert({ kill: !1 }).invalidate(),
                    we.isReverted || we.revert(!0, !0),
                    (we._subPinOffset = !1);
                  for (
                    var r,
                      n,
                      o,
                      i,
                      a,
                      s,
                      l,
                      c,
                      u,
                      f,
                      d = Te(),
                      p = ke(),
                      g = fe ? fe.duration() : Ha(ve, ge),
                      h = 0,
                      v = 0,
                      b = _.end,
                      m = _.endTrigger || ne,
                      y =
                        _.start ||
                        (0 !== _.start && ne ? (oe ? "0 0" : "0 100%") : 0),
                      x = (we.pinnedContainer =
                        _.pinnedContainer && I(_.pinnedContainer)),
                      S = (ne && Math.max(0, Ot.indexOf(we))) || 0,
                      w = S;
                    w--;

                  )
                    (s = Ot[w]).end || s.refresh(0, 1) || (nt = 1),
                      !(l = s.pin) ||
                        (l !== ne && l !== oe) ||
                        s.isReverted ||
                        ((f = f || []).unshift(s), s.revert(!0, !0)),
                      s !== Ot[w] && (S--, w--);
                  for (
                    Ka(y) && (y = y(we)),
                      M =
                        bc(y, ne, d, ge, Me(), C, D, we, p, Se, me, g, fe) ||
                        (oe ? -0.001 : 0),
                      Ka(b) && (b = b(we)),
                      Ja(b) &&
                        !b.indexOf("+=") &&
                        (~b.indexOf(" ")
                          ? (b = (Ja(y) ? y.split(" ")[0] : "") + b)
                          : ((h = tb(b.substr(2), d)),
                            (b = Ja(y) ? y : M + h),
                            (m = ne))),
                      P =
                        Math.max(
                          M,
                          bc(
                            b || (m ? "100% 0" : g),
                            m,
                            d,
                            ge,
                            Me() + h,
                            O,
                            z,
                            we,
                            p,
                            Se,
                            me,
                            g,
                            fe
                          )
                        ) || -0.001,
                      B = P - M || ((M -= 0.01) && 0.001),
                      h = 0,
                      w = S;
                    w--;

                  )
                    (l = (s = Ot[w]).pin) &&
                      s.start - s._pinPush <= M &&
                      !fe &&
                      0 < s.end &&
                      ((r = s.end - s.start),
                      ((l === ne && s.start - s._pinPush < M) || l === x) &&
                        !La(y) &&
                        (h += r * (1 - s.progress)),
                      l === oe && (v += r));
                  if (
                    ((M += h),
                    (P += h),
                    (we._pinPush = v),
                    C &&
                      h &&
                      (((r = {})[ge.a] = "+=" + h),
                      x && (r[ge.p] = "-=" + Me()),
                      Ke.set([C, O], r)),
                    oe)
                  )
                    (r = db(oe)),
                      (i = ge === Ne),
                      (o = Me()),
                      (H = parseFloat(Y(ge.a)) + v),
                      !g &&
                        1 < P &&
                        ((be ? Ge : ve).style["overflow-" + ge.a] = "scroll"),
                      Xb(oe, F, r),
                      (L = $b(oe)),
                      (n = Mt(oe, !0)),
                      (c = me && J(ve, i ? Je : Ne)()),
                      ie &&
                        (((K = [ie + ge.os2, B + v + Et]).t = F),
                        (w = ie === Tt ? hb(oe, ge) + B + v : 0) &&
                          K.push(ge.d, w + Et),
                        Rt(K),
                        x &&
                          Ot.forEach(function (e) {
                            e.pin === x &&
                              !1 !== e.vars.pinSpacing &&
                              (e._subPinOffset = !0);
                          }),
                        me && Me(U)),
                      me &&
                        (((a = {
                          top: n.top + (i ? o - M : c) + Et,
                          left: n.left + (i ? c : o - M) + Et,
                          boxSizing: "border-box",
                          position: "fixed",
                        })[mt] = a.maxWidth =
                          Math.ceil(n.width) + Et),
                        (a[yt] = a.maxHeight = Math.ceil(n.height) + Et),
                        (a[kt] =
                          a[kt + wt] =
                          a[kt + xt] =
                          a[kt + _t] =
                          a[kt + St] =
                            "0"),
                        (a[Tt] = r[Tt]),
                        (a[Tt + wt] = r[Tt + wt]),
                        (a[Tt + xt] = r[Tt + xt]),
                        (a[Tt + _t] = r[Tt + _t]),
                        (a[Tt + St] = r[Tt + St]),
                        (X = (function _copyState(e, t, r) {
                          for (
                            var n, o = [], i = e.length, a = r ? 8 : 0;
                            a < i;
                            a += 2
                          )
                            (n = e[a]), o.push(n, n in t ? t[n] : e[a + 1]);
                          return (o.t = e.t), o;
                        })(R, a, ue)),
                        ut && Me(0)),
                      T
                        ? ((u = T._initted),
                          st(1),
                          T.render(T.duration(), !0, !0),
                          (N = Y(ge.a) - H + B + v),
                          B !== N && me && X.splice(X.length - 2, 2),
                          T.render(0, !0, !0),
                          u || T.invalidate(!0),
                          T.parent || T.totalTime(T.totalTime()),
                          st(0))
                        : (N = B);
                  else if (ne && Me() && !fe)
                    for (n = ne.parentNode; n && n !== Ge; )
                      n._pinOffset &&
                        ((M -= n._pinOffset), (P -= n._pinOffset)),
                        (n = n.parentNode);
                  f &&
                    f.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (we.start = M),
                    (we.end = P),
                    (A = E = ut ? U : Me()),
                    fe || ut || (A < U && Me(U), (we.scroll.rec = 0)),
                    we.revert(!1, !0),
                    j &&
                      ((Ae = -1), we.isActive && Me(M + B * q), j.restart(!0)),
                    (nt = 0),
                    T &&
                      he &&
                      (T._initted || G) &&
                      T.progress() !== G &&
                      T.progress(G, !0).render(T.time(), !0, !0),
                    (q === we.progress && !fe) ||
                      (T && !he && T.totalProgress(q, !0),
                      (we.progress = (A - M) / B === q ? 0 : q)),
                    oe && ie && (F._pinOffset = Math.round(we.progress * N)),
                    te && !ut && te(we);
                }
            }),
            (we.getVelocity = function () {
              return ((Me() - E) / (gt() - rt)) * 1e3 || 0;
            }),
            (we.endAnimation = function () {
              Na(we.callbackAnimation),
                T &&
                  (W
                    ? W.progress(1)
                    : T.paused()
                    ? he || Na(T, we.direction < 0, 1)
                    : Na(T, T.reversed()));
            }),
            (we.labelToScroll = function (e) {
              return (
                (T &&
                  T.labels &&
                  (M || we.refresh() || M) +
                    (T.labels[e] / T.duration()) * B) ||
                0
              );
            }),
            (we.getTrailing = function (t) {
              var e = Ot.indexOf(we),
                r =
                  0 < we.direction ? Ot.slice(0, e).reverse() : Ot.slice(e + 1);
              return (
                Ja(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : r
              ).filter(function (e) {
                return 0 < we.direction ? e.end <= M : e.start >= P;
              });
            }),
            (we.update = function (e, t, r) {
              if (!fe || r || e) {
                var n,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  u = ut ? U : we.scroll(),
                  f = e ? 0 : (u - M) / B,
                  d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                  p = we.progress;
                if (
                  (t &&
                    ((E = A),
                    (A = fe ? Me() : u),
                    ce && ((V = w), (w = T && !he ? T.totalProgress() : d))),
                  se &&
                    !d &&
                    oe &&
                    !nt &&
                    !pt &&
                    ht &&
                    M < u + ((u - E) / (gt() - rt)) * se &&
                    (d = 1e-4),
                  d !== p && we.enabled)
                ) {
                  if (
                    ((a =
                      (s =
                        (n = we.isActive = !!d && d < 1) != (!!p && p < 1)) ||
                      !!d != !!p),
                    (we.direction = p < d ? 1 : -1),
                    (we.progress = d),
                    a &&
                      !nt &&
                      ((o = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3),
                      he &&
                        ((i =
                          (!s && "none" !== xe[o + 1] && xe[o + 1]) || xe[o]),
                        (c =
                          T && ("complete" === i || "reset" === i || i in T)))),
                    pe &&
                      (s || c) &&
                      (c || re || !T) &&
                      (Ka(pe)
                        ? pe(we)
                        : we.getTrailing(pe).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    he ||
                      (!W || nt || pt
                        ? T && T.totalProgress(d, !!nt)
                        : ((fe || (dt && dt !== we)) &&
                            W.render(W._dp._time - W._start),
                          W.resetTo
                            ? W.resetTo("totalProgress", d, T._tTime / T._tDur)
                            : ((W.vars.totalProgress = d),
                              W.invalidate().restart()))),
                    oe)
                  )
                    if ((e && ie && (F.style[ie + ge.os2] = m), me)) {
                      if (a) {
                        if (
                          ((l =
                            !e && p < d && u < P + 1 && u + 1 >= Ha(ve, ge)),
                          ue)
                        )
                          if (e || (!n && !l)) dc(oe, F);
                          else {
                            var g = Mt(oe, !0),
                              h = u - M;
                            dc(
                              oe,
                              Ge,
                              g.top + (ge === Ne ? h : 0) + Et,
                              g.left + (ge === Ne ? 0 : h) + Et
                            );
                          }
                        Rt(n || l ? X : L),
                          (N !== B && d < 1 && n) ||
                            b(H + (1 !== d || l ? 0 : N));
                      }
                    } else b(Aa(H + N * d));
                  !ce || k.tween || nt || pt || j.restart(!0),
                    Z &&
                      (s || (le && d && (d < 1 || !ct))) &&
                      et(Z.targets).forEach(function (e) {
                        return e.classList[n || le ? "add" : "remove"](
                          Z.className
                        );
                      }),
                    !Q || he || e || Q(we),
                    a && !nt
                      ? (he &&
                          (c &&
                            ("complete" === i
                              ? T.pause().totalProgress(1)
                              : "reset" === i
                              ? T.restart(!0).pause()
                              : "restart" === i
                              ? T.restart(!0)
                              : T[i]()),
                          Q && Q(we)),
                        (!s && ct) ||
                          (ee && s && Oa(we, ee),
                          ye[o] && Oa(we, ye[o]),
                          le && (1 === d ? we.kill(!1, 1) : (ye[o] = 0)),
                          s || (ye[(o = 1 === d ? 1 : 3)] && Oa(we, ye[o]))),
                        de &&
                          !n &&
                          Math.abs(we.getVelocity()) > (La(de) ? de : 2500) &&
                          (Na(we.callbackAnimation),
                          W
                            ? W.progress(1)
                            : Na(T, "reverse" === i ? 1 : !d, 1)))
                      : he && Q && !nt && Q(we);
                }
                if (S) {
                  var v = fe
                    ? (u / fe.duration()) * (fe._caScrollDist || 0)
                    : u;
                  x(v + (D._isFlipped ? 1 : 0)), S(v);
                }
                $ && $((-u / fe.duration()) * (fe._caScrollDist || 0));
              }
            }),
            (we.enable = function (e, t) {
              we.enabled ||
                ((we.enabled = !0),
                nb(ve, "resize", Cb),
                nb(be ? je : ve, "scroll", Ab),
                _e && nb(ScrollTrigger, "refreshInit", _e),
                !1 !== e && ((we.progress = q = 0), (A = E = Ae = Me())),
                !1 !== t && we.refresh());
            }),
            (we.getTween = function (e) {
              return e && k ? k.tween : W;
            }),
            (we.setPositions = function (e, t) {
              oe &&
                ((H += e - M),
                (N += t - e - B),
                ie === Tt && we.adjustPinSpacing(t - e - B)),
                (we.start = M = e),
                (we.end = P = t),
                (B = t - e),
                we.update();
            }),
            (we.adjustPinSpacing = function (e) {
              if (K) {
                var t = K.indexOf(ge.d) + 1;
                (K[t] = parseFloat(K[t]) + e + Et),
                  (K[1] = parseFloat(K[1]) + e + Et),
                  Rt(K);
              }
            }),
            (we.disable = function (e, t) {
              if (
                we.enabled &&
                (!1 !== e && we.revert(!0, !0),
                (we.enabled = we.isActive = !1),
                t || (W && W.pause()),
                (U = 0),
                n && (n.uncache = 1),
                _e && ob(ScrollTrigger, "refreshInit", _e),
                j && (j.pause(), k.tween && k.tween.kill() && (k.tween = 0)),
                !be)
              ) {
                for (var r = Ot.length; r--; )
                  if (Ot[r].scroller === ve && Ot[r] !== we) return;
                ob(ve, "resize", Cb), ob(ve, "scroll", Ab);
              }
            }),
            (we.kill = function (e, t) {
              we.disable(e, t), W && !t && W.kill(), a && delete Dt[a];
              var r = Ot.indexOf(we);
              0 <= r && Ot.splice(r, 1),
                r === it && 0 < Bt && it--,
                (r = 0),
                Ot.forEach(function (e) {
                  return e.scroller === we.scroller && (r = 1);
                }),
                r || ut || (we.scroll.rec = 0),
                T &&
                  ((T.scrollTrigger = null),
                  e && T.revert({ kill: !1 }),
                  t || T.kill()),
                C &&
                  [C, O, D, z].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                dt === we && (dt = 0),
                oe &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  Ot.forEach(function (e) {
                    return e.pin === oe && r++;
                  }),
                  r || (n.spacer = 0)),
                _.onKill && _.onKill(we);
            }),
            we.enable(!1, !1),
            i && i(we),
            T && T.add && !B
              ? Ke.delayedCall(0.01, function () {
                  return M || P || we.refresh();
                }) &&
                (B = 0.01) &&
                (M = P = 0)
              : we.refresh(),
            oe &&
              (function _queueRefreshAll() {
                if (ft !== It) {
                  var e = (ft = It);
                  requestAnimationFrame(function () {
                    return e === It && zt(!0);
                  });
                }
              })();
        } else this.update = this.refresh = this.kill = za;
      }),
      (ScrollTrigger.register = function register(e) {
        return (
          a ||
            ((Ke = e || Ca()),
            Ba() && window.document && ScrollTrigger.enable(),
            (a = vt)),
          a
        );
      }),
      (ScrollTrigger.defaults = function defaults(e) {
        if (e) for (var t in e) Ct[t] = e[t];
        return Ct;
      }),
      (ScrollTrigger.disable = function disable(t, r) {
        (vt = 0),
          Ot.forEach(function (e) {
            return e[r ? "kill" : "disable"](t);
          }),
          ob(We, "wheel", Ab),
          ob(je, "scroll", Ab),
          clearInterval(c),
          ob(je, "touchcancel", za),
          ob(Ge, "touchstart", za),
          mb(ob, je, "pointerdown,touchstart,mousedown", xa),
          mb(ob, je, "pointerup,touchend,mouseup", ya),
          l.kill(),
          Ia(ob);
        for (var e = 0; e < Le.length; e += 3)
          pb(ob, Le[e], Le[e + 1]), pb(ob, Le[e], Le[e + 2]);
      }),
      (ScrollTrigger.enable = function enable() {
        if (
          ((We = window),
          (je = document),
          (qe = je.documentElement),
          (Ge = je.body),
          Ke &&
            ((et = Ke.utils.toArray),
            (tt = Ke.utils.clamp),
            (lt = Ke.core.context || za),
            (st = Ke.core.suppressOverwrites || za),
            (x = We.history.scrollRestoration || "auto"),
            Ke.core.globals("ScrollTrigger", ScrollTrigger),
            Ge))
        ) {
          (vt = 1),
            k.register(Ke),
            (ScrollTrigger.isTouch = k.isTouch),
            (P =
              k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            nb(We, "wheel", Ab),
            (s = [We, je, qe, Ge]),
            Ke.matchMedia
              ? ((ScrollTrigger.matchMedia = function (e) {
                  var t,
                    r = Ke.matchMedia();
                  for (t in e) r.add(t, e[t]);
                  return r;
                }),
                Ke.addEventListener("matchMediaInit", function () {
                  return Jb();
                }),
                Ke.addEventListener("matchMediaRevert", function () {
                  return Ib();
                }),
                Ke.addEventListener("matchMedia", function () {
                  zt(0, 1), H("matchMedia");
                }),
                Ke.matchMedia("(orientation: portrait)", function () {
                  return Bb(), Bb;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Bb(),
            nb(je, "scroll", Ab);
          var e,
            t,
            r = Ge.style,
            n = r.borderTopStyle,
            o = Ke.core.Animation.prototype;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function value() {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              e = Mt(Ge),
              Ne.m = Math.round(e.top + Ne.sc()) || 0,
              Je.m = Math.round(e.left + Je.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
              c = setInterval(zb, 250),
              Ke.delayedCall(0.5, function () {
                return (pt = 0);
              }),
              nb(je, "touchcancel", za),
              nb(Ge, "touchstart", za),
              mb(nb, je, "pointerdown,touchstart,mousedown", xa),
              mb(nb, je, "pointerup,touchend,mouseup", ya),
              u = Ke.utils.checkPrefix("transform"),
              G.push(u),
              a = gt(),
              l = Ke.delayedCall(0.2, zt).pause(),
              p = [
                je,
                "visibilitychange",
                function () {
                  var e = We.innerWidth,
                    t = We.innerHeight;
                  je.hidden ? ((f = e), (d = t)) : (f === e && d === t) || Cb();
                },
                je,
                "DOMContentLoaded",
                zt,
                We,
                "load",
                zt,
                We,
                "resize",
                Cb,
              ],
              Ia(nb),
              Ot.forEach(function (e) {
                return e.enable(0, 1);
              }),
              t = 0;
            t < Le.length;
            t += 3
          )
            pb(ob, Le[t], Le[t + 1]), pb(ob, Le[t], Le[t + 2]);
        }
      }),
      (ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (ct = !!e.limitCallbacks);
        var t = e.syncInterval;
        (t && clearInterval(c)) || ((c = t) && setInterval(zb, t)),
          "ignoreMobileResize" in e &&
            (v = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
          "autoRefreshEvents" in e &&
            (Ia(ob) || Ia(nb, e.autoRefreshEvents || "none"),
            (g = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
      }),
      (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = I(e),
          n = Le.indexOf(r),
          o = Da(r);
        ~n && Le.splice(n, o ? 6 : 2),
          t && (o ? Fe.unshift(We, t, Ge, t, qe, t) : Fe.unshift(r, t));
      }),
      (ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
        Ot.forEach(function (e) {
          return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
        });
      }),
      (ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (Ja(e) ? I(e) : e).getBoundingClientRect(),
          o = n[r ? mt : yt] * t || 0;
        return r
          ? 0 < n.right - o && n.left + o < We.innerWidth
          : 0 < n.bottom - o && n.top + o < We.innerHeight;
      }),
      (ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        Ja(e) && (e = I(e));
        var n = e.getBoundingClientRect(),
          o = n[r ? mt : yt],
          i =
            null == t
              ? o / 2
              : t in D
              ? D[t] * o
              : ~t.indexOf("%")
              ? (parseFloat(t) * o) / 100
              : parseFloat(t) || 0;
        return r ? (n.left + i) / We.innerWidth : (n.top + i) / We.innerHeight;
      }),
      (ScrollTrigger.killAll = function killAll(e) {
        if (
          (Ot.forEach(function (e) {
            return "ScrollSmoother" !== e.vars.id && e.kill();
          }),
          !0 !== e)
        ) {
          var t = X.killAll || [];
          (X = {}),
            t.forEach(function (e) {
              return e();
            });
        }
      }),
      ScrollTrigger);
  function ScrollTrigger(e, t) {
    a ||
      ScrollTrigger.register(Ke) ||
      console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      this.init(e, t);
  }
  (Z.version = "3.11.3"),
    (Z.saveStyles = function (e) {
      return e
        ? et(e).forEach(function (e) {
            if (e && e.style) {
              var t = V.indexOf(e);
              0 <= t && V.splice(t, 5),
                V.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  Ke.core.getCache(e),
                  lt()
                );
            }
          })
        : V;
    }),
    (Z.revert = function (e, t) {
      return Jb(!e, t);
    }),
    (Z.create = function (e, t) {
      return new Z(e, t);
    }),
    (Z.refresh = function (e) {
      return e ? Cb() : (a || Z.register()) && zt(!0);
    }),
    (Z.update = j),
    (Z.clearScrollMemory = Kb),
    (Z.maxScroll = function (e, t) {
      return Ha(e, t ? Je : Ne);
    }),
    (Z.getScrollFunc = function (e, t) {
      return J(I(e), t ? Je : Ne);
    }),
    (Z.getById = function (e) {
      return Dt[e];
    }),
    (Z.getAll = function () {
      return Ot.filter(function (e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    }),
    (Z.isScrolling = function () {
      return !!ht;
    }),
    (Z.snapDirectional = kb),
    (Z.addEventListener = function (e, t) {
      var r = X[e] || (X[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (Z.removeEventListener = function (e, t) {
      var r = X[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    (Z.batch = function (e, t) {
      function Do(e, t) {
        var r = [],
          n = [],
          o = Ke.delayedCall(i, function () {
            t(r, n), (r = []), (n = []);
          }).pause();
        return function (e) {
          r.length || o.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && o.progress(1);
        };
      }
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t)
        o[r] =
          "on" === r.substr(0, 2) && Ka(t[r]) && "onRefreshInit" !== r
            ? Do(0, t[r])
            : t[r];
      return (
        Ka(a) &&
          ((a = a()),
          nb(Z, "refresh", function () {
            return (a = t.batchMax());
          })),
        et(e).forEach(function (e) {
          var t = {};
          for (r in o) t[r] = o[r];
          (t.trigger = e), n.push(Z.create(t));
        }),
        n
      );
    });
  function gc(e, t, r, n) {
    return (
      n < t ? e(n) : t < 0 && e(0),
      n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    );
  }
  function hc(e, t) {
    !0 === t
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          !0 === t
            ? "auto"
            : t
            ? "pan-" + t + (k.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === qe && hc(Ge, t);
  }
  function jc(e) {
    var t,
      r = e.event,
      n = e.target,
      o = e.axis,
      i = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = i._gsap || Ke.core.getCache(i),
      s = gt();
    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (; i && i.scrollHeight <= i.clientHeight; ) i = i.parentNode;
      (a._isScroll =
        i &&
        !Da(i) &&
        i !== n &&
        (te[(t = db(i)).overflowY] || te[t.overflowX])),
        (a._isScrollT = s);
    }
    (!a._isScroll && "x" !== o) || (r.stopPropagation(), (r._gsapAllow = !0));
  }
  function kc(e, t, r, n) {
    return k.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && jc),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && nb(je, k.eventTypes[0], ne, !1, !0);
      },
      onDisable: function onDisable() {
        return ob(je, k.eventTypes[0], ne, !0);
      },
    });
  }
  function oc(e) {
    function zp() {
      return (o = !1);
    }
    function Cp() {
      (i = Ha(d, Ne)),
        (T = tt(P ? 1 : 0, i)),
        f && (_ = tt(0, Ha(d, Je))),
        (l = It);
    }
    function Dp() {
      (h._gsap.y = Aa(parseFloat(h._gsap.y) + v.offset) + "px"),
        (h.style.transform =
          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
          parseFloat(h._gsap.y) +
          ", 0, 1)"),
        (v.offset = v.cacheID = 0);
    }
    function Jp() {
      Cp(),
        a.isActive() &&
          a.vars.scrollY > i &&
          (v() > i ? a.progress(1) && v(i) : a.resetTo("scrollY", i));
    }
    Ma(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var n,
      i,
      l,
      o,
      a,
      c,
      u,
      s,
      f = e.normalizeScrollX,
      t = e.momentum,
      r = e.allowNestedScroll,
      d = I(e.target) || qe,
      p = Ke.core.globals().ScrollSmoother,
      g = p && p.get(),
      h =
        P &&
        ((e.content && I(e.content)) ||
          (g && !1 !== e.content && !g.smooth() && g.content())),
      v = J(d, Ne),
      b = J(d, Je),
      m = 1,
      y =
        (k.isTouch && We.visualViewport
          ? We.visualViewport.scale * We.visualViewport.width
          : We.outerWidth) / We.innerWidth,
      x = 0,
      S = Ka(t)
        ? function () {
            return t(n);
          }
        : function () {
            return t || 2.8;
          },
      w = kc(d, e.type, !0, r),
      _ = za,
      T = za;
    return (
      h && Ke.set(h, { y: "+=0" }),
      (e.ignoreCheck = function (e) {
        return (
          (P &&
            "touchmove" === e.type &&
            (function ignoreDrag() {
              if (o) {
                requestAnimationFrame(zp);
                var e = Aa(n.deltaY / 2),
                  t = T(v.v - e);
                if (h && t !== v.v + v.offset) {
                  v.offset = t - v.v;
                  var r = Aa((parseFloat(h && h._gsap.y) || 0) - v.offset);
                  (h.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    r +
                    ", 0, 1)"),
                    (h._gsap.y = r + "px"),
                    (v.cacheID = Le.cache),
                    j();
                }
                return !0;
              }
              v.offset && Dp(), (o = !0);
            })()) ||
          (1.05 < m && "touchstart" !== e.type) ||
          n.isGesturing ||
          (e.touches && 1 < e.touches.length)
        );
      }),
      (e.onPress = function () {
        var e = m;
        (m = Aa(((We.visualViewport && We.visualViewport.scale) || 1) / y)),
          a.pause(),
          e !== m && hc(d, 1.01 < m || (!f && "x")),
          (c = b()),
          (u = v()),
          Cp(),
          (l = It);
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((v.offset && Dp(), t)) {
            Le.cache++;
            var r,
              n,
              o = S();
            f &&
              ((n = (r = b()) + (0.05 * o * -e.velocityX) / 0.227),
              (o *= gc(b, r, n, Ha(d, Je))),
              (a.vars.scrollX = _(n))),
              (n = (r = v()) + (0.05 * o * -e.velocityY) / 0.227),
              (o *= gc(v, r, n, Ha(d, Ne))),
              (a.vars.scrollY = T(n)),
              a.invalidate().duration(o).play(0.01),
              ((P && a.vars.scrollY >= i) || i - 1 <= r) &&
                Ke.to({}, { onUpdate: Jp, duration: o });
          } else s.restart(!0);
        }),
      (e.onWheel = function () {
        a._ts && a.pause(), 1e3 < gt() - x && ((l = 0), (x = gt()));
      }),
      (e.onChange = function (e, t, r, n, o) {
        if (
          (It !== l && Cp(),
          t && f && b(_(n[2] === t ? c + (e.startX - e.x) : b() + t - n[1])),
          r)
        ) {
          v.offset && Dp();
          var i = o[2] === r,
            a = i ? u + e.startY - e.y : v() + r - o[1],
            s = T(a);
          i && a !== s && (u += s - a), v(s);
        }
        (r || t) && j();
      }),
      (e.onEnable = function () {
        hc(d, !f && "x"),
          Z.addEventListener("refresh", Jp),
          nb(We, "resize", Jp),
          v.smooth &&
            ((v.target.style.scrollBehavior = "auto"),
            (v.smooth = b.smooth = !1)),
          w.enable();
      }),
      (e.onDisable = function () {
        hc(d, !0),
          ob(We, "resize", Jp),
          Z.removeEventListener("refresh", Jp),
          w.kill();
      }),
      (e.lockAxis = !1 !== e.lockAxis),
      ((n = new k(e)).iOS = P) && !v() && v(1),
      P && Ke.ticker.add(za),
      (s = n._dc),
      (a = Ke.to(n, {
        ease: "power4",
        paused: !0,
        scrollX: f ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onComplete: s.vars.onComplete,
      })),
      n
    );
  }
  var ee,
    te = { auto: 1, scroll: 1 },
    re = /(input|label|select|textarea)/i,
    ne = function _captureInputs(e) {
      var t = re.test(e.target.tagName);
      (t || ee) && ((e._gsapAllow = !0), (ee = t));
    };
  (Z.sort = function (e) {
    return Ot.sort(
      e ||
        function (e, t) {
          return (
            -1e6 * (e.vars.refreshPriority || 0) +
            e.start -
            (t.start + -1e6 * (t.vars.refreshPriority || 0))
          );
        }
    );
  }),
    (Z.observe = function (e) {
      return new k(e);
    }),
    (Z.normalizeScroll = function (e) {
      if (void 0 === e) return h;
      if (!0 === e && h) return h.enable();
      if (!1 === e) return h && h.kill();
      var t = e instanceof k ? e : oc(e);
      return h && h.target === t.target && h.kill(), Da(t.target) && (h = t), t;
    }),
    (Z.core = {
      _getVelocityProp: K,
      _inputObserver: kc,
      _scrollers: Le,
      _proxies: Fe,
      bridge: {
        ss: function ss() {
          ht || H("scrollStart"), (ht = gt());
        },
        ref: function ref() {
          return nt;
        },
      },
    }),
    Ca() && Ke.registerPlugin(Z),
    (e.ScrollTrigger = Z),
    (e.default = Z);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

/* locomotive-scroll@3.5.4/ */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = t || self).LocomotiveScroll = e());
})(this, function () {
  "use strict";
  function s(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function n(t, e) {
    for (var i = 0; i < e.length; i++) {
      var s = e[i];
      (s.enumerable = s.enumerable || !1),
        (s.configurable = !0),
        "value" in s && (s.writable = !0),
        Object.defineProperty(t, s.key, s);
    }
  }
  function o(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  }
  function e(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      t &&
        (s = s.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        i.push.apply(i, s);
    }
    return i;
  }
  function i(n) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? e(Object(o), !0).forEach(function (t) {
            var e, i, s;
            (e = n),
              (s = o[(i = t)]),
              i in e
                ? Object.defineProperty(e, i, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[i] = s);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
        : e(Object(o)).forEach(function (t) {
            Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(o, t));
          });
    }
    return n;
  }
  function l(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && a(t, e);
  }
  function r(t) {
    return (r = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function a(t, e) {
    return (a =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function c(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function h(t, e) {
    return !e || ("object" != typeof e && "function" != typeof e) ? c(t) : e;
  }
  function u(t, e, i) {
    return (u =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, i) {
            var s = (function (t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = r(t));

              );
              return t;
            })(t, e);
            if (s) {
              var n = Object.getOwnPropertyDescriptor(s, e);
              return n.get ? n.get.call(i) : n.value;
            }
          })(t, e, i || t);
  }
  function v(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, i = new Array(t.length); e < t.length; e++)
            i[e] = t[e];
          return i;
        }
      })(t) ||
      (function (t) {
        if (
          Symbol.iterator in Object(t) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        )
          return Array.from(t);
      })(t) ||
      (function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      })()
    );
  }
  var d = {
      el: document,
      elMobile: document,
      name: "scroll",
      offset: [0, 0],
      repeat: !1,
      smooth: !1,
      smoothMobile: !1,
      direction: "vertical",
      lerp: 0.1,
      class: "is-inview",
      scrollbarClass: "c-scrollbar",
      scrollingClass: "has-scroll-scrolling",
      draggingClass: "has-scroll-dragging",
      smoothClass: "has-scroll-smooth",
      initClass: "has-scroll-init",
      getSpeed: !1,
      getDirection: !1,
      multiplier: 1,
      firefoxMultiplier: 50,
      touchMultiplier: 2,
      scrollFromAnywhere: !1,
    },
    f = (function () {
      function e() {
        var t =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        s(this, e),
          Object.assign(this, d, t),
          (this.namespace = "locomotive"),
          (this.html = document.documentElement),
          (this.windowHeight = window.innerHeight),
          (this.windowMiddle = this.windowHeight / 2),
          (this.els = []),
          (this.listeners = {}),
          (this.hasScrollTicking = !1),
          (this.hasCallEventSet = !1),
          (this.checkScroll = this.checkScroll.bind(this)),
          (this.checkResize = this.checkResize.bind(this)),
          (this.checkEvent = this.checkEvent.bind(this)),
          (this.instance = {
            scroll: { x: 0, y: 0 },
            limit: this.html.offsetHeight,
          }),
          this.getDirection && (this.instance.direction = null),
          this.getDirection && (this.instance.speed = 0),
          this.html.classList.add(this.initClass),
          window.addEventListener("resize", this.checkResize, !1);
      }
      return (
        o(e, [
          {
            key: "init",
            value: function () {
              this.initEvents();
            },
          },
          {
            key: "checkScroll",
            value: function () {
              this.dispatchScroll();
            },
          },
          {
            key: "checkResize",
            value: function () {
              var t = this;
              this.resizeTick ||
                ((this.resizeTick = !0),
                requestAnimationFrame(function () {
                  t.resize(), (t.resizeTick = !1);
                }));
            },
          },
          { key: "resize", value: function () {} },
          {
            key: "initEvents",
            value: function () {
              var e = this;
              (this.scrollToEls = this.el.querySelectorAll(
                "[data-".concat(this.name, "-to]")
              )),
                (this.setScrollTo = this.setScrollTo.bind(this)),
                this.scrollToEls.forEach(function (t) {
                  t.addEventListener("click", e.setScrollTo, !1);
                });
            },
          },
          {
            key: "setScrollTo",
            value: function (t) {
              t.preventDefault(),
                this.scrollTo(
                  t.currentTarget.getAttribute(
                    "data-".concat(this.name, "-href")
                  ) || t.currentTarget.getAttribute("href"),
                  t.currentTarget.getAttribute(
                    "data-".concat(this.name, "-offset")
                  )
                );
            },
          },
          { key: "addElements", value: function () {} },
          {
            key: "detectElements",
            value: function (i) {
              var s = this,
                n = this.instance.scroll.y,
                o = n + this.windowHeight;
              this.els.forEach(function (t, e) {
                !t ||
                  (t.inView && !i) ||
                  (o >= t.top && n < t.bottom && s.setInView(t, e)),
                  t &&
                    t.inView &&
                    (o < t.top || n > t.bottom) &&
                    s.setOutOfView(t, e);
              }),
                (this.els = this.els.filter(function (t, e) {
                  return null !== t;
                })),
                (this.hasScrollTicking = !1);
            },
          },
          {
            key: "setInView",
            value: function (t, e) {
              (this.els[e].inView = !0),
                t.el.classList.add(t.class),
                t.call &&
                  this.hasCallEventSet &&
                  (this.dispatchCall(t, "enter"),
                  t.repeat || (this.els[e].call = !1)),
                t.repeat ||
                  t.speed ||
                  t.sticky ||
                  ((!t.call || (t.call && this.hasCallEventSet)) &&
                    (this.els[e] = null));
            },
          },
          {
            key: "setOutOfView",
            value: function (t, e) {
              (t.repeat || void 0 !== t.speed) && (this.els[e].inView = !1),
                t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                t.repeat && t.el.classList.remove(t.class);
            },
          },
          {
            key: "dispatchCall",
            value: function (t, e) {
              (this.callWay = e),
                (this.callValue = t.call.split(",").map(function (t) {
                  return t.trim();
                })),
                (this.callObj = t),
                1 == this.callValue.length &&
                  (this.callValue = this.callValue[0]);
              var i = new Event(this.namespace + "call");
              this.el.dispatchEvent(i);
            },
          },
          {
            key: "dispatchScroll",
            value: function () {
              var t = new Event(this.namespace + "scroll");
              this.el.dispatchEvent(t);
            },
          },
          {
            key: "setEvents",
            value: function (t, e) {
              this.listeners[t] || (this.listeners[t] = []);
              var i = this.listeners[t];
              i.push(e),
                1 === i.length &&
                  this.el.addEventListener(
                    this.namespace + t,
                    this.checkEvent,
                    !1
                  ),
                "call" === t &&
                  ((this.hasCallEventSet = !0), this.detectElements(!0));
            },
          },
          {
            key: "unsetEvents",
            value: function (t, e) {
              if (this.listeners[t]) {
                var i = this.listeners[t],
                  s = i.indexOf(e);
                s < 0 ||
                  (i.splice(s, 1),
                  0 === i.index &&
                    this.el.removeEventListener(
                      this.namespace + t,
                      this.checkEvent,
                      !1
                    ));
              }
            },
          },
          {
            key: "checkEvent",
            value: function (t) {
              var e = this,
                i = t.type.replace(this.namespace, ""),
                s = this.listeners[i];
              s &&
                0 !== s.length &&
                s.forEach(function (t) {
                  switch (i) {
                    case "scroll":
                      return t(e.instance);
                    case "call":
                      return t(e.callValue, e.callWay, e.callObj);
                    default:
                      return t();
                  }
                });
            },
          },
          { key: "startScroll", value: function () {} },
          { key: "stopScroll", value: function () {} },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance.scroll = { x: 0, y: 0 };
            },
          },
          {
            key: "destroy",
            value: function () {
              var e = this;
              window.removeEventListener("resize", this.checkResize, !1),
                Object.keys(this.listeners).forEach(function (t) {
                  e.el.removeEventListener(e.namespace + t, e.checkEvent, !1);
                }),
                (this.listeners = {}),
                this.scrollToEls.forEach(function (t) {
                  t.removeEventListener("click", e.setScrollTo, !1);
                });
            },
          },
        ]),
        e
      );
    })(),
    p =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function t(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var y = t(function (t, e) {
      t.exports = {
        polyfill: function () {
          var a = window,
            c = document;
          if (
            !(
              "scrollBehavior" in c.documentElement.style &&
              !0 !== a.__forceSmoothScrollPolyfill__
            )
          ) {
            var t,
              e = a.HTMLElement || a.Element,
              l = 468,
              h = {
                scroll: a.scroll || a.scrollTo,
                scrollBy: a.scrollBy,
                elementScroll: e.prototype.scroll || d,
                scrollIntoView: e.prototype.scrollIntoView,
              },
              u =
                a.performance && a.performance.now
                  ? a.performance.now.bind(a.performance)
                  : Date.now,
              i =
                ((t = a.navigator.userAgent),
                new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t)
                  ? 1
                  : 0);
            (a.scroll = a.scrollTo =
              function () {
                void 0 !== arguments[0] &&
                  (!0 !== s(arguments[0])
                    ? r.call(
                        a,
                        c.body,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : a.scrollX || a.pageXOffset,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : a.scrollY || a.pageYOffset
                      )
                    : h.scroll.call(
                        a,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : a.scrollX || a.pageXOffset,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : a.scrollY || a.pageYOffset
                      ));
              }),
              (a.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (s(arguments[0])
                    ? h.scrollBy.call(
                        a,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : 0,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                      )
                    : r.call(
                        a,
                        c.body,
                        ~~arguments[0].left + (a.scrollX || a.pageXOffset),
                        ~~arguments[0].top + (a.scrollY || a.pageYOffset)
                      ));
              }),
              (e.prototype.scroll = e.prototype.scrollTo =
                function () {
                  if (void 0 !== arguments[0])
                    if (!0 !== s(arguments[0])) {
                      var t = arguments[0].left,
                        e = arguments[0].top;
                      r.call(
                        this,
                        this,
                        void 0 === t ? this.scrollLeft : ~~t,
                        void 0 === e ? this.scrollTop : ~~e
                      );
                    } else {
                      if (
                        "number" == typeof arguments[0] &&
                        void 0 === arguments[1]
                      )
                        throw new SyntaxError("Value could not be converted");
                      h.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : "object" != typeof arguments[0]
                          ? ~~arguments[0]
                          : this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : void 0 !== arguments[1]
                          ? ~~arguments[1]
                          : this.scrollTop
                      );
                    }
                }),
              (e.prototype.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (!0 !== s(arguments[0])
                    ? this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior,
                      })
                    : h.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left + this.scrollLeft
                          : ~~arguments[0] + this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top + this.scrollTop
                          : ~~arguments[1] + this.scrollTop
                      ));
              }),
              (e.prototype.scrollIntoView = function () {
                if (!0 !== s(arguments[0])) {
                  var t = (function (t) {
                      for (
                        ;
                        t !== c.body &&
                        !1 ===
                          ((i = n((e = t), "Y") && o(e, "Y")),
                          (s = n(e, "X") && o(e, "X")),
                          i || s);

                      )
                        t = t.parentNode || t.host;
                      var e, i, s;
                      return t;
                    })(this),
                    e = t.getBoundingClientRect(),
                    i = this.getBoundingClientRect();
                  t !== c.body
                    ? (r.call(
                        this,
                        t,
                        t.scrollLeft + i.left - e.left,
                        t.scrollTop + i.top - e.top
                      ),
                      "fixed" !== a.getComputedStyle(t).position &&
                        a.scrollBy({
                          left: e.left,
                          top: e.top,
                          behavior: "smooth",
                        }))
                    : a.scrollBy({
                        left: i.left,
                        top: i.top,
                        behavior: "smooth",
                      });
                } else
                  h.scrollIntoView.call(
                    this,
                    void 0 === arguments[0] || arguments[0]
                  );
              });
          }
          function d(t, e) {
            (this.scrollLeft = t), (this.scrollTop = e);
          }
          function s(t) {
            if (
              null === t ||
              "object" != typeof t ||
              void 0 === t.behavior ||
              "auto" === t.behavior ||
              "instant" === t.behavior
            )
              return !0;
            if ("object" == typeof t && "smooth" === t.behavior) return !1;
            throw new TypeError(
              "behavior member of ScrollOptions " +
                t.behavior +
                " is not a valid value for enumeration ScrollBehavior."
            );
          }
          function n(t, e) {
            return "Y" === e
              ? t.clientHeight + i < t.scrollHeight
              : "X" === e
              ? t.clientWidth + i < t.scrollWidth
              : void 0;
          }
          function o(t, e) {
            var i = a.getComputedStyle(t, null)["overflow" + e];
            return "auto" === i || "scroll" === i;
          }
          function f(t) {
            var e,
              i,
              s,
              n,
              o = (u() - t.startTime) / l;
            (n = o = 1 < o ? 1 : o),
              (e = 0.5 * (1 - Math.cos(Math.PI * n))),
              (i = t.startX + (t.x - t.startX) * e),
              (s = t.startY + (t.y - t.startY) * e),
              t.method.call(t.scrollable, i, s),
              (i === t.x && s === t.y) || a.requestAnimationFrame(f.bind(a, t));
          }
          function r(t, e, i) {
            var s,
              n,
              o,
              l,
              r = u();
            (l =
              t === c.body
                ? ((n = (s = a).scrollX || a.pageXOffset),
                  (o = a.scrollY || a.pageYOffset),
                  h.scroll)
                : ((n = (s = t).scrollLeft), (o = t.scrollTop), d)),
              f({
                scrollable: s,
                method: l,
                startTime: r,
                startX: n,
                startY: o,
                x: e,
                y: i,
              });
          }
        },
      };
    }),
    m =
      (y.polyfill,
      (function (t) {
        function i() {
          var t,
            e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return (
            s(this, i),
            (t = h(this, r(i).call(this, e))),
            window.addEventListener("scroll", t.checkScroll, !1),
            y.polyfill(),
            t
          );
        }
        return (
          l(i, f),
          o(i, [
            {
              key: "init",
              value: function () {
                (this.instance.scroll.y = window.pageYOffset),
                  this.addElements(),
                  this.detectElements(),
                  u(r(i.prototype), "init", this).call(this);
              },
            },
            {
              key: "checkScroll",
              value: function () {
                var t = this;
                u(r(i.prototype), "checkScroll", this).call(this),
                  this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.timestamp = Date.now())),
                  (this.instance.scroll.y = window.pageYOffset),
                  this.els.length &&
                    (this.hasScrollTicking ||
                      (requestAnimationFrame(function () {
                        t.detectElements();
                      }),
                      (this.hasScrollTicking = !0)));
              },
            },
            {
              key: "addDirection",
              value: function () {
                window.pageYOffset > this.instance.scroll.y
                  ? "down" !== this.instance.direction &&
                    (this.instance.direction = "down")
                  : window.pageYOffset < this.instance.scroll.y &&
                    "up" !== this.instance.direction &&
                    (this.instance.direction = "up");
              },
            },
            {
              key: "addSpeed",
              value: function () {
                window.pageYOffset != this.instance.scroll.y
                  ? (this.instance.speed =
                      (window.pageYOffset - this.instance.scroll.y) /
                      (Date.now() - this.timestamp))
                  : (this.instance.speed = 0);
              },
            },
            {
              key: "resize",
              value: function () {
                this.els.length &&
                  ((this.windowHeight = window.innerHeight),
                  this.updateElements());
              },
            },
            {
              key: "addElements",
              value: function () {
                var h = this;
                (this.els = []),
                  this.el
                    .querySelectorAll("[data-" + this.name + "]")
                    .forEach(function (t, e) {
                      var i = t.dataset[h.name + "Class"] || h.class,
                        s = t.getBoundingClientRect().top + h.instance.scroll.y,
                        n = s + t.offsetHeight,
                        o =
                          "string" == typeof t.dataset[h.name + "Offset"]
                            ? t.dataset[h.name + "Offset"].split(",")
                            : h.offset,
                        l = t.dataset[h.name + "Repeat"],
                        r = t.dataset[h.name + "Call"];
                      l = "false" != l && (null != l || h.repeat);
                      var a = h.getRelativeOffset(o),
                        c = {
                          el: t,
                          id: e,
                          class: i,
                          top: s + a[0],
                          bottom: n - a[1],
                          offset: o,
                          repeat: l,
                          inView: !!t.classList.contains(i),
                          call: r,
                        };
                      h.els.push(c);
                    });
              },
            },
            {
              key: "updateElements",
              value: function () {
                var o = this;
                this.els.forEach(function (t, e) {
                  var i =
                      t.el.getBoundingClientRect().top + o.instance.scroll.y,
                    s = i + t.el.offsetHeight,
                    n = o.getRelativeOffset(t.offset);
                  (o.els[e].top = i + n[0]), (o.els[e].bottom = s - n[1]);
                }),
                  (this.hasScrollTicking = !1);
              },
            },
            {
              key: "getRelativeOffset",
              value: function (t) {
                var e = [0, 0];
                if (t)
                  for (var i = 0; i < t.length; i++)
                    "string" == typeof t[i]
                      ? t[i].includes("%")
                        ? (e[i] = parseInt(
                            (t[i].replace("%", "") * this.windowHeight) / 100
                          ))
                        : (e[i] = parseInt(t[i]))
                      : (e[i] = t[i]);
                return e;
              },
            },
            {
              key: "scrollTo",
              value: function (t, e, i, s, n, o) {
                var l,
                  r = e ? parseInt(e) : 0;
                if ("string" == typeof t) {
                  if ("top" === t) l = this.html;
                  else if ("bottom" === t)
                    l = this.html.offsetHeight - window.innerHeight;
                  else if (!(l = document.querySelector(t))) return;
                } else if ("number" == typeof t) l = parseInt(t);
                else {
                  if (!t || !t.tagName)
                    return void console.warn(
                      "`targetOption` parameter is not valid"
                    );
                  l = t;
                }
                if (
                  ((r =
                    "number" != typeof l
                      ? l.getBoundingClientRect().top +
                        r +
                        this.instance.scroll.y
                      : l + r),
                  o)
                ) {
                  r = r.toFixed();
                  window.addEventListener("scroll", function t() {
                    window.pageYOffset.toFixed() === r &&
                      (window.removeEventListener("scroll", t), o());
                  });
                }
                window.scrollTo({ top: r, behavior: "smooth" });
              },
            },
            {
              key: "update",
              value: function () {
                this.addElements(), this.detectElements();
              },
            },
            {
              key: "destroy",
              value: function () {
                u(r(i.prototype), "destroy", this).call(this),
                  window.removeEventListener("scroll", this.checkScroll, !1);
              },
            },
          ]),
          i
        );
      })()),
    g = Object.getOwnPropertySymbols,
    w = Object.prototype.hasOwnProperty,
    b = Object.prototype.propertyIsEnumerable;
  var S = (function () {
    try {
      if (!Object.assign) return !1;
      var t = new String("abc");
      if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0])) return !1;
      for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
      if (
        "0123456789" !==
        Object.getOwnPropertyNames(e)
          .map(function (t) {
            return e[t];
          })
          .join("")
      )
        return !1;
      var s = {};
      return (
        "abcdefghijklmnopqrst".split("").forEach(function (t) {
          s[t] = t;
        }),
        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
      );
    } catch (t) {
      return !1;
    }
  })()
    ? Object.assign
    : function (t, e) {
        for (
          var i,
            s,
            n = (function (t) {
              if (null == t)
                throw new TypeError(
                  "Object.assign cannot be called with null or undefined"
                );
              return Object(t);
            })(t),
            o = 1;
          o < arguments.length;
          o++
        ) {
          for (var l in (i = Object(arguments[o])))
            w.call(i, l) && (n[l] = i[l]);
          if (g) {
            s = g(i);
            for (var r = 0; r < s.length; r++)
              b.call(i, s[r]) && (n[s[r]] = i[s[r]]);
          }
        }
        return n;
      };
  function k() {}
  k.prototype = {
    on: function (t, e, i) {
      var s = this.e || (this.e = {});
      return (s[t] || (s[t] = [])).push({ fn: e, ctx: i }), this;
    },
    once: function (t, e, i) {
      var s = this;
      function n() {
        s.off(t, n), e.apply(i, arguments);
      }
      return (n._ = e), this.on(t, n, i);
    },
    emit: function (t) {
      for (
        var e = [].slice.call(arguments, 1),
          i = ((this.e || (this.e = {}))[t] || []).slice(),
          s = 0,
          n = i.length;
        s < n;
        s++
      )
        i[s].fn.apply(i[s].ctx, e);
      return this;
    },
    off: function (t, e) {
      var i = this.e || (this.e = {}),
        s = i[t],
        n = [];
      if (s && e)
        for (var o = 0, l = s.length; o < l; o++)
          s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
      return n.length ? (i[t] = n) : delete i[t], this;
    },
  };
  var E = k,
    T = t(function (t, e) {
      (function () {
        (null !== e ? e : this).Lethargy = (function () {
          function t(t, e, i, s) {
            (this.stability = null != t ? Math.abs(t) : 8),
              (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
              (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
              (this.delay = null != s ? s : 150),
              (this.lastUpDeltas = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : e <= t;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this)),
              (this.lastDownDeltas = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : e <= t;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this)),
              (this.deltasTimestamp = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : e <= t;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this));
          }
          return (
            (t.prototype.check = function (t) {
              var e;
              return (
                null != (t = t.originalEvent || t).wheelDelta
                  ? (e = t.wheelDelta)
                  : null != t.deltaY
                  ? (e = -40 * t.deltaY)
                  : (null == t.detail && 0 !== t.detail) ||
                    (e = -40 * t.detail),
                this.deltasTimestamp.push(Date.now()),
                this.deltasTimestamp.shift(),
                0 < e
                  ? (this.lastUpDeltas.push(e),
                    this.lastUpDeltas.shift(),
                    this.isInertia(1))
                  : (this.lastDownDeltas.push(e),
                    this.lastDownDeltas.shift(),
                    this.isInertia(-1))
              );
            }),
            (t.prototype.isInertia = function (t) {
              var e, i, s, n, o, l, r;
              return null ===
                (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                ? t
                : !(
                    this.deltasTimestamp[2 * this.stability - 2] + this.delay >
                      Date.now() && e[0] === e[2 * this.stability - 1]
                  ) &&
                    ((s = e.slice(0, this.stability)),
                    (i = e.slice(this.stability, 2 * this.stability)),
                    (r = s.reduce(function (t, e) {
                      return t + e;
                    })),
                    (o = i.reduce(function (t, e) {
                      return t + e;
                    })),
                    (l = r / s.length),
                    (n = o / i.length),
                    Math.abs(l) < Math.abs(n * this.tolerance) &&
                      this.sensitivity < Math.abs(n) &&
                      t);
            }),
            (t.prototype.showLastUpDeltas = function () {
              return this.lastUpDeltas;
            }),
            (t.prototype.showLastDownDeltas = function () {
              return this.lastDownDeltas;
            }),
            t
          );
        })();
      }.call(p));
    }),
    O = {
      hasWheelEvent: "onwheel" in document,
      hasMouseWheelEvent: "onmousewheel" in document,
      hasTouch:
        "ontouchstart" in window ||
        window.TouchEvent ||
        (window.DocumentTouch && document instanceof DocumentTouch),
      hasTouchWin: navigator.msMaxTouchPoints && 1 < navigator.msMaxTouchPoints,
      hasPointer: !!window.navigator.msPointerEnabled,
      hasKeyDown: "onkeydown" in document,
      isFirefox: -1 < navigator.userAgent.indexOf("Firefox"),
    },
    D = Object.prototype.toString,
    L = Object.prototype.hasOwnProperty;
  function _(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  var M = T.Lethargy,
    x = "virtualscroll",
    C = P,
    H = 37,
    j = 38,
    B = 39,
    Y = 40,
    A = 32;
  function P(t) {
    !(function (t) {
      if (!t) return console.warn("bindAll requires at least one argument.");
      var e = Array.prototype.slice.call(arguments, 1);
      if (0 === e.length)
        for (var i in t)
          L.call(t, i) &&
            "function" == typeof t[i] &&
            "[object Function]" == D.call(t[i]) &&
            e.push(i);
      for (var s = 0; s < e.length; s++) {
        var n = e[s];
        t[n] = _(t[n], t);
      }
    })(
      this,
      "_onWheel",
      "_onMouseWheel",
      "_onTouchStart",
      "_onTouchMove",
      "_onKeyDown"
    ),
      (this.el = window),
      t && t.el && ((this.el = t.el), delete t.el),
      (this.options = S(
        {
          mouseMultiplier: 1,
          touchMultiplier: 2,
          firefoxMultiplier: 15,
          keyStep: 120,
          preventTouch: !1,
          unpreventTouchClass: "vs-touchmove-allowed",
          limitInertia: !1,
          useKeyboard: !0,
          useTouch: !0,
        },
        t
      )),
      this.options.limitInertia && (this._lethargy = new M()),
      (this._emitter = new E()),
      (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
      (this.touchStartX = null),
      (this.touchStartY = null),
      (this.bodyTouchAction = null),
      void 0 !== this.options.passive &&
        (this.listenerOptions = { passive: this.options.passive });
  }
  function R(t, e, i) {
    return (1 - i) * t + i * e;
  }
  function X(t) {
    var e = {};
    if (window.getComputedStyle) {
      var i = getComputedStyle(t),
        s = i.transform || i.webkitTransform || i.mozTransform,
        n = s.match(/^matrix3d\((.+)\)$/);
      return (
        n
          ? ((e.x = n ? parseFloat(n[1].split(", ")[12]) : 0),
            (e.y = n ? parseFloat(n[1].split(", ")[13]) : 0))
          : ((n = s.match(/^matrix\((.+)\)$/)),
            (e.x = n ? parseFloat(n[1].split(", ")[4]) : 0),
            (e.y = n ? parseFloat(n[1].split(", ")[5]) : 0)),
        e
      );
    }
  }
  function I(t) {
    for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
    return e;
  }
  (P.prototype._notify = function (t) {
    var e = this._event;
    (e.x += e.deltaX),
      (e.y += e.deltaY),
      this._emitter.emit(x, {
        x: e.x,
        y: e.y,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        originalEvent: t,
      });
  }),
    (P.prototype._onWheel = function (t) {
      var e = this.options;
      if (!this._lethargy || !1 !== this._lethargy.check(t)) {
        var i = this._event;
        (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
          (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
          O.isFirefox &&
            1 == t.deltaMode &&
            ((i.deltaX *= e.firefoxMultiplier),
            (i.deltaY *= e.firefoxMultiplier)),
          (i.deltaX *= e.mouseMultiplier),
          (i.deltaY *= e.mouseMultiplier),
          this._notify(t);
      }
    }),
    (P.prototype._onMouseWheel = function (t) {
      if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
        var e = this._event;
        (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
          (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
          this._notify(t);
      }
    }),
    (P.prototype._onTouchStart = function (t) {
      var e = t.targetTouches ? t.targetTouches[0] : t;
      (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
    }),
    (P.prototype._onTouchMove = function (t) {
      var e = this.options;
      e.preventTouch &&
        !t.target.classList.contains(e.unpreventTouchClass) &&
        t.preventDefault();
      var i = this._event,
        s = t.targetTouches ? t.targetTouches[0] : t;
      (i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier),
        (i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier),
        (this.touchStartX = s.pageX),
        (this.touchStartY = s.pageY),
        this._notify(t);
    }),
    (P.prototype._onKeyDown = function (t) {
      var e = this._event;
      e.deltaX = e.deltaY = 0;
      var i = window.innerHeight - 40;
      switch (t.keyCode) {
        case H:
        case j:
          e.deltaY = this.options.keyStep;
          break;
        case B:
        case Y:
          e.deltaY = -this.options.keyStep;
          break;
        case t.shiftKey:
          e.deltaY = i;
          break;
        case A:
          e.deltaY = -i;
          break;
        default:
          return;
      }
      this._notify(t);
    }),
    (P.prototype._bind = function () {
      O.hasWheelEvent &&
        this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
        O.hasMouseWheelEvent &&
          this.el.addEventListener(
            "mousewheel",
            this._onMouseWheel,
            this.listenerOptions
          ),
        O.hasTouch &&
          this.options.useTouch &&
          (this.el.addEventListener(
            "touchstart",
            this._onTouchStart,
            this.listenerOptions
          ),
          this.el.addEventListener(
            "touchmove",
            this._onTouchMove,
            this.listenerOptions
          )),
        O.hasPointer &&
          O.hasTouchWin &&
          ((this.bodyTouchAction = document.body.style.msTouchAction),
          (document.body.style.msTouchAction = "none"),
          this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
        O.hasKeyDown &&
          this.options.useKeyboard &&
          document.addEventListener("keydown", this._onKeyDown);
    }),
    (P.prototype._unbind = function () {
      O.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
        O.hasMouseWheelEvent &&
          this.el.removeEventListener("mousewheel", this._onMouseWheel),
        O.hasTouch &&
          (this.el.removeEventListener("touchstart", this._onTouchStart),
          this.el.removeEventListener("touchmove", this._onTouchMove)),
        O.hasPointer &&
          O.hasTouchWin &&
          ((document.body.style.msTouchAction = this.bodyTouchAction),
          this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
        O.hasKeyDown &&
          this.options.useKeyboard &&
          document.removeEventListener("keydown", this._onKeyDown);
    }),
    (P.prototype.on = function (t, e) {
      this._emitter.on(x, t, e);
      var i = this._emitter.e;
      i && i[x] && 1 === i[x].length && this._bind();
    }),
    (P.prototype.off = function (t, e) {
      this._emitter.off(x, t, e);
      var i = this._emitter.e;
      (!i[x] || i[x].length <= 0) && this._unbind();
    }),
    (P.prototype.reset = function () {
      var t = this._event;
      (t.x = 0), (t.y = 0);
    }),
    (P.prototype.destroy = function () {
      this._emitter.off(), this._unbind();
    });
  var V = 4,
    F = 1e-7,
    W = 10,
    q = "function" == typeof Float32Array;
  function K(t, e) {
    return 1 - 3 * e + 3 * t;
  }
  function z(t, e) {
    return 3 * e - 6 * t;
  }
  function N(t) {
    return 3 * t;
  }
  function U(t, e, i) {
    return ((K(e, i) * t + z(e, i)) * t + N(e)) * t;
  }
  function $(t, e, i) {
    return 3 * K(e, i) * t * t + 2 * z(e, i) * t + N(e);
  }
  function G(t) {
    return t;
  }
  var J = function (o, e, l, i) {
      if (!(0 <= o && o <= 1 && 0 <= l && l <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      if (o === e && l === i) return G;
      for (var r = q ? new Float32Array(11) : new Array(11), t = 0; t < 11; ++t)
        r[t] = U(0.1 * t, o, l);
      function s(t) {
        for (var e = 0, i = 1; 10 !== i && r[i] <= t; ++i) e += 0.1;
        var s = e + 0.1 * ((t - r[--i]) / (r[i + 1] - r[i])),
          n = $(s, o, l);
        return 0.001 <= n
          ? (function (t, e, i, s) {
              for (var n = 0; n < V; ++n) {
                var o = $(e, i, s);
                if (0 === o) return e;
                e -= (U(e, i, s) - t) / o;
              }
              return e;
            })(t, s, o, l)
          : 0 === n
          ? s
          : (function (t, e, i, s, n) {
              for (
                var o, l, r = 0;
                0 < (o = U((l = e + (i - e) / 2), s, n) - t)
                  ? (i = l)
                  : (e = l),
                  Math.abs(o) > F && ++r < W;

              );
              return l;
            })(t, e, e + 0.1, o, l);
      }
      return function (t) {
        return 0 === t ? 0 : 1 === t ? 1 : U(s(t), e, i);
      };
    },
    Q = 38,
    Z = 40,
    tt = 32,
    et = 9,
    it = 33,
    st = 34,
    nt = 36,
    ot = 35,
    lt = (function (t) {
      function n() {
        var t,
          e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          s(this, n),
          window.scrollTo(0, 0),
          (history.scrollRestoration = "manual"),
          (t = h(this, r(n).call(this, e))).inertia &&
            (t.lerp = 0.1 * t.inertia),
          (t.isScrolling = !1),
          (t.isDraggingScrollbar = !1),
          (t.isTicking = !1),
          (t.hasScrollTicking = !1),
          (t.parallaxElements = []),
          (t.stop = !1),
          (t.checkKey = t.checkKey.bind(c(t))),
          window.addEventListener("keydown", t.checkKey, !1),
          t
        );
      }
      return (
        l(n, f),
        o(n, [
          {
            key: "init",
            value: function () {
              var e = this;
              this.html.classList.add(this.smoothClass),
                (this.instance = i({ delta: { x: 0, y: 0 } }, this.instance)),
                (this.vs = new C({
                  el: this.scrollFromAnywhere ? document : this.el,
                  mouseMultiplier:
                    -1 < navigator.platform.indexOf("Win") ? 1 : 0.4,
                  firefoxMultiplier: this.firefoxMultiplier,
                  touchMultiplier: this.touchMultiplier,
                  useKeyboard: !1,
                  passive: !0,
                })),
                this.vs.on(function (t) {
                  e.stop ||
                    (e.isTicking ||
                      e.isDraggingScrollbar ||
                      (requestAnimationFrame(function () {
                        e.updateDelta(t), e.isScrolling || e.startScrolling();
                      }),
                      (e.isTicking = !0)),
                    (e.isTicking = !1));
                }),
                this.setScrollLimit(),
                this.initScrollBar(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.transformElements(!0, !0),
                this.checkScroll(!0),
                u(r(n.prototype), "init", this).call(this);
            },
          },
          {
            key: "setScrollLimit",
            value: function () {
              this.instance.limit = this.el.offsetHeight - this.windowHeight;
            },
          },
          {
            key: "startScrolling",
            value: function () {
              (this.isScrolling = !0),
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass);
            },
          },
          {
            key: "stopScrolling",
            value: function () {
              this.scrollToRaf &&
                (cancelAnimationFrame(this.scrollToRaf),
                (this.scrollToRaf = null)),
                (this.isScrolling = !1),
                (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
                this.html.classList.remove(this.scrollingClass);
            },
          },
          {
            key: "checkKey",
            value: function (t) {
              var e = this;
              if (this.stop)
                t.keyCode == et &&
                  requestAnimationFrame(function () {
                    (e.html.scrollTop = 0), (document.body.scrollTop = 0);
                  });
              else {
                switch (t.keyCode) {
                  case et:
                    requestAnimationFrame(function () {
                      (e.html.scrollTop = 0),
                        (document.body.scrollTop = 0),
                        e.scrollTo(
                          document.activeElement,
                          -window.innerHeight / 2
                        );
                    });
                    break;
                  case Q:
                    this.instance.delta.y -= 240;
                    break;
                  case Z:
                    this.instance.delta.y += 240;
                    break;
                  case it:
                    this.instance.delta.y -= window.innerHeight;
                    break;
                  case st:
                    this.instance.delta.y += window.innerHeight;
                    break;
                  case nt:
                    this.instance.delta.y -= this.instance.limit;
                    break;
                  case ot:
                    this.instance.delta.y += this.instance.limit;
                    break;
                  case tt:
                    document.activeElement instanceof HTMLInputElement ||
                      document.activeElement instanceof HTMLTextAreaElement ||
                      (t.shiftKey
                        ? (this.instance.delta.y -= window.innerHeight)
                        : (this.instance.delta.y += window.innerHeight));
                    break;
                  default:
                    return;
                }
                this.instance.delta.y < 0 && (this.instance.delta.y = 0),
                  this.instance.delta.y > this.instance.limit &&
                    (this.instance.delta.y = this.instance.limit),
                  (this.isScrolling = !0),
                  this.checkScroll(),
                  this.html.classList.add(this.scrollingClass);
              }
            },
          },
          {
            key: "checkScroll",
            value: function () {
              var t = this;
              if (
                (0 < arguments.length &&
                  void 0 !== arguments[0] &&
                  arguments[0]) ||
                this.isScrolling ||
                this.isDraggingScrollbar
              ) {
                this.hasScrollTicking ||
                  (requestAnimationFrame(function () {
                    return t.checkScroll();
                  }),
                  (this.hasScrollTicking = !0)),
                  this.updateScroll();
                var e = Math.abs(
                  this.instance.delta.y - this.instance.scroll.y
                );
                !this.animatingScroll &&
                  ((e < 0.5 && 0 != this.instance.delta.y) ||
                    (e < 0.5 && 0 == this.instance.delta.y)) &&
                  this.stopScrolling();
                for (var i = this.sections.length - 1; 0 <= i; i--)
                  this.sections[i].persistent ||
                  (this.instance.scroll.y > this.sections[i].offset &&
                    this.instance.scroll.y < this.sections[i].limit)
                    ? (this.transform(
                        this.sections[i].el,
                        0,
                        -this.instance.scroll.y
                      ),
                      this.sections[i].inView ||
                        ((this.sections[i].inView = !0),
                        (this.sections[i].el.style.opacity = 1),
                        (this.sections[i].el.style.pointerEvents = "all"),
                        this.sections[i].el.setAttribute(
                          "data-".concat(this.name, "-section-inview"),
                          ""
                        )))
                    : (this.sections[i].inView &&
                        ((this.sections[i].inView = !1),
                        (this.sections[i].el.style.opacity = 0),
                        (this.sections[i].el.style.pointerEvents = "none"),
                        this.sections[i].el.removeAttribute(
                          "data-".concat(this.name, "-section-inview")
                        )),
                      this.transform(this.sections[i].el, 0, 0));
                this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.timestamp = Date.now())),
                  this.detectElements(),
                  this.transformElements();
                var s =
                  (this.instance.scroll.y / this.instance.limit) *
                  this.scrollBarLimit;
                this.transform(this.scrollbarThumb, 0, s),
                  u(r(n.prototype), "checkScroll", this).call(this),
                  (this.hasScrollTicking = !1);
              }
            },
          },
          {
            key: "resize",
            value: function () {
              (this.windowHeight = window.innerHeight),
                (this.windowMiddle = this.windowHeight / 2),
                this.update();
            },
          },
          {
            key: "updateDelta",
            value: function (t) {
              (this.instance.delta.y -= t.deltaY * this.multiplier),
                this.instance.delta.y < 0 && (this.instance.delta.y = 0),
                this.instance.delta.y > this.instance.limit &&
                  (this.instance.delta.y = this.instance.limit);
            },
          },
          {
            key: "updateScroll",
            value: function (t) {
              this.isScrolling || this.isDraggingScrollbar
                ? (this.instance.scroll.y = R(
                    this.instance.scroll.y,
                    this.instance.delta.y,
                    this.lerp
                  ))
                : this.instance.scroll.y > this.instance.limit
                ? this.setScroll(this.instance.scroll.x, this.instance.limit)
                : this.instance.scroll.y < 0
                ? this.setScroll(this.instance.scroll.x, 0)
                : this.setScroll(this.instance.scroll.x, this.instance.delta.y);
            },
          },
          {
            key: "addDirection",
            value: function () {
              this.instance.delta.y > this.instance.scroll.y
                ? "down" !== this.instance.direction &&
                  (this.instance.direction = "down")
                : this.instance.delta.y < this.instance.scroll.y &&
                  "up" !== this.instance.direction &&
                  (this.instance.direction = "up");
            },
          },
          {
            key: "addSpeed",
            value: function () {
              this.instance.delta.y != this.instance.scroll.y
                ? (this.instance.speed =
                    (this.instance.delta.y - this.instance.scroll.y) /
                    Math.max(1, Date.now() - this.timestamp))
                : (this.instance.speed = 0);
            },
          },
          {
            key: "initScrollBar",
            value: function () {
              (this.scrollbar = document.createElement("span")),
                (this.scrollbarThumb = document.createElement("span")),
                this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                this.scrollbarThumb.classList.add(
                  "".concat(this.scrollbarClass, "_thumb")
                ),
                this.scrollbar.append(this.scrollbarThumb),
                document.body.append(this.scrollbar),
                (this.getScrollBar = this.getScrollBar.bind(this)),
                (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                (this.moveScrollBar = this.moveScrollBar.bind(this)),
                this.scrollbarThumb.addEventListener(
                  "mousedown",
                  this.getScrollBar
                ),
                window.addEventListener("mouseup", this.releaseScrollBar),
                window.addEventListener("mousemove", this.moveScrollBar),
                this.instance.limit + this.windowHeight <= this.windowHeight ||
                  ((this.scrollbarHeight =
                    this.scrollbar.getBoundingClientRect().height),
                  (this.scrollbarThumb.style.height = "".concat(
                    (this.scrollbarHeight * this.scrollbarHeight) /
                      (this.instance.limit + this.scrollbarHeight),
                    "px"
                  )),
                  (this.scrollBarLimit =
                    this.scrollbarHeight -
                    this.scrollbarThumb.getBoundingClientRect().height));
            },
          },
          {
            key: "reinitScrollBar",
            value: function () {
              this.instance.limit + this.windowHeight <= this.windowHeight ||
                ((this.scrollbarHeight =
                  this.scrollbar.getBoundingClientRect().height),
                (this.scrollbarThumb.style.height = "".concat(
                  (this.scrollbarHeight * this.scrollbarHeight) /
                    (this.instance.limit + this.scrollbarHeight),
                  "px"
                )),
                (this.scrollBarLimit =
                  this.scrollbarHeight -
                  this.scrollbarThumb.getBoundingClientRect().height));
            },
          },
          {
            key: "destroyScrollBar",
            value: function () {
              this.scrollbarThumb.removeEventListener(
                "mousedown",
                this.getScrollBar
              ),
                window.removeEventListener("mouseup", this.releaseScrollBar),
                window.removeEventListener("mousemove", this.moveScrollBar),
                this.scrollbar.remove();
            },
          },
          {
            key: "getScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !0),
                this.checkScroll(),
                this.html.classList.remove(this.scrollingClass),
                this.html.classList.add(this.draggingClass);
            },
          },
          {
            key: "releaseScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !1),
                this.html.classList.add(this.scrollingClass),
                this.html.classList.remove(this.draggingClass);
            },
          },
          {
            key: "moveScrollBar",
            value: function (e) {
              var i = this;
              !this.isTicking &&
                this.isDraggingScrollbar &&
                (requestAnimationFrame(function () {
                  var t =
                    (((100 * e.clientY) / i.scrollbarHeight) *
                      i.instance.limit) /
                    100;
                  0 < t && t < i.instance.limit && (i.instance.delta.y = t);
                }),
                (this.isTicking = !0)),
                (this.isTicking = !1);
            },
          },
          {
            key: "addElements",
            value: function () {
              var k = this;
              (this.els = []),
                (this.parallaxElements = []),
                this.sections.forEach(function (t, S) {
                  k.sections[S].el
                    .querySelectorAll("[data-".concat(k.name, "]"))
                    .forEach(function (t, e) {
                      var i,
                        s,
                        n = t.dataset[k.name + "Class"] || k.class,
                        o = t.dataset[k.name + "Repeat"],
                        l = t.dataset[k.name + "Call"],
                        r = t.dataset[k.name + "Position"],
                        a = t.dataset[k.name + "Delay"],
                        c = t.dataset[k.name + "Direction"],
                        h = "string" == typeof t.dataset[k.name + "Sticky"],
                        u =
                          !!t.dataset[k.name + "Speed"] &&
                          parseFloat(t.dataset[k.name + "Speed"]) / 10,
                        d =
                          "string" == typeof t.dataset[k.name + "Offset"]
                            ? t.dataset[k.name + "Offset"].split(",")
                            : k.offset,
                        f = t.dataset[k.name + "Target"];
                      s =
                        void 0 !== f ? document.querySelector("".concat(f)) : t;
                      var p =
                          (i = k.sections[S].inView
                            ? s.getBoundingClientRect().top +
                              k.instance.scroll.y -
                              X(s).y
                            : s.getBoundingClientRect().top -
                              X(k.sections[S].el).y -
                              X(s).y) + s.offsetHeight,
                        y = (p - i) / 2 + i;
                      if (h) {
                        var v = t.getBoundingClientRect().top,
                          m = v - i;
                        (i += window.innerHeight),
                          (y =
                            ((p = v + s.offsetHeight - t.offsetHeight - m) -
                              i) /
                              2 +
                            i);
                      }
                      o = "false" != o && (null != o || k.repeat);
                      var g = [0, 0];
                      if (d)
                        for (var w = 0; w < d.length; w++)
                          "string" == typeof d[w]
                            ? d[w].includes("%")
                              ? (g[w] = parseInt(
                                  (d[w].replace("%", "") * k.windowHeight) / 100
                                ))
                              : (g[w] = parseInt(d[w]))
                            : (g[w] = d[w]);
                      var b = {
                        el: t,
                        id: e,
                        class: n,
                        top: i + g[0],
                        middle: y,
                        bottom: p - g[1],
                        offset: d,
                        repeat: o,
                        inView: !!t.classList.contains(n),
                        call: l,
                        speed: u,
                        delay: a,
                        position: r,
                        target: s,
                        direction: c,
                        sticky: h,
                      };
                      k.els.push(b),
                        (!1 !== u || h) && k.parallaxElements.push(b);
                    });
                });
            },
          },
          {
            key: "addSections",
            value: function () {
              var o = this;
              this.sections = [];
              var t = this.el.querySelectorAll(
                "[data-".concat(this.name, "-section]")
              );
              0 === t.length && (t = [this.el]),
                t.forEach(function (t, e) {
                  var i =
                      t.getBoundingClientRect().top -
                      1.5 * window.innerHeight -
                      X(t).y,
                    s =
                      i +
                      t.getBoundingClientRect().height +
                      2 * window.innerHeight,
                    n = {
                      el: t,
                      offset: i,
                      limit: s,
                      inView: !1,
                      persistent:
                        "string" == typeof t.dataset[o.name + "Persistent"],
                    };
                  o.sections[e] = n;
                });
            },
          },
          {
            key: "transform",
            value: function (t, e, i, s) {
              var n;
              if (s) {
                var o = X(t),
                  l = R(o.x, e, s),
                  r = R(o.y, i, s);
                n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                  .concat(l, ",")
                  .concat(r, ",0,1)");
              } else
                n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                  .concat(e, ",")
                  .concat(i, ",0,1)");
              (t.style.webkitTransform = n),
                (t.style.msTransform = n),
                (t.style.transform = n);
            },
          },
          {
            key: "transformElements",
            value: function (s) {
              var n = this,
                o =
                  1 < arguments.length &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                l = this.instance.scroll.y + this.windowHeight,
                r = this.instance.scroll.y + this.windowMiddle;
              this.parallaxElements.forEach(function (t, e) {
                var i = !1;
                if ((s && (i = 0), t.inView || o))
                  switch (t.position) {
                    case "top":
                      i = n.instance.scroll.y * -t.speed;
                      break;
                    case "elementTop":
                      i = (l - t.top) * -t.speed;
                      break;
                    case "bottom":
                      i = (n.instance.limit - l + n.windowHeight) * t.speed;
                      break;
                    default:
                      i = (r - t.middle) * -t.speed;
                  }
                t.sticky &&
                  (i = t.inView
                    ? n.instance.scroll.y - t.top + window.innerHeight
                    : n.instance.scroll.y < t.top - window.innerHeight &&
                      n.instance.scroll.y < t.top - window.innerHeight / 2
                    ? 0
                    : n.instance.scroll.y > t.bottom &&
                      n.instance.scroll.y > t.bottom + 100 &&
                      t.bottom - t.top + window.innerHeight),
                  !1 !== i &&
                    ("horizontal" === t.direction
                      ? n.transform(t.el, i, 0, !s && t.delay)
                      : n.transform(t.el, 0, i, !s && t.delay));
              });
            },
          },
          {
            key: "scrollTo",
            value: function (t, e) {
              var i,
                s = this,
                n =
                  2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1e3,
                o =
                  3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : [0.25, 0, 0.35, 1],
                l =
                  4 < arguments.length &&
                  void 0 !== arguments[4] &&
                  arguments[4],
                r = 5 < arguments.length ? arguments[5] : void 0,
                a = e ? parseInt(e) : 0;
              if (((o = J.apply(void 0, v(o))), "string" == typeof t)) {
                if ("top" === t) i = 0;
                else if ("bottom" === t) i = this.instance.limit;
                else if (!(i = document.querySelector(t))) return;
              } else if ("number" == typeof t) i = parseInt(t);
              else {
                if (!t || !t.tagName)
                  return void console.warn(
                    "`targetOption` parameter is not valid"
                  );
                i = t;
              }
              if ("number" != typeof i) {
                if (!I(i).includes(this.el)) return;
                var c = i.getBoundingClientRect().top,
                  h = I(i).find(function (e) {
                    return s.sections.find(function (t) {
                      return t.el == e;
                    });
                  }),
                  u = 0;
                h && (u = X(h).y), (a = c + a - u);
              } else a = i + a;
              var d = parseFloat(this.instance.delta.y),
                f = Math.max(0, Math.min(a, this.instance.limit)) - d,
                p = function (t) {
                  l
                    ? s.setScroll(s.instance.delta.x, d + f * t)
                    : (s.instance.delta.y = d + f * t);
                };
              (this.animatingScroll = !0),
                this.stopScrolling(),
                this.startScrolling();
              var y = Date.now();
              !(function t() {
                var e = (Date.now() - y) / n;
                1 < e
                  ? (p(1),
                    (s.animatingScroll = !1),
                    0 == n && s.update(),
                    r && r())
                  : ((s.scrollToRaf = requestAnimationFrame(t)), p(o(e)));
              })();
            },
          },
          {
            key: "update",
            value: function () {
              this.setScrollLimit(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.updateScroll(),
                this.transformElements(!0),
                this.reinitScrollBar(),
                this.checkScroll(!0);
            },
          },
          {
            key: "startScroll",
            value: function () {
              this.stop = !1;
            },
          },
          {
            key: "stopScroll",
            value: function () {
              this.stop = !0;
            },
          },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance = i({}, this.instance, {
                scroll: { x: t, y: e },
                delta: { x: t, y: e },
                speed: 0,
              });
            },
          },
          {
            key: "destroy",
            value: function () {
              u(r(n.prototype), "destroy", this).call(this),
                this.stopScrolling(),
                this.html.classList.remove(this.smoothClass),
                this.vs.destroy(),
                this.destroyScrollBar(),
                window.removeEventListener("keydown", this.checkKey, !1);
            },
          },
        ]),
        n
      );
    })();
  return (function () {
    function e() {
      var t =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      s(this, e), (this.options = t), Object.assign(this, d, t), this.init();
    }
    return (
      o(e, [
        {
          key: "init",
          value: function () {
            if (
              (this.smoothMobile ||
                (this.isMobile =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ) ||
                  ("MacIntel" === navigator.platform &&
                    1 < navigator.maxTouchPoints)),
              !0 !== this.smooth || this.isMobile
                ? (this.scroll = new m(this.options))
                : (this.scroll = new lt(this.options)),
              this.scroll.init(),
              window.location.hash)
            ) {
              var t = window.location.hash.slice(
                  1,
                  window.location.hash.length
                ),
                e = document.getElementById(t);
              e && this.scroll.scrollTo(e);
            }
          },
        },
        {
          key: "update",
          value: function () {
            this.scroll.update();
          },
        },
        {
          key: "start",
          value: function () {
            this.scroll.startScroll();
          },
        },
        {
          key: "stop",
          value: function () {
            this.scroll.stopScroll();
          },
        },
        {
          key: "scrollTo",
          value: function (t, e, i, s, n, o) {
            this.scroll.scrollTo(t, e, i, s, n, o);
          },
        },
        {
          key: "setScroll",
          value: function (t, e) {
            this.scroll.setScroll(t, e);
          },
        },
        {
          key: "on",
          value: function (t, e) {
            this.scroll.setEvents(t, e);
          },
        },
        {
          key: "off",
          value: function (t, e) {
            this.scroll.unsetEvents(t, e);
          },
        },
        {
          key: "destroy",
          value: function () {
            this.scroll.destroy();
          },
        },
      ]),
      e
    );
  })();
});

window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  const pageContainer = document.querySelector(".js-container");
  pageContainer.setAttribute("data-scroll-container", "");

  const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true,
    getDirection: true,
  });

  scroller.on("scroll", function (t) {
    document.documentElement.setAttribute("data-direction", t.direction);
  });

  scroller.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
      return arguments.length
        ? scroller.scrollTo(value, 0, 0)
        : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: pageContainer.style.transform ? "transform" : "fixed",
  });

  // Pinning and horizontal scrolling
  let horizontalSections = document.querySelectorAll(".js-horizontal-scroll");

  horizontalSections.forEach((horizontalSection) => {
    let pinWrap = horizontalSection.querySelector(".js-pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;

    gsap.to(pinWrap, {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        scrub: true,
        trigger: horizontalSection,
        pin: true,
        start: "top top",
        end: () => `+=${pinWrapWidth}`,
        invalidateOnRefresh: true,
      },
      x: -horizontalScrollLength,
      ease: "none",
    });
  });

  /* COLOR CHANGER */
  const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
  scrollColorElems.forEach((colorSection, i) => {
    const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
    const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

    ScrollTrigger.create({
      trigger: colorSection,
      scroller: "[data-scroll-container]",
      start: "top 70%",
      onEnter: () =>
        gsap.to("body", {
          backgroundColor: colorSection.dataset.bgcolor,
          color: colorSection.dataset.textcolor,
          overwrite: "auto",
        }),
      onLeaveBack: () =>
        gsap.to("body", {
          backgroundColor: prevBg,
          color: prevText,
          overwrite: "auto",
        }),
    });
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update());
  ScrollTrigger.refresh();
});

/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  _gsScope._gsDefine(
    "TweenMax",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (a, b, c) {
      var d = function (a) {
          var b,
            c = [],
            d = a.length;
          for (b = 0; b !== d; c.push(a[b++]));
          return c;
        },
        e = function (a, b, c) {
          var d,
            e,
            f = a.cycle;
          for (d in f)
            (e = f[d]),
              (a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]);
          delete a.cycle;
        },
        f = function (a, b, d) {
          c.call(this, a, b, d),
            (this._cycle = 0),
            (this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            this._repeat && this._uncache(!0),
            (this.render = f.prototype.render);
        },
        g = 1e-10,
        h = c._internals,
        i = h.isSelector,
        j = h.isArray,
        k = (f.prototype = c.to({}, 0.1, {})),
        l = [];
      (f.version = "2.0.2"),
        (k.constructor = f),
        (k.kill()._gc = !1),
        (f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf),
        (f.getTweensOf = c.getTweensOf),
        (f.lagSmoothing = c.lagSmoothing),
        (f.ticker = c.ticker),
        (f.render = c.render),
        (k.invalidate = function () {
          return (
            (this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._yoyoEase = null),
            this._uncache(!0),
            c.prototype.invalidate.call(this)
          );
        }),
        (k.updateTo = function (a, b) {
          var d,
            e = this.ratio,
            f = this.vars.immediateRender || a.immediateRender;
          b &&
            this._startTime < this._timeline._time &&
            ((this._startTime = this._timeline._time),
            this._uncache(!1),
            this._gc
              ? this._enabled(!0, !1)
              : this._timeline.insert(this, this._startTime - this._delay));
          for (d in a) this.vars[d] = a[d];
          if (this._initted || f)
            if (b) (this._initted = !1), f && this.render(0, !0, !0);
            else if (
              (this._gc && this._enabled(!0, !1),
              this._notifyPluginsOfEnabled &&
                this._firstPT &&
                c._onPluginEvent("_onDisable", this),
              this._time / this._duration > 0.998)
            ) {
              var g = this._totalTime;
              this.render(0, !0, !1),
                (this._initted = !1),
                this.render(g, !0, !1);
            } else if (
              ((this._initted = !1), this._init(), this._time > 0 || f)
            )
              for (var h, i = 1 / (1 - e), j = this._firstPT; j; )
                (h = j.s + j.c), (j.c *= i), (j.s = h - j.c), (j = j._next);
          return this;
        }),
        (k.render = function (a, b, d) {
          this._initted ||
            (0 === this._duration && this.vars.repeat && this.invalidate());
          var e,
            f,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p = this._dirty ? this.totalDuration() : this._totalDuration,
            q = this._time,
            r = this._totalTime,
            s = this._cycle,
            t = this._duration,
            u = this._rawPrevTime;
          if (
            (a >= p - 1e-7 && a >= 0
              ? ((this._totalTime = p),
                (this._cycle = this._repeat),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? ((this._time = 0),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(0)
                      : 0))
                  : ((this._time = t),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(1)
                      : 1)),
                this._reversed ||
                  ((e = !0),
                  (f = "onComplete"),
                  (d = d || this._timeline.autoRemoveChildren)),
                0 === t &&
                  (this._initted || !this.vars.lazy || d) &&
                  (this._startTime === this._timeline._duration && (a = 0),
                  (0 > u ||
                    (0 >= a && a >= -1e-7) ||
                    (u === g && "isPause" !== this.data)) &&
                    u !== a &&
                    ((d = !0), u > g && (f = "onReverseComplete")),
                  (this._rawPrevTime = n = !b || a || u === a ? a : g)))
              : 1e-7 > a
              ? ((this._totalTime = this._time = this._cycle = 0),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                (0 !== r || (0 === t && u > 0)) &&
                  ((f = "onReverseComplete"), (e = this._reversed)),
                0 > a &&
                  ((this._active = !1),
                  0 === t &&
                    (this._initted || !this.vars.lazy || d) &&
                    (u >= 0 && (d = !0),
                    (this._rawPrevTime = n = !b || a || u === a ? a : g))),
                this._initted || (d = !0))
              : ((this._totalTime = this._time = a),
                0 !== this._repeat &&
                  ((j = t + this._repeatDelay),
                  (this._cycle = (this._totalTime / j) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / j &&
                    a >= r &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * j),
                  this._yoyo &&
                    0 !== (1 & this._cycle) &&
                    ((this._time = t - this._time),
                    (o = this._yoyoEase || this.vars.yoyoEase),
                    o &&
                      (this._yoyoEase ||
                        (o !== !0 || this._initted
                          ? (this._yoyoEase = o =
                              o === !0
                                ? this._ease
                                : o instanceof Ease
                                ? o
                                : Ease.map[o])
                          : ((o = this.vars.ease),
                            (this._yoyoEase = o =
                              o
                                ? o instanceof Ease
                                  ? o
                                  : "function" == typeof o
                                  ? new Ease(o, this.vars.easeParams)
                                  : Ease.map[o] || c.defaultEase
                                : c.defaultEase))),
                      (this.ratio = o
                        ? 1 - o.getRatio((t - this._time) / t)
                        : 0))),
                  this._time > t
                    ? (this._time = t)
                    : this._time < 0 && (this._time = 0)),
                this._easeType && !o
                  ? ((k = this._time / t),
                    (l = this._easeType),
                    (m = this._easePower),
                    (1 === l || (3 === l && k >= 0.5)) && (k = 1 - k),
                    3 === l && (k *= 2),
                    1 === m
                      ? (k *= k)
                      : 2 === m
                      ? (k *= k * k)
                      : 3 === m
                      ? (k *= k * k * k)
                      : 4 === m && (k *= k * k * k * k),
                    1 === l
                      ? (this.ratio = 1 - k)
                      : 2 === l
                      ? (this.ratio = k)
                      : this._time / t < 0.5
                      ? (this.ratio = k / 2)
                      : (this.ratio = 1 - k / 2))
                  : o || (this.ratio = this._ease.getRatio(this._time / t))),
            q === this._time && !d && s === this._cycle)
          )
            return void (
              r !== this._totalTime &&
              this._onUpdate &&
              (b || this._callback("onUpdate"))
            );
          if (!this._initted) {
            if ((this._init(), !this._initted || this._gc)) return;
            if (
              !d &&
              this._firstPT &&
              ((this.vars.lazy !== !1 && this._duration) ||
                (this.vars.lazy && !this._duration))
            )
              return (
                (this._time = q),
                (this._totalTime = r),
                (this._rawPrevTime = u),
                (this._cycle = s),
                h.lazyTweens.push(this),
                void (this._lazy = [a, b])
              );
            !this._time || e || o
              ? e &&
                this._ease._calcEnd &&
                !o &&
                (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
              : (this.ratio = this._ease.getRatio(this._time / t));
          }
          for (
            this._lazy !== !1 && (this._lazy = !1),
              this._active ||
                (!this._paused &&
                  this._time !== q &&
                  a >= 0 &&
                  (this._active = !0)),
              0 === r &&
                (2 === this._initted && a > 0 && this._init(),
                this._startAt &&
                  (a >= 0
                    ? this._startAt.render(a, !0, d)
                    : f || (f = "_dummyGS")),
                this.vars.onStart &&
                  (0 !== this._totalTime || 0 === t) &&
                  (b || this._callback("onStart"))),
              i = this._firstPT;
            i;

          )
            i.f
              ? i.t[i.p](i.c * this.ratio + i.s)
              : (i.t[i.p] = i.c * this.ratio + i.s),
              (i = i._next);
          this._onUpdate &&
            (0 > a &&
              this._startAt &&
              this._startTime &&
              this._startAt.render(a, !0, d),
            b || ((this._totalTime !== r || f) && this._callback("onUpdate"))),
            this._cycle !== s &&
              (b ||
                this._gc ||
                (this.vars.onRepeat && this._callback("onRepeat"))),
            f &&
              (!this._gc || d) &&
              (0 > a &&
                this._startAt &&
                !this._onUpdate &&
                this._startTime &&
                this._startAt.render(a, !0, d),
              e &&
                (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                (this._active = !1)),
              !b && this.vars[f] && this._callback(f),
              0 === t &&
                this._rawPrevTime === g &&
                n !== g &&
                (this._rawPrevTime = 0));
        }),
        (f.to = function (a, b, c) {
          return new f(a, b, c);
        }),
        (f.from = function (a, b, c) {
          return (
            (c.runBackwards = !0),
            (c.immediateRender = 0 != c.immediateRender),
            new f(a, b, c)
          );
        }),
        (f.fromTo = function (a, b, c, d) {
          return (
            (d.startAt = c),
            (d.immediateRender =
              0 != d.immediateRender && 0 != c.immediateRender),
            new f(a, b, d)
          );
        }),
        (f.staggerTo = f.allTo =
          function (a, b, g, h, k, m, n) {
            h = h || 0;
            var o,
              p,
              q,
              r,
              s = 0,
              t = [],
              u = function () {
                g.onComplete &&
                  g.onComplete.apply(g.onCompleteScope || this, arguments),
                  k.apply(n || g.callbackScope || this, m || l);
              },
              v = g.cycle,
              w = g.startAt && g.startAt.cycle;
            for (
              j(a) ||
                ("string" == typeof a && (a = c.selector(a) || a),
                i(a) && (a = d(a))),
                a = a || [],
                0 > h && ((a = d(a)), a.reverse(), (h *= -1)),
                o = a.length - 1,
                q = 0;
              o >= q;
              q++
            ) {
              p = {};
              for (r in g) p[r] = g[r];
              if (
                (v &&
                  (e(p, a, q),
                  null != p.duration && ((b = p.duration), delete p.duration)),
                w)
              ) {
                w = p.startAt = {};
                for (r in g.startAt) w[r] = g.startAt[r];
                e(p.startAt, a, q);
              }
              (p.delay = s + (p.delay || 0)),
                q === o && k && (p.onComplete = u),
                (t[q] = new f(a[q], b, p)),
                (s += h);
            }
            return t;
          }),
        (f.staggerFrom = f.allFrom =
          function (a, b, c, d, e, g, h) {
            return (
              (c.runBackwards = !0),
              (c.immediateRender = 0 != c.immediateRender),
              f.staggerTo(a, b, c, d, e, g, h)
            );
          }),
        (f.staggerFromTo = f.allFromTo =
          function (a, b, c, d, e, g, h, i) {
            return (
              (d.startAt = c),
              (d.immediateRender =
                0 != d.immediateRender && 0 != c.immediateRender),
              f.staggerTo(a, b, d, e, g, h, i)
            );
          }),
        (f.delayedCall = function (a, b, c, d, e) {
          return new f(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            callbackScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            immediateRender: !1,
            useFrames: e,
            overwrite: 0,
          });
        }),
        (f.set = function (a, b) {
          return new f(a, 0, b);
        }),
        (f.isTweening = function (a) {
          return c.getTweensOf(a, !0).length > 0;
        });
      var m = function (a, b) {
          for (var d = [], e = 0, f = a._first; f; )
            f instanceof c
              ? (d[e++] = f)
              : (b && (d[e++] = f), (d = d.concat(m(f, b))), (e = d.length)),
              (f = f._next);
          return d;
        },
        n = (f.getAllTweens = function (b) {
          return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b));
        });
      (f.killAll = function (a, c, d, e) {
        null == c && (c = !0), null == d && (d = !0);
        var f,
          g,
          h,
          i = n(0 != e),
          j = i.length,
          k = c && d && e;
        for (h = 0; j > h; h++)
          (g = i[h]),
            (k ||
              g instanceof b ||
              ((f = g.target === g.vars.onComplete) && d) ||
              (c && !f)) &&
              (a
                ? g.totalTime(g._reversed ? 0 : g.totalDuration())
                : g._enabled(!1, !1));
      }),
        (f.killChildTweensOf = function (a, b) {
          if (null != a) {
            var e,
              g,
              k,
              l,
              m,
              n = h.tweenLookup;
            if (
              ("string" == typeof a && (a = c.selector(a) || a),
              i(a) && (a = d(a)),
              j(a))
            )
              for (l = a.length; --l > -1; ) f.killChildTweensOf(a[l], b);
            else {
              e = [];
              for (k in n)
                for (g = n[k].target.parentNode; g; )
                  g === a && (e = e.concat(n[k].tweens)), (g = g.parentNode);
              for (m = e.length, l = 0; m > l; l++)
                b && e[l].totalTime(e[l].totalDuration()),
                  e[l]._enabled(!1, !1);
            }
          }
        });
      var o = function (a, c, d, e) {
        (c = c !== !1), (d = d !== !1), (e = e !== !1);
        for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1; )
          (g = h[j]),
            (i ||
              g instanceof b ||
              ((f = g.target === g.vars.onComplete) && d) ||
              (c && !f)) &&
              g.paused(a);
      };
      return (
        (f.pauseAll = function (a, b, c) {
          o(!0, a, b, c);
        }),
        (f.resumeAll = function (a, b, c) {
          o(!1, a, b, c);
        }),
        (f.globalTimeScale = function (b) {
          var d = a._rootTimeline,
            e = c.ticker.time;
          return arguments.length
            ? ((b = b || g),
              (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
              (d = a._rootFramesTimeline),
              (e = c.ticker.frame),
              (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
              (d._timeScale = a._rootTimeline._timeScale = b),
              b)
            : d._timeScale;
        }),
        (k.progress = function (a, b) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) +
                  this._cycle * (this._duration + this._repeatDelay),
                b
              )
            : this._time / this.duration();
        }),
        (k.totalProgress = function (a, b) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * a, b)
            : this._totalTime / this.totalDuration();
        }),
        (k.time = function (a, b) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              a > this._duration && (a = this._duration),
              this._yoyo && 0 !== (1 & this._cycle)
                ? (a =
                    this._duration -
                    a +
                    this._cycle * (this._duration + this._repeatDelay))
                : 0 !== this._repeat &&
                  (a += this._cycle * (this._duration + this._repeatDelay)),
              this.totalTime(a, b))
            : this._time;
        }),
        (k.duration = function (b) {
          return arguments.length
            ? a.prototype.duration.call(this, b)
            : this._duration;
        }),
        (k.totalDuration = function (a) {
          return arguments.length
            ? -1 === this._repeat
              ? this
              : this.duration(
                  (a - this._repeat * this._repeatDelay) / (this._repeat + 1)
                )
            : (this._dirty &&
                ((this._totalDuration =
                  -1 === this._repeat
                    ? 999999999999
                    : this._duration * (this._repeat + 1) +
                      this._repeatDelay * this._repeat),
                (this._dirty = !1)),
              this._totalDuration);
        }),
        (k.repeat = function (a) {
          return arguments.length
            ? ((this._repeat = a), this._uncache(!0))
            : this._repeat;
        }),
        (k.repeatDelay = function (a) {
          return arguments.length
            ? ((this._repeatDelay = a), this._uncache(!0))
            : this._repeatDelay;
        }),
        (k.yoyo = function (a) {
          return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
        }),
        f
      );
    },
    !0
  ),
    _gsScope._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (a, b, c) {
        var d = function (a) {
            b.call(this, a),
              (this._labels = {}),
              (this.autoRemoveChildren = this.vars.autoRemoveChildren === !0),
              (this.smoothChildTiming = this.vars.smoothChildTiming === !0),
              (this._sortChildren = !0),
              (this._onUpdate = this.vars.onUpdate);
            var c,
              d,
              e = this.vars;
            for (d in e)
              (c = e[d]),
                i(c) &&
                  -1 !== c.join("").indexOf("{self}") &&
                  (e[d] = this._swapSelfInParams(c));
            i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger);
          },
          e = 1e-10,
          f = c._internals,
          g = (d._internals = {}),
          h = f.isSelector,
          i = f.isArray,
          j = f.lazyTweens,
          k = f.lazyRender,
          l = _gsScope._gsDefine.globals,
          m = function (a) {
            var b,
              c = {};
            for (b in a) c[b] = a[b];
            return c;
          },
          n = function (a, b, c) {
            var d,
              e,
              f = a.cycle;
            for (d in f)
              (e = f[d]),
                (a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]);
            delete a.cycle;
          },
          o = (g.pauseCallback = function () {}),
          p = function (a) {
            var b,
              c = [],
              d = a.length;
            for (b = 0; b !== d; c.push(a[b++]));
            return c;
          },
          q = (d.prototype = new b());
        return (
          (d.version = "2.0.2"),
          (q.constructor = d),
          (q.kill()._gc = q._forcingPlayhead = q._hasPause = !1),
          (q.to = function (a, b, d, e) {
            var f = (d.repeat && l.TweenMax) || c;
            return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
          }),
          (q.from = function (a, b, d, e) {
            return this.add(((d.repeat && l.TweenMax) || c).from(a, b, d), e);
          }),
          (q.fromTo = function (a, b, d, e, f) {
            var g = (e.repeat && l.TweenMax) || c;
            return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
          }),
          (q.staggerTo = function (a, b, e, f, g, i, j, k) {
            var l,
              o,
              q = new d({
                onComplete: i,
                onCompleteParams: j,
                callbackScope: k,
                smoothChildTiming: this.smoothChildTiming,
              }),
              r = e.cycle;
            for (
              "string" == typeof a && (a = c.selector(a) || a),
                a = a || [],
                h(a) && (a = p(a)),
                f = f || 0,
                0 > f && ((a = p(a)), a.reverse(), (f *= -1)),
                o = 0;
              o < a.length;
              o++
            )
              (l = m(e)),
                l.startAt &&
                  ((l.startAt = m(l.startAt)),
                  l.startAt.cycle && n(l.startAt, a, o)),
                r &&
                  (n(l, a, o),
                  null != l.duration && ((b = l.duration), delete l.duration)),
                q.to(a[o], b, l, o * f);
            return this.add(q, g);
          }),
          (q.staggerFrom = function (a, b, c, d, e, f, g, h) {
            return (
              (c.immediateRender = 0 != c.immediateRender),
              (c.runBackwards = !0),
              this.staggerTo(a, b, c, d, e, f, g, h)
            );
          }),
          (q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
            return (
              (d.startAt = c),
              (d.immediateRender =
                0 != d.immediateRender && 0 != c.immediateRender),
              this.staggerTo(a, b, d, e, f, g, h, i)
            );
          }),
          (q.call = function (a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e);
          }),
          (q.set = function (a, b, d) {
            return (
              (d = this._parseTimeOrLabel(d, 0, !0)),
              null == b.immediateRender &&
                (b.immediateRender = d === this._time && !this._paused),
              this.add(new c(a, 0, b), d)
            );
          }),
          (d.exportRoot = function (a, b) {
            (a = a || {}),
              null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var e,
              f,
              g,
              h,
              i = new d(a),
              j = i._timeline;
            for (
              null == b && (b = !0),
                j._remove(i, !0),
                i._startTime = 0,
                i._rawPrevTime = i._time = i._totalTime = j._time,
                g = j._first;
              g;

            )
              (h = g._next),
                (b && g instanceof c && g.target === g.vars.onComplete) ||
                  ((f = g._startTime - g._delay),
                  0 > f && (e = 1),
                  i.add(g, f)),
                (g = h);
            return j.add(i, 0), e && i.totalDuration(), i;
          }),
          (q.add = function (e, f, g, h) {
            var j, k, l, m, n, o;
            if (
              ("number" != typeof f &&
                (f = this._parseTimeOrLabel(f, 0, !0, e)),
              !(e instanceof a))
            ) {
              if (e instanceof Array || (e && e.push && i(e))) {
                for (
                  g = g || "normal", h = h || 0, j = f, k = e.length, l = 0;
                  k > l;
                  l++
                )
                  i((m = e[l])) && (m = new d({ tweens: m })),
                    this.add(m, j),
                    "string" != typeof m &&
                      "function" != typeof m &&
                      ("sequence" === g
                        ? (j = m._startTime + m.totalDuration() / m._timeScale)
                        : "start" === g && (m._startTime -= m.delay())),
                    (j += h);
                return this._uncache(!0);
              }
              if ("string" == typeof e) return this.addLabel(e, f);
              if ("function" != typeof e)
                throw (
                  "Cannot add " +
                  e +
                  " into the timeline; it is not a tween, timeline, function, or string."
                );
              e = c.delayedCall(0, e);
            }
            if (
              (b.prototype.add.call(this, e, f),
              e._time &&
                ((j = Math.max(
                  0,
                  Math.min(
                    e.totalDuration(),
                    (this.rawTime() - e._startTime) * e._timeScale
                  )
                )),
                Math.abs(j - e._totalTime) > 1e-5 && e.render(j, !1, !1)),
              (this._gc || this._time === this._duration) &&
                !this._paused &&
                this._duration < this.duration())
            )
              for (n = this, o = n.rawTime() > e._startTime; n._timeline; )
                o && n._timeline.smoothChildTiming
                  ? n.totalTime(n._totalTime, !0)
                  : n._gc && n._enabled(!0, !1),
                  (n = n._timeline);
            return this;
          }),
          (q.remove = function (b) {
            if (b instanceof a) {
              this._remove(b, !1);
              var c = (b._timeline = b.vars.useFrames
                ? a._rootFramesTimeline
                : a._rootTimeline);
              return (
                (b._startTime =
                  (b._paused ? b._pauseTime : c._time) -
                  (b._reversed
                    ? b.totalDuration() - b._totalTime
                    : b._totalTime) /
                    b._timeScale),
                this
              );
            }
            if (b instanceof Array || (b && b.push && i(b))) {
              for (var d = b.length; --d > -1; ) this.remove(b[d]);
              return this;
            }
            return "string" == typeof b
              ? this.removeLabel(b)
              : this.kill(null, b);
          }),
          (q._remove = function (a, c) {
            b.prototype._remove.call(this, a, c);
            var d = this._last;
            return (
              d
                ? this._time > this.duration() &&
                  ((this._time = this._duration),
                  (this._totalTime = this._totalDuration))
                : (this._time =
                    this._totalTime =
                    this._duration =
                    this._totalDuration =
                      0),
              this
            );
          }),
          (q.append = function (a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
          }),
          (q.insert = q.insertMultiple =
            function (a, b, c, d) {
              return this.add(a, b || 0, c, d);
            }),
          (q.appendMultiple = function (a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
          }),
          (q.addLabel = function (a, b) {
            return (this._labels[a] = this._parseTimeOrLabel(b)), this;
          }),
          (q.addPause = function (a, b, d, e) {
            var f = c.delayedCall(0, o, d, e || this);
            return (
              (f.vars.onComplete = f.vars.onReverseComplete = b),
              (f.data = "isPause"),
              (this._hasPause = !0),
              this.add(f, a)
            );
          }),
          (q.removeLabel = function (a) {
            return delete this._labels[a], this;
          }),
          (q.getLabelTime = function (a) {
            return null != this._labels[a] ? this._labels[a] : -1;
          }),
          (q._parseTimeOrLabel = function (b, c, d, e) {
            var f, g;
            if (e instanceof a && e.timeline === this) this.remove(e);
            else if (e && (e instanceof Array || (e.push && i(e))))
              for (g = e.length; --g > -1; )
                e[g] instanceof a &&
                  e[g].timeline === this &&
                  this.remove(e[g]);
            if (
              ((f =
                "number" != typeof b || c
                  ? this.duration() > 99999999999
                    ? this.recent().endTime(!1)
                    : this._duration
                  : 0),
              "string" == typeof c)
            )
              return this._parseTimeOrLabel(
                c,
                d && "number" == typeof b && null == this._labels[c]
                  ? b - f
                  : 0,
                d
              );
            if (
              ((c = c || 0),
              "string" != typeof b || (!isNaN(b) && null == this._labels[b]))
            )
              null == b && (b = f);
            else {
              if (((g = b.indexOf("=")), -1 === g))
                return null == this._labels[b]
                  ? d
                    ? (this._labels[b] = f + c)
                    : c
                  : this._labels[b] + c;
              (c =
                parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1))),
                (b =
                  g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f);
            }
            return Number(b) + c;
          }),
          (q.seek = function (a, b) {
            return this.totalTime(
              "number" == typeof a ? a : this._parseTimeOrLabel(a),
              b !== !1
            );
          }),
          (q.stop = function () {
            return this.paused(!0);
          }),
          (q.gotoAndPlay = function (a, b) {
            return this.play(a, b);
          }),
          (q.gotoAndStop = function (a, b) {
            return this.pause(a, b);
          }),
          (q.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d,
              f,
              g,
              h,
              i,
              l,
              m,
              n = this._time,
              o = this._dirty ? this.totalDuration() : this._totalDuration,
              p = this._startTime,
              q = this._timeScale,
              r = this._paused;
            if (
              (n !== this._time && (a += this._time - n),
              a >= o - 1e-7 && a >= 0)
            )
              (this._totalTime = this._time = o),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((f = !0),
                  (h = "onComplete"),
                  (i = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((0 >= a && a >= -1e-7) ||
                      this._rawPrevTime < 0 ||
                      this._rawPrevTime === e) &&
                    this._rawPrevTime !== a &&
                    this._first &&
                    ((i = !0),
                    this._rawPrevTime > e && (h = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !b || a || this._rawPrevTime === a ? a : e),
                (a = o + 1e-4);
            else if (1e-7 > a)
              if (
                ((this._totalTime = this._time = 0),
                (0 !== n ||
                  (0 === this._duration &&
                    this._rawPrevTime !== e &&
                    (this._rawPrevTime > 0 ||
                      (0 > a && this._rawPrevTime >= 0)))) &&
                  ((h = "onReverseComplete"), (f = this._reversed)),
                0 > a)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((i = f = !0), (h = "onReverseComplete"))
                    : this._rawPrevTime >= 0 && this._first && (i = !0),
                  (this._rawPrevTime = a);
              else {
                if (
                  ((this._rawPrevTime =
                    this._duration || !b || a || this._rawPrevTime === a
                      ? a
                      : e),
                  0 === a && f)
                )
                  for (d = this._first; d && 0 === d._startTime; )
                    d._duration || (f = !1), (d = d._next);
                (a = 0), this._initted || (i = !0);
              }
            else {
              if (this._hasPause && !this._forcingPlayhead && !b) {
                if (a >= n)
                  for (d = this._first; d && d._startTime <= a && !l; )
                    d._duration ||
                      "isPause" !== d.data ||
                      d.ratio ||
                      (0 === d._startTime && 0 === this._rawPrevTime) ||
                      (l = d),
                      (d = d._next);
                else
                  for (d = this._last; d && d._startTime >= a && !l; )
                    d._duration ||
                      ("isPause" === d.data && d._rawPrevTime > 0 && (l = d)),
                      (d = d._prev);
                l &&
                  ((this._time = a = l._startTime),
                  (this._totalTime =
                    a +
                    this._cycle * (this._totalDuration + this._repeatDelay)));
              }
              this._totalTime = this._time = this._rawPrevTime = a;
            }
            if ((this._time !== n && this._first) || c || i || l) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._time !== n &&
                    a > 0 &&
                    (this._active = !0)),
                0 === n &&
                  this.vars.onStart &&
                  ((0 === this._time && this._duration) ||
                    b ||
                    this._callback("onStart")),
                (m = this._time),
                m >= n)
              )
                for (
                  d = this._first;
                  d &&
                  ((g = d._next), m === this._time && (!this._paused || r));

                )
                  (d._active || (d._startTime <= m && !d._paused && !d._gc)) &&
                    (l === d && this.pause(),
                    d._reversed
                      ? d.render(
                          (d._dirty ? d.totalDuration() : d._totalDuration) -
                            (a - d._startTime) * d._timeScale,
                          b,
                          c
                        )
                      : d.render((a - d._startTime) * d._timeScale, b, c)),
                    (d = g);
              else
                for (
                  d = this._last;
                  d &&
                  ((g = d._prev), m === this._time && (!this._paused || r));

                ) {
                  if (
                    d._active ||
                    (d._startTime <= n && !d._paused && !d._gc)
                  ) {
                    if (l === d) {
                      for (l = d._prev; l && l.endTime() > this._time; )
                        l.render(
                          l._reversed
                            ? l.totalDuration() -
                                (a - l._startTime) * l._timeScale
                            : (a - l._startTime) * l._timeScale,
                          b,
                          c
                        ),
                          (l = l._prev);
                      (l = null), this.pause();
                    }
                    d._reversed
                      ? d.render(
                          (d._dirty ? d.totalDuration() : d._totalDuration) -
                            (a - d._startTime) * d._timeScale,
                          b,
                          c
                        )
                      : d.render((a - d._startTime) * d._timeScale, b, c);
                  }
                  d = g;
                }
              this._onUpdate &&
                (b || (j.length && k(), this._callback("onUpdate"))),
                h &&
                  (this._gc ||
                    ((p === this._startTime || q !== this._timeScale) &&
                      (0 === this._time || o >= this.totalDuration()) &&
                      (f &&
                        (j.length && k(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !b && this.vars[h] && this._callback(h))));
            }
          }),
          (q._hasPausedChild = function () {
            for (var a = this._first; a; ) {
              if (a._paused || (a instanceof d && a._hasPausedChild()))
                return !0;
              a = a._next;
            }
            return !1;
          }),
          (q.getChildren = function (a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g; )
              g._startTime < e ||
                (g instanceof c
                  ? b !== !1 && (f[h++] = g)
                  : (d !== !1 && (f[h++] = g),
                    a !== !1 &&
                      ((f = f.concat(g.getChildren(!0, b, d))),
                      (h = f.length)))),
                (g = g._next);
            return f;
          }),
          (q.getTweensOf = function (a, b) {
            var d,
              e,
              f = this._gc,
              g = [],
              h = 0;
            for (
              f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length;
              --e > -1;

            )
              (d[e].timeline === this || (b && this._contains(d[e]))) &&
                (g[h++] = d[e]);
            return f && this._enabled(!1, !0), g;
          }),
          (q.recent = function () {
            return this._recent;
          }),
          (q._contains = function (a) {
            for (var b = a.timeline; b; ) {
              if (b === this) return !0;
              b = b.timeline;
            }
            return !1;
          }),
          (q.shiftChildren = function (a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e; )
              e._startTime >= c && (e._startTime += a), (e = e._next);
            if (b) for (d in f) f[d] >= c && (f[d] += a);
            return this._uncache(!0);
          }),
          (q._kill = function (a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (
              var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1),
                d = c.length,
                e = !1;
              --d > -1;

            )
              c[d]._kill(a, b) && (e = !0);
            return e;
          }),
          (q.clear = function (a) {
            var b = this.getChildren(!1, !0, !0),
              c = b.length;
            for (this._time = this._totalTime = 0; --c > -1; )
              b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}), this._uncache(!0);
          }),
          (q.invalidate = function () {
            for (var b = this._first; b; ) b.invalidate(), (b = b._next);
            return a.prototype.invalidate.call(this);
          }),
          (q._enabled = function (a, c) {
            if (a === this._gc)
              for (var d = this._first; d; ) d._enabled(a, !0), (d = d._next);
            return b.prototype._enabled.call(this, a, c);
          }),
          (q.totalTime = function (b, c, d) {
            this._forcingPlayhead = !0;
            var e = a.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), e;
          }),
          (q.duration = function (a) {
            return arguments.length
              ? (0 !== this.duration() &&
                  0 !== a &&
                  this.timeScale(this._duration / a),
                this)
              : (this._dirty && this.totalDuration(), this._duration);
          }),
          (q.totalDuration = function (a) {
            if (!arguments.length) {
              if (this._dirty) {
                for (var b, c, d = 0, e = this._last, f = 999999999999; e; )
                  (b = e._prev),
                    e._dirty && e.totalDuration(),
                    e._startTime > f &&
                    this._sortChildren &&
                    !e._paused &&
                    !this._calculatingDuration
                      ? ((this._calculatingDuration = 1),
                        this.add(e, e._startTime - e._delay),
                        (this._calculatingDuration = 0))
                      : (f = e._startTime),
                    e._startTime < 0 &&
                      !e._paused &&
                      ((d -= e._startTime),
                      this._timeline.smoothChildTiming &&
                        ((this._startTime += e._startTime / this._timeScale),
                        (this._time -= e._startTime),
                        (this._totalTime -= e._startTime),
                        (this._rawPrevTime -= e._startTime)),
                      this.shiftChildren(-e._startTime, !1, -9999999999),
                      (f = 0)),
                    (c = e._startTime + e._totalDuration / e._timeScale),
                    c > d && (d = c),
                    (e = b);
                (this._duration = this._totalDuration = d), (this._dirty = !1);
              }
              return this._totalDuration;
            }
            return a && this.totalDuration()
              ? this.timeScale(this._totalDuration / a)
              : this;
          }),
          (q.paused = function (b) {
            if (!b)
              for (var c = this._first, d = this._time; c; )
                c._startTime === d &&
                  "isPause" === c.data &&
                  (c._rawPrevTime = 0),
                  (c = c._next);
            return a.prototype.paused.apply(this, arguments);
          }),
          (q.usesFrames = function () {
            for (var b = this._timeline; b._timeline; ) b = b._timeline;
            return b === a._rootFramesTimeline;
          }),
          (q.rawTime = function (a) {
            return a &&
              (this._paused ||
                (this._repeat && this.time() > 0 && this.totalProgress() < 1))
              ? this._totalTime % (this._duration + this._repeatDelay)
              : this._paused
              ? this._totalTime
              : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
          }),
          d
        );
      },
      !0
    ),
    _gsScope._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function (a, b, c) {
        var d = function (b) {
            a.call(this, b),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = this.vars.yoyo === !0),
              (this._dirty = !0);
          },
          e = 1e-10,
          f = b._internals,
          g = f.lazyTweens,
          h = f.lazyRender,
          i = _gsScope._gsDefine.globals,
          j = new c(null, null, 1, 0),
          k = (d.prototype = new a());
        return (
          (k.constructor = d),
          (k.kill()._gc = !1),
          (d.version = "2.0.2"),
          (k.invalidate = function () {
            return (
              (this._yoyo = this.vars.yoyo === !0),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              a.prototype.invalidate.call(this)
            );
          }),
          (k.addCallback = function (a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c);
          }),
          (k.removeCallback = function (a, b) {
            if (a)
              if (null == b) this._kill(null, a);
              else
                for (
                  var c = this.getTweensOf(a, !1),
                    d = c.length,
                    e = this._parseTimeOrLabel(b);
                  --d > -1;

                )
                  c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this;
          }),
          (k.removePause = function (b) {
            return this.removeCallback(a._internals.pauseCallback, b);
          }),
          (k.tweenTo = function (a, c) {
            c = c || {};
            var d,
              e,
              f,
              g = {
                ease: j,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1,
              },
              h = (c.repeat && i.TweenMax) || b;
            for (e in c) g[e] = c[e];
            return (
              (g.time = this._parseTimeOrLabel(a)),
              (d =
                Math.abs(Number(g.time) - this._time) / this._timeScale ||
                0.001),
              (f = new h(this, d, g)),
              (g.onStart = function () {
                f.target.paused(!0),
                  f.vars.time === f.target.time() ||
                    d !== f.duration() ||
                    f.isFromTo ||
                    f
                      .duration(
                        Math.abs(f.vars.time - f.target.time()) /
                          f.target._timeScale
                      )
                      .render(f.time(), !0, !0),
                  c.onStart &&
                    c.onStart.apply(
                      c.onStartScope || c.callbackScope || f,
                      c.onStartParams || []
                    );
              }),
              f
            );
          }),
          (k.tweenFromTo = function (a, b, c) {
            (c = c || {}),
              (a = this._parseTimeOrLabel(a)),
              (c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [a],
                callbackScope: this,
              }),
              (c.immediateRender = c.immediateRender !== !1);
            var d = this.tweenTo(b, c);
            return (
              (d.isFromTo = 1),
              d.duration(Math.abs(d.vars.time - a) / this._timeScale || 0.001)
            );
          }),
          (k.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d,
              f,
              i,
              j,
              k,
              l,
              m,
              n,
              o = this._time,
              p = this._dirty ? this.totalDuration() : this._totalDuration,
              q = this._duration,
              r = this._totalTime,
              s = this._startTime,
              t = this._timeScale,
              u = this._rawPrevTime,
              v = this._paused,
              w = this._cycle;
            if (
              (o !== this._time && (a += this._time - o),
              a >= p - 1e-7 && a >= 0)
            )
              this._locked ||
                ((this._totalTime = p), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((f = !0),
                  (j = "onComplete"),
                  (k = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((0 >= a && a >= -1e-7) || 0 > u || u === e) &&
                    u !== a &&
                    this._first &&
                    ((k = !0), u > e && (j = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !b || a || this._rawPrevTime === a ? a : e),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? (this._time = a = 0)
                  : ((this._time = q), (a = q + 1e-4));
            else if (1e-7 > a)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                (this._time = 0),
                (0 !== o ||
                  (0 === q &&
                    u !== e &&
                    (u > 0 || (0 > a && u >= 0)) &&
                    !this._locked)) &&
                  ((j = "onReverseComplete"), (f = this._reversed)),
                0 > a)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((k = f = !0), (j = "onReverseComplete"))
                    : u >= 0 && this._first && (k = !0),
                  (this._rawPrevTime = a);
              else {
                if (
                  ((this._rawPrevTime =
                    q || !b || a || this._rawPrevTime === a ? a : e),
                  0 === a && f)
                )
                  for (d = this._first; d && 0 === d._startTime; )
                    d._duration || (f = !1), (d = d._next);
                (a = 0), this._initted || (k = !0);
              }
            else if (
              (0 === q && 0 > u && (k = !0),
              (this._time = this._rawPrevTime = a),
              this._locked ||
                ((this._totalTime = a),
                0 !== this._repeat &&
                  ((l = q + this._repeatDelay),
                  (this._cycle = (this._totalTime / l) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / l &&
                    a >= r &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * l),
                  this._yoyo &&
                    0 !== (1 & this._cycle) &&
                    (this._time = q - this._time),
                  this._time > q
                    ? ((this._time = q), (a = q + 1e-4))
                    : this._time < 0
                    ? (this._time = a = 0)
                    : (a = this._time))),
              this._hasPause && !this._forcingPlayhead && !b)
            ) {
              if (
                ((a = this._time),
                a >= o || (this._repeat && w !== this._cycle))
              )
                for (d = this._first; d && d._startTime <= a && !m; )
                  d._duration ||
                    "isPause" !== d.data ||
                    d.ratio ||
                    (0 === d._startTime && 0 === this._rawPrevTime) ||
                    (m = d),
                    (d = d._next);
              else
                for (d = this._last; d && d._startTime >= a && !m; )
                  d._duration ||
                    ("isPause" === d.data && d._rawPrevTime > 0 && (m = d)),
                    (d = d._prev);
              m &&
                m._startTime < q &&
                ((this._time = a = m._startTime),
                (this._totalTime =
                  a + this._cycle * (this._totalDuration + this._repeatDelay)));
            }
            if (this._cycle !== w && !this._locked) {
              var x = this._yoyo && 0 !== (1 & w),
                y = x === (this._yoyo && 0 !== (1 & this._cycle)),
                z = this._totalTime,
                A = this._cycle,
                B = this._rawPrevTime,
                C = this._time;
              if (
                ((this._totalTime = w * q),
                this._cycle < w ? (x = !x) : (this._totalTime += q),
                (this._time = o),
                (this._rawPrevTime = 0 === q ? u - 1e-4 : u),
                (this._cycle = w),
                (this._locked = !0),
                (o = x ? 0 : q),
                this.render(o, b, 0 === q),
                b ||
                  this._gc ||
                  (this.vars.onRepeat &&
                    ((this._cycle = A),
                    (this._locked = !1),
                    this._callback("onRepeat"))),
                o !== this._time)
              )
                return;
              if (
                (y &&
                  ((this._cycle = w),
                  (this._locked = !0),
                  (o = x ? q + 1e-4 : -1e-4),
                  this.render(o, !0, !1)),
                (this._locked = !1),
                this._paused && !v)
              )
                return;
              (this._time = C),
                (this._totalTime = z),
                (this._cycle = A),
                (this._rawPrevTime = B);
            }
            if (!((this._time !== o && this._first) || c || k || m))
              return void (
                r !== this._totalTime &&
                this._onUpdate &&
                (b || this._callback("onUpdate"))
              );
            if (
              (this._initted || (this._initted = !0),
              this._active ||
                (!this._paused &&
                  this._totalTime !== r &&
                  a > 0 &&
                  (this._active = !0)),
              0 === r &&
                this.vars.onStart &&
                ((0 === this._totalTime && this._totalDuration) ||
                  b ||
                  this._callback("onStart")),
              (n = this._time),
              n >= o)
            )
              for (
                d = this._first;
                d && ((i = d._next), n === this._time && (!this._paused || v));

              )
                (d._active ||
                  (d._startTime <= this._time && !d._paused && !d._gc)) &&
                  (m === d && this.pause(),
                  d._reversed
                    ? d.render(
                        (d._dirty ? d.totalDuration() : d._totalDuration) -
                          (a - d._startTime) * d._timeScale,
                        b,
                        c
                      )
                    : d.render((a - d._startTime) * d._timeScale, b, c)),
                  (d = i);
            else
              for (
                d = this._last;
                d && ((i = d._prev), n === this._time && (!this._paused || v));

              ) {
                if (d._active || (d._startTime <= o && !d._paused && !d._gc)) {
                  if (m === d) {
                    for (m = d._prev; m && m.endTime() > this._time; )
                      m.render(
                        m._reversed
                          ? m.totalDuration() -
                              (a - m._startTime) * m._timeScale
                          : (a - m._startTime) * m._timeScale,
                        b,
                        c
                      ),
                        (m = m._prev);
                    (m = null), this.pause();
                  }
                  d._reversed
                    ? d.render(
                        (d._dirty ? d.totalDuration() : d._totalDuration) -
                          (a - d._startTime) * d._timeScale,
                        b,
                        c
                      )
                    : d.render((a - d._startTime) * d._timeScale, b, c);
                }
                d = i;
              }
            this._onUpdate &&
              (b || (g.length && h(), this._callback("onUpdate"))),
              j &&
                (this._locked ||
                  this._gc ||
                  ((s === this._startTime || t !== this._timeScale) &&
                    (0 === this._time || p >= this.totalDuration()) &&
                    (f &&
                      (g.length && h(),
                      this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !b && this.vars[j] && this._callback(j))));
          }),
          (k.getActive = function (a, b, c) {
            null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
            var d,
              e,
              f = [],
              g = this.getChildren(a, b, c),
              h = 0,
              i = g.length;
            for (d = 0; i > d; d++) (e = g[d]), e.isActive() && (f[h++] = e);
            return f;
          }),
          (k.getLabelAfter = function (a) {
            a || (0 !== a && (a = this._time));
            var b,
              c = this.getLabelsArray(),
              d = c.length;
            for (b = 0; d > b; b++) if (c[b].time > a) return c[b].name;
            return null;
          }),
          (k.getLabelBefore = function (a) {
            null == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; --c > -1; )
              if (b[c].time < a) return b[c].name;
            return null;
          }),
          (k.getLabelsArray = function () {
            var a,
              b = [],
              c = 0;
            for (a in this._labels) b[c++] = { time: this._labels[a], name: a };
            return (
              b.sort(function (a, b) {
                return a.time - b.time;
              }),
              b
            );
          }),
          (k.invalidate = function () {
            return (this._locked = !1), a.prototype.invalidate.call(this);
          }),
          (k.progress = function (a, b) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) +
                    this._cycle * (this._duration + this._repeatDelay),
                  b
                )
              : this._time / this.duration() || 0;
          }),
          (k.totalProgress = function (a, b) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * a, b)
              : this._totalTime / this.totalDuration() || 0;
          }),
          (k.totalDuration = function (b) {
            return arguments.length
              ? -1 !== this._repeat && b
                ? this.timeScale(this.totalDuration() / b)
                : this
              : (this._dirty &&
                  (a.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (k.time = function (a, b) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                a > this._duration && (a = this._duration),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? (a =
                      this._duration -
                      a +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (a += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(a, b))
              : this._time;
          }),
          (k.repeat = function (a) {
            return arguments.length
              ? ((this._repeat = a), this._uncache(!0))
              : this._repeat;
          }),
          (k.repeatDelay = function (a) {
            return arguments.length
              ? ((this._repeatDelay = a), this._uncache(!0))
              : this._repeatDelay;
          }),
          (k.yoyo = function (a) {
            return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
          }),
          (k.currentLabel = function (a) {
            return arguments.length
              ? this.seek(a, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          d
        );
      },
      !0
    ),
    (function () {
      var a = 180 / Math.PI,
        b = [],
        c = [],
        d = [],
        e = {},
        f = _gsScope._gsDefine.globals,
        g = function (a, b, c, d) {
          c === d && (c = d - (d - b) / 1e6),
            a === b && (b = a + (c - a) / 1e6),
            (this.a = a),
            (this.b = b),
            (this.c = c),
            (this.d = d),
            (this.da = d - a),
            (this.ca = c - a),
            (this.ba = b - a);
        },
        h =
          ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        i = function (a, b, c, d) {
          var e = { a: a },
            f = {},
            g = {},
            h = { c: d },
            i = (a + b) / 2,
            j = (b + c) / 2,
            k = (c + d) / 2,
            l = (i + j) / 2,
            m = (j + k) / 2,
            n = (m - l) / 8;
          return (
            (e.b = i + (a - i) / 4),
            (f.b = l + n),
            (e.c = f.a = (e.b + f.b) / 2),
            (f.c = g.a = (l + m) / 2),
            (g.b = m - n),
            (h.b = k + (d - k) / 4),
            (g.c = h.a = (g.b + h.b) / 2),
            [e, f, g, h]
          );
        },
        j = function (a, e, f, g, h) {
          var j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w = a.length - 1,
            x = 0,
            y = a[0].a;
          for (j = 0; w > j; j++)
            (n = a[x]),
              (k = n.a),
              (l = n.d),
              (m = a[x + 1].d),
              h
                ? ((t = b[j]),
                  (u = c[j]),
                  (v = ((u + t) * e * 0.25) / (g ? 0.5 : d[j] || 0.5)),
                  (o = l - (l - k) * (g ? 0.5 * e : 0 !== t ? v / t : 0)),
                  (p = l + (m - l) * (g ? 0.5 * e : 0 !== u ? v / u : 0)),
                  (q =
                    l - (o + (((p - o) * ((3 * t) / (t + u) + 0.5)) / 4 || 0))))
                : ((o = l - (l - k) * e * 0.5),
                  (p = l + (m - l) * e * 0.5),
                  (q = l - (o + p) / 2)),
              (o += q),
              (p += q),
              (n.c = r = o),
              0 !== j ? (n.b = y) : (n.b = y = n.a + 0.6 * (n.c - n.a)),
              (n.da = l - k),
              (n.ca = r - k),
              (n.ba = y - k),
              f
                ? ((s = i(k, y, r, l)),
                  a.splice(x, 1, s[0], s[1], s[2], s[3]),
                  (x += 4))
                : x++,
              (y = p);
          (n = a[x]),
            (n.b = y),
            (n.c = y + 0.4 * (n.d - y)),
            (n.da = n.d - n.a),
            (n.ca = n.c - n.a),
            (n.ba = y - n.a),
            f &&
              ((s = i(n.a, y, n.c, n.d)),
              a.splice(x, 1, s[0], s[1], s[2], s[3]));
        },
        k = function (a, d, e, f) {
          var h,
            i,
            j,
            k,
            l,
            m,
            n = [];
          if (f)
            for (a = [f].concat(a), i = a.length; --i > -1; )
              "string" == typeof (m = a[i][d]) &&
                "=" === m.charAt(1) &&
                (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
          if (((h = a.length - 2), 0 > h))
            return (n[0] = new g(a[0][d], 0, 0, a[0][d])), n;
          for (i = 0; h > i; i++)
            (j = a[i][d]),
              (k = a[i + 1][d]),
              (n[i] = new g(j, 0, 0, k)),
              e &&
                ((l = a[i + 2][d]),
                (b[i] = (b[i] || 0) + (k - j) * (k - j)),
                (c[i] = (c[i] || 0) + (l - k) * (l - k)));
          return (n[i] = new g(a[i][d], 0, 0, a[i + 1][d])), n;
        },
        l = function (a, f, g, i, l, m) {
          var n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v = {},
            w = [],
            x = m || a[0];
          (l = "string" == typeof l ? "," + l + "," : h), null == f && (f = 1);
          for (o in a[0]) w.push(o);
          if (a.length > 1) {
            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1; )
              if (((o = w[n]), Math.abs(x[o] - u[o]) > 0.05)) {
                t = !1;
                break;
              }
            t &&
              ((a = a.concat()),
              m && a.unshift(m),
              a.push(a[1]),
              (m = a[a.length - 3]));
          }
          for (b.length = c.length = d.length = 0, n = w.length; --n > -1; )
            (o = w[n]),
              (e[o] = -1 !== l.indexOf("," + o + ",")),
              (v[o] = k(a, o, e[o], m));
          for (n = b.length; --n > -1; )
            (b[n] = Math.sqrt(b[n])), (c[n] = Math.sqrt(c[n]));
          if (!i) {
            for (n = w.length; --n > -1; )
              if (e[o])
                for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++)
                  (r = p[q + 1].da / c[q] + p[q].da / b[q] || 0),
                    (d[q] = (d[q] || 0) + r * r);
            for (n = d.length; --n > -1; ) d[n] = Math.sqrt(d[n]);
          }
          for (n = w.length, q = g ? 4 : 1; --n > -1; )
            (o = w[n]),
              (p = v[o]),
              j(p, f, g, i, e[o]),
              t && (p.splice(0, q), p.splice(p.length - q, q));
          return v;
        },
        m = function (a, b, c) {
          b = b || "soft";
          var d,
            e,
            f,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p = {},
            q = "cubic" === b ? 3 : 2,
            r = "soft" === b,
            s = [];
          if ((r && c && (a = [c].concat(a)), null == a || a.length < q + 1))
            throw "invalid Bezier data";
          for (m in a[0]) s.push(m);
          for (j = s.length; --j > -1; ) {
            for (
              m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0;
              l > k;
              k++
            )
              (d =
                null == c
                  ? a[k][m]
                  : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1)
                  ? c[m] + Number(o.charAt(0) + o.substr(2))
                  : Number(o)),
                r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2),
                (i[n++] = d);
            for (l = n - q + 1, n = 0, k = 0; l > k; k += q)
              (d = i[k]),
                (e = i[k + 1]),
                (f = i[k + 2]),
                (h = 2 === q ? 0 : i[k + 3]),
                (i[n++] = o =
                  3 === q
                    ? new g(d, e, f, h)
                    : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f));
            i.length = n;
          }
          return p;
        },
        n = function (a, b, c) {
          for (
            var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length;
            --p > -1;

          )
            for (
              m = a[p],
                f = m.a,
                g = m.d - f,
                h = m.c - f,
                i = m.b - f,
                d = e = 0,
                k = 1;
              c >= k;
              k++
            )
              (j = o * k),
                (l = 1 - j),
                (d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j)),
                (n = p * c + k - 1),
                (b[n] = (b[n] || 0) + d * d);
        },
        o = function (a, b) {
          b = b >> 0 || 6;
          var c,
            d,
            e,
            f,
            g = [],
            h = [],
            i = 0,
            j = 0,
            k = b - 1,
            l = [],
            m = [];
          for (c in a) n(a[c], g, b);
          for (e = g.length, d = 0; e > d; d++)
            (i += Math.sqrt(g[d])),
              (f = d % b),
              (m[f] = i),
              f === k &&
                ((j += i),
                (f = (d / b) >> 0),
                (l[f] = m),
                (h[f] = j),
                (i = 0),
                (m = []));
          return { length: j, lengths: h, segments: l };
        },
        p = _gsScope._gsDefine.plugin({
          propName: "bezier",
          priority: -1,
          version: "1.3.8",
          API: 2,
          global: !0,
          init: function (a, b, c) {
            (this._target = a),
              b instanceof Array && (b = { values: b }),
              (this._func = {}),
              (this._mod = {}),
              (this._props = []),
              (this._timeRes =
                null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10));
            var d,
              e,
              f,
              g,
              h,
              i = b.values || [],
              j = {},
              k = i[0],
              n = b.autoRotate || c.vars.orientToBezier;
            this._autoRotate = n
              ? n instanceof Array
                ? n
                : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]]
              : null;
            for (d in k) this._props.push(d);
            for (f = this._props.length; --f > -1; )
              (d = this._props[f]),
                this._overwriteProps.push(d),
                (e = this._func[d] = "function" == typeof a[d]),
                (j[d] = e
                  ? a[
                      d.indexOf("set") ||
                      "function" != typeof a["get" + d.substr(3)]
                        ? d
                        : "get" + d.substr(3)
                    ]()
                  : parseFloat(a[d])),
                h || (j[d] !== i[0][d] && (h = j));
            if (
              ((this._beziers =
                "cubic" !== b.type &&
                "quadratic" !== b.type &&
                "soft" !== b.type
                  ? l(
                      i,
                      isNaN(b.curviness) ? 1 : b.curviness,
                      !1,
                      "thruBasic" === b.type,
                      b.correlate,
                      h
                    )
                  : m(i, b.type, j)),
              (this._segCount = this._beziers[d].length),
              this._timeRes)
            ) {
              var p = o(this._beziers, this._timeRes);
              (this._length = p.length),
                (this._lengths = p.lengths),
                (this._segments = p.segments),
                (this._l1 = this._li = this._s1 = this._si = 0),
                (this._l2 = this._lengths[0]),
                (this._curSeg = this._segments[0]),
                (this._s2 = this._curSeg[0]),
                (this._prec = 1 / this._curSeg.length);
            }
            if ((n = this._autoRotate))
              for (
                this._initialRotations = [],
                  n[0] instanceof Array || (this._autoRotate = n = [n]),
                  f = n.length;
                --f > -1;

              ) {
                for (g = 0; 3 > g; g++)
                  (d = n[f][g]),
                    (this._func[d] =
                      "function" == typeof a[d]
                        ? a[
                            d.indexOf("set") ||
                            "function" != typeof a["get" + d.substr(3)]
                              ? d
                              : "get" + d.substr(3)
                          ]
                        : !1);
                (d = n[f][2]),
                  (this._initialRotations[f] =
                    (this._func[d]
                      ? this._func[d].call(this._target)
                      : this._target[d]) || 0),
                  this._overwriteProps.push(d);
              }
            return (this._startRatio = c.vars.runBackwards ? 1 : 0), !0;
          },
          set: function (b) {
            var c,
              d,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m = this._segCount,
              n = this._func,
              o = this._target,
              p = b !== this._startRatio;
            if (this._timeRes) {
              if (
                ((k = this._lengths),
                (l = this._curSeg),
                (b *= this._length),
                (e = this._li),
                b > this._l2 && m - 1 > e)
              ) {
                for (j = m - 1; j > e && (this._l2 = k[++e]) <= b; );
                (this._l1 = k[e - 1]),
                  (this._li = e),
                  (this._curSeg = l = this._segments[e]),
                  (this._s2 = l[(this._s1 = this._si = 0)]);
              } else if (b < this._l1 && e > 0) {
                for (; e > 0 && (this._l1 = k[--e]) >= b; );
                0 === e && b < this._l1 ? (this._l1 = 0) : e++,
                  (this._l2 = k[e]),
                  (this._li = e),
                  (this._curSeg = l = this._segments[e]),
                  (this._s1 = l[(this._si = l.length - 1) - 1] || 0),
                  (this._s2 = l[this._si]);
              }
              if (
                ((c = e),
                (b -= this._l1),
                (e = this._si),
                b > this._s2 && e < l.length - 1)
              ) {
                for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b; );
                (this._s1 = l[e - 1]), (this._si = e);
              } else if (b < this._s1 && e > 0) {
                for (; e > 0 && (this._s1 = l[--e]) >= b; );
                0 === e && b < this._s1 ? (this._s1 = 0) : e++,
                  (this._s2 = l[e]),
                  (this._si = e);
              }
              h =
                (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
            } else
              (c = 0 > b ? 0 : b >= 1 ? m - 1 : (m * b) >> 0),
                (h = (b - c * (1 / m)) * m);
            for (d = 1 - h, e = this._props.length; --e > -1; )
              (f = this._props[e]),
                (g = this._beziers[f][c]),
                (i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a),
                this._mod[f] && (i = this._mod[f](i, o)),
                n[f] ? o[f](i) : (o[f] = i);
            if (this._autoRotate) {
              var q,
                r,
                s,
                t,
                u,
                v,
                w,
                x = this._autoRotate;
              for (e = x.length; --e > -1; )
                (f = x[e][2]),
                  (v = x[e][3] || 0),
                  (w = x[e][4] === !0 ? 1 : a),
                  (g = this._beziers[x[e][0]]),
                  (q = this._beziers[x[e][1]]),
                  g &&
                    q &&
                    ((g = g[c]),
                    (q = q[c]),
                    (r = g.a + (g.b - g.a) * h),
                    (t = g.b + (g.c - g.b) * h),
                    (r += (t - r) * h),
                    (t += (g.c + (g.d - g.c) * h - t) * h),
                    (s = q.a + (q.b - q.a) * h),
                    (u = q.b + (q.c - q.b) * h),
                    (s += (u - s) * h),
                    (u += (q.c + (q.d - q.c) * h - u) * h),
                    (i = p
                      ? Math.atan2(u - s, t - r) * w + v
                      : this._initialRotations[e]),
                    this._mod[f] && (i = this._mod[f](i, o)),
                    n[f] ? o[f](i) : (o[f] = i));
            }
          },
        }),
        q = p.prototype;
      (p.bezierThrough = l),
        (p.cubicToQuadratic = i),
        (p._autoCSS = !0),
        (p.quadraticToCubic = function (a, b, c) {
          return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
        }),
        (p._cssRegister = function () {
          var a = f.CSSPlugin;
          if (a) {
            var b = a._internals,
              c = b._parseToProxy,
              d = b._setPluginRatio,
              e = b.CSSPropTween;
            b._registerComplexSpecialProp("bezier", {
              parser: function (a, b, f, g, h, i) {
                b instanceof Array && (b = { values: b }), (i = new p());
                var j,
                  k,
                  l,
                  m = b.values,
                  n = m.length - 1,
                  o = [],
                  q = {};
                if (0 > n) return h;
                for (j = 0; n >= j; j++)
                  (l = c(a, m[j], g, h, i, n !== j)), (o[j] = l.end);
                for (k in b) q[k] = b[k];
                return (
                  (q.values = o),
                  (h = new e(a, "bezier", 0, 0, l.pt, 2)),
                  (h.data = l),
                  (h.plugin = i),
                  (h.setRatio = d),
                  0 === q.autoRotate && (q.autoRotate = !0),
                  !q.autoRotate ||
                    q.autoRotate instanceof Array ||
                    ((j = q.autoRotate === !0 ? 0 : Number(q.autoRotate)),
                    (q.autoRotate =
                      null != l.end.left
                        ? [["left", "top", "rotation", j, !1]]
                        : null != l.end.x
                        ? [["x", "y", "rotation", j, !1]]
                        : !1)),
                  q.autoRotate &&
                    (g._transform || g._enableTransforms(!1),
                    (l.autoRotate = g._target._gsTransform),
                    (l.proxy.rotation = l.autoRotate.rotation || 0),
                    g._overwriteProps.push("rotation")),
                  i._onInitTween(l.proxy, q, g._tween),
                  h
                );
              },
            });
          }
        }),
        (q._mod = function (a) {
          for (var b, c = this._overwriteProps, d = c.length; --d > -1; )
            (b = a[c[d]]), b && "function" == typeof b && (this._mod[c[d]] = b);
        }),
        (q._kill = function (a) {
          var b,
            c,
            d = this._props;
          for (b in this._beziers)
            if (b in a)
              for (
                delete this._beziers[b], delete this._func[b], c = d.length;
                --c > -1;

              )
                d[c] === b && d.splice(c, 1);
          if ((d = this._autoRotate))
            for (c = d.length; --c > -1; ) a[d[c][2]] && d.splice(c, 1);
          return this._super._kill.call(this, a);
        });
    })(),
    _gsScope._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function (a, b) {
        var c,
          d,
          e,
          f,
          g = function () {
            a.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = g.prototype.setRatio);
          },
          h = _gsScope._gsDefine.globals,
          i = {},
          j = (g.prototype = new a("css"));
        (j.constructor = g),
          (g.version = "2.0.2"),
          (g.API = 2),
          (g.defaultTransformPerspective = 0),
          (g.defaultSkewType = "compensated"),
          (g.defaultSmoothOrigin = !0),
          (j = "px"),
          (g.suffixMap = {
            top: j,
            right: j,
            bottom: j,
            left: j,
            width: j,
            height: j,
            fontSize: j,
            padding: j,
            margin: j,
            perspective: j,
            lineHeight: "",
          });
        var k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          w = /(?:\d|\-|\+|=|#|\.)*/g,
          x = /opacity *= *([^)]*)/i,
          y = /opacity:([^;]*)/i,
          z = /alpha\(opacity *=.+?\)/i,
          A = /^(rgb|hsl)/,
          B = /([A-Z])/g,
          C = /-([a-z])/gi,
          D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          E = function (a, b) {
            return b.toUpperCase();
          },
          F = /(?:Left|Right|Width)/i,
          G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          I = /,(?=[^\)]*(?:\(|$))/gi,
          J = /[\s,\(]/i,
          K = Math.PI / 180,
          L = 180 / Math.PI,
          M = {},
          N = { style: {} },
          O = _gsScope.document || {
            createElement: function () {
              return N;
            },
          },
          P = function (a, b) {
            return O.createElementNS
              ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a)
              : O.createElement(a);
          },
          Q = P("div"),
          R = P("img"),
          S = (g._internals = { _specialProps: i }),
          T = (_gsScope.navigator || {}).userAgent || "",
          U = (function () {
            var a = T.indexOf("Android"),
              b = P("a");
            return (
              (m =
                -1 !== T.indexOf("Safari") &&
                -1 === T.indexOf("Chrome") &&
                (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3)),
              (o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6),
              (n = -1 !== T.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) &&
                (p = parseFloat(RegExp.$1)),
              b
                ? ((b.style.cssText = "top:1px;opacity:.55;"),
                  /^0.55/.test(b.style.opacity))
                : !1
            );
          })(),
          V = function (a) {
            return x.test(
              "string" == typeof a
                ? a
                : (a.currentStyle ? a.currentStyle.filter : a.style.filter) ||
                    ""
            )
              ? parseFloat(RegExp.$1) / 100
              : 1;
          },
          W = function (a) {
            _gsScope.console && console.log(a);
          },
          X = "",
          Y = "",
          Z = function (a, b) {
            b = b || Q;
            var c,
              d,
              e = b.style;
            if (void 0 !== e[a]) return a;
            for (
              a = a.charAt(0).toUpperCase() + a.substr(1),
                c = ["O", "Moz", "ms", "Ms", "Webkit"],
                d = 5;
              --d > -1 && void 0 === e[c[d] + a];

            );
            return d >= 0
              ? ((Y = 3 === d ? "ms" : c[d]),
                (X = "-" + Y.toLowerCase() + "-"),
                Y + a)
              : null;
          },
          $ = (
            "undefined" != typeof window
              ? window
              : O.defaultView || { getComputedStyle: function () {} }
          ).getComputedStyle,
          _ = (g.getStyle = function (a, b, c, d, e) {
            var f;
            return U || "opacity" !== b
              ? (!d && a.style[b]
                  ? (f = a.style[b])
                  : (c = c || $(a))
                  ? (f =
                      c[b] ||
                      c.getPropertyValue(b) ||
                      c.getPropertyValue(b.replace(B, "-$1").toLowerCase()))
                  : a.currentStyle && (f = a.currentStyle[b]),
                null == e ||
                (f && "none" !== f && "auto" !== f && "auto auto" !== f)
                  ? f
                  : e)
              : V(a);
          }),
          aa = (S.convertToPixels = function (a, c, d, e, f) {
            if ("px" === e || (!e && "lineHeight" !== c)) return d;
            if ("auto" === e || !d) return 0;
            var h,
              i,
              j,
              k = F.test(c),
              l = a,
              m = Q.style,
              n = 0 > d,
              o = 1 === d;
            if ((n && (d = -d), o && (d *= 100), "lineHeight" !== c || e))
              if ("%" === e && -1 !== c.indexOf("border"))
                h = (d / 100) * (k ? a.clientWidth : a.clientHeight);
              else {
                if (
                  ((m.cssText =
                    "border:0 solid red;position:" +
                    _(a, "position") +
                    ";line-height:0;"),
                  "%" !== e &&
                    l.appendChild &&
                    "v" !== e.charAt(0) &&
                    "rem" !== e)
                )
                  m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                else {
                  if (
                    ((l = a.parentNode || O.body),
                    -1 !== _(l, "display").indexOf("flex") &&
                      (m.position = "absolute"),
                    (i = l._gsCache),
                    (j = b.ticker.frame),
                    i && k && i.time === j)
                  )
                    return (i.width * d) / 100;
                  m[k ? "width" : "height"] = d + e;
                }
                l.appendChild(Q),
                  (h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"])),
                  l.removeChild(Q),
                  k &&
                    "%" === e &&
                    g.cacheWidths !== !1 &&
                    ((i = l._gsCache = l._gsCache || {}),
                    (i.time = j),
                    (i.width = (h / d) * 100)),
                  0 !== h || f || (h = aa(a, c, d, e, !0));
              }
            else
              (i = $(a).lineHeight),
                (a.style.lineHeight = d),
                (h = parseFloat($(a).lineHeight)),
                (a.style.lineHeight = i);
            return o && (h /= 100), n ? -h : h;
          }),
          ba = (S.calculateOffset = function (a, b, c) {
            if ("absolute" !== _(a, "position", c)) return 0;
            var d = "left" === b ? "Left" : "Top",
              e = _(a, "margin" + d, c);
            return (
              a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0)
            );
          }),
          ca = function (a, b) {
            var c,
              d,
              e,
              f = {};
            if ((b = b || $(a, null)))
              if ((c = b.length))
                for (; --c > -1; )
                  (e = b[c]),
                    (-1 === e.indexOf("-transform") || Da === e) &&
                      (f[e.replace(C, E)] = b.getPropertyValue(e));
              else
                for (c in b)
                  (-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
            else if ((b = a.currentStyle || a.style))
              for (c in b)
                "string" == typeof c &&
                  void 0 === f[c] &&
                  (f[c.replace(C, E)] = b[c]);
            return (
              U || (f.opacity = V(a)),
              (d = Ra(a, b, !1)),
              (f.rotation = d.rotation),
              (f.skewX = d.skewX),
              (f.scaleX = d.scaleX),
              (f.scaleY = d.scaleY),
              (f.x = d.x),
              (f.y = d.y),
              Fa &&
                ((f.z = d.z),
                (f.rotationX = d.rotationX),
                (f.rotationY = d.rotationY),
                (f.scaleZ = d.scaleZ)),
              f.filters && delete f.filters,
              f
            );
          },
          da = function (a, b, c, d, e) {
            var f,
              g,
              h,
              i = {},
              j = a.style;
            for (g in c)
              "cssText" !== g &&
                "length" !== g &&
                isNaN(g) &&
                (b[g] !== (f = c[g]) || (e && e[g])) &&
                -1 === g.indexOf("Origin") &&
                ("number" == typeof f || "string" == typeof f) &&
                ((i[g] =
                  "auto" !== f || ("left" !== g && "top" !== g)
                    ? ("" !== f && "auto" !== f && "none" !== f) ||
                      "string" != typeof b[g] ||
                      "" === b[g].replace(v, "")
                      ? f
                      : 0
                    : ba(a, g)),
                void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
            if (d) for (g in d) "className" !== g && (i[g] = d[g]);
            return { difs: i, firstMPT: h };
          },
          ea = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          ga = function (a, b, c) {
            if ("svg" === (a.nodeName + "").toLowerCase())
              return (c || $(a))[b] || 0;
            if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
              e = ea[b],
              f = e.length;
            for (c = c || $(a, null); --f > -1; )
              (d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0),
                (d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0);
            return d;
          },
          ha = function (a, b) {
            if ("contain" === a || "auto" === a || "auto auto" === a)
              return a + " ";
            (null == a || "" === a) && (a = "0 0");
            var c,
              d = a.split(" "),
              e =
                -1 !== a.indexOf("left")
                  ? "0%"
                  : -1 !== a.indexOf("right")
                  ? "100%"
                  : d[0],
              f =
                -1 !== a.indexOf("top")
                  ? "0%"
                  : -1 !== a.indexOf("bottom")
                  ? "100%"
                  : d[1];
            if (d.length > 3 && !b) {
              for (
                d = a.split(", ").join(",").split(","), a = [], c = 0;
                c < d.length;
                c++
              )
                a.push(ha(d[c]));
              return a.join(",");
            }
            return (
              null == f
                ? (f = "center" === e ? "50%" : "0")
                : "center" === f && (f = "50%"),
              ("center" === e ||
                (isNaN(parseFloat(e)) && -1 === (e + "").indexOf("="))) &&
                (e = "50%"),
              (a = e + " " + f + (d.length > 2 ? " " + d[2] : "")),
              b &&
                ((b.oxp = -1 !== e.indexOf("%")),
                (b.oyp = -1 !== f.indexOf("%")),
                (b.oxr = "=" === e.charAt(1)),
                (b.oyr = "=" === f.charAt(1)),
                (b.ox = parseFloat(e.replace(v, ""))),
                (b.oy = parseFloat(f.replace(v, ""))),
                (b.v = a)),
              b || a
            );
          },
          ia = function (a, b) {
            return (
              "function" == typeof a && (a = a(r, q)),
              "string" == typeof a && "=" === a.charAt(1)
                ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2))
                : parseFloat(a) - parseFloat(b) || 0
            );
          },
          ja = function (a, b) {
            "function" == typeof a && (a = a(r, q));
            var c = "string" == typeof a && "=" === a.charAt(1);
            return (
              "string" == typeof a &&
                "v" === a.charAt(a.length - 2) &&
                (a =
                  (c ? a.substr(0, 2) : 0) +
                  window[
                    "inner" + ("vh" === a.substr(-2) ? "Height" : "Width")
                  ] *
                    (parseFloat(c ? a.substr(2) : a) / 100)),
              null == a
                ? b
                : c
                ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b
                : parseFloat(a) || 0
            );
          },
          ka = function (a, b, c, d) {
            var e,
              f,
              g,
              h,
              i,
              j = 1e-6;
            return (
              "function" == typeof a && (a = a(r, q)),
              null == a
                ? (h = b)
                : "number" == typeof a
                ? (h = a)
                : ((e = 360),
                  (f = a.split("_")),
                  (i = "=" === a.charAt(1)),
                  (g =
                    (i
                      ? parseInt(a.charAt(0) + "1", 10) *
                        parseFloat(f[0].substr(2))
                      : parseFloat(f[0])) *
                      (-1 === a.indexOf("rad") ? 1 : L) -
                    (i ? 0 : b)),
                  f.length &&
                    (d && (d[c] = b + g),
                    -1 !== a.indexOf("short") &&
                      ((g %= e),
                      g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)),
                    -1 !== a.indexOf("_cw") && 0 > g
                      ? (g = ((g + 9999999999 * e) % e) - ((g / e) | 0) * e)
                      : -1 !== a.indexOf("ccw") &&
                        g > 0 &&
                        (g = ((g - 9999999999 * e) % e) - ((g / e) | 0) * e)),
                  (h = b + g)),
              j > h && h > -j && (h = 0),
              h
            );
          },
          la = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          ma = function (a, b, c) {
            return (
              (a = 0 > a ? a + 1 : a > 1 ? a - 1 : a),
              (255 *
                (1 > 6 * a
                  ? b + (c - b) * a * 6
                  : 0.5 > a
                  ? c
                  : 2 > 3 * a
                  ? b + (c - b) * (2 / 3 - a) * 6
                  : b) +
                0.5) |
                0
            );
          },
          na = (g.parseColor = function (a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;
            if (a)
              if ("number" == typeof a) c = [a >> 16, (a >> 8) & 255, 255 & a];
              else {
                if (
                  ("," === a.charAt(a.length - 1) &&
                    (a = a.substr(0, a.length - 1)),
                  la[a])
                )
                  c = la[a];
                else if ("#" === a.charAt(0))
                  4 === a.length &&
                    ((d = a.charAt(1)),
                    (e = a.charAt(2)),
                    (f = a.charAt(3)),
                    (a = "#" + d + d + e + e + f + f)),
                    (a = parseInt(a.substr(1), 16)),
                    (c = [a >> 16, (a >> 8) & 255, 255 & a]);
                else if ("hsl" === a.substr(0, 3))
                  if (((c = m = a.match(s)), b)) {
                    if (-1 !== a.indexOf("=")) return a.match(t);
                  } else
                    (g = (Number(c[0]) % 360) / 360),
                      (h = Number(c[1]) / 100),
                      (i = Number(c[2]) / 100),
                      (e = 0.5 >= i ? i * (h + 1) : i + h - i * h),
                      (d = 2 * i - e),
                      c.length > 3 && (c[3] = Number(c[3])),
                      (c[0] = ma(g + 1 / 3, d, e)),
                      (c[1] = ma(g, d, e)),
                      (c[2] = ma(g - 1 / 3, d, e));
                else c = a.match(s) || la.transparent;
                (c[0] = Number(c[0])),
                  (c[1] = Number(c[1])),
                  (c[2] = Number(c[2])),
                  c.length > 3 && (c[3] = Number(c[3]));
              }
            else c = la.black;
            return (
              b &&
                !m &&
                ((d = c[0] / 255),
                (e = c[1] / 255),
                (f = c[2] / 255),
                (j = Math.max(d, e, f)),
                (k = Math.min(d, e, f)),
                (i = (j + k) / 2),
                j === k
                  ? (g = h = 0)
                  : ((l = j - k),
                    (h = i > 0.5 ? l / (2 - j - k) : l / (j + k)),
                    (g =
                      j === d
                        ? (e - f) / l + (f > e ? 6 : 0)
                        : j === e
                        ? (f - d) / l + 2
                        : (d - e) / l + 4),
                    (g *= 60)),
                (c[0] = (g + 0.5) | 0),
                (c[1] = (100 * h + 0.5) | 0),
                (c[2] = (100 * i + 0.5) | 0)),
              c
            );
          }),
          oa = function (a, b) {
            var c,
              d,
              e,
              f = a.match(pa) || [],
              g = 0,
              h = "";
            if (!f.length) return a;
            for (c = 0; c < f.length; c++)
              (d = f[c]),
                (e = a.substr(g, a.indexOf(d, g) - g)),
                (g += e.length + d.length),
                (d = na(d, b)),
                3 === d.length && d.push(1),
                (h +=
                  e +
                  (b
                    ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
                    : "rgba(" + d.join(",")) +
                  ")");
            return h + a.substr(g);
          },
          pa =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (j in la) pa += "|" + j + "\\b";
        (pa = new RegExp(pa + ")", "gi")),
          (g.colorStringFilter = function (a) {
            var b,
              c = a[0] + " " + a[1];
            pa.test(c) &&
              ((b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla(")),
              (a[0] = oa(a[0], b)),
              (a[1] = oa(a[1], b))),
              (pa.lastIndex = 0);
          }),
          b.defaultStringFilter ||
            (b.defaultStringFilter = g.colorStringFilter);
        var qa = function (a, b, c, d) {
            if (null == a)
              return function (a) {
                return a;
              };
            var e,
              f = b ? (a.match(pa) || [""])[0] : "",
              g = a.split(f).join("").match(u) || [],
              h = a.substr(0, a.indexOf(g[0])),
              i = ")" === a.charAt(a.length - 1) ? ")" : "",
              j = -1 !== a.indexOf(" ") ? " " : ",",
              k = g.length,
              l = k > 0 ? g[0].replace(s, "") : "";
            return k
              ? (e = b
                  ? function (a) {
                      var b, m, n, o;
                      if ("number" == typeof a) a += l;
                      else if (d && I.test(a)) {
                        for (
                          o = a.replace(I, "|").split("|"), n = 0;
                          n < o.length;
                          n++
                        )
                          o[n] = e(o[n]);
                        return o.join(",");
                      }
                      if (
                        ((b = (a.match(pa) || [f])[0]),
                        (m = a.split(b).join("").match(u) || []),
                        (n = m.length),
                        k > n--)
                      )
                        for (; ++n < k; )
                          m[n] = c ? m[((n - 1) / 2) | 0] : g[n];
                      return (
                        h +
                        m.join(j) +
                        j +
                        b +
                        i +
                        (-1 !== a.indexOf("inset") ? " inset" : "")
                      );
                    }
                  : function (a) {
                      var b, f, m;
                      if ("number" == typeof a) a += l;
                      else if (d && I.test(a)) {
                        for (
                          f = a.replace(I, "|").split("|"), m = 0;
                          m < f.length;
                          m++
                        )
                          f[m] = e(f[m]);
                        return f.join(",");
                      }
                      if (((b = a.match(u) || []), (m = b.length), k > m--))
                        for (; ++m < k; )
                          b[m] = c ? b[((m - 1) / 2) | 0] : g[m];
                      return h + b.join(j) + i;
                    })
              : function (a) {
                  return a;
                };
          },
          ra = function (a) {
            return (
              (a = a.split(",")),
              function (b, c, d, e, f, g, h) {
                var i,
                  j = (c + "").split(" ");
                for (h = {}, i = 0; 4 > i; i++)
                  h[a[i]] = j[i] = j[i] || j[((i - 1) / 2) >> 0];
                return e.parse(b, h, f, g);
              }
            );
          },
          sa =
            ((S._setPluginRatio = function (a) {
              this.plugin.setRatio(a);
              for (
                var b,
                  c,
                  d,
                  e,
                  f,
                  g = this.data,
                  h = g.proxy,
                  i = g.firstMPT,
                  j = 1e-6;
                i;

              )
                (b = h[i.v]),
                  i.r ? (b = i.r(b)) : j > b && b > -j && (b = 0),
                  (i.t[i.p] = b),
                  (i = i._next);
              if (
                (g.autoRotate &&
                  (g.autoRotate.rotation = g.mod
                    ? g.mod.call(this._tween, h.rotation, this.t, this._tween)
                    : h.rotation),
                1 === a || 0 === a)
              )
                for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i; ) {
                  if (((c = i.t), c.type)) {
                    if (1 === c.type) {
                      for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++)
                        e += c["xn" + d] + c["xs" + (d + 1)];
                      c[f] = e;
                    }
                  } else c[f] = c.s + c.xs0;
                  i = i._next;
                }
            }),
            function (a, b, c, d, e) {
              (this.t = a),
                (this.p = b),
                (this.v = c),
                (this.r = e),
                d && ((d._prev = this), (this._next = d));
            }),
          ta =
            ((S._parseToProxy = function (a, b, c, d, e, f) {
              var g,
                h,
                i,
                j,
                k,
                l = d,
                m = {},
                n = {},
                o = c._transform,
                p = M;
              for (
                c._transform = null,
                  M = b,
                  d = k = c.parse(a, b, d, e),
                  M = p,
                  f &&
                    ((c._transform = o),
                    l && ((l._prev = null), l._prev && (l._prev._next = null)));
                d && d !== l;

              ) {
                if (
                  d.type <= 1 &&
                  ((h = d.p),
                  (n[h] = d.s + d.c),
                  (m[h] = d.s),
                  f || ((j = new sa(d, "s", h, j, d.r)), (d.c = 0)),
                  1 === d.type)
                )
                  for (g = d.l; --g > 0; )
                    (i = "xn" + g),
                      (h = d.p + "_" + i),
                      (n[h] = d.data[i]),
                      (m[h] = d[i]),
                      f || (j = new sa(d, i, h, j, d.rxp[i]));
                d = d._next;
              }
              return { proxy: m, end: n, firstMPT: j, pt: k };
            }),
            (S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
              (this.t = a),
                (this.p = b),
                (this.s = d),
                (this.c = e),
                (this.n = i || b),
                a instanceof ta || f.push(this.n),
                (this.r = j ? ("function" == typeof j ? j : Math.round) : j),
                (this.type = h || 0),
                k && ((this.pr = k), (c = !0)),
                (this.b = void 0 === l ? d : l),
                (this.e = void 0 === m ? d + e : m),
                g && ((this._next = g), (g._prev = this));
            })),
          ua = function (a, b, c, d, e, f) {
            var g = new ta(a, b, c, d - c, e, -1, f);
            return (g.b = c), (g.e = g.xs0 = d), g;
          },
          va = (g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
            (c = c || f || ""),
              "function" == typeof d && (d = d(r, q)),
              (h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d)),
              (d += ""),
              e &&
                pa.test(d + c) &&
                ((d = [c, d]), g.colorStringFilter(d), (c = d[0]), (d = d[1]));
            var m,
              n,
              o,
              p,
              u,
              v,
              w,
              x,
              y,
              z,
              A,
              B,
              C,
              D = c.split(", ").join(",").split(" "),
              E = d.split(", ").join(",").split(" "),
              F = D.length,
              G = k !== !1;
            for (
              (-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) &&
                (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl")
                  ? ((D = D.join(" ").replace(I, ", ").split(" ")),
                    (E = E.join(" ").replace(I, ", ").split(" ")))
                  : ((D = D.join(" ").split(",").join(", ").split(" ")),
                    (E = E.join(" ").split(",").join(", ").split(" "))),
                (F = D.length)),
                F !== E.length && ((D = (f || "").split(" ")), (F = D.length)),
                h.plugin = j,
                h.setRatio = l,
                pa.lastIndex = 0,
                m = 0;
              F > m;
              m++
            )
              if (
                ((p = D[m]), (u = E[m] + ""), (x = parseFloat(p)), x || 0 === x)
              )
                h.appendXtra(
                  "",
                  x,
                  ia(u, x),
                  u.replace(t, ""),
                  G && -1 !== u.indexOf("px") ? Math.round : !1,
                  !0
                );
              else if (e && pa.test(p))
                (B = u.indexOf(")") + 1),
                  (B = ")" + (B ? u.substr(B) : "")),
                  (C = -1 !== u.indexOf("hsl") && U),
                  (z = u),
                  (p = na(p, C)),
                  (u = na(u, C)),
                  (y = p.length + u.length > 6),
                  y && !U && 0 === u[3]
                    ? ((h["xs" + h.l] += h.l ? " transparent" : "transparent"),
                      (h.e = h.e.split(E[m]).join("transparent")))
                    : (U || (y = !1),
                      C
                        ? h
                            .appendXtra(
                              z.substr(0, z.indexOf("hsl")) +
                                (y ? "hsla(" : "hsl("),
                              p[0],
                              ia(u[0], p[0]),
                              ",",
                              !1,
                              !0
                            )
                            .appendXtra("", p[1], ia(u[1], p[1]), "%,", !1)
                            .appendXtra(
                              "",
                              p[2],
                              ia(u[2], p[2]),
                              y ? "%," : "%" + B,
                              !1
                            )
                        : h
                            .appendXtra(
                              z.substr(0, z.indexOf("rgb")) +
                                (y ? "rgba(" : "rgb("),
                              p[0],
                              u[0] - p[0],
                              ",",
                              Math.round,
                              !0
                            )
                            .appendXtra("", p[1], u[1] - p[1], ",", Math.round)
                            .appendXtra(
                              "",
                              p[2],
                              u[2] - p[2],
                              y ? "," : B,
                              Math.round
                            ),
                      y &&
                        ((p = p.length < 4 ? 1 : p[3]),
                        h.appendXtra(
                          "",
                          p,
                          (u.length < 4 ? 1 : u[3]) - p,
                          B,
                          !1
                        ))),
                  (pa.lastIndex = 0);
              else if ((v = p.match(s))) {
                if (((w = u.match(t)), !w || w.length !== v.length)) return h;
                for (o = 0, n = 0; n < v.length; n++)
                  (A = v[n]),
                    (z = p.indexOf(A, o)),
                    h.appendXtra(
                      p.substr(o, z - o),
                      Number(A),
                      ia(w[n], A),
                      "",
                      G && "px" === p.substr(z + A.length, 2) ? Math.round : !1,
                      0 === n
                    ),
                    (o = z + A.length);
                h["xs" + h.l] += p.substr(o);
              } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
            if (-1 !== d.indexOf("=") && h.data) {
              for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++)
                B += h["xs" + m] + h.data["xn" + m];
              h.e = B + h["xs" + m];
            }
            return h.l || ((h.type = -1), (h.xs0 = h.e)), h.xfirst || h;
          }),
          wa = 9;
        for (j = ta.prototype, j.l = j.pr = 0; --wa > 0; )
          (j["xn" + wa] = 0), (j["xs" + wa] = "");
        (j.xs0 = ""),
          (j._next =
            j._prev =
            j.xfirst =
            j.data =
            j.plugin =
            j.setRatio =
            j.rxp =
              null),
          (j.appendXtra = function (a, b, c, d, e, f) {
            var g = this,
              h = g.l;
            return (
              (g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || ""),
              c || 0 === h || g.plugin
                ? (g.l++,
                  (g.type = g.setRatio ? 2 : 1),
                  (g["xs" + g.l] = d || ""),
                  h > 0
                    ? ((g.data["xn" + h] = b + c),
                      (g.rxp["xn" + h] = e),
                      (g["xn" + h] = b),
                      g.plugin ||
                        ((g.xfirst = new ta(
                          g,
                          "xn" + h,
                          b,
                          c,
                          g.xfirst || g,
                          0,
                          g.n,
                          e,
                          g.pr
                        )),
                        (g.xfirst.xs0 = 0)),
                      g)
                    : ((g.data = { s: b + c }),
                      (g.rxp = {}),
                      (g.s = b),
                      (g.c = c),
                      (g.r = e),
                      g))
                : ((g["xs" + h] += b + (d || "")), g)
            );
          });
        var xa = function (a, b) {
            (b = b || {}),
              (this.p = b.prefix ? Z(a) || a : a),
              (i[a] = i[this.p] = this),
              (this.format =
                b.formatter ||
                qa(b.defaultValue, b.color, b.collapsible, b.multi)),
              b.parser && (this.parse = b.parser),
              (this.clrs = b.color),
              (this.multi = b.multi),
              (this.keyword = b.keyword),
              (this.dflt = b.defaultValue),
              (this.pr = b.priority || 0);
          },
          ya = (S._registerComplexSpecialProp = function (a, b, c) {
            "object" != typeof b && (b = { parser: c });
            var d,
              e,
              f = a.split(","),
              g = b.defaultValue;
            for (c = c || [g], d = 0; d < f.length; d++)
              (b.prefix = 0 === d && b.prefix),
                (b.defaultValue = c[d] || g),
                (e = new xa(f[d], b));
          }),
          za = (S._registerPluginProp = function (a) {
            if (!i[a]) {
              var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
              ya(a, {
                parser: function (a, c, d, e, f, g, j) {
                  var k = h.com.greensock.plugins[b];
                  return k
                    ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j))
                    : (W("Error: " + b + " js file not loaded."), f);
                },
              });
            }
          });
        (j = xa.prototype),
          (j.parseComplex = function (a, b, c, d, e, f) {
            var g,
              h,
              i,
              j,
              k,
              l,
              m = this.keyword;
            if (
              (this.multi &&
                (I.test(c) || I.test(b)
                  ? ((h = b.replace(I, "|").split("|")),
                    (i = c.replace(I, "|").split("|")))
                  : m && ((h = [b]), (i = [c]))),
              i)
            ) {
              for (
                j = i.length > h.length ? i.length : h.length, g = 0;
                j > g;
                g++
              )
                (b = h[g] = h[g] || this.dflt),
                  (c = i[g] = i[g] || this.dflt),
                  m &&
                    ((k = b.indexOf(m)),
                    (l = c.indexOf(m)),
                    k !== l &&
                      (-1 === l
                        ? (h[g] = h[g].split(m).join(""))
                        : -1 === k && (h[g] += " " + m)));
              (b = h.join(", ")), (c = i.join(", "));
            }
            return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
          }),
          (j.parse = function (a, b, c, d, f, g, h) {
            return this.parseComplex(
              a.style,
              this.format(_(a, this.p, e, !1, this.dflt)),
              this.format(b),
              f,
              g
            );
          }),
          (g.registerSpecialProp = function (a, b, c) {
            ya(a, {
              parser: function (a, d, e, f, g, h, i) {
                var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
                return (j.plugin = h), (j.setRatio = b(a, d, f._tween, e)), j;
              },
              priority: c,
            });
          }),
          (g.useSVGTransformAttr = !0);
        var Aa,
          Ba =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
              ","
            ),
          Ca = Z("transform"),
          Da = X + "transform",
          Ea = Z("transformOrigin"),
          Fa = null !== Z("perspective"),
          Ga = (S.Transform = function () {
            (this.perspective = parseFloat(g.defaultTransformPerspective) || 0),
              (this.force3D =
                g.defaultForce3D !== !1 && Fa
                  ? g.defaultForce3D || "auto"
                  : !1);
          }),
          Ha = _gsScope.SVGElement,
          Ia = function (a, b, c) {
            var d,
              e = O.createElementNS("http://www.w3.org/2000/svg", a),
              f = /([a-z])([A-Z])/g;
            for (d in c)
              e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
            return b.appendChild(e), e;
          },
          Ja = O.documentElement || {},
          Ka = (function () {
            var a,
              b,
              c,
              d = p || (/Android/i.test(T) && !_gsScope.chrome);
            return (
              O.createElementNS &&
                !d &&
                ((a = Ia("svg", Ja)),
                (b = Ia("rect", a, { width: 100, height: 50, x: 100 })),
                (c = b.getBoundingClientRect().width),
                (b.style[Ea] = "50% 50%"),
                (b.style[Ca] = "scaleX(0.5)"),
                (d = c === b.getBoundingClientRect().width && !(n && Fa)),
                Ja.removeChild(a)),
              d
            );
          })(),
          La = function (a, b, c, d, e, f) {
            var h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u,
              v = a._gsTransform,
              w = Qa(a, !0);
            v && ((t = v.xOrigin), (u = v.yOrigin)),
              (!d || (h = d.split(" ")).length < 2) &&
                ((n = a.getBBox()),
                0 === n.x &&
                  0 === n.y &&
                  n.width + n.height === 0 &&
                  (n = {
                    x:
                      parseFloat(
                        a.hasAttribute("x")
                          ? a.getAttribute("x")
                          : a.hasAttribute("cx")
                          ? a.getAttribute("cx")
                          : 0
                      ) || 0,
                    y:
                      parseFloat(
                        a.hasAttribute("y")
                          ? a.getAttribute("y")
                          : a.hasAttribute("cy")
                          ? a.getAttribute("cy")
                          : 0
                      ) || 0,
                    width: 0,
                    height: 0,
                  }),
                (b = ha(b).split(" ")),
                (h = [
                  (-1 !== b[0].indexOf("%")
                    ? (parseFloat(b[0]) / 100) * n.width
                    : parseFloat(b[0])) + n.x,
                  (-1 !== b[1].indexOf("%")
                    ? (parseFloat(b[1]) / 100) * n.height
                    : parseFloat(b[1])) + n.y,
                ])),
              (c.xOrigin = k = parseFloat(h[0])),
              (c.yOrigin = l = parseFloat(h[1])),
              d &&
                w !== Pa &&
                ((m = w[0]),
                (n = w[1]),
                (o = w[2]),
                (p = w[3]),
                (q = w[4]),
                (r = w[5]),
                (s = m * p - n * o),
                s &&
                  ((i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s),
                  (j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s),
                  (k = c.xOrigin = h[0] = i),
                  (l = c.yOrigin = h[1] = j))),
              v &&
                (f &&
                  ((c.xOffset = v.xOffset), (c.yOffset = v.yOffset), (v = c)),
                e || (e !== !1 && g.defaultSmoothOrigin !== !1)
                  ? ((i = k - t),
                    (j = l - u),
                    (v.xOffset += i * w[0] + j * w[2] - i),
                    (v.yOffset += i * w[1] + j * w[3] - j))
                  : (v.xOffset = v.yOffset = 0)),
              f || a.setAttribute("data-svg-origin", h.join(" "));
          },
          Ma = function (a) {
            var b,
              c = P(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              d = this.parentNode,
              e = this.nextSibling,
              f = this.style.cssText;
            if (
              (Ja.appendChild(c),
              c.appendChild(this),
              (this.style.display = "block"),
              a)
            )
              try {
                (b = this.getBBox()),
                  (this._originalGetBBox = this.getBBox),
                  (this.getBBox = Ma);
              } catch (g) {}
            else this._originalGetBBox && (b = this._originalGetBBox());
            return (
              e ? d.insertBefore(this, e) : d.appendChild(this),
              Ja.removeChild(c),
              (this.style.cssText = f),
              b
            );
          },
          Na = function (a) {
            try {
              return a.getBBox();
            } catch (b) {
              return Ma.call(a, !0);
            }
          },
          Oa = function (a) {
            return !(
              !Ha ||
              !a.getCTM ||
              (a.parentNode && !a.ownerSVGElement) ||
              !Na(a)
            );
          },
          Pa = [1, 0, 0, 1, 0, 0],
          Qa = function (a, b) {
            var c,
              d,
              e,
              f,
              g,
              h,
              i = a._gsTransform || new Ga(),
              j = 1e5,
              k = a.style;
            if (
              (Ca
                ? (d = _(a, Da, null, !0))
                : a.currentStyle &&
                  ((d = a.currentStyle.filter.match(G)),
                  (d =
                    d && 4 === d.length
                      ? [
                          d[0].substr(4),
                          Number(d[2].substr(4)),
                          Number(d[1].substr(4)),
                          d[3].substr(4),
                          i.x || 0,
                          i.y || 0,
                        ].join(",")
                      : "")),
              (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
              !Ca ||
                (!(h = !$(a) || "none" === $(a).display) && a.parentNode) ||
                (h && ((f = k.display), (k.display = "block")),
                a.parentNode || ((g = 1), Ja.appendChild(a)),
                (d = _(a, Da, null, !0)),
                (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
                f ? (k.display = f) : h && Va(k, "display"),
                g && Ja.removeChild(a)),
              (i.svg || (a.getCTM && Oa(a))) &&
                (c &&
                  -1 !== (k[Ca] + "").indexOf("matrix") &&
                  ((d = k[Ca]), (c = 0)),
                (e = a.getAttribute("transform")),
                c &&
                  e &&
                  ((e = a.transform.baseVal.consolidate().matrix),
                  (d =
                    "matrix(" +
                    e.a +
                    "," +
                    e.b +
                    "," +
                    e.c +
                    "," +
                    e.d +
                    "," +
                    e.e +
                    "," +
                    e.f +
                    ")"),
                  (c = 0))),
              c)
            )
              return Pa;
            for (e = (d || "").match(s) || [], wa = e.length; --wa > -1; )
              (f = Number(e[wa])),
                (e[wa] = (g = f - (f |= 0))
                  ? ((g * j + (0 > g ? -0.5 : 0.5)) | 0) / j + f
                  : f);
            return b && e.length > 6
              ? [e[0], e[1], e[4], e[5], e[12], e[13]]
              : e;
          },
          Ra = (S.getTransform = function (a, c, d, e) {
            if (a._gsTransform && d && !e) return a._gsTransform;
            var f,
              h,
              i,
              j,
              k,
              l,
              m = d ? a._gsTransform || new Ga() : new Ga(),
              n = m.scaleX < 0,
              o = 2e-5,
              p = 1e5,
              q = Fa
                ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) ||
                  m.zOrigin ||
                  0
                : 0,
              r = parseFloat(g.defaultTransformPerspective) || 0;
            if (
              ((m.svg = !(!a.getCTM || !Oa(a))),
              m.svg &&
                (La(
                  a,
                  _(a, Ea, c, !1, "50% 50%") + "",
                  m,
                  a.getAttribute("data-svg-origin")
                ),
                (Aa = g.useSVGTransformAttr || Ka)),
              (f = Qa(a)),
              f !== Pa)
            ) {
              if (16 === f.length) {
                var s,
                  t,
                  u,
                  v,
                  w,
                  x = f[0],
                  y = f[1],
                  z = f[2],
                  A = f[3],
                  B = f[4],
                  C = f[5],
                  D = f[6],
                  E = f[7],
                  F = f[8],
                  G = f[9],
                  H = f[10],
                  I = f[12],
                  J = f[13],
                  K = f[14],
                  M = f[11],
                  N = Math.atan2(D, H);
                m.zOrigin &&
                  ((K = -m.zOrigin),
                  (I = F * K - f[12]),
                  (J = G * K - f[13]),
                  (K = H * K + m.zOrigin - f[14])),
                  (m.rotationX = N * L),
                  N &&
                    ((v = Math.cos(-N)),
                    (w = Math.sin(-N)),
                    (s = B * v + F * w),
                    (t = C * v + G * w),
                    (u = D * v + H * w),
                    (F = B * -w + F * v),
                    (G = C * -w + G * v),
                    (H = D * -w + H * v),
                    (M = E * -w + M * v),
                    (B = s),
                    (C = t),
                    (D = u)),
                  (N = Math.atan2(-z, H)),
                  (m.rotationY = N * L),
                  N &&
                    ((v = Math.cos(-N)),
                    (w = Math.sin(-N)),
                    (s = x * v - F * w),
                    (t = y * v - G * w),
                    (u = z * v - H * w),
                    (G = y * w + G * v),
                    (H = z * w + H * v),
                    (M = A * w + M * v),
                    (x = s),
                    (y = t),
                    (z = u)),
                  (N = Math.atan2(y, x)),
                  (m.rotation = N * L),
                  N &&
                    ((v = Math.cos(N)),
                    (w = Math.sin(N)),
                    (s = x * v + y * w),
                    (t = B * v + C * w),
                    (u = F * v + G * w),
                    (y = y * v - x * w),
                    (C = C * v - B * w),
                    (G = G * v - F * w),
                    (x = s),
                    (B = t),
                    (F = u)),
                  m.rotationX &&
                    Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 &&
                    ((m.rotationX = m.rotation = 0),
                    (m.rotationY = 180 - m.rotationY)),
                  (N = Math.atan2(B, C)),
                  (m.scaleX =
                    ((Math.sqrt(x * x + y * y + z * z) * p + 0.5) | 0) / p),
                  (m.scaleY = ((Math.sqrt(C * C + D * D) * p + 0.5) | 0) / p),
                  (m.scaleZ =
                    ((Math.sqrt(F * F + G * G + H * H) * p + 0.5) | 0) / p),
                  (x /= m.scaleX),
                  (B /= m.scaleY),
                  (y /= m.scaleX),
                  (C /= m.scaleY),
                  Math.abs(N) > o
                    ? ((m.skewX = N * L),
                      (B = 0),
                      "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N)))
                    : (m.skewX = 0),
                  (m.perspective = M ? 1 / (0 > M ? -M : M) : 0),
                  (m.x = I),
                  (m.y = J),
                  (m.z = K),
                  m.svg &&
                    ((m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B)),
                    (m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C)));
              } else if (
                !Fa ||
                e ||
                !f.length ||
                m.x !== f[4] ||
                m.y !== f[5] ||
                (!m.rotationX && !m.rotationY)
              ) {
                var O = f.length >= 6,
                  P = O ? f[0] : 1,
                  Q = f[1] || 0,
                  R = f[2] || 0,
                  S = O ? f[3] : 1;
                (m.x = f[4] || 0),
                  (m.y = f[5] || 0),
                  (i = Math.sqrt(P * P + Q * Q)),
                  (j = Math.sqrt(S * S + R * R)),
                  (k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0),
                  (l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0),
                  (m.scaleX = i),
                  (m.scaleY = j),
                  (m.rotation = k),
                  (m.skewX = l),
                  Fa &&
                    ((m.rotationX = m.rotationY = m.z = 0),
                    (m.perspective = r),
                    (m.scaleZ = 1)),
                  m.svg &&
                    ((m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R)),
                    (m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S)));
              }
              Math.abs(m.skewX) > 90 &&
                Math.abs(m.skewX) < 270 &&
                (n
                  ? ((m.scaleX *= -1),
                    (m.skewX += m.rotation <= 0 ? 180 : -180),
                    (m.rotation += m.rotation <= 0 ? 180 : -180))
                  : ((m.scaleY *= -1), (m.skewX += m.skewX <= 0 ? 180 : -180))),
                (m.zOrigin = q);
              for (h in m) m[h] < o && m[h] > -o && (m[h] = 0);
            }
            return (
              d &&
                ((a._gsTransform = m),
                m.svg &&
                  (Aa && a.style[Ca]
                    ? b.delayedCall(0.001, function () {
                        Va(a.style, Ca);
                      })
                    : !Aa &&
                      a.getAttribute("transform") &&
                      b.delayedCall(0.001, function () {
                        a.removeAttribute("transform");
                      }))),
              m
            );
          }),
          Sa = function (a) {
            var b,
              c,
              d = this.data,
              e = -d.rotation * K,
              f = e + d.skewX * K,
              g = 1e5,
              h = ((Math.cos(e) * d.scaleX * g) | 0) / g,
              i = ((Math.sin(e) * d.scaleX * g) | 0) / g,
              j = ((Math.sin(f) * -d.scaleY * g) | 0) / g,
              k = ((Math.cos(f) * d.scaleY * g) | 0) / g,
              l = this.t.style,
              m = this.t.currentStyle;
            if (m) {
              (c = i), (i = -j), (j = -c), (b = m.filter), (l.filter = "");
              var n,
                o,
                q = this.t.offsetWidth,
                r = this.t.offsetHeight,
                s = "absolute" !== m.position,
                t =
                  "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                  h +
                  ", M12=" +
                  i +
                  ", M21=" +
                  j +
                  ", M22=" +
                  k,
                u = d.x + (q * d.xPercent) / 100,
                v = d.y + (r * d.yPercent) / 100;
              if (
                (null != d.ox &&
                  ((n = (d.oxp ? q * d.ox * 0.01 : d.ox) - q / 2),
                  (o = (d.oyp ? r * d.oy * 0.01 : d.oy) - r / 2),
                  (u += n - (n * h + o * i)),
                  (v += o - (n * j + o * k))),
                s
                  ? ((n = q / 2),
                    (o = r / 2),
                    (t +=
                      ", Dx=" +
                      (n - (n * h + o * i) + u) +
                      ", Dy=" +
                      (o - (n * j + o * k) + v) +
                      ")"))
                  : (t += ", sizingMethod='auto expand')"),
                -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(")
                  ? (l.filter = b.replace(H, t))
                  : (l.filter = t + " " + b),
                (0 === a || 1 === a) &&
                  1 === h &&
                  0 === i &&
                  0 === j &&
                  1 === k &&
                  ((s && -1 === t.indexOf("Dx=0, Dy=0")) ||
                    (x.test(b) && 100 !== parseFloat(RegExp.$1)) ||
                    (-1 === b.indexOf(b.indexOf("Alpha")) &&
                      l.removeAttribute("filter"))),
                !s)
              ) {
                var y,
                  z,
                  A,
                  B = 8 > p ? 1 : -1;
                for (
                  n = d.ieOffsetX || 0,
                    o = d.ieOffsetY || 0,
                    d.ieOffsetX = Math.round(
                      (q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 +
                        u
                    ),
                    d.ieOffsetY = Math.round(
                      (r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 +
                        v
                    ),
                    wa = 0;
                  4 > wa;
                  wa++
                )
                  (z = fa[wa]),
                    (y = m[z]),
                    (c =
                      -1 !== y.indexOf("px")
                        ? parseFloat(y)
                        : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0),
                    (A =
                      c !== d[z]
                        ? 2 > wa
                          ? -d.ieOffsetX
                          : -d.ieOffsetY
                        : 2 > wa
                        ? n - d.ieOffsetX
                        : o - d.ieOffsetY),
                    (l[z] =
                      (d[z] = Math.round(
                        c - A * (0 === wa || 2 === wa ? 1 : B)
                      )) + "px");
              }
            }
          },
          Ta =
            (S.set3DTransformRatio =
            S.setTransformRatio =
              function (a) {
                var b,
                  c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k,
                  l,
                  m,
                  o,
                  p,
                  q,
                  r,
                  s,
                  t,
                  u,
                  v,
                  w,
                  x,
                  y,
                  z = this.data,
                  A = this.t.style,
                  B = z.rotation,
                  C = z.rotationX,
                  D = z.rotationY,
                  E = z.scaleX,
                  F = z.scaleY,
                  G = z.scaleZ,
                  H = z.x,
                  I = z.y,
                  J = z.z,
                  L = z.svg,
                  M = z.perspective,
                  N = z.force3D,
                  O = z.skewY,
                  P = z.skewX;
                if (
                  (O && ((P += O), (B += O)),
                  ((((1 === a || 0 === a) &&
                    "auto" === N &&
                    (this.tween._totalTime === this.tween._totalDuration ||
                      !this.tween._totalTime)) ||
                    !N) &&
                    !J &&
                    !M &&
                    !D &&
                    !C &&
                    1 === G) ||
                    (Aa && L) ||
                    !Fa)
                )
                  return void (B || P || L
                    ? ((B *= K),
                      (x = P * K),
                      (y = 1e5),
                      (c = Math.cos(B) * E),
                      (f = Math.sin(B) * E),
                      (d = Math.sin(B - x) * -F),
                      (g = Math.cos(B - x) * F),
                      x &&
                        "simple" === z.skewType &&
                        ((b = Math.tan(x - O * K)),
                        (b = Math.sqrt(1 + b * b)),
                        (d *= b),
                        (g *= b),
                        O &&
                          ((b = Math.tan(O * K)),
                          (b = Math.sqrt(1 + b * b)),
                          (c *= b),
                          (f *= b))),
                      L &&
                        ((H +=
                          z.xOrigin -
                          (z.xOrigin * c + z.yOrigin * d) +
                          z.xOffset),
                        (I +=
                          z.yOrigin -
                          (z.xOrigin * f + z.yOrigin * g) +
                          z.yOffset),
                        Aa &&
                          (z.xPercent || z.yPercent) &&
                          ((q = this.t.getBBox()),
                          (H += 0.01 * z.xPercent * q.width),
                          (I += 0.01 * z.yPercent * q.height)),
                        (q = 1e-6),
                        q > H && H > -q && (H = 0),
                        q > I && I > -q && (I = 0)),
                      (u =
                        ((c * y) | 0) / y +
                        "," +
                        ((f * y) | 0) / y +
                        "," +
                        ((d * y) | 0) / y +
                        "," +
                        ((g * y) | 0) / y +
                        "," +
                        H +
                        "," +
                        I +
                        ")"),
                      L && Aa
                        ? this.t.setAttribute("transform", "matrix(" + u)
                        : (A[Ca] =
                            (z.xPercent || z.yPercent
                              ? "translate(" +
                                z.xPercent +
                                "%," +
                                z.yPercent +
                                "%) matrix("
                              : "matrix(") + u))
                    : (A[Ca] =
                        (z.xPercent || z.yPercent
                          ? "translate(" +
                            z.xPercent +
                            "%," +
                            z.yPercent +
                            "%) matrix("
                          : "matrix(") +
                        E +
                        ",0,0," +
                        F +
                        "," +
                        H +
                        "," +
                        I +
                        ")"));
                if (
                  (n &&
                    ((q = 1e-4),
                    q > E && E > -q && (E = G = 2e-5),
                    q > F && F > -q && (F = G = 2e-5),
                    !M || z.z || z.rotationX || z.rotationY || (M = 0)),
                  B || P)
                )
                  (B *= K),
                    (r = c = Math.cos(B)),
                    (s = f = Math.sin(B)),
                    P &&
                      ((B -= P * K),
                      (r = Math.cos(B)),
                      (s = Math.sin(B)),
                      "simple" === z.skewType &&
                        ((b = Math.tan((P - O) * K)),
                        (b = Math.sqrt(1 + b * b)),
                        (r *= b),
                        (s *= b),
                        z.skewY &&
                          ((b = Math.tan(O * K)),
                          (b = Math.sqrt(1 + b * b)),
                          (c *= b),
                          (f *= b)))),
                    (d = -s),
                    (g = r);
                else {
                  if (!(D || C || 1 !== G || M || L))
                    return void (A[Ca] =
                      (z.xPercent || z.yPercent
                        ? "translate(" +
                          z.xPercent +
                          "%," +
                          z.yPercent +
                          "%) translate3d("
                        : "translate3d(") +
                      H +
                      "px," +
                      I +
                      "px," +
                      J +
                      "px)" +
                      (1 !== E || 1 !== F
                        ? " scale(" + E + "," + F + ")"
                        : ""));
                  (c = g = 1), (d = f = 0);
                }
                (k = 1),
                  (e = h = i = j = l = m = 0),
                  (o = M ? -1 / M : 0),
                  (p = z.zOrigin),
                  (q = 1e-6),
                  (v = ","),
                  (w = "0"),
                  (B = D * K),
                  B &&
                    ((r = Math.cos(B)),
                    (s = Math.sin(B)),
                    (i = -s),
                    (l = o * -s),
                    (e = c * s),
                    (h = f * s),
                    (k = r),
                    (o *= r),
                    (c *= r),
                    (f *= r)),
                  (B = C * K),
                  B &&
                    ((r = Math.cos(B)),
                    (s = Math.sin(B)),
                    (b = d * r + e * s),
                    (t = g * r + h * s),
                    (j = k * s),
                    (m = o * s),
                    (e = d * -s + e * r),
                    (h = g * -s + h * r),
                    (k *= r),
                    (o *= r),
                    (d = b),
                    (g = t)),
                  1 !== G && ((e *= G), (h *= G), (k *= G), (o *= G)),
                  1 !== F && ((d *= F), (g *= F), (j *= F), (m *= F)),
                  1 !== E && ((c *= E), (f *= E), (i *= E), (l *= E)),
                  (p || L) &&
                    (p && ((H += e * -p), (I += h * -p), (J += k * -p + p)),
                    L &&
                      ((H +=
                        z.xOrigin -
                        (z.xOrigin * c + z.yOrigin * d) +
                        z.xOffset),
                      (I +=
                        z.yOrigin -
                        (z.xOrigin * f + z.yOrigin * g) +
                        z.yOffset)),
                    q > H && H > -q && (H = w),
                    q > I && I > -q && (I = w),
                    q > J && J > -q && (J = 0)),
                  (u =
                    z.xPercent || z.yPercent
                      ? "translate(" +
                        z.xPercent +
                        "%," +
                        z.yPercent +
                        "%) matrix3d("
                      : "matrix3d("),
                  (u +=
                    (q > c && c > -q ? w : c) +
                    v +
                    (q > f && f > -q ? w : f) +
                    v +
                    (q > i && i > -q ? w : i)),
                  (u +=
                    v +
                    (q > l && l > -q ? w : l) +
                    v +
                    (q > d && d > -q ? w : d) +
                    v +
                    (q > g && g > -q ? w : g)),
                  C || D || 1 !== G
                    ? ((u +=
                        v +
                        (q > j && j > -q ? w : j) +
                        v +
                        (q > m && m > -q ? w : m) +
                        v +
                        (q > e && e > -q ? w : e)),
                      (u +=
                        v +
                        (q > h && h > -q ? w : h) +
                        v +
                        (q > k && k > -q ? w : k) +
                        v +
                        (q > o && o > -q ? w : o) +
                        v))
                    : (u += ",0,0,0,0,1,0,"),
                  (u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")"),
                  (A[Ca] = u);
              });
        (j = Ga.prototype),
          (j.x =
            j.y =
            j.z =
            j.skewX =
            j.skewY =
            j.rotation =
            j.rotationX =
            j.rotationY =
            j.zOrigin =
            j.xPercent =
            j.yPercent =
            j.xOffset =
            j.yOffset =
              0),
          (j.scaleX = j.scaleY = j.scaleZ = 1),
          ya(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser: function (a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i) return f;
                d._lastParsedTransform = i;
                var j,
                  k = i.scale && "function" == typeof i.scale ? i.scale : 0;
                "function" == typeof i[c] && ((j = i[c]), (i[c] = b)),
                  k && (i.scale = k(r, a));
                var l,
                  m,
                  n,
                  o,
                  p,
                  s,
                  t,
                  u,
                  v,
                  w = a._gsTransform,
                  x = a.style,
                  y = 1e-6,
                  z = Ba.length,
                  A = i,
                  B = {},
                  C = "transformOrigin",
                  D = Ra(a, e, !0, A.parseTransform),
                  E =
                    A.transform &&
                    ("function" == typeof A.transform
                      ? A.transform(r, q)
                      : A.transform);
                if (
                  ((D.skewType = A.skewType || D.skewType || g.defaultSkewType),
                  (d._transform = D),
                  "rotationZ" in A && (A.rotation = A.rotationZ),
                  E && "string" == typeof E && Ca)
                )
                  (m = Q.style),
                    (m[Ca] = E),
                    (m.display = "block"),
                    (m.position = "absolute"),
                    -1 !== E.indexOf("%") &&
                      ((m.width = _(a, "width")), (m.height = _(a, "height"))),
                    O.body.appendChild(Q),
                    (l = Ra(Q, null, !1)),
                    "simple" === D.skewType &&
                      (l.scaleY *= Math.cos(l.skewX * K)),
                    D.svg &&
                      ((s = D.xOrigin),
                      (t = D.yOrigin),
                      (l.x -= D.xOffset),
                      (l.y -= D.yOffset),
                      (A.transformOrigin || A.svgOrigin) &&
                        ((E = {}),
                        La(
                          a,
                          ha(A.transformOrigin),
                          E,
                          A.svgOrigin,
                          A.smoothOrigin,
                          !0
                        ),
                        (s = E.xOrigin),
                        (t = E.yOrigin),
                        (l.x -= E.xOffset - D.xOffset),
                        (l.y -= E.yOffset - D.yOffset)),
                      (s || t) &&
                        ((u = Qa(Q, !0)),
                        (l.x -= s - (s * u[0] + t * u[2])),
                        (l.y -= t - (s * u[1] + t * u[3])))),
                    O.body.removeChild(Q),
                    l.perspective || (l.perspective = D.perspective),
                    null != A.xPercent &&
                      (l.xPercent = ja(A.xPercent, D.xPercent)),
                    null != A.yPercent &&
                      (l.yPercent = ja(A.yPercent, D.yPercent));
                else if ("object" == typeof A) {
                  if (
                    ((l = {
                      scaleX: ja(
                        null != A.scaleX ? A.scaleX : A.scale,
                        D.scaleX
                      ),
                      scaleY: ja(
                        null != A.scaleY ? A.scaleY : A.scale,
                        D.scaleY
                      ),
                      scaleZ: ja(A.scaleZ, D.scaleZ),
                      x: ja(A.x, D.x),
                      y: ja(A.y, D.y),
                      z: ja(A.z, D.z),
                      xPercent: ja(A.xPercent, D.xPercent),
                      yPercent: ja(A.yPercent, D.yPercent),
                      perspective: ja(A.transformPerspective, D.perspective),
                    }),
                    (p = A.directionalRotation),
                    null != p)
                  )
                    if ("object" == typeof p) for (m in p) A[m] = p[m];
                    else A.rotation = p;
                  "string" == typeof A.x &&
                    -1 !== A.x.indexOf("%") &&
                    ((l.x = 0), (l.xPercent = ja(A.x, D.xPercent))),
                    "string" == typeof A.y &&
                      -1 !== A.y.indexOf("%") &&
                      ((l.y = 0), (l.yPercent = ja(A.y, D.yPercent))),
                    (l.rotation = ka(
                      "rotation" in A
                        ? A.rotation
                        : "shortRotation" in A
                        ? A.shortRotation + "_short"
                        : D.rotation,
                      D.rotation,
                      "rotation",
                      B
                    )),
                    Fa &&
                      ((l.rotationX = ka(
                        "rotationX" in A
                          ? A.rotationX
                          : "shortRotationX" in A
                          ? A.shortRotationX + "_short"
                          : D.rotationX || 0,
                        D.rotationX,
                        "rotationX",
                        B
                      )),
                      (l.rotationY = ka(
                        "rotationY" in A
                          ? A.rotationY
                          : "shortRotationY" in A
                          ? A.shortRotationY + "_short"
                          : D.rotationY || 0,
                        D.rotationY,
                        "rotationY",
                        B
                      ))),
                    (l.skewX = ka(A.skewX, D.skewX)),
                    (l.skewY = ka(A.skewY, D.skewY));
                }
                for (
                  Fa &&
                    null != A.force3D &&
                    ((D.force3D = A.force3D), (o = !0)),
                    n =
                      D.force3D ||
                      D.z ||
                      D.rotationX ||
                      D.rotationY ||
                      l.z ||
                      l.rotationX ||
                      l.rotationY ||
                      l.perspective,
                    n || null == A.scale || (l.scaleZ = 1);
                  --z > -1;

                )
                  (v = Ba[z]),
                    (E = l[v] - D[v]),
                    (E > y || -y > E || null != A[v] || null != M[v]) &&
                      ((o = !0),
                      (f = new ta(D, v, D[v], E, f)),
                      v in B && (f.e = B[v]),
                      (f.xs0 = 0),
                      (f.plugin = h),
                      d._overwriteProps.push(f.n));
                return (
                  (E = A.transformOrigin),
                  D.svg &&
                    (E || A.svgOrigin) &&
                    ((s = D.xOffset),
                    (t = D.yOffset),
                    La(a, ha(E), l, A.svgOrigin, A.smoothOrigin),
                    (f = ua(
                      D,
                      "xOrigin",
                      (w ? D : l).xOrigin,
                      l.xOrigin,
                      f,
                      C
                    )),
                    (f = ua(
                      D,
                      "yOrigin",
                      (w ? D : l).yOrigin,
                      l.yOrigin,
                      f,
                      C
                    )),
                    (s !== D.xOffset || t !== D.yOffset) &&
                      ((f = ua(
                        D,
                        "xOffset",
                        w ? s : D.xOffset,
                        D.xOffset,
                        f,
                        C
                      )),
                      (f = ua(
                        D,
                        "yOffset",
                        w ? t : D.yOffset,
                        D.yOffset,
                        f,
                        C
                      ))),
                    (E = "0px 0px")),
                  (E || (Fa && n && D.zOrigin)) &&
                    (Ca
                      ? ((o = !0),
                        (v = Ea),
                        (E = (E || _(a, v, e, !1, "50% 50%")) + ""),
                        (f = new ta(x, v, 0, 0, f, -1, C)),
                        (f.b = x[v]),
                        (f.plugin = h),
                        Fa
                          ? ((m = D.zOrigin),
                            (E = E.split(" ")),
                            (D.zOrigin =
                              (E.length > 2 && (0 === m || "0px" !== E[2])
                                ? parseFloat(E[2])
                                : m) || 0),
                            (f.xs0 = f.e =
                              E[0] + " " + (E[1] || "50%") + " 0px"),
                            (f = new ta(D, "zOrigin", 0, 0, f, -1, f.n)),
                            (f.b = m),
                            (f.xs0 = f.e = D.zOrigin))
                          : (f.xs0 = f.e = E))
                      : ha(E + "", D)),
                  o &&
                    (d._transformType =
                      (D.svg && Aa) || (!n && 3 !== this._transformType)
                        ? 2
                        : 3),
                  j && (i[c] = j),
                  k && (i.scale = k),
                  f
                );
              },
              prefix: !0,
            }
          ),
          ya("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          ya("borderRadius", {
            defaultValue: "0px",
            parser: function (a, b, c, f, g, h) {
              b = this.format(b);
              var i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v,
                w,
                x,
                y = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius",
                ],
                z = a.style;
              for (
                q = parseFloat(a.offsetWidth),
                  r = parseFloat(a.offsetHeight),
                  i = b.split(" "),
                  j = 0;
                j < y.length;
                j++
              )
                this.p.indexOf("border") && (y[j] = Z(y[j])),
                  (m = l = _(a, y[j], e, !1, "0px")),
                  -1 !== m.indexOf(" ") &&
                    ((l = m.split(" ")), (m = l[0]), (l = l[1])),
                  (n = k = i[j]),
                  (o = parseFloat(m)),
                  (t = m.substr((o + "").length)),
                  (u = "=" === n.charAt(1)),
                  u
                    ? ((p = parseInt(n.charAt(0) + "1", 10)),
                      (n = n.substr(2)),
                      (p *= parseFloat(n)),
                      (s = n.substr((p + "").length - (0 > p ? 1 : 0)) || ""))
                    : ((p = parseFloat(n)), (s = n.substr((p + "").length))),
                  "" === s && (s = d[c] || t),
                  s !== t &&
                    ((v = aa(a, "borderLeft", o, t)),
                    (w = aa(a, "borderTop", o, t)),
                    "%" === s
                      ? ((m = (v / q) * 100 + "%"), (l = (w / r) * 100 + "%"))
                      : "em" === s
                      ? ((x = aa(a, "borderLeft", 1, "em")),
                        (m = v / x + "em"),
                        (l = w / x + "em"))
                      : ((m = v + "px"), (l = w + "px")),
                    u &&
                      ((n = parseFloat(m) + p + s),
                      (k = parseFloat(l) + p + s))),
                  (g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g));
              return g;
            },
            prefix: !0,
            formatter: qa("0px 0px 0px 0px", !1, !0),
          }),
          ya(
            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
            {
              defaultValue: "0px",
              parser: function (a, b, c, d, f, g) {
                return va(
                  a.style,
                  c,
                  this.format(_(a, c, e, !1, "0px 0px")),
                  this.format(b),
                  !1,
                  "0px",
                  f
                );
              },
              prefix: !0,
              formatter: qa("0px 0px", !1, !0),
            }
          ),
          ya("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (a, b, c, d, f, g) {
              var h,
                i,
                j,
                k,
                l,
                m,
                n = "background-position",
                o = e || $(a, null),
                q = this.format(
                  (o
                    ? p
                      ? o.getPropertyValue(n + "-x") +
                        " " +
                        o.getPropertyValue(n + "-y")
                      : o.getPropertyValue(n)
                    : a.currentStyle.backgroundPositionX +
                      " " +
                      a.currentStyle.backgroundPositionY) || "0 0"
                ),
                r = this.format(b);
              if (
                (-1 !== q.indexOf("%")) != (-1 !== r.indexOf("%")) &&
                r.split(",").length < 2 &&
                ((m = _(a, "backgroundImage").replace(D, "")),
                m && "none" !== m)
              ) {
                for (
                  h = q.split(" "),
                    i = r.split(" "),
                    R.setAttribute("src", m),
                    j = 2;
                  --j > -1;

                )
                  (q = h[j]),
                    (k = -1 !== q.indexOf("%")),
                    k !== (-1 !== i[j].indexOf("%")) &&
                      ((l =
                        0 === j
                          ? a.offsetWidth - R.width
                          : a.offsetHeight - R.height),
                      (h[j] = k
                        ? (parseFloat(q) / 100) * l + "px"
                        : (parseFloat(q) / l) * 100 + "%"));
                q = h.join(" ");
              }
              return this.parseComplex(a.style, q, r, f, g);
            },
            formatter: ha,
          }),
          ya("backgroundSize", {
            defaultValue: "0 0",
            formatter: function (a) {
              return (
                (a += ""),
                "co" === a.substr(0, 2)
                  ? a
                  : ha(-1 === a.indexOf(" ") ? a + " " + a : a)
              );
            },
          }),
          ya("perspective", { defaultValue: "0px", prefix: !0 }),
          ya("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          ya("transformStyle", { prefix: !0 }),
          ya("backfaceVisibility", { prefix: !0 }),
          ya("userSelect", { prefix: !0 }),
          ya("margin", {
            parser: ra("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          ya("padding", {
            parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          ya("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (a, b, c, d, f, g) {
              var h, i, j;
              return (
                9 > p
                  ? ((i = a.currentStyle),
                    (j = 8 > p ? " " : ","),
                    (h =
                      "rect(" +
                      i.clipTop +
                      j +
                      i.clipRight +
                      j +
                      i.clipBottom +
                      j +
                      i.clipLeft +
                      ")"),
                    (b = this.format(b).split(",").join(j)))
                  : ((h = this.format(_(a, this.p, e, !1, this.dflt))),
                    (b = this.format(b))),
                this.parseComplex(a.style, h, b, f, g)
              );
            },
          }),
          ya("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          ya("autoRound,strictUnits", {
            parser: function (a, b, c, d, e) {
              return e;
            },
          }),
          ya("border", {
            defaultValue: "0px solid #000",
            parser: function (a, b, c, d, f, g) {
              var h = _(a, "borderTopWidth", e, !1, "0px"),
                i = this.format(b).split(" "),
                j = i[0].replace(w, "");
              return (
                "px" !== j &&
                  (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j),
                this.parseComplex(
                  a.style,
                  this.format(
                    h +
                      " " +
                      _(a, "borderTopStyle", e, !1, "solid") +
                      " " +
                      _(a, "borderTopColor", e, !1, "#000")
                  ),
                  i.join(" "),
                  f,
                  g
                )
              );
            },
            color: !0,
            formatter: function (a) {
              var b = a.split(" ");
              return (
                b[0] +
                " " +
                (b[1] || "solid") +
                " " +
                (a.match(pa) || ["#000"])[0]
              );
            },
          }),
          ya("borderWidth", {
            parser: ra(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          ya("float,cssFloat,styleFloat", {
            parser: function (a, b, c, d, e, f) {
              var g = a.style,
                h = "cssFloat" in g ? "cssFloat" : "styleFloat";
              return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
            },
          });
        var Ua = function (a) {
          var b,
            c = this.t,
            d = c.filter || _(this.data, "filter") || "",
            e = (this.s + this.c * a) | 0;
          100 === e &&
            (-1 === d.indexOf("atrix(") &&
            -1 === d.indexOf("radient(") &&
            -1 === d.indexOf("oader(")
              ? (c.removeAttribute("filter"), (b = !_(this.data, "filter")))
              : ((c.filter = d.replace(z, "")), (b = !0))),
            b ||
              (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"),
              -1 === d.indexOf("pacity")
                ? (0 === e && this.xn1) ||
                  (c.filter = d + " alpha(opacity=" + e + ")")
                : (c.filter = d.replace(x, "opacity=" + e)));
        };
        ya("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (a, b, c, d, f, g) {
            var h = parseFloat(_(a, "opacity", e, !1, "1")),
              i = a.style,
              j = "autoAlpha" === c;
            return (
              "string" == typeof b &&
                "=" === b.charAt(1) &&
                (b =
                  ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h),
              j &&
                1 === h &&
                "hidden" === _(a, "visibility", e) &&
                0 !== b &&
                (h = 0),
              U
                ? (f = new ta(i, "opacity", h, b - h, f))
                : ((f = new ta(i, "opacity", 100 * h, 100 * (b - h), f)),
                  (f.xn1 = j ? 1 : 0),
                  (i.zoom = 1),
                  (f.type = 2),
                  (f.b = "alpha(opacity=" + f.s + ")"),
                  (f.e = "alpha(opacity=" + (f.s + f.c) + ")"),
                  (f.data = a),
                  (f.plugin = g),
                  (f.setRatio = Ua)),
              j &&
                ((f = new ta(
                  i,
                  "visibility",
                  0,
                  0,
                  f,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== h ? "inherit" : "hidden",
                  0 === b ? "hidden" : "inherit"
                )),
                (f.xs0 = "inherit"),
                d._overwriteProps.push(f.n),
                d._overwriteProps.push(c)),
              f
            );
          },
        });
        var Va = function (a, b) {
            b &&
              (a.removeProperty
                ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) &&
                    (b = "-" + b),
                  a.removeProperty(b.replace(B, "-$1").toLowerCase()))
                : a.removeAttribute(b));
          },
          Wa = function (a) {
            if (((this.t._gsClassPT = this), 1 === a || 0 === a)) {
              this.t.setAttribute("class", 0 === a ? this.b : this.e);
              for (var b = this.data, c = this.t.style; b; )
                b.v ? (c[b.p] = b.v) : Va(c, b.p), (b = b._next);
              1 === a &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null);
            } else
              this.t.getAttribute("class") !== this.e &&
                this.t.setAttribute("class", this.e);
          };
        ya("className", {
          parser: function (a, b, d, f, g, h, i) {
            var j,
              k,
              l,
              m,
              n,
              o = a.getAttribute("class") || "",
              p = a.style.cssText;
            if (
              ((g = f._classNamePT = new ta(a, d, 0, 0, g, 2)),
              (g.setRatio = Wa),
              (g.pr = -11),
              (c = !0),
              (g.b = o),
              (k = ca(a, e)),
              (l = a._gsClassPT))
            ) {
              for (m = {}, n = l.data; n; ) (m[n.p] = 1), (n = n._next);
              l.setRatio(1);
            }
            return (
              (a._gsClassPT = g),
              (g.e =
                "=" !== b.charAt(1)
                  ? b
                  : o.replace(
                      new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"),
                      ""
                    ) + ("+" === b.charAt(0) ? " " + b.substr(2) : "")),
              a.setAttribute("class", g.e),
              (j = da(a, k, ca(a), i, m)),
              a.setAttribute("class", o),
              (g.data = j.firstMPT),
              (a.style.cssText = p),
              (g = g.xfirst = f.parse(a, j.difs, g, h))
            );
          },
        });
        var Xa = function (a) {
          if (
            (1 === a || 0 === a) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var b,
              c,
              d,
              e,
              f,
              g = this.t.style,
              h = i.transform.parse;
            if ("all" === this.e) (g.cssText = ""), (e = !0);
            else
              for (
                b = this.e.split(" ").join("").split(","), d = b.length;
                --d > -1;

              )
                (c = b[d]),
                  i[c] &&
                    (i[c].parse === h
                      ? (e = !0)
                      : (c = "transformOrigin" === c ? Ea : i[c].p)),
                  Va(g, c);
            e &&
              (Va(g, Ca),
              (f = this.t._gsTransform),
              f &&
                (f.svg &&
                  (this.t.removeAttribute("data-svg-origin"),
                  this.t.removeAttribute("transform")),
                delete this.t._gsTransform));
          }
        };
        for (
          ya("clearProps", {
            parser: function (a, b, d, e, f) {
              return (
                (f = new ta(a, d, 0, 0, f, 2)),
                (f.setRatio = Xa),
                (f.e = b),
                (f.pr = -10),
                (f.data = e._tween),
                (c = !0),
                f
              );
            },
          }),
            j = "bezier,throwProps,physicsProps,physics2D".split(","),
            wa = j.length;
          wa--;

        )
          za(j[wa]);
        (j = g.prototype),
          (j._firstPT = j._lastParsedTransform = j._transform = null),
          (j._onInitTween = function (a, b, h, j) {
            if (!a.nodeType) return !1;
            (this._target = q = a),
              (this._tween = h),
              (this._vars = b),
              (r = j),
              (k = b.autoRound),
              (c = !1),
              (d = b.suffixMap || g.suffixMap),
              (e = $(a, "")),
              (f = this._overwriteProps);
            var n,
              p,
              s,
              t,
              u,
              v,
              w,
              x,
              z,
              A = a.style;
            if (
              (l &&
                "" === A.zIndex &&
                ((n = _(a, "zIndex", e)),
                ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)),
              "string" == typeof b &&
                ((t = A.cssText),
                (n = ca(a, e)),
                (A.cssText = t + ";" + b),
                (n = da(a, n, ca(a)).difs),
                !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)),
                (b = n),
                (A.cssText = t)),
              b.className
                ? (this._firstPT = p =
                    i.className.parse(
                      a,
                      b.className,
                      "className",
                      this,
                      null,
                      null,
                      b
                    ))
                : (this._firstPT = p = this.parse(a, b, null)),
              this._transformType)
            ) {
              for (
                z = 3 === this._transformType,
                  Ca
                    ? m &&
                      ((l = !0),
                      "" === A.zIndex &&
                        ((w = _(a, "zIndex", e)),
                        ("auto" === w || "" === w) &&
                          this._addLazySet(A, "zIndex", 0)),
                      o &&
                        this._addLazySet(
                          A,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (z ? "visible" : "hidden")
                        ))
                    : (A.zoom = 1),
                  s = p;
                s && s._next;

              )
                s = s._next;
              (x = new ta(a, "transform", 0, 0, null, 2)),
                this._linkCSSP(x, null, s),
                (x.setRatio = Ca ? Ta : Sa),
                (x.data = this._transform || Ra(a, e, !0)),
                (x.tween = h),
                (x.pr = -1),
                f.pop();
            }
            if (c) {
              for (; p; ) {
                for (v = p._next, s = t; s && s.pr > p.pr; ) s = s._next;
                (p._prev = s ? s._prev : u) ? (p._prev._next = p) : (t = p),
                  (p._next = s) ? (s._prev = p) : (u = p),
                  (p = v);
              }
              this._firstPT = t;
            }
            return !0;
          }),
          (j.parse = function (a, b, c, f) {
            var g,
              h,
              j,
              l,
              m,
              n,
              o,
              p,
              s,
              t,
              u = a.style;
            for (g in b) {
              if (
                ((n = b[g]),
                "function" == typeof n && (n = n(r, q)),
                (h = i[g]))
              )
                c = h.parse(a, n, g, this, c, f, b);
              else {
                if ("--" === g.substr(0, 2)) {
                  this._tween._propLookup[g] = this._addTween.call(
                    this._tween,
                    a.style,
                    "setProperty",
                    $(a).getPropertyValue(g) + "",
                    n + "",
                    g,
                    !1,
                    g
                  );
                  continue;
                }
                (m = _(a, g, e) + ""),
                  (s = "string" == typeof n),
                  "color" === g ||
                  "fill" === g ||
                  "stroke" === g ||
                  -1 !== g.indexOf("Color") ||
                  (s && A.test(n))
                    ? (s ||
                        ((n = na(n)),
                        (n =
                          (n.length > 3 ? "rgba(" : "rgb(") +
                          n.join(",") +
                          ")")),
                      (c = va(u, g, m, n, !0, "transparent", c, 0, f)))
                    : s && J.test(n)
                    ? (c = va(u, g, m, n, !0, null, c, 0, f))
                    : ((j = parseFloat(m)),
                      (o = j || 0 === j ? m.substr((j + "").length) : ""),
                      ("" === m || "auto" === m) &&
                        ("width" === g || "height" === g
                          ? ((j = ga(a, g, e)), (o = "px"))
                          : "left" === g || "top" === g
                          ? ((j = ba(a, g, e)), (o = "px"))
                          : ((j = "opacity" !== g ? 0 : 1), (o = ""))),
                      (t = s && "=" === n.charAt(1)),
                      t
                        ? ((l = parseInt(n.charAt(0) + "1", 10)),
                          (n = n.substr(2)),
                          (l *= parseFloat(n)),
                          (p = n.replace(w, "")))
                        : ((l = parseFloat(n)),
                          (p = s ? n.replace(w, "") : "")),
                      "" === p && (p = g in d ? d[g] : o),
                      (n = l || 0 === l ? (t ? l + j : l) + p : b[g]),
                      o !== p &&
                        ("" !== p || "lineHeight" === g) &&
                        (l || 0 === l) &&
                        j &&
                        ((j = aa(a, g, j, o)),
                        "%" === p
                          ? ((j /= aa(a, g, 100, "%") / 100),
                            b.strictUnits !== !0 && (m = j + "%"))
                          : "em" === p ||
                            "rem" === p ||
                            "vw" === p ||
                            "vh" === p
                          ? (j /= aa(a, g, 1, p))
                          : "px" !== p && ((l = aa(a, g, l, p)), (p = "px")),
                        t && (l || 0 === l) && (n = l + j + p)),
                      t && (l += j),
                      (!j && 0 !== j) || (!l && 0 !== l)
                        ? void 0 !== u[g] &&
                          (n || (n + "" != "NaN" && null != n))
                          ? ((c = new ta(
                              u,
                              g,
                              l || j || 0,
                              0,
                              c,
                              -1,
                              g,
                              !1,
                              0,
                              m,
                              n
                            )),
                            (c.xs0 =
                              "none" !== n ||
                              ("display" !== g && -1 === g.indexOf("Style"))
                                ? n
                                : m))
                          : W("invalid " + g + " tween value: " + b[g])
                        : ((c = new ta(
                            u,
                            g,
                            j,
                            l - j,
                            c,
                            0,
                            g,
                            k !== !1 && ("px" === p || "zIndex" === g),
                            0,
                            m,
                            n
                          )),
                          (c.xs0 = p)));
              }
              f && c && !c.plugin && (c.plugin = f);
            }
            return c;
          }),
          (j.setRatio = function (a) {
            var b,
              c,
              d,
              e = this._firstPT,
              f = 1e-6;
            if (
              1 !== a ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                a ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                this._tween._rawPrevTime === -1e-6
              )
                for (; e; ) {
                  if (
                    ((b = e.c * a + e.s),
                    e.r ? (b = e.r(b)) : f > b && b > -f && (b = 0),
                    e.type)
                  )
                    if (1 === e.type)
                      if (((d = e.l), 2 === d))
                        e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                      else if (3 === d)
                        e.t[e.p] =
                          e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                      else if (4 === d)
                        e.t[e.p] =
                          e.xs0 +
                          b +
                          e.xs1 +
                          e.xn1 +
                          e.xs2 +
                          e.xn2 +
                          e.xs3 +
                          e.xn3 +
                          e.xs4;
                      else if (5 === d)
                        e.t[e.p] =
                          e.xs0 +
                          b +
                          e.xs1 +
                          e.xn1 +
                          e.xs2 +
                          e.xn2 +
                          e.xs3 +
                          e.xn3 +
                          e.xs4 +
                          e.xn4 +
                          e.xs5;
                      else {
                        for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++)
                          c += e["xn" + d] + e["xs" + (d + 1)];
                        e.t[e.p] = c;
                      }
                    else
                      -1 === e.type
                        ? (e.t[e.p] = e.xs0)
                        : e.setRatio && e.setRatio(a);
                  else e.t[e.p] = b + e.xs0;
                  e = e._next;
                }
              else
                for (; e; )
                  2 !== e.type ? (e.t[e.p] = e.b) : e.setRatio(a),
                    (e = e._next);
            else
              for (; e; ) {
                if (2 !== e.type)
                  if (e.r && -1 !== e.type)
                    if (((b = e.r(e.s + e.c)), e.type)) {
                      if (1 === e.type) {
                        for (
                          d = e.l, c = e.xs0 + b + e.xs1, d = 1;
                          d < e.l;
                          d++
                        )
                          c += e["xn" + d] + e["xs" + (d + 1)];
                        e.t[e.p] = c;
                      }
                    } else e.t[e.p] = b + e.xs0;
                  else e.t[e.p] = e.e;
                else e.setRatio(a);
                e = e._next;
              }
          }),
          (j._enableTransforms = function (a) {
            (this._transform = this._transform || Ra(this._target, e, !0)),
              (this._transformType =
                (this._transform.svg && Aa) || (!a && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        var Ya = function (a) {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        };
        (j._addLazySet = function (a, b, c) {
          var d = (this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2));
          (d.e = c), (d.setRatio = Ya), (d.data = this);
        }),
          (j._linkCSSP = function (a, b, c, d) {
            return (
              a &&
                (b && (b._prev = a),
                a._next && (a._next._prev = a._prev),
                a._prev
                  ? (a._prev._next = a._next)
                  : this._firstPT === a &&
                    ((this._firstPT = a._next), (d = !0)),
                c
                  ? (c._next = a)
                  : d || null !== this._firstPT || (this._firstPT = a),
                (a._next = b),
                (a._prev = c)),
              a
            );
          }),
          (j._mod = function (a) {
            for (var b = this._firstPT; b; )
              "function" == typeof a[b.p] && (b.r = a[b.p]), (b = b._next);
          }),
          (j._kill = function (b) {
            var c,
              d,
              e,
              f = b;
            if (b.autoAlpha || b.alpha) {
              f = {};
              for (d in b) f[d] = b[d];
              (f.opacity = 1), f.autoAlpha && (f.visibility = 1);
            }
            for (
              b.className &&
                (c = this._classNamePT) &&
                ((e = c.xfirst),
                e && e._prev
                  ? this._linkCSSP(e._prev, c._next, e._prev._prev)
                  : e === this._firstPT && (this._firstPT = c._next),
                c._next && this._linkCSSP(c._next, c._next._next, e._prev),
                (this._classNamePT = null)),
                c = this._firstPT;
              c;

            )
              c.plugin &&
                c.plugin !== d &&
                c.plugin._kill &&
                (c.plugin._kill(b), (d = c.plugin)),
                (c = c._next);
            return a.prototype._kill.call(this, f);
          });
        var Za = function (a, b, c) {
          var d, e, f, g;
          if (a.slice) for (e = a.length; --e > -1; ) Za(a[e], b, c);
          else
            for (d = a.childNodes, e = d.length; --e > -1; )
              (f = d[e]),
                (g = f.type),
                f.style && (b.push(ca(f)), c && c.push(f)),
                (1 !== g && 9 !== g && 11 !== g) ||
                  !f.childNodes.length ||
                  Za(f, b, c);
        };
        return (
          (g.cascadeTo = function (a, c, d) {
            var e,
              f,
              g,
              h,
              i = b.to(a, c, d),
              j = [i],
              k = [],
              l = [],
              m = [],
              n = b._internals.reservedProps;
            for (
              a = i._targets || i.target,
                Za(a, k, m),
                i.render(c, !0, !0),
                Za(a, l),
                i.render(0, !0, !0),
                i._enabled(!0),
                e = m.length;
              --e > -1;

            )
              if (((f = da(m[e], k[e], l[e])), f.firstMPT)) {
                f = f.difs;
                for (g in d) n[g] && (f[g] = d[g]);
                h = {};
                for (g in f) h[g] = k[e][g];
                j.push(b.fromTo(m[e], c, h, f));
              }
            return j;
          }),
          a.activate([g]),
          g
        );
      },
      !0
    ),
    (function () {
      var a = _gsScope._gsDefine.plugin({
          propName: "roundProps",
          version: "1.7.0",
          priority: -1,
          API: 2,
          init: function (a, b, c) {
            return (this._tween = c), !0;
          },
        }),
        b = function (a) {
          var b = 1 > a ? Math.pow(10, (a + "").length - 2) : 1;
          return function (c) {
            return ((Math.round(c / a) * a * b) | 0) / b;
          };
        },
        c = function (a, b) {
          for (; a; ) a.f || a.blob || (a.m = b || Math.round), (a = a._next);
        },
        d = a.prototype;
      (d._onInitAllProps = function () {
        var a,
          d,
          e,
          f,
          g = this._tween,
          h = g.vars.roundProps,
          i = {},
          j = g._propLookup.roundProps;
        if ("object" != typeof h || h.push)
          for (
            "string" == typeof h && (h = h.split(",")), e = h.length;
            --e > -1;

          )
            i[h[e]] = Math.round;
        else for (f in h) i[f] = b(h[f]);
        for (f in i)
          for (a = g._firstPT; a; )
            (d = a._next),
              a.pg
                ? a.t._mod(i)
                : a.n === f &&
                  (2 === a.f && a.t
                    ? c(a.t._firstPT, i[f])
                    : (this._add(a.t, f, a.s, a.c, i[f]),
                      d && (d._prev = a._prev),
                      a._prev
                        ? (a._prev._next = d)
                        : g._firstPT === a && (g._firstPT = d),
                      (a._next = a._prev = null),
                      (g._propLookup[f] = j))),
              (a = d);
        return !1;
      }),
        (d._add = function (a, b, c, d, e) {
          this._addTween(a, b, c, c + d, b, e || Math.round),
            this._overwriteProps.push(b);
        });
    })(),
    (function () {
      _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function (a, b, c, d) {
          var e, f;
          if ("function" != typeof a.setAttribute) return !1;
          for (e in b)
            (f = b[e]),
              "function" == typeof f && (f = f(d, a)),
              this._addTween(
                a,
                "setAttribute",
                a.getAttribute(e) + "",
                f + "",
                e,
                !1,
                e
              ),
              this._overwriteProps.push(e);
          return !0;
        },
      });
    })(),
    (_gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.1",
      API: 2,
      init: function (a, b, c, d) {
        "object" != typeof b && (b = { rotation: b }), (this.finals = {});
        var e,
          f,
          g,
          h,
          i,
          j,
          k = b.useRadians === !0 ? 2 * Math.PI : 360,
          l = 1e-6;
        for (e in b)
          "useRadians" !== e &&
            ((h = b[e]),
            "function" == typeof h && (h = h(d, a)),
            (j = (h + "").split("_")),
            (f = j[0]),
            (g = parseFloat(
              "function" != typeof a[e]
                ? a[e]
                : a[
                    e.indexOf("set") ||
                    "function" != typeof a["get" + e.substr(3)]
                      ? e
                      : "get" + e.substr(3)
                  ]()
            )),
            (h = this.finals[e] =
              "string" == typeof f && "=" === f.charAt(1)
                ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2))
                : Number(f) || 0),
            (i = h - g),
            j.length &&
              ((f = j.join("_")),
              -1 !== f.indexOf("short") &&
                ((i %= k), i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)),
              -1 !== f.indexOf("_cw") && 0 > i
                ? (i = ((i + 9999999999 * k) % k) - ((i / k) | 0) * k)
                : -1 !== f.indexOf("ccw") &&
                  i > 0 &&
                  (i = ((i - 9999999999 * k) % k) - ((i / k) | 0) * k)),
            (i > l || -l > i) &&
              (this._addTween(a, e, g, g + i, e),
              this._overwriteProps.push(e)));
        return !0;
      },
      set: function (a) {
        var b;
        if (1 !== a) this._super.setRatio.call(this, a);
        else
          for (b = this._firstPT; b; )
            b.f ? b.t[b.p](this.finals[b.p]) : (b.t[b.p] = this.finals[b.p]),
              (b = b._next);
      },
    })._autoCSS = !0),
    _gsScope._gsDefine(
      "easing.Back",
      ["easing.Ease"],
      function (a) {
        var b,
          c,
          d,
          e,
          f = _gsScope.GreenSockGlobals || _gsScope,
          g = f.com.greensock,
          h = 2 * Math.PI,
          i = Math.PI / 2,
          j = g._class,
          k = function (b, c) {
            var d = j("easing." + b, function () {}, !0),
              e = (d.prototype = new a());
            return (e.constructor = d), (e.getRatio = c), d;
          },
          l = a.register || function () {},
          m = function (a, b, c, d, e) {
            var f = j(
              "easing." + a,
              { easeOut: new b(), easeIn: new c(), easeInOut: new d() },
              !0
            );
            return l(f, a), f;
          },
          n = function (a, b, c) {
            (this.t = a),
              (this.v = b),
              c &&
                ((this.next = c),
                (c.prev = this),
                (this.c = c.v - b),
                (this.gap = c.t - a));
          },
          o = function (b, c) {
            var d = j(
                "easing." + b,
                function (a) {
                  (this._p1 = a || 0 === a ? a : 1.70158),
                    (this._p2 = 1.525 * this._p1);
                },
                !0
              ),
              e = (d.prototype = new a());
            return (
              (e.constructor = d),
              (e.getRatio = c),
              (e.config = function (a) {
                return new d(a);
              }),
              d
            );
          },
          p = m(
            "Back",
            o("BackOut", function (a) {
              return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
            }),
            o("BackIn", function (a) {
              return a * a * ((this._p1 + 1) * a - this._p1);
            }),
            o("BackInOut", function (a) {
              return (a *= 2) < 1
                ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2)
                : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
            })
          ),
          q = j(
            "easing.SlowMo",
            function (a, b, c) {
              (b = b || 0 === b ? b : 0.7),
                null == a ? (a = 0.7) : a > 1 && (a = 1),
                (this._p = 1 !== a ? b : 0),
                (this._p1 = (1 - a) / 2),
                (this._p2 = a),
                (this._p3 = this._p1 + this._p2),
                (this._calcEnd = c === !0);
            },
            !0
          ),
          r = (q.prototype = new a());
        return (
          (r.constructor = q),
          (r.getRatio = function (a) {
            var b = a + (0.5 - a) * this._p;
            return a < this._p1
              ? this._calcEnd
                ? 1 - (a = 1 - a / this._p1) * a
                : b - (a = 1 - a / this._p1) * a * a * a * b
              : a > this._p3
              ? this._calcEnd
                ? 1 === a
                  ? 0
                  : 1 - (a = (a - this._p3) / this._p1) * a
                : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a
              : this._calcEnd
              ? 1
              : b;
          }),
          (q.ease = new q(0.7, 0.7)),
          (r.config = q.config =
            function (a, b, c) {
              return new q(a, b, c);
            }),
          (b = j(
            "easing.SteppedEase",
            function (a, b) {
              (a = a || 1),
                (this._p1 = 1 / a),
                (this._p2 = a + (b ? 0 : 1)),
                (this._p3 = b ? 1 : 0);
            },
            !0
          )),
          (r = b.prototype = new a()),
          (r.constructor = b),
          (r.getRatio = function (a) {
            return (
              0 > a ? (a = 0) : a >= 1 && (a = 0.999999999),
              (((this._p2 * a) | 0) + this._p3) * this._p1
            );
          }),
          (r.config = b.config =
            function (a, c) {
              return new b(a, c);
            }),
          (c = j(
            "easing.ExpoScaleEase",
            function (a, b, c) {
              (this._p1 = Math.log(b / a)),
                (this._p2 = b - a),
                (this._p3 = a),
                (this._ease = c);
            },
            !0
          )),
          (r = c.prototype = new a()),
          (r.constructor = c),
          (r.getRatio = function (a) {
            return (
              this._ease && (a = this._ease.getRatio(a)),
              (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2
            );
          }),
          (r.config = c.config =
            function (a, b, d) {
              return new c(a, b, d);
            }),
          (d = j(
            "easing.RoughEase",
            function (b) {
              b = b || {};
              for (
                var c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i = b.taper || "none",
                  j = [],
                  k = 0,
                  l = 0 | (b.points || 20),
                  m = l,
                  o = b.randomize !== !1,
                  p = b.clamp === !0,
                  q = b.template instanceof a ? b.template : null,
                  r = "number" == typeof b.strength ? 0.4 * b.strength : 0.4;
                --m > -1;

              )
                (c = o ? Math.random() : (1 / l) * m),
                  (d = q ? q.getRatio(c) : c),
                  "none" === i
                    ? (e = r)
                    : "out" === i
                    ? ((f = 1 - c), (e = f * f * r))
                    : "in" === i
                    ? (e = c * c * r)
                    : 0.5 > c
                    ? ((f = 2 * c), (e = f * f * 0.5 * r))
                    : ((f = 2 * (1 - c)), (e = f * f * 0.5 * r)),
                  o
                    ? (d += Math.random() * e - 0.5 * e)
                    : m % 2
                    ? (d += 0.5 * e)
                    : (d -= 0.5 * e),
                  p && (d > 1 ? (d = 1) : 0 > d && (d = 0)),
                  (j[k++] = { x: c, y: d });
              for (
                j.sort(function (a, b) {
                  return a.x - b.x;
                }),
                  h = new n(1, 1, null),
                  m = l;
                --m > -1;

              )
                (g = j[m]), (h = new n(g.x, g.y, h));
              this._prev = new n(0, 0, 0 !== h.t ? h : h.next);
            },
            !0
          )),
          (r = d.prototype = new a()),
          (r.constructor = d),
          (r.getRatio = function (a) {
            var b = this._prev;
            if (a > b.t) {
              for (; b.next && a >= b.t; ) b = b.next;
              b = b.prev;
            } else for (; b.prev && a <= b.t; ) b = b.prev;
            return (this._prev = b), b.v + ((a - b.t) / b.gap) * b.c;
          }),
          (r.config = function (a) {
            return new d(a);
          }),
          (d.ease = new d()),
          m(
            "Bounce",
            k("BounceOut", function (a) {
              return 1 / 2.75 > a
                ? 7.5625 * a * a
                : 2 / 2.75 > a
                ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                : 2.5 / 2.75 > a
                ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
            }),
            k("BounceIn", function (a) {
              return (a = 1 - a) < 1 / 2.75
                ? 1 - 7.5625 * a * a
                : 2 / 2.75 > a
                ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
                : 2.5 / 2.75 > a
                ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
                : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
            }),
            k("BounceInOut", function (a) {
              var b = 0.5 > a;
              return (
                (a = b ? 1 - 2 * a : 2 * a - 1),
                (a =
                  1 / 2.75 > a
                    ? 7.5625 * a * a
                    : 2 / 2.75 > a
                    ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                    : 2.5 / 2.75 > a
                    ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                    : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375),
                b ? 0.5 * (1 - a) : 0.5 * a + 0.5
              );
            })
          ),
          m(
            "Circ",
            k("CircOut", function (a) {
              return Math.sqrt(1 - (a -= 1) * a);
            }),
            k("CircIn", function (a) {
              return -(Math.sqrt(1 - a * a) - 1);
            }),
            k("CircInOut", function (a) {
              return (a *= 2) < 1
                ? -0.5 * (Math.sqrt(1 - a * a) - 1)
                : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
            })
          ),
          (e = function (b, c, d) {
            var e = j(
                "easing." + b,
                function (a, b) {
                  (this._p1 = a >= 1 ? a : 1),
                    (this._p2 = (b || d) / (1 > a ? a : 1)),
                    (this._p3 =
                      (this._p2 / h) * (Math.asin(1 / this._p1) || 0)),
                    (this._p2 = h / this._p2);
                },
                !0
              ),
              f = (e.prototype = new a());
            return (
              (f.constructor = e),
              (f.getRatio = c),
              (f.config = function (a, b) {
                return new e(a, b);
              }),
              e
            );
          }),
          m(
            "Elastic",
            e(
              "ElasticOut",
              function (a) {
                return (
                  this._p1 *
                    Math.pow(2, -10 * a) *
                    Math.sin((a - this._p3) * this._p2) +
                  1
                );
              },
              0.3
            ),
            e(
              "ElasticIn",
              function (a) {
                return -(
                  this._p1 *
                  Math.pow(2, 10 * (a -= 1)) *
                  Math.sin((a - this._p3) * this._p2)
                );
              },
              0.3
            ),
            e(
              "ElasticInOut",
              function (a) {
                return (a *= 2) < 1
                  ? -0.5 *
                      (this._p1 *
                        Math.pow(2, 10 * (a -= 1)) *
                        Math.sin((a - this._p3) * this._p2))
                  : this._p1 *
                      Math.pow(2, -10 * (a -= 1)) *
                      Math.sin((a - this._p3) * this._p2) *
                      0.5 +
                      1;
              },
              0.45
            )
          ),
          m(
            "Expo",
            k("ExpoOut", function (a) {
              return 1 - Math.pow(2, -10 * a);
            }),
            k("ExpoIn", function (a) {
              return Math.pow(2, 10 * (a - 1)) - 0.001;
            }),
            k("ExpoInOut", function (a) {
              return (a *= 2) < 1
                ? 0.5 * Math.pow(2, 10 * (a - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (a - 1)));
            })
          ),
          m(
            "Sine",
            k("SineOut", function (a) {
              return Math.sin(a * i);
            }),
            k("SineIn", function (a) {
              return -Math.cos(a * i) + 1;
            }),
            k("SineInOut", function (a) {
              return -0.5 * (Math.cos(Math.PI * a) - 1);
            })
          ),
          j(
            "easing.EaseLookup",
            {
              find: function (b) {
                return a.map[b];
              },
            },
            !0
          ),
          l(f.SlowMo, "SlowMo", "ease,"),
          l(d, "RoughEase", "ease,"),
          l(b, "SteppedEase", "ease,"),
          p
        );
      },
      !0
    );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (a, b) {
    "use strict";
    var c = {},
      d = a.document,
      e = (a.GreenSockGlobals = a.GreenSockGlobals || a),
      f = e[b];
    if (f)
      return (
        "undefined" != typeof module && module.exports && (module.exports = f),
        f
      );
    var g,
      h,
      i,
      j,
      k,
      l = function (a) {
        var b,
          c = a.split("."),
          d = e;
        for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
        return d;
      },
      m = l("com.greensock"),
      n = 1e-10,
      o = function (a) {
        var b,
          c = [],
          d = a.length;
        for (b = 0; b !== d; c.push(a[b++]));
        return c;
      },
      p = function () {},
      q = (function () {
        var a = Object.prototype.toString,
          b = a.call([]);
        return function (c) {
          return (
            null != c &&
            (c instanceof Array ||
              ("object" == typeof c && !!c.push && a.call(c) === b))
          );
        };
      })(),
      r = {},
      s = function (d, f, g, h) {
        (this.sc = r[d] ? r[d].sc : []),
          (r[d] = this),
          (this.gsClass = null),
          (this.func = g);
        var i = [];
        (this.check = function (j) {
          for (var k, m, n, o, p = f.length, q = p; --p > -1; )
            (k = r[f[p]] || new s(f[p], [])).gsClass
              ? ((i[p] = k.gsClass), q--)
              : j && k.sc.push(this);
          if (0 === q && g) {
            if (
              ((m = ("com.greensock." + d).split(".")),
              (n = m.pop()),
              (o = l(m.join("."))[n] = this.gsClass = g.apply(g, i)),
              h)
            )
              if (
                ((e[n] = c[n] = o),
                "undefined" != typeof module && module.exports)
              )
                if (d === b) {
                  module.exports = c[b] = o;
                  for (p in c) o[p] = c[p];
                } else c[b] && (c[b][n] = o);
              else
                "function" == typeof define &&
                  define.amd &&
                  define(
                    (a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") +
                      d.split(".").pop(),
                    [],
                    function () {
                      return o;
                    }
                  );
            for (p = 0; p < this.sc.length; p++) this.sc[p].check();
          }
        }),
          this.check(!0);
      },
      t = (a._gsDefine = function (a, b, c, d) {
        return new s(a, b, c, d);
      }),
      u = (m._class = function (a, b, c) {
        return (
          (b = b || function () {}),
          t(
            a,
            [],
            function () {
              return b;
            },
            c
          ),
          b
        );
      });
    t.globals = e;
    var v = [0, 0, 1, 1],
      w = u(
        "easing.Ease",
        function (a, b, c, d) {
          (this._func = a),
            (this._type = c || 0),
            (this._power = d || 0),
            (this._params = b ? v.concat(b) : v);
        },
        !0
      ),
      x = (w.map = {}),
      y = (w.register = function (a, b, c, d) {
        for (
          var e,
            f,
            g,
            h,
            i = b.split(","),
            j = i.length,
            k = (c || "easeIn,easeOut,easeInOut").split(",");
          --j > -1;

        )
          for (
            f = i[j],
              e = d ? u("easing." + f, null, !0) : m.easing[f] || {},
              g = k.length;
            --g > -1;

          )
            (h = k[g]),
              (x[f + "." + h] =
                x[h + f] =
                e[h] =
                  a.getRatio ? a : a[h] || new a());
      });
    for (
      i = w.prototype,
        i._calcEnd = !1,
        i.getRatio = function (a) {
          if (this._func)
            return (this._params[0] = a), this._func.apply(null, this._params);
          var b = this._type,
            c = this._power,
            d = 1 === b ? 1 - a : 2 === b ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
          return (
            1 === c
              ? (d *= d)
              : 2 === c
              ? (d *= d * d)
              : 3 === c
              ? (d *= d * d * d)
              : 4 === c && (d *= d * d * d * d),
            1 === b ? 1 - d : 2 === b ? d : 0.5 > a ? d / 2 : 1 - d / 2
          );
        },
        g = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
        h = g.length;
      --h > -1;

    )
      (i = g[h] + ",Power" + h),
        y(new w(null, null, 1, h), i, "easeOut", !0),
        y(new w(null, null, 2, h), i, "easeIn" + (0 === h ? ",easeNone" : "")),
        y(new w(null, null, 3, h), i, "easeInOut");
    (x.linear = m.easing.Linear.easeIn), (x.swing = m.easing.Quad.easeInOut);
    var z = u("events.EventDispatcher", function (a) {
      (this._listeners = {}), (this._eventTarget = a || this);
    });
    (i = z.prototype),
      (i.addEventListener = function (a, b, c, d, e) {
        e = e || 0;
        var f,
          g,
          h = this._listeners[a],
          i = 0;
        for (
          this !== j || k || j.wake(),
            null == h && (this._listeners[a] = h = []),
            g = h.length;
          --g > -1;

        )
          (f = h[g]),
            f.c === b && f.s === c
              ? h.splice(g, 1)
              : 0 === i && f.pr < e && (i = g + 1);
        h.splice(i, 0, { c: b, s: c, up: d, pr: e });
      }),
      (i.removeEventListener = function (a, b) {
        var c,
          d = this._listeners[a];
        if (d)
          for (c = d.length; --c > -1; )
            if (d[c].c === b) return void d.splice(c, 1);
      }),
      (i.dispatchEvent = function (a) {
        var b,
          c,
          d,
          e = this._listeners[a];
        if (e)
          for (
            b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget;
            --b > -1;

          )
            (d = e[b]),
              d &&
                (d.up
                  ? d.c.call(d.s || c, { type: a, target: c })
                  : d.c.call(d.s || c));
      });
    var A = a.requestAnimationFrame,
      B = a.cancelAnimationFrame,
      C =
        Date.now ||
        function () {
          return new Date().getTime();
        },
      D = C();
    for (g = ["ms", "moz", "webkit", "o"], h = g.length; --h > -1 && !A; )
      (A = a[g[h] + "RequestAnimationFrame"]),
        (B =
          a[g[h] + "CancelAnimationFrame"] ||
          a[g[h] + "CancelRequestAnimationFrame"]);
    u("Ticker", function (a, b) {
      var c,
        e,
        f,
        g,
        h,
        i = this,
        l = C(),
        m = b !== !1 && A ? "auto" : !1,
        o = 500,
        q = 33,
        r = "tick",
        s = function (a) {
          var b,
            d,
            j = C() - D;
          j > o && (l += j - q),
            (D += j),
            (i.time = (D - l) / 1e3),
            (b = i.time - h),
            (!c || b > 0 || a === !0) &&
              (i.frame++, (h += b + (b >= g ? 0.004 : g - b)), (d = !0)),
            a !== !0 && (f = e(s)),
            d && i.dispatchEvent(r);
        };
      z.call(i),
        (i.time = i.frame = 0),
        (i.tick = function () {
          s(!0);
        }),
        (i.lagSmoothing = function (a, b) {
          return arguments.length
            ? ((o = a || 1 / n), void (q = Math.min(b, o, 0)))
            : 1 / n > o;
        }),
        (i.sleep = function () {
          null != f &&
            (m && B ? B(f) : clearTimeout(f),
            (e = p),
            (f = null),
            i === j && (k = !1));
        }),
        (i.wake = function (a) {
          null !== f
            ? i.sleep()
            : a
            ? (l += -D + (D = C()))
            : i.frame > 10 && (D = C() - o + 5),
            (e =
              0 === c
                ? p
                : m && A
                ? A
                : function (a) {
                    return setTimeout(a, (1e3 * (h - i.time) + 1) | 0);
                  }),
            i === j && (k = !0),
            s(2);
        }),
        (i.fps = function (a) {
          return arguments.length
            ? ((c = a), (g = 1 / (c || 60)), (h = this.time + g), void i.wake())
            : c;
        }),
        (i.useRAF = function (a) {
          return arguments.length ? (i.sleep(), (m = a), void i.fps(c)) : m;
        }),
        i.fps(a),
        setTimeout(function () {
          "auto" === m &&
            i.frame < 5 &&
            "hidden" !== (d || {}).visibilityState &&
            i.useRAF(!1);
        }, 1500);
    }),
      (i = m.Ticker.prototype = new m.events.EventDispatcher()),
      (i.constructor = m.Ticker);
    var E = u("core.Animation", function (a, b) {
      if (
        ((this.vars = b = b || {}),
        (this._duration = this._totalDuration = a || 0),
        (this._delay = Number(b.delay) || 0),
        (this._timeScale = 1),
        (this._active = b.immediateRender === !0),
        (this.data = b.data),
        (this._reversed = b.reversed === !0),
        Y)
      ) {
        k || j.wake();
        var c = this.vars.useFrames ? X : Y;
        c.add(this, c._time), this.vars.paused && this.paused(!0);
      }
    });
    (j = E.ticker = new m.Ticker()),
      (i = E.prototype),
      (i._dirty = i._gc = i._initted = i._paused = !1),
      (i._totalTime = i._time = 0),
      (i._rawPrevTime = -1),
      (i._next = i._last = i._onUpdate = i._timeline = i.timeline = null),
      (i._paused = !1);
    var F = function () {
      k &&
        C() - D > 2e3 &&
        ("hidden" !== (d || {}).visibilityState || !j.lagSmoothing()) &&
        j.wake();
      var a = setTimeout(F, 2e3);
      a.unref && a.unref();
    };
    F(),
      (i.play = function (a, b) {
        return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
      }),
      (i.pause = function (a, b) {
        return null != a && this.seek(a, b), this.paused(!0);
      }),
      (i.resume = function (a, b) {
        return null != a && this.seek(a, b), this.paused(!1);
      }),
      (i.seek = function (a, b) {
        return this.totalTime(Number(a), b !== !1);
      }),
      (i.restart = function (a, b) {
        return this.reversed(!1)
          .paused(!1)
          .totalTime(a ? -this._delay : 0, b !== !1, !0);
      }),
      (i.reverse = function (a, b) {
        return (
          null != a && this.seek(a || this.totalDuration(), b),
          this.reversed(!0).paused(!1)
        );
      }),
      (i.render = function (a, b, c) {}),
      (i.invalidate = function () {
        return (
          (this._time = this._totalTime = 0),
          (this._initted = this._gc = !1),
          (this._rawPrevTime = -1),
          (this._gc || !this.timeline) && this._enabled(!0),
          this
        );
      }),
      (i.isActive = function () {
        var a,
          b = this._timeline,
          c = this._startTime;
        return (
          !b ||
          (!this._gc &&
            !this._paused &&
            b.isActive() &&
            (a = b.rawTime(!0)) >= c &&
            a < c + this.totalDuration() / this._timeScale - 1e-7)
        );
      }),
      (i._enabled = function (a, b) {
        return (
          k || j.wake(),
          (this._gc = !a),
          (this._active = this.isActive()),
          b !== !0 &&
            (a && !this.timeline
              ? this._timeline.add(this, this._startTime - this._delay)
              : !a && this.timeline && this._timeline._remove(this, !0)),
          !1
        );
      }),
      (i._kill = function (a, b) {
        return this._enabled(!1, !1);
      }),
      (i.kill = function (a, b) {
        return this._kill(a, b), this;
      }),
      (i._uncache = function (a) {
        for (var b = a ? this : this.timeline; b; )
          (b._dirty = !0), (b = b.timeline);
        return this;
      }),
      (i._swapSelfInParams = function (a) {
        for (var b = a.length, c = a.concat(); --b > -1; )
          "{self}" === a[b] && (c[b] = this);
        return c;
      }),
      (i._callback = function (a) {
        var b = this.vars,
          c = b[a],
          d = b[a + "Params"],
          e = b[a + "Scope"] || b.callbackScope || this,
          f = d ? d.length : 0;
        switch (f) {
          case 0:
            c.call(e);
            break;
          case 1:
            c.call(e, d[0]);
            break;
          case 2:
            c.call(e, d[0], d[1]);
            break;
          default:
            c.apply(e, d);
        }
      }),
      (i.eventCallback = function (a, b, c, d) {
        if ("on" === (a || "").substr(0, 2)) {
          var e = this.vars;
          if (1 === arguments.length) return e[a];
          null == b
            ? delete e[a]
            : ((e[a] = b),
              (e[a + "Params"] =
                q(c) && -1 !== c.join("").indexOf("{self}")
                  ? this._swapSelfInParams(c)
                  : c),
              (e[a + "Scope"] = d)),
            "onUpdate" === a && (this._onUpdate = b);
        }
        return this;
      }),
      (i.delay = function (a) {
        return arguments.length
          ? (this._timeline.smoothChildTiming &&
              this.startTime(this._startTime + a - this._delay),
            (this._delay = a),
            this)
          : this._delay;
      }),
      (i.duration = function (a) {
        return arguments.length
          ? ((this._duration = this._totalDuration = a),
            this._uncache(!0),
            this._timeline.smoothChildTiming &&
              this._time > 0 &&
              this._time < this._duration &&
              0 !== a &&
              this.totalTime(this._totalTime * (a / this._duration), !0),
            this)
          : ((this._dirty = !1), this._duration);
      }),
      (i.totalDuration = function (a) {
        return (
          (this._dirty = !1),
          arguments.length ? this.duration(a) : this._totalDuration
        );
      }),
      (i.time = function (a, b) {
        return arguments.length
          ? (this._dirty && this.totalDuration(),
            this.totalTime(a > this._duration ? this._duration : a, b))
          : this._time;
      }),
      (i.totalTime = function (a, b, c) {
        if ((k || j.wake(), !arguments.length)) return this._totalTime;
        if (this._timeline) {
          if (
            (0 > a && !c && (a += this.totalDuration()),
            this._timeline.smoothChildTiming)
          ) {
            this._dirty && this.totalDuration();
            var d = this._totalDuration,
              e = this._timeline;
            if (
              (a > d && !c && (a = d),
              (this._startTime =
                (this._paused ? this._pauseTime : e._time) -
                (this._reversed ? d - a : a) / this._timeScale),
              e._dirty || this._uncache(!1),
              e._timeline)
            )
              for (; e._timeline; )
                e._timeline._time !==
                  (e._startTime + e._totalTime) / e._timeScale &&
                  e.totalTime(e._totalTime, !0),
                  (e = e._timeline);
          }
          this._gc && this._enabled(!0, !1),
            (this._totalTime !== a || 0 === this._duration) &&
              (K.length && $(), this.render(a, b, !1), K.length && $());
        }
        return this;
      }),
      (i.progress = i.totalProgress =
        function (a, b) {
          var c = this.duration();
          return arguments.length
            ? this.totalTime(c * a, b)
            : c
            ? this._time / c
            : this.ratio;
        }),
      (i.startTime = function (a) {
        return arguments.length
          ? (a !== this._startTime &&
              ((this._startTime = a),
              this.timeline &&
                this.timeline._sortChildren &&
                this.timeline.add(this, a - this._delay)),
            this)
          : this._startTime;
      }),
      (i.endTime = function (a) {
        return (
          this._startTime +
          (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        );
      }),
      (i.timeScale = function (a) {
        if (!arguments.length) return this._timeScale;
        var b, c;
        for (
          a = a || n,
            this._timeline &&
              this._timeline.smoothChildTiming &&
              ((b = this._pauseTime),
              (c = b || 0 === b ? b : this._timeline.totalTime()),
              (this._startTime =
                c - ((c - this._startTime) * this._timeScale) / a)),
            this._timeScale = a,
            c = this.timeline;
          c && c.timeline;

        )
          (c._dirty = !0), c.totalDuration(), (c = c.timeline);
        return this;
      }),
      (i.reversed = function (a) {
        return arguments.length
          ? (a != this._reversed &&
              ((this._reversed = a),
              this.totalTime(
                this._timeline && !this._timeline.smoothChildTiming
                  ? this.totalDuration() - this._totalTime
                  : this._totalTime,
                !0
              )),
            this)
          : this._reversed;
      }),
      (i.paused = function (a) {
        if (!arguments.length) return this._paused;
        var b,
          c,
          d = this._timeline;
        return (
          a != this._paused &&
            d &&
            (k || a || j.wake(),
            (b = d.rawTime()),
            (c = b - this._pauseTime),
            !a &&
              d.smoothChildTiming &&
              ((this._startTime += c), this._uncache(!1)),
            (this._pauseTime = a ? b : null),
            (this._paused = a),
            (this._active = this.isActive()),
            !a &&
              0 !== c &&
              this._initted &&
              this.duration() &&
              ((b = d.smoothChildTiming
                ? this._totalTime
                : (b - this._startTime) / this._timeScale),
              this.render(b, b === this._totalTime, !0))),
          this._gc && !a && this._enabled(!0, !1),
          this
        );
      });
    var G = u("core.SimpleTimeline", function (a) {
      E.call(this, 0, a),
        (this.autoRemoveChildren = this.smoothChildTiming = !0);
    });
    (i = G.prototype = new E()),
      (i.constructor = G),
      (i.kill()._gc = !1),
      (i._first = i._last = i._recent = null),
      (i._sortChildren = !1),
      (i.add = i.insert =
        function (a, b, c, d) {
          var e, f;
          if (
            ((a._startTime = Number(b || 0) + a._delay),
            a._paused &&
              this !== a._timeline &&
              (a._pauseTime =
                this.rawTime() - (a._timeline.rawTime() - a._pauseTime)),
            a.timeline && a.timeline._remove(a, !0),
            (a.timeline = a._timeline = this),
            a._gc && a._enabled(!0, !0),
            (e = this._last),
            this._sortChildren)
          )
            for (f = a._startTime; e && e._startTime > f; ) e = e._prev;
          return (
            e
              ? ((a._next = e._next), (e._next = a))
              : ((a._next = this._first), (this._first = a)),
            a._next ? (a._next._prev = a) : (this._last = a),
            (a._prev = e),
            (this._recent = a),
            this._timeline && this._uncache(!0),
            this
          );
        }),
      (i._remove = function (a, b) {
        return (
          a.timeline === this &&
            (b || a._enabled(!1, !0),
            a._prev
              ? (a._prev._next = a._next)
              : this._first === a && (this._first = a._next),
            a._next
              ? (a._next._prev = a._prev)
              : this._last === a && (this._last = a._prev),
            (a._next = a._prev = a.timeline = null),
            a === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
          this
        );
      }),
      (i.render = function (a, b, c) {
        var d,
          e = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = a; e; )
          (d = e._next),
            (e._active || (a >= e._startTime && !e._paused && !e._gc)) &&
              (e._reversed
                ? e.render(
                    (e._dirty ? e.totalDuration() : e._totalDuration) -
                      (a - e._startTime) * e._timeScale,
                    b,
                    c
                  )
                : e.render((a - e._startTime) * e._timeScale, b, c)),
            (e = d);
      }),
      (i.rawTime = function () {
        return k || j.wake(), this._totalTime;
      });
    var H = u(
        "TweenLite",
        function (b, c, d) {
          if (
            (E.call(this, c, d), (this.render = H.prototype.render), null == b)
          )
            throw "Cannot tween a null target.";
          this.target = b = "string" != typeof b ? b : H.selector(b) || b;
          var e,
            f,
            g,
            h =
              b.jquery ||
              (b.length &&
                b !== a &&
                b[0] &&
                (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))),
            i = this.vars.overwrite;
          if (
            ((this._overwrite = i =
              null == i
                ? W[H.defaultOverwrite]
                : "number" == typeof i
                ? i >> 0
                : W[i]),
            (h || b instanceof Array || (b.push && q(b))) &&
              "number" != typeof b[0])
          )
            for (
              this._targets = g = o(b),
                this._propLookup = [],
                this._siblings = [],
                e = 0;
              e < g.length;
              e++
            )
              (f = g[e]),
                f
                  ? "string" != typeof f
                    ? f.length &&
                      f !== a &&
                      f[0] &&
                      (f[0] === a ||
                        (f[0].nodeType && f[0].style && !f.nodeType))
                      ? (g.splice(e--, 1), (this._targets = g = g.concat(o(f))))
                      : ((this._siblings[e] = _(f, this, !1)),
                        1 === i &&
                          this._siblings[e].length > 1 &&
                          ba(f, this, null, 1, this._siblings[e]))
                    : ((f = g[e--] = H.selector(f)),
                      "string" == typeof f && g.splice(e + 1, 1))
                  : g.splice(e--, 1);
          else
            (this._propLookup = {}),
              (this._siblings = _(b, this, !1)),
              1 === i &&
                this._siblings.length > 1 &&
                ba(b, this, null, 1, this._siblings);
          (this.vars.immediateRender ||
            (0 === c &&
              0 === this._delay &&
              this.vars.immediateRender !== !1)) &&
            ((this._time = -n), this.render(Math.min(0, -this._delay)));
        },
        !0
      ),
      I = function (b) {
        return (
          b &&
          b.length &&
          b !== a &&
          b[0] &&
          (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))
        );
      },
      J = function (a, b) {
        var c,
          d = {};
        for (c in a)
          V[c] ||
            (c in b &&
              "transform" !== c &&
              "x" !== c &&
              "y" !== c &&
              "width" !== c &&
              "height" !== c &&
              "className" !== c &&
              "border" !== c) ||
            !(!S[c] || (S[c] && S[c]._autoCSS)) ||
            ((d[c] = a[c]), delete a[c]);
        a.css = d;
      };
    (i = H.prototype = new E()),
      (i.constructor = H),
      (i.kill()._gc = !1),
      (i.ratio = 0),
      (i._firstPT = i._targets = i._overwrittenProps = i._startAt = null),
      (i._notifyPluginsOfEnabled = i._lazy = !1),
      (H.version = "2.0.2"),
      (H.defaultEase = i._ease = new w(null, null, 1, 1)),
      (H.defaultOverwrite = "auto"),
      (H.ticker = j),
      (H.autoSleep = 120),
      (H.lagSmoothing = function (a, b) {
        j.lagSmoothing(a, b);
      }),
      (H.selector =
        a.$ ||
        a.jQuery ||
        function (b) {
          var c = a.$ || a.jQuery;
          return c
            ? ((H.selector = c), c(b))
            : (d || (d = a.document),
              d
                ? d.querySelectorAll
                  ? d.querySelectorAll(b)
                  : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
                : b);
        });
    var K = [],
      L = {},
      M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      N = /[\+-]=-?[\.\d]/,
      O = function (a) {
        for (var b, c = this._firstPT, d = 1e-6; c; )
          (b = c.blob
            ? 1 === a && null != this.end
              ? this.end
              : a
              ? this.join("")
              : this.start
            : c.c * a + c.s),
            c.m
              ? (b = c.m.call(this._tween, b, this._target || c.t, this._tween))
              : d > b && b > -d && !c.blob && (b = 0),
            c.f ? (c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b)) : (c.t[c.p] = b),
            (c = c._next);
      },
      P = function (a, b, c, d) {
        var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = [],
          m = 0,
          n = "",
          o = 0;
        for (
          l.start = a,
            l.end = b,
            a = l[0] = a + "",
            b = l[1] = b + "",
            c && (c(l), (a = l[0]), (b = l[1])),
            l.length = 0,
            e = a.match(M) || [],
            f = b.match(M) || [],
            d &&
              ((d._next = null), (d.blob = 1), (l._firstPT = l._applyPT = d)),
            i = f.length,
            h = 0;
          i > h;
          h++
        )
          (k = f[h]),
            (j = b.substr(m, b.indexOf(k, m) - m)),
            (n += j || !h ? j : ","),
            (m += j.length),
            o ? (o = (o + 1) % 5) : "rgba(" === j.substr(-5) && (o = 1),
            k === e[h] || e.length <= h
              ? (n += k)
              : (n && (l.push(n), (n = "")),
                (g = parseFloat(e[h])),
                l.push(g),
                (l._firstPT = {
                  _next: l._firstPT,
                  t: l,
                  p: l.length - 1,
                  s: g,
                  c:
                    ("=" === k.charAt(1)
                      ? parseInt(k.charAt(0) + "1", 10) *
                        parseFloat(k.substr(2))
                      : parseFloat(k) - g) || 0,
                  f: 0,
                  m: o && 4 > o ? Math.round : 0,
                })),
            (m += k.length);
        return (
          (n += b.substr(m)),
          n && l.push(n),
          (l.setRatio = O),
          N.test(b) && (l.end = null),
          l
        );
      },
      Q = function (a, b, c, d, e, f, g, h, i) {
        "function" == typeof d && (d = d(i || 0, a));
        var j,
          k = typeof a[b],
          l =
            "function" !== k
              ? ""
              : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)]
              ? b
              : "get" + b.substr(3),
          m = "get" !== c ? c : l ? (g ? a[l](g) : a[l]()) : a[b],
          n = "string" == typeof d && "=" === d.charAt(1),
          o = {
            t: a,
            p: b,
            s: m,
            f: "function" === k,
            pg: 0,
            n: e || b,
            m: f ? ("function" == typeof f ? f : Math.round) : 0,
            pr: 0,
            c: n
              ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2))
              : parseFloat(d) - m || 0,
          };
        return (
          ("number" != typeof m || ("number" != typeof d && !n)) &&
            (g ||
            isNaN(m) ||
            (!n && isNaN(d)) ||
            "boolean" == typeof m ||
            "boolean" == typeof d
              ? ((o.fp = g),
                (j = P(
                  m,
                  n
                    ? parseFloat(o.s) +
                        o.c +
                        (o.s + "").replace(/[0-9\-\.]/g, "")
                    : d,
                  h || H.defaultStringFilter,
                  o
                )),
                (o = {
                  t: j,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 2,
                  pg: 0,
                  n: e || b,
                  pr: 0,
                  m: 0,
                }))
              : ((o.s = parseFloat(m)), n || (o.c = parseFloat(d) - o.s || 0))),
          o.c
            ? ((o._next = this._firstPT) && (o._next._prev = o),
              (this._firstPT = o),
              o)
            : void 0
        );
      },
      R = (H._internals = {
        isArray: q,
        isSelector: I,
        lazyTweens: K,
        blobDif: P,
      }),
      S = (H._plugins = {}),
      T = (R.tweenLookup = {}),
      U = 0,
      V = (R.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1,
        lazy: 1,
        onOverwrite: 1,
        callbackScope: 1,
        stringFilter: 1,
        id: 1,
        yoyoEase: 1,
      }),
      W = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        true: 1,
        false: 0,
      },
      X = (E._rootFramesTimeline = new G()),
      Y = (E._rootTimeline = new G()),
      Z = 30,
      $ = (R.lazyRender = function () {
        var a,
          b = K.length;
        for (L = {}; --b > -1; )
          (a = K[b]),
            a &&
              a._lazy !== !1 &&
              (a.render(a._lazy[0], a._lazy[1], !0), (a._lazy = !1));
        K.length = 0;
      });
    (Y._startTime = j.time),
      (X._startTime = j.frame),
      (Y._active = X._active = !0),
      setTimeout($, 1),
      (E._updateRoot = H.render =
        function () {
          var a, b, c;
          if (
            (K.length && $(),
            Y.render((j.time - Y._startTime) * Y._timeScale, !1, !1),
            X.render((j.frame - X._startTime) * X._timeScale, !1, !1),
            K.length && $(),
            j.frame >= Z)
          ) {
            Z = j.frame + (parseInt(H.autoSleep, 10) || 120);
            for (c in T) {
              for (b = T[c].tweens, a = b.length; --a > -1; )
                b[a]._gc && b.splice(a, 1);
              0 === b.length && delete T[c];
            }
            if (
              ((c = Y._first),
              (!c || c._paused) &&
                H.autoSleep &&
                !X._first &&
                1 === j._listeners.tick.length)
            ) {
              for (; c && c._paused; ) c = c._next;
              c || j.sleep();
            }
          }
        }),
      j.addEventListener("tick", E._updateRoot);
    var _ = function (a, b, c) {
        var d,
          e,
          f = a._gsTweenID;
        if (
          (T[f || (a._gsTweenID = f = "t" + U++)] ||
            (T[f] = { target: a, tweens: [] }),
          b && ((d = T[f].tweens), (d[(e = d.length)] = b), c))
        )
          for (; --e > -1; ) d[e] === b && d.splice(e, 1);
        return T[f].tweens;
      },
      aa = function (a, b, c, d) {
        var e,
          f,
          g = a.vars.onOverwrite;
        return (
          g && (e = g(a, b, c, d)),
          (g = H.onOverwrite),
          g && (f = g(a, b, c, d)),
          e !== !1 && f !== !1
        );
      },
      ba = function (a, b, c, d, e) {
        var f, g, h, i;
        if (1 === d || d >= 4) {
          for (i = e.length, f = 0; i > f; f++)
            if ((h = e[f]) !== b) h._gc || (h._kill(null, a, b) && (g = !0));
            else if (5 === d) break;
          return g;
        }
        var j,
          k = b._startTime + n,
          l = [],
          m = 0,
          o = 0 === b._duration;
        for (f = e.length; --f > -1; )
          (h = e[f]) === b ||
            h._gc ||
            h._paused ||
            (h._timeline !== b._timeline
              ? ((j = j || ca(b, 0, o)), 0 === ca(h, j, o) && (l[m++] = h))
              : h._startTime <= k &&
                h._startTime + h.totalDuration() / h._timeScale > k &&
                (((o || !h._initted) && k - h._startTime <= 2e-10) ||
                  (l[m++] = h)));
        for (f = m; --f > -1; )
          if (
            ((h = l[f]),
            (i = h._firstPT),
            2 === d && h._kill(c, a, b) && (g = !0),
            2 !== d || (!h._firstPT && h._initted && i))
          ) {
            if (2 !== d && !aa(h, b)) continue;
            h._enabled(!1, !1) && (g = !0);
          }
        return g;
      },
      ca = function (a, b, c) {
        for (
          var d = a._timeline, e = d._timeScale, f = a._startTime;
          d._timeline;

        ) {
          if (((f += d._startTime), (e *= d._timeScale), d._paused))
            return -100;
          d = d._timeline;
        }
        return (
          (f /= e),
          f > b
            ? f - b
            : (c && f === b) || (!a._initted && 2 * n > f - b)
            ? n
            : (f += a.totalDuration() / a._timeScale / e) > b + n
            ? 0
            : f - b - n
        );
      };
    (i._init = function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        g = this.vars,
        h = this._overwrittenProps,
        i = this._duration,
        j = !!g.immediateRender,
        k = g.ease;
      if (g.startAt) {
        this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()),
          (e = {});
        for (d in g.startAt) e[d] = g.startAt[d];
        if (
          ((e.data = "isStart"),
          (e.overwrite = !1),
          (e.immediateRender = !0),
          (e.lazy = j && g.lazy !== !1),
          (e.startAt = e.delay = null),
          (e.onUpdate = g.onUpdate),
          (e.onUpdateParams = g.onUpdateParams),
          (e.onUpdateScope = g.onUpdateScope || g.callbackScope || this),
          (this._startAt = H.to(this.target || {}, 0, e)),
          j)
        )
          if (this._time > 0) this._startAt = null;
          else if (0 !== i) return;
      } else if (g.runBackwards && 0 !== i)
        if (this._startAt)
          this._startAt.render(-1, !0),
            this._startAt.kill(),
            (this._startAt = null);
        else {
          0 !== this._time && (j = !1), (c = {});
          for (d in g) (V[d] && "autoCSS" !== d) || (c[d] = g[d]);
          if (
            ((c.overwrite = 0),
            (c.data = "isFromStart"),
            (c.lazy = j && g.lazy !== !1),
            (c.immediateRender = j),
            (this._startAt = H.to(this.target, 0, c)),
            j)
          ) {
            if (0 === this._time) return;
          } else
            this._startAt._init(),
              this._startAt._enabled(!1),
              this.vars.immediateRender && (this._startAt = null);
        }
      if (
        ((this._ease = k =
          k
            ? k instanceof w
              ? k
              : "function" == typeof k
              ? new w(k, g.easeParams)
              : x[k] || H.defaultEase
            : H.defaultEase),
        g.easeParams instanceof Array &&
          k.config &&
          (this._ease = k.config.apply(k, g.easeParams)),
        (this._easeType = this._ease._type),
        (this._easePower = this._ease._power),
        (this._firstPT = null),
        this._targets)
      )
        for (f = this._targets.length, a = 0; f > a; a++)
          this._initProps(
            this._targets[a],
            (this._propLookup[a] = {}),
            this._siblings[a],
            h ? h[a] : null,
            a
          ) && (b = !0);
      else
        b = this._initProps(
          this.target,
          this._propLookup,
          this._siblings,
          h,
          0
        );
      if (
        (b && H._onPluginEvent("_onInitAllProps", this),
        h &&
          (this._firstPT ||
            ("function" != typeof this.target && this._enabled(!1, !1))),
        g.runBackwards)
      )
        for (c = this._firstPT; c; ) (c.s += c.c), (c.c = -c.c), (c = c._next);
      (this._onUpdate = g.onUpdate), (this._initted = !0);
    }),
      (i._initProps = function (b, c, d, e, f) {
        var g, h, i, j, k, l;
        if (null == b) return !1;
        L[b._gsTweenID] && $(),
          this.vars.css ||
            (b.style &&
              b !== a &&
              b.nodeType &&
              S.css &&
              this.vars.autoCSS !== !1 &&
              J(this.vars, b));
        for (g in this.vars)
          if (((l = this.vars[g]), V[g]))
            l &&
              (l instanceof Array || (l.push && q(l))) &&
              -1 !== l.join("").indexOf("{self}") &&
              (this.vars[g] = l = this._swapSelfInParams(l, this));
          else if (
            S[g] &&
            (j = new S[g]())._onInitTween(b, this.vars[g], this, f)
          ) {
            for (
              this._firstPT = k =
                {
                  _next: this._firstPT,
                  t: j,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 1,
                  n: g,
                  pg: 1,
                  pr: j._priority,
                  m: 0,
                },
                h = j._overwriteProps.length;
              --h > -1;

            )
              c[j._overwriteProps[h]] = this._firstPT;
            (j._priority || j._onInitAllProps) && (i = !0),
              (j._onDisable || j._onEnable) &&
                (this._notifyPluginsOfEnabled = !0),
              k._next && (k._next._prev = k);
          } else
            c[g] = Q.call(
              this,
              b,
              g,
              "get",
              l,
              g,
              0,
              null,
              this.vars.stringFilter,
              f
            );
        return e && this._kill(e, b)
          ? this._initProps(b, c, d, e, f)
          : this._overwrite > 1 &&
            this._firstPT &&
            d.length > 1 &&
            ba(b, this, c, this._overwrite, d)
          ? (this._kill(c, b), this._initProps(b, c, d, e, f))
          : (this._firstPT &&
              ((this.vars.lazy !== !1 && this._duration) ||
                (this.vars.lazy && !this._duration)) &&
              (L[b._gsTweenID] = !0),
            i);
      }),
      (i.render = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = this._time,
          i = this._duration,
          j = this._rawPrevTime;
        if (a >= i - 1e-7 && a >= 0)
          (this._totalTime = this._time = i),
            (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed ||
              ((d = !0),
              (e = "onComplete"),
              (c = c || this._timeline.autoRemoveChildren)),
            0 === i &&
              (this._initted || !this.vars.lazy || c) &&
              (this._startTime === this._timeline._duration && (a = 0),
              (0 > j ||
                (0 >= a && a >= -1e-7) ||
                (j === n && "isPause" !== this.data)) &&
                j !== a &&
                ((c = !0), j > n && (e = "onReverseComplete")),
              (this._rawPrevTime = g = !b || a || j === a ? a : n));
        else if (1e-7 > a)
          (this._totalTime = this._time = 0),
            (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
            (0 !== h || (0 === i && j > 0)) &&
              ((e = "onReverseComplete"), (d = this._reversed)),
            0 > a &&
              ((this._active = !1),
              0 === i &&
                (this._initted || !this.vars.lazy || c) &&
                (j >= 0 && (j !== n || "isPause" !== this.data) && (c = !0),
                (this._rawPrevTime = g = !b || a || j === a ? a : n))),
            (!this._initted || (this._startAt && this._startAt.progress())) &&
              (c = !0);
        else if (((this._totalTime = this._time = a), this._easeType)) {
          var k = a / i,
            l = this._easeType,
            m = this._easePower;
          (1 === l || (3 === l && k >= 0.5)) && (k = 1 - k),
            3 === l && (k *= 2),
            1 === m
              ? (k *= k)
              : 2 === m
              ? (k *= k * k)
              : 3 === m
              ? (k *= k * k * k)
              : 4 === m && (k *= k * k * k * k),
            1 === l
              ? (this.ratio = 1 - k)
              : 2 === l
              ? (this.ratio = k)
              : 0.5 > a / i
              ? (this.ratio = k / 2)
              : (this.ratio = 1 - k / 2);
        } else this.ratio = this._ease.getRatio(a / i);
        if (this._time !== h || c) {
          if (!this._initted) {
            if ((this._init(), !this._initted || this._gc)) return;
            if (
              !c &&
              this._firstPT &&
              ((this.vars.lazy !== !1 && this._duration) ||
                (this.vars.lazy && !this._duration))
            )
              return (
                (this._time = this._totalTime = h),
                (this._rawPrevTime = j),
                K.push(this),
                void (this._lazy = [a, b])
              );
            this._time && !d
              ? (this.ratio = this._ease.getRatio(this._time / i))
              : d &&
                this._ease._calcEnd &&
                (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
          }
          for (
            this._lazy !== !1 && (this._lazy = !1),
              this._active ||
                (!this._paused &&
                  this._time !== h &&
                  a >= 0 &&
                  (this._active = !0)),
              0 === h &&
                (this._startAt &&
                  (a >= 0
                    ? this._startAt.render(a, !0, c)
                    : e || (e = "_dummyGS")),
                this.vars.onStart &&
                  (0 !== this._time || 0 === i) &&
                  (b || this._callback("onStart"))),
              f = this._firstPT;
            f;

          )
            f.f
              ? f.t[f.p](f.c * this.ratio + f.s)
              : (f.t[f.p] = f.c * this.ratio + f.s),
              (f = f._next);
          this._onUpdate &&
            (0 > a &&
              this._startAt &&
              a !== -1e-4 &&
              this._startAt.render(a, !0, c),
            b || ((this._time !== h || d || c) && this._callback("onUpdate"))),
            e &&
              (!this._gc || c) &&
              (0 > a &&
                this._startAt &&
                !this._onUpdate &&
                a !== -1e-4 &&
                this._startAt.render(a, !0, c),
              d &&
                (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                (this._active = !1)),
              !b && this.vars[e] && this._callback(e),
              0 === i &&
                this._rawPrevTime === n &&
                g !== n &&
                (this._rawPrevTime = 0));
        }
      }),
      (i._kill = function (a, b, c) {
        if (
          ("all" === a && (a = null),
          null == a && (null == b || b === this.target))
        )
          return (this._lazy = !1), this._enabled(!1, !1);
        b =
          "string" != typeof b
            ? b || this._targets || this.target
            : H.selector(b) || b;
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m =
            c &&
            this._time &&
            c._startTime === this._startTime &&
            this._timeline === c._timeline,
          n = this._firstPT;
        if ((q(b) || I(b)) && "number" != typeof b[0])
          for (d = b.length; --d > -1; ) this._kill(a, b[d], c) && (i = !0);
        else {
          if (this._targets) {
            for (d = this._targets.length; --d > -1; )
              if (b === this._targets[d]) {
                (h = this._propLookup[d] || {}),
                  (this._overwrittenProps = this._overwrittenProps || []),
                  (e = this._overwrittenProps[d] =
                    a ? this._overwrittenProps[d] || {} : "all");
                break;
              }
          } else {
            if (b !== this.target) return !1;
            (h = this._propLookup),
              (e = this._overwrittenProps =
                a ? this._overwrittenProps || {} : "all");
          }
          if (h) {
            if (
              ((j = a || h),
              (k =
                a !== e &&
                "all" !== e &&
                a !== h &&
                ("object" != typeof a || !a._tempKill)),
              c && (H.onOverwrite || this.vars.onOverwrite))
            ) {
              for (f in j) h[f] && (l || (l = []), l.push(f));
              if ((l || !a) && !aa(this, c, b, l)) return !1;
            }
            for (f in j)
              (g = h[f]) &&
                (m && (g.f ? g.t[g.p](g.s) : (g.t[g.p] = g.s), (i = !0)),
                g.pg && g.t._kill(j) && (i = !0),
                (g.pg && 0 !== g.t._overwriteProps.length) ||
                  (g._prev
                    ? (g._prev._next = g._next)
                    : g === this._firstPT && (this._firstPT = g._next),
                  g._next && (g._next._prev = g._prev),
                  (g._next = g._prev = null)),
                delete h[f]),
                k && (e[f] = 1);
            !this._firstPT && this._initted && n && this._enabled(!1, !1);
          }
        }
        return i;
      }),
      (i.invalidate = function () {
        return (
          this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this),
          (this._firstPT =
            this._overwrittenProps =
            this._startAt =
            this._onUpdate =
              null),
          (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
          (this._propLookup = this._targets ? {} : []),
          E.prototype.invalidate.call(this),
          this.vars.immediateRender &&
            ((this._time = -n), this.render(Math.min(0, -this._delay))),
          this
        );
      }),
      (i._enabled = function (a, b) {
        if ((k || j.wake(), a && this._gc)) {
          var c,
            d = this._targets;
          if (d)
            for (c = d.length; --c > -1; )
              this._siblings[c] = _(d[c], this, !0);
          else this._siblings = _(this.target, this, !0);
        }
        return (
          E.prototype._enabled.call(this, a, b),
          this._notifyPluginsOfEnabled && this._firstPT
            ? H._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
            : !1
        );
      }),
      (H.to = function (a, b, c) {
        return new H(a, b, c);
      }),
      (H.from = function (a, b, c) {
        return (
          (c.runBackwards = !0),
          (c.immediateRender = 0 != c.immediateRender),
          new H(a, b, c)
        );
      }),
      (H.fromTo = function (a, b, c, d) {
        return (
          (d.startAt = c),
          (d.immediateRender =
            0 != d.immediateRender && 0 != c.immediateRender),
          new H(a, b, d)
        );
      }),
      (H.delayedCall = function (a, b, c, d, e) {
        return new H(b, 0, {
          delay: a,
          onComplete: b,
          onCompleteParams: c,
          callbackScope: d,
          onReverseComplete: b,
          onReverseCompleteParams: c,
          immediateRender: !1,
          lazy: !1,
          useFrames: e,
          overwrite: 0,
        });
      }),
      (H.set = function (a, b) {
        return new H(a, 0, b);
      }),
      (H.getTweensOf = function (a, b) {
        if (null == a) return [];
        a = "string" != typeof a ? a : H.selector(a) || a;
        var c, d, e, f;
        if ((q(a) || I(a)) && "number" != typeof a[0]) {
          for (c = a.length, d = []; --c > -1; )
            d = d.concat(H.getTweensOf(a[c], b));
          for (c = d.length; --c > -1; )
            for (f = d[c], e = c; --e > -1; ) f === d[e] && d.splice(c, 1);
        } else if (a._gsTweenID)
          for (d = _(a).concat(), c = d.length; --c > -1; )
            (d[c]._gc || (b && !d[c].isActive())) && d.splice(c, 1);
        return d || [];
      }),
      (H.killTweensOf = H.killDelayedCallsTo =
        function (a, b, c) {
          "object" == typeof b && ((c = b), (b = !1));
          for (var d = H.getTweensOf(a, b), e = d.length; --e > -1; )
            d[e]._kill(c, a);
        });
    var da = u(
      "plugins.TweenPlugin",
      function (a, b) {
        (this._overwriteProps = (a || "").split(",")),
          (this._propName = this._overwriteProps[0]),
          (this._priority = b || 0),
          (this._super = da.prototype);
      },
      !0
    );
    if (
      ((i = da.prototype),
      (da.version = "1.19.0"),
      (da.API = 2),
      (i._firstPT = null),
      (i._addTween = Q),
      (i.setRatio = O),
      (i._kill = function (a) {
        var b,
          c = this._overwriteProps,
          d = this._firstPT;
        if (null != a[this._propName]) this._overwriteProps = [];
        else for (b = c.length; --b > -1; ) null != a[c[b]] && c.splice(b, 1);
        for (; d; )
          null != a[d.n] &&
            (d._next && (d._next._prev = d._prev),
            d._prev
              ? ((d._prev._next = d._next), (d._prev = null))
              : this._firstPT === d && (this._firstPT = d._next)),
            (d = d._next);
        return !1;
      }),
      (i._mod = i._roundProps =
        function (a) {
          for (var b, c = this._firstPT; c; )
            (b =
              a[this._propName] ||
              (null != c.n && a[c.n.split(this._propName + "_").join("")])),
              b &&
                "function" == typeof b &&
                (2 === c.f ? (c.t._applyPT.m = b) : (c.m = b)),
              (c = c._next);
        }),
      (H._onPluginEvent = function (a, b) {
        var c,
          d,
          e,
          f,
          g,
          h = b._firstPT;
        if ("_onInitAllProps" === a) {
          for (; h; ) {
            for (g = h._next, d = e; d && d.pr > h.pr; ) d = d._next;
            (h._prev = d ? d._prev : f) ? (h._prev._next = h) : (e = h),
              (h._next = d) ? (d._prev = h) : (f = h),
              (h = g);
          }
          h = b._firstPT = e;
        }
        for (; h; )
          h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0),
            (h = h._next);
        return c;
      }),
      (da.activate = function (a) {
        for (var b = a.length; --b > -1; )
          a[b].API === da.API && (S[new a[b]()._propName] = a[b]);
        return !0;
      }),
      (t.plugin = function (a) {
        if (!(a && a.propName && a.init && a.API))
          throw "illegal plugin definition.";
        var b,
          c = a.propName,
          d = a.priority || 0,
          e = a.overwriteProps,
          f = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_mod",
            mod: "_mod",
            initAll: "_onInitAllProps",
          },
          g = u(
            "plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin",
            function () {
              da.call(this, c, d), (this._overwriteProps = e || []);
            },
            a.global === !0
          ),
          h = (g.prototype = new da(c));
        (h.constructor = g), (g.API = a.API);
        for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
        return (g.version = a.version), da.activate([g]), g;
      }),
      (g = a._gsQueue))
    ) {
      for (h = 0; h < g.length; h++) g[h]();
      for (i in r)
        r[i].func || a.console.log("GSAP encountered missing dependency: " + i);
    }
    k = !1;
  })(
    "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
      ? global
      : this || window,
    "TweenMax"
  );

/*!
 * imagesLoaded PACKAGED v3.0.4
 * JavaScript is all like "You images are done yet or what?"
 */

(function () {
  "use strict";
  function e() {}
  function t(e, t) {
    for (var n = e.length; n--; ) if (e[n].listener === t) return n;
    return -1;
  }
  var n = e.prototype;
  (n.getListeners = function (e) {
    var t,
      n,
      i = this._getEvents();
    if ("object" == typeof e) {
      t = {};
      for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
    } else t = i[e] || (i[e] = []);
    return t;
  }),
    (n.flattenListeners = function (e) {
      var t,
        n = [];
      for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
      return n;
    }),
    (n.getListenersAsObject = function (e) {
      var t,
        n = this.getListeners(e);
      return n instanceof Array && ((t = {}), (t[e] = n)), t || n;
    }),
    (n.addListener = function (e, n) {
      var i,
        r = this.getListenersAsObject(e),
        o = "object" == typeof n;
      for (i in r)
        r.hasOwnProperty(i) &&
          -1 === t(r[i], n) &&
          r[i].push(o ? n : { listener: n, once: !1 });
      return this;
    }),
    (n.on = n.addListener),
    (n.addOnceListener = function (e, t) {
      return this.addListener(e, { listener: t, once: !0 });
    }),
    (n.once = n.addOnceListener),
    (n.defineEvent = function (e) {
      return this.getListeners(e), this;
    }),
    (n.defineEvents = function (e) {
      for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
      return this;
    }),
    (n.removeListener = function (e, n) {
      var i,
        r,
        o = this.getListenersAsObject(e);
      for (r in o)
        o.hasOwnProperty(r) &&
          ((i = t(o[r], n)), -1 !== i && o[r].splice(i, 1));
      return this;
    }),
    (n.off = n.removeListener),
    (n.addListeners = function (e, t) {
      return this.manipulateListeners(!1, e, t);
    }),
    (n.removeListeners = function (e, t) {
      return this.manipulateListeners(!0, e, t);
    }),
    (n.manipulateListeners = function (e, t, n) {
      var i,
        r,
        o = e ? this.removeListener : this.addListener,
        s = e ? this.removeListeners : this.addListeners;
      if ("object" != typeof t || t instanceof RegExp)
        for (i = n.length; i--; ) o.call(this, t, n[i]);
      else
        for (i in t)
          t.hasOwnProperty(i) &&
            (r = t[i]) &&
            ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
      return this;
    }),
    (n.removeEvent = function (e) {
      var t,
        n = typeof e,
        i = this._getEvents();
      if ("string" === n) delete i[e];
      else if ("object" === n)
        for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
      else delete this._events;
      return this;
    }),
    (n.emitEvent = function (e, t) {
      var n,
        i,
        r,
        o,
        s = this.getListenersAsObject(e);
      for (r in s)
        if (s.hasOwnProperty(r))
          for (i = s[r].length; i--; )
            (n = s[r][i]),
              (o = n.listener.apply(this, t || [])),
              (o === this._getOnceReturnValue() || n.once === !0) &&
                this.removeListener(e, s[r][i].listener);
      return this;
    }),
    (n.trigger = n.emitEvent),
    (n.emit = function (e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return this.emitEvent(e, t);
    }),
    (n.setOnceReturnValue = function (e) {
      return (this._onceReturnValue = e), this;
    }),
    (n._getOnceReturnValue = function () {
      return this.hasOwnProperty("_onceReturnValue")
        ? this._onceReturnValue
        : !0;
    }),
    (n._getEvents = function () {
      return this._events || (this._events = {});
    }),
    "function" == typeof define && define.amd
      ? define(function () {
          return e;
        })
      : "undefined" != typeof module && module.exports
      ? (module.exports = e)
      : (this.EventEmitter = e);
}.call(this),
  (function (e) {
    "use strict";
    var t = document.documentElement,
      n = function () {};
    t.addEventListener
      ? (n = function (e, t, n) {
          e.addEventListener(t, n, !1);
        })
      : t.attachEvent &&
        (n = function (t, n, i) {
          (t[n + i] = i.handleEvent
            ? function () {
                var t = e.event;
                (t.target = t.target || t.srcElement), i.handleEvent.call(i, t);
              }
            : function () {
                var n = e.event;
                (n.target = n.target || n.srcElement), i.call(t, n);
              }),
            t.attachEvent("on" + n, t[n + i]);
        });
    var i = function () {};
    t.removeEventListener
      ? (i = function (e, t, n) {
          e.removeEventListener(t, n, !1);
        })
      : t.detachEvent &&
        (i = function (e, t, n) {
          e.detachEvent("on" + t, e[t + n]);
          try {
            delete e[t + n];
          } catch (i) {
            e[t + n] = void 0;
          }
        });
    var r = { bind: n, unbind: i };
    "function" == typeof define && define.amd ? define(r) : (e.eventie = r);
  })(this),
  (function (e) {
    "use strict";
    function t(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function n(e) {
      return "[object Array]" === c.call(e);
    }
    function i(e) {
      var t = [];
      if (n(e)) t = e;
      else if ("number" == typeof e.length)
        for (var i = 0, r = e.length; r > i; i++) t.push(e[i]);
      else t.push(e);
      return t;
    }
    function r(e, n) {
      function r(e, n, s) {
        if (!(this instanceof r)) return new r(e, n);
        "string" == typeof e && (e = document.querySelectorAll(e)),
          (this.elements = i(e)),
          (this.options = t({}, this.options)),
          "function" == typeof n ? (s = n) : t(this.options, n),
          s && this.on("always", s),
          this.getImages(),
          o && (this.jqDeferred = new o.Deferred());
        var a = this;
        setTimeout(function () {
          a.check();
        });
      }
      function c(e) {
        this.img = e;
      }
      (r.prototype = new e()),
        (r.prototype.options = {}),
        (r.prototype.getImages = function () {
          this.images = [];
          for (var e = 0, t = this.elements.length; t > e; e++) {
            var n = this.elements[e];
            "IMG" === n.nodeName && this.addImage(n);
            for (
              var i = n.querySelectorAll("img"), r = 0, o = i.length;
              o > r;
              r++
            ) {
              var s = i[r];
              this.addImage(s);
            }
          }
        }),
        (r.prototype.addImage = function (e) {
          var t = new c(e);
          this.images.push(t);
        }),
        (r.prototype.check = function () {
          function e(e, r) {
            return (
              t.options.debug && a && s.log("confirm", e, r),
              t.progress(e),
              n++,
              n === i && t.complete(),
              !0
            );
          }
          var t = this,
            n = 0,
            i = this.images.length;
          if (((this.hasAnyBroken = !1), !i)) return this.complete(), void 0;
          for (var r = 0; i > r; r++) {
            var o = this.images[r];
            o.on("confirm", e), o.check();
          }
        }),
        (r.prototype.progress = function (e) {
          this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
          var t = this;
          setTimeout(function () {
            t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify(t, e);
          });
        }),
        (r.prototype.complete = function () {
          var e = this.hasAnyBroken ? "fail" : "done";
          this.isComplete = !0;
          var t = this;
          setTimeout(function () {
            if ((t.emit(e, t), t.emit("always", t), t.jqDeferred)) {
              var n = t.hasAnyBroken ? "reject" : "resolve";
              t.jqDeferred[n](t);
            }
          });
        }),
        o &&
          (o.fn.imagesLoaded = function (e, t) {
            var n = new r(this, e, t);
            return n.jqDeferred.promise(o(this));
          });
      var f = {};
      return (
        (c.prototype = new e()),
        (c.prototype.check = function () {
          var e = f[this.img.src];
          if (e) return this.useCached(e), void 0;
          if (
            ((f[this.img.src] = this),
            this.img.complete && void 0 !== this.img.naturalWidth)
          )
            return (
              this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0
            );
          var t = (this.proxyImage = new Image());
          n.bind(t, "load", this),
            n.bind(t, "error", this),
            (t.src = this.img.src);
        }),
        (c.prototype.useCached = function (e) {
          if (e.isConfirmed) this.confirm(e.isLoaded, "cached was confirmed");
          else {
            var t = this;
            e.on("confirm", function (e) {
              return t.confirm(e.isLoaded, "cache emitted confirmed"), !0;
            });
          }
        }),
        (c.prototype.confirm = function (e, t) {
          (this.isConfirmed = !0),
            (this.isLoaded = e),
            this.emit("confirm", this, t);
        }),
        (c.prototype.handleEvent = function (e) {
          var t = "on" + e.type;
          this[t] && this[t](e);
        }),
        (c.prototype.onload = function () {
          this.confirm(!0, "onload"), this.unbindProxyEvents();
        }),
        (c.prototype.onerror = function () {
          this.confirm(!1, "onerror"), this.unbindProxyEvents();
        }),
        (c.prototype.unbindProxyEvents = function () {
          n.unbind(this.proxyImage, "load", this),
            n.unbind(this.proxyImage, "error", this);
        }),
        r
      );
    }
    var o = e.jQuery,
      s = e.console,
      a = s !== void 0,
      c = Object.prototype.toString;
    "function" == typeof define && define.amd
      ? define(["eventEmitter/EventEmitter", "eventie/eventie"], r)
      : (e.imagesLoaded = r(e.EventEmitter, e.eventie));
  })(window));
