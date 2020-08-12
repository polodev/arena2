function showBatteryPopup() {}
$gsm.onload(function() {
        var e = document.querySelector("#battery-popover");
        if (e) {
            var t = 1854,
                n = 'Automated by <a href="http://www.smartviser.com" target="_blank" rel="nofollow">  <img src="//cdn.gsmarena.com/vv/assets10/i/bat-img/smartviser-93x15px.png" alt="SmartViser"></a>';
            showBatteryPopup = function(r, a) {
                "" == e.innerHTML ? $gsm.xhr("GET", "battery-popup.php3", function(r) {
                    e.innerHTML = r, e.style.display = "initial";
                    var a = document.querySelector(".review-header .help-review a"),
                        o = a && parseInt(a.getAttribute("href").match(/-(\d+)\.php/)[1], 10);
                    if (o >= t) {
                        var s = e.querySelector(".button-position.button-gray"),
                            l = $gsm.tag("span", {
                                class: "smartviser"
                            }, n);
                        s.parentElement.insertBefore(l, s);
                        var i = e.querySelector("h3.h3");
                        $gsm.removeClass(i, "center")
                    }
                }, {
                    idPhone: a
                }, function() {}, !0) : e.style.display = "none" == e.style.display ? "initial" : "none", r.preventDefault(), r.stopPropagation()
            }, $gsm.addEventListener(e, "click", function(e) {
                e.stopPropagation()
            }), $gsm.addEventListener(document, "click", function(t) {
                e.style.display = "none"
            })
        }
    }), $gsm.onload(function() {
        for (var e = document.querySelectorAll("span.price"), t = 0; t < e.length; t++) {
            var n = e[t].parentNode.querySelector("a");
            n.onclick = function() {
                var e = this.parentNode.querySelector("span");
                return e.style.display = "inline" == e.style.display ? "none" : "inline", !1
            }
        }
        var r = .3,
            a = document.querySelector(".link-network-detail");
        if (a) {
            for (var o = document.querySelectorAll(".tr-toggle"), s = a.parentElement;
                "TABLE" !== s.nodeName;) s = s.parentElement;
            var l = (s.querySelector(".tr-hover") || s.querySelector(".expandable-table .ttl")).offsetHeight;
            if ($gsm.hasClass(a, "collapse")) {
                var i = s.firstElementChild.childElementCount - s.querySelectorAll(".tr-toggle").length;
                s.style.maxHeight = l * i + "px"
            }
            a.onclick = function(e) {
                return $gsm.hasClass(a, "collapse") ? (s.style.transition = "", s.style.maxHeight = s.offsetHeight + "px", setTimeout(function() {
                    var e = (s.firstElementChild.childElementCount - s.querySelectorAll("[data-spec-optional]").length * ("" == window.location.hash ? 0 : 1)) * l;
                    s.style.transition = r + "s", s.style.maxHeight = e + "px", $gsm.setCookie("networkVisible", "1");
                    for (var t = 0; t < o.length; t++) o[t].style.display = "" != window.location.hash && o[t].hasAttribute("data-spec-optional") ? "none" : "table-row";
                    setTimeout(function() {
                        s.style.transition = "", s.style.maxHeight = ""
                    }, 1e3 * r)
                }, 10)) : (s.style.transition = "", s.style.maxHeight = s.offsetHeight + "px", setTimeout(function() {
                    var e = (s.querySelectorAll("tr").length - s.querySelectorAll("tr.tr-toggle").length) * l;
                    s.style.transition = r + "s", s.style.maxHeight = e + "px", $gsm.setCookie("networkVisible", "0")
                }, 10)), $gsm.toggleClass(a, "collapse"), e.preventDefault(), e.stopPropagation(), !1
            }
        }
    }),
    function() {
        function e(e) {
            for (var t = {}, n = new Array(e.length), r = 0; r < e.length; r++)
                for (var a = e[r], o = {}, s = 0; s < a.length; s++) {
                    var l = a[s].toLowerCase();
                    l in o || (t[l] = (t[l] || 0) + 1, o[l] = !0)
                }
            for (var r = 0; r < e.length; r++) {
                n[r] = new Array(a.length);
                for (var a = e[r], s = 0; s < a.length; s++) n[r][s] = t[a[s].toLowerCase()] >= e.length;
                var c;
                e: for (var s = 0; s < a.length; s++)
                    if (a[s].match(/^\s*\(\s*$/)) {
                        n[r][s] = !1;
                        for (var h = 1; s + h < a.length && !a[s + h].match(/^\s*\)\s*$/);) {
                            if (!n[r][s + h]) continue e;
                            h++
                        }
                        n[r][s] = !0, n[r][s + h] = !0, s += h + 1
                    } else a[s].match(/^\s*,\s*$/) && s > 0 ? (a[s - 1] += a[s], a[s] = "", n[r][s] = !1, s++) : (c = a[s].match(i)) ? n[r][s] = c[0].length !== a[s].length : "" == a[s] && (n[r][s] = !1)
            }
            return n
        }

        function t(e) {
            if (!e) return c;
            var t = e.querySelector("[data-spec]");
            if (!t) return c;
            var n = t.getAttribute("data-spec");
            return u[n] || c
        }

        function n(n) {
            i = t(n);
            var r = [].slice.call(n.querySelectorAll(".nfo"), 0);
            if (r = r.filter(function(e) {
                    return e.innerHTML.match(/\S/)
                }), !(r.length < 2)) {
                var a = [];
                r[0].innerHTML != r[1].innerHTML || r[2] && r[0].innerHTML != r[2].innerHTML || (a = [
                    [r[0].innerHTML],
                    [r[1].innerHTML]
                ], r[2] && a.push([r[2].innerHTML])), a.length || (a = r.map(function(e) {
                    return e.innerHTML.split(i)
                }));
                for (var o = e(a), s = 0; s < r.length; s++) {
                    for (var l = a[s], c = 0; c < l.length; c++) o[s][c] && (l[c] = '<span class="diff-dim">' + l[c] + "</span>");
                    r[s].innerHTML = l.join("")
                }
            }
        }

        function r() {
            if ($gsm.addClass(f, "on"), !$gsm.hasClass(g, "diff-ran")) {
                $gsm.addClass(g, "diff-ran"), $gsm.addClass(g, "diff-show");
                for (var e = g.querySelectorAll("tr"), t = g.querySelector("#specs-start") ? 2 : 0; t < e.length; t++) n(e[t])
            }
        }

        function a(e) {
            for (var t = e.querySelectorAll(".diff-dim"), n = 0; n < t.length; n++) {
                for (var r = t[n], a = r.childNodes; a.length;) r.parentElement.insertBefore(a[0], r);
                r.parentElement.removeChild(r)
            }
        }

        function o() {
            var e = p.join(",");
            $gsm.hasClass(f, "on") && (e = "diff-" + e), e.match(/^\*(,\*)*$/) ? history.replaceState({}, "", window.location.pathname + window.location.search) : history.replaceState({}, "", "#" + e)
        }

        function s() {
            var e = this.getAttribute("data-version") || this.value,
                t = parseInt(this.getAttribute("data-column"), 10);
            p[t] = e;
            var r;
            r = "*" == e ? y[t] : w[t][e];
            for (var s = document.querySelectorAll(".compare-candidate.compare-col"), l = document.querySelectorAll(".changed[data-spec]"), i = 0; i < l.length; i++) {
                var c = l[i];
                if (t === parseInt(c.getAttribute("data-column"), 10)) {
                    var h = c.getAttribute("data-spec");
                    c.innerHTML = y[t][h], $gsm.removeClass(c, "changed")
                }
            }
            for (var c in r)
                if (!c.match(/^_/)) {
                    var m = document.querySelectorAll('[data-spec="' + c + '"]');
                    if (m.length) {
                        var d = m[0].parentElement;
                        a(d), c in y[t] || (y[t][c] = m[Math.min(t, m.length - 1)].innerHTML);
                        var i = 0;
                        do m[Math.min(t, m.length - 1) + i].innerHTML = r[c], m[Math.min(t, m.length - 1) + i].setAttribute("data-column", t), "*" != e && $gsm.addClass(m[t + i], "changed"), i += s.length; while (s.length && t + i < m.length);
                        $gsm.hasClass(f, "on") && n(d)
                    }
                }
            o();
            for (var i = 0; i < S.length; i++) S[i].style.display = "*" != p[0] && S[i].hasAttribute("data-spec-optional") ? "none" : "table-row";
            if (s.length) {
                for (var u = document.querySelectorAll("[data-spec-optional]"), i = 0; i < u.length; i++) $gsm.toggleClass(u[i].children[t + 1], "hide", "*" !== p[t]);
                for (var i = 0; i < u.length; i++) {
                    for (var c = u[i], v = !0, $ = 0; $ < c.childElementCount; $++) {
                        var C = c.children[$];
                        $gsm.hasClass(C, "ttl") || (v = v && ($gsm.hasClass(C, "hide") || C.innerHTML.match(/^\s*$/)))
                    }
                    c.style.display = v ? "none" : ""
                }
                A = r._color;
                for (var b = document.querySelectorAll('.nfo.changed[data-column="' + t + '"]'), i = 0; i < b.length; i++) b[i].setAttribute("data-color", r._color);
                this.setAttribute("data-color", A), $gsm.toggleClass(this, "active", "*" !== this.value)
            } else $gsm.removeClass(g, A), A = r._color, $gsm.addClass(g, A), $gsm.removeClass(document.querySelector(".tab[data-version].active"), "active"), $gsm.addClass(this, "active");
            "*" !== e && $gsm.xhr("GET", "//www.gsmarena.com/counter-js.php3?sF=version&idSiteVer=" + (window.location.hostname.match(/^m\./) ? "1" : "0"), function() {}), $gsm.setCookie("tabs-used", "1", 90)
        }

        function l() {
            var e = 1e3;
            if ($.length) {
                var t = 1,
                    n = 1;
                I = setInterval(function() {
                    g.className = "color" + t % H, $gsm.removeClass($[t - n], "active"), $gsm.addClass($[t], "active"), 0 == n ? n = -1 : t == $.length - 1 && (n = 0), t += n, t < 0 && clearInterval(I)
                }, e / (2 * $.length))
            }
        }
        var i, c = /(\s*,\s*)/gm,
            h = /(\s*[,()]\s*)/,
            m = /(\s*(?:[,()]|(?:\n*<br>\n*))\s*)/,
            d = /(\n?<br>\n?)/,
            u = {
                nettech: /([\/])/,
                net2g: /((?:\s+[\/-]\s+)|(?:^GSM)|(?:^CDMA))/,
                net3g: /([\/-]|(?:^HS[A-Z]+)|(?:^CDMA\d*))/,
                net4g: /(\s*[,-]|(?:LTE band )\s*)/,
                displaysize: h,
                displayresolution: h,
                cam1modules: m,
                cam2modules: m,
                sim: /(\s*(?: or )\s*)/,
                bodyother: d,
                displayother: d,
                optionalother: d,
                featuresother: d,
                internalmemory: /(\s*(?:(?: or )|[,])\s*)/
            },
            g = document.querySelector("#specs-list"),
            f = document.querySelector(".diff-toggle");
        f && (f.onclick = function(e) {
            $gsm.hasClass(g, "diff-ran") ? ($gsm.toggleClass(f, "on"), $gsm.toggleClass(g, "diff-show")) : (r(), $gsm.xhr("GET", "//www.gsmarena.com/counter-js.php3", function() {}, {
                sF: window.location.hostname.match(/^m\./) ? "cmp-diff-m" : "cmp-diff"
            })), o()
        }), $gsm.onload(function() {
            window.location.hash.match(/^#diff-$/) && f.onclick()
        });
        var p = [];
        if ("undefined" != typeof SPEC_VERSIONS) {
            var v = document.querySelector('a[href^="compare"]');
            v && (v.onclick = function(e) {
                e.stopPropagation(), e.preventDefault(), window.location = this.href + window.location.hash
            });
            for (var y = [], w = [], g = document.querySelector("#specs-list"), S = document.querySelectorAll(".tr-toggle"), $ = document.querySelectorAll(".specs-tabs .tab"), C = 0; C < $.length; C++) $[C].onclick = s, $[C].setAttribute("data-column", 0);
            if (!$.length)
                for (var b = document.querySelectorAll(".version-select"), C = 0; C < b.length; C++) b[C].onchange = s;
            var A = "",
                q = 0,
                H = 6;
            window.location.host.match(/^www\./) ? y._color = "" : (y._color = "color0", q++);
            for (var C = 0; C < SPEC_VERSIONS.length; C++) {
                for (var T = SPEC_VERSIONS[C], E = {}, L = 0; L < T.length; L++) {
                    var M = T[L][1];
                    M._column = C, M._name = T[L][0], M._color = "color" + q, M._index = L + 1, q = (q + 1) % H, E[M._name] = M
                }
                w.push(E), y.push({}), p.push("*")
            }
            var k, x = document.querySelector(".swiper-wrapper");
            if ($.length && $[$.length - 1].offsetLeft + $[$.length - 1].offsetWidth > x.offsetWidth) {
                for (var C = 0; C < $.length; C++) $gsm.addClass($[C], "swiper-slide");
                var _ = $gsm.tag("script", {
                    src: "//cdn.gsmarena.com/vv/assets10/js/m/swiper.js"
                }, "", g);
                _.onload = function() {
                    k = new Swiper(".specs-tabs", {
                        slidesPerView: "auto",
                        spaceBetween: 0,
                        slidesOffsetAfter: 200
                    });
                    var e = window.location.hash.match(/#(.+)/);
                    if (e) {
                        var e = e[1].split(",")[0],
                            t = w[0][e]._index;
                        $[t].offsetLeft + $[t].offsetWidth > x.offsetWidth && k.slideTo(t)
                    }
                }
            }
            $gsm.onload(function() {
                var e = window.location.hash.match(/#(diff-)?(.+)/);
                if (e)
                    for (var t = (e[2] || e[1]).split(","), n = 0; n < t.length; n++) {
                        var r = document.querySelector('.version-select[data-column="' + n + '"]');
                        if (r) r.value = t[n], "" == r.value && (r.value = "*"), r.onchange();
                        else {
                            var a = document.querySelector('.specs-tabs .tab[data-version="' + t[n] + '"]');
                            a && a.onclick()
                        }
                    }
                e || $gsm.getCookie("tabs-used") || (P = setTimeout(l, 2e3)), e && "diff-" == e[1] && f.onclick()
            });
            var P, I
        }
    }();
