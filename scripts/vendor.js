!function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(w, t) {
    "use strict";
    var e = []
      , i = Object.getPrototypeOf
      , a = e.slice
      , v = e.flat ? function(t) {
        return e.flat.call(t)
    }
    : function(t) {
        return e.concat.apply([], t)
    }
      , u = e.push
      , r = e.indexOf
      , n = {}
      , o = n.toString
      , m = n.hasOwnProperty
      , s = m.toString
      , l = s.call(Object)
      , g = {}
      , y = function(t) {
        return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
    }
      , _ = function(t) {
        return null != t && t === t.window
    }
      , E = w.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function D(t, e, n) {
        var i, r, o = (n = n || E).createElement("script");
        if (o.text = t,
        e)
            for (i in c)
                (r = e[i] || e.getAttribute && e.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function b(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[o.call(t)] || "object" : typeof t
    }
    var f = "3.6.0"
      , T = function(t, e) {
        return new T.fn.init(t,e)
    };
    function h(t) {
        var e = !!t && "length"in t && t.length
          , n = b(t);
        return !y(t) && !_(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    T.fn = T.prototype = {
        jquery: f,
        constructor: T,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(t) {
            return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = T.merge(this.constructor(), t);
            return e.prevObject = this,
            e
        },
        each: function(t) {
            return T.each(this, t)
        },
        map: function(n) {
            return this.pushStack(T.map(this, function(t, e) {
                return n.call(t, e, t)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(T.grep(this, function(t, e) {
                return (e + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(T.grep(this, function(t, e) {
                return e % 2
            }))
        },
        eq: function(t) {
            var e = this.length
              , n = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: e.sort,
        splice: e.splice
    },
    T.extend = T.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || y(s) || (s = {}),
        a === u && (s = this,
        a--); a < u; a++)
            if (null != (t = arguments[a]))
                for (e in t)
                    i = t[e],
                    "__proto__" !== e && s !== i && (l && i && (T.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[e],
                    o = r && !Array.isArray(n) ? [] : r || T.isPlainObject(n) ? n : {},
                    r = !1,
                    s[e] = T.extend(l, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }
    ,
    T.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isPlainObject: function(t) {
            var e, n;
            return !(!t || "[object Object]" !== o.call(t) || (e = i(t)) && ("function" != typeof (n = m.call(e, "constructor") && e.constructor) || s.call(n) !== l))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        globalEval: function(t, e, n) {
            D(t, {
                nonce: e && e.nonce
            }, n)
        },
        each: function(t, e) {
            var n, i = 0;
            if (h(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++)
                    ;
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i]))
                        break;
            return t
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (h(Object(t)) ? T.merge(n, "string" == typeof t ? [t] : t) : u.call(n, t)),
            n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : r.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++)
                t[r++] = e[i];
            return t.length = r,
            t
        },
        grep: function(t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; r < o; r++)
                !e(t[r], r) !== s && i.push(t[r]);
            return i
        },
        map: function(t, e, n) {
            var i, r, o = 0, s = [];
            if (h(t))
                for (i = t.length; o < i; o++)
                    null != (r = e(t[o], o, n)) && s.push(r);
            else
                for (o in t)
                    null != (r = e(t[o], o, n)) && s.push(r);
            return v(s)
        },
        guid: 1,
        support: g
    }),
    "function" == typeof Symbol && (T.fn[Symbol.iterator] = e[Symbol.iterator]),
    T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        n["[object " + e + "]"] = e.toLowerCase()
    });
    var d = function(n) {
        var t, d, D, o, r, p, f, v, b, u, l, x, w, s, E, m, a, c, g, T = "sizzle" + 1 * new Date, h = n.document, A = 0, i = 0, y = ut(), _ = ut(), C = ut(), S = ut(), k = function(t, e) {
            return t === e && (l = !0),
            0
        }, F = {}.hasOwnProperty, e = [], O = e.pop, M = e.push, L = e.push, B = e.slice, P = function(t, e) {
            for (var n = 0, i = t.length; n < i; n++)
                if (t[n] === e)
                    return n;
            return -1
        }, j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", N = "\\[" + R + "*(" + I + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + R + "*\\]", H = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", z = new RegExp(R + "+","g"), W = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$","g"), q = new RegExp("^" + R + "*," + R + "*"), V = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), X = new RegExp(R + "|>"), Y = new RegExp(H), $ = new RegExp("^" + I + "$"), U = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + H),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)","i"),
            bool: new RegExp("^(?:" + j + ")$","i"),
            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)","i")
        }, G = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/, et = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])","g"), nt = function(t, e) {
            var n = "0x" + t.slice(1) - 65536;
            return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, rt = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        }, ot = function() {
            x()
        }, st = Dt(function(t) {
            return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(e = B.call(h.childNodes), h.childNodes),
            e[h.childNodes.length].nodeType
        } catch (t) {
            L = {
                apply: e.length ? function(t, e) {
                    M.apply(t, B.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++]; )
                        ;
                    t.length = n - 1
                }
            }
        }
        function at(t, e, n, i) {
            var r, o, s, a, u, l, c, f = e && e.ownerDocument, h = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!i && (x(e),
            e = e || w,
            E)) {
                if (11 !== h && (u = J.exec(t)))
                    if (r = u[1]) {
                        if (9 === h) {
                            if (!(s = e.getElementById(r)))
                                return n;
                            if (s.id === r)
                                return n.push(s),
                                n
                        } else if (f && (s = f.getElementById(r)) && g(e, s) && s.id === r)
                            return n.push(s),
                            n
                    } else {
                        if (u[2])
                            return L.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((r = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return L.apply(n, e.getElementsByClassName(r)),
                            n
                    }
                if (d.qsa && !S[t + " "] && (!m || !m.test(t)) && (1 !== h || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === h && (X.test(t) || V.test(t))) {
                        for ((f = tt.test(t) && gt(e.parentNode) || e) === e && d.scope || ((a = e.getAttribute("id")) ? a = a.replace(it, rt) : e.setAttribute("id", a = T)),
                        o = (l = p(t)).length; o--; )
                            l[o] = (a ? "#" + a : ":scope") + " " + _t(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return L.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        S(t, !0)
                    } finally {
                        a === T && e.removeAttribute("id")
                    }
                }
            }
            return v(t.replace(W, "$1"), e, n, i)
        }
        function ut() {
            var i = [];
            return function t(e, n) {
                return i.push(e + " ") > D.cacheLength && delete t[i.shift()],
                t[e + " "] = n
            }
        }
        function lt(t) {
            return t[T] = !0,
            t
        }
        function ct(t) {
            var e = w.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function ft(t, e) {
            for (var n = t.split("|"), i = n.length; i--; )
                D.attrHandle[n[i]] = e
        }
        function ht(t, e) {
            var n = e && t
              , i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function dt(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function pt(n) {
            return function(t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === n
            }
        }
        function vt(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && st(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function mt(s) {
            return lt(function(o) {
                return o = +o,
                lt(function(t, e) {
                    for (var n, i = s([], t.length, o), r = i.length; r--; )
                        t[n = i[r]] && (t[n] = !(e[n] = t[n]))
                })
            })
        }
        function gt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (t in d = at.support = {},
        r = at.isXML = function(t) {
            var e = t && t.namespaceURI
              , n = t && (t.ownerDocument || t).documentElement;
            return !G.test(e || n && n.nodeName || "HTML")
        }
        ,
        x = at.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : h;
            return i != w && 9 === i.nodeType && i.documentElement && (s = (w = i).documentElement,
            E = !r(w),
            h != w && (n = w.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ot, !1) : n.attachEvent && n.attachEvent("onunload", ot)),
            d.scope = ct(function(t) {
                return s.appendChild(t).appendChild(w.createElement("div")),
                void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
            }),
            d.attributes = ct(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            d.getElementsByTagName = ct(function(t) {
                return t.appendChild(w.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = Z.test(w.getElementsByClassName),
            d.getById = ct(function(t) {
                return s.appendChild(t).id = T,
                !w.getElementsByName || !w.getElementsByName(T).length
            }),
            d.getById ? (D.filter.ID = function(t) {
                var e = t.replace(et, nt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ,
            D.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && E) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }
            ) : (D.filter.ID = function(t) {
                var n = t.replace(et, nt);
                return function(t) {
                    var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return e && e.value === n
                }
            }
            ,
            D.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && E) {
                    var n, i, r, o = e.getElementById(t);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === t)
                            return [o];
                        for (r = e.getElementsByName(t),
                        i = 0; o = r[i++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === t)
                                return [o]
                    }
                    return []
                }
            }
            ),
            D.find.TAG = d.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : d.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var n, i = [], r = 0, o = e.getElementsByTagName(t);
                if ("*" !== t)
                    return o;
                for (; n = o[r++]; )
                    1 === n.nodeType && i.push(n);
                return i
            }
            ,
            D.find.CLASS = d.getElementsByClassName && function(t, e) {
                if (void 0 !== e.getElementsByClassName && E)
                    return e.getElementsByClassName(t)
            }
            ,
            a = [],
            m = [],
            (d.qsa = Z.test(w.querySelectorAll)) && (ct(function(t) {
                var e;
                s.appendChild(t).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + j + ")"),
                t.querySelectorAll("[id~=" + T + "-]").length || m.push("~="),
                (e = w.createElement("input")).setAttribute("name", ""),
                t.appendChild(e),
                t.querySelectorAll("[name='']").length || m.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"),
                t.querySelectorAll(":checked").length || m.push(":checked"),
                t.querySelectorAll("a#" + T + "+*").length || m.push(".#.+[+~]"),
                t.querySelectorAll("\\\f"),
                m.push("[\\r\\n\\f]")
            }),
            ct(function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = w.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="),
                2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                s.appendChild(t).disabled = !0,
                2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                m.push(",.*:")
            })),
            (d.matchesSelector = Z.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ct(function(t) {
                d.disconnectedMatch = c.call(t, "*"),
                c.call(t, "[s!='']:x"),
                a.push("!=", H)
            }),
            m = m.length && new RegExp(m.join("|")),
            a = a.length && new RegExp(a.join("|")),
            e = Z.test(s.compareDocumentPosition),
            g = e || Z.test(s.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t
                  , i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            k = e ? function(t, e) {
                if (t === e)
                    return l = !0,
                    0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (1 & (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !d.sortDetached && e.compareDocumentPosition(t) === n ? t == w || t.ownerDocument == h && g(h, t) ? -1 : e == w || e.ownerDocument == h && g(h, e) ? 1 : u ? P(u, t) - P(u, e) : 0 : 4 & n ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return l = !0,
                    0;
                var n, i = 0, r = t.parentNode, o = e.parentNode, s = [t], a = [e];
                if (!r || !o)
                    return t == w ? -1 : e == w ? 1 : r ? -1 : o ? 1 : u ? P(u, t) - P(u, e) : 0;
                if (r === o)
                    return ht(t, e);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (; s[i] === a[i]; )
                    i++;
                return i ? ht(s[i], a[i]) : s[i] == h ? -1 : a[i] == h ? 1 : 0
            }
            ),
            w
        }
        ,
        at.matches = function(t, e) {
            return at(t, null, null, e)
        }
        ,
        at.matchesSelector = function(t, e) {
            if (x(t),
            d.matchesSelector && E && !S[e + " "] && (!a || !a.test(e)) && (!m || !m.test(e)))
                try {
                    var n = c.call(t, e);
                    if (n || d.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return n
                } catch (t) {
                    S(e, !0)
                }
            return 0 < at(e, w, null, [t]).length
        }
        ,
        at.contains = function(t, e) {
            return (t.ownerDocument || t) != w && x(t),
            g(t, e)
        }
        ,
        at.attr = function(t, e) {
            (t.ownerDocument || t) != w && x(t);
            var n = D.attrHandle[e.toLowerCase()]
              , i = n && F.call(D.attrHandle, e.toLowerCase()) ? n(t, e, !E) : void 0;
            return void 0 !== i ? i : d.attributes || !E ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }
        ,
        at.escape = function(t) {
            return (t + "").replace(it, rt)
        }
        ,
        at.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        at.uniqueSort = function(t) {
            var e, n = [], i = 0, r = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && t.slice(0),
            t.sort(k),
            l) {
                for (; e = t[r++]; )
                    e === t[r] && (i = n.push(r));
                for (; i--; )
                    t.splice(n[i], 1)
            }
            return u = null,
            t
        }
        ,
        o = at.getText = function(t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += o(t)
                } else if (3 === r || 4 === r)
                    return t.nodeValue
            } else
                for (; e = t[i++]; )
                    n += o(e);
            return n
        }
        ,
        (D = at.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: U,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(et, nt),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return U.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && Y.test(n) && (e = p(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                    t[2] = n.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(et, nt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = y[t + " "];
                    return e || (e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) && y(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, i, r) {
                    return function(t) {
                        var e = at.attr(t, n);
                        return null == e ? "!=" === i : !i || (e += "",
                        "=" === i ? e === r : "!=" === i ? e !== r : "^=" === i ? r && 0 === e.indexOf(r) : "*=" === i ? r && -1 < e.indexOf(r) : "$=" === i ? r && e.slice(-r.length) === r : "~=" === i ? -1 < (" " + e.replace(z, " ") + " ").indexOf(r) : "|=" === i && (e === r || e.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(p, t, e, v, m) {
                    var g = "nth" !== p.slice(0, 3)
                      , y = "last" !== p.slice(-4)
                      , _ = "of-type" === t;
                    return 1 === v && 0 === m ? function(t) {
                        return !!t.parentNode
                    }
                    : function(t, e, n) {
                        var i, r, o, s, a, u, l = g !== y ? "nextSibling" : "previousSibling", c = t.parentNode, f = _ && t.nodeName.toLowerCase(), h = !n && !_, d = !1;
                        if (c) {
                            if (g) {
                                for (; l; ) {
                                    for (s = t; s = s[l]; )
                                        if (_ ? s.nodeName.toLowerCase() === f : 1 === s.nodeType)
                                            return !1;
                                    u = l = "only" === p && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [y ? c.firstChild : c.lastChild],
                            y && h) {
                                for (d = (a = (i = (r = (o = (s = c)[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === A && i[1]) && i[2],
                                s = a && c.childNodes[a]; s = ++a && s && s[l] || (d = a = 0) || u.pop(); )
                                    if (1 === s.nodeType && ++d && s === t) {
                                        r[p] = [A, a, d];
                                        break
                                    }
                            } else if (h && (d = a = (i = (r = (o = (s = t)[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === A && i[1]),
                            !1 === d)
                                for (; (s = ++a && s && s[l] || (d = a = 0) || u.pop()) && ((_ ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++d || (h && ((r = (o = s[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [A, d]),
                                s !== t)); )
                                    ;
                            return (d -= m) === v || d % v == 0 && 0 <= d / v
                        }
                    }
                },
                PSEUDO: function(t, o) {
                    var e, s = D.pseudos[t] || D.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                    return s[T] ? s(o) : 1 < s.length ? (e = [t, t, "", o],
                    D.setFilters.hasOwnProperty(t.toLowerCase()) ? lt(function(t, e) {
                        for (var n, i = s(t, o), r = i.length; r--; )
                            t[n = P(t, i[r])] = !(e[n] = i[r])
                    }) : function(t) {
                        return s(t, 0, e)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: lt(function(t) {
                    var i = []
                      , r = []
                      , a = f(t.replace(W, "$1"));
                    return a[T] ? lt(function(t, e, n, i) {
                        for (var r, o = a(t, null, i, []), s = t.length; s--; )
                            (r = o[s]) && (t[s] = !(e[s] = r))
                    }) : function(t, e, n) {
                        return i[0] = t,
                        a(i, null, n, r),
                        i[0] = null,
                        !r.pop()
                    }
                }),
                has: lt(function(e) {
                    return function(t) {
                        return 0 < at(e, t).length
                    }
                }),
                contains: lt(function(e) {
                    return e = e.replace(et, nt),
                    function(t) {
                        return -1 < (t.textContent || o(t)).indexOf(e)
                    }
                }),
                lang: lt(function(n) {
                    return $.test(n || "") || at.error("unsupported lang: " + n),
                    n = n.replace(et, nt).toLowerCase(),
                    function(t) {
                        var e;
                        do {
                            if (e = E ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var e = n.location && n.location.hash;
                    return e && e.slice(1) === t.id
                },
                root: function(t) {
                    return t === s
                },
                focus: function(t) {
                    return t === w.activeElement && (!w.hasFocus || w.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: vt(!1),
                disabled: vt(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !D.pseudos.empty(t)
                },
                header: function(t) {
                    return K.test(t.nodeName)
                },
                input: function(t) {
                    return Q.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: mt(function() {
                    return [0]
                }),
                last: mt(function(t, e) {
                    return [e - 1]
                }),
                eq: mt(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: mt(function(t, e) {
                    for (var n = 0; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                odd: mt(function(t, e) {
                    for (var n = 1; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                lt: mt(function(t, e, n) {
                    for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i; )
                        t.push(i);
                    return t
                }),
                gt: mt(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e; )
                        t.push(i);
                    return t
                })
            }
        }).pseudos.nth = D.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            D.pseudos[t] = dt(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            D.pseudos[t] = pt(t);
        function yt() {}
        function _t(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++)
                i += t[e].value;
            return i
        }
        function Dt(a, t, e) {
            var u = t.dir
              , l = t.next
              , c = l || u
              , f = e && "parentNode" === c
              , h = i++;
            return t.first ? function(t, e, n) {
                for (; t = t[u]; )
                    if (1 === t.nodeType || f)
                        return a(t, e, n);
                return !1
            }
            : function(t, e, n) {
                var i, r, o, s = [A, h];
                if (n) {
                    for (; t = t[u]; )
                        if ((1 === t.nodeType || f) && a(t, e, n))
                            return !0
                } else
                    for (; t = t[u]; )
                        if (1 === t.nodeType || f)
                            if (r = (o = t[T] || (t[T] = {}))[t.uniqueID] || (o[t.uniqueID] = {}),
                            l && l === t.nodeName.toLowerCase())
                                t = t[u] || t;
                            else {
                                if ((i = r[c]) && i[0] === A && i[1] === h)
                                    return s[2] = i[2];
                                if ((r[c] = s)[2] = a(t, e, n))
                                    return !0
                            }
                return !1
            }
        }
        function bt(r) {
            return 1 < r.length ? function(t, e, n) {
                for (var i = r.length; i--; )
                    if (!r[i](t, e, n))
                        return !1;
                return !0
            }
            : r[0]
        }
        function xt(t, e, n, i, r) {
            for (var o, s = [], a = 0, u = t.length, l = null != e; a < u; a++)
                (o = t[a]) && (n && !n(o, i, r) || (s.push(o),
                l && e.push(a)));
            return s
        }
        function wt(d, p, v, m, g, t) {
            return m && !m[T] && (m = wt(m)),
            g && !g[T] && (g = wt(g, t)),
            lt(function(t, e, n, i) {
                var r, o, s, a = [], u = [], l = e.length, c = t || function(t, e, n) {
                    for (var i = 0, r = e.length; i < r; i++)
                        at(t, e[i], n);
                    return n
                }(p || "*", n.nodeType ? [n] : n, []), f = !d || !t && p ? c : xt(c, a, d, n, i), h = v ? g || (t ? d : l || m) ? [] : e : f;
                if (v && v(f, h, n, i),
                m)
                    for (r = xt(h, u),
                    m(r, [], n, i),
                    o = r.length; o--; )
                        (s = r[o]) && (h[u[o]] = !(f[u[o]] = s));
                if (t) {
                    if (g || d) {
                        if (g) {
                            for (r = [],
                            o = h.length; o--; )
                                (s = h[o]) && r.push(f[o] = s);
                            g(null, h = [], r, i)
                        }
                        for (o = h.length; o--; )
                            (s = h[o]) && -1 < (r = g ? P(t, s) : a[o]) && (t[r] = !(e[r] = s))
                    }
                } else
                    h = xt(h === e ? h.splice(l, h.length) : h),
                    g ? g(null, e, h, i) : L.apply(e, h)
            })
        }
        function Et(t) {
            for (var r, e, n, i = t.length, o = D.relative[t[0].type], s = o || D.relative[" "], a = o ? 1 : 0, u = Dt(function(t) {
                return t === r
            }, s, !0), l = Dt(function(t) {
                return -1 < P(r, t)
            }, s, !0), c = [function(t, e, n) {
                var i = !o && (n || e !== b) || ((r = e).nodeType ? u(t, e, n) : l(t, e, n));
                return r = null,
                i
            }
            ]; a < i; a++)
                if (e = D.relative[t[a].type])
                    c = [Dt(bt(c), e)];
                else {
                    if ((e = D.filter[t[a].type].apply(null, t[a].matches))[T]) {
                        for (n = ++a; n < i && !D.relative[t[n].type]; n++)
                            ;
                        return wt(1 < a && bt(c), 1 < a && _t(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(W, "$1"), e, a < n && Et(t.slice(a, n)), n < i && Et(t = t.slice(n)), n < i && _t(t))
                    }
                    c.push(e)
                }
            return bt(c)
        }
        return yt.prototype = D.filters = D.pseudos,
        D.setFilters = new yt,
        p = at.tokenize = function(t, e) {
            var n, i, r, o, s, a, u, l = _[t + " "];
            if (l)
                return e ? 0 : l.slice(0);
            for (s = t,
            a = [],
            u = D.preFilter; s; ) {
                for (o in n && !(i = q.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                a.push(r = [])),
                n = !1,
                (i = V.exec(s)) && (n = i.shift(),
                r.push({
                    value: n,
                    type: i[0].replace(W, " ")
                }),
                s = s.slice(n.length)),
                D.filter)
                    !(i = U[o].exec(s)) || u[o] && !(i = u[o](i)) || (n = i.shift(),
                    r.push({
                        value: n,
                        type: o,
                        matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return e ? s.length : s ? at.error(t) : _(t, a).slice(0)
        }
        ,
        f = at.compile = function(t, e) {
            var n, m, g, y, _, i, r = [], o = [], s = C[t + " "];
            if (!s) {
                for (e || (e = p(t)),
                n = e.length; n--; )
                    (s = Et(e[n]))[T] ? r.push(s) : o.push(s);
                (s = C(t, (m = o,
                y = 0 < (g = r).length,
                _ = 0 < m.length,
                i = function(t, e, n, i, r) {
                    var o, s, a, u = 0, l = "0", c = t && [], f = [], h = b, d = t || _ && D.find.TAG("*", r), p = A += null == h ? 1 : Math.random() || .1, v = d.length;
                    for (r && (b = e == w || e || r); l !== v && null != (o = d[l]); l++) {
                        if (_ && o) {
                            for (s = 0,
                            e || o.ownerDocument == w || (x(o),
                            n = !E); a = m[s++]; )
                                if (a(o, e || w, n)) {
                                    i.push(o);
                                    break
                                }
                            r && (A = p)
                        }
                        y && ((o = !a && o) && u--,
                        t && c.push(o))
                    }
                    if (u += l,
                    y && l !== u) {
                        for (s = 0; a = g[s++]; )
                            a(c, f, e, n);
                        if (t) {
                            if (0 < u)
                                for (; l--; )
                                    c[l] || f[l] || (f[l] = O.call(i));
                            f = xt(f)
                        }
                        L.apply(i, f),
                        r && !t && 0 < f.length && 1 < u + g.length && at.uniqueSort(i)
                    }
                    return r && (A = p,
                    b = h),
                    c
                }
                ,
                y ? lt(i) : i))).selector = t
            }
            return s
        }
        ,
        v = at.select = function(t, e, n, i) {
            var r, o, s, a, u, l = "function" == typeof t && t, c = !i && p(t = l.selector || t);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === e.nodeType && E && D.relative[o[1].type]) {
                    if (!(e = (D.find.ID(s.matches[0].replace(et, nt), e) || [])[0]))
                        return n;
                    l && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (r = U.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r],
                !D.relative[a = s.type]); )
                    if ((u = D.find[a]) && (i = u(s.matches[0].replace(et, nt), tt.test(o[0].type) && gt(e.parentNode) || e))) {
                        if (o.splice(r, 1),
                        !(t = i.length && _t(o)))
                            return L.apply(n, i),
                            n;
                        break
                    }
            }
            return (l || f(t, c))(i, e, !E, n, !e || tt.test(t) && gt(e.parentNode) || e),
            n
        }
        ,
        d.sortStable = T.split("").sort(k).join("") === T,
        d.detectDuplicates = !!l,
        x(),
        d.sortDetached = ct(function(t) {
            return 1 & t.compareDocumentPosition(w.createElement("fieldset"))
        }),
        ct(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || ft("type|href|height|width", function(t, e, n) {
            if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ct(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || ft("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue
        }),
        ct(function(t) {
            return null == t.getAttribute("disabled")
        }) || ft(j, function(t, e, n) {
            var i;
            if (!n)
                return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }),
        at
    }(w);
    T.find = d,
    T.expr = d.selectors,
    T.expr[":"] = T.expr.pseudos,
    T.uniqueSort = T.unique = d.uniqueSort,
    T.text = d.getText,
    T.isXMLDoc = d.isXML,
    T.contains = d.contains,
    T.escapeSelector = d.escape;
    var p = function(t, e, n) {
        for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (r && T(t).is(n))
                    break;
                i.push(t)
            }
        return i
    }
      , x = function(t, e) {
        for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
        return n
    }
      , A = T.expr.match.needsContext;
    function C(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function k(t, n, i) {
        return y(n) ? T.grep(t, function(t, e) {
            return !!n.call(t, e, t) !== i
        }) : n.nodeType ? T.grep(t, function(t) {
            return t === n !== i
        }) : "string" != typeof n ? T.grep(t, function(t) {
            return -1 < r.call(n, t) !== i
        }) : T.filter(n, t, i)
    }
    T.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType ? T.find.matchesSelector(i, t) ? [i] : [] : T.find.matches(t, T.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    T.fn.extend({
        find: function(t) {
            var e, n, i = this.length, r = this;
            if ("string" != typeof t)
                return this.pushStack(T(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (T.contains(r[e], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            e = 0; e < i; e++)
                T.find(t, r[e], n);
            return 1 < i ? T.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(k(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(k(this, t || [], !0))
        },
        is: function(t) {
            return !!k(this, "string" == typeof t && A.test(t) ? T(t) : t || [], !1).length
        }
    });
    var F, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function(t, e, n) {
        var i, r;
        if (!t)
            return this;
        if (n = n || F,
        "string" != typeof t)
            return t.nodeType ? (this[0] = t,
            this.length = 1,
            this) : y(t) ? void 0 !== n.ready ? n.ready(t) : t(T) : T.makeArray(t, this);
        if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : O.exec(t)) || !i[1] && e)
            return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
        if (i[1]) {
            if (e = e instanceof T ? e[0] : e,
            T.merge(this, T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : E, !0)),
            S.test(i[1]) && T.isPlainObject(e))
                for (i in e)
                    y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this
        }
        return (r = E.getElementById(i[2])) && (this[0] = r,
        this.length = 1),
        this
    }
    ).prototype = T.fn,
    F = T(E);
    var M = /^(?:parents|prev(?:Until|All))/
      , L = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function B(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    T.fn.extend({
        has: function(t) {
            var e = T(t, this)
              , n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (T.contains(this, e[t]))
                        return !0
            })
        },
        closest: function(t, e) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof t && T(t);
            if (!A.test(t))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? T.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? r.call(T(t), this[0]) : r.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    T.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return p(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return p(t, "parentNode", n)
        },
        next: function(t) {
            return B(t, "nextSibling")
        },
        prev: function(t) {
            return B(t, "previousSibling")
        },
        nextAll: function(t) {
            return p(t, "nextSibling")
        },
        prevAll: function(t) {
            return p(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return p(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return p(t, "previousSibling", n)
        },
        siblings: function(t) {
            return x((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return x(t.firstChild)
        },
        contents: function(t) {
            return null != t.contentDocument && i(t.contentDocument) ? t.contentDocument : (C(t, "template") && (t = t.content || t),
            T.merge([], t.childNodes))
        }
    }, function(i, r) {
        T.fn[i] = function(t, e) {
            var n = T.map(this, r, t);
            return "Until" !== i.slice(-5) && (e = t),
            e && "string" == typeof e && (n = T.filter(e, n)),
            1 < this.length && (L[i] || T.uniqueSort(n),
            M.test(i) && n.reverse()),
            this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function j(t) {
        return t
    }
    function R(t) {
        throw t
    }
    function I(t, e, n, i) {
        var r;
        try {
            t && y(r = t.promise) ? r.call(t).done(e).fail(n) : t && y(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }
    T.Callbacks = function(i) {
        var t, n;
        i = "string" == typeof i ? (t = i,
        n = {},
        T.each(t.match(P) || [], function(t, e) {
            n[e] = !0
        }),
        n) : T.extend({}, i);
        var r, e, o, s, a = [], u = [], l = -1, c = function() {
            for (s = s || i.once,
            o = r = !0; u.length; l = -1)
                for (e = u.shift(); ++l < a.length; )
                    !1 === a[l].apply(e[0], e[1]) && i.stopOnFalse && (l = a.length,
                    e = !1);
            i.memory || (e = !1),
            r = !1,
            s && (a = e ? [] : "")
        }, f = {
            add: function() {
                return a && (e && !r && (l = a.length - 1,
                u.push(e)),
                function n(t) {
                    T.each(t, function(t, e) {
                        y(e) ? i.unique && f.has(e) || a.push(e) : e && e.length && "string" !== b(e) && n(e)
                    })
                }(arguments),
                e && !r && c()),
                this
            },
            remove: function() {
                return T.each(arguments, function(t, e) {
                    for (var n; -1 < (n = T.inArray(e, a, n)); )
                        a.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(t) {
                return t ? -1 < T.inArray(t, a) : 0 < a.length
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return s = u = [],
                a = e = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return s = u = [],
                e || r || (a = e = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(t, e) {
                return s || (e = [t, (e = e || []).slice ? e.slice() : e],
                u.push(e),
                r || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    T.extend({
        Deferred: function(t) {
            var o = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , s = {
                state: function() {
                    return r
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                catch: function(t) {
                    return s.then(null, t)
                },
                pipe: function() {
                    var r = arguments;
                    return T.Deferred(function(i) {
                        T.each(o, function(t, e) {
                            var n = y(r[e[4]]) && r[e[4]];
                            a[e[1]](function() {
                                var t = n && n.apply(this, arguments);
                                t && y(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this, n ? [t] : arguments)
                            })
                        }),
                        r = null
                    }).promise()
                },
                then: function(e, n, i) {
                    var u = 0;
                    function l(r, o, s, a) {
                        return function() {
                            var n = this
                              , i = arguments
                              , t = function() {
                                var t, e;
                                if (!(r < u)) {
                                    if ((t = s.apply(n, i)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    e = t && ("object" == typeof t || "function" == typeof t) && t.then,
                                    y(e) ? a ? e.call(t, l(u, o, j, a), l(u, o, R, a)) : (u++,
                                    e.call(t, l(u, o, j, a), l(u, o, R, a), l(u, o, j, o.notifyWith))) : (s !== j && (n = void 0,
                                    i = [t]),
                                    (a || o.resolveWith)(n, i))
                                }
                            }
                              , e = a ? t : function() {
                                try {
                                    t()
                                } catch (t) {
                                    T.Deferred.exceptionHook && T.Deferred.exceptionHook(t, e.stackTrace),
                                    u <= r + 1 && (s !== R && (n = void 0,
                                    i = [t]),
                                    o.rejectWith(n, i))
                                }
                            }
                            ;
                            r ? e() : (T.Deferred.getStackHook && (e.stackTrace = T.Deferred.getStackHook()),
                            w.setTimeout(e))
                        }
                    }
                    return T.Deferred(function(t) {
                        o[0][3].add(l(0, t, y(i) ? i : j, t.notifyWith)),
                        o[1][3].add(l(0, t, y(e) ? e : j)),
                        o[2][3].add(l(0, t, y(n) ? n : R))
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? T.extend(t, s) : s
                }
            }
              , a = {};
            return T.each(o, function(t, e) {
                var n = e[2]
                  , i = e[5];
                s[e[1]] = n.add,
                i && n.add(function() {
                    r = i
                }, o[3 - t][2].disable, o[3 - t][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(e[3].fire),
                a[e[0]] = function() {
                    return a[e[0] + "With"](this === a ? void 0 : this, arguments),
                    this
                }
                ,
                a[e[0] + "With"] = n.fireWith
            }),
            s.promise(a),
            t && t.call(a, a),
            a
        },
        when: function(t) {
            var n = arguments.length
              , e = n
              , i = Array(e)
              , r = a.call(arguments)
              , o = T.Deferred()
              , s = function(e) {
                return function(t) {
                    i[e] = this,
                    r[e] = 1 < arguments.length ? a.call(arguments) : t,
                    --n || o.resolveWith(i, r)
                }
            };
            if (n <= 1 && (I(t, o.done(s(e)).resolve, o.reject, !n),
            "pending" === o.state() || y(r[e] && r[e].then)))
                return o.then();
            for (; e--; )
                I(r[e], s(e), o.reject);
            return o.promise()
        }
    });
    var N = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function(t, e) {
        w.console && w.console.warn && t && N.test(t.name) && w.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
    }
    ,
    T.readyException = function(t) {
        w.setTimeout(function() {
            throw t
        })
    }
    ;
    var H = T.Deferred();
    function z() {
        E.removeEventListener("DOMContentLoaded", z),
        w.removeEventListener("load", z),
        T.ready()
    }
    T.fn.ready = function(t) {
        return H.then(t).catch(function(t) {
            T.readyException(t)
        }),
        this
    }
    ,
    T.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --T.readyWait : T.isReady) || (T.isReady = !0) !== t && 0 < --T.readyWait || H.resolveWith(E, [T])
        }
    }),
    T.ready.then = H.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? w.setTimeout(T.ready) : (E.addEventListener("DOMContentLoaded", z),
    w.addEventListener("load", z));
    var W = function(t, e, n, i, r, o, s) {
        var a = 0
          , u = t.length
          , l = null == n;
        if ("object" === b(n))
            for (a in r = !0,
            n)
                W(t, e, a, n[a], !0, o, s);
        else if (void 0 !== i && (r = !0,
        y(i) || (s = !0),
        l && (e = s ? (e.call(t, i),
        null) : (l = e,
        function(t, e, n) {
            return l.call(T(t), n)
        }
        )),
        e))
            for (; a < u; a++)
                e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : l ? e.call(t) : u ? e(t[0], n) : o
    }
      , q = /^-ms-/
      , V = /-([a-z])/g;
    function X(t, e) {
        return e.toUpperCase()
    }
    function Y(t) {
        return t.replace(q, "ms-").replace(V, X)
    }
    var $ = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    function U() {
        this.expando = T.expando + U.uid++
    }
    U.uid = 1,
    U.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {},
            $(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))),
            e
        },
        set: function(t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e)
                r[Y(e)] = n;
            else
                for (i in e)
                    r[Y(i)] = e[i];
            return r
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n),
            void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e))in i ? [e] : e.match(P) || []).length;
                    for (; n--; )
                        delete i[e[n]]
                }
                (void 0 === e || T.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !T.isEmptyObject(e)
        }
    };
    var G = new U
      , Q = new U
      , K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Z = /[A-Z]/g;
    function J(t, e, n) {
        var i, r;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Z, "-$&").toLowerCase(),
            "string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : K.test(r) ? JSON.parse(r) : r)
                } catch (t) {}
                Q.set(t, e, n)
            } else
                n = void 0;
        return n
    }
    T.extend({
        hasData: function(t) {
            return Q.hasData(t) || G.hasData(t)
        },
        data: function(t, e, n) {
            return Q.access(t, e, n)
        },
        removeData: function(t, e) {
            Q.remove(t, e)
        },
        _data: function(t, e, n) {
            return G.access(t, e, n)
        },
        _removeData: function(t, e) {
            G.remove(t, e)
        }
    }),
    T.fn.extend({
        data: function(n, t) {
            var e, i, r, o = this[0], s = o && o.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    Q.set(this, n)
                }) : W(this, function(t) {
                    var e;
                    if (o && void 0 === t)
                        return void 0 !== (e = Q.get(o, n)) ? e : void 0 !== (e = J(o, n)) ? e : void 0;
                    this.each(function() {
                        Q.set(this, n, t)
                    })
                }, null, t, 1 < arguments.length, null, !0);
            if (this.length && (r = Q.get(o),
            1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                for (e = s.length; e--; )
                    s[e] && 0 === (i = s[e].name).indexOf("data-") && (i = Y(i.slice(5)),
                    J(o, i, r[i]));
                G.set(o, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function(t) {
            return this.each(function() {
                Q.remove(this, t)
            })
        }
    }),
    T.extend({
        queue: function(t, e, n) {
            var i;
            if (t)
                return e = (e || "fx") + "queue",
                i = G.get(t, e),
                n && (!i || Array.isArray(n) ? i = G.access(t, e, T.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = T.queue(t, e)
              , i = n.length
              , r = n.shift()
              , o = T._queueHooks(t, e);
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === e && n.unshift("inprogress"),
            delete o.stop,
            r.call(t, function() {
                T.dequeue(t, e)
            }, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return G.get(t, n) || G.access(t, n, {
                empty: T.Callbacks("once memory").add(function() {
                    G.remove(t, [e + "queue", n])
                })
            })
        }
    }),
    T.fn.extend({
        queue: function(e, n) {
            var t = 2;
            return "string" != typeof e && (n = e,
            e = "fx",
            t--),
            arguments.length < t ? T.queue(this[0], e) : void 0 === n ? this : this.each(function() {
                var t = T.queue(this, e, n);
                T._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && T.dequeue(this, e)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                T.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1, r = T.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t,
            t = void 0),
            t = t || "fx"; s--; )
                (n = G.get(o[s], t + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            r.promise(e)
        }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$","i")
      , nt = ["Top", "Right", "Bottom", "Left"]
      , it = E.documentElement
      , rt = function(t) {
        return T.contains(t.ownerDocument, t)
    }
      , ot = {
        composed: !0
    };
    it.getRootNode && (rt = function(t) {
        return T.contains(t.ownerDocument, t) || t.getRootNode(ot) === t.ownerDocument
    }
    );
    var st = function(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && rt(t) && "none" === T.css(t, "display")
    };
    function at(t, e, n, i) {
        var r, o, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return T.css(t, e, "")
        }
        , u = a(), l = n && n[3] || (T.cssNumber[e] ? "" : "px"), c = t.nodeType && (T.cssNumber[e] || "px" !== l && +u) && et.exec(T.css(t, e));
        if (c && c[3] !== l) {
            for (u /= 2,
            l = l || c[3],
            c = +u || 1; s--; )
                T.style(t, e, c + l),
                (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0),
                c /= o;
            c *= 2,
            T.style(t, e, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        r = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = l,
        i.start = c,
        i.end = r)),
        r
    }
    var ut = {};
    function lt(t, e) {
        for (var n, i, r, o, s, a, u, l = [], c = 0, f = t.length; c < f; c++)
            (i = t[c]).style && (n = i.style.display,
            e ? ("none" === n && (l[c] = G.get(i, "display") || null,
            l[c] || (i.style.display = "")),
            "" === i.style.display && st(i) && (l[c] = (u = s = o = void 0,
            s = (r = i).ownerDocument,
            a = r.nodeName,
            (u = ut[a]) || (o = s.body.appendChild(s.createElement(a)),
            u = T.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ut[a] = u)))) : "none" !== n && (l[c] = "none",
            G.set(i, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (t[c].style.display = l[c]);
        return t
    }
    T.fn.extend({
        show: function() {
            return lt(this, !0)
        },
        hide: function() {
            return lt(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                st(this) ? T(this).show() : T(this).hide()
            })
        }
    });
    var ct, ft, ht = /^(?:checkbox|radio)$/i, dt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, pt = /^$|^module$|\/(?:java|ecma)script/i;
    ct = E.createDocumentFragment().appendChild(E.createElement("div")),
    (ft = E.createElement("input")).setAttribute("type", "radio"),
    ft.setAttribute("checked", "checked"),
    ft.setAttribute("name", "t"),
    ct.appendChild(ft),
    g.checkClone = ct.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ct.innerHTML = "<textarea>x</textarea>",
    g.noCloneChecked = !!ct.cloneNode(!0).lastChild.defaultValue,
    ct.innerHTML = "<option></option>",
    g.option = !!ct.lastChild;
    var vt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function mt(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
        void 0 === e || e && C(t, e) ? T.merge([t], n) : n
    }
    function gt(t, e) {
        for (var n = 0, i = t.length; n < i; n++)
            G.set(t[n], "globalEval", !e || G.get(e[n], "globalEval"))
    }
    vt.tbody = vt.tfoot = vt.colgroup = vt.caption = vt.thead,
    vt.th = vt.td,
    g.option || (vt.optgroup = vt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var yt = /<|&#?\w+;/;
    function _t(t, e, n, i, r) {
        for (var o, s, a, u, l, c, f = e.createDocumentFragment(), h = [], d = 0, p = t.length; d < p; d++)
            if ((o = t[d]) || 0 === o)
                if ("object" === b(o))
                    T.merge(h, o.nodeType ? [o] : o);
                else if (yt.test(o)) {
                    for (s = s || f.appendChild(e.createElement("div")),
                    a = (dt.exec(o) || ["", ""])[1].toLowerCase(),
                    u = vt[a] || vt._default,
                    s.innerHTML = u[1] + T.htmlPrefilter(o) + u[2],
                    c = u[0]; c--; )
                        s = s.lastChild;
                    T.merge(h, s.childNodes),
                    (s = f.firstChild).textContent = ""
                } else
                    h.push(e.createTextNode(o));
        for (f.textContent = "",
        d = 0; o = h[d++]; )
            if (i && -1 < T.inArray(o, i))
                r && r.push(o);
            else if (l = rt(o),
            s = mt(f.appendChild(o), "script"),
            l && gt(s),
            n)
                for (c = 0; o = s[c++]; )
                    pt.test(o.type || "") && n.push(o);
        return f
    }
    var Dt = /^([^.]*)(?:\.(.+)|)/;
    function bt() {
        return !0
    }
    function xt() {
        return !1
    }
    function wt(t, e) {
        return t === function() {
            try {
                return E.activeElement
            } catch (t) {}
        }() == ("focus" === e)
    }
    function Et(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            e)
                Et(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        !1 === r)
            r = xt;
        else if (!r)
            return t;
        return 1 === o && (s = r,
        (r = function(t) {
            return T().off(t),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = T.guid++)),
        t.each(function() {
            T.event.add(this, e, r, i, n)
        })
    }
    function Tt(t, r, o) {
        o ? (G.set(t, r, !1),
        T.event.add(t, r, {
            namespace: !1,
            handler: function(t) {
                var e, n, i = G.get(this, r);
                if (1 & t.isTrigger && this[r]) {
                    if (i.length)
                        (T.event.special[r] || {}).delegateType && t.stopPropagation();
                    else if (i = a.call(arguments),
                    G.set(this, r, i),
                    e = o(this, r),
                    this[r](),
                    i !== (n = G.get(this, r)) || e ? G.set(this, r, !1) : n = {},
                    i !== n)
                        return t.stopImmediatePropagation(),
                        t.preventDefault(),
                        n && n.value
                } else
                    i.length && (G.set(this, r, {
                        value: T.event.trigger(T.extend(i[0], T.Event.prototype), i.slice(1), this)
                    }),
                    t.stopImmediatePropagation())
            }
        })) : void 0 === G.get(t, r) && T.event.add(t, r, bt)
    }
    T.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, u, l, c, f, h, d, p, v, m = G.get(e);
            if ($(e))
                for (n.handler && (n = (o = n).handler,
                r = o.selector),
                r && T.find.matchesSelector(it, r),
                n.guid || (n.guid = T.guid++),
                (u = m.events) || (u = m.events = Object.create(null)),
                (s = m.handle) || (s = m.handle = function(t) {
                    return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(P) || [""]).length; l--; )
                    d = v = (a = Dt.exec(t[l]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    d && (f = T.event.special[d] || {},
                    d = (r ? f.delegateType : f.bindType) || d,
                    f = T.event.special[d] || {},
                    c = T.extend({
                        type: d,
                        origType: v,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && T.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o),
                    (h = u[d]) || ((h = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(d, s)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    r ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                    T.event.global[d] = !0)
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, u, l, c, f, h, d, p, v, m = G.hasData(t) && G.get(t);
            if (m && (u = m.events)) {
                for (l = (e = (e || "").match(P) || [""]).length; l--; )
                    if (d = v = (a = Dt.exec(e[l]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    d) {
                        for (f = T.event.special[d] || {},
                        h = u[d = (i ? f.delegateType : f.bindType) || d] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = h.length; o--; )
                            c = h[o],
                            !r && v !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1),
                            c.selector && h.delegateCount--,
                            f.remove && f.remove.call(t, c));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(t, p, m.handle) || T.removeEvent(t, d, m.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            T.event.remove(t, d + e[l], n, i, !0);
                T.isEmptyObject(u) && G.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, i, r, o, s, a = new Array(arguments.length), u = T.event.fix(t), l = (G.get(this, "events") || Object.create(null))[u.type] || [], c = T.event.special[u.type] || {};
            for (a[0] = u,
            e = 1; e < arguments.length; e++)
                a[e] = arguments[e];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (s = T.event.handlers.call(this, u, l),
                e = 0; (r = s[e++]) && !u.isPropagationStopped(); )
                    for (u.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (i = ((T.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (u.result = i) && (u.preventDefault(),
                        u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s, a = [], u = e.delegateCount, l = t.target;
            if (u && l.nodeType && !("click" === t.type && 1 <= t.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== t.type || !0 !== l.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < u; n++)
                            void 0 === s[r = (i = e[n]).selector + " "] && (s[r] = i.needsContext ? -1 < T(r, this).index(l) : T.find(r, this, null, [l]).length),
                            s[r] && o.push(i);
                        o.length && a.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < e.length && a.push({
                elem: l,
                handlers: e.slice(u)
            }),
            a
        },
        addProp: function(e, t) {
            Object.defineProperty(T.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: y(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(t) {
            return t[T.expando] ? t : new T.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(t) {
                    var e = this || t;
                    return ht.test(e.type) && e.click && C(e, "input") && Tt(e, "click", bt),
                    !1
                },
                trigger: function(t) {
                    var e = this || t;
                    return ht.test(e.type) && e.click && C(e, "input") && Tt(e, "click"),
                    !0
                },
                _default: function(t) {
                    var e = t.target;
                    return ht.test(e.type) && e.click && C(e, "input") && G.get(e, "click") || C(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    },
    T.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }
    ,
    T.Event = function(t, e) {
        if (!(this instanceof T.Event))
            return new T.Event(t,e);
        t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? bt : xt,
        this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
        this.currentTarget = t.currentTarget,
        this.relatedTarget = t.relatedTarget) : this.type = t,
        e && T.extend(this, e),
        this.timeStamp = t && t.timeStamp || Date.now(),
        this[T.expando] = !0
    }
    ,
    T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: xt,
        isPropagationStopped: xt,
        isImmediatePropagationStopped: xt,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = bt,
            t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = bt,
            t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = bt,
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    T.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, T.event.addProp),
    T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        T.event.special[t] = {
            setup: function() {
                return Tt(this, t, wt),
                !1
            },
            trigger: function() {
                return Tt(this, t),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: e
        }
    }),
    T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, r) {
        T.event.special[t] = {
            delegateType: r,
            bindType: r,
            handle: function(t) {
                var e, n = t.relatedTarget, i = t.handleObj;
                return n && (n === this || T.contains(this, n)) || (t.type = i.origType,
                e = i.handler.apply(this, arguments),
                t.type = r),
                e
            }
        }
    }),
    T.fn.extend({
        on: function(t, e, n, i) {
            return Et(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return Et(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj,
                T(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" != typeof t)
                return !1 !== e && "function" != typeof e || (n = e,
                e = void 0),
                !1 === n && (n = xt),
                this.each(function() {
                    T.event.remove(this, t, n, e)
                });
            for (r in t)
                this.off(r, e, t[r]);
            return this
        }
    });
    var At = /<script|<style|<link/i
      , Ct = /checked\s*(?:[^=]|=\s*.checked.)/i
      , St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function kt(t, e) {
        return C(t, "table") && C(11 !== e.nodeType ? e : e.firstChild, "tr") && T(t).children("tbody")[0] || t
    }
    function Ft(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
        t
    }
    function Ot(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
        t
    }
    function Mt(t, e) {
        var n, i, r, o, s, a;
        if (1 === e.nodeType) {
            if (G.hasData(t) && (a = G.get(t).events))
                for (r in G.remove(e, "handle events"),
                a)
                    for (n = 0,
                    i = a[r].length; n < i; n++)
                        T.event.add(e, r, a[r][n]);
            Q.hasData(t) && (o = Q.access(t),
            s = T.extend({}, o),
            Q.set(e, s))
        }
    }
    function Lt(n, i, r, o) {
        i = v(i);
        var t, e, s, a, u, l, c = 0, f = n.length, h = f - 1, d = i[0], p = y(d);
        if (p || 1 < f && "string" == typeof d && !g.checkClone && Ct.test(d))
            return n.each(function(t) {
                var e = n.eq(t);
                p && (i[0] = d.call(this, t, e.html())),
                Lt(e, i, r, o)
            });
        if (f && (e = (t = _t(i, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === t.childNodes.length && (t = e),
        e || o)) {
            for (a = (s = T.map(mt(t, "script"), Ft)).length; c < f; c++)
                u = t,
                c !== h && (u = T.clone(u, !0, !0),
                a && T.merge(s, mt(u, "script"))),
                r.call(n[c], u, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument,
                T.map(s, Ot),
                c = 0; c < a; c++)
                    u = s[c],
                    pt.test(u.type || "") && !G.access(u, "globalEval") && T.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? T._evalUrl && !u.noModule && T._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : D(u.textContent.replace(St, ""), u, l))
        }
        return n
    }
    function Bt(t, e, n) {
        for (var i, r = e ? T.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || T.cleanData(mt(i)),
            i.parentNode && (n && rt(i) && gt(mt(i, "script")),
            i.parentNode.removeChild(i));
        return t
    }
    T.extend({
        htmlPrefilter: function(t) {
            return t
        },
        clone: function(t, e, n) {
            var i, r, o, s, a, u, l, c = t.cloneNode(!0), f = rt(t);
            if (!(g.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t)))
                for (s = mt(c),
                i = 0,
                r = (o = mt(t)).length; i < r; i++)
                    a = o[i],
                    "input" === (l = (u = s[i]).nodeName.toLowerCase()) && ht.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
            if (e)
                if (n)
                    for (o = o || mt(t),
                    s = s || mt(c),
                    i = 0,
                    r = o.length; i < r; i++)
                        Mt(o[i], s[i]);
                else
                    Mt(t, c);
            return 0 < (s = mt(c, "script")).length && gt(s, !f && mt(t, "script")),
            c
        },
        cleanData: function(t) {
            for (var e, n, i, r = T.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if ($(n)) {
                    if (e = n[G.expando]) {
                        if (e.events)
                            for (i in e.events)
                                r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, e.handle);
                        n[G.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    T.fn.extend({
        detach: function(t) {
            return Bt(this, t, !0)
        },
        remove: function(t) {
            return Bt(this, t)
        },
        text: function(t) {
            return W(this, function(t) {
                return void 0 === t ? T.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return Lt(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || kt(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return Lt(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = kt(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return Lt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return Lt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (T.cleanData(mt(t, !1)),
                t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return T.clone(this, t, e)
            })
        },
        html: function(t) {
            return W(this, function(t) {
                var e = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t && !At.test(t) && !vt[(dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = T.htmlPrefilter(t);
                    try {
                        for (; n < i; n++)
                            1 === (e = this[n] || {}).nodeType && (T.cleanData(mt(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Lt(this, arguments, function(t) {
                var e = this.parentNode;
                T.inArray(this, n) < 0 && (T.cleanData(mt(this)),
                e && e.replaceChild(t, this))
            }, n)
        }
    }),
    T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, s) {
        T.fn[t] = function(t) {
            for (var e, n = [], i = T(t), r = i.length - 1, o = 0; o <= r; o++)
                e = o === r ? this : this.clone(!0),
                T(i[o])[s](e),
                u.apply(n, e.get());
            return this.pushStack(n)
        }
    });
    var Pt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$","i")
      , jt = function(t) {
        var e = t.ownerDocument.defaultView;
        return e && e.opener || (e = w),
        e.getComputedStyle(t)
    }
      , Rt = function(t, e, n) {
        var i, r, o = {};
        for (r in e)
            o[r] = t.style[r],
            t.style[r] = e[r];
        for (r in i = n.call(t),
        e)
            t.style[r] = o[r];
        return i
    }
      , It = new RegExp(nt.join("|"),"i");
    function Nt(t, e, n) {
        var i, r, o, s, a = t.style;
        return (n = n || jt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || rt(t) || (s = T.style(t, e)),
        !g.pixelBoxStyles() && Pt.test(s) && It.test(e) && (i = a.width,
        r = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = r,
        a.maxWidth = o)),
        void 0 !== s ? s + "" : s
    }
    function Ht(t, e) {
        return {
            get: function() {
                if (!t())
                    return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function t() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                it.appendChild(u).appendChild(l);
                var t = w.getComputedStyle(l);
                n = "1%" !== t.top,
                a = 12 === e(t.marginLeft),
                l.style.right = "60%",
                o = 36 === e(t.right),
                i = 36 === e(t.width),
                l.style.position = "absolute",
                r = 12 === e(l.offsetWidth / 3),
                it.removeChild(u),
                l = null
            }
        }
        function e(t) {
            return Math.round(parseFloat(t))
        }
        var n, i, r, o, s, a, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        g.clearCloneStyle = "content-box" === l.style.backgroundClip,
        T.extend(g, {
            boxSizingReliable: function() {
                return t(),
                i
            },
            pixelBoxStyles: function() {
                return t(),
                o
            },
            pixelPosition: function() {
                return t(),
                n
            },
            reliableMarginLeft: function() {
                return t(),
                a
            },
            scrollboxSize: function() {
                return t(),
                r
            },
            reliableTrDimensions: function() {
                var t, e, n, i;
                return null == s && (t = E.createElement("table"),
                e = E.createElement("tr"),
                n = E.createElement("div"),
                t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                e.style.cssText = "border:1px solid",
                e.style.height = "1px",
                n.style.height = "9px",
                n.style.display = "block",
                it.appendChild(t).appendChild(e).appendChild(n),
                i = w.getComputedStyle(e),
                s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === e.offsetHeight,
                it.removeChild(t)),
                s
            }
        }))
    }();
    var zt = ["Webkit", "Moz", "ms"]
      , Wt = E.createElement("div").style
      , qt = {};
    function Vt(t) {
        return T.cssProps[t] || qt[t] || (t in Wt ? t : qt[t] = function(t) {
            for (var e = t[0].toUpperCase() + t.slice(1), n = zt.length; n--; )
                if ((t = zt[n] + e)in Wt)
                    return t
        }(t) || t)
    }
    var Xt = /^(none|table(?!-c[ea]).+)/
      , Yt = /^--/
      , $t = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ut = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Gt(t, e, n) {
        var i = et.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }
    function Qt(t, e, n, i, r, o) {
        var s = "width" === e ? 1 : 0
          , a = 0
          , u = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (u += T.css(t, n + nt[s], !0, r)),
            i ? ("content" === n && (u -= T.css(t, "padding" + nt[s], !0, r)),
            "margin" !== n && (u -= T.css(t, "border" + nt[s] + "Width", !0, r))) : (u += T.css(t, "padding" + nt[s], !0, r),
            "padding" !== n ? u += T.css(t, "border" + nt[s] + "Width", !0, r) : a += T.css(t, "border" + nt[s] + "Width", !0, r));
        return !i && 0 <= o && (u += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - u - a - .5)) || 0),
        u
    }
    function Kt(t, e, n) {
        var i = jt(t)
          , r = (!g.boxSizingReliable() || n) && "border-box" === T.css(t, "boxSizing", !1, i)
          , o = r
          , s = Nt(t, e, i)
          , a = "offset" + e[0].toUpperCase() + e.slice(1);
        if (Pt.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!g.boxSizingReliable() && r || !g.reliableTrDimensions() && C(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === T.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === T.css(t, "boxSizing", !1, i),
        (o = a in t) && (s = t[a])),
        (s = parseFloat(s) || 0) + Qt(t, e, n || (r ? "border" : "content"), o, i, s) + "px"
    }
    function Zt(t, e, n, i, r) {
        return new Zt.prototype.init(t,e,n,i,r)
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = Nt(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = Y(e), u = Yt.test(e), l = t.style;
                if (u || (e = Vt(a)),
                s = T.cssHooks[e] || T.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e];
                "string" == (o = typeof n) && (r = et.exec(n)) && r[1] && (n = at(t, e, r),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += r && r[3] || (T.cssNumber[a] ? "" : "px")),
                g.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(t, n, i)) || (u ? l.setProperty(e, n) : l[e] = n))
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = Y(e);
            return Yt.test(e) || (e = Vt(a)),
            (s = T.cssHooks[e] || T.cssHooks[a]) && "get"in s && (r = s.get(t, !0, n)),
            void 0 === r && (r = Nt(t, e, i)),
            "normal" === r && e in Ut && (r = Ut[e]),
            "" === n || n ? (o = parseFloat(r),
            !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }),
    T.each(["height", "width"], function(t, u) {
        T.cssHooks[u] = {
            get: function(t, e, n) {
                if (e)
                    return !Xt.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Kt(t, u, n) : Rt(t, $t, function() {
                        return Kt(t, u, n)
                    })
            },
            set: function(t, e, n) {
                var i, r = jt(t), o = !g.scrollboxSize() && "absolute" === r.position, s = (o || n) && "border-box" === T.css(t, "boxSizing", !1, r), a = n ? Qt(t, u, n, s, r) : 0;
                return s && o && (a -= Math.ceil(t["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(r[u]) - Qt(t, u, "border", !1, r) - .5)),
                a && (i = et.exec(e)) && "px" !== (i[3] || "px") && (t.style[u] = e,
                e = T.css(t, u)),
                Gt(0, e, a)
            }
        }
    }),
    T.cssHooks.marginLeft = Ht(g.reliableMarginLeft, function(t, e) {
        if (e)
            return (parseFloat(Nt(t, "marginLeft")) || t.getBoundingClientRect().left - Rt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
    }),
    T.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        T.cssHooks[r + o] = {
            expand: function(t) {
                for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++)
                    n[r + nt[e] + o] = i[e] || i[e - 2] || i[0];
                return n
            }
        },
        "margin" !== r && (T.cssHooks[r + o].set = Gt)
    }),
    T.fn.extend({
        css: function(t, e) {
            return W(this, function(t, e, n) {
                var i, r, o = {}, s = 0;
                if (Array.isArray(e)) {
                    for (i = jt(t),
                    r = e.length; s < r; s++)
                        o[e[s]] = T.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? T.style(t, e, n) : T.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }),
    ((T.Tween = Zt).prototype = {
        constructor: Zt,
        init: function(t, e, n, i, r, o) {
            this.elem = t,
            this.prop = n,
            this.easing = r || T.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (T.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = Zt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Zt.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = Zt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Zt.propHooks._default.set(this),
            this
        }
    }).init.prototype = Zt.prototype,
    (Zt.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !T.cssHooks[t.prop] && null == t.elem.style[Vt(t.prop)] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = Zt.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    T.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    T.fx = Zt.prototype.init,
    T.fx.step = {};
    var Jt, te, ee, ne, ie = /^(?:toggle|show|hide)$/, re = /queueHooks$/;
    function oe() {
        te && (!1 === E.hidden && w.requestAnimationFrame ? w.requestAnimationFrame(oe) : w.setTimeout(oe, T.fx.interval),
        T.fx.tick())
    }
    function se() {
        return w.setTimeout(function() {
            Jt = void 0
        }),
        Jt = Date.now()
    }
    function ae(t, e) {
        var n, i = 0, r = {
            height: t
        };
        for (e = e ? 1 : 0; i < 4; i += 2 - e)
            r["margin" + (n = nt[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t),
        r
    }
    function ue(t, e, n) {
        for (var i, r = (le.tweeners[e] || []).concat(le.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, e, t))
                return i
    }
    function le(o, t, e) {
        var n, s, i = 0, r = le.prefilters.length, a = T.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (s)
                return !1;
            for (var t = Jt || se(), e = Math.max(0, l.startTime + l.duration - t), n = 1 - (e / l.duration || 0), i = 0, r = l.tweens.length; i < r; i++)
                l.tweens[i].run(n);
            return a.notifyWith(o, [l, n, e]),
            n < 1 && r ? e : (r || a.notifyWith(o, [l, 1, 0]),
            a.resolveWith(o, [l]),
            !1)
        }, l = a.promise({
            elem: o,
            props: T.extend({}, t),
            opts: T.extend(!0, {
                specialEasing: {},
                easing: T.easing._default
            }, e),
            originalProperties: t,
            originalOptions: e,
            startTime: Jt || se(),
            duration: e.duration,
            tweens: [],
            createTween: function(t, e) {
                var n = T.Tween(o, l.opts, t, e, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(t) {
                var e = 0
                  , n = t ? l.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; e < n; e++)
                    l.tweens[e].run(1);
                return t ? (a.notifyWith(o, [l, 1, 0]),
                a.resolveWith(o, [l, t])) : a.rejectWith(o, [l, t]),
                this
            }
        }), c = l.props;
        for (function(t, e) {
            var n, i, r, o, s;
            for (n in t)
                if (r = e[i = Y(n)],
                o = t[n],
                Array.isArray(o) && (r = o[1],
                o = t[n] = o[0]),
                n !== i && (t[i] = o,
                delete t[n]),
                (s = T.cssHooks[i]) && "expand"in s)
                    for (n in o = s.expand(o),
                    delete t[i],
                    o)
                        n in t || (t[n] = o[n],
                        e[n] = r);
                else
                    e[i] = r
        }(c, l.opts.specialEasing); i < r; i++)
            if (n = le.prefilters[i].call(l, o, c, l.opts))
                return y(n.stop) && (T._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return T.map(c, ue, l),
        y(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        T.fx.timer(T.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    T.Animation = T.extend(le, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return at(n.elem, t, et.exec(e), n),
                n
            }
            ]
        },
        tweener: function(t, e) {
            for (var n, i = 0, r = (t = y(t) ? (e = t,
            ["*"]) : t.match(P)).length; i < r; i++)
                n = t[i],
                le.tweeners[n] = le.tweeners[n] || [],
                le.tweeners[n].unshift(e)
        },
        prefilters: [function(t, e, n) {
            var i, r, o, s, a, u, l, c, f = "width"in e || "height"in e, h = this, d = {}, p = t.style, v = t.nodeType && st(t), m = G.get(t, "fxshow");
            for (i in n.queue || (null == (s = T._queueHooks(t, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            h.always(function() {
                h.always(function() {
                    s.unqueued--,
                    T.queue(t, "fx").length || s.empty.fire()
                })
            })),
            e)
                if (r = e[i],
                ie.test(r)) {
                    if (delete e[i],
                    o = o || "toggle" === r,
                    r === (v ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i])
                            continue;
                        v = !0
                    }
                    d[i] = m && m[i] || T.style(t, i)
                }
            if ((u = !T.isEmptyObject(e)) || !T.isEmptyObject(d))
                for (i in f && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                null == (l = m && m.display) && (l = G.get(t, "display")),
                "none" === (c = T.css(t, "display")) && (l ? c = l : (lt([t], !0),
                l = t.style.display || l,
                c = T.css(t, "display"),
                lt([t]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === T.css(t, "float") && (u || (h.done(function() {
                    p.display = l
                }),
                null == l && (c = p.display,
                l = "none" === c ? "" : c)),
                p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                h.always(function() {
                    p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (m ? "hidden"in m && (v = m.hidden) : m = G.access(t, "fxshow", {
                        display: l
                    }),
                    o && (m.hidden = !v),
                    v && lt([t], !0),
                    h.done(function() {
                        for (i in v || lt([t]),
                        G.remove(t, "fxshow"),
                        d)
                            T.style(t, i, d[i])
                    })),
                    u = ue(v ? m[i] : 0, i, h),
                    i in m || (m[i] = u.start,
                    v && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(t, e) {
            e ? le.prefilters.unshift(t) : le.prefilters.push(t)
        }
    }),
    T.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? T.extend({}, t) : {
            complete: n || !n && e || y(t) && t,
            duration: t,
            easing: n && e || e && !y(e) && e
        };
        return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            y(i.old) && i.old.call(this),
            i.queue && T.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    T.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(st).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(e, t, n, i) {
            var r = T.isEmptyObject(e)
              , o = T.speed(t, n, i)
              , s = function() {
                var t = le(this, T.extend({}, e), o);
                (r || G.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(r, t, o) {
            var s = function(t) {
                var e = t.stop;
                delete t.stop,
                e(o)
            };
            return "string" != typeof r && (o = t,
            t = r,
            r = void 0),
            t && this.queue(r || "fx", []),
            this.each(function() {
                var t = !0
                  , e = null != r && r + "queueHooks"
                  , n = T.timers
                  , i = G.get(this);
                if (e)
                    i[e] && i[e].stop && s(i[e]);
                else
                    for (e in i)
                        i[e] && i[e].stop && re.test(e) && s(i[e]);
                for (e = n.length; e--; )
                    n[e].elem !== this || null != r && n[e].queue !== r || (n[e].anim.stop(o),
                    t = !1,
                    n.splice(e, 1));
                !t && o || T.dequeue(this, r)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"),
            this.each(function() {
                var t, e = G.get(this), n = e[s + "queue"], i = e[s + "queueHooks"], r = T.timers, o = n ? n.length : 0;
                for (e.finish = !0,
                T.queue(this, s, []),
                i && i.stop && i.stop.call(this, !0),
                t = r.length; t--; )
                    r[t].elem === this && r[t].queue === s && (r[t].anim.stop(!0),
                    r.splice(t, 1));
                for (t = 0; t < o; t++)
                    n[t] && n[t].finish && n[t].finish.call(this);
                delete e.finish
            })
        }
    }),
    T.each(["toggle", "show", "hide"], function(t, i) {
        var r = T.fn[i];
        T.fn[i] = function(t, e, n) {
            return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(ae(i, !0), t, e, n)
        }
    }),
    T.each({
        slideDown: ae("show"),
        slideUp: ae("hide"),
        slideToggle: ae("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, i) {
        T.fn[t] = function(t, e, n) {
            return this.animate(i, t, e, n)
        }
    }),
    T.timers = [],
    T.fx.tick = function() {
        var t, e = 0, n = T.timers;
        for (Jt = Date.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || T.fx.stop(),
        Jt = void 0
    }
    ,
    T.fx.timer = function(t) {
        T.timers.push(t),
        T.fx.start()
    }
    ,
    T.fx.interval = 13,
    T.fx.start = function() {
        te || (te = !0,
        oe())
    }
    ,
    T.fx.stop = function() {
        te = null
    }
    ,
    T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    T.fn.delay = function(i, t) {
        return i = T.fx && T.fx.speeds[i] || i,
        t = t || "fx",
        this.queue(t, function(t, e) {
            var n = w.setTimeout(t, i);
            e.stop = function() {
                w.clearTimeout(n)
            }
        })
    }
    ,
    ee = E.createElement("input"),
    ne = E.createElement("select").appendChild(E.createElement("option")),
    ee.type = "checkbox",
    g.checkOn = "" !== ee.value,
    g.optSelected = ne.selected,
    (ee = E.createElement("input")).value = "t",
    ee.type = "radio",
    g.radioValue = "t" === ee.value;
    var ce, fe = T.expr.attrHandle;
    T.fn.extend({
        attr: function(t, e) {
            return W(this, T.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                T.removeAttr(this, t)
            })
        }
    }),
    T.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === t.getAttribute ? T.prop(t, e, n) : (1 === o && T.isXMLDoc(t) || (r = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? ce : void 0)),
                void 0 !== n ? null === n ? void T.removeAttr(t, e) : r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""),
                n) : r && "get"in r && null !== (i = r.get(t, e)) ? i : null == (i = T.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!g.radioValue && "radio" === e && C(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i = 0, r = e && e.match(P);
            if (r && 1 === t.nodeType)
                for (; n = r[i++]; )
                    t.removeAttribute(n)
        }
    }),
    ce = {
        set: function(t, e, n) {
            return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n),
            n
        }
    },
    T.each(T.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var s = fe[e] || T.find.attr;
        fe[e] = function(t, e, n) {
            var i, r, o = e.toLowerCase();
            return n || (r = fe[o],
            fe[o] = i,
            i = null != s(t, e, n) ? o : null,
            fe[o] = r),
            i
        }
    });
    var he = /^(?:input|select|textarea|button)$/i
      , de = /^(?:a|area)$/i;
    function pe(t) {
        return (t.match(P) || []).join(" ")
    }
    function ve(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    function me(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(P) || []
    }
    T.fn.extend({
        prop: function(t, e) {
            return W(this, T.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[T.propFix[t] || t]
            })
        }
    }),
    T.extend({
        prop: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && T.isXMLDoc(t) || (e = T.propFix[e] || e,
                r = T.propHooks[e]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = T.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : he.test(t.nodeName) || de.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    g.optSelected || (T.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        T.propFix[this.toLowerCase()] = this
    }),
    T.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, u = 0;
            if (y(e))
                return this.each(function(t) {
                    T(this).addClass(e.call(this, t, ve(this)))
                });
            if ((t = me(e)).length)
                for (; n = this[u++]; )
                    if (r = ve(n),
                    i = 1 === n.nodeType && " " + pe(r) + " ") {
                        for (s = 0; o = t[s++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = pe(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, u = 0;
            if (y(e))
                return this.each(function(t) {
                    T(this).removeClass(e.call(this, t, ve(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = me(e)).length)
                for (; n = this[u++]; )
                    if (r = ve(n),
                    i = 1 === n.nodeType && " " + pe(r) + " ") {
                        for (s = 0; o = t[s++]; )
                            for (; -1 < i.indexOf(" " + o + " "); )
                                i = i.replace(" " + o + " ", " ");
                        r !== (a = pe(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(r, e) {
            var o = typeof r
              , s = "string" === o || Array.isArray(r);
            return "boolean" == typeof e && s ? e ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function(t) {
                T(this).toggleClass(r.call(this, t, ve(this), e), e)
            }) : this.each(function() {
                var t, e, n, i;
                if (s)
                    for (e = 0,
                    n = T(this),
                    i = me(r); t = i[e++]; )
                        n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                else
                    void 0 !== r && "boolean" !== o || ((t = ve(this)) && G.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === r ? "" : G.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++]; )
                if (1 === n.nodeType && -1 < (" " + pe(ve(n)) + " ").indexOf(e))
                    return !0;
            return !1
        }
    });
    var ge = /\r/g;
    T.fn.extend({
        val: function(n) {
            var i, t, r, e = this[0];
            return arguments.length ? (r = y(n),
            this.each(function(t) {
                var e;
                1 === this.nodeType && (null == (e = r ? n.call(this, t, T(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = T.map(e, function(t) {
                    return null == t ? "" : t + ""
                })),
                (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set"in i && void 0 !== i.set(this, e, "value") || (this.value = e))
            })) : e ? (i = T.valHooks[e.type] || T.valHooks[e.nodeName.toLowerCase()]) && "get"in i && void 0 !== (t = i.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(ge, "") : null == t ? "" : t : void 0
        }
    }),
    T.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = T.find.attr(t, "value");
                    return null != e ? e : pe(T.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, n, i, r = t.options, o = t.selectedIndex, s = "select-one" === t.type, a = s ? null : [], u = s ? o + 1 : r.length;
                    for (i = o < 0 ? u : s ? o : 0; i < u; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !C(n.parentNode, "optgroup"))) {
                            if (e = T(n).val(),
                            s)
                                return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = T.makeArray(e), s = r.length; s--; )
                        ((i = r[s]).selected = -1 < T.inArray(T.valHooks.option.get(i), o)) && (n = !0);
                    return n || (t.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    T.each(["radio", "checkbox"], function() {
        T.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e))
                    return t.checked = -1 < T.inArray(T(t).val(), e)
            }
        },
        g.checkOn || (T.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    }),
    g.focusin = "onfocusin"in w;
    var ye = /^(?:focusinfocus|focusoutblur)$/
      , _e = function(t) {
        t.stopPropagation()
    };
    T.extend(T.event, {
        trigger: function(t, e, n, i) {
            var r, o, s, a, u, l, c, f, h = [n || E], d = m.call(t, "type") ? t.type : t, p = m.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = f = s = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !ye.test(d + T.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(),
            p.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (t = t[T.expando] ? t : new T.Event(d,"object" == typeof t && t)).isTrigger = i ? 2 : 3,
            t.namespace = p.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = n),
            e = null == e ? [t] : T.makeArray(e, [t]),
            c = T.event.special[d] || {},
            i || !c.trigger || !1 !== c.trigger.apply(n, e))) {
                if (!i && !c.noBubble && !_(n)) {
                    for (a = c.delegateType || d,
                    ye.test(a + d) || (o = o.parentNode); o; o = o.parentNode)
                        h.push(o),
                        s = o;
                    s === (n.ownerDocument || E) && h.push(s.defaultView || s.parentWindow || w)
                }
                for (r = 0; (o = h[r++]) && !t.isPropagationStopped(); )
                    f = o,
                    t.type = 1 < r ? a : c.bindType || d,
                    (l = (G.get(o, "events") || Object.create(null))[t.type] && G.get(o, "handle")) && l.apply(o, e),
                    (l = u && o[u]) && l.apply && $(o) && (t.result = l.apply(o, e),
                    !1 === t.result && t.preventDefault());
                return t.type = d,
                i || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), e) || !$(n) || u && y(n[d]) && !_(n) && ((s = n[u]) && (n[u] = null),
                T.event.triggered = d,
                t.isPropagationStopped() && f.addEventListener(d, _e),
                n[d](),
                t.isPropagationStopped() && f.removeEventListener(d, _e),
                T.event.triggered = void 0,
                s && (n[u] = s)),
                t.result
            }
        },
        simulate: function(t, e, n) {
            var i = T.extend(new T.Event, n, {
                type: t,
                isSimulated: !0
            });
            T.event.trigger(i, null, e)
        }
    }),
    T.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                T.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n)
                return T.event.trigger(t, e, n, !0)
        }
    }),
    g.focusin || T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var r = function(t) {
            T.event.simulate(i, t.target, T.event.fix(t))
        };
        T.event.special[i] = {
            setup: function() {
                var t = this.ownerDocument || this.document || this
                  , e = G.access(t, i);
                e || t.addEventListener(n, r, !0),
                G.access(t, i, (e || 0) + 1)
            },
            teardown: function() {
                var t = this.ownerDocument || this.document || this
                  , e = G.access(t, i) - 1;
                e ? G.access(t, i, e) : (t.removeEventListener(n, r, !0),
                G.remove(t, i))
            }
        }
    });
    var De = w.location
      , be = {
        guid: Date.now()
    }
      , xe = /\?/;
    T.parseXML = function(t) {
        var e, n;
        if (!t || "string" != typeof t)
            return null;
        try {
            e = (new w.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {}
        return n = e && e.getElementsByTagName("parsererror")[0],
        e && !n || T.error("Invalid XML: " + (n ? T.map(n.childNodes, function(t) {
            return t.textContent
        }).join("\n") : t)),
        e
    }
    ;
    var we = /\[\]$/
      , Ee = /\r?\n/g
      , Te = /^(?:submit|button|image|reset|file)$/i
      , Ae = /^(?:input|select|textarea|keygen)/i;
    function Ce(n, t, i, r) {
        var e;
        if (Array.isArray(t))
            T.each(t, function(t, e) {
                i || we.test(n) ? r(n, e) : Ce(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, r)
            });
        else if (i || "object" !== b(t))
            r(n, t);
        else
            for (e in t)
                Ce(n + "[" + e + "]", t[e], i, r)
    }
    T.param = function(t, e) {
        var n, i = [], r = function(t, e) {
            var n = y(e) ? e() : e;
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == t)
            return "";
        if (Array.isArray(t) || t.jquery && !T.isPlainObject(t))
            T.each(t, function() {
                r(this.name, this.value)
            });
        else
            for (n in t)
                Ce(n, t[n], e, r);
        return i.join("&")
    }
    ,
    T.fn.extend({
        serialize: function() {
            return T.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = T.prop(this, "elements");
                return t ? T.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !T(this).is(":disabled") && Ae.test(this.nodeName) && !Te.test(t) && (this.checked || !ht.test(t))
            }).map(function(t, e) {
                var n = T(this).val();
                return null == n ? null : Array.isArray(n) ? T.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ee, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ee, "\r\n")
                }
            }).get()
        }
    });
    var Se = /%20/g
      , ke = /#.*$/
      , Fe = /([?&])_=[^&]*/
      , Oe = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Me = /^(?:GET|HEAD)$/
      , Le = /^\/\//
      , Be = {}
      , Pe = {}
      , je = "*/".concat("*")
      , Re = E.createElement("a");
    function Ie(o) {
        return function(t, e) {
            "string" != typeof t && (e = t,
            t = "*");
            var n, i = 0, r = t.toLowerCase().match(P) || [];
            if (y(e))
                for (; n = r[i++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
        }
    }
    function Ne(e, r, o, s) {
        var a = {}
          , u = e === Pe;
        function l(t) {
            var i;
            return a[t] = !0,
            T.each(e[t] || [], function(t, e) {
                var n = e(r, o, s);
                return "string" != typeof n || u || a[n] ? u ? !(i = n) : void 0 : (r.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            i
        }
        return l(r.dataTypes[0]) || !a["*"] && l("*")
    }
    function He(t, e) {
        var n, i, r = T.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && T.extend(!0, t, i),
        t
    }
    Re.href = De.href,
    T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: De.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(De.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": je,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": T.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? He(He(t, T.ajaxSettings), e) : He(T.ajaxSettings, t)
        },
        ajaxPrefilter: Ie(Be),
        ajaxTransport: Ie(Pe),
        ajax: function(t, e) {
            "object" == typeof t && (e = t,
            t = void 0),
            e = e || {};
            var c, f, h, n, d, i, p, v, r, o, m = T.ajaxSetup({}, e), g = m.context || m, y = m.context && (g.nodeType || g.jquery) ? T(g) : T.event, _ = T.Deferred(), D = T.Callbacks("once memory"), b = m.statusCode || {}, s = {}, a = {}, u = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (p) {
                        if (!n)
                            for (n = {}; e = Oe.exec(h); )
                                n[e[1].toLowerCase() + " "] = (n[e[1].toLowerCase() + " "] || []).concat(e[2]);
                        e = n[t.toLowerCase() + " "]
                    }
                    return null == e ? null : e.join(", ")
                },
                getAllResponseHeaders: function() {
                    return p ? h : null
                },
                setRequestHeader: function(t, e) {
                    return null == p && (t = a[t.toLowerCase()] = a[t.toLowerCase()] || t,
                    s[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return null == p && (m.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (p)
                            x.always(t[x.status]);
                        else
                            for (e in t)
                                b[e] = [b[e], t[e]];
                    return this
                },
                abort: function(t) {
                    var e = t || u;
                    return c && c.abort(e),
                    l(0, e),
                    this
                }
            };
            if (_.promise(x),
            m.url = ((t || m.url || De.href) + "").replace(Le, De.protocol + "//"),
            m.type = e.method || e.type || m.method || m.type,
            m.dataTypes = (m.dataType || "*").toLowerCase().match(P) || [""],
            null == m.crossDomain) {
                i = E.createElement("a");
                try {
                    i.href = m.url,
                    i.href = i.href,
                    m.crossDomain = Re.protocol + "//" + Re.host != i.protocol + "//" + i.host
                } catch (t) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = T.param(m.data, m.traditional)),
            Ne(Be, m, e, x),
            p)
                return x;
            for (r in (v = T.event && m.global) && 0 == T.active++ && T.event.trigger("ajaxStart"),
            m.type = m.type.toUpperCase(),
            m.hasContent = !Me.test(m.type),
            f = m.url.replace(ke, ""),
            m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Se, "+")) : (o = m.url.slice(f.length),
            m.data && (m.processData || "string" == typeof m.data) && (f += (xe.test(f) ? "&" : "?") + m.data,
            delete m.data),
            !1 === m.cache && (f = f.replace(Fe, "$1"),
            o = (xe.test(f) ? "&" : "?") + "_=" + be.guid++ + o),
            m.url = f + o),
            m.ifModified && (T.lastModified[f] && x.setRequestHeader("If-Modified-Since", T.lastModified[f]),
            T.etag[f] && x.setRequestHeader("If-None-Match", T.etag[f])),
            (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && x.setRequestHeader("Content-Type", m.contentType),
            x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + je + "; q=0.01" : "") : m.accepts["*"]),
            m.headers)
                x.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, x, m) || p))
                return x.abort();
            if (u = "abort",
            D.add(m.complete),
            x.done(m.success),
            x.fail(m.error),
            c = Ne(Pe, m, e, x)) {
                if (x.readyState = 1,
                v && y.trigger("ajaxSend", [x, m]),
                p)
                    return x;
                m.async && 0 < m.timeout && (d = w.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    p = !1,
                    c.send(s, l)
                } catch (t) {
                    if (p)
                        throw t;
                    l(-1, t)
                }
            } else
                l(-1, "No Transport");
            function l(t, e, n, i) {
                var r, o, s, a, u, l = e;
                p || (p = !0,
                d && w.clearTimeout(d),
                c = void 0,
                h = i || "",
                x.readyState = 0 < t ? 4 : 0,
                r = 200 <= t && t < 300 || 304 === t,
                n && (a = function(t, e, n) {
                    for (var i, r, o, s, a = t.contents, u = t.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                u.unshift(r);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (r in n) {
                            if (!u[0] || t.converters[r + " " + u[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(m, x, n)),
                !r && -1 < T.inArray("script", m.dataTypes) && T.inArray("json", m.dataTypes) < 0 && (m.converters["text script"] = function() {}
                ),
                a = function(t, e, n, i) {
                    var r, o, s, a, u, l = {}, c = t.dataTypes.slice();
                    if (c[1])
                        for (s in t.converters)
                            l[s.toLowerCase()] = t.converters[s];
                    for (o = c.shift(); o; )
                        if (t.responseFields[o] && (n[t.responseFields[o]] = e),
                        !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(s = l[u + " " + o] || l["* " + o]))
                                    for (r in l)
                                        if ((a = r.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                            !0 === s ? s = l[r] : !0 !== l[r] && (o = a[0],
                                            c.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && t.throws)
                                        e = s(e);
                                    else
                                        try {
                                            e = s(e)
                                        } catch (t) {
                                            return {
                                                state: "parsererror",
                                                error: s ? t : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: e
                    }
                }(m, a, x, r),
                r ? (m.ifModified && ((u = x.getResponseHeader("Last-Modified")) && (T.lastModified[f] = u),
                (u = x.getResponseHeader("etag")) && (T.etag[f] = u)),
                204 === t || "HEAD" === m.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = a.state,
                o = a.data,
                r = !(s = a.error))) : (s = l,
                !t && l || (l = "error",
                t < 0 && (t = 0))),
                x.status = t,
                x.statusText = (e || l) + "",
                r ? _.resolveWith(g, [o, l, x]) : _.rejectWith(g, [x, l, s]),
                x.statusCode(b),
                b = void 0,
                v && y.trigger(r ? "ajaxSuccess" : "ajaxError", [x, m, r ? o : s]),
                D.fireWith(g, [x, l]),
                v && (y.trigger("ajaxComplete", [x, m]),
                --T.active || T.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(t, e, n) {
            return T.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return T.get(t, void 0, e, "script")
        }
    }),
    T.each(["get", "post"], function(t, r) {
        T[r] = function(t, e, n, i) {
            return y(e) && (i = i || n,
            n = e,
            e = void 0),
            T.ajax(T.extend({
                url: t,
                type: r,
                dataType: i,
                data: e,
                success: n
            }, T.isPlainObject(t) && t))
        }
    }),
    T.ajaxPrefilter(function(t) {
        var e;
        for (e in t.headers)
            "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
    }),
    T._evalUrl = function(t, e, n) {
        return T.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(t) {
                T.globalEval(t, e, n)
            }
        })
    }
    ,
    T.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (y(t) && (t = t.call(this[0])),
            e = T(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                return t
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return y(n) ? this.each(function(t) {
                T(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = T(this)
                  , e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(e) {
            var n = y(e);
            return this.each(function(t) {
                T(this).wrapAll(n ? e.call(this, t) : e)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                T(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    T.expr.pseudos.hidden = function(t) {
        return !T.expr.pseudos.visible(t)
    }
    ,
    T.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }
    ,
    T.ajaxSettings.xhr = function() {
        try {
            return new w.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var ze = {
        0: 200,
        1223: 204
    }
      , We = T.ajaxSettings.xhr();
    g.cors = !!We && "withCredentials"in We,
    g.ajax = We = !!We,
    T.ajaxTransport(function(r) {
        var o, s;
        if (g.cors || We && !r.crossDomain)
            return {
                send: function(t, e) {
                    var n, i = r.xhr();
                    if (i.open(r.type, r.url, r.async, r.username, r.password),
                    r.xhrFields)
                        for (n in r.xhrFields)
                            i[n] = r.xhrFields[n];
                    for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType),
                    r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"),
                    t)
                        i.setRequestHeader(n, t[n]);
                    o = function(t) {
                        return function() {
                            o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null,
                            "abort" === t ? i.abort() : "error" === t ? "number" != typeof i.status ? e(0, "error") : e(i.status, i.statusText) : e(ze[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }
                    ,
                    i.onload = o(),
                    s = i.onerror = i.ontimeout = o("error"),
                    void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                        4 === i.readyState && w.setTimeout(function() {
                            o && s()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        i.send(r.hasContent && r.data || null)
                    } catch (t) {
                        if (o)
                            throw t
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    T.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }),
    T.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return T.globalEval(t),
                t
            }
        }
    }),
    T.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET")
    }),
    T.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(t, e) {
                    i = T("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", r = function(t) {
                        i.remove(),
                        r = null,
                        t && e("error" === t.type ? 404 : 200, t.type)
                    }
                    ),
                    E.head.appendChild(i[0])
                },
                abort: function() {
                    r && r()
                }
            }
    });
    var qe, Ve = [], Xe = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ve.pop() || T.expando + "_" + be.guid++;
            return this[t] = !0,
            t
        }
    }),
    T.ajaxPrefilter("json jsonp", function(t, e, n) {
        var i, r, o, s = !1 !== t.jsonp && (Xe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xe.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Xe, "$1" + i) : !1 !== t.jsonp && (t.url += (xe.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return o || T.error(i + " was not called"),
                o[0]
            }
            ,
            t.dataTypes[0] = "json",
            r = w[i],
            w[i] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === r ? T(w).removeProp(i) : w[i] = r,
                t[i] && (t.jsonpCallback = e.jsonpCallback,
                Ve.push(i)),
                o && y(r) && r(o[0]),
                o = r = void 0
            }),
            "script"
    }),
    g.createHTMLDocument = ((qe = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === qe.childNodes.length),
    T.parseHTML = function(t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e,
        e = !1),
        e || (g.createHTMLDocument ? ((i = (e = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        e.head.appendChild(i)) : e = E),
        o = !n && [],
        (r = S.exec(t)) ? [e.createElement(r[1])] : (r = _t([t], e, o),
        o && o.length && T(o).remove(),
        T.merge([], r.childNodes)));
        var i, r, o
    }
    ,
    T.fn.load = function(t, e, n) {
        var i, r, o, s = this, a = t.indexOf(" ");
        return -1 < a && (i = pe(t.slice(a)),
        t = t.slice(0, a)),
        y(e) ? (n = e,
        e = void 0) : e && "object" == typeof e && (r = "POST"),
        0 < s.length && T.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments,
            s.html(i ? T("<div>").append(T.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }
        ),
        this
    }
    ,
    T.expr.pseudos.animated = function(e) {
        return T.grep(T.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    T.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, u, l = T.css(t, "position"), c = T(t), f = {};
            "static" === l && (t.style.position = "relative"),
            a = c.offset(),
            o = T.css(t, "top"),
            u = T.css(t, "left"),
            r = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (s = (i = c.position()).top,
            i.left) : (s = parseFloat(o) || 0,
            parseFloat(u) || 0),
            y(e) && (e = e.call(t, n, T.extend({}, a))),
            null != e.top && (f.top = e.top - a.top + s),
            null != e.left && (f.left = e.left - a.left + r),
            "using"in e ? e.using.call(t, f) : c.css(f)
        }
    },
    T.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    T.offset.setOffset(this, e, t)
                });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(),
            n = i.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n, i = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === T.css(i, "position"))
                    e = i.getBoundingClientRect();
                else {
                    for (e = this.offset(),
                    n = i.ownerDocument,
                    t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === T.css(t, "position"); )
                        t = t.parentNode;
                    t && t !== i && 1 === t.nodeType && ((r = T(t).offset()).top += T.css(t, "borderTopWidth", !0),
                    r.left += T.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - r.top - T.css(i, "marginTop", !0),
                    left: e.left - r.left - T.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === T.css(t, "position"); )
                    t = t.offsetParent;
                return t || it
            })
        }
    }),
    T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, r) {
        var o = "pageYOffset" === r;
        T.fn[e] = function(t) {
            return W(this, function(t, e, n) {
                var i;
                if (_(t) ? i = t : 9 === t.nodeType && (i = t.defaultView),
                void 0 === n)
                    return i ? i[r] : t[e];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : t[e] = n
            }, e, t, arguments.length)
        }
    }),
    T.each(["top", "left"], function(t, n) {
        T.cssHooks[n] = Ht(g.pixelPosition, function(t, e) {
            if (e)
                return e = Nt(t, n),
                Pt.test(e) ? T(t).position()[n] + "px" : e
        })
    }),
    T.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        T.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, o) {
            T.fn[o] = function(t, e) {
                var n = arguments.length && (i || "boolean" != typeof t)
                  , r = i || (!0 === t || !0 === e ? "margin" : "border");
                return W(this, function(t, e, n) {
                    var i;
                    return _(t) ? 0 === o.indexOf("outer") ? t["inner" + s] : t.document.documentElement["client" + s] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + s], i["scroll" + s], t.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? T.css(t, e, r) : T.style(t, e, n, r)
                }, a, n ? t : void 0, n)
            }
        })
    }),
    T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        T.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    T.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }),
    T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, n) {
        T.fn[n] = function(t, e) {
            return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
        }
    });
    var Ye = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    T.proxy = function(t, e) {
        var n, i, r;
        if ("string" == typeof e && (n = t[e],
        e = t,
        t = n),
        y(t))
            return i = a.call(arguments, 2),
            (r = function() {
                return t.apply(e || this, i.concat(a.call(arguments)))
            }
            ).guid = t.guid = t.guid || T.guid++,
            r
    }
    ,
    T.holdReady = function(t) {
        t ? T.readyWait++ : T.ready(!0)
    }
    ,
    T.isArray = Array.isArray,
    T.parseJSON = JSON.parse,
    T.nodeName = C,
    T.isFunction = y,
    T.isWindow = _,
    T.camelCase = Y,
    T.type = b,
    T.now = Date.now,
    T.isNumeric = function(t) {
        var e = T.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }
    ,
    T.trim = function(t) {
        return null == t ? "" : (t + "").replace(Ye, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return T
    });
    var $e = w.jQuery
      , Ue = w.$;
    return T.noConflict = function(t) {
        return w.$ === T && (w.$ = Ue),
        t && w.jQuery === T && (w.jQuery = $e),
        T
    }
    ,
    void 0 === t && (w.jQuery = w.$ = T),
    T
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).LocomotiveScroll = e()
}(this, function() {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        t
    }
    function e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
    }
    function a(r) {
        for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {};
            t % 2 ? e(Object(o), !0).forEach(function(t) {
                var e, n, i;
                e = r,
                i = o[n = t],
                n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach(function(t) {
                Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t))
            })
        }
        return r
    }
    function u(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && n(t, e)
    }
    function l(t) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function n(t, e) {
        return (n = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function c(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function f(o) {
        var s = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var t, e, n, i = l(o);
            if (s) {
                var r = l(this).constructor;
                t = Reflect.construct(i, arguments, r)
            } else
                t = i.apply(this, arguments);
            return e = this,
            !(n = t) || "object" != typeof n && "function" != typeof n ? c(e) : n
        }
    }
    function h(t, e, n) {
        return (h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var i = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = l(t)); )
                    ;
                return t
            }(t, e);
            if (i) {
                var r = Object.getOwnPropertyDescriptor(i, e);
                return r.get ? r.get.call(n) : r.value
            }
        }
        )(t, e, n || t)
    }
    function F(t, e) {
        return function(t) {
            if (Array.isArray(t))
                return t
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
                return;
            var n = []
              , i = !0
              , r = !1
              , o = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value),
                !e || n.length !== e); i = !0)
                    ;
            } catch (t) {
                r = !0,
                o = t
            } finally {
                try {
                    i || null == a.return || a.return()
                } finally {
                    if (r)
                        throw o
                }
            }
            return n
        }(t, e) || o(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function g(t) {
        return function(t) {
            if (Array.isArray(t))
                return d(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t)
        }(t) || o(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function o(t, e) {
        if (t) {
            if ("string" == typeof t)
                return d(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(t, e) : void 0
        }
    }
    function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++)
            i[n] = t[n];
        return i
    }
    var p = {
        el: document,
        name: "scroll",
        offset: [0, 0],
        repeat: !1,
        smooth: !1,
        initPosition: {
            x: 0,
            y: 0
        },
        direction: "vertical",
        gestureDirection: "vertical",
        reloadOnContextChange: !1,
        lerp: .1,
        class: "is-inview",
        scrollbarContainer: !1,
        scrollbarClass: "c-scrollbar",
        scrollingClass: "has-scroll-scrolling",
        draggingClass: "has-scroll-dragging",
        smoothClass: "has-scroll-smooth",
        initClass: "has-scroll-init",
        getSpeed: !1,
        getDirection: !1,
        scrollFromAnywhere: !1,
        multiplier: 1,
        firefoxMultiplier: 50,
        touchMultiplier: 2,
        resetNativeScroll: !0,
        tablet: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical",
            breakpoint: 1024
        },
        smartphone: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical"
        }
    }
      , v = function() {
        function e() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            r(this, e),
            Object.assign(this, p, t),
            this.smartphone = p.smartphone,
            t.smartphone && Object.assign(this.smartphone, t.smartphone),
            this.tablet = p.tablet,
            t.tablet && Object.assign(this.tablet, t.tablet),
            this.namespace = "locomotive",
            this.html = document.documentElement,
            this.windowHeight = window.innerHeight,
            this.windowWidth = window.innerWidth,
            this.windowMiddle = {
                x: this.windowWidth / 2,
                y: this.windowHeight / 2
            },
            this.els = {},
            this.currentElements = {},
            this.listeners = {},
            this.hasScrollTicking = !1,
            this.hasCallEventSet = !1,
            this.checkScroll = this.checkScroll.bind(this),
            this.checkResize = this.checkResize.bind(this),
            this.checkEvent = this.checkEvent.bind(this),
            this.instance = {
                scroll: {
                    x: 0,
                    y: 0
                },
                limit: {
                    x: this.html.offsetWidth,
                    y: this.html.offsetHeight
                },
                currentElements: this.currentElements
            },
            this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop",
            this.isMobile && (this.direction = this[this.context].direction),
            "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y",
            this.getDirection && (this.instance.direction = null),
            this.getDirection && (this.instance.speed = 0),
            this.html.classList.add(this.initClass),
            window.addEventListener("resize", this.checkResize, !1)
        }
        return s(e, [{
            key: "init",
            value: function() {
                this.initEvents()
            }
        }, {
            key: "checkScroll",
            value: function() {
                this.dispatchScroll()
            }
        }, {
            key: "checkResize",
            value: function() {
                var t = this;
                this.resizeTick || (this.resizeTick = !0,
                requestAnimationFrame(function() {
                    t.resize(),
                    t.resizeTick = !1
                }))
            }
        }, {
            key: "resize",
            value: function() {}
        }, {
            key: "checkContext",
            value: function() {
                if (this.reloadOnContextChange) {
                    this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints || this.windowWidth < this.tablet.breakpoint,
                    this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                    var t = this.context;
                    if (this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop",
                    t != this.context)
                        ("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
                }
            }
        }, {
            key: "initEvents",
            value: function() {
                var e = this;
                this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")),
                this.setScrollTo = this.setScrollTo.bind(this),
                this.scrollToEls.forEach(function(t) {
                    t.addEventListener("click", e.setScrollTo, !1)
                })
            }
        }, {
            key: "setScrollTo",
            value: function(t) {
                t.preventDefault(),
                this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                    offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                })
            }
        }, {
            key: "addElements",
            value: function() {}
        }, {
            key: "detectElements",
            value: function(s) {
                var a = this
                  , u = this.instance.scroll.y
                  , l = u + this.windowHeight
                  , c = this.instance.scroll.x
                  , f = c + this.windowWidth;
                Object.entries(this.els).forEach(function(t) {
                    var e = F(t, 2)
                      , n = e[0]
                      , i = e[1];
                    if (!i || i.inView && !s || ("horizontal" === a.direction ? f >= i.left && c < i.right && a.setInView(i, n) : l >= i.top && u < i.bottom && a.setInView(i, n)),
                    i && i.inView)
                        if ("horizontal" === a.direction) {
                            var r = i.right - i.left;
                            i.progress = (a.instance.scroll.x - (i.left - a.windowWidth)) / (r + a.windowWidth),
                            (f < i.left || c > i.right) && a.setOutOfView(i, n)
                        } else {
                            var o = i.bottom - i.top;
                            i.progress = (a.instance.scroll.y - (i.top - a.windowHeight)) / (o + a.windowHeight),
                            (l < i.top || u > i.bottom) && a.setOutOfView(i, n)
                        }
                }),
                this.hasScrollTicking = !1
            }
        }, {
            key: "setInView",
            value: function(t, e) {
                this.els[e].inView = !0,
                t.el.classList.add(t.class),
                (this.currentElements[e] = t).call && this.hasCallEventSet && (this.dispatchCall(t, "enter"),
                t.repeat || (this.els[e].call = !1))
            }
        }, {
            key: "setOutOfView",
            value: function(t, e) {
                var n = this;
                this.els[e].inView = !1,
                Object.keys(this.currentElements).forEach(function(t) {
                    t === e && delete n.currentElements[t]
                }),
                t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                t.repeat && t.el.classList.remove(t.class)
            }
        }, {
            key: "dispatchCall",
            value: function(t, e) {
                this.callWay = e,
                this.callValue = t.call.split(",").map(function(t) {
                    return t.trim()
                }),
                this.callObj = t,
                1 == this.callValue.length && (this.callValue = this.callValue[0]);
                var n = new Event(this.namespace + "call");
                this.el.dispatchEvent(n)
            }
        }, {
            key: "dispatchScroll",
            value: function() {
                var t = new Event(this.namespace + "scroll");
                this.el.dispatchEvent(t)
            }
        }, {
            key: "setEvents",
            value: function(t, e) {
                this.listeners[t] || (this.listeners[t] = []);
                var n = this.listeners[t];
                n.push(e),
                1 === n.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1),
                "call" === t && (this.hasCallEventSet = !0,
                this.detectElements(!0))
            }
        }, {
            key: "unsetEvents",
            value: function(t, e) {
                if (this.listeners[t]) {
                    var n = this.listeners[t]
                      , i = n.indexOf(e);
                    i < 0 || (n.splice(i, 1),
                    0 === n.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                }
            }
        }, {
            key: "checkEvent",
            value: function(t) {
                var e = this
                  , n = t.type.replace(this.namespace, "")
                  , i = this.listeners[n];
                i && 0 !== i.length && i.forEach(function(t) {
                    switch (n) {
                    case "scroll":
                        return t(e.instance);
                    case "call":
                        return t(e.callValue, e.callWay, e.callObj);
                    default:
                        return t()
                    }
                })
            }
        }, {
            key: "startScroll",
            value: function() {}
        }, {
            key: "stopScroll",
            value: function() {}
        }, {
            key: "setScroll",
            value: function(t, e) {
                this.instance.scroll = {
                    x: 0,
                    y: 0
                }
            }
        }, {
            key: "destroy",
            value: function() {
                var e = this;
                window.removeEventListener("resize", this.checkResize, !1),
                Object.keys(this.listeners).forEach(function(t) {
                    e.el.removeEventListener(e.namespace + t, e.checkEvent, !1)
                }),
                this.listeners = {},
                this.scrollToEls.forEach(function(t) {
                    t.removeEventListener("click", e.setScrollTo, !1)
                }),
                this.html.classList.remove(this.initClass)
            }
        }]),
        e
    }()
      , m = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function t(t, e) {
        return t(e = {
            exports: {}
        }, e.exports),
        e.exports
    }
    var y = t(function(t, e) {
        t.exports = {
            polyfill: function() {
                var u = window
                  , l = document;
                if (!("scrollBehavior"in l.documentElement.style && !0 !== u.__forceSmoothScrollPolyfill__)) {
                    var t, e = u.HTMLElement || u.Element, s = 468, c = {
                        scroll: u.scroll || u.scrollTo,
                        scrollBy: u.scrollBy,
                        elementScroll: e.prototype.scroll || h,
                        scrollIntoView: e.prototype.scrollIntoView
                    }, f = u.performance && u.performance.now ? u.performance.now.bind(u.performance) : Date.now, n = (t = u.navigator.userAgent,
                    new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t) ? 1 : 0);
                    u.scroll = u.scrollTo = function() {
                        void 0 !== arguments[0] && (!0 !== i(arguments[0]) ? a.call(u, l.body, void 0 !== arguments[0].left ? ~~arguments[0].left : u.scrollX || u.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : u.scrollY || u.pageYOffset) : c.scroll.call(u, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : u.scrollX || u.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : u.scrollY || u.pageYOffset))
                    }
                    ,
                    u.scrollBy = function() {
                        void 0 !== arguments[0] && (i(arguments[0]) ? c.scrollBy.call(u, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : a.call(u, l.body, ~~arguments[0].left + (u.scrollX || u.pageXOffset), ~~arguments[0].top + (u.scrollY || u.pageYOffset)))
                    }
                    ,
                    e.prototype.scroll = e.prototype.scrollTo = function() {
                        if (void 0 !== arguments[0])
                            if (!0 !== i(arguments[0])) {
                                var t = arguments[0].left
                                  , e = arguments[0].top;
                                a.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                            } else {
                                if ("number" == typeof arguments[0] && void 0 === arguments[1])
                                    throw new SyntaxError("Value could not be converted");
                                c.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                            }
                    }
                    ,
                    e.prototype.scrollBy = function() {
                        void 0 !== arguments[0] && (!0 !== i(arguments[0]) ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior
                        }) : c.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                    }
                    ,
                    e.prototype.scrollIntoView = function() {
                        if (!0 !== i(arguments[0])) {
                            var t = function(t) {
                                for (; t !== l.body && !1 === (n = r(e = t, "Y") && o(e, "Y"),
                                i = r(e, "X") && o(e, "X"),
                                n || i); )
                                    t = t.parentNode || t.host;
                                var e, n, i;
                                return t
                            }(this)
                              , e = t.getBoundingClientRect()
                              , n = this.getBoundingClientRect();
                            t !== l.body ? (a.call(this, t, t.scrollLeft + n.left - e.left, t.scrollTop + n.top - e.top),
                            "fixed" !== u.getComputedStyle(t).position && u.scrollBy({
                                left: e.left,
                                top: e.top,
                                behavior: "smooth"
                            })) : u.scrollBy({
                                left: n.left,
                                top: n.top,
                                behavior: "smooth"
                            })
                        } else
                            c.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                    }
                }
                function h(t, e) {
                    this.scrollLeft = t,
                    this.scrollTop = e
                }
                function i(t) {
                    if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior)
                        return !0;
                    if ("object" == typeof t && "smooth" === t.behavior)
                        return !1;
                    throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                }
                function r(t, e) {
                    return "Y" === e ? t.clientHeight + n < t.scrollHeight : "X" === e ? t.clientWidth + n < t.scrollWidth : void 0
                }
                function o(t, e) {
                    var n = u.getComputedStyle(t, null)["overflow" + e];
                    return "auto" === n || "scroll" === n
                }
                function d(t) {
                    var e, n, i, r, o = (f() - t.startTime) / s;
                    r = o = 1 < o ? 1 : o,
                    e = .5 * (1 - Math.cos(Math.PI * r)),
                    n = t.startX + (t.x - t.startX) * e,
                    i = t.startY + (t.y - t.startY) * e,
                    t.method.call(t.scrollable, n, i),
                    n === t.x && i === t.y || u.requestAnimationFrame(d.bind(u, t))
                }
                function a(t, e, n) {
                    var i, r, o, s, a = f();
                    s = t === l.body ? (r = (i = u).scrollX || u.pageXOffset,
                    o = u.scrollY || u.pageYOffset,
                    c.scroll) : (r = (i = t).scrollLeft,
                    o = t.scrollTop,
                    h),
                    d({
                        scrollable: i,
                        method: s,
                        startTime: a,
                        startX: r,
                        startY: o,
                        x: e,
                        y: n
                    })
                }
            }
        }
    })
      , _ = (y.polyfill,
    function(t) {
        u(i, v);
        var n = f(i);
        function i() {
            var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return r(this, i),
            (t = n.call(this, e)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"),
            window.scrollTo(0, 0)),
            window.addEventListener("scroll", t.checkScroll, !1),
            void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = y,
            window.smoothscrollPolyfill.polyfill()),
            t
        }
        return s(i, [{
            key: "init",
            value: function() {
                this.instance.scroll.y = window.pageYOffset,
                this.addElements(),
                this.detectElements(),
                h(l(i.prototype), "init", this).call(this)
            }
        }, {
            key: "checkScroll",
            value: function() {
                var t = this;
                h(l(i.prototype), "checkScroll", this).call(this),
                this.getDirection && this.addDirection(),
                this.getSpeed && (this.addSpeed(),
                this.speedTs = Date.now()),
                this.instance.scroll.y = window.pageYOffset,
                Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame(function() {
                    t.detectElements()
                }),
                this.hasScrollTicking = !0))
            }
        }, {
            key: "addDirection",
            value: function() {
                window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
            }
        }, {
            key: "addSpeed",
            value: function() {
                window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
            }
        }, {
            key: "resize",
            value: function() {
                Object.entries(this.els).length && (this.windowHeight = window.innerHeight,
                this.updateElements())
            }
        }, {
            key: "addElements",
            value: function() {
                var m = this;
                this.els = {},
                this.el.querySelectorAll("[data-" + this.name + "]").forEach(function(t, e) {
                    t.getBoundingClientRect();
                    var n, i, r, o = t.dataset[m.name + "Class"] || m.class, s = "string" == typeof t.dataset[m.name + "Id"] ? t.dataset[m.name + "Id"] : e, a = "string" == typeof t.dataset[m.name + "Offset"] ? t.dataset[m.name + "Offset"].split(",") : m.offset, u = t.dataset[m.name + "Repeat"], l = t.dataset[m.name + "Call"], c = t.dataset[m.name + "Target"], f = (r = void 0 !== c ? document.querySelector("".concat(c)) : t).getBoundingClientRect();
                    n = f.top + m.instance.scroll.y,
                    i = f.left + m.instance.scroll.x;
                    var h = n + r.offsetHeight
                      , d = i + r.offsetWidth;
                    u = "false" != u && (null != u || m.repeat);
                    var p = m.getRelativeOffset(a)
                      , v = {
                        el: t,
                        targetEl: r,
                        id: s,
                        class: o,
                        top: n += p[0],
                        bottom: h -= p[1],
                        left: i,
                        right: d,
                        offset: a,
                        progress: 0,
                        repeat: u,
                        inView: !1,
                        call: l
                    };
                    m.els[s] = v,
                    t.classList.contains(o) && m.setInView(m.els[s], s)
                })
            }
        }, {
            key: "updateElements",
            value: function() {
                var a = this;
                Object.entries(this.els).forEach(function(t) {
                    var e = F(t, 2)
                      , n = e[0]
                      , i = e[1]
                      , r = i.targetEl.getBoundingClientRect().top + a.instance.scroll.y
                      , o = r + i.targetEl.offsetHeight
                      , s = a.getRelativeOffset(i.offset);
                    a.els[n].top = r + s[0],
                    a.els[n].bottom = o - s[1]
                }),
                this.hasScrollTicking = !1
            }
        }, {
            key: "getRelativeOffset",
            value: function(t) {
                var e = [0, 0];
                if (t)
                    for (var n = 0; n < t.length; n++)
                        "string" == typeof t[n] ? t[n].includes("%") ? e[n] = parseInt(t[n].replace("%", "") * this.windowHeight / 100) : e[n] = parseInt(t[n]) : e[n] = t[n];
                return e
            }
        }, {
            key: "scrollTo",
            value: function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = parseInt(e.offset) || 0
                  , i = !!e.callback && e.callback;
                if ("string" == typeof t) {
                    if ("top" === t)
                        t = this.html;
                    else if ("bottom" === t)
                        t = this.html.offsetHeight - window.innerHeight;
                    else if (!(t = document.querySelector(t)))
                        return
                } else if ("number" == typeof t)
                    t = parseInt(t);
                else if (!t || !t.tagName)
                    return;
                n = "number" != typeof t ? t.getBoundingClientRect().top + n + this.instance.scroll.y : t + n;
                var r = function() {
                    return parseInt(window.pageYOffset) === parseInt(n)
                };
                if (i) {
                    if (r())
                        return void i();
                    window.addEventListener("scroll", function t() {
                        r() && (window.removeEventListener("scroll", t),
                        i())
                    })
                }
                window.scrollTo({
                    top: n,
                    behavior: 0 === e.duration ? "auto" : "smooth"
                })
            }
        }, {
            key: "update",
            value: function() {
                this.addElements(),
                this.detectElements()
            }
        }, {
            key: "destroy",
            value: function() {
                h(l(i.prototype), "destroy", this).call(this),
                window.removeEventListener("scroll", this.checkScroll, !1)
            }
        }]),
        i
    }())
      , D = Object.getOwnPropertySymbols
      , b = Object.prototype.hasOwnProperty
      , x = Object.prototype.propertyIsEnumerable;
    var w = function() {
        try {
            if (!Object.assign)
                return !1;
            var t = new String("abc");
            if (t[5] = "de",
            "5" === Object.getOwnPropertyNames(t)[0])
                return !1;
            for (var e = {}, n = 0; n < 10; n++)
                e["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                return e[t]
            }).join(""))
                return !1;
            var i = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                i[t] = t
            }),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function(t, e) {
        for (var n, i, r = function(t) {
            if (null == t)
                throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }(t), o = 1; o < arguments.length; o++) {
            for (var s in n = Object(arguments[o]))
                b.call(n, s) && (r[s] = n[s]);
            if (D) {
                i = D(n);
                for (var a = 0; a < i.length; a++)
                    x.call(n, i[a]) && (r[i[a]] = n[i[a]])
            }
        }
        return r
    }
    ;
    function E() {}
    E.prototype = {
        on: function(t, e, n) {
            var i = this.e || (this.e = {});
            return (i[t] || (i[t] = [])).push({
                fn: e,
                ctx: n
            }),
            this
        },
        once: function(t, e, n) {
            var i = this;
            function r() {
                i.off(t, r),
                e.apply(n, arguments)
            }
            return r._ = e,
            this.on(t, r, n)
        },
        emit: function(t) {
            for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, r = n.length; i < r; i++)
                n[i].fn.apply(n[i].ctx, e);
            return this
        },
        off: function(t, e) {
            var n = this.e || (this.e = {})
              , i = n[t]
              , r = [];
            if (i && e)
                for (var o = 0, s = i.length; o < s; o++)
                    i[o].fn !== e && i[o].fn._ !== e && r.push(i[o]);
            return r.length ? n[t] = r : delete n[t],
            this
        }
    };
    var T = E
      , A = t(function(t, e) {
        (function() {
            (null !== e ? e : this).Lethargy = function() {
                function t(t, e, n, i) {
                    this.stability = null != t ? Math.abs(t) : 8,
                    this.sensitivity = null != e ? 1 + Math.abs(e) : 100,
                    this.tolerance = null != n ? 1 + Math.abs(n) : 1.1,
                    this.delay = null != i ? i : 150,
                    this.lastUpDeltas = function() {
                        var t, e, n;
                        for (n = [],
                        t = 1,
                        e = 2 * this.stability; 1 <= e ? t <= e : e <= t; 1 <= e ? t++ : t--)
                            n.push(null);
                        return n
                    }
                    .call(this),
                    this.lastDownDeltas = function() {
                        var t, e, n;
                        for (n = [],
                        t = 1,
                        e = 2 * this.stability; 1 <= e ? t <= e : e <= t; 1 <= e ? t++ : t--)
                            n.push(null);
                        return n
                    }
                    .call(this),
                    this.deltasTimestamp = function() {
                        var t, e, n;
                        for (n = [],
                        t = 1,
                        e = 2 * this.stability; 1 <= e ? t <= e : e <= t; 1 <= e ? t++ : t--)
                            n.push(null);
                        return n
                    }
                    .call(this)
                }
                return t.prototype.check = function(t) {
                    var e;
                    return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail),
                    this.deltasTimestamp.push(Date.now()),
                    this.deltasTimestamp.shift(),
                    0 < e ? (this.lastUpDeltas.push(e),
                    this.lastUpDeltas.shift(),
                    this.isInertia(1)) : (this.lastDownDeltas.push(e),
                    this.lastDownDeltas.shift(),
                    this.isInertia(-1))
                }
                ,
                t.prototype.isInertia = function(t) {
                    var e, n, i, r, o, s, a;
                    return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (i = e.slice(0, this.stability),
                    n = e.slice(this.stability, 2 * this.stability),
                    a = i.reduce(function(t, e) {
                        return t + e
                    }),
                    o = n.reduce(function(t, e) {
                        return t + e
                    }),
                    s = a / i.length,
                    r = o / n.length,
                    Math.abs(s) < Math.abs(r * this.tolerance) && this.sensitivity < Math.abs(r) && t)
                }
                ,
                t.prototype.showLastUpDeltas = function() {
                    return this.lastUpDeltas
                }
                ,
                t.prototype.showLastDownDeltas = function() {
                    return this.lastDownDeltas
                }
                ,
                t
            }()
        }
        ).call(m)
    })
      , C = {
        hasWheelEvent: "onwheel"in document,
        hasMouseWheelEvent: "onmousewheel"in document,
        hasTouch: "ontouchstart"in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
        hasTouchWin: navigator.msMaxTouchPoints && 1 < navigator.msMaxTouchPoints,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: "onkeydown"in document,
        isFirefox: -1 < navigator.userAgent.indexOf("Firefox")
    }
      , S = Object.prototype.toString
      , k = Object.prototype.hasOwnProperty;
    function O(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    var M = A.Lethargy
      , L = "virtualscroll"
      , B = H
      , P = 37
      , j = 38
      , R = 39
      , I = 40
      , N = 32;
    function H(t) {
        !function(t) {
            if (t) {
                var e = Array.prototype.slice.call(arguments, 1);
                if (0 === e.length)
                    for (var n in t)
                        k.call(t, n) && "function" == typeof t[n] && "[object Function]" == S.call(t[n]) && e.push(n);
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    t[r] = O(t[r], t)
                }
            }
        }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"),
        this.el = window,
        t && t.el && (this.el = t.el,
        delete t.el),
        this.options = w({
            mouseMultiplier: 1,
            touchMultiplier: 2,
            firefoxMultiplier: 15,
            keyStep: 120,
            preventTouch: !1,
            unpreventTouchClass: "vs-touchmove-allowed",
            limitInertia: !1,
            useKeyboard: !0,
            useTouch: !0
        }, t),
        this.options.limitInertia && (this._lethargy = new M),
        this._emitter = new T,
        this._event = {
            y: 0,
            x: 0,
            deltaX: 0,
            deltaY: 0
        },
        this.touchStartX = null,
        this.touchStartY = null,
        this.bodyTouchAction = null,
        void 0 !== this.options.passive && (this.listenerOptions = {
            passive: this.options.passive
        })
    }
    function z(t, e, n) {
        return (1 - n) * t + n * e
    }
    function W(t) {
        var e = {};
        if (window.getComputedStyle) {
            var n = getComputedStyle(t)
              , i = n.transform || n.webkitTransform || n.mozTransform
              , r = i.match(/^matrix3d\((.+)\)$/);
            return r ? (e.x = r ? parseFloat(r[1].split(", ")[12]) : 0,
            e.y = r ? parseFloat(r[1].split(", ")[13]) : 0) : (r = i.match(/^matrix\((.+)\)$/),
            e.x = r ? parseFloat(r[1].split(", ")[4]) : 0,
            e.y = r ? parseFloat(r[1].split(", ")[5]) : 0),
            e
        }
    }
    function q(t) {
        for (var e = []; t && t !== document; t = t.parentNode)
            e.push(t);
        return e
    }
    H.prototype._notify = function(t) {
        var e = this._event;
        e.x += e.deltaX,
        e.y += e.deltaY,
        this._emitter.emit(L, {
            x: e.x,
            y: e.y,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            originalEvent: t
        })
    }
    ,
    H.prototype._onWheel = function(t) {
        var e = this.options;
        if (!this._lethargy || !1 !== this._lethargy.check(t)) {
            var n = this._event;
            n.deltaX = t.wheelDeltaX || -1 * t.deltaX,
            n.deltaY = t.wheelDeltaY || -1 * t.deltaY,
            C.isFirefox && 1 == t.deltaMode && (n.deltaX *= e.firefoxMultiplier,
            n.deltaY *= e.firefoxMultiplier),
            n.deltaX *= e.mouseMultiplier,
            n.deltaY *= e.mouseMultiplier,
            this._notify(t)
        }
    }
    ,
    H.prototype._onMouseWheel = function(t) {
        if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
            var e = this._event;
            e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0,
            e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta,
            this._notify(t)
        }
    }
    ,
    H.prototype._onTouchStart = function(t) {
        var e = t.targetTouches ? t.targetTouches[0] : t;
        this.touchStartX = e.pageX,
        this.touchStartY = e.pageY
    }
    ,
    H.prototype._onTouchMove = function(t) {
        var e = this.options;
        e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
        var n = this._event
          , i = t.targetTouches ? t.targetTouches[0] : t;
        n.deltaX = (i.pageX - this.touchStartX) * e.touchMultiplier,
        n.deltaY = (i.pageY - this.touchStartY) * e.touchMultiplier,
        this.touchStartX = i.pageX,
        this.touchStartY = i.pageY,
        this._notify(t)
    }
    ,
    H.prototype._onKeyDown = function(t) {
        var e = this._event;
        e.deltaX = e.deltaY = 0;
        var n = window.innerHeight - 40;
        switch (t.keyCode) {
        case P:
        case j:
            e.deltaY = this.options.keyStep;
            break;
        case R:
        case I:
            e.deltaY = -this.options.keyStep;
            break;
        case t.shiftKey:
            e.deltaY = n;
            break;
        case N:
            e.deltaY = -n;
            break;
        default:
            return
        }
        this._notify(t)
    }
    ,
    H.prototype._bind = function() {
        C.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
        C.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions),
        C.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions),
        this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)),
        C.hasPointer && C.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction,
        document.body.style.msTouchAction = "none",
        this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
        this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
        C.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
    }
    ,
    H.prototype._unbind = function() {
        C.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
        C.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel),
        C.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart),
        this.el.removeEventListener("touchmove", this._onTouchMove)),
        C.hasPointer && C.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction,
        this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
        this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
        C.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
    }
    ,
    H.prototype.on = function(t, e) {
        this._emitter.on(L, t, e);
        var n = this._emitter.e;
        n && n[L] && 1 === n[L].length && this._bind()
    }
    ,
    H.prototype.off = function(t, e) {
        this._emitter.off(L, t, e);
        var n = this._emitter.e;
        (!n[L] || n[L].length <= 0) && this._unbind()
    }
    ,
    H.prototype.reset = function() {
        var t = this._event;
        t.x = 0,
        t.y = 0
    }
    ,
    H.prototype.destroy = function() {
        this._emitter.off(),
        this._unbind()
    }
    ;
    var V = 4
      , X = 1e-7
      , Y = 10
      , $ = "function" == typeof Float32Array;
    function U(t, e) {
        return 1 - 3 * e + 3 * t
    }
    function G(t, e) {
        return 3 * e - 6 * t
    }
    function Q(t) {
        return 3 * t
    }
    function K(t, e, n) {
        return ((U(e, n) * t + G(e, n)) * t + Q(e)) * t
    }
    function Z(t, e, n) {
        return 3 * U(e, n) * t * t + 2 * G(e, n) * t + Q(e)
    }
    function J(t) {
        return t
    }
    var tt = function(o, e, s, n) {
        if (!(0 <= o && o <= 1 && 0 <= s && s <= 1))
            throw new Error("bezier x values must be in [0, 1] range");
        if (o === e && s === n)
            return J;
        for (var a = $ ? new Float32Array(11) : new Array(11), t = 0; t < 11; ++t)
            a[t] = K(.1 * t, o, s);
        function i(t) {
            for (var e = 0, n = 1; 10 !== n && a[n] <= t; ++n)
                e += .1;
            var i = e + .1 * ((t - a[--n]) / (a[n + 1] - a[n]))
              , r = Z(i, o, s);
            return .001 <= r ? function(t, e, n, i) {
                for (var r = 0; r < V; ++r) {
                    var o = Z(e, n, i);
                    if (0 === o)
                        return e;
                    e -= (K(e, n, i) - t) / o
                }
                return e
            }(t, i, o, s) : 0 === r ? i : function(t, e, n, i, r) {
                for (var o, s, a = 0; 0 < (o = K(s = e + (n - e) / 2, i, r) - t) ? n = s : e = s,
                Math.abs(o) > X && ++a < Y; )
                    ;
                return s
            }(t, e, e + .1, o, s)
        }
        return function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : K(i(t), e, n)
        }
    }
      , et = 38
      , nt = 40
      , it = 32
      , rt = 9
      , ot = 33
      , st = 34
      , at = 36
      , ut = 35
      , lt = function(t) {
        u(o, v);
        var n = f(o);
        function o() {
            var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return r(this, o),
            history.scrollRestoration && (history.scrollRestoration = "manual"),
            window.scrollTo(0, 0),
            (t = n.call(this, e)).inertia && (t.lerp = .1 * t.inertia),
            t.isScrolling = !1,
            t.isDraggingScrollbar = !1,
            t.isTicking = !1,
            t.hasScrollTicking = !1,
            t.parallaxElements = {},
            t.stop = !1,
            t.scrollbarContainer = e.scrollbarContainer,
            t.checkKey = t.checkKey.bind(c(t)),
            window.addEventListener("keydown", t.checkKey, !1),
            t
        }
        return s(o, [{
            key: "init",
            value: function() {
                var e = this;
                this.html.classList.add(this.smoothClass),
                this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction),
                this.instance = a({
                    delta: {
                        x: this.initPosition.x,
                        y: this.initPosition.y
                    },
                    scroll: {
                        x: this.initPosition.x,
                        y: this.initPosition.y
                    }
                }, this.instance),
                this.vs = new B({
                    el: this.scrollFromAnywhere ? document : this.el,
                    mouseMultiplier: -1 < navigator.platform.indexOf("Win") ? 1 : .4,
                    firefoxMultiplier: this.firefoxMultiplier,
                    touchMultiplier: this.touchMultiplier,
                    useKeyboard: !1,
                    passive: !0
                }),
                this.vs.on(function(t) {
                    e.stop || e.isDraggingScrollbar || requestAnimationFrame(function() {
                        e.updateDelta(t),
                        e.isScrolling || e.startScrolling()
                    })
                }),
                this.setScrollLimit(),
                this.initScrollBar(),
                this.addSections(),
                this.addElements(),
                this.checkScroll(!0),
                this.transformElements(!0, !0),
                h(l(o.prototype), "init", this).call(this)
            }
        }, {
            key: "setScrollLimit",
            value: function() {
                if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight,
                "horizontal" === this.direction) {
                    for (var t = 0, e = this.el.children, n = 0; n < e.length; n++)
                        t += e[n].offsetWidth;
                    this.instance.limit.x = t - this.windowWidth
                }
            }
        }, {
            key: "startScrolling",
            value: function() {
                this.startScrollTs = Date.now(),
                this.isScrolling = !0,
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass)
            }
        }, {
            key: "stopScrolling",
            value: function() {
                cancelAnimationFrame(this.checkScrollRaf),
                this.startScrollTs = void 0,
                this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf),
                this.scrollToRaf = null),
                this.isScrolling = !1,
                this.instance.scroll.y = Math.round(this.instance.scroll.y),
                this.html.classList.remove(this.scrollingClass)
            }
        }, {
            key: "checkKey",
            value: function(t) {
                var e = this;
                if (this.stop)
                    t.keyCode == rt && requestAnimationFrame(function() {
                        e.html.scrollTop = 0,
                        document.body.scrollTop = 0,
                        e.html.scrollLeft = 0,
                        document.body.scrollLeft = 0
                    });
                else {
                    switch (t.keyCode) {
                    case rt:
                        requestAnimationFrame(function() {
                            e.html.scrollTop = 0,
                            document.body.scrollTop = 0,
                            e.html.scrollLeft = 0,
                            document.body.scrollLeft = 0,
                            e.scrollTo(document.activeElement, {
                                offset: -window.innerHeight / 2
                            })
                        });
                        break;
                    case et:
                        this.instance.delta[this.directionAxis] -= 240;
                        break;
                    case nt:
                        this.instance.delta[this.directionAxis] += 240;
                        break;
                    case ot:
                        this.instance.delta[this.directionAxis] -= window.innerHeight;
                        break;
                    case st:
                        this.instance.delta[this.directionAxis] += window.innerHeight;
                        break;
                    case at:
                        this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                        break;
                    case ut:
                        this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                        break;
                    case it:
                        document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                        break;
                    default:
                        return
                    }
                    this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                    this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]),
                    this.stopScrolling(),
                    this.isScrolling = !0,
                    this.checkScroll(),
                    this.html.classList.add(this.scrollingClass)
                }
            }
        }, {
            key: "checkScroll",
            value: function() {
                var i = this
                  , r = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                if (r || this.isScrolling || this.isDraggingScrollbar) {
                    this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame(function() {
                        return i.checkScroll()
                    }),
                    this.hasScrollTicking = !0),
                    this.updateScroll();
                    var t = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis])
                      , e = Date.now() - this.startScrollTs;
                    if (!this.animatingScroll && 100 < e && (t < .5 && 0 != this.instance.delta[this.directionAxis] || t < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(),
                    Object.entries(this.sections).forEach(function(t) {
                        var e = F(t, 2)
                          , n = (e[0],
                        e[1]);
                        n.persistent || i.instance.scroll[i.directionAxis] > n.offset[i.directionAxis] && i.instance.scroll[i.directionAxis] < n.limit[i.directionAxis] ? ("horizontal" === i.direction ? i.transform(n.el, -i.instance.scroll[i.directionAxis], 0) : i.transform(n.el, 0, -i.instance.scroll[i.directionAxis]),
                        n.inView || (n.inView = !0,
                        n.el.style.opacity = 1,
                        n.el.style.pointerEvents = "all",
                        n.el.setAttribute("data-".concat(i.name, "-section-inview"), ""))) : ((n.inView || r) && (n.inView = !1,
                        n.el.style.opacity = 0,
                        n.el.style.pointerEvents = "none",
                        n.el.removeAttribute("data-".concat(i.name, "-section-inview"))),
                        i.transform(n.el, 0, 0))
                    }),
                    this.getDirection && this.addDirection(),
                    this.getSpeed && (this.addSpeed(),
                    this.speedTs = Date.now()),
                    this.detectElements(),
                    this.transformElements(),
                    this.hasScrollbar) {
                        var n = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                        "horizontal" === this.direction ? this.transform(this.scrollbarThumb, n, 0) : this.transform(this.scrollbarThumb, 0, n)
                    }
                    h(l(o.prototype), "checkScroll", this).call(this),
                    this.hasScrollTicking = !1
                }
            }
        }, {
            key: "resize",
            value: function() {
                this.windowHeight = window.innerHeight,
                this.windowWidth = window.innerWidth,
                this.checkContext(),
                this.windowMiddle = {
                    x: this.windowWidth / 2,
                    y: this.windowHeight / 2
                },
                this.update()
            }
        }, {
            key: "updateDelta",
            value: function(t) {
                var e, n = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                e = "both" === n ? t.deltaX + t.deltaY : "vertical" === n ? t.deltaY : "horizontal" === n ? t.deltaX : t.deltaY,
                this.instance.delta[this.directionAxis] -= e * this.multiplier,
                this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
            }
        }, {
            key: "updateScroll",
            value: function(t) {
                this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = z(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
            }
        }, {
            key: "addDirection",
            value: function() {
                this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"),
                this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
            }
        }, {
            key: "addSpeed",
            value: function() {
                this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
            }
        }, {
            key: "initScrollBar",
            value: function() {
                if (this.scrollbar = document.createElement("span"),
                this.scrollbarThumb = document.createElement("span"),
                this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")),
                this.scrollbar.append(this.scrollbarThumb),
                this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar),
                this.getScrollBar = this.getScrollBar.bind(this),
                this.releaseScrollBar = this.releaseScrollBar.bind(this),
                this.moveScrollBar = this.moveScrollBar.bind(this),
                this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar),
                window.addEventListener("mouseup", this.releaseScrollBar),
                window.addEventListener("mousemove", this.moveScrollBar),
                this.hasScrollbar = !1,
                "horizontal" == this.direction) {
                    if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
                        return
                } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight)
                    return;
                this.hasScrollbar = !0,
                this.scrollbarBCR = this.scrollbar.getBoundingClientRect(),
                this.scrollbarHeight = this.scrollbarBCR.height,
                this.scrollbarWidth = this.scrollbarBCR.width,
                "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"),
                this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(),
                this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                }
            }
        }, {
            key: "reinitScrollBar",
            value: function() {
                if (this.hasScrollbar = !1,
                "horizontal" == this.direction) {
                    if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
                        return
                } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight)
                    return;
                this.hasScrollbar = !0,
                this.scrollbarBCR = this.scrollbar.getBoundingClientRect(),
                this.scrollbarHeight = this.scrollbarBCR.height,
                this.scrollbarWidth = this.scrollbarBCR.width,
                "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"),
                this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(),
                this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                }
            }
        }, {
            key: "destroyScrollBar",
            value: function() {
                this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar),
                window.removeEventListener("mouseup", this.releaseScrollBar),
                window.removeEventListener("mousemove", this.moveScrollBar),
                this.scrollbar.remove()
            }
        }, {
            key: "getScrollBar",
            value: function(t) {
                this.isDraggingScrollbar = !0,
                this.checkScroll(),
                this.html.classList.remove(this.scrollingClass),
                this.html.classList.add(this.draggingClass)
            }
        }, {
            key: "releaseScrollBar",
            value: function(t) {
                this.isDraggingScrollbar = !1,
                this.isScrolling && this.html.classList.add(this.scrollingClass),
                this.html.classList.remove(this.draggingClass)
            }
        }, {
            key: "moveScrollBar",
            value: function(n) {
                var i = this;
                this.isDraggingScrollbar && requestAnimationFrame(function() {
                    var t = 100 * (n.clientX - i.scrollbarBCR.left) / i.scrollbarWidth * i.instance.limit.x / 100
                      , e = 100 * (n.clientY - i.scrollbarBCR.top) / i.scrollbarHeight * i.instance.limit.y / 100;
                    0 < e && e < i.instance.limit.y && (i.instance.delta.y = e),
                    0 < t && t < i.instance.limit.x && (i.instance.delta.x = t)
                })
            }
        }, {
            key: "addElements",
            value: function() {
                var k = this;
                this.els = {},
                this.parallaxElements = {},
                this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach(function(t, e) {
                    var n, i, r, o = q(t), s = Object.entries(k.sections).map(function(t) {
                        var e = F(t, 2);
                        e[0];
                        return e[1]
                    }).find(function(t) {
                        return o.includes(t.el)
                    }), a = t.dataset[k.name + "Class"] || k.class, u = "string" == typeof t.dataset[k.name + "Id"] ? t.dataset[k.name + "Id"] : "el" + e, l = t.dataset[k.name + "Repeat"], c = t.dataset[k.name + "Call"], f = t.dataset[k.name + "Position"], h = t.dataset[k.name + "Delay"], d = t.dataset[k.name + "Direction"], p = "string" == typeof t.dataset[k.name + "Sticky"], v = !!t.dataset[k.name + "Speed"] && parseFloat(t.dataset[k.name + "Speed"]) / 10, m = "string" == typeof t.dataset[k.name + "Offset"] ? t.dataset[k.name + "Offset"].split(",") : k.offset, g = t.dataset[k.name + "Target"], y = (r = void 0 !== g ? document.querySelector("".concat(g)) : t).getBoundingClientRect();
                    i = null === s ? (n = y.top + k.instance.scroll.y - W(r).y,
                    y.left + k.instance.scroll.x - W(r).x) : s.inView ? (n = y.top + k.instance.scroll.y - W(r).y,
                    y.left + k.instance.scroll.x - W(r).x) : (n = y.top - W(s.el).y - W(r).y,
                    y.left - W(s.el).x - W(r).x);
                    var _ = n + r.offsetHeight
                      , D = i + r.offsetWidth
                      , b = {
                        x: (D - i) / 2 + i,
                        y: (_ - n) / 2 + n
                    };
                    if (p) {
                        var x = t.getBoundingClientRect()
                          , w = x.top
                          , E = x.left
                          , T = {
                            x: E - i,
                            y: w - n
                        };
                        n += window.innerHeight,
                        i += window.innerWidth,
                        _ = w + r.offsetHeight - t.offsetHeight - T[k.directionAxis],
                        b = {
                            x: ((D = E + r.offsetWidth - t.offsetWidth - T[k.directionAxis]) - i) / 2 + i,
                            y: (_ - n) / 2 + n
                        }
                    }
                    l = "false" != l && (null != l || k.repeat);
                    var A = [0, 0];
                    if (m)
                        if ("horizontal" === k.direction) {
                            for (var C = 0; C < m.length; C++)
                                "string" == typeof m[C] ? m[C].includes("%") ? A[C] = parseInt(m[C].replace("%", "") * k.windowWidth / 100) : A[C] = parseInt(m[C]) : A[C] = m[C];
                            i += A[0],
                            D -= A[1]
                        } else {
                            for (C = 0; C < m.length; C++)
                                "string" == typeof m[C] ? m[C].includes("%") ? A[C] = parseInt(m[C].replace("%", "") * k.windowHeight / 100) : A[C] = parseInt(m[C]) : A[C] = m[C];
                            n += A[0],
                            _ -= A[1]
                        }
                    var S = {
                        el: t,
                        id: u,
                        class: a,
                        section: s,
                        top: n,
                        middle: b,
                        bottom: _,
                        left: i,
                        right: D,
                        offset: m,
                        progress: 0,
                        repeat: l,
                        inView: !1,
                        call: c,
                        speed: v,
                        delay: h,
                        position: f,
                        target: r,
                        direction: d,
                        sticky: p
                    };
                    k.els[u] = S,
                    t.classList.contains(a) && k.setInView(k.els[u], u),
                    (!1 !== v || p) && (k.parallaxElements[u] = S)
                })
            }
        }, {
            key: "addSections",
            value: function() {
                var u = this;
                this.sections = {};
                var t = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                0 === t.length && (t = [this.el]),
                t.forEach(function(t, e) {
                    var n = "string" == typeof t.dataset[u.name + "Id"] ? t.dataset[u.name + "Id"] : "section" + e
                      , i = t.getBoundingClientRect()
                      , r = {
                        x: i.left - 1.5 * window.innerWidth - W(t).x,
                        y: i.top - 1.5 * window.innerHeight - W(t).y
                    }
                      , o = {
                        x: r.x + i.width + 2 * window.innerWidth,
                        y: r.y + i.height + 2 * window.innerHeight
                    }
                      , s = "string" == typeof t.dataset[u.name + "Persistent"];
                    t.setAttribute("data-scroll-section-id", n);
                    var a = {
                        el: t,
                        offset: r,
                        limit: o,
                        inView: !1,
                        persistent: s,
                        id: n
                    };
                    u.sections[n] = a
                })
            }
        }, {
            key: "transform",
            value: function(t, e, n, i) {
                var r;
                if (i) {
                    var o = W(t)
                      , s = z(o.x, e, i)
                      , a = z(o.y, n, i);
                    r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(s, ",").concat(a, ",0,1)")
                } else
                    r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(n, ",0,1)");
                t.style.webkitTransform = r,
                t.style.msTransform = r,
                t.style.transform = r
            }
        }, {
            key: "transformElements",
            value: function(r) {
                var o = this
                  , s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                  , a = this.instance.scroll.x + this.windowWidth
                  , u = this.instance.scroll.y + this.windowHeight
                  , l = {
                    x: this.instance.scroll.x + this.windowMiddle.x,
                    y: this.instance.scroll.y + this.windowMiddle.y
                };
                Object.entries(this.parallaxElements).forEach(function(t) {
                    var e = F(t, 2)
                      , n = (e[0],
                    e[1])
                      , i = !1;
                    if (r && (i = 0),
                    n.inView || s)
                        switch (n.position) {
                        case "top":
                            i = o.instance.scroll[o.directionAxis] * -n.speed;
                            break;
                        case "elementTop":
                            i = (u - n.top) * -n.speed;
                            break;
                        case "bottom":
                            i = (o.instance.limit[o.directionAxis] - u + o.windowHeight) * n.speed;
                            break;
                        case "left":
                            i = o.instance.scroll[o.directionAxis] * -n.speed;
                            break;
                        case "elementLeft":
                            i = (a - n.left) * -n.speed;
                            break;
                        case "right":
                            i = (o.instance.limit[o.directionAxis] - a + o.windowHeight) * n.speed;
                            break;
                        default:
                            i = (l[o.directionAxis] - n.middle[o.directionAxis]) * -n.speed
                        }
                    n.sticky && (i = n.inView ? "horizontal" === o.direction ? o.instance.scroll.x - n.left + window.innerWidth : o.instance.scroll.y - n.top + window.innerHeight : "horizontal" === o.direction ? o.instance.scroll.x < n.left - window.innerWidth && o.instance.scroll.x < n.left - window.innerWidth / 2 ? 0 : o.instance.scroll.x > n.right && o.instance.scroll.x > n.right + 100 && n.right - n.left + window.innerWidth : o.instance.scroll.y < n.top - window.innerHeight && o.instance.scroll.y < n.top - window.innerHeight / 2 ? 0 : o.instance.scroll.y > n.bottom && o.instance.scroll.y > n.bottom + 100 && n.bottom - n.top + window.innerHeight),
                    !1 !== i && ("horizontal" === n.direction || "horizontal" === o.direction && "vertical" !== n.direction ? o.transform(n.el, i, 0, !r && n.delay) : o.transform(n.el, 0, i, !r && n.delay))
                })
            }
        }, {
            key: "scrollTo",
            value: function(t) {
                var n = this
                  , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = parseInt(e.offset) || 0
                  , r = isNaN(parseInt(e.duration)) ? 1e3 : parseInt(e.duration)
                  , o = e.easing || [.25, 0, .35, 1]
                  , s = !!e.disableLerp
                  , a = !!e.callback && e.callback;
                if (o = tt.apply(void 0, g(o)),
                "string" == typeof t) {
                    if ("top" === t)
                        t = 0;
                    else if ("bottom" === t)
                        t = this.instance.limit.y;
                    else if ("left" === t)
                        t = 0;
                    else if ("right" === t)
                        t = this.instance.limit.x;
                    else if (!(t = document.querySelector(t)))
                        return
                } else if ("number" == typeof t)
                    t = parseInt(t);
                else if (!t || !t.tagName)
                    return;
                if ("number" != typeof t) {
                    if (!q(t).includes(this.el))
                        return;
                    var u = t.getBoundingClientRect()
                      , l = u.top
                      , c = u.left
                      , f = q(t).find(function(e) {
                        return Object.entries(n.sections).map(function(t) {
                            var e = F(t, 2);
                            e[0];
                            return e[1]
                        }).find(function(t) {
                            return t.el == e
                        })
                    })
                      , h = 0;
                    h = f ? W(f)[this.directionAxis] : -this.instance.scroll[this.directionAxis],
                    i = "horizontal" === this.direction ? c + i - h : l + i - h
                } else
                    i = t + i;
                var d = parseFloat(this.instance.delta[this.directionAxis])
                  , p = Math.max(0, Math.min(i, this.instance.limit[this.directionAxis])) - d
                  , v = function(t) {
                    s ? "horizontal" === n.direction ? n.setScroll(d + p * t, n.instance.delta.y) : n.setScroll(n.instance.delta.x, d + p * t) : n.instance.delta[n.directionAxis] = d + p * t
                };
                this.animatingScroll = !0,
                this.stopScrolling(),
                this.startScrolling();
                var m = Date.now();
                !function t() {
                    var e = (Date.now() - m) / r;
                    1 < e ? (v(1),
                    n.animatingScroll = !1,
                    0 == r && n.update(),
                    a && a()) : (n.scrollToRaf = requestAnimationFrame(t),
                    v(o(e)))
                }()
            }
        }, {
            key: "update",
            value: function() {
                this.setScrollLimit(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.updateScroll(),
                this.transformElements(!0),
                this.reinitScrollBar(),
                this.checkScroll(!0)
            }
        }, {
            key: "startScroll",
            value: function() {
                this.stop = !1
            }
        }, {
            key: "stopScroll",
            value: function() {
                this.stop = !0
            }
        }, {
            key: "setScroll",
            value: function(t, e) {
                this.instance = a(a({}, this.instance), {}, {
                    scroll: {
                        x: t,
                        y: e
                    },
                    delta: {
                        x: t,
                        y: e
                    },
                    speed: 0
                })
            }
        }, {
            key: "destroy",
            value: function() {
                h(l(o.prototype), "destroy", this).call(this),
                this.stopScrolling(),
                this.html.classList.remove(this.smoothClass),
                this.vs.destroy(),
                this.destroyScrollBar(),
                window.removeEventListener("keydown", this.checkKey, !1)
            }
        }]),
        o
    }();
    return function() {
        function e() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            r(this, e),
            this.options = t,
            Object.assign(this, p, t),
            this.smartphone = p.smartphone,
            t.smartphone && Object.assign(this.smartphone, t.smartphone),
            this.tablet = p.tablet,
            t.tablet && Object.assign(this.tablet, t.tablet),
            !this.smooth && this.direction,
            !this.tablet.smooth && this.tablet.direction,
            !this.smartphone.smooth && this.smartphone.direction,
            this.init()
        }
        return s(e, [{
            key: "init",
            value: function() {
                if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints || window.innerWidth < this.tablet.breakpoint,
                this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint,
                this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new lt(this.options) : this.scroll = new _(this.options),
                this.scroll.init(),
                window.location.hash) {
                    var t = window.location.hash.slice(1, window.location.hash.length)
                      , e = document.getElementById(t);
                    e && this.scroll.scrollTo(e)
                }
            }
        }, {
            key: "update",
            value: function() {
                this.scroll.update()
            }
        }, {
            key: "start",
            value: function() {
                this.scroll.startScroll()
            }
        }, {
            key: "stop",
            value: function() {
                this.scroll.stopScroll()
            }
        }, {
            key: "scrollTo",
            value: function(t, e) {
                this.scroll.scrollTo(t, e)
            }
        }, {
            key: "setScroll",
            value: function(t, e) {
                this.scroll.setScroll(t, e)
            }
        }, {
            key: "on",
            value: function(t, e) {
                this.scroll.setEvents(t, e)
            }
        }, {
            key: "off",
            value: function(t, e) {
                this.scroll.unsetEvents(t, e)
            }
        }, {
            key: "destroy",
            value: function() {
                this.scroll.destroy()
            }
        }]),
        e
    }()
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    function n(t, e) {
        t.prototype = Object.create(e.prototype),
        (t.prototype.constructor = t).__proto__ = e
    }
    function F(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    var P, j, i, o, s, e, r, c, a, u, l, f, h, d, p, v, m, g, y, _, D, b, x, w, E, T, A, N = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, R = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, I = 1e8, H = 1e-8, C = 2 * Math.PI, S = C / 4, k = 0, O = Math.sqrt, M = Math.cos, L = Math.sin, z = function(t) {
        return "string" == typeof t
    }, B = function(t) {
        return "function" == typeof t
    }, W = function(t) {
        return "number" == typeof t
    }, q = function(t) {
        return void 0 === t
    }, V = function(t) {
        return "object" == typeof t
    }, X = function(t) {
        return !1 !== t
    }, Y = function() {
        return "undefined" != typeof window
    }, $ = function(t) {
        return B(t) || z(t)
    }, U = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , G = Array.isArray, Q = /(?:-?\.?\d|\.)+/gi, K = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Z = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, J = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, tt = /[+-]=-?[.\d]+/, et = /[^,'"\[\]\s]+/gi, nt = /[\d.+\-=]+(?:e[-+]\d*)*/i, it = {}, rt = {}, ot = function(t) {
        return (rt = kt(t, it)) && hn
    }, st = function(t, e) {
        return !e && void 0
    }, at = function(t, e) {
        return t && (it[t] = e) && rt && (rt[t] = e) || it
    }, ut = function() {
        return 0
    }, lt = {}, ct = [], ft = {}, ht = {}, dt = {}, pt = 30, vt = [], mt = "", gt = function(t) {
        var e, n, i = t[0];
        if (V(i) || B(i) || (t = [t]),
        !(e = (i._gsap || {}).harness)) {
            for (n = vt.length; n-- && !vt[n].targetTest(i); )
                ;
            e = vt[n]
        }
        for (n = t.length; n--; )
            t[n] && (t[n]._gsap || (t[n]._gsap = new je(t[n],e))) || t.splice(n, 1);
        return t
    }, yt = function(t) {
        return t._gsap || gt(ne(t))[0]._gsap
    }, _t = function(t, e, n) {
        return (n = t[e]) && B(n) ? t[e]() : q(n) && t.getAttribute && t.getAttribute(e) || n
    }, Dt = function(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }, bt = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }, xt = function(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }, wt = function(t, e) {
        for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; )
            ;
        return i < n
    }, Et = function() {
        var t, e, n = ct.length, i = ct.slice(0);
        for (ft = {},
        t = ct.length = 0; t < n; t++)
            (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }, Tt = function(t, e, n, i) {
        ct.length && Et(),
        t.render(e, n, i),
        ct.length && Et()
    }, At = function(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(et).length < 2 ? e : z(t) ? t.trim() : t
    }, Ct = function(t) {
        return t
    }, St = function(t, e) {
        for (var n in e)
            n in t || (t[n] = e[n]);
        return t
    }, kt = function(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }, Ft = function t(e, n) {
        for (var i in n)
            "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = V(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i]);
        return e
    }, Ot = function(t, e) {
        var n, i = {};
        for (n in t)
            n in e || (i[n] = t[n]);
        return i
    }, Mt = function(t) {
        var i, e = t.parent || j, n = t.keyframes ? (i = G(t.keyframes),
        function(t, e) {
            for (var n in e)
                n in t || "duration" === n && i || "ease" === n || (t[n] = e[n])
        }
        ) : St;
        if (X(t.inherit))
            for (; e; )
                n(t, e.vars.defaults),
                e = e.parent || e._dp;
        return t
    }, Lt = function(t, e, n, i) {
        void 0 === n && (n = "_first"),
        void 0 === i && (i = "_last");
        var r = e._prev
          , o = e._next;
        r ? r._next = o : t[n] === e && (t[n] = o),
        o ? o._prev = r : t[i] === e && (t[i] = r),
        e._next = e._prev = e.parent = null
    }, Bt = function(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        t._act = 0
    }, Pt = function(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n; )
                n._dirty = 1,
                n = n.parent;
        return t
    }, jt = function(t) {
        return t._repeat ? Rt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }, Rt = function(t, e) {
        var n = Math.floor(t /= e);
        return t && n === t ? n - 1 : n
    }, It = function(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }, Nt = function(t) {
        return t._end = xt(t._start + (t._tDur / Math.abs(t._ts || t._rts || H) || 0))
    }, Ht = function(t, e) {
        var n = t._dp;
        return n && n.smoothChildTiming && t._ts && (t._start = xt(n._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        Nt(t),
        n._dirty || Pt(n, t)),
        t
    }, zt = function(t, e) {
        var n;
        if ((e._time || e._initted && !e._dur) && (n = It(t.rawTime(), e),
        (!e._dur || Zt(0, e.totalDuration(), n) - e._tTime > H) && e.render(n, !0)),
        Pt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (n = t; n._dp; )
                    0 <= n.rawTime() && n.totalTime(n._tTime),
                    n = n._dp;
            t._zTime = -H
        }
    }, Wt = function(t, e, n, i) {
        return e.parent && Bt(e),
        e._start = xt((W(n) ? n : n || t !== j ? Gt(t, n, e) : t._time) + e._delay),
        e._end = xt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        function(t, e, n, i, r) {
            void 0 === n && (n = "_first"),
            void 0 === i && (i = "_last");
            var o, s = t[i];
            if (r)
                for (o = e[r]; s && s[r] > o; )
                    s = s._prev;
            s ? (e._next = s._next,
            s._next = e) : (e._next = t[n],
            t[n] = e),
            e._next ? e._next._prev = e : t[i] = e,
            e._prev = s,
            e.parent = e._dp = t
        }(t, e, "_first", "_last", t._sort ? "_start" : 0),
        Xt(e) || (t._recent = e),
        i || zt(t, e),
        t
    }, qt = function(t, e) {
        return it.ScrollTrigger ? it.ScrollTrigger.create(e, t) : void 0
    }, Vt = function(t, e, n, i) {
        return We(t, e),
        t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && r !== we.frame ? (ct.push(t),
        t._lazy = [e, i],
        1) : void 0 : 1
    }, Xt = function(t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e
    }, Yt = function(t, e, n, i) {
        var r = t._repeat
          , o = xt(e) || 0
          , s = t._tTime / t._tDur;
        return s && !i && (t._time *= o / t._dur),
        t._dur = o,
        t._tDur = r ? r < 0 ? 1e10 : xt(o * (r + 1) + t._rDelay * r) : o,
        0 < s && !i ? Ht(t, t._tTime = t._tDur * s) : t.parent && Nt(t),
        n || Pt(t.parent, t),
        t
    }, $t = function(t) {
        return t instanceof Ie ? Pt(t) : Yt(t, t._dur)
    }, Ut = {
        _start: 0,
        endTime: ut,
        totalDuration: ut
    }, Gt = function t(e, n, i) {
        var r, o, s, a = e.labels, u = e._recent || Ut, l = e.duration() >= I ? u.endTime(!1) : e._dur;
        return z(n) && (isNaN(n) || n in a) ? (o = n.charAt(0),
        s = "%" === n.substr(-1),
        r = n.indexOf("="),
        "<" === o || ">" === o ? (0 <= r && (n = n.replace(/=/, "")),
        ("<" === o ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(n.substr(1)) || 0) * (s ? (r < 0 ? u : i).totalDuration() / 100 : 1)) : r < 0 ? (n in a || (a[n] = l),
        a[n]) : (o = parseFloat(n.charAt(r - 1) + n.substr(r + 1)),
        s && i && (o = o / 100 * (G(i) ? i[0] : i).totalDuration()),
        1 < r ? t(e, n.substr(0, r - 1), i) + o : l + o)) : null == n ? l : +n
    }, Qt = function(t, e, n) {
        var i, r, o = W(e[1]), s = (o ? 2 : 1) + (t < 2 ? 0 : 1), a = e[s];
        if (o && (a.duration = e[1]),
        a.parent = n,
        t) {
            for (i = a,
            r = n; r && !("immediateRender"in i); )
                i = r.vars.defaults || {},
                r = X(r.vars.inherit) && r.parent;
            a.immediateRender = X(i.immediateRender),
            t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
        }
        return new $e(e[0],a,e[s + 1])
    }, Kt = function(t, e) {
        return t || 0 === t ? e(t) : e
    }, Zt = function(t, e, n) {
        return n < t ? t : e < n ? e : n
    }, Jt = function(t, e) {
        return z(t) && (e = nt.exec(t)) ? t.substr(e.index + e[0].length) : ""
    }, te = [].slice, ee = function(t, e) {
        return t && V(t) && "length"in t && (!e && !t.length || t.length - 1 in t && V(t[0])) && !t.nodeType && t !== i
    }, ne = function(t, e, n) {
        return !z(t) || n || !o && Ee() ? G(t) ? (i = n,
        void 0 === r && (r = []),
        t.forEach(function(t) {
            var e;
            return z(t) && !i || ee(t, 1) ? (e = r).push.apply(e, ne(t)) : r.push(t)
        }) || r) : ee(t) ? te.call(t, 0) : t ? [t] : [] : te.call((e || s).querySelectorAll(t), 0);
        var i, r
    }, ie = function(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }, re = function(t) {
        if (B(t))
            return t;
        var p = V(t) ? t : {
            each: t
        }
          , v = Oe(p.ease)
          , m = p.from || 0
          , g = parseFloat(p.base) || 0
          , y = {}
          , e = 0 < m && m < 1
          , _ = isNaN(m) || e
          , D = p.axis
          , b = m
          , x = m;
        return z(m) ? b = x = {
            center: .5,
            edges: .5,
            end: 1
        }[m] || 0 : !e && _ && (b = m[0],
        x = m[1]),
        function(t, e, n) {
            var i, r, o, s, a, u, l, c, f, h = (n || p).length, d = y[h];
            if (!d) {
                if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, I])[1])) {
                    for (l = -I; l < (l = n[f++].getBoundingClientRect().left) && f < h; )
                        ;
                    f--
                }
                for (d = y[h] = [],
                i = _ ? Math.min(f, h) * b - .5 : m % f,
                r = f === I ? 0 : _ ? h * x / f - .5 : m / f | 0,
                c = I,
                u = l = 0; u < h; u++)
                    o = u % f - i,
                    s = r - (u / f | 0),
                    d[u] = a = D ? Math.abs("y" === D ? s : o) : O(o * o + s * s),
                    l < a && (l = a),
                    a < c && (c = a);
                "random" === m && ie(d),
                d.max = l - c,
                d.min = c,
                d.v = h = (parseFloat(p.amount) || parseFloat(p.each) * (h < f ? h - 1 : D ? "y" === D ? h / f : f : Math.max(f, h / f)) || 0) * ("edges" === m ? -1 : 1),
                d.b = h < 0 ? g - h : g,
                d.u = Jt(p.amount || p.each) || 0,
                v = v && h < 0 ? ke(v) : v
            }
            return h = (d[t] - d.min) / d.max || 0,
            xt(d.b + (v ? v(h) : h) * d.v) + d.u
        }
    }, oe = function(n) {
        var i = Math.pow(10, ((n + "").split(".")[1] || "").length);
        return function(t) {
            var e = Math.round(parseFloat(t) / n) * n * i;
            return (e - e % 1) / i + (W(t) ? 0 : Jt(t))
        }
    }, se = function(u, t) {
        var l, c, e = G(u);
        return !e && V(u) && (l = e = u.radius || I,
        u.values ? (u = ne(u.values),
        (c = !W(u[0])) && (l *= l)) : u = oe(u.increment)),
        Kt(t, e ? B(u) ? function(t) {
            return c = u(t),
            Math.abs(c - t) <= l ? c : t
        }
        : function(t) {
            for (var e, n, i = parseFloat(c ? t.x : t), r = parseFloat(c ? t.y : 0), o = I, s = 0, a = u.length; a--; )
                (e = c ? (e = u[a].x - i) * e + (n = u[a].y - r) * n : Math.abs(u[a] - i)) < o && (o = e,
                s = a);
            return s = !l || o <= l ? u[s] : t,
            c || s === t || W(t) ? s : s + Jt(t)
        }
        : oe(u))
    }, ae = function(t, e, n, i) {
        return Kt(G(t) ? !e : !0 === n ? !!(n = 0) : !i, function() {
            return G(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * i) / i
        })
    }, ue = function(e, n, t) {
        return Kt(t, function(t) {
            return e[~~n(t)]
        })
    }, le = function(t) {
        for (var e, n, i, r, o = 0, s = ""; ~(e = t.indexOf("random(", o)); )
            i = t.indexOf(")", e),
            r = "[" === t.charAt(e + 7),
            n = t.substr(e + 7, i - e - 7).match(r ? et : Q),
            s += t.substr(o, e - o) + ae(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5),
            o = i + 1;
        return s + t.substr(o, t.length - o)
    }, ce = function(e, t, n, i, r) {
        var o = t - e
          , s = i - n;
        return Kt(r, function(t) {
            return n + ((t - e) / o * s || 0)
        })
    }, fe = function(t, e, n) {
        var i, r, o, s = t.labels, a = I;
        for (i in s)
            (r = s[i] - e) < 0 == !!n && r && a > (r = Math.abs(r)) && (o = i,
            a = r);
        return o
    }, he = function(t, e, n) {
        var i, r, o = t.vars, s = o[e];
        if (s)
            return i = o[e + "Params"],
            r = o.callbackScope || t,
            n && ct.length && Et(),
            i ? s.apply(r, i) : s.call(r)
    }, de = function(t) {
        return Bt(t),
        t.scrollTrigger && t.scrollTrigger.kill(!1),
        t.progress() < 1 && he(t, "onInterrupt"),
        t
    }, pe = 255, ve = {
        aqua: [0, pe, pe],
        lime: [0, pe, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, pe],
        navy: [0, 0, 128],
        white: [pe, pe, pe],
        olive: [128, 128, 0],
        yellow: [pe, pe, 0],
        orange: [pe, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [pe, 0, 0],
        pink: [pe, 192, 203],
        cyan: [0, pe, pe],
        transparent: [pe, pe, pe, 0]
    }, me = function(t, e, n) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * pe + .5 | 0
    }, ge = function(t, e, n) {
        var i, r, o, s, a, u, l, c, f, h, d = t ? W(t) ? [t >> 16, t >> 8 & pe, t & pe] : 0 : ve.black;
        if (!d) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            ve[t])
                d = ve[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (r = t.charAt(2)) + r + (o = t.charAt(3)) + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                9 === t.length)
                    return [(d = parseInt(t.substr(1, 6), 16)) >> 16, d >> 8 & pe, d & pe, parseInt(t.substr(7), 16) / 255];
                d = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & pe, t & pe]
            } else if ("hsl" === t.substr(0, 3))
                if (d = h = t.match(Q),
                e) {
                    if (~t.indexOf("="))
                        return d = t.match(K),
                        n && d.length < 4 && (d[3] = 1),
                        d
                } else
                    s = +d[0] % 360 / 360,
                    a = +d[1] / 100,
                    i = 2 * (u = +d[2] / 100) - (r = u <= .5 ? u * (a + 1) : u + a - u * a),
                    3 < d.length && (d[3] *= 1),
                    d[0] = me(s + 1 / 3, i, r),
                    d[1] = me(s, i, r),
                    d[2] = me(s - 1 / 3, i, r);
            else
                d = t.match(Q) || ve.transparent;
            d = d.map(Number)
        }
        return e && !h && (i = d[0] / pe,
        r = d[1] / pe,
        o = d[2] / pe,
        u = ((l = Math.max(i, r, o)) + (c = Math.min(i, r, o))) / 2,
        l === c ? s = a = 0 : (f = l - c,
        a = .5 < u ? f / (2 - l - c) : f / (l + c),
        s = l === i ? (r - o) / f + (r < o ? 6 : 0) : l === r ? (o - i) / f + 2 : (i - r) / f + 4,
        s *= 60),
        d[0] = ~~(s + .5),
        d[1] = ~~(100 * a + .5),
        d[2] = ~~(100 * u + .5)),
        n && d.length < 4 && (d[3] = 1),
        d
    }, ye = function(t) {
        var n = []
          , i = []
          , r = -1;
        return t.split(De).forEach(function(t) {
            var e = t.match(Z) || [];
            n.push.apply(n, e),
            i.push(r += e.length + 1)
        }),
        n.c = i,
        n
    }, _e = function(t, e, n) {
        var i, r, o, s, a = "", u = (t + a).match(De), l = e ? "hsla(" : "rgba(", c = 0;
        if (!u)
            return t;
        if (u = u.map(function(t) {
            return (t = ge(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }),
        n && (o = ye(t),
        (i = n.c).join(a) !== o.c.join(a)))
            for (s = (r = t.replace(De, "1").split(Z)).length - 1; c < s; c++)
                a += r[c] + (~i.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (o.length ? o : u.length ? u : n).shift());
        if (!r)
            for (s = (r = t.split(De)).length - 1; c < s; c++)
                a += r[c] + u[c];
        return a + r[s]
    }, De = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in ve)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), be = /hsl[a]?\(/, xe = function(t) {
        var e, n = t.join(" ");
        if (De.lastIndex = 0,
        De.test(n))
            return e = be.test(n),
            t[1] = _e(t[1], e),
            t[0] = _e(t[0], e, ye(t[1])),
            !0
    }, we = (v = Date.now,
    m = 500,
    g = 33,
    y = v(),
    _ = y,
    b = D = 1e3 / 240,
    w = function t(e) {
        var n, i, r, o, s = v() - _, a = !0 === e;
        if (m < s && (y += s - g),
        (0 < (n = (r = (_ += s) - y) - b) || a) && (o = ++h.frame,
        d = r - 1e3 * h.time,
        h.time = r /= 1e3,
        b += n + (D <= n ? 4 : D - n),
        i = 1),
        a || (u = l(t)),
        i)
            for (p = 0; p < x.length; p++)
                x[p](r, d, o, e)
    }
    ,
    h = {
        time: 0,
        frame: 0,
        tick: function() {
            w(!0)
        },
        deltaRatio: function(t) {
            return d / (1e3 / (t || 60))
        },
        wake: function() {
            e && (!o && Y() && (i = o = window,
            s = i.document || {},
            it.gsap = hn,
            (i.gsapVersions || (i.gsapVersions = [])).push(hn.version),
            ot(rt || i.GreenSockGlobals || !i.gsap && i || {}),
            f = i.requestAnimationFrame),
            u && h.sleep(),
            l = f || function(t) {
                return setTimeout(t, b - 1e3 * h.time + 1 | 0)
            }
            ,
            a = 1,
            w(2))
        },
        sleep: function() {
            (f ? i.cancelAnimationFrame : clearTimeout)(u),
            a = 0,
            l = ut
        },
        lagSmoothing: function(t, e) {
            m = t || 1e8,
            g = Math.min(e, m, 0)
        },
        fps: function(t) {
            D = 1e3 / (t || 240),
            b = 1e3 * h.time + D
        },
        add: function(t) {
            x.indexOf(t) < 0 && x.push(t),
            Ee()
        },
        remove: function(t, e) {
            ~(e = x.indexOf(t)) && x.splice(e, 1) && e <= p && p--
        },
        _listeners: x = []
    }), Ee = function() {
        return !a && we.wake()
    }, Te = {}, Ae = /^[\d.\-M][\d.\-,\s]/, Ce = /["']/g, Se = function(t) {
        var e, n, i, r, o = (t + "").split("("), s = Te[o[0]];
        return s && 1 < o.length && s.config ? s.config.apply(null, ~t.indexOf("{") ? [function(t) {
            for (var e, n, i, r = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, u = o.length; a < u; a++)
                n = o[a],
                e = a !== u - 1 ? n.lastIndexOf(",") : n.length,
                i = n.substr(0, e),
                r[s] = isNaN(i) ? i.replace(Ce, "").trim() : +i,
                s = n.substr(e + 1).trim();
            return r
        }(o[1])] : (e = t,
        n = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        r = e.indexOf("(", n),
        e.substring(n, ~r && r < i ? e.indexOf(")", i + 1) : i)).split(",").map(At)) : Te._CE && Ae.test(t) ? Te._CE("", t) : s
    }, ke = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, Fe = function t(e, n) {
        for (var i, r = e._first; r; )
            r instanceof Ie ? t(r, n) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === n || (r.timeline ? t(r.timeline, n) : (i = r._ease,
            r._ease = r._yEase,
            r._yEase = i,
            r._yoyo = n)),
            r = r._next
    }, Oe = function(t, e) {
        return t && (B(t) ? t : Te[t] || Se(t)) || e
    }, Me = function(t, e, n, i) {
        void 0 === n && (n = function(t) {
            return 1 - e(1 - t)
        }
        ),
        void 0 === i && (i = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        }
        );
        var r, o = {
            easeIn: e,
            easeOut: n,
            easeInOut: i
        };
        return Dt(t, function(t) {
            for (var e in Te[t] = it[t] = o,
            Te[r = t.toLowerCase()] = n,
            o)
                Te[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Te[t + "." + e] = o[e]
        }),
        o
    }, Le = function(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }, Be = function n(i, t, e) {
        var r = 1 <= t ? t : 1
          , o = (e || (i ? .3 : .45)) / (t < 1 ? t : 1)
          , s = o / C * (Math.asin(1 / r) || 0)
          , a = function(t) {
            return 1 === t ? 1 : r * Math.pow(2, -10 * t) * L((t - s) * o) + 1
        }
          , u = "out" === i ? a : "in" === i ? function(t) {
            return 1 - a(1 - t)
        }
        : Le(a);
        return o = C / o,
        u.config = function(t, e) {
            return n(i, t, e)
        }
        ,
        u
    }, Pe = function e(n, i) {
        void 0 === i && (i = 1.70158);
        var r = function(t) {
            return t ? --t * t * ((i + 1) * t + i) + 1 : 0
        }
          , t = "out" === n ? r : "in" === n ? function(t) {
            return 1 - r(1 - t)
        }
        : Le(r);
        return t.config = function(t) {
            return e(n, t)
        }
        ,
        t
    };
    Dt("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var n = e < 5 ? e + 1 : e;
        Me(t + ",Power" + (n - 1), e ? function(t) {
            return Math.pow(t, n)
        }
        : function(t) {
            return t
        }
        , function(t) {
            return 1 - Math.pow(1 - t, n)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
        })
    }),
    Te.Linear.easeNone = Te.none = Te.Linear.easeIn,
    Me("Elastic", Be("in"), Be("out"), Be()),
    E = 7.5625,
    T = 1 / 2.75,
    Me("Bounce", function(t) {
        return 1 - A(1 - t)
    }, A = function(t) {
        return t < T ? E * t * t : t < .7272727272727273 ? E * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? E * (t -= 2.25 / 2.75) * t + .9375 : E * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ),
    Me("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }),
    Me("Circ", function(t) {
        return -(O(1 - t * t) - 1)
    }),
    Me("Sine", function(t) {
        return 1 === t ? 1 : 1 - M(t * S)
    }),
    Me("Back", Pe("in"), Pe("out"), Pe()),
    Te.SteppedEase = Te.steps = it.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var n = 1 / t
              , i = t + (e ? 0 : 1)
              , r = e ? 1 : 0;
            return function(t) {
                return ((i * Zt(0, .99999999, t) | 0) + r) * n
            }
        }
    },
    R.ease = Te["quad.out"],
    Dt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return mt += t + "," + t + "Params,"
    });
    var je = function(t, e) {
        this.id = k++,
        (t._gsap = this).target = t,
        this.harness = e,
        this.get = e ? e.get : _t,
        this.set = e ? e.getSetter : Ze
    }
      , Re = function() {
        function t(t) {
            this.vars = t,
            this._delay = +t.delay || 0,
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
            this._yoyo = !!t.yoyo || !!t.yoyoEase),
            this._ts = 1,
            Yt(this, +t.duration, 1, 1),
            this.data = t.data,
            a || we.wake()
        }
        var e = t.prototype;
        return e.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        e.duration = function(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }
        ,
        e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0,
            Yt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        e.totalTime = function(t, e) {
            if (Ee(),
            !arguments.length)
                return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
                for (Ht(this, t),
                !n._dp || n.parent || zt(n, this); n && n.parent; )
                    n.parent._time !== n._start + (0 <= n._ts ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                    n = n.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Wt(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === H || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
            Tt(this, t, e)),
            this
        }
        ,
        e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + jt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }
        ,
        e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        ,
        e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + jt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        ,
        e.iteration = function(t, e) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Rt(this._tTime, n) + 1 : 1
        }
        ,
        e.timeScale = function(t) {
            if (!arguments.length)
                return this._rts === -H ? 0 : this._rts;
            if (this._rts === t)
                return this;
            var e = this.parent && this._ts ? It(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0,
            this._ts = this._ps || t === -H ? 0 : this._rts,
            function(t) {
                for (var e = t.parent; e && e.parent; )
                    e._dirty = 1,
                    e.totalDuration(),
                    e = e.parent
            }(this.totalTime(Zt(-this._delay, this._tDur, e), !0)),
            Nt(this),
            this
        }
        ,
        e.paused = function(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
            this._ts = this._act = 0) : (Ee(),
            this._ts = this._rts,
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== H && (this._tTime -= H)))),
            this) : this._ps
        }
        ,
        e.startTime = function(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return e && (e._sort || !this.parent) && Wt(e, this, t - this._delay),
                this
            }
            return this._start
        }
        ,
        e.endTime = function(t) {
            return this._start + (X(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        ,
        e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? It(e.rawTime(t), this) : this._tTime : this._tTime
        }
        ,
        e.globalTime = function(t) {
            for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
                n = e._start + n / (e._ts || 1),
                e = e._dp;
            return n
        }
        ,
        e.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
            $t(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        ,
        e.repeatDelay = function(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t,
                $t(this),
                e ? this.time(e) : this
            }
            return this._rDelay
        }
        ,
        e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        e.seek = function(t, e) {
            return this.totalTime(Gt(this, t), X(e))
        }
        ,
        e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, X(e))
        }
        ,
        e.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        e.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        e.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        e.resume = function() {
            return this.paused(!1)
        }
        ,
        e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -H : 0)),
            this) : this._rts < 0
        }
        ,
        e.invalidate = function() {
            return this._initted = this._act = 0,
            this._zTime = -H,
            this
        }
        ,
        e.isActive = function() {
            var t, e = this.parent || this._dp, n = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - H))
        }
        ,
        e.eventCallback = function(t, e, n) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e,
            n && (i[t + "Params"] = n),
            "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
            this) : i[t]
        }
        ,
        e.then = function(i) {
            var r = this;
            return new Promise(function(e) {
                var n = B(i) ? i : Ct
                  , t = function() {
                    var t = r.then;
                    r.then = null,
                    B(n) && (n = n(r)) && (n.then || n === r) && (r.then = t),
                    e(n),
                    r.then = t
                };
                r._initted && 1 === r.totalProgress() && 0 <= r._ts || !r._tTime && r._ts < 0 ? t() : r._prom = t
            }
            )
        }
        ,
        e.kill = function() {
            de(this)
        }
        ,
        t
    }();
    St(Re.prototype, {
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
        _zTime: -H,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Ie = function(i) {
        function t(t, e) {
            var n;
            return void 0 === t && (t = {}),
            (n = i.call(this, t) || this).labels = {},
            n.smoothChildTiming = !!t.smoothChildTiming,
            n.autoRemoveChildren = !!t.autoRemoveChildren,
            n._sort = X(t.sortChildren),
            j && Wt(t.parent || j, F(n), e),
            t.reversed && n.reverse(),
            t.paused && n.paused(!0),
            t.scrollTrigger && qt(F(n), t.scrollTrigger),
            n
        }
        n(t, i);
        var e = t.prototype;
        return e.to = function(t, e, n) {
            return Qt(0, arguments, this),
            this
        }
        ,
        e.from = function(t, e, n) {
            return Qt(1, arguments, this),
            this
        }
        ,
        e.fromTo = function(t, e, n, i) {
            return Qt(2, arguments, this),
            this
        }
        ,
        e.set = function(t, e, n) {
            return e.duration = 0,
            e.parent = this,
            Mt(e).repeatDelay || (e.repeat = 0),
            e.immediateRender = !!e.immediateRender,
            new $e(t,e,Gt(this, n),1),
            this
        }
        ,
        e.call = function(t, e, n) {
            return Wt(this, $e.delayedCall(0, t, e), n)
        }
        ,
        e.staggerTo = function(t, e, n, i, r, o, s) {
            return n.duration = e,
            n.stagger = n.stagger || i,
            n.onComplete = o,
            n.onCompleteParams = s,
            n.parent = this,
            new $e(t,n,Gt(this, r)),
            this
        }
        ,
        e.staggerFrom = function(t, e, n, i, r, o, s) {
            return n.runBackwards = 1,
            Mt(n).immediateRender = X(n.immediateRender),
            this.staggerTo(t, e, n, i, r, o, s)
        }
        ,
        e.staggerFromTo = function(t, e, n, i, r, o, s, a) {
            return i.startAt = n,
            Mt(i).immediateRender = X(i.immediateRender),
            this.staggerTo(t, e, i, r, o, s, a)
        }
        ,
        e.render = function(t, e, n) {
            var i, r, o, s, a, u, l, c, f, h, d, p, v = this._time, m = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, y = t <= 0 ? 0 : xt(t), _ = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (this !== j && m < y && 0 <= t && (y = m),
            y !== this._tTime || n || _) {
                if (v !== this._time && g && (y += this._time - v,
                t += this._time - v),
                i = y,
                f = this._start,
                u = !(c = this._ts),
                _ && (g || (v = this._zTime),
                (t || !e) && (this._zTime = t)),
                this._repeat) {
                    if (d = this._yoyo,
                    a = g + this._rDelay,
                    this._repeat < -1 && t < 0)
                        return this.totalTime(100 * a + t, e, n);
                    if (i = xt(y % a),
                    y === m ? (s = this._repeat,
                    i = g) : ((s = ~~(y / a)) && s === y / a && (i = g,
                    s--),
                    g < i && (i = g)),
                    h = Rt(this._tTime, a),
                    !v && this._tTime && h !== s && (h = s),
                    d && 1 & s && (i = g - i,
                    p = 1),
                    s !== h && !this._lock) {
                        var D = d && 1 & h
                          , b = D === (d && 1 & s);
                        if (s < h && (D = !D),
                        v = D ? 0 : g,
                        this._lock = 1,
                        this.render(v || (p ? 0 : xt(s * a)), e, !g)._lock = 0,
                        this._tTime = y,
                        !e && this.parent && he(this, "onRepeat"),
                        this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                        v && v !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (g = this._dur,
                        m = this._tDur,
                        b && (this._lock = 2,
                        v = D ? g : -1e-4,
                        this.render(v, !0),
                        this.vars.repeatRefresh && !p && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !u)
                            return this;
                        Fe(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (l = function(t, e, n) {
                    var i;
                    if (e < n)
                        for (i = t._first; i && i._start <= n; ) {
                            if ("isPause" === i.data && i._start > e)
                                return i;
                            i = i._next
                        }
                    else
                        for (i = t._last; i && i._start >= n; ) {
                            if ("isPause" === i.data && i._start < e)
                                return i;
                            i = i._prev
                        }
                }(this, xt(v), xt(i))) && (y -= i - (i = l._start)),
                this._tTime = y,
                this._time = i,
                this._act = !c,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = t,
                v = 0),
                !v && i && !e && (he(this, "onStart"),
                this._tTime !== y))
                    return this;
                if (v <= i && 0 <= t)
                    for (r = this._first; r; ) {
                        if (o = r._next,
                        (r._act || i >= r._start) && r._ts && l !== r) {
                            if (r.parent !== this)
                                return this.render(t, e, n);
                            if (r.render(0 < r._ts ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, n),
                            i !== this._time || !this._ts && !u) {
                                l = 0,
                                o && (y += this._zTime = -H);
                                break
                            }
                        }
                        r = o
                    }
                else {
                    r = this._last;
                    for (var x = t < 0 ? t : i; r; ) {
                        if (o = r._prev,
                        (r._act || x <= r._end) && r._ts && l !== r) {
                            if (r.parent !== this)
                                return this.render(t, e, n);
                            if (r.render(0 < r._ts ? (x - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (x - r._start) * r._ts, e, n),
                            i !== this._time || !this._ts && !u) {
                                l = 0,
                                o && (y += this._zTime = x ? -H : H);
                                break
                            }
                        }
                        r = o
                    }
                }
                if (l && !e && (this.pause(),
                l.render(v <= i ? 0 : -H)._zTime = v <= i ? 1 : -1,
                this._ts))
                    return this._start = f,
                    Nt(this),
                    this.render(t, e, n);
                this._onUpdate && !e && he(this, "onUpdate", !0),
                (y === m && m >= this.totalDuration() || !y && v) && (f !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((t || !g) && (y === m && 0 < this._ts || !y && this._ts < 0) && Bt(this, 1),
                e || t < 0 && !v || !y && !v && m || (he(this, y === m && 0 <= t ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(y < m && 0 < this.timeScale()) && this._prom())))
            }
            return this
        }
        ,
        e.add = function(t, e) {
            var n = this;
            if (W(e) || (e = Gt(this, e, t)),
            !(t instanceof Re)) {
                if (G(t))
                    return t.forEach(function(t) {
                        return n.add(t, e)
                    }),
                    this;
                if (z(t))
                    return this.addLabel(t, e);
                if (!B(t))
                    return this;
                t = $e.delayedCall(0, t)
            }
            return this !== t ? Wt(this, t, e) : this
        }
        ,
        e.getChildren = function(t, e, n, i) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === n && (n = !0),
            void 0 === i && (i = -I);
            for (var r = [], o = this._first; o; )
                o._start >= i && (o instanceof $e ? e && r.push(o) : (n && r.push(o),
                t && r.push.apply(r, o.getChildren(!0, e, n)))),
                o = o._next;
            return r
        }
        ,
        e.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
                if (e[n].vars.id === t)
                    return e[n]
        }
        ,
        e.remove = function(t) {
            return z(t) ? this.removeLabel(t) : B(t) ? this.killTweensOf(t) : (Lt(this, t),
            t === this._recent && (this._recent = this._last),
            Pt(this))
        }
        ,
        e.totalTime = function(t, e) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = xt(we.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
            i.prototype.totalTime.call(this, t, e),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        e.addLabel = function(t, e) {
            return this.labels[t] = Gt(this, e),
            this
        }
        ,
        e.removeLabel = function(t) {
            return delete this.labels[t],
            this
        }
        ,
        e.addPause = function(t, e, n) {
            var i = $e.delayedCall(0, e || ut, n);
            return i.data = "isPause",
            this._hasPause = 1,
            Wt(this, i, Gt(this, t))
        }
        ,
        e.removePause = function(t) {
            var e = this._first;
            for (t = Gt(this, t); e; )
                e._start === t && "isPause" === e.data && Bt(e),
                e = e._next
        }
        ,
        e.killTweensOf = function(t, e, n) {
            for (var i = this.getTweensOf(t, n), r = i.length; r--; )
                Ne !== i[r] && i[r].kill(t, e);
            return this
        }
        ,
        e.getTweensOf = function(t, e) {
            for (var n, i = [], r = ne(t), o = this._first, s = W(e); o; )
                o instanceof $e ? wt(o._targets, r) && (s ? (!Ne || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && i.push(o) : (n = o.getTweensOf(r, e)).length && i.push.apply(i, n),
                o = o._next;
            return i
        }
        ,
        e.tweenTo = function(t, e) {
            e = e || {};
            var n, i = this, r = Gt(i, t), o = e, s = o.startAt, a = o.onStart, u = o.onStartParams, l = o.immediateRender, c = $e.to(i, St({
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: r,
                overwrite: "auto",
                duration: e.duration || Math.abs((r - (s && "time"in s ? s.time : i._time)) / i.timeScale()) || H,
                onStart: function() {
                    if (i.pause(),
                    !n) {
                        var t = e.duration || Math.abs((r - (s && "time"in s ? s.time : i._time)) / i.timeScale());
                        c._dur !== t && Yt(c, t, 0, 1).render(c._time, !0, !0),
                        n = 1
                    }
                    a && a.apply(c, u || [])
                }
            }, e));
            return l ? c.render(0) : c
        }
        ,
        e.tweenFromTo = function(t, e, n) {
            return this.tweenTo(e, St({
                startAt: {
                    time: Gt(this, t)
                }
            }, n))
        }
        ,
        e.recent = function() {
            return this._recent
        }
        ,
        e.nextLabel = function(t) {
            return void 0 === t && (t = this._time),
            fe(this, Gt(this, t))
        }
        ,
        e.previousLabel = function(t) {
            return void 0 === t && (t = this._time),
            fe(this, Gt(this, t), 1)
        }
        ,
        e.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + H)
        }
        ,
        e.shiftChildren = function(t, e, n) {
            void 0 === n && (n = 0);
            for (var i, r = this._first, o = this.labels; r; )
                r._start >= n && (r._start += t,
                r._end += t),
                r = r._next;
            if (e)
                for (i in o)
                    o[i] >= n && (o[i] += t);
            return Pt(this)
        }
        ,
        e.invalidate = function() {
            var t = this._first;
            for (this._lock = 0; t; )
                t.invalidate(),
                t = t._next;
            return i.prototype.invalidate.call(this)
        }
        ,
        e.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n; )
                e = n._next,
                this.remove(n),
                n = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            Pt(this)
        }
        ,
        e.totalDuration = function(t) {
            var e, n, i, r = 0, o = this, s = o._last, a = I;
            if (arguments.length)
                return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
            if (o._dirty) {
                for (i = o.parent; s; )
                    e = s._prev,
                    s._dirty && s.totalDuration(),
                    a < (n = s._start) && o._sort && s._ts && !o._lock ? (o._lock = 1,
                    Wt(o, s, n - s._delay, 1)._lock = 0) : a = n,
                    n < 0 && s._ts && (r -= n,
                    (!i && !o._dp || i && i.smoothChildTiming) && (o._start += n / o._ts,
                    o._time -= n,
                    o._tTime -= n),
                    o.shiftChildren(-n, !1, -Infinity),
                    a = 0),
                    s._end > r && s._ts && (r = s._end),
                    s = e;
                Yt(o, o === j && o._time > r ? o._time : r, 1, 1),
                o._dirty = 0
            }
            return o._tDur
        }
        ,
        t.updateRoot = function(t) {
            if (j._ts && (Tt(j, It(t, j)),
            r = we.frame),
            we.frame >= pt) {
                pt += N.autoSleep || 120;
                var e = j._first;
                if ((!e || !e._ts) && N.autoSleep && we._listeners.length < 2) {
                    for (; e && !e._ts; )
                        e = e._next;
                    e || we.sleep()
                }
            }
        }
        ,
        t
    }(Re);
    St(Ie.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Ne, He = function(t, e, n, i, r, o, s, a, u) {
        B(i) && (i = i(r || 0, t, o));
        var l, c = t[e], f = "get" !== n ? n : B(c) ? u ? t[e.indexOf("set") || !B(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : c, h = B(c) ? u ? Qe : Ge : Ue;
        if (z(i) && (~i.indexOf("random(") && (i = le(i)),
        "=" === i.charAt(1) && ((l = parseFloat(f) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Jt(f) || 0)) || 0 === l) && (i = l)),
        f !== i)
            return isNaN(f * i) || "" === i ? function(t, e, n, i, r, o, s) {
                var a, u, l, c, f, h, d, p, v = new un(this._pt,t,e,0,1,en,null,r), m = 0, g = 0;
                for (v.b = n,
                v.e = i,
                n += "",
                (d = ~(i += "").indexOf("random(")) && (i = le(i)),
                o && (o(p = [n, i], t, e),
                n = p[0],
                i = p[1]),
                u = n.match(J) || []; a = J.exec(i); )
                    c = a[0],
                    f = i.substring(m, a.index),
                    l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1),
                    c !== u[g++] && (h = parseFloat(u[g - 1]) || 0,
                    v._pt = {
                        _next: v._pt,
                        p: f || 1 === g ? f : ",",
                        s: h,
                        c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - h,
                        m: l && l < 4 ? Math.round : 0
                    },
                    m = J.lastIndex);
                return v.c = m < i.length ? i.substring(m, i.length) : "",
                v.fp = s,
                (tt.test(i) || d) && (v.e = 0),
                this._pt = v
            }
            .call(this, t, e, f, i, h, a || N.stringFilter, u) : (l = new un(this._pt,t,e,+f || 0,i - (f || 0),"boolean" == typeof c ? tn : Je,0,h),
            u && (l.fp = u),
            s && l.modifier(s, this, t),
            this._pt = l)
    }, ze = function(t, e, n, i, r, o) {
        var s, a, u, l;
        if (ht[t] && !1 !== (s = new ht[t]).init(r, s.rawVars ? e[t] : function(t, e, n, i, r) {
            if (B(t) && (t = Ve(t, r, e, n, i)),
            !V(t) || t.style && t.nodeType || G(t) || U(t))
                return z(t) ? Ve(t, r, e, n, i) : t;
            var o, s = {};
            for (o in t)
                s[o] = Ve(t[o], r, e, n, i);
            return s
        }(e[t], i, r, o, n), n, i, o) && (n._pt = a = new un(n._pt,r,t,0,1,s.render,s,0,s.priority),
        n !== c))
            for (u = n._ptLookup[n._targets.indexOf(r)],
            l = s._props.length; l--; )
                u[s._props[l]] = a;
        return s
    }, We = function t(e, n) {
        var i, r, o, s, a, u, l, c, f, h, d, p, v, m = e.vars, g = m.ease, y = m.startAt, _ = m.immediateRender, D = m.lazy, b = m.onUpdate, x = m.onUpdateParams, w = m.callbackScope, E = m.runBackwards, T = m.yoyoEase, A = m.keyframes, C = m.autoRevert, S = e._dur, k = e._startAt, F = e._targets, O = e.parent, M = O && "nested" === O.data ? O.parent._targets : F, L = "auto" === e._overwrite && !P, B = e.timeline;
        if (B && (!A || !g) && (g = "none"),
        e._ease = Oe(g, R.ease),
        e._yEase = T ? ke(Oe(!0 === T ? g : T, R.ease)) : 0,
        T && e._yoyo && !e._repeat && (T = e._yEase,
        e._yEase = e._ease,
        e._ease = T),
        e._from = !B && !!m.runBackwards,
        !B || A && !m.stagger) {
            if (p = (c = F[0] ? yt(F[0]).harness : 0) && m[c.prop],
            i = Ot(m, lt),
            k && Bt(k.render(-1, !0)),
            y)
                if (Bt(e._startAt = $e.set(F, St({
                    data: "isStart",
                    overwrite: !1,
                    parent: O,
                    immediateRender: !0,
                    lazy: X(D),
                    startAt: null,
                    delay: 0,
                    onUpdate: b,
                    onUpdateParams: x,
                    callbackScope: w,
                    stagger: 0
                }, y))),
                n < 0 && !_ && !C && e._startAt.render(-1, !0),
                _) {
                    if (0 < n && !C && (e._startAt = 0),
                    S && n <= 0)
                        return void (n && (e._zTime = n))
                } else
                    !1 === C && (e._startAt = 0);
            else if (E && S)
                if (k)
                    !C && (e._startAt = 0);
                else if (n && (_ = !1),
                o = St({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: _ && X(D),
                    immediateRender: _,
                    stagger: 0,
                    parent: O
                }, i),
                p && (o[c.prop] = p),
                Bt(e._startAt = $e.set(F, o)),
                n < 0 && e._startAt.render(-1, !0),
                e._zTime = n,
                _) {
                    if (!n)
                        return
                } else
                    t(e._startAt, H);
            for (e._pt = 0,
            D = S && X(D) || D && !S,
            r = 0; r < F.length; r++) {
                if (l = (a = F[r])._gsap || gt(F)[r]._gsap,
                e._ptLookup[r] = h = {},
                ft[l.id] && ct.length && Et(),
                d = M === F ? r : M.indexOf(a),
                c && !1 !== (f = new c).init(a, p || i, e, d, M) && (e._pt = s = new un(e._pt,a,f.name,0,1,f.render,f,0,f.priority),
                f._props.forEach(function(t) {
                    h[t] = s
                }),
                f.priority && (u = 1)),
                !c || p)
                    for (o in i)
                        ht[o] && (f = ze(o, i, e, d, a, M)) ? f.priority && (u = 1) : h[o] = s = He.call(e, a, o, "get", i[o], d, M, 0, m.stringFilter);
                e._op && e._op[r] && e.kill(a, e._op[r]),
                L && e._pt && (Ne = e,
                j.killTweensOf(a, h, e.globalTime(n)),
                v = !e.parent,
                Ne = 0),
                e._pt && D && (ft[l.id] = 1)
            }
            u && an(e),
            e._onInit && e._onInit(e)
        }
        e._onUpdate = b,
        e._initted = (!e._op || e._pt) && !v,
        A && n <= 0 && B.render(I, !0, !0)
    }, qe = function(t, n, e, i) {
        var r, o, s = n.ease || i || "power1.inOut";
        if (G(n))
            o = e[t] || (e[t] = []),
            n.forEach(function(t, e) {
                return o.push({
                    t: e / (n.length - 1) * 100,
                    v: t,
                    e: s
                })
            });
        else
            for (r in n)
                o = e[r] || (e[r] = []),
                "ease" === r || o.push({
                    t: parseFloat(t),
                    v: n[r],
                    e: s
                })
    }, Ve = function(t, e, n, i, r) {
        return B(t) ? t.call(e, n, i, r) : z(t) && ~t.indexOf("random(") ? le(t) : t
    }, Xe = mt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Ye = {};
    Dt(Xe + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Ye[t] = 1
    });
    var $e = function(k) {
        function r(t, e, n, i) {
            var r;
            "number" == typeof e && (n.duration = e,
            e = n,
            n = null);
            var o, s, a, u, l, c, f, h, d = (r = k.call(this, i ? e : Mt(e)) || this).vars, p = d.duration, v = d.delay, m = d.immediateRender, g = d.stagger, y = d.overwrite, _ = d.keyframes, D = d.defaults, b = d.scrollTrigger, x = d.yoyoEase, w = e.parent || j, E = (G(t) || U(t) ? W(t[0]) : "length"in e) ? [t] : ne(t);
            if (r._targets = E.length ? gt(E) : st(0, !N.nullTargetWarn) || [],
            r._ptLookup = [],
            r._overwrite = y,
            _ || g || $(p) || $(v)) {
                if (e = r.vars,
                (o = r.timeline = new Ie({
                    data: "nested",
                    defaults: D || {}
                })).kill(),
                o.parent = o._dp = F(r),
                o._start = 0,
                g || $(p) || $(v)) {
                    if (u = E.length,
                    f = g && re(g),
                    V(g))
                        for (l in g)
                            ~Xe.indexOf(l) && (h || (h = {}),
                            h[l] = g[l]);
                    for (s = 0; s < u; s++)
                        (a = Ot(e, Ye)).stagger = 0,
                        x && (a.yoyoEase = x),
                        h && kt(a, h),
                        c = E[s],
                        a.duration = +Ve(p, F(r), s, c, E),
                        a.delay = (+Ve(v, F(r), s, c, E) || 0) - r._delay,
                        !g && 1 === u && a.delay && (r._delay = v = a.delay,
                        r._start += v,
                        a.delay = 0),
                        o.to(c, a, f ? f(s, c, E) : 0),
                        o._ease = Te.none;
                    o.duration() ? p = v = 0 : r.timeline = 0
                } else if (_) {
                    Mt(St(o.vars.defaults, {
                        ease: "none"
                    })),
                    o._ease = Oe(_.ease || e.ease || "none");
                    var T, A, C, S = 0;
                    if (G(_))
                        _.forEach(function(t) {
                            return o.to(E, t, ">")
                        });
                    else {
                        for (l in a = {},
                        _)
                            "ease" === l || "easeEach" === l || qe(l, _[l], a, _.easeEach);
                        for (l in a)
                            for (T = a[l].sort(function(t, e) {
                                return t.t - e.t
                            }),
                            s = S = 0; s < T.length; s++)
                                (C = {
                                    ease: (A = T[s]).e,
                                    duration: (A.t - (s ? T[s - 1].t : 0)) / 100 * p
                                })[l] = A.v,
                                o.to(E, C, S),
                                S += C.duration;
                        o.duration() < p && o.to({}, {
                            duration: p - o.duration()
                        })
                    }
                }
                p || r.duration(p = o.duration())
            } else
                r.timeline = 0;
            return !0 !== y || P || (Ne = F(r),
            j.killTweensOf(E),
            Ne = 0),
            Wt(w, F(r), n),
            e.reversed && r.reverse(),
            e.paused && r.paused(!0),
            (m || !p && !_ && r._start === xt(w._time) && X(m) && function t(e) {
                return !e || e._ts && t(e.parent)
            }(F(r)) && "nested" !== w.data) && (r._tTime = -H,
            r.render(Math.max(0, -v))),
            b && qt(F(r), b),
            r
        }
        n(r, k);
        var t = r.prototype;
        return t.render = function(t, e, n) {
            var i, r, o, s, a, u, l, c, f, h = this._time, d = this._tDur, p = this._dur, v = d - H < t && 0 <= t ? d : t < H ? 0 : t;
            if (p) {
                if (v !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                    if (i = v,
                    c = this.timeline,
                    this._repeat) {
                        if (s = p + this._rDelay,
                        this._repeat < -1 && t < 0)
                            return this.totalTime(100 * s + t, e, n);
                        if (i = xt(v % s),
                        v === d ? (o = this._repeat,
                        i = p) : ((o = ~~(v / s)) && o === v / s && (i = p,
                        o--),
                        p < i && (i = p)),
                        (u = this._yoyo && 1 & o) && (f = this._yEase,
                        i = p - i),
                        a = Rt(this._tTime, s),
                        i === h && !n && this._initted)
                            return this;
                        o !== a && (c && this._yEase && Fe(c, u),
                        !this.vars.repeatRefresh || u || this._lock || (this._lock = n = 1,
                        this.render(xt(s * o), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Vt(this, t < 0 ? t : i, n, e))
                            return this._tTime = 0,
                            this;
                        if (p !== this._dur)
                            return this.render(t, e, n)
                    }
                    if (this._tTime = v,
                    this._time = i,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = l = (f || this._ease)(i / p),
                    this._from && (this.ratio = l = 1 - l),
                    i && !h && !e && (he(this, "onStart"),
                    this._tTime !== v))
                        return this;
                    for (r = this._pt; r; )
                        r.r(l, r.d),
                        r = r._next;
                    c && c.render(t < 0 ? t : !i && u ? -H : c._dur * c._ease(i / this._dur), e, n) || this._startAt && (this._zTime = t),
                    this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n),
                    he(this, "onUpdate")),
                    this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && he(this, "onRepeat"),
                    v !== this._tDur && v || this._tTime !== v || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                    (t || !p) && (v === this._tDur && 0 < this._ts || !v && this._ts < 0) && Bt(this, 1),
                    e || t < 0 && !h || !v && !h || (he(this, v === d ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(v < d && 0 < this.timeScale()) && this._prom()))
                }
            } else
                !function(t, e, n, i) {
                    var r, o, s, a = t.ratio, u = e < 0 || !e && (!t._start && function t(e) {
                        var n = e.parent;
                        return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
                    }(t) && (t._initted || !Xt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Xt(t)) ? 0 : 1, l = t._rDelay, c = 0;
                    if (l && t._repeat && (c = Zt(0, t._tDur, e),
                    o = Rt(c, l),
                    t._yoyo && 1 & o && (u = 1 - u),
                    o !== Rt(t._tTime, l) && (a = 1 - u,
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                    u !== a || i || t._zTime === H || !e && t._zTime) {
                        if (!t._initted && Vt(t, e, i, n))
                            return;
                        for (s = t._zTime,
                        t._zTime = e || (n ? H : 0),
                        n || (n = e && !s),
                        t.ratio = u,
                        t._from && (u = 1 - u),
                        t._time = 0,
                        t._tTime = c,
                        r = t._pt; r; )
                            r.r(u, r.d),
                            r = r._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                        t._onUpdate && !n && he(t, "onUpdate"),
                        c && t._repeat && !n && t.parent && he(t, "onRepeat"),
                        (e >= t._tDur || e < 0) && t.ratio === u && (u && Bt(t, 1),
                        n || (he(t, u ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()))
                    } else
                        t._zTime || (t._zTime = e)
                }(this, t, e, n);
            return this
        }
        ,
        t.targets = function() {
            return this._targets
        }
        ,
        t.invalidate = function() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(),
            k.prototype.invalidate.call(this)
        }
        ,
        t.kill = function(t, e) {
            if (void 0 === e && (e = "all"),
            !(t || e && "all" !== e))
                return this._lazy = this._pt = 0,
                this.parent ? de(this) : this;
            if (this.timeline) {
                var n = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Ne && !0 !== Ne.vars.overwrite)._first || de(this),
                this.parent && n !== this.timeline.totalDuration() && Yt(this, this._dur * this.timeline._tDur / n, 0, 1),
                this
            }
            var i, r, o, s, a, u, l, c = this._targets, f = t ? ne(t) : c, h = this._ptLookup, d = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n]; )
                    ;
                return n < 0
            }(c, f))
                return "all" === e && (this._pt = 0),
                de(this);
            for (i = this._op = this._op || [],
            "all" !== e && (z(e) && (a = {},
            Dt(e, function(t) {
                return a[t] = 1
            }),
            e = a),
            e = function(t, e) {
                var n, i, r, o, s = t[0] ? yt(t[0]).harness : 0, a = s && s.aliases;
                if (!a)
                    return e;
                for (i in n = kt({}, e),
                a)
                    if (i in n)
                        for (r = (o = a[i].split(",")).length; r--; )
                            n[o[r]] = n[i];
                return n
            }(c, e)),
            l = c.length; l--; )
                if (~f.indexOf(c[l]))
                    for (a in r = h[l],
                    "all" === e ? (i[l] = e,
                    s = r,
                    o = {}) : (o = i[l] = i[l] || {},
                    s = e),
                    s)
                        (u = r && r[a]) && ("kill"in u.d && !0 !== u.d.kill(a) || Lt(this, u, "_pt"),
                        delete r[a]),
                        "all" !== o && (o[a] = 1);
            return this._initted && !this._pt && d && de(this),
            this
        }
        ,
        r.to = function(t, e) {
            return new r(t,e,arguments[2])
        }
        ,
        r.from = function(t, e) {
            return Qt(1, arguments)
        }
        ,
        r.delayedCall = function(t, e, n, i) {
            return new r(e,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: i
            })
        }
        ,
        r.fromTo = function(t, e, n) {
            return Qt(2, arguments)
        }
        ,
        r.set = function(t, e) {
            return e.duration = 0,
            e.repeatDelay || (e.repeat = 0),
            new r(t,e)
        }
        ,
        r.killTweensOf = function(t, e, n) {
            return j.killTweensOf(t, e, n)
        }
        ,
        r
    }(Re);
    St($e.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    Dt("staggerTo,staggerFrom,staggerFromTo", function(n) {
        $e[n] = function() {
            var t = new Ie
              , e = te.call(arguments, 0);
            return e.splice("staggerFromTo" === n ? 5 : 4, 0, 0),
            t[n].apply(t, e)
        }
    });
    var Ue = function(t, e, n) {
        return t[e] = n
    }
      , Ge = function(t, e, n) {
        return t[e](n)
    }
      , Qe = function(t, e, n, i) {
        return t[e](i.fp, n)
    }
      , Ke = function(t, e, n) {
        return t.setAttribute(e, n)
    }
      , Ze = function(t, e) {
        return B(t[e]) ? Ge : q(t[e]) && t.setAttribute ? Ke : Ue
    }
      , Je = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    }
      , tn = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
      , en = function(t, e) {
        var n = e._pt
          , i = "";
        if (!t && e.b)
            i = e.b;
        else if (1 === t && e.e)
            i = e.e;
        else {
            for (; n; )
                i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i,
                n = n._next;
            i += e.c
        }
        e.set(e.t, e.p, i, e)
    }
      , nn = function(t, e) {
        for (var n = e._pt; n; )
            n.r(t, n.d),
            n = n._next
    }
      , rn = function(t, e, n, i) {
        for (var r, o = this._pt; o; )
            r = o._next,
            o.p === i && o.modifier(t, e, n),
            o = r
    }
      , on = function(t) {
        for (var e, n, i = this._pt; i; )
            n = i._next,
            i.p === t && !i.op || i.op === t ? Lt(this, i, "_pt") : i.dep || (e = 1),
            i = n;
        return !e
    }
      , sn = function(t, e, n, i) {
        i.mSet(t, e, i.m.call(i.tween, n, i.mt), i)
    }
      , an = function(t) {
        for (var e, n, i, r, o = t._pt; o; ) {
            for (e = o._next,
            n = i; n && n.pr > o.pr; )
                n = n._next;
            (o._prev = n ? n._prev : r) ? o._prev._next = o : i = o,
            (o._next = n) ? n._prev = o : r = o,
            o = e
        }
        t._pt = i
    }
      , un = function() {
        function t(t, e, n, i, r, o, s, a, u) {
            this.t = e,
            this.s = i,
            this.c = r,
            this.p = n,
            this.r = o || Je,
            this.d = s || this,
            this.set = a || Ue,
            this.pr = u || 0,
            (this._next = t) && (t._prev = this)
        }
        return t.prototype.modifier = function(t, e, n) {
            this.mSet = this.mSet || this.set,
            this.set = sn,
            this.m = t,
            this.mt = n,
            this.tween = e
        }
        ,
        t
    }();
    Dt(mt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return lt[t] = 1
    }),
    it.TweenMax = it.TweenLite = $e,
    it.TimelineLite = it.TimelineMax = Ie,
    j = new Ie({
        sortChildren: !1,
        defaults: R,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    N.stringFilter = xe;
    var ln = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            e.forEach(function(t) {
                return function(t) {
                    var e = (t = !t.name && t.default || t).name
                      , n = B(t)
                      , i = e && !n && t.init ? function() {
                        this._props = []
                    }
                    : t
                      , r = {
                        init: ut,
                        render: nn,
                        add: He,
                        kill: on,
                        modifier: rn,
                        rawVars: 0
                    }
                      , o = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Ze,
                        aliases: {},
                        register: 0
                    };
                    if (Ee(),
                    t !== i) {
                        if (ht[e])
                            return;
                        St(i, St(Ot(t, r), o)),
                        kt(i.prototype, kt(r, Ot(t, o))),
                        ht[i.prop = e] = i,
                        t.targetTest && (vt.push(i),
                        lt[e] = 1),
                        e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    at(e, i),
                    t.register && t.register(hn, i, un)
                }(t)
            })
        },
        timeline: function(t) {
            return new Ie(t)
        },
        getTweensOf: function(t, e) {
            return j.getTweensOf(t, e)
        },
        getProperty: function(i, t, e, n) {
            z(i) && (i = ne(i)[0]);
            var r = yt(i || {}).get
              , o = e ? Ct : At;
            return "native" === e && (e = ""),
            i ? t ? o((ht[t] && ht[t].get || r)(i, t, e, n)) : function(t, e, n) {
                return o((ht[t] && ht[t].get || r)(i, t, e, n))
            }
            : i
        },
        quickSetter: function(n, e, i) {
            if (1 < (n = ne(n)).length) {
                var r = n.map(function(t) {
                    return hn.quickSetter(t, e, i)
                })
                  , o = r.length;
                return function(t) {
                    for (var e = o; e--; )
                        r[e](t)
                }
            }
            n = n[0] || {};
            var s = ht[e]
              , a = yt(n)
              , u = a.harness && (a.harness.aliases || {})[e] || e
              , l = s ? function(t) {
                var e = new s;
                c._pt = 0,
                e.init(n, i ? t + i : t, c, 0, [n]),
                e.render(1, e),
                c._pt && nn(1, c)
            }
            : a.set(n, u);
            return s ? l : function(t) {
                return l(n, u, i ? t + i : t, a, 1)
            }
        },
        isTweening: function(t) {
            return 0 < j.getTweensOf(t, !0).length
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Oe(t.ease, R.ease)),
            Ft(R, t || {})
        },
        config: function(t) {
            return Ft(N, t || {})
        },
        registerEffect: function(t) {
            var i = t.name
              , r = t.effect
              , e = t.plugins
              , o = t.defaults
              , n = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !ht[t] && !it[t] && st()
            }),
            dt[i] = function(t, e, n) {
                return r(ne(t), St(e || {}, o), n)
            }
            ,
            n && (Ie.prototype[i] = function(t, e, n) {
                return this.add(dt[i](t, V(e) ? e : (n = e) && {}, this), n)
            }
            )
        },
        registerEase: function(t, e) {
            Te[t] = Oe(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Oe(t, e) : Te
        },
        getById: function(t) {
            return j.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var n, i, r = new Ie(t);
            for (r.smoothChildTiming = X(t.smoothChildTiming),
            j.remove(r),
            r._dp = 0,
            r._time = r._tTime = j._time,
            n = j._first; n; )
                i = n._next,
                !e && !n._dur && n instanceof $e && n.vars.onComplete === n._targets[0] || Wt(r, n, n._start - n._delay),
                n = i;
            return Wt(j, r, 0),
            r
        },
        utils: {
            wrap: function t(e, n, i) {
                var r = n - e;
                return G(e) ? ue(e, t(0, e.length), n) : Kt(i, function(t) {
                    return (r + (t - e) % r) % r + e
                })
            },
            wrapYoyo: function t(e, n, i) {
                var r = n - e
                  , o = 2 * r;
                return G(e) ? ue(e, t(0, e.length - 1), n) : Kt(i, function(t) {
                    return e + (r < (t = (o + (t - e) % o) % o || 0) ? o - t : t)
                })
            },
            distribute: re,
            random: ae,
            snap: se,
            normalize: function(t, e, n) {
                return ce(t, e, 0, 1, n)
            },
            getUnit: Jt,
            clamp: function(e, n, t) {
                return Kt(t, function(t) {
                    return Zt(e, n, t)
                })
            },
            splitColor: ge,
            toArray: ne,
            selector: function(n) {
                return n = ne(n)[0] || st() || {},
                function(t) {
                    var e = n.current || n.nativeElement || n;
                    return ne(t, e.querySelectorAll ? e : e === n ? st() || s.createElement("div") : n)
                }
            },
            mapRange: ce,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function(e, n) {
                return function(t) {
                    return e(parseFloat(t)) + (n || Jt(t))
                }
            },
            interpolate: function t(e, n, i, r) {
                var o = isNaN(e + n) ? 0 : function(t) {
                    return (1 - t) * e + t * n
                }
                ;
                if (!o) {
                    var s, a, u, l, c, f = z(e), h = {};
                    if (!0 === i && (r = 1) && (i = null),
                    f)
                        e = {
                            p: e
                        },
                        n = {
                            p: n
                        };
                    else if (G(e) && !G(n)) {
                        for (u = [],
                        l = e.length,
                        c = l - 2,
                        a = 1; a < l; a++)
                            u.push(t(e[a - 1], e[a]));
                        l--,
                        o = function(t) {
                            t *= l;
                            var e = Math.min(c, ~~t);
                            return u[e](t - e)
                        }
                        ,
                        i = n
                    } else
                        r || (e = kt(G(e) ? [] : {}, e));
                    if (!u) {
                        for (s in n)
                            He.call(h, e, s, "get", n[s]);
                        o = function(t) {
                            return nn(t, h) || (f ? e.p : e)
                        }
                    }
                }
                return Kt(i, o)
            },
            shuffle: ie
        },
        install: ot,
        effects: dt,
        ticker: we,
        updateRoot: Ie.updateRoot,
        plugins: ht,
        globalTimeline: j,
        core: {
            PropTween: un,
            globals: at,
            Tween: $e,
            Timeline: Ie,
            Animation: Re,
            getCache: yt,
            _removeLinkedListItem: Lt,
            suppressOverwrites: function(t) {
                return P = t
            }
        }
    };
    Dt("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return ln[t] = $e[t]
    }),
    we.add(Ie.updateRoot),
    c = ln.to({}, {
        duration: 0
    });
    var cn = function(t, e) {
        for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
            n = n._next;
        return n
    }
      , fn = function(t, r) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, i, e) {
                e._onInit = function(t) {
                    var e, n;
                    if (z(i) && (e = {},
                    Dt(i, function(t) {
                        return e[t] = 1
                    }),
                    i = e),
                    r) {
                        for (n in e = {},
                        i)
                            e[n] = r(i[n]);
                        i = e
                    }
                    !function(t, e) {
                        var n, i, r, o = t._targets;
                        for (n in e)
                            for (i = o.length; i--; )
                                (r = t._ptLookup[i][n]) && (r = r.d) && (r._pt && (r = cn(r, n)),
                                r && r.modifier && r.modifier(e[n], t, o[i], n))
                    }(t, i)
                }
            }
        }
    }
      , hn = ln.registerPlugin({
        name: "attr",
        init: function(t, e, n, i, r) {
            var o, s;
            for (o in e)
                (s = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], i, r, 0, 0, o)) && (s.op = o),
                this._props.push(o)
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var n = e.length; n--; )
                this.add(t, n, t[n] || 0, e[n])
        }
    }, fn("roundProps", oe), fn("modifiers"), fn("snap", se)) || ln;
    $e.version = Ie.version = hn.version = "3.9.1",
    e = 1,
    Y() && Ee();
    var dn, pn, vn, mn, gn, yn, _n, Dn = Te.Power0, bn = Te.Power1, xn = Te.Power2, wn = Te.Power3, En = Te.Power4, Tn = Te.Linear, An = Te.Quad, Cn = Te.Cubic, Sn = Te.Quart, kn = Te.Quint, Fn = Te.Strong, On = Te.Elastic, Mn = Te.Back, Ln = Te.SteppedEase, Bn = Te.Bounce, Pn = Te.Sine, jn = Te.Expo, Rn = Te.Circ, In = {}, Nn = 180 / Math.PI, Hn = Math.PI / 180, zn = Math.atan2, Wn = /([A-Z])/g, qn = /(?:left|right|width|margin|padding|x)/i, Vn = /[\s,\(]\S/, Xn = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Yn = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }, $n = function(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }, Un = function(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }, Gn = function(t, e) {
        var n = e.s + e.c * t;
        e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
    }, Qn = function(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }, Kn = function(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }, Zn = function(t, e, n) {
        return t.style[e] = n
    }, Jn = function(t, e, n) {
        return t.style.setProperty(e, n)
    }, ti = function(t, e, n) {
        return t._gsap[e] = n
    }, ei = function(t, e, n) {
        return t._gsap.scaleX = t._gsap.scaleY = n
    }, ni = function(t, e, n, i, r) {
        var o = t._gsap;
        o.scaleX = o.scaleY = n,
        o.renderTransform(r, o)
    }, ii = function(t, e, n, i, r) {
        var o = t._gsap;
        o[e] = n,
        o.renderTransform(r, o)
    }, ri = "transform", oi = ri + "Origin", si = function(t, e) {
        var n = pn.createElementNS ? pn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : pn.createElement(t);
        return n.style ? n : pn.createElement(t)
    }, ai = function t(e, n, i) {
        var r = getComputedStyle(e);
        return r[n] || r.getPropertyValue(n.replace(Wn, "-$1").toLowerCase()) || r.getPropertyValue(n) || !i && t(e, li(n) || n, 1) || ""
    }, ui = "O,Moz,ms,Ms,Webkit".split(","), li = function(t, e, n) {
        var i = (e || gn).style
          , r = 5;
        if (t in i && !n)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(ui[r] + t in i); )
            ;
        return r < 0 ? null : (3 === r ? "ms" : 0 <= r ? ui[r] : "") + t
    }, ci = function() {
        "undefined" != typeof window && window.document && (dn = window,
        pn = dn.document,
        vn = pn.documentElement,
        gn = si("div") || {
            style: {}
        },
        si("div"),
        ri = li(ri),
        oi = ri + "Origin",
        gn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        _n = !!li("perspective"),
        mn = 1)
    }, fi = function t(e) {
        var n, i = si("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, o = this.nextSibling, s = this.style.cssText;
        if (vn.appendChild(i),
        i.appendChild(this),
        this.style.display = "block",
        e)
            try {
                n = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = t
            } catch (t) {}
        else
            this._gsapBBox && (n = this._gsapBBox());
        return r && (o ? r.insertBefore(this, o) : r.appendChild(this)),
        vn.removeChild(i),
        this.style.cssText = s,
        n
    }, hi = function(t, e) {
        for (var n = e.length; n--; )
            if (t.hasAttribute(e[n]))
                return t.getAttribute(e[n])
    }, di = function(e) {
        var n;
        try {
            n = e.getBBox()
        } catch (t) {
            n = fi.call(e, !0)
        }
        return n && (n.width || n.height) || e.getBBox === fi || (n = fi.call(e, !0)),
        !n || n.width || n.x || n.y ? n : {
            x: +hi(e, ["x", "cx", "x1"]) || 0,
            y: +hi(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }, pi = function(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !di(t))
    }, vi = function(t, e) {
        if (e) {
            var n = t.style;
            e in In && e !== oi && (e = ri),
            n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
            n.removeProperty(e.replace(Wn, "-$1").toLowerCase())) : n.removeAttribute(e)
        }
    }, mi = function(t, e, n, i, r, o) {
        var s = new un(t._pt,e,n,0,1,o ? Kn : Qn);
        return (t._pt = s).b = i,
        s.e = r,
        t._props.push(n),
        s
    }, gi = {
        deg: 1,
        rad: 1,
        turn: 1
    }, yi = function t(e, n, i, r) {
        var o, s, a, u, l = parseFloat(i) || 0, c = (i + "").trim().substr((l + "").length) || "px", f = gn.style, h = qn.test(n), d = "svg" === e.tagName.toLowerCase(), p = (d ? "client" : "offset") + (h ? "Width" : "Height"), v = "px" === r, m = "%" === r;
        return r === c || !l || gi[r] || gi[c] ? l : ("px" !== c && !v && (l = t(e, n, i, "px")),
        u = e.getCTM && pi(e),
        !m && "%" !== c || !In[n] && !~n.indexOf("adius") ? (f[h ? "width" : "height"] = 100 + (v ? c : r),
        s = ~n.indexOf("adius") || "em" === r && e.appendChild && !d ? e : e.parentNode,
        u && (s = (e.ownerSVGElement || {}).parentNode),
        s && s !== pn && s.appendChild || (s = pn.body),
        (a = s._gsap) && m && a.width && h && a.time === we.time ? bt(l / a.width * 100) : ((m || "%" === c) && (f.position = ai(e, "position")),
        s === e && (f.position = "static"),
        s.appendChild(gn),
        o = gn[p],
        s.removeChild(gn),
        f.position = "absolute",
        h && m && ((a = yt(s)).time = we.time,
        a.width = s[p]),
        bt(v ? o * l / 100 : o && l ? 100 / o * l : 0))) : (o = u ? e.getBBox()[h ? "width" : "height"] : e[p],
        bt(m ? l / o * 100 : l / 100 * o)))
    }, _i = function(t, e, n, i) {
        var r;
        return mn || ci(),
        e in Xn && "transform" !== e && ~(e = Xn[e]).indexOf(",") && (e = e.split(",")[0]),
        In[e] && "transform" !== e ? (r = Fi(t, i),
        r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : Oi(ai(t, oi)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || i || ~(r + "").indexOf("calc(")) && (r = wi[e] && wi[e](t, e, n) || ai(t, e) || _t(t, e) || ("opacity" === e ? 1 : 0)),
        n && !~(r + "").trim().indexOf(" ") ? yi(t, e, r, n) + n : r
    }, Di = function(t, e, n, i) {
        if (!n || "none" === n) {
            var r = li(e, t, 1)
              , o = r && ai(t, r, 1);
            o && o !== n ? (e = r,
            n = o) : "borderColor" === e && (n = ai(t, "borderTopColor"))
        }
        var s, a, u, l, c, f, h, d, p, v, m, g, y = new un(this._pt,t.style,e,0,1,en), _ = 0, D = 0;
        if (y.b = n,
        y.e = i,
        n += "",
        "auto" === (i += "") && (t.style[e] = i,
        i = ai(t, e) || i,
        t.style[e] = n),
        xe(s = [n, i]),
        i = s[1],
        u = (n = s[0]).match(Z) || [],
        (i.match(Z) || []).length) {
            for (; a = Z.exec(i); )
                h = a[0],
                p = i.substring(_, a.index),
                c ? c = (c + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (c = 1),
                h !== (f = u[D++] || "") && (l = parseFloat(f) || 0,
                m = f.substr((l + "").length),
                (g = "=" === h.charAt(1) ? +(h.charAt(0) + "1") : 0) && (h = h.substr(2)),
                d = parseFloat(h),
                v = h.substr((d + "").length),
                _ = Z.lastIndex - v.length,
                v || (v = v || N.units[e] || m,
                _ === i.length && (i += v,
                y.e += v)),
                m !== v && (l = yi(t, e, f, v) || 0),
                y._pt = {
                    _next: y._pt,
                    p: p || 1 === D ? p : ",",
                    s: l,
                    c: g ? g * d : d - l,
                    m: c && c < 4 || "zIndex" === e ? Math.round : 0
                });
            y.c = _ < i.length ? i.substring(_, i.length) : ""
        } else
            y.r = "display" === e && "none" === i ? Kn : Qn;
        return tt.test(i) && (y.e = 0),
        this._pt = y
    }, bi = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, xi = function(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var n, i, r, o = e.t, s = o.style, a = e.u, u = o._gsap;
            if ("all" === a || !0 === a)
                s.cssText = "",
                i = 1;
            else
                for (r = (a = a.split(",")).length; -1 < --r; )
                    n = a[r],
                    In[n] && (i = 1,
                    n = "transformOrigin" === n ? oi : ri),
                    vi(o, n);
            i && (vi(o, ri),
            u && (u.svg && o.removeAttribute("transform"),
            Fi(o, 1),
            u.uncache = 1))
        }
    }, wi = {
        clearProps: function(t, e, n, i, r) {
            if ("isFromStart" !== r.data) {
                var o = t._pt = new un(t._pt,e,n,0,0,xi);
                return o.u = i,
                o.pr = -10,
                o.tween = r,
                t._props.push(n),
                1
            }
        }
    }, Ei = [1, 0, 0, 1, 0, 0], Ti = {}, Ai = function(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }, Ci = function(t) {
        var e = ai(t, ri);
        return Ai(e) ? Ei : e.substr(7).match(K).map(bt)
    }, Si = function(t, e) {
        var n, i, r, o, s = t._gsap || yt(t), a = t.style, u = Ci(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? Ei : u : (u !== Ei || t.offsetParent || t === vn || s.svg || (r = a.display,
        a.display = "block",
        (n = t.parentNode) && t.offsetParent || (o = 1,
        i = t.nextSibling,
        vn.appendChild(t)),
        u = Ci(t),
        r ? a.display = r : vi(t, "display"),
        o && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : vn.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }, ki = function(t, e, n, i, r, o) {
        var s, a, u, l = t._gsap, c = r || Si(t, !0), f = l.xOrigin || 0, h = l.yOrigin || 0, d = l.xOffset || 0, p = l.yOffset || 0, v = c[0], m = c[1], g = c[2], y = c[3], _ = c[4], D = c[5], b = e.split(" "), x = parseFloat(b[0]) || 0, w = parseFloat(b[1]) || 0;
        n ? c !== Ei && (a = v * y - m * g) && (u = x * (-m / a) + w * (v / a) - (v * D - m * _) / a,
        x = x * (y / a) + w * (-g / a) + (g * D - y * _) / a,
        w = u) : (x = (s = di(t)).x + (~b[0].indexOf("%") ? x / 100 * s.width : x),
        w = s.y + (~(b[1] || b[0]).indexOf("%") ? w / 100 * s.height : w)),
        i || !1 !== i && l.smooth ? (_ = x - f,
        D = w - h,
        l.xOffset = d + (_ * v + D * g) - _,
        l.yOffset = p + (_ * m + D * y) - D) : l.xOffset = l.yOffset = 0,
        l.xOrigin = x,
        l.yOrigin = w,
        l.smooth = !!i,
        l.origin = e,
        l.originIsAbsolute = !!n,
        t.style[oi] = "0px 0px",
        o && (mi(o, l, "xOrigin", f, x),
        mi(o, l, "yOrigin", h, w),
        mi(o, l, "xOffset", d, l.xOffset),
        mi(o, l, "yOffset", p, l.yOffset)),
        t.setAttribute("data-svg-origin", x + " " + w)
    }, Fi = function(t, e) {
        var n = t._gsap || new je(t);
        if ("x"in n && !e && !n.uncache)
            return n;
        var i, r, o, s, a, u, l, c, f, h, d, p, v, m, g, y, _, D, b, x, w, E, T, A, C, S, k, F, O, M, L, B, P = t.style, j = n.scaleX < 0, R = ai(t, oi) || "0";
        return i = r = o = u = l = c = f = h = d = 0,
        s = a = 1,
        n.svg = !(!t.getCTM || !pi(t)),
        m = Si(t, n.svg),
        n.svg && (A = (!n.uncache || "0px 0px" === R) && !e && t.getAttribute("data-svg-origin"),
        ki(t, A || R, !!A || n.originIsAbsolute, !1 !== n.smooth, m)),
        p = n.xOrigin || 0,
        v = n.yOrigin || 0,
        m !== Ei && (D = m[0],
        b = m[1],
        x = m[2],
        w = m[3],
        i = E = m[4],
        r = T = m[5],
        6 === m.length ? (s = Math.sqrt(D * D + b * b),
        a = Math.sqrt(w * w + x * x),
        u = D || b ? zn(b, D) * Nn : 0,
        (f = x || w ? zn(x, w) * Nn + u : 0) && (a *= Math.abs(Math.cos(f * Hn))),
        n.svg && (i -= p - (p * D + v * x),
        r -= v - (p * b + v * w))) : (B = m[6],
        M = m[7],
        k = m[8],
        F = m[9],
        O = m[10],
        L = m[11],
        i = m[12],
        r = m[13],
        o = m[14],
        l = (g = zn(B, O)) * Nn,
        g && (A = E * (y = Math.cos(-g)) + k * (_ = Math.sin(-g)),
        C = T * y + F * _,
        S = B * y + O * _,
        k = E * -_ + k * y,
        F = T * -_ + F * y,
        O = B * -_ + O * y,
        L = M * -_ + L * y,
        E = A,
        T = C,
        B = S),
        c = (g = zn(-x, O)) * Nn,
        g && (y = Math.cos(-g),
        L = w * (_ = Math.sin(-g)) + L * y,
        D = A = D * y - k * _,
        b = C = b * y - F * _,
        x = S = x * y - O * _),
        u = (g = zn(b, D)) * Nn,
        g && (A = D * (y = Math.cos(g)) + b * (_ = Math.sin(g)),
        C = E * y + T * _,
        b = b * y - D * _,
        T = T * y - E * _,
        D = A,
        E = C),
        l && 359.9 < Math.abs(l) + Math.abs(u) && (l = u = 0,
        c = 180 - c),
        s = bt(Math.sqrt(D * D + b * b + x * x)),
        a = bt(Math.sqrt(T * T + B * B)),
        g = zn(E, T),
        f = 2e-4 < Math.abs(g) ? g * Nn : 0,
        d = L ? 1 / (L < 0 ? -L : L) : 0),
        n.svg && (A = t.getAttribute("transform"),
        n.forceCSS = t.setAttribute("transform", "") || !Ai(ai(t, ri)),
        A && t.setAttribute("transform", A))),
        90 < Math.abs(f) && Math.abs(f) < 270 && (j ? (s *= -1,
        f += u <= 0 ? 180 : -180,
        u += u <= 0 ? 180 : -180) : (a *= -1,
        f += f <= 0 ? 180 : -180)),
        n.x = i - ((n.xPercent = i && (n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + "px",
        n.y = r - ((n.yPercent = r && (n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + "px",
        n.z = o + "px",
        n.scaleX = bt(s),
        n.scaleY = bt(a),
        n.rotation = bt(u) + "deg",
        n.rotationX = bt(l) + "deg",
        n.rotationY = bt(c) + "deg",
        n.skewX = f + "deg",
        n.skewY = h + "deg",
        n.transformPerspective = d + "px",
        (n.zOrigin = parseFloat(R.split(" ")[2]) || 0) && (P[oi] = Oi(R)),
        n.xOffset = n.yOffset = 0,
        n.force3D = N.force3D,
        n.renderTransform = n.svg ? Ii : _n ? Ri : Li,
        n.uncache = 0,
        n
    }, Oi = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, Mi = function(t, e, n) {
        var i = Jt(e);
        return bt(parseFloat(e) + parseFloat(yi(t, "x", n + "px", i))) + i
    }, Li = function(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        Ri(t, e)
    }, Bi = "0deg", Pi = "0px", ji = ") ", Ri = function(t, e) {
        var n = e || this
          , i = n.xPercent
          , r = n.yPercent
          , o = n.x
          , s = n.y
          , a = n.z
          , u = n.rotation
          , l = n.rotationY
          , c = n.rotationX
          , f = n.skewX
          , h = n.skewY
          , d = n.scaleX
          , p = n.scaleY
          , v = n.transformPerspective
          , m = n.force3D
          , g = n.target
          , y = n.zOrigin
          , _ = ""
          , D = "auto" === m && t && 1 !== t || !0 === m;
        if (y && (c !== Bi || l !== Bi)) {
            var b, x = parseFloat(l) * Hn, w = Math.sin(x), E = Math.cos(x);
            x = parseFloat(c) * Hn,
            b = Math.cos(x),
            o = Mi(g, o, w * b * -y),
            s = Mi(g, s, -Math.sin(x) * -y),
            a = Mi(g, a, E * b * -y + y)
        }
        v !== Pi && (_ += "perspective(" + v + ji),
        (i || r) && (_ += "translate(" + i + "%, " + r + "%) "),
        (D || o !== Pi || s !== Pi || a !== Pi) && (_ += a !== Pi || D ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + ji),
        u !== Bi && (_ += "rotate(" + u + ji),
        l !== Bi && (_ += "rotateY(" + l + ji),
        c !== Bi && (_ += "rotateX(" + c + ji),
        f === Bi && h === Bi || (_ += "skew(" + f + ", " + h + ji),
        1 === d && 1 === p || (_ += "scale(" + d + ", " + p + ji),
        g.style[ri] = _ || "translate(0, 0)"
    }, Ii = function(t, e) {
        var n, i, r, o, s, a = e || this, u = a.xPercent, l = a.yPercent, c = a.x, f = a.y, h = a.rotation, d = a.skewX, p = a.skewY, v = a.scaleX, m = a.scaleY, g = a.target, y = a.xOrigin, _ = a.yOrigin, D = a.xOffset, b = a.yOffset, x = a.forceCSS, w = parseFloat(c), E = parseFloat(f);
        h = parseFloat(h),
        d = parseFloat(d),
        (p = parseFloat(p)) && (d += p = parseFloat(p),
        h += p),
        h || d ? (h *= Hn,
        d *= Hn,
        n = Math.cos(h) * v,
        i = Math.sin(h) * v,
        r = Math.sin(h - d) * -m,
        o = Math.cos(h - d) * m,
        d && (p *= Hn,
        s = Math.tan(d - p),
        r *= s = Math.sqrt(1 + s * s),
        o *= s,
        p && (s = Math.tan(p),
        n *= s = Math.sqrt(1 + s * s),
        i *= s)),
        n = bt(n),
        i = bt(i),
        r = bt(r),
        o = bt(o)) : (n = v,
        o = m,
        i = r = 0),
        (w && !~(c + "").indexOf("px") || E && !~(f + "").indexOf("px")) && (w = yi(g, "x", c, "px"),
        E = yi(g, "y", f, "px")),
        (y || _ || D || b) && (w = bt(w + y - (y * n + _ * r) + D),
        E = bt(E + _ - (y * i + _ * o) + b)),
        (u || l) && (s = g.getBBox(),
        w = bt(w + u / 100 * s.width),
        E = bt(E + l / 100 * s.height)),
        s = "matrix(" + n + "," + i + "," + r + "," + o + "," + w + "," + E + ")",
        g.setAttribute("transform", s),
        x && (g.style[ri] = s)
    }, Ni = function(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }, Hi = function(t, e, n) {
        var i, r, o, s, a, u, l, c = Ni({}, n._gsap), f = n.style;
        for (r in c.svg ? (o = n.getAttribute("transform"),
        n.setAttribute("transform", ""),
        f[ri] = e,
        i = Fi(n, 1),
        vi(n, ri),
        n.setAttribute("transform", o)) : (o = getComputedStyle(n)[ri],
        f[ri] = e,
        i = Fi(n, 1),
        f[ri] = o),
        In)
            (o = c[r]) !== (s = i[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (a = Jt(o) !== (l = Jt(s)) ? yi(n, r, o, l) : parseFloat(o),
            u = parseFloat(s),
            t._pt = new un(t._pt,i,r,a,u - a,Yn),
            t._pt.u = l || 0,
            t._props.push(r));
        Ni(i, c)
    };
    Dt("padding,margin,Width,Radius", function(e, n) {
        var t = "Bottom"
          , a = (n < 3 ? ["Top", "Right", t, "Left"] : ["TopLeft", "TopRight", t + "Right", t + "Left"]).map(function(t) {
            return n < 2 ? e + t : "border" + t + e
        });
        wi[1 < n ? "border" + e : e] = function(e, t, n, i, r) {
            var o, s;
            if (arguments.length < 4)
                return o = a.map(function(t) {
                    return _i(e, t, n)
                }),
                5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s;
            o = (i + "").split(" "),
            s = {},
            a.forEach(function(t, e) {
                return s[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
            }),
            e.init(t, s, r)
        }
    });
    var zi, Wi, qi, Vi = {
        name: "css",
        register: ci,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, n, i, r) {
            var o, s, a, u, l, c, f, h, d, p, v, m, g, y, _, D, b, x, w, E, T, A, C, S, k, F, O, M, L, B, P, j = this._props, R = t.style, I = n.vars.startAt;
            for (f in mn || ci(),
            e)
                if ("autoRound" !== f && (s = e[f],
                !ht[f] || !ze(f, e, n, i, t, r)))
                    if (l = typeof s,
                    c = wi[f],
                    "function" === l && (l = typeof (s = s.call(n, i, t, r))),
                    "string" === l && ~s.indexOf("random(") && (s = le(s)),
                    c)
                        c(this, t, f, s, n) && (_ = 1);
                    else if ("--" === f.substr(0, 2))
                        o = (getComputedStyle(t).getPropertyValue(f) + "").trim(),
                        s += "",
                        De.lastIndex = 0,
                        De.test(o) || (h = Jt(o),
                        d = Jt(s)),
                        d ? h !== d && (o = yi(t, f, o, d) + d) : h && (s += h),
                        this.add(R, "setProperty", o, s, i, r, 0, 0, f),
                        j.push(f);
                    else if ("undefined" !== l) {
                        if (I && f in I ? (o = "function" == typeof I[f] ? I[f].call(n, i, t, r) : I[f],
                        z(o) && ~o.indexOf("random(") && (o = le(o)),
                        Jt(o + "") || (o += N.units[f] || Jt(_i(t, f)) || ""),
                        "=" === (o + "").charAt(1) && (o = _i(t, f))) : o = _i(t, f),
                        u = parseFloat(o),
                        (p = "string" === l && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)),
                        a = parseFloat(s),
                        f in Xn && ("autoAlpha" === f && (1 === u && "hidden" === _i(t, "visibility") && a && (u = 0),
                        mi(this, R, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)),
                        "scale" !== f && "transform" !== f && ~(f = Xn[f]).indexOf(",") && (f = f.split(",")[0])),
                        v = f in In)
                            if (m || ((g = t._gsap).renderTransform && !e.parseTransform || Fi(t, e.parseTransform),
                            y = !1 !== e.smoothOrigin && g.smooth,
                            (m = this._pt = new un(this._pt,R,ri,0,1,g.renderTransform,g,0,-1)).dep = 1),
                            "scale" === f)
                                this._pt = new un(this._pt,g,"scaleY",g.scaleY,(p ? p * a : a - g.scaleY) || 0),
                                j.push("scaleY", f),
                                f += "X";
                            else {
                                if ("transformOrigin" === f) {
                                    P = B = L = void 0,
                                    L = (M = s).split(" "),
                                    B = L[0],
                                    P = L[1] || "50%",
                                    "top" !== B && "bottom" !== B && "left" !== P && "right" !== P || (M = B,
                                    B = P,
                                    P = M),
                                    L[0] = bi[B] || B,
                                    L[1] = bi[P] || P,
                                    s = L.join(" "),
                                    g.svg ? ki(t, s, 0, y, 0, this) : ((d = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && mi(this, g, "zOrigin", g.zOrigin, d),
                                    mi(this, R, f, Oi(o), Oi(s)));
                                    continue
                                }
                                if ("svgOrigin" === f) {
                                    ki(t, s, 1, y, 0, this);
                                    continue
                                }
                                if (f in Ti) {
                                    D = this,
                                    b = g,
                                    x = f,
                                    w = u,
                                    T = p,
                                    F = C = A = void 0,
                                    S = z(E = s),
                                    k = parseFloat(E) * (S && ~E.indexOf("rad") ? Nn : 1),
                                    O = w + (F = T ? k * T : k - w) + "deg",
                                    S && ("short" === (A = E.split("_")[1]) && (F %= 360) != F % 180 && (F += F < 0 ? 360 : -360),
                                    "cw" === A && F < 0 ? F = (F + 36e9) % 360 - 360 * ~~(F / 360) : "ccw" === A && 0 < F && (F = (F - 36e9) % 360 - 360 * ~~(F / 360))),
                                    D._pt = C = new un(D._pt,b,x,w,F,$n),
                                    C.e = O,
                                    C.u = "deg",
                                    D._props.push(x);
                                    continue
                                }
                                if ("smoothOrigin" === f) {
                                    mi(this, g, "smooth", g.smooth, s);
                                    continue
                                }
                                if ("force3D" === f) {
                                    g[f] = s;
                                    continue
                                }
                                if ("transform" === f) {
                                    Hi(this, s, t);
                                    continue
                                }
                            }
                        else
                            f in R || (f = li(f) || f);
                        if (v || (a || 0 === a) && (u || 0 === u) && !Vn.test(s) && f in R)
                            a || (a = 0),
                            (h = (o + "").substr((u + "").length)) !== (d = Jt(s) || (f in N.units ? N.units[f] : h)) && (u = yi(t, f, o, d)),
                            this._pt = new un(this._pt,v ? g : R,f,u,p ? p * a : a - u,v || "px" !== d && "zIndex" !== f || !1 === e.autoRound ? Yn : Gn),
                            this._pt.u = d || 0,
                            h !== d && "%" !== d && (this._pt.b = o,
                            this._pt.r = Un);
                        else if (f in R)
                            Di.call(this, t, f, o, s);
                        else {
                            if (!(f in t))
                                continue;
                            this.add(t, f, o || t[f], s, i, r)
                        }
                        j.push(f)
                    }
            _ && an(this)
        },
        get: _i,
        aliases: Xn,
        getSetter: function(t, e, n) {
            var i = Xn[e];
            return i && i.indexOf(",") < 0 && (e = i),
            e in In && e !== oi && (t._gsap.x || _i(t, "x")) ? n && yn === n ? "scale" === e ? ei : ti : (yn = n || {}) && ("scale" === e ? ni : ii) : t.style && !q(t.style[e]) ? Zn : ~e.indexOf("-") ? Jn : Ze(t, e)
        },
        core: {
            _removeProperty: vi,
            _getMatrix: Si
        }
    };
    hn.utils.checkPrefix = li,
    qi = Dt((zi = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Wi = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        In[t] = 1
    }),
    Dt(Wi, function(t) {
        N.units[t] = "deg",
        Ti[t] = 1
    }),
    Xn[qi[13]] = zi + "," + Wi,
    Dt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        Xn[e[1]] = qi[e[0]]
    }),
    Dt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        N.units[t] = "px"
    }),
    hn.registerPlugin(Vi);
    var Xi = hn.registerPlugin(Vi) || hn
      , Yi = Xi.core.Tween;
    t.Back = Mn,
    t.Bounce = Bn,
    t.CSSPlugin = Vi,
    t.Circ = Rn,
    t.Cubic = Cn,
    t.Elastic = On,
    t.Expo = jn,
    t.Linear = Tn,
    t.Power0 = Dn,
    t.Power1 = bn,
    t.Power2 = xn,
    t.Power3 = wn,
    t.Power4 = En,
    t.Quad = An,
    t.Quart = Sn,
    t.Quint = kn,
    t.Sine = Pn,
    t.SteppedEase = Ln,
    t.Strong = Fn,
    t.TimelineLite = Ie,
    t.TimelineMax = Ie,
    t.TweenLite = $e,
    t.TweenMax = Yi,
    t.default = Xi,
    t.gsap = Xi,
    "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete window.default
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    var jt, o, Rt, It, Nt, Ht, r, s, zt, Wt, qt, a, Vt, Xt, u, Yt, l, c, f, $t, Ut, n, Gt, Qt, h, d, Kt = 1, Zt = [], p = [], Jt = Date.now, v = Jt(), te = 0, ee = 1, ne = function(t) {
        return t
    }, ie = function(t) {
        return zt(t)[0] || (le(t) && !1 !== jt.config().nullTargetWarn ? void 0 : null)
    }, m = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }, g = function() {
        return "undefined" != typeof window
    }, y = function() {
        return jt || g() && (jt = window.gsap) && jt.registerPlugin && jt
    }, re = function(t) {
        return !!~r.indexOf(t)
    }, oe = function(t, e) {
        return ~Zt.indexOf(t) && Zt[Zt.indexOf(t) + 1][e]
    }, se = function(e, t) {
        var n = t.s
          , i = t.sc
          , r = p.indexOf(e)
          , o = i === Ce.sc ? 1 : 2;
        return !~r && (r = p.push(e) - 1),
        p[r + o] || (p[r + o] = oe(e, n) || (re(e) ? i : function(t) {
            return arguments.length ? e[n] = t : e[n]
        }
        ))
    }, ae = function(t) {
        return oe(t, "getBoundingClientRect") || (re(t) ? function() {
            return Ge.width = Rt.innerWidth,
            Ge.height = Rt.innerHeight,
            Ge
        }
        : function() {
            return Fe(t)
        }
        )
    }, ue = function(t, e) {
        var n = e.s
          , i = e.d2
          , r = e.d
          , o = e.a;
        return (n = "scroll" + i) && (o = oe(t, n)) ? o() - ae(t)()[r] : re(t) ? (Ht[n] || Nt[n]) - (Rt["inner" + i] || Nt["client" + i] || Ht["client" + i]) : t[n] - t["offset" + i]
    }, _ = function(t, e) {
        for (var n = 0; n < f.length; n += 3)
            (!e || ~e.indexOf(f[n + 1])) && t(f[n], f[n + 1], f[n + 2])
    }, le = function(t) {
        return "string" == typeof t
    }, ce = function(t) {
        return "function" == typeof t
    }, fe = function(t) {
        return "number" == typeof t
    }, he = function(t) {
        return "object" == typeof t
    }, D = function(t) {
        return ce(t) && t()
    }, b = function(n, i) {
        return function() {
            var t = D(n)
              , e = D(i);
            return function() {
                D(t),
                D(e)
            }
        }
    }, de = function(t, e, n) {
        return t && t.progress(e ? 0 : 1) && n && t.pause()
    }, pe = function(t, e) {
        if (t.enabled) {
            var n = e(t);
            n && n.totalTime && (t.callbackAnimation = n)
        }
    }, ve = Math.abs, e = "scrollLeft", i = "scrollTop", x = "right", w = "bottom", me = "width", ge = "height", ye = "Right", _e = "Left", De = "Top", be = "Bottom", xe = "padding", we = "margin", Ee = "Width", E = "Height", Te = "px", Ae = {
        s: e,
        p: "left",
        p2: _e,
        os: x,
        os2: ye,
        d: me,
        d2: Ee,
        a: "x",
        sc: function(t) {
            return arguments.length ? Rt.scrollTo(t, Ce.sc()) : Rt.pageXOffset || It[e] || Nt[e] || Ht[e] || 0
        }
    }, Ce = {
        s: i,
        p: "top",
        p2: De,
        os: w,
        os2: be,
        d: ge,
        d2: E,
        a: "y",
        op: Ae,
        sc: function(t) {
            return arguments.length ? Rt.scrollTo(Ae.sc(), t) : Rt.pageYOffset || It[i] || Nt[i] || Ht[i] || 0
        }
    }, Se = function(t) {
        return Rt.getComputedStyle(t)
    }, ke = function(t, e) {
        for (var n in e)
            n in t || (t[n] = e[n]);
        return t
    }, Fe = function(t, e) {
        var n = e && "matrix(1, 0, 0, 1, 0, 0)" !== Se(t)[u] && jt.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1)
          , i = t.getBoundingClientRect();
        return n && n.progress(0).kill(),
        i
    }, Oe = function(t, e) {
        var n = e.d2;
        return t["offset" + n] || t["client" + n] || 0
    }, Me = function(t) {
        var e, n = [], i = t.labels, r = t.duration();
        for (e in i)
            n.push(i[e] / r);
        return n
    }, Le = function(r) {
        var o = jt.utils.snap(r)
          , s = Array.isArray(r) && r.slice(0).sort(function(t, e) {
            return t - e
        });
        return s ? function(t, e, n) {
            var i;
            if (void 0 === n && (n = .001),
            !e)
                return o(t);
            if (0 < e) {
                for (t -= n,
                i = 0; i < s.length; i++)
                    if (s[i] >= t)
                        return s[i];
                return s[i - 1]
            }
            for (i = s.length,
            t += n; i--; )
                if (s[i] <= t)
                    return s[i];
            return s[0]
        }
        : function(t, e, n) {
            void 0 === n && (n = .001);
            var i = o(t);
            return !e || Math.abs(i - t) < n || i - t < 0 == e < 0 ? i : o(e < 0 ? t - r : t + r)
        }
    }, T = function(e, n, t, i) {
        return t.split(",").forEach(function(t) {
            return e(n, t, i)
        })
    }, Be = function(t, e, n) {
        return t.addEventListener(e, n, {
            passive: !0
        })
    }, Pe = function(t, e, n) {
        return t.removeEventListener(e, n)
    }, je = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, Re = {
        toggleActions: "play",
        anticipatePin: 0
    }, A = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, Ie = function(t, e) {
        if (le(t)) {
            var n = t.indexOf("=")
              , i = ~n ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
            ~n && (t.indexOf("%") > n && (i *= e / 100),
            t = t.substr(0, n - 1)),
            t = i + (t in A ? A[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
        }
        return t
    }, Ne = function(t, e, n, i, r, o, s, a) {
        var u = r.startColor
          , l = r.endColor
          , c = r.fontSize
          , f = r.indent
          , h = r.fontWeight
          , d = It.createElement("div")
          , p = re(n) || "fixed" === oe(n, "pinType")
          , v = -1 !== t.indexOf("scroller")
          , m = p ? Ht : n
          , g = -1 !== t.indexOf("start")
          , y = g ? u : l
          , _ = "border-color:" + y + ";font-size:" + c + ";color:" + y + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return _ += "position:" + ((v || a) && p ? "fixed;" : "absolute;"),
        (v || a || !p) && (_ += (i === Ce ? x : w) + ":" + (o + parseFloat(f)) + "px;"),
        s && (_ += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"),
        d._isStart = g,
        d.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
        d.style.cssText = _,
        d.innerText = e || 0 === e ? t + "-" + e : t,
        m.children[0] ? m.insertBefore(d, m.children[0]) : m.appendChild(d),
        d._offset = d["offset" + i.op.d2],
        C(d, 0, i, g),
        d
    }, C = function(t, e, n, i) {
        var r = {
            display: "block"
        }
          , o = n[i ? "os2" : "p2"]
          , s = n[i ? "p2" : "os2"];
        t._isFlipped = i,
        r[n.a + "Percent"] = i ? -100 : 0,
        r[n.a] = i ? "1px" : 0,
        r["border" + o + Ee] = 1,
        r["border" + s + Ee] = 0,
        r[n.p] = e + "px",
        jt.set(t, r)
    }, He = [], ze = {}, S = function() {
        return 34 < Jt() - te && H()
    }, We = function() {
        H(),
        te || L("scrollStart"),
        te = Jt()
    }, qe = function() {
        return !Vt && !n && !It.fullscreenElement && s.restart(!0)
    }, k = {}, F = [], O = [], M = function(t) {
        var e, n = jt.ticker.frame, i = [], r = 0;
        if (h !== n || Kt) {
            for (j(); r < O.length; r += 4)
                (e = Rt.matchMedia(O[r]).matches) !== O[r + 3] && ((O[r + 3] = e) ? i.push(r) : j(1, O[r]) || ce(O[r + 2]) && O[r + 2]());
            for (P(),
            r = 0; r < i.length; r++)
                e = i[r],
                Qt = O[e],
                O[e + 2] = O[e + 1](t);
            Qt = 0,
            o && I(0, 1),
            h = n,
            L("matchMedia")
        }
    }, Ve = function t() {
        return Pe(X, "scrollEnd", t) || I(!0)
    }, L = function(t) {
        return k[t] && k[t].map(function(t) {
            return t()
        }) || F
    }, B = [], P = function(t) {
        for (var e = 0; e < B.length; e += 5)
            t && B[e + 4] !== t || (B[e].style.cssText = B[e + 1],
            B[e].getBBox && B[e].setAttribute("transform", B[e + 2] || ""),
            B[e + 3].uncache = 1)
    }, j = function(t, e) {
        var n;
        for (Yt = 0; Yt < He.length; Yt++)
            n = He[Yt],
            e && n.media !== e || (t ? n.kill(1) : n.revert());
        e && P(e),
        e || L("revert")
    }, R = function() {
        return p.forEach(function(t) {
            return "function" == typeof t && (t.rec = 0)
        })
    }, I = function(t, e) {
        if (!te || t) {
            d = !0;
            var n = L("refreshInit");
            $t && X.sort(),
            e || j(),
            He.forEach(function(t) {
                return t.refresh()
            }),
            He.forEach(function(t) {
                return "max" === t.vars.end && t.setPositions(t.start, ue(t.scroller, t._dir))
            }),
            n.forEach(function(t) {
                return t && t.render && t.render(-1)
            }),
            R(),
            s.pause(),
            d = !1,
            L("refresh")
        } else
            Be(X, "scrollEnd", Ve)
    }, N = 0, Xe = 1, H = function() {
        if (!d) {
            var t = He.length
              , e = Jt()
              , n = 50 <= e - v
              , i = t && He[0].scroll();
            if (Xe = i < N ? -1 : 1,
            N = i,
            n && (te && !Xt && 200 < e - te && (te = 0,
            L("scrollEnd")),
            qt = v,
            v = e),
            Xe < 0) {
                for (Yt = t; 0 < Yt--; )
                    He[Yt] && He[Yt].update(0, n);
                Xe = 1
            } else
                for (Yt = 0; Yt < t; Yt++)
                    He[Yt] && He[Yt].update(0, n)
        }
    }, z = ["left", "top", w, x, we + be, we + ye, we + De, we + _e, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], W = z.concat([me, ge, "boxSizing", "max" + Ee, "max" + E, "position", we, xe, xe + De, xe + ye, xe + be, xe + _e]), Ye = function(t, e, n, i) {
        if (t.parentNode !== e) {
            for (var r, o = z.length, s = e.style, a = t.style; o--; )
                s[r = z[o]] = n[r];
            s.position = "absolute" === n.position ? "absolute" : "relative",
            "inline" === n.display && (s.display = "inline-block"),
            a[w] = a[x] = s.flexBasis = "auto",
            s.overflow = "visible",
            s.boxSizing = "border-box",
            s[me] = Oe(t, Ae) + Te,
            s[ge] = Oe(t, Ce) + Te,
            s[xe] = a[we] = a.top = a.left = "0",
            $e(i),
            a[me] = a.maxWidth = n[me],
            a[ge] = a.maxHeight = n[ge],
            a[xe] = n[xe],
            t.parentNode.insertBefore(e, t),
            e.appendChild(t)
        }
    }, q = /([A-Z])/g, $e = function(t) {
        if (t) {
            var e, n, i = t.t.style, r = t.length, o = 0;
            for ((t.t._gsap || jt.core.getCache(t.t)).uncache = 1; o < r; o += 2)
                n = t[o + 1],
                e = t[o],
                n ? i[e] = n : i[e] && i.removeProperty(e.replace(q, "-$1").toLowerCase())
        }
    }, Ue = function(t) {
        for (var e = W.length, n = t.style, i = [], r = 0; r < e; r++)
            i.push(W[r], n[W[r]]);
        return i.t = t,
        i
    }, Ge = {
        left: 0,
        top: 0
    }, Qe = function(t, e, n, i, r, o, s, a, u, l, c, f, h) {
        ce(t) && (t = t(a)),
        le(t) && "max" === t.substr(0, 3) && (t = f + ("=" === t.charAt(4) ? Ie("0" + t.substr(3), n) : 0));
        var d, p, v, m = h ? h.time() : 0;
        if (h && h.seek(0),
        fe(t))
            s && C(s, n, i, !0);
        else {
            ce(e) && (e = e(a));
            var g, y, _, D, b = t.split(" ");
            v = ie(e) || Ht,
            (g = Fe(v) || {}) && (g.left || g.top) || "none" !== Se(v).display || (D = v.style.display,
            v.style.display = "block",
            g = Fe(v),
            D ? v.style.display = D : v.style.removeProperty("display")),
            y = Ie(b[0], g[i.d]),
            _ = Ie(b[1] || "0", n),
            t = g[i.p] - u[i.p] - l + y + r - _,
            s && C(s, _, i, n - _ < 20 || s._isStart && 20 < _),
            n -= n - _
        }
        if (o) {
            var x = t + n
              , w = o._isStart;
            d = "scroll" + i.d2,
            C(o, x, i, w && 20 < x || !w && (c ? Math.max(Ht[d], Nt[d]) : o.parentNode[d]) <= x + 1),
            c && (u = Fe(s),
            c && (o.style[i.op.p] = u[i.op.p] - i.op.m - o._offset + Te))
        }
        return h && v && (d = Fe(v),
        h.seek(f),
        p = Fe(v),
        h._caScrollDist = d[i.p] - p[i.p],
        t = t / h._caScrollDist * f),
        h && h.seek(m),
        h ? t : Math.round(t)
    }, V = /(?:webkit|moz|length|cssText|inset)/i, Ke = function(t, e, n, i) {
        if (t.parentNode !== e) {
            var r, o, s = t.style;
            if (e === Ht) {
                for (r in t._stOrig = s.cssText,
                o = Se(t))
                    +r || V.test(r) || !o[r] || "string" != typeof s[r] || "0" === r || (s[r] = o[r]);
                s.top = n,
                s.left = i
            } else
                s.cssText = t._stOrig;
            jt.core.getCache(t).uncache = 1,
            e.appendChild(t)
        }
    }, Ze = function(l, t) {
        var c, f, h = se(l, t), d = "_scroll" + t.p2, e = function e(t, n, i, r, o) {
            var s = e.tween
              , a = n.onComplete
              , u = {};
            return s && s.kill(),
            c = Math.round(i),
            n[d] = t,
            (n.modifiers = u)[d] = function(t) {
                return (t = m(h())) !== c && t !== f && 2 < Math.abs(t - c) && 2 < Math.abs(t - f) ? (s.kill(),
                e.tween = 0) : t = i + r * s.ratio + o * s.ratio * s.ratio,
                f = c,
                c = m(t)
            }
            ,
            n.onComplete = function() {
                e.tween = 0,
                a && a.call(s)
            }
            ,
            s = e.tween = jt.to(l, n)
        };
        return l[d] = h,
        Be(l, "wheel", function() {
            return e.tween && e.tween.kill() && (e.tween = 0)
        }),
        e
    };
    Ae.op = Ce;
    var X = function() {
        function Pt(t, e) {
            o || Pt.register(jt),
            this.init(t, e)
        }
        return Pt.prototype.init = function(w, E) {
            if (this.progress = this.start = 0,
            this.vars && this.kill(1),
            ee) {
                var g, i, h, T, A, C, S, k, F, O, M, t, L, B, P, j, R, e, I, y, N, H, _, z, D, b, n, x, W, q, r, d, V, X, Y, $, U, o, s, a, u, l, c, f, p, v, m, G, Q = w = ke(le(w) || fe(w) || w.nodeType ? {
                    trigger: w
                } : w, Re), K = Q.onUpdate, Z = Q.toggleClass, J = Q.id, tt = Q.onToggle, et = Q.onRefresh, nt = Q.scrub, it = Q.trigger, rt = Q.pin, ot = Q.pinSpacing, st = Q.invalidateOnRefresh, at = Q.anticipatePin, ut = Q.onScrubComplete, lt = Q.onSnapComplete, ct = Q.once, ft = Q.snap, ht = Q.pinReparent, dt = Q.pinSpacer, pt = Q.containerAnimation, vt = Q.fastScrollEnd, mt = Q.preventOverlaps, gt = w.horizontal || w.containerAnimation && !1 !== w.horizontal ? Ae : Ce, yt = !nt && 0 !== nt, _t = ie(w.scroller || Rt), Dt = jt.core.getCache(_t), bt = re(_t), xt = "fixed" === ("pinType"in w ? w.pinType : oe(_t, "pinType") || bt && "fixed"), wt = [w.onEnter, w.onLeave, w.onEnterBack, w.onLeaveBack], Et = yt && w.toggleActions.split(" "), Tt = "markers"in w ? w.markers : Re.markers, At = bt ? 0 : parseFloat(Se(_t)["border" + gt.p2 + Ee]) || 0, Ct = this, St = w.onRefreshInit && function() {
                    return w.onRefreshInit(Ct)
                }
                , kt = (s = _t,
                a = bt,
                l = (u = gt).d,
                c = u.d2,
                f = u.a,
                (f = oe(s, "getBoundingClientRect")) ? function() {
                    return f()[l]
                }
                : function() {
                    return (a ? Rt["inner" + c] : s["client" + c]) || 0
                }
                ), Ft = (o = _t,
                !bt || ~Zt.indexOf(o) ? ae(o) : function() {
                    return Ge
                }
                ), Ot = 0, Mt = se(_t, gt);
                if (Ct.media = Qt,
                Ct._dir = gt,
                at *= 45,
                Ct.scroller = _t,
                Ct.scroll = pt ? pt.time.bind(pt) : Mt,
                T = Mt(),
                Ct.vars = w,
                E = E || w.animation,
                "refreshPriority"in w && ($t = 1),
                Dt.tweenScroll = Dt.tweenScroll || {
                    top: Ze(_t, Ce),
                    left: Ze(_t, Ae)
                },
                Ct.tweenTo = g = Dt.tweenScroll[gt.p],
                E && (E.vars.lazy = !1,
                E._initted || !1 !== E.vars.immediateRender && !1 !== w.immediateRender && E.render(0, !0, !0),
                Ct.animation = E.pause(),
                E.scrollTrigger = Ct,
                (r = fe(nt) && nt) && (q = jt.to(E, {
                    ease: "power3",
                    duration: r,
                    onComplete: function() {
                        return ut && ut(Ct)
                    }
                })),
                x = 0,
                J || (J = E.vars.id)),
                He.push(Ct),
                ft && (he(ft) && !ft.push || (ft = {
                    snapTo: ft
                }),
                "scrollBehavior"in Ht.style && jt.set(bt ? [Ht, Nt] : _t, {
                    scrollBehavior: "auto"
                }),
                h = ce(ft.snapTo) ? ft.snapTo : "labels" === ft.snapTo ? (v = E,
                function(t) {
                    return jt.utils.snap(Me(v), t)
                }
                ) : "labelsDirectional" === ft.snapTo ? (p = E,
                function(t, e) {
                    return Le(Me(p))(t, e.direction)
                }
                ) : !1 !== ft.directional ? function(t, e) {
                    return Le(ft.snapTo)(t, e.direction)
                }
                : jt.utils.snap(ft.snapTo),
                d = ft.duration || {
                    min: .1,
                    max: 2
                },
                d = he(d) ? Wt(d.min, d.max) : Wt(d, d),
                V = jt.delayedCall(ft.delay || r / 2 || .1, function() {
                    if (Math.abs(Ct.getVelocity()) < 10 && !Xt && Ot !== Mt()) {
                        var t = E && !yt ? E.totalProgress() : Ct.progress
                          , e = (t - W) / (Jt() - qt) * 1e3 || 0
                          , n = jt.utils.clamp(-Ct.progress, 1 - Ct.progress, ve(e / 2) * e / .185)
                          , i = Ct.progress + (!1 === ft.inertia ? 0 : n)
                          , r = Wt(0, 1, h(i, Ct))
                          , o = Mt()
                          , s = Math.round(C + r * L)
                          , a = ft
                          , u = a.onStart
                          , l = a.onInterrupt
                          , c = a.onComplete
                          , f = g.tween;
                        if (o <= S && C <= o && s !== o) {
                            if (f && !f._initted && f.data <= ve(s - o))
                                return;
                            !1 === ft.inertia && (n = r - Ct.progress),
                            g(s, {
                                duration: d(ve(.185 * Math.max(ve(i - t), ve(r - t)) / e / .05 || 0)),
                                ease: ft.ease || "power3",
                                data: ve(s - o),
                                onInterrupt: function() {
                                    return V.restart(!0) && l && l(Ct)
                                },
                                onComplete: function() {
                                    Ct.update(),
                                    Ot = Mt(),
                                    x = W = E && !yt ? E.totalProgress() : Ct.progress,
                                    lt && lt(Ct),
                                    c && c(Ct)
                                }
                            }, o, n * L, s - o - n * L),
                            u && u(Ct, g.tween)
                        }
                    } else
                        Ct.isActive && V.restart(!0)
                }).pause()),
                J && (ze[J] = Ct),
                it = Ct.trigger = ie(it || rt),
                rt = !0 === rt ? it : ie(rt),
                le(Z) && (Z = {
                    targets: it,
                    className: Z
                }),
                rt && (!1 === ot || ot === we || (ot = !(!ot && "flex" === Se(rt.parentNode).display) && xe),
                Ct.pin = rt,
                !1 !== w.force3D && jt.set(rt, {
                    force3D: !0
                }),
                (i = jt.core.getCache(rt)).spacer ? B = i.pinState : (dt && ((dt = ie(dt)) && !dt.nodeType && (dt = dt.current || dt.nativeElement),
                i.spacerIsNative = !!dt,
                dt && (i.spacerState = Ue(dt))),
                i.spacer = R = dt || It.createElement("div"),
                R.classList.add("pin-spacer"),
                J && R.classList.add("pin-spacer-" + J),
                i.pinState = B = Ue(rt)),
                Ct.spacer = R = i.spacer,
                n = Se(rt),
                _ = n[ot + gt.os2],
                I = jt.getProperty(rt),
                y = jt.quickSetter(rt, gt.a, Te),
                Ye(rt, R, n),
                j = Ue(rt)),
                Tt && (t = he(Tt) ? ke(Tt, je) : je,
                O = Ne("scroller-start", J, _t, gt, t, 0),
                M = Ne("scroller-end", J, _t, gt, t, 0, O),
                e = O["offset" + gt.op.d2],
                k = Ne("start", J, _t, gt, t, e, 0, pt),
                F = Ne("end", J, _t, gt, t, e, 0, pt),
                pt && (U = jt.quickSetter([k, F], gt.a, Te)),
                xt || Zt.length && !0 === oe(_t, "fixedMarkers") || (G = Se(m = bt ? Ht : _t).position,
                m.style.position = "absolute" === G || "fixed" === G ? G : "relative",
                jt.set([O, M], {
                    force3D: !0
                }),
                D = jt.quickSetter(O, gt.a, Te),
                b = jt.quickSetter(M, gt.a, Te))),
                pt) {
                    var Lt = pt.vars.onUpdate
                      , Bt = pt.vars.onUpdateParams;
                    pt.eventCallback("onUpdate", function() {
                        Ct.update(0, 0, 1),
                        Lt && Lt.apply(Bt || [])
                    })
                }
                Ct.previous = function() {
                    return He[He.indexOf(Ct) - 1]
                }
                ,
                Ct.next = function() {
                    return He[He.indexOf(Ct) + 1]
                }
                ,
                Ct.revert = function(t) {
                    var e = !1 !== t || !Ct.enabled
                      , n = Vt;
                    e !== Ct.isReverted && (e && (Ct.scroll.rec || (Ct.scroll.rec = Mt()),
                    Y = Math.max(Mt(), Ct.scroll.rec || 0),
                    X = Ct.progress,
                    $ = E && E.progress()),
                    k && [k, F, O, M].forEach(function(t) {
                        return t.style.display = e ? "none" : "block"
                    }),
                    e && (Vt = 1),
                    Ct.update(e),
                    Vt = n,
                    rt && (e ? function(t, e, n) {
                        $e(n);
                        var i = t._gsap;
                        if (i.spacerIsNative)
                            $e(i.spacerState);
                        else if (t.parentNode === e) {
                            var r = e.parentNode;
                            r && (r.insertBefore(t, e),
                            r.removeChild(e))
                        }
                    }(rt, R, B) : (!ht || !Ct.isActive) && Ye(rt, R, Se(rt), z)),
                    Ct.isReverted = e)
                }
                ,
                Ct.refresh = function(t, e) {
                    if (!Vt && Ct.enabled || e)
                        if (rt && t && te)
                            Be(Pt, "scrollEnd", Ve);
                        else {
                            Vt = 1,
                            q && q.pause(),
                            st && E && E.time(-.01, !0).invalidate(),
                            Ct.isReverted || Ct.revert();
                            for (var n, i, r, o, s, a, u, l, c, f, h = kt(), d = Ft(), p = pt ? pt.duration() : ue(_t, gt), v = 0, m = 0, g = w.end, y = w.endTrigger || it, _ = w.start || (0 !== w.start && it ? rt ? "0 0" : "0 100%" : 0), D = w.pinnedContainer && ie(w.pinnedContainer), b = it && Math.max(0, He.indexOf(Ct)) || 0, x = b; x--; )
                                (a = He[x]).end || a.refresh(0, 1) || (Vt = 1),
                                !(u = a.pin) || u !== it && u !== rt || a.isReverted || (f || (f = []),
                                f.unshift(a),
                                a.revert());
                            for (ce(_) && (_ = _(Ct)),
                            C = Qe(_, it, h, gt, Mt(), k, O, Ct, d, At, xt, p, pt) || (rt ? -.001 : 0),
                            ce(g) && (g = g(Ct)),
                            le(g) && !g.indexOf("+=") && (~g.indexOf(" ") ? g = (le(_) ? _.split(" ")[0] : "") + g : (v = Ie(g.substr(2), h),
                            g = le(_) ? _ : C + v,
                            y = it)),
                            S = Math.max(C, Qe(g || (y ? "100% 0" : p), y, h, gt, Mt() + v, F, M, Ct, d, At, xt, p, pt)) || -.001,
                            L = S - C || (C -= .01) && .001,
                            v = 0,
                            x = b; x--; )
                                (u = (a = He[x]).pin) && a.start - a._pinPush < C && !pt && (n = a.end - a.start,
                                u !== it && u !== D || fe(_) || (v += n * (1 - a.progress)),
                                u === rt && (m += n));
                            if (C += v,
                            S += v,
                            Ct._pinPush = m,
                            k && v && ((n = {})[gt.a] = "+=" + v,
                            D && (n[gt.p] = "-=" + Mt()),
                            jt.set([k, F], n)),
                            rt)
                                n = Se(rt),
                                o = gt === Ce,
                                r = Mt(),
                                N = parseFloat(I(gt.a)) + m,
                                !p && 1 < S && ((bt ? Ht : _t).style["overflow-" + gt.a] = "scroll"),
                                Ye(rt, R, n),
                                j = Ue(rt),
                                i = Fe(rt, !0),
                                l = xt && se(_t, o ? Ae : Ce)(),
                                ot && ((z = [ot + gt.os2, L + m + Te]).t = R,
                                (x = ot === xe ? Oe(rt, gt) + L + m : 0) && z.push(gt.d, x + Te),
                                $e(z),
                                xt && Mt(Y)),
                                xt && ((s = {
                                    top: i.top + (o ? r - C : l) + Te,
                                    left: i.left + (o ? l : r - C) + Te,
                                    boxSizing: "border-box",
                                    position: "fixed"
                                })[me] = s.maxWidth = Math.ceil(i.width) + Te,
                                s[ge] = s.maxHeight = Math.ceil(i.height) + Te,
                                s[we] = s[we + De] = s[we + ye] = s[we + be] = s[we + _e] = "0",
                                s[xe] = n[xe],
                                s[xe + De] = n[xe + De],
                                s[xe + ye] = n[xe + ye],
                                s[xe + be] = n[xe + be],
                                s[xe + _e] = n[xe + _e],
                                P = function(t, e, n) {
                                    for (var i, r = [], o = t.length, s = n ? 8 : 0; s < o; s += 2)
                                        i = t[s],
                                        r.push(i, i in e ? e[i] : t[s + 1]);
                                    return r.t = t.t,
                                    r
                                }(B, s, ht)),
                                E ? (c = E._initted,
                                Ut(1),
                                E.render(E.duration(), !0, !0),
                                H = I(gt.a) - N + L + m,
                                L !== H && P.splice(P.length - 2, 2),
                                E.render(0, !0, !0),
                                c || E.invalidate(),
                                Ut(0)) : H = L;
                            else if (it && Mt() && !pt)
                                for (i = it.parentNode; i && i !== Ht; )
                                    i._pinOffset && (C -= i._pinOffset,
                                    S -= i._pinOffset),
                                    i = i.parentNode;
                            f && f.forEach(function(t) {
                                return t.revert(!1)
                            }),
                            Ct.start = C,
                            Ct.end = S,
                            T = A = Mt(),
                            pt || (T < Y && Mt(Y),
                            Ct.scroll.rec = 0),
                            Ct.revert(!1),
                            Vt = 0,
                            E && yt && E._initted && E.progress() !== $ && E.progress($, !0).render(E.time(), !0, !0),
                            (X !== Ct.progress || pt) && (E && !yt && E.totalProgress(X, !0),
                            Ct.progress = X,
                            Ct.update(0, 0, 1)),
                            rt && ot && (R._pinOffset = Math.round(Ct.progress * H)),
                            et && et(Ct)
                        }
                }
                ,
                Ct.getVelocity = function() {
                    return (Mt() - A) / (Jt() - qt) * 1e3 || 0
                }
                ,
                Ct.endAnimation = function() {
                    de(Ct.callbackAnimation),
                    E && (q ? q.progress(1) : E.paused() ? yt || de(E, Ct.direction < 0, 1) : de(E, E.reversed()))
                }
                ,
                Ct.labelToScroll = function(t) {
                    return E && E.labels && (C || Ct.refresh() || C) + E.labels[t] / E.duration() * L || 0
                }
                ,
                Ct.getTrailing = function(e) {
                    var t = He.indexOf(Ct)
                      , n = 0 < Ct.direction ? He.slice(0, t).reverse() : He.slice(t + 1);
                    return le(e) ? n.filter(function(t) {
                        return t.vars.preventOverlaps === e
                    }) : n
                }
                ,
                Ct.update = function(t, e, n) {
                    if (!pt || n || t) {
                        var i, r, o, s, a, u, l, c = Ct.scroll(), f = t ? 0 : (c - C) / L, h = f < 0 ? 0 : 1 < f ? 1 : f || 0, d = Ct.progress;
                        if (e && (A = T,
                        T = pt ? Mt() : c,
                        ft && (W = x,
                        x = E && !yt ? E.totalProgress() : h)),
                        at && !h && rt && !Vt && !Kt && te && C < c + (c - A) / (Jt() - qt) * at && (h = 1e-4),
                        h !== d && Ct.enabled) {
                            if (s = (a = (i = Ct.isActive = !!h && h < 1) !== (!!d && d < 1)) || !!h != !!d,
                            Ct.direction = d < h ? 1 : -1,
                            Ct.progress = h,
                            s && !Vt && (r = h && !d ? 0 : 1 === h ? 1 : 1 === d ? 2 : 3,
                            yt && (o = !a && "none" !== Et[r + 1] && Et[r + 1] || Et[r],
                            l = E && ("complete" === o || "reset" === o || o in E))),
                            mt && a && (l || nt || !E) && (ce(mt) ? mt(Ct) : Ct.getTrailing(mt).forEach(function(t) {
                                return t.endAnimation()
                            })),
                            yt || (!q || Vt || Kt ? E && E.totalProgress(h, !!Vt) : (q.vars.totalProgress = h,
                            q.invalidate().restart())),
                            rt)
                                if (t && ot && (R.style[ot + gt.os2] = _),
                                xt) {
                                    if (s) {
                                        if (u = !t && d < h && c < S + 1 && c + 1 >= ue(_t, gt),
                                        ht)
                                            if (t || !i && !u)
                                                Ke(rt, R);
                                            else {
                                                var p = Fe(rt, !0)
                                                  , v = c - C;
                                                Ke(rt, Ht, p.top + (gt === Ce ? v : 0) + Te, p.left + (gt === Ce ? 0 : v) + Te)
                                            }
                                        $e(i || u ? P : j),
                                        H !== L && h < 1 && i || y(N + (1 !== h || u ? 0 : H))
                                    }
                                } else
                                    y(N + H * h);
                            ft && !g.tween && !Vt && !Kt && V.restart(!0),
                            Z && (a || ct && h && (h < 1 || !Gt)) && zt(Z.targets).forEach(function(t) {
                                return t.classList[i || ct ? "add" : "remove"](Z.className)
                            }),
                            K && !yt && !t && K(Ct),
                            s && !Vt ? (yt && (l && ("complete" === o ? E.pause().totalProgress(1) : "reset" === o ? E.restart(!0).pause() : "restart" === o ? E.restart(!0) : E[o]()),
                            K && K(Ct)),
                            !a && Gt || (tt && a && pe(Ct, tt),
                            wt[r] && pe(Ct, wt[r]),
                            ct && (1 === h ? Ct.kill(!1, 1) : wt[r] = 0),
                            a || wt[r = 1 === h ? 1 : 3] && pe(Ct, wt[r])),
                            vt && !i && Math.abs(Ct.getVelocity()) > (fe(vt) ? vt : 2500) && (de(Ct.callbackAnimation),
                            q ? q.progress(1) : de(E, !h, 1))) : yt && K && !Vt && K(Ct)
                        }
                        if (b) {
                            var m = pt ? c / pt.duration() * (pt._caScrollDist || 0) : c;
                            D(m + (O._isFlipped ? 1 : 0)),
                            b(m)
                        }
                        U && U(-c / pt.duration() * (pt._caScrollDist || 0))
                    }
                }
                ,
                Ct.enable = function(t, e) {
                    Ct.enabled || (Ct.enabled = !0,
                    Be(_t, "resize", qe),
                    Be(_t, "scroll", We),
                    St && Be(Pt, "refreshInit", St),
                    !1 !== t && (Ct.progress = X = 0,
                    T = A = Ot = Mt()),
                    !1 !== e && Ct.refresh())
                }
                ,
                Ct.getTween = function(t) {
                    return t && g ? g.tween : q
                }
                ,
                Ct.setPositions = function(t, e) {
                    rt && (N += t - C,
                    H += e - t - L),
                    Ct.start = C = t,
                    Ct.end = S = e,
                    L = e - t,
                    Ct.update()
                }
                ,
                Ct.disable = function(t, e) {
                    if (Ct.enabled && (!1 !== t && Ct.revert(),
                    Ct.enabled = Ct.isActive = !1,
                    e || q && q.pause(),
                    Y = 0,
                    i && (i.uncache = 1),
                    St && Pe(Pt, "refreshInit", St),
                    V && (V.pause(),
                    g.tween && g.tween.kill() && (g.tween = 0)),
                    !bt)) {
                        for (var n = He.length; n--; )
                            if (He[n].scroller === _t && He[n] !== Ct)
                                return;
                        Pe(_t, "resize", qe),
                        Pe(_t, "scroll", We)
                    }
                }
                ,
                Ct.kill = function(t, e) {
                    Ct.disable(t, e),
                    q && q.kill(),
                    J && delete ze[J];
                    var n = He.indexOf(Ct);
                    0 <= n && He.splice(n, 1),
                    n === Yt && 0 < Xe && Yt--,
                    n = 0,
                    He.forEach(function(t) {
                        return t.scroller === Ct.scroller && (n = 1)
                    }),
                    n || (Ct.scroll.rec = 0),
                    E && (E.scrollTrigger = null,
                    t && E.render(-1),
                    e || E.kill()),
                    k && [k, F, O, M].forEach(function(t) {
                        return t.parentNode && t.parentNode.removeChild(t)
                    }),
                    rt && (i && (i.uncache = 1),
                    n = 0,
                    He.forEach(function(t) {
                        return t.pin === rt && n++
                    }),
                    n || (i.spacer = 0))
                }
                ,
                Ct.enable(!1, !1),
                E && E.add && !L ? jt.delayedCall(.01, function() {
                    return C || S || Ct.refresh()
                }) && (L = .01) && (C = S = 0) : Ct.refresh()
            } else
                this.update = this.refresh = this.kill = ne
        }
        ,
        Pt.register = function(t) {
            if (!o && (jt = t || y(),
            g() && window.document && (Rt = window,
            It = document,
            Nt = It.documentElement,
            Ht = It.body),
            jt && (zt = jt.utils.toArray,
            Wt = jt.utils.clamp,
            Ut = jt.core.suppressOverwrites || ne,
            jt.core.globals("ScrollTrigger", Pt),
            Ht))) {
                Be(Rt, "wheel", We),
                r = [Rt, It, Nt, Ht],
                Be(It, "scroll", We);
                var e, n = Ht.style, i = n.borderTopStyle;
                n.borderTopStyle = "solid",
                e = Fe(Ht),
                Ce.m = Math.round(e.top + Ce.sc()) || 0,
                Ae.m = Math.round(e.left + Ae.sc()) || 0,
                i ? n.borderTopStyle = i : n.removeProperty("border-top-style"),
                a = setInterval(S, 200),
                jt.delayedCall(.5, function() {
                    return Kt = 0
                }),
                Be(It, "touchcancel", ne),
                Be(Ht, "touchstart", ne),
                T(Be, It, "pointerdown,touchstart,mousedown", function() {
                    return Xt = 1
                }),
                T(Be, It, "pointerup,touchend,mouseup", function() {
                    return Xt = 0
                }),
                u = jt.utils.checkPrefix("transform"),
                W.push(u),
                o = Jt(),
                s = jt.delayedCall(.2, I).pause(),
                f = [It, "visibilitychange", function() {
                    var t = Rt.innerWidth
                      , e = Rt.innerHeight;
                    It.hidden ? (l = t,
                    c = e) : l === t && c === e || qe()
                }
                , It, "DOMContentLoaded", I, Rt, "load", function() {
                    return te || I()
                }
                , Rt, "resize", qe],
                _(Be)
            }
            return o
        }
        ,
        Pt.defaults = function(t) {
            if (t)
                for (var e in t)
                    Re[e] = t[e];
            return Re
        }
        ,
        Pt.kill = function() {
            ee = 0,
            He.slice(0).forEach(function(t) {
                return t.kill(1)
            })
        }
        ,
        Pt.config = function(t) {
            "limitCallbacks"in t && (Gt = !!t.limitCallbacks);
            var e = t.syncInterval;
            e && clearInterval(a) || (a = e) && setInterval(S, e),
            "autoRefreshEvents"in t && (_(Pe) || _(Be, t.autoRefreshEvents || "none"),
            n = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
        }
        ,
        Pt.scrollerProxy = function(t, e) {
            var n = ie(t)
              , i = p.indexOf(n)
              , r = re(n);
            ~i && p.splice(i, r ? 6 : 2),
            e && (r ? Zt.unshift(Rt, e, Ht, e, Nt, e) : Zt.unshift(n, e))
        }
        ,
        Pt.matchMedia = function(t) {
            var e, n, i, r, o;
            for (n in t)
                i = O.indexOf(n),
                r = t[n],
                "all" === (Qt = n) ? r() : (e = Rt.matchMedia(n)) && (e.matches && (o = r()),
                ~i ? (O[i + 1] = b(O[i + 1], r),
                O[i + 2] = b(O[i + 2], o)) : (i = O.length,
                O.push(n, r, o),
                e.addListener ? e.addListener(M) : e.addEventListener("change", M)),
                O[i + 3] = e.matches),
                Qt = 0;
            return O
        }
        ,
        Pt.clearMatchMedia = function(t) {
            t || (O.length = 0),
            0 <= (t = O.indexOf(t)) && O.splice(t, 4)
        }
        ,
        Pt.isInViewport = function(t, e, n) {
            var i = (le(t) ? ie(t) : t).getBoundingClientRect()
              , r = i[n ? me : ge] * e || 0;
            return n ? 0 < i.right - r && i.left + r < Rt.innerWidth : 0 < i.bottom - r && i.top + r < Rt.innerHeight
        }
        ,
        Pt.positionInViewport = function(t, e, n) {
            le(t) && (t = ie(t));
            var i = t.getBoundingClientRect()
              , r = i[n ? me : ge]
              , o = null == e ? r / 2 : e in A ? A[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0;
            return n ? (i.left + o) / Rt.innerWidth : (i.top + o) / Rt.innerHeight
        }
        ,
        Pt
    }();
    X.version = "3.9.1",
    X.saveStyles = function(t) {
        return t ? zt(t).forEach(function(t) {
            if (t && t.style) {
                var e = B.indexOf(t);
                0 <= e && B.splice(e, 5),
                B.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), jt.core.getCache(t), Qt)
            }
        }) : B
    }
    ,
    X.revert = function(t, e) {
        return j(!t, e)
    }
    ,
    X.create = function(t, e) {
        return new X(t,e)
    }
    ,
    X.refresh = function(t) {
        return t ? qe() : (o || X.register()) && I(!0)
    }
    ,
    X.update = H,
    X.clearScrollMemory = R,
    X.maxScroll = function(t, e) {
        return ue(t, e ? Ae : Ce)
    }
    ,
    X.getScrollFunc = function(t, e) {
        return se(ie(t), e ? Ae : Ce)
    }
    ,
    X.getById = function(t) {
        return ze[t]
    }
    ,
    X.getAll = function() {
        return He.slice(0)
    }
    ,
    X.isScrolling = function() {
        return !!te
    }
    ,
    X.snapDirectional = Le,
    X.addEventListener = function(t, e) {
        var n = k[t] || (k[t] = []);
        ~n.indexOf(e) || n.push(e)
    }
    ,
    X.removeEventListener = function(t, e) {
        var n = k[t]
          , i = n && n.indexOf(e);
        0 <= i && n.splice(i, 1)
    }
    ,
    X.batch = function(t, e) {
        var n, i = [], r = {}, o = e.interval || .016, s = e.batchMax || 1e9, a = function(t, e) {
            var n = []
              , i = []
              , r = jt.delayedCall(o, function() {
                e(n, i),
                n = [],
                i = []
            }).pause();
            return function(t) {
                n.length || r.restart(!0),
                n.push(t.trigger),
                i.push(t),
                s <= n.length && r.progress(1)
            }
        };
        for (n in e)
            r[n] = "on" === n.substr(0, 2) && ce(e[n]) && "onRefreshInit" !== n ? a(0, e[n]) : e[n];
        return ce(s) && (s = s(),
        Be(X, "refresh", function() {
            return s = e.batchMax()
        })),
        zt(t).forEach(function(t) {
            var e = {};
            for (n in r)
                e[n] = r[n];
            e.trigger = t,
            i.push(X.create(e))
        }),
        i
    }
    ,
    X.sort = function(t) {
        return He.sort(t || function(t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
        }
        )
    }
    ,
    y() && jt.registerPlugin(X),
    t.ScrollTrigger = X,
    t.default = X,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    var l = /(^\s+|\s+$)/g
      , c = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    function d(t, e, n, i) {
        for (var r, o = t.firstChild, s = []; o; )
            3 === o.nodeType ? (r = (o.nodeValue + "").replace(/^\n+/g, ""),
            i || (r = r.replace(/\s+/g, " ")),
            s.push.apply(s, a(r, e, n, i))) : "br" === (o.nodeName + "").toLowerCase() ? s[s.length - 1] += "<br>" : s.push(o.outerHTML),
            o = o.nextSibling;
        for (r = s.length; r--; )
            "&" === s[r] && s.splice(r, 1, "&amp;");
        return s
    }
    function a(t, e, n, i) {
        if (t += "",
        n && (t = t.replace(l, "")),
        e && "" !== e)
            return t.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
        for (var r, o, s = [], a = t.length, u = 0; u < a; u++)
            (55296 <= (o = t.charAt(u)).charCodeAt(0) && o.charCodeAt(0) <= 56319 || 65024 <= t.charCodeAt(u + 1) && t.charCodeAt(u + 1) <= 65039) && (r = ((t.substr(u, 12).split(c) || [])[1] || "").length || 2,
            o = t.substr(u, r),
            u += r - (s.emoji = 1)),
            s.push(">" === o ? "&gt;" : "<" === o ? "&lt;" : !i || " " !== o || " " !== t.charAt(u - 1) && " " !== t.charAt(u + 1) ? o : "&nbsp;");
        return s
    }
    var e, p, n = {
        version: "3.9.1",
        name: "text",
        init: function(t, e, n) {
            var i, r, o, s, a, u, l, c, f = t.nodeName.toUpperCase(), h = this;
            if (h.svg = t.getBBox && ("TEXT" === f || "TSPAN" === f),
            !("innerHTML"in t || h.svg))
                return !1;
            if (h.target = t,
            "object" != typeof e && (e = {
                value: e
            }),
            "value"in e) {
                for (h.delimiter = e.delimiter || "",
                o = d(t, h.delimiter, !1, e.preserveSpaces),
                p || (p = document.createElement("div")),
                p.innerHTML = e.value,
                r = d(p, h.delimiter),
                h.from = n._from,
                h.from && (f = o,
                o = r,
                r = f),
                h.hasClass = !(!e.newClass && !e.oldClass),
                h.newClass = e.newClass,
                h.oldClass = e.oldClass,
                i = (f = o.length - r.length) < 0 ? o : r,
                h.fillChar = e.fillChar || (e.padSpace ? "&nbsp;" : ""),
                f < 0 && (f = -f); -1 < --f; )
                    i.push(h.fillChar);
                if ("diff" === e.type) {
                    for (a = [],
                    u = [],
                    l = "",
                    f = s = 0; f < r.length; f++)
                        (c = r[f]) === o[f] ? l += c : (a[s] = l + c,
                        u[s++] = l + o[f],
                        l = "");
                    r = a,
                    o = u,
                    l && (r.push(l),
                    o.push(l))
                }
                e.speed && n.duration(Math.min(.05 / e.speed * i.length, e.maxDuration || 9999)),
                this.original = o,
                this.text = r,
                this._props.push("text")
            } else
                h.text = h.original = [""]
        },
        render: function(t, e) {
            1 < t ? t = 1 : t < 0 && (t = 0),
            e.from && (t = 1 - t);
            var n, i, r, o = e.text, s = e.hasClass, a = e.newClass, u = e.oldClass, l = e.delimiter, c = e.target, f = e.fillChar, h = e.original, d = o.length, p = t * d + .5 | 0;
            r = s && t ? (i = u && p !== d,
            ((n = a && p) ? "<span class='" + a + "'>" : "") + o.slice(0, p).join(l) + (n ? "</span>" : "") + (i ? "<span class='" + u + "'>" : "") + l + h.slice(p).join(l) + (i ? "</span>" : "")) : o.slice(0, p).join(l) + l + h.slice(p).join(l),
            e.svg ? c.textContent = r : c.innerHTML = "&nbsp;" === f && ~r.indexOf("  ") ? r.split("  ").join("&nbsp;&nbsp;") : r
        }
    };
    n.splitInnerHTML = d,
    n.emojiSafeSplit = a,
    n.getText = function t(e) {
        var n = e.nodeType
          , i = "";
        if (1 === n || 9 === n || 11 === n) {
            if ("string" == typeof e.textContent)
                return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling)
                i += t(e)
        } else if (3 === n || 4 === n)
            return e.nodeValue;
        return i
    }
    ,
    (e || "undefined" != typeof window && (e = window.gsap) && e.registerPlugin && e) && e.registerPlugin(n),
    t.TextPlugin = n,
    t.default = n,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).SimpleBar = e()
}(this, function() {
    "use strict";
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function e(t, e) {
        return t(e = {
            exports: {}
        }, e.exports),
        e.exports
    }
    var n, i, r, o = "object", s = function(t) {
        return t && t.Math == Math && t
    }, m = s(typeof globalThis == o && globalThis) || s(typeof window == o && window) || s(typeof self == o && self) || s(typeof t == o && t) || Function("return this")(), g = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }, h = !g(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }), a = {}.propertyIsEnumerable, u = Object.getOwnPropertyDescriptor, d = {
        f: u && !a.call({
            1: 2
        }, 1) ? function(t) {
            var e = u(this, t);
            return !!e && e.enumerable
        }
        : a
    }, D = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }, l = {}.toString, c = function(t) {
        return l.call(t).slice(8, -1)
    }, f = "".split, b = g(function() {
        return !Object("z").propertyIsEnumerable(0)
    }) ? function(t) {
        return "String" == c(t) ? f.call(t, "") : Object(t)
    }
    : Object, p = function(t) {
        if (null == t)
            throw TypeError("Can't call method on " + t);
        return t
    }, v = function(t) {
        return b(p(t))
    }, y = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }, _ = function(t, e) {
        if (!y(t))
            return t;
        var n, i;
        if (e && "function" == typeof (n = t.toString) && !y(i = n.call(t)))
            return i;
        if ("function" == typeof (n = t.valueOf) && !y(i = n.call(t)))
            return i;
        if (!e && "function" == typeof (n = t.toString) && !y(i = n.call(t)))
            return i;
        throw TypeError("Can't convert object to primitive value")
    }, x = {}.hasOwnProperty, w = function(t, e) {
        return x.call(t, e)
    }, E = m.document, T = y(E) && y(E.createElement), A = function(t) {
        return T ? E.createElement(t) : {}
    }, C = !h && !g(function() {
        return 7 != Object.defineProperty(A("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }), S = Object.getOwnPropertyDescriptor, k = {
        f: h ? S : function(t, e) {
            if (t = v(t),
            e = _(e, !0),
            C)
                try {
                    return S(t, e)
                } catch (t) {}
            if (w(t, e))
                return D(!d.f.call(t, e), t[e])
        }
    }, F = function(t) {
        if (!y(t))
            throw TypeError(String(t) + " is not an object");
        return t
    }, O = Object.defineProperty, M = {
        f: h ? O : function(t, e, n) {
            if (F(t),
            e = _(e, !0),
            F(n),
            C)
                try {
                    return O(t, e, n)
                } catch (t) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported");
            return "value"in n && (t[e] = n.value),
            t
        }
    }, L = h ? function(t, e, n) {
        return M.f(t, e, D(1, n))
    }
    : function(t, e, n) {
        return t[e] = n,
        t
    }
    , B = function(e, n) {
        try {
            L(m, e, n)
        } catch (t) {
            m[e] = n
        }
        return n
    }, P = e(function(t) {
        var e = "__core-js_shared__"
          , n = m[e] || B(e, {});
        (t.exports = function(t, e) {
            return n[t] || (n[t] = void 0 !== e ? e : {})
        }
        )("versions", []).push({
            version: "3.2.1",
            mode: "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }), j = P("native-function-to-string", Function.toString), R = m.WeakMap, I = "function" == typeof R && /native code/.test(j.call(R)), N = 0, H = Math.random(), z = function(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++N + H).toString(36)
    }, W = P("keys"), q = function(t) {
        return W[t] || (W[t] = z(t))
    }, V = {}, X = m.WeakMap;
    if (I) {
        var Y = new X
          , $ = Y.get
          , U = Y.has
          , G = Y.set;
        n = function(t, e) {
            return G.call(Y, t, e),
            e
        }
        ,
        i = function(t) {
            return $.call(Y, t) || {}
        }
        ,
        r = function(t) {
            return U.call(Y, t)
        }
    } else {
        var Q = q("state");
        V[Q] = !0,
        n = function(t, e) {
            return L(t, Q, e),
            e
        }
        ,
        i = function(t) {
            return w(t, Q) ? t[Q] : {}
        }
        ,
        r = function(t) {
            return w(t, Q)
        }
    }
    var K = {
        set: n,
        get: i,
        has: r,
        enforce: function(t) {
            return r(t) ? i(t) : n(t, {})
        },
        getterFor: function(n) {
            return function(t) {
                var e;
                if (!y(t) || (e = i(t)).type !== n)
                    throw TypeError("Incompatible receiver, " + n + " required");
                return e
            }
        }
    }
      , Z = e(function(t) {
        var e = K.get
          , a = K.enforce
          , u = String(j).split("toString");
        P("inspectSource", function(t) {
            return j.call(t)
        }),
        (t.exports = function(t, e, n, i) {
            var r = !!i && !!i.unsafe
              , o = !!i && !!i.enumerable
              , s = !!i && !!i.noTargetGet;
            "function" == typeof n && ("string" != typeof e || w(n, "name") || L(n, "name", e),
            a(n).source = u.join("string" == typeof e ? e : "")),
            t !== m ? (r ? !s && t[e] && (o = !0) : delete t[e],
            o ? t[e] = n : L(t, e, n)) : o ? t[e] = n : B(e, n)
        }
        )(Function.prototype, "toString", function() {
            return "function" == typeof this && e(this).source || j.call(this)
        })
    })
      , J = m
      , tt = function(t) {
        return "function" == typeof t ? t : void 0
    }
      , et = function(t, e) {
        return arguments.length < 2 ? tt(J[t]) || tt(m[t]) : J[t] && J[t][e] || m[t] && m[t][e]
    }
      , nt = Math.ceil
      , it = Math.floor
      , rt = function(t) {
        return isNaN(t = +t) ? 0 : (0 < t ? it : nt)(t)
    }
      , ot = Math.min
      , st = function(t) {
        return 0 < t ? ot(rt(t), 9007199254740991) : 0
    }
      , at = Math.max
      , ut = Math.min
      , lt = function(l) {
        return function(t, e, n) {
            var i, r, o, s = v(t), a = st(s.length), u = (i = a,
            (r = rt(n)) < 0 ? at(r + i, 0) : ut(r, i));
            if (l && e != e) {
                for (; u < a; )
                    if ((o = s[u++]) != o)
                        return !0
            } else
                for (; u < a; u++)
                    if ((l || u in s) && s[u] === e)
                        return l || u || 0;
            return !l && -1
        }
    }
      , ct = {
        includes: lt(!0),
        indexOf: lt(!1)
    }.indexOf
      , ft = function(t, e) {
        var n, i = v(t), r = 0, o = [];
        for (n in i)
            !w(V, n) && w(i, n) && o.push(n);
        for (; e.length > r; )
            w(i, n = e[r++]) && (~ct(o, n) || o.push(n));
        return o
    }
      , ht = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
      , dt = ht.concat("length", "prototype")
      , pt = {
        f: Object.getOwnPropertyNames || function(t) {
            return ft(t, dt)
        }
    }
      , vt = {
        f: Object.getOwnPropertySymbols
    }
      , mt = et("Reflect", "ownKeys") || function(t) {
        var e = pt.f(F(t))
          , n = vt.f;
        return n ? e.concat(n(t)) : e
    }
      , gt = function(t, e) {
        for (var n = mt(e), i = M.f, r = k.f, o = 0; o < n.length; o++) {
            var s = n[o];
            w(t, s) || i(t, s, r(e, s))
        }
    }
      , yt = /#|\.prototype\./
      , _t = function(t, e) {
        var n = bt[Dt(t)];
        return n == wt || n != xt && ("function" == typeof e ? g(e) : !!e)
    }
      , Dt = _t.normalize = function(t) {
        return String(t).replace(yt, ".").toLowerCase()
    }
      , bt = _t.data = {}
      , xt = _t.NATIVE = "N"
      , wt = _t.POLYFILL = "P"
      , Et = _t
      , Tt = k.f
      , At = function(t, e) {
        var n, i, r, o, s, a = t.target, u = t.global, l = t.stat;
        if (n = u ? m : l ? m[a] || B(a, {}) : (m[a] || {}).prototype)
            for (i in e) {
                if (o = e[i],
                r = t.noTargetGet ? (s = Tt(n, i)) && s.value : n[i],
                !Et(u ? i : a + (l ? "." : "#") + i, t.forced) && void 0 !== r) {
                    if (typeof o == typeof r)
                        continue;
                    gt(o, r)
                }
                (t.sham || r && r.sham) && L(o, "sham", !0),
                Z(n, i, o, t)
            }
    }
      , Ct = function(t) {
        if ("function" != typeof t)
            throw TypeError(String(t) + " is not a function");
        return t
    }
      , St = function(i, r, t) {
        if (Ct(i),
        void 0 === r)
            return i;
        switch (t) {
        case 0:
            return function() {
                return i.call(r)
            }
            ;
        case 1:
            return function(t) {
                return i.call(r, t)
            }
            ;
        case 2:
            return function(t, e) {
                return i.call(r, t, e)
            }
            ;
        case 3:
            return function(t, e, n) {
                return i.call(r, t, e, n)
            }
        }
        return function() {
            return i.apply(r, arguments)
        }
    }
      , kt = function(t) {
        return Object(p(t))
    }
      , Ft = Array.isArray || function(t) {
        return "Array" == c(t)
    }
      , Ot = !!Object.getOwnPropertySymbols && !g(function() {
        return !String(Symbol())
    })
      , Mt = m.Symbol
      , Lt = P("wks")
      , Bt = function(t) {
        return Lt[t] || (Lt[t] = Ot && Mt[t] || (Ot ? Mt : z)("Symbol." + t))
    }
      , Pt = Bt("species")
      , jt = function(t, e) {
        var n;
        return Ft(t) && ("function" != typeof (n = t.constructor) || n !== Array && !Ft(n.prototype) ? y(n) && null === (n = n[Pt]) && (n = void 0) : n = void 0),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
    }
      , Rt = [].push
      , It = function(d) {
        var p = 1 == d
          , v = 2 == d
          , m = 3 == d
          , g = 4 == d
          , y = 6 == d
          , _ = 5 == d || y;
        return function(t, e, n, i) {
            for (var r, o, s = kt(t), a = b(s), u = St(e, n, 3), l = st(a.length), c = 0, f = i || jt, h = p ? f(t, l) : v ? f(t, 0) : void 0; c < l; c++)
                if ((_ || c in a) && (o = u(r = a[c], c, s),
                d))
                    if (p)
                        h[c] = o;
                    else if (o)
                        switch (d) {
                        case 3:
                            return !0;
                        case 5:
                            return r;
                        case 6:
                            return c;
                        case 2:
                            Rt.call(h, r)
                        }
                    else if (g)
                        return !1;
            return y ? -1 : m || g ? g : h
        }
    }
      , Nt = {
        forEach: It(0),
        map: It(1),
        filter: It(2),
        some: It(3),
        every: It(4),
        find: It(5),
        findIndex: It(6)
    }
      , Ht = function(t, e) {
        var n = [][t];
        return !n || !g(function() {
            n.call(null, e || function() {
                throw 1
            }
            , 1)
        })
    }
      , zt = Nt.forEach
      , Wt = Ht("forEach") ? function(t) {
        return zt(this, t, 1 < arguments.length ? arguments[1] : void 0)
    }
    : [].forEach;
    At({
        target: "Array",
        proto: !0,
        forced: [].forEach != Wt
    }, {
        forEach: Wt
    });
    var qt = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    for (var Vt in qt) {
        var Xt = m[Vt]
          , Yt = Xt && Xt.prototype;
        if (Yt && Yt.forEach !== Wt)
            try {
                L(Yt, "forEach", Wt)
            } catch (t) {
                Yt.forEach = Wt
            }
    }
    var $t, Ut = !("undefined" == typeof window || !window.document || !window.document.createElement), Gt = Bt("species"), Qt = Nt.filter;
    At({
        target: "Array",
        proto: !0,
        forced: ($t = "filter",
        !!g(function() {
            var t = [];
            return (t.constructor = {})[Gt] = function() {
                return {
                    foo: 1
                }
            }
            ,
            1 !== t[$t](Boolean).foo
        }))
    }, {
        filter: function(t) {
            return Qt(this, t, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Kt = Object.keys || function(t) {
        return ft(t, ht)
    }
      , Zt = h ? Object.defineProperties : function(t, e) {
        F(t);
        for (var n, i = Kt(e), r = i.length, o = 0; o < r; )
            M.f(t, n = i[o++], e[n]);
        return t
    }
      , Jt = et("document", "documentElement")
      , te = q("IE_PROTO")
      , ee = "prototype"
      , ne = function() {}
      , ie = function() {
        var t, e = A("iframe"), n = ht.length;
        for (e.style.display = "none",
        Jt.appendChild(e),
        e.src = String("javascript:"),
        (t = e.contentWindow.document).open(),
        t.write("<script>document.F=Object<\/script>"),
        t.close(),
        ie = t.F; n--; )
            delete ie[ee][ht[n]];
        return ie()
    }
      , re = Object.create || function(t, e) {
        var n;
        return null !== t ? (ne[ee] = F(t),
        n = new ne,
        ne[ee] = null,
        n[te] = t) : n = ie(),
        void 0 === e ? n : Zt(n, e)
    }
    ;
    V[te] = !0;
    var oe = Bt("unscopables")
      , se = Array.prototype;
    null == se[oe] && L(se, oe, re(null));
    var ae, ue, le, ce = function(t) {
        se[oe][t] = !0
    }, fe = {}, he = !g(function() {
        function t() {}
        return t.prototype.constructor = null,
        Object.getPrototypeOf(new t) !== t.prototype
    }), de = q("IE_PROTO"), pe = Object.prototype, ve = he ? Object.getPrototypeOf : function(t) {
        return t = kt(t),
        w(t, de) ? t[de] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? pe : null
    }
    , me = Bt("iterator"), ge = !1;
    [].keys && ("next"in (le = [].keys()) ? (ue = ve(ve(le))) !== Object.prototype && (ae = ue) : ge = !0),
    null == ae && (ae = {}),
    w(ae, me) || L(ae, me, function() {
        return this
    });
    var ye = {
        IteratorPrototype: ae,
        BUGGY_SAFARI_ITERATORS: ge
    }
      , _e = M.f
      , De = Bt("toStringTag")
      , be = function(t, e, n) {
        t && !w(t = n ? t : t.prototype, De) && _e(t, De, {
            configurable: !0,
            value: e
        })
    }
      , xe = ye.IteratorPrototype
      , we = function() {
        return this
    }
      , Ee = Object.setPrototypeOf || ("__proto__"in {} ? function() {
        var n, i = !1, t = {};
        try {
            (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []),
            i = t instanceof Array
        } catch (t) {}
        return function(t, e) {
            return F(t),
            function(t) {
                if (!y(t) && null !== t)
                    throw TypeError("Can't set " + String(t) + " as a prototype")
            }(e),
            i ? n.call(t, e) : t.__proto__ = e,
            t
        }
    }() : void 0)
      , Te = ye.IteratorPrototype
      , Ae = ye.BUGGY_SAFARI_ITERATORS
      , Ce = Bt("iterator")
      , Se = "values"
      , ke = function() {
        return this
    }
      , Fe = function(t, e, n, i, r, o, s) {
        var a, u, l;
        u = i,
        l = e + " Iterator",
        (a = n).prototype = re(xe, {
            next: D(1, u)
        }),
        be(a, l, !1),
        fe[l] = we;
        var c, f, h, d = function(t) {
            if (t === r && y)
                return y;
            if (!Ae && t in m)
                return m[t];
            switch (t) {
            case "keys":
            case Se:
            case "entries":
                return function() {
                    return new n(this,t)
                }
            }
            return function() {
                return new n(this)
            }
        }, p = e + " Iterator", v = !1, m = t.prototype, g = m[Ce] || m["@@iterator"] || r && m[r], y = !Ae && g || d(r), _ = "Array" == e && m.entries || g;
        if (_ && (c = ve(_.call(new t)),
        Te !== Object.prototype && c.next && (ve(c) !== Te && (Ee ? Ee(c, Te) : "function" != typeof c[Ce] && L(c, Ce, ke)),
        be(c, p, !0))),
        r == Se && g && g.name !== Se && (v = !0,
        y = function() {
            return g.call(this)
        }
        ),
        m[Ce] !== y && L(m, Ce, y),
        fe[e] = y,
        r)
            if (f = {
                values: d(Se),
                keys: o ? y : d("keys"),
                entries: d("entries")
            },
            s)
                for (h in f)
                    !Ae && !v && h in m || Z(m, h, f[h]);
            else
                At({
                    target: e,
                    proto: !0,
                    forced: Ae || v
                }, f);
        return f
    }
      , Oe = "Array Iterator"
      , Me = K.set
      , Le = K.getterFor(Oe)
      , Be = Fe(Array, "Array", function(t, e) {
        Me(this, {
            type: Oe,
            target: v(t),
            index: 0,
            kind: e
        })
    }, function() {
        var t = Le(this)
          , e = t.target
          , n = t.kind
          , i = t.index++;
        return !e || i >= e.length ? {
            value: t.target = void 0,
            done: !0
        } : "keys" == n ? {
            value: i,
            done: !1
        } : "values" == n ? {
            value: e[i],
            done: !1
        } : {
            value: [i, e[i]],
            done: !1
        }
    }, "values");
    fe.Arguments = fe.Array,
    ce("keys"),
    ce("values"),
    ce("entries");
    var Pe = Object.assign
      , je = !Pe || g(function() {
        var t = {}
          , e = {}
          , n = Symbol()
          , i = "abcdefghijklmnopqrst";
        return t[n] = 7,
        i.split("").forEach(function(t) {
            e[t] = t
        }),
        7 != Pe({}, t)[n] || Kt(Pe({}, e)).join("") != i
    }) ? function(t, e) {
        for (var n = kt(t), i = arguments.length, r = 1, o = vt.f, s = d.f; r < i; )
            for (var a, u = b(arguments[r++]), l = o ? Kt(u).concat(o(u)) : Kt(u), c = l.length, f = 0; f < c; )
                a = l[f++],
                h && !s.call(u, a) || (n[a] = u[a]);
        return n
    }
    : Pe;
    At({
        target: "Object",
        stat: !0,
        forced: Object.assign !== je
    }, {
        assign: je
    });
    var Re = Bt("toStringTag")
      , Ie = "Arguments" == c(function() {
        return arguments
    }())
      , Ne = function(t) {
        var e, n, i;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), Re)) ? n : Ie ? c(e) : "Object" == (i = c(e)) && "function" == typeof e.callee ? "Arguments" : i
    }
      , He = {};
    He[Bt("toStringTag")] = "z";
    var ze = "[object z]" !== String(He) ? function() {
        return "[object " + Ne(this) + "]"
    }
    : He.toString
      , We = Object.prototype;
    ze !== We.toString && Z(We, "toString", ze, {
        unsafe: !0
    });
    var qe = "\t\n\v\f\r                　\u2028\u2029\ufeff"
      , Ve = "[" + qe + "]"
      , Xe = RegExp("^" + Ve + Ve + "*")
      , Ye = RegExp(Ve + Ve + "*$")
      , $e = function(n) {
        return function(t) {
            var e = String(p(t));
            return 1 & n && (e = e.replace(Xe, "")),
            2 & n && (e = e.replace(Ye, "")),
            e
        }
    }
      , Ue = {
        start: $e(1),
        end: $e(2),
        trim: $e(3)
    }.trim
      , Ge = m.parseInt
      , Qe = /^[+-]?0[Xx]/
      , Ke = 8 !== Ge(qe + "08") || 22 !== Ge(qe + "0x16") ? function(t, e) {
        var n = Ue(String(t));
        return Ge(n, e >>> 0 || (Qe.test(n) ? 16 : 10))
    }
    : Ge;
    At({
        global: !0,
        forced: parseInt != Ke
    }, {
        parseInt: Ke
    });
    var Ze = function(a) {
        return function(t, e) {
            var n, i, r = String(p(t)), o = rt(e), s = r.length;
            return o < 0 || s <= o ? a ? "" : void 0 : (n = r.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === s || (i = r.charCodeAt(o + 1)) < 56320 || 57343 < i ? a ? r.charAt(o) : n : a ? r.slice(o, o + 2) : i - 56320 + (n - 55296 << 10) + 65536
        }
    }
      , Je = {
        codeAt: Ze(!1),
        charAt: Ze(!0)
    }
      , tn = Je.charAt
      , en = "String Iterator"
      , nn = K.set
      , rn = K.getterFor(en);
    Fe(String, "String", function(t) {
        nn(this, {
            type: en,
            string: String(t),
            index: 0
        })
    }, function() {
        var t, e = rn(this), n = e.string, i = e.index;
        return i >= n.length ? {
            value: void 0,
            done: !0
        } : (t = tn(n, i),
        e.index += t.length,
        {
            value: t,
            done: !1
        })
    });
    var on = function(t, e, n) {
        for (var i in e)
            Z(t, i, e[i], n);
        return t
    }
      , sn = !g(function() {
        return Object.isExtensible(Object.preventExtensions({}))
    })
      , an = e(function(t) {
        var e = M.f
          , n = z("meta")
          , i = 0
          , r = Object.isExtensible || function() {
            return !0
        }
          , o = function(t) {
            e(t, n, {
                value: {
                    objectID: "O" + ++i,
                    weakData: {}
                }
            })
        }
          , s = t.exports = {
            REQUIRED: !1,
            fastKey: function(t, e) {
                if (!y(t))
                    return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!w(t, n)) {
                    if (!r(t))
                        return "F";
                    if (!e)
                        return "E";
                    o(t)
                }
                return t[n].objectID
            },
            getWeakData: function(t, e) {
                if (!w(t, n)) {
                    if (!r(t))
                        return !0;
                    if (!e)
                        return !1;
                    o(t)
                }
                return t[n].weakData
            },
            onFreeze: function(t) {
                return sn && s.REQUIRED && r(t) && !w(t, n) && o(t),
                t
            }
        };
        V[n] = !0
    })
      , un = (an.REQUIRED,
    an.fastKey,
    an.getWeakData,
    an.onFreeze,
    Bt("iterator"))
      , ln = Array.prototype
      , cn = Bt("iterator")
      , fn = function(e, t, n, i) {
        try {
            return i ? t(F(n)[0], n[1]) : t(n)
        } catch (t) {
            var r = e.return;
            throw void 0 !== r && F(r.call(e)),
            t
        }
    }
      , hn = e(function(t) {
        var d = function(t, e) {
            this.stopped = t,
            this.result = e
        };
        (t.exports = function(t, e, n, i, r) {
            var o, s, a, u, l, c, f, h = St(e, n, i ? 2 : 1);
            if (r)
                o = t;
            else {
                if ("function" != typeof (s = function(t) {
                    if (null != t)
                        return t[cn] || t["@@iterator"] || fe[Ne(t)]
                }(t)))
                    throw TypeError("Target is not iterable");
                if (void 0 !== (f = s) && (fe.Array === f || ln[un] === f)) {
                    for (a = 0,
                    u = st(t.length); a < u; a++)
                        if ((l = i ? h(F(c = t[a])[0], c[1]) : h(t[a])) && l instanceof d)
                            return l;
                    return new d(!1)
                }
                o = s.call(t)
            }
            for (; !(c = o.next()).done; )
                if ((l = fn(o, h, c.value, i)) && l instanceof d)
                    return l;
            return new d(!1)
        }
        ).stop = function(t) {
            return new d(!0,t)
        }
    })
      , dn = function(t, e, n) {
        if (!(t instanceof e))
            throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return t
    }
      , pn = Bt("iterator")
      , vn = !1;
    try {
        var mn = 0
          , gn = {
            next: function() {
                return {
                    done: !!mn++
                }
            },
            return: function() {
                vn = !0
            }
        };
        gn[pn] = function() {
            return this
        }
        ,
        Array.from(gn, function() {
            throw 2
        })
    } catch (t) {}
    var yn = function(u, t, e, l, i) {
        var c = m[u]
          , r = c && c.prototype
          , f = c
          , h = l ? "set" : "add"
          , n = {}
          , o = function(t) {
            var n = r[t];
            Z(r, t, "add" == t ? function(t) {
                return n.call(this, 0 === t ? 0 : t),
                this
            }
            : "delete" == t ? function(t) {
                return !(i && !y(t)) && n.call(this, 0 === t ? 0 : t)
            }
            : "get" == t ? function(t) {
                return i && !y(t) ? void 0 : n.call(this, 0 === t ? 0 : t)
            }
            : "has" == t ? function(t) {
                return !(i && !y(t)) && n.call(this, 0 === t ? 0 : t)
            }
            : function(t, e) {
                return n.call(this, 0 === t ? 0 : t, e),
                this
            }
            )
        };
        if (Et(u, "function" != typeof c || !(i || r.forEach && !g(function() {
            (new c).entries().next()
        }))))
            f = e.getConstructor(t, u, l, h),
            an.REQUIRED = !0;
        else if (Et(u, !0)) {
            var s = new f
              , a = s[h](i ? {} : -0, 1) != s
              , d = g(function() {
                s.has(1)
            })
              , p = function(t, e) {
                if (!e && !vn)
                    return !1;
                var n = !1;
                try {
                    var i = {};
                    i[pn] = function() {
                        return {
                            next: function() {
                                return {
                                    done: n = !0
                                }
                            }
                        }
                    }
                    ,
                    t(i)
                } catch (t) {}
                return n
            }(function(t) {
                new c(t)
            })
              , v = !i && g(function() {
                for (var t = new c, e = 5; e--; )
                    t[h](e, e);
                return !t.has(-0)
            });
            p || (((f = t(function(t, e) {
                dn(t, f, u);
                var n, i, r, o, s, a = (n = new c,
                i = t,
                r = f,
                Ee && "function" == typeof (o = i.constructor) && o !== r && y(s = o.prototype) && s !== r.prototype && Ee(n, s),
                n);
                return null != e && hn(e, a[h], a, l),
                a
            })).prototype = r).constructor = f),
            (d || v) && (o("delete"),
            o("has"),
            l && o("get")),
            (v || a) && o(h),
            i && r.clear && delete r.clear
        }
        return n[u] = f,
        At({
            global: !0,
            forced: f != c
        }, n),
        be(f, u),
        i || e.setStrong(f, u, l),
        f
    }
      , _n = an.getWeakData
      , Dn = K.set
      , bn = K.getterFor
      , xn = Nt.find
      , wn = Nt.findIndex
      , En = 0
      , Tn = function(t) {
        return t.frozen || (t.frozen = new An)
    }
      , An = function() {
        this.entries = []
    }
      , Cn = function(t, e) {
        return xn(t.entries, function(t) {
            return t[0] === e
        })
    };
    An.prototype = {
        get: function(t) {
            var e = Cn(this, t);
            if (e)
                return e[1]
        },
        has: function(t) {
            return !!Cn(this, t)
        },
        set: function(t, e) {
            var n = Cn(this, t);
            n ? n[1] = e : this.entries.push([t, e])
        },
        delete: function(e) {
            var t = wn(this.entries, function(t) {
                return t[0] === e
            });
            return ~t && this.entries.splice(t, 1),
            !!~t
        }
    };
    var Sn = {
        getConstructor: function(t, n, i, r) {
            var o = t(function(t, e) {
                dn(t, o, n),
                Dn(t, {
                    type: n,
                    id: En++,
                    frozen: void 0
                }),
                null != e && hn(e, t[r], t, i)
            })
              , s = bn(n)
              , a = function(t, e, n) {
                var i = s(t)
                  , r = _n(F(e), !0);
                return !0 === r ? Tn(i).set(e, n) : r[i.id] = n,
                t
            };
            return on(o.prototype, {
                delete: function(t) {
                    var e = s(this);
                    if (!y(t))
                        return !1;
                    var n = _n(t);
                    return !0 === n ? Tn(e).delete(t) : n && w(n, e.id) && delete n[e.id]
                },
                has: function(t) {
                    var e = s(this);
                    if (!y(t))
                        return !1;
                    var n = _n(t);
                    return !0 === n ? Tn(e).has(t) : n && w(n, e.id)
                }
            }),
            on(o.prototype, i ? {
                get: function(t) {
                    var e = s(this);
                    if (y(t)) {
                        var n = _n(t);
                        return !0 === n ? Tn(e).get(t) : n ? n[e.id] : void 0
                    }
                },
                set: function(t, e) {
                    return a(this, t, e)
                }
            } : {
                add: function(t) {
                    return a(this, t, !0)
                }
            }),
            o
        }
    }
      , kn = (e(function(t) {
        var i, r = K.enforce, e = !m.ActiveXObject && "ActiveXObject"in m, o = Object.isExtensible, n = function(t) {
            return function() {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        }, s = t.exports = yn("WeakMap", n, Sn, !0, !0);
        if (I && e) {
            i = Sn.getConstructor(n, "WeakMap", !0),
            an.REQUIRED = !0;
            var a = s.prototype
              , u = a.delete
              , l = a.has
              , c = a.get
              , f = a.set;
            on(a, {
                delete: function(t) {
                    if (!y(t) || o(t))
                        return u.call(this, t);
                    var e = r(this);
                    return e.frozen || (e.frozen = new i),
                    u.call(this, t) || e.frozen.delete(t)
                },
                has: function(t) {
                    if (!y(t) || o(t))
                        return l.call(this, t);
                    var e = r(this);
                    return e.frozen || (e.frozen = new i),
                    l.call(this, t) || e.frozen.has(t)
                },
                get: function(t) {
                    if (!y(t) || o(t))
                        return c.call(this, t);
                    var e = r(this);
                    return e.frozen || (e.frozen = new i),
                    l.call(this, t) ? c.call(this, t) : e.frozen.get(t)
                },
                set: function(t, e) {
                    if (y(t) && !o(t)) {
                        var n = r(this);
                        n.frozen || (n.frozen = new i),
                        l.call(this, t) ? f.call(this, t, e) : n.frozen.set(t, e)
                    } else
                        f.call(this, t, e);
                    return this
                }
            })
        }
    }),
    Bt("iterator"))
      , Fn = Bt("toStringTag")
      , On = Be.values;
    for (var Mn in qt) {
        var Ln = m[Mn]
          , Bn = Ln && Ln.prototype;
        if (Bn) {
            if (Bn[kn] !== On)
                try {
                    L(Bn, kn, On)
                } catch (t) {
                    Bn[kn] = On
                }
            if (Bn[Fn] || L(Bn, Fn, Mn),
            qt[Mn])
                for (var Pn in Be)
                    if (Bn[Pn] !== Be[Pn])
                        try {
                            L(Bn, Pn, Be[Pn])
                        } catch (t) {
                            Bn[Pn] = Be[Pn]
                        }
        }
    }
    var jn = "Expected a function"
      , Rn = NaN
      , In = "[object Symbol]"
      , Nn = /^\s+|\s+$/g
      , Hn = /^[-+]0x[0-9a-f]+$/i
      , zn = /^0b[01]+$/i
      , Wn = /^0o[0-7]+$/i
      , qn = parseInt
      , Vn = "object" == typeof t && t && t.Object === Object && t
      , Xn = "object" == typeof self && self && self.Object === Object && self
      , Yn = Vn || Xn || Function("return this")()
      , $n = Object.prototype.toString
      , Un = Math.max
      , Gn = Math.min
      , Qn = function() {
        return Yn.Date.now()
    };
    function Kn(i, r, t) {
        var o, s, a, u, l, c, f = 0, h = !1, d = !1, e = !0;
        if ("function" != typeof i)
            throw new TypeError(jn);
        function p(t) {
            var e = o
              , n = s;
            return o = s = void 0,
            f = t,
            u = i.apply(n, e)
        }
        function v(t) {
            var e = t - c;
            return void 0 === c || r <= e || e < 0 || d && a <= t - f
        }
        function m() {
            var t, e, n = Qn();
            if (v(n))
                return g(n);
            l = setTimeout(m, (e = r - ((t = n) - c),
            d ? Gn(e, a - (t - f)) : e))
        }
        function g(t) {
            return l = void 0,
            e && o ? p(t) : (o = s = void 0,
            u)
        }
        function n() {
            var t, e = Qn(), n = v(e);
            if (o = arguments,
            s = this,
            c = e,
            n) {
                if (void 0 === l)
                    return f = t = c,
                    l = setTimeout(m, r),
                    h ? p(t) : u;
                if (d)
                    return l = setTimeout(m, r),
                    p(c)
            }
            return void 0 === l && (l = setTimeout(m, r)),
            u
        }
        return r = Jn(r) || 0,
        Zn(t) && (h = !!t.leading,
        a = (d = "maxWait"in t) ? Un(Jn(t.maxWait) || 0, r) : a,
        e = "trailing"in t ? !!t.trailing : e),
        n.cancel = function() {
            void 0 !== l && clearTimeout(l),
            o = c = s = l = void (f = 0)
        }
        ,
        n.flush = function() {
            return void 0 === l ? u : g(Qn())
        }
        ,
        n
    }
    function Zn(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }
    function Jn(t) {
        if ("number" == typeof t)
            return t;
        if ("symbol" == typeof (e = t) || (n = e) && "object" == typeof n && $n.call(e) == In)
            return Rn;
        var e, n;
        if (Zn(t)) {
            var i = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = Zn(i) ? i + "" : i
        }
        if ("string" != typeof t)
            return 0 === t ? t : +t;
        t = t.replace(Nn, "");
        var r = zn.test(t);
        return r || Wn.test(t) ? qn(t.slice(2), r ? 2 : 8) : Hn.test(t) ? Rn : +t
    }
    var ti = function(t, e, n) {
        var i = !0
          , r = !0;
        if ("function" != typeof t)
            throw new TypeError(jn);
        return Zn(n) && (i = "leading"in n ? !!n.leading : i,
        r = "trailing"in n ? !!n.trailing : r),
        Kn(t, e, {
            leading: i,
            maxWait: e,
            trailing: r
        })
    }
      , ei = NaN
      , ni = "[object Symbol]"
      , ii = /^\s+|\s+$/g
      , ri = /^[-+]0x[0-9a-f]+$/i
      , oi = /^0b[01]+$/i
      , si = /^0o[0-7]+$/i
      , ai = parseInt
      , ui = "object" == typeof t && t && t.Object === Object && t
      , li = "object" == typeof self && self && self.Object === Object && self
      , ci = ui || li || Function("return this")()
      , fi = Object.prototype.toString
      , hi = Math.max
      , di = Math.min
      , pi = function() {
        return ci.Date.now()
    };
    function vi(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }
    function mi(t) {
        if ("number" == typeof t)
            return t;
        if ("symbol" == typeof (e = t) || (n = e) && "object" == typeof n && fi.call(e) == ni)
            return ei;
        var e, n;
        if (vi(t)) {
            var i = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = vi(i) ? i + "" : i
        }
        if ("string" != typeof t)
            return 0 === t ? t : +t;
        t = t.replace(ii, "");
        var r = oi.test(t);
        return r || si.test(t) ? ai(t.slice(2), r ? 2 : 8) : ri.test(t) ? ei : +t
    }
    var gi = function(i, r, t) {
        var o, s, a, u, l, c, f = 0, h = !1, d = !1, e = !0;
        if ("function" != typeof i)
            throw new TypeError("Expected a function");
        function p(t) {
            var e = o
              , n = s;
            return o = s = void 0,
            f = t,
            u = i.apply(n, e)
        }
        function v(t) {
            var e = t - c;
            return void 0 === c || r <= e || e < 0 || d && a <= t - f
        }
        function m() {
            var t, e, n = pi();
            if (v(n))
                return g(n);
            l = setTimeout(m, (e = r - ((t = n) - c),
            d ? di(e, a - (t - f)) : e))
        }
        function g(t) {
            return l = void 0,
            e && o ? p(t) : (o = s = void 0,
            u)
        }
        function n() {
            var t, e = pi(), n = v(e);
            if (o = arguments,
            s = this,
            c = e,
            n) {
                if (void 0 === l)
                    return f = t = c,
                    l = setTimeout(m, r),
                    h ? p(t) : u;
                if (d)
                    return l = setTimeout(m, r),
                    p(c)
            }
            return void 0 === l && (l = setTimeout(m, r)),
            u
        }
        return r = mi(r) || 0,
        vi(t) && (h = !!t.leading,
        a = (d = "maxWait"in t) ? hi(mi(t.maxWait) || 0, r) : a,
        e = "trailing"in t ? !!t.trailing : e),
        n.cancel = function() {
            void 0 !== l && clearTimeout(l),
            o = c = s = l = void (f = 0)
        }
        ,
        n.flush = function() {
            return void 0 === l ? u : g(pi())
        }
        ,
        n
    }
      , yi = "Expected a function"
      , _i = "__lodash_hash_undefined__"
      , Di = "[object Function]"
      , bi = "[object GeneratorFunction]"
      , xi = /^\[object .+?Constructor\]$/
      , wi = "object" == typeof t && t && t.Object === Object && t
      , Ei = "object" == typeof self && self && self.Object === Object && self
      , Ti = wi || Ei || Function("return this")();
    var Ai, Ci = Array.prototype, Si = Function.prototype, ki = Object.prototype, Fi = Ti["__core-js_shared__"], Oi = (Ai = /[^.]+$/.exec(Fi && Fi.keys && Fi.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Ai : "", Mi = Si.toString, Li = ki.hasOwnProperty, Bi = ki.toString, Pi = RegExp("^" + Mi.call(Li).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ji = Ci.splice, Ri = Xi(Ti, "Map"), Ii = Xi(Object, "create");
    function Ni(t) {
        var e = -1
          , n = t ? t.length : 0;
        for (this.clear(); ++e < n; ) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }
    function Hi(t) {
        var e = -1
          , n = t ? t.length : 0;
        for (this.clear(); ++e < n; ) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }
    function zi(t) {
        var e = -1
          , n = t ? t.length : 0;
        for (this.clear(); ++e < n; ) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }
    function Wi(t, e) {
        for (var n, i, r = t.length; r--; )
            if ((n = t[r][0]) === (i = e) || n != n && i != i)
                return r;
        return -1
    }
    function qi(t) {
        return !(!$i(t) || (e = t,
        Oi && Oi in e)) && ((i = $i(n = t) ? Bi.call(n) : "") == Di || i == bi || function(t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString)
                try {
                    e = !!(t + "")
                } catch (t) {}
            return e
        }(t) ? Pi : xi).test(function(t) {
            if (null != t) {
                try {
                    return Mi.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }(t));
        var e, n, i
    }
    function Vi(t, e) {
        var n, i, r = t.__data__;
        return ("string" == (i = typeof (n = e)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? r["string" == typeof e ? "string" : "hash"] : r.map
    }
    function Xi(t, e) {
        var n, i, r = (i = e,
        null == (n = t) ? void 0 : n[i]);
        return qi(r) ? r : void 0
    }
    function Yi(r, o) {
        if ("function" != typeof r || o && "function" != typeof o)
            throw new TypeError(yi);
        var s = function() {
            var t = arguments
              , e = o ? o.apply(this, t) : t[0]
              , n = s.cache;
            if (n.has(e))
                return n.get(e);
            var i = r.apply(this, t);
            return s.cache = n.set(e, i),
            i
        };
        return s.cache = new (Yi.Cache || zi),
        s
    }
    function $i(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }
    Ni.prototype.clear = function() {
        this.__data__ = Ii ? Ii(null) : {}
    }
    ,
    Ni.prototype.delete = function(t) {
        return this.has(t) && delete this.__data__[t]
    }
    ,
    Ni.prototype.get = function(t) {
        var e = this.__data__;
        if (Ii) {
            var n = e[t];
            return n === _i ? void 0 : n
        }
        return Li.call(e, t) ? e[t] : void 0
    }
    ,
    Ni.prototype.has = function(t) {
        var e = this.__data__;
        return Ii ? void 0 !== e[t] : Li.call(e, t)
    }
    ,
    Ni.prototype.set = function(t, e) {
        return this.__data__[t] = Ii && void 0 === e ? _i : e,
        this
    }
    ,
    Hi.prototype.clear = function() {
        this.__data__ = []
    }
    ,
    Hi.prototype.delete = function(t) {
        var e = this.__data__
          , n = Wi(e, t);
        return !(n < 0 || (n == e.length - 1 ? e.pop() : ji.call(e, n, 1),
        0))
    }
    ,
    Hi.prototype.get = function(t) {
        var e = this.__data__
          , n = Wi(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
    ,
    Hi.prototype.has = function(t) {
        return -1 < Wi(this.__data__, t)
    }
    ,
    Hi.prototype.set = function(t, e) {
        var n = this.__data__
          , i = Wi(n, t);
        return i < 0 ? n.push([t, e]) : n[i][1] = e,
        this
    }
    ,
    zi.prototype.clear = function() {
        this.__data__ = {
            hash: new Ni,
            map: new (Ri || Hi),
            string: new Ni
        }
    }
    ,
    zi.prototype.delete = function(t) {
        return Vi(this, t).delete(t)
    }
    ,
    zi.prototype.get = function(t) {
        return Vi(this, t).get(t)
    }
    ,
    zi.prototype.has = function(t) {
        return Vi(this, t).has(t)
    }
    ,
    zi.prototype.set = function(t, e) {
        return Vi(this, t).set(t, e),
        this
    }
    ,
    Yi.Cache = zi;
    var Ui, Gi, Qi = Yi, Ki = [], Zi = "ResizeObserver loop completed with undelivered notifications.";
    (Gi = Ui || (Ui = {})).BORDER_BOX = "border-box",
    Gi.CONTENT_BOX = "content-box",
    Gi.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
    var Ji, tr = function(t) {
        return Object.freeze(t)
    }, er = function(t, e) {
        this.inlineSize = t,
        this.blockSize = e,
        tr(this)
    }, nr = function() {
        function e(t, e, n, i) {
            return this.x = t,
            this.y = e,
            this.width = n,
            this.height = i,
            this.top = this.y,
            this.left = this.x,
            this.bottom = this.top + this.height,
            this.right = this.left + this.width,
            tr(this)
        }
        return e.prototype.toJSON = function() {
            return {
                x: this.x,
                y: this.y,
                top: this.top,
                right: this.right,
                bottom: this.bottom,
                left: this.left,
                width: this.width,
                height: this.height
            }
        }
        ,
        e.fromRect = function(t) {
            return new e(t.x,t.y,t.width,t.height)
        }
        ,
        e
    }(), ir = function(t) {
        return t instanceof SVGElement && "getBBox"in t
    }, rr = function(t) {
        if (ir(t)) {
            var e = t.getBBox()
              , n = e.width
              , i = e.height;
            return !n && !i
        }
        var r = t
          , o = r.offsetWidth
          , s = r.offsetHeight;
        return !(o || s || t.getClientRects().length)
    }, or = function(t) {
        var e, n;
        if (t instanceof Element)
            return !0;
        var i = null === (n = null === (e = t) || void 0 === e ? void 0 : e.ownerDocument) || void 0 === n ? void 0 : n.defaultView;
        return !!(i && t instanceof i.Element)
    }, sr = "undefined" != typeof window ? window : {}, ar = new WeakMap, ur = /auto|scroll/, lr = /^tb|vertical/, cr = /msie|trident/i.test(sr.navigator && sr.navigator.userAgent), fr = function(t) {
        return parseFloat(t || "0")
    }, hr = function(t, e, n) {
        return void 0 === t && (t = 0),
        void 0 === e && (e = 0),
        void 0 === n && (n = !1),
        new er((n ? e : t) || 0,(n ? t : e) || 0)
    }, dr = tr({
        devicePixelContentBoxSize: hr(),
        borderBoxSize: hr(),
        contentBoxSize: hr(),
        contentRect: new nr(0,0,0,0)
    }), pr = function(t, e) {
        if (void 0 === e && (e = !1),
        ar.has(t) && !e)
            return ar.get(t);
        if (rr(t))
            return ar.set(t, dr),
            dr;
        var n = getComputedStyle(t)
          , i = ir(t) && t.ownerSVGElement && t.getBBox()
          , r = !cr && "border-box" === n.boxSizing
          , o = lr.test(n.writingMode || "")
          , s = !i && ur.test(n.overflowY || "")
          , a = !i && ur.test(n.overflowX || "")
          , u = i ? 0 : fr(n.paddingTop)
          , l = i ? 0 : fr(n.paddingRight)
          , c = i ? 0 : fr(n.paddingBottom)
          , f = i ? 0 : fr(n.paddingLeft)
          , h = i ? 0 : fr(n.borderTopWidth)
          , d = i ? 0 : fr(n.borderRightWidth)
          , p = i ? 0 : fr(n.borderBottomWidth)
          , v = f + l
          , m = u + c
          , g = (i ? 0 : fr(n.borderLeftWidth)) + d
          , y = h + p
          , _ = a ? t.offsetHeight - y - t.clientHeight : 0
          , D = s ? t.offsetWidth - g - t.clientWidth : 0
          , b = r ? v + g : 0
          , x = r ? m + y : 0
          , w = i ? i.width : fr(n.width) - b - D
          , E = i ? i.height : fr(n.height) - x - _
          , T = w + v + D + g
          , A = E + m + _ + y
          , C = tr({
            devicePixelContentBoxSize: hr(Math.round(w * devicePixelRatio), Math.round(E * devicePixelRatio), o),
            borderBoxSize: hr(T, A, o),
            contentBoxSize: hr(w, E, o),
            contentRect: new nr(f,u,w,E)
        });
        return ar.set(t, C),
        C
    }, vr = function(t, e, n) {
        var i = pr(t, n)
          , r = i.borderBoxSize
          , o = i.contentBoxSize
          , s = i.devicePixelContentBoxSize;
        switch (e) {
        case Ui.DEVICE_PIXEL_CONTENT_BOX:
            return s;
        case Ui.BORDER_BOX:
            return r;
        default:
            return o
        }
    }, mr = function(t) {
        var e = pr(t);
        this.target = t,
        this.contentRect = e.contentRect,
        this.borderBoxSize = tr([e.borderBoxSize]),
        this.contentBoxSize = tr([e.contentBoxSize]),
        this.devicePixelContentBoxSize = tr([e.devicePixelContentBoxSize])
    }, gr = function(t) {
        if (rr(t))
            return 1 / 0;
        for (var e = 0, n = t.parentNode; n; )
            e += 1,
            n = n.parentNode;
        return e
    }, yr = function() {
        var r = 1 / 0
          , e = [];
        Ki.forEach(function(t) {
            if (0 !== t.activeTargets.length) {
                var i = [];
                t.activeTargets.forEach(function(t) {
                    var e = new mr(t.target)
                      , n = gr(t.target);
                    i.push(e),
                    t.lastReportedSize = vr(t.target, t.observedBox),
                    n < r && (r = n)
                }),
                e.push(function() {
                    t.callback.call(t.observer, i, t.observer)
                }),
                t.activeTargets.splice(0, t.activeTargets.length)
            }
        });
        for (var t = 0, n = e; t < n.length; t++) {
            (0,
            n[t])()
        }
        return r
    }, _r = function(n) {
        Ki.forEach(function(e) {
            e.activeTargets.splice(0, e.activeTargets.length),
            e.skippedTargets.splice(0, e.skippedTargets.length),
            e.observationTargets.forEach(function(t) {
                t.isActive() && (gr(t.target) > n ? e.activeTargets.push(t) : e.skippedTargets.push(t))
            })
        })
    }, Dr = function() {
        var t, e = 0;
        for (_r(e); Ki.some(function(t) {
            return 0 < t.activeTargets.length
        }); )
            e = yr(),
            _r(e);
        return Ki.some(function(t) {
            return 0 < t.skippedTargets.length
        }) && ("function" == typeof ErrorEvent ? t = new ErrorEvent("error",{
            message: Zi
        }) : ((t = document.createEvent("Event")).initEvent("error", !1, !1),
        t.message = Zi),
        window.dispatchEvent(t)),
        0 < e
    }, br = [], xr = function(t) {
        if (!Ji) {
            var e = 0
              , n = document.createTextNode("");
            new MutationObserver(function() {
                return br.splice(0).forEach(function(t) {
                    return t()
                })
            }
            ).observe(n, {
                characterData: !0
            }),
            Ji = function() {
                n.textContent = "" + (e ? e-- : e++)
            }
        }
        br.push(t),
        Ji()
    }, wr = 0, Er = {
        attributes: !0,
        characterData: !0,
        childList: !0,
        subtree: !0
    }, Tr = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], Ar = function(t) {
        return void 0 === t && (t = 0),
        Date.now() + t
    }, Cr = !1, Sr = new (function() {
        function t() {
            var t = this;
            this.stopped = !0,
            this.listener = function() {
                return t.schedule()
            }
        }
        return t.prototype.run = function(e) {
            var n = this;
            if (void 0 === e && (e = 250),
            !Cr) {
                Cr = !0;
                var t, i = Ar(e);
                t = function() {
                    var t = !1;
                    try {
                        t = Dr()
                    } finally {
                        if (Cr = !1,
                        e = i - Ar(),
                        !wr)
                            return;
                        t ? n.run(1e3) : 0 < e ? n.run(e) : n.start()
                    }
                }
                ,
                xr(function() {
                    requestAnimationFrame(t)
                })
            }
        }
        ,
        t.prototype.schedule = function() {
            this.stop(),
            this.run()
        }
        ,
        t.prototype.observe = function() {
            var t = this
              , e = function() {
                return t.observer && t.observer.observe(document.body, Er)
            };
            document.body ? e() : sr.addEventListener("DOMContentLoaded", e)
        }
        ,
        t.prototype.start = function() {
            var e = this;
            this.stopped && (this.stopped = !1,
            this.observer = new MutationObserver(this.listener),
            this.observe(),
            Tr.forEach(function(t) {
                return sr.addEventListener(t, e.listener, !0)
            }))
        }
        ,
        t.prototype.stop = function() {
            var e = this;
            this.stopped || (this.observer && this.observer.disconnect(),
            Tr.forEach(function(t) {
                return sr.removeEventListener(t, e.listener, !0)
            }),
            this.stopped = !0)
        }
        ,
        t
    }()), kr = function(t) {
        !wr && 0 < t && Sr.start(),
        !(wr += t) && Sr.stop()
    }, Fr = function() {
        function t(t, e) {
            this.target = t,
            this.observedBox = e || Ui.CONTENT_BOX,
            this.lastReportedSize = {
                inlineSize: 0,
                blockSize: 0
            }
        }
        return t.prototype.isActive = function() {
            var t, e = vr(this.target, this.observedBox, !0);
            return t = this.target,
            ir(t) || function(t) {
                switch (t.tagName) {
                case "INPUT":
                    if ("image" !== t.type)
                        break;
                case "VIDEO":
                case "AUDIO":
                case "EMBED":
                case "OBJECT":
                case "CANVAS":
                case "IFRAME":
                case "IMG":
                    return !0
                }
                return !1
            }(t) || "inline" !== getComputedStyle(t).display || (this.lastReportedSize = e),
            this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize
        }
        ,
        t
    }(), Or = function(t, e) {
        this.activeTargets = [],
        this.skippedTargets = [],
        this.observationTargets = [],
        this.observer = t,
        this.callback = e
    }, Mr = new WeakMap, Lr = function(t, e) {
        for (var n = 0; n < t.length; n += 1)
            if (t[n].target === e)
                return n;
        return -1
    }, Br = function() {
        function t() {}
        return t.connect = function(t, e) {
            var n = new Or(t,e);
            Mr.set(t, n)
        }
        ,
        t.observe = function(t, e, n) {
            var i = Mr.get(t)
              , r = 0 === i.observationTargets.length;
            Lr(i.observationTargets, e) < 0 && (r && Ki.push(i),
            i.observationTargets.push(new Fr(e,n && n.box)),
            kr(1),
            Sr.schedule())
        }
        ,
        t.unobserve = function(t, e) {
            var n = Mr.get(t)
              , i = Lr(n.observationTargets, e)
              , r = 1 === n.observationTargets.length;
            0 <= i && (r && Ki.splice(Ki.indexOf(n), 1),
            n.observationTargets.splice(i, 1),
            kr(-1))
        }
        ,
        t.disconnect = function(e) {
            var n = this
              , t = Mr.get(e);
            t.observationTargets.slice().forEach(function(t) {
                return n.unobserve(e, t.target)
            }),
            t.activeTargets.splice(0, t.activeTargets.length)
        }
        ,
        t
    }(), Pr = function() {
        function t(t) {
            if (0 === arguments.length)
                throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
            if ("function" != typeof t)
                throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
            Br.connect(this, t)
        }
        return t.prototype.observe = function(t, e) {
            if (0 === arguments.length)
                throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
            if (!or(t))
                throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
            Br.observe(this, t, e)
        }
        ,
        t.prototype.unobserve = function(t) {
            if (0 === arguments.length)
                throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
            if (!or(t))
                throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
            Br.unobserve(this, t)
        }
        ,
        t.prototype.disconnect = function() {
            Br.disconnect(this)
        }
        ,
        t.toString = function() {
            return "function ResizeObserver () { [polyfill code] }"
        }
        ,
        t
    }(), jr = function(l) {
        return function(t, e, n, i) {
            Ct(e);
            var r = kt(t)
              , o = b(r)
              , s = st(r.length)
              , a = l ? s - 1 : 0
              , u = l ? -1 : 1;
            if (n < 2)
                for (; ; ) {
                    if (a in o) {
                        i = o[a],
                        a += u;
                        break
                    }
                    if (a += u,
                    l ? a < 0 : s <= a)
                        throw TypeError("Reduce of empty array with no initial value")
                }
            for (; l ? 0 <= a : a < s; a += u)
                a in o && (i = e(i, o[a], a, r));
            return i
        }
    }, Rr = {
        left: jr(!1),
        right: jr(!0)
    }.left;
    At({
        target: "Array",
        proto: !0,
        forced: Ht("reduce")
    }, {
        reduce: function(t) {
            return Rr(this, t, arguments.length, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Ir = M.f
      , Nr = Function.prototype
      , Hr = Nr.toString
      , zr = /^\s*function ([^ (]*)/;
    !h || "name"in Nr || Ir(Nr, "name", {
        configurable: !0,
        get: function() {
            try {
                return Hr.call(this).match(zr)[1]
            } catch (t) {
                return ""
            }
        }
    });
    var Wr, qr, Vr = RegExp.prototype.exec, Xr = String.prototype.replace, Yr = Vr, $r = (Wr = /a/,
    qr = /b*/g,
    Vr.call(Wr, "a"),
    Vr.call(qr, "a"),
    0 !== Wr.lastIndex || 0 !== qr.lastIndex), Ur = void 0 !== /()??/.exec("")[1];
    ($r || Ur) && (Yr = function(t) {
        var e, n, i, r;
        return Ur && (n = new RegExp("^" + this.source + "$(?!\\s)",function() {
            var t = F(this)
              , e = "";
            return t.global && (e += "g"),
            t.ignoreCase && (e += "i"),
            t.multiline && (e += "m"),
            t.dotAll && (e += "s"),
            t.unicode && (e += "u"),
            t.sticky && (e += "y"),
            e
        }
        .call(this))),
        $r && (e = this.lastIndex),
        i = Vr.call(this, t),
        $r && i && (this.lastIndex = this.global ? i.index + i[0].length : e),
        Ur && i && 1 < i.length && Xr.call(i[0], n, function() {
            for (r = 1; r < arguments.length - 2; r++)
                void 0 === arguments[r] && (i[r] = void 0)
        }),
        i
    }
    );
    var Gr = Yr;
    At({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Gr
    }, {
        exec: Gr
    });
    var Qr = Bt("species")
      , Kr = !g(function() {
        var t = /./;
        return t.exec = function() {
            var t = [];
            return t.groups = {
                a: "7"
            },
            t
        }
        ,
        "7" !== "".replace(t, "$<a>")
    })
      , Zr = !g(function() {
        var t = /(?:)/
          , e = t.exec;
        t.exec = function() {
            return e.apply(this, arguments)
        }
        ;
        var n = "ab".split(t);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
    })
      , Jr = function(n, t, e, i) {
        var r = Bt(n)
          , o = !g(function() {
            var t = {};
            return t[r] = function() {
                return 7
            }
            ,
            7 != ""[n](t)
        })
          , s = o && !g(function() {
            var t = !1
              , e = /a/;
            return e.exec = function() {
                return t = !0,
                null
            }
            ,
            "split" === n && (e.constructor = {},
            e.constructor[Qr] = function() {
                return e
            }
            ),
            e[r](""),
            !t
        });
        if (!o || !s || "replace" === n && !Kr || "split" === n && !Zr) {
            var a = /./[r]
              , u = e(r, ""[n], function(t, e, n, i, r) {
                return e.exec === Gr ? o && !r ? {
                    done: !0,
                    value: a.call(e, n, i)
                } : {
                    done: !0,
                    value: t.call(n, e, i)
                } : {
                    done: !1
                }
            })
              , l = u[0]
              , c = u[1];
            Z(String.prototype, n, l),
            Z(RegExp.prototype, r, 2 == t ? function(t, e) {
                return c.call(t, this, e)
            }
            : function(t) {
                return c.call(t, this)
            }
            ),
            i && L(RegExp.prototype[r], "sham", !0)
        }
    }
      , to = Je.charAt
      , eo = function(t, e, n) {
        return e + (n ? to(t, e).length : 1)
    }
      , no = function(t, e) {
        var n = t.exec;
        if ("function" == typeof n) {
            var i = n.call(t, e);
            if ("object" != typeof i)
                throw TypeError("RegExp exec method returned something other than an Object or null");
            return i
        }
        if ("RegExp" !== c(t))
            throw TypeError("RegExp#exec called on incompatible receiver");
        return Gr.call(t, e)
    };
    Jr("match", 1, function(i, l, c) {
        return [function(t) {
            var e = p(this)
              , n = null == t ? void 0 : t[i];
            return void 0 !== n ? n.call(t, e) : new RegExp(t)[i](String(e))
        }
        , function(t) {
            var e = c(l, t, this);
            if (e.done)
                return e.value;
            var n = F(t)
              , i = String(this);
            if (!n.global)
                return no(n, i);
            for (var r, o = n.unicode, s = [], a = n.lastIndex = 0; null !== (r = no(n, i)); ) {
                var u = String(r[0]);
                "" === (s[a] = u) && (n.lastIndex = eo(i, st(n.lastIndex), o)),
                a++
            }
            return 0 === a ? null : s
        }
        ]
    });
    var io = Math.max
      , ro = Math.min
      , oo = Math.floor
      , so = /\$([$&'`]|\d\d?|<[^>]*>)/g
      , ao = /\$([$&'`]|\d\d?)/g;
    Jr("replace", 2, function(r, b, x) {
        return [function(t, e) {
            var n = p(this)
              , i = null == t ? void 0 : t[r];
            return void 0 !== i ? i.call(t, n, e) : b.call(String(n), t, e)
        }
        , function(t, e) {
            var n = x(b, t, this, e);
            if (n.done)
                return n.value;
            var i = F(t)
              , r = String(this)
              , o = "function" == typeof e;
            o || (e = String(e));
            var s = i.global;
            if (s) {
                var a = i.unicode;
                i.lastIndex = 0
            }
            for (var u = []; ; ) {
                var l = no(i, r);
                if (null === l)
                    break;
                if (u.push(l),
                !s)
                    break;
                "" === String(l[0]) && (i.lastIndex = eo(r, st(i.lastIndex), a))
            }
            for (var c, f = "", h = 0, d = 0; d < u.length; d++) {
                l = u[d];
                for (var p = String(l[0]), v = io(ro(rt(l.index), r.length), 0), m = [], g = 1; g < l.length; g++)
                    m.push(void 0 === (c = l[g]) ? c : String(c));
                var y = l.groups;
                if (o) {
                    var _ = [p].concat(m, v, r);
                    void 0 !== y && _.push(y);
                    var D = String(e.apply(void 0, _))
                } else
                    D = w(p, r, v, m, y, e);
                h <= v && (f += r.slice(h, v) + D,
                h = v + p.length)
            }
            return f + r.slice(h)
        }
        ];
        function w(o, s, a, u, l, t) {
            var c = a + o.length
              , f = u.length
              , e = ao;
            return void 0 !== l && (l = kt(l),
            e = so),
            b.call(t, e, function(t, e) {
                var n;
                switch (e.charAt(0)) {
                case "$":
                    return "$";
                case "&":
                    return o;
                case "`":
                    return s.slice(0, a);
                case "'":
                    return s.slice(c);
                case "<":
                    n = l[e.slice(1, -1)];
                    break;
                default:
                    var i = +e;
                    if (0 === i)
                        return t;
                    if (f < i) {
                        var r = oo(i / 10);
                        return 0 === r ? t : r <= f ? void 0 === u[r - 1] ? e.charAt(1) : u[r - 1] + e.charAt(1) : t
                    }
                    n = u[i - 1]
                }
                return void 0 === n ? "" : n
            })
        }
    });
    var uo = function(t) {
        return Array.prototype.reduce.call(t, function(t, e) {
            var n = e.name.match(/data-simplebar-(.+)/);
            if (n) {
                var i = n[1].replace(/\W+(.)/g, function(t, e) {
                    return e.toUpperCase()
                });
                switch (e.value) {
                case "true":
                    t[i] = !0;
                    break;
                case "false":
                    t[i] = !1;
                    break;
                case void 0:
                    t[i] = !0;
                    break;
                default:
                    t[i] = e.value
                }
            }
            return t
        }, {})
    };
    function lo(t) {
        return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window
    }
    function co(t) {
        return t && t.ownerDocument ? t.ownerDocument : document
    }
    var fo = null
      , ho = null;
    function po(t) {
        if (null === fo) {
            var e = co(t);
            if (void 0 === e)
                return fo = 0;
            var n = e.body
              , i = e.createElement("div");
            i.classList.add("simplebar-hide-scrollbar"),
            n.appendChild(i);
            var r = i.getBoundingClientRect().right;
            n.removeChild(i),
            fo = r
        }
        return fo
    }
    Ut && window.addEventListener("resize", function() {
        ho !== window.devicePixelRatio && (ho = window.devicePixelRatio,
        fo = null)
    });
    var vo = function() {
        function u(t, e) {
            var a = this;
            this.onScroll = function() {
                var t = lo(a.el);
                a.scrollXTicking || (t.requestAnimationFrame(a.scrollX),
                a.scrollXTicking = !0),
                a.scrollYTicking || (t.requestAnimationFrame(a.scrollY),
                a.scrollYTicking = !0)
            }
            ,
            this.scrollX = function() {
                a.axis.x.isOverflowing && (a.showScrollbar("x"),
                a.positionScrollbar("x")),
                a.scrollXTicking = !1
            }
            ,
            this.scrollY = function() {
                a.axis.y.isOverflowing && (a.showScrollbar("y"),
                a.positionScrollbar("y")),
                a.scrollYTicking = !1
            }
            ,
            this.onMouseEnter = function() {
                a.showScrollbar("x"),
                a.showScrollbar("y")
            }
            ,
            this.onMouseMove = function(t) {
                a.mouseX = t.clientX,
                a.mouseY = t.clientY,
                (a.axis.x.isOverflowing || a.axis.x.forceVisible) && a.onMouseMoveForAxis("x"),
                (a.axis.y.isOverflowing || a.axis.y.forceVisible) && a.onMouseMoveForAxis("y")
            }
            ,
            this.onMouseLeave = function() {
                a.onMouseMove.cancel(),
                (a.axis.x.isOverflowing || a.axis.x.forceVisible) && a.onMouseLeaveForAxis("x"),
                (a.axis.y.isOverflowing || a.axis.y.forceVisible) && a.onMouseLeaveForAxis("y"),
                a.mouseX = -1,
                a.mouseY = -1
            }
            ,
            this.onWindowResize = function() {
                a.scrollbarWidth = a.getScrollbarWidth(),
                a.hideNativeScrollbar()
            }
            ,
            this.hideScrollbars = function() {
                a.axis.x.track.rect = a.axis.x.track.el.getBoundingClientRect(),
                a.axis.y.track.rect = a.axis.y.track.el.getBoundingClientRect(),
                a.isWithinBounds(a.axis.y.track.rect) || (a.axis.y.scrollbar.el.classList.remove(a.classNames.visible),
                a.axis.y.isVisible = !1),
                a.isWithinBounds(a.axis.x.track.rect) || (a.axis.x.scrollbar.el.classList.remove(a.classNames.visible),
                a.axis.x.isVisible = !1)
            }
            ,
            this.onPointerEvent = function(t) {
                var e, n;
                a.axis.x.track.rect = a.axis.x.track.el.getBoundingClientRect(),
                a.axis.y.track.rect = a.axis.y.track.el.getBoundingClientRect(),
                (a.axis.x.isOverflowing || a.axis.x.forceVisible) && (e = a.isWithinBounds(a.axis.x.track.rect)),
                (a.axis.y.isOverflowing || a.axis.y.forceVisible) && (n = a.isWithinBounds(a.axis.y.track.rect)),
                (e || n) && (t.preventDefault(),
                t.stopPropagation(),
                "mousedown" === t.type && (e && (a.axis.x.scrollbar.rect = a.axis.x.scrollbar.el.getBoundingClientRect(),
                a.isWithinBounds(a.axis.x.scrollbar.rect) ? a.onDragStart(t, "x") : a.onTrackClick(t, "x")),
                n && (a.axis.y.scrollbar.rect = a.axis.y.scrollbar.el.getBoundingClientRect(),
                a.isWithinBounds(a.axis.y.scrollbar.rect) ? a.onDragStart(t, "y") : a.onTrackClick(t, "y"))))
            }
            ,
            this.drag = function(t) {
                var e = a.axis[a.draggedAxis].track
                  , n = e.rect[a.axis[a.draggedAxis].sizeAttr]
                  , i = a.axis[a.draggedAxis].scrollbar
                  , r = a.contentWrapperEl[a.axis[a.draggedAxis].scrollSizeAttr]
                  , o = parseInt(a.elStyles[a.axis[a.draggedAxis].sizeAttr], 10);
                t.preventDefault(),
                t.stopPropagation();
                var s = (("y" === a.draggedAxis ? t.pageY : t.pageX) - e.rect[a.axis[a.draggedAxis].offsetAttr] - a.axis[a.draggedAxis].dragOffset) / (n - i.size) * (r - o);
                "x" === a.draggedAxis && (s = a.isRtl && u.getRtlHelpers().isRtlScrollbarInverted ? s - (n + i.size) : s,
                s = a.isRtl && u.getRtlHelpers().isRtlScrollingInverted ? -s : s),
                a.contentWrapperEl[a.axis[a.draggedAxis].scrollOffsetAttr] = s
            }
            ,
            this.onEndDrag = function(t) {
                var e = co(a.el)
                  , n = lo(a.el);
                t.preventDefault(),
                t.stopPropagation(),
                a.el.classList.remove(a.classNames.dragging),
                e.removeEventListener("mousemove", a.drag, !0),
                e.removeEventListener("mouseup", a.onEndDrag, !0),
                a.removePreventClickId = n.setTimeout(function() {
                    e.removeEventListener("click", a.preventClick, !0),
                    e.removeEventListener("dblclick", a.preventClick, !0),
                    a.removePreventClickId = null
                })
            }
            ,
            this.preventClick = function(t) {
                t.preventDefault(),
                t.stopPropagation()
            }
            ,
            this.el = t,
            this.minScrollbarWidth = 20,
            this.options = Object.assign({}, u.defaultOptions, {}, e),
            this.classNames = Object.assign({}, u.defaultOptions.classNames, {}, this.options.classNames),
            this.axis = {
                x: {
                    scrollOffsetAttr: "scrollLeft",
                    sizeAttr: "width",
                    scrollSizeAttr: "scrollWidth",
                    offsetSizeAttr: "offsetWidth",
                    offsetAttr: "left",
                    overflowAttr: "overflowX",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                },
                y: {
                    scrollOffsetAttr: "scrollTop",
                    sizeAttr: "height",
                    scrollSizeAttr: "scrollHeight",
                    offsetSizeAttr: "offsetHeight",
                    offsetAttr: "top",
                    overflowAttr: "overflowY",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                }
            },
            this.removePreventClickId = null,
            u.instances.has(this.el) || (this.recalculate = ti(this.recalculate.bind(this), 64),
            this.onMouseMove = ti(this.onMouseMove.bind(this), 64),
            this.hideScrollbars = gi(this.hideScrollbars.bind(this), this.options.timeout),
            this.onWindowResize = gi(this.onWindowResize.bind(this), 64, {
                leading: !0
            }),
            u.getRtlHelpers = Qi(u.getRtlHelpers),
            this.init())
        }
        u.getRtlHelpers = function() {
            var t = document.createElement("div");
            t.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
            var e = t.firstElementChild;
            document.body.appendChild(e);
            var n = e.firstElementChild;
            e.scrollLeft = 0;
            var i = u.getOffset(e)
              , r = u.getOffset(n);
            e.scrollLeft = 999;
            var o = u.getOffset(n);
            return {
                isRtlScrollingInverted: i.left !== r.left && r.left - o.left != 0,
                isRtlScrollbarInverted: i.left !== r.left
            }
        }
        ,
        u.getOffset = function(t) {
            var e = t.getBoundingClientRect()
              , n = co(t)
              , i = lo(t);
            return {
                top: e.top + (i.pageYOffset || n.documentElement.scrollTop),
                left: e.left + (i.pageXOffset || n.documentElement.scrollLeft)
            }
        }
        ;
        var t = u.prototype;
        return t.init = function() {
            u.instances.set(this.el, this),
            Ut && (this.initDOM(),
            this.setAccessibilityAttributes(),
            this.scrollbarWidth = this.getScrollbarWidth(),
            this.recalculate(),
            this.initListeners())
        }
        ,
        t.initDOM = function() {
            var e = this;
            if (Array.prototype.filter.call(this.el.children, function(t) {
                return t.classList.contains(e.classNames.wrapper)
            }).length)
                this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper),
                this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper),
                this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl),
                this.offsetEl = this.el.querySelector("." + this.classNames.offset),
                this.maskEl = this.el.querySelector("." + this.classNames.mask),
                this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder),
                this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl),
                this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl),
                this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal),
                this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
            else {
                for (this.wrapperEl = document.createElement("div"),
                this.contentWrapperEl = document.createElement("div"),
                this.offsetEl = document.createElement("div"),
                this.maskEl = document.createElement("div"),
                this.contentEl = document.createElement("div"),
                this.placeholderEl = document.createElement("div"),
                this.heightAutoObserverWrapperEl = document.createElement("div"),
                this.heightAutoObserverEl = document.createElement("div"),
                this.wrapperEl.classList.add(this.classNames.wrapper),
                this.contentWrapperEl.classList.add(this.classNames.contentWrapper),
                this.offsetEl.classList.add(this.classNames.offset),
                this.maskEl.classList.add(this.classNames.mask),
                this.contentEl.classList.add(this.classNames.contentEl),
                this.placeholderEl.classList.add(this.classNames.placeholder),
                this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),
                this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild; )
                    this.contentEl.appendChild(this.el.firstChild);
                this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl)
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
                var t = document.createElement("div")
                  , n = document.createElement("div");
                t.classList.add(this.classNames.track),
                n.classList.add(this.classNames.scrollbar),
                t.appendChild(n),
                this.axis.x.track.el = t.cloneNode(!0),
                this.axis.x.track.el.classList.add(this.classNames.horizontal),
                this.axis.y.track.el = t.cloneNode(!0),
                this.axis.y.track.el.classList.add(this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el)
            }
            this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar),
            this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar),
            this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible),
            this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),
            this.el.setAttribute("data-simplebar", "init")
        }
        ,
        t.setAccessibilityAttributes = function() {
            var t = this.options.ariaLabel || "scrollable content";
            this.contentWrapperEl.setAttribute("tabindex", "0"),
            this.contentWrapperEl.setAttribute("role", "region"),
            this.contentWrapperEl.setAttribute("aria-label", t)
        }
        ,
        t.initListeners = function() {
            var e = this
              , t = lo(this.el);
            this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter),
            ["mousedown", "click", "dblclick"].forEach(function(t) {
                e.el.addEventListener(t, e.onPointerEvent, !0)
            }),
            ["touchstart", "touchend", "touchmove"].forEach(function(t) {
                e.el.addEventListener(t, e.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            }),
            this.el.addEventListener("mousemove", this.onMouseMove),
            this.el.addEventListener("mouseleave", this.onMouseLeave),
            this.contentWrapperEl.addEventListener("scroll", this.onScroll),
            t.addEventListener("resize", this.onWindowResize);
            var n = !1
              , i = t.ResizeObserver || Pr;
            this.resizeObserver = new i(function() {
                n && e.recalculate()
            }
            ),
            this.resizeObserver.observe(this.el),
            this.resizeObserver.observe(this.contentEl),
            t.requestAnimationFrame(function() {
                n = !0
            }),
            this.mutationObserver = new t.MutationObserver(this.recalculate),
            this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0
            })
        }
        ,
        t.recalculate = function() {
            var t = lo(this.el);
            this.elStyles = t.getComputedStyle(this.el),
            this.isRtl = "rtl" === this.elStyles.direction;
            var e = this.heightAutoObserverEl.offsetHeight <= 1
              , n = this.heightAutoObserverEl.offsetWidth <= 1
              , i = this.contentEl.offsetWidth
              , r = this.contentWrapperEl.offsetWidth
              , o = this.elStyles.overflowX
              , s = this.elStyles.overflowY;
            this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft,
            this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
            var a = this.contentEl.scrollHeight
              , u = this.contentEl.scrollWidth;
            this.contentWrapperEl.style.height = e ? "auto" : "100%",
            this.placeholderEl.style.width = n ? i + "px" : "auto",
            this.placeholderEl.style.height = a + "px";
            var l = this.contentWrapperEl.offsetHeight;
            this.axis.x.isOverflowing = i < u,
            this.axis.y.isOverflowing = l < a,
            this.axis.x.isOverflowing = "hidden" !== o && this.axis.x.isOverflowing,
            this.axis.y.isOverflowing = "hidden" !== s && this.axis.y.isOverflowing,
            this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible,
            this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible,
            this.hideNativeScrollbar();
            var c = this.axis.x.isOverflowing ? this.scrollbarWidth : 0
              , f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            this.axis.x.isOverflowing = this.axis.x.isOverflowing && r - f < u,
            this.axis.y.isOverflowing = this.axis.y.isOverflowing && l - c < a,
            this.axis.x.scrollbar.size = this.getScrollbarSize("x"),
            this.axis.y.scrollbar.size = this.getScrollbarSize("y"),
            this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px",
            this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px",
            this.positionScrollbar("x"),
            this.positionScrollbar("y"),
            this.toggleTrackVisibility("x"),
            this.toggleTrackVisibility("y")
        }
        ,
        t.getScrollbarSize = function(t) {
            if (void 0 === t && (t = "y"),
            !this.axis[t].isOverflowing)
                return 0;
            var e, n = this.contentEl[this.axis[t].scrollSizeAttr], i = this.axis[t].track.el[this.axis[t].offsetSizeAttr], r = i / n;
            return e = Math.max(~~(r * i), this.options.scrollbarMinSize),
            this.options.scrollbarMaxSize && (e = Math.min(e, this.options.scrollbarMaxSize)),
            e
        }
        ,
        t.positionScrollbar = function(t) {
            if (void 0 === t && (t = "y"),
            this.axis[t].isOverflowing) {
                var e = this.contentWrapperEl[this.axis[t].scrollSizeAttr]
                  , n = this.axis[t].track.el[this.axis[t].offsetSizeAttr]
                  , i = parseInt(this.elStyles[this.axis[t].sizeAttr], 10)
                  , r = this.axis[t].scrollbar
                  , o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr]
                  , s = (o = "x" === t && this.isRtl && u.getRtlHelpers().isRtlScrollingInverted ? -o : o) / (e - i)
                  , a = ~~((n - r.size) * s);
                a = "x" === t && this.isRtl && u.getRtlHelpers().isRtlScrollbarInverted ? a + (n - r.size) : a,
                r.el.style.transform = "x" === t ? "translate3d(" + a + "px, 0, 0)" : "translate3d(0, " + a + "px, 0)"
            }
        }
        ,
        t.toggleTrackVisibility = function(t) {
            void 0 === t && (t = "y");
            var e = this.axis[t].track.el
              , n = this.axis[t].scrollbar.el;
            this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible",
            this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden",
            this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden"),
            this.axis[t].isOverflowing ? n.style.display = "block" : n.style.display = "none"
        }
        ,
        t.hideNativeScrollbar = function() {
            this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0,
            this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0
        }
        ,
        t.onMouseMoveForAxis = function(t) {
            void 0 === t && (t = "y"),
            this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(),
            this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(),
            this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover),
            this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t),
            this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover)
        }
        ,
        t.onMouseLeaveForAxis = function(t) {
            void 0 === t && (t = "y"),
            this.axis[t].track.el.classList.remove(this.classNames.hover),
            this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)
        }
        ,
        t.showScrollbar = function(t) {
            void 0 === t && (t = "y");
            var e = this.axis[t].scrollbar.el;
            this.axis[t].isVisible || (e.classList.add(this.classNames.visible),
            this.axis[t].isVisible = !0),
            this.options.autoHide && this.hideScrollbars()
        }
        ,
        t.onDragStart = function(t, e) {
            void 0 === e && (e = "y");
            var n = co(this.el)
              , i = lo(this.el)
              , r = this.axis[e].scrollbar
              , o = "y" === e ? t.pageY : t.pageX;
            this.axis[e].dragOffset = o - r.rect[this.axis[e].offsetAttr],
            this.draggedAxis = e,
            this.el.classList.add(this.classNames.dragging),
            n.addEventListener("mousemove", this.drag, !0),
            n.addEventListener("mouseup", this.onEndDrag, !0),
            null === this.removePreventClickId ? (n.addEventListener("click", this.preventClick, !0),
            n.addEventListener("dblclick", this.preventClick, !0)) : (i.clearTimeout(this.removePreventClickId),
            this.removePreventClickId = null)
        }
        ,
        t.onTrackClick = function(t, i) {
            var r = this;
            if (void 0 === i && (i = "y"),
            this.options.clickOnTrack) {
                var o = lo(this.el);
                this.axis[i].scrollbar.rect = this.axis[i].scrollbar.el.getBoundingClientRect();
                var e = this.axis[i].scrollbar.rect[this.axis[i].offsetAttr]
                  , n = parseInt(this.elStyles[this.axis[i].sizeAttr], 10)
                  , s = this.contentWrapperEl[this.axis[i].scrollOffsetAttr]
                  , a = ("y" === i ? this.mouseY - e : this.mouseX - e) < 0 ? -1 : 1
                  , u = -1 === a ? s - n : s + n;
                !function t() {
                    var e, n;
                    -1 === a ? u < s && (s -= r.options.clickOnTrackSpeed,
                    r.contentWrapperEl.scrollTo(((e = {})[r.axis[i].offsetAttr] = s,
                    e)),
                    o.requestAnimationFrame(t)) : s < u && (s += r.options.clickOnTrackSpeed,
                    r.contentWrapperEl.scrollTo(((n = {})[r.axis[i].offsetAttr] = s,
                    n)),
                    o.requestAnimationFrame(t))
                }()
            }
        }
        ,
        t.getContentElement = function() {
            return this.contentEl
        }
        ,
        t.getScrollElement = function() {
            return this.contentWrapperEl
        }
        ,
        t.getScrollbarWidth = function() {
            try {
                return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth"in document.documentElement.style || "-ms-overflow-style"in document.documentElement.style ? 0 : po(this.el)
            } catch (t) {
                return po(this.el)
            }
        }
        ,
        t.removeListeners = function() {
            var e = this
              , t = lo(this.el);
            this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter),
            ["mousedown", "click", "dblclick"].forEach(function(t) {
                e.el.removeEventListener(t, e.onPointerEvent, !0)
            }),
            ["touchstart", "touchend", "touchmove"].forEach(function(t) {
                e.el.removeEventListener(t, e.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            }),
            this.el.removeEventListener("mousemove", this.onMouseMove),
            this.el.removeEventListener("mouseleave", this.onMouseLeave),
            this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll),
            t.removeEventListener("resize", this.onWindowResize),
            this.mutationObserver && this.mutationObserver.disconnect(),
            this.resizeObserver && this.resizeObserver.disconnect(),
            this.recalculate.cancel(),
            this.onMouseMove.cancel(),
            this.hideScrollbars.cancel(),
            this.onWindowResize.cancel()
        }
        ,
        t.unMount = function() {
            this.removeListeners(),
            u.instances.delete(this.el)
        }
        ,
        t.isWithinBounds = function(t) {
            return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height
        }
        ,
        t.findChild = function(t, e) {
            var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
            return Array.prototype.filter.call(t.children, function(t) {
                return n.call(t, e)
            })[0]
        }
        ,
        u
    }();
    return vo.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        clickOnTrackSpeed: 40,
        classNames: {
            contentEl: "simplebar-content",
            contentWrapper: "simplebar-content-wrapper",
            offset: "simplebar-offset",
            mask: "simplebar-mask",
            wrapper: "simplebar-wrapper",
            placeholder: "simplebar-placeholder",
            scrollbar: "simplebar-scrollbar",
            track: "simplebar-track",
            heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
            heightAutoObserverEl: "simplebar-height-auto-observer",
            visible: "simplebar-visible",
            horizontal: "simplebar-horizontal",
            vertical: "simplebar-vertical",
            hover: "simplebar-hover",
            dragging: "simplebar-dragging"
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3
    },
    vo.instances = new WeakMap,
    vo.initDOMLoadedElements = function() {
        document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements),
        window.removeEventListener("load", this.initDOMLoadedElements),
        Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function(t) {
            "init" === t.getAttribute("data-simplebar") || vo.instances.has(t) || new vo(t,uo(t.attributes))
        })
    }
    ,
    vo.removeObserver = function() {
        this.globalObserver.disconnect()
    }
    ,
    vo.initHtmlApi = function() {
        this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this),
        "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(vo.handleMutations),
        this.globalObserver.observe(document, {
            childList: !0,
            subtree: !0
        })),
        "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements),
        window.addEventListener("load", this.initDOMLoadedElements))
    }
    ,
    vo.handleMutations = function(t) {
        t.forEach(function(t) {
            Array.prototype.forEach.call(t.addedNodes, function(t) {
                1 === t.nodeType && (t.hasAttribute("data-simplebar") ? !vo.instances.has(t) && document.documentElement.contains(t) && new vo(t,uo(t.attributes)) : Array.prototype.forEach.call(t.querySelectorAll("[data-simplebar]"), function(t) {
                    "init" !== t.getAttribute("data-simplebar") && !vo.instances.has(t) && document.documentElement.contains(t) && new vo(t,uo(t.attributes))
                }))
            }),
            Array.prototype.forEach.call(t.removedNodes, function(t) {
                1 === t.nodeType && ("init" === t.getAttribute("data-simplebar") ? vo.instances.has(t) && !document.documentElement.contains(t) && vo.instances.get(t).unMount() : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), function(t) {
                    vo.instances.has(t) && !document.documentElement.contains(t) && vo.instances.get(t).unMount()
                }))
            })
        })
    }
    ,
    vo.getOptions = uo,
    Ut && vo.initHtmlApi(),
    vo
}),
function() {
    "use strict";
    var t = function() {
        this.init()
    };
    t.prototype = {
        init: function() {
            var t = this || _;
            return t._counter = 1e3,
            t._html5AudioPool = [],
            t.html5PoolSize = 10,
            t._codecs = {},
            t._howls = [],
            t._muted = !1,
            t._volume = 1,
            t._canPlayEvent = "canplaythrough",
            t._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null,
            t.masterGain = null,
            t.noAudio = !1,
            t.usingWebAudio = !0,
            t.autoSuspend = !0,
            t.ctx = null,
            t.autoUnlock = !0,
            t._setup(),
            t
        },
        volume: function(t) {
            var e = this || _;
            if (t = parseFloat(t),
            e.ctx || f(),
            void 0 !== t && 0 <= t && t <= 1) {
                if (e._volume = t,
                e._muted)
                    return e;
                e.usingWebAudio && e.masterGain.gain.setValueAtTime(t, _.ctx.currentTime);
                for (var n = 0; n < e._howls.length; n++)
                    if (!e._howls[n]._webAudio)
                        for (var i = e._howls[n]._getSoundIds(), r = 0; r < i.length; r++) {
                            var o = e._howls[n]._soundById(i[r]);
                            o && o._node && (o._node.volume = o._volume * t)
                        }
                return e
            }
            return e._volume
        },
        mute: function(t) {
            var e = this || _;
            e.ctx || f(),
            e._muted = t,
            e.usingWebAudio && e.masterGain.gain.setValueAtTime(t ? 0 : e._volume, _.ctx.currentTime);
            for (var n = 0; n < e._howls.length; n++)
                if (!e._howls[n]._webAudio)
                    for (var i = e._howls[n]._getSoundIds(), r = 0; r < i.length; r++) {
                        var o = e._howls[n]._soundById(i[r]);
                        o && o._node && (o._node.muted = !!t || o._muted)
                    }
            return e
        },
        stop: function() {
            for (var t = this || _, e = 0; e < t._howls.length; e++)
                t._howls[e].stop();
            return t
        },
        unload: function() {
            for (var t = this || _, e = t._howls.length - 1; 0 <= e; e--)
                t._howls[e].unload();
            return t.usingWebAudio && t.ctx && void 0 !== t.ctx.close && (t.ctx.close(),
            t.ctx = null,
            f()),
            t
        },
        codecs: function(t) {
            return (this || _)._codecs[t.replace(/^x-/, "")]
        },
        _setup: function() {
            var e = this || _;
            if (e.state = e.ctx && e.ctx.state || "suspended",
            e._autoSuspend(),
            !e.usingWebAudio)
                if ("undefined" != typeof Audio)
                    try {
                        void 0 === (new Audio).oncanplaythrough && (e._canPlayEvent = "canplay")
                    } catch (t) {
                        e.noAudio = !0
                    }
                else
                    e.noAudio = !0;
            try {
                (new Audio).muted && (e.noAudio = !0)
            } catch (t) {}
            return e.noAudio || e._setupCodecs(),
            e
        },
        _setupCodecs: function() {
            var e = this || _
              , t = null;
            try {
                t = "undefined" != typeof Audio ? new Audio : null
            } catch (t) {
                return e
            }
            if (!t || "function" != typeof t.canPlayType)
                return e;
            var n = t.canPlayType("audio/mpeg;").replace(/^no$/, "")
              , i = e._navigator ? e._navigator.userAgent : ""
              , r = i.match(/OPR\/([0-6].)/g)
              , o = r && parseInt(r[0].split("/")[1], 10) < 33
              , s = -1 !== i.indexOf("Safari") && -1 === i.indexOf("Chrome")
              , a = i.match(/Version\/(.*?) /)
              , u = s && a && parseInt(a[1], 10) < 15;
            return e._codecs = {
                mp3: !(o || !n && !t.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!n,
                opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!(t.canPlayType('audio/wav; codecs="1"') || t.canPlayType("audio/wav")).replace(/^no$/, ""),
                aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                m4b: !!(t.canPlayType("audio/x-m4b;") || t.canPlayType("audio/m4b;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(t.canPlayType("audio/x-mp4;") || t.canPlayType("audio/mp4;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !(u || !t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                webm: !(u || !t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "")
            },
            e
        },
        _unlockAudio: function() {
            var a = this || _;
            if (!a._audioUnlocked && a.ctx) {
                a._audioUnlocked = !1,
                a.autoUnlock = !1,
                a._mobileUnloaded || 44100 === a.ctx.sampleRate || (a._mobileUnloaded = !0,
                a.unload()),
                a._scratchBuffer = a.ctx.createBuffer(1, 1, 22050);
                var u = function(t) {
                    for (; a._html5AudioPool.length < a.html5PoolSize; )
                        try {
                            var e = new Audio;
                            e._unlocked = !0,
                            a._releaseHtml5Audio(e)
                        } catch (t) {
                            a.noAudio = !0;
                            break
                        }
                    for (var n = 0; n < a._howls.length; n++)
                        if (!a._howls[n]._webAudio)
                            for (var i = a._howls[n]._getSoundIds(), r = 0; r < i.length; r++) {
                                var o = a._howls[n]._soundById(i[r]);
                                o && o._node && !o._node._unlocked && (o._node._unlocked = !0,
                                o._node.load())
                            }
                    a._autoResume();
                    var s = a.ctx.createBufferSource();
                    s.buffer = a._scratchBuffer,
                    s.connect(a.ctx.destination),
                    void 0 === s.start ? s.noteOn(0) : s.start(0),
                    "function" == typeof a.ctx.resume && a.ctx.resume(),
                    s.onended = function() {
                        s.disconnect(0),
                        a._audioUnlocked = !0,
                        document.removeEventListener("touchstart", u, !0),
                        document.removeEventListener("touchend", u, !0),
                        document.removeEventListener("click", u, !0),
                        document.removeEventListener("keydown", u, !0);
                        for (var t = 0; t < a._howls.length; t++)
                            a._howls[t]._emit("unlock")
                    }
                };
                return document.addEventListener("touchstart", u, !0),
                document.addEventListener("touchend", u, !0),
                document.addEventListener("click", u, !0),
                document.addEventListener("keydown", u, !0),
                a
            }
        },
        _obtainHtml5Audio: function() {
            var t = this || _;
            if (t._html5AudioPool.length)
                return t._html5AudioPool.pop();
            var e = (new Audio).play();
            return e && "undefined" != typeof Promise && (e instanceof Promise || "function" == typeof e.then) && e.catch(function() {}),
            new Audio
        },
        _releaseHtml5Audio: function(t) {
            var e = this || _;
            return t._unlocked && e._html5AudioPool.push(t),
            e
        },
        _autoSuspend: function() {
            var e = this;
            if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && _.usingWebAudio) {
                for (var t = 0; t < e._howls.length; t++)
                    if (e._howls[t]._webAudio)
                        for (var n = 0; n < e._howls[t]._sounds.length; n++)
                            if (!e._howls[t]._sounds[n]._paused)
                                return e;
                return e._suspendTimer && clearTimeout(e._suspendTimer),
                e._suspendTimer = setTimeout(function() {
                    if (e.autoSuspend) {
                        e._suspendTimer = null,
                        e.state = "suspending";
                        var t = function() {
                            e.state = "suspended",
                            e._resumeAfterSuspend && (delete e._resumeAfterSuspend,
                            e._autoResume())
                        };
                        e.ctx.suspend().then(t, t)
                    }
                }, 3e4),
                e
            }
        },
        _autoResume: function() {
            var e = this;
            if (e.ctx && void 0 !== e.ctx.resume && _.usingWebAudio)
                return "running" === e.state && "interrupted" !== e.ctx.state && e._suspendTimer ? (clearTimeout(e._suspendTimer),
                e._suspendTimer = null) : "suspended" === e.state || "running" === e.state && "interrupted" === e.ctx.state ? (e.ctx.resume().then(function() {
                    e.state = "running";
                    for (var t = 0; t < e._howls.length; t++)
                        e._howls[t]._emit("resume")
                }),
                e._suspendTimer && (clearTimeout(e._suspendTimer),
                e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0),
                e
        }
    };
    var _ = new t
      , e = function(t) {
        t.src && 0 !== t.src.length && this.init(t)
    };
    e.prototype = {
        init: function(t) {
            var e = this;
            return _.ctx || f(),
            e._autoplay = t.autoplay || !1,
            e._format = "string" != typeof t.format ? t.format : [t.format],
            e._html5 = t.html5 || !1,
            e._muted = t.mute || !1,
            e._loop = t.loop || !1,
            e._pool = t.pool || 5,
            e._preload = "boolean" != typeof t.preload && "metadata" !== t.preload || t.preload,
            e._rate = t.rate || 1,
            e._sprite = t.sprite || {},
            e._src = "string" != typeof t.src ? t.src : [t.src],
            e._volume = void 0 !== t.volume ? t.volume : 1,
            e._xhr = {
                method: t.xhr && t.xhr.method ? t.xhr.method : "GET",
                headers: t.xhr && t.xhr.headers ? t.xhr.headers : null,
                withCredentials: !(!t.xhr || !t.xhr.withCredentials) && t.xhr.withCredentials
            },
            e._duration = 0,
            e._state = "unloaded",
            e._sounds = [],
            e._endTimers = {},
            e._queue = [],
            e._playLock = !1,
            e._onend = t.onend ? [{
                fn: t.onend
            }] : [],
            e._onfade = t.onfade ? [{
                fn: t.onfade
            }] : [],
            e._onload = t.onload ? [{
                fn: t.onload
            }] : [],
            e._onloaderror = t.onloaderror ? [{
                fn: t.onloaderror
            }] : [],
            e._onplayerror = t.onplayerror ? [{
                fn: t.onplayerror
            }] : [],
            e._onpause = t.onpause ? [{
                fn: t.onpause
            }] : [],
            e._onplay = t.onplay ? [{
                fn: t.onplay
            }] : [],
            e._onstop = t.onstop ? [{
                fn: t.onstop
            }] : [],
            e._onmute = t.onmute ? [{
                fn: t.onmute
            }] : [],
            e._onvolume = t.onvolume ? [{
                fn: t.onvolume
            }] : [],
            e._onrate = t.onrate ? [{
                fn: t.onrate
            }] : [],
            e._onseek = t.onseek ? [{
                fn: t.onseek
            }] : [],
            e._onunlock = t.onunlock ? [{
                fn: t.onunlock
            }] : [],
            e._onresume = [],
            e._webAudio = _.usingWebAudio && !e._html5,
            void 0 !== _.ctx && _.ctx && _.autoUnlock && _._unlockAudio(),
            _._howls.push(e),
            e._autoplay && e._queue.push({
                event: "play",
                action: function() {
                    e.play()
                }
            }),
            e._preload && "none" !== e._preload && e.load(),
            e
        },
        load: function() {
            var t = this
              , e = null;
            if (_.noAudio)
                t._emit("loaderror", null, "No audio support.");
            else {
                "string" == typeof t._src && (t._src = [t._src]);
                for (var n = 0; n < t._src.length; n++) {
                    var i, r;
                    if (t._format && t._format[n])
                        i = t._format[n];
                    else {
                        if ("string" != typeof (r = t._src[n])) {
                            t._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }
                        (i = /^data:audio\/([^;,]+);/i.exec(r)) || (i = /\.([^.]+)$/.exec(r.split("?", 1)[0])),
                        i && (i = i[1].toLowerCase())
                    }
                    if (i && _.codecs(i)) {
                        e = t._src[n];
                        break
                    }
                }
                if (e)
                    return t._src = e,
                    t._state = "loading",
                    "https:" === window.location.protocol && "http:" === e.slice(0, 5) && (t._html5 = !0,
                    t._webAudio = !1),
                    new o(t),
                    t._webAudio && a(t),
                    t;
                t._emit("loaderror", null, "No codec support for selected audio sources.")
            }
        },
        play: function(e, n) {
            var i = this
              , t = null;
            if ("number" == typeof e)
                t = e,
                e = null;
            else {
                if ("string" == typeof e && "loaded" === i._state && !i._sprite[e])
                    return null;
                if (void 0 === e && (e = "__default",
                !i._playLock)) {
                    for (var r = 0, o = 0; o < i._sounds.length; o++)
                        i._sounds[o]._paused && !i._sounds[o]._ended && (r++,
                        t = i._sounds[o]._id);
                    1 === r ? e = null : t = null
                }
            }
            var s = t ? i._soundById(t) : i._inactiveSound();
            if (!s)
                return null;
            if (t && !e && (e = s._sprite || "__default"),
            "loaded" !== i._state) {
                s._sprite = e,
                s._ended = !1;
                var a = s._id;
                return i._queue.push({
                    event: "play",
                    action: function() {
                        i.play(a)
                    }
                }),
                a
            }
            if (t && !s._paused)
                return n || i._loadQueue("play"),
                s._id;
            i._webAudio && _._autoResume();
            var u = Math.max(0, 0 < s._seek ? s._seek : i._sprite[e][0] / 1e3)
              , l = Math.max(0, (i._sprite[e][0] + i._sprite[e][1]) / 1e3 - u)
              , c = 1e3 * l / Math.abs(s._rate)
              , f = i._sprite[e][0] / 1e3
              , h = (i._sprite[e][0] + i._sprite[e][1]) / 1e3;
            s._sprite = e,
            s._ended = !1;
            var d = function() {
                s._paused = !1,
                s._seek = u,
                s._start = f,
                s._stop = h,
                s._loop = !(!s._loop && !i._sprite[e][2])
            };
            if (!(h <= u)) {
                var p = s._node;
                if (i._webAudio) {
                    var v = function() {
                        i._playLock = !1,
                        d(),
                        i._refreshBuffer(s);
                        var t = s._muted || i._muted ? 0 : s._volume;
                        p.gain.setValueAtTime(t, _.ctx.currentTime),
                        s._playStart = _.ctx.currentTime,
                        void 0 === p.bufferSource.start ? s._loop ? p.bufferSource.noteGrainOn(0, u, 86400) : p.bufferSource.noteGrainOn(0, u, l) : s._loop ? p.bufferSource.start(0, u, 86400) : p.bufferSource.start(0, u, l),
                        c !== 1 / 0 && (i._endTimers[s._id] = setTimeout(i._ended.bind(i, s), c)),
                        n || setTimeout(function() {
                            i._emit("play", s._id),
                            i._loadQueue()
                        }, 0)
                    };
                    "running" === _.state && "interrupted" !== _.ctx.state ? v() : (i._playLock = !0,
                    i.once("resume", v),
                    i._clearTimer(s._id))
                } else {
                    var m = function() {
                        p.currentTime = u,
                        p.muted = s._muted || i._muted || _._muted || p.muted,
                        p.volume = s._volume * _.volume(),
                        p.playbackRate = s._rate;
                        try {
                            var t = p.play();
                            if (t && "undefined" != typeof Promise && (t instanceof Promise || "function" == typeof t.then) ? (i._playLock = !0,
                            d(),
                            t.then(function() {
                                i._playLock = !1,
                                p._unlocked = !0,
                                n ? i._loadQueue() : i._emit("play", s._id)
                            }).catch(function() {
                                i._playLock = !1,
                                i._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),
                                s._ended = !0,
                                s._paused = !0
                            })) : n || (i._playLock = !1,
                            d(),
                            i._emit("play", s._id)),
                            p.playbackRate = s._rate,
                            p.paused)
                                return void i._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                            "__default" !== e || s._loop ? i._endTimers[s._id] = setTimeout(i._ended.bind(i, s), c) : (i._endTimers[s._id] = function() {
                                i._ended(s),
                                p.removeEventListener("ended", i._endTimers[s._id], !1)
                            }
                            ,
                            p.addEventListener("ended", i._endTimers[s._id], !1))
                        } catch (t) {
                            i._emit("playerror", s._id, t)
                        }
                    };
                    "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === p.src && (p.src = i._src,
                    p.load());
                    var g = window && window.ejecta || !p.readyState && _._navigator.isCocoonJS;
                    if (3 <= p.readyState || g)
                        m();
                    else {
                        i._playLock = !0,
                        i._state = "loading";
                        var y = function() {
                            i._state = "loaded",
                            m(),
                            p.removeEventListener(_._canPlayEvent, y, !1)
                        };
                        p.addEventListener(_._canPlayEvent, y, !1),
                        i._clearTimer(s._id)
                    }
                }
                return s._id
            }
            i._ended(s)
        },
        pause: function(t) {
            var e = this;
            if ("loaded" !== e._state || e._playLock)
                return e._queue.push({
                    event: "pause",
                    action: function() {
                        e.pause(t)
                    }
                }),
                e;
            for (var n = e._getSoundIds(t), i = 0; i < n.length; i++) {
                e._clearTimer(n[i]);
                var r = e._soundById(n[i]);
                if (r && !r._paused && (r._seek = e.seek(n[i]),
                r._rateSeek = 0,
                r._paused = !0,
                e._stopFade(n[i]),
                r._node))
                    if (e._webAudio) {
                        if (!r._node.bufferSource)
                            continue;
                        void 0 === r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0),
                        e._cleanBuffer(r._node)
                    } else
                        isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause();
                arguments[1] || e._emit("pause", r ? r._id : null)
            }
            return e
        },
        stop: function(t, e) {
            var n = this;
            if ("loaded" !== n._state || n._playLock)
                return n._queue.push({
                    event: "stop",
                    action: function() {
                        n.stop(t)
                    }
                }),
                n;
            for (var i = n._getSoundIds(t), r = 0; r < i.length; r++) {
                n._clearTimer(i[r]);
                var o = n._soundById(i[r]);
                o && (o._seek = o._start || 0,
                o._rateSeek = 0,
                o._paused = !0,
                o._ended = !0,
                n._stopFade(i[r]),
                o._node && (n._webAudio ? o._node.bufferSource && (void 0 === o._node.bufferSource.stop ? o._node.bufferSource.noteOff(0) : o._node.bufferSource.stop(0),
                n._cleanBuffer(o._node)) : isNaN(o._node.duration) && o._node.duration !== 1 / 0 || (o._node.currentTime = o._start || 0,
                o._node.pause(),
                o._node.duration === 1 / 0 && n._clearSound(o._node))),
                e || n._emit("stop", o._id))
            }
            return n
        },
        mute: function(t, e) {
            var n = this;
            if ("loaded" !== n._state || n._playLock)
                return n._queue.push({
                    event: "mute",
                    action: function() {
                        n.mute(t, e)
                    }
                }),
                n;
            if (void 0 === e) {
                if ("boolean" != typeof t)
                    return n._muted;
                n._muted = t
            }
            for (var i = n._getSoundIds(e), r = 0; r < i.length; r++) {
                var o = n._soundById(i[r]);
                o && (o._muted = t,
                o._interval && n._stopFade(o._id),
                n._webAudio && o._node ? o._node.gain.setValueAtTime(t ? 0 : o._volume, _.ctx.currentTime) : o._node && (o._node.muted = !!_._muted || t),
                n._emit("mute", o._id))
            }
            return n
        },
        volume: function() {
            var t, e, n, i = this, r = arguments;
            if (0 === r.length)
                return i._volume;
            if (1 === r.length || 2 === r.length && void 0 === r[1] ? 0 <= i._getSoundIds().indexOf(r[0]) ? e = parseInt(r[0], 10) : t = parseFloat(r[0]) : 2 <= r.length && (t = parseFloat(r[0]),
            e = parseInt(r[1], 10)),
            !(void 0 !== t && 0 <= t && t <= 1))
                return (n = e ? i._soundById(e) : i._sounds[0]) ? n._volume : 0;
            if ("loaded" !== i._state || i._playLock)
                return i._queue.push({
                    event: "volume",
                    action: function() {
                        i.volume.apply(i, r)
                    }
                }),
                i;
            void 0 === e && (i._volume = t),
            e = i._getSoundIds(e);
            for (var o = 0; o < e.length; o++)
                (n = i._soundById(e[o])) && (n._volume = t,
                r[2] || i._stopFade(e[o]),
                i._webAudio && n._node && !n._muted ? n._node.gain.setValueAtTime(t, _.ctx.currentTime) : n._node && !n._muted && (n._node.volume = t * _.volume()),
                i._emit("volume", n._id));
            return i
        },
        fade: function(t, e, n, i) {
            var r = this;
            if ("loaded" !== r._state || r._playLock)
                return r._queue.push({
                    event: "fade",
                    action: function() {
                        r.fade(t, e, n, i)
                    }
                }),
                r;
            t = Math.min(Math.max(0, parseFloat(t)), 1),
            e = Math.min(Math.max(0, parseFloat(e)), 1),
            n = parseFloat(n),
            r.volume(t, i);
            for (var o = r._getSoundIds(i), s = 0; s < o.length; s++) {
                var a = r._soundById(o[s]);
                if (a) {
                    if (i || r._stopFade(o[s]),
                    r._webAudio && !a._muted) {
                        var u = _.ctx.currentTime
                          , l = u + n / 1e3;
                        a._volume = t,
                        a._node.gain.setValueAtTime(t, u),
                        a._node.gain.linearRampToValueAtTime(e, l)
                    }
                    r._startFadeInterval(a, t, e, n, o[s], void 0 === i)
                }
            }
            return r
        },
        _startFadeInterval: function(e, n, i, r, t, o) {
            var s = this
              , a = n
              , u = i - n
              , l = Math.abs(u / .01)
              , c = Math.max(4, 0 < l ? r / l : r)
              , f = Date.now();
            e._fadeTo = i,
            e._interval = setInterval(function() {
                var t = (Date.now() - f) / r;
                f = Date.now(),
                a += u * t,
                a = Math.round(100 * a) / 100,
                a = u < 0 ? Math.max(i, a) : Math.min(i, a),
                s._webAudio ? e._volume = a : s.volume(a, e._id, !0),
                o && (s._volume = a),
                (i < n && a <= i || n < i && i <= a) && (clearInterval(e._interval),
                e._interval = null,
                e._fadeTo = null,
                s.volume(i, e._id),
                s._emit("fade", e._id))
            }, c)
        },
        _stopFade: function(t) {
            var e = this._soundById(t);
            return e && e._interval && (this._webAudio && e._node.gain.cancelScheduledValues(_.ctx.currentTime),
            clearInterval(e._interval),
            e._interval = null,
            this.volume(e._fadeTo, t),
            e._fadeTo = null,
            this._emit("fade", t)),
            this
        },
        loop: function() {
            var t, e, n, i = this, r = arguments;
            if (0 === r.length)
                return i._loop;
            if (1 === r.length) {
                if ("boolean" != typeof r[0])
                    return !!(n = i._soundById(parseInt(r[0], 10))) && n._loop;
                t = r[0],
                i._loop = t
            } else
                2 === r.length && (t = r[0],
                e = parseInt(r[1], 10));
            for (var o = i._getSoundIds(e), s = 0; s < o.length; s++)
                (n = i._soundById(o[s])) && (n._loop = t,
                i._webAudio && n._node && n._node.bufferSource && (n._node.bufferSource.loop = t) && (n._node.bufferSource.loopStart = n._start || 0,
                n._node.bufferSource.loopEnd = n._stop,
                i.playing(o[s]) && (i.pause(o[s], !0),
                i.play(o[s], !0))));
            return i
        },
        rate: function() {
            var t, e, n, i = this, r = arguments;
            if (0 === r.length)
                e = i._sounds[0]._id;
            else if (1 === r.length) {
                0 <= i._getSoundIds().indexOf(r[0]) ? e = parseInt(r[0], 10) : t = parseFloat(r[0])
            } else
                2 === r.length && (t = parseFloat(r[0]),
                e = parseInt(r[1], 10));
            if ("number" != typeof t)
                return (n = i._soundById(e)) ? n._rate : i._rate;
            if ("loaded" !== i._state || i._playLock)
                return i._queue.push({
                    event: "rate",
                    action: function() {
                        i.rate.apply(i, r)
                    }
                }),
                i;
            void 0 === e && (i._rate = t),
            e = i._getSoundIds(e);
            for (var o = 0; o < e.length; o++)
                if (n = i._soundById(e[o])) {
                    i.playing(e[o]) && (n._rateSeek = i.seek(e[o]),
                    n._playStart = i._webAudio ? _.ctx.currentTime : n._playStart),
                    n._rate = t,
                    i._webAudio && n._node && n._node.bufferSource ? n._node.bufferSource.playbackRate.setValueAtTime(t, _.ctx.currentTime) : n._node && (n._node.playbackRate = t);
                    var s = i.seek(e[o])
                      , a = 1e3 * ((i._sprite[n._sprite][0] + i._sprite[n._sprite][1]) / 1e3 - s) / Math.abs(n._rate);
                    !i._endTimers[e[o]] && n._paused || (i._clearTimer(e[o]),
                    i._endTimers[e[o]] = setTimeout(i._ended.bind(i, n), a)),
                    i._emit("rate", n._id)
                }
            return i
        },
        seek: function() {
            var t, e, n = this, i = arguments;
            if (0 === i.length)
                n._sounds.length && (e = n._sounds[0]._id);
            else if (1 === i.length) {
                0 <= n._getSoundIds().indexOf(i[0]) ? e = parseInt(i[0], 10) : n._sounds.length && (e = n._sounds[0]._id,
                t = parseFloat(i[0]))
            } else
                2 === i.length && (t = parseFloat(i[0]),
                e = parseInt(i[1], 10));
            if (void 0 === e)
                return 0;
            if ("number" == typeof t && ("loaded" !== n._state || n._playLock))
                return n._queue.push({
                    event: "seek",
                    action: function() {
                        n.seek.apply(n, i)
                    }
                }),
                n;
            var r = n._soundById(e);
            if (r) {
                if (!("number" == typeof t && 0 <= t)) {
                    if (n._webAudio) {
                        var o = n.playing(e) ? _.ctx.currentTime - r._playStart : 0
                          , s = r._rateSeek ? r._rateSeek - r._seek : 0;
                        return r._seek + (s + o * Math.abs(r._rate))
                    }
                    return r._node.currentTime
                }
                var a = n.playing(e);
                a && n.pause(e, !0),
                r._seek = t,
                r._ended = !1,
                n._clearTimer(e),
                n._webAudio || !r._node || isNaN(r._node.duration) || (r._node.currentTime = t);
                var u = function() {
                    a && n.play(e, !0),
                    n._emit("seek", e)
                };
                if (a && !n._webAudio) {
                    var l = function() {
                        n._playLock ? setTimeout(l, 0) : u()
                    };
                    setTimeout(l, 0)
                } else
                    u()
            }
            return n
        },
        playing: function(t) {
            if ("number" == typeof t) {
                var e = this._soundById(t);
                return !!e && !e._paused
            }
            for (var n = 0; n < this._sounds.length; n++)
                if (!this._sounds[n]._paused)
                    return !0;
            return !1
        },
        duration: function(t) {
            var e = this._duration
              , n = this._soundById(t);
            return n && (e = this._sprite[n._sprite][1] / 1e3),
            e
        },
        state: function() {
            return this._state
        },
        unload: function() {
            for (var t = this, e = t._sounds, n = 0; n < e.length; n++)
                e[n]._paused || t.stop(e[n]._id),
                t._webAudio || (t._clearSound(e[n]._node),
                e[n]._node.removeEventListener("error", e[n]._errorFn, !1),
                e[n]._node.removeEventListener(_._canPlayEvent, e[n]._loadFn, !1),
                e[n]._node.removeEventListener("ended", e[n]._endFn, !1),
                _._releaseHtml5Audio(e[n]._node)),
                delete e[n]._node,
                t._clearTimer(e[n]._id);
            var i = _._howls.indexOf(t);
            0 <= i && _._howls.splice(i, 1);
            var r = !0;
            for (n = 0; n < _._howls.length; n++)
                if (_._howls[n]._src === t._src || 0 <= t._src.indexOf(_._howls[n]._src)) {
                    r = !1;
                    break
                }
            return s && r && delete s[t._src],
            _.noAudio = !1,
            t._state = "unloaded",
            t._sounds = [],
            t = null
        },
        on: function(t, e, n, i) {
            var r = this["_on" + t];
            return "function" == typeof e && r.push(i ? {
                id: n,
                fn: e,
                once: i
            } : {
                id: n,
                fn: e
            }),
            this
        },
        off: function(t, e, n) {
            var i = this["_on" + t]
              , r = 0;
            if ("number" == typeof e && (n = e,
            e = null),
            e || n)
                for (r = 0; r < i.length; r++) {
                    var o = n === i[r].id;
                    if (e === i[r].fn && o || !e && o) {
                        i.splice(r, 1);
                        break
                    }
                }
            else if (t)
                this["_on" + t] = [];
            else {
                var s = Object.keys(this);
                for (r = 0; r < s.length; r++)
                    0 === s[r].indexOf("_on") && Array.isArray(this[s[r]]) && (this[s[r]] = [])
            }
            return this
        },
        once: function(t, e, n) {
            return this.on(t, e, n, 1),
            this
        },
        _emit: function(t, e, n) {
            for (var i = this["_on" + t], r = i.length - 1; 0 <= r; r--)
                i[r].id && i[r].id !== e && "load" !== t || (setTimeout(function(t) {
                    t.call(this, e, n)
                }
                .bind(this, i[r].fn), 0),
                i[r].once && this.off(t, i[r].fn, i[r].id));
            return this._loadQueue(t),
            this
        },
        _loadQueue: function(t) {
            if (0 < this._queue.length) {
                var e = this._queue[0];
                e.event === t && (this._queue.shift(),
                this._loadQueue()),
                t || e.action()
            }
            return this
        },
        _ended: function(t) {
            var e = this
              , n = t._sprite;
            if (!e._webAudio && t._node && !t._node.paused && !t._node.ended && t._node.currentTime < t._stop)
                return setTimeout(e._ended.bind(e, t), 100),
                e;
            var i = !(!t._loop && !e._sprite[n][2]);
            if (e._emit("end", t._id),
            !e._webAudio && i && e.stop(t._id, !0).play(t._id),
            e._webAudio && i) {
                e._emit("play", t._id),
                t._seek = t._start || 0,
                t._rateSeek = 0,
                t._playStart = _.ctx.currentTime;
                var r = 1e3 * (t._stop - t._start) / Math.abs(t._rate);
                e._endTimers[t._id] = setTimeout(e._ended.bind(e, t), r)
            }
            return e._webAudio && !i && (t._paused = !0,
            t._ended = !0,
            t._seek = t._start || 0,
            t._rateSeek = 0,
            e._clearTimer(t._id),
            e._cleanBuffer(t._node),
            _._autoSuspend()),
            e._webAudio || i || e.stop(t._id, !0),
            e
        },
        _clearTimer: function(t) {
            if (this._endTimers[t]) {
                if ("function" != typeof this._endTimers[t])
                    clearTimeout(this._endTimers[t]);
                else {
                    var e = this._soundById(t);
                    e && e._node && e._node.removeEventListener("ended", this._endTimers[t], !1)
                }
                delete this._endTimers[t]
            }
            return this
        },
        _soundById: function(t) {
            for (var e = 0; e < this._sounds.length; e++)
                if (t === this._sounds[e]._id)
                    return this._sounds[e];
            return null
        },
        _inactiveSound: function() {
            this._drain();
            for (var t = 0; t < this._sounds.length; t++)
                if (this._sounds[t]._ended)
                    return this._sounds[t].reset();
            return new o(this)
        },
        _drain: function() {
            var t = this
              , e = t._pool
              , n = 0
              , i = 0;
            if (!(t._sounds.length < e)) {
                for (i = 0; i < t._sounds.length; i++)
                    t._sounds[i]._ended && n++;
                for (i = t._sounds.length - 1; 0 <= i; i--) {
                    if (n <= e)
                        return;
                    t._sounds[i]._ended && (t._webAudio && t._sounds[i]._node && t._sounds[i]._node.disconnect(0),
                    t._sounds.splice(i, 1),
                    n--)
                }
            }
        },
        _getSoundIds: function(t) {
            if (void 0 !== t)
                return [t];
            for (var e = [], n = 0; n < this._sounds.length; n++)
                e.push(this._sounds[n]._id);
            return e
        },
        _refreshBuffer: function(t) {
            return t._node.bufferSource = _.ctx.createBufferSource(),
            t._node.bufferSource.buffer = s[this._src],
            t._panner ? t._node.bufferSource.connect(t._panner) : t._node.bufferSource.connect(t._node),
            t._node.bufferSource.loop = t._loop,
            t._loop && (t._node.bufferSource.loopStart = t._start || 0,
            t._node.bufferSource.loopEnd = t._stop || 0),
            t._node.bufferSource.playbackRate.setValueAtTime(t._rate, _.ctx.currentTime),
            this
        },
        _cleanBuffer: function(t) {
            var e = _._navigator && 0 <= _._navigator.vendor.indexOf("Apple");
            if (_._scratchBuffer && t.bufferSource && (t.bufferSource.onended = null,
            t.bufferSource.disconnect(0),
            e))
                try {
                    t.bufferSource.buffer = _._scratchBuffer
                } catch (t) {}
            return t.bufferSource = null,
            this
        },
        _clearSound: function(t) {
            /MSIE |Trident\//.test(_._navigator && _._navigator.userAgent) || (t.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
    };
    var o = function(t) {
        this._parent = t,
        this.init()
    };
    o.prototype = {
        init: function() {
            var t = this
              , e = t._parent;
            return t._muted = e._muted,
            t._loop = e._loop,
            t._volume = e._volume,
            t._rate = e._rate,
            t._seek = 0,
            t._paused = !0,
            t._ended = !0,
            t._sprite = "__default",
            t._id = ++_._counter,
            e._sounds.push(t),
            t.create(),
            t
        },
        create: function() {
            var t = this
              , e = t._parent
              , n = _._muted || t._muted || t._parent._muted ? 0 : t._volume;
            return e._webAudio ? (t._node = void 0 === _.ctx.createGain ? _.ctx.createGainNode() : _.ctx.createGain(),
            t._node.gain.setValueAtTime(n, _.ctx.currentTime),
            t._node.paused = !0,
            t._node.connect(_.masterGain)) : _.noAudio || (t._node = _._obtainHtml5Audio(),
            t._errorFn = t._errorListener.bind(t),
            t._node.addEventListener("error", t._errorFn, !1),
            t._loadFn = t._loadListener.bind(t),
            t._node.addEventListener(_._canPlayEvent, t._loadFn, !1),
            t._endFn = t._endListener.bind(t),
            t._node.addEventListener("ended", t._endFn, !1),
            t._node.src = e._src,
            t._node.preload = !0 === e._preload ? "auto" : e._preload,
            t._node.volume = n * _.volume(),
            t._node.load()),
            t
        },
        reset: function() {
            var t = this
              , e = t._parent;
            return t._muted = e._muted,
            t._loop = e._loop,
            t._volume = e._volume,
            t._rate = e._rate,
            t._seek = 0,
            t._rateSeek = 0,
            t._paused = !0,
            t._ended = !0,
            t._sprite = "__default",
            t._id = ++_._counter,
            t
        },
        _errorListener: function() {
            this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0),
            this._node.removeEventListener("error", this._errorFn, !1)
        },
        _loadListener: function() {
            var t = this._parent;
            t._duration = Math.ceil(10 * this._node.duration) / 10,
            0 === Object.keys(t._sprite).length && (t._sprite = {
                __default: [0, 1e3 * t._duration]
            }),
            "loaded" !== t._state && (t._state = "loaded",
            t._emit("load"),
            t._loadQueue()),
            this._node.removeEventListener(_._canPlayEvent, this._loadFn, !1)
        },
        _endListener: function() {
            var t = this._parent;
            t._duration === 1 / 0 && (t._duration = Math.ceil(10 * this._node.duration) / 10,
            t._sprite.__default[1] === 1 / 0 && (t._sprite.__default[1] = 1e3 * t._duration),
            t._ended(this)),
            this._node.removeEventListener("ended", this._endFn, !1)
        }
    };
    var s = {}
      , a = function(e) {
        var t = e._src;
        if (s[t])
            return e._duration = s[t].duration,
            void c(e);
        if (/^data:[^;]+;base64,/.test(t)) {
            for (var n = atob(t.split(",")[1]), i = new Uint8Array(n.length), r = 0; r < n.length; ++r)
                i[r] = n.charCodeAt(r);
            l(i.buffer, e)
        } else {
            var o = new XMLHttpRequest;
            o.open(e._xhr.method, t, !0),
            o.withCredentials = e._xhr.withCredentials,
            o.responseType = "arraybuffer",
            e._xhr.headers && Object.keys(e._xhr.headers).forEach(function(t) {
                o.setRequestHeader(t, e._xhr.headers[t])
            }),
            o.onload = function() {
                var t = (o.status + "")[0];
                "0" === t || "2" === t || "3" === t ? l(o.response, e) : e._emit("loaderror", null, "Failed loading audio file with status: " + o.status + ".")
            }
            ,
            o.onerror = function() {
                e._webAudio && (e._html5 = !0,
                e._webAudio = !1,
                e._sounds = [],
                delete s[t],
                e.load())
            }
            ,
            u(o)
        }
    }
      , u = function(e) {
        try {
            e.send()
        } catch (t) {
            e.onerror()
        }
    }
      , l = function(t, e) {
        var n = function() {
            e._emit("loaderror", null, "Decoding audio data failed.")
        }
          , i = function(t) {
            t && 0 < e._sounds.length ? (s[e._src] = t,
            c(e, t)) : n()
        };
        "undefined" != typeof Promise && 1 === _.ctx.decodeAudioData.length ? _.ctx.decodeAudioData(t).then(i).catch(n) : _.ctx.decodeAudioData(t, i, n)
    }
      , c = function(t, e) {
        e && !t._duration && (t._duration = e.duration),
        0 === Object.keys(t._sprite).length && (t._sprite = {
            __default: [0, 1e3 * t._duration]
        }),
        "loaded" !== t._state && (t._state = "loaded",
        t._emit("load"),
        t._loadQueue())
    }
      , f = function() {
        if (_.usingWebAudio) {
            try {
                "undefined" != typeof AudioContext ? _.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? _.ctx = new webkitAudioContext : _.usingWebAudio = !1
            } catch (t) {
                _.usingWebAudio = !1
            }
            _.ctx || (_.usingWebAudio = !1);
            var t = /iP(hone|od|ad)/.test(_._navigator && _._navigator.platform)
              , e = _._navigator && _._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
              , n = e ? parseInt(e[1], 10) : null;
            if (t && n && n < 9) {
                var i = /safari/.test(_._navigator && _._navigator.userAgent.toLowerCase());
                _._navigator && !i && (_.usingWebAudio = !1)
            }
            _.usingWebAudio && (_.masterGain = void 0 === _.ctx.createGain ? _.ctx.createGainNode() : _.ctx.createGain(),
            _.masterGain.gain.setValueAtTime(_._muted ? 0 : _._volume, _.ctx.currentTime),
            _.masterGain.connect(_.ctx.destination)),
            _._setup()
        }
    };
    "function" == typeof define && define.amd && define([], function() {
        return {
            Howler: _,
            Howl: e
        }
    }),
    "undefined" != typeof exports && (exports.Howler = _,
    exports.Howl = e),
    "undefined" != typeof global ? (global.HowlerGlobal = t,
    global.Howler = _,
    global.Howl = e,
    global.Sound = o) : "undefined" != typeof window && (window.HowlerGlobal = t,
    window.Howler = _,
    window.Howl = e,
    window.Sound = o)
}(),
function() {
    "use strict";
    var e, n, i;
    HowlerGlobal.prototype._pos = [0, 0, 0],
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0],
    HowlerGlobal.prototype.stereo = function(t) {
        if (!this.ctx || !this.ctx.listener)
            return this;
        for (var e = this._howls.length - 1; 0 <= e; e--)
            this._howls[e].stereo(t);
        return this
    }
    ,
    HowlerGlobal.prototype.pos = function(t, e, n) {
        var i = this;
        return i.ctx && i.ctx.listener ? (e = "number" != typeof e ? i._pos[1] : e,
        n = "number" != typeof n ? i._pos[2] : n,
        "number" != typeof t ? i._pos : (i._pos = [t, e, n],
        void 0 !== i.ctx.listener.positionX ? (i.ctx.listener.positionX.setTargetAtTime(i._pos[0], Howler.ctx.currentTime, .1),
        i.ctx.listener.positionY.setTargetAtTime(i._pos[1], Howler.ctx.currentTime, .1),
        i.ctx.listener.positionZ.setTargetAtTime(i._pos[2], Howler.ctx.currentTime, .1)) : i.ctx.listener.setPosition(i._pos[0], i._pos[1], i._pos[2]),
        i)) : i
    }
    ,
    HowlerGlobal.prototype.orientation = function(t, e, n, i, r, o) {
        var s = this;
        if (!s.ctx || !s.ctx.listener)
            return s;
        var a = s._orientation;
        return e = "number" != typeof e ? a[1] : e,
        n = "number" != typeof n ? a[2] : n,
        i = "number" != typeof i ? a[3] : i,
        r = "number" != typeof r ? a[4] : r,
        o = "number" != typeof o ? a[5] : o,
        "number" != typeof t ? a : (s._orientation = [t, e, n, i, r, o],
        void 0 !== s.ctx.listener.forwardX ? (s.ctx.listener.forwardX.setTargetAtTime(t, Howler.ctx.currentTime, .1),
        s.ctx.listener.forwardY.setTargetAtTime(e, Howler.ctx.currentTime, .1),
        s.ctx.listener.forwardZ.setTargetAtTime(n, Howler.ctx.currentTime, .1),
        s.ctx.listener.upX.setTargetAtTime(i, Howler.ctx.currentTime, .1),
        s.ctx.listener.upY.setTargetAtTime(r, Howler.ctx.currentTime, .1),
        s.ctx.listener.upZ.setTargetAtTime(o, Howler.ctx.currentTime, .1)) : s.ctx.listener.setOrientation(t, e, n, i, r, o),
        s)
    }
    ,
    Howl.prototype.init = (e = Howl.prototype.init,
    function(t) {
        return this._orientation = t.orientation || [1, 0, 0],
        this._stereo = t.stereo || null,
        this._pos = t.pos || null,
        this._pannerAttr = {
            coneInnerAngle: void 0 !== t.coneInnerAngle ? t.coneInnerAngle : 360,
            coneOuterAngle: void 0 !== t.coneOuterAngle ? t.coneOuterAngle : 360,
            coneOuterGain: void 0 !== t.coneOuterGain ? t.coneOuterGain : 0,
            distanceModel: void 0 !== t.distanceModel ? t.distanceModel : "inverse",
            maxDistance: void 0 !== t.maxDistance ? t.maxDistance : 1e4,
            panningModel: void 0 !== t.panningModel ? t.panningModel : "HRTF",
            refDistance: void 0 !== t.refDistance ? t.refDistance : 1,
            rolloffFactor: void 0 !== t.rolloffFactor ? t.rolloffFactor : 1
        },
        this._onstereo = t.onstereo ? [{
            fn: t.onstereo
        }] : [],
        this._onpos = t.onpos ? [{
            fn: t.onpos
        }] : [],
        this._onorientation = t.onorientation ? [{
            fn: t.onorientation
        }] : [],
        e.call(this, t)
    }
    ),
    Howl.prototype.stereo = function(t, e) {
        var n = this;
        if (!n._webAudio)
            return n;
        if ("loaded" !== n._state)
            return n._queue.push({
                event: "stereo",
                action: function() {
                    n.stereo(t, e)
                }
            }),
            n;
        var i = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if (void 0 === e) {
            if ("number" != typeof t)
                return n._stereo;
            n._stereo = t,
            n._pos = [t, 0, 0]
        }
        for (var r = n._getSoundIds(e), o = 0; o < r.length; o++) {
            var s = n._soundById(r[o]);
            if (s) {
                if ("number" != typeof t)
                    return s._stereo;
                s._stereo = t,
                s._pos = [t, 0, 0],
                s._node && (s._pannerAttr.panningModel = "equalpower",
                s._panner && s._panner.pan || l(s, i),
                "spatial" === i ? void 0 !== s._panner.positionX ? (s._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime),
                s._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime),
                s._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : s._panner.setPosition(t, 0, 0) : s._panner.pan.setValueAtTime(t, Howler.ctx.currentTime)),
                n._emit("stereo", s._id)
            }
        }
        return n
    }
    ,
    Howl.prototype.pos = function(t, e, n, i) {
        var r = this;
        if (!r._webAudio)
            return r;
        if ("loaded" !== r._state)
            return r._queue.push({
                event: "pos",
                action: function() {
                    r.pos(t, e, n, i)
                }
            }),
            r;
        if (e = "number" != typeof e ? 0 : e,
        n = "number" != typeof n ? -.5 : n,
        void 0 === i) {
            if ("number" != typeof t)
                return r._pos;
            r._pos = [t, e, n]
        }
        for (var o = r._getSoundIds(i), s = 0; s < o.length; s++) {
            var a = r._soundById(o[s]);
            if (a) {
                if ("number" != typeof t)
                    return a._pos;
                a._pos = [t, e, n],
                a._node && (a._panner && !a._panner.pan || l(a, "spatial"),
                void 0 !== a._panner.positionX ? (a._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime),
                a._panner.positionY.setValueAtTime(e, Howler.ctx.currentTime),
                a._panner.positionZ.setValueAtTime(n, Howler.ctx.currentTime)) : a._panner.setPosition(t, e, n)),
                r._emit("pos", a._id)
            }
        }
        return r
    }
    ,
    Howl.prototype.orientation = function(t, e, n, i) {
        var r = this;
        if (!r._webAudio)
            return r;
        if ("loaded" !== r._state)
            return r._queue.push({
                event: "orientation",
                action: function() {
                    r.orientation(t, e, n, i)
                }
            }),
            r;
        if (e = "number" != typeof e ? r._orientation[1] : e,
        n = "number" != typeof n ? r._orientation[2] : n,
        void 0 === i) {
            if ("number" != typeof t)
                return r._orientation;
            r._orientation = [t, e, n]
        }
        for (var o = r._getSoundIds(i), s = 0; s < o.length; s++) {
            var a = r._soundById(o[s]);
            if (a) {
                if ("number" != typeof t)
                    return a._orientation;
                a._orientation = [t, e, n],
                a._node && (a._panner || (a._pos || (a._pos = r._pos || [0, 0, -.5]),
                l(a, "spatial")),
                void 0 !== a._panner.orientationX ? (a._panner.orientationX.setValueAtTime(t, Howler.ctx.currentTime),
                a._panner.orientationY.setValueAtTime(e, Howler.ctx.currentTime),
                a._panner.orientationZ.setValueAtTime(n, Howler.ctx.currentTime)) : a._panner.setOrientation(t, e, n)),
                r._emit("orientation", a._id)
            }
        }
        return r
    }
    ,
    Howl.prototype.pannerAttr = function() {
        var t, e, n, i = this, r = arguments;
        if (!i._webAudio)
            return i;
        if (0 === r.length)
            return i._pannerAttr;
        if (1 === r.length) {
            if ("object" != typeof r[0])
                return (n = i._soundById(parseInt(r[0], 10))) ? n._pannerAttr : i._pannerAttr;
            t = r[0],
            void 0 === e && (t.pannerAttr || (t.pannerAttr = {
                coneInnerAngle: t.coneInnerAngle,
                coneOuterAngle: t.coneOuterAngle,
                coneOuterGain: t.coneOuterGain,
                distanceModel: t.distanceModel,
                maxDistance: t.maxDistance,
                refDistance: t.refDistance,
                rolloffFactor: t.rolloffFactor,
                panningModel: t.panningModel
            }),
            i._pannerAttr = {
                coneInnerAngle: void 0 !== t.pannerAttr.coneInnerAngle ? t.pannerAttr.coneInnerAngle : i._coneInnerAngle,
                coneOuterAngle: void 0 !== t.pannerAttr.coneOuterAngle ? t.pannerAttr.coneOuterAngle : i._coneOuterAngle,
                coneOuterGain: void 0 !== t.pannerAttr.coneOuterGain ? t.pannerAttr.coneOuterGain : i._coneOuterGain,
                distanceModel: void 0 !== t.pannerAttr.distanceModel ? t.pannerAttr.distanceModel : i._distanceModel,
                maxDistance: void 0 !== t.pannerAttr.maxDistance ? t.pannerAttr.maxDistance : i._maxDistance,
                refDistance: void 0 !== t.pannerAttr.refDistance ? t.pannerAttr.refDistance : i._refDistance,
                rolloffFactor: void 0 !== t.pannerAttr.rolloffFactor ? t.pannerAttr.rolloffFactor : i._rolloffFactor,
                panningModel: void 0 !== t.pannerAttr.panningModel ? t.pannerAttr.panningModel : i._panningModel
            })
        } else
            2 === r.length && (t = r[0],
            e = parseInt(r[1], 10));
        for (var o = i._getSoundIds(e), s = 0; s < o.length; s++)
            if (n = i._soundById(o[s])) {
                var a = n._pannerAttr;
                a = {
                    coneInnerAngle: void 0 !== t.coneInnerAngle ? t.coneInnerAngle : a.coneInnerAngle,
                    coneOuterAngle: void 0 !== t.coneOuterAngle ? t.coneOuterAngle : a.coneOuterAngle,
                    coneOuterGain: void 0 !== t.coneOuterGain ? t.coneOuterGain : a.coneOuterGain,
                    distanceModel: void 0 !== t.distanceModel ? t.distanceModel : a.distanceModel,
                    maxDistance: void 0 !== t.maxDistance ? t.maxDistance : a.maxDistance,
                    refDistance: void 0 !== t.refDistance ? t.refDistance : a.refDistance,
                    rolloffFactor: void 0 !== t.rolloffFactor ? t.rolloffFactor : a.rolloffFactor,
                    panningModel: void 0 !== t.panningModel ? t.panningModel : a.panningModel
                };
                var u = n._panner;
                u ? (u.coneInnerAngle = a.coneInnerAngle,
                u.coneOuterAngle = a.coneOuterAngle,
                u.coneOuterGain = a.coneOuterGain,
                u.distanceModel = a.distanceModel,
                u.maxDistance = a.maxDistance,
                u.refDistance = a.refDistance,
                u.rolloffFactor = a.rolloffFactor,
                u.panningModel = a.panningModel) : (n._pos || (n._pos = i._pos || [0, 0, -.5]),
                l(n, "spatial"))
            }
        return i
    }
    ,
    Sound.prototype.init = (n = Sound.prototype.init,
    function() {
        var t = this
          , e = t._parent;
        t._orientation = e._orientation,
        t._stereo = e._stereo,
        t._pos = e._pos,
        t._pannerAttr = e._pannerAttr,
        n.call(this),
        t._stereo ? e.stereo(t._stereo) : t._pos && e.pos(t._pos[0], t._pos[1], t._pos[2], t._id)
    }
    ),
    Sound.prototype.reset = (i = Sound.prototype.reset,
    function() {
        var t = this
          , e = t._parent;
        return t._orientation = e._orientation,
        t._stereo = e._stereo,
        t._pos = e._pos,
        t._pannerAttr = e._pannerAttr,
        t._stereo ? e.stereo(t._stereo) : t._pos ? e.pos(t._pos[0], t._pos[1], t._pos[2], t._id) : t._panner && (t._panner.disconnect(0),
        t._panner = void 0,
        e._refreshBuffer(t)),
        i.call(this)
    }
    );
    var l = function(t, e) {
        "spatial" === (e = e || "spatial") ? (t._panner = Howler.ctx.createPanner(),
        t._panner.coneInnerAngle = t._pannerAttr.coneInnerAngle,
        t._panner.coneOuterAngle = t._pannerAttr.coneOuterAngle,
        t._panner.coneOuterGain = t._pannerAttr.coneOuterGain,
        t._panner.distanceModel = t._pannerAttr.distanceModel,
        t._panner.maxDistance = t._pannerAttr.maxDistance,
        t._panner.refDistance = t._pannerAttr.refDistance,
        t._panner.rolloffFactor = t._pannerAttr.rolloffFactor,
        t._panner.panningModel = t._pannerAttr.panningModel,
        void 0 !== t._panner.positionX ? (t._panner.positionX.setValueAtTime(t._pos[0], Howler.ctx.currentTime),
        t._panner.positionY.setValueAtTime(t._pos[1], Howler.ctx.currentTime),
        t._panner.positionZ.setValueAtTime(t._pos[2], Howler.ctx.currentTime)) : t._panner.setPosition(t._pos[0], t._pos[1], t._pos[2]),
        void 0 !== t._panner.orientationX ? (t._panner.orientationX.setValueAtTime(t._orientation[0], Howler.ctx.currentTime),
        t._panner.orientationY.setValueAtTime(t._orientation[1], Howler.ctx.currentTime),
        t._panner.orientationZ.setValueAtTime(t._orientation[2], Howler.ctx.currentTime)) : t._panner.setOrientation(t._orientation[0], t._orientation[1], t._orientation[2])) : (t._panner = Howler.ctx.createStereoPanner(),
        t._panner.pan.setValueAtTime(t._stereo, Howler.ctx.currentTime)),
        t._panner.connect(t._node),
        t._paused || t._parent.pause(t._id, !0).play(t._id, !0)
    }
}();
