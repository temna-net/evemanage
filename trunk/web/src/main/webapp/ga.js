(function() {
    var aa = "_gat",ba = "_gaq",r = true,v = false,w = undefined,ca = document,da = "4.7.2",y = "length",z = "cookie",A = "location",ea = "_gaUserPrefs",fa = "ioo",B = "&",C = "=",D = "__utma=",F = "__utmb=",G = "__utmc=",ga = "__utmk=",H = "__utmv=",K = "__utmz=",L = "__utmx=",ha = "GASO=";
    var M = function(i) {
        return w == i || "-" == i || "" == i
    },ia = function(i) {
        return i[y] > 0 && " \n\r\t".indexOf(i) > -1
    },O = function(i, f, m) {
        var u = "-",l;
        if (!M(i) && !M(f) && !M(m)) {
            l = i.indexOf(f);
            if (l > -1) {
                m = i.indexOf(m, l);
                if (m < 0)m = i[y];
                u = N(i, l + f.indexOf(C) + 1, m)
            }
        }
        return u
    },ka = function(i) {
        var f = v,m = 0,u,l;
        if (!M(i)) {
            f = r;
            for (u = 0; u < i[y]; u++) {
                l = i.charAt(u);
                m += "." == l ? 1 : 0;
                f = f && m <= 1 && (0 == u && "-" == l || ".0123456789".indexOf(l) > -1)
            }
        }
        return f
    },P = function(i, f) {
        var m = encodeURIComponent;
        return m instanceof Function ? f ? encodeURI(i) : m(i) : escape(i)
    },
            Q = function(i, f) {
                var m = decodeURIComponent,u;
                i = i.split("+").join(" ");
                if (m instanceof Function)try {
                    u = f ? decodeURI(i) : m(i)
                } catch(l) {
                    u = unescape(i)
                } else u = unescape(i);
                return u
            },R = function(i, f) {
        return i.indexOf(f) > -1
    },S = function(i, f) {
        i[i[y]] = f
    },U = function(i) {
        return i.toLowerCase()
    },V = function(i, f) {
        return i.split(f)
    },la = function(i, f) {
        return i.indexOf(f)
    },N = function(i, f, m) {
        m = w == m ? i[y] : m;
        return i.substring(f, m)
    },ma = function(i, f) {
        return i.join(f)
    },na = function(i) {
        var f = 1,m = 0,u;
        if (!M(i)) {
            f = 0;
            for (u = i[y] - 1; u >= 0; u--) {
                m =
                        i.charCodeAt(u);
                f = (f << 6 & 268435455) + m + (m << 14);
                m = f & 266338304;
                f = m != 0 ? f ^ m >> 21 : f
            }
        }
        return f
    },oa = function() {
        var i = window,f = w;
        if (i && i.gaGlobal && i.gaGlobal.hid)f = i.gaGlobal.hid; else {
            f = W();
            i.gaGlobal = i.gaGlobal ? i.gaGlobal : {};
            i.gaGlobal.hid = f
        }
        return f
    },W = function() {
        return Math.round(Math.random() * 2147483647)
    },pa = function(i, f) {
        var m = ca.createElement("script");
        m.type = "text/javascript";
        m.src = i;
        if (f)m.id = f;
        (ca.getElementsByTagName("head")[0] || ca.getElementsByTagName("body")[0]).appendChild(m)
    };
    var ra = function(i, f) {
        this.Wa = i;
        this.jb = f
    },sa = function() {
        function i(m) {
            var u = [];
            m = m.split(",");
            for (var l,o = 0; o < m.length; o++) {
                l = m[o].split(":");
                u.push(new ra(l[0], l[1]))
            }
            return u
        }

        var f = this;
        f.Ba = "utm_campaign";
        f.Ca = "utm_content";
        f.Da = "utm_id";
        f.Ea = "utm_medium";
        f.Fa = "utm_nooverride";
        f.Ga = "utm_source";
        f.Ha = "utm_term";
        f.Ia = "gclid";
        f.Y = 0;
        f.z = 0;
        f.Ma = 15768E6;
        f.pb = 18E5;
        f.w = 63072E6;
        f.oa = [];
        f.qa = [];
        f.ac = "cse";
        f.bc = "q";
        f.kb = 5;
        f.R = i("daum:q,eniro:search_word,naver:query,images.google:q,google:q,yahoo:p,msn:q,bing:q,aol:query,aol:encquery,lycos:query,ask:q,altavista:q,netscape:query,cnn:query,about:terms,mamma:query,alltheweb:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,aol:q,mama:query,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,pchome:q,kvasir:q,sesam:q,ozu:q,terra:query,mynet:q,ekolay:q,rambler:words");
        f.u = w;
        f.hb = v;
        f.h = "/";
        f.S = 100;
        f.ja = "/__utm.gif";
        f.aa = 1;
        f.ba = 1;
        f.v = "|";
        f.$ = 1;
        f.Na = 1;
        f.Ka = 1;
        f.c = "auto";
        f.G = 1;
        f.ma = 1E3;
        f.wc = 10;
        f.Hb = 10;
        f.xc = 0.2;
        f.o = w;
        f.a = document;
        f.e = window
    };
    var ta = function(i) {
        function f(d, a, j, c) {
            var n = "",s = 0;
            n = O(d, "2" + a, ";");
            if (!M(n)) {
                d = n.indexOf("^" + j + ".");
                if (d < 0)return["",0];
                n = N(n, d + j[y] + 2);
                if (n.indexOf("^") > 0)n = n.split("^")[0];
                j = n.split(":");
                n = j[1];
                s = parseInt(j[0], 10);
                if (!c && s < o.s)n = ""
            }
            if (M(n))n = "";
            return[n,s]
        }

        function m(d, a) {
            return"^" + ma([[a,d[1]].join("."),d[0]], ":")
        }

        function u(d, a) {
            var j = d + "; path=" + k.h + "; " + a + o.ab();
            k.a[z] = j
        }

        function l(d) {
            var a = new Date;
            d = new Date(a.getTime() + d);
            return"expires=" + d.toGMTString() + "; "
        }

        var o = this,k = i;
        o.s = (new Date).getTime();
        var g = [D,F,G,K,H,L,ha];
        o.k = function() {
            var d = k.a[z];
            return k.o ? o.Ob(d, k.o) : d
        };
        o.Ob = function(d, a) {
            var j = [],c,n;
            for (c = 0; c < g[y]; c++) {
                n = f(d, g[c], a)[0];
                M(n) || (j[j[y]] = g[c] + n + ";")
            }
            return j.join("")
        };
        o.m = function(d, a, j) {
            var c = j > 0 ? l(j) : "";
            if (k.o) {
                a = o.Yb(k.a[z], d, k.o, a, j);
                d = "2" + d;
                c = j > 0 ? l(k.w) : ""
            }
            u(d + a, c)
        };
        o.Yb = function(d, a, j, c, n) {
            var s = "";
            n = n || k.w;
            c = m([c,o.s + n * 1], j);
            s = O(d, "2" + a, ";");
            if (!M(s)) {
                d = m(f(d, a, j, r), j);
                s = ma(s.split(d), "");
                return s = c + s
            }
            return c
        };
        o.ab = function() {
            return M(k.c) ? "" : "domain=" + k.c + ";"
        }
    };
    var ua = function(i) {
        function f(q) {
            q = q instanceof Array ? q.join(".") : "";
            return M(q) ? "-" : q
        }

        function m(q, b) {
            var e = [],h;
            if (!M(q)) {
                e = q.split(".");
                if (b)for (h = 0; h < e[y]; h++)ka(e[h]) || (e[h] = "-")
            }
            return e
        }

        function u(q, b, e) {
            var h = c.K,p,t;
            for (p = 0; p < h[y]; p++) {
                t = h[p][0];
                t += M(b) ? b : b + h[p][4];
                h[p][2](O(q, t, e))
            }
        }

        var l,o,k,g,d,a,j,c = this,n,s = i;
        c.j = new ta(i);
        c.gb = function() {
            return w == n || n == c.N()
        };
        c.k = function() {
            return c.j.k()
        };
        c.ha = function() {
            return d ? d : "-"
        };
        c.sb = function(q) {
            d = q
        };
        c.ua = function(q) {
            n = ka(q) ? q * 1 : "-"
        };
        c.ga =
                function() {
                    return f(a)
                };
        c.va = function(q) {
            a = m(q)
        };
        c.Nb = function() {
            c.j.m(H, "", -1)
        };
        c.Zb = function() {
            return n ? n : "-"
        };
        c.ab = function() {
            return M(s.c) ? "" : "domain=" + s.c + ";"
        };
        c.ea = function() {
            return f(l)
        };
        c.qb = function(q) {
            l = m(q, 1)
        };
        c.B = function() {
            return f(o)
        };
        c.ta = function(q) {
            o = m(q, 1)
        };
        c.fa = function() {
            return f(k)
        };
        c.rb = function(q) {
            k = m(q, 1)
        };
        c.ia = function() {
            return f(g)
        };
        c.tb = function(q) {
            g = m(q);
            for (q = 0; q < g[y]; q++)if (q < 4 && !ka(g[q]))g[q] = "-"
        };
        c.Vb = function() {
            return j
        };
        c.qc = function(q) {
            j = q
        };
        c.Kb = function() {
            l = [];
            o = [];
            k = [];
            g = [];
            d = w;
            a = [];
            n = w
        };
        c.N = function() {
            var q = "",b;
            for (b = 0; b < c.K[y]; b++)q += c.K[b][1]();
            return na(q)
        };
        c.pa = function(q) {
            var b = c.k(),e = v;
            if (b) {
                u(b, q, ";");
                c.ua(c.N());
                e = r
            }
            return e
        };
        c.mc = function(q) {
            u(q, "", B);
            c.ua(O(q, ga, B))
        };
        c.uc = function() {
            var q = c.K,b = [],e;
            for (e = 0; e < q[y]; e++)S(b, q[e][0] + q[e][1]());
            S(b, ga + c.N());
            return b.join(B)
        };
        c.Bc = function(q, b) {
            var e = c.K,h = s.h,p;
            c.pa(q);
            s.h = b;
            for (p = 0; p < e[y]; p++)M(e[p][1]()) || e[p][3]();
            s.h = h
        };
        c.Ab = function() {
            c.j.m(D, c.ea(), s.w)
        };
        c.ya = function() {
            c.j.m(F, c.B(), s.pb)
        };
        c.Bb = function() {
            c.j.m(G, c.fa(), 0)
        };
        c.Aa = function() {
            c.j.m(K, c.ia(), s.Ma)
        };
        c.Cb = function() {
            c.j.m(L, c.ha(), s.w)
        };
        c.za = function() {
            c.j.m(H, c.ga(), s.w)
        };
        c.Dc = function() {
            c.j.m(ha, c.Vb(), 0)
        };
        c.K = [
            [D,c.ea,c.qb,c.Ab,"."],
            [F,c.B,c.ta,c.ya,""],
            [G,c.fa,c.rb,c.Bb,""],
            [L,c.ha,c.sb,c.Cb,""],
            [K,c.ia,c.tb,c.Aa,"."],
            [H,c.ga,c.va,c.za,"."]
        ]
    };
    var wa = function(i) {
        var f = this,m = i,u = new ua(m),l = !X.Cc(),o = function() {
        },k = function(g) {
            var d = (new Date).getTime(),a;
            a = (d - g[3]) * (m.xc / 1E3);
            if (a >= 1) {
                g[2] = Math.min(Math.floor(g[2] * 1 + a), m.Hb);
                g[3] = d
            }
            return g
        };
        f.F = function(g, d, a, j, c, n) {
            var s,q = m.G,b = m.a[A];
            u.pa(a);
            s = V(u.B(), ".");
            if (s[1] < 500 || j) {
                if (c)s = k(s);
                if (j || !c || s[2] >= 1) {
                    if (!j && c)s[2] = s[2] * 1 - 1;
                    s[1] = s[1] * 1 + 1;
                    g = "?utmwv=" + da + "&utmn=" + W() + (M(b.hostname) ? "" : "&utmhn=" + P(b.hostname)) + (m.S == 100 ? "" : "&utmsp=" + P(m.S)) + g;
                    if (0 == q || 2 == q) {
                        j = 2 == q ? o : n || o;
                        l && f.Ta(m.ja +
                                g, j)
                    }
                    if (1 == q || 2 == q) {
                        g = ("https:" == b.protocol ? "https://ssl.google-analytics.com/__utm.gif" : "http://www.google-analytics.com/__utm.gif") + g + "&utmac=" + d + "&utmcc=" + f.Rb(a);
                        if (va)g += "&gaq=1";
                        if (X.Va)g += "&aip=1";
                        l && f.Ta(g, n)
                    }
                }
            }
            u.ta(s.join("."));
            u.ya()
        };
        f.Ta = function(g, d) {
            var a = new Image(1, 1);
            a.src = g;
            a.onload = function() {
                a.onload = null;
                (d || o)()
            }
        };
        f.Rb = function(g) {
            var d = [],a = [D,K,H,L],j,c = u.k(),n;
            for (j = 0; j < a[y]; j++) {
                n = O(c, a[j] + g, ";");
                if (!M(n)) {
                    if (a[j] == H) {
                        n = V(n.split(g + ".")[1], "|")[0];
                        if (M(n))continue;
                        n = g + "." +
                                n
                    }
                    S(d, a[j] + n + ";")
                }
            }
            return P(d.join("+"))
        }
    };
    var Y = function() {
        var i = this;
        i.W = [];
        i.db = function(f) {
            var m,u = i.W,l;
            for (l = 0; l < u.length; l++)m = f == u[l].q ? u[l] : m;
            return m
        };
        i.Gb = function(f, m, u, l, o, k, g, d) {
            var a = i.db(f);
            if (w == a) {
                a = new Y.Eb(f, m, u, l, o, k, g, d);
                S(i.W, a)
            } else {
                a.Ja = m;
                a.xb = u;
                a.wb = l;
                a.ub = o;
                a.Qa = k;
                a.vb = g;
                a.Sa = d
            }
            return a
        }
    };
    Y.Db = function(i, f, m, u, l, o) {
        var k = this;
        k.zb = i;
        k.wa = f;
        k.r = m;
        k.Oa = u;
        k.mb = l;
        k.nb = o;
        k.xa = function() {
            return"&" + ["utmt=item","tid=" + P(k.zb),"ipc=" + P(k.wa),"ipn=" + P(k.r),"iva=" + P(k.Oa),"ipr=" + P(k.mb),"iqt=" + P(k.nb)].join("&utm")
        }
    };
    Y.Eb = function(i, f, m, u, l, o, k, g) {
        var d = this;
        d.q = i;
        d.Ja = f;
        d.xb = m;
        d.wb = u;
        d.ub = l;
        d.Qa = o;
        d.vb = k;
        d.Sa = g;
        d.P = [];
        d.Fb = function(a, j, c, n, s) {
            var q = d.Wb(a),b = d.q;
            if (w == q)S(d.P, new Y.Db(b, a, j, c, n, s)); else {
                q.zb = b;
                q.wa = a;
                q.r = j;
                q.Oa = c;
                q.mb = n;
                q.nb = s
            }
        };
        d.Wb = function(a) {
            var j,c = d.P,n;
            for (n = 0; n < c.length; n++)j = a == c[n].wa ? c[n] : j;
            return j
        };
        d.xa = function() {
            return"&" + ["utmt=tran","id=" + P(d.q),"st=" + P(d.Ja),"to=" + P(d.xb),"tx=" + P(d.wb),"sp=" + P(d.ub),"ci=" + P(d.Qa),"rg=" + P(d.vb),"co=" + P(d.Sa)].join("&utmt")
        }
    };
    var xa = function(i) {
        function f() {
            var k,g,d;
            g = "ShockwaveFlash";
            var a = "$version",j = l.d ? l.d.plugins : w;
            if (j && j[y] > 0)for (k = 0; k < j[y] && !d; k++) {
                g = j[k];
                if (R(g.name, "Shockwave Flash"))d = g.description.split("Shockwave Flash ")[1]
            } else {
                g = g + "." + g;
                try {
                    k = new ActiveXObject(g + ".7");
                    d = k.GetVariable(a)
                } catch(c) {
                }
                if (!d)try {
                    k = new ActiveXObject(g + ".6");
                    d = "WIN 6,0,21,0";
                    k.AllowScriptAccess = "always";
                    d = k.GetVariable(a)
                } catch(n) {
                }
                if (!d)try {
                    k = new ActiveXObject(g);
                    d = k.GetVariable(a)
                } catch(s) {
                }
                if (d) {
                    d = V(d.split(" ")[1], ",");
                    d =
                            d[0] + "." + d[1] + " r" + d[2]
                }
            }
            return d ? d : o
        }

        var m = i,u = m.e,l = this,o = "-";
        l.T = u.screen;
        l.La = !l.T && u.java ? java.awt.Toolkit.getDefaultToolkit() : w;
        l.d = u.navigator;
        l.U = o;
        l.sa = o;
        l.Pa = o;
        l.la = o;
        l.ka = 1;
        l.Za = o;
        l.Sb = function() {
            var k;
            if (u.screen) {
                l.U = l.T.width + "x" + l.T.height;
                l.sa = l.T.colorDepth + "-bit"
            } else if (l.La)try {
                k = l.La.getScreenSize();
                l.U = k.width + "x" + k.height
            } catch(g) {
            }
            l.la = U(l.d && l.d.language ? l.d.language : l.d && l.d.browserLanguage ? l.d.browserLanguage : o);
            l.ka = l.d && l.d.javaEnabled() ? 1 : 0;
            l.Za = m.ba ? f() : o;
            l.Pa = P(m.a.characterSet ?
                    m.a.characterSet : m.a.charset ? m.a.charset : o)
        };
        l.vc = function() {
            return B + "utm" + ["cs=" + P(l.Pa),"sr=" + l.U,"sc=" + l.sa,"ul=" + l.la,"je=" + l.ka,"fl=" + P(l.Za)].join("&utm")
        };
        l.Qb = function() {
            var k = m.a,g = u.history[y];
            k = l.d.appName + l.d.version + l.la + l.d.platform + l.d.userAgent + l.ka + l.U + l.sa + (k[z] ? k[z] : "") + (k.referrer ? k.referrer : "");
            for (var d = k[y]; g > 0;)k += g-- ^ d++;
            return na(k)
        }
    };
    var Z = function(i, f, m, u) {
        function l(d) {
            var a = "";
            d = U(d.split("://")[1]);
            if (R(d, "/")) {
                d = d.split("/")[1];
                if (R(d, "?"))a = d.split("?")[0]
            }
            return a
        }

        function o(d) {
            var a = "";
            a = U(d.split("://")[1]);
            if (R(a, "/"))a = a.split("/")[0];
            return a
        }

        var k = u,g = this;
        g.b = i;
        g.ob = f;
        g.s = m;
        g.cb = function(d) {
            var a = g.da();
            return new Z.t(O(d, k.Da + C, B), O(d, k.Ga + C, B), O(d, k.Ia + C, B), g.O(d, k.Ba, "(not set)"), g.O(d, k.Ea, "(not set)"), g.O(d, k.Ha, a && !M(a.I) ? Q(a.I) : w), g.O(d, k.Ca, w))
        };
        g.fb = function(d) {
            var a = o(d),j = l(d);
            if (R(a, "google")) {
                d = d.split("?").join(B);
                if (R(d, B + k.bc + C))if (j == k.ac)return r
            }
            return v
        };
        g.da = function() {
            var d,a = g.ob,j,c,n = k.R;
            if (!(M(a) || "0" == a || !R(a, "://") || g.fb(a))) {
                d = o(a);
                for (j = 0; j < n[y]; j++) {
                    c = n[j];
                    if (R(d, U(c.Wa))) {
                        a = a.split("?").join(B);
                        if (R(a, B + c.jb + C)) {
                            d = a.split(B + c.jb + C)[1];
                            if (R(d, B))d = d.split(B)[0];
                            return new Z.t(w, c.Wa, w, "(organic)", "organic", d, w)
                        }
                    }
                }
            }
        };
        g.O = function(d, a, j) {
            d = O(d, a + C, B);
            return j = !M(d) ? Q(d) : !M(j) ? j : "-"
        };
        g.hc = function(d) {
            var a = k.oa,j = v,c;
            if (d && "organic" == d.Q) {
                d = U(Q(d.I));
                for (c = 0; c < a[y]; c++)j = j || U(a[c]) == d
            }
            return j
        };
        g.bb = function() {
            var d = "",a = "";
            d = g.ob;
            if (!(M(d) || "0" == d || !R(d, "://") || g.fb(d))) {
                d = d.split("://")[1];
                if (R(d, "/")) {
                    a = N(d, d.indexOf("/"));
                    a = a.split("?")[0];
                    d = U(d.split("/")[0])
                }
                if (0 == d.indexOf("www."))d = N(d, 4);
                return new Z.t(w, d, w, "(referral)", "referral", w, a)
            }
        };
        g.$a = function(d) {
            var a = "";
            if (k.Y) {
                a = d && d.hash ? d.href.substring(d.href.indexOf("#")) : "";
                a = "" != a ? a + B : a
            }
            a += d.search;
            return a
        };
        g.Tb = function() {
            return new Z.t(w, "(direct)", w, "(direct)", "(none)", w, w)
        };
        g.ic = function(d) {
            var a = v,j,c = k.qa;
            if (d && "referral" ==
                    d.Q) {
                d = U(P(d.V));
                for (j = 0; j < c[y]; j++)a = a || R(d, U(c[j]))
            }
            return a
        };
        g.l = function(d) {
            return w != d && d.ib()
        };
        g.isNewCampaign = function(d) {
            d = O(d, K + g.b + ".", ";");
            var a = d.split(".");
            d = new Z.t;
            d.lb(a.slice(4).join("."));
            if (!g.l(d))return true;
            a = k.a[A];
            a = g.$a(a);
            a = g.cb(a);
            if (!g.l(a)) {
                a = g.da();
                g.l(a) || (a = g.bb())
            }
            return g.l(a) && U(d.J()) != U(a.J())
        };
        g.getCampaignInformation = function(d, a) {
            if (k.Na) {
                var j = "",c = "-",n,s = 0,q,b,e = g.b;
                if (d) {
                    b = d.k();
                    j = g.$a(k.a[A]);
                    if (k.z && d.gb()) {
                        c = d.ia();
                        if (!M(c) && !R(c, ";")) {
                            d.Aa();
                            return
                        }
                    }
                    c =
                            O(b, K + e + ".", ";");
                    n = g.cb(j);
                    if (g.l(n)) {
                        j = O(j, k.Fa + C, B);
                        if ("1" == j && !M(c))return
                    }
                    if (!g.l(n)) {
                        n = g.da();
                        if (!M(c) && g.hc(n))return
                    }
                    if (!g.l(n) && a) {
                        n = g.bb();
                        if (!M(c) && g.ic(n))return
                    }
                    if (!g.l(n))if (M(c) && a)n = g.Tb();
                    if (g.l(n)) {
                        if (!M(c)) {
                            s = c.split(".");
                            q = new Z.t;
                            q.lb(s.slice(4).join("."));
                            q = U(q.J()) == U(n.J());
                            s = s[3] * 1
                        }
                        if (!q || a) {
                            b = O(b, D + e + ".", ";");
                            q = b.lastIndexOf(".");
                            b = q > 9 ? N(b, q + 1) * 1 : 0;
                            s++;
                            b = 0 == b ? 1 : b;
                            d.tb([e,g.s,b,s,n.J()].join("."));
                            d.Aa()
                        }
                    }
                }
            }
        }
    };
    Z.t = function(i, f, m, u, l, o, k) {
        var g = this;
        g.q = i;
        g.V = f;
        g.Z = m;
        g.r = u;
        g.Q = l;
        g.I = o;
        g.Ra = k;
        g.J = function() {
            var d = [],a = [
                ["cid",g.q],
                ["csr",g.V],
                ["gclid",g.Z],
                ["ccn",g.r],
                ["cmd",g.Q],
                ["ctr",g.I],
                ["cct",g.Ra]
            ],j,c;
            if (g.ib())for (j = 0; j < a[y]; j++)if (!M(a[j][1])) {
                c = a[j][1].split("+").join("%20");
                c = c.split(" ").join("%20");
                S(d, "utm" + a[j][0] + C + c)
            }
            return d.join("|")
        };
        g.ib = function() {
            return!(M(g.q) && M(g.V) && M(g.Z))
        };
        g.lb = function(d) {
            var a = function(j) {
                return Q(O(d, "utm" + j + C, "|"))
            };
            g.q = a("cid");
            g.V = a("csr");
            g.Z = a("gclid");
            g.r = a("ccn");
            g.Q = a("cmd");
            g.I = a("ctr");
            g.Ra = a("cct")
        }
    };
    var ya = function(i, f, m, u) {
        function l(j, c, n) {
            var s;
            if (!M(n)) {
                n = n.split(",");
                for (var q = 0; q < n[y]; q++) {
                    s = n[q];
                    if (!M(s)) {
                        s = s.split(g);
                        if (s[y] == 4)c[s[0]] = [s[1],s[2],j]
                    }
                }
            }
        }

        var o = this,k = f,g = C,d = i,a = u;
        o.L = m;
        o.na = "";
        o.p = {};
        o.gc = function() {
            var j;
            j = V(O(o.L.k(), H + k + ".", ";"), k + ".")[1];
            if (!M(j)) {
                j = j.split("|");
                l(1, o.p, j[1]);
                o.na = j[0];
                o.X()
            }
        };
        o.X = function() {
            o.Ib();
            var j = o.na,c,n,s = "";
            for (c in o.p)if ((n = o.p[c]) && 1 === n[2])s += c + g + n[0] + g + n[1] + g + 1 + ",";
            M(s) || (j += "|" + s);
            if (M(j))o.L.Nb(); else {
                o.L.va(k + "." + j);
                o.L.za()
            }
        };
        o.rc =
                function(j) {
                    o.na = j;
                    o.X()
                };
        o.pc = function(j, c, n, s) {
            if (1 != s && 2 != s && 3 != s)s = 3;
            var q = v;
            if (c && n && j > 0 && j <= d.kb) {
                c = P(c);
                n = P(n);
                if (c[y] + n[y] <= 64) {
                    o.p[j] = [c,n,s];
                    o.X();
                    q = r
                }
            }
            return q
        };
        o.$b = function(j) {
            if ((j = o.p[j]) && 1 === j[2])return j[1]
        };
        o.Mb = function(j) {
            var c = o.p;
            if (c[j]) {
                delete c[j];
                o.X()
            }
        };
        o.Ib = function() {
            a._clearKey(8);
            a._clearKey(9);
            a._clearKey(11);
            var j = o.p,c,n;
            for (n in j)if (c = j[n]) {
                a._setKey(8, n, c[0]);
                a._setKey(9, n, c[1]);
                (c = c[2]) && 3 != c && a._setKey(11, n, "" + c)
            }
        }
    };
    var $ = function() {
        function i(h, p, t, x) {
            if (w == k[h])k[h] = {};
            if (w == k[h][p])k[h][p] = [];
            k[h][p][t] = x
        }

        function f(h, p) {
            if (w != k[h] && w != k[h][p]) {
                k[h][p] = w;
                var t = r,x;
                for (x = 0; x < a[y]; x++)if (w != k[h][a[x]]) {
                    t = v;
                    break
                }
                if (t)k[h] = w
            }
        }

        function m(h) {
            var p = "",t = v,x,E;
            for (x = 0; x < a[y]; x++) {
                E = h[a[x]];
                if (w != E) {
                    if (t)p += a[x];
                    p += u(E);
                    t = v
                } else t = r
            }
            return p
        }

        function u(h) {
            var p = [],t,x;
            for (x = 0; x < h[y]; x++)if (w != h[x]) {
                t = "";
                if (x != e && w == h[x - 1])t += x.toString() + s;
                t += l(h[x]);
                S(p, t)
            }
            return j + p.join(n) + c
        }

        function l(h) {
            var p = "",t,x,E;
            for (t =
                    0; t < h[y]; t++) {
                x = h.charAt(t);
                E = b[x];
                p += w != E ? E : x
            }
            return p
        }

        var o = this,k = {},g = "k",d = "v",a = [g,d],j = "(",c = ")",n = "*",s = "!",q = "'",b = {};
        b[q] = "'0";
        b[c] = "'1";
        b[n] = "'2";
        b[s] = "'3";
        var e = 1;
        o.dc = function(h) {
            return w != k[h]
        };
        o.D = function() {
            var h = "",p;
            for (p in k)if (w != k[p])h += p.toString() + m(k[p]);
            return h
        };
        o.nc = function(h) {
            if (h == w)return o.D();
            var p = h.D(),t;
            for (t in k)if (w != k[t] && !h.dc(t))p += t.toString() + m(k[t]);
            return p
        };
        o._setKey = function(h, p, t) {
            if (typeof t != "string")return v;
            i(h, g, p, t);
            return r
        };
        o._setValue = function(h,
                               p, t) {
            if (typeof t != "number" && (w == Number || !(t instanceof Number)) || Math.round(t) != t || t == NaN || t == Infinity)return v;
            i(h, d, p, t.toString());
            return r
        };
        o._getKey = function(h, p) {
            return w != k[h] && w != k[h][g] ? k[h][g][p] : w
        };
        o._getValue = function(h, p) {
            return w != k[h] && w != k[h][d] ? k[h][d][p] : w
        };
        o._clearKey = function(h) {
            f(h, g)
        };
        o._clearValue = function(h) {
            f(h, d)
        }
    };
    var za = function(i, f) {
        var m = this;
        m.Fc = f;
        m.jc = i;
        m._trackEvent = function(u, l, o) {
            return f._trackEvent(m.jc, u, l, o)
        }
    };
    var Aa = function(i, f, m) {
        function u() {
            if ("auto" == c.c) {
                var b = c.a.domain;
                if ("www." == N(b, 0, 4))b = N(b, 4);
                c.c = b
            }
            c.c = U(c.c)
        }

        function l() {
            u();
            var b = c.c,e = b.indexOf("www.google.") * b.indexOf(".google.") * b.indexOf("google.");
            return e || "/" != c.h || b.indexOf("google.org") > -1
        }

        function o(b, e, h) {
            if (M(b) || M(e) || M(h))return"-";
            b = O(b, D + a.b + ".", e);
            if (!M(b)) {
                b = b.split(".");
                b[5] = b[5] ? b[5] * 1 + 1 : 1;
                b[3] = b[4];
                b[4] = h;
                b = b.join(".")
            }
            return b
        }

        function k() {
            return"file:" != c.a[A].protocol && l()
        }

        function g(b) {
            if (!b || "" == b)return"";
            for (; ia(b.charAt(0));)b =
                    N(b, 1);
            for (; ia(b.charAt(b[y] - 1));)b = N(b, 0, b[y] - 1);
            return b
        }

        function d(b, e, h, p) {
            if (!M(b())) {
                e(p ? Q(b()) : b());
                R(b(), ";") || h()
            }
        }

        var a = this,j = w,c = new sa,n = v,s = w;
        a.e = window;
        a.r = i;
        a.s = Math.round((new Date).getTime() / 1E3);
        a.n = f || "UA-XXXXX-X";
        a.Ua = c.a.referrer;
        a.ca = w;
        a.f = w;
        a.M = w;
        a.C = v;
        a.A = w;
        a.g = w;
        a.Xa = w;
        a.b = w;
        a.i = w;
        c.o = m ? P(m) : w;
        var q = function(b) {
            var e,h = "" != b && c.a[A].host != b;
            if (h)for (e = 0; e < c.u[y]; e++)h = h && la(U(b), U(c.u[e])) == -1;
            return h
        };
        a.lc = function() {
            if (!a.M)return null;
            var b = a.M.match(/^(?:\|([-0-9a-z.]{1,30})(?::(\d{4,5}))?\|)?([-.\w]{10,1200})$/i);
            if (!b)return null;
            return{domain:b[1] || null,port:b[2] || null,token:b[3]}
        };
        a.Xb = function() {
            return W() ^ a.A.Qb() & 2147483647
        };
        a.Ub = function() {
            if (!c.c || "" == c.c || "none" == c.c) {
                c.c = "";
                return 1
            }
            u();
            return c.Ka ? na(c.c) : 1
        };
        a.Pb = function(b, e) {
            if (M(b))b = "-"; else {
                e += c.h && "/" != c.h ? c.h : "";
                var h = b.indexOf(e);
                b = h >= 0 && h <= 8 ? "0" : "[" == b.charAt(0) && "]" == b.charAt(b[y] - 1) ? "-" : b
            }
            return b
        };
        a.ra = function(b) {
            var e = "",h = c.a;
            e += c.$ ? a.A.vc() : "";
            e += c.aa && !M(h.title) ? "&utmdt=" + P(h.title) : "";
            e += "&utmhid=" + oa() + "&utmr=" + P(a.ca) + "&utmp=" +
                    P(a.oc(b));
            return e
        };
        a.oc = function(b) {
            var e = c.a[A];
            return b = w != b && "" != b ? P(b, r) : P(e.pathname + e.search, r)
        };
        a.yc = function(b) {
            if (a.H()) {
                var e = "";
                if (a.g != w && a.g.D()[y] > 0)e += "&utme=" + P(a.g.D());
                e += a.ra(b);
                j.F(e, a.n, a.b)
            }
        };
        a.Lb = function() {
            var b = new ua(c);
            return b.pa(a.b) ? b.uc() : w
        };
        a._getLinkerUrl = function(b, e) {
            var h = b.split("#"),p = b,t = a.Lb();
            if (t)if (e && 1 >= h[y])p += "#" + t; else if (!e || 1 >= h[y])if (1 >= h[y])p += (R(b, "?") ? B : "?") + t; else p = h[0] + (R(b, "?") ? B : "?") + t + "#" + h[1];
            return p
        };
        a.sc = function() {
            var b = a.lc();
            if (b) {
                a.i.qc(a.M);
                a.i.Dc();
                X._gasoDomain = c.c;
                X._gasoCPath = c.h;
                var e = "www.google.com";
                if (b.domain)e = b.domain + ".google.com" + (b.port ? ":" + b.port : "");
                var h = "https://www.google.com/analytics/reporting/overlay_js?gaso=";
                if (b.domain)h = "https://" + e + "/analytics/reporting/overlay_js?gaso=";
                h += b.token + B + W();
                pa(h, "_gasojs")
            }
        };
        a.cc = function() {
            var b = a.s,e = a.i,h = e.k(),p = a.b + "",t = c.e,x = t ? t.gaGlobal : w,E,ja = R(h, D + p + "."),Ba = R(h, F + p),Ca = R(h, G + p),I,J = [],T = "",qa = v;
            h = M(h) ? "" : h;
            if (c.z) {
                E = c.a[A] && c.a[A].hash ? c.a[A].href.substring(c.a[A].href.indexOf("#")) :
                        "";
                if (c.Y && !M(E))T = E + B;
                T += c.a[A].search;
                if (!M(T) && R(T, D)) {
                    e.mc(T);
                    e.gb() || e.Kb();
                    I = e.ea()
                }
                d(e.ha, e.sb, e.Cb, true);
                d(e.ga, e.va, e.za)
            }
            if (M(I))if (ja)if (!Ba || !Ca || 0) {
                I = o(h, ";", b);
                a.C = r
            } else {
                I = O(h, D + p + ".", ";");
                J = V(O(h, F + p, ";"), ".")
            } else {
                I = ma([p,a.Xb(),b,b,b,1], ".");
                qa = a.C = r
            } else if (M(e.B()) || M(e.fa())) {
                I = o(T, B, b);
                a.C = r
            } else {
                J = V(e.B(), ".");
                p = J[0]
            }
            I = I.split(".");
            if (t && x && x.dh == p && !c.o) {
                I[4] = x.sid ? x.sid : I[4];
                if (qa) {
                    I[3] = x.sid ? x.sid : I[4];
                    if (x.vid) {
                        b = x.vid.split(".");
                        I[1] = b[0];
                        I[2] = b[1]
                    }
                }
            }
            e.qb(I.join("."));
            J[0] = p;
            J[1] = J[1] ? J[1] : 0;
            J[2] = w != J[2] ? J[2] : c.wc;
            J[3] = J[3] ? J[3] : I[4];
            e.ta(J.join("."));
            e.rb(p);
            M(e.Zb()) || e.ua(e.N());
            e.Ab();
            e.ya();
            e.Bb()
        };
        a.ec = function() {
            j = new wa(c)
        };
        a._getName = function() {
            return a.r
        };
        a._initData = function() {
            var b;
            if (!n) {
                if (!a.A) {
                    a.A = new xa(c);
                    a.A.Sb()
                }
                a.b = a.Ub();
                a.i = new ua(c);
                a.g = new $;
                s = new ya(c, a.b, a.i, a.g);
                a.ec()
            }
            if (k()) {
                if (!n) {
                    a.ca = a.Pb(a.Ua, c.a.domain);
                    b = new Z(a.b, a.ca, a.s, c)
                }
                a.cc(b);
                s.gc()
            }
            if (!n) {
                k() && b.getCampaignInformation(a.i, a.C);
                a.Xa = new $;
                n = r
            }
            a.fc()
        };
        a._visitCode = function() {
            a._initData();
            var b = O(a.i.k(), D + a.b + ".", ";");
            b = b.split(".");
            return b[y] < 4 ? "" : b[1]
        };
        a._cookiePathCopy = function(b) {
            a._initData();
            a.i && a.i.Bc(a.b, b)
        };
        a.fc = function() {
            if (!X.eb) {
                var b = c.a[A].hash;
                if (b && 1 == b.indexOf("gaso="))b = O(b, "gaso=", B); else b = (b = c.e.name) && 0 <= b.indexOf("gaso=") ? O(b, "gaso=", B) : O(a.i.k(), ha, ";");
                if (b[y] >= 10) {
                    a.M = b;
                    a.sc()
                }
                X.eb = r
            }
        };
        a.H = function() {
            return a._visitCode() % 1E4 < c.S * 100
        };
        a.tc = function() {
            var b,e,h = c.a.links;
            if (!c.hb) {
                b = c.a.domain;
                if ("www." == N(b, 0, 4))b = N(b, 4);
                c.u.push("." + b)
            }
            for (b = 0; b < h[y] &&
                    (c.ma == -1 || b < c.ma); b++) {
                e = h[b];
                if (q(e.host))if (!e.gatcOnclick) {
                    e.gatcOnclick = e.onclick ? e.onclick : a.kc;
                    e.onclick = function(p) {
                        var t = !this.target || this.target == "_self" || this.target == "_top" || this.target == "_parent";
                        t = t && !a.Jb(p);
                        a.zc(p, this, t);
                        return t ? v : this.gatcOnclick ? this.gatcOnclick(p) : r
                    }
                }
            }
        };
        a.kc = function() {
        };
        a._trackPageview = function(b) {
            if (k()) {
                a._initData();
                c.u && a.tc();
                a.yc(b);
                a.C = v
            }
        };
        a._trackTrans = function() {
            var b = a.b,e = [],h,p,t;
            a._initData();
            if (a.f && a.H()) {
                for (h = 0; h < a.f.W[y]; h++) {
                    p = a.f.W[h];
                    S(e,
                            p.xa());
                    for (t = 0; t < p.P[y]; t++)S(e, p.P[t].xa())
                }
                for (h = 0; h < e[y]; h++)j.F(e[h], a.n, b, r)
            }
        };
        a._setTrans = function() {
            var b = c.a,e,h,p;
            b = b.getElementById ? b.getElementById("utmtrans") : b.utmform && b.utmform.utmtrans ? b.utmform.utmtrans : w;
            a._initData();
            if (b && b.value) {
                a.f = new Y;
                p = b.value.split("UTM:");
                c.v = !c.v || "" == c.v ? "|" : c.v;
                for (b = 0; b < p[y]; b++) {
                    p[b] = g(p[b]);
                    e = p[b].split(c.v);
                    for (h = 0; h < e[y]; h++)e[h] = g(e[h]);
                    if ("T" == e[0])a._addTrans(e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]); else"I" == e[0] && a._addItem(e[1], e[2], e[3],
                            e[4], e[5], e[6])
                }
            }
        };
        a._addTrans = function(b, e, h, p, t, x, E, ja) {
            a.f = a.f ? a.f : new Y;
            return a.f.Gb(b, e, h, p, t, x, E, ja)
        };
        a._addItem = function(b, e, h, p, t, x) {
            var E;
            a.f = a.f ? a.f : new Y;
            (E = a.f.db(b)) || (E = a._addTrans(b, "", "", "", "", "", "", ""));
            E.Fb(e, h, p, t, x)
        };
        a._setVar = function(b) {
            if (b && "" != b && l()) {
                a._initData();
                s.rc(P(b));
                a.H() && j.F("&utmt=var", a.n, a.b)
            }
        };
        a._setCustomVar = function(b, e, h, p) {
            a._initData();
            return s.pc(b, e, h, p)
        };
        a._deleteCustomVar = function(b) {
            a._initData();
            s.Mb(b)
        };
        a._getVisitorCustomVar = function(b) {
            a._initData();
            return s.$b(b)
        };
        a._setMaxCustomVariables = function(b) {
            c.kb = b
        };
        a._link = function(b, e) {
            if (c.z && b) {
                a._initData();
                c.a[A].href = a._getLinkerUrl(b, e)
            }
        };
        a._linkByPost = function(b, e) {
            if (c.z && b && b.action) {
                a._initData();
                b.action = a._getLinkerUrl(b.action, e)
            }
        };
        a._setXKey = function(b, e, h) {
            a.g._setKey(b, e, h)
        };
        a._setXValue = function(b, e, h) {
            a.g._setValue(b, e, h)
        };
        a._getXKey = function(b, e) {
            return a.g._getKey(b, e)
        };
        a._getXValue = function(b, e) {
            return a.g.getValue(b, e)
        };
        a._clearXKey = function(b) {
            a.g._clearKey(b)
        };
        a._clearXValue =
                function(b) {
                    a.g._clearValue(b)
                };
        a._createXObj = function() {
            a._initData();
            return new $
        };
        a._sendXEvent = function(b) {
            var e = "";
            a._initData();
            if (a.H()) {
                e += "&utmt=event&utme=" + P(a.g.nc(b)) + a.ra();
                j.F(e, a.n, a.b, v, r)
            }
        };
        a._createEventTracker = function(b) {
            a._initData();
            return new za(b, a)
        };
        a._trackEvent = function(b, e, h, p) {
            a._initData();
            var t = a.Xa;
            if (w != b && w != e && "" != b && "" != e) {
                t._clearKey(5);
                t._clearValue(5);
                (b = t._setKey(5, 1, b) && t._setKey(5, 2, e) && (w == h || t._setKey(5, 3, h)) && (w == p || t._setValue(5, 1, p))) && a._sendXEvent(t)
            } else b =
                    v;
            return b
        };
        a.zc = function(b, e, h) {
            a._initData();
            if (a.H()) {
                var p = new $;
                p._setKey(6, 1, e.href);
                var t = h ? function() {
                    a.Ya(b, e)
                } : w;
                j.F("&utmt=event&utme=" + P(p.D()) + a.ra(), a.n, a.b, v, r, t);
                h && c.e.setTimeout(function() {
                    a.Ya(b, e)
                }, 500)
            }
        };
        a.Ya = function(b, e) {
            if (!b)b = c.e.event;
            var h = r;
            if (e.gatcOnclick)h = e.gatcOnclick(b);
            if (h || typeof h == "undefined")if (!e.target || e.target == "_self")c.e[A] = e.href; else if (e.target == "_top")c.e.top.document[A] = e.href; else if (e.target == "_parent")c.e.parent.document[A] = e.href
        };
        a.Jb = function(b) {
            if (!b)b =
                    c.e.event;
            var e = b.shiftKey || b.ctrlKey || b.altKey;
            if (!e)if (b.modifiers && c.e.Event)e = b.modifiers & c.e.Event.CONTROL_MASK || b.modifiers & c.e.Event.SHIFT_MASK || b.modifiers & c.e.Event.ALT_MASK;
            return e
        };
        a.Ec = function() {
            return c
        };
        a._setDomainName = function(b) {
            c.c = b
        };
        a._addOrganic = function(b, e, h) {
            c.R.splice(h ? 0 : c.R.length, 0, new ra(b, e))
        };
        a._clearOrganic = function() {
            c.R = []
        };
        a._addIgnoredOrganic = function(b) {
            S(c.oa, b)
        };
        a._clearIgnoredOrganic = function() {
            c.oa = []
        };
        a._addIgnoredRef = function(b) {
            S(c.qa, b)
        };
        a._clearIgnoredRef =
                function() {
                    c.qa = []
                };
        a._setAllowHash = function(b) {
            c.Ka = b ? 1 : 0
        };
        a._setCampaignTrack = function(b) {
            c.Na = b ? 1 : 0
        };
        a._setClientInfo = function(b) {
            c.$ = b ? 1 : 0
        };
        a._getClientInfo = function() {
            return c.$
        };
        a._setCookiePath = function(b) {
            c.h = b
        };
        a._setTransactionDelim = function(b) {
            c.v = b
        };
        a._setCookieTimeout = function(b) {
            a._setCampaignCookieTimeout(b * 1E3)
        };
        a._setCampaignCookieTimeout = function(b) {
            c.Ma = b
        };
        a._setDetectFlash = function(b) {
            c.ba = b ? 1 : 0
        };
        a._getDetectFlash = function() {
            return c.ba
        };
        a._setDetectTitle = function(b) {
            c.aa = b ? 1 :
                    0
        };
        a._getDetectTitle = function() {
            return c.aa
        };
        a._setLocalGifPath = function(b) {
            c.ja = b
        };
        a._getLocalGifPath = function() {
            return c.ja
        };
        a._setLocalServerMode = function() {
            c.G = 0
        };
        a._setRemoteServerMode = function() {
            c.G = 1
        };
        a._setLocalRemoteServerMode = function() {
            c.G = 2
        };
        a._getServiceMode = function() {
            return c.G
        };
        a._setSampleRate = function(b) {
            c.S = b
        };
        a._setSessionTimeout = function(b) {
            a._setSessionCookieTimeout(b * 1E3)
        };
        a._setSessionCookieTimeout = function(b) {
            c.pb = b
        };
        a._setAllowLinker = function(b) {
            c.z = b ? 1 : 0
        };
        a._setAllowAnchor =
                function(b) {
                    c.Y = b ? 1 : 0
                };
        a._setCampNameKey = function(b) {
            c.Ba = b
        };
        a._setCampContentKey = function(b) {
            c.Ca = b
        };
        a._setCampIdKey = function(b) {
            c.Da = b
        };
        a._setCampMediumKey = function(b) {
            c.Ea = b
        };
        a._setCampNOKey = function(b) {
            c.Fa = b
        };
        a._setCampSourceKey = function(b) {
            c.Ga = b
        };
        a._setCampTermKey = function(b) {
            c.Ha = b
        };
        a._setCampCIdKey = function(b) {
            c.Ia = b
        };
        a._getAccount = function() {
            return a.n
        };
        a._setAccount = function(b) {
            a.n = b
        };
        a._setNamespace = function(b) {
            c.o = b ? P(b) : w
        };
        a._getVersion = function() {
            return da
        };
        a._setAutoTrackOutbound =
                function(b) {
                    c.u = [];
                    if (b)c.u = b
                };
        a._setTrackOutboundSubdomains = function(b) {
            c.hb = b
        };
        a._setHrefExamineLimit = function(b) {
            c.ma = b
        };
        a._setReferrerOverride = function(b) {
            a.Ua = b
        };
        a._setCookiePersistence = function(b) {
            a._setVisitorCookieTimeout(b)
        };
        a._setVisitorCookieTimeout = function(b) {
            c.w = b
        }
    };
    var Da = function() {
        var i = this;
        i.Va = v;
        i.yb = {};
        i.Ac = 0;
        i.eb = v;
        i._gasoDomain = w;
        i._gasoCPath = w;
        i._getTracker = function(f, m) {
            return i._createTracker(f, w, m)
        };
        i._createTracker = function(f, m, u) {
            if (m == w)m = "~" + X.Ac++;
            return X.yb[m] = new Aa(m, f, u)
        };
        i._getTrackerByName = function(f) {
            f = f || "";
            return X.yb[f] || X._createTracker(undefined, f)
        };
        i.Cc = function() {
            var f = window[ea];
            return f && f[fa] && f[fa]()
        };
        i._anonymizeIp = function() {
            i.Va = r
        }
    };
    var va = v,Fa = function() {
        var i = this;
        i._createAsyncTracker = function(f, m) {
            return X._createTracker(f, m || "")
        };
        i._getAsyncTracker = function(f) {
            return X._getTrackerByName(f)
        };
        i.push = function() {
            var f = arguments,m = 0;
            va = r;
            for (var u = 0; u < f[y]; u++)try {
                if (typeof f[u] === "function")f[u](); else {
                    var l = "",o = f[u][0],k = o.lastIndexOf(".");
                    if (k > 0) {
                        l = N(o, 0, k);
                        o = N(o, k + 1)
                    }
                    var g = l == aa ? X : l == ba ? Ea : X._getTrackerByName(l);
                    g[o].apply(g, f[u].slice(1))
                }
            } catch(d) {
                m++
            }
            return m
        }
    };

    function Ga() {
        var i = window[aa];
        if (i && typeof i._getTracker == "function")X = i; else window[aa] = X
    }

    function Ha() {
        var i = window[ba],f = v;
        if (i && typeof i.push == "function") {
            f = i.constructor == Array;
            if (!f)return
        }
        window[ba] = Ea;
        f && Ea.push.apply(Ea, i)
    }

    var X = new Da;
    Ga();
    var Ea = new Fa;
    Ha();
})()
