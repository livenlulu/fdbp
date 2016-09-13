/*
 ---- INCLUDED BELOW IS ----
 jQuery JavaScript Library v1.4.4
 http://jquery.com/

 Copyright 2010, John Resig
 Dual licensed under the MIT or GPL Version 2 licenses.
 http://jquery.org/license

 Includes Sizzle.js
 http://sizzlejs.com/
 Copyright 2010, The Dojo Foundation
 Released under the MIT, BSD, and GPL Licenses.

 Date: Thu Nov 11 19:04:53 2010 -0500

 ---- INCLUDED BELOW IS ----
 SWFObject v2.2 <http://code.google.com/p/swfobject/> is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 [Used for video display]

 ---- INCLUDED BELOW IS ----
 jQuery Context Menu Plugin
 Version 1.01
 Cory S.N. LaViska
 More info: http://abeautifulsite.net/2008/09/jquery-context-menu-plugin/
 Plugin is dual-licensed under the GNU General Public License and the MIT License and is copyright A Beautiful Site, LLC

 ---- INCLUDED BELOW IS ----
 jQuery Mousewheel Plugin (jquery.mousewheel.js)
 Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 Licensed under the MIT License.
 Version: 3.0.4
 More info: http://brandonaaron.net/code/mousewheel/docs

 ---- INCLUDED BELOW IS (MODIFIED) ----
 jSwipe - jQuery Plugin
 More info: http://plugins.jquery.com/project/swipe ~~ http://www.ryanscherf.com/demos/swipe/
 Copyright (c) 2009 Ryan Scherf (www.ryanscherf.com)
 Licensed under the MIT license
 Version: 0.1.2

 ---- INCLUDED BELOW IS (MODIFIED) ----
 WP Audio Player
 More info: http://wpaudioplayer.com/
 Copyright (c) 2008 Martin Laine
 Licensed under the MIT license - http://wpaudioplayer.com/license/

 ---- OVERALL SCRIPT IS ----
 DWUser.com EasyRotator script
 (c) Copyright 2010-2015 DWUser.com, All Rights Reserved
 More info: http://www.dwuser.com/easyrotator/
 Update #082514.76

*/
var er_jQueryOrig = window.jQuery;
(function(d, j) {
    function y(a, c, e) {
        if (e === j && 1 === a.nodeType)
            if (e = a.getAttribute("data-" + c), "string" === typeof e) {
                try {
                    e = "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null : !b.isNaN(e) ? parseFloat(e) : fa.test(e) ? b.parseJSON(e) : e
                } catch (f) {}
                b.data(a, c, e)
            } else e = j;
        return e
    }

    function M() {
        return !1
    }

    function la() {
        return !0
    }

    function p(a, c, e) {
        e[0].type = a;
        return b.event.handle.apply(c, e)
    }

    function ia(a) {
        var c, e, f, m, i, w, o, q, d, u, n, z = [];
        m = [];
        i = b.data(this, this.nodeType ? "events" : "__events__");
        "function" === typeof i && (i = i.events);
        if (!(a.liveFired === this || !i || !i.live || a.button && "click" === a.type)) {
            a.namespace && (n = RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
            a.liveFired = this;
            var h = i.live.slice(0);
            for (o = 0; o < h.length; o++) i = h[o], i.origType.replace(ta, "") === a.type ? m.push(i.selector) : h.splice(o--, 1);
            m = b(a.target).closest(m, a.currentTarget);
            q = 0;
            for (d = m.length; q < d; q++) {
                u = m[q];
                for (o = 0; o < h.length; o++)
                    if (i = h[o], u.selector === i.selector && (!n || n.test(i.namespace))) {
                        w = u.elem;
                        f = null;
                        if ("mouseenter" === i.preType ||
                            "mouseleave" === i.preType) a.type = i.preType, f = b(a.relatedTarget).closest(i.selector)[0];
                        (!f || f !== w) && z.push({
                            elem: w,
                            handleObj: i,
                            level: u.level
                        })
                    }
            }
            q = 0;
            for (d = z.length; q < d; q++) {
                m = z[q];
                if (e && m.level > e) break;
                a.currentTarget = m.elem;
                a.data = m.handleObj.data;
                a.handleObj = m.handleObj;
                n = m.handleObj.origHandler.apply(m.elem, arguments);
                if (!1 === n || a.isPropagationStopped())
                    if (e = m.level, !1 === n && (c = !1), a.isImmediatePropagationStopped()) break
            }
            return c
        }
    }

    function G(a, c) {
        return (a && "*" !== a ? a + "." : "") + c.replace(B, "`").replace(ya,
            "&")
    }

    function h(a, c, e) {
        if (b.isFunction(c)) return b.grep(a, function(a, b) {
            return !!c.call(a, b, a) === e
        });
        if (c.nodeType) return b.grep(a, function(a) {
            return a === c === e
        });
        if ("string" === typeof c) {
            var f = b.grep(a, function(a) {
                return 1 === a.nodeType
            });
            if (Ha.test(c)) return b.filter(c, f, !e);
            c = b.filter(c, f)
        }
        return b.grep(a, function(a) {
            return 0 <= b.inArray(a, c) === e
        })
    }

    function g(a, c) {
        var e = 0;
        c.each(function() {
            if (this.nodeName === (a[e] && a[e].nodeName)) {
                var c = b.data(a[e++]),
                    m = b.data(this, c);
                if (c = c && c.events) {
                    delete m.handle;
                    m.events = {};
                    for (var i in c)
                        for (var w in c[i]) b.event.add(this, i, c[i][w], c[i][w].data)
                }
            }
        })
    }

    function k(a, c) {
        c.src ? b.ajax({
            url: c.src,
            async: !1,
            dataType: "script"
        }) : b.globalEval(c.text || c.textContent || c.innerHTML || "");
        c.parentNode && c.parentNode.removeChild(c)
    }

    function P(a, c, e) {
        var f = "width" === c ? a.offsetWidth : a.offsetHeight;
        if ("border" === e) return f;
        b.each("width" === c ? C : H, function() {
            e || (f -= parseFloat(b.css(a, "padding" + this)) || 0);
            f = "margin" === e ? f + (parseFloat(b.css(a, "margin" + this)) || 0) : f - (parseFloat(b.css(a,
                "border" + this + "Width")) || 0)
        });
        return f
    }

    function D(a, c, e, f) {
        b.isArray(c) && c.length ? b.each(c, function(c, i) {
            e || L.test(a) ? f(a, i) : D(a + "[" + ("object" === typeof i || b.isArray(i) ? c : "") + "]", i, e, f)
        }) : !e && null != c && "object" === typeof c ? b.isEmptyObject(c) ? f(a, "") : b.each(c, function(c, b) {
            D(a + "[" + c + "]", b, e, f)
        }) : f(a, c)
    }

    function v(a, c) {
        var e = {};
        b.each(U.concat.apply([], U.slice(0, c)), function() {
            e[this] = a
        });
        return e
    }

    function N(a) {
        if (!S[a]) {
            var c = b("<" + a + ">").appendTo("body"),
                e = c.css("display");
            c.remove();
            if ("none" === e ||
                "" === e) e = "block";
            S[a] = e
        }
        return S[a]
    }

    function A(a) {
        return b.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var l = d.document,
        b = function() {
            function a() {
                if (!c.isReady) {
                    try {
                        l.documentElement.doScroll("left")
                    } catch (b) {
                        setTimeout(a, 1);
                        return
                    }
                    c.ready()
                }
            }
            var c = function(a, b) {
                    return new c.fn.init(a, b)
                },
                b = d.jQuery,
                f = d.$,
                m, i = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
                w = /\S/,
                o = /^\s+/,
                q = /\s+$/,
                u = /\W/,
                n = /\d/,
                z = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                h = /^[\],:{}\s]*$/,
                k = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                g =
                /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                t = /(?:^|:|,)(?:\s*\[)+/g,
                K = /(webkit)[ \/]([\w.]+)/,
                ba = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                Va = /(msie) ([\w.]+)/,
                Wa = /(mozilla)(?:.*? rv:([\w.]+))?/,
                Da = navigator.userAgent,
                Ra = !1,
                Ea = [],
                Y, p = Object.prototype.toString,
                C = Object.prototype.hasOwnProperty,
                Aa = Array.prototype.push,
                E = Array.prototype.slice,
                I = String.prototype.trim,
                P = Array.prototype.indexOf,
                aa = {};
            c.fn = c.prototype = {
                init: function(a, b) {
                    var e, f, ba;
                    if (!a) return this;
                    if (a.nodeType) return this.context =
                        this[0] = a, this.length = 1, this;
                    if ("body" === a && !b && l.body) return this.context = l, this[0] = l.body, this.selector = "body", this.length = 1, this;
                    if ("string" === typeof a) {
                        if ((e = i.exec(a)) && (e[1] || !b)) {
                            if (e[1]) return ba = b ? b.ownerDocument || b : l, (f = z.exec(a)) ? c.isPlainObject(b) ? (a = [l.createElement(f[1])], c.fn.attr.call(a, b, !0)) : a = [ba.createElement(f[1])] : (f = c.buildFragment([e[1]], [ba]), a = (f.cacheable ? f.fragment.cloneNode(!0) : f.fragment).childNodes), c.merge(this, a);
                            if ((f = l.getElementById(e[2])) && f.parentNode) {
                                if (f.id !==
                                    e[2]) return m.find(a);
                                this.length = 1;
                                this[0] = f
                            }
                            this.context = l;
                            this.selector = a;
                            return this
                        }
                        return !b && !u.test(a) ? (this.selector = a, this.context = l, a = l.getElementsByTagName(a), c.merge(this, a)) : !b || b.jquery ? (b || m).find(a) : c(b).find(a)
                    }
                    if (c.isFunction(a)) return m.ready(a);
                    a.selector !== j && (this.selector = a.selector, this.context = a.context);
                    return c.makeArray(a, this)
                },
                selector: "",
                jquery: "1.4.4",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return E.call(this, 0)
                },
                get: function(a) {
                    return null ==
                        a ? this.toArray() : 0 > a ? this.slice(a)[0] : this[a]
                },
                pushStack: function(a, b, e) {
                    var f = c();
                    c.isArray(a) ? Aa.apply(f, a) : c.merge(f, a);
                    f.prevObject = this;
                    f.context = this.context;
                    "find" === b ? f.selector = this.selector + (this.selector ? " " : "") + e : b && (f.selector = this.selector + "." + b + "(" + e + ")");
                    return f
                },
                each: function(a, b) {
                    return c.each(this, a, b)
                },
                ready: function(a) {
                    c.bindReady();
                    c.isReady ? a.call(l, c) : Ea && Ea.push(a);
                    return this
                },
                eq: function(a) {
                    return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(E.apply(this, arguments), "slice", E.call(arguments).join(","))
                },
                map: function(a) {
                    return this.pushStack(c.map(this, function(c, b) {
                        return a.call(c, b, c)
                    }))
                },
                end: function() {
                    return this.prevObject || c(null)
                },
                push: Aa,
                sort: [].sort,
                splice: [].splice
            };
            c.fn.init.prototype = c.fn;
            c.extend = c.fn.extend = function() {
                var a, b, e, f, ba, i = arguments[0] || {},
                    m = 1,
                    q = arguments.length,
                    o = !1;
                "boolean" === typeof i && (o = i, i = arguments[1] || {}, m = 2);
                "object" !== typeof i &&
                    !c.isFunction(i) && (i = {});
                q === m && (i = this, --m);
                for (; m < q; m++)
                    if (null != (a = arguments[m]))
                        for (b in a) e = i[b], f = a[b], i !== f && (o && f && (c.isPlainObject(f) || (ba = c.isArray(f))) ? (ba ? (ba = !1, e = e && c.isArray(e) ? e : []) : e = e && c.isPlainObject(e) ? e : {}, i[b] = c.extend(o, e, f)) : f !== j && (i[b] = f));
                return i
            };
            c.extend({
                noConflict: function(a) {
                    d.$ = f;
                    a && (d.jQuery = b);
                    return c
                },
                isReady: !1,
                readyWait: 1,
                ready: function(a) {
                    !0 === a && c.readyWait--;
                    if (!c.readyWait || !0 !== a && !c.isReady) {
                        if (!l.body) return setTimeout(c.ready, 1);
                        c.isReady = !0;
                        if (!(!0 !==
                                a && 0 < --c.readyWait) && Ea) {
                            var b = 0,
                                e = Ea;
                            for (Ea = null; a = e[b++];) a.call(l, c);
                            c.fn.trigger && c(l).trigger("ready").unbind("ready")
                        }
                    }
                },
                bindReady: function() {
                    if (!Ra) {
                        Ra = !0;
                        if ("complete" === l.readyState) return setTimeout(c.ready, 1);
                        if (l.addEventListener) l.addEventListener("DOMContentLoaded", Y, !1), d.addEventListener("load", c.ready, !1);
                        else if (l.attachEvent) {
                            l.attachEvent("onreadystatechange", Y);
                            d.attachEvent("onload", c.ready);
                            var b = !1;
                            try {
                                b = null == d.frameElement
                            } catch (e) {}
                            l.documentElement.doScroll && b && a()
                        }
                    }
                },
                isFunction: function(a) {
                    return "function" === c.type(a)
                },
                isArray: Array.isArray || function(a) {
                    return "array" === c.type(a)
                },
                isWindow: function(a) {
                    return a && "object" === typeof a && "setInterval" in a
                },
                isNaN: function(a) {
                    return null == a || !n.test(a) || isNaN(a)
                },
                type: function(a) {
                    return null == a ? "" + a : aa[p.call(a)] || "object"
                },
                isPlainObject: function(a) {
                    if (!a || ("object" !== c.type(a) || a.nodeType || c.isWindow(a)) || a.constructor && !C.call(a, "constructor") && !C.call(a.constructor.prototype, "isPrototypeOf")) return !1;
                    for (var b in a);
                    return b === j || C.call(a, b)
                },
                isEmptyObject: function(a) {
                    for (var c in a) return !1;
                    return !0
                },
                error: function(a) {
                    throw a;
                },
                parseJSON: function(a) {
                    if ("string" !== typeof a || !a) return null;
                    a = c.trim(a);
                    if (h.test(a.replace(k, "@").replace(g, "]").replace(t, ""))) return d.JSON && d.JSON.parse ? d.JSON.parse(a) : (new Function("return " + a))();
                    c.error("Invalid JSON: " + a)
                },
                noop: function() {},
                globalEval: function(a) {
                    if (a && w.test(a)) {
                        var b = l.getElementsByTagName("head")[0] || l.documentElement,
                            e = l.createElement("script");
                        e.type = "text/javascript";
                        c.support.scriptEval ? e.appendChild(l.createTextNode(a)) : e.text = a;
                        b.insertBefore(e, b.firstChild);
                        b.removeChild(e)
                    }
                },
                nodeName: function(a, c) {
                    return a.nodeName && a.nodeName.toUpperCase() === c.toUpperCase()
                },
                each: function(a, b, e) {
                    var f, i = 0,
                        ba = a.length,
                        m = ba === j || c.isFunction(a);
                    if (e)
                        if (m)
                            for (f in a) {
                                if (!1 === b.apply(a[f], e)) break
                            } else
                                for (; i < ba && !1 !== b.apply(a[i++], e););
                        else if (m)
                        for (f in a) {
                            if (!1 === b.call(a[f], f, a[f])) break
                        } else
                            for (e = a[0]; i < ba && !1 !== b.call(e, i, e); e = a[++i]);
                    return a
                },
                trim: I ? function(a) {
                    return null ==
                        a ? "" : I.call(a)
                } : function(a) {
                    return null == a ? "" : a.toString().replace(o, "").replace(q, "")
                },
                makeArray: function(a, b) {
                    var e = b || [];
                    if (null != a) {
                        var f = c.type(a);
                        null == a.length || "string" === f || "function" === f || "regexp" === f || c.isWindow(a) ? Aa.call(e, a) : c.merge(e, a)
                    }
                    return e
                },
                inArray: function(a, c) {
                    if (c.indexOf) return c.indexOf(a);
                    for (var b = 0, e = c.length; b < e; b++)
                        if (c[b] === a) return b;
                    return -1
                },
                merge: function(a, c) {
                    var b = a.length,
                        e = 0;
                    if ("number" === typeof c.length)
                        for (var f = c.length; e < f; e++) a[b++] = c[e];
                    else
                        for (; c[e] !==
                            j;) a[b++] = c[e++];
                    a.length = b;
                    return a
                },
                grep: function(a, c, b) {
                    for (var e = [], f, b = !!b, i = 0, ba = a.length; i < ba; i++) f = !!c(a[i], i), b !== f && e.push(a[i]);
                    return e
                },
                map: function(a, c, b) {
                    for (var e = [], f, i = 0, ba = a.length; i < ba; i++) f = c(a[i], i, b), null != f && (e[e.length] = f);
                    return e.concat.apply([], e)
                },
                guid: 1,
                proxy: function(a, b, e) {
                    2 === arguments.length && ("string" === typeof b ? (e = a, a = e[b], b = j) : b && !c.isFunction(b) && (e = b, b = j));
                    !b && a && (b = function() {
                        return a.apply(e || this, arguments)
                    });
                    a && (b.guid = a.guid = a.guid || b.guid || c.guid++);
                    return b
                },
                access: function(a, b, e, f, i, ba) {
                    var m = a.length;
                    if ("object" === typeof b) {
                        for (var q in b) c.access(a, q, b[q], f, i, e);
                        return a
                    }
                    if (e !== j) {
                        f = !ba && f && c.isFunction(e);
                        for (q = 0; q < m; q++) i(a[q], b, f ? e.call(a[q], q, i(a[q], b)) : e, ba);
                        return a
                    }
                    return m ? i(a[0], b) : j
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    a = K.exec(a) || ba.exec(a) || Va.exec(a) || 0 > a.indexOf("compatible") && Wa.exec(a) || [];
                    return {
                        browser: a[1] || "",
                        version: a[2] || "0"
                    }
                },
                browser: {}
            });
            c.each("Boolean Number String Function Array Date RegExp Object".split(" "),
                function(a, c) {
                    aa["[object " + c + "]"] = c.toLowerCase()
                });
            Da = c.uaMatch(Da);
            Da.browser && (c.browser[Da.browser] = !0, c.browser.version = Da.version);
            c.browser.webkit && (c.browser.safari = !0);
            P && (c.inArray = function(a, c) {
                return P.call(c, a)
            });
            /\s/.test("\u00a0") || (o = /^[\s\xA0]+/, q = /[\s\xA0]+$/);
            m = c(l);
            l.addEventListener ? Y = function() {
                l.removeEventListener("DOMContentLoaded", Y, false);
                c.ready()
            } : l.attachEvent && (Y = function() {
                if (l.readyState === "complete") {
                    l.detachEvent("onreadystatechange", Y);
                    c.ready()
                }
            });
            return d.jQuery =
                d.$ = c
        }();
    (function() {
        b.support = {};
        var a = l.documentElement,
            c = l.createElement("script"),
            e = l.createElement("div"),
            f = "script" + b.now();
        e.style.display = "none";
        e.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var m = e.getElementsByTagName("*"),
            i = e.getElementsByTagName("a")[0],
            w = l.createElement("select"),
            o = w.appendChild(l.createElement("option"));
        if (m && m.length && i) {
            b.support = {
                leadingWhitespace: 3 === e.firstChild.nodeType,
                tbody: !e.getElementsByTagName("tbody").length,
                htmlSerialize: !!e.getElementsByTagName("link").length,
                style: /red/.test(i.getAttribute("style")),
                hrefNormalized: "/a" === i.getAttribute("href"),
                opacity: /^0.55$/.test(i.style.opacity),
                cssFloat: !!i.style.cssFloat,
                checkOn: "on" === e.getElementsByTagName("input")[0].value,
                optSelected: o.selected,
                deleteExpando: !0,
                optDisabled: !1,
                checkClone: !1,
                scriptEval: !1,
                noCloneEvent: !0,
                boxModel: null,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableHiddenOffsets: !0
            };
            w.disabled = !0;
            b.support.optDisabled = !o.disabled;
            c.type =
                "text/javascript";
            try {
                c.appendChild(l.createTextNode("window." + f + "=1;"))
            } catch (q) {}
            a.insertBefore(c, a.firstChild);
            d[f] && (b.support.scriptEval = !0, delete d[f]);
            try {
                delete c.test
            } catch (u) {
                b.support.deleteExpando = !1
            }
            a.removeChild(c);
            e.attachEvent && e.fireEvent && (e.attachEvent("onclick", function Ua() {
                b.support.noCloneEvent = false;
                e.detachEvent("onclick", Ua)
            }), e.cloneNode(!0).fireEvent("onclick"));
            e = l.createElement("div");
            e.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            a = l.createDocumentFragment();
            a.appendChild(e.firstChild);
            b.support.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
            b(function() {
                var a = l.createElement("div");
                a.style.width = a.style.paddingLeft = "1px";
                l.body.appendChild(a);
                b.boxModel = b.support.boxModel = a.offsetWidth === 2;
                if ("zoom" in a.style) {
                    a.style.display = "inline";
                    a.style.zoom = 1;
                    b.support.inlineBlockNeedsLayout = a.offsetWidth === 2;
                    a.style.display = "";
                    a.innerHTML = "<div style='width:4px;'></div>";
                    b.support.shrinkWrapBlocks = a.offsetWidth !== 2
                }
                a.innerHTML = "<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";
                var c = a.getElementsByTagName("td");
                b.support.reliableHiddenOffsets = c[0].offsetHeight === 0;
                c[0].style.display = "";
                c[1].style.display = "none";
                b.support.reliableHiddenOffsets = b.support.reliableHiddenOffsets && c[0].offsetHeight === 0;
                a.innerHTML = "";
                l.body.removeChild(a).style.display = "none"
            });
            a = function(a) {
                var c = l.createElement("div"),
                    a = "on" + a,
                    b = a in c;
                if (!b) {
                    c.setAttribute(a, "return;");
                    b = typeof c[a] === "function"
                }
                return b
            };
            b.support.submitBubbles = a("submit");
            b.support.changeBubbles = a("change");
            a = c = e = m = i = null
        }
    })();
    var F = {},
        fa = /^(?:\{.*\}|\[.*\])$/;
    b.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + b.now(),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        data: function(a, c, e) {
            if (b.acceptData(a)) {
                var a = a == d ? F : a,
                    f = a.nodeType,
                    m = f ? a[b.expando] : null,
                    i = b.cache;
                if (!f || m || !("string" === typeof c && e === j)) return f ? m || (a[b.expando] = m = ++b.uuid) : i = a, "object" === typeof c ? f ? i[m] = b.extend(i[m], c) : b.extend(i, c) : f && !i[m] && (i[m] = {}), a = f ? i[m] : i, e !== j && (a[c] = e), "string" === typeof c ? a[c] : a
            }
        },
        removeData: function(a,
            c) {
            if (b.acceptData(a)) {
                var a = a == d ? F : a,
                    e = a.nodeType,
                    f = e ? a[b.expando] : a,
                    m = b.cache,
                    i = e ? m[f] : f;
                if (c) i && (delete i[c], e && b.isEmptyObject(i) && b.removeData(a));
                else if (e && b.support.deleteExpando) delete a[b.expando];
                else if (a.removeAttribute) a.removeAttribute(b.expando);
                else if (e) delete m[f];
                else
                    for (var w in a) delete a[w]
            }
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var c = b.noData[a.nodeName.toLowerCase()];
                if (c) return !(!0 === c || a.getAttribute("classid") !== c)
            }
            return !0
        }
    });
    b.fn.extend({
        data: function(a, c) {
            var e = null;
            if ("undefined" === typeof a) {
                if (this.length)
                    for (var f = this[0].attributes, m, e = b.data(this[0]), i = 0, w = f.length; i < w; i++) m = f[i].name, 0 === m.indexOf("data-") && (m = m.substr(5), y(this[0], m, e[m]));
                return e
            }
            if ("object" === typeof a) return this.each(function() {
                b.data(this, a)
            });
            var o = a.split(".");
            o[1] = o[1] ? "." + o[1] : "";
            return c === j ? (e = this.triggerHandler("getData" + o[1] + "!", [o[0]]), e === j && this.length && (e = b.data(this[0], a), e = y(this[0], a, e)), e === j && o[1] ? this.data(o[0]) : e) : this.each(function() {
                var e = b(this),
                    f = [o[0], c];
                e.triggerHandler("setData" + o[1] + "!", f);
                b.data(this, a, c);
                e.triggerHandler("changeData" + o[1] + "!", f)
            })
        },
        removeData: function(a) {
            return this.each(function() {
                b.removeData(this, a)
            })
        }
    });
    b.extend({
        queue: function(a, c, e) {
            if (a) {
                var c = (c || "fx") + "queue",
                    f = b.data(a, c);
                if (!e) return f || [];
                !f || b.isArray(e) ? f = b.data(a, c, b.makeArray(e)) : f.push(e);
                return f
            }
        },
        dequeue: function(a, c) {
            var c = c || "fx",
                e = b.queue(a, c),
                f = e.shift();
            "inprogress" === f && (f = e.shift());
            f && ("fx" === c && e.unshift("inprogress"), f.call(a, function() {
                b.dequeue(a,
                    c)
            }))
        }
    });
    b.fn.extend({
        queue: function(a, c) {
            "string" !== typeof a && (c = a, a = "fx");
            return c === j ? b.queue(this[0], a) : this.each(function() {
                var e = b.queue(this, a, c);
                a === "fx" && e[0] !== "inprogress" && b.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                b.dequeue(this, a)
            })
        },
        delay: function(a, c) {
            a = b.fx ? b.fx.speeds[a] || a : a;
            c = c || "fx";
            return this.queue(c, function() {
                var e = this;
                setTimeout(function() {
                    b.dequeue(e, c)
                }, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        }
    });
    var ga = /[\n\t]/g,
        ua = /\s+/,
        W =
        /\r/g,
        s = /^(?:href|src|style)$/,
        $ = /^(?:button|input)$/i,
        I = /^(?:button|input|object|select|textarea)$/i,
        za = /^a(?:rea)?$/i,
        pa = /^(?:radio|checkbox)$/i;
    b.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    b.fn.extend({
        attr: function(a, c) {
            return b.access(this, a, c, !0, b.attr)
        },
        removeAttr: function(a) {
            return this.each(function() {
                b.attr(this, a, "");
                1 ===
                    this.nodeType && this.removeAttribute(a)
            })
        },
        addClass: function(a) {
            if (b.isFunction(a)) return this.each(function(c) {
                var e = b(this);
                e.addClass(a.call(this, c, e.attr("class")))
            });
            if (a && "string" === typeof a)
                for (var c = (a || "").split(ua), e = 0, f = this.length; e < f; e++) {
                    var m = this[e];
                    if (1 === m.nodeType)
                        if (m.className) {
                            for (var i = " " + m.className + " ", w = m.className, o = 0, q = c.length; o < q; o++) 0 > i.indexOf(" " + c[o] + " ") && (w += " " + c[o]);
                            m.className = b.trim(w)
                        } else m.className = a
                }
            return this
        },
        removeClass: function(a) {
            if (b.isFunction(a)) return this.each(function(c) {
                var e =
                    b(this);
                e.removeClass(a.call(this, c, e.attr("class")))
            });
            if (a && "string" === typeof a || a === j)
                for (var c = (a || "").split(ua), e = 0, f = this.length; e < f; e++) {
                    var m = this[e];
                    if (1 === m.nodeType && m.className)
                        if (a) {
                            for (var i = (" " + m.className + " ").replace(ga, " "), w = 0, o = c.length; w < o; w++) i = i.replace(" " + c[w] + " ", " ");
                            m.className = b.trim(i)
                        } else m.className = ""
                }
            return this
        },
        toggleClass: function(a, c) {
            var e = typeof a,
                f = "boolean" === typeof c;
            return b.isFunction(a) ? this.each(function(e) {
                var f = b(this);
                f.toggleClass(a.call(this, e,
                    f.attr("class"), c), c)
            }) : this.each(function() {
                if ("string" === e)
                    for (var m, i = 0, w = b(this), o = c, q = a.split(ua); m = q[i++];) o = f ? o : !w.hasClass(m), w[o ? "addClass" : "removeClass"](m);
                else if ("undefined" === e || "boolean" === e) this.className && b.data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : b.data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            for (var a = " " + a + " ", c = 0, b = this.length; c < b; c++)
                if (-1 < (" " + this[c].className + " ").replace(ga, " ").indexOf(a)) return !0;
            return !1
        },
        val: function(a) {
            if (!arguments.length) {
                var c =
                    this[0];
                if (c) {
                    if (b.nodeName(c, "option")) {
                        var e = c.attributes.value;
                        return !e || e.specified ? c.value : c.text
                    }
                    if (b.nodeName(c, "select")) {
                        var f = c.selectedIndex,
                            e = [],
                            m = c.options,
                            c = "select-one" === c.type;
                        if (0 > f) return null;
                        for (var i = c ? f : 0, f = c ? f + 1 : m.length; i < f; i++) {
                            var w = m[i];
                            if (w.selected && (b.support.optDisabled ? !w.disabled : null === w.getAttribute("disabled")) && (!w.parentNode.disabled || !b.nodeName(w.parentNode, "optgroup"))) {
                                a = b(w).val();
                                if (c) return a;
                                e.push(a)
                            }
                        }
                        return e
                    }
                    return pa.test(c.type) && !b.support.checkOn ?
                        null === c.getAttribute("value") ? "on" : c.value : (c.value || "").replace(W, "")
                }
                return j
            }
            var o = b.isFunction(a);
            return this.each(function(c) {
                var e = b(this),
                    f = a;
                if (1 === this.nodeType)
                    if (o && (f = a.call(this, c, e.val())), null == f ? f = "" : "number" === typeof f ? f += "" : b.isArray(f) && (f = b.map(f, function(a) {
                            return a == null ? "" : a + ""
                        })), b.isArray(f) && pa.test(this.type)) this.checked = 0 <= b.inArray(e.val(), f);
                    else if (b.nodeName(this, "select")) {
                    var i = b.makeArray(f);
                    b("option", this).each(function() {
                        this.selected = 0 <= b.inArray(b(this).val(),
                            i)
                    });
                    i.length || (this.selectedIndex = -1)
                } else this.value = f
            })
        }
    });
    b.extend({
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, e, f) {
            if (!a || 3 === a.nodeType || 8 === a.nodeType) return j;
            if (f && c in b.attrFn) return b(a)[c](e);
            var f = 1 !== a.nodeType || !b.isXMLDoc(a),
                m = e !== j,
                c = f && b.props[c] || c,
                i = s.test(c);
            if ((c in a || a[c] !== j) && f && !i) return m && ("type" === c && $.test(a.nodeName) && a.parentNode && b.error("type property can't be changed"), null === e ? 1 === a.nodeType && a.removeAttribute(c) :
                a[c] = e), b.nodeName(a, "form") && a.getAttributeNode(c) ? a.getAttributeNode(c).nodeValue : "tabIndex" === c ? (c = a.getAttributeNode("tabIndex")) && c.specified ? c.value : I.test(a.nodeName) || za.test(a.nodeName) && a.href ? 0 : j : a[c];
            if (!b.support.style && f && "style" === c) return m && (a.style.cssText = "" + e), a.style.cssText;
            m && a.setAttribute(c, "" + e);
            if (!a.attributes[c] && a.hasAttribute && !a.hasAttribute(c)) return j;
            a = !b.support.hrefNormalized && f && i ? a.getAttribute(c, 2) : a.getAttribute(c);
            return null === a ? j : a
        }
    });
    var ta = /\.(.*)$/,
        ra =
        /^(?:textarea|input|select)$/i,
        B = /\./g,
        ya = / /g,
        Fa = /[^\w\s.|`]/g,
        ja = function(a) {
            return a.replace(Fa, "\\$&")
        },
        ca = {
            focusin: 0,
            focusout: 0
        };
    b.event = {
        add: function(a, c, e, f) {
            if (!(3 === a.nodeType || 8 === a.nodeType)) {
                b.isWindow(a) && (a !== d && !a.frameElement) && (a = d);
                if (!1 === e) e = M;
                else if (!e) return;
                var m, i;
                e.handler && (m = e, e = m.handler);
                e.guid || (e.guid = b.guid++);
                if (i = b.data(a)) {
                    var w = a.nodeType ? "events" : "__events__",
                        o = i[w],
                        q = i.handle;
                    "function" === typeof o ? (q = o.handle, o = o.events) : o || (a.nodeType || (i[w] = i = function() {}),
                        i.events = o = {});
                    q || (i.handle = q = function() {
                        return typeof b !== "undefined" && !b.event.triggered ? b.event.handle.apply(q.elem, arguments) : j
                    });
                    q.elem = a;
                    for (var c = c.split(" "), u = 0, n; w = c[u++];) {
                        i = m ? b.extend({}, m) : {
                            handler: e,
                            data: f
                        }; - 1 < w.indexOf(".") ? (n = w.split("."), w = n.shift(), i.namespace = n.slice(0).sort().join(".")) : (n = [], i.namespace = "");
                        i.type = w;
                        i.guid || (i.guid = e.guid);
                        var z = o[w],
                            h = b.event.special[w] || {};
                        if (!z && (z = o[w] = [], !h.setup || !1 === h.setup.call(a, f, n, q))) a.addEventListener ? a.addEventListener(w, q, !1) :
                            a.attachEvent && a.attachEvent("on" + w, q);
                        h.add && (h.add.call(a, i), i.handler.guid || (i.handler.guid = e.guid));
                        z.push(i);
                        b.event.global[w] = !0
                    }
                    a = null
                }
            }
        },
        global: {},
        remove: function(a, c, e, f) {
            if (!(3 === a.nodeType || 8 === a.nodeType)) {
                !1 === e && (e = M);
                var m, i, w = 0,
                    o, q, d, u, n, h, z = a.nodeType ? "events" : "__events__",
                    k = b.data(a),
                    g = k && k[z];
                if (k && g)
                    if ("function" === typeof g && (k = g, g = g.events), c && c.type && (e = c.handler, c = c.type), !c || "string" === typeof c && "." === c.charAt(0))
                        for (m in c = c || "", g) b.event.remove(a, m + c);
                    else {
                        for (c = c.split(" "); m =
                            c[w++];)
                            if (u = m, o = 0 > m.indexOf("."), q = [], o || (q = m.split("."), m = q.shift(), d = RegExp("(^|\\.)" + b.map(q.slice(0).sort(), ja).join("\\.(?:.*\\.)?") + "(\\.|$)")), n = g[m])
                                if (e) {
                                    u = b.event.special[m] || {};
                                    for (i = f || 0; i < n.length; i++)
                                        if (h = n[i], e.guid === h.guid) {
                                            if (o || d.test(h.namespace)) null == f && n.splice(i--, 1), u.remove && u.remove.call(a, h);
                                            if (null != f) break
                                        }
                                    if (0 === n.length || null != f && 1 === n.length)(!u.teardown || !1 === u.teardown.call(a, q)) && b.removeEvent(a, m, k.handle), delete g[m]
                                } else
                                    for (i = 0; i < n.length; i++)
                                        if (h = n[i], o ||
                                            d.test(h.namespace)) b.event.remove(a, u, h.handler, i), n.splice(i--, 1);
                        if (b.isEmptyObject(g)) {
                            if (c = k.handle) c.elem = null;
                            delete k.events;
                            delete k.handle;
                            "function" === typeof k ? b.removeData(a, z) : b.isEmptyObject(k) && b.removeData(a)
                        }
                    }
            }
        },
        trigger: function(a, c, e, f) {
            var m = a.type || a;
            if (!f) {
                a = "object" === typeof a ? a[b.expando] ? a : b.extend(b.Event(m), a) : b.Event(m);
                0 <= m.indexOf("!") && (a.type = m = m.slice(0, -1), a.exclusive = !0);
                e || (a.stopPropagation(), b.event.global[m] && b.each(b.cache, function() {
                    this.events && this.events[m] &&
                        b.event.trigger(a, c, this.handle.elem)
                }));
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return j;
                a.result = j;
                a.target = e;
                c = b.makeArray(c);
                c.unshift(a)
            }
            a.currentTarget = e;
            (f = e.nodeType ? b.data(e, "handle") : (b.data(e, "__events__") || {}).handle) && f.apply(e, c);
            f = e.parentNode || e.ownerDocument;
            try {
                if ((!e || !e.nodeName || !b.noData[e.nodeName.toLowerCase()]) && e["on" + m] && !1 === e["on" + m].apply(e, c)) a.result = !1, a.preventDefault()
            } catch (i) {}
            if (!a.isPropagationStopped() && f) b.event.trigger(a, c, f, !0);
            else if (!a.isDefaultPrevented()) {
                var d,
                    f = a.target,
                    o = m.replace(ta, ""),
                    q = b.nodeName(f, "a") && "click" === o,
                    u = b.event.special[o] || {};
                if ((!u._default || !1 === u._default.call(e, a)) && !q && (!f || !f.nodeName || !b.noData[f.nodeName.toLowerCase()])) {
                    try {
                        if (f[o]) {
                            if (d = f["on" + o]) f["on" + o] = null;
                            b.event.triggered = !0;
                            f[o]()
                        }
                    } catch (n) {}
                    d && (f["on" + o] = d);
                    b.event.triggered = !1
                }
            }
        },
        handle: function(a) {
            var c, e, f, m;
            e = [];
            var i = b.makeArray(arguments),
                a = i[0] = b.event.fix(a || d.event);
            a.currentTarget = this;
            c = 0 > a.type.indexOf(".") && !a.exclusive;
            c || (f = a.type.split("."), a.type =
                f.shift(), e = f.slice(0).sort(), f = RegExp("(^|\\.)" + e.join("\\.(?:.*\\.)?") + "(\\.|$)"));
            a.namespace = a.namespace || e.join(".");
            m = b.data(this, this.nodeType ? "events" : "__events__");
            "function" === typeof m && (m = m.events);
            e = (m || {})[a.type];
            if (m && e) {
                e = e.slice(0);
                m = 0;
                for (var w = e.length; m < w; m++) {
                    var o = e[m];
                    if (c || f.test(o.namespace))
                        if (a.handler = o.handler, a.data = o.data, a.handleObj = o, o = o.handler.apply(this, i), o !== j && (a.result = o, !1 === o && (a.preventDefault(), a.stopPropagation())), a.isImmediatePropagationStopped()) break
                }
            }
            return a.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function(a) {
            if (a[b.expando]) return a;
            for (var c = a, a = b.Event(c), e = this.props.length, f; e;) f = this.props[--e], a[f] = c[f];
            a.target || (a.target = a.srcElement || l);
            3 === a.target.nodeType &&
                (a.target = a.target.parentNode);
            !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
            null == a.pageX && null != a.clientX && (c = l.documentElement, e = l.body, a.pageX = a.clientX + (c && c.scrollLeft || e && e.scrollLeft || 0) - (c && c.clientLeft || e && e.clientLeft || 0), a.pageY = a.clientY + (c && c.scrollTop || e && e.scrollTop || 0) - (c && c.clientTop || e && e.clientTop || 0));
            if (null == a.which && (null != a.charCode || null != a.keyCode)) a.which = null != a.charCode ? a.charCode : a.keyCode;
            !a.metaKey && a.ctrlKey &&
                (a.metaKey = a.ctrlKey);
            !a.which && a.button !== j && (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
            return a
        },
        guid: 1E8,
        proxy: b.proxy,
        special: {
            ready: {
                setup: b.bindReady,
                teardown: b.noop
            },
            live: {
                add: function(a) {
                    b.event.add(this, G(a.origType, a.selector), b.extend({}, a, {
                        handler: ia,
                        guid: a.handler.guid
                    }))
                },
                remove: function(a) {
                    b.event.remove(this, G(a.origType, a.selector), a)
                }
            },
            beforeunload: {
                setup: function(a, c, e) {
                    b.isWindow(this) && (this.onbeforeunload = e)
                },
                teardown: function(a, c) {
                    this.onbeforeunload === c && (this.onbeforeunload =
                        null)
                }
            }
        }
    };
    b.removeEvent = l.removeEventListener ? function(a, c, b) {
        a.removeEventListener && a.removeEventListener(c, b, !1)
    } : function(a, c, b) {
        a.detachEvent && a.detachEvent("on" + c, b)
    };
    b.Event = function(a) {
        if (!this.preventDefault) return new b.Event(a);
        a && a.type ? (this.originalEvent = a, this.type = a.type) : this.type = a;
        this.timeStamp = b.now();
        this[b.expando] = !0
    };
    b.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = la;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped =
                la;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = la;
            this.stopPropagation()
        },
        isDefaultPrevented: M,
        isPropagationStopped: M,
        isImmediatePropagationStopped: M
    };
    var ma = function(a) {
            var c = a.relatedTarget;
            try {
                for (; c && c !== this;) c = c.parentNode;
                c !== this && (a.type = a.data, b.event.handle.apply(this, arguments))
            } catch (e) {}
        },
        J = function(a) {
            a.type = a.data;
            b.event.handle.apply(this, arguments)
        };
    b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, c) {
        b.event.special[a] = {
            setup: function(e) {
                b.event.add(this, c, e && e.selector ? J : ma, a)
            },
            teardown: function(a) {
                b.event.remove(this, c, a && a.selector ? J : ma)
            }
        }
    });
    b.support.submitBubbles || (b.event.special.submit = {
        setup: function() {
            if ("form" !== this.nodeName.toLowerCase()) b.event.add(this, "click.specialSubmit", function(a) {
                var c = a.target,
                    e = c.type;
                if (("submit" === e || "image" === e) && b(c).closest("form").length) return a.liveFired = j, p("submit", this, arguments)
            }), b.event.add(this, "keypress.specialSubmit",
                function(a) {
                    var c = a.target,
                        e = c.type;
                    if (("text" === e || "password" === e) && b(c).closest("form").length && 13 === a.keyCode) return a.liveFired = j, p("submit", this, arguments)
                });
            else return !1
        },
        teardown: function() {
            b.event.remove(this, ".specialSubmit")
        }
    });
    if (!b.support.changeBubbles) {
        var ka, V = function(a) {
                var c = a.type,
                    e = a.value;
                if (c === "radio" || c === "checkbox") e = a.checked;
                else if (c === "select-multiple") e = a.selectedIndex > -1 ? b.map(a.options, function(a) {
                    return a.selected
                }).join("-") : "";
                else if (a.nodeName.toLowerCase() ===
                    "select") e = a.selectedIndex;
                return e
            },
            r = function(a, c) {
                var e = a.target,
                    f, m;
                if (ra.test(e.nodeName) && !e.readOnly) {
                    f = b.data(e, "_change_data");
                    m = V(e);
                    (a.type !== "focusout" || e.type !== "radio") && b.data(e, "_change_data", m);
                    if (!(f === j || m === f))
                        if (f != null || m) {
                            a.type = "change";
                            a.liveFired = j;
                            return b.event.trigger(a, c, e)
                        }
                }
            };
        b.event.special.change = {
            filters: {
                focusout: r,
                beforedeactivate: r,
                click: function(a) {
                    var c = a.target,
                        b = c.type;
                    if (b === "radio" || b === "checkbox" || c.nodeName.toLowerCase() === "select") return r.call(this, a)
                },
                keydown: function(a) {
                    var c = a.target,
                        b = c.type;
                    if (a.keyCode === 13 && c.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (b === "checkbox" || b === "radio") || b === "select-multiple") return r.call(this, a)
                },
                beforeactivate: function(a) {
                    a = a.target;
                    b.data(a, "_change_data", V(a))
                }
            },
            setup: function() {
                if (this.type === "file") return false;
                for (var a in ka) b.event.add(this, a + ".specialChange", ka[a]);
                return ra.test(this.nodeName)
            },
            teardown: function() {
                b.event.remove(this, ".specialChange");
                return ra.test(this.nodeName)
            }
        };
        ka = b.event.special.change.filters;
        ka.focus = ka.beforeactivate
    }
    l.addEventListener && b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, c) {
        function e(a) {
            a = b.event.fix(a);
            a.type = c;
            return b.event.trigger(a, null, a.target)
        }
        b.event.special[c] = {
            setup: function() {
                ca[c]++ === 0 && l.addEventListener(a, e, true)
            },
            teardown: function() {
                --ca[c] === 0 && l.removeEventListener(a, e, true)
            }
        }
    });
    b.each(["bind", "one"], function(a, c) {
        b.fn[c] = function(a, f, m) {
            if (typeof a === "object") {
                for (var i in a) this[c](i, f, a[i], m);
                return this
            }
            if (b.isFunction(f) || f === false) {
                m = f;
                f = j
            }
            var d =
                c === "one" ? b.proxy(m, function(a) {
                    b(this).unbind(a, d);
                    return m.apply(this, arguments)
                }) : m;
            if (a === "unload" && c !== "one") this.one(a, f, m);
            else {
                i = 0;
                for (var o = this.length; i < o; i++) b.event.add(this[i], a, d, f)
            }
            return this
        }
    });
    b.fn.extend({
        unbind: function(a, c) {
            if (typeof a === "object" && !a.preventDefault)
                for (var e in a) this.unbind(e, a[e]);
            else {
                e = 0;
                for (var f = this.length; e < f; e++) b.event.remove(this[e], a, c)
            }
            return this
        },
        delegate: function(a, c, b, f) {
            return this.live(c, b, f, a)
        },
        undelegate: function(a, c, b) {
            return arguments.length ===
                0 ? this.unbind("live") : this.die(c, null, b, a)
        },
        trigger: function(a, c) {
            return this.each(function() {
                b.event.trigger(a, c, this)
            })
        },
        triggerHandler: function(a, c) {
            if (this[0]) {
                var e = b.Event(a);
                e.preventDefault();
                e.stopPropagation();
                b.event.trigger(e, c, this[0]);
                return e.result
            }
        },
        toggle: function(a) {
            for (var c = arguments, e = 1; e < c.length;) b.proxy(a, c[e++]);
            return this.click(b.proxy(a, function(f) {
                var m = (b.data(this, "lastToggle" + a.guid) || 0) % e;
                b.data(this, "lastToggle" + a.guid, m + 1);
                f.preventDefault();
                return c[m].apply(this,
                    arguments) || false
            }))
        },
        hover: function(a, c) {
            return this.mouseenter(a).mouseleave(c || a)
        }
    });
    var z = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    b.each(["live", "die"], function(a, c) {
        b.fn[c] = function(a, f, m, i) {
            var d, o = 0,
                q, u, n = i || this.selector,
                i = i ? this : b(this.context);
            if (typeof a === "object" && !a.preventDefault) {
                for (d in a) i[c](d, f, a[d], n);
                return this
            }
            if (b.isFunction(f)) {
                m = f;
                f = j
            }
            for (a = (a || "").split(" ");
                (d = a[o++]) != null;) {
                q = ta.exec(d);
                u = "";
                if (q) {
                    u = q[0];
                    d = d.replace(ta, "")
                }
                if (d ===
                    "hover") a.push("mouseenter" + u, "mouseleave" + u);
                else {
                    q = d;
                    if (d === "focus" || d === "blur") {
                        a.push(z[d] + u);
                        d = d + u
                    } else d = (z[d] || d) + u;
                    if (c === "live") {
                        u = 0;
                        for (var h = i.length; u < h; u++) b.event.add(i[u], "live." + G(d, n), {
                            data: f,
                            selector: n,
                            handler: m,
                            origType: d,
                            origHandler: m,
                            preType: q
                        })
                    } else i.unbind("live." + G(d, n), m)
                }
            }
            return this
        }
    });
    b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
        function(a, c) {
            b.fn[c] = function(a, b) {
                if (b == null) {
                    b = a;
                    a = null
                }
                return arguments.length > 0 ? this.bind(c, a, b) : this.trigger(c)
            };
            b.attrFn && (b.attrFn[c] = true)
        });
    d.attachEvent && !d.addEventListener && b(d).bind("unload", function() {
        for (var a in b.cache)
            if (b.cache[a].handle) try {
                b.event.remove(b.cache[a].handle.elem)
            } catch (c) {}
    });
    (function() {
        function a(a, c, b, e, f, i) {
            for (var f = 0, m = e.length; f < m; f++) {
                var q = e[f];
                if (q) {
                    for (var d = false, q = q[a]; q;) {
                        if (q.sizcache === b) {
                            d = e[q.sizset];
                            break
                        }
                        if (q.nodeType === 1 && !i) {
                            q.sizcache = b;
                            q.sizset = f
                        }
                        if (q.nodeName.toLowerCase() === c) {
                            d = q;
                            break
                        }
                        q = q[a]
                    }
                    e[f] = d
                }
            }
        }

        function c(a, c, b, e, f, i) {
            for (var f = 0, m = e.length; f < m; f++) {
                var q = e[f];
                if (q) {
                    for (var d = false, q = q[a]; q;) {
                        if (q.sizcache === b) {
                            d = e[q.sizset];
                            break
                        }
                        if (q.nodeType === 1) {
                            if (!i) {
                                q.sizcache = b;
                                q.sizset = f
                            }
                            if (typeof c !== "string") {
                                if (q === c) {
                                    d = true;
                                    break
                                }
                            } else if (o.filter(c, [q]).length > 0) {
                                d = q;
                                break
                            }
                        }
                        q = q[a]
                    }
                    e[f] = d
                }
            }
        }
        var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            f = 0,
            m = Object.prototype.toString,
            i = false,
            d = true;
        [0, 0].sort(function() {
            d = false;
            return 0
        });
        var o = function(a, c, b, f) {
            var b = b || [],
                i = c = c || l;
            if (c.nodeType !== 1 && c.nodeType !== 9) return [];
            if (!a || typeof a !== "string") return b;
            var d, w, n, h, k, g = true,
                t = o.isXML(c),
                T = [],
                Y = a;
            do {
                e.exec("");
                if (d = e.exec(Y)) {
                    Y = d[3];
                    T.push(d[1]);
                    if (d[2]) {
                        h = d[3];
                        break
                    }
                }
            } while (d);
            if (T.length > 1 && u.exec(a))
                if (T.length === 2 && q.relative[T[0]]) w = K(T[0] + T[1], c);
                else
                    for (w = q.relative[T[0]] ? [c] : o(T.shift(), c); T.length;) {
                        a = T.shift();
                        q.relative[a] && (a =
                            a + T.shift());
                        w = K(a, w)
                    } else {
                        if (!f && T.length > 1 && c.nodeType === 9 && !t && q.match.ID.test(T[0]) && !q.match.ID.test(T[T.length - 1])) {
                            d = o.find(T.shift(), c, t);
                            c = d.expr ? o.filter(d.expr, d.set)[0] : d.set[0]
                        }
                        if (c) {
                            d = f ? {
                                expr: T.pop(),
                                set: z(f)
                            } : o.find(T.pop(), T.length === 1 && (T[0] === "~" || T[0] === "+") && c.parentNode ? c.parentNode : c, t);
                            w = d.expr ? o.filter(d.expr, d.set) : d.set;
                            for (T.length > 0 ? n = z(w) : g = false; T.length;) {
                                d = k = T.pop();
                                q.relative[k] ? d = T.pop() : k = "";
                                d == null && (d = c);
                                q.relative[k](n, d, t)
                            }
                        } else n = []
                    }
                n || (n = w);
            n || o.error(k || a);
            if (m.call(n) === "[object Array]")
                if (g)
                    if (c && c.nodeType === 1)
                        for (a = 0; n[a] != null; a++) n[a] && (n[a] === true || n[a].nodeType === 1 && o.contains(c, n[a])) && b.push(w[a]);
                    else
                        for (a = 0; n[a] != null; a++) n[a] && n[a].nodeType === 1 && b.push(w[a]);
            else b.push.apply(b, n);
            else z(n, b);
            if (h) {
                o(h, i, b, f);
                o.uniqueSort(b)
            }
            return b
        };
        o.uniqueSort = function(a) {
            if (g) {
                i = d;
                a.sort(g);
                if (i)
                    for (var c = 1; c < a.length; c++) a[c] === a[c - 1] && a.splice(c--, 1)
            }
            return a
        };
        o.matches = function(a, c) {
            return o(a, null, null, c)
        };
        o.matchesSelector = function(a, c) {
            return o(c,
                null, null, [a]).length > 0
        };
        o.find = function(a, c, b) {
            var e;
            if (!a) return [];
            for (var f = 0, i = q.order.length; f < i; f++) {
                var m, d = q.order[f];
                if (m = q.leftMatch[d].exec(a)) {
                    var o = m[1];
                    m.splice(1, 1);
                    if (o.substr(o.length - 1) !== "\\") {
                        m[1] = (m[1] || "").replace(/\\/g, "");
                        e = q.find[d](m, c, b);
                        if (e != null) {
                            a = a.replace(q.match[d], "");
                            break
                        }
                    }
                }
            }
            e || (e = c.getElementsByTagName("*"));
            return {
                set: e,
                expr: a
            }
        };
        o.filter = function(a, c, b, e) {
            for (var f, i, m = a, d = [], n = c, w = c && c[0] && o.isXML(c[0]); a && c.length;) {
                for (var u in q.filter)
                    if ((f = q.leftMatch[u].exec(a)) !=
                        null && f[2]) {
                        var h, z, k = q.filter[u];
                        z = f[1];
                        i = false;
                        f.splice(1, 1);
                        if (z.substr(z.length - 1) !== "\\") {
                            n === d && (d = []);
                            if (q.preFilter[u])
                                if (f = q.preFilter[u](f, n, b, d, e, w)) {
                                    if (f === true) continue
                                } else i = h = true;
                            if (f)
                                for (var g = 0;
                                    (z = n[g]) != null; g++)
                                    if (z) {
                                        h = k(z, f, g, n);
                                        var T = e ^ !!h;
                                        if (b && h != null) T ? i = true : n[g] = false;
                                        else if (T) {
                                            d.push(z);
                                            i = true
                                        }
                                    }
                            if (h !== j) {
                                b || (n = d);
                                a = a.replace(q.match[u], "");
                                if (!i) return [];
                                break
                            }
                        }
                    }
                if (a === m)
                    if (i == null) o.error(a);
                    else break;
                m = a
            }
            return n
        };
        o.error = function(a) {
            throw "Syntax error, unrecognized expression: " +
                a;
        };
        var q = o.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function(a) {
                        return a.getAttribute("href")
                    }
                },
                relative: {
                    "+": function(a, c) {
                        var b = typeof c === "string",
                            e = b && !/\W/.test(c),
                            b = b && !e;
                        e && (c = c.toLowerCase());
                        for (var e = 0, f = a.length, i; e < f; e++)
                            if (i = a[e]) {
                                for (;
                                    (i = i.previousSibling) && i.nodeType !== 1;);
                                a[e] = b || i && i.nodeName.toLowerCase() === c ? i || false : i === c
                            }
                        b && o.filter(c, a, true)
                    },
                    ">": function(a, c) {
                        var b, e = typeof c === "string",
                            f = 0,
                            i = a.length;
                        if (e && !/\W/.test(c))
                            for (c = c.toLowerCase(); f < i; f++) {
                                if (b =
                                    a[f]) {
                                    b = b.parentNode;
                                    a[f] = b.nodeName.toLowerCase() === c ? b : false
                                }
                            } else {
                                for (; f < i; f++)
                                    if (b = a[f]) a[f] = e ? b.parentNode : b.parentNode === c;
                                e && o.filter(c, a, true)
                            }
                    },
                    "": function(b, e, i) {
                        var m, d = f++,
                            q = c;
                        if (typeof e === "string" && !/\W/.test(e)) {
                            m = e = e.toLowerCase();
                            q = a
                        }
                        q("parentNode", e, d, b, m, i)
                    },
                    "~": function(b, e, i) {
                        var m, q = f++,
                            d = c;
                        if (typeof e === "string" && !/\W/.test(e)) {
                            m = e = e.toLowerCase();
                            d = a
                        }
                        d("previousSibling", e, q, b, m, i)
                    }
                },
                find: {
                    ID: function(a, c, b) {
                        if (typeof c.getElementById !== "undefined" && !b) return (a = c.getElementById(a[1])) &&
                            a.parentNode ? [a] : []
                    },
                    NAME: function(a, c) {
                        if (typeof c.getElementsByName !== "undefined") {
                            for (var b = [], e = c.getElementsByName(a[1]), f = 0, i = e.length; f < i; f++) e[f].getAttribute("name") === a[1] && b.push(e[f]);
                            return b.length === 0 ? null : b
                        }
                    },
                    TAG: function(a, c) {
                        return c.getElementsByTagName(a[1])
                    }
                },
                preFilter: {
                    CLASS: function(a, c, b, e, f, i) {
                        a = " " + a[1].replace(/\\/g, "") + " ";
                        if (i) return a;
                        for (var i = 0, m;
                            (m = c[i]) != null; i++) m && (f ^ (m.className && (" " + m.className + " ").replace(/[\t\n]/g, " ").indexOf(a) >= 0) ? b || e.push(m) : b && (c[i] =
                            false));
                        return false
                    },
                    ID: function(a) {
                        return a[1].replace(/\\/g, "")
                    },
                    TAG: function(a) {
                        return a[1].toLowerCase()
                    },
                    CHILD: function(a) {
                        if (a[1] === "nth") {
                            var c = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = c[1] + (c[2] || 1) - 0;
                            a[3] = c[3] - 0
                        }
                        a[0] = f++;
                        return a
                    },
                    ATTR: function(a, c, b, e, f, i) {
                        c = a[1].replace(/\\/g, "");
                        !i && q.attrMap[c] && (a[1] = q.attrMap[c]);
                        a[2] === "~=" && (a[4] = " " + a[4] + " ");
                        return a
                    },
                    PSEUDO: function(a, c, b, f, i) {
                        if (a[1] === "not")
                            if ((e.exec(a[3]) ||
                                    "").length > 1 || /^\w/.test(a[3])) a[3] = o(a[3], null, null, c);
                            else {
                                a = o.filter(a[3], c, b, 1 ^ i);
                                b || f.push.apply(f, a);
                                return false
                            }
                        else if (q.match.POS.test(a[0]) || q.match.CHILD.test(a[0])) return true;
                        return a
                    },
                    POS: function(a) {
                        a.unshift(true);
                        return a
                    }
                },
                filters: {
                    enabled: function(a) {
                        return a.disabled === false && a.type !== "hidden"
                    },
                    disabled: function(a) {
                        return a.disabled === true
                    },
                    checked: function(a) {
                        return a.checked === true
                    },
                    selected: function(a) {
                        return a.selected === true
                    },
                    parent: function(a) {
                        return !!a.firstChild
                    },
                    empty: function(a) {
                        return !a.firstChild
                    },
                    has: function(a, c, b) {
                        return !!o(b[3], a).length
                    },
                    header: function(a) {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function(a) {
                        return "text" === a.type
                    },
                    radio: function(a) {
                        return "radio" === a.type
                    },
                    checkbox: function(a) {
                        return "checkbox" === a.type
                    },
                    file: function(a) {
                        return "file" === a.type
                    },
                    password: function(a) {
                        return "password" === a.type
                    },
                    submit: function(a) {
                        return "submit" === a.type
                    },
                    image: function(a) {
                        return "image" === a.type
                    },
                    reset: function(a) {
                        return "reset" === a.type
                    },
                    button: function(a) {
                        return "button" === a.type || a.nodeName.toLowerCase() ===
                            "button"
                    },
                    input: function(a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    }
                },
                setFilters: {
                    first: function(a, c) {
                        return c === 0
                    },
                    last: function(a, c, b, e) {
                        return c === e.length - 1
                    },
                    even: function(a, c) {
                        return c % 2 === 0
                    },
                    odd: function(a, c) {
                        return c % 2 === 1
                    },
                    lt: function(a, c, b) {
                        return c < b[3] - 0
                    },
                    gt: function(a, c, b) {
                        return c > b[3] - 0
                    },
                    nth: function(a, c, b) {
                        return b[3] - 0 === c
                    },
                    eq: function(a, c, b) {
                        return b[3] - 0 === c
                    }
                },
                filter: {
                    PSEUDO: function(a, c, b, e) {
                        var f = c[1],
                            i = q.filters[f];
                        if (i) return i(a, b, c, e);
                        if (f === "contains") return (a.textContent ||
                            a.innerText || o.getText([a]) || "").indexOf(c[3]) >= 0;
                        if (f === "not") {
                            c = c[3];
                            b = 0;
                            for (e = c.length; b < e; b++)
                                if (c[b] === a) return false;
                            return true
                        }
                        o.error("Syntax error, unrecognized expression: " + f)
                    },
                    CHILD: function(a, c) {
                        var b = c[1],
                            e = a;
                        switch (b) {
                            case "only":
                            case "first":
                                for (; e = e.previousSibling;)
                                    if (e.nodeType === 1) return false;
                                if (b === "first") return true;
                                e = a;
                            case "last":
                                for (; e = e.nextSibling;)
                                    if (e.nodeType === 1) return false;
                                return true;
                            case "nth":
                                var b = c[2],
                                    f = c[3];
                                if (b === 1 && f === 0) return true;
                                var i = c[0],
                                    m = a.parentNode;
                                if (m && (m.sizcache !== i || !a.nodeIndex)) {
                                    for (var d = 0, e = m.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType === 1) e.nodeIndex = ++d;
                                    m.sizcache = i
                                }
                                e = a.nodeIndex - f;
                                return b === 0 ? e === 0 : e % b === 0 && e / b >= 0
                        }
                    },
                    ID: function(a, c) {
                        return a.nodeType === 1 && a.getAttribute("id") === c
                    },
                    TAG: function(a, c) {
                        return c === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === c
                    },
                    CLASS: function(a, c) {
                        return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(c) > -1
                    },
                    ATTR: function(a, c) {
                        var b = c[1],
                            b = q.attrHandle[b] ? q.attrHandle[b](a) : a[b] != null ? a[b] :
                            a.getAttribute(b),
                            e = b + "",
                            f = c[2],
                            i = c[4];
                        return b == null ? f === "!=" : f === "=" ? e === i : f === "*=" ? e.indexOf(i) >= 0 : f === "~=" ? (" " + e + " ").indexOf(i) >= 0 : !i ? e && b !== false : f === "!=" ? e !== i : f === "^=" ? e.indexOf(i) === 0 : f === "$=" ? e.substr(e.length - i.length) === i : f === "|=" ? e === i || e.substr(0, i.length + 1) === i + "-" : false
                    },
                    POS: function(a, c, b, e) {
                        var f = q.setFilters[c[2]];
                        if (f) return f(a, b, c, e)
                    }
                }
            },
            u = q.match.POS,
            n = function(a, c) {
                return "\\" + (c - 0 + 1)
            },
            h;
        for (h in q.match) {
            q.match[h] = RegExp(q.match[h].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            q.leftMatch[h] = RegExp(/(^(?:.|\r|\n)*?)/.source + q.match[h].source.replace(/\\(\d+)/g, n))
        }
        var z = function(a, c) {
            a = Array.prototype.slice.call(a, 0);
            if (c) {
                c.push.apply(c, a);
                return c
            }
            return a
        };
        try {
            Array.prototype.slice.call(l.documentElement.childNodes, 0)
        } catch (k) {
            z = function(a, c) {
                var b = 0,
                    e = c || [];
                if (m.call(a) === "[object Array]") Array.prototype.push.apply(e, a);
                else if (typeof a.length === "number")
                    for (var f = a.length; b < f; b++) e.push(a[b]);
                else
                    for (; a[b]; b++) e.push(a[b]);
                return e
            }
        }
        var g, t;
        if (l.documentElement.compareDocumentPosition) g =
            function(a, c) {
                if (a === c) {
                    i = true;
                    return 0
                }
                return !a.compareDocumentPosition || !c.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(c) & 4 ? -1 : 1
            };
        else {
            g = function(a, c) {
                var b, e, f = [],
                    m = [];
                b = a.parentNode;
                e = c.parentNode;
                var d = b;
                if (a === c) {
                    i = true;
                    return 0
                }
                if (b === e) return t(a, c);
                if (b) {
                    if (!e) return 1
                } else return -1;
                for (; d;) {
                    f.unshift(d);
                    d = d.parentNode
                }
                for (d = e; d;) {
                    m.unshift(d);
                    d = d.parentNode
                }
                b = f.length;
                e = m.length;
                for (d = 0; d < b && d < e; d++)
                    if (f[d] !== m[d]) return t(f[d], m[d]);
                return d === b ? t(a,
                    m[d], -1) : t(f[d], c, 1)
            };
            t = function(a, c, b) {
                if (a === c) return b;
                for (a = a.nextSibling; a;) {
                    if (a === c) return -1;
                    a = a.nextSibling
                }
                return 1
            }
        }
        o.getText = function(a) {
            for (var c = "", b, e = 0; a[e]; e++) {
                b = a[e];
                b.nodeType === 3 || b.nodeType === 4 ? c = c + b.nodeValue : b.nodeType !== 8 && (c = c + o.getText(b.childNodes))
            }
            return c
        };
        (function() {
            var a = l.createElement("div"),
                c = "script" + (new Date).getTime(),
                b = l.documentElement;
            a.innerHTML = "<a name='" + c + "'/>";
            b.insertBefore(a, b.firstChild);
            if (l.getElementById(c)) {
                q.find.ID = function(a, c, b) {
                    if (typeof c.getElementById !==
                        "undefined" && !b) return (c = c.getElementById(a[1])) ? c.id === a[1] || typeof c.getAttributeNode !== "undefined" && c.getAttributeNode("id").nodeValue === a[1] ? [c] : j : []
                };
                q.filter.ID = function(a, c) {
                    var b = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id");
                    return a.nodeType === 1 && b && b.nodeValue === c
                }
            }
            b.removeChild(a);
            b = a = null
        })();
        (function() {
            var a = l.createElement("div");
            a.appendChild(l.createComment(""));
            if (a.getElementsByTagName("*").length > 0) q.find.TAG = function(a, c) {
                var b = c.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    for (var e = [], f = 0; b[f]; f++) b[f].nodeType === 1 && e.push(b[f]);
                    b = e
                }
                return b
            };
            a.innerHTML = "<a href='#'></a>";
            if (a.firstChild && typeof a.firstChild.getAttribute !== "undefined" && a.firstChild.getAttribute("href") !== "#") q.attrHandle.href = function(a) {
                return a.getAttribute("href", 2)
            };
            a = null
        })();
        l.querySelectorAll && function() {
            var a = o,
                c = l.createElement("div");
            c.innerHTML = "<p class='TEST'></p>";
            if (!(c.querySelectorAll && c.querySelectorAll(".TEST").length === 0)) {
                o = function(c, b, e, f) {
                    b = b || l;
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g,
                        "='$1']");
                    if (!f && !o.isXML(b))
                        if (b.nodeType === 9) try {
                            return z(b.querySelectorAll(c), e)
                        } catch (i) {} else if (b.nodeType === 1 && b.nodeName.toLowerCase() !== "object") {
                            var m = b.getAttribute("id"),
                                d = m || "__sizzle__";
                            m || b.setAttribute("id", d);
                            try {
                                return z(b.querySelectorAll("#" + d + " " + c), e)
                            } catch (q) {} finally {
                                m || b.removeAttribute("id")
                            }
                        }
                    return a(c, b, e, f)
                };
                for (var b in a) o[b] = a[b];
                c = null
            }
        }();
        (function() {
            var a = l.documentElement,
                c = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector,
                b =
                false;
            try {
                c.call(l.documentElement, "[test!='']:sizzle")
            } catch (e) {
                b = true
            }
            if (c) o.matchesSelector = function(a, e) {
                e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                if (!o.isXML(a)) try {
                    if (b || !q.match.PSEUDO.test(e) && !/!=/.test(e)) return c.call(a, e)
                } catch (f) {}
                return o(e, null, null, [a]).length > 0
            }
        })();
        (function() {
            var a = l.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length !==
                    1) {
                    q.order.splice(1, 0, "CLASS");
                    q.find.CLASS = function(a, c, b) {
                        if (typeof c.getElementsByClassName !== "undefined" && !b) return c.getElementsByClassName(a[1])
                    };
                    a = null
                }
            }
        })();
        o.contains = l.documentElement.contains ? function(a, c) {
            return a !== c && (a.contains ? a.contains(c) : true)
        } : l.documentElement.compareDocumentPosition ? function(a, c) {
            return !!(a.compareDocumentPosition(c) & 16)
        } : function() {
            return false
        };
        o.isXML = function(a) {
            return (a = (a ? a.ownerDocument || a : 0).documentElement) ? a.nodeName !== "HTML" : false
        };
        var K = function(a,
            c) {
            for (var b, e = [], f = "", i = c.nodeType ? [c] : c; b = q.match.PSEUDO.exec(a);) {
                f = f + b[0];
                a = a.replace(q.match.PSEUDO, "")
            }
            a = q.relative[a] ? a + "*" : a;
            b = 0;
            for (var m = i.length; b < m; b++) o(a, i[b], e);
            return o.filter(f, e)
        };
        b.find = o;
        b.expr = o.selectors;
        b.expr[":"] = b.expr.filters;
        b.unique = o.uniqueSort;
        b.text = o.getText;
        b.isXMLDoc = o.isXML;
        b.contains = o.contains
    })();
    var t = /Until$/,
        Aa = /^(?:parents|prevUntil|prevAll)/,
        Xa = /,/,
        Ha = /^.[^:#\[\.,]*$/,
        Ia = Array.prototype.slice,
        ha = b.expr.match.POS;
    b.fn.extend({
        find: function(a) {
            for (var c = this.pushStack("",
                    "find", a), e = 0, f = 0, m = this.length; f < m; f++) {
                e = c.length;
                b.find(a, this[f], c);
                if (f > 0)
                    for (var i = e; i < c.length; i++)
                        for (var d = 0; d < e; d++)
                            if (c[d] === c[i]) {
                                c.splice(i--, 1);
                                break
                            }
            }
            return c
        },
        has: function(a) {
            var c = b(a);
            return this.filter(function() {
                for (var a = 0, f = c.length; a < f; a++)
                    if (b.contains(this, c[a])) return true
            })
        },
        not: function(a) {
            return this.pushStack(h(this, a, false), "not", a)
        },
        filter: function(a) {
            return this.pushStack(h(this, a, true), "filter", a)
        },
        is: function(a) {
            return !!a && b.filter(a, this).length > 0
        },
        closest: function(a,
            c) {
            var e = [],
                f, m, i = this[0];
            if (b.isArray(a)) {
                var d, o = {},
                    q = 1;
                if (i && a.length) {
                    f = 0;
                    for (m = a.length; f < m; f++) {
                        d = a[f];
                        o[d] || (o[d] = b.expr.match.POS.test(d) ? b(d, c || this.context) : d)
                    }
                    for (; i && i.ownerDocument && i !== c;) {
                        for (d in o) {
                            f = o[d];
                            (f.jquery ? f.index(i) > -1 : b(i).is(f)) && e.push({
                                selector: d,
                                elem: i,
                                level: q
                            })
                        }
                        i = i.parentNode;
                        q++
                    }
                }
                return e
            }
            d = ha.test(a) ? b(a, c || this.context) : null;
            f = 0;
            for (m = this.length; f < m; f++)
                for (i = this[f]; i;)
                    if (d ? d.index(i) > -1 : b.find.matchesSelector(i, a)) {
                        e.push(i);
                        break
                    } else {
                        i = i.parentNode;
                        if (!i ||
                            !i.ownerDocument || i === c) break
                    }
            e = e.length > 1 ? b.unique(e) : e;
            return this.pushStack(e, "closest", a)
        },
        index: function(a) {
            return !a || typeof a === "string" ? b.inArray(this[0], a ? b(a) : this.parent().children()) : b.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, c) {
            var e = typeof a === "string" ? b(a, c || this.context) : b.makeArray(a),
                f = b.merge(this.get(), e);
            return this.pushStack(!e[0] || !e[0].parentNode || e[0].parentNode.nodeType === 11 || !f[0] || !f[0].parentNode || f[0].parentNode.nodeType === 11 ? f : b.unique(f))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    });
    b.each({
        parent: function(a) {
            return (a = a.parentNode) && a.nodeType !== 11 ? a : null
        },
        parents: function(a) {
            return b.dir(a, "parentNode")
        },
        parentsUntil: function(a, c, e) {
            return b.dir(a, "parentNode", e)
        },
        next: function(a) {
            return b.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return b.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return b.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return b.dir(a, "previousSibling")
        },
        nextUntil: function(a, c, e) {
            return b.dir(a, "nextSibling", e)
        },
        prevUntil: function(a, c, e) {
            return b.dir(a, "previousSibling",
                e)
        },
        siblings: function(a) {
            return b.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return b.sibling(a.firstChild)
        },
        contents: function(a) {
            return b.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : b.makeArray(a.childNodes)
        }
    }, function(a, c) {
        b.fn[a] = function(e, f) {
            var m = b.map(this, c, e);
            t.test(a) || (f = e);
            f && typeof f === "string" && (m = b.filter(f, m));
            m = this.length > 1 ? b.unique(m) : m;
            if ((this.length > 1 || Xa.test(f)) && Aa.test(a)) m = m.reverse();
            return this.pushStack(m, a, Ia.call(arguments).join(","))
        }
    });
    b.extend({
        filter: function(a, c, e) {
            e && (a = ":not(" + a + ")");
            return c.length === 1 ? b.find.matchesSelector(c[0], a) ? [c[0]] : [] : b.find.matches(a, c)
        },
        dir: function(a, c, e) {
            for (var f = [], a = a[c]; a && a.nodeType !== 9 && (e === j || a.nodeType !== 1 || !b(a).is(e));) {
                a.nodeType === 1 && f.push(a);
                a = a[c]
            }
            return f
        },
        nth: function(a, c, b) {
            for (var c = c || 1, f = 0; a; a = a[b])
                if (a.nodeType === 1 && ++f === c) break;
            return a
        },
        sibling: function(a, c) {
            for (var b = []; a; a = a.nextSibling) a.nodeType === 1 && a !== c && b.push(a);
            return b
        }
    });
    var na = / jQuery\d+="(?:\d+|null)"/g,
        oa = /^\s+/,
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        sa = /<([\w:]+)/,
        Ja = /<tbody/i,
        Ka = /<|&#?\w+;/,
        La = /<(?:script|object|embed|option|style)/i,
        Ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Pa = /\=([^="'>\s]+\/)>/g,
        R = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    R.optgroup = R.option;
    R.tbody = R.tfoot = R.colgroup = R.caption = R.thead;
    R.th = R.td;
    b.support.htmlSerialize || (R._default = [1, "div<div>", "</div>"]);
    b.fn.extend({
        text: function(a) {
            return b.isFunction(a) ? this.each(function(c) {
                var e = b(this);
                e.text(a.call(this, c, e.text()))
            }) : typeof a !== "object" && a !== j ? this.empty().append((this[0] && this[0].ownerDocument || l).createTextNode(a)) : b.text(this)
        },
        wrapAll: function(a) {
            if (b.isFunction(a)) return this.each(function(c) {
                b(this).wrapAll(a.call(this,
                    c))
            });
            if (this[0]) {
                var c = b(a, this[0].ownerDocument).eq(0).clone(true);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var a = this; a.firstChild && a.firstChild.nodeType === 1;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return b.isFunction(a) ? this.each(function(c) {
                b(this).wrapInner(a.call(this, c))
            }) : this.each(function() {
                var c = b(this),
                    e = c.contents();
                e.length ? e.wrapAll(a) : c.append(a)
            })
        },
        wrap: function(a) {
            return this.each(function() {
                b(this).wrapAll(a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                b.nodeName(this,
                    "body") || b(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, true, function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, true, function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = b(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a,
                    "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, b(arguments[0]).toArray());
                return a
            }
        },
        remove: function(a, c) {
            for (var e = 0, f;
                (f = this[e]) != null; e++)
                if (!a || b.filter(a, [f]).length) {
                    if (!c && f.nodeType === 1) {
                        b.cleanData(f.getElementsByTagName("*"));
                        b.cleanData([f])
                    }
                    f.parentNode && f.parentNode.removeChild(f)
                }
            return this
        },
        empty: function() {
            for (var a = 0, c;
                (c = this[a]) != null; a++)
                for (c.nodeType === 1 && b.cleanData(c.getElementsByTagName("*")); c.firstChild;) c.removeChild(c.firstChild);
            return this
        },
        clone: function(a) {
            var c = this.map(function() {
                if (!b.support.noCloneEvent && !b.isXMLDoc(this)) {
                    var a = this.outerHTML,
                        c = this.ownerDocument;
                    if (!a) {
                        a = c.createElement("div");
                        a.appendChild(this.cloneNode(true));
                        a = a.innerHTML
                    }
                    return b.clean([a.replace(na, "").replace(Pa, '="$1">').replace(oa, "")], c)[0]
                }
                return this.cloneNode(true)
            });
            if (a === true) {
                g(this,
                    c);
                g(this.find("*"), c.find("*"))
            }
            return c
        },
        html: function(a) {
            if (a === j) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(na, "") : null;
            if (typeof a === "string" && !La.test(a) && (b.support.leadingWhitespace || !oa.test(a)) && !R[(sa.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(va, "<$1></$2>");
                try {
                    for (var c = 0, e = this.length; c < e; c++)
                        if (this[c].nodeType === 1) {
                            b.cleanData(this[c].getElementsByTagName("*"));
                            this[c].innerHTML = a
                        }
                } catch (f) {
                    this.empty().append(a)
                }
            } else b.isFunction(a) ? this.each(function(c) {
                var e =
                    b(this);
                e.html(a.call(this, c, e.html()))
            }) : this.empty().append(a);
            return this
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (b.isFunction(a)) return this.each(function(c) {
                    var e = b(this),
                        f = e.html();
                    e.replaceWith(a.call(this, c, f))
                });
                typeof a !== "string" && (a = b(a).detach());
                return this.each(function() {
                    var c = this.nextSibling,
                        e = this.parentNode;
                    b(this).remove();
                    c ? b(c).before(a) : b(e).append(a)
                })
            }
            return this.pushStack(b(b.isFunction(a) ? a() : a), "replaceWith", a)
        },
        detach: function(a) {
            return this.remove(a,
                true)
        },
        domManip: function(a, c, e) {
            var f, d, i, n = a[0],
                o = [];
            if (!b.support.checkClone && arguments.length === 3 && typeof n === "string" && Ma.test(n)) return this.each(function() {
                b(this).domManip(a, c, e, true)
            });
            if (b.isFunction(n)) return this.each(function(f) {
                var i = b(this);
                a[0] = n.call(this, f, c ? i.html() : j);
                i.domManip(a, c, e)
            });
            if (this[0]) {
                f = n && n.parentNode;
                f = b.support.parentNode && f && f.nodeType === 11 && f.childNodes.length === this.length ? {
                    fragment: f
                } : b.buildFragment(a, this, o);
                i = f.fragment;
                if (d = i.childNodes.length === 1 ? i = i.firstChild :
                    i.firstChild) {
                    c = c && b.nodeName(d, "tr");
                    d = 0;
                    for (var q = this.length; d < q; d++) e.call(c ? b.nodeName(this[d], "table") ? this[d].getElementsByTagName("tbody")[0] || this[d].appendChild(this[d].ownerDocument.createElement("tbody")) : this[d] : this[d], d > 0 || f.cacheable || this.length > 1 ? i.cloneNode(true) : i)
                }
                o.length && b.each(o, k)
            }
            return this
        }
    });
    b.buildFragment = function(a, c, e) {
        var f, d, i, c = c && c[0] ? c[0].ownerDocument || c[0] : l;
        if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && c === l && !La.test(a[0]) && (b.support.checkClone ||
                !Ma.test(a[0]))) {
            d = true;
            if (i = b.fragments[a[0]]) i !== 1 && (f = i)
        }
        if (!f) {
            f = c.createDocumentFragment();
            b.clean(a, c, f, e)
        }
        d && (b.fragments[a[0]] = i ? f : 1);
        return {
            fragment: f,
            cacheable: d
        }
    };
    b.fragments = {};
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, c) {
        b.fn[a] = function(e) {
            var f = [],
                e = b(e),
                d = this.length === 1 && this[0].parentNode;
            if (d && d.nodeType === 11 && d.childNodes.length === 1 && e.length === 1) {
                e[c](this[0]);
                return this
            }
            for (var d = 0, i = e.length; d <
                i; d++) {
                var n = (d > 0 ? this.clone(true) : this).get();
                b(e[d])[c](n);
                f = f.concat(n)
            }
            return this.pushStack(f, a, e.selector)
        }
    });
    b.extend({
        clean: function(a, c, e, f) {
            c = c || l;
            typeof c.createElement === "undefined" && (c = c.ownerDocument || c[0] && c[0].ownerDocument || l);
            for (var d = [], i = 0, n;
                (n = a[i]) != null; i++) {
                typeof n === "number" && (n = n + "");
                if (n) {
                    if (typeof n === "string" && !Ka.test(n)) n = c.createTextNode(n);
                    else if (typeof n === "string") {
                        n = n.replace(va, "<$1></$2>");
                        var o = (sa.exec(n) || ["", ""])[1].toLowerCase(),
                            q = R[o] || R._default,
                            u = q[0],
                            h = c.createElement("div");
                        for (h.innerHTML = q[1] + n + q[2]; u--;) h = h.lastChild;
                        if (!b.support.tbody) {
                            u = Ja.test(n);
                            o = o === "table" && !u ? h.firstChild && h.firstChild.childNodes : q[1] === "<table>" && !u ? h.childNodes : [];
                            for (q = o.length - 1; q >= 0; --q) b.nodeName(o[q], "tbody") && !o[q].childNodes.length && o[q].parentNode.removeChild(o[q])
                        }!b.support.leadingWhitespace && oa.test(n) && h.insertBefore(c.createTextNode(oa.exec(n)[0]), h.firstChild);
                        n = h.childNodes
                    }
                    n.nodeType ? d.push(n) : d = b.merge(d, n)
                }
            }
            if (e)
                for (i = 0; d[i]; i++)
                    if (f && b.nodeName(d[i],
                            "script") && (!d[i].type || d[i].type.toLowerCase() === "text/javascript")) f.push(d[i].parentNode ? d[i].parentNode.removeChild(d[i]) : d[i]);
                    else {
                        d[i].nodeType === 1 && d.splice.apply(d, [i + 1, 0].concat(b.makeArray(d[i].getElementsByTagName("script"))));
                        e.appendChild(d[i])
                    }
            return d
        },
        cleanData: function(a) {
            for (var c, e, f = b.cache, d = b.event.special, i = b.support.deleteExpando, n = 0, o;
                (o = a[n]) != null; n++)
                if (!o.nodeName || !b.noData[o.nodeName.toLowerCase()])
                    if (e = o[b.expando]) {
                        if ((c = f[e]) && c.events)
                            for (var q in c.events) d[q] ?
                                b.event.remove(o, q) : b.removeEvent(o, q, c.handle);
                        i ? delete o[b.expando] : o.removeAttribute && o.removeAttribute(b.expando);
                        delete f[e]
                    }
        }
    });
    var Ba = /alpha\([^)]*\)/i,
        Ca = /opacity=([^)]*)/,
        n = /-([a-z])/ig,
        u = /([A-Z])/g,
        Y = /^-?\d+(?:px)?$/i,
        qa = /^-?\d/,
        da = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        C = ["Left", "Right"],
        H = ["Top", "Bottom"],
        Ga, Sa, Na, Ya = function(a, c) {
            return c.toUpperCase()
        };
    b.fn.css = function(a, c) {
        return arguments.length === 2 && c === j ? this : b.access(this, a, c, true, function(a, c, d) {
            return d !==
                j ? b.style(a, c, d) : b.css(a, c)
        })
    };
    b.extend({
        cssHooks: {
            opacity: {
                get: function(a, c) {
                    if (c) {
                        var b = Ga(a, "opacity", "opacity");
                        return b === "" ? "1" : b
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            zIndex: !0,
            fontWeight: !0,
            opacity: !0,
            zoom: !0,
            lineHeight: !0
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, e, f) {
            if (a && !(a.nodeType === 3 || a.nodeType === 8 || !a.style)) {
                var d, i = b.camelCase(c),
                    n = a.style,
                    o = b.cssHooks[i],
                    c = b.cssProps[i] || i;
                if (e !== j) {
                    if (!(typeof e === "number" && isNaN(e) || e == null)) {
                        typeof e ===
                            "number" && !b.cssNumber[i] && (e = e + "px");
                        if (!o || !("set" in o) || (e = o.set(a, e)) !== j) try {
                            n[c] = e
                        } catch (q) {}
                    }
                } else return o && "get" in o && (d = o.get(a, false, f)) !== j ? d : n[c]
            }
        },
        css: function(a, c, e) {
            var f, d = b.camelCase(c),
                i = b.cssHooks[d],
                c = b.cssProps[d] || d;
            if (i && "get" in i && (f = i.get(a, true, e)) !== j) return f;
            if (Ga) return Ga(a, c, d)
        },
        swap: function(a, c, b) {
            var f = {},
                d;
            for (d in c) {
                f[d] = a.style[d];
                a.style[d] = c[d]
            }
            b.call(a);
            for (d in c) a.style[d] = f[d]
        },
        camelCase: function(a) {
            return a.replace(n, Ya)
        }
    });
    b.curCSS = b.css;
    b.each(["height",
        "width"
    ], function(a, c) {
        b.cssHooks[c] = {
            get: function(a, f, d) {
                var i;
                if (f) {
                    a.offsetWidth !== 0 ? i = P(a, c, d) : b.swap(a, da, function() {
                        i = P(a, c, d)
                    });
                    if (i <= 0) {
                        i = Ga(a, c, c);
                        i === "0px" && Na && (i = Na(a, c, c));
                        if (i != null) return i === "" || i === "auto" ? "0px" : i
                    }
                    if (i < 0 || i == null) {
                        i = a.style[c];
                        return i === "" || i === "auto" ? "0px" : i
                    }
                    return typeof i === "string" ? i : i + "px"
                }
            },
            set: function(a, c) {
                if (Y.test(c)) {
                    c = parseFloat(c);
                    if (c >= 0) return c + "px"
                } else return c
            }
        }
    });
    b.support.opacity || (b.cssHooks.opacity = {
        get: function(a, c) {
            return Ca.test((c && a.currentStyle ?
                a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : c ? "1" : ""
        },
        set: function(a, c) {
            var e = a.style;
            e.zoom = 1;
            var f = b.isNaN(c) ? "" : "alpha(opacity=" + c * 100 + ")",
                d = e.filter || "";
            e.filter = Ba.test(d) ? d.replace(Ba, f) : e.filter + " " + f
        }
    });
    l.defaultView && l.defaultView.getComputedStyle && (Sa = function(a, c, e) {
        var f, e = e.replace(u, "-$1").toLowerCase();
        if (!(c = a.ownerDocument.defaultView)) return j;
        if (c = c.getComputedStyle(a, null)) {
            f = c.getPropertyValue(e);
            f === "" && !b.contains(a.ownerDocument.documentElement,
                a) && (f = b.style(a, e))
        }
        return f
    });
    l.documentElement.currentStyle && (Na = function(a, c) {
        var b, f, d = a.currentStyle && a.currentStyle[c],
            i = a.style;
        if (!Y.test(d) && qa.test(d)) {
            b = i.left;
            f = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            i.left = c === "fontSize" ? "1em" : d || 0;
            d = i.pixelLeft + "px";
            i.left = b;
            a.runtimeStyle.left = f
        }
        return d === "" ? "auto" : d
    });
    Ga = Sa || Na;
    b.expr && b.expr.filters && (b.expr.filters.hidden = function(a) {
        var c = a.offsetHeight;
        return a.offsetWidth === 0 && c === 0 || !b.support.reliableHiddenOffsets && (a.style.display ||
            b.css(a, "display")) === "none"
    }, b.expr.filters.visible = function(a) {
        return !b.expr.filters.hidden(a)
    });
    var Za = b.now(),
        xa = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Q = /^(?:select|textarea)/i,
        Qa = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        X = /^(?:GET|HEAD)$/,
        L = /\[\]$/,
        O = /\=\?(&|$)/,
        ea = /\?/,
        K = /([?&])_=[^&]*/,
        aa = /^(\w+:)?\/\/([^\/?#]+)/,
        E = /%20/g,
        Z = /#.*$/,
        wa = b.fn.load;
    b.fn.extend({
        load: function(a, c, e) {
            if (typeof a !== "string" && wa) return wa.apply(this,
                arguments);
            if (!this.length) return this;
            var f = a.indexOf(" ");
            if (f >= 0) var d = a.slice(f, a.length),
                a = a.slice(0, f);
            f = "GET";
            if (c)
                if (b.isFunction(c)) {
                    e = c;
                    c = null
                } else if (typeof c === "object") {
                c = b.param(c, b.ajaxSettings.traditional);
                f = "POST"
            }
            var i = this;
            b.ajax({
                url: a,
                type: f,
                dataType: "html",
                data: c,
                complete: function(a, c) {
                    if (c === "success" || c === "notmodified") i.html(d ? b("<div>").append(a.responseText.replace(xa, "")).find(d) : a.responseText);
                    e && i.each(e, [a.responseText, c, a])
                }
            });
            return this
        },
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? b.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Q.test(this.nodeName) || Qa.test(this.type))
            }).map(function(a, c) {
                var e = b(this).val();
                return e == null ? null : b.isArray(e) ? b.map(e, function(a) {
                    return {
                        name: c.name,
                        value: a
                    }
                }) : {
                    name: c.name,
                    value: e
                }
            }).get()
        }
    });
    b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, c) {
        b.fn[c] = function(a) {
            return this.bind(c,
                a)
        }
    });
    b.extend({
        get: function(a, c, e, f) {
            if (b.isFunction(c)) {
                f = f || e;
                e = c;
                c = null
            }
            return b.ajax({
                type: "GET",
                url: a,
                data: c,
                success: e,
                dataType: f
            })
        },
        getScript: function(a, c) {
            return b.get(a, null, c, "script")
        },
        getJSON: function(a, c, e) {
            return b.get(a, c, e, "json")
        },
        post: function(a, c, e, f) {
            if (b.isFunction(c)) {
                f = f || e;
                e = c;
                c = {}
            }
            return b.ajax({
                type: "POST",
                url: a,
                data: c,
                success: e,
                dataType: f
            })
        },
        ajaxSetup: function(a) {
            b.extend(b.ajaxSettings, a)
        },
        ajaxSettings: {
            url: location.href,
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            xhr: function() {
                return new d.XMLHttpRequest
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        ajax: function(a) {
            var c = b.extend(true, {}, b.ajaxSettings, a),
                e, f, m, i = c.type.toUpperCase(),
                n = X.test(i);
            c.url = c.url.replace(Z, "");
            c.context = a && a.context != null ? a.context : c;
            if (c.data && c.processData && typeof c.data !== "string") c.data = b.param(c.data, c.traditional);
            if (c.dataType === "jsonp") {
                if (i === "GET") O.test(c.url) || (c.url = c.url + ((ea.test(c.url) ? "&" : "?") + (c.jsonp || "callback") + "=?"));
                else if (!c.data || !O.test(c.data)) c.data = (c.data ? c.data + "&" : "") + (c.jsonp || "callback") + "=?";
                c.dataType = "json"
            }
            if (c.dataType === "json" && (c.data && O.test(c.data) || O.test(c.url))) {
                e = c.jsonpCallback || "jsonp" + Za++;
                if (c.data) c.data = (c.data + "").replace(O, "=" + e + "$1");
                c.url = c.url.replace(O, "=" + e + "$1");
                c.dataType = "script";
                var o = d[e];
                d[e] = function(a) {
                    if (b.isFunction(o)) o(a);
                    else {
                        d[e] = j;
                        try {
                            delete d[e]
                        } catch (i) {}
                    }
                    m =
                        a;
                    b.handleSuccess(c, t, f, m);
                    b.handleComplete(c, t, f, m);
                    h && h.removeChild(z)
                }
            }
            if (c.dataType === "script" && c.cache === null) c.cache = false;
            if (c.cache === false && n) {
                var q = b.now(),
                    u = c.url.replace(K, "$1_=" + q);
                c.url = u + (u === c.url ? (ea.test(c.url) ? "&" : "?") + "_=" + q : "")
            }
            if (c.data && n) c.url = c.url + ((ea.test(c.url) ? "&" : "?") + c.data);
            c.global && b.active++ === 0 && b.event.trigger("ajaxStart");
            q = (q = aa.exec(c.url)) && (q[1] && q[1].toLowerCase() !== location.protocol || q[2].toLowerCase() !== location.host);
            if (c.dataType === "script" && i === "GET" &&
                q) {
                var h = l.getElementsByTagName("head")[0] || l.documentElement,
                    z = l.createElement("script");
                if (c.scriptCharset) z.charset = c.scriptCharset;
                z.src = c.url;
                if (!e) {
                    var k = false;
                    z.onload = z.onreadystatechange = function() {
                        if (!k && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                            k = true;
                            b.handleSuccess(c, t, f, m);
                            b.handleComplete(c, t, f, m);
                            z.onload = z.onreadystatechange = null;
                            h && z.parentNode && h.removeChild(z)
                        }
                    }
                }
                h.insertBefore(z, h.firstChild);
                return j
            }
            var g = false,
                t = c.xhr();
            if (t) {
                c.username ? t.open(i,
                    c.url, c.async, c.username, c.password) : t.open(i, c.url, c.async);
                try {
                    (c.data != null && !n || a && a.contentType) && t.setRequestHeader("Content-Type", c.contentType);
                    if (c.ifModified) {
                        b.lastModified[c.url] && t.setRequestHeader("If-Modified-Since", b.lastModified[c.url]);
                        b.etag[c.url] && t.setRequestHeader("If-None-Match", b.etag[c.url])
                    }
                    q || t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    t.setRequestHeader("Accept", c.dataType && c.accepts[c.dataType] ? c.accepts[c.dataType] + ", */*; q=0.01" : c.accepts._default)
                } catch (Y) {}
                if (c.beforeSend &&
                    c.beforeSend.call(c.context, t, c) === false) {
                    c.global && b.active-- === 1 && b.event.trigger("ajaxStop");
                    t.abort();
                    return false
                }
                c.global && b.triggerGlobal(c, "ajaxSend", [t, c]);
                var C = t.onreadystatechange = function(a) {
                    if (!t || t.readyState === 0 || a === "abort") {
                        g || b.handleComplete(c, t, f, m);
                        g = true;
                        if (t) t.onreadystatechange = b.noop
                    } else if (!g && t && (t.readyState === 4 || a === "timeout")) {
                        g = true;
                        t.onreadystatechange = b.noop;
                        f = a === "timeout" ? "timeout" : !b.httpSuccess(t) ? "error" : c.ifModified && b.httpNotModified(t, c.url) ? "notmodified" :
                            "success";
                        var d;
                        if (f === "success") try {
                            m = b.httpData(t, c.dataType, c)
                        } catch (i) {
                            f = "parsererror";
                            d = i
                        }
                        f === "success" || f === "notmodified" ? e || b.handleSuccess(c, t, f, m) : b.handleError(c, t, f, d);
                        e || b.handleComplete(c, t, f, m);
                        a === "timeout" && t.abort();
                        c.async && (t = null)
                    }
                };
                try {
                    var p = t.abort;
                    t.abort = function() {
                        t && Function.prototype.call.call(p, t);
                        C("abort")
                    }
                } catch (Aa) {}
                c.async && c.timeout > 0 && setTimeout(function() {
                    t && !g && C("timeout")
                }, c.timeout);
                try {
                    t.send(n || c.data == null ? null : c.data)
                } catch (E) {
                    b.handleError(c, t, null, E);
                    b.handleComplete(c, t, f, m)
                }
                c.async || C();
                return t
            }
        },
        param: function(a, c) {
            var e = [],
                f = function(a, c) {
                    c = b.isFunction(c) ? c() : c;
                    e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c)
                };
            if (c === j) c = b.ajaxSettings.traditional;
            if (b.isArray(a) || a.jquery) b.each(a, function() {
                f(this.name, this.value)
            });
            else
                for (var d in a) D(d, a[d], c, f);
            return e.join("&").replace(E, "+")
        }
    });
    b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        handleError: function(a, c, e, f) {
            a.error && a.error.call(a.context, c, e, f);
            a.global && b.triggerGlobal(a,
                "ajaxError", [c, a, f])
        },
        handleSuccess: function(a, c, e, f) {
            a.success && a.success.call(a.context, f, e, c);
            a.global && b.triggerGlobal(a, "ajaxSuccess", [c, a])
        },
        handleComplete: function(a, c, e) {
            a.complete && a.complete.call(a.context, c, e);
            a.global && b.triggerGlobal(a, "ajaxComplete", [c, a]);
            a.global && b.active-- === 1 && b.event.trigger("ajaxStop")
        },
        triggerGlobal: function(a, c, e) {
            (a.context && a.context.url == null ? b(a.context) : b.event).trigger(c, e)
        },
        httpSuccess: function(a) {
            try {
                return !a.status && location.protocol === "file:" || a.status >=
                    200 && a.status < 300 || a.status === 304 || a.status === 1223
            } catch (c) {}
            return false
        },
        httpNotModified: function(a, c) {
            var e = a.getResponseHeader("Last-Modified"),
                f = a.getResponseHeader("Etag");
            e && (b.lastModified[c] = e);
            f && (b.etag[c] = f);
            return a.status === 304
        },
        httpData: function(a, c, e) {
            var f = a.getResponseHeader("content-type") || "",
                d = c === "xml" || !c && f.indexOf("xml") >= 0,
                a = d ? a.responseXML : a.responseText;
            d && a.documentElement.nodeName === "parsererror" && b.error("parsererror");
            e && e.dataFilter && (a = e.dataFilter(a, c));
            typeof a ===
                "string" && (c === "json" || !c && f.indexOf("json") >= 0 ? a = b.parseJSON(a) : (c === "script" || !c && f.indexOf("javascript") >= 0) && b.globalEval(a));
            return a
        }
    });
    d.ActiveXObject && (b.ajaxSettings.xhr = function() {
        if (d.location.protocol !== "file:") try {
            return new d.XMLHttpRequest
        } catch (a) {}
        try {
            return new d.ActiveXObject("Microsoft.XMLHTTP")
        } catch (c) {}
    });
    b.support.ajax = !!b.ajaxSettings.xhr();
    var S = {},
        $a = /^(?:toggle|show|hide)$/,
        x = /^([+\-]=)?([\d+.\-]+)(.*)$/,
        Oa, U = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    b.fn.extend({
        show: function(a, c, e) {
            if (a || a === 0) return this.animate(v("show", 3), a, c, e);
            for (var e = 0, f = this.length; e < f; e++) {
                a = this[e];
                c = a.style.display;
                if (!b.data(a, "olddisplay") && c === "none") c = a.style.display = "";
                c === "" && b.css(a, "display") === "none" && b.data(a, "olddisplay", N(a.nodeName))
            }
            for (e = 0; e < f; e++) {
                a = this[e];
                c = a.style.display;
                if (c === "" || c === "none") a.style.display = b.data(a, "olddisplay") || ""
            }
            return this
        },
        hide: function(a, c,
            e) {
            if (a || a === 0) return this.animate(v("hide", 3), a, c, e);
            a = 0;
            for (c = this.length; a < c; a++) {
                e = b.css(this[a], "display");
                e !== "none" && b.data(this[a], "olddisplay", e)
            }
            for (a = 0; a < c; a++) this[a].style.display = "none";
            return this
        },
        _toggle: b.fn.toggle,
        toggle: function(a, c, e) {
            var f = typeof a === "boolean";
            b.isFunction(a) && b.isFunction(c) ? this._toggle.apply(this, arguments) : a == null || f ? this.each(function() {
                var c = f ? a : b(this).is(":hidden");
                b(this)[c ? "show" : "hide"]()
            }) : this.animate(v("toggle", 3), a, c, e);
            return this
        },
        fadeTo: function(a,
            c, b, f) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: c
            }, a, b, f)
        },
        animate: function(a, c, e, f) {
            var d = b.speed(c, e, f);
            return b.isEmptyObject(a) ? this.each(d.complete) : this[d.queue === false ? "each" : "queue"](function() {
                var c = b.extend({}, d),
                    e, f = this.nodeType === 1,
                    q = f && b(this).is(":hidden"),
                    n = this;
                for (e in a) {
                    var u = b.camelCase(e);
                    if (e !== u) {
                        a[u] = a[e];
                        delete a[e];
                        e = u
                    }
                    if (a[e] === "hide" && q || a[e] === "show" && !q) return c.complete.call(this);
                    if (f && (e === "height" || e === "width")) {
                        c.overflow = [this.style.overflow,
                            this.style.overflowX, this.style.overflowY
                        ];
                        if (b.css(this, "display") === "inline" && b.css(this, "float") === "none")
                            if (b.support.inlineBlockNeedsLayout)
                                if (N(this.nodeName) === "inline") this.style.display = "inline-block";
                                else {
                                    this.style.display = "inline";
                                    this.style.zoom = 1
                                }
                        else this.style.display = "inline-block"
                    }
                    if (b.isArray(a[e])) {
                        (c.specialEasing = c.specialEasing || {})[e] = a[e][1];
                        a[e] = a[e][0]
                    }
                }
                if (c.overflow != null) this.style.overflow = "hidden";
                c.curAnim = b.extend({}, a);
                b.each(a, function(e, f) {
                    var d = new b.fx(n, c, e);
                    if ($a.test(f)) d[f === "toggle" ? q ? "show" : "hide" : f](a);
                    else {
                        var m = x.exec(f),
                            o = d.cur() || 0;
                        if (m) {
                            var u = parseFloat(m[2]),
                                h = m[3] || "px";
                            if (h !== "px") {
                                b.style(n, e, (u || 1) + h);
                                o = (u || 1) / d.cur() * o;
                                b.style(n, e, o + h)
                            }
                            m[1] && (u = (m[1] === "-=" ? -1 : 1) * u + o);
                            d.custom(o, u, h)
                        } else d.custom(o, f, "")
                    }
                });
                return true
            })
        },
        stop: function(a, c) {
            var e = b.timers;
            a && this.queue([]);
            this.each(function() {
                for (var a = e.length - 1; a >= 0; a--)
                    if (e[a].elem === this) {
                        c && e[a](true);
                        e.splice(a, 1)
                    }
            });
            c || this.dequeue();
            return this
        }
    });
    b.each({
        slideDown: v("show",
            1),
        slideUp: v("hide", 1),
        slideToggle: v("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, c) {
        b.fn[a] = function(a, b, d) {
            return this.animate(c, a, b, d)
        }
    });
    b.extend({
        speed: function(a, c, e) {
            var f = a && typeof a === "object" ? b.extend({}, a) : {
                complete: e || !e && c || b.isFunction(a) && a,
                duration: a,
                easing: e && c || c && !b.isFunction(c) && c
            };
            f.duration = b.fx.off ? 0 : typeof f.duration === "number" ? f.duration : f.duration in b.fx.speeds ? b.fx.speeds[f.duration] : b.fx.speeds._default;
            f.old =
                f.complete;
            f.complete = function() {
                f.queue !== false && b(this).dequeue();
                b.isFunction(f.old) && f.old.call(this)
            };
            return f
        },
        easing: {
            linear: function(a, c, b, f) {
                return b + f * a
            },
            swing: function(a, c, b, f) {
                return (-Math.cos(a * Math.PI) / 2 + 0.5) * f + b
            }
        },
        timers: [],
        fx: function(a, c, b) {
            this.options = c;
            this.elem = a;
            this.prop = b;
            if (!c.orig) c.orig = {}
        }
    });
    b.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (b.fx.step[this.prop] || b.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] !=
                null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a = parseFloat(b.css(this.elem, this.prop));
            return a && a > -1E4 ? a : 0
        },
        custom: function(a, c, e) {
            function f(a) {
                return d.step(a)
            }
            var d = this,
                i = b.fx;
            this.startTime = b.now();
            this.start = a;
            this.end = c;
            this.unit = e || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            f.elem = this.elem;
            f() && (b.timers.push(f) && !Oa) && (Oa = setInterval(i.tick, i.interval))
        },
        show: function() {
            this.options.orig[this.prop] = b.style(this.elem, this.prop);
            this.options.show = true;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            b(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = b.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function(a) {
            var c = b.now(),
                e = true;
            if (a || c >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                for (var f in this.options.curAnim) this.options.curAnim[f] !== true && (e = false);
                if (e) {
                    if (this.options.overflow !=
                        null && !b.support.shrinkWrapBlocks) {
                        var d = this.elem,
                            i = this.options;
                        b.each(["", "X", "Y"], function(a, c) {
                            d.style["overflow" + c] = i.overflow[a]
                        })
                    }
                    this.options.hide && b(this.elem).hide();
                    if (this.options.hide || this.options.show)
                        for (var n in this.options.curAnim) b.style(this.elem, n, this.options.orig[n]);
                    this.options.complete.call(this.elem)
                }
                return false
            }
            a = c - this.startTime;
            this.state = a / this.options.duration;
            c = this.options.easing || (b.easing.swing ? "swing" : "linear");
            this.pos = b.easing[this.options.specialEasing &&
                this.options.specialEasing[this.prop] || c](this.state, a, 0, 1, this.options.duration);
            this.now = this.start + (this.end - this.start) * this.pos;
            this.update();
            return true
        }
    };
    b.extend(b.fx, {
        tick: function() {
            for (var a = b.timers, c = 0; c < a.length; c++) a[c]() || a.splice(c--, 1);
            a.length || b.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(Oa);
            Oa = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                b.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] =
                    (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
            }
        }
    });
    b.expr && b.expr.filters && (b.expr.filters.animated = function(a) {
        return b.grep(b.timers, function(c) {
            return a === c.elem
        }).length
    });
    var ab = /^t(?:able|d|h)$/i,
        Ta = /^(?:body|html)$/i;
    b.fn.offset = "getBoundingClientRect" in l.documentElement ? function(a) {
        var c = this[0],
            e;
        if (a) return this.each(function(c) {
            b.offset.setOffset(this, a, c)
        });
        if (!c || !c.ownerDocument) return null;
        if (c === c.ownerDocument.body) return b.offset.bodyOffset(c);
        try {
            e = c.getBoundingClientRect()
        } catch (f) {}
        var d = c.ownerDocument,
            i = d.documentElement;
        if (!e || !b.contains(i, c)) return e || {
            top: 0,
            left: 0
        };
        c = d.body;
        d = A(d);
        return {
            top: e.top + (d.pageYOffset || b.support.boxModel && i.scrollTop || c.scrollTop) - (i.clientTop || c.clientTop || 0),
            left: e.left + (d.pageXOffset || b.support.boxModel && i.scrollLeft || c.scrollLeft) - (i.clientLeft || c.clientLeft || 0)
        }
    } : function(a) {
        var c = this[0];
        if (a) return this.each(function(c) {
            b.offset.setOffset(this, a, c)
        });
        if (!c || !c.ownerDocument) return null;
        if (c ===
            c.ownerDocument.body) return b.offset.bodyOffset(c);
        b.offset.initialize();
        var e, f = c.offsetParent,
            d = c.ownerDocument,
            i = d.documentElement,
            n = d.body;
        e = (d = d.defaultView) ? d.getComputedStyle(c, null) : c.currentStyle;
        for (var o = c.offsetTop, q = c.offsetLeft;
            (c = c.parentNode) && c !== n && c !== i;) {
            if (b.offset.supportsFixedPosition && e.position === "fixed") break;
            e = d ? d.getComputedStyle(c, null) : c.currentStyle;
            o = o - c.scrollTop;
            q = q - c.scrollLeft;
            if (c === f) {
                o = o + c.offsetTop;
                q = q + c.offsetLeft;
                if (b.offset.doesNotAddBorder && (!b.offset.doesAddBorderForTableAndCells ||
                        !ab.test(c.nodeName))) {
                    o = o + (parseFloat(e.borderTopWidth) || 0);
                    q = q + (parseFloat(e.borderLeftWidth) || 0)
                }
                f = c.offsetParent
            }
            if (b.offset.subtractsBorderForOverflowNotVisible && e.overflow !== "visible") {
                o = o + (parseFloat(e.borderTopWidth) || 0);
                q = q + (parseFloat(e.borderLeftWidth) || 0)
            }
        }
        if (e.position === "relative" || e.position === "static") {
            o = o + n.offsetTop;
            q = q + n.offsetLeft
        }
        if (b.offset.supportsFixedPosition && e.position === "fixed") {
            o = o + Math.max(i.scrollTop, n.scrollTop);
            q = q + Math.max(i.scrollLeft, n.scrollLeft)
        }
        return {
            top: o,
            left: q
        }
    };
    b.offset = {
        initialize: function() {
            var a = l.body,
                c = l.createElement("div"),
                e, f, d, i = parseFloat(b.css(a, "marginTop")) || 0;
            b.extend(c.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            c.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            a.insertBefore(c, a.firstChild);
            e = c.firstChild;
            f = e.firstChild;
            d = e.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = f.offsetTop !== 5;
            this.doesAddBorderForTableAndCells = d.offsetTop === 5;
            f.style.position = "fixed";
            f.style.top = "20px";
            this.supportsFixedPosition = f.offsetTop === 20 || f.offsetTop === 15;
            f.style.position = f.style.top = "";
            e.style.overflow = "hidden";
            e.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = f.offsetTop === -5;
            this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== i;
            a.removeChild(c);
            b.offset.initialize = b.noop
        },
        bodyOffset: function(a) {
            var c = a.offsetTop,
                e = a.offsetLeft;
            b.offset.initialize();
            if (b.offset.doesNotIncludeMarginInBodyOffset) {
                c = c + (parseFloat(b.css(a, "marginTop")) || 0);
                e = e + (parseFloat(b.css(a, "marginLeft")) || 0)
            }
            return {
                top: c,
                left: e
            }
        },
        setOffset: function(a, c, e) {
            var f = b.css(a, "position");
            if (f === "static") a.style.position = "relative";
            var d = b(a),
                i = d.offset(),
                n = b.css(a, "top"),
                o = b.css(a, "left"),
                q = f === "absolute" && b.inArray("auto", [n, o]) > -1,
                f = {},
                u = {};
            q && (u = d.position());
            n = q ? u.top : parseInt(n,
                10) || 0;
            o = q ? u.left : parseInt(o, 10) || 0;
            b.isFunction(c) && (c = c.call(a, e, i));
            if (c.top != null) f.top = c.top - i.top + n;
            if (c.left != null) f.left = c.left - i.left + o;
            "using" in c ? c.using.call(a, f) : d.css(f)
        }
    };
    b.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
                c = this.offsetParent(),
                e = this.offset(),
                f = Ta.test(c[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : c.offset();
            e.top = e.top - (parseFloat(b.css(a, "marginTop")) || 0);
            e.left = e.left - (parseFloat(b.css(a, "marginLeft")) || 0);
            f.top = f.top + (parseFloat(b.css(c[0], "borderTopWidth")) ||
                0);
            f.left = f.left + (parseFloat(b.css(c[0], "borderLeftWidth")) || 0);
            return {
                top: e.top - f.top,
                left: e.left - f.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || l.body; a && !Ta.test(a.nodeName) && b.css(a, "position") === "static";) a = a.offsetParent;
                return a
            })
        }
    });
    b.each(["Left", "Top"], function(a, c) {
        var e = "scroll" + c;
        b.fn[e] = function(c) {
            var d = this[0],
                i;
            return !d ? null : c !== j ? this.each(function() {
                    (i = A(this)) ? i.scrollTo(!a ? c : b(i).scrollLeft(), a ? c : b(i).scrollTop()): this[e] = c
                }) : (i = A(d)) ?
                "pageXOffset" in i ? i[a ? "pageYOffset" : "pageXOffset"] : b.support.boxModel && i.document.documentElement[e] || i.document.body[e] : d[e]
        }
    });
    b.each(["Height", "Width"], function(a, c) {
        var e = c.toLowerCase();
        b.fn["inner" + c] = function() {
            return this[0] ? parseFloat(b.css(this[0], e, "padding")) : null
        };
        b.fn["outer" + c] = function(a) {
            return this[0] ? parseFloat(b.css(this[0], e, a ? "margin" : "border")) : null
        };
        b.fn[e] = function(a) {
            var d = this[0];
            if (!d) return a == null ? null : this;
            if (b.isFunction(a)) return this.each(function(c) {
                var d = b(this);
                d[e](a.call(this, c, d[e]()))
            });
            if (b.isWindow(d)) return d.document.compatMode === "CSS1Compat" && d.document.documentElement["client" + c] || d.document.body["client" + c];
            if (d.nodeType === 9) return Math.max(d.documentElement["client" + c], d.body["scroll" + c], d.documentElement["scroll" + c], d.body["offset" + c], d.documentElement["offset" + c]);
            if (a === j) {
                var d = b.css(d, e),
                    i = parseFloat(d);
                return b.isNaN(i) ? d : i
            }
            return this.css(e, typeof a === "string" ? a : a + "px")
        }
    })
})(window);
var er_$144 = jQuery.noConflict();
er_jQueryOrig && (window.jQuery = er_jQueryOrig);
var er_swfobject22 = function() {
        function d() {
            if (!ca) {
                try {
                    var b = s.getElementsByTagName("body")[0].appendChild(s.createElement("span"));
                    b.parentNode.removeChild(b)
                } catch (d) {
                    return
                }
                ca = !0;
                for (var b = za.length, h = 0; h < b; h++) za[h]()
            }
        }

        function j(b) {
            ca ? b() : za[za.length] = b
        }

        function y(b) {
            if (typeof W.addEventListener != F) W.addEventListener("load", b, !1);
            else if (typeof s.addEventListener != F) s.addEventListener("load", b, !1);
            else if (typeof W.attachEvent != F) v(W, "onload", b);
            else if ("function" == typeof W.onload) {
                var d = W.onload;
                W.onload = function() {
                    d();
                    b()
                }
            } else W.onload = b
        }

        function M() {
            var b = s.getElementsByTagName("body")[0],
                d = s.createElement(fa);
            d.setAttribute("type", ga);
            var h = b.appendChild(d);
            if (h) {
                var k = 0;
                (function() {
                    if (typeof h.GetVariable != F) {
                        var g = h.GetVariable("$version");
                        g && (g = g.split(" ")[1].split(","), r.pv = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)])
                    } else if (10 > k) {
                        k++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                    b.removeChild(d);
                    h = null;
                    la()
                })()
            } else la()
        }

        function la() {
            var b = pa.length;
            if (0 < b)
                for (var d = 0; d <
                    b; d++) {
                    var g = pa[d].id,
                        k = pa[d].callbackFn,
                        j = {
                            success: !1,
                            id: g
                        };
                    if (0 < r.pv[0]) {
                        var I = D(g);
                        if (I)
                            if (N(pa[d].swfVersion) && !(r.wk && 312 > r.wk)) l(g, !0), k && (j.success = !0, j.ref = p(g), k(j));
                            else if (pa[d].expressInstall && ia()) {
                            j = {};
                            j.data = pa[d].expressInstall;
                            j.width = I.getAttribute("width") || "0";
                            j.height = I.getAttribute("height") || "0";
                            I.getAttribute("class") && (j.styleclass = I.getAttribute("class"));
                            I.getAttribute("align") && (j.align = I.getAttribute("align"));
                            for (var P = {}, I = I.getElementsByTagName("param"), A = I.length,
                                    s = 0; s < A; s++) "movie" != I[s].getAttribute("name").toLowerCase() && (P[I[s].getAttribute("name")] = I[s].getAttribute("value"));
                            G(j, P, g, k)
                        } else h(I), k && k(j)
                    } else if (l(g, !0), k) {
                        if ((g = p(g)) && typeof g.SetVariable != F) j.success = !0, j.ref = g;
                        k(j)
                    }
                }
        }

        function p(b) {
            var d = null;
            if ((b = D(b)) && "OBJECT" == b.nodeName)
                if (typeof b.SetVariable != F) d = b;
                else if (b = b.getElementsByTagName(fa)[0]) d = b;
            return d
        }

        function ia() {
            return !ma && N("6.0.65") && (r.win || r.mac) && !(r.wk && 312 > r.wk)
        }

        function G(b, d, h, l) {
            ma = !0;
            Fa = l || null;
            ja = {
                success: !1,
                id: h
            };
            var j = D(h);
            if (j) {
                "OBJECT" == j.nodeName ? (B = g(j), ya = null) : (B = j, ya = h);
                b.id = ua;
                if (typeof b.width == F || !/%$/.test(b.width) && 310 > parseInt(b.width, 10)) b.width = "310";
                if (typeof b.height == F || !/%$/.test(b.height) && 137 > parseInt(b.height, 10)) b.height = "137";
                s.title = s.title.slice(0, 47) + " - Flash Player Installation";
                l = r.ie && r.win ? "ActiveX" : "PlugIn";
                l = "MMredirectURL=" + encodeURI(W.location).toString().replace(/&/g, "%26") + "&MMplayerType=" + l + "&MMdoctitle=" + s.title;
                d.flashvars = typeof d.flashvars != F ? d.flashvars + ("&" + l) :
                    l;
                r.ie && (r.win && 4 != j.readyState) && (l = s.createElement("div"), h += "SWFObjectNew", l.setAttribute("id", h), j.parentNode.insertBefore(l, j), j.style.display = "none", function() {
                    j.readyState == 4 ? j.parentNode.removeChild(j) : setTimeout(arguments.callee, 10)
                }());
                k(b, d, h)
            }
        }

        function h(b) {
            if (r.ie && r.win && 4 != b.readyState) {
                var d = s.createElement("div");
                b.parentNode.insertBefore(d, b);
                d.parentNode.replaceChild(g(b), d);
                b.style.display = "none";
                (function() {
                    4 == b.readyState ? b.parentNode.removeChild(b) : setTimeout(arguments.callee,
                        10)
                })()
            } else b.parentNode.replaceChild(g(b), b)
        }

        function g(b) {
            var d = s.createElement("div");
            if (r.win && r.ie) d.innerHTML = b.innerHTML;
            else if (b = b.getElementsByTagName(fa)[0])
                if (b = b.childNodes)
                    for (var h = b.length, g = 0; g < h; g++) !(1 == b[g].nodeType && "PARAM" == b[g].nodeName) && 8 != b[g].nodeType && d.appendChild(b[g].cloneNode(!0));
            return d
        }

        function k(b, d, h) {
            var g, k = D(h);
            if (r.wk && 312 > r.wk) return g;
            if (k)
                if (typeof b.id == F && (b.id = h), r.ie && r.win) {
                    var l = "",
                        j;
                    for (j in b) b[j] != Object.prototype[j] && ("data" == j.toLowerCase() ?
                        d.movie = b[j] : "styleclass" == j.toLowerCase() ? l += ' class="' + b[j] + '"' : "classid" != j.toLowerCase() && (l += " " + j + '="' + b[j] + '"'));
                    j = "";
                    for (var I in d) d[I] != Object.prototype[I] && (j += '<param name="' + I + '" value="' + d[I] + '" />');
                    k.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + l + ">" + j + "</object>";
                    ta[ta.length] = b.id;
                    g = D(b.id)
                } else {
                    I = s.createElement(fa);
                    I.setAttribute("type", ga);
                    for (var p in b) b[p] != Object.prototype[p] && ("styleclass" == p.toLowerCase() ? I.setAttribute("class", b[p]) : "classid" !=
                        p.toLowerCase() && I.setAttribute(p, b[p]));
                    for (l in d) d[l] != Object.prototype[l] && "movie" != l.toLowerCase() && (b = I, j = l, p = d[l], h = s.createElement("param"), h.setAttribute("name", j), h.setAttribute("value", p), b.appendChild(h));
                    k.parentNode.replaceChild(I, k);
                    g = I
                }
            return g
        }

        function P(b) {
            var d = D(b);
            d && "OBJECT" == d.nodeName && (r.ie && r.win ? (d.style.display = "none", function() {
                if (4 == d.readyState) {
                    var h = D(b);
                    if (h) {
                        for (var g in h) "function" == typeof h[g] && (h[g] = null);
                        h.parentNode.removeChild(h)
                    }
                } else setTimeout(arguments.callee,
                    10)
            }()) : d.parentNode.removeChild(d))
        }

        function D(b) {
            var d = null;
            try {
                d = s.getElementById(b)
            } catch (h) {}
            return d
        }

        function v(b, d, h) {
            b.attachEvent(d, h);
            ra[ra.length] = [b, d, h]
        }

        function N(b) {
            var d = r.pv,
                b = b.split(".");
            b[0] = parseInt(b[0], 10);
            b[1] = parseInt(b[1], 10) || 0;
            b[2] = parseInt(b[2], 10) || 0;
            return d[0] > b[0] || d[0] == b[0] && d[1] > b[1] || d[0] == b[0] && d[1] == b[1] && d[2] >= b[2] ? !0 : !1
        }

        function A(b, d, h, g) {
            if (!r.ie || !r.mac) {
                var k = s.getElementsByTagName("head")[0];
                if (k) {
                    h = h && "string" == typeof h ? h : "screen";
                    g && (ka = J = null);
                    if (!J ||
                        ka != h) g = s.createElement("style"), g.setAttribute("type", "text/css"), g.setAttribute("media", h), J = k.appendChild(g), r.ie && (r.win && typeof s.styleSheets != F && 0 < s.styleSheets.length) && (J = s.styleSheets[s.styleSheets.length - 1]), ka = h;
                    r.ie && r.win ? J && typeof J.addRule == fa && J.addRule(b, d) : J && typeof s.createTextNode != F && J.appendChild(s.createTextNode(b + " {" + d + "}"))
                }
            }
        }

        function l(b, d) {
            if (V) {
                var h = d ? "visible" : "hidden";
                ca && D(b) ? D(b).style.visibility = h : A("#" + b, "visibility:" + h)
            }
        }

        function b(b) {
            return null != /[\\\"<>\.;]/.exec(b) &&
                typeof encodeURIComponent != F ? encodeURIComponent(b) : b
        }
        var F = "undefined",
            fa = "object",
            ga = "application/x-shockwave-flash",
            ua = "SWFObjectExprInst",
            W = window,
            s = document,
            $ = navigator,
            I = !1,
            za = [function() {
                I ? M() : la()
            }],
            pa = [],
            ta = [],
            ra = [],
            B, ya, Fa, ja, ca = !1,
            ma = !1,
            J, ka, V = !0,
            r = function() {
                var b = typeof s.getElementById != F && typeof s.getElementsByTagName != F && typeof s.createElement != F,
                    d = $.userAgent.toLowerCase(),
                    h = $.platform.toLowerCase(),
                    g = h ? /win/.test(h) : /win/.test(d),
                    h = h ? /mac/.test(h) : /mac/.test(d),
                    d = /webkit/.test(d) ?
                    parseFloat(d.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                    k = !+"\x0B1",
                    l = [0, 0, 0],
                    j = null;
                if (typeof $.plugins != F && typeof $.plugins["Shockwave Flash"] == fa) {
                    if ((j = $.plugins["Shockwave Flash"].description) && !(typeof $.mimeTypes != F && $.mimeTypes[ga] && !$.mimeTypes[ga].enabledPlugin)) I = !0, k = !1, j = j.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), l[0] = parseInt(j.replace(/^(.*)\..*$/, "$1"), 10), l[1] = parseInt(j.replace(/^.*\.(.*)\s.*$/, "$1"), 10), l[2] = /[a-zA-Z]/.test(j) ? parseInt(j.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                } else if (typeof W.ActiveXObject !=
                    F) try {
                    var p = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    if (p && (j = p.GetVariable("$version"))) k = !0, j = j.split(" ")[1].split(","), l = [parseInt(j[0], 10), parseInt(j[1], 10), parseInt(j[2], 10)]
                } catch (P) {}
                return {
                    w3: b,
                    pv: l,
                    wk: d,
                    ie: k,
                    win: g,
                    mac: h
                }
            }();
        (function() {
            r.w3 && ((typeof s.readyState != F && "complete" == s.readyState || typeof s.readyState == F && (s.getElementsByTagName("body")[0] || s.body)) && d(), ca || (typeof s.addEventListener != F && s.addEventListener("DOMContentLoaded", d, !1), r.ie && r.win && (s.attachEvent("onreadystatechange",
                function() {
                    "complete" == s.readyState && (s.detachEvent("onreadystatechange", arguments.callee), d())
                }), W == top && function() {
                if (!ca) {
                    try {
                        s.documentElement.doScroll("left")
                    } catch (b) {
                        setTimeout(arguments.callee, 0);
                        return
                    }
                    d()
                }
            }()), r.wk && function() {
                ca || (/loaded|complete/.test(s.readyState) ? d() : setTimeout(arguments.callee, 0))
            }(), y(d)))
        })();
        (function() {
            r.ie && r.win && window.attachEvent("onunload", function() {
                for (var b = ra.length, d = 0; d < b; d++) ra[d][0].detachEvent(ra[d][1], ra[d][2]);
                b = ta.length;
                for (d = 0; d < b; d++) P(ta[d]);
                for (var h in r) r[h] = null;
                r = null;
                for (var g in er_swfobject22) er_swfobject22[g] = null;
                er_swfobject22 = null
            })
        })();
        return {
            registerObject: function(b, d, h, g) {
                if (r.w3 && b && d) {
                    var k = {};
                    k.id = b;
                    k.swfVersion = d;
                    k.expressInstall = h;
                    k.callbackFn = g;
                    pa[pa.length] = k;
                    l(b, !1)
                } else g && g({
                    success: !1,
                    id: b
                })
            },
            getObjectById: function(b) {
                if (r.w3) return p(b)
            },
            embedSWF: function(b, d, h, g, I, p, P, D, s, A) {
                var v = {
                    success: !1,
                    id: d
                };
                r.w3 && !(r.wk && 312 > r.wk) && b && d && h && g && I ? (l(d, !1), j(function() {
                    h += "";
                    g += "";
                    var j = {};
                    if (s && typeof s === fa)
                        for (var r in s) j[r] =
                            s[r];
                    j.data = b;
                    j.width = h;
                    j.height = g;
                    r = {};
                    if (D && typeof D === fa)
                        for (var B in D) r[B] = D[B];
                    if (P && typeof P === fa)
                        for (var y in P) r.flashvars = typeof r.flashvars != F ? r.flashvars + ("&" + y + "=" + P[y]) : y + "=" + P[y];
                    if (N(I)) B = k(j, r, d), j.id == d && l(d, !0), v.success = !0, v.ref = B;
                    else {
                        if (p && ia()) {
                            j.data = p;
                            G(j, r, d, A);
                            return
                        }
                        l(d, !0)
                    }
                    A && A(v)
                })) : A && A(v)
            },
            switchOffAutoHideShow: function() {
                V = !1
            },
            ua: r,
            getFlashPlayerVersion: function() {
                return {
                    major: r.pv[0],
                    minor: r.pv[1],
                    release: r.pv[2]
                }
            },
            hasFlashPlayerVersion: N,
            createSWF: function(b, d, h) {
                if (r.w3) return k(b,
                    d, h)
            },
            showExpressInstall: function(b, d, h, g) {
                r.w3 && ia() && G(b, d, h, g)
            },
            removeSWF: function(b) {
                r.w3 && P(b)
            },
            createCSS: function(b, d, h, g) {
                r.w3 && A(b, d, h, g)
            },
            addDomLoadEvent: j,
            addLoadEvent: y,
            getQueryParamValue: function(d) {
                var h = s.location.search || s.location.hash;
                if (h) {
                    /\?/.test(h) && (h = h.split("?")[1]);
                    if (null == d) return b(h);
                    for (var h = h.split("&"), g = 0; g < h.length; g++)
                        if (h[g].substring(0, h[g].indexOf("=")) == d) return b(h[g].substring(h[g].indexOf("=") + 1))
                }
                return ""
            },
            expressInstallCallback: function() {
                if (ma) {
                    var b =
                        D(ua);
                    b && B && (b.parentNode.replaceChild(B, b), ya && (l(ya, !0), r.ie && r.win && (B.style.display = "block")), Fa && Fa(ja));
                    ma = !1
                }
            }
        }
    }(),
    er_$f = function(d) {
        function j(d) {
            return new j.fn.init(d)
        }

        function y(h, g, k) {
            if (!k.contentWindow.postMessage) return !1;
            var j = k.getAttribute("src").split("?")[0],
                h = JSON.stringify({
                    method: h,
                    value: g
                });
            "//" === j.substr(0, 2) && (j = d.location.protocol + j);
            k.contentWindow.postMessage(h, j)
        }

        function M(d) {
            var g, k;
            try {
                g = JSON.parse(d.data), k = g.event || g.method
            } catch (j) {}
            "ready" == k && !ia && (ia = !0);
            if (d.origin !=
                G) return !1;
            var d = g.value,
                D = g.data,
                v = "" === v ? null : g.player_id;
            g = v ? p[v][k] : p[k];
            k = [];
            if (!g) return !1;
            void 0 !== d && k.push(d);
            D && k.push(D);
            v && k.push(v);
            return 0 < k.length ? g.apply(null, k) : g.call()
        }

        function la(d, g, k) {
            k ? (p[k] || (p[k] = {}), p[k][d] = g) : p[d] = g
        }
        var p = {},
            ia = !1,
            G = "";
        j.fn = j.prototype = {
            element: null,
            init: function(h) {
                "string" === typeof h && (h = document.getElementById(h));
                this.element = h;
                h = this.element.getAttribute("src");
                "//" === h.substr(0, 2) && (h = d.location.protocol + h);
                for (var h = h.split("/"), g = "", k = 0, j = h.length; k <
                    j; k++) {
                    if (3 > k) g += h[k];
                    else break;
                    2 > k && (g += "/")
                }
                G = g;
                return this
            },
            api: function(d, g) {
                if (!this.element || !d) return !1;
                var k = this.element,
                    j = "" !== k.id ? k.id : null,
                    p = !g || !g.constructor || !g.call || !g.apply ? g : null,
                    v = g && g.constructor && g.call && g.apply ? g : null;
                v && la(d, v, j);
                y(d, p, k);
                return this
            },
            addEvent: function(d, g) {
                if (!this.element) return !1;
                var k = this.element,
                    j = "" !== k.id ? k.id : null;
                la(d, g, j);
                "ready" != d ? y("addEventListener", d, k) : "ready" == d && ia && g.call(null, j);
                return this
            },
            removeEvent: function(d) {
                if (!this.element) return !1;
                var g = this.element,
                    k = "" !== g.id ? g.id : null;
                a: {
                    if (k && p[k]) {
                        if (!p[k][d]) {
                            k = !1;
                            break a
                        }
                        p[k][d] = null
                    } else {
                        if (!p[d]) {
                            k = !1;
                            break a
                        }
                        p[d] = null
                    }
                    k = !0
                }
                "ready" != d && k && y("removeEventListener", d, g)
            }
        };
        j.fn.init.prototype = j.fn;
        d.addEventListener ? d.addEventListener("message", M, !1) : d.attachEvent("onmessage", M);
        return j
    }(window);
(function(d, j, y, M, la, p) {
    if ("undefined" === typeof y.erO1I) {
        y.erO1I = 1;
        d && function() {
            d.extend(d.fn, {
                contextMenu: function(h, g) {
                    if (void 0 == h.menu) return !1;
                    void 0 == h.inSpeed && (h.inSpeed = 150);
                    void 0 == h.outSpeed && (h.outSpeed = 75);
                    0 == h.inSpeed && (h.inSpeed = -1);
                    0 == h.outSpeed && (h.outSpeed = -1);
                    d(this).each(function() {
                        var k = d(this),
                            p = d(k).offset();
                        d("#" + h.menu).addClass("contextMenu");
                        d(this).mousedown(function(D) {
                            if (D.button == 2) {
                                D.stopPropagation();
                                d(this).mouseup(function(v) {
                                    v.stopPropagation();
                                    var N = d(this);
                                    d(this).unbind(v);
                                    if (D.button == 2) {
                                        d(".contextMenu").hide();
                                        var A = d("#" + h.menu);
                                        if (d(k).hasClass("disabled")) return false;
                                        var l, b;
                                        v.pageX ? l = v.pageX : l = v.clientX + void 0;
                                        v.pageY ? b = v.pageY : b = v.clientY + void 0;
                                        d(j).unbind("click");
                                        d(A).css({
                                            top: b,
                                            left: l
                                        }).fadeIn(h.inSpeed);
                                        d(A).find("A").mouseover(function() {
                                            d(A).find("LI.hover").removeClass("hover");
                                            d(this).parent().addClass("hover")
                                        }).mouseout(function() {
                                            d(A).find("LI.hover").removeClass("hover")
                                        });
                                        d(j).keypress(function(b) {
                                            switch (b.keyCode) {
                                                case 38:
                                                    if (d(A).find("LI.hover").size() ==
                                                        0) d(A).find("LI:last").addClass("hover");
                                                    else {
                                                        d(A).find("LI.hover").removeClass("hover").prevAll("LI:not(.disabled)").eq(0).addClass("hover");
                                                        d(A).find("LI.hover").size() == 0 && d(A).find("LI:last").addClass("hover")
                                                    }
                                                    break;
                                                case 40:
                                                    if (d(A).find("LI.hover").size() == 0) d(A).find("LI:first").addClass("hover");
                                                    else {
                                                        d(A).find("LI.hover").removeClass("hover").nextAll("LI:not(.disabled)").eq(0).addClass("hover");
                                                        d(A).find("LI.hover").size() == 0 && d(A).find("LI:first").addClass("hover")
                                                    }
                                                    break;
                                                case 13:
                                                    d(A).find("LI.hover A").trigger("click");
                                                    break;
                                                case 27:
                                                    d(j).trigger("click")
                                            }
                                        });
                                        d("#" + h.menu).find("A").unbind("click");
                                        d("#" + h.menu).find("LI:not(.disabled) A").click(function() {
                                            d(j).unbind("click").unbind("keypress");
                                            d(".contextMenu").hide();
                                            g && g(d(this).attr("href").substr(1), d(N), {
                                                x: l - p.left,
                                                y: b - p.top,
                                                docX: l,
                                                docY: b
                                            });
                                            return false
                                        });
                                        setTimeout(function() {
                                            d(j).click(function() {
                                                d(j).unbind("click").unbind("keypress");
                                                d(A).fadeOut(h.outSpeed);
                                                return false
                                            })
                                        }, 0)
                                    }
                                })
                            }
                        });
                        d.browser.mozilla ? d("#" + h.menu).each(function() {
                                d(this).css({
                                    MozUserSelect: "none"
                                })
                            }) :
                            d.browser.msie ? d("#" + h.menu).each(function() {
                                d(this).bind("selectstart.disableTextSelect", function() {
                                    return false
                                })
                            }) : d("#" + h.menu).each(function() {
                                d(this).bind("mousedown.disableTextSelect", function() {
                                    return false
                                })
                            });
                        d(k).add(d("UL.contextMenu")).bind("contextmenu", function() {
                            return false
                        })
                    });
                    return d(this)
                },
                disableContextMenuItems: function(h) {
                    if (void 0 == h) return d(this).find("LI").addClass("disabled"), d(this);
                    d(this).each(function() {
                        if (void 0 != h)
                            for (var g = h.split(","), k = 0; k < g.length; k++) d(this).find('A[href="' +
                                g[k] + '"]').parent().addClass("disabled")
                    });
                    return d(this)
                },
                enableContextMenuItems: function(h) {
                    if (void 0 == h) return d(this).find("LI.disabled").removeClass("disabled"), d(this);
                    d(this).each(function() {
                        if (void 0 != h)
                            for (var g = h.split(","), k = 0; k < g.length; k++) d(this).find('A[href="' + g[k] + '"]').parent().removeClass("disabled")
                    });
                    return d(this)
                },
                disableContextMenu: function() {
                    d(this).each(function() {
                        d(this).addClass("disabled")
                    });
                    return d(this)
                },
                enableContextMenu: function() {
                    d(this).each(function() {
                        d(this).removeClass("disabled")
                    });
                    return d(this)
                },
                destroyContextMenu: function() {
                    d(this).each(function() {
                        d(this).unbind("mousedown").unbind("mouseup")
                    });
                    return d(this)
                }
            })
        }(d);
        (function(d) {
            function g(g) {
                var k = g || y.event,
                    j = [].slice.call(arguments, 1),
                    p = 0,
                    A = 0,
                    l = 0,
                    g = d.event.fix(k);
                g.type = "mousewheel";
                g.wheelDelta && (p = g.wheelDelta / 120);
                g.detail && (p = -g.detail / 3);
                l = p;
                void 0 !== k.axis && k.axis === k.HORIZONTAL_AXIS && (l = 0, A = -1 * p);
                void 0 !== k.wheelDeltaY && (l = k.wheelDeltaY / 120);
                void 0 !== k.wheelDeltaX && (A = -1 * k.wheelDeltaX / 120);
                j.unshift(g, p, A, l);
                return d.event.handle.apply(this,
                    j)
            }
            var k = ["DOMMouseScroll", "mousewheel"];
            d.event.special.mousewheel = {
                setup: function() {
                    if (this.addEventListener)
                        for (var d = k.length; d;) this.addEventListener(k[--d], g, !1);
                    else this.onmousewheel = g
                },
                teardown: function() {
                    if (this.removeEventListener)
                        for (var d = k.length; d;) this.removeEventListener(k[--d], g, !1);
                    else this.onmousewheel = null
                }
            };
            d.fn.extend({
                mousewheel: function(d) {
                    return d ? this.bind("mousewheel", d) : this.trigger("mousewheel")
                },
                unmousewheel: function(d) {
                    return this.unbind("mousewheel", d)
                }
            })
        })(d);
        (function(d) {
            d.fn.iosSwipe =
                function(g) {
                    var k = {
                            dimension: "x",
                            threshold: {
                                x: 30,
                                tolerance: 0.5
                            },
                            killEvents: !0,
                            swipe: function() {}
                        },
                        g = d.extend(k, g);
                    return !this ? !1 : this.each(function() {
                        var g, j, v, N;

                        function A(b) {
                            k.killEvents && b.preventDefault();
                            g = b.targetTouches[0].pageX;
                            j = b.targetTouches[0].pageY
                        }

                        function l() {
                            var b = v - j,
                                d = N - g,
                                h = p.abs(d),
                                l = p.abs(b);
                            k.dimension == "x" ? h > k.threshold.x && l < h * k.threshold.tolerance && k.swipe(d > 0) : l > k.threshold.x && h < l * k.threshold.tolerance && k.swipe(b > 0)
                        }

                        function b(b) {
                            N = b.targetTouches[0].pageX;
                            v = b.targetTouches[0].pageY;
                            g = N;
                            j = v
                        }

                        function y() {}
                        d(this);
                        j = g = v = N = 0;
                        try {
                            this.addEventListener("touchstart", b, false);
                            this.addEventListener("touchmove", A, false);
                            this.addEventListener("touchend", l, false);
                            this.addEventListener("touchcancel", y, false)
                        } catch (M) {}
                    })
                }
        })(d);
        var ia = function() {
            function d(h) {
                if (j.all && !y[h])
                    for (var g = 0; g < j.forms.length; g++)
                        if (j.forms[g][h]) return j.forms[g][h];
                return j.all ? y[h] : j[h]
            }
            var g = [],
                k, p = "",
                D = {},
                v = -1;
            return {
                determineFlashSupport: function() {
                    return M.hasFlashPlayerVersion("9")
                },
                setup: function(d, h) {
                    p =
                        d;
                    D = h;
                    M.hasFlashPlayerVersion("9") && M.createCSS("p.audioplayer_container span", "visibility:hidden;height:24px;overflow:hidden;padding:0;border:none;")
                },
                getPlayer: function(g) {
                    return d(g)
                },
                addListener: function(g, k, j) {
                    d(g).addListener(k, j)
                },
                embed: function(d, h) {
                    var k = {},
                        b, j = {};
                    D.enableCallbacks && (j.allowScriptAccess = "always");
                    var v = {},
                        y = {};
                    for (b in D) k[b] = D[b];
                    for (b in h) k[b] = h[b];
                    "yes" == k.transparentpagebg ? (j.bgcolor = "#FFFFFF", j.wmode = "transparent") : (k.pagebg && (j.bgcolor = "#" + k.pagebg), j.wmode = "opaque");
                    j.menu = "false";
                    for (b in k) "pagebg" == b || ("width" == b || "transparentpagebg" == b) || (v[b] = k[b]);
                    y.name = d;
                    y.style = "outline: none";
                    v.playerID = d;
                    M.embedSWF(p, d, k.width.toString(), "24", "9", h.expressInstall || !1, v, j, y);
                    g.push(d)
                },
                syncVolumes: function(k, j) {
                    v = j;
                    for (var l = 0; l < g.length; l++) g[l] != k && d(g[l]).setVolume(v)
                },
                activate: function(g) {
                    k && k != g && d(k).close();
                    k = g
                },
                load: function(g, k, j, b) {
                    d(g).load(k, j, b)
                },
                close: function(g) {
                    d(g).close();
                    g == k && (k = null)
                },
                open: function(g, k) {
                    void 0 == k && (k = 1);
                    d(g).open(void 0 == k ? 0 : k -
                        1)
                },
                getVolume: function() {
                    return v
                }
            }
        }();
        d.extend(d.easing, {
            def: "easeOutQuad",
            swing: function(h, g, k, j, p) {
                return d.easing[d.easing.def](h, g, k, j, p)
            },
            easeInQuad: function(d, g, k, j, p) {
                return j * (g /= p) * g + k
            },
            easeOutQuad: function(d, g, k, j, p) {
                return -j * (g /= p) * (g - 2) + k
            },
            easeInOutQuad: function(d, g, k, j, p) {
                return 1 > (g /= p / 2) ? j / 2 * g * g + k : -j / 2 * (--g * (g - 2) - 1) + k
            },
            easeInCubic: function(d, g, k, j, p) {
                return j * (g /= p) * g * g + k
            },
            easeOutCubic: function(d, g, k, j, p) {
                return j * ((g = g / p - 1) * g * g + 1) + k
            },
            easeInExpo: function(d, g, k, j, y) {
                return 0 == g ? k : j *
                    p.pow(2, 10 * (g / y - 1)) + k
            },
            easeOutExpo: function(d, g, k, j, y) {
                return g == y ? k + j : j * (-p.pow(2, -10 * g / y) + 1) + k
            },
            easeInOutExpo: function(d, g, k, j, y) {
                return 0 == g ? k : g == y ? k + j : 1 > (g /= y / 2) ? j / 2 * p.pow(2, 10 * (g - 1)) + k : j / 2 * (-p.pow(2, -10 * --g) + 2) + k
            }
        });
        d.extend(d.fn, {
            er_cssValueObj: function(d) {
                for (var g = {}, j = 0; j < d.length; j++) g[d[j]] = this.css(d[j]);
                return g
            },
            er_cssPositionToNumber: function(h) {
                h = d(this[0]).css(h);
                return void 0 == h || null == h || "auto" == h ? 0 : !isNaN(Number(h.split("px").join(""))) ? Number(h.split("px").join("")) : 0
            },
            er_x: function(d) {
                return 1 >
                    arguments.length ? this.er_cssPositionToNumber("left") : this.css({
                        left: d
                    })
            },
            er_y: function(d) {
                return 1 > arguments.length ? this.er_cssPositionToNumber("top") : this.css({
                    top: d
                })
            },
            er_cssWidth: function(d) {
                return 1 > arguments.length ? this.er_cssPositionToNumber("width") : this.css({
                    width: d
                })
            },
            er_cssHeight: function(d) {
                return 1 > arguments.length ? this.er_cssPositionToNumber("height") : this.css({
                    height: d
                })
            },
            er_alpha: function(d) {
                return 1 == arguments.length ? this.css({
                    opacity: d
                }) : this.css("opacity")
            },
            er_randomize: function(h) {
                return this.each(function() {
                    var g =
                        d(this),
                        j = g.children(h);
                    j.sort(function() {
                        return p.round(p.random()) - 0.5
                    });
                    g.children().remove(h);
                    g.append(j)
                })
            },
            er_extendDataObject: function(h, g) {
                return this.each(function() {
                    var j = d(this),
                        p = j.data(h) || {},
                        p = d.extend(p, g);
                    j.data(h, p)
                })
            },
            er_cloneDataObject: function(h) {
                return this.each(function() {
                    var g = d(this),
                        j = g.data(h);
                    j && g.data(h, d.extend({}, j))
                })
            }
        });
        d.fn.er_opacity = d.fn.er_alpha;
        var G = function() {
            d(y.er_preprocessCallbacks).each(function() {
                this.call(null, d)
            });
            var h = "http://";
            try {
                "https:" == j.location.protocol &&
                    (h = "https://")
            } catch (g) {}
            var k = "ontouchstart" in y,
                P = /AdobeAIR/i.test(navigator.userAgent),
                D = !1,
                v = [],
                N = {
                    dotBlack35: "dots/export/20_14_black_35.png",
                    dotBlack65: "dots/export/20_14_black_65.png",
                    dotWhite35: "dots/export/20_14_wite_35.png",
                    dotWhite65: "dots/export/20_14_wite_65.png",
                    vlbCloseUp: "video/x_up_export.png",
                    vlbCloseOver: "video/x_over_export.png",
                    videoPlayOverlay: "video/play_overlay.png"
                },
                A = h + "easyrotator.s3.amazonaws.com/1/i/rotator/",
                l = {},
                b;
            for (b in N) l[b] = A + N[b];
            var N = l,
                F = {
                    circleSmall: "circle_small_%L_%U_export.png",
                    circleBig: "circle_big_%L_%U_export.png",
                    rectSmall: "rect_small_%L_%U_export.png",
                    moonMed: "moon_med_%L_%U_export.png",
                    circleCozy: "circle_arrow2/%L_%U_export.png",
                    arrowMin: "minimal_arrows/%L_%U_export.png",
                    circlePunchSmall: "circlepunch_small/%L_%U.png"
                },
                G = {
                    circleSmall: ["A9klEQVRIx83XPQ6DIBQHcMeOjkycwyN4BMeOHsGRsQdzcWvSK0hoE9IrUDRgDMUqD+jzJf/Jj1+C8nwWxbEqdSqdq06nw5x05lhlzt0spdScvSI6jQfaS2OuBcE1AHRTh8AXnTYBatOae/6EU6Nf+BacA13jXrjOiC7P3IXJH1AbsoYhW4b1fX+fErrVLFxCUWUKgM9NpopBpxrH8UkpvQXcYzLnVgdGOeehKDOmt/d6MwzDIwFqe/uxk6WU70SoTTgqhHhFoieHcy012suFtp3QGkh0ywTAZfRHArDUzSk+i2iDAOrogzrsoY23qAM9+i9M1p+2Dy8DlARr/sMwAAAAAElFTkSuQmCC",
                        "A/klEQVRIx83Xuw2DMBAGYBZIZSoPwFCswRwskAGooGIBBkCiBInOddJG6Rwb2Qg5JuCzneOkv+LxSQYfR5KcKyqSi9xFOpHeSKeO5erc3eKcLzmqTKS0QEcp1bUguACAZgoX+CZSBUB1KnXPn3Bo9Avfg2OgW9wKFxHR9ZmbcPYHVCfbwpAt0zdN85Bx3WoaplCUq6rr2hVfmkzug8oax/FFCBkc7iHNpdWB0WmaXNFemdbea03btk8TTdN0ADwqaZ47mTH2DoTquKPzPPuiF4djLTXay4W2ndAaiHfLBMDU+yMBWOryEp9FtEEAdfRBHfbQxlvUgR79FybqT9sHs45SYNNv5/YAAAAASUVORK5CYII=", "A8ElEQVRIx9XXMQ6DMAwFUMaOjEycgyNwhIwdOQIjYw/Gkq1SzxClVaReIXVQUqE0FOwGrFr6E5AnATGmKLZVCWkgZ0gPGaL0/ljjz10sa+2UtaogIgGtRfhrSXBLAOO0GPgE6TKgIZ1f8yucG/3Al+A90DmehNsd0fczj+HqADSkmsOoLTOO49WFCIsAl1jU+voBn5pMs/WCuq4vSqm7nRURd+bU6oaDcWcmey8al1LeEGs4k/Z2pnBjzBOxBn1rOFxr/SDifwbnuNVsLxfbdmJrIGwtk+0jwfpZZBsEWEcf1mGPbbxlHejZf2F2/Wl7AWatkkevI1HgAAAAAElFTkSuQmCC",
                        "A70lEQVRIx9XXMQ6DIBQGYC/QjckDcCiuwTm4QA/gxsQFPIBJVxI253ZtulEw2BDEKq/iS1/yTypfovJ8Ns2+al2Yy9WldxmS9OEYC+eulrV2ylZRF5GBtiLCtSCYA8A0vAS+uHQHoHO6sOZX+Gh0ga/BNdAYz8K8Ivp55ilMT0Dn0Bgu2jJSyrsPEBYz3JaiNtQP+NRk2N4LCCE3rfXTRgXEvTm1uuFk3JvZ3luMK6UeBWt4E/Z25vBxHF8Fa8C3hseNMVD8z+AjbjXay4W2ndAaCFrLRPtIoH4W0QYB1NEHddhDG29RB3r0X5iqP21v/8VQ6imgpMEAAAAASUVORK5CYII="
                    ],
                    circleCozy: ["EE0lEQVRIx72XS0hUURjHbZRh8AWDTIqNigj5SjDETKeEpMiFbpIgJBfiok3gSiEt3eQiCFqIK3PpE0XIhbiQFiL4QDB1ofl+oIjiW8f31/e/fne4o82da0oX/jCc+/9+/3POPffcMz4+nq87LF+WmRXIsrLusu6x7KxIkV3a7oonUGp8hWH4gtmkCbQVFBQ8GBgY+LC2tvbz9PR0ly5daMM9eOBFjaYDJiMdUEdpkd5HDg8Pfzk5Odkjgxe8qJHZsApLGT3f9hjqx/JHjysqKp7t7u7+Pj8/J2h8fJwqKyspJyeHUlJS3IQ23INH9aMWDBm9v7DveBopDKE1NTWv0POzszNaWFigoqIiSk5ONiR4UYNaMMACU9hXnrtJpsRWWlr64vj4eI+LqKuri9LT0ykpKelaQg1qwQALTBm5RbJcozXL87i/tbU1dXR0pBQmJibeSGCABSbYkmFWR+0rKzCyr6/vG4zT09OUmppK8fHxNxIYYIEJtiy4QMlUemDLzs5OdzqdewcHB5Sfn0+xsbG3IrDABBsZMuXIvBhtZ2dn1f7+Pg0NDVFMTIwhtbW1KfLmAxNsZGhGrcx7HE9J387ODhUXF1N0dLRXtba2ut7dkpISXS+YYCMDWZKpbHUPeQHsb29vKysyKipKV9pQ/PbmBxNsZCBLMn3CWY+4kTY3N8lut+uKt0VXaEtLi1e/KrCRgSzJVDb5jI2NDYLCw8M9am5uzi1Uz3tZKh9Zkqk87Cfr6+sEhYWFedTs7KwruLm5Wdd7WSofWZJ5EcxfF4JsNpuu+vv7XeFNTU1e/apUvjZYmeqlpSXn6uqqsuWFhIToqrGx0RWO3978YIKNDO1UK4urt7f318rKChUWFpLVavWqhoYGV3hZWZmuF0ywkaFdXMrrVF1d/X15eZm6u7spODjYkOrr62l0dJQiIiJ0fWCCjQzt66RsILypv+XF4+TpoKysLAoKCroVgQUm2MjQbiCB8rAzuUfti4uL2NApNDSUAgICbiQwwAITbGRot0yzbNw4K70eHBxcmZ+fp7q6OrJYLDcSGGCBCbZkuD4SvppRP3Y4HB8nJiYO8c7W1tYqq9JsNl9LqEEtGGCBCfblz6LbQYD1PDc39yufnw5nZmaop6eHMjIyyM/Pz5DgRQ1qwQALzL8dBNyOPqwE1su0tLTPvPxXp6amCOro6KC8vDxl3zWZTG5CG+7Bo/pRCwZYwrxy9Lly2BMjzknvq6qqusbGxg4nJyfJiOBFDWqFkaB32LtyvJWpwXN5wyP6xN/cH+3t7ZMjIyOH/NxIK7ThHjzwokZq73s73no80LOS5DXAqnzHKmGVsz6JyqXtnXgypcbwgd7jXxiBxMmuk8ZysJ6KHNL2UDyR//IX5r/9afsDBV3YEgkKGaMAAAAASUVORK5CYII=",
                        "D/0lEQVRIx72XS0gbURSGfRQp4saFFtrgUkRbIYhNanxQtSiiCGJFtOJCURfFXYRg1U0FCxUX4q64FxdCF4ovXCk+QKyIaH0hiiEovjW+T88/npGJaSZjlQ78EO785/vnPubOTUCA7yuQFcwKYYWxwlmRrFcsEytKZJK2SPGESU2wMAxfMAdpAiPKyspeT05OOra3t0eurq6O6N6FNtyDB17UaB4gyMgDqL18Lk8fNTMz8+3y8vKYDF7wokZGI1xYSu/5ts/QZ6xQPHFjY+P7o6Oj3zc3NwStr69TZ2cnORwOqqqq8hDacA8e1Y9aMKT3ocIO9NVTGF50dHQU4Mmvr6/J5XJRS0sLVVRUGBK8qEEtGGCBKWyveQ+SIYmoq6v7cHFxccxFNDExQTU1NVReXv4goQa1YIAFpvT8uWTd9TZE5iN6f39/+fz8nMbHx4kXyqMEBlhggi0ZIWqvg2UFRrGxDcbNzU2qrKykkpKSRwkMsKQjbbLgwiRTeYKI7Ozsd263+/j09JSampqouLj4SQQWmGAjQ4Ycmbe97evraz45OaH5+XkqLCw0pJGREUX+fGCCjQxNr5Vxj1lZWRk/PDyk1tZWKigo8CsEqld7e7uuF0ywkYEsyVS2OjMvgJODgwPllcjPz9fV8PDwXSh++/ODCTYykCWZAS9Zb7mR9vb2KDc3V1cYNvUaGhry61cFNjKQJZnKJp+0u7tLUE5Ojk9tbW15hOp570vlI0sylclO3tnZISgrK8untMEDAwO63vtS+ciSzNtg/roQlJmZqau5ubm78P7+fr9+VSpfG6wMNb/obuyxRUVFlJ6erisEasP9+cEEGxnaoVYW1+jo6C+n00n8RaG0tDS/4nfS43XS84IJNjK0i0t5nbj4B+ZwbGyMkpOTDam3t5eWlpaIdyRdH5hgI0P7OikbSFxc3Ke1tTW3uk8nJSU9idT9GmxkaDeQMJnsVH6ino2NDZqenlbmxmq1PkpggAUm2MjQbpkhsnHjrPRxamrKiZNEd3c3JSYmPkpggAUm2JJx95EI1vTaarPZviwuLp7x0FBXVxelpKRQQkLCg4Qa1IIBFphg3/8sehwEWJl5eXnfFxYWzlZXV5WPeWlpKZnNZkOCFzWoBQMsMP92EPA4+rBiWVkWi+UrL3/X8vIyQYODg1RbW0sZGRkUHx/vIbThHjyqH7VggCVMr6OP12FPjDgnfW5ubu7n3eoMr40RwYsa1AojVu+w53W8laHBvBSbTKYGu93+s6enZ2l2dvaM5420QhvuwQMvaqQ22t/x1ueBnvVGXgOsymqWnVXPahDVS1u1eFKlxvCB3udfGIHEyK5jYdlYKSKbtJnFE/Uvf2H+25+2Pz9moPTjmXodAAAAAElFTkSuQmCC",
                        "EC0lEQVRIx72XS0hUURjHbZRhyAcMMio2KCJoZoIiZjolJEUudJMEIbkQFy4MXClEpZtcBEELcWUufaIIuRAX0kIEHwgmLjTfDxRRfOv4/vr+p+8OV23uXDO68Ifh3P/3+59z7rnnnvHz837dYvmzrKwglp0VxrrDcrKiRE5pCxNPkNT4C8P0BbNFF+goLCy8Pzg4+HZtbe376enpLl260IZ78MCLGl0HLGY6oI3SJr2PGhkZ+XRycrJHJi94USOzYReWGj3f9hoawLqNHldWVj7Z3d39eX5+TtD4+DhVVVVRbm4upaamXhDacA8ezY9aMGT0t4V9y9tIYQivra19gZ6fnZ3RwsICFRcXU3JysinBixrUggEWmMK+8twtMiWOioqKZ8fHx3tcRN3d3ZSRkUFJSUnXEmpQCwZYYMrIbZLlGa1Vnkfc1tbW1NHRkSpMTEy8kcAAC0ywJcOqjdpfVmBUf3//Fxinp6cpLS2NEhISbiQwwAITbFlwQZKpeuDIycnJcLvdewcHB1RQUEDx8fH/RGCBCTYyZMqR+Xu0XV1d1fv7+zQ8PEyxsbGGam9vV/Ll0wQm2MjQjVrN+12ekv6dnR0qKyujmJgYryovL/e8s21tbYZeTWCCjQxkSaba6lJ4Aexvb2+rFRkdHW0oBOrDffnBBBsZyJJMv0jWA26kzc1NcjqdptTa2uoJ563Spx9sZCBLMtUmn7mxsUFQZGSkaenD5+bmDL0aH1mSqR72o/X1dYIiIiJMq6WlxRM8Oztr6NX4yJLM38H8dSHI4XCYUnNzsyd0YGDAp1/j64PVVC8tLblXV1fVlhcaGmqopqYmTyh++/KDCTYy9FOtFldfX9+PlZUVKioqIrvd7lWlpaWe0MbGRkOvJjDBRoZ+canXqaam5uvy8jL19PRQSEiIoRoaGpR8+TSBCTYy9K+T2kB4U3/NC8TN00HZ2dkUHBz8TwQWmGAjQ7+BBMnDzuIedSwuLmJDp/DwcAoMDLyRwAALTLCRod8yrbJx46z0cmhoaGV+fp7q6+vJZrPdSGCABSbYkuH5SPjrRv3Q5XK9n5iYOMR7WVdXp1al1Wq9llCDWjDAAhPsy5/FCwcB1tO8vLzPfH46nJmZod7eXsrMzKSAgABTghc1qAUDLDD/dBC4cPRh3WM9T09P/8jLf3Vqaoqgzs5Oys/PV/uuxWK5ILThHjyaH7VggCXMK0efK4c9MeKc9Ka6urp7bGzscHJykswIXtSgVhj3jA57V463MjV4Lq94RB/4O/yto6NjcnR09JCfG+mFNtyDB17USG2cr+Ot1wM9K0leA6zKElY56x3rg+idtJWIJ0tqTB/ovf6FEchd2XXSWS7WY5FL2lLEE/U3f2H+25+2X+471y4GNnBSAAAAAElFTkSuQmCC",
                        "EAElEQVRIx72XXShkYRjHfWzTJjcu2NqdXErsqkmWNT5abCRSshIrF4SLzR0li5sVWysXcre5lwu1F+SruSIfJSuJHR+JSOSb8f3s8z+eM50xO2eOHe2pf03v+T+//3k/znve8fPzfPmzAlkmVjArhBXGesUys8JFZmkLE0+w1AQKw/AFc4AmMLS0tPT11NRU/e7uru3m5uaEHlxowz144EWN5gECjDyA2svn8vThs7Oz366vr0/J4AUvamQ0QoSl9J5vewx9xgrCEzc1Nb0/OTn5fXd3R9D6+jp1d3dTfX09VVZWughtuAeP6kctGNL7IGH7e+opDC+6urry8eS3t7e0s7NDbW1tVF5ebkjwoga1YIAFprDd5j1AhiS0rq7uw9XV1SkX0eTkJFVXV1NZWdmjhBrUggEWmNLz55Ll7K1J5iPi8PBw+fLykiYmJogXik8CAywwwZYMk9rrQFmB4WzsgHFzc5MqKiqouLjYJ4EBlnSkQxZcsGQqTxCalZX1zuFwnJ6fn1NzczMVFRU9icACE2xkyJAj8763AwMDLWdnZ7SwsEAFBQW6stlsirz5VIEJNjI0vVbGPXJlZWXi+PiY2tvbKT8/36M6Ozud7yzC9byqwAQbGciSTGWrs/ACODs6OlJeiby8PF2Njo46w/Hbmx9MsJGBLMn0e8l6y410cHBAOTk5hjQyMuIMx1B684ONDGRJprLJJ+7v7xOUnZ1tWNrwra0tXa/KR5ZkKpOdtLe3R1BmZqZhDQ0NuQTreVU+siTzPpi/LgRlZGQY0uDgoDN0fn7eq1/la4OVoeYX3YE9trCwkNLS0nSlDcVvb34wwUaGdqiVxTU2NvZre3ub+ItCqampHtXa2uoM5fdS16sKTLCRoV1cyuvE7+cPzNP4+DglJSXpqr+/X5E3nyowwUaG9nVSNpDo6OhPa2trDnWfTkxMfBKp+zXYyNBuIMEy2Sn8RH0bGxs0MzOjzE1CQoJPAgMsMMFGhnbLNMnGjbPSx+np6W2cJHp7eykuLs4ngQEWmGBLhvMjEajpdYLVav2ytLR0wUNDPT09lJycTLGxsY8SalALBlhggv3ws+hyEGBl5Obmfl9cXLxYXV1VPuYlJSVksVgMCV7UoBYMsMD820HA5ejDimJlxsfHf+Xlv7O8vEzQ8PAw1dTUUHp6OsXExLgIbbgHj+pHLRhgCdPt6ON22BMjzkmfW1paBnlnurDb7WRE8KIGtcKI0jvsuR1vZWgwL0Vms7mxtrb2Z19fn31ubu6C5420QhvuwQMvaqQ2wtvx1uOBnvVGXgOsyipWLauB1ShqkLYq8aRIjeEDvce/MAKJlF0nnmVlJYus0mYRT/i//IX5b3/a/gBePaA9g2+ifQAAAABJRU5ErkJggg=="
                    ]
                },
                ga = !(d.browser.msie && 8 > parseInt(d.browser.version)),
                ua = function(b, d, g) {
                    var h = G[b];
                    return ga && h ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAA" + h[(d ? 0 : 2) + (g ? 0 : 1)] : (h = F[b]) ? (h = h.split("%L").join(d ? "left" : "right").split("%U").join(g ? "up" : "over"), A + "btns/" + h) : b
                },
                l = ".dwuserEasyRotator .erimgMain .erimgMain_slides .visibleWhenSelected {display:none;} .dwuserEasyRotator .erimgMain .erimgMain_slides .erimgMain_slide_selected .visibleWhenSelected {display:block;}.dwuserEasyRotator .erthumbGrid .erimgMain_slides .visibleWhenSelected {display:none;} .dwuserEasyRotator .erthumbGrid .erimgMain_slides .erimgMain_slide_selected .visibleWhenSelected {display:block;}.dwuserEasyRotator .eraudio, .dwuserEasyRotator .ervideo {display:none;}.dwuserEasyRotator img {max-width:none !important; max-height:none !important;border:none !important;margin:0 !important;padding:0 !important;box-shadow:none !important;}div.dwuserEasyRotator {direction: ltr;}.dwuserEasyRotator div{position:static;}.er_cm{font-family:Verdana,_sans !important;font-size:11px;color:#555;position:absolute;width:170px;z-index:999999;border:solid 1px #CCC;background:#EEE;padding:0px !important;margin:0px !important;display:none;-moz-box-shadow:0 3px 5px #333;-webkit-box-shadow:0 3px 5px #333;-ms-box-shadow:0 3px 5px #333;-o-box-shadow:0 3px 5px #333;box-shadow:0 3px 5px #333;}.er_cm LI{list-style:none;padding:0px !important;margin:0px !important;}.er_cm A{color:#333 !important;font-family:Verdana,_sans !important;font-size:11px !important;text-decoration:none;display:block;line-height:20px !important;height:20px;background-position:6px center;background-repeat:no-repeat;outline:none;padding:0px 5px 2px 20px !important;border:none !important;font-weight:normal !important;}.er_cm A:hover{text-decoration:none;}.er_cm LI.hover A{color:#FFF !important;background-color:#39F}.er_cm LI.separator{border-top:1px solid #FFF}.er_cm LI.preSeparator{border-bottom:1px solid #CCC}";
            d("head").append('<style type="text/css">' + l + "</style>");
            var W = function(b) {
                    var d = (b.attr("data-erResponsiveRatio") || "").replace(/[^.0-9:]+/g, "");
                    if (0 < d.length) {
                        var g = b.width();
                        d = d.split(":");
                        d = 2 == d.length ? Number(d[0]) / Number(d[1]) : Number(d[0]);
                        g /= d;
                        !isNaN(g) && b.height() != g && b.height(g)
                    }
                },
                s = [];
            y.er_resetPositions = function(b) {
                var g = !1;
                d(".dwuserEasyRotator").each(function() {
                    var b = d(this);
                    W(b);
                    var h = b.data("er_lRDim") || {
                            w: -1,
                            h: -1,
                            v: -1
                        },
                        j = {
                            w: b.width(),
                            h: b.height(),
                            v: b.is(":visible")
                        };
                    if (h.w != j.w || h.h !=
                        j.h || h.v !== j.v) g = !0;
                    b.er_extendDataObject("er_lRDim", j)
                });
                (!b || g) && d(s).each(function() {
                    this.call()
                })
            };
            var $;
            d(y).resize(function() {
                clearTimeout($);
                $ = setTimeout(er_resetPositions, 50, !0)
            });
            d(".dwuserEasyRotator").each(function() {
                var b = d(this);
                if (!b.hasClass("erACR")) {
                    b.addClass("erACR");
                    k && b.addClass("ertouch");
                    var g = /autoplaySpeed\:3500/.test(b.attr("data-erConfig") || "") && 0 < d(".ebfnr").length || /autoplayDelta\:2500/.test(b.attr("data-erConfig") || "");
                    if (d.browser.msie && 7 > parseInt(d.browser.version)) b.css({
                        padding: 30,
                        backgroundColor: "#000",
                        fontFamily: "Georgia,'Times New Roman',Times,_serif",
                        fontSize: 16,
                        color: "#FFF",
                        textAlign: "center"
                    }).html('This content is not compatible with Internet Explorer 6 or earlier.<br />Please install the <a style="color: #FFF;" href="http://www.microsoft.com/windows/internet-explorer/" target="_blank">latest version of IE</a> or a modern browser like <a href="http://www.google.com/chrome/" style="color: #FFF;" target="_blank">Chrome</a> or <a style="color: #FFF;" href="http://www.getfirefox.com/" target="_blank">Firefox</a>.');
                    else if (!g && "translate.googleusercontent.com" != j.location.hostname && !b.find("]kniltuobare#=$ferh[a tuobare. ,)]wollofon=*ler[(ton:]/moc.resuwd.www//:ptth=^ferh[a tuobare.".split("").reverse().join(""))[0]) confirm("There's a conflict that's breaking your EasyRotator code; please click OK to learn how to address the problem.") && (y.location = "http://www.dwuser.com/support/easyrotator/kb/code-corruption/");
                    else {
                        var l = b.find(".erabout").css({
                            position: "absolute",
                            left: 10,
                            top: 10
                        }).hide();
                        l.find("a.erabout_ok").click(function(b) {
                            b.preventDefault();
                            l.hide()
                        });
                        l.find("a[href$=#eraboutlink]").click(function(b) {
                            b.preventDefault();
                            y.open("http://www.dwuser.com/easyrotator/")
                        });
                        l.find("a").css({
                            border: "none !important",
                            fontWeight: "normal !important",
                            textDecoration: "underline !important"
                        });
                        var A = "er_" + (p.random() + "").split(".").join("") + "_cm",
                            F = d('');
                        d("body").append(F);
                        g || b.contextMenu({
                            menu: A
                        }, function(n) {
                            /about$/.test(n) &&
                                (n = d(y), n = "relative" == b.css("position") ? {
                                    top: 20,
                                    left: 20
                                } : {
                                    top: n.scrollTop() + 20,
                                    left: n.scrollLeft() + 20
                                }, l.css(n).show())
                        });
                        var B = eval("(" + (b.attr("data-erConfig") || "{}") + ")"),
                            A = !0 === B.randomize,
                            F = !0 === B.randomizeCategories,
                            G = Number(B.wv || "0");
                        isNaN(G) && (G = 0);
                        var $ = !1,
                            ja = function(n) {
                                if (!$) {
                                    $ = !0;
                                    var u, k = j.domain;
                                    try {
                                        k = top.window.document.domain
                                    } catch (l) {
                                        u = !0
                                    }
                                    if ("" != k && "translate.google.com" != k && "translate.googleusercontent.com" != k && "cache.googleusercontent.com" != k && "webcache.googleusercontent.com" !=
                                        k) {
                                        var p = h,
                                            k = p + ("http://" == p ? "erpv.dwuser.com" : "dwuser.com") + "/easyrotator/updates/pcisvc.php?d=" + k + "&if=" + (u ? "y" : "n") + "&l=" + escape(location.host + location.pathname) + "&nocache=" + (new Date).getTime() + "&jsoncallback=?";
                                        d.getJSON(k, function(d) {
                                            d && "n" === d.v && (d = g ? "You have disabled the right-click menu (a Pro feature)" : "You are using EasyRotator Pro features" + (n ? " (" + n + ")" : ""), d = u ? "You are using EasyRotator Pro features, but EasyRotator Pro features cannot be used in cross-domain iframes.  View the rotator page directly, or contact support for more information." :
                                                d + ", but EasyRotator Pro hasn't been enabled for this domain (" + j.domain + ').<br /><a style="color: #FFF; text-decoration: underline;" href="http://www.dwuser.com/easyrotator/pro-needed/?d=' + j.domain + '" target="_blank">Learn More and Fix...</a>', b.css({
                                                    padding: 30,
                                                    backgroundColor: "#000",
                                                    fontFamily: "Georgia,'Times New Roman',Times,_serif",
                                                    fontSize: 16,
                                                    color: "#FFF",
                                                    textAlign: "center"
                                                }).html(d))
                                        })
                                    }
                                }
                            };
                        g && ja();
                        var ca = [];
                        b.is(":hidden") && b.parents().each(function() {
                            var b = d(this);
                            "none" == (b.css("display") ||
                                "unknown").toLowerCase() && ca.push(b.css("display", ""))
                        });
                        var ma = 0 < ca.length;
                        W(b);
                        b.er_extendDataObject("er_lRDim", {
                            w: b.width(),
                            h: b.height(),
                            v: !ma
                        });
                        var J = function(d) {
                                b.trigger("er_playPause", {
                                    v: d
                                })
                            },
                            ka;
                        (function() {
                            var n = {
                                    src: "easyrotatorvideo.s3.amazonaws.com/1/StrobeMediaPlayback.swf",
                                    srcEI: "easyrotatorvideo.s3.amazonaws.com/1/expressInstall.swf",
                                    restartAutoplay: !1,
                                    showTransparentOverlay: !0
                                },
                                g;
                            for (g in n) void 0 !== B["video_" + g] && (n[g] = B["video_" + g]), /^src/.test(g) && (n[g] = h + n[g]);
                            var k = !0 === B.autoplayAfterVideo;
                            if ("" == j.domain && B.lpp) {
                                var l = "";
                                (function() {
                                    for (var b = B.lpp.split("-"), d = 0; d < b.length; d++) l += String.fromCharCode(b[d])
                                })();
                                for (g in n)
                                    if (/^src/.test(g)) {
                                        var da = n[g],
                                            da = da.substr(da.lastIndexOf("/") + 1);
                                        n[g] = l + da
                                    }
                            }
                            var C = function(b) {
                                    if (!/^https?:/i.test(b)) {
                                        var d = function(b) {
                                                var d = j.location.href,
                                                    n = d.indexOf("?"); - 1 != n && (d = d.substr(0, n));
                                                var d = d.substr(0, d.lastIndexOf("/") + 1),
                                                    n = d.replace(/^[^:]+:\/+/, ""),
                                                    d = d.substr(0, d.length - n.length),
                                                    g = n.indexOf("/");
                                                for (/^\//.test(b) && -1 != g && (n = n.substr(0, g));
                                                    "../" ==
                                                    b.substr(0, 3);) b = b.substr(3), n = n.replace(/\/[^\/]+\/$/, "/");
                                                return d + n + b
                                            },
                                            n = b;
                                        "" == j.domain ? (/^file:/i.test(b) || (n = d(b)), n = n.replace(/^file:\/+/i, "").replace(/^([^:]{0,9}):/, "$1|"), n = "../../../../../../../../../../../../../../../../../../../" + n) : /^file:/i.test(b) || (n = d(b));
                                        b = n
                                    }
                                    return b
                                },
                                H = {},
                                r = function(b, d, n) {
                                    H["r" + b] || (H["r" + b] = {});
                                    H["r" + b]["c" + d] || (H["r" + b]["c" + d] = []);
                                    H["r" + b]["c" + d].push(n)
                                },
                                t = !1,
                                s = function(b, d) {
                                    d.html("");
                                    b.er_alpha(0);
                                    setTimeout(function() {
                                        b.css({
                                            display: "none"
                                        })
                                    }, 300)
                                },
                                A = function(n,
                                    g, h, u) {
                                    var j = b.find("[data-ertype=vlb]"),
                                        k, l;
                                    if (0 == j.length) {
                                        j = d('<div data-ertype="vlb" style="position:absolute;left:0;right:0;top:0;bottom:0;background:rgba(50,50,50,0.85);"></div>');
                                        j.er_alpha(0).css({
                                            "-moz-transition": "opacity 0.3s ease-out",
                                            "-webkit-transition": "opacity 0.3s ease-out",
                                            "-o-transition": "opacity 0.3s ease-out",
                                            transition: "opacity 0.3s ease-out"
                                        });
                                        j.appendTo(b);
                                        k = d('<div class="erVLBoh" style="position:absolute;left:50%;top:50%;overflow:visible;background:#FFF;-webkit-box-shadow:0 2px 15px rgba(0,0,0,0.7);-moz-box-shadow:0 2px 15px rgba(0,0,0,0.7);box-shadow:0 2px 15px rgba(0,0,0,0.7);"></div>');
                                        l = d('<div class="erVLBmh" style="position:absolute;left:12px;right:12px;top:12px;bottom:12px;background-color:#000;"></div>');
                                        k.append(l).appendTo(j);
                                        var Y = N.vlbCloseUp,
                                            C = N.vlbCloseOver;
                                        d('<div class="closeButton" style="position:absolute;top:-15px;right:-15px;"><img width="30" height="30" src="' + Y + '" ersrc-up="' + Y + '" ersrc-over="' + C + '" /></div>').appendTo(k)
                                    } else k = j.find("div.erVLBoh"), l = j.find("div.erVLBmh"), j.er_alpha(0).css({
                                        display: "block"
                                    });
                                    if (!t) {
                                        t = !0;
                                        var H = k.find(".closeButton"),
                                            da = H.find("img"),
                                            Y = da.attr("ersrc-up"),
                                            C = da.attr("ersrc-over");
                                        H.bind("mouseenter touchstart", function() {
                                            da[0].src = C
                                        }).bind("mouseleave touchend touchcancel", function() {
                                            da[0].src = Y
                                        }).click(function() {
                                            s(j, j.find("div.erVLBmh"))
                                        })
                                    }
                                    var H = "-" + p.round(12 + n / 2) + "px",
                                        r = "-" + p.round(12 + g / 2) + "px";
                                    k.css({
                                        width: n + 24,
                                        height: g + 24,
                                        marginLeft: H,
                                        marginTop: r
                                    });
                                    l.css({
                                        width: n,
                                        height: g
                                    });
                                    l.hide();
                                    setTimeout(function() {
                                        j.er_alpha(1)
                                    }, 1);
                                    setTimeout(function() {
                                        l.show()
                                    }, 310);
                                    l.html(h);
                                    u(l)
                                },
                                z = {},
                                xa = "ervBridgeCB" + (p.random() + "").substr(2);
                            y[xa] = function(d) {
                                if (!z[d]) {
                                    z[d] = 1;
                                    try {
                                        var n, g = M.getObjectById(d);
                                        n = xa + "_" + d + "_onMediaPlayerStateChange";
                                        y[n] = function(b) {
                                            "playing" == b && J(!1)
                                        };
                                        g.addEventListener("mediaPlayerStateChange", n);
                                        k && (n = xa + "_" + d + "_onComplete", y[n] = function() {
                                            b.trigger("er_next", {
                                                noLoop: !0
                                            });
                                            J(!0)
                                        }, g.addEventListener("complete", n))
                                    } catch (h) {}
                                }
                            };
                            var Q = 0,
                                Qa = "erv" + (p.random() + "").substr(2) + "p";
                            ka = function(g, u, l, p, H) {
                                ja("video");
                                var da = u.poster || g,
                                    qa = !0 === u.autoplay,
                                    x = qa && 0 == p && 0 == H,
                                    t = u.src,
                                    t = C(t),
                                    s = Qa + Q++;
                                d('<div id="' + s + '" style="position:absolute;left:0;right:0;top:0;bottom:0;"></div>').appendTo(l);
                                var z = !1,
                                    B;
                                if (g = t.match(/^https?:\/\/www\.youtube\.com\/watch\?v=([^&]+)/)) z = !0, B = g[1];
                                var g = !1,
                                    a;
                                (u = t.match(/^https?:\/\/[w\.]{0,4}vimeo\.com\/([\d]+)/)) || (u = t.match(/src="https?:\/\/player\.vimeo\.com\/video\/([^"]+)"/));
                                u && (g = !0, a = u[1]);
                                var c = /iPod|iPhone|iPad|Android/.test(navigator.userAgent),
                                    e = !(d.browser.msie && 8 > d.browser.version),
                                    f = function(a) {
                                        var b = d('<img width="100" height="100" src="' + N.videoPlayOverlay + '" style="position: absolute; cursor: pointer; left: 50%; top: 50%; margin: -50px 0 0 -50px !important;">');
                                        b.click(function() {
                                            J(false);
                                            A(l.width(), l.height(), a, function(a) {
                                                try {
                                                    var b = a.find("video");
                                                    if (b.length > 0) {
                                                        b[0].load();
                                                        b[0].play()
                                                    }
                                                } catch (c) {}
                                            })
                                        });
                                        b.appendTo(l);
                                        r(p, H, {
                                            type: "lightbox",
                                            yt: z,
                                            id: s,
                                            autoplay: qa
                                        })
                                    },
                                    m = function(a) {
                                        var c = function(a) {
                                            new YT.Player(a.id, {
                                                events: {
                                                    onReady: function(b) {
                                                        a.player = b.target
                                                    },
                                                    onStateChange: function(a) {
                                                        a.data == 1 && J(false);
                                                        if (a.data === 0 && k) {
                                                            b.trigger("er_next", {
                                                                noLoop: true
                                                            });
                                                            J(true)
                                                        }
                                                    }
                                                }
                                            })
                                        };
                                        if (!y.YT || !y.YT.Player) {
                                            v.push(a);
                                            if (!D) {
                                                y.onYouTubePlayerAPIReady = function() {
                                                    for (var a =
                                                            0; a < v.length; a++) c(v[a]);
                                                    v = []
                                                };
                                                D = true;
                                                a = j.createElement("script");
                                                a.src = h + "www.youtube.com/player_api";
                                                a.type = "text/javascript";
                                                d("head").append(a)
                                            }
                                        } else c(a)
                                    },
                                    u = function() {
                                        var a = n.src,
                                            b = {};
                                        b.javascriptCallbackFunction = xa;
                                        b.src = t;
                                        b.poster = da;
                                        b.autoPlay = x ? "true" : "false";
                                        b.playButtonOverlay = "true";
                                        b.playButtonOverlayBig = n.showTransparentOverlay ? "true" : "false";
                                        M.embedSWF(a, s, "100%", "100%", "10.0.0", n.srcEI, b, {
                                                allowFullScreen: "true",
                                                allowScriptAccess: "always",
                                                bgcolor: "#000000",
                                                wmode: "opaque"
                                            }, {
                                                name: s
                                            },
                                            function(a) {
                                                if (a.success) {
                                                    x && J(false);
                                                    r(p, H, {
                                                        type: "inline",
                                                        yt: z,
                                                        id: s,
                                                        autoplay: qa,
                                                        hasBeenAutoplayed: x
                                                    })
                                                } else if (c) {
                                                    a = '<video src="' + t + '" width="100%" height="100%" autoplay controls="controls"></video>';
                                                    f(a)
                                                } else {
                                                    a = '<video id="' + s + 'v" src="' + t + '" width="100%" height="100%" ' + (x ? "autoplay" : "") + ' controls="controls"></video>';
                                                    l.append(a);
                                                    r(p, H, {
                                                        type: "videoTag",
                                                        id: s + "v",
                                                        autoplay: qa
                                                    })
                                                }
                                            })
                                    },
                                    i = function(a) {
                                        var b = 'width="100%" height="100%" style="position:absolute;left:0;right:0;top:0;bottom:0;"';
                                        if (a) {
                                            a =
                                                l.width();
                                            b = l.height();
                                            b = 'width="' + a + '" height="' + b + '"'
                                        }
                                        return b
                                    },
                                    w = function() {
                                        var n = s + "f";
                                        a.indexOf("?") == -1 && (a = a + "?");
                                        var q = x || c ? "1" : "0";
                                        a = /autoplay=[01]/.test(a) ? a.replace(/autoplay=[01]/, "autoplay=" + q) : a + ("&autoplay=" + q);
                                        /portrait=1/.test(a) || (a = a + "&portrait=0");
                                        /title=1/.test(a) || (a = a + "&title=0");
                                        /byline=1/.test(a) || (a = a + "&byline=0");
                                        a = a + ("&api=1&player_id=" + n);
                                        q = '<iframe id="' + n + '" src="' + h + "player.vimeo.com/video/" + a + '" ' + i(c) + ' frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
                                        if (c) f(q);
                                        else {
                                            l.append(q);
                                            q = {
                                                type: "vimeo",
                                                id: n,
                                                autoplay: qa
                                            };
                                            if (e) {
                                                var g = la(d("#" + n)[0]);
                                                g.addEvent("ready", function() {
                                                    g.addEvent("play", function() {
                                                        J(false)
                                                    });
                                                    g.addEvent("finish", function() {
                                                        if (k) {
                                                            b.trigger("er_next", {
                                                                noLoop: true
                                                            });
                                                            J(true)
                                                        }
                                                    })
                                                });
                                                q.player = g
                                            }
                                            r(p, H, q)
                                        }
                                    };
                                z ? function() {
                                    var a = s + "f",
                                        b = x || c ? "1" : "0",
                                        d = "&origin=" + h + j.domain;
                                    j.domain == "" && (d = "");
                                    B = /^LIST:/.test(B) ? "?listType=playlist&list=" + B.substr(5) + "&" : B + "?";
                                    b = h + "www.youtube.com/embed/" + B + "enablejsapi=1" + d + "&wmode=opaque&autoplay=" + b + "&showinfo=0&modestbranding=1&autohide=1&disablekb=1&iv_load_policy=3&rel=0";
                                    b = '<iframe id="' + a + '" type="text/html" ' + i(c) + ' src="' + b + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
                                    if (c) f(b);
                                    else {
                                        l.append(b);
                                        a = {
                                            type: "yt",
                                            id: a,
                                            autoplay: qa
                                        };
                                        e && m(a);
                                        r(p, H, a)
                                    }
                                }() : g ? w() : u()
                            };
                            var X = 0,
                                L = 0,
                                O = function() {
                                    var b = H["r" + X];
                                    if (b && b["c" + L] && b["c" + L].length)
                                        for (var b = b["c" + L], n = 0; n < b.length; n++) {
                                            var g = b[n];
                                            try {
                                                var h = g.type;
                                                "inline" == h ? M.getObjectById(g.id).pause() : "videoTag" == h ? d("#" + g.id)[0].pause() : "vimeo" == h ? g.player.api("pause") : "yt" == h && g.player &&
                                                    (!g.player.getPlayerState || 5 != g.player.getPlayerState()) && g.player.pauseVideo()
                                            } catch (u) {
                                                y.console && console.log(u)
                                            }
                                        }
                                },
                                ea = function(b) {
                                    O();
                                    L = b;
                                    if ((b = H["r" + X]) && b["c" + L] && b["c" + L].length)
                                        for (var b = b["c" + L], g = 0; g < b.length; g++) {
                                            var h = b[g],
                                                u = h.autoplay && (n.restartAutoplay || !h.hasBeenAutoplayed);
                                            try {
                                                var j = h.type;
                                                "inline" == j && u ? (h.hasBeenAutoplayed = !0, M.getObjectById(h.id).play2(), J(!1)) : "videoTag" == j && u ? (h.hasBeenAutoplayed = !0, d("#" + h.id)[0].play(), J(!1)) : "vimeo" == j && u ? (h.hasBeenAutoplayed = !0, h.player.api("play"),
                                                    J(!1)) : "yt" == j && (h.player && u) && (h.hasBeenAutoplayed = !0, h.player.playVideo(), J(!1))
                                            } catch (k) {
                                                y.console && console.log(k)
                                            }
                                        }
                                };
                            b.bind("er_setRow", function(b, d) {
                                var n = d.id;
                                O();
                                X = n;
                                ea(0)
                            }).bind("er_setCol", function(b, d) {
                                ea(d.id)
                            })
                        })();
                        if ("BackCompat" == j.compatMode && d.browser.msie) {
                            var V = '<a style="color:#FFF;" href="http://www.dwuser.com/easyrotator/doctype/" target="_blank">Error: This page doesn\'t have a valid DocType definition, which makes the rotator fail in IE.  For instructions on how to fix this, click here</a>.';
                            b.css({
                                padding: 30,
                                backgroundColor: "#000",
                                fontFamily: "Georgia,'Times New Roman',Times,_serif",
                                fontSize: 16,
                                color: "#FFF",
                                textAlign: "center"
                            }).html(V)
                        } else {
                            var r = function(b, g, h, j, l) {
                                    b.find(".erimgMain_arrowLeft, .erimgMain_arrowRight").each(function() {
                                        var h = d(this),
                                            j = h.hasClass("erimgMain_arrowLeft"),
                                            l = eval("(" + (h.attr("data-erConfig") || "{}") + ")"),
                                            p = l && l.image || "circleSmall",
                                            Y = l && l.image2 || "circleSmall",
                                            da = d.browser.msie && 9 > parseInt(d.browser.version);
                                        b.bind("at" + (j ? 0 : 1), function(b, n) {
                                            h.stop(!1, !0);
                                            var g =
                                                n.v;
                                            da ? h.css({
                                                display: n.v ? "block" : "none"
                                            }) : (g && h.show(), h.fadeTo(300, g ? 1 : 0, function() {
                                                g || d(this).hide()
                                            }))
                                        });
                                        da ? h.css({
                                            display: "none"
                                        }) : h.css({
                                            zoom: "1"
                                        }).er_alpha(0).hide();
                                        p = ua(p, j, !0);
                                        Y = ua(Y, j, !1);
                                        (new Image).src = p;
                                        (new Image).src = Y;
                                        var qa = d("<img/>").attr("src", p).css({
                                            zoom: "1"
                                        }).appendTo(h);
                                        h.bind("mouseenter touchstart", function() {
                                            qa.attr("src", Y)
                                        }).bind("mouseleave touchend touchcancel", function() {
                                            qa.attr("src", p)
                                        });
                                        h.click(function() {
                                            b.trigger("ac" + (j ? 0 : 1))
                                        });
                                        if ("rollover" == g && !k) {
                                            var r = h.children();
                                            r.css({
                                                display: "none"
                                            });
                                            da || r.er_alpha(0);
                                            b.bind("mouseenter mouseleave", function(b) {
                                                r.stop(!1, !0);
                                                var n = "mouseenter" == b.type;
                                                da ? r.css({
                                                    display: n ? "inline" : "none"
                                                }) : (n && r.css({
                                                    display: "inline"
                                                }), r.fadeTo(300, n ? 1 : 0, function() {
                                                    n || d(this).css({
                                                        display: "none"
                                                    })
                                                }))
                                            })
                                        }
                                    });
                                    (function() {
                                        var d = !1,
                                            g = !1;
                                        b.bind("at0 at1", function(b, n) {
                                            "at0" == b.type ? d = n.v : g = n.v
                                        });
                                        j && b.iosSwipe({
                                            dimension: h ? "x" : "y",
                                            swipe: function(h) {
                                                d && !h && b.trigger("ac0");
                                                g && h && b.trigger("ac1")
                                            },
                                            threshold: {
                                                x: 50,
                                                tolerance: 0.5
                                            },
                                            killEvents: !1 !== B.killTouchEvents
                                        });
                                        if (l) {
                                            var u = function(h) {
                                                    0 < h && d ? b.trigger("ac0") : 0 > h && g && b.trigger("ac1")
                                                },
                                                k = !1,
                                                r = 0,
                                                t = !1,
                                                s, y = !1,
                                                v;
                                            b.bind("mousewheel", function(b, d, n, g) {
                                                var d = p.abs(n),
                                                    j = p.abs(g);
                                                if (!h || !(0 < d && j > d)) return n = h ? 0 < d ? -n : g : g, r += n, k ? y && !t && (t = !0, u(r)) : (k = !0, r = n, t = !1, clearTimeout(s), y = !1, s = setTimeout(function() {
                                                    y = !0
                                                }, 50)), clearTimeout(v), v = setTimeout(function() {
                                                    k = false
                                                }, 250), b.preventDefault(), !1
                                            })
                                        }
                                    })()
                                },
                                z = !1,
                                t = function() {},
                                fa = function(b, g, h) {
                                    b.addClass("er_elasticPhoto");
                                    g = g || b.find("img");
                                    d.browser.msie && g.show();
                                    var b =
                                        g[0].naturalWidth,
                                        k = g[0].naturalHeight,
                                        l = g[0].width,
                                        p = g[0].height;
                                    0 == l && (0 == p && !isNaN(b) && !isNaN(k) && 0 < b && 0 < k) && (l = b, p = k);
                                    225E4 < l * p && (z || (z = !0, "" == j.domain && alert("At least one of the photos in this rotator is quite large (perhaps even a camera original).  Please be sure to use the Image Optimizer on the Tools menu to downsize and optimize your photos.")));
                                    g.data("er_origDims", {
                                        w: l,
                                        h: p,
                                        scaleMode: h
                                    })
                                },
                                ga = function(b, d) {
                                    var g = b.width(),
                                        h = b.height(),
                                        d = d || b.find("img"),
                                        j = d.data("er_origDims"),
                                        k = j.w,
                                        l =
                                        j.h,
                                        j = j.scaleMode,
                                        r = k / l,
                                        t = g / h,
                                        s = 1;
                                    if ("scaleDown" == j && (r >= t && k > g || r <= t && l > h) || "scaleUpAndDown" == j || "fillArea" == j) s = "fillArea" != j && r >= t || "fillArea" == j && r <= t ? g / k : h / l, k *= s, l *= s;
                                    P ? d.css({
                                        left: p.round((g - k) / 2),
                                        top: p.round((h - l) / 2),
                                        webkitTransform: "scale(" + s + ")",
                                        webkitTransformOrigin: "0 0"
                                    }).show() : d.css({
                                        left: p.round((g - k) / 2),
                                        top: p.round((h - l) / 2),
                                        width: k,
                                        height: l
                                    }).show()
                                },
                                Ha = function(b) {
                                    b.find(".er_elasticPhoto").each(function() {
                                        ga(d(this))
                                    })
                                };
                            d.fn.photoLoading_markNotLoaded = function() {
                                return this.each(function() {
                                    d(this).data("erILdMom_done", !1)
                                })
                            };
                            var Ia = function(b, g) {
                                    var h = g.find("span.title").html() || "",
                                        j = g.find("span.desc").html() || "";
                                    b.find(".erimgMain_title").each(function() {
                                        var b = d(this);
                                        b.html(h.split("ul-fake").join("ul").split("li-fake").join("li"));
                                        b.hasClass("erhideWhenEmpty") && "" == b.html() && (b.hide(), b.closest(".erhideWhenEmptyParent").hide())
                                    });
                                    b.find(".erimgMain_desc").each(function() {
                                        var b = d(this);
                                        b.html(j.split("ul-fake").join("ul").split("li-fake").join("li"));
                                        b.hasClass("erhideWhenEmpty") && "" == b.html() && (b.hide(), b.closest(".erhideWhenEmptyParent").hide())
                                    });
                                    b.find(".erimgMain_customField").each(function() {
                                        var b = d(this),
                                            n = b.attr("data-erfield");
                                        b.html(g.find("span.customField[data-erfield=" + n + "]").html() || "");
                                        b.hasClass("erhideWhenEmpty") && "" == b.html() && (b.hide(), b.closest(".erhideWhenEmptyParent").hide())
                                    });
                                    "" == h && "" == j && b.find(".erhideWhenNoText").hide()
                                },
                                ha = [],
                                na = ",";
                            F && b.find("[data-ertype=content]").er_randomize();
                            V = b.find("[data-ertype=content]").children("ul").css({
                                position: "absolute",
                                display: "none",
                                left: 0,
                                top: 0,
                                width: 0,
                                height: 0
                            });
                            V = b.find("[data-ertype=content]").children("ul");
                            F = V.children("li").length;
                            if (0 == V.length || 0 == F) alert("No content specified.  Exiting.");
                            else {
                                A && V.er_randomize();
                                B.addTitleLinks && V.children("li").each(function() {
                                    var b = d(this),
                                        g = b.children("a.mainLink");
                                    1 == g.length && b.children("span.title").wrapInner(g.clone().empty().addClass("erautoTitleLink"))
                                });
                                b.find("[data-ertype=layout]").find(".erimgMain").each(function() {
                                    var g = d(this),
                                        h = eval("(" + (g.attr("data-erConfig") || "{}") + ")"),
                                        j = Number(void 0 !== h.numTiles ? h.numTiles : 1); - 1 == j && (j = V.first().children().length);
                                    var l = p.min(j, p.max(1, Number(void 0 !== h.scrollSize ? h.scrollSize : j - 1))),
                                        y = h.scaleMode || "fillArea",
                                        C = h.imgType || "main",
                                        H = !0 === h.treatAsThumbs,
                                        v = Number(void 0 !== h.duration ? h.duration : 600);
                                    isNaN(v) && (v = 600);
                                    var z = Number(void 0 !== h.durationVertical ? h.durationVertical : "main" == C ? v : 300);
                                    isNaN(z) && (z = 600);
                                    var A = void 0 !== h.easing ? h.easing : "easeOutQuad",
                                        D = !0 === h.alwaysPreviousButton,
                                        F = !1 !== h.loopNextButton,
                                        xa = !0 === h.jumpCategories,
                                        Q = h.arrowButtonMode;
                                    /always|rollover/.test(Q) || (Q = "always");
                                    var P = !1 !== h.addMainSlideLinks,
                                        X = "rollover" == h.slideLinkEvent && !k ? "mouseenter" : "click",
                                        L = void 0 !== h.infiniteLoop ? !1 !== h.infiniteLoop : !0 === B.pro_infiniteLoop,
                                        O = L && (void 0 !== h.infiniteScroll ? !0 === h.infiniteScroll : !0 === B.pro_infiniteScroll),
                                        ea = void 0 !== h.mouseWheel ? !1 !== h.mouseWheel : !0 === B.pro_mouseWheelAndSwipeEnabled,
                                        h = void 0 !== h.swipeEnabled ? !0 === h.swipeEnabled : B.pro_mouseWheelAndSwipeEnabled && /iPod|iPad|iPhone|Android/i.test(navigator.userAgent);
                                    (L || ea || h) && ja("in the Settings section");
                                    var K = g.find(".erimgMain_slides").first();
                                    K.css({
                                        overflow: "hidden"
                                    });
                                    var aa = K.find(".erimgMain_slide").remove(),
                                        E = p.ceil(K.outerWidth() / j),
                                        Z = p.ceil(K.outerHeight()),
                                        wa = [],
                                        S = [];
                                    if (-1 != na.indexOf("," + C)) alert("EasyRotator: Layout error. Requested image type [" + C + "] already used.  Display will be ignored.");
                                    else {
                                        na += "," + C;
                                        ha = [];
                                        V.each(function(a) {
                                            var c = d(this),
                                                e = d('<div style="position:absolute;overflow: hidden; top:' + Z * a + 'px; left:0;" er_row="' + a + '"></div>').appendTo(K);
                                            S = S.length == 0 ? e : S.add(e);
                                            var f = d('<div style="position:absolute;overflow: visible; top:' +
                                                Z * a + 'px; left:0;" er_row="' + a + '"></div>').appendTo(K);
                                            wa = wa.length == 0 ? f : wa.add(f);
                                            var g = c.children("li");
                                            if (g.length == 0) alert("Empty category being skipped - this may cause problems!");
                                            else {
                                                ha.push(g.length);
                                                var h = function(c, e, f) {
                                                    var g = eval("(" + (e.find("span.ervideo").attr("data-erConfig") || "{}") + ")");
                                                    if (g.src && C == "main") {
                                                        var h = f.find(".erimgMain_video").first();
                                                        if (h.length == 0) {
                                                            h = f.find(".erimgMain_img").first();
                                                            h = h.clone().removeClass("erimgMain_img").addClass("erimgMain_video").insertAfter(h)
                                                        }
                                                        var n =
                                                            e.find("img." + C).attr("src");
                                                        ka(n, g, h, a, c)
                                                    }
                                                    f.find(".erimgMain_img").css({
                                                        overflow: "hidden"
                                                    }).each(function() {
                                                        var a = d(this);
                                                        a.width();
                                                        a.height();
                                                        var b = e.find("img." + C).first().removeAttr("alt");
                                                        b.attr("ersrc", b.attr("src"));
                                                        b.attr("src", "");
                                                        b.css({
                                                            display: "none",
                                                            position: "absolute"
                                                        }).attr("border", 0).appendTo(a).data("erProcessCount", 0).load(function() {
                                                            var a = d(this);
                                                            if (!(a.data("erProcessCount") > 0 || a.attr("src") == "")) {
                                                                a.data("erProcessCount", a.data("erProcessCount") + 1);
                                                                var b = a.closest(".erimgMain_img");
                                                                fa(b, a, y);
                                                                ga(b, a)
                                                            }
                                                        }).error(t);
                                                        (!(C != "main" || H) || !P) && a.wrapInner(e.find("a." + C + "Link").click(function() {
                                                            J(false)
                                                        }));
                                                        b.addClass("erILdMom")
                                                    });
                                                    Ia(f, e);
                                                    (H || C != "main") && P && f.bind(X, function() {
                                                        var a = d(this);
                                                        b.trigger("er_setCol", {
                                                            id: Number(a.closest("[er_col]").attr("er_col"))
                                                        })
                                                    })
                                                };
                                                g.each(function(a) {
                                                    var b = d(this),
                                                        c = aa.clone().appendTo(f).attr("er_col", a).css({
                                                            left: E * a,
                                                            top: 0,
                                                            position: "absolute",
                                                            width: E,
                                                            height: Z,
                                                            overflow: "hidden"
                                                        }).addClass("er_ssd").data("er_ssd", {
                                                            left: "slideW*" + a,
                                                            width: "slideW",
                                                            height: "slideH"
                                                        });
                                                    h(a, b, c)
                                                });
                                                f.er_cssWidth(E * g.length).er_cssHeight(Z).er_x(E * g.length).addClass("er_ssd").data("er_ssd", {
                                                    width: "slideW*" + g.length,
                                                    height: "slideH",
                                                    left: "slideW*" + g.length,
                                                    top: "slideH*" + a
                                                });
                                                e.er_cssWidth(E * g.length * 3).er_cssHeight(1).er_x(0).addClass("er_ssd").data("er_ssd", {
                                                    width: "slideW*3*" + g.length,
                                                    top: "slideH*" + a
                                                });
                                                (function() {
                                                    var a = g.length;
                                                    if (L && a > j)
                                                        for (var b = 0; b < j && b < a; b++) {
                                                            f.children("[er_col=" + (a - 1 - b) + "]").first().clone(true).appendTo(f).css({
                                                                left: E * (-b - 1)
                                                            }).addClass("er_ssd").er_cloneDataObject("er_ssd").er_extendDataObject("er_ssd", {
                                                                left: "slideW*" + (-b - 1)
                                                            }).find(".erimgMain_video").remove();
                                                            f.children("[er_col=" + b + "]").first().clone(true).appendTo(f).css({
                                                                left: E * (a + b)
                                                            }).addClass("er_ssd").er_cloneDataObject("er_ssd").er_extendDataObject("er_ssd", {
                                                                left: "slideW*" + (a + b)
                                                            }).find(".erimgMain_video").remove()
                                                        }
                                                })();
                                                setTimeout(function() {
                                                    f.find("img.erILdMom").each(function() {
                                                        var a = d(this);
                                                        if (a.data("erILdMom_done") !== true) {
                                                            a.attr("src", a.attr("ersrc"));
                                                            a.data("erILdMom_done", true)
                                                        }
                                                    })
                                                }, 1)
                                            }
                                        });
                                        var N = 0,
                                            x = wa.first(),
                                            M = 0,
                                            U = 0,
                                            G = 0,
                                            R = function() {
                                                var a =
                                                    x.er_x(),
                                                    b = p.max(0, x.er_cssWidth() - E * j) + a;
                                                g.trigger("at0", {
                                                    v: p.abs(U - a) > 9 || D
                                                });
                                                g.trigger("at1", {
                                                    v: U - b < -9 || F
                                                })
                                            },
                                            a = function(a, b) {
                                                if (l == 1) {
                                                    var c = a.er_x(),
                                                        d = 0,
                                                        e = p.max(0, p.round(x.er_cssWidth() / E) - j) * E,
                                                        c = p.min(e, p.max(d, c));
                                                    return x.er_x() + c
                                                }
                                                var d = 0,
                                                    e = p.max(0, p.round(x.er_cssWidth() / E) - j),
                                                    f = p.round((U - x.er_x()) / E),
                                                    c = Number(a.attr("er_col"));
                                                if (b !== true && c >= f && c < f + j) return U;
                                                for (; c >= d + j;) d = d + l;
                                                d = p.min(e, d);
                                                return d * E + x.er_x()
                                            },
                                            c = function(a, b, c) {
                                                var d = U,
                                                    e = U = a,
                                                    f = x.er_cssWidth(),
                                                    g = f / E;
                                                if (L && g > j) {
                                                    var h = (a -
                                                            x.er_x()) / E,
                                                        n = e;
                                                    if (h < j && c != "l" && (j > 1 || g > 2 || c !== void 0)) n = a + f;
                                                    else if (h >= g - j && c != "r" && (j > 1 || g > 2 || c !== void 0)) n = a - f;
                                                    if (p.abs(n - d) <= p.abs(e - d) || c == "r" && p.abs(d - x.er_x() - (g - j) * E) < 10 || c == "l" && p.abs(d - x.er_x()) < 10) e = n
                                                }
                                                b ? K.stop().scrollLeft(a) : K.stop().animate({
                                                    scrollLeft: e
                                                }, v, A, function() {
                                                    setTimeout(function() {
                                                        K.stop().scrollLeft(a)
                                                    }, 0)
                                                });
                                                setTimeout(function() {
                                                    R()
                                                }, 10)
                                            },
                                            e = function(a, b) {
                                                G = a;
                                                b ? K.stop().scrollTop(a) : K.stop().animate({
                                                    scrollTop: a
                                                }, z, A);
                                                setTimeout(function() {
                                                    R()
                                                }, 10)
                                            };
                                        setTimeout(function() {
                                            c(x.er_x(),
                                                true);
                                            e(0, true)
                                        }, 1);
                                        var f = ma,
                                            m = function() {
                                                var b = p.ceil(K.outerWidth() / j),
                                                    g = p.ceil(K.outerHeight());
                                                if (b != E || g != Z || f) {
                                                    f = false;
                                                    E = b;
                                                    Z = g;
                                                    K.find(".er_ssd").each(function() {
                                                        var a = d(this),
                                                            b = a.data("er_ssd"),
                                                            c = {},
                                                            e;
                                                        for (e in b) {
                                                            var f = b[e],
                                                                f = eval(f.split("slideW").join(E).split("slideH").join(Z));
                                                            c[e] = f
                                                        }
                                                        a.css(c)
                                                    });
                                                    Ha(K);
                                                    b = x.children("[er_col=" + M + "]").first();
                                                    U = a(b, true);
                                                    G = x.er_y()
                                                }
                                                setTimeout(function() {
                                                    c(U, true);
                                                    e(G, true)
                                                }, 0)
                                            };
                                        s.push(function() {
                                            m()
                                        });
                                        b.bind("er_setRow", function(a, b) {
                                            var c = b.id;
                                            if (c != N) {
                                                wa.filter("[er_row!=" +
                                                    N + "]").each(function() {
                                                    var a = d(this),
                                                        b = Number(a.attr("er_row")),
                                                        b = S.filter("[er_row=" + b + "]");
                                                    a.er_x(U);
                                                    b.er_x(U - a.er_cssWidth())
                                                });
                                                var f = x,
                                                    g = wa.filter("[er_row=" + c + "]");
                                                e(g.er_y());
                                                N = c;
                                                x = g;
                                                M = 0;
                                                f.find(".erimgMain_slide_selected").removeClass("erimgMain_slide_selected");
                                                g.find("[er_col=0]").addClass("erimgMain_slide_selected erimgMain_slide_visited")
                                            }
                                        }).bind("er_setCol", function(b, d) {
                                            var e = d.id;
                                            if (e != M) {
                                                var f = x.children("[er_col=" + e + "]").first();
                                                c(a(f), void 0, d.leftOrRight);
                                                M = e;
                                                x.find(".erimgMain_slide_selected").removeClass("erimgMain_slide_selected");
                                                f.addClass("erimgMain_slide_selected erimgMain_slide_visited")
                                            }
                                        });
                                        x.children("[er_col=0]").addClass("erimgMain_slide_selected erimgMain_slide_visited");
                                        g.bind("ac0 ac1", function(a) {
                                            a = a.type == "ac0";
                                            if (C == "main" && !H) b.trigger(a ? "er_prev" : xa ? "er_progressNext" : "er_next");
                                            else {
                                                var d = O ? 1 : j,
                                                    d = p.max(0, p.round(x.er_cssWidth() / E) - d),
                                                    e = p.round((U - x.er_x()) / E),
                                                    d = a ? e == 0 ? d : p.max(0, e - l) : e == d ? 0 : p.min(d, e + l);
                                                c(d * E + x.er_x(), false, a ? "l" : "r");
                                                J(false)
                                            }
                                        });
                                        r(g, Q, !0, h, ea)
                                    }
                                });
                                b.find("[data-ertype=layout]").find(".erthumbGrid").each(function() {
                                    var g =
                                        d(this),
                                        h = eval("(" + (g.attr("data-erConfig") || "{}") + ")"),
                                        j = h.direction || "horizontal",
                                        l = Number(void 0 !== h.spacing ? h.spacing : 10),
                                        y = h.scaleMode || "fillArea",
                                        C = Number(void 0 !== h.duration ? h.duration : 600);
                                    isNaN(C) && (C = 600);
                                    var H = Number(void 0 !== h.durationVertical ? h.durationVertical : "main" == Z ? C : 300);
                                    isNaN(H) && (H = 600);
                                    var v = void 0 !== h.easing ? h.easing : "easeOutQuad",
                                        z = !0 === h.alwaysPreviousButton,
                                        A = !1 !== h.loopNextButton,
                                        D = h.arrowButtonMode;
                                    /always|rollover/.test(D) || (D = "always");
                                    var F = "rollover" == h.slideLinkEvent &&
                                        !k ? "mouseenter" : "click",
                                        J = void 0 !== h.mouseWheel ? !1 !== h.mouseWheel : !0 === B.pro_mouseWheelAndSwipeEnabled,
                                        h = void 0 !== h.swipeEnabled ? !0 === h.swipeEnabled : B.pro_mouseWheelAndSwipeEnabled && /iPod|iPad|iPhone|Android/i.test(navigator.userAgent);
                                    (J || h) && ja("in the Settings section");
                                    var Q = g.find(".erimgMain_slides").first();
                                    Q.css({
                                        overflow: "hidden"
                                    });
                                    var P = Q.find(".erimgMain_slide").css({
                                            position: "absolute"
                                        }).remove(),
                                        X = Q.width(),
                                        L = Q.height(),
                                        O = 0 == P.width() ? 40 : P.outerWidth(),
                                        ea = 0 == P.height() ? 40 : P.outerHeight(),
                                        K = p.max(1, p.floor((X + l) / (O + l))),
                                        aa = p.max(1, p.floor((L + l) / (ea + l))),
                                        E = [],
                                        Z = "thumb";
                                    if (-1 != na.indexOf("," + Z)) alert("EasyRotator: Layout error (thumbGrid). Requested image type [" + Z + "] already used.  Display will be ignored.");
                                    else {
                                        na += "," + Z;
                                        var M = function(a) {
                                            var b, c, d = a % (K * aa);
                                            "horizontal" == j ? (c = a % aa, b = p.floor(d / aa), a = p.floor(a / aa), a = p.floor(a / K), b = a * X + b * (O + l), c *= ea + l) : (b = a % K, c = p.floor(d / K), a = p.floor(a / K), a = p.floor(a / aa), b *= O + l, c = a * L + c * (ea + l));
                                            return {
                                                left: b,
                                                top: c
                                            }
                                        };
                                        ha = [];
                                        V.each(function(a) {
                                            var c = d(this),
                                                e = d('<div style="position:absolute;overflow: visible;" er_row="' + a + '"></div>').appendTo(Q);
                                            "horizontal" == j ? e.css({
                                                top: L * a,
                                                left: 0
                                            }).addClass("er_ssd").er_extendDataObject("er_ssd", {
                                                top: "slidesH*" + a
                                            }) : e.css({
                                                left: X * a,
                                                top: 0
                                            }).addClass("er_ssd").er_extendDataObject("er_ssd", {
                                                left: "slidesW*" + a
                                            });
                                            E = 0 == E.length ? e : E.add(e);
                                            a = c.children("li");
                                            if (0 == a.length) alert("Empty category being skipped - this may cause problems!");
                                            else {
                                                ha.push(a.length);
                                                var f = function(a, c, e) {
                                                    e.find(".erimgMain_img").css({
                                                        overflow: "hidden"
                                                    }).each(function() {
                                                        var a =
                                                            d(this);
                                                        a.width();
                                                        a.height();
                                                        var b = c.find("img." + Z).first().removeAttr("alt");
                                                        b.attr("ersrc", b.attr("src"));
                                                        b.attr("src", "");
                                                        b.css({
                                                            display: "none",
                                                            position: "absolute"
                                                        }).attr("border", 0).appendTo(a).data("erProcessCount", 0).load(function() {
                                                            var b = d(this);
                                                            0 < b.data("erProcessCount") || "" == b.attr("src") || (b.data("erProcessCount", b.data("erProcessCount") + 1), fa(a, b, y), ga(a, b))
                                                        }).error(t);
                                                        b.addClass("erILdMom")
                                                    });
                                                    Ia(e, c);
                                                    e.bind(F, function() {
                                                        var a = d(this);
                                                        b.trigger("er_setCol", {
                                                            id: Number(a.closest("[er_col]").attr("er_col"))
                                                        })
                                                    })
                                                };
                                                a.each(function(a) {
                                                    var b = d(this),
                                                        c = P.clone().appendTo(e).attr("er_col", a).css({
                                                            position: "absolute",
                                                            width: O,
                                                            height: ea,
                                                            overflow: "hidden"
                                                        }),
                                                        g = M(a);
                                                    c.css(g);
                                                    f(a, b, c)
                                                });
                                                c = p.ceil(a.length / (K * aa));
                                                "horizontal" == j ? e.er_cssWidth(c * X).er_cssHeight(L).addClass("er_ssd").er_extendDataObject("er_ssd", {
                                                    width: "Math.ceil(" + a.length + " / (numTilesX*numTilesY))*slidesW",
                                                    height: "slidesH"
                                                }) : e.er_cssWidth(X).er_cssHeight(c * L).addClass("er_ssd").er_extendDataObject("er_ssd", {
                                                    width: "slidesW",
                                                    height: "Math.ceil(" + a.length +
                                                        " / (numTilesX*numTilesY))*slidesH"
                                                });
                                                setTimeout(function() {
                                                    e.find("img.erILdMom").each(function() {
                                                        var a = d(this);
                                                        !0 !== a.data("erILdMom_done") && (a.attr("src", a.attr("ersrc")), a.data("erILdMom_done", !0))
                                                    })
                                                }, 1)
                                            }
                                        });
                                        var S = "horizontal" == j,
                                            N = 0,
                                            x = E.first(),
                                            G = 0,
                                            U = 0,
                                            R = 0,
                                            W = !1,
                                            a, c = function() {
                                                W = !0;
                                                clearTimeout(a);
                                                a = setTimeout(function() {
                                                    W = !1
                                                }, 6E3)
                                            },
                                            e = function() {
                                                var a = S ? x.er_x() : x.er_y(),
                                                    b = S ? p.max(0, x.er_cssWidth() - X) + a : p.max(0, x.er_cssHeight() - L) + a;
                                                g.trigger("at0", {
                                                    v: 9 < p.abs(U - a) || z
                                                });
                                                g.trigger("at1", {
                                                    v: -9 > U -
                                                        b || A && 0 != b
                                                })
                                            },
                                            f = function(a) {
                                                a = Number(a.attr("er_col"));
                                                a = p.floor(a / (K * aa));
                                                return S ? x.er_x() + a * X : x.er_y() + a * L
                                            },
                                            m = function(a, b) {
                                                U = a;
                                                b ? S ? Q.stop().scrollLeft(a) : Q.stop().scrollTop(a) : S ? Q.stop().animate({
                                                    scrollLeft: a
                                                }, C, v) : Q.stop().animate({
                                                    scrollTop: a
                                                }, C, v);
                                                setTimeout(function() {
                                                    e()
                                                }, 10)
                                            },
                                            i = function(a, b) {
                                                R = a;
                                                b ? S ? Q.stop().scrollTop(a) : Q.stop().scrollLeft(a) : S ? Q.stop().animate({
                                                    scrollTop: a
                                                }, H, v) : Q.stop().animate({
                                                    scrollLeft: a
                                                }, H, v);
                                                setTimeout(function() {
                                                    e()
                                                }, 10)
                                            };
                                        setTimeout(function() {
                                            var a = S ? x.er_x() :
                                                x.er_y();
                                            m(a, !0);
                                            i(0, !0)
                                        }, 1);
                                        var w = ma,
                                            o = function() {
                                                var a = Q.width(),
                                                    b = Q.height();
                                                if (a != X || b != L || w) w = !1, X = a, L = b, K = p.max(1, p.floor((X + l) / (O + l))), aa = p.max(1, p.floor((L + l) / (ea + l))), E.each(function() {
                                                        var a = d(this),
                                                            b = a.data("er_ssd"),
                                                            c = {},
                                                            e;
                                                        for (e in b) {
                                                            var f = b[e],
                                                                f = eval(f.split("slidesW").join(X).split("slidesH").join(L).split("numTilesX").join(K).split("numTilesY").join(aa));
                                                            c[e] = f
                                                        }
                                                        a.css(c);
                                                        a.children("[er_col]").each(function() {
                                                            var a = d(this),
                                                                b = M(Number(a.attr("er_col")));
                                                            a.css(b)
                                                        })
                                                    }), i(x[S ? "er_y" : "er_x"]()),
                                                    a = x.children("[er_col=" + G + "]").first(), m(f(a));
                                                setTimeout(function() {
                                                    m(U, !0);
                                                    i(R, !0)
                                                }, 0)
                                            };
                                        s.push(function() {
                                            o()
                                        });
                                        b.bind("er_setRow", function(a, b) {
                                            var c = b.id;
                                            if (c != N) {
                                                E.filter("[er_row!=" + N + "]")[S ? "er_x" : "er_y"](U);
                                                var d = x,
                                                    e = E.filter("[er_row=" + c + "]");
                                                i(e[S ? "er_y" : "er_x"]());
                                                N = c;
                                                x = e;
                                                G = 0;
                                                d.find(".erimgMain_slide_selected").removeClass("erimgMain_slide_selected");
                                                e.find("[er_col=0]").addClass("erimgMain_slide_selected erimgMain_slide_visited")
                                            }
                                        }).bind("er_setCol", function(a, b) {
                                            var c = b.id;
                                            if (c != G) {
                                                var d =
                                                    x.children("[er_col=" + c + "]").first();
                                                W || m(f(d), void 0, b.leftOrRight);
                                                G = c;
                                                x.find(".erimgMain_slide_selected").removeClass("erimgMain_slide_selected");
                                                d.addClass("erimgMain_slide_selected erimgMain_slide_visited")
                                            }
                                        });
                                        x.children("[er_col=0]").addClass("erimgMain_slide_selected erimgMain_slide_visited");
                                        g.bind("ac0 ac1", function(a) {
                                            var a = "ac0" == a.type,
                                                b = p.round(S ? x.er_cssWidth() / X : x.er_cssHeight() / L) - 1,
                                                d = p.round(S ? (U - x.er_x()) / X : (U - x.er_y()) / L),
                                                b = a ? 0 == d ? b : p.max(0, d - 1) : d == b ? 0 : p.min(b, d + 1),
                                                b = S ? b * X + x.er_x() :
                                                b * L + x.er_y();
                                            m(b, !1, a ? "l" : "r");
                                            c()
                                        });
                                        r(g, D, S, h, J)
                                    }
                                });
                                b.find("[data-ertype=layout]").find(".erimgMainOneUp").each(function() {
                                    var g = d(this);
                                    ja("a Pro template");
                                    var h = eval("(" + (g.attr("data-erConfig") || "{}") + ")"),
                                        j = Number(void 0 !== h.numTiles ? h.numTiles : 1); - 1 == j && (j = V.first().children().length);
                                    var l = h.scaleMode || "fillArea",
                                        v = h.imgType || "main",
                                        C = Number(void 0 !== h.duration ? h.duration : 600);
                                    isNaN(C) && (C = 600);
                                    var H = Number(void 0 !== h.durationVertical ? h.durationVertical : "main" == v ? C : 300);
                                    isNaN(H) && (H = 600);
                                    var y = !0 === h.alwaysPreviousButton,
                                        z = !1 !== h.loopNextButton,
                                        A = !0 === h.jumpCategories,
                                        H = h.arrowButtonMode;
                                    /always|rollover/.test(H) || (H = "always");
                                    var D = !1 !== h.addMainSlideLinks,
                                        F = "rollover" == h.slideLinkEvent && !k ? "mouseenter" : "click",
                                        N = h.transition || "fade",
                                        Q = void 0 !== h.mouseWheel ? !1 !== h.mouseWheel : B.pro_mouseWheelAndSwipeEnabled,
                                        M = void 0 !== h.swipeEnabled ? !0 === h.swipeEnabled : B.pro_mouseWheelAndSwipeEnabled && /iPod|iPad|iPhone|Android/i.test(navigator.userAgent),
                                        X = void 0 !== h.fadeOutOldSlide ? !1 !== h.fadeOutOldSlide :
                                        "fillArea" != l,
                                        L = !0 === h.crossFade;
                                    (Q || M) && ja("a Pro template");
                                    var O = g.find(".erimgMain_slides").first();
                                    O.css({
                                        overflow: "hidden"
                                    });
                                    (function() {
                                        var a = g.find(".erimgMainOneUp_video");
                                        a.length == 0 && (a = g.find(".erimgMainOneUp_img"));
                                        a.outerWidth();
                                        a.outerHeight()
                                    })();
                                    var ea = g.find(".erimgMainOneUp_img").remove(),
                                        K = g.find(".erimgMainOneUp_video").remove();
                                    0 == K.length && (K = ea.clone().removeClass("erimgMainOneUp_img").addClass("erimgMainOneUp_video"));
                                    K.css({
                                        right: "",
                                        bottom: "",
                                        width: "100%",
                                        height: "100%"
                                    });
                                    var aa = p.ceil(O.outerWidth() / j),
                                        E = p.ceil(O.outerHeight()),
                                        Z = [];
                                    if (-1 != na.indexOf("," + v)) alert("EasyRotator: Layout error. Requested image type [" + v + "] already used.  Display will be ignored.");
                                    else {
                                        na += "," + v;
                                        ha = [];
                                        V.each(function(a) {
                                            var c = d(this).children("li");
                                            if (c.length == 0) alert("Empty category being skipped - this may cause problems!");
                                            else {
                                                ha.push(c.length);
                                                var e = function(c, e, f) {
                                                        var g = eval("(" + (e.find("span.ervideo").attr("data-erConfig") || "{}") + ")"),
                                                            h;
                                                        if (g.src && v == "main") {
                                                            h = K.clone().appendTo(O).er_x("110%");
                                                            f.data("erImgAVD", h);
                                                            var i = e.find("img." + v).attr("src");
                                                            ka(i, g, h, a, c)
                                                        }
                                                        f.css({
                                                            overflow: "hidden"
                                                        }).each(function() {
                                                            var a = d(this);
                                                            a.width();
                                                            a.height();
                                                            var b = e.find("img." + v).first().removeAttr("alt");
                                                            b.attr("ersrc", b.attr("src"));
                                                            b.attr("src", "");
                                                            b.css({
                                                                display: "none",
                                                                position: "absolute"
                                                            }).attr("border", 0).appendTo(a).data("erProcessCount", 0).load(function() {
                                                                var b = d(this);
                                                                if (!(b.data("erProcessCount") > 0 || b.attr("src") == "")) {
                                                                    b.data("erProcessCount", b.data("erProcessCount") + 1);
                                                                    var c = false;
                                                                    if (f.css("display") ==
                                                                        "none") {
                                                                        c = true;
                                                                        f.show()
                                                                    }
                                                                    fa(a, b, l);
                                                                    ga(a, b);
                                                                    c && f.hide();
                                                                    f.data("erImgLoaded", true);
                                                                    f.trigger("erImgLoaded", {
                                                                        v: true
                                                                    })
                                                                }
                                                            }).error(t);
                                                            v != "main" && D || a.wrapInner(e.find("a." + v + "Link").click(function() {
                                                                J(false)
                                                            }));
                                                            b.addClass("erILdMom")
                                                        });
                                                        v != "main" && D && f.bind(F, function() {
                                                            var a = d(this);
                                                            b.trigger("er_setCol", {
                                                                id: Number(a.closest("[er_col]").attr("er_col"))
                                                            })
                                                        })
                                                    },
                                                    f = [];
                                                c.each(function(b) {
                                                    var c = d(this),
                                                        g = ea.clone().attr({
                                                            er_row: a,
                                                            er_col: b
                                                        }).css({
                                                            left: 0,
                                                            top: 0,
                                                            position: "absolute",
                                                            width: "100%",
                                                            height: "100%",
                                                            overflow: "hidden"
                                                        }),
                                                        h = O.find("div.erimgMainOneUp_video");
                                                    h.length > 0 ? g.insertBefore(h[0]) : g.appendTo(O);
                                                    e(b, c, g);
                                                    f.push(g.hide())
                                                });
                                                Z.push(f);
                                                setTimeout(function() {
                                                    O.find("img.erILdMom").each(function() {
                                                        var a = d(this);
                                                        if (a.data("erILdMom_done") !== true) {
                                                            a.attr("src", a.attr("ersrc"));
                                                            a.data("erILdMom_done", true)
                                                        }
                                                    })
                                                }, 1)
                                            }
                                        });
                                        var G = ma;
                                        s.push(function() {
                                            var a = p.ceil(O.outerWidth() / j),
                                                b = p.ceil(O.outerHeight());
                                            if (a != aa || b != E || G) {
                                                G = false;
                                                aa = a;
                                                E = b;
                                                Ha(O)
                                            }
                                        });
                                        var S = 0,
                                            R = 0,
                                            x, W = Z[Z.length - 1][Z[Z.length - 1].length - 1];
                                        (p.random() + "num").substr(2);
                                        var h = d.browser,
                                            U = d.browser.version,
                                            $ = parseInt(U),
                                            U = parseInt(U.substr(U.indexOf(".") + 1)),
                                            ca = h.msie && 8 < $ || h.mozilla && 3.5 < $ + 0.1 * U || h.opera && 9 < $ || h.webkit && 521 < $;
                                        P && (ca = !1);
                                        var a = h.msie && 8 == $,
                                            c = [],
                                            e, f = function() {
                                                d(c).each(function() {
                                                    this.stop(true, true)
                                                });
                                                e && e.stop(true, true);
                                                var b = x;
                                                e = b;
                                                x = Z[S][R];
                                                x !== W && x.insertAfter(W);
                                                W = x;
                                                O.find("div.erimgMainOneUp_slide_selected").removeClass("erimgMainOneUp_slide_selected");
                                                x.addClass("erimgMainOneUp_slide_selected erimgMainOneUp_slide_visited");
                                                setTimeout(function() {
                                                    var e =
                                                        function() {
                                                            if (b) {
                                                                if (X) {
                                                                    a && b.find("*").css({
                                                                        filter: "inherit"
                                                                    });
                                                                    b.fadeOut()
                                                                } else b.hide();
                                                                var c = b.data("erImgAVD");
                                                                c && c.er_x("110%")
                                                            }
                                                        };
                                                    L && setTimeout(e, 10);
                                                    var f = function() {
                                                            setTimeout(function() {
                                                                L || e();
                                                                var a = x.data("erImgAVD");
                                                                a && a.er_x(0);
                                                                x.show();
                                                                d(c).each(function() {
                                                                    this.hide()
                                                                })
                                                            }, 10)
                                                        },
                                                        g = {};
                                                    g.sliceDownLeft = {
                                                        init: {
                                                            width: "stripW",
                                                            height: 0,
                                                            opacity: 0
                                                        },
                                                        end: {
                                                            height: "slideH",
                                                            opacity: 1
                                                        },
                                                        timeDur: C / 3,
                                                        timeOffset: 30,
                                                        numStrips: 12
                                                    };
                                                    g.sliceDownRight = {
                                                        init: {
                                                            width: "stripW",
                                                            height: 0,
                                                            opacity: 0
                                                        },
                                                        end: {
                                                            height: "slideH",
                                                            opacity: 1
                                                        },
                                                        timeDur: C / 3,
                                                        timeOffset: -30,
                                                        numStrips: 12
                                                    };
                                                    g.sliceUpLeft = {
                                                        init: {
                                                            width: "stripW",
                                                            height: "slideH",
                                                            top: "slideH",
                                                            opacity: 0
                                                        },
                                                        end: {
                                                            top: 0,
                                                            opacity: 1
                                                        },
                                                        timeDur: C / 3,
                                                        timeOffset: 30,
                                                        numStrips: 12
                                                    };
                                                    g.sliceUpRight = {
                                                        init: {
                                                            width: "stripW",
                                                            height: "slideH",
                                                            top: "slideH",
                                                            opacity: 0
                                                        },
                                                        end: {
                                                            top: 0,
                                                            opacity: 1
                                                        },
                                                        timeDur: C / 3,
                                                        timeOffset: -30,
                                                        numStrips: 12
                                                    };
                                                    g.sliceUpDownLeft = {
                                                        init: {
                                                            width: "stripW",
                                                            height: "slideH",
                                                            top: "slideH",
                                                            opacity: 0
                                                        },
                                                        init2: {
                                                            width: "stripW",
                                                            height: "slideH",
                                                            top: "-slideH",
                                                            opacity: 0
                                                        },
                                                        end: {
                                                            top: 0,
                                                            opacity: 1
                                                        },
                                                        timeDur: C /
                                                            3,
                                                        timeOffset: 30,
                                                        numStrips: 12
                                                    };
                                                    g.sliceUpDownRight = {
                                                        init: {
                                                            width: "stripW",
                                                            height: "slideH",
                                                            top: "slideH",
                                                            opacity: 0
                                                        },
                                                        init2: {
                                                            width: "stripW",
                                                            height: "slideH",
                                                            top: "-slideH",
                                                            opacity: 0
                                                        },
                                                        end: {
                                                            top: 0,
                                                            opacity: 1
                                                        },
                                                        timeDur: C / 3,
                                                        timeOffset: -30,
                                                        numStrips: 12
                                                    };
                                                    g.blinds = {
                                                        init: {
                                                            width: 0,
                                                            height: "slideH",
                                                            opacity: 0
                                                        },
                                                        end: {
                                                            width: "stripW",
                                                            opacity: 1
                                                        },
                                                        timeDur: C,
                                                        timeOffset: 1,
                                                        numStrips: 12
                                                    };
                                                    g.slideInLeft = {
                                                        init: {
                                                            left: "slideW",
                                                            width: "slideW",
                                                            height: "slideH"
                                                        },
                                                        end: {
                                                            left: 0
                                                        },
                                                        timeDur: C,
                                                        timeOffset: 1,
                                                        numStrips: 1
                                                    };
                                                    g.wipeRight = {
                                                        init: {
                                                            left: 0,
                                                            width: 0,
                                                            height: "slideH"
                                                        },
                                                        end: {
                                                            width: "slideW"
                                                        },
                                                        timeDur: C,
                                                        timeOffset: 1,
                                                        numStrips: 1
                                                    };
                                                    g.fade2 = {
                                                        init: {
                                                            width: "slideW",
                                                            height: E,
                                                            opacity: 0
                                                        },
                                                        end: {
                                                            opacity: 1
                                                        },
                                                        timeDur: C,
                                                        timeOffset: 1,
                                                        numStrips: 1
                                                    };
                                                    var h = g[N] || g.fade2;
                                                    if (N == "random") var i = ["fade", "sliceDownLeft", "sliceDownRight", "sliceUpLeft", "sliceUpRight", "sliceUpDownLeft", "sliceUpDownRight", "blinds", "slideInLeft", "wipeRight"],
                                                        i = i[p.round(p.random() * (i.length - 1))],
                                                        h = g[i] || g.fade2;
                                                    var j = h.numStrips,
                                                        n = p.ceil(aa / j),
                                                        g = function(a) {
                                                            for (var b in a) isNaN(a[b]) && (a[b] = Number(eval(a[b].split("stripW").join(n).split("slideW").join(aa).split("slideH").join(E))))
                                                        };
                                                    g(h.init);
                                                    g(h.init2);
                                                    g(h.end);
                                                    x.show();
                                                    for (var k = 0; k < j; k++)(function() {
                                                        var b = n * k;
                                                        if (h.init !== void 0 && !isNaN(h.init)) b = h.left;
                                                        var e = false,
                                                            g = c[k];
                                                        if (!g) {
                                                            g = d('<div style="position:absolute; left:' + b + 'px; overflow:hidden;">').appendTo(O);
                                                            e = true
                                                        }
                                                        g.css({
                                                            left: b + "px"
                                                        });
                                                        var i = h.init2 && k % 2 == 1 ? h.init2 : h.init;
                                                        g.show().css(i);
                                                        if (l == "showAvailable" || ca) {
                                                            var i = x.find("img"),
                                                                m = function(a, b, c) {
                                                                    g.css({
                                                                        backgroundImage: "url('" + a.attr("src") + "')",
                                                                        backgroundRepeat: "no-repeat",
                                                                        backgroundPosition: a.er_x() + b + "px " + (a.er_y() +
                                                                            c) + "px",
                                                                        backgroundSize: a.er_cssWidth() + "px " + a.er_cssHeight() + "px"
                                                                    })
                                                                };
                                                            i.data("erProcessCount") > 0 ? m(i, -n * k, 0) : function(a, b, c) {
                                                                x.bind("erImgLoaded", function() {
                                                                    m(a, b, c)
                                                                })
                                                            }(i, -b, 0)
                                                        } else {
                                                            e || g.children().remove();
                                                            var o = x.clone().show().appendTo(g).css({
                                                                left: -b,
                                                                opacity: 1,
                                                                width: aa,
                                                                height: E
                                                            });
                                                            o.find("div.erimgMainOneUp_video").remove();
                                                            o.find("img").photoLoading_markNotLoaded().load(function() {
                                                                var a = d(this);
                                                                if (!(a.data("erProcessCount") > 0 || a.attr("src") == "")) {
                                                                    a.data("erProcessCount", a.data("erProcessCount") +
                                                                        1);
                                                                    o.data("erImgLoaded", true);
                                                                    o.trigger("erImgLoaded", {
                                                                        v: true
                                                                    });
                                                                    fa(o, a, l);
                                                                    ga(o, a)
                                                                }
                                                            })
                                                        }
                                                        e && c.push(g);
                                                        a && g.find("div, img, *").attr("contenteditable", "true").css({
                                                            filter: "inherit",
                                                            zoom: 1
                                                        });
                                                        (function(a, b, c, d) {
                                                            var e = h.timeOffset,
                                                                e = e < 0 ? p.abs(e) * c : e * (d - c);
                                                            setTimeout(function() {
                                                                if (a) {
                                                                    a.show();
                                                                    setTimeout(function() {
                                                                        a.animate(h.end, h.timeDur, b)
                                                                    }, 1)
                                                                }
                                                            }, e)
                                                        })(g, k == j - 1 && h.timeOffset < 0 || k == 0 && h.timeOffset > 0 ? f : void 0, k, j)
                                                    })();
                                                    x.hide();
                                                    setTimeout(function() {
                                                        O.find("img.erILdMom").each(function() {
                                                            var a = d(this);
                                                            if (a.data("erILdMom_done") !==
                                                                true) {
                                                                a.attr("src", a.attr("ersrc"));
                                                                a.data("erILdMom_done", true)
                                                            }
                                                        })
                                                    }, 1)
                                                }, 1)
                                            },
                                            m = function() {
                                                var a = R == Z[S].length - 1;
                                                g.trigger("at0", {
                                                    v: R != 0 || y
                                                });
                                                g.trigger("at1", {
                                                    v: !a || z
                                                })
                                            },
                                            i = function(a) {
                                                R = a;
                                                f();
                                                setTimeout(function() {
                                                    m()
                                                }, 10)
                                            };
                                        b.bind("er_setRow", function(a, b) {
                                            var c = b.id;
                                            if (c != S) {
                                                S = c;
                                                i(0)
                                            }
                                        }).bind("er_setCol", function(a, b) {
                                            var c = b.id;
                                            c != R && i(c)
                                        });
                                        f();
                                        setTimeout(function() {
                                            m()
                                        }, 10);
                                        g.bind("ac0 ac1", function(a) {
                                            b.trigger(a.type == "ac0" ? "er_prev" : A ? "er_progressNext" : "er_next")
                                        });
                                        r(g, H, !0, M, Q)
                                    }
                                });
                                b.find("[data-ertype=layout]").find(".erdynamicText").each(function() {
                                    var g =
                                        d(this),
                                        h = g.attr("data-erfield") || "title",
                                        j = g.html(),
                                        k = eval("(" + (g.attr("data-erConfig") || "{}") + ")"),
                                        l = d.browser.msie && 9 > parseInt(d.browser.version) ? "0" : "600";
                                    0 === k.fadeDur && (k.fadeDur = "0");
                                    k.fadeDur = Number(k.fadeDur || l);
                                    var p = !0 === k.hideWhenEmpty,
                                        r = function(d, l) {
                                            var r = V.eq(d).children("li:eq(" + l + ")"),
                                                t = "span." + (/title|desc/.test(h) ? h : "customField[data-erfield=" + h + "]"),
                                                s = j;
                                            h != "none" && (s = r.find(t).html() || "");
                                            s = s.split("{image.index}").join(l + 1).split("{image.total}").join(V.eq(d).children("li").length);
                                            if (k.fadeDur == 0) {
                                                g.html(s);
                                                b.trigger("er_dtUpdate");
                                                p && s == "" ? g.hide() : g.show()
                                            } else g.stop(true, true).fadeOut(k.fadeDur / 2, function() {
                                                g.html(s);
                                                b.trigger("er_dtUpdate");
                                                (!p || s != "") && g.fadeIn(k.fadeDur / 2)
                                            })
                                        },
                                        t = 0;
                                    b.bind("er_setRow er_setCol", function(b, d) {
                                        var g = 0;
                                        b.type == "er_setRow" ? t = d.id : g = d.id;
                                        r(t, g)
                                    });
                                    r(0, 0)
                                });
                                b.find("[data-ertype=layout]").find(".erFixCSS3").each(function() {
                                    var b = d(this),
                                        g = ["border-radius", "box-shadow", "text-shadow"],
                                        h = ["-moz-", "-webkit-", "-ms-", "-o-"],
                                        j = (b.attr("style_real") ||
                                            "").split(";"),
                                        k = {},
                                        l = /\s*([A-Za-z0-9-+_-]+)\:\s*(.*)\s*$/,
                                        p;
                                    for (p = 0; p < j.length; p++) {
                                        var r = j[p].match(l);
                                        r && 3 == r.length && (k[r[1].toLowerCase()] = r[2])
                                    }
                                    for (p = 0; p < g.length; p++)
                                        if (j = g[p], l = k[j])
                                            for (r = 0; r < h.length; r++) k[h[r] + j] = l;
                                    b.css(k)
                                });
                                b.find("[data-ertype=layout]").find(".ercats").each(function() {
                                    var g = d(this),
                                        h = g.find(".ercats_btn_selected").first(),
                                        j = g.find(".ercats_btn_normal").first(),
                                        k = h.prev(),
                                        l = h.parent();
                                    h.remove().addClass("ercats_btn_internal");
                                    j.remove().addClass("ercats_btn_internal");
                                    V.each(function(b) {
                                        var g = d(this).attr("data-erlabel") || "Category " + (b + 1),
                                            b = j.clone().attr("erbtnid", b).html(g);
                                        1 == k.length ? b.insertAfter(k) : b.prependTo(l);
                                        k = b
                                    });
                                    var p = function(b) {
                                        g.find(".ercats_btn_selected").each(function() {
                                            var b = d(this),
                                                g = j.clone().attr("erbtnid", b.attr("erbtnid")).html(b.html());
                                            b.replaceWith(g)
                                        });
                                        g.find(".ercats_btn_internal[erbtnid=" + b + "]").each(function() {
                                            var b = d(this),
                                                g = h.clone().attr("erbtnid", b.attr("erbtnid")).html(b.html());
                                            b.replaceWith(g)
                                        })
                                    };
                                    p(0);
                                    b.bind("er_setRow",
                                        function(b, d) {
                                            p(Number(d.id))
                                        });
                                    g.find(".ercats_btn_internal").live("click", function() {
                                        var g = Number(d(this).attr("erbtnid"));
                                        b.trigger("er_setRow", {
                                            id: g
                                        })
                                    })
                                });
                                b.find("[data-ertype=layout]").find(".erdots").each(function() {
                                    var g = d(this),
                                        h = 0,
                                        j = eval("(" + (g.attr("data-erConfig") || "{}") + ")");
                                    j.showText = !0 === j.showText;
                                    var k = g.find(".erdots_btn_normal").attr("dotType", "0"),
                                        l = g.find(".erdots_btn_hover").attr("dotType", "1").remove(),
                                        p = g.find(".erdots_btn_selected").attr("dotType", "2").remove(),
                                        r = k.parent();
                                    k.remove();
                                    var s = function(g) {
                                            var j = d(this),
                                                g = g.type;
                                            "click" == g ? b.trigger("er_setCol", {
                                                id: j.index()
                                            }) : t(j, "mouseenter" == g ? j.index() == h ? 2 : 1 : j.index() == h ? 2 : 0)
                                        },
                                        t = function(b, d) {
                                            var g = [k, l, p],
                                                h = !isNaN(Number(b)) ? r.children().eq(b) : b;
                                            h.attr({
                                                "class": g[d].attr("class"),
                                                style: g[d].attr("style")
                                            });
                                            return h
                                        },
                                        v = function(b) {
                                            r.children(".erdots_btn_selected, .erdots_btn_hover").each(function() {
                                                var b = d(this);
                                                t(b, 0)
                                            });
                                            for (var b = ha[b], g = r.children().length; g > b;) r.children().last().unbind("mouseenter mouseleave click",
                                                s).remove(), g--;
                                            for (; g < b;) g++, r.append(k.clone().text(j.showText ? g : "").bind("mouseenter mouseleave click", s));
                                            r.css({
                                                width: "",
                                                position: "absolute"
                                            });
                                            r.css({
                                                width: r.innerWidth(),
                                                position: "static"
                                            });
                                            t(0, 2)
                                        };
                                    b.bind("er_setRow", function(b, d) {
                                        h = 0;
                                        v(d.id)
                                    });
                                    v(0);
                                    b.bind("er_setCol", function(b, g) {
                                        h = g.id;
                                        r.children(".erdots_btn_selected").each(function() {
                                            t(d(this), 0)
                                        });
                                        t(g.id, 2)
                                    })
                                });
                                b.find("[data-ertype=layout]").find(".erplayPause").each(function() {
                                    var g = d(this);
                                    b.bind("er_playPause", function(b, d) {
                                        var h = d.v;
                                        g.find(".erplayPause_btn_play")[h ? "hide" : "show"]();
                                        g.find(".erplayPause_btn_pause")[h ? "show" : "hide"]()
                                    });
                                    g.find("a").click(function(d) {
                                        b.trigger("er_playPauseToggle");
                                        d.preventDefault()
                                    })
                                });
                                0 < b.find(".erpt").length && ja("a Pro template");
                                (function() {
                                    var g = {
                                            src: "easyrotatorvideo.s3.amazonaws.com/audio/player.swf",
                                            srcEI: "easyrotatorvideo.s3.amazonaws.com/1/expressInstall.swf",
                                            showController: !0,
                                            controllerLocation: "tc",
                                            controllerPadding: 20,
                                            controllerWidth: 290,
                                            restartAutoplay: !1
                                        },
                                        k;
                                    for (k in g) void 0 !==
                                        B["audio_" + k] && (g[k] = B["audio_" + k]);
                                    g.controllerPadding = Number(g.controllerPadding || "20");
                                    g.controllerWidth = Number(g.controllerWidth || "290");
                                    var l = h;
                                    for (k in g) /^src/.test(k) && (g[k] = l + g[k]);
                                    if ("" == j.domain && B.lpp) {
                                        var r = "";
                                        (function() {
                                            for (var b = B.lpp.split("-"), d = 0; d < b.length; d++) r += String.fromCharCode(b[d])
                                        })();
                                        for (k in g) /^src/.test(k) && (l = g[k], l = l.substr(l.lastIndexOf("/") + 1), g[k] = r + l)
                                    }
                                    var t = !0 === B.autoplayPauseOnAudio,
                                        l = {
                                            width: g.controllerWidth,
                                            loader: "3E9AF9",
                                            animation: "no",
                                            expressInstall: !1,
                                            transparentpagebg: "yes",
                                            enableCallbacks: t
                                        };
                                    for (k in B) 0 == k.indexOf("audio_player_") && (l[k.substr(13)] = B[k]);
                                    ia.setup(g.src, l);
                                    t && (y.er_APs || (y.er_APs = []), y.er_APs.push(function(b) {
                                        t && ("i" == G && L == b) && J(!1)
                                    }), y.AudioPlayer = {
                                        activate: function(b) {
                                            var d = y.er_APs,
                                                g;
                                            for (g in d) d[g].call(null, b)
                                        }
                                    });
                                    var s = b.find("[data-ertype=layout]").find(".eraudioController");
                                    0 == s.length && (k = {
                                            position: "absolute",
                                            width: g.showController ? g.controllerWidth : 1,
                                            height: g.showController ? 24 : 1,
                                            overflow: g.showController ? "" : "hidden"
                                        },
                                        k[!g.showController || /^t/i.test(g.controllerLocation) ? "top" : "bottom"] = g.showController ? g.controllerPadding : -100, /c$/.test(g.controllerLocation) ? (k.left = "50%", k.marginLeft = -p.round(g.controllerWidth / 2)) : k[/r$/.test(g.controllerLocation) ? "right" : "left"] = g.controllerPadding, s = d("<div></div>").css(k).appendTo(b.find("[data-ertype=layout]")));
                                    var v = /[\d\.]+/.test(s.css("top")) ? "top" : "bottom",
                                        z = s.css(v),
                                        A, D = function(b, d) {
                                            if ((g.showController || d) && b !== A) {
                                                A = b;
                                                var h = {};
                                                h[v] = b && g.showController ? z : -50;
                                                s.stop(true,
                                                    true).animate(h, 300)
                                            }
                                        };
                                    g.showController || D(!1, !0);
                                    var F = "erAP_" + (p.random() + "").substr(2) + "_",
                                        P = 0,
                                        N = function(b, d, h, j) {
                                            if (b) {
                                                ja("audio");
                                                var k = F + P++,
                                                    l = " onplay=\"AudioPlayer.activate('" + k + "')\"";
                                                h && (l = l + ' autoplay="autoplay"');
                                                j && (l = l + ' loop="loop"');
                                                var l = '<audio id="' + k + 'a" width="' + g.controllerWidth + '" src="' + b + '" width="' + g.controllerWidth + '" controls="controls"' + l + ">No audio support.</audio>",
                                                    p = ia.determineFlashSupport();
                                                s.html('<p id="' + k + '">' + (p ? "" : l) + "</p>");
                                                ia.embed(k, {
                                                    soundFile: b,
                                                    titles: d,
                                                    autostart: h ? "yes" : "no",
                                                    loop: j ? "yes" : "no"
                                                });
                                                return k
                                            }
                                            s.html("")
                                        },
                                        Q = -1,
                                        M = -1,
                                        G, L, O = function(d, g, h, j) {
                                            if (!(d == Q && g == M)) {
                                                Q = d;
                                                M = g;
                                                d = false;
                                                if (g = V.eq(Q).children("li:eq(" + M + ")").find("span.eraudio").attr("data-erConfig")) G = "i";
                                                else if (h && (g = V.eq(Q).attr("data-erAudioConfig"))) G = "g";
                                                else if (j && (g = b.attr("data-erAudioConfig"))) G = "b";
                                                else if (G == "i" || G == "g" && h || j) d = true;
                                                h = eval("(" + (g || "{}") + ")");
                                                if (h.src) {
                                                    D(true);
                                                    L = N(h.src, h.label || "", h.autoplay !== false, h.loop === true)
                                                } else if (d) {
                                                    L = N(null);
                                                    D(false)
                                                }
                                            }
                                        };
                                    b.bind("er_setRow",
                                        function(b, d) {
                                            O(d.id, 0, true)
                                        }).bind("er_setCol", function(b, d) {
                                        O(Q, d.id)
                                    });
                                    O(0, 0, !0, !0);
                                    !b.attr("data-erAudioConfig") && (!V.attr("data-erAudioConfig") && 0 == V.find("span.eraudio").length) && s.remove()
                                })();
                                (function() {
                                    var g = "",
                                        h = 0;
                                    b.find("[data-ertype=layout]").find("[style_erinjection]").each(function() {
                                        var b = d(this),
                                            j = "style_erinjection_uid" + h++;
                                        b.addClass(j);
                                        var k = b.attr("style_erinjection").split(";").join(" !important;"); - 1 != k.indexOf("THIS:hover") && (k = k.split("THIS:hover").join("." + j + "_hover"), b.bind("mouseenter",
                                            function() {
                                                b.addClass(j + "_hover")
                                            }).bind("mouseleave", function() {
                                            b.removeClass(j + "_hover")
                                        }));
                                        k = k.split("THIS").join("." + j);
                                        g += k
                                    });
                                    d("head").append('<style type="text/css">' + g + "</style>")
                                })();
                                var oa = 0,
                                    va = 0;
                                b.bind("er_next", function(d, g) {
                                    var h = va + 1;
                                    ha[oa] <= h && (h = 0);
                                    (!g || !(g.noLoop && 0 == h)) && b.trigger("er_setCol", {
                                        id: h,
                                        leftOrRight: "r"
                                    })
                                }).bind("er_prev", function(d, g) {
                                    if (!g || !(g.noLoop && 0 == va)) {
                                        var h = va - 1;
                                        0 > h && (h = ha[oa] - 1);
                                        b.trigger("er_setCol", {
                                            id: h,
                                            leftOrRight: "l"
                                        })
                                    }
                                }).bind("er_setRow", function(b, d) {
                                    d.id !=
                                        oa && (oa = d.id, va = 0)
                                }).bind("er_setCol", function(b, d) {
                                    va = d.id
                                });
                                var sa = !0 === B.autoplayEnabled,
                                    Ja = Number(B.autoplayDelay || "5000"),
                                    Ka = !1 !== B.autoplayStopOnInteraction,
                                    La = !0 === B.autoplayGalleryLoop,
                                    Ma = !1 !== B.autoplayFullLoop,
                                    A = !1 !== B.autoplayPauseOnHover,
                                    Pa = Number(B.autoplayLoopOffset || "0"),
                                    R, Ba = function(d) {
                                        var d = d || "autoplay",
                                            g = va + 1;
                                        ha[oa] - Pa <= g ? La ? b.trigger("er_setCol", {
                                            id: 0,
                                            source: d,
                                            leftOrRight: "r"
                                        }) : oa < ha.length - 1 ? b.trigger("er_setRow", {
                                            id: oa + 1,
                                            source: d
                                        }) : Ma && b.trigger("er_set" + (1 < ha.length ? "Row" :
                                            "Col"), {
                                            id: 0,
                                            source: d,
                                            leftOrRight: "r"
                                        }) : b.trigger("er_setCol", {
                                            id: g,
                                            source: d,
                                            leftOrRight: "r"
                                        })
                                    };
                                b.bind("er_playPause", function(b, d) {
                                    sa = d.v;
                                    clearTimeout(R);
                                    sa && (R = setTimeout(Ba, Ja))
                                }).bind("er_playPauseToggle", function() {
                                    J(!sa)
                                }).bind("er_progressNext", function() {
                                    Ba("manual")
                                });
                                b.bind("er_setRow er_setCol", function(b, d) {
                                    Ka && ("autoplay" != d.source && sa) && J(!1);
                                    clearTimeout(R);
                                    sa && (R = setTimeout(Ba, Ja))
                                });
                                if (A) {
                                    var Ca = !1;
                                    b.bind("er_playPause er_setRow er_setCol mouseenter mouseleave", function(b) {
                                        /er_playPause|er_setRow|er_setCol/.test(b.type) ?
                                            Ka && (Ca = !1) : "mouseenter" == b.type && !k ? (b = d(b.fromElement), b.hasClass("ercats_btn_internal") && 0 == b.parent().length || (Ca = !1, sa && (J(!1), Ca = !0))) : "mouseleave" == b.type && Ca && J(!0)
                                    })
                                }
                                J(sa);
                                (function() {
                                    for (var b = 0; b < ca.length; b++) ca[b].css("display", "none")
                                })()
                            }
                        }
                    }
                }
            });
            d(y.er_postprocessCallbacks).each(function() {
                this.call(null, d)
            })
        };
        d(function() {
            var h = 0,
                g = 0;
            d("div.erAjaxLoad").each(function() {
                var j = d(this),
                    p = j.attr("data-erajaxsource");
                p && (p += "?&nocache=" + (new Date).getTime(), h++, d.get(p, function(d, p) {
                    d && "success" ==
                        p ? j.replaceWith(d) : alert("EasyRotator ajax loading error: " + p);
                    g++;
                    g == h && G()
                }, "html"))
            });
            0 == h && G()
        })
    }
})(er_$144, document, window, er_swfobject22, er_$f, Math);