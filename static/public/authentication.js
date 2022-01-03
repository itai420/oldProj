/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static/apps/Authentication/AuthenticationModule.js":
/*!************************************************************!*\
  !*** ./static/apps/Authentication/AuthenticationModule.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var AuthenticationModule = angular.module('AuthenticationModule', []);
AuthenticationModule.factory('AuthenticationHttpMethods', ['$http', AuthenticationHttpMethodsFunc]);

function AuthenticationHttpMethodsFunc($http) {
  var httpService = {};

  httpService.isSigned = function (name, password) {
    return $http({
      method: 'POST',
      url: '/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        name: name,
        password: password
      }
    });
  };

  httpService.checkIfNamEmailNew = function (name, password, email) {
    return $http({
      method: 'POST',
      url: '/SignUp',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        name: name,
        password: password,
        email: email
      }
    });
  };

  return httpService;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthenticationModule);

/***/ }),

/***/ "./static/apps/navbar/navbar.js":
/*!**************************************!*\
  !*** ./static/apps/navbar/navbar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navbarModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbarModule */ "./static/apps/navbar/navbarModule.js");
/* harmony import */ var _static_css_navBars_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../static/css/navBars.css */ "./static/css/navBars.css");


var navbar = angular.module('navbar', ['navbarModule']);
navbar.directive('navbar', function () {
  var directive = {};
  directive.restrict = 'E';
  directive.templateUrl = "/directives/navbar.html";
  directive.scope = {};

  directive.controller = function ($scope, $http, navbarHttpMethods) {
    $scope.IsOut = true;
    navbarHttpMethods.IsUserLogged().then(function (res) {
      $scope.IsOut = res.data === "";

      if ($scope.IsOut) {
        $scope.manager = false;
      } else {
        navbarHttpMethods.IsUserManager().then(function (res) {
          $scope.manager = res.data;
        });
      }
    })["catch"](function (err) {
      return console.log("err is" + err);
    });
  };

  return directive;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);

/***/ }),

/***/ "./static/apps/navbar/navbarModule.js":
/*!********************************************!*\
  !*** ./static/apps/navbar/navbarModule.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var navbarModule = angular.module('navbarModule', []);
navbarModule.factory('navbarHttpMethods', ['$http', navbarHttpMethodsFunc]);

function navbarHttpMethodsFunc($http) {
  var httpService = {};

  httpService.IsUserLogged = function () {
    return $http({
      method: 'POST',
      url: '/IsLogged',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "Question": "log"
      }
    });
  };

  httpService.IsUserManager = function () {
    return $http({
      method: 'POST',
      url: '/IsLogged',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "Question": "manager"
      }
    });
  };

  return httpService;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbarModule);

/***/ }),

/***/ "./static/vendors/angular-animate/angular-animate.min.js":
/*!***************************************************************!*\
  !*** ./static/vendors/angular-animate/angular-animate.min.js ***!
  \***************************************************************/
/***/ (() => {

/*
 AngularJS v1.6.4
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (R, y) {
  'use strict';

  function Ea(a, b, c) {
    if (!a) throw Oa("areq", b || "?", c || "required");
    return a;
  }

  function Fa(a, b) {
    if (!a && !b) return "";
    if (!a) return b;
    if (!b) return a;
    W(a) && (a = a.join(" "));
    W(b) && (b = b.join(" "));
    return a + " " + b;
  }

  function Pa(a) {
    var b = {};
    a && (a.to || a.from) && (b.to = a.to, b.from = a.from);
    return b;
  }

  function X(a, b, c) {
    var d = "";
    a = W(a) ? a : a && F(a) && a.length ? a.split(/\s+/) : [];
    s(a, function (a, e) {
      a && 0 < a.length && (d += 0 < e ? " " : "", d += c ? b + a : a + b);
    });
    return d;
  }

  function Ga(a) {
    if (a instanceof E) switch (a.length) {
      case 0:
        return a;

      case 1:
        if (1 === a[0].nodeType) return a;
        break;

      default:
        return E(ua(a));
    }
    if (1 === a.nodeType) return E(a);
  }

  function ua(a) {
    if (!a[0]) return a;

    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if (1 === c.nodeType) return c;
    }
  }

  function Qa(a, b, c) {
    s(b, function (b) {
      a.addClass(b, c);
    });
  }

  function Ra(a, b, c) {
    s(b, function (b) {
      a.removeClass(b, c);
    });
  }

  function Y(a) {
    return function (b, c) {
      c.addClass && (Qa(a, b, c.addClass), c.addClass = null);
      c.removeClass && (Ra(a, b, c.removeClass), c.removeClass = null);
    };
  }

  function na(a) {
    a = a || {};

    if (!a.$$prepared) {
      var b = a.domOperation || P;

      a.domOperation = function () {
        a.$$domOperationFired = !0;
        b();
        b = P;
      };

      a.$$prepared = !0;
    }

    return a;
  }

  function ha(a, b) {
    Ha(a, b);
    Ia(a, b);
  }

  function Ha(a, b) {
    b.from && (a.css(b.from), b.from = null);
  }

  function Ia(a, b) {
    b.to && (a.css(b.to), b.to = null);
  }

  function U(a, b, c) {
    var d = b.options || {};
    c = c.options || {};
    var f = (d.addClass || "") + " " + (c.addClass || ""),
        e = (d.removeClass || "") + " " + (c.removeClass || "");
    a = Sa(a.attr("class"), f, e);
    c.preparationClasses && (d.preparationClasses = Z(c.preparationClasses, d.preparationClasses), delete c.preparationClasses);
    f = d.domOperation !== P ? d.domOperation : null;
    va(d, c);
    f && (d.domOperation = f);
    d.addClass = a.addClass ? a.addClass : null;
    d.removeClass = a.removeClass ? a.removeClass : null;
    b.addClass = d.addClass;
    b.removeClass = d.removeClass;
    return d;
  }

  function Sa(a, b, c) {
    function d(a) {
      F(a) && (a = a.split(" "));
      var b = {};
      s(a, function (a) {
        a.length && (b[a] = !0);
      });
      return b;
    }

    var f = {};
    a = d(a);
    b = d(b);
    s(b, function (a, b) {
      f[b] = 1;
    });
    c = d(c);
    s(c, function (a, b) {
      f[b] = 1 === f[b] ? null : -1;
    });
    var e = {
      addClass: "",
      removeClass: ""
    };
    s(f, function (b, c) {
      var d, f;
      1 === b ? (d = "addClass", f = !a[c] || a[c + "-remove"]) : -1 === b && (d = "removeClass", f = a[c] || a[c + "-add"]);
      f && (e[d].length && (e[d] += " "), e[d] += c);
    });
    return e;
  }

  function Q(a) {
    return a instanceof E ? a[0] : a;
  }

  function Ta(a, b, c) {
    var d = "";
    b && (d = X(b, "ng-", !0));
    c.addClass && (d = Z(d, X(c.addClass, "-add")));
    c.removeClass && (d = Z(d, X(c.removeClass, "-remove")));
    d.length && (c.preparationClasses = d, a.addClass(d));
  }

  function oa(a, b) {
    var c = b ? "-" + b + "s" : "";
    ka(a, [la, c]);
    return [la, c];
  }

  function wa(a, b) {
    var c = b ? "paused" : "",
        d = $ + "PlayState";
    ka(a, [d, c]);
    return [d, c];
  }

  function ka(a, b) {
    a.style[b[0]] = b[1];
  }

  function Z(a, b) {
    return a ? b ? a + " " + b : a : b;
  }

  function Ja(a, b, c) {
    var d = Object.create(null),
        f = a.getComputedStyle(b) || {};
    s(c, function (a, b) {
      var c = f[a];

      if (c) {
        var G = c.charAt(0);
        if ("-" === G || "+" === G || 0 <= G) c = Ua(c);
        0 === c && (c = null);
        d[b] = c;
      }
    });
    return d;
  }

  function Ua(a) {
    var b = 0;
    a = a.split(/\s*,\s*/);
    s(a, function (a) {
      "s" === a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
      a = parseFloat(a) || 0;
      b = b ? Math.max(a, b) : a;
    });
    return b;
  }

  function xa(a) {
    return 0 === a || null != a;
  }

  function Ka(a, b) {
    var c = S,
        d = a + "s";
    b ? c += "Duration" : d += " linear all";
    return [c, d];
  }

  function La() {
    var a = Object.create(null);
    return {
      flush: function () {
        a = Object.create(null);
      },
      count: function (b) {
        return (b = a[b]) ? b.total : 0;
      },
      get: function (b) {
        return (b = a[b]) && b.value;
      },
      put: function (b, c) {
        a[b] ? a[b].total++ : a[b] = {
          total: 1,
          value: c
        };
      }
    };
  }

  function Ma(a, b, c) {
    s(c, function (c) {
      a[c] = ya(a[c]) ? a[c] : b.style.getPropertyValue(c);
    });
  }

  var S, za, $, Aa;
  void 0 === R.ontransitionend && void 0 !== R.onwebkittransitionend ? (S = "WebkitTransition", za = "webkitTransitionEnd transitionend") : (S = "transition", za = "transitionend");
  void 0 === R.onanimationend && void 0 !== R.onwebkitanimationend ? ($ = "WebkitAnimation", Aa = "webkitAnimationEnd animationend") : ($ = "animation", Aa = "animationend");
  var pa = $ + "Delay",
      Ba = $ + "Duration",
      la = S + "Delay",
      Na = S + "Duration",
      Oa = y.$$minErr("ng"),
      Va = {
    transitionDuration: Na,
    transitionDelay: la,
    transitionProperty: S + "Property",
    animationDuration: Ba,
    animationDelay: pa,
    animationIterationCount: $ + "IterationCount"
  },
      Wa = {
    transitionDuration: Na,
    transitionDelay: la,
    animationDuration: Ba,
    animationDelay: pa
  },
      Ca,
      va,
      s,
      W,
      ya,
      da,
      Da,
      aa,
      F,
      N,
      E,
      P;
  y.module("ngAnimate", [], function () {
    P = y.noop;
    Ca = y.copy;
    va = y.extend;
    E = y.element;
    s = y.forEach;
    W = y.isArray;
    F = y.isString;
    aa = y.isObject;
    N = y.isUndefined;
    ya = y.isDefined;
    Da = y.isFunction;
    da = y.isElement;
  }).info({
    angularVersion: "1.6.4"
  }).directive("ngAnimateSwap", ["$animate", "$rootScope", function (a, b) {
    return {
      restrict: "A",
      transclude: "element",
      terminal: !0,
      priority: 600,
      link: function (b, d, f, e, p) {
        var K, G;
        b.$watchCollection(f.ngAnimateSwap || f["for"], function (f) {
          K && a.leave(K);
          G && (G.$destroy(), G = null);
          if (f || 0 === f) G = b.$new(), p(G, function (b) {
            K = b;
            a.enter(b, null, d);
          });
        });
      }
    };
  }]).directive("ngAnimateChildren", ["$interpolate", function (a) {
    return {
      link: function (b, c, d) {
        function f(a) {
          c.data("$$ngAnimateChildren", "on" === a || "true" === a);
        }

        var e = d.ngAnimateChildren;
        F(e) && 0 === e.length ? c.data("$$ngAnimateChildren", !0) : (f(a(e)(b)), d.$observe("ngAnimateChildren", f));
      }
    };
  }]).factory("$$rAFScheduler", ["$$rAF", function (a) {
    function b(a) {
      d = d.concat(a);
      c();
    }

    function c() {
      if (d.length) {
        for (var b = d.shift(), p = 0; p < b.length; p++) b[p]();

        f || a(function () {
          f || c();
        });
      }
    }

    var d, f;
    d = b.queue = [];

    b.waitUntilQuiet = function (b) {
      f && f();
      f = a(function () {
        f = null;
        b();
        c();
      });
    };

    return b;
  }]).provider("$$animateQueue", ["$animateProvider", function (a) {
    function b(a) {
      if (!a) return null;
      a = a.split(" ");
      var b = Object.create(null);
      s(a, function (a) {
        b[a] = !0;
      });
      return b;
    }

    function c(a, c) {
      if (a && c) {
        var d = b(c);
        return a.split(" ").some(function (a) {
          return d[a];
        });
      }
    }

    function d(a, b, c) {
      return e[a].some(function (a) {
        return a(b, c);
      });
    }

    function f(a, b) {
      var c = 0 < (a.addClass || "").length,
          d = 0 < (a.removeClass || "").length;
      return b ? c && d : c || d;
    }

    var e = this.rules = {
      skip: [],
      cancel: [],
      join: []
    };
    e.join.push(function (a, b) {
      return !a.structural && f(a);
    });
    e.skip.push(function (a, b) {
      return !a.structural && !f(a);
    });
    e.skip.push(function (a, b) {
      return "leave" === b.event && a.structural;
    });
    e.skip.push(function (a, b) {
      return b.structural && 2 === b.state && !a.structural;
    });
    e.cancel.push(function (a, b) {
      return b.structural && a.structural;
    });
    e.cancel.push(function (a, b) {
      return 2 === b.state && a.structural;
    });
    e.cancel.push(function (a, b) {
      if (b.structural) return !1;
      var d = a.addClass,
          f = a.removeClass,
          e = b.addClass,
          qa = b.removeClass;
      return N(d) && N(f) || N(e) && N(qa) ? !1 : c(d, qa) || c(f, e);
    });
    this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$Map", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", "$$isDocumentHidden", function (b, c, e, n, z, qa, J, u, H, k, O) {
      function L() {
        var a = !1;
        return function (b) {
          a ? b() : c.$$postDigest(function () {
            a = !0;
            b();
          });
        };
      }

      function A(a, b, c) {
        var g = [],
            d = h[c];
        d && s(d, function (d) {
          w.call(d.node, b) ? g.push(d.callback) : "leave" === c && w.call(d.node, a) && g.push(d.callback);
        });
        return g;
      }

      function B(a, b, c) {
        var g = ua(b);
        return a.filter(function (a) {
          return !(a.node === g && (!c || a.callback === c));
        });
      }

      function q(a, h, v) {
        function q(a, c, g, d) {
          G(function () {
            var a = A(ta, k, c);
            a.length ? b(function () {
              s(a, function (a) {
                a(e, g, d);
              });
              "close" !== g || k.parentNode || ra.off(k);
            }) : "close" !== g || k.parentNode || ra.off(k);
          });
          a.progress(c, g, d);
        }

        function B(a) {
          var b = e,
              c = m;
          c.preparationClasses && (b.removeClass(c.preparationClasses), c.preparationClasses = null);
          c.activeClasses && (b.removeClass(c.activeClasses), c.activeClasses = null);
          D(e, m);
          ha(e, m);
          m.domOperation();
          t.complete(!a);
        }

        var m = Ca(v),
            e = Ga(a),
            k = Q(e),
            ta = k && k.parentNode,
            m = na(m),
            t = new J(),
            G = L();
        W(m.addClass) && (m.addClass = m.addClass.join(" "));
        m.addClass && !F(m.addClass) && (m.addClass = null);
        W(m.removeClass) && (m.removeClass = m.removeClass.join(" "));
        m.removeClass && !F(m.removeClass) && (m.removeClass = null);
        m.from && !aa(m.from) && (m.from = null);
        m.to && !aa(m.to) && (m.to = null);
        if (!k) return B(), t;
        v = [k.getAttribute("class"), m.addClass, m.removeClass].join(" ");
        if (!Xa(v)) return B(), t;
        var n = 0 <= ["enter", "move", "leave"].indexOf(h),
            w = O(),
            u = !g || w || ga.get(k);
        v = !u && x.get(k) || {};
        var H = !!v.state;
        u || H && 1 === v.state || (u = !M(k, ta, h));
        if (u) return w && q(t, h, "start"), B(), w && q(t, h, "close"), t;
        n && sa(k);
        w = {
          structural: n,
          element: e,
          event: h,
          addClass: m.addClass,
          removeClass: m.removeClass,
          close: B,
          options: m,
          runner: t
        };

        if (H) {
          if (d("skip", w, v)) {
            if (2 === v.state) return B(), t;
            U(e, v, w);
            return v.runner;
          }

          if (d("cancel", w, v)) {
            if (2 === v.state) v.runner.end();else if (v.structural) v.close();else return U(e, v, w), v.runner;
          } else if (d("join", w, v)) if (2 === v.state) U(e, w, {});else return Ta(e, n ? h : null, m), h = w.event = v.event, m = U(e, v, w), v.runner;
        } else U(e, w, {});

        (H = w.structural) || (H = "animate" === w.event && 0 < Object.keys(w.options.to || {}).length || f(w));
        if (!H) return B(), l(k), t;
        var z = (v.counter || 0) + 1;
        w.counter = z;
        I(k, 1, w);
        c.$$postDigest(function () {
          e = Ga(a);
          var b = x.get(k),
              c = !b,
              b = b || {},
              g = 0 < (e.parent() || []).length && ("animate" === b.event || b.structural || f(b));

          if (c || b.counter !== z || !g) {
            c && (D(e, m), ha(e, m));
            if (c || n && b.event !== h) m.domOperation(), t.end();
            g || l(k);
          } else h = !b.structural && f(b, !0) ? "setClass" : b.event, I(k, 2), b = qa(e, h, b.options), t.setHost(b), q(t, h, "start", {}), b.done(function (a) {
            B(!a);
            (a = x.get(k)) && a.counter === z && l(k);
            q(t, h, "close", {});
          });
        });
        return t;
      }

      function sa(a) {
        a = a.querySelectorAll("[data-ng-animate]");
        s(a, function (a) {
          var b = parseInt(a.getAttribute("data-ng-animate"), 10),
              c = x.get(a);
          if (c) switch (b) {
            case 2:
              c.runner.end();

            case 1:
              x.delete(a);
          }
        });
      }

      function l(a) {
        a.removeAttribute("data-ng-animate");
        x.delete(a);
      }

      function M(a, b, c) {
        c = n[0].body;
        var g = Q(e),
            d = a === c || "HTML" === a.nodeName,
            h = a === g,
            f = !1,
            k = ga.get(a),
            A;

        for ((a = E.data(a, "$ngAnimatePin")) && (b = Q(a)); b;) {
          h || (h = b === g);
          if (1 !== b.nodeType) break;
          a = x.get(b) || {};

          if (!f) {
            var q = ga.get(b);

            if (!0 === q && !1 !== k) {
              k = !0;
              break;
            } else !1 === q && (k = !1);

            f = a.structural;
          }

          if (N(A) || !0 === A) a = E.data(b, "$$ngAnimateChildren"), ya(a) && (A = a);
          if (f && !1 === A) break;
          d || (d = b === c);
          if (d && h) break;

          if (!h && (a = E.data(b, "$ngAnimatePin"))) {
            b = Q(a);
            continue;
          }

          b = b.parentNode;
        }

        return (!f || A) && !0 !== k && h && d;
      }

      function I(a, b, c) {
        c = c || {};
        c.state = b;
        a.setAttribute("data-ng-animate", b);
        c = (b = x.get(a)) ? va(b, c) : c;
        x.set(a, c);
      }

      var x = new z(),
          ga = new z(),
          g = null,
          ta = c.$watch(function () {
        return 0 === u.totalPendingRequests;
      }, function (a) {
        a && (ta(), c.$$postDigest(function () {
          c.$$postDigest(function () {
            null === g && (g = !0);
          });
        }));
      }),
          h = Object.create(null),
          t = a.classNameFilter(),
          Xa = t ? function (a) {
        return t.test(a);
      } : function () {
        return !0;
      },
          D = Y(H),
          w = R.Node.prototype.contains || function (a) {
        return this === a || !!(this.compareDocumentPosition(a) & 16);
      },
          ra = {
        on: function (a, b, c) {
          var g = ua(b);
          h[a] = h[a] || [];
          h[a].push({
            node: g,
            callback: c
          });
          E(b).on("$destroy", function () {
            x.get(g) || ra.off(a, b, c);
          });
        },
        off: function (a, b, c) {
          if (1 !== arguments.length || F(arguments[0])) {
            var g = h[a];
            g && (h[a] = 1 === arguments.length ? null : B(g, b, c));
          } else for (g in b = arguments[0], h) h[g] = B(h[g], b);
        },
        pin: function (a, b) {
          Ea(da(a), "element", "not an element");
          Ea(da(b), "parentElement", "not an element");
          a.data("$ngAnimatePin", b);
        },
        push: function (a, b, c, g) {
          c = c || {};
          c.domOperation = g;
          return q(a, b, c);
        },
        enabled: function (a, b) {
          var c = arguments.length;
          if (0 === c) b = !!g;else if (da(a)) {
            var d = Q(a);
            1 === c ? b = !ga.get(d) : ga.set(d, !b);
          } else b = g = !!a;
          return b;
        }
      };

      return ra;
    }];
  }]).provider("$$animation", ["$animateProvider", function (a) {
    var b = this.drivers = [];
    this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$Map", "$$rAFScheduler", function (a, d, f, e, p, K) {
      function G(a) {
        function b(a) {
          if (a.processed) return a;
          a.processed = !0;
          var d = a.domNode,
              e = d.parentNode;
          f.set(d, a);

          for (var q; e;) {
            if (q = f.get(e)) {
              q.processed || (q = b(q));
              break;
            }

            e = e.parentNode;
          }

          (q || c).children.push(a);
          return a;
        }

        var c = {
          children: []
        },
            d,
            f = new p();

        for (d = 0; d < a.length; d++) {
          var e = a[d];
          f.set(e.domNode, a[d] = {
            domNode: e.domNode,
            fn: e.fn,
            children: []
          });
        }

        for (d = 0; d < a.length; d++) b(a[d]);

        return function (a) {
          var b = [],
              c = [],
              d;

          for (d = 0; d < a.children.length; d++) c.push(a.children[d]);

          a = c.length;
          var f = 0,
              e = [];

          for (d = 0; d < c.length; d++) {
            var k = c[d];
            0 >= a && (a = f, f = 0, b.push(e), e = []);
            e.push(k.fn);
            k.children.forEach(function (a) {
              f++;
              c.push(a);
            });
            a--;
          }

          e.length && b.push(e);
          return b;
        }(c);
      }

      var n = [],
          z = Y(a);
      return function (p, J, u) {
        function H(a) {
          a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");
          var b = [];
          s(a, function (a) {
            var c = a.getAttribute("ng-animate-ref");
            c && c.length && b.push(a);
          });
          return b;
        }

        function k(a) {
          var b = [],
              c = {};
          s(a, function (a, d) {
            var h = Q(a.element),
                f = 0 <= ["enter", "move"].indexOf(a.event),
                h = a.structural ? H(h) : [];

            if (h.length) {
              var e = f ? "to" : "from";
              s(h, function (a) {
                var b = a.getAttribute("ng-animate-ref");
                c[b] = c[b] || {};
                c[b][e] = {
                  animationID: d,
                  element: E(a)
                };
              });
            } else b.push(a);
          });
          var d = {},
              f = {};
          s(c, function (c, e) {
            var k = c.from,
                A = c.to;

            if (k && A) {
              var q = a[k.animationID],
                  x = a[A.animationID],
                  l = k.animationID.toString();

              if (!f[l]) {
                var B = f[l] = {
                  structural: !0,
                  beforeStart: function () {
                    q.beforeStart();
                    x.beforeStart();
                  },
                  close: function () {
                    q.close();
                    x.close();
                  },
                  classes: O(q.classes, x.classes),
                  from: q,
                  to: x,
                  anchors: []
                };
                B.classes.length ? b.push(B) : (b.push(q), b.push(x));
              }

              f[l].anchors.push({
                out: k.element,
                "in": A.element
              });
            } else k = k ? k.animationID : A.animationID, A = k.toString(), d[A] || (d[A] = !0, b.push(a[k]));
          });
          return b;
        }

        function O(a, b) {
          a = a.split(" ");
          b = b.split(" ");

          for (var c = [], d = 0; d < a.length; d++) {
            var f = a[d];
            if ("ng-" !== f.substring(0, 3)) for (var e = 0; e < b.length; e++) if (f === b[e]) {
              c.push(f);
              break;
            }
          }

          return c.join(" ");
        }

        function L(a) {
          for (var c = b.length - 1; 0 <= c; c--) {
            var d = f.get(b[c])(a);
            if (d) return d;
          }
        }

        function A(a, b) {
          function c(a) {
            (a = a.data("$$animationRunner")) && a.setHost(b);
          }

          a.from && a.to ? (c(a.from.element), c(a.to.element)) : c(a.element);
        }

        function B() {
          var a = p.data("$$animationRunner");
          !a || "leave" === J && u.$$domOperationFired || a.end();
        }

        function q(b) {
          p.off("$destroy", B);
          p.removeData("$$animationRunner");
          z(p, u);
          ha(p, u);
          u.domOperation();
          I && a.removeClass(p, I);
          p.removeClass("ng-animate");
          l.complete(!b);
        }

        u = na(u);
        var sa = 0 <= ["enter", "move", "leave"].indexOf(J),
            l = new e({
          end: function () {
            q();
          },
          cancel: function () {
            q(!0);
          }
        });
        if (!b.length) return q(), l;
        p.data("$$animationRunner", l);
        var M = Fa(p.attr("class"), Fa(u.addClass, u.removeClass)),
            I = u.tempClasses;
        I && (M += " " + I, u.tempClasses = null);
        var x;
        sa && (x = "ng-" + J + "-prepare", a.addClass(p, x));
        n.push({
          element: p,
          classes: M,
          event: J,
          structural: sa,
          options: u,
          beforeStart: function () {
            p.addClass("ng-animate");
            I && a.addClass(p, I);
            x && (a.removeClass(p, x), x = null);
          },
          close: q
        });
        p.on("$destroy", B);
        if (1 < n.length) return l;
        d.$$postDigest(function () {
          var a = [];
          s(n, function (b) {
            b.element.data("$$animationRunner") ? a.push(b) : b.close();
          });
          n.length = 0;
          var b = k(a),
              c = [];
          s(b, function (a) {
            c.push({
              domNode: Q(a.from ? a.from.element : a.element),
              fn: function () {
                a.beforeStart();
                var b,
                    c = a.close;

                if ((a.anchors ? a.from.element || a.to.element : a.element).data("$$animationRunner")) {
                  var d = L(a);
                  d && (b = d.start);
                }

                b ? (b = b(), b.done(function (a) {
                  c(!a);
                }), A(a, b)) : c();
              }
            });
          });
          K(G(c));
        });
        return l;
      };
    }];
  }]).provider("$animateCss", ["$animateProvider", function (a) {
    var b = La(),
        c = La();
    this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (a, f, e, p, K, G, n, z) {
      function y(a, b) {
        var c = a.parentNode;
        return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++O)) + "-" + a.getAttribute("class") + "-" + b;
      }

      function J(e, k, q, p) {
        var l;
        0 < b.count(q) && (l = c.get(q), l || (k = X(k, "-stagger"), f.addClass(e, k), l = Ja(a, e, p), l.animationDuration = Math.max(l.animationDuration, 0), l.transitionDuration = Math.max(l.transitionDuration, 0), f.removeClass(e, k), c.put(q, l)));
        return l || {};
      }

      function u(a) {
        L.push(a);
        n.waitUntilQuiet(function () {
          b.flush();
          c.flush();

          for (var a = K(), d = 0; d < L.length; d++) L[d](a);

          L.length = 0;
        });
      }

      function H(c, f, e) {
        f = b.get(e);
        f || (f = Ja(a, c, Va), "infinite" === f.animationIterationCount && (f.animationIterationCount = 1));
        b.put(e, f);
        c = f;
        e = c.animationDelay;
        f = c.transitionDelay;
        c.maxDelay = e && f ? Math.max(e, f) : e || f;
        c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration);
        return c;
      }

      var k = Y(f),
          O = 0,
          L = [];
      return function (a, c) {
        function d() {
          l();
        }

        function n() {
          l(!0);
        }

        function l(b) {
          if (!(w || E && O)) {
            w = !0;
            O = !1;
            g.$$skipPreparationClasses || f.removeClass(a, fa);
            f.removeClass(a, da);
            wa(h, !1);
            oa(h, !1);
            s(t, function (a) {
              h.style[a[0]] = "";
            });
            k(a, g);
            ha(a, g);
            Object.keys(L).length && s(L, function (a, b) {
              a ? h.style.setProperty(b, a) : h.style.removeProperty(b);
            });
            if (g.onDone) g.onDone();
            ea && ea.length && a.off(ea.join(" "), x);
            var c = a.data("$$animateCss");
            c && (p.cancel(c[0].timer), a.removeData("$$animateCss"));
            F && F.complete(!b);
          }
        }

        function M(a) {
          r.blockTransition && oa(h, a);
          r.blockKeyframeAnimation && wa(h, !!a);
        }

        function I() {
          F = new e({
            end: d,
            cancel: n
          });
          u(P);
          l();
          return {
            $$willAnimate: !1,
            start: function () {
              return F;
            },
            end: d
          };
        }

        function x(a) {
          a.stopPropagation();
          var b = a.originalEvent || a;
          a = b.$manualTimeStamp || Date.now();
          b = parseFloat(b.elapsedTime.toFixed(3));
          Math.max(a - Y, 0) >= R && b >= m && (E = !0, l());
        }

        function ga() {
          function b() {
            if (!w) {
              M(!1);
              s(t, function (a) {
                h.style[a[0]] = a[1];
              });
              k(a, g);
              f.addClass(a, da);

              if (r.recalculateTimingStyles) {
                ma = h.getAttribute("class") + " " + fa;
                ja = y(h, ma);
                C = H(h, ma, ja);
                ba = C.maxDelay;
                N = Math.max(ba, 0);
                m = C.maxDuration;

                if (0 === m) {
                  l();
                  return;
                }

                r.hasTransitions = 0 < C.transitionDuration;
                r.hasAnimations = 0 < C.animationDuration;
              }

              r.applyAnimationDelay && (ba = "boolean" !== typeof g.delay && xa(g.delay) ? parseFloat(g.delay) : ba, N = Math.max(ba, 0), C.animationDelay = ba, ca = [pa, ba + "s"], t.push(ca), h.style[ca[0]] = ca[1]);
              R = 1E3 * N;
              U = 1E3 * m;

              if (g.easing) {
                var d,
                    e = g.easing;
                r.hasTransitions && (d = S + "TimingFunction", t.push([d, e]), h.style[d] = e);
                r.hasAnimations && (d = $ + "TimingFunction", t.push([d, e]), h.style[d] = e);
              }

              C.transitionDuration && ea.push(za);
              C.animationDuration && ea.push(Aa);
              Y = Date.now();
              var n = R + 1.5 * U;
              d = Y + n;
              var e = a.data("$$animateCss") || [],
                  q = !0;

              if (e.length) {
                var I = e[0];
                (q = d > I.expectedEndTime) ? p.cancel(I.timer) : e.push(l);
              }

              q && (n = p(c, n, !1), e[0] = {
                timer: n,
                expectedEndTime: d
              }, e.push(l), a.data("$$animateCss", e));
              if (ea.length) a.on(ea.join(" "), x);
              g.to && (g.cleanupStyles && Ma(L, h, Object.keys(g.to)), Ia(a, g));
            }
          }

          function c() {
            var b = a.data("$$animateCss");

            if (b) {
              for (var d = 1; d < b.length; d++) b[d]();

              a.removeData("$$animateCss");
            }
          }

          if (!w) if (h.parentNode) {
            var d = function (a) {
              if (E) O && a && (O = !1, l());else if (O = !a, C.animationDuration) if (a = wa(h, O), O) t.push(a);else {
                var b = t,
                    c = b.indexOf(a);
                0 <= a && b.splice(c, 1);
              }
            },
                e = 0 < aa && (C.transitionDuration && 0 === V.transitionDuration || C.animationDuration && 0 === V.animationDuration) && Math.max(V.animationDelay, V.transitionDelay);

            e ? p(b, Math.floor(e * aa * 1E3), !1) : b();

            v.resume = function () {
              d(!0);
            };

            v.pause = function () {
              d(!1);
            };
          } else l();
        }

        var g = c || {};
        g.$$prepared || (g = na(Ca(g)));
        var L = {},
            h = Q(a);
        if (!h || !h.parentNode || !z.enabled()) return I();
        var t = [],
            K = a.attr("class"),
            D = Pa(g),
            w,
            O,
            E,
            F,
            v,
            N,
            R,
            m,
            U,
            Y,
            ea = [];
        if (0 === g.duration || !G.animations && !G.transitions) return I();
        var ia = g.event && W(g.event) ? g.event.join(" ") : g.event,
            Z = "",
            T = "";
        ia && g.structural ? Z = X(ia, "ng-", !0) : ia && (Z = ia);
        g.addClass && (T += X(g.addClass, "-add"));
        g.removeClass && (T.length && (T += " "), T += X(g.removeClass, "-remove"));
        g.applyClassesEarly && T.length && k(a, g);
        var fa = [Z, T].join(" ").trim(),
            ma = K + " " + fa,
            da = X(fa, "-active"),
            K = D.to && 0 < Object.keys(D.to).length;
        if (!(0 < (g.keyframeStyle || "").length || K || fa)) return I();
        var ja, V;
        0 < g.stagger ? (D = parseFloat(g.stagger), V = {
          transitionDelay: D,
          animationDelay: D,
          transitionDuration: 0,
          animationDuration: 0
        }) : (ja = y(h, ma), V = J(h, fa, ja, Wa));
        g.$$skipPreparationClasses || f.addClass(a, fa);
        g.transitionStyle && (D = [S, g.transitionStyle], ka(h, D), t.push(D));
        0 <= g.duration && (D = 0 < h.style[S].length, D = Ka(g.duration, D), ka(h, D), t.push(D));
        g.keyframeStyle && (D = [$, g.keyframeStyle], ka(h, D), t.push(D));
        var aa = V ? 0 <= g.staggerIndex ? g.staggerIndex : b.count(ja) : 0;
        (ia = 0 === aa) && !g.skipBlocking && oa(h, 9999);
        var C = H(h, ma, ja),
            ba = C.maxDelay;
        N = Math.max(ba, 0);
        m = C.maxDuration;
        var r = {};
        r.hasTransitions = 0 < C.transitionDuration;
        r.hasAnimations = 0 < C.animationDuration;
        r.hasTransitionAll = r.hasTransitions && "all" === C.transitionProperty;
        r.applyTransitionDuration = K && (r.hasTransitions && !r.hasTransitionAll || r.hasAnimations && !r.hasTransitions);
        r.applyAnimationDuration = g.duration && r.hasAnimations;
        r.applyTransitionDelay = xa(g.delay) && (r.applyTransitionDuration || r.hasTransitions);
        r.applyAnimationDelay = xa(g.delay) && r.hasAnimations;
        r.recalculateTimingStyles = 0 < T.length;
        if (r.applyTransitionDuration || r.applyAnimationDuration) m = g.duration ? parseFloat(g.duration) : m, r.applyTransitionDuration && (r.hasTransitions = !0, C.transitionDuration = m, D = 0 < h.style[S + "Property"].length, t.push(Ka(m, D))), r.applyAnimationDuration && (r.hasAnimations = !0, C.animationDuration = m, t.push([Ba, m + "s"]));
        if (0 === m && !r.recalculateTimingStyles) return I();

        if (null != g.delay) {
          var ca;
          "boolean" !== typeof g.delay && (ca = parseFloat(g.delay), N = Math.max(ca, 0));
          r.applyTransitionDelay && t.push([la, ca + "s"]);
          r.applyAnimationDelay && t.push([pa, ca + "s"]);
        }

        null == g.duration && 0 < C.transitionDuration && (r.recalculateTimingStyles = r.recalculateTimingStyles || ia);
        R = 1E3 * N;
        U = 1E3 * m;
        g.skipBlocking || (r.blockTransition = 0 < C.transitionDuration, r.blockKeyframeAnimation = 0 < C.animationDuration && 0 < V.animationDelay && 0 === V.animationDuration);
        g.from && (g.cleanupStyles && Ma(L, h, Object.keys(g.from)), Ha(a, g));
        r.blockTransition || r.blockKeyframeAnimation ? M(m) : g.skipBlocking || oa(h, !1);
        return {
          $$willAnimate: !0,
          end: d,
          start: function () {
            if (!w) return v = {
              end: d,
              cancel: n,
              resume: null,
              pause: null
            }, F = new e(v), u(ga), F;
          }
        };
      };
    }];
  }]).provider("$$animateCssDriver", ["$$animationProvider", function (a) {
    a.drivers.push("$$animateCssDriver");
    this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (a, c, d, f, e, p, K) {
      function G(a) {
        return a.replace(/\bng-\S+\b/g, "");
      }

      function n(a, b) {
        F(a) && (a = a.split(" "));
        F(b) && (b = b.split(" "));
        return a.filter(function (a) {
          return -1 === b.indexOf(a);
        }).join(" ");
      }

      function z(c, e, f) {
        function p(a) {
          var b = {},
              c = Q(a).getBoundingClientRect();
          s(["width", "height", "top", "left"], function (a) {
            var d = c[a];

            switch (a) {
              case "top":
                d += u.scrollTop;
                break;

              case "left":
                d += u.scrollLeft;
            }

            b[a] = Math.floor(d) + "px";
          });
          return b;
        }

        function K() {
          var c = G(f.attr("class") || ""),
              d = n(c, l),
              c = n(l, c),
              d = a(z, {
            to: p(f),
            addClass: "ng-anchor-in " + d,
            removeClass: "ng-anchor-out " + c,
            delay: !0
          });
          return d.$$willAnimate ? d : null;
        }

        function q() {
          z.remove();
          e.removeClass("ng-animate-shim");
          f.removeClass("ng-animate-shim");
        }

        var z = E(Q(e).cloneNode(!0)),
            l = G(z.attr("class") || "");
        e.addClass("ng-animate-shim");
        f.addClass("ng-animate-shim");
        z.addClass("ng-anchor");
        H.append(z);
        var M;

        c = function () {
          var c = a(z, {
            addClass: "ng-anchor-out",
            delay: !0,
            from: p(e)
          });
          return c.$$willAnimate ? c : null;
        }();

        if (!c && (M = K(), !M)) return q();
        var I = c || M;
        return {
          start: function () {
            function a() {
              c && c.end();
            }

            var b,
                c = I.start();
            c.done(function () {
              c = null;
              if (!M && (M = K())) return c = M.start(), c.done(function () {
                c = null;
                q();
                b.complete();
              }), c;
              q();
              b.complete();
            });
            return b = new d({
              end: a,
              cancel: a
            });
          }
        };
      }

      function y(a, b, c, e) {
        var f = J(a, P),
            p = J(b, P),
            n = [];
        s(e, function (a) {
          (a = z(c, a.out, a["in"])) && n.push(a);
        });
        if (f || p || 0 !== n.length) return {
          start: function () {
            function a() {
              s(b, function (a) {
                a.end();
              });
            }

            var b = [];
            f && b.push(f.start());
            p && b.push(p.start());
            s(n, function (a) {
              b.push(a.start());
            });
            var c = new d({
              end: a,
              cancel: a
            });
            d.all(b, function (a) {
              c.complete(a);
            });
            return c;
          }
        };
      }

      function J(c) {
        var d = c.element,
            e = c.options || {};
        c.structural && (e.event = c.event, e.structural = !0, e.applyClassesEarly = !0, "leave" === c.event && (e.onDone = e.domOperation));
        e.preparationClasses && (e.event = Z(e.event, e.preparationClasses));
        c = a(d, e);
        return c.$$willAnimate ? c : null;
      }

      if (!e.animations && !e.transitions) return P;
      var u = K[0].body;
      c = Q(f);
      var H = E(c.parentNode && 11 === c.parentNode.nodeType || u.contains(c) ? c : u);
      return function (a) {
        return a.from && a.to ? y(a.from, a.to, a.classes, a.anchors) : J(a);
      };
    }];
  }]).provider("$$animateJs", ["$animateProvider", function (a) {
    this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (b, c, d) {
      function f(c) {
        c = W(c) ? c : c.split(" ");

        for (var d = [], e = {}, f = 0; f < c.length; f++) {
          var s = c[f],
              y = a.$$registeredAnimations[s];
          y && !e[s] && (d.push(b.get(y)), e[s] = !0);
        }

        return d;
      }

      var e = Y(d);
      return function (a, b, d, n) {
        function z() {
          n.domOperation();
          e(a, n);
        }

        function y(a, b, d, e, f) {
          switch (d) {
            case "animate":
              b = [b, e.from, e.to, f];
              break;

            case "setClass":
              b = [b, k, F, f];
              break;

            case "addClass":
              b = [b, k, f];
              break;

            case "removeClass":
              b = [b, F, f];
              break;

            default:
              b = [b, f];
          }

          b.push(e);
          if (a = a.apply(a, b)) if (Da(a.start) && (a = a.start()), a instanceof c) a.done(f);else if (Da(a)) return a;
          return P;
        }

        function J(a, b, d, e, f) {
          var k = [];
          s(e, function (e) {
            var l = e[f];
            l && k.push(function () {
              var e,
                  f,
                  g = !1,
                  h = function (a) {
                g || (g = !0, (f || P)(a), e.complete(!a));
              };

              e = new c({
                end: function () {
                  h();
                },
                cancel: function () {
                  h(!0);
                }
              });
              f = y(l, a, b, d, function (a) {
                h(!1 === a);
              });
              return e;
            });
          });
          return k;
        }

        function u(a, b, d, e, f) {
          var k = J(a, b, d, e, f);

          if (0 === k.length) {
            var h, l;
            "beforeSetClass" === f ? (h = J(a, "removeClass", d, e, "beforeRemoveClass"), l = J(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = J(a, "removeClass", d, e, "removeClass"), l = J(a, "addClass", d, e, "addClass"));
            h && (k = k.concat(h));
            l && (k = k.concat(l));
          }

          if (0 !== k.length) return function (a) {
            var b = [];
            k.length && s(k, function (a) {
              b.push(a());
            });
            b.length ? c.all(b, a) : a();
            return function (a) {
              s(b, function (b) {
                a ? b.cancel() : b.end();
              });
            };
          };
        }

        var H = !1;
        3 === arguments.length && aa(d) && (n = d, d = null);
        n = na(n);
        d || (d = a.attr("class") || "", n.addClass && (d += " " + n.addClass), n.removeClass && (d += " " + n.removeClass));
        var k = n.addClass,
            F = n.removeClass,
            L = f(d),
            A,
            B;

        if (L.length) {
          var q, E;
          "leave" === b ? (E = "leave", q = "afterLeave") : (E = "before" + b.charAt(0).toUpperCase() + b.substr(1), q = b);
          "enter" !== b && "move" !== b && (A = u(a, b, n, L, E));
          B = u(a, b, n, L, q);
        }

        if (A || B) {
          var l;
          return {
            $$willAnimate: !0,
            end: function () {
              l ? l.end() : (H = !0, z(), ha(a, n), l = new c(), l.complete(!0));
              return l;
            },
            start: function () {
              function b(c) {
                H = !0;
                z();
                ha(a, n);
                l.complete(c);
              }

              if (l) return l;
              l = new c();
              var d,
                  e = [];
              A && e.push(function (a) {
                d = A(a);
              });
              e.length ? e.push(function (a) {
                z();
                a(!0);
              }) : z();
              B && e.push(function (a) {
                d = B(a);
              });
              l.setHost({
                end: function () {
                  H || ((d || P)(void 0), b(void 0));
                },
                cancel: function () {
                  H || ((d || P)(!0), b(!0));
                }
              });
              c.chain(e, b);
              return l;
            }
          };
        }
      };
    }];
  }]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
    a.drivers.push("$$animateJsDriver");
    this.$get = ["$$animateJs", "$$AnimateRunner", function (a, c) {
      function d(c) {
        return a(c.element, c.event, c.classes, c.options);
      }

      return function (a) {
        if (a.from && a.to) {
          var b = d(a.from),
              p = d(a.to);
          if (b || p) return {
            start: function () {
              function a() {
                return function () {
                  s(d, function (a) {
                    a.end();
                  });
                };
              }

              var d = [];
              b && d.push(b.start());
              p && d.push(p.start());
              c.all(d, function (a) {
                f.complete(a);
              });
              var f = new c({
                end: a(),
                cancel: a()
              });
              return f;
            }
          };
        } else return d(a);
      };
    }];
  }]);
})(window, window.angular);

/***/ }),

/***/ "./static/vendors/angular-aria/angular-aria.min.js":
/*!*********************************************************!*\
  !*** ./static/vendors/angular-aria/angular-aria.min.js ***!
  \*********************************************************/
/***/ (() => {

/*
 AngularJS v1.6.4
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (s, p) {
  'use strict';

  var c = "BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),
      h = function (a, b) {
    if (-1 !== b.indexOf(a[0].nodeName)) return !0;
  };

  p.module("ngAria", ["ng"]).info({
    angularVersion: "1.6.4"
  }).provider("$aria", function () {
    function a(a, c, n, k) {
      return function (d, f, e) {
        var g = e.$normalize(c);
        !b[g] || h(f, n) || e[g] || d.$watch(e[a], function (a) {
          a = k ? !a : !!a;
          f.attr(c, a);
        });
      };
    }

    var b = {
      ariaHidden: !0,
      ariaChecked: !0,
      ariaReadonly: !0,
      ariaDisabled: !0,
      ariaRequired: !0,
      ariaInvalid: !0,
      ariaValue: !0,
      tabindex: !0,
      bindKeydown: !0,
      bindRoleForClick: !0
    };

    this.config = function (a) {
      b = p.extend(b, a);
    };

    this.$get = function () {
      return {
        config: function (a) {
          return b[a];
        },
        $$watchExpr: a
      };
    };
  }).directive("ngShow", ["$aria", function (a) {
    return a.$$watchExpr("ngShow", "aria-hidden", [], !0);
  }]).directive("ngHide", ["$aria", function (a) {
    return a.$$watchExpr("ngHide", "aria-hidden", [], !1);
  }]).directive("ngValue", ["$aria", function (a) {
    return a.$$watchExpr("ngValue", "aria-checked", c, !1);
  }]).directive("ngChecked", ["$aria", function (a) {
    return a.$$watchExpr("ngChecked", "aria-checked", c, !1);
  }]).directive("ngReadonly", ["$aria", function (a) {
    return a.$$watchExpr("ngReadonly", "aria-readonly", c, !1);
  }]).directive("ngRequired", ["$aria", function (a) {
    return a.$$watchExpr("ngRequired", "aria-required", c, !1);
  }]).directive("ngModel", ["$aria", function (a) {
    function b(b, k, d, f) {
      return a.config(k) && !d.attr(b) && (f || !h(d, c));
    }

    function l(a, b) {
      return !b.attr("role") && b.attr("type") === a && !h(b, c);
    }

    function m(a, b) {
      var d = a.type,
          f = a.role;
      return "checkbox" === (d || f) || "menuitemcheckbox" === f ? "checkbox" : "radio" === (d || f) || "menuitemradio" === f ? "radio" : "range" === d || "progressbar" === f || "slider" === f ? "range" : "";
    }

    return {
      restrict: "A",
      require: "ngModel",
      priority: 200,
      compile: function (c, k) {
        var d = m(k, c);
        return {
          post: function (f, e, g, c) {
            function k() {
              return c.$modelValue;
            }

            function h(a) {
              e.attr("aria-checked", g.value == c.$viewValue);
            }

            function m() {
              e.attr("aria-checked", !c.$isEmpty(c.$viewValue));
            }

            var n = b("tabindex", "tabindex", e, !1);

            switch (d) {
              case "radio":
              case "checkbox":
                l(d, e) && e.attr("role", d);
                b("aria-checked", "ariaChecked", e, !1) && f.$watch(k, "radio" === d ? h : m);
                n && e.attr("tabindex", 0);
                break;

              case "range":
                l(d, e) && e.attr("role", "slider");

                if (a.config("ariaValue")) {
                  var p = !e.attr("aria-valuemin") && (g.hasOwnProperty("min") || g.hasOwnProperty("ngMin")),
                      q = !e.attr("aria-valuemax") && (g.hasOwnProperty("max") || g.hasOwnProperty("ngMax")),
                      r = !e.attr("aria-valuenow");
                  p && g.$observe("min", function (a) {
                    e.attr("aria-valuemin", a);
                  });
                  q && g.$observe("max", function (a) {
                    e.attr("aria-valuemax", a);
                  });
                  r && f.$watch(k, function (a) {
                    e.attr("aria-valuenow", a);
                  });
                }

                n && e.attr("tabindex", 0);
            }

            !g.hasOwnProperty("ngRequired") && c.$validators.required && b("aria-required", "ariaRequired", e, !1) && g.$observe("required", function () {
              e.attr("aria-required", !!g.required);
            });
            b("aria-invalid", "ariaInvalid", e, !0) && f.$watch(function () {
              return c.$invalid;
            }, function (a) {
              e.attr("aria-invalid", !!a);
            });
          }
        };
      }
    };
  }]).directive("ngDisabled", ["$aria", function (a) {
    return a.$$watchExpr("ngDisabled", "aria-disabled", c, !1);
  }]).directive("ngMessages", function () {
    return {
      restrict: "A",
      require: "?ngMessages",
      link: function (a, b, c, h) {
        b.attr("aria-live") || b.attr("aria-live", "assertive");
      }
    };
  }).directive("ngClick", ["$aria", "$parse", function (a, b) {
    return {
      restrict: "A",
      compile: function (l, m) {
        var n = b(m.ngClick);
        return function (b, d, f) {
          if (!h(d, c) && (a.config("bindRoleForClick") && !d.attr("role") && d.attr("role", "button"), a.config("tabindex") && !d.attr("tabindex") && d.attr("tabindex", 0), a.config("bindKeydown") && !f.ngKeydown && !f.ngKeypress && !f.ngKeyup)) d.on("keydown", function (a) {
            function c() {
              n(b, {
                $event: a
              });
            }

            var d = a.which || a.keyCode;
            32 !== d && 13 !== d || b.$apply(c);
          });
        };
      }
    };
  }]).directive("ngDblclick", ["$aria", function (a) {
    return function (b, l, m) {
      !a.config("tabindex") || l.attr("tabindex") || h(l, c) || l.attr("tabindex", 0);
    };
  }]);
})(window, window.angular);

/***/ }),

/***/ "./static/vendors/angular-material/angular-material.min.js":
/*!*****************************************************************!*\
  !*** ./static/vendors/angular-material/angular-material.min.js ***!
  \*****************************************************************/
/***/ (() => {

/*!
 * AngularJS Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.4
 */
!function (e, t, n) {
  "use strict";

  !function () {
    t.module("ngMaterial", ["ng", "ngAnimate", "ngAria", "material.core", "material.core.interaction", "material.core.gestures", "material.core.layout", "material.core.meta", "material.core.theming.palette", "material.core.theming", "material.core.animate", "material.components.autocomplete", "material.components.backdrop", "material.components.bottomSheet", "material.components.button", "material.components.card", "material.components.checkbox", "material.components.chips", "material.components.colors", "material.components.content", "material.components.datepicker", "material.components.dialog", "material.components.divider", "material.components.fabActions", "material.components.fabShared", "material.components.fabSpeedDial", "material.components.fabToolbar", "material.components.gridList", "material.components.icon", "material.components.input", "material.components.list", "material.components.menu", "material.components.menuBar", "material.components.navBar", "material.components.progressCircular", "material.components.panel", "material.components.progressLinear", "material.components.radioButton", "material.components.showHide", "material.components.sidenav", "material.components.select", "material.components.slider", "material.components.sticky", "material.components.subheader", "material.components.switch", "material.components.swipe", "material.components.tabs", "material.components.toast", "material.components.toolbar", "material.components.tooltip", "material.components.truncate", "material.components.virtualRepeat", "material.components.whiteframe"]);
  }(), function () {
    function e(e, t) {
      if (t.has("$swipe")) {
        var n = "You are using the ngTouch module. \nAngularJS Material already has mobile click, tap, and swipe support... \nngTouch is not supported with AngularJS Material!";
        e.warn(n);
      }
    }

    function n(e, t) {
      e.decorator("$$rAF", ["$delegate", o]), e.decorator("$q", ["$delegate", i]), t.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("deep-orange").backgroundPalette("grey");
    }

    function o(e) {
      return e.throttle = function (t) {
        var n, o, i, r;
        return function () {
          n = arguments, r = this, i = t, o || (o = !0, e(function () {
            i.apply(r, Array.prototype.slice.call(n)), o = !1;
          }));
        };
      }, e;
    }

    function i(e) {
      return e.resolve || (e.resolve = e.when), e;
    }

    e.$inject = ["$log", "$injector"], n.$inject = ["$provide", "$mdThemingProvider"], o.$inject = ["$delegate"], i.$inject = ["$delegate"], t.module("material.core", ["ngAnimate", "material.core.animate", "material.core.layout", "material.core.interaction", "material.core.gestures", "material.core.theming"]).config(n).run(e);
  }(), function () {
    function e(e) {
      function n(n, o, i) {
        function r(e) {
          t.isUndefined(e) && (e = !0), o.toggleClass("md-autofocus", !!e);
        }

        var a = i.mdAutoFocus || i.mdAutofocus || i.mdSidenavFocus;
        r(e(a)(n)), a && n.$watch(a, r);
      }

      return {
        restrict: "A",
        link: {
          pre: n
        }
      };
    }

    e.$inject = ["$parse"], t.module("material.core").directive("mdAutofocus", e).directive("mdAutoFocus", e).directive("mdSidenavFocus", e);
  }(), function () {
    function e() {
      function e(e) {
        var t = "#" === e[0] ? e.substr(1) : e,
            n = t.length / 3,
            o = t.substr(0, n),
            i = t.substr(n, n),
            r = t.substr(2 * n);
        return 1 === n && (o += o, i += i, r += r), "rgba(" + parseInt(o, 16) + "," + parseInt(i, 16) + "," + parseInt(r, 16) + ",0.1)";
      }

      function t(e) {
        e = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        var t = e && 4 === e.length ? "#" + ("0" + parseInt(e[1], 10).toString(16)).slice(-2) + ("0" + parseInt(e[2], 10).toString(16)).slice(-2) + ("0" + parseInt(e[3], 10).toString(16)).slice(-2) : "";
        return t.toUpperCase();
      }

      function n(e) {
        return e.replace(")", ", 0.1)").replace("(", "a(");
      }

      function o(e) {
        return e ? e.replace("rgba", "rgb").replace(/,[^\),]+\)/, ")") : "rgb(0,0,0)";
      }

      return {
        rgbaToHex: t,
        hexToRgba: e,
        rgbToRgba: n,
        rgbaToRgb: o
      };
    }

    t.module("material.core").factory("$mdColorUtil", e);
  }(), function () {
    function e() {
      function e(e) {
        var t = a + "-" + e,
            i = o(t),
            d = i.charAt(0).toLowerCase() + i.substring(1);
        return n(r, e) ? e : n(r, i) ? i : n(r, d) ? d : e;
      }

      function n(e, n) {
        return t.isDefined(e.style[n]);
      }

      function o(e) {
        return e.replace(s, function (e, t, n, o) {
          return o ? n.toUpperCase() : n;
        });
      }

      function i(e) {
        var t,
            n,
            o = /^(Moz|webkit|ms)(?=[A-Z])/;

        for (t in e.style) if (n = o.exec(t)) return n[0];
      }

      var r = document.createElement("div"),
          a = i(r),
          d = /webkit/i.test(a),
          s = /([:\-_]+(.))/g,
          c = {
        isInputKey: function (e) {
          return e.keyCode >= 31 && e.keyCode <= 90;
        },
        isNumPadKey: function (e) {
          return 3 === e.location && e.keyCode >= 97 && e.keyCode <= 105;
        },
        isMetaKey: function (e) {
          return e.keyCode >= 91 && e.keyCode <= 93;
        },
        isFnLockKey: function (e) {
          return e.keyCode >= 112 && e.keyCode <= 145;
        },
        isNavigationKey: function (e) {
          var t = c.KEY_CODE,
              n = [t.SPACE, t.ENTER, t.UP_ARROW, t.DOWN_ARROW];
          return n.indexOf(e.keyCode) != -1;
        },
        hasModifierKey: function (e) {
          return e.ctrlKey || e.metaKey || e.altKey;
        },
        ELEMENT_MAX_PIXELS: 1533917,
        BEFORE_NG_ARIA: 210,
        KEY_CODE: {
          COMMA: 188,
          SEMICOLON: 186,
          ENTER: 13,
          ESCAPE: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT_ARROW: 37,
          UP_ARROW: 38,
          RIGHT_ARROW: 39,
          DOWN_ARROW: 40,
          TAB: 9,
          BACKSPACE: 8,
          DELETE: 46
        },
        CSS: {
          TRANSITIONEND: "transitionend" + (d ? " webkitTransitionEnd" : ""),
          ANIMATIONEND: "animationend" + (d ? " webkitAnimationEnd" : ""),
          TRANSFORM: e("transform"),
          TRANSFORM_ORIGIN: e("transformOrigin"),
          TRANSITION: e("transition"),
          TRANSITION_DURATION: e("transitionDuration"),
          ANIMATION_PLAY_STATE: e("animationPlayState"),
          ANIMATION_DURATION: e("animationDuration"),
          ANIMATION_NAME: e("animationName"),
          ANIMATION_TIMING: e("animationTimingFunction"),
          ANIMATION_DIRECTION: e("animationDirection")
        },
        MEDIA: {
          xs: "(max-width: 599px)",
          "gt-xs": "(min-width: 600px)",
          sm: "(min-width: 600px) and (max-width: 959px)",
          "gt-sm": "(min-width: 960px)",
          md: "(min-width: 960px) and (max-width: 1279px)",
          "gt-md": "(min-width: 1280px)",
          lg: "(min-width: 1280px) and (max-width: 1919px)",
          "gt-lg": "(min-width: 1920px)",
          xl: "(min-width: 1920px)",
          landscape: "(orientation: landscape)",
          portrait: "(orientation: portrait)",
          print: "print"
        },
        MEDIA_PRIORITY: ["xl", "gt-lg", "lg", "gt-md", "md", "gt-sm", "sm", "gt-xs", "xs", "landscape", "portrait", "print"]
      };
      return c;
    }

    t.module("material.core").factory("$mdConstant", e);
  }(), function () {
    function e(e, n) {
      function o() {
        return [].concat(v);
      }

      function i() {
        return v.length;
      }

      function r(e) {
        return v.length && e > -1 && e < v.length;
      }

      function a(e) {
        return !!e && r(u(e) + 1);
      }

      function d(e) {
        return !!e && r(u(e) - 1);
      }

      function s(e) {
        return r(e) ? v[e] : null;
      }

      function c(e, t) {
        return v.filter(function (n) {
          return n[e] === t;
        });
      }

      function l(e, n) {
        return e ? (t.isNumber(n) || (n = v.length), v.splice(n, 0, e), u(e)) : -1;
      }

      function m(e) {
        p(e) && v.splice(u(e), 1);
      }

      function u(e) {
        return v.indexOf(e);
      }

      function p(e) {
        return e && u(e) > -1;
      }

      function h() {
        return v.length ? v[0] : null;
      }

      function f() {
        return v.length ? v[v.length - 1] : null;
      }

      function g(e, o, i, a) {
        i = i || b;

        for (var d = u(o);;) {
          if (!r(d)) return null;
          var s = d + (e ? -1 : 1),
              c = null;
          if (r(s) ? c = v[s] : n && (c = e ? f() : h(), s = u(c)), null === c || s === a) return null;
          if (i(c)) return c;
          t.isUndefined(a) && (a = s), d = s;
        }
      }

      var b = function () {
        return !0;
      };

      e && !t.isArray(e) && (e = Array.prototype.slice.call(e)), n = !!n;
      var v = e || [];
      return {
        items: o,
        count: i,
        inRange: r,
        contains: p,
        indexOf: u,
        itemAt: s,
        findBy: c,
        add: l,
        remove: m,
        first: h,
        last: f,
        next: t.bind(null, g, !1),
        previous: t.bind(null, g, !0),
        hasPrevious: d,
        hasNext: a
      };
    }

    t.module("material.core").config(["$provide", function (t) {
      t.decorator("$mdUtil", ["$delegate", function (t) {
        return t.iterator = e, t;
      }]);
    }]);
  }(), function () {
    function e(e, n, o) {
      function i(e) {
        var n = u[e];
        t.isUndefined(n) && (n = u[e] = r(e));
        var o = h[n];
        return t.isUndefined(o) && (o = a(n)), o;
      }

      function r(t) {
        return e.MEDIA[t] || ("(" !== t.charAt(0) ? "(" + t + ")" : t);
      }

      function a(e) {
        var t = p[e];
        return t || (t = p[e] = o.matchMedia(e)), t.addListener(d), h[t.media] = !!t.matches;
      }

      function d(e) {
        n.$evalAsync(function () {
          h[e.media] = !!e.matches;
        });
      }

      function s(e) {
        return p[e];
      }

      function c(t, n) {
        for (var o = 0; o < e.MEDIA_PRIORITY.length; o++) {
          var i = e.MEDIA_PRIORITY[o];

          if (p[u[i]].matches) {
            var r = m(t, n + "-" + i);
            if (t[r]) return t[r];
          }
        }

        return t[m(t, n)];
      }

      function l(n, o, i) {
        var r = [];
        return n.forEach(function (n) {
          var a = m(o, n);
          t.isDefined(o[a]) && r.push(o.$observe(a, t.bind(void 0, i, null)));

          for (var d in e.MEDIA) a = m(o, n + "-" + d), t.isDefined(o[a]) && r.push(o.$observe(a, t.bind(void 0, i, d)));
        }), function () {
          r.forEach(function (e) {
            e();
          });
        };
      }

      function m(e, t) {
        return f[t] || (f[t] = e.$normalize(t));
      }

      var u = {},
          p = {},
          h = {},
          f = {};
      return i.getResponsiveAttribute = c, i.getQuery = s, i.watchResponsiveAttributes = l, i;
    }

    e.$inject = ["$mdConstant", "$rootScope", "$window"], t.module("material.core").factory("$mdMedia", e);
  }(), function () {
    function e(e, n) {
      function o(e) {
        return e = t.isArray(e) ? e : [e], e.forEach(function (t) {
          s.forEach(function (n) {
            e.push(n + "-" + t);
          });
        }), e;
      }

      function i(e) {
        return e = t.isArray(e) ? e : [e], o(e).map(function (e) {
          return "[" + e + "]";
        }).join(",");
      }

      function r(e, t) {
        if (e = d(e), !e) return !1;

        for (var n = o(t), i = 0; i < n.length; i++) if (e.hasAttribute(n[i])) return !0;

        return !1;
      }

      function a(e, t) {
        e = d(e), e && o(t).forEach(function (t) {
          e.removeAttribute(t);
        });
      }

      function d(e) {
        if (e = e[0] || e, e.nodeType) return e;
      }

      var s = ["data", "x"];
      return e ? n ? i(e) : o(e) : {
        buildList: o,
        buildSelector: i,
        hasAttribute: r,
        removeAttribute: a
      };
    }

    t.module("material.core").config(["$provide", function (t) {
      t.decorator("$mdUtil", ["$delegate", function (t) {
        return t.prefixer = e, t;
      }]);
    }]);
  }(), function () {
    function o(o, r, a, d, s, c, l, m, u, p) {
      function h(e) {
        return e ? f(e) || g(e) ? e : e + "px" : "0";
      }

      function f(e) {
        return String(e).indexOf("px") > -1;
      }

      function g(e) {
        return String(e).indexOf("%") > -1;
      }

      function b(e) {
        return e[0] || e;
      }

      var v = c.startSymbol(),
          E = c.endSymbol(),
          $ = "{{" === v && "}}" === E,
          C = function (e, n, o) {
        var i = !1;

        if (e && e.length) {
          var r = u.getComputedStyle(e[0]);
          i = t.isDefined(r[n]) && (!o || r[n] == o);
        }

        return i;
      },
          y = {
        dom: {},
        now: e.performance && e.performance.now ? t.bind(e.performance, e.performance.now) : Date.now || function () {
          return new Date().getTime();
        },
        getModelOption: function (e, t) {
          if (e.$options) {
            var n = e.$options;
            return n.getOption ? n.getOption(t) : n[t];
          }
        },
        bidi: function (e, n, i, r) {
          var a = !("rtl" == o[0].dir || "rtl" == o[0].body.dir);
          if (0 == arguments.length) return a ? "ltr" : "rtl";
          var d = t.element(e);
          a && t.isDefined(i) ? d.css(n, h(i)) : !a && t.isDefined(r) && d.css(n, h(r));
        },
        bidiProperty: function (e, n, i, r) {
          var a = !("rtl" == o[0].dir || "rtl" == o[0].body.dir),
              d = t.element(e);
          a && t.isDefined(n) ? (d.css(n, h(r)), d.css(i, "")) : !a && t.isDefined(i) && (d.css(i, h(r)), d.css(n, ""));
        },
        clientRect: function (e, t, n) {
          var o = b(e);
          t = b(t || o.offsetParent || document.body);
          var i = o.getBoundingClientRect(),
              r = n ? t.getBoundingClientRect() : {
            left: 0,
            top: 0,
            width: 0,
            height: 0
          };
          return {
            left: i.left - r.left,
            top: i.top - r.top,
            width: i.width,
            height: i.height
          };
        },
        offsetRect: function (e, t) {
          return y.clientRect(e, t, !0);
        },
        nodesToArray: function (e) {
          e = e || [];

          for (var t = [], n = 0; n < e.length; ++n) t.push(e.item(n));

          return t;
        },
        getViewportTop: function () {
          return e.scrollY || e.pageYOffset || 0;
        },
        findFocusTarget: function (e, n) {
          function o(e, n) {
            var o,
                i = e[0].querySelectorAll(n);
            return i && i.length && i.length && t.forEach(i, function (e) {
              e = t.element(e);
              var n = e.hasClass("md-autofocus");
              n && (o = e);
            }), o;
          }

          var i,
              r = this.prefixer("md-autofocus", !0);
          return i = o(e, n || r), i || n == r || (i = o(e, this.prefixer("md-auto-focus", !0)), i || (i = o(e, r))), i;
        },
        disableScrollAround: function (e, n, i) {
          function r(e) {
            function n(e) {
              e.preventDefault();
            }

            e = t.element(e || d);
            var o;
            return i.disableScrollMask ? o = e : (o = t.element('<div class="md-scroll-mask">  <div class="md-scroll-mask-bar"></div></div>'), e.append(o)), o.on("wheel", n), o.on("touchmove", n), function () {
              o.off("wheel"), o.off("touchmove"), i.disableScrollMask || o[0].parentNode.removeChild(o[0]);
            };
          }

          function a() {
            var e = o[0].documentElement,
                n = e.style.cssText || "",
                i = d.style.cssText || "",
                r = y.getViewportTop(),
                a = d.clientWidth,
                s = d.scrollHeight > d.clientHeight + 1;
            return s && t.element(d).css({
              position: "fixed",
              width: "100%",
              top: -r + "px"
            }), d.clientWidth < a && (d.style.overflow = "hidden"), s && (e.style.overflowY = "scroll"), function () {
              d.style.cssText = i, e.style.cssText = n, d.scrollTop = r;
            };
          }

          if (i = i || {}, y.disableScrollAround._count = Math.max(0, y.disableScrollAround._count || 0), y.disableScrollAround._count++, y.disableScrollAround._restoreScroll) return y.disableScrollAround._restoreScroll;
          var d = o[0].body,
              s = a(),
              c = r(n);
          return y.disableScrollAround._restoreScroll = function () {
            --y.disableScrollAround._count <= 0 && (s(), c(), delete y.disableScrollAround._restoreScroll);
          };
        },
        enableScrolling: function () {
          var e = this.disableScrollAround._restoreScroll;
          e && e();
        },
        floatingScrollbars: function () {
          if (this.floatingScrollbars.cached === n) {
            var e = t.element("<div><div></div></div>").css({
              width: "100%",
              "z-index": -1,
              position: "absolute",
              height: "35px",
              "overflow-y": "scroll"
            });
            e.children().css("height", "60px"), o[0].body.appendChild(e[0]), this.floatingScrollbars.cached = e[0].offsetWidth == e[0].childNodes[0].offsetWidth, e.remove();
          }

          return this.floatingScrollbars.cached;
        },
        forceFocus: function (t) {
          var n = t[0] || t;
          document.addEventListener("click", function i(e) {
            e.target === n && e.$focus && (n.focus(), e.stopImmediatePropagation(), e.preventDefault(), n.removeEventListener("click", i));
          }, !0);
          var o = document.createEvent("MouseEvents");
          o.initMouseEvent("click", !1, !0, e, {}, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), o.$material = !0, o.$focus = !0, n.dispatchEvent(o);
        },
        createBackdrop: function (e, t) {
          return a(y.supplant('<md-backdrop class="{0}">', [t]))(e);
        },
        supplant: function (e, t, n) {
          return n = n || /\{([^\{\}]*)\}/g, e.replace(n, function (e, n) {
            var o = n.split("."),
                i = t;

            try {
              for (var r in o) o.hasOwnProperty(r) && (i = i[o[r]]);
            } catch (a) {
              i = e;
            }

            return "string" == typeof i || "number" == typeof i ? i : e;
          });
        },
        fakeNgModel: function () {
          return {
            $fake: !0,
            $setTouched: t.noop,
            $setViewValue: function (e) {
              this.$viewValue = e, this.$render(e), this.$viewChangeListeners.forEach(function (e) {
                e();
              });
            },
            $isEmpty: function (e) {
              return 0 === ("" + e).length;
            },
            $parsers: [],
            $formatters: [],
            $viewChangeListeners: [],
            $render: t.noop
          };
        },
        debounce: function (e, t, o, i) {
          var a;
          return function () {
            var d = o,
                s = Array.prototype.slice.call(arguments);
            r.cancel(a), a = r(function () {
              a = n, e.apply(d, s);
            }, t || 10, i);
          };
        },
        throttle: function (e, t) {
          var n;
          return function () {
            var o = this,
                i = arguments,
                r = y.now();
            (!n || r - n > t) && (e.apply(o, i), n = r);
          };
        },
        time: function (e) {
          var t = y.now();
          return e(), y.now() - t;
        },
        valueOnUse: function (e, t, n) {
          var o = null,
              i = Array.prototype.slice.call(arguments),
              r = i.length > 3 ? i.slice(3) : [];
          Object.defineProperty(e, t, {
            get: function () {
              return null === o && (o = n.apply(e, r)), o;
            }
          });
        },
        nextUid: function () {
          return "" + i++;
        },
        disconnectScope: function (e) {
          if (e && e.$root !== e && !e.$$destroyed) {
            var t = e.$parent;
            e.$$disconnected = !0, t.$$childHead === e && (t.$$childHead = e.$$nextSibling), t.$$childTail === e && (t.$$childTail = e.$$prevSibling), e.$$prevSibling && (e.$$prevSibling.$$nextSibling = e.$$nextSibling), e.$$nextSibling && (e.$$nextSibling.$$prevSibling = e.$$prevSibling), e.$$nextSibling = e.$$prevSibling = null;
          }
        },
        reconnectScope: function (e) {
          if (e && e.$root !== e && e.$$disconnected) {
            var t = e,
                n = t.$parent;
            t.$$disconnected = !1, t.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = t, n.$$childTail = t) : n.$$childHead = n.$$childTail = t;
          }
        },
        getClosest: function (e, n, o) {
          if (t.isString(n)) {
            var i = n.toUpperCase();

            n = function (e) {
              return e.nodeName.toUpperCase() === i;
            };
          }

          if (e instanceof t.element && (e = e[0]), o && (e = e.parentNode), !e) return null;

          do if (n(e)) return e; while (e = e.parentNode);

          return null;
        },
        elementContains: function (n, o) {
          var i = e.Node && e.Node.prototype && Node.prototype.contains,
              r = i ? t.bind(n, n.contains) : t.bind(n, function (e) {
            return n === o || !!(16 & this.compareDocumentPosition(e));
          });
          return r(o);
        },
        extractElementByName: function (e, n, o, i) {
          function r(e) {
            return a(e) || (o ? d(e) : null);
          }

          function a(e) {
            if (e) for (var t = 0, o = e.length; t < o; t++) if (e[t].nodeName.toLowerCase() === n) return e[t];
            return null;
          }

          function d(e) {
            var t;
            if (e) for (var n = 0, o = e.length; n < o; n++) {
              var i = e[n];
              if (!t) for (var a = 0, d = i.childNodes.length; a < d; a++) t = t || r([i.childNodes[a]]);
            }
            return t;
          }

          var s = r(e);
          return !s && i && l.warn(y.supplant("Unable to find node '{0}' in element '{1}'.", [n, e[0].outerHTML])), t.element(s || e);
        },
        initOptionalProperties: function (e, n, o) {
          o = o || {}, t.forEach(e.$$isolateBindings, function (i, r) {
            if (i.optional && t.isUndefined(e[r])) {
              var a = t.isDefined(n[i.attrName]);
              e[r] = t.isDefined(o[r]) ? o[r] : a;
            }
          });
        },
        nextTick: function (e, t, n) {
          function o() {
            var e = i.queue,
                t = i.digest;
            i.queue = [], i.timeout = null, i.digest = !1, e.forEach(function (e) {
              var t = e.scope && e.scope.$$destroyed;
              t || e.callback();
            }), t && d.$digest();
          }

          var i = y.nextTick,
              a = i.timeout,
              s = i.queue || [];
          return s.push({
            scope: n,
            callback: e
          }), null == t && (t = !0), i.digest = i.digest || t, i.queue = s, a || (i.timeout = r(o, 0, !1));
        },
        processTemplate: function (e) {
          return $ ? e : e && t.isString(e) ? e.replace(/\{\{/g, v).replace(/}}/g, E) : e;
        },
        getParentWithPointerEvents: function (e) {
          for (var t = e.parent(); C(t, "pointer-events", "none");) t = t.parent();

          return t;
        },
        getNearestContentElement: function (e) {
          for (var t = e.parent()[0]; t && t !== m[0] && t !== document.body && "MD-CONTENT" !== t.nodeName.toUpperCase();) t = t.parentNode;

          return t;
        },
        checkStickySupport: function () {
          var e,
              n = t.element("<div>");
          o[0].body.appendChild(n[0]);

          for (var i = ["sticky", "-webkit-sticky"], r = 0; r < i.length; ++r) if (n.css({
            position: i[r],
            top: 0,
            "z-index": 2
          }), n.css("position") == i[r]) {
            e = i[r];
            break;
          }

          return n.remove(), e;
        },
        parseAttributeBoolean: function (e, t) {
          return "" === e || !!e && (t === !1 || "false" !== e && "0" !== e);
        },
        hasComputedStyle: C,
        isParentFormSubmitted: function (e) {
          var n = y.getClosest(e, "form"),
              o = n ? t.element(n).controller("form") : null;
          return !!o && o.$submitted;
        },
        animateScrollTo: function (e, t, n) {
          function o() {
            var n = i();
            e.scrollTop = n, (s ? n < t : n > t) && p(o);
          }

          function i() {
            var e = n || 1e3,
                t = y.now() - c;
            return r(t, a, d, e);
          }

          function r(e, t, n, o) {
            if (e > o) return t + n;
            var i = (e /= o) * e,
                r = i * e;
            return t + n * (-2 * r + 3 * i);
          }

          var a = e.scrollTop,
              d = t - a,
              s = a < t,
              c = y.now();
          p(o);
        },
        uniq: function (e) {
          if (e) return e.filter(function (e, t, n) {
            return n.indexOf(e) === t;
          });
        }
      };

      return y.dom.animator = s(y), y;
    }

    o.$inject = ["$document", "$timeout", "$compile", "$rootScope", "$$mdAnimate", "$interpolate", "$log", "$rootElement", "$window", "$$rAF"];
    var i = 0;
    t.module("material.core").factory("$mdUtil", o), t.element.prototype.focus = t.element.prototype.focus || function () {
      return this.length && this[0].focus(), this;
    }, t.element.prototype.blur = t.element.prototype.blur || function () {
      return this.length && this[0].blur(), this;
    };
  }(), function () {
    function e(e, t, n, o, i) {
      this.$q = e, this.$templateRequest = t, this.$injector = n, this.$compile = o, this.$controller = i;
    }

    e.$inject = ["$q", "$templateRequest", "$injector", "$compile", "$controller"], t.module("material.core").service("$mdCompiler", e), e.prototype.compile = function (e) {
      return e.contentElement ? this._prepareContentElement(e) : this._compileTemplate(e);
    }, e.prototype._prepareContentElement = function (e) {
      var t = this._fetchContentElement(e);

      return this.$q.resolve({
        element: t.element,
        cleanup: t.restore,
        locals: {},
        link: function () {
          return t.element;
        }
      });
    }, e.prototype._compileTemplate = function (e) {
      var n = this,
          o = e.templateUrl,
          i = e.template || "",
          r = t.extend({}, e.resolve),
          a = t.extend({}, e.locals),
          d = e.transformTemplate || t.identity;
      return t.forEach(r, function (e, o) {
        t.isString(e) ? r[o] = n.$injector.get(e) : r[o] = n.$injector.invoke(e);
      }), t.extend(r, a), o ? r.$$ngTemplate = this.$templateRequest(o) : r.$$ngTemplate = this.$q.when(i), this.$q.all(r).then(function (o) {
        var i = d(o.$$ngTemplate, e),
            r = e.element || t.element("<div>").html(i.trim()).contents();
        return n._compileElement(o, r, e);
      });
    }, e.prototype._compileElement = function (e, n, o) {
      function i(i) {
        if (e.$scope = i, o.controller) {
          var s = t.extend(e, {
            $element: n
          }),
              c = r.$controller(o.controller, s, !0, o.controllerAs);
          o.bindToController && t.extend(c.instance, e);
          var l = c();
          n.data("$ngControllerController", l), n.children().data("$ngControllerController", l), d.controller = l;
        }

        return a(i);
      }

      var r = this,
          a = this.$compile(n),
          d = {
        element: n,
        cleanup: n.remove.bind(n),
        locals: e,
        link: i
      };
      return d;
    }, e.prototype._fetchContentElement = function (e) {
      function n(e) {
        var t = e.parentNode,
            n = e.nextElementSibling;
        return function () {
          n ? t.insertBefore(e, n) : t.appendChild(e);
        };
      }

      var o = e.contentElement,
          i = null;
      return t.isString(o) ? (o = document.querySelector(o), i = n(o)) : (o = o[0] || o, i = document.contains(o) ? n(o) : function () {
        o.parentNode && o.parentNode.removeChild(o);
      }), {
        element: t.element(o),
        restore: i
      };
    };
  }(), function () {
    function e() {
      function e() {
        t.showWarnings = !1;
      }

      var t = {
        showWarnings: !0
      };
      return {
        disableWarnings: e,
        $get: ["$$rAF", "$log", "$window", "$interpolate", function (e, o, i, r) {
          return n.apply(t, arguments);
        }]
      };
    }

    function n(e, n, o, i) {
      function r(e, o, i) {
        var r = t.element(e)[0] || e;
        !r || r.hasAttribute(o) && 0 !== r.getAttribute(o).length || l(r, o) || (i = t.isString(i) ? i.trim() : "", i.length ? e.attr(o, i) : p && n.warn('ARIA: Attribute "', o, '", required for accessibility, is missing on node:', r));
      }

      function a(t, n, o) {
        e(function () {
          r(t, n, o());
        });
      }

      function d(e, t) {
        var n = c(e) || "",
            o = n.indexOf(i.startSymbol()) > -1;
        o ? a(e, t, function () {
          return c(e);
        }) : r(e, t, n);
      }

      function s(e, t) {
        var n = c(e),
            o = n.indexOf(i.startSymbol()) > -1;
        o || n || r(e, t, n);
      }

      function c(e) {
        function t(t) {
          for (; t.parentNode && (t = t.parentNode) !== e;) if (t.getAttribute && "true" === t.getAttribute("aria-hidden")) return !0;
        }

        e = e[0] || e;

        for (var n, o = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1), i = ""; n = o.nextNode();) t(n) || (i += n.textContent);

        return i.trim() || "";
      }

      function l(e, t) {
        function n(e) {
          var t = e.currentStyle ? e.currentStyle : o.getComputedStyle(e);
          return "none" === t.display;
        }

        var i = e.hasChildNodes(),
            r = !1;
        if (i) for (var a = e.childNodes, d = 0; d < a.length; d++) {
          var s = a[d];
          1 === s.nodeType && s.hasAttribute(t) && (n(s) || (r = !0));
        }
        return r;
      }

      function m(e) {
        var n = t.element(e)[0] || e;
        return !!n.hasAttribute && (n.hasAttribute("aria-label") || n.hasAttribute("aria-labelledby") || n.hasAttribute("aria-describedby"));
      }

      function u(e, n) {
        function o(e) {
          if (!m(e)) return !1;
          if (e.hasAttribute("role")) switch (e.getAttribute("role").toLowerCase()) {
            case "command":
            case "definition":
            case "directory":
            case "grid":
            case "list":
            case "listitem":
            case "log":
            case "marquee":
            case "menu":
            case "menubar":
            case "note":
            case "presentation":
            case "separator":
            case "scrollbar":
            case "status":
            case "tablist":
              return !1;
          }

          switch (e.tagName.toLowerCase()) {
            case "abbr":
            case "acronym":
            case "address":
            case "applet":
            case "audio":
            case "b":
            case "bdi":
            case "bdo":
            case "big":
            case "blockquote":
            case "br":
            case "canvas":
            case "caption":
            case "center":
            case "cite":
            case "code":
            case "col":
            case "data":
            case "dd":
            case "del":
            case "dfn":
            case "dir":
            case "div":
            case "dl":
            case "em":
            case "embed":
            case "fieldset":
            case "figcaption":
            case "font":
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
            case "hgroup":
            case "html":
            case "i":
            case "ins":
            case "isindex":
            case "kbd":
            case "keygen":
            case "label":
            case "legend":
            case "li":
            case "map":
            case "mark":
            case "menu":
            case "object":
            case "ol":
            case "output":
            case "pre":
            case "presentation":
            case "q":
            case "rt":
            case "ruby":
            case "samp":
            case "small":
            case "source":
            case "span":
            case "status":
            case "strike":
            case "strong":
            case "sub":
            case "sup":
            case "svg":
            case "tbody":
            case "td":
            case "th":
            case "thead":
            case "time":
            case "tr":
            case "track":
            case "tt":
            case "ul":
            case "var":
              return !1;
          }

          return !0;
        }

        n = n || 1;
        var i = t.element(e)[0] || e;
        return !!i.parentNode && (!!o(i.parentNode) || (n--, !!n && u(i.parentNode, n)));
      }

      var p = this.showWarnings;
      return {
        expect: r,
        expectAsync: a,
        expectWithText: d,
        expectWithoutText: s,
        getText: c,
        hasAriaLabel: m,
        parentHasAriaLabel: u
      };
    }

    n.$inject = ["$$rAF", "$log", "$window", "$interpolate"], t.module("material.core").provider("$mdAria", e);
  }(), function () {
    function n(e, n) {
      this.$timeout = e, this.$mdUtil = n, this.bodyElement = t.element(document.body), this.isBuffering = !1, this.bufferTimeout = null, this.lastInteractionType = null, this.lastInteractionTime = null, this.inputEventMap = {
        keydown: "keyboard",
        mousedown: "mouse",
        mouseenter: "mouse",
        touchstart: "touch",
        pointerdown: "pointer",
        MSPointerDown: "pointer"
      }, this.iePointerMap = {
        2: "touch",
        3: "touch",
        4: "mouse"
      }, this.initializeEvents();
    }

    n.$inject = ["$timeout", "$mdUtil"], t.module("material.core.interaction", []).service("$mdInteraction", n), n.prototype.initializeEvents = function () {
      var t = "MSPointerEvent" in e ? "MSPointerDown" : "PointerEvent" in e ? "pointerdown" : null;
      this.bodyElement.on("keydown mousedown", this.onInputEvent.bind(this)), "ontouchstart" in document.documentElement && this.bodyElement.on("touchstart", this.onBufferInputEvent.bind(this)), t && this.bodyElement.on(t, this.onInputEvent.bind(this));
    }, n.prototype.onInputEvent = function (e) {
      if (!this.isBuffering) {
        var t = this.inputEventMap[e.type];
        "pointer" === t && (t = this.iePointerMap[e.pointerType] || e.pointerType), this.lastInteractionType = t, this.lastInteractionTime = this.$mdUtil.now();
      }
    }, n.prototype.onBufferInputEvent = function (e) {
      this.$timeout.cancel(this.bufferTimeout), this.onInputEvent(e), this.isBuffering = !0, this.bufferTimeout = this.$timeout(function () {
        this.isBuffering = !1;
      }.bind(this), 650, !1);
    }, n.prototype.getLastInteractionType = function () {
      return this.lastInteractionType;
    }, n.prototype.isUserInvoked = function (e) {
      var n = t.isNumber(e) ? e : 15;
      return this.lastInteractionTime >= this.$mdUtil.now() - n;
    };
  }(), function () {
    function n() {}

    function o(n, o, i) {
      function r(e) {
        return function (t, n) {
          n.distance < this.state.options.maxDistance && this.dispatchEvent(t, e, n);
        };
      }

      function a(e, t, n) {
        var o = h[t.replace(/^\$md./, "")];
        if (!o) throw new Error("Failed to register element with handler " + t + ". Available handlers: " + Object.keys(h).join(", "));
        return o.registerElement(e, n);
      }

      function s(e, o) {
        var i = new n(e);
        return t.extend(i, o), h[e] = i, v;
      }

      function c() {
        for (var e = document.createElement("div"), n = ["", "webkit", "Moz", "MS", "ms", "o"], o = 0; o < n.length; o++) {
          var i = n[o],
              r = i ? i + "TouchAction" : "touchAction";
          if (t.isDefined(e.style[r])) return r;
        }
      }

      var m = navigator.userAgent || navigator.vendor || e.opera,
          u = m.match(/ipad|iphone|ipod/i),
          p = m.match(/android/i),
          g = c(),
          b = "undefined" != typeof e.jQuery && t.element === e.jQuery,
          v = {
        handler: s,
        register: a,
        isHijackingClicks: (u || p) && !b && !f
      };

      if (v.isHijackingClicks) {
        var E = 6;
        v.handler("click", {
          options: {
            maxDistance: E
          },
          onEnd: r("click")
        }), v.handler("focus", {
          options: {
            maxDistance: E
          },
          onEnd: function (e, t) {
            function n(e) {
              var t = ["INPUT", "SELECT", "BUTTON", "TEXTAREA", "VIDEO", "AUDIO"];
              return "-1" != e.getAttribute("tabindex") && !e.hasAttribute("DISABLED") && (e.hasAttribute("tabindex") || e.hasAttribute("href") || e.isContentEditable || t.indexOf(e.nodeName) != -1);
            }

            t.distance < this.state.options.maxDistance && n(e.target) && (this.dispatchEvent(e, "focus", t), e.target.focus());
          }
        }), v.handler("mouseup", {
          options: {
            maxDistance: E
          },
          onEnd: r("mouseup")
        }), v.handler("mousedown", {
          onStart: function (e) {
            this.dispatchEvent(e, "mousedown");
          }
        });
      }

      return v.handler("press", {
        onStart: function (e, t) {
          this.dispatchEvent(e, "$md.pressdown");
        },
        onEnd: function (e, t) {
          this.dispatchEvent(e, "$md.pressup");
        }
      }).handler("hold", {
        options: {
          maxDistance: 6,
          delay: 500
        },
        onCancel: function () {
          i.cancel(this.state.timeout);
        },
        onStart: function (e, n) {
          return this.state.registeredParent ? (this.state.pos = {
            x: n.x,
            y: n.y
          }, void (this.state.timeout = i(t.bind(this, function () {
            this.dispatchEvent(e, "$md.hold"), this.cancel();
          }), this.state.options.delay, !1))) : this.cancel();
        },
        onMove: function (e, t) {
          g || "touchmove" !== e.type || e.preventDefault();
          var n = this.state.pos.x - t.x,
              o = this.state.pos.y - t.y;
          Math.sqrt(n * n + o * o) > this.options.maxDistance && this.cancel();
        },
        onEnd: function () {
          this.onCancel();
        }
      }).handler("drag", {
        options: {
          minDistance: 6,
          horizontal: !0,
          cancelMultiplier: 1.5
        },
        onSetup: function (e, t) {
          g && (this.oldTouchAction = e[0].style[g], e[0].style[g] = t.horizontal ? "pan-y" : "pan-x");
        },
        onCleanup: function (e) {
          this.oldTouchAction && (e[0].style[g] = this.oldTouchAction);
        },
        onStart: function (e) {
          this.state.registeredParent || this.cancel();
        },
        onMove: function (e, t) {
          var n, o;
          g || "touchmove" !== e.type || e.preventDefault(), this.state.dragPointer ? this.dispatchDragMove(e) : (this.state.options.horizontal ? (n = Math.abs(t.distanceX) > this.state.options.minDistance, o = Math.abs(t.distanceY) > this.state.options.minDistance * this.state.options.cancelMultiplier) : (n = Math.abs(t.distanceY) > this.state.options.minDistance, o = Math.abs(t.distanceX) > this.state.options.minDistance * this.state.options.cancelMultiplier), n ? (this.state.dragPointer = d(e), l(e, this.state.dragPointer), this.dispatchEvent(e, "$md.dragstart", this.state.dragPointer)) : o && this.cancel());
        },
        dispatchDragMove: o.throttle(function (e) {
          this.state.isRunning && (l(e, this.state.dragPointer), this.dispatchEvent(e, "$md.drag", this.state.dragPointer));
        }),
        onEnd: function (e, t) {
          this.state.dragPointer && (l(e, this.state.dragPointer), this.dispatchEvent(e, "$md.dragend", this.state.dragPointer));
        }
      }).handler("swipe", {
        options: {
          minVelocity: .65,
          minDistance: 10
        },
        onEnd: function (e, t) {
          var n;
          Math.abs(t.velocityX) > this.state.options.minVelocity && Math.abs(t.distanceX) > this.state.options.minDistance ? (n = "left" == t.directionX ? "$md.swipeleft" : "$md.swiperight", this.dispatchEvent(e, n)) : Math.abs(t.velocityY) > this.state.options.minVelocity && Math.abs(t.distanceY) > this.state.options.minDistance && (n = "up" == t.directionY ? "$md.swipeup" : "$md.swipedown", this.dispatchEvent(e, n));
        }
      });
    }

    function i(e) {
      this.name = e, this.state = {};
    }

    function r() {
      function n(e, n, o) {
        o = o || u;
        var i = new t.element.Event(n);
        i.$material = !0, i.pointer = o, i.srcEvent = e, t.extend(i, {
          clientX: o.x,
          clientY: o.y,
          screenX: o.x,
          screenY: o.y,
          pageX: o.x,
          pageY: o.y,
          ctrlKey: e.ctrlKey,
          altKey: e.altKey,
          shiftKey: e.shiftKey,
          metaKey: e.metaKey
        }), t.element(o.target).trigger(i);
      }

      function o(t, n, o) {
        o = o || u;
        var i;
        "click" === n || "mouseup" == n || "mousedown" == n ? (i = document.createEvent("MouseEvents"), i.initMouseEvent(n, !0, !0, e, t.detail, o.x, o.y, o.x, o.y, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, t.button, t.relatedTarget || null)) : (i = document.createEvent("CustomEvent"), i.initCustomEvent(n, !0, !0, {})), i.$material = !0, i.pointer = o, i.srcEvent = t, o.target.dispatchEvent(i);
      }

      var r = "undefined" != typeof e.jQuery && t.element === e.jQuery;
      return i.prototype = {
        options: {},
        dispatchEvent: r ? n : o,
        onSetup: t.noop,
        onCleanup: t.noop,
        onStart: t.noop,
        onMove: t.noop,
        onEnd: t.noop,
        onCancel: t.noop,
        start: function (e, n) {
          if (!this.state.isRunning) {
            var o = this.getNearestParent(e.target),
                i = o && o.$mdGesture[this.name] || {};
            this.state = {
              isRunning: !0,
              options: t.extend({}, this.options, i),
              registeredParent: o
            }, this.onStart(e, n);
          }
        },
        move: function (e, t) {
          this.state.isRunning && this.onMove(e, t);
        },
        end: function (e, t) {
          this.state.isRunning && (this.onEnd(e, t), this.state.isRunning = !1);
        },
        cancel: function (e, t) {
          this.onCancel(e, t), this.state = {};
        },
        getNearestParent: function (e) {
          for (var t = e; t;) {
            if ((t.$mdGesture || {})[this.name]) return t;
            t = t.parentNode;
          }

          return null;
        },
        registerElement: function (e, t) {
          function n() {
            delete e[0].$mdGesture[o.name], e.off("$destroy", n), o.onCleanup(e, t || {});
          }

          var o = this;
          return e[0].$mdGesture = e[0].$mdGesture || {}, e[0].$mdGesture[this.name] = t || {}, e.on("$destroy", n), o.onSetup(e, t || {}), n;
        }
      }, i;
    }

    function a(e, n) {
      function o(e) {
        var t = !e.clientX && !e.clientY;
        t || e.$material || e.isIonicTap || c(e) || (e.preventDefault(), e.stopPropagation());
      }

      function i(e) {
        var t = 0 === e.clientX && 0 === e.clientY,
            n = e.target && "submit" === e.target.type;
        t || e.$material || e.isIonicTap || c(e) || n ? (g = null, "label" == e.target.tagName.toLowerCase() && (g = {
          x: e.x,
          y: e.y
        })) : (e.preventDefault(), e.stopPropagation(), g = null);
      }

      function r(e, t) {
        var o;

        for (var i in h) o = h[i], o instanceof n && ("start" === e && o.cancel(), o[e](t, u));
      }

      function a(e) {
        if (!u) {
          var t = +Date.now();
          p && !s(e, p) && t - p.endTime < 1500 || (u = d(e), r("start", e));
        }
      }

      function m(e) {
        u && s(e, u) && (l(e, u), r("move", e));
      }

      function f(e) {
        u && s(e, u) && (l(e, u), u.endTime = +Date.now(), r("end", e), p = u, u = null);
      }

      document.contains || (document.contains = function (e) {
        return document.body.contains(e);
      }), !b && e.isHijackingClicks && (document.addEventListener("click", i, !0), document.addEventListener("mouseup", o, !0), document.addEventListener("mousedown", o, !0), document.addEventListener("focus", o, !0), b = !0);
      var v = "mousedown touchstart pointerdown",
          E = "mousemove touchmove pointermove",
          $ = "mouseup mouseleave touchend touchcancel pointerup pointercancel";
      t.element(document).on(v, a).on(E, m).on($, f).on("$$mdGestureReset", function () {
        p = u = null;
      });
    }

    function d(e) {
      var t = m(e),
          n = {
        startTime: +Date.now(),
        target: e.target,
        type: e.type.charAt(0)
      };
      return n.startX = n.x = t.pageX, n.startY = n.y = t.pageY, n;
    }

    function s(e, t) {
      return e && t && e.type.charAt(0) === t.type;
    }

    function c(e) {
      return g && g.x == e.x && g.y == e.y;
    }

    function l(e, t) {
      var n = m(e),
          o = t.x = n.pageX,
          i = t.y = n.pageY;
      t.distanceX = o - t.startX, t.distanceY = i - t.startY, t.distance = Math.sqrt(t.distanceX * t.distanceX + t.distanceY * t.distanceY), t.directionX = t.distanceX > 0 ? "right" : t.distanceX < 0 ? "left" : "", t.directionY = t.distanceY > 0 ? "down" : t.distanceY < 0 ? "up" : "", t.duration = +Date.now() - t.startTime, t.velocityX = t.distanceX / t.duration, t.velocityY = t.distanceY / t.duration;
    }

    function m(e) {
      return e = e.originalEvent || e, e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0] || e;
    }

    o.$inject = ["$$MdGestureHandler", "$$rAF", "$timeout"], a.$inject = ["$mdGesture", "$$MdGestureHandler"];
    var u,
        p,
        h = {},
        f = !1,
        g = null,
        b = !1;
    t.module("material.core.gestures", []).provider("$mdGesture", n).factory("$$MdGestureHandler", r).run(a), n.prototype = {
      skipClickHijack: function () {
        return f = !0;
      },
      $get: ["$$MdGestureHandler", "$$rAF", "$timeout", function (e, t, n) {
        return new o(e, t, n);
      }]
    };
  }(), function () {
    function e() {
      function e(e) {
        function n(e) {
          return s.optionsFactory = e.options, s.methods = (e.methods || []).concat(a), c;
        }

        function o(e, t) {
          return d[e] = t, c;
        }

        function i(t, n) {
          if (n = n || {}, n.methods = n.methods || [], n.options = n.options || function () {
            return {};
          }, /^cancel|hide|show$/.test(t)) throw new Error("Preset '" + t + "' in " + e + " is reserved!");
          if (n.methods.indexOf("_options") > -1) throw new Error("Method '_options' in " + e + " is reserved!");
          return s.presets[t] = {
            methods: n.methods.concat(a),
            optionsFactory: n.options,
            argOption: n.argOption
          }, c;
        }

        function r(n, o) {
          function i(e) {
            return e = e || {}, e._options && (e = e._options), m.show(t.extend({}, l, e));
          }

          function r(e) {
            return m.destroy(e);
          }

          function a(t, n) {
            var i = {};
            return i[e] = u, o.invoke(t || function () {
              return n;
            }, {}, i);
          }

          var c,
              l,
              m = n(),
              u = {
            hide: m.hide,
            cancel: m.cancel,
            show: i,
            destroy: r
          };
          return c = s.methods || [], l = a(s.optionsFactory, {}), t.forEach(d, function (e, t) {
            u[t] = e;
          }), t.forEach(s.presets, function (e, n) {
            function o(e) {
              this._options = t.extend({}, i, e);
            }

            var i = a(e.optionsFactory, {}),
                r = (e.methods || []).concat(c);

            if (t.extend(i, {
              $type: n
            }), t.forEach(r, function (e) {
              o.prototype[e] = function (t) {
                return this._options[e] = t, this;
              };
            }), e.argOption) {
              var d = "show" + n.charAt(0).toUpperCase() + n.slice(1);

              u[d] = function (e) {
                var t = u[n](e);
                return u.show(t);
              };
            }

            u[n] = function (n) {
              return arguments.length && e.argOption && !t.isObject(n) && !t.isArray(n) ? new o()[e.argOption](n) : new o(n);
            };
          }), u;
        }

        r.$inject = ["$$interimElement", "$injector"];
        var a = ["onHide", "onShow", "onRemove"],
            d = {},
            s = {
          presets: {}
        },
            c = {
          setDefaults: n,
          addPreset: i,
          addMethod: o,
          $get: r
        };
        return c.addPreset("build", {
          methods: ["controller", "controllerAs", "resolve", "multiple", "template", "templateUrl", "themable", "transformTemplate", "parent", "contentElement"]
        }), c;
      }

      function o(e, o, i, r, a, d, s, c, l, m, u) {
        return function () {
          function p(e) {
            e = e || {};
            var t = new v(e || {}),
                n = e.multiple ? o.resolve() : o.all(C);
            e.multiple || (n = n.then(function () {
              var e = y.concat(M.map(E.cancel));
              return o.all(e);
            }));
            var i = n.then(function () {
              return t.show()["catch"](function (e) {
                return e;
              })["finally"](function () {
                C.splice(C.indexOf(i), 1), M.push(t);
              });
            });
            return C.push(i), t.deferred.promise["catch"](function (e) {
              return e instanceof Error && u(e), e;
            }), t.deferred.promise;
          }

          function h(e, t) {
            function i(n) {
              var o = n.remove(e, !1, t || {})["catch"](function (e) {
                return e;
              })["finally"](function () {
                y.splice(y.indexOf(o), 1);
              });
              return M.splice(M.indexOf(n), 1), y.push(o), n.deferred.promise;
            }

            return t = t || {}, t.closeAll ? o.all(M.slice().reverse().map(i)) : t.closeTo !== n ? o.all(M.slice(t.closeTo).map(i)) : i(M[M.length - 1]);
          }

          function f(e, n) {
            var i = M.pop();
            if (!i) return o.when(e);
            var r = i.remove(e, !0, n || {})["catch"](function (e) {
              return e;
            })["finally"](function () {
              y.splice(y.indexOf(r), 1);
            });
            return y.push(r), i.deferred.promise["catch"](t.noop);
          }

          function g(e) {
            return function () {
              var t = arguments;
              return M.length ? e.apply(E, t) : C.length ? C[0]["finally"](function () {
                return e.apply(E, t);
              }) : o.when("No interim elements currently showing up.");
            };
          }

          function b(e) {
            var n = e ? null : M.shift(),
                i = t.element(e).length && t.element(e)[0].parentNode;

            if (i) {
              var r = M.filter(function (e) {
                return e.options.element[0] === i;
              });
              r.length && (n = r[0], M.splice(M.indexOf(n), 1));
            }

            return n ? n.remove($, !1, {
              $destroy: !0
            }) : o.when($);
          }

          function v(m) {
            function u() {
              return o(function (e, t) {
                function n(e) {
                  y.deferred.reject(e), t(e);
                }

                m.onCompiling && m.onCompiling(m), f(m).then(function (t) {
                  M = g(t, m), m.cleanupElement = t.cleanup, T = $(M, m, t.controller).then(e, n);
                })["catch"](n);
              });
            }

            function p(e, n, i) {
              function r(e) {
                y.deferred.resolve(e);
              }

              function a(e) {
                y.deferred.reject(e);
              }

              return M ? (m = t.extend(m || {}, i || {}), m.cancelAutoHide && m.cancelAutoHide(), m.element.triggerHandler("$mdInterimElementRemove"), m.$destroy === !0 ? C(m.element, m).then(function () {
                n && a(e) || r(e);
              }) : (o.when(T)["finally"](function () {
                C(m.element, m).then(function () {
                  n ? a(e) : r(e);
                }, a);
              }), y.deferred.promise)) : o.when(!1);
            }

            function h(e) {
              return e = e || {}, e.template && (e.template = s.processTemplate(e.template)), t.extend({
                preserveScope: !1,
                cancelAutoHide: t.noop,
                scope: e.scope || i.$new(e.isolateScope),
                onShow: function (e, t, n) {
                  return d.enter(t, n.parent);
                },
                onRemove: function (e, t) {
                  return t && d.leave(t) || o.when();
                }
              }, e);
            }

            function f(e) {
              var t = e.skipCompile ? null : c.compile(e);
              return t || o(function (t) {
                t({
                  locals: {},
                  link: function () {
                    return e.element;
                  }
                });
              });
            }

            function g(e, n) {
              t.extend(e.locals, n);
              var o = e.link(n.scope);
              return n.element = o, n.parent = b(o, n), n.themable && l(o), o;
            }

            function b(n, o) {
              var i = o.parent;

              if (i = t.isFunction(i) ? i(o.scope, n, o) : t.isString(i) ? t.element(e[0].querySelector(i)) : t.element(i), !(i || {}).length) {
                var r;
                return a[0] && a[0].querySelector && (r = a[0].querySelector(":not(svg) > body")), r || (r = a[0]), "#comment" == r.nodeName && (r = e[0].body), t.element(r);
              }

              return i;
            }

            function v() {
              var e,
                  o = t.noop;
              m.hideDelay && (e = r(E.hide, m.hideDelay), o = function () {
                r.cancel(e);
              }), m.cancelAutoHide = function () {
                o(), m.cancelAutoHide = n;
              };
            }

            function $(e, n, i) {
              var r = n.onShowing || t.noop,
                  a = n.onComplete || t.noop;

              try {
                r(n.scope, e, n, i);
              } catch (d) {
                return o.reject(d);
              }

              return o(function (t, r) {
                try {
                  o.when(n.onShow(n.scope, e, n, i)).then(function () {
                    a(n.scope, e, n), v(), t(e);
                  }, r);
                } catch (d) {
                  r(d.message);
                }
              });
            }

            function C(e, n) {
              var i = n.onRemoving || t.noop;
              return o(function (t, r) {
                try {
                  var a = o.when(n.onRemove(n.scope, e, n) || !0);
                  i(e, a), n.$destroy ? (t(e), !n.preserveScope && n.scope && a.then(function () {
                    n.scope.$destroy();
                  })) : a.then(function () {
                    !n.preserveScope && n.scope && n.scope.$destroy(), t(e);
                  }, r);
                } catch (d) {
                  r(d.message);
                }
              });
            }

            var y,
                M,
                T = o.when(!0);
            return m = h(m), y = {
              options: m,
              deferred: o.defer(),
              show: u,
              remove: p
            };
          }

          var E,
              $ = !1,
              C = [],
              y = [],
              M = [];
          return E = {
            show: p,
            hide: g(h),
            cancel: g(f),
            destroy: b,
            $injector_: m
          };
        };
      }

      return o.$inject = ["$document", "$q", "$rootScope", "$timeout", "$rootElement", "$animate", "$mdUtil", "$mdCompiler", "$mdTheming", "$injector", "$exceptionHandler"], e.$get = o, e;
    }

    t.module("material.core").provider("$$interimElement", e);
  }(), function () {
    !function () {
      function e(e) {
        function d(e) {
          return e.replace(m, "").replace(u, function (e, t, n, o) {
            return o ? n.toUpperCase() : n;
          });
        }

        var m = /^((?:x|data)[\:\-_])/i,
            u = /([\:\-\_]+(.))/g,
            p = ["", "xs", "gt-xs", "sm", "gt-sm", "md", "gt-md", "lg", "gt-lg", "xl", "print"],
            h = ["layout", "flex", "flex-order", "flex-offset", "layout-align"],
            f = ["show", "hide", "layout-padding", "layout-margin"];
        t.forEach(p, function (n) {
          t.forEach(h, function (t) {
            var o = n ? t + "-" + n : t;
            e.directive(d(o), r(o));
          }), t.forEach(f, function (t) {
            var o = n ? t + "-" + n : t;
            e.directive(d(o), a(o));
          });
        }), e.provider("$$mdLayout", function () {
          return {
            $get: t.noop,
            validateAttributeValue: l,
            validateAttributeUsage: c,
            disableLayouts: function (e) {
              A.enabled = e !== !0;
            }
          };
        }).directive("mdLayoutCss", o).directive("ngCloak", i("ng-cloak")).directive("layoutWrap", a("layout-wrap")).directive("layoutNowrap", a("layout-nowrap")).directive("layoutNoWrap", a("layout-no-wrap")).directive("layoutFill", a("layout-fill")).directive("layoutLtMd", s("layout-lt-md", !0)).directive("layoutLtLg", s("layout-lt-lg", !0)).directive("flexLtMd", s("flex-lt-md", !0)).directive("flexLtLg", s("flex-lt-lg", !0)).directive("layoutAlignLtMd", s("layout-align-lt-md")).directive("layoutAlignLtLg", s("layout-align-lt-lg")).directive("flexOrderLtMd", s("flex-order-lt-md")).directive("flexOrderLtLg", s("flex-order-lt-lg")).directive("offsetLtMd", s("flex-offset-lt-md")).directive("offsetLtLg", s("flex-offset-lt-lg")).directive("hideLtMd", s("hide-lt-md")).directive("hideLtLg", s("hide-lt-lg")).directive("showLtMd", s("show-lt-md")).directive("showLtLg", s("show-lt-lg")).config(n);
      }

      function n() {
        var e = !!document.querySelector("[md-layouts-disabled]");
        A.enabled = !e;
      }

      function o() {
        return A.enabled = !1, {
          restrict: "A",
          priority: "900"
        };
      }

      function i(e) {
        return ["$timeout", function (n) {
          return {
            restrict: "A",
            priority: -10,
            compile: function (o) {
              return A.enabled ? (o.addClass(e), function (t, o) {
                n(function () {
                  o.removeClass(e);
                }, 10, !1);
              }) : t.noop;
            }
          };
        }];
      }

      function r(e) {
        function n(t, n, o) {
          var i = d(n, e, o),
              r = o.$observe(o.$normalize(e), i);
          i(p(e, o, "")), t.$on("$destroy", function () {
            r();
          });
        }

        return ["$mdUtil", "$interpolate", "$log", function (o, i, r) {
          return g = o, b = i, v = r, {
            restrict: "A",
            compile: function (o, i) {
              var r;
              return A.enabled && (c(e, i, o, v), l(e, p(e, i, ""), m(o, e, i)), r = n), r || t.noop;
            }
          };
        }];
      }

      function a(e) {
        function n(t, n) {
          n.addClass(e);
        }

        return ["$mdUtil", "$interpolate", "$log", function (o, i, r) {
          return g = o, b = i, v = r, {
            restrict: "A",
            compile: function (o, i) {
              var r;
              return A.enabled && (l(e, p(e, i, ""), m(o, e, i)), n(null, o), r = n), r || t.noop;
            }
          };
        }];
      }

      function d(e, n) {
        var o;
        return function (i) {
          var r = l(n, i || "");
          t.isDefined(r) && (o && e.removeClass(o), o = r ? n + "-" + r.trim().replace($, "-") : n, e.addClass(o));
        };
      }

      function s(e) {
        var n = e.split("-");
        return ["$log", function (o) {
          return o.warn(e + "has been deprecated. Please use a `" + n[0] + "-gt-<xxx>` variant."), t.noop;
        }];
      }

      function c(e, t, n, o) {
        var i,
            r,
            a,
            d = n[0].nodeName.toLowerCase();

        switch (e.replace(E, "")) {
          case "flex":
            "md-button" != d && "fieldset" != d || (r = "<" + d + " " + e + "></" + d + ">", a = "https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers", i = "Markup '{0}' may not work as expected in IE Browsers. Consult '{1}' for details.", o.warn(g.supplant(i, [r, a])));
        }
      }

      function l(e, n, o) {
        var i;

        if (!u(n)) {
          switch (e.replace(E, "")) {
            case "layout":
              h(n, y) || (n = y[0]);
              break;

            case "flex":
              h(n, C) || isNaN(n) && (n = "");
              break;

            case "flex-offset":
            case "flex-order":
              n && !isNaN(+n) || (n = "0");
              break;

            case "layout-align":
              var r = f(n);
              n = g.supplant("{main}-{cross}", r);
              break;

            case "layout-padding":
            case "layout-margin":
            case "layout-fill":
            case "layout-wrap":
            case "layout-nowrap":
            case "layout-nowrap":
              n = "";
          }

          n != i && (o || t.noop)(n);
        }

        return n ? n.trim() : "";
      }

      function m(e, t, n) {
        return function (e) {
          u(e) || (n[n.$normalize(t)] = e);
        };
      }

      function u(e) {
        return (e || "").indexOf(b.startSymbol()) > -1;
      }

      function p(e, t, n) {
        var o = t.$normalize(e);
        return t[o] ? t[o].trim().replace($, "-") : n || null;
      }

      function h(e, t, n) {
        e = n && e ? e.replace($, n) : e;
        var o = !1;
        return e && t.forEach(function (t) {
          t = n ? t.replace($, n) : t, o = o || t === e;
        }), o;
      }

      function f(e) {
        var t,
            n = {
          main: "start",
          cross: "stretch"
        };
        return e = e || "", 0 !== e.indexOf("-") && 0 !== e.indexOf(" ") || (e = "none" + e), t = e.toLowerCase().trim().replace($, "-").split("-"), t.length && "space" === t[0] && (t = [t[0] + "-" + t[1], t[2]]), t.length > 0 && (n.main = t[0] || n.main), t.length > 1 && (n.cross = t[1] || n.cross), M.indexOf(n.main) < 0 && (n.main = "start"), T.indexOf(n.cross) < 0 && (n.cross = "stretch"), n;
      }

      var g,
          b,
          v,
          E = /(-gt)?-(sm|md|lg|print)/g,
          $ = /\s+/g,
          C = ["grow", "initial", "auto", "none", "noshrink", "nogrow"],
          y = ["row", "column"],
          M = ["", "start", "center", "end", "stretch", "space-around", "space-between"],
          T = ["", "start", "center", "end", "stretch"],
          A = {
        enabled: !0,
        breakpoints: []
      };
      e(t.module("material.core.layout", ["ng"]));
    }();
  }(), function () {
    function e(e) {
      this._$timeout = e, this._liveElement = this._createLiveElement(), this._announceTimeout = 100;
    }

    e.$inject = ["$timeout"], t.module("material.core").service("$mdLiveAnnouncer", e), e.prototype.announce = function (e, t) {
      t || (t = "polite");
      var n = this;
      n._liveElement.textContent = "", n._liveElement.setAttribute("aria-live", t), n._$timeout(function () {
        n._liveElement.textContent = e;
      }, n._announceTimeout, !1);
    }, e.prototype._createLiveElement = function () {
      var e = document.createElement("div");
      return e.classList.add("md-visually-hidden"), e.setAttribute("role", "status"), e.setAttribute("aria-atomic", "true"), e.setAttribute("aria-live", "polite"), document.body.appendChild(e), e;
    };
  }(), function () {
    t.module("material.core.meta", []).provider("$$mdMeta", function () {
      function e(e) {
        if (r[e]) return !0;
        var n = document.getElementsByName(e)[0];
        return !!n && (r[e] = t.element(n), !0);
      }

      function n(n, o) {
        if (e(n), r[n]) r[n].attr("content", o);else {
          var a = t.element('<meta name="' + n + '" content="' + o + '"/>');
          i.append(a), r[n] = a;
        }
        return function () {
          r[n].attr("content", ""), r[n].remove(), delete r[n];
        };
      }

      function o(t) {
        if (!e(t)) throw Error("$$mdMeta: could not find a meta tag with the name '" + t + "'");
        return r[t].attr("content");
      }

      var i = t.element(document.head),
          r = {},
          a = {
        setMeta: n,
        getMeta: o
      };
      return t.extend({}, a, {
        $get: function () {
          return a;
        }
      });
    });
  }(), function () {
    function e(e, o) {
      function i(e) {
        return e && "" !== e;
      }

      var r,
          a = [],
          d = {};
      return r = {
        notFoundError: function (t, n) {
          e.error((n || "") + "No instance found for handle", t);
        },
        getInstances: function () {
          return a;
        },
        get: function (e) {
          if (!i(e)) return null;
          var t, n, o;

          for (t = 0, n = a.length; t < n; t++) if (o = a[t], o.$$mdHandle === e) return o;

          return null;
        },
        register: function (e, n) {
          function o() {
            var t = a.indexOf(e);
            t !== -1 && a.splice(t, 1);
          }

          function i() {
            var t = d[n];
            t && (t.forEach(function (t) {
              t.resolve(e);
            }), delete d[n]);
          }

          return n ? (e.$$mdHandle = n, a.push(e), i(), o) : t.noop;
        },
        when: function (e) {
          if (i(e)) {
            var t = o.defer(),
                a = r.get(e);
            return a ? t.resolve(a) : (d[e] === n && (d[e] = []), d[e].push(t)), t.promise;
          }

          return o.reject("Invalid `md-component-id` value.");
        }
      };
    }

    e.$inject = ["$log", "$q"], t.module("material.core").factory("$mdComponentRegistry", e);
  }(), function () {
    !function () {
      function e(e) {
        function n(e) {
          return e.hasClass("md-icon-button") ? {
            isMenuItem: e.hasClass("md-menu-item"),
            fitRipple: !0,
            center: !0
          } : {
            isMenuItem: e.hasClass("md-menu-item"),
            dimBackground: !0
          };
        }

        return {
          attach: function (o, i, r) {
            return r = t.extend(n(i), r), e.attach(o, i, r);
          }
        };
      }

      e.$inject = ["$mdInkRipple"], t.module("material.core").factory("$mdButtonInkRipple", e);
    }();
  }(), function () {
    !function () {
      function e(e) {
        function n(n, o, i) {
          return e.attach(n, o, t.extend({
            center: !0,
            dimBackground: !1,
            fitRipple: !0
          }, i));
        }

        return {
          attach: n
        };
      }

      e.$inject = ["$mdInkRipple"], t.module("material.core").factory("$mdCheckboxInkRipple", e);
    }();
  }(), function () {
    !function () {
      function e(e) {
        function n(n, o, i) {
          return e.attach(n, o, t.extend({
            center: !1,
            dimBackground: !0,
            outline: !1,
            rippleSize: "full"
          }, i));
        }

        return {
          attach: n
        };
      }

      e.$inject = ["$mdInkRipple"], t.module("material.core").factory("$mdListInkRipple", e);
    }();
  }(), function () {
    function e(e, n) {
      return {
        controller: t.noop,
        link: function (t, o, i) {
          i.hasOwnProperty("mdInkRippleCheckbox") ? n.attach(t, o) : e.attach(t, o);
        }
      };
    }

    function n() {
      function e() {
        n = !0;
      }

      var n = !1;
      return {
        disableInkRipple: e,
        $get: ["$injector", function (e) {
          function i(i, r, a) {
            return n || r.controller("mdNoInk") ? t.noop : e.instantiate(o, {
              $scope: i,
              $element: r,
              rippleOptions: a
            });
          }

          return {
            attach: i
          };
        }]
      };
    }

    function o(e, n, o, i, r, a, d) {
      this.$window = i, this.$timeout = r, this.$mdUtil = a, this.$mdColorUtil = d, this.$scope = e, this.$element = n, this.options = o, this.mousedown = !1, this.ripples = [], this.timeout = null, this.lastRipple = null, a.valueOnUse(this, "container", this.createContainer), this.$element.addClass("md-ink-ripple"), (n.controller("mdInkRipple") || {}).createRipple = t.bind(this, this.createRipple), (n.controller("mdInkRipple") || {}).setColor = t.bind(this, this.color), this.bindEvents();
    }

    function i(e, n) {
      (e.mousedown || e.lastRipple) && (e.mousedown = !1, e.$mdUtil.nextTick(t.bind(e, n), !1));
    }

    function r() {
      return {
        controller: t.noop
      };
    }

    o.$inject = ["$scope", "$element", "rippleOptions", "$window", "$timeout", "$mdUtil", "$mdColorUtil"], e.$inject = ["$mdButtonInkRipple", "$mdCheckboxInkRipple"], t.module("material.core").provider("$mdInkRipple", n).directive("mdInkRipple", e).directive("mdNoInk", r).directive("mdNoBar", r).directive("mdNoStretch", r);
    var a = 450;
    o.prototype.color = function (e) {
      function n() {
        var e = o.options && o.options.colorElement ? o.options.colorElement : [],
            t = e.length ? e[0] : o.$element[0];
        return t ? o.$window.getComputedStyle(t).color : "rgb(0,0,0)";
      }

      var o = this;
      return t.isDefined(e) && (o._color = o._parseColor(e)), o._color || o._parseColor(o.inkRipple()) || o._parseColor(n());
    }, o.prototype.calculateColor = function () {
      return this.color();
    }, o.prototype._parseColor = function (e, t) {
      t = t || 1;
      var n = this.$mdColorUtil;
      if (e) return 0 === e.indexOf("rgba") ? e.replace(/\d?\.?\d*\s*\)\s*$/, (.1 * t).toString() + ")") : 0 === e.indexOf("rgb") ? n.rgbToRgba(e) : 0 === e.indexOf("#") ? n.hexToRgba(e) : void 0;
    }, o.prototype.bindEvents = function () {
      this.$element.on("mousedown", t.bind(this, this.handleMousedown)), this.$element.on("mouseup touchend", t.bind(this, this.handleMouseup)), this.$element.on("mouseleave", t.bind(this, this.handleMouseup)), this.$element.on("touchmove", t.bind(this, this.handleTouchmove));
    }, o.prototype.handleMousedown = function (e) {
      if (!this.mousedown) if (e.hasOwnProperty("originalEvent") && (e = e.originalEvent), this.mousedown = !0, this.options.center) this.createRipple(this.container.prop("clientWidth") / 2, this.container.prop("clientWidth") / 2);else if (e.srcElement !== this.$element[0]) {
        var t = this.$element[0].getBoundingClientRect(),
            n = e.clientX - t.left,
            o = e.clientY - t.top;
        this.createRipple(n, o);
      } else this.createRipple(e.offsetX, e.offsetY);
    }, o.prototype.handleMouseup = function () {
      i(this, this.clearRipples);
    }, o.prototype.handleTouchmove = function () {
      i(this, this.deleteRipples);
    }, o.prototype.deleteRipples = function () {
      for (var e = 0; e < this.ripples.length; e++) this.ripples[e].remove();
    }, o.prototype.clearRipples = function () {
      for (var e = 0; e < this.ripples.length; e++) this.fadeInComplete(this.ripples[e]);
    }, o.prototype.createContainer = function () {
      var e = t.element('<div class="md-ripple-container"></div>');
      return this.$element.append(e), e;
    }, o.prototype.clearTimeout = function () {
      this.timeout && (this.$timeout.cancel(this.timeout), this.timeout = null);
    }, o.prototype.isRippleAllowed = function () {
      var e = this.$element[0];

      do {
        if (!e.tagName || "BODY" === e.tagName) break;

        if (e && t.isFunction(e.hasAttribute)) {
          if (e.hasAttribute("disabled")) return !1;
          if ("false" === this.inkRipple() || "0" === this.inkRipple()) return !1;
        }
      } while (e = e.parentNode);

      return !0;
    }, o.prototype.inkRipple = function () {
      return this.$element.attr("md-ink-ripple");
    }, o.prototype.createRipple = function (e, n) {
      function o(e, t, n) {
        return e ? Math.max(t, n) : Math.sqrt(Math.pow(t, 2) + Math.pow(n, 2));
      }

      if (this.isRippleAllowed()) {
        var i = this,
            r = i.$mdColorUtil,
            d = t.element('<div class="md-ripple"></div>'),
            s = this.$element.prop("clientWidth"),
            c = this.$element.prop("clientHeight"),
            l = 2 * Math.max(Math.abs(s - e), e),
            m = 2 * Math.max(Math.abs(c - n), n),
            u = o(this.options.fitRipple, l, m),
            p = this.calculateColor();
        d.css({
          left: e + "px",
          top: n + "px",
          background: "black",
          width: u + "px",
          height: u + "px",
          backgroundColor: r.rgbaToRgb(p),
          borderColor: r.rgbaToRgb(p)
        }), this.lastRipple = d, this.clearTimeout(), this.timeout = this.$timeout(function () {
          i.clearTimeout(), i.mousedown || i.fadeInComplete(d);
        }, .35 * a, !1), this.options.dimBackground && this.container.css({
          backgroundColor: p
        }), this.container.append(d), this.ripples.push(d), d.addClass("md-ripple-placed"), this.$mdUtil.nextTick(function () {
          d.addClass("md-ripple-scaled md-ripple-active"), i.$timeout(function () {
            i.clearRipples();
          }, a, !1);
        }, !1);
      }
    }, o.prototype.fadeInComplete = function (e) {
      this.lastRipple === e ? this.timeout || this.mousedown || this.removeRipple(e) : this.removeRipple(e);
    }, o.prototype.removeRipple = function (e) {
      var t = this,
          n = this.ripples.indexOf(e);
      n < 0 || (this.ripples.splice(this.ripples.indexOf(e), 1), e.removeClass("md-ripple-active"), e.addClass("md-ripple-remove"), 0 === this.ripples.length && this.container.css({
        backgroundColor: ""
      }), this.$timeout(function () {
        t.fadeOutComplete(e);
      }, a, !1));
    }, o.prototype.fadeOutComplete = function (e) {
      e.remove(), this.lastRipple = null;
    };
  }(), function () {
    !function () {
      function e(e) {
        function n(n, o, i) {
          return e.attach(n, o, t.extend({
            center: !1,
            dimBackground: !0,
            outline: !1,
            rippleSize: "full"
          }, i));
        }

        return {
          attach: n
        };
      }

      e.$inject = ["$mdInkRipple"], t.module("material.core").factory("$mdTabInkRipple", e);
    }();
  }(), function () {
    t.module("material.core.theming.palette", []).constant("$mdColorPalette", {
      red: {
        50: "#ffebee",
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336",
        600: "#e53935",
        700: "#d32f2f",
        800: "#c62828",
        900: "#b71c1c",
        A100: "#ff8a80",
        A200: "#ff5252",
        A400: "#ff1744",
        A700: "#d50000",
        contrastDefaultColor: "light",
        contrastDarkColors: "50 100 200 300 A100",
        contrastStrongLightColors: "400 500 600 700 A200 A400 A700"
      },
      pink: {
        50: "#fce4ec",
        100: "#f8bbd0",
        200: "#f48fb1",
        300: "#f06292",
        400: "#ec407a",
        500: "#e91e63",
        600: "#d81b60",
        700: "#c2185b",
        800: "#ad1457",
        900: "#880e4f",
        A100: "#ff80ab",
        A200: "#ff4081",
        A400: "#f50057",
        A700: "#c51162",
        contrastDefaultColor: "light",
        contrastDarkColors: "50 100 200 A100",
        contrastStrongLightColors: "500 600 A200 A400 A700"
      },
      purple: {
        50: "#f3e5f5",
        100: "#e1bee7",
        200: "#ce93d8",
        300: "#ba68c8",
        400: "#ab47bc",
        500: "#9c27b0",
        600: "#8e24aa",
        700: "#7b1fa2",
        800: "#6a1b9a",
        900: "#4a148c",
        A100: "#ea80fc",
        A200: "#e040fb",
        A400: "#d500f9",
        A700: "#aa00ff",
        contrastDefaultColor: "light",
        contrastDarkColors: "50 100 200 A100",
        contrastStrongLightColors: "300 400 A200 A400 A700"
      },
      "deep-purple": {
        50: "#ede7f6",
        100: "#d1c4e9",
        200: "#b39ddb",
        300: "#9575cd",
        400: "#7e57c2",
        500: "#673ab7",
        600: "#5e35b1",
        700: "#512da8",
        800: "#4527a0",
        900: "#311b92",
        A100: "#b388ff",
        A200: "#7c4dff",
        A400: "#651fff",
        A700: "#6200ea",
        contrastDefaultColor: "light",
        contrastDarkColors: "50 100 200 A100",
        contrastStrongLightColors: "300 400 A200"
      },
      indigo: {
        50: "#e8eaf6",
        100: "#c5cae9",
        200: "#9fa8da",
        300: "#7986cb",
        400: "#5c6bc0",
        500: "#3f51b5",
        600: "#3949ab",
        700: "#303f9f",
        800: "#283593",
        900: "#1a237e",
        A100: "#8c9eff",
        A200: "#536dfe",
        A400: "#3d5afe",
        A700: "#304ffe",
        contrastDefaultColor: "light",
        contrastDarkColors: "50 100 200 A100",
        contrastStrongLightColors: "300 400 A200 A400"
      },
      blue: {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#2196f3",
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
        A100: "#82b1ff",
        A200: "#448aff",
        A400: "#2979ff",
        A700: "#2962ff",
        contrastDefaultColor: "light",
        contrastDarkColors: "50 100 200 300 400 A100",
        contrastStrongLightColors: "500 600 700 A200 A400 A700"
      },
      "light-blue": {
        50: "#e1f5fe",
        100: "#b3e5fc",
        200: "#81d4fa",
        300: "#4fc3f7",
        400: "#29b6f6",
        500: "#03a9f4",
        600: "#039be5",
        700: "#0288d1",
        800: "#0277bd",
        900: "#01579b",
        A100: "#80d8ff",
        A200: "#40c4ff",
        A400: "#00b0ff",
        A700: "#0091ea",
        contrastDefaultColor: "dark",
        contrastLightColors: "600 700 800 900 A700",
        contrastStrongLightColors: "600 700 800 A700"
      },
      cyan: {
        50: "#e0f7fa",
        100: "#b2ebf2",
        200: "#80deea",
        300: "#4dd0e1",
        400: "#26c6da",
        500: "#00bcd4",
        600: "#00acc1",
        700: "#0097a7",
        800: "#00838f",
        900: "#006064",
        A100: "#84ffff",
        A200: "#18ffff",
        A400: "#00e5ff",
        A700: "#00b8d4",
        contrastDefaultColor: "dark",
        contrastLightColors: "700 800 900",
        contrastStrongLightColors: "700 800 900"
      },
      teal: {
        50: "#e0f2f1",
        100: "#b2dfdb",
        200: "#80cbc4",
        300: "#4db6ac",
        400: "#26a69a",
        500: "#009688",
        600: "#00897b",
        700: "#00796b",
        800: "#00695c",
        900: "#004d40",
        A100: "#a7ffeb",
        A200: "#64ffda",
        A400: "#1de9b6",
        A700: "#00bfa5",
        contrastDefaultColor: "dark",
        contrastLightColors: "500 600 700 800 900",
        contrastStrongLightColors: "500 600 700"
      },
      green: {
        50: "#e8f5e9",
        100: "#c8e6c9",
        200: "#a5d6a7",
        300: "#81c784",
        400: "#66bb6a",
        500: "#4caf50",
        600: "#43a047",
        700: "#388e3c",
        800: "#2e7d32",
        900: "#1b5e20",
        A100: "#b9f6ca",
        A200: "#69f0ae",
        A400: "#00e676",
        A700: "#00c853",
        contrastDefaultColor: "dark",
        contrastLightColors: "500 600 700 800 900",
        contrastStrongLightColors: "500 600 700"
      },
      "light-green": {
        50: "#f1f8e9",
        100: "#dcedc8",
        200: "#c5e1a5",
        300: "#aed581",
        400: "#9ccc65",
        500: "#8bc34a",
        600: "#7cb342",
        700: "#689f38",
        800: "#558b2f",
        900: "#33691e",
        A100: "#ccff90",
        A200: "#b2ff59",
        A400: "#76ff03",
        A700: "#64dd17",
        contrastDefaultColor: "dark",
        contrastLightColors: "700 800 900",
        contrastStrongLightColors: "700 800 900"
      },
      lime: {
        50: "#f9fbe7",
        100: "#f0f4c3",
        200: "#e6ee9c",
        300: "#dce775",
        400: "#d4e157",
        500: "#cddc39",
        600: "#c0ca33",
        700: "#afb42b",
        800: "#9e9d24",
        900: "#827717",
        A100: "#f4ff81",
        A200: "#eeff41",
        A400: "#c6ff00",
        A700: "#aeea00",
        contrastDefaultColor: "dark",
        contrastLightColors: "900",
        contrastStrongLightColors: "900"
      },
      yellow: {
        50: "#fffde7",
        100: "#fff9c4",
        200: "#fff59d",
        300: "#fff176",
        400: "#ffee58",
        500: "#ffeb3b",
        600: "#fdd835",
        700: "#fbc02d",
        800: "#f9a825",
        900: "#f57f17",
        A100: "#ffff8d",
        A200: "#ffff00",
        A400: "#ffea00",
        A700: "#ffd600",
        contrastDefaultColor: "dark"
      },
      amber: {
        50: "#fff8e1",
        100: "#ffecb3",
        200: "#ffe082",
        300: "#ffd54f",
        400: "#ffca28",
        500: "#ffc107",
        600: "#ffb300",
        700: "#ffa000",
        800: "#ff8f00",
        900: "#ff6f00",
        A100: "#ffe57f",
        A200: "#ffd740",
        A400: "#ffc400",
        A700: "#ffab00",
        contrastDefaultColor: "dark"
      },
      orange: {
        50: "#fff3e0",
        100: "#ffe0b2",
        200: "#ffcc80",
        300: "#ffb74d",
        400: "#ffa726",
        500: "#ff9800",
        600: "#fb8c00",
        700: "#f57c00",
        800: "#ef6c00",
        900: "#e65100",
        A100: "#ffd180",
        A200: "#ffab40",
        A400: "#ff9100",
        A700: "#ff6d00",
        contrastDefaultColor: "dark",
        contrastLightColors: "800 900",
        contrastStrongLightColors: "800 900"
      },
      "deep-orange": {
        50: "#fbe9e7",
        100: "#ffccbc",
        200: "#ffab91",
        300: "#ff8a65",
        400: "#ff7043",
        500: "#ff5722",
        600: "#f4511e",
        700: "#e64a19",
        800: "#d84315",
        900: "#bf360c",
        A100: "#ff9e80",
        A200: "#ff6e40",
        A400: "#ff3d00",
        A700: "#dd2c00",
        contrastDefaultColor: "light",
        contrastDarkColors: "50 100 200 300 400 A100 A200",
        contrastStrongLightColors: "500 600 700 800 900 A400 A700"
      },
      brown: {
        50: "#efebe9",
        100: "#d7ccc8",
        200: "#bcaaa4",
        300: "#a1887f",
        400: "#8d6e63",
        500: "#795548",
        600: "#6d4c41",
        700: "#5d4037",
        800: "#4e342e",
        900: "#3e2723",
        A100: "#d7ccc8",
        A200: "#bcaaa4",
        A400: "#8d6e63",
        A700: "#5d4037",
        contrastDefaultColor: "light",
        contrastDarkColors: "50 100 200 A100 A200",
        contrastStrongLightColors: "300 400"
      },
      grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#ffffff",
        A200: "#000000",
        A400: "#303030",
        A700: "#616161",
        contrastDefaultColor: "dark",
        contrastLightColors: "600 700 800 900 A200 A400 A700"
      },
      "blue-grey": {
        50: "#eceff1",
        100: "#cfd8dc",
        200: "#b0bec5",
        300: "#90a4ae",
        400: "#78909c",
        500: "#607d8b",
        600: "#546e7a",
        700: "#455a64",
        800: "#37474f",
        900: "#263238",
        A100: "#cfd8dc",
        A200: "#b0bec5",
        A400: "#78909c",
        A700: "#455a64",
        contrastDefaultColor: "light",
        contrastDarkColors: "50 100 200 300 A100 A200",
        contrastStrongLightColors: "400 500 700"
      }
    });
  }(), function () {
    !function (e) {
      function t(e) {
        var t = !!document.querySelector("[md-themes-disabled]");
        e.disableTheming(t);
      }

      function o(t, o) {
        function i(e, t) {
          return t = t || {}, p[e] = a(e, t), h;
        }

        function r(t, n) {
          return a(t, e.extend({}, p[t] || {}, n));
        }

        function a(e, t) {
          var n = w.filter(function (e) {
            return !t[e];
          });
          if (n.length) throw new Error("Missing colors %1 in palette %2!".replace("%1", n.join(", ")).replace("%2", e));
          return t;
        }

        function s(t, n) {
          if (E[t]) return E[t];
          n = n || "default";
          var o = "string" == typeof n ? E[n] : n,
              i = new l(t);
          return o && e.forEach(o.colors, function (t, n) {
            i.colors[n] = {
              name: t.name,
              hues: e.extend({}, t.hues)
            };
          }), E[t] = i, i;
        }

        function l(t) {
          function n(t) {
            if (t = 0 === arguments.length || !!t, t !== o.isDark) {
              o.isDark = t, o.foregroundPalette = o.isDark ? g : f, o.foregroundShadow = o.isDark ? b : v;
              var n = o.isDark ? A : T,
                  i = o.isDark ? T : A;
              return e.forEach(n, function (e, t) {
                var n = o.colors[t],
                    r = i[t];
                if (n) for (var a in n.hues) n.hues[a] === r[a] && (n.hues[a] = e[a]);
              }), o;
            }
          }

          var o = this;
          o.name = t, o.colors = {}, o.dark = n, n(!1), y.forEach(function (t) {
            var n = (o.isDark ? A : T)[t];
            o[t + "Palette"] = function (i, r) {
              var a = o.colors[t] = {
                name: i,
                hues: e.extend({}, n, r)
              };
              return Object.keys(a.hues).forEach(function (e) {
                if (!n[e]) throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1", e).replace("%2", o.name).replace("%3", i).replace("%4", Object.keys(n).join(", ")));
              }), Object.keys(a.hues).map(function (e) {
                return a.hues[e];
              }).forEach(function (e) {
                if (w.indexOf(e) == -1) throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1", e).replace("%2", o.name).replace("%3", t).replace("%4", i).replace("%5", w.join(", ")));
              }), o;
            }, o[t + "Color"] = function () {
              var e = Array.prototype.slice.call(arguments);
              return console.warn("$mdThemingProviderTheme." + t + "Color() has been deprecated. Use $mdThemingProviderTheme." + t + "Palette() instead."), o[t + "Palette"].apply(o, e);
            };
          });
        }

        function m(t, o, i, r) {
          function a(e) {
            return e === n || "" === e || l.THEMES[e] !== n;
          }

          function d(e, t) {
            function n() {
              return d && d.$mdTheme || ("default" == C ? "" : C);
            }

            function i(t) {
              if (t) {
                a(t) || r.warn("Attempted to use unregistered theme '" + t + "'. Register it with $mdThemingProvider.theme().");
                var n = e.data("$mdThemeName");
                n && e.removeClass("md-" + n + "-theme"), e.addClass("md-" + t + "-theme"), e.data("$mdThemeName", t), d && e.data("$mdThemeController", d);
              }
            }

            var d = t.controller("mdTheme") || e.data("$mdThemeController");
            if (i(n()), d) var s = $ || d.$shouldWatch || o.parseAttributeBoolean(e.attr("md-theme-watch")),
                c = d.registerChanges(function (t) {
              i(t), s ? e.on("$destroy", c) : c();
            });
          }

          var l = function (e, o) {
            o === n && (o = e, e = n), e === n && (e = t), l.inherit(o, o);
          };

          return Object.defineProperty(l, "THEMES", {
            get: function () {
              return e.extend({}, E);
            }
          }), Object.defineProperty(l, "PALETTES", {
            get: function () {
              return e.extend({}, p);
            }
          }), Object.defineProperty(l, "ALWAYS_WATCH", {
            get: function () {
              return $;
            }
          }), l.inherit = d, l.registered = a, l.defaultTheme = function () {
            return C;
          }, l.generateTheme = function (e) {
            c(E[e], e, k.nonce);
          }, l.defineTheme = function (e, t) {
            t = t || {};
            var n = s(e);
            return t.primary && n.primaryPalette(t.primary), t.accent && n.accentPalette(t.accent), t.warn && n.warnPalette(t.warn), t.background && n.backgroundPalette(t.background), t.dark && n.dark(), this.generateTheme(e), i.resolve(e);
          }, l.setBrowserColor = _, l;
        }

        m.$inject = ["$rootScope", "$mdUtil", "$q", "$log"], p = {};
        var h,
            E = {},
            $ = !1,
            C = "default";
        e.extend(p, t);

        var M = function (e) {
          var t = o.setMeta("theme-color", e),
              n = o.setMeta("msapplication-navbutton-color", e);
          return function () {
            t(), n();
          };
        },
            _ = function (t) {
          t = e.isObject(t) ? t : {};
          var n = t.theme || "default",
              o = t.hue || "800",
              i = p[t.palette] || p[E[n].colors[t.palette || "primary"].name],
              r = e.isObject(i[o]) ? i[o].hex : i[o];
          return M(r);
        };

        return h = {
          definePalette: i,
          extendPalette: r,
          theme: s,
          configuration: function () {
            return e.extend({}, k, {
              defaultTheme: C,
              alwaysWatchTheme: $,
              registeredStyles: [].concat(k.registeredStyles)
            });
          },
          disableTheming: function (t) {
            k.disableTheming = e.isUndefined(t) || !!t;
          },
          registerStyles: function (e) {
            k.registeredStyles.push(e);
          },
          setNonce: function (e) {
            k.nonce = e;
          },
          generateThemesOnDemand: function (e) {
            k.generateOnDemand = e;
          },
          setDefaultTheme: function (e) {
            C = e;
          },
          alwaysWatchTheme: function (e) {
            $ = e;
          },
          enableBrowserColor: _,
          $get: m,
          _LIGHT_DEFAULT_HUES: T,
          _DARK_DEFAULT_HUES: A,
          _PALETTES: p,
          _THEMES: E,
          _parseRules: d,
          _rgba: u
        };
      }

      function i(t, n, o, i, r, a) {
        return {
          priority: 101,
          link: {
            pre: function (d, s, c) {
              var l = [],
                  m = n.startSymbol(),
                  u = n.endSymbol(),
                  p = c.mdTheme.trim(),
                  h = p.substr(0, m.length) === m && p.lastIndexOf(u) === p.length - u.length,
                  f = "::",
                  g = c.mdTheme.split(m).join("").split(u).join("").trim().substr(0, f.length) === f,
                  b = {
                registerChanges: function (t, n) {
                  return n && (t = e.bind(n, t)), l.push(t), function () {
                    var e = l.indexOf(t);
                    e > -1 && l.splice(e, 1);
                  };
                },
                $setTheme: function (e) {
                  t.registered(e) || a.warn("attempted to use unregistered theme '" + e + "'"), b.$mdTheme = e;

                  for (var n = l.length; n--;) l[n](e);
                },
                $shouldWatch: i.parseAttributeBoolean(s.attr("md-theme-watch")) || t.ALWAYS_WATCH || h && !g
              };
              s.data("$mdThemeController", b);

              var v = function () {
                var e = n(c.mdTheme)(d);
                return o(e)(d) || e;
              },
                  E = function (t) {
                return "string" == typeof t ? b.$setTheme(t) : void r.when(e.isFunction(t) ? t() : t).then(function (e) {
                  b.$setTheme(e);
                });
              };

              E(v());
              var $ = d.$watch(v, function (e) {
                e && (E(e), b.$shouldWatch || $());
              });
            }
          }
        };
      }

      function r() {
        return k.disableTheming = !0, {
          restrict: "A",
          priority: "900"
        };
      }

      function a(e) {
        return e;
      }

      function d(t, n, o) {
        l(t, n), o = o.replace(/THEME_NAME/g, t.name);
        var i = [],
            r = t.colors[n],
            a = new RegExp("\\.md-" + t.name + "-theme", "g"),
            d = new RegExp("('|\")?{{\\s*(" + n + ")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?", "g"),
            s = /'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow|default)-?(\d\.?\d*)?(contrast)?\s*\}\}'?"?/g,
            c = p[r.name];
        return o = o.replace(s, function (e, n, o, i, r) {
          return "foreground" === n ? "shadow" == o ? t.foregroundShadow : t.foregroundPalette[o] || t.foregroundPalette[1] : (0 !== o.indexOf("hue") && "default" !== o || (o = t.colors[n].hues[o]), u((p[t.colors[n].name][o] || "")[r ? "contrast" : "value"], i));
        }), e.forEach(r.hues, function (e, n) {
          var r = o.replace(d, function (t, n, o, i, r) {
            return u(c[e]["color" === i ? "value" : "contrast"], r);
          });

          if ("default" !== n && (r = r.replace(a, ".md-" + t.name + "-theme.md-" + n)), "default" == t.name) {
            var s = /((?:\s|>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)*)\.md-default-theme((?:\s|>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)*)/g;
            r = r.replace(s, function (e, t, n) {
              return e + ", " + t + n;
            });
          }

          i.push(r);
        }), i;
      }

      function s(t, n) {
        function o(t, n) {
          var o = t.contrastDefaultColor,
              i = t.contrastLightColors || [],
              r = t.contrastStrongLightColors || [],
              a = t.contrastDarkColors || [];
          "string" == typeof i && (i = i.split(" ")), "string" == typeof r && (r = r.split(" ")), "string" == typeof a && (a = a.split(" ")), delete t.contrastDefaultColor, delete t.contrastLightColors, delete t.contrastStrongLightColors, delete t.contrastDarkColors, e.forEach(t, function (n, d) {
            function s() {
              return "light" === o ? a.indexOf(d) > -1 ? E : r.indexOf(d) > -1 ? C : $ : i.indexOf(d) > -1 ? r.indexOf(d) > -1 ? C : $ : E;
            }

            if (!e.isObject(n)) {
              var c = m(n);
              if (!c) throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1", n).replace("%2", t.name).replace("%3", d));
              t[d] = {
                hex: t[d],
                value: c,
                contrast: s()
              };
            }
          });
        }

        var i = document.head,
            r = i ? i.firstElementChild : null,
            a = !k.disableTheming && t.has("$MD_THEME_CSS") ? t.get("$MD_THEME_CSS") : "";

        if (a += k.registeredStyles.join(""), r && 0 !== a.length) {
          e.forEach(p, o);
          var d = a.split(/\}(?!(\}|'|"|;))/).filter(function (e) {
            return e && e.trim().length;
          }).map(function (e) {
            return e.trim() + "}";
          }),
              s = new RegExp("md-(" + y.join("|") + ")", "g");
          y.forEach(function (e) {
            _[e] = "";
          }), d.forEach(function (e) {
            for (var t, n = (e.match(s), 0); t = y[n]; n++) if (e.indexOf(".md-" + t) > -1) return _[t] += e;

            for (n = 0; t = y[n]; n++) if (e.indexOf(t) > -1) return _[t] += e;

            return _[M] += e;
          }), k.generateOnDemand || e.forEach(n.THEMES, function (e) {
            h[e.name] || "default" !== n.defaultTheme() && "default" === e.name || c(e, e.name, k.nonce);
          });
        }
      }

      function c(e, t, n) {
        var o = document.head,
            i = o ? o.firstElementChild : null;
        h[t] || (y.forEach(function (t) {
          for (var r = d(e, t, _[t]); r.length;) {
            var a = r.shift();

            if (a) {
              var s = document.createElement("style");
              s.setAttribute("md-theme-style", ""), n && s.setAttribute("nonce", n), s.appendChild(document.createTextNode(a)), o.insertBefore(s, i);
            }
          }
        }), h[e.name] = !0);
      }

      function l(e, t) {
        if (!p[(e.colors[t] || {}).name]) throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1", e.name).replace("%2", t).replace("%3", Object.keys(p).join(", ")));
      }

      function m(t) {
        if (e.isArray(t) && 3 == t.length) return t;
        if (/^rgb/.test(t)) return t.replace(/(^\s*rgba?\(|\)\s*$)/g, "").split(",").map(function (e, t) {
          return 3 == t ? parseFloat(e, 10) : parseInt(e, 10);
        });

        if ("#" == t.charAt(0) && (t = t.substring(1)), /^([a-fA-F0-9]{3}){1,2}$/g.test(t)) {
          var n = t.length / 3,
              o = t.substr(0, n),
              i = t.substr(n, n),
              r = t.substr(2 * n);
          return 1 === n && (o += o, i += i, r += r), [parseInt(o, 16), parseInt(i, 16), parseInt(r, 16)];
        }
      }

      function u(t, n) {
        return t ? (4 == t.length && (t = e.copy(t), n ? t.pop() : n = t.pop()), n && ("number" == typeof n || "string" == typeof n && n.length) ? "rgba(" + t.join(",") + "," + n + ")" : "rgb(" + t.join(",") + ")") : "rgb('0,0,0')";
      }

      t.$inject = ["$mdThemingProvider"], i.$inject = ["$mdTheming", "$interpolate", "$parse", "$mdUtil", "$q", "$log"], a.$inject = ["$mdTheming"], o.$inject = ["$mdColorPalette", "$$mdMetaProvider"], s.$inject = ["$injector", "$mdTheming"], e.module("material.core.theming", ["material.core.theming.palette", "material.core.meta"]).directive("mdTheme", i).directive("mdThemable", a).directive("mdThemesDisabled", r).provider("$mdTheming", o).config(t).run(s);
      var p,
          h = {},
          f = {
        name: "dark",
        1: "rgba(0,0,0,0.87)",
        2: "rgba(0,0,0,0.54)",
        3: "rgba(0,0,0,0.38)",
        4: "rgba(0,0,0,0.12)"
      },
          g = {
        name: "light",
        1: "rgba(255,255,255,1.0)",
        2: "rgba(255,255,255,0.7)",
        3: "rgba(255,255,255,0.5)",
        4: "rgba(255,255,255,0.12)"
      },
          b = "1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",
          v = "",
          E = m("rgba(0,0,0,0.87)"),
          $ = m("rgba(255,255,255,0.87)"),
          C = m("rgb(255,255,255)"),
          y = ["primary", "accent", "warn", "background"],
          M = "primary",
          T = {
        accent: {
          "default": "A200",
          "hue-1": "A100",
          "hue-2": "A400",
          "hue-3": "A700"
        },
        background: {
          "default": "50",
          "hue-1": "A100",
          "hue-2": "100",
          "hue-3": "300"
        }
      },
          A = {
        background: {
          "default": "A400",
          "hue-1": "800",
          "hue-2": "900",
          "hue-3": "A200"
        }
      };
      y.forEach(function (e) {
        var t = {
          "default": "500",
          "hue-1": "300",
          "hue-2": "800",
          "hue-3": "A100"
        };
        T[e] || (T[e] = t), A[e] || (A[e] = t);
      });
      var w = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "A100", "A200", "A400", "A700"],
          k = {
        disableTheming: !1,
        generateOnDemand: !1,
        registeredStyles: [],
        nonce: null
      },
          _ = {};
    }(e.angular);
  }(), function () {
    function n(n, o, i, r, a) {
      var d;
      return d = {
        translate3d: function (e, t, n, o) {
          function i(n) {
            return a(e, {
              to: n || t,
              addClass: o.transitionOutClass,
              removeClass: o.transitionInClass,
              duration: o.duration
            }).start();
          }

          return a(e, {
            from: t,
            to: n,
            addClass: o.transitionInClass,
            removeClass: o.transitionOutClass,
            duration: o.duration
          }).start().then(function () {
            return i;
          });
        },
        waitTransitionEnd: function (t, n) {
          var a = 3e3;
          return o(function (o, d) {
            function s(e) {
              e && e.target !== t[0] || (e && i.cancel(l), t.off(r.CSS.TRANSITIONEND, s), o());
            }

            function c(n) {
              return n = n || e.getComputedStyle(t[0]), "0s" == n.transitionDuration || !n.transition && !n.transitionProperty;
            }

            n = n || {}, c(n.cachedTransitionStyles) && (a = 0);
            var l = i(s, n.timeout || a);
            t.on(r.CSS.TRANSITIONEND, s);
          });
        },
        calculateTransformValues: function (e, t) {
          function n() {
            var t = e ? e.parent() : null,
                n = t ? t.parent() : null;
            return n ? d.clientRect(n) : null;
          }

          var o = t.element,
              i = t.bounds;

          if (o || i) {
            var r = o ? d.clientRect(o) || n() : d.copyRect(i),
                a = d.copyRect(e[0].getBoundingClientRect()),
                s = d.centerPointFor(a),
                c = d.centerPointFor(r);
            return {
              centerX: c.x - s.x,
              centerY: c.y - s.y,
              scaleX: Math.round(100 * Math.min(.5, r.width / a.width)) / 100,
              scaleY: Math.round(100 * Math.min(.5, r.height / a.height)) / 100
            };
          }

          return {
            centerX: 0,
            centerY: 0,
            scaleX: .5,
            scaleY: .5
          };
        },
        calculateZoomToOrigin: function (e, o) {
          var i = "translate3d( {centerX}px, {centerY}px, 0 ) scale( {scaleX}, {scaleY} )",
              r = t.bind(null, n.supplant, i);
          return r(d.calculateTransformValues(e, o));
        },
        calculateSlideToOrigin: function (e, o) {
          var i = "translate3d( {centerX}px, {centerY}px, 0 )",
              r = t.bind(null, n.supplant, i);
          return r(d.calculateTransformValues(e, o));
        },
        toCss: function (e) {
          function n(e, n, i) {
            t.forEach(n.split(" "), function (e) {
              o[e] = i;
            });
          }

          var o = {},
              i = "left top right bottom width height x y min-width min-height max-width max-height";
          return t.forEach(e, function (e, a) {
            if (!t.isUndefined(e)) if (i.indexOf(a) >= 0) o[a] = e + "px";else switch (a) {
              case "transition":
                n(a, r.CSS.TRANSITION, e);
                break;

              case "transform":
                n(a, r.CSS.TRANSFORM, e);
                break;

              case "transformOrigin":
                n(a, r.CSS.TRANSFORM_ORIGIN, e);
                break;

              case "font-size":
                o["font-size"] = e;
            }
          }), o;
        },
        toTransformCss: function (e, n, o) {
          var i = {};
          return t.forEach(r.CSS.TRANSFORM.split(" "), function (t) {
            i[t] = e;
          }), n && (o = o || "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important", i.transition = o), i;
        },
        copyRect: function (e, n) {
          return e ? (n = n || {}, t.forEach("left top right bottom width height".split(" "), function (t) {
            n[t] = Math.round(e[t]);
          }), n.width = n.width || n.right - n.left, n.height = n.height || n.bottom - n.top, n) : null;
        },
        clientRect: function (e) {
          var n = t.element(e)[0].getBoundingClientRect(),
              o = function (e) {
            return e && e.width > 0 && e.height > 0;
          };

          return o(n) ? d.copyRect(n) : null;
        },
        centerPointFor: function (e) {
          return e ? {
            x: Math.round(e.left + e.width / 2),
            y: Math.round(e.top + e.height / 2)
          } : {
            x: 0,
            y: 0
          };
        }
      };
    }

    t.module("material.core").factory("$$mdAnimate", ["$q", "$timeout", "$mdConstant", "$animateCss", function (e, t, o, i) {
      return function (r) {
        return n(r, e, t, o, i);
      };
    }]);
  }(), function () {
    t.version.minor >= 4 ? t.module("material.core.animate", []) : !function () {
      function e(e) {
        return e.replace(/-[a-z]/g, function (e) {
          return e.charAt(1).toUpperCase();
        });
      }

      var n = t.forEach,
          o = t.isDefined(document.documentElement.style.WebkitAppearance),
          i = o ? "-webkit-" : "",
          r = (o ? "webkitTransitionEnd " : "") + "transitionend",
          a = (o ? "webkitAnimationEnd " : "") + "animationend",
          d = ["$document", function (e) {
        return function () {
          return e[0].body.clientWidth + 1;
        };
      }],
          s = ["$$rAF", function (e) {
        return function () {
          var t = !1;
          return e(function () {
            t = !0;
          }), function (n) {
            t ? n() : e(n);
          };
        };
      }],
          c = ["$q", "$$rAFMutex", function (e, o) {
        function i(e) {
          this.setHost(e), this._doneCallbacks = [], this._runInAnimationFrame = o(), this._state = 0;
        }

        var r = 0,
            a = 1,
            d = 2;
        return i.prototype = {
          setHost: function (e) {
            this.host = e || {};
          },
          done: function (e) {
            this._state === d ? e() : this._doneCallbacks.push(e);
          },
          progress: t.noop,
          getPromise: function () {
            if (!this.promise) {
              var t = this;
              this.promise = e(function (e, n) {
                t.done(function (t) {
                  t === !1 ? n() : e();
                });
              });
            }

            return this.promise;
          },
          then: function (e, t) {
            return this.getPromise().then(e, t);
          },
          "catch": function (e) {
            return this.getPromise()["catch"](e);
          },
          "finally": function (e) {
            return this.getPromise()["finally"](e);
          },
          pause: function () {
            this.host.pause && this.host.pause();
          },
          resume: function () {
            this.host.resume && this.host.resume();
          },
          end: function () {
            this.host.end && this.host.end(), this._resolve(!0);
          },
          cancel: function () {
            this.host.cancel && this.host.cancel(), this._resolve(!1);
          },
          complete: function (e) {
            var t = this;
            t._state === r && (t._state = a, t._runInAnimationFrame(function () {
              t._resolve(e);
            }));
          },
          _resolve: function (e) {
            this._state !== d && (n(this._doneCallbacks, function (t) {
              t(e);
            }), this._doneCallbacks.length = 0, this._state = d);
          }
        }, i.all = function (e, t) {
          function o(n) {
            r = r && n, ++i === e.length && t(r);
          }

          var i = 0,
              r = !0;
          n(e, function (e) {
            e.done(o);
          });
        }, i;
      }];
      t.module("material.core.animate", []).factory("$$forceReflow", d).factory("$$AnimateRunner", c).factory("$$rAFMutex", s).factory("$animateCss", ["$window", "$$rAF", "$$AnimateRunner", "$$forceReflow", "$$jqLite", "$timeout", "$animate", function (t, d, s, c, l, m, u) {
        function p(o, d) {
          var c = [],
              l = C(o),
              p = l && u.enabled(),
              g = !1,
              M = !1;
          p && (d.transitionStyle && c.push([i + "transition", d.transitionStyle]), d.keyframeStyle && c.push([i + "animation", d.keyframeStyle]), d.delay && c.push([i + "transition-delay", d.delay + "s"]), d.duration && c.push([i + "transition-duration", d.duration + "s"]), g = d.keyframeStyle || d.to && (d.duration > 0 || d.transitionStyle), M = !!d.addClass || !!d.removeClass, y(o, !0));
          var T = p && (g || M);
          E(o, d);
          var A,
              w,
              k = !1;
          return {
            close: t.close,
            start: function () {
              function t() {
                if (!k) return k = !0, A && w && o.off(A, w), h(o, d), v(o, d), n(c, function (t) {
                  l.style[e(t[0])] = "";
                }), u.complete(!0), u;
              }

              var u = new s();
              return b(function () {
                if (y(o, !1), !T) return t();
                n(c, function (t) {
                  var n = t[0],
                      o = t[1];
                  l.style[e(n)] = o;
                }), h(o, d);
                var s = f(o);
                if (0 === s.duration) return t();
                var u = [];
                d.easing && (s.transitionDuration && u.push([i + "transition-timing-function", d.easing]), s.animationDuration && u.push([i + "animation-timing-function", d.easing])), d.delay && s.animationDelay && u.push([i + "animation-delay", d.delay + "s"]), d.duration && s.animationDuration && u.push([i + "animation-duration", d.duration + "s"]), n(u, function (t) {
                  var n = t[0],
                      o = t[1];
                  l.style[e(n)] = o, c.push(t);
                });
                var p = s.delay,
                    g = 1e3 * p,
                    b = s.duration,
                    v = 1e3 * b,
                    E = Date.now();
                A = [], s.transitionDuration && A.push(r), s.animationDuration && A.push(a), A = A.join(" "), w = function (e) {
                  e.stopPropagation();
                  var n = e.originalEvent || e,
                      o = n.timeStamp || Date.now(),
                      i = parseFloat(n.elapsedTime.toFixed(3));
                  Math.max(o - E, 0) >= g && i >= b && t();
                }, o.on(A, w), $(o, d), m(t, g + 1.5 * v, !1);
              }), u;
            }
          };
        }

        function h(e, t) {
          t.addClass && (l.addClass(e, t.addClass), t.addClass = null), t.removeClass && (l.removeClass(e, t.removeClass), t.removeClass = null);
        }

        function f(e) {
          function n(e) {
            return o ? "Webkit" + e.charAt(0).toUpperCase() + e.substr(1) : e;
          }

          var i = C(e),
              r = t.getComputedStyle(i),
              a = g(r[n("transitionDuration")]),
              d = g(r[n("animationDuration")]),
              s = g(r[n("transitionDelay")]),
              c = g(r[n("animationDelay")]);
          d *= parseInt(r[n("animationIterationCount")], 10) || 1;
          var l = Math.max(d, a),
              m = Math.max(c, s);
          return {
            duration: l,
            delay: m,
            animationDuration: d,
            transitionDuration: a,
            animationDelay: c,
            transitionDelay: s
          };
        }

        function g(e) {
          var t = 0,
              o = (e || "").split(/\s*,\s*/);
          return n(o, function (e) {
            "s" == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)), e = parseFloat(e) || 0, t = t ? Math.max(e, t) : e;
          }), t;
        }

        function b(e) {
          M && M(), T.push(e), M = d(function () {
            M = null;

            for (var e = c(), t = 0; t < T.length; t++) T[t](e);

            T.length = 0;
          });
        }

        function v(e, t) {
          E(e, t), $(e, t);
        }

        function E(e, t) {
          t.from && (e.css(t.from), t.from = null);
        }

        function $(e, t) {
          t.to && (e.css(t.to), t.to = null);
        }

        function C(e) {
          for (var t = 0; t < e.length; t++) if (1 === e[t].nodeType) return e[t];
        }

        function y(t, n) {
          var o = C(t),
              r = e(i + "transition-delay");
          o.style[r] = n ? "-9999s" : "";
        }

        var M,
            T = [];
        return p;
      }]);
    }();
  }(), function () {
    t.module("material.components.autocomplete", ["material.core", "material.components.icon", "material.components.virtualRepeat"]);
  }(), function () {
    t.module("material.components.backdrop", ["material.core"]).directive("mdBackdrop", ["$mdTheming", "$mdUtil", "$animate", "$rootElement", "$window", "$log", "$$rAF", "$document", function (e, n, o, i, r, a, d, s) {
      function c(c, m, u) {
        function p() {
          var e = parseInt(h.height, 10) + Math.abs(parseInt(h.top, 10));
          m.css("height", e + "px");
        }

        o.pin && o.pin(m, i);
        var h;
        d(function () {
          if (h = r.getComputedStyle(s[0].body), "fixed" === h.position) {
            var o = n.debounce(function () {
              h = r.getComputedStyle(s[0].body), p();
            }, 60, null, !1);
            p(), t.element(r).on("resize", o), c.$on("$destroy", function () {
              t.element(r).off("resize", o);
            });
          }

          var i = m.parent();

          if (i.length) {
            "BODY" === i[0].nodeName && m.css("position", "fixed");
            var d = r.getComputedStyle(i[0]);
            "static" === d.position && a.warn(l), e.inherit(m, i);
          }
        });
      }

      var l = "<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";
      return {
        restrict: "E",
        link: c
      };
    }]);
  }(), function () {
    function e(e) {
      return {
        restrict: "E",
        link: function (t, n) {
          n.addClass("_md"), t.$on("$destroy", function () {
            e.destroy();
          });
        }
      };
    }

    function n(e) {
      function n(e, n, r, a, d, s, c, l) {
        function m(o, i, c, m) {
          if (i = r.extractElementByName(i, "md-bottom-sheet"), i.attr("tabindex", "-1"), i.hasClass("ng-cloak")) {
            var u = "$mdBottomSheet: using `<md-bottom-sheet ng-cloak >` will affect the bottom-sheet opening animations.";
            l.warn(u, i[0]);
          }

          c.disableBackdrop || (h = r.createBackdrop(o, "md-bottom-sheet-backdrop md-opaque"), h[0].tabIndex = -1, c.clickOutsideToClose && h.on("click", function () {
            r.nextTick(d.cancel, !0);
          }), a.inherit(h, c.parent), e.enter(h, c.parent, null));
          var f = new p(i, c.parent);
          return c.bottomSheet = f, a.inherit(f.element, c.parent), c.disableParentScroll && (c.restoreScroll = r.disableScrollAround(f.element, c.parent)), e.enter(f.element, c.parent, h).then(function () {
            var e = r.findFocusTarget(i) || t.element(i[0].querySelector("button") || i[0].querySelector("a") || i[0].querySelector(r.prefixer("ng-click", !0))) || h;
            c.escapeToClose && (c.rootElementKeyupCallback = function (e) {
              e.keyCode === n.KEY_CODE.ESCAPE && r.nextTick(d.cancel, !0);
            }, s.on("keyup", c.rootElementKeyupCallback), e && e.focus());
          });
        }

        function u(t, n, o) {
          var i = o.bottomSheet;
          return o.disableBackdrop || e.leave(h), e.leave(i.element).then(function () {
            o.disableParentScroll && (o.restoreScroll(), delete o.restoreScroll), i.cleanup();
          });
        }

        function p(e, t) {
          function a(t) {
            e.css(n.CSS.TRANSITION_DURATION, "0ms");
          }

          function s(t) {
            var o = t.pointer.distanceY;
            o < 5 && (o = Math.max(-i, o / 2)), e.css(n.CSS.TRANSFORM, "translate3d(0," + (i + o) + "px,0)");
          }

          function l(t) {
            if (t.pointer.distanceY > 0 && (t.pointer.distanceY > 20 || Math.abs(t.pointer.velocityY) > o)) {
              var i = e.prop("offsetHeight") - t.pointer.distanceY,
                  a = Math.min(i / t.pointer.velocityY * .75, 500);
              e.css(n.CSS.TRANSITION_DURATION, a + "ms"), r.nextTick(d.cancel, !0);
            } else e.css(n.CSS.TRANSITION_DURATION, ""), e.css(n.CSS.TRANSFORM, "");
          }

          var m = c.register(t, "drag", {
            horizontal: !1
          });
          return t.on("$md.dragstart", a).on("$md.drag", s).on("$md.dragend", l), {
            element: e,
            cleanup: function () {
              m(), t.off("$md.dragstart", a), t.off("$md.drag", s), t.off("$md.dragend", l);
            }
          };
        }

        var h;
        return {
          themable: !0,
          onShow: m,
          onRemove: u,
          disableBackdrop: !1,
          escapeToClose: !0,
          clickOutsideToClose: !0,
          disableParentScroll: !0
        };
      }

      n.$inject = ["$animate", "$mdConstant", "$mdUtil", "$mdTheming", "$mdBottomSheet", "$rootElement", "$mdGesture", "$log"];
      var o = .5,
          i = 80;
      return e("$mdBottomSheet").setDefaults({
        methods: ["disableParentScroll", "escapeToClose", "clickOutsideToClose"],
        options: n
      });
    }

    e.$inject = ["$mdBottomSheet"], n.$inject = ["$$interimElementProvider"], t.module("material.components.bottomSheet", ["material.core", "material.components.backdrop"]).directive("mdBottomSheet", e).provider("$mdBottomSheet", n);
  }(), function () {
    function e(e) {
      return {
        restrict: "E",
        link: function (t, n) {
          e(n);
        }
      };
    }

    function n(e, n, o, i) {
      function r(e) {
        return t.isDefined(e.href) || t.isDefined(e.ngHref) || t.isDefined(e.ngLink) || t.isDefined(e.uiSref);
      }

      function a(e, t) {
        if (r(t)) return '<a class="md-button" ng-transclude></a>';
        var n = "undefined" == typeof t.type ? "button" : t.type;
        return '<button class="md-button" type="' + n + '" ng-transclude></button>';
      }

      function d(a, d, s) {
        n(d), e.attach(a, d), o.expectWithoutText(d, "aria-label"), r(s) && t.isDefined(s.ngDisabled) && a.$watch(s.ngDisabled, function (e) {
          d.attr("tabindex", e ? -1 : 0);
        }), d.on("click", function (e) {
          s.disabled === !0 && (e.preventDefault(), e.stopImmediatePropagation());
        }), d.hasClass("md-no-focus") || (d.on("focus", function () {
          i.isUserInvoked() && "keyboard" !== i.getLastInteractionType() || d.addClass("md-focused");
        }), d.on("blur", function () {
          d.removeClass("md-focused");
        }));
      }

      return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        template: a,
        link: d
      };
    }

    n.$inject = ["$mdButtonInkRipple", "$mdTheming", "$mdAria", "$mdInteraction"], e.$inject = ["$mdTheming"], t.module("material.components.button", ["material.core"]).directive("mdButton", n).directive("a", e);
  }(), function () {
    function e(e) {
      return {
        restrict: "E",
        link: function (t, n, o) {
          n.addClass("_md"), e(n);
        }
      };
    }

    e.$inject = ["$mdTheming"], t.module("material.components.card", ["material.core"]).directive("mdCard", e);
  }(), function () {
    function e(e, n, o, i, r, a) {
      function d(d, s) {
        function c(d, s, c, l) {
          function m(e, t, n) {
            c[e] && d.$watch(c[e], function (e) {
              n[e] && s.attr(t, n[e]);
            });
          }

          function u(e) {
            var t = e.which || e.keyCode;
            t !== o.KEY_CODE.SPACE && t !== o.KEY_CODE.ENTER || (e.preventDefault(), s.addClass("md-focused"), p(e));
          }

          function p(e) {
            s[0].hasAttribute("disabled") || d.skipToggle || d.$apply(function () {
              var t = c.ngChecked && c.ngClick ? c.checked : !v.$viewValue;
              v.$setViewValue(t, e && e.type), v.$render();
            });
          }

          function h() {
            s.toggleClass("md-checked", !!v.$viewValue && !g);
          }

          function f(e) {
            g = e !== !1, g && s.attr("aria-checked", "mixed"), s.toggleClass("md-indeterminate", g);
          }

          var g,
              b = l[0],
              v = l[1] || r.fakeNgModel(),
              E = l[2];

          if (b) {
            var $ = b.isErrorGetter || function () {
              return v.$invalid && (v.$touched || E && E.$submitted);
            };

            b.input = s, d.$watch($, b.setInvalid);
          }

          i(s), s.children().on("focus", function () {
            s.focus();
          }), r.parseAttributeBoolean(c.mdIndeterminate) && (f(), d.$watch(c.mdIndeterminate, f)), c.ngChecked && d.$watch(d.$eval.bind(d, c.ngChecked), function (e) {
            v.$setViewValue(e), v.$render();
          }), m("ngDisabled", "tabindex", {
            "true": "-1",
            "false": c.tabindex
          }), n.expectWithText(s, "aria-label"), e.link.pre(d, {
            on: t.noop,
            0: {}
          }, c, [v]), s.on("click", p).on("keypress", u).on("focus", function () {
            "keyboard" === a.getLastInteractionType() && s.addClass("md-focused");
          }).on("blur", function () {
            s.removeClass("md-focused");
          }), v.$render = h;
        }

        return s.$set("tabindex", s.tabindex || "0"), s.$set("type", "checkbox"), s.$set("role", s.type), {
          pre: function (e, t) {
            t.on("click", function (e) {
              this.hasAttribute("disabled") && e.stopImmediatePropagation();
            });
          },
          post: c
        };
      }

      return e = e[0], {
        restrict: "E",
        transclude: !0,
        require: ["^?mdInputContainer", "?ngModel", "?^form"],
        priority: o.BEFORE_NG_ARIA,
        template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',
        compile: d
      };
    }

    e.$inject = ["inputDirective", "$mdAria", "$mdConstant", "$mdTheming", "$mdUtil", "$mdInteraction"], t.module("material.components.checkbox", ["material.core"]).directive("mdCheckbox", e);
  }(), function () {
    t.module("material.components.chips", ["material.core", "material.components.autocomplete"]);
  }(), function () {
    !function () {
      function e(e, n, o) {
        function r(e, t) {
          try {
            t && e.css(s(t));
          } catch (n) {
            o.error(n.message);
          }
        }

        function a(e) {
          var t = l(e);
          return d(t);
        }

        function d(t, o) {
          o = o || !1;
          var i = e.PALETTES[t.palette][t.hue];
          return i = o ? i.contrast : i.value, n.supplant("rgba({0}, {1}, {2}, {3})", [i[0], i[1], i[2], i[3] || t.opacity]);
        }

        function s(e) {
          var n = {},
              o = e.hasOwnProperty("color");
          return t.forEach(e, function (e, t) {
            var i = l(e),
                r = t.indexOf("background") > -1;
            n[t] = d(i), r && !o && (n.color = d(i, !0));
          }), n;
        }

        function c(n) {
          return t.isDefined(e.THEMES[n.split("-")[0]]);
        }

        function l(n) {
          var o = n.split("-"),
              i = t.isDefined(e.THEMES[o[0]]),
              r = i ? o.splice(0, 1)[0] : e.defaultTheme();
          return {
            theme: r,
            palette: m(o, r),
            hue: u(o, r),
            opacity: o[2] || 1
          };
        }

        function m(t, o) {
          var r = t.length > 1 && i.indexOf(t[1]) !== -1,
              a = t[0].replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

          if (r && (a = t[0] + "-" + t.splice(1, 1)), i.indexOf(a) === -1) {
            var d = e.THEMES[o].colors[a];
            if (!d) throw new Error(n.supplant("mdColors: couldn't find '{palette}' in the palettes.", {
              palette: a
            }));
            a = d.name;
          }

          return a;
        }

        function u(t, o) {
          var i = e.THEMES[o].colors;

          if ("hue" === t[1]) {
            var r = parseInt(t.splice(2, 1)[0], 10);
            if (r < 1 || r > 3) throw new Error(n.supplant("mdColors: 'hue-{hueNumber}' is not a valid hue, can be only 'hue-1', 'hue-2' and 'hue-3'", {
              hueNumber: r
            }));
            if (t[1] = "hue-" + r, !(t[0] in i)) throw new Error(n.supplant("mdColors: 'hue-x' can only be used with [{availableThemes}], but was used with '{usedTheme}'", {
              availableThemes: Object.keys(i).join(", "),
              usedTheme: t[0]
            }));
            return i[t[0]].hues[t[1]];
          }

          return t[1] || i[t[0] in i ? t[0] : "primary"].hues["default"];
        }

        return i = i || Object.keys(e.PALETTES), {
          applyThemeColors: r,
          getThemeColor: a,
          hasTheme: c
        };
      }

      function n(e, n, i, r) {
        return {
          restrict: "A",
          require: ["^?mdTheme"],
          compile: function (a, d) {
            function s() {
              var e = d.mdColors,
                  i = e.indexOf("::") > -1,
                  r = !!i || o.test(d.mdColors);
              d.mdColors = e.replace("::", "");
              var a = t.isDefined(d.mdColorsWatch);
              return !i && !r && (!a || n.parseAttributeBoolean(d.mdColorsWatch));
            }

            var c = s();
            return function (n, o, a, d) {
              var s = d[0],
                  l = {},
                  m = function (t) {
                "string" != typeof t && (t = ""), a.mdColors || (a.mdColors = "{}");
                var o = r(a.mdColors)(n);
                return s && Object.keys(o).forEach(function (n) {
                  var i = o[n];
                  e.hasTheme(i) || (o[n] = (t || s.$mdTheme) + "-" + i);
                }), u(o), o;
              },
                  u = function (e) {
                if (!t.equals(e, l)) {
                  var n = Object.keys(l);
                  l.background && !n.color && n.push("color"), n.forEach(function (e) {
                    o.css(e, "");
                  });
                }

                l = e;
              },
                  p = t.noop;

              s && (p = s.registerChanges(function (t) {
                e.applyThemeColors(o, m(t));
              })), n.$on("$destroy", function () {
                p();
              });

              try {
                c ? n.$watch(m, t.bind(this, e.applyThemeColors, o), !0) : e.applyThemeColors(o, m());
              } catch (h) {
                i.error(h.message);
              }
            };
          }
        };
      }

      n.$inject = ["$mdColors", "$mdUtil", "$log", "$parse"], e.$inject = ["$mdTheming", "$mdUtil", "$log"];
      var o = /^{((\s|,)*?["'a-zA-Z-]+?\s*?:\s*?('|")[a-zA-Z0-9-.]*('|"))+\s*}$/,
          i = null;
      t.module("material.components.colors", ["material.core"]).directive("mdColors", n).service("$mdColors", e);
    }();
  }(), function () {
    function e(e) {
      function t(e, t) {
        this.$scope = e, this.$element = t;
      }

      return {
        restrict: "E",
        controller: ["$scope", "$element", t],
        link: function (t, o) {
          o.addClass("_md"), e(o), t.$broadcast("$mdContentLoaded", o), n(o[0]);
        }
      };
    }

    function n(e) {
      t.element(e).on("$md.pressdown", function (t) {
        "t" === t.pointer.type && (t.$materialScrollFixed || (t.$materialScrollFixed = !0, 0 === e.scrollTop ? e.scrollTop = 1 : e.scrollHeight === e.scrollTop + e.offsetHeight && (e.scrollTop -= 1)));
      });
    }

    e.$inject = ["$mdTheming"], t.module("material.components.content", ["material.core"]).directive("mdContent", e);
  }(), function () {
    t.module("material.components.datepicker", ["material.core", "material.components.icon", "material.components.virtualRepeat"]);
  }(), function () {
    function e(e, n, o) {
      return {
        restrict: "E",
        link: function (i, r) {
          r.addClass("_md"), n(r), e(function () {
            function e() {
              r.toggleClass("md-content-overflow", a.scrollHeight > a.clientHeight);
            }

            var n,
                a = r[0].querySelector("md-dialog-content");
            a && (n = a.getElementsByTagName("img"), e(), t.element(n).on("load", e)), i.$on("$destroy", function () {
              o.destroy(r);
            });
          });
        }
      };
    }

    function o(e) {
      function o(e, t) {
        return {
          template: ['<md-dialog md-theme="{{ dialog.theme || dialog.defaultTheme }}" aria-label="{{ dialog.ariaLabel }}" ng-class="dialog.css">', '  <md-dialog-content class="md-dialog-content" role="document" tabIndex="-1">', '    <h2 class="md-title">{{ dialog.title }}</h2>', '    <div ng-if="::dialog.mdHtmlContent" class="md-dialog-content-body" ', '        ng-bind-html="::dialog.mdHtmlContent"></div>', '    <div ng-if="::!dialog.mdHtmlContent" class="md-dialog-content-body">', "      <p>{{::dialog.mdTextContent}}</p>", "    </div>", '    <md-input-container md-no-float ng-if="::dialog.$type == \'prompt\'" class="md-prompt-input-container">', '      <input ng-keypress="dialog.keypress($event)" md-autofocus ng-model="dialog.result"              placeholder="{{::dialog.placeholder}}">', "    </md-input-container>", "  </md-dialog-content>", "  <md-dialog-actions>", '    <md-button ng-if="dialog.$type === \'confirm\' || dialog.$type === \'prompt\'"               ng-click="dialog.abort()" class="md-primary md-cancel-button">', "      {{ dialog.cancel }}", "    </md-button>", '    <md-button ng-click="dialog.hide()" class="md-primary md-confirm-button" md-autofocus="dialog.$type===\'alert\'">', "      {{ dialog.ok }}", "    </md-button>", "  </md-dialog-actions>", "</md-dialog>"].join("").replace(/\s\s+/g, ""),
          controller: function () {
            var n = "prompt" == this.$type;
            n && this.initialValue && (this.result = this.initialValue), this.hide = function () {
              e.hide(!n || this.result);
            }, this.abort = function () {
              e.cancel();
            }, this.keypress = function (n) {
              n.keyCode === t.KEY_CODE.ENTER && e.hide(this.result);
            };
          },
          controllerAs: "dialog",
          bindToController: !0
        };
      }

      function i(e, o, i, d, s, c, l, m, u, p, h, f, g) {
        function b(e) {
          e.defaultTheme = h.defaultTheme(), C(e);
        }

        function v(e, t, n, o) {
          if (o) {
            var i = o.htmlContent || n.htmlContent || "",
                r = o.textContent || n.textContent || o.content || n.content || "";
            if (i && !p.has("$sanitize")) throw Error("The ngSanitize module must be loaded in order to use htmlContent.");
            if (i && r) throw Error("md-dialog cannot have both `htmlContent` and `textContent`");
            o.mdHtmlContent = i, o.mdTextContent = r;
          }
        }

        function E(e, n, o, r) {
          function a() {
            n[0].querySelector(".md-actions") && u.warn("Using a class of md-actions is deprecated, please use <md-dialog-actions>.");
          }

          function d() {
            function e() {
              return n[0].querySelector(".dialog-close, md-dialog-actions button:last-child");
            }

            if (o.focusOnOpen) {
              var t = i.findFocusTarget(n) || e() || s;
              t.focus();
            }
          }

          t.element(c[0].body).addClass("md-dialog-is-showing");
          var s = n.find("md-dialog");

          if (s.hasClass("ng-cloak")) {
            var l = "$mdDialog: using `<md-dialog ng-cloak>` will affect the dialog opening animations.";
            u.warn(l, n[0]);
          }

          return y(o), A(s, o), T(e, n, o), M(n, o), _(n, o).then(function () {
            w(n, o), a(), d();
          });
        }

        function $(e, n, o) {
          function i() {
            return x(n, o);
          }

          function d() {
            t.element(c[0].body).removeClass("md-dialog-is-showing"), o.contentElement && o.reverseContainerStretch(), o.cleanupElement(), o.$destroy || "keyboard" !== o.originInteraction || o.origin.focus();
          }

          return o.deactivateListeners(), o.unlockScreenReader(), o.hideBackdrop(o.$destroy), r && r.parentNode && r.parentNode.removeChild(r), a && a.parentNode && a.parentNode.removeChild(a), o.$destroy ? d() : i().then(d);
        }

        function C(e) {
          var n;
          e.targetEvent && e.targetEvent.target && (n = t.element(e.targetEvent.target));
          var o = n && n.controller("mdTheme");

          if (o) {
            e.themeWatch = o.$shouldWatch;
            var i = e.theme || o.$mdTheme;
            i && (e.scope.theme = i);
            var r = o.registerChanges(function (t) {
              e.scope.theme = t, e.themeWatch || r();
            });
          }
        }

        function y(e) {
          function o(e, o) {
            var i = t.element(e || {});

            if (i && i.length) {
              var r = {
                top: 0,
                left: 0,
                height: 0,
                width: 0
              },
                  a = t.isFunction(i[0].getBoundingClientRect);
              return t.extend(o || {}, {
                element: a ? i : n,
                bounds: a ? i[0].getBoundingClientRect() : t.extend({}, r, i[0]),
                focus: t.bind(i, i.focus)
              });
            }
          }

          function i(e, n) {
            return t.isString(e) && (e = c[0].querySelector(e)), t.element(e || n);
          }

          e.origin = t.extend({
            element: null,
            bounds: null,
            focus: t.noop
          }, e.origin || {}), e.parent = i(e.parent, m), e.closeTo = o(i(e.closeTo)), e.openFrom = o(i(e.openFrom)), e.targetEvent && (e.origin = o(e.targetEvent.target, e.origin), e.originInteraction = g.getLastInteractionType());
        }

        function M(n, o) {
          var r = t.element(l),
              a = i.debounce(function () {
            k(n, o);
          }, 60),
              s = [],
              c = function () {
            var t = "alert" == o.$type ? e.hide : e.cancel;
            i.nextTick(t, !0);
          };

          if (o.escapeToClose) {
            var m = o.parent,
                u = function (e) {
              e.keyCode === d.KEY_CODE.ESCAPE && (e.stopPropagation(), e.preventDefault(), c());
            };

            n.on("keydown", u), m.on("keydown", u), s.push(function () {
              n.off("keydown", u), m.off("keydown", u);
            });
          }

          if (r.on("resize", a), s.push(function () {
            r.off("resize", a);
          }), o.clickOutsideToClose) {
            var p,
                h = n,
                f = function (e) {
              p = e.target;
            },
                g = function (e) {
              p === h[0] && e.target === h[0] && (e.stopPropagation(), e.preventDefault(), c());
            };

            h.on("mousedown", f), h.on("mouseup", g), s.push(function () {
              h.off("mousedown", f), h.off("mouseup", g);
            });
          }

          o.deactivateListeners = function () {
            s.forEach(function (e) {
              e();
            }), o.deactivateListeners = null;
          };
        }

        function T(e, t, n) {
          n.disableParentScroll && (n.restoreScroll = i.disableScrollAround(t, n.parent)), n.hasBackdrop && (n.backdrop = i.createBackdrop(e, "md-dialog-backdrop md-opaque"), s.enter(n.backdrop, n.parent)), n.hideBackdrop = function (e) {
            n.backdrop && (e ? n.backdrop.remove() : s.leave(n.backdrop)), n.disableParentScroll && (n.restoreScroll && n.restoreScroll(), delete n.restoreScroll), n.hideBackdrop = null;
          };
        }

        function A(e, t) {
          var n = "alert" === t.$type ? "alertdialog" : "dialog",
              d = e.find("md-dialog-content"),
              s = e.attr("id"),
              c = "dialogContent_" + (s || i.nextUid());
          e.attr({
            role: n,
            tabIndex: "-1"
          }), 0 === d.length && (d = e, s && (c = s)), d.attr("id", c), e.attr("aria-describedby", c), t.ariaLabel ? o.expect(e, "aria-label", t.ariaLabel) : o.expectAsync(e, "aria-label", function () {
            var e = d.text().split(/\s+/);
            return e.length > 3 && (e = e.slice(0, 3).concat("...")), e.join(" ");
          }), r = document.createElement("div"), r.classList.add("md-dialog-focus-trap"), r.tabIndex = 0, a = r.cloneNode(!1);

          var l = function () {
            e.focus();
          };

          r.addEventListener("focus", l), a.addEventListener("focus", l), e[0].parentNode.insertBefore(r, e[0]), e.after(a);
        }

        function w(e, t) {
          function n(e) {
            for (; e.parentNode;) {
              if (e === document.body) return;

              for (var t = e.parentNode.children, i = 0; i < t.length; i++) e === t[i] || N(t[i], ["SCRIPT", "STYLE"]) || t[i].setAttribute("aria-hidden", o);

              n(e = e.parentNode);
            }
          }

          var o = !0;
          n(e[0]), t.unlockScreenReader = function () {
            o = !1, n(e[0]), t.unlockScreenReader = null;
          };
        }

        function k(e, t) {
          var n = "fixed" == l.getComputedStyle(c[0].body).position,
              o = t.backdrop ? l.getComputedStyle(t.backdrop[0]) : null,
              i = o ? Math.min(c[0].body.clientHeight, Math.ceil(Math.abs(parseInt(o.height, 10)))) : 0,
              r = {
            top: e.css("top"),
            height: e.css("height")
          },
              a = Math.abs(t.parent[0].getBoundingClientRect().top);
          return e.css({
            top: (n ? a : 0) + "px",
            height: i ? i + "px" : "100%"
          }), function () {
            e.css(r);
          };
        }

        function _(e, t) {
          t.parent.append(e), t.reverseContainerStretch = k(e, t);
          var n = e.find("md-dialog"),
              o = i.dom.animator,
              r = o.calculateZoomToOrigin,
              a = {
            transitionInClass: "md-transition-in",
            transitionOutClass: "md-transition-out"
          },
              d = o.toTransformCss(r(n, t.openFrom || t.origin)),
              s = o.toTransformCss("");
          return n.toggleClass("md-dialog-fullscreen", !!t.fullscreen), o.translate3d(n, d, s, a).then(function (e) {
            return t.reverseAnimate = function () {
              return delete t.reverseAnimate, t.closeTo ? (a = {
                transitionInClass: "md-transition-out",
                transitionOutClass: "md-transition-in"
              }, d = s, s = o.toTransformCss(r(n, t.closeTo)), o.translate3d(n, d, s, a)) : e(s = o.toTransformCss(r(n, t.origin)));
            }, t.clearAnimate = function () {
              return delete t.clearAnimate, n.removeClass([a.transitionOutClass, a.transitionInClass].join(" ")), o.translate3d(n, s, o.toTransformCss(""), {});
            }, !0;
          });
        }

        function x(e, t) {
          return t.reverseAnimate().then(function () {
            t.contentElement && t.clearAnimate();
          });
        }

        function N(e, t) {
          if (t.indexOf(e.nodeName) !== -1) return !0;
        }

        return {
          hasBackdrop: !0,
          isolateScope: !0,
          onCompiling: b,
          onShow: E,
          onShowing: v,
          onRemove: $,
          clickOutsideToClose: !1,
          escapeToClose: !0,
          targetEvent: null,
          closeTo: null,
          openFrom: null,
          focusOnOpen: !0,
          disableParentScroll: !0,
          autoWrap: !0,
          fullscreen: !1,
          transformTemplate: function (e, t) {
            function n(e) {
              return t.autoWrap && !/<\/md-dialog>/g.test(e) ? "<md-dialog>" + (e || "") + "</md-dialog>" : e || "";
            }

            var o = f.startSymbol(),
                i = f.endSymbol(),
                r = o + (t.themeWatch ? "" : "::") + "theme" + i;
            return '<div class="md-dialog-container" tabindex="-1" md-theme="' + r + '">' + n(e) + "</div>";
          }
        };
      }

      o.$inject = ["$mdDialog", "$mdConstant"], i.$inject = ["$mdDialog", "$mdAria", "$mdUtil", "$mdConstant", "$animate", "$document", "$window", "$rootElement", "$log", "$injector", "$mdTheming", "$interpolate", "$mdInteraction"];
      var r, a;
      return e("$mdDialog").setDefaults({
        methods: ["disableParentScroll", "hasBackdrop", "clickOutsideToClose", "escapeToClose", "targetEvent", "closeTo", "openFrom", "parent", "fullscreen", "multiple"],
        options: i
      }).addPreset("alert", {
        methods: ["title", "htmlContent", "textContent", "content", "ariaLabel", "ok", "theme", "css"],
        options: o
      }).addPreset("confirm", {
        methods: ["title", "htmlContent", "textContent", "content", "ariaLabel", "ok", "cancel", "theme", "css"],
        options: o
      }).addPreset("prompt", {
        methods: ["title", "htmlContent", "textContent", "initialValue", "content", "placeholder", "ariaLabel", "ok", "cancel", "theme", "css"],
        options: o
      });
    }

    e.$inject = ["$$rAF", "$mdTheming", "$mdDialog"], o.$inject = ["$$interimElementProvider"], t.module("material.components.dialog", ["material.core", "material.components.backdrop"]).directive("mdDialog", e).provider("$mdDialog", o);
  }(), function () {
    function e(e) {
      return {
        restrict: "E",
        link: e
      };
    }

    e.$inject = ["$mdTheming"], t.module("material.components.divider", ["material.core"]).directive("mdDivider", e);
  }(), function () {
    !function () {
      function e(e) {
        return {
          restrict: "E",
          require: ["^?mdFabSpeedDial", "^?mdFabToolbar"],
          compile: function (t, n) {
            var o = t.children(),
                i = e.prefixer().hasAttribute(o, "ng-repeat");
            i ? o.addClass("md-fab-action-item") : o.wrap('<div class="md-fab-action-item">');
          }
        };
      }

      e.$inject = ["$mdUtil"], t.module("material.components.fabActions", ["material.core"]).directive("mdFabActions", e);
    }();
  }(), function () {
    !function () {
      function e(e, n, o, i, r, a) {
        function d() {
          N.direction = N.direction || "down", N.isOpen = N.isOpen || !1, l(), n.addClass("md-animations-waiting");
        }

        function s() {
          var o = ["click", "focusin", "focusout"];
          t.forEach(o, function (e) {
            n.on(e, c);
          }), e.$on("$destroy", function () {
            t.forEach(o, function (e) {
              n.off(e, c);
            }), h();
          });
        }

        function c(e) {
          "click" == e.type && k(e), "focusout" != e.type || D || (D = a(function () {
            N.close();
          }, 100, !1)), "focusin" == e.type && D && (a.cancel(D), D = null);
        }

        function l() {
          N.currentActionIndex = -1;
        }

        function m() {
          e.$watch("vm.direction", function (e, t) {
            o.removeClass(n, "md-" + t), o.addClass(n, "md-" + e), l();
          });
          var t, i;
          e.$watch("vm.isOpen", function (e) {
            l(), t && i || (t = _(), i = x()), e ? p() : h();
            var r = e ? "md-is-open" : "",
                a = e ? "" : "md-is-open";
            t.attr("aria-haspopup", !0), t.attr("aria-expanded", e), i.attr("aria-hidden", !e), o.setClass(n, r, a);
          });
        }

        function u() {
          n[0].scrollHeight > 0 ? o.addClass(n, "_md-animations-ready").then(function () {
            n.removeClass("md-animations-waiting");
          }) : S < 10 && (a(u, 100), S += 1);
        }

        function p() {
          n.on("keydown", g), i.nextTick(function () {
            t.element(document).on("click touchend", f);
          });
        }

        function h() {
          n.off("keydown", g), t.element(document).off("click touchend", f);
        }

        function f(e) {
          if (e.target) {
            var t = i.getClosest(e.target, "md-fab-trigger"),
                n = i.getClosest(e.target, "md-fab-actions");
            t || n || N.close();
          }
        }

        function g(e) {
          switch (e.which) {
            case r.KEY_CODE.ESCAPE:
              return N.close(), e.preventDefault(), !1;

            case r.KEY_CODE.LEFT_ARROW:
              return C(e), !1;

            case r.KEY_CODE.UP_ARROW:
              return y(e), !1;

            case r.KEY_CODE.RIGHT_ARROW:
              return M(e), !1;

            case r.KEY_CODE.DOWN_ARROW:
              return T(e), !1;
          }
        }

        function b(e) {
          E(e, -1);
        }

        function v(e) {
          E(e, 1);
        }

        function E(e, n) {
          var o = $();
          N.currentActionIndex = N.currentActionIndex + n, N.currentActionIndex = Math.min(o.length - 1, N.currentActionIndex), N.currentActionIndex = Math.max(0, N.currentActionIndex);
          var i = t.element(o[N.currentActionIndex]).children()[0];
          t.element(i).attr("tabindex", 0), i.focus(), e.preventDefault(), e.stopImmediatePropagation();
        }

        function $() {
          var e = x()[0].querySelectorAll(".md-fab-action-item");
          return t.forEach(e, function (e) {
            t.element(t.element(e).children()[0]).attr("tabindex", -1);
          }), e;
        }

        function C(e) {
          "left" === N.direction ? v(e) : b(e);
        }

        function y(e) {
          "down" === N.direction ? b(e) : v(e);
        }

        function M(e) {
          "left" === N.direction ? b(e) : v(e);
        }

        function T(e) {
          "up" === N.direction ? b(e) : v(e);
        }

        function A(e) {
          return i.getClosest(e, "md-fab-trigger");
        }

        function w(e) {
          return i.getClosest(e, "md-fab-actions");
        }

        function k(e) {
          A(e.target) && N.toggle(), w(e.target) && N.close();
        }

        function _() {
          return n.find("md-fab-trigger");
        }

        function x() {
          return n.find("md-fab-actions");
        }

        var N = this,
            S = 0;
        N.open = function () {
          e.$evalAsync("vm.isOpen = true");
        }, N.close = function () {
          e.$evalAsync("vm.isOpen = false"), n.find("md-fab-trigger")[0].focus();
        }, N.toggle = function () {
          e.$evalAsync("vm.isOpen = !vm.isOpen");
        }, N.$onInit = function () {
          d(), s(), m(), u();
        }, 1 === t.version.major && t.version.minor <= 4 && this.$onInit();
        var D;
      }

      e.$inject = ["$scope", "$element", "$animate", "$mdUtil", "$mdConstant", "$timeout"], t.module("material.components.fabShared", ["material.core"]).controller("MdFabController", e);
    }();
  }(), function () {
    !function () {
      function n() {
        function e(e, t) {
          t.prepend('<div class="_md-css-variables"></div>');
        }

        return {
          restrict: "E",
          scope: {
            direction: "@?mdDirection",
            isOpen: "=?mdOpen"
          },
          bindToController: !0,
          controller: "MdFabController",
          controllerAs: "vm",
          link: e
        };
      }

      function o(n) {
        function o(e) {
          n(e, r, !1);
        }

        function i(n) {
          if (!n.hasClass("md-animations-waiting") || n.hasClass("_md-animations-ready")) {
            var o = n[0],
                i = n.controller("mdFabSpeedDial"),
                r = o.querySelectorAll(".md-fab-action-item"),
                a = o.querySelector("md-fab-trigger"),
                d = o.querySelector("._md-css-variables"),
                s = parseInt(e.getComputedStyle(d).zIndex);
            t.forEach(r, function (e, t) {
              var n = e.style;
              n.transform = n.webkitTransform = "", n.transitionDelay = "", n.opacity = 1, n.zIndex = r.length - t + s;
            }), a.style.zIndex = s + r.length + 1, i.isOpen || t.forEach(r, function (e, t) {
              var n,
                  o,
                  r = e.style,
                  d = (a.clientHeight - e.clientHeight) / 2,
                  s = (a.clientWidth - e.clientWidth) / 2;

              switch (i.direction) {
                case "up":
                  n = e.scrollHeight * (t + 1) + d, o = "Y";
                  break;

                case "down":
                  n = -(e.scrollHeight * (t + 1) + d), o = "Y";
                  break;

                case "left":
                  n = e.scrollWidth * (t + 1) + s, o = "X";
                  break;

                case "right":
                  n = -(e.scrollWidth * (t + 1) + s), o = "X";
              }

              var c = "translate" + o + "(" + n + "px)";
              r.transform = r.webkitTransform = c;
            });
          }
        }

        return {
          addClass: function (e, t, n) {
            e.hasClass("md-fling") ? (i(e), o(n)) : n();
          },
          removeClass: function (e, t, n) {
            i(e), o(n);
          }
        };
      }

      function i(n) {
        function o(e) {
          n(e, r, !1);
        }

        function i(n) {
          var o = n[0],
              i = n.controller("mdFabSpeedDial"),
              r = o.querySelectorAll(".md-fab-action-item"),
              d = o.querySelector("._md-css-variables"),
              s = parseInt(e.getComputedStyle(d).zIndex);
          t.forEach(r, function (e, t) {
            var n = e.style,
                o = t * a;
            n.opacity = i.isOpen ? 1 : 0, n.transform = n.webkitTransform = i.isOpen ? "scale(1)" : "scale(0)", n.transitionDelay = (i.isOpen ? o : r.length - o) + "ms", n.zIndex = r.length - t + s;
          });
        }

        var a = 65;
        return {
          addClass: function (e, t, n) {
            i(e), o(n);
          },
          removeClass: function (e, t, n) {
            i(e), o(n);
          }
        };
      }

      o.$inject = ["$timeout"], i.$inject = ["$timeout"];
      var r = 300;
      t.module("material.components.fabSpeedDial", ["material.core", "material.components.fabShared", "material.components.fabActions"]).directive("mdFabSpeedDial", n).animation(".md-fling", o).animation(".md-scale", i).service("mdFabSpeedDialFlingAnimation", o).service("mdFabSpeedDialScaleAnimation", i);
    }();
  }(), function () {
    !function () {
      function n() {
        function e(e, t, n) {
          t.addClass("md-fab-toolbar"), t.find("md-fab-trigger").find("button").prepend('<div class="md-fab-toolbar-background"></div>');
        }

        return {
          restrict: "E",
          transclude: !0,
          template: '<div class="md-fab-toolbar-wrapper">  <div class="md-fab-toolbar-content" ng-transclude></div></div>',
          scope: {
            direction: "@?mdDirection",
            isOpen: "=?mdOpen"
          },
          bindToController: !0,
          controller: "MdFabController",
          controllerAs: "vm",
          link: e
        };
      }

      function o() {
        function n(n, o, i) {
          if (o) {
            var r = n[0],
                a = n.controller("mdFabToolbar"),
                d = r.querySelector(".md-fab-toolbar-background"),
                s = r.querySelector("md-fab-trigger button"),
                c = r.querySelector("md-toolbar"),
                l = r.querySelector("md-fab-trigger button md-icon"),
                m = n.find("md-fab-actions").children();

            if (s && d) {
              var u = e.getComputedStyle(s).getPropertyValue("background-color"),
                  p = r.offsetWidth,
                  h = (r.offsetHeight, 2 * (p / s.offsetWidth));
              d.style.backgroundColor = u, d.style.borderRadius = p + "px", a.isOpen ? (c.style.pointerEvents = "inherit", d.style.width = s.offsetWidth + "px", d.style.height = s.offsetHeight + "px", d.style.transform = "scale(" + h + ")", d.style.transitionDelay = "0ms", l && (l.style.transitionDelay = ".3s"), t.forEach(m, function (e, t) {
                e.style.transitionDelay = 25 * (m.length - t) + "ms";
              })) : (c.style.pointerEvents = "none", d.style.transform = "scale(1)", d.style.top = "0", n.hasClass("md-right") && (d.style.left = "0", d.style.right = null), n.hasClass("md-left") && (d.style.right = "0", d.style.left = null), d.style.transitionDelay = "200ms", l && (l.style.transitionDelay = "0ms"), t.forEach(m, function (e, t) {
                e.style.transitionDelay = 200 + 25 * t + "ms";
              }));
            }
          }
        }

        return {
          addClass: function (e, t, o) {
            n(e, t, o), o();
          },
          removeClass: function (e, t, o) {
            n(e, t, o), o();
          }
        };
      }

      t.module("material.components.fabToolbar", ["material.core", "material.components.fabShared", "material.components.fabActions"]).directive("mdFabToolbar", n).animation(".md-fab-toolbar", o).service("mdFabToolbarAnimation", o);
    }();
  }(), function () {
    function e(e, o, i, r) {
      function a(n, a, d, s) {
        function c() {
          for (var e in o.MEDIA) r(e), r.getQuery(o.MEDIA[e]).addListener(M);

          return r.watchResponsiveAttributes(["md-cols", "md-row-height", "md-gutter"], d, m);
        }

        function l() {
          s.layoutDelegate = t.noop, T();

          for (var e in o.MEDIA) r.getQuery(o.MEDIA[e]).removeListener(M);
        }

        function m(e) {
          null == e ? s.invalidateLayout() : r(e) && s.invalidateLayout();
        }

        function u(e) {
          var o = g(),
              r = {
            tileSpans: b(o),
            colCount: v(),
            rowMode: C(),
            rowHeight: $(),
            gutter: E()
          };

          if (e || !t.equals(r, A)) {
            var d = i(r.colCount, r.tileSpans, o).map(function (e, n) {
              return {
                grid: {
                  element: a,
                  style: f(r.colCount, n, r.gutter, r.rowMode, r.rowHeight)
                },
                tiles: e.map(function (e, i) {
                  return {
                    element: t.element(o[i]),
                    style: h(e.position, e.spans, r.colCount, n, r.gutter, r.rowMode, r.rowHeight)
                  };
                })
              };
            }).reflow().performance();
            n.mdOnLayout({
              $event: {
                performance: d
              }
            }), A = r;
          }
        }

        function p(e) {
          return w + e + k;
        }

        function h(e, t, n, o, i, r, a) {
          var d = 1 / n * 100,
              s = (n - 1) / n,
              c = _({
            share: d,
            gutterShare: s,
            gutter: i
          }),
              l = "rtl" != document.dir && "rtl" != document.body.dir,
              m = l ? {
            left: x({
              unit: c,
              offset: e.col,
              gutter: i
            }),
            width: N({
              unit: c,
              span: t.col,
              gutter: i
            }),
            paddingTop: "",
            marginTop: "",
            top: "",
            height: ""
          } : {
            right: x({
              unit: c,
              offset: e.col,
              gutter: i
            }),
            width: N({
              unit: c,
              span: t.col,
              gutter: i
            }),
            paddingTop: "",
            marginTop: "",
            top: "",
            height: ""
          };

          switch (r) {
            case "fixed":
              m.top = x({
                unit: a,
                offset: e.row,
                gutter: i
              }), m.height = N({
                unit: a,
                span: t.row,
                gutter: i
              });
              break;

            case "ratio":
              var u = d / a,
                  p = _({
                share: u,
                gutterShare: s,
                gutter: i
              });

              m.paddingTop = N({
                unit: p,
                span: t.row,
                gutter: i
              }), m.marginTop = x({
                unit: p,
                offset: e.row,
                gutter: i
              });
              break;

            case "fit":
              var h = (o - 1) / o,
                  u = 1 / o * 100,
                  p = _({
                share: u,
                gutterShare: h,
                gutter: i
              });

              m.top = x({
                unit: p,
                offset: e.row,
                gutter: i
              }), m.height = N({
                unit: p,
                span: t.row,
                gutter: i
              });
          }

          return m;
        }

        function f(e, t, n, o, i) {
          var r = {};

          switch (o) {
            case "fixed":
              r.height = N({
                unit: i,
                span: t,
                gutter: n
              }), r.paddingBottom = "";
              break;

            case "ratio":
              var a = 1 === e ? 0 : (e - 1) / e,
                  d = 1 / e * 100,
                  s = d * (1 / i),
                  c = _({
                share: s,
                gutterShare: a,
                gutter: n
              });

              r.height = "", r.paddingBottom = N({
                unit: c,
                span: t,
                gutter: n
              });
              break;

            case "fit":
          }

          return r;
        }

        function g() {
          return [].filter.call(a.children(), function (e) {
            return "MD-GRID-TILE" == e.tagName && !e.$$mdDestroyed;
          });
        }

        function b(e) {
          return [].map.call(e, function (e) {
            var n = t.element(e).controller("mdGridTile");
            return {
              row: parseInt(r.getResponsiveAttribute(n.$attrs, "md-rowspan"), 10) || 1,
              col: parseInt(r.getResponsiveAttribute(n.$attrs, "md-colspan"), 10) || 1
            };
          });
        }

        function v() {
          var e = parseInt(r.getResponsiveAttribute(d, "md-cols"), 10);
          if (isNaN(e)) throw "md-grid-list: md-cols attribute was not found, or contained a non-numeric value";
          return e;
        }

        function E() {
          return y(r.getResponsiveAttribute(d, "md-gutter") || 1);
        }

        function $() {
          var e = r.getResponsiveAttribute(d, "md-row-height");
          if (!e) throw "md-grid-list: md-row-height attribute was not found";

          switch (C()) {
            case "fixed":
              return y(e);

            case "ratio":
              var t = e.split(":");
              return parseFloat(t[0]) / parseFloat(t[1]);

            case "fit":
              return 0;
          }
        }

        function C() {
          var e = r.getResponsiveAttribute(d, "md-row-height");
          if (!e) throw "md-grid-list: md-row-height attribute was not found";
          return "fit" == e ? "fit" : e.indexOf(":") !== -1 ? "ratio" : "fixed";
        }

        function y(e) {
          return /\D$/.test(e) ? e : e + "px";
        }

        a.addClass("_md"), a.attr("role", "list"), s.layoutDelegate = u;
        var M = t.bind(s, s.invalidateLayout),
            T = c();
        n.$on("$destroy", l);

        var A,
            w = e.startSymbol(),
            k = e.endSymbol(),
            _ = e(p("share") + "% - (" + p("gutter") + " * " + p("gutterShare") + ")"),
            x = e("calc((" + p("unit") + " + " + p("gutter") + ") * " + p("offset") + ")"),
            N = e("calc((" + p("unit") + ") * " + p("span") + " + (" + p("span") + " - 1) * " + p("gutter") + ")");
      }

      return {
        restrict: "E",
        controller: n,
        scope: {
          mdOnLayout: "&"
        },
        link: a
      };
    }

    function n(e) {
      this.layoutInvalidated = !1, this.tilesInvalidated = !1, this.$timeout_ = e.nextTick, this.layoutDelegate = t.noop;
    }

    function o(e) {
      function n(t, n) {
        var o, a, d, s, c, l;
        return s = e.time(function () {
          a = i(t, n);
        }), o = {
          layoutInfo: function () {
            return a;
          },
          map: function (t) {
            return c = e.time(function () {
              var e = o.layoutInfo();
              d = t(e.positioning, e.rowCount);
            }), o;
          },
          reflow: function (t) {
            return l = e.time(function () {
              var e = t || r;
              e(d.grid, d.tiles);
            }), o;
          },
          performance: function () {
            return {
              tileCount: n.length,
              layoutTime: s,
              mapTime: c,
              reflowTime: l,
              totalTime: s + c + l
            };
          }
        };
      }

      function o(e, t) {
        e.element.css(e.style), t.forEach(function (e) {
          e.element.css(e.style);
        });
      }

      function i(e, t) {
        function n(t, n) {
          if (t.col > e) throw "md-grid-list: Tile at position " + n + " has a colspan (" + t.col + ") that exceeds the column count (" + e + ")";

          for (var a = 0, l = 0; l - a < t.col;) d >= e ? o() : (a = c.indexOf(0, d), a !== -1 && (l = r(a + 1)) !== -1 ? d = l + 1 : (a = l = 0, o()));

          return i(a, t.col, t.row), d = a + t.col, {
            col: a,
            row: s
          };
        }

        function o() {
          d = 0, s++, i(0, e, -1);
        }

        function i(e, t, n) {
          for (var o = e; o < e + t; o++) c[o] = Math.max(c[o] + n, 0);
        }

        function r(e) {
          var t;

          for (t = e; t < c.length; t++) if (0 !== c[t]) return t;

          if (t === c.length) return t;
        }

        function a() {
          for (var t = [], n = 0; n < e; n++) t.push(0);

          return t;
        }

        var d = 0,
            s = 0,
            c = a();
        return {
          positioning: t.map(function (e, t) {
            return {
              spans: e,
              position: n(e, t)
            };
          }),
          rowCount: s + Math.max.apply(Math, c)
        };
      }

      var r = o;
      return n.animateWith = function (e) {
        r = t.isFunction(e) ? e : o;
      }, n;
    }

    function i(e) {
      function n(n, o, i, r) {
        o.attr("role", "listitem");
        var a = e.watchResponsiveAttributes(["md-colspan", "md-rowspan"], i, t.bind(r, r.invalidateLayout));
        r.invalidateTiles(), n.$on("$destroy", function () {
          o[0].$$mdDestroyed = !0, a(), r.invalidateLayout();
        }), t.isDefined(n.$parent.$index) && n.$watch(function () {
          return n.$parent.$index;
        }, function (e, t) {
          e !== t && r.invalidateTiles();
        });
      }

      return {
        restrict: "E",
        require: "^mdGridList",
        template: "<figure ng-transclude></figure>",
        transclude: !0,
        scope: {},
        controller: ["$attrs", function (e) {
          this.$attrs = e;
        }],
        link: n
      };
    }

    function r() {
      return {
        template: "<figcaption ng-transclude></figcaption>",
        transclude: !0
      };
    }

    n.$inject = ["$mdUtil"], o.$inject = ["$mdUtil"], e.$inject = ["$interpolate", "$mdConstant", "$mdGridLayout", "$mdMedia"], i.$inject = ["$mdMedia"], t.module("material.components.gridList", ["material.core"]).directive("mdGridList", e).directive("mdGridTile", i).directive("mdGridTileFooter", r).directive("mdGridTileHeader", r).factory("$mdGridLayout", o), n.prototype = {
      invalidateTiles: function () {
        this.tilesInvalidated = !0, this.invalidateLayout();
      },
      invalidateLayout: function () {
        this.layoutInvalidated || (this.layoutInvalidated = !0, this.$timeout_(t.bind(this, this.layout)));
      },
      layout: function () {
        try {
          this.layoutDelegate(this.tilesInvalidated);
        } finally {
          this.layoutInvalidated = !1, this.tilesInvalidated = !1;
        }
      }
    };
  }(), function () {
    t.module("material.components.icon", ["material.core"]);
  }(), function () {
    function n(e, t) {
      function n(t) {
        var n = t[0].querySelector(r),
            o = t[0].querySelector(a);
        return n && t.addClass("md-icon-left"), o && t.addClass("md-icon-right"), function (t, n) {
          e(n);
        };
      }

      function o(e, n, o, i) {
        var r = this;
        r.isErrorGetter = o.mdIsError && t(o.mdIsError), r.delegateClick = function () {
          r.input.focus();
        }, r.element = n, r.setFocused = function (e) {
          n.toggleClass("md-input-focused", !!e);
        }, r.setHasValue = function (e) {
          n.toggleClass("md-input-has-value", !!e);
        }, r.setHasPlaceholder = function (e) {
          n.toggleClass("md-input-has-placeholder", !!e);
        }, r.setInvalid = function (e) {
          e ? i.addClass(n, "md-input-invalid") : i.removeClass(n, "md-input-invalid");
        }, e.$watch(function () {
          return r.label && r.input;
        }, function (e) {
          e && !r.label.attr("for") && r.label.attr("for", r.input.attr("id"));
        });
      }

      o.$inject = ["$scope", "$element", "$attrs", "$animate"];
      var i = ["INPUT", "TEXTAREA", "SELECT", "MD-SELECT"],
          r = i.reduce(function (e, t) {
        return e.concat(["md-icon ~ " + t, ".md-icon ~ " + t]);
      }, []).join(","),
          a = i.reduce(function (e, t) {
        return e.concat([t + " ~ md-icon", t + " ~ .md-icon"]);
      }, []).join(",");
      return {
        restrict: "E",
        compile: n,
        controller: o
      };
    }

    function o() {
      return {
        restrict: "E",
        require: "^?mdInputContainer",
        link: function (e, t, n, o) {
          !o || n.mdNoFloat || t.hasClass("md-container-ignore") || (o.label = t, e.$on("$destroy", function () {
            o.label = null;
          }));
        }
      };
    }

    function i(e, n, o, i, r) {
      function a(a, d, s, c) {
        function l(e) {
          return h.setHasValue(!g.$isEmpty(e)), e;
        }

        function m() {
          h.label && s.$observe("required", function (e) {
            h.label.toggleClass("md-required", e && !E);
          });
        }

        function u() {
          h.setHasValue(d.val().length > 0 || (d[0].validity || {}).badInput);
        }

        function p() {
          function o() {
            d.attr("rows", 1).css("height", "auto").addClass("md-no-flex");
            var e = c();

            if (!$) {
              var t = d[0].style.padding || "";
              $ = d.css("padding", 0).prop("offsetHeight"), d[0].style.padding = t;
            }

            if (b && $ && (e = Math.max(e, $ * b)), v && $) {
              var n = $ * v;
              n < e ? (d.attr("md-no-autogrow", ""), e = n) : d.removeAttr("md-no-autogrow");
            }

            $ && d.attr("rows", Math.round(e / $)), d.css("height", e + "px").removeClass("md-no-flex");
          }

          function c() {
            var e = C.offsetHeight,
                t = C.scrollHeight - e;
            return e + Math.max(t, 0);
          }

          function l(t) {
            return e.nextTick(o), t;
          }

          function m() {
            if (p && (p = !1, t.element(n).off("resize", o), E && E(), d.attr("md-no-autogrow", "").off("input", o), f)) {
              var e = g.$formatters.indexOf(l);
              e > -1 && g.$formatters.splice(e, 1);
            }
          }

          function u() {
            function e(e) {
              e.preventDefault(), l = !0, u = e.clientY, p = parseFloat(d.css("height")) || d.prop("offsetHeight");
            }

            function n(e) {
              l && (e.preventDefault(), m(), f.addClass("md-input-resized"));
            }

            function o(e) {
              l && d.css("height", p + e.pointer.distanceY + "px");
            }

            function i(e) {
              l && (l = !1, f.removeClass("md-input-resized"));
            }

            if (!s.hasOwnProperty("mdNoResize")) {
              var c = t.element('<div class="md-resize-handle"></div>'),
                  l = !1,
                  u = null,
                  p = 0,
                  f = h.element,
                  g = r.register(c, "drag", {
                horizontal: !1
              });
              d.wrap('<div class="md-resize-wrapper">').after(c), c.on("mousedown", e), f.on("$md.dragstart", n).on("$md.drag", o).on("$md.dragend", i), a.$on("$destroy", function () {
                c.off("mousedown", e).remove(), f.off("$md.dragstart", n).off("$md.drag", o).off("$md.dragend", i), g(), c = null, f = null, g = null;
              });
            }
          }

          var p = !s.hasOwnProperty("mdNoAutogrow");

          if (u(), p) {
            var b = s.hasOwnProperty("rows") ? parseInt(s.rows) : NaN,
                v = s.hasOwnProperty("maxRows") ? parseInt(s.maxRows) : NaN,
                E = a.$on("md-resize-textarea", o),
                $ = null,
                C = d[0];

            if (i(function () {
              e.nextTick(o);
            }, 10, !1), d.on("input", o), f && g.$formatters.push(l), b || d.attr("rows", 1), t.element(n).on("resize", o), a.$on("$destroy", m), s.hasOwnProperty("mdDetectHidden")) {
              var y = function () {
                var e = !1;
                return function () {
                  var t = 0 === C.offsetHeight;
                  t === !1 && e === !0 && o(), e = t;
                };
              }();

              a.$watch(function () {
                return e.nextTick(y, !1), !0;
              });
            }
          }
        }

        var h = c[0],
            f = !!c[1],
            g = c[1] || e.fakeNgModel(),
            b = c[2],
            v = t.isDefined(s.readonly),
            E = e.parseAttributeBoolean(s.mdNoAsterisk),
            $ = d[0].tagName.toLowerCase();

        if (h) {
          if ("hidden" === s.type) return void d.attr("aria-hidden", "true");

          if (h.input) {
            if (h.input[0].contains(d[0])) return;
            throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!");
          }

          h.input = d, m();
          var C = t.element('<div class="md-errors-spacer">');
          d.after(C), h.label || o.expect(d, "aria-label", s.placeholder), d.addClass("md-input"), d.attr("id") || d.attr("id", "input_" + e.nextUid()), "input" === $ && "number" === s.type && s.min && s.max && !s.step ? d.attr("step", "any") : "textarea" === $ && p(), f || u();

          var y = h.isErrorGetter || function () {
            return g.$invalid && (g.$touched || b && b.$submitted);
          };

          a.$watch(y, h.setInvalid), s.ngValue && s.$observe("value", u), g.$parsers.push(l), g.$formatters.push(l), d.on("input", u), v || d.on("focus", function (t) {
            e.nextTick(function () {
              h.setFocused(!0);
            });
          }).on("blur", function (t) {
            e.nextTick(function () {
              h.setFocused(!1), u();
            });
          }), a.$on("$destroy", function () {
            h.setFocused(!1), h.setHasValue(!1), h.input = null;
          });
        }
      }

      return {
        restrict: "E",
        require: ["^?mdInputContainer", "?ngModel", "?^form"],
        link: a
      };
    }

    function r(e, n) {
      function o(o, i, r, a) {
        function d(e) {
          return c.parent ? (c.text(String(i.val() || e || "").length + " / " + s), e) : e;
        }

        var s,
            c,
            l,
            m = a[0],
            u = a[1];
        n.nextTick(function () {
          l = t.element(u.element[0].querySelector(".md-errors-spacer")), c = t.element('<div class="md-char-counter">'), l.append(c), r.$set("ngTrim", "false"), o.$watch(r.mdMaxlength, function (n) {
            s = n, t.isNumber(n) && n > 0 ? (c.parent().length || e.enter(c, l), d()) : e.leave(c);
          }), m.$validators["md-maxlength"] = function (e, n) {
            return !t.isNumber(s) || s < 0 || (d(), (e || i.val() || n || "").length <= s);
          };
        });
      }

      return {
        restrict: "A",
        require: ["ngModel", "^mdInputContainer"],
        link: o
      };
    }

    function a(e) {
      function n(n, o, i, r) {
        if (r) {
          var a = r.element.find("label"),
              d = r.element.attr("md-no-float");
          if (a && a.length || "" === d || n.$eval(d)) return void r.setHasPlaceholder(!0);

          if ("MD-SELECT" != o[0].nodeName) {
            var s = t.element('<label ng-click="delegateClick()" tabindex="-1">' + i.placeholder + "</label>");
            i.$set("placeholder", null), r.element.addClass("md-icon-float").prepend(s), e(s)(n);
          }
        }
      }

      return {
        restrict: "A",
        require: "^^?mdInputContainer",
        priority: 200,
        link: {
          pre: n
        }
      };
    }

    function d(e) {
      function t(t, n, o) {
        function i() {
          a = !0, e(function () {
            n[0].select(), a = !1;
          }, 1, !1);
        }

        function r(e) {
          a && e.preventDefault();
        }

        if ("INPUT" === n[0].nodeName || "TEXTAREA" === n[0].nodeName) {
          var a = !1;
          n.on("focus", i).on("mouseup", r), t.$on("$destroy", function () {
            n.off("focus", i).off("mouseup", r);
          });
        }
      }

      return {
        restrict: "A",
        link: t
      };
    }

    function s() {
      function e(e, n, o, i) {
        i && (n.toggleClass("md-input-messages-animation", !0), n.toggleClass("md-auto-hide", !0), ("false" == o.mdAutoHide || t(o)) && n.toggleClass("md-auto-hide", !1));
      }

      function t(e) {
        return A.some(function (t) {
          return e[t];
        });
      }

      return {
        restrict: "EA",
        link: e,
        require: "^^?mdInputContainer"
      };
    }

    function c(e) {
      function t(t) {
        function n() {
          for (var e = t[0]; e = e.parentNode;) if (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE) return !0;

          return !1;
        }

        function o(t) {
          return !!e.getClosest(t, "md-input-container");
        }

        function i(e) {
          e.toggleClass("md-input-message-animation", !0);
        }

        if (o(t)) i(t);else if (n()) return function (e, n) {
          o(n) && i(t);
        };
      }

      return {
        restrict: "EA",
        compile: t,
        priority: 100
      };
    }

    function l(e, t, n, o) {
      return E(e, t, n, o), {
        addClass: function (e, t, n) {
          p(e, n);
        }
      };
    }

    function m(e, t, n, o) {
      return E(e, t, n, o), {
        enter: function (e, t) {
          p(e, t);
        },
        leave: function (e, t) {
          h(e, t);
        },
        addClass: function (e, t, n) {
          "ng-hide" == t ? h(e, n) : n();
        },
        removeClass: function (e, t, n) {
          "ng-hide" == t ? p(e, n) : n();
        }
      };
    }

    function u(e, t, n, o) {
      return E(e, t, n, o), {
        enter: function (e, t) {
          var n = f(e);
          n.start().done(t);
        },
        leave: function (e, t) {
          var n = g(e);
          n.start().done(t);
        }
      };
    }

    function p(e, n) {
      var o,
          i = [],
          r = v(e),
          a = r.children();
      return 0 == r.length || 0 == a.length ? (T.warn("mdInput messages show animation called on invalid messages element: ", e), void n()) : (t.forEach(a, function (e) {
        o = f(t.element(e)), i.push(o.start());
      }), void C.all(i, n));
    }

    function h(e, n) {
      var o,
          i = [],
          r = v(e),
          a = r.children();
      return 0 == r.length || 0 == a.length ? (T.warn("mdInput messages hide animation called on invalid messages element: ", e), void n()) : (t.forEach(a, function (e) {
        o = g(t.element(e)), i.push(o.start());
      }), void C.all(i, n));
    }

    function f(t) {
      var n = parseInt(e.getComputedStyle(t[0]).height),
          o = parseInt(e.getComputedStyle(t[0]).marginTop),
          i = v(t),
          r = b(t),
          a = o > -n;
      return a || i.hasClass("md-auto-hide") && !r.hasClass("md-input-invalid") ? y(t, {}) : y(t, {
        event: "enter",
        structural: !0,
        from: {
          opacity: 0,
          "margin-top": -n + "px"
        },
        to: {
          opacity: 1,
          "margin-top": "0"
        },
        duration: .3
      });
    }

    function g(t) {
      var n = t[0].offsetHeight,
          o = e.getComputedStyle(t[0]);
      return 0 === parseInt(o.opacity) ? y(t, {}) : y(t, {
        event: "leave",
        structural: !0,
        from: {
          opacity: 1,
          "margin-top": 0
        },
        to: {
          opacity: 0,
          "margin-top": -n + "px"
        },
        duration: .3
      });
    }

    function b(e) {
      var t = e.controller("mdInputContainer");
      return t.element;
    }

    function v(e) {
      return e.hasClass("md-input-messages-animation") ? e : e.hasClass("md-input-message-animation") ? t.element(M.getClosest(e, function (e) {
        return e.classList.contains("md-input-messages-animation");
      })) : t.element(e[0].querySelector(".md-input-messages-animation"));
    }

    function E(e, t, n, o) {
      C = e, y = t, M = n, T = o;
    }

    n.$inject = ["$mdTheming", "$parse"], i.$inject = ["$mdUtil", "$window", "$mdAria", "$timeout", "$mdGesture"], r.$inject = ["$animate", "$mdUtil"], a.$inject = ["$compile"], c.$inject = ["$mdUtil"], d.$inject = ["$timeout"], l.$inject = ["$$AnimateRunner", "$animateCss", "$mdUtil", "$log"], m.$inject = ["$$AnimateRunner", "$animateCss", "$mdUtil", "$log"], u.$inject = ["$$AnimateRunner", "$animateCss", "$mdUtil", "$log"];
    var $ = t.module("material.components.input", ["material.core"]).directive("mdInputContainer", n).directive("label", o).directive("input", i).directive("textarea", i).directive("mdMaxlength", r).directive("placeholder", a).directive("ngMessages", s).directive("ngMessage", c).directive("ngMessageExp", c).directive("mdSelectOnFocus", d).animation(".md-input-invalid", l).animation(".md-input-messages-animation", m).animation(".md-input-message-animation", u);
    e._mdMocksIncluded && $.service("$$mdInput", function () {
      return {
        messages: {
          show: p,
          hide: h,
          getElement: v
        }
      };
    }).service("mdInputInvalidAnimation", l).service("mdInputMessagesAnimation", m).service("mdInputMessageAnimation", u);
    var C,
        y,
        M,
        T,
        A = ["ngIf", "ngShow", "ngHide", "ngSwitchWhen", "ngSwitchDefault"];
  }(), function () {
    function e(e) {
      return {
        restrict: "E",
        compile: function (t) {
          return t[0].setAttribute("role", "list"), e;
        }
      };
    }

    function n(e, n, o, i) {
      var r = ["md-checkbox", "md-switch", "md-menu"];
      return {
        restrict: "E",
        controller: "MdListController",
        compile: function (a, d) {
          function s() {
            for (var e, t, n = ["md-switch", "md-checkbox"], o = 0; t = n[o]; ++o) if ((e = a.find(t)[0]) && !e.hasAttribute("aria-label")) {
              var i = a.find("p")[0];
              if (!i) return;
              e.setAttribute("aria-label", "Toggle " + i.textContent);
            }
          }

          function c() {
            var e = t.element(E),
                n = e.parent().hasClass("md-secondary-container") || E.parentNode.firstElementChild !== E,
                o = "left";
            n && (o = "right"), e.attr("md-position-mode") || e.attr("md-position-mode", o + " target");
            var i = e.children().eq(0);
            g(i[0]) || i.attr("ng-click", "$mdMenu.open($event)"), i.attr("aria-label") || i.attr("aria-label", "Open List Menu");
          }

          function l(n) {
            if ("div" == n) C = t.element('<div class="md-no-style md-list-item-inner">'), C.append(a.contents()), a.addClass("md-proxy-focus");else {
              C = t.element('<div class="md-button md-no-style">   <div class="md-list-item-inner"></div></div>');
              var o = t.element('<md-button class="md-no-style"></md-button>');
              p(a[0], o[0]), o.attr("aria-label") || o.attr("aria-label", e.getText(a)), a.hasClass("md-no-focus") && o.addClass("md-no-focus"), C.prepend(o), C.children().eq(1).append(a.contents()), a.addClass("_md-button-wrap");
            }
            a[0].setAttribute("tabindex", "-1"), a.append(C);
          }

          function m() {
            var e = t.element('<div class="md-secondary-container">');
            t.forEach($, function (t) {
              u(t, e);
            }), C.append(e);
          }

          function u(n, o) {
            if (n && !f(n) && n.hasAttribute("ng-click")) {
              e.expect(n, "aria-label");
              var i = t.element('<md-button class="md-secondary md-icon-button">');
              p(n, i[0], ["ng-if", "ng-hide", "ng-show"]), n.setAttribute("tabindex", "-1"), i.append(n), n = i[0];
            }

            n && (!g(n) || !d.ngClick && h(n)) && t.element(n).removeClass("md-secondary"), a.addClass("md-with-secondary"), o.append(n);
          }

          function p(e, n, i) {
            var r = o.prefixer(["ng-if", "ng-click", "ng-dblclick", "aria-label", "ng-disabled", "ui-sref", "href", "ng-href", "target", "ng-attr-ui-sref", "ui-sref-opts"]);
            i && (r = r.concat(o.prefixer(i))), t.forEach(r, function (t) {
              e.hasAttribute(t) && (n.setAttribute(t, e.getAttribute(t)), e.removeAttribute(t));
            });
          }

          function h(e) {
            return r.indexOf(e.nodeName.toLowerCase()) != -1;
          }

          function f(e) {
            var t = e.nodeName.toUpperCase();
            return "MD-BUTTON" == t || "BUTTON" == t;
          }

          function g(e) {
            for (var t = e.attributes, n = 0; n < t.length; n++) if ("ngClick" === d.$normalize(t[n].name)) return !0;

            return !1;
          }

          function b(e, a, d, s) {
            function c() {
              p && p.children && !b && !v && t.forEach(r, function (e) {
                t.forEach(p.querySelectorAll(e + ":not(.md-secondary)"), function (e) {
                  u.push(e);
                });
              });
            }

            function l() {
              (1 == u.length || b) && (a.addClass("md-clickable"), b || s.attachRipple(e, t.element(a[0].querySelector(".md-no-style"))));
            }

            function m(e) {
              var t = ["md-slider"];
              if (!e.path) return t.indexOf(e.target.tagName.toLowerCase()) !== -1;

              for (var n = e.path.indexOf(a.children()[0]), o = 0; o < n; o++) if (t.indexOf(e.path[o].tagName.toLowerCase()) !== -1) return !0;
            }

            a.addClass("_md");
            var u = [],
                p = a[0].firstElementChild,
                h = a.hasClass("_md-button-wrap"),
                f = h ? p.firstElementChild : p,
                b = f && g(f),
                v = a.hasClass("md-no-proxy");
            c(), l(), u.length && t.forEach(u, function (n) {
              n = t.element(n), e.mouseActive = !1, n.on("mousedown", function () {
                e.mouseActive = !0, i(function () {
                  e.mouseActive = !1;
                }, 100);
              }).on("focus", function () {
                e.mouseActive === !1 && a.addClass("md-focused"), n.on("blur", function t() {
                  a.removeClass("md-focused"), n.off("blur", t);
                });
              });
            });

            var E = function (e) {
              if ("INPUT" != e.target.nodeName && "TEXTAREA" != e.target.nodeName && !e.target.isContentEditable) {
                var t = e.which || e.keyCode;
                t == n.KEY_CODE.SPACE && f && (f.click(), e.preventDefault(), e.stopPropagation());
              }
            };

            b || u.length || f && f.addEventListener("keypress", E), a.off("click"), a.off("keypress"), 1 == u.length && f && a.children().eq(0).on("click", function (e) {
              if (!m(e)) {
                var n = o.getClosest(e.target, "BUTTON");
                !n && f.contains(e.target) && t.forEach(u, function (n) {
                  e.target === n || n.contains(e.target) || ("MD-MENU" === n.nodeName && (n = n.children[0]), t.element(n).triggerHandler("click"));
                });
              }
            }), e.$on("$destroy", function () {
              f && f.removeEventListener("keypress", E);
            });
          }

          var v,
              E,
              $ = a[0].querySelectorAll(".md-secondary"),
              C = a;
          if (a[0].setAttribute("role", "listitem"), d.ngClick || d.ngDblclick || d.ngHref || d.href || d.uiSref || d.ngAttrUiSref) l("button");else if (!a.hasClass("md-no-proxy")) {
            for (var y, M = 0; y = r[M]; ++M) if (E = a[0].querySelector(y)) {
              v = !0;
              break;
            }

            v ? l("div") : a.addClass("md-no-proxy");
          }
          return m(), s(), v && "MD-MENU" === E.nodeName && c(), b;
        }
      };
    }

    function o(e, t, n) {
      function o(e, t) {
        var o = {};
        n.attach(e, t, o);
      }

      var i = this;
      i.attachRipple = o;
    }

    o.$inject = ["$scope", "$element", "$mdListInkRipple"], e.$inject = ["$mdTheming"], n.$inject = ["$mdAria", "$mdConstant", "$mdUtil", "$timeout"], t.module("material.components.list", ["material.core"]).controller("MdListController", o).directive("mdList", e).directive("mdListItem", n);
  }(), function () {
    t.module("material.components.menu", ["material.core", "material.components.backdrop"]);
  }(), function () {
    t.module("material.components.menuBar", ["material.core", "material.components.icon", "material.components.menu"]);
  }(), function () {
    function e(e, n) {
      return {
        restrict: "E",
        transclude: !0,
        controller: o,
        controllerAs: "ctrl",
        bindToController: !0,
        scope: {
          mdSelectedNavItem: "=?",
          mdNoInkBar: "=?",
          navBarAriaLabel: "@?"
        },
        template: '<div class="md-nav-bar"><nav role="navigation"><ul class="_md-nav-bar-list" ng-transclude role="listbox"tabindex="0"ng-focus="ctrl.onFocus()"ng-keydown="ctrl.onKeydown($event)"aria-label="{{ctrl.navBarAriaLabel}}"></ul></nav><md-nav-ink-bar ng-hide="ctrl.mdNoInkBar"></md-nav-ink-bar></div>',
        link: function (o, i, r, a) {
          n(i), a.navBarAriaLabel || e.expectAsync(i, "aria-label", t.noop);
        }
      };
    }

    function o(e, t, n, o) {
      this._$timeout = n, this._$scope = t, this._$mdConstant = o, this.mdSelectedNavItem, this.navBarAriaLabel, this._navBarEl = e[0], this._inkbar;

      var i = this,
          r = this._$scope.$watch(function () {
        return i._navBarEl.querySelectorAll("._md-nav-button").length;
      }, function (e) {
        e > 0 && (i._initTabs(), r());
      });
    }

    function i(e, n) {
      return {
        restrict: "E",
        require: ["mdNavItem", "^mdNavBar"],
        controller: r,
        bindToController: !0,
        controllerAs: "ctrl",
        replace: !0,
        transclude: !0,
        template: function (e, t) {
          var n,
              o,
              i,
              r = t.mdNavClick,
              a = t.mdNavHref,
              d = t.mdNavSref,
              s = t.srefOpts;
          if ((r ? 1 : 0) + (a ? 1 : 0) + (d ? 1 : 0) > 1) throw Error("Must not specify more than one of the md-nav-click, md-nav-href, or md-nav-sref attributes per nav-item directive.");
          return r ? n = 'ng-click="ctrl.mdNavClick()"' : a ? n = 'ng-href="{{ctrl.mdNavHref}}"' : d && (n = 'ui-sref="{{ctrl.mdNavSref}}"'), o = s ? 'ui-sref-opts="{{ctrl.srefOpts}}" ' : "", n && (i = '<md-button class="_md-nav-button md-accent" ng-class="ctrl.getNgClassMap()" ng-blur="ctrl.setFocused(false)" tabindex="-1" ' + o + n + '><span ng-transclude class="_md-nav-button-text"></span></md-button>'), '<li class="md-nav-item" role="option" aria-selected="{{ctrl.isSelected()}}">' + (i || "") + "</li>";
        },
        scope: {
          mdNavClick: "&?",
          mdNavHref: "@?",
          mdNavSref: "@?",
          srefOpts: "=?",
          name: "@"
        },
        link: function (o, i, r, a) {
          n(function () {
            var n = a[0],
                r = a[1],
                d = t.element(i[0].querySelector("._md-nav-button"));
            n.name || (n.name = t.element(i[0].querySelector("._md-nav-button-text")).text().trim()), d.on("click", function () {
              r.mdSelectedNavItem = n.name, o.$apply();
            }), e.expectWithText(i, "aria-label");
          });
        }
      };
    }

    function r(e) {
      this._$element = e, this.mdNavClick, this.mdNavHref, this.mdNavSref, this.srefOpts, this.name, this._selected = !1, this._focused = !1;
    }

    o.$inject = ["$element", "$scope", "$timeout", "$mdConstant"], i.$inject = ["$mdAria", "$$rAF"], r.$inject = ["$element"], e.$inject = ["$mdAria", "$mdTheming"], t.module("material.components.navBar", ["material.core"]).controller("MdNavBarController", o).directive("mdNavBar", e).controller("MdNavItemController", r).directive("mdNavItem", i), o.prototype._initTabs = function () {
      this._inkbar = t.element(this._navBarEl.querySelector("md-nav-ink-bar"));
      var e = this;
      this._$timeout(function () {
        e._updateTabs(e.mdSelectedNavItem, n);
      }), this._$scope.$watch("ctrl.mdSelectedNavItem", function (t, n) {
        e._$timeout(function () {
          e._updateTabs(t, n);
        });
      });
    }, o.prototype._updateTabs = function (e, t) {
      var n = this,
          o = this._getTabs();

      if (o) {
        var i = -1,
            r = -1,
            a = this._getTabByName(e),
            d = this._getTabByName(t);

        d && (d.setSelected(!1), i = o.indexOf(d)), a && (a.setSelected(!0), r = o.indexOf(a)), this._$timeout(function () {
          n._updateInkBarStyles(a, r, i);
        });
      }
    }, o.prototype._updateInkBarStyles = function (e, t, n) {
      if (this._inkbar.toggleClass("_md-left", t < n).toggleClass("_md-right", t > n), this._inkbar.css({
        display: t < 0 ? "none" : ""
      }), e) {
        var o = e.getButtonEl(),
            i = o.offsetLeft;

        this._inkbar.css({
          left: i + "px",
          width: o.offsetWidth + "px"
        });
      }
    }, o.prototype._getTabs = function () {
      var e = Array.prototype.slice.call(this._navBarEl.querySelectorAll(".md-nav-item")).map(function (e) {
        return t.element(e).controller("mdNavItem");
      });
      return e.indexOf(n) ? e : null;
    }, o.prototype._getTabByName = function (e) {
      return this._findTab(function (t) {
        return t.getName() == e;
      });
    }, o.prototype._getSelectedTab = function () {
      return this._findTab(function (e) {
        return e.isSelected();
      });
    }, o.prototype.getFocusedTab = function () {
      return this._findTab(function (e) {
        return e.hasFocus();
      });
    }, o.prototype._findTab = function (e) {
      for (var t = this._getTabs(), n = 0; n < t.length; n++) if (e(t[n])) return t[n];

      return null;
    }, o.prototype.onFocus = function () {
      var e = this._getSelectedTab();

      e && e.setFocused(!0);
    }, o.prototype._moveFocus = function (e, t) {
      e.setFocused(!1), t.setFocused(!0);
    }, o.prototype.onKeydown = function (e) {
      var t = this._$mdConstant.KEY_CODE,
          n = this._getTabs(),
          o = this.getFocusedTab();

      if (o) {
        var i = n.indexOf(o);

        switch (e.keyCode) {
          case t.UP_ARROW:
          case t.LEFT_ARROW:
            i > 0 && this._moveFocus(o, n[i - 1]);
            break;

          case t.DOWN_ARROW:
          case t.RIGHT_ARROW:
            i < n.length - 1 && this._moveFocus(o, n[i + 1]);
            break;

          case t.SPACE:
          case t.ENTER:
            this._$timeout(function () {
              o.getButtonEl().click();
            });

        }
      }
    }, r.prototype.getNgClassMap = function () {
      return {
        "md-active": this._selected,
        "md-primary": this._selected,
        "md-unselected": !this._selected,
        "md-focused": this._focused
      };
    }, r.prototype.getName = function () {
      return this.name;
    }, r.prototype.getButtonEl = function () {
      return this._$element[0].querySelector("._md-nav-button");
    }, r.prototype.setSelected = function (e) {
      this._selected = e;
    }, r.prototype.isSelected = function () {
      return this._selected;
    }, r.prototype.setFocused = function (e) {
      this._focused = e, e && this.getButtonEl().focus();
    }, r.prototype.hasFocus = function () {
      return this._focused;
    };
  }(), function () {
    t.module("material.components.progressCircular", ["material.core"]);
  }(), function () {
    function e() {
      return {
        definePreset: o,
        getAllPresets: i,
        clearPresets: r,
        $get: a()
      };
    }

    function o(e, t) {
      if (!e || !t) throw new Error("mdPanelProvider: The panel preset definition is malformed. The name and preset object are required.");
      if (g.hasOwnProperty(e)) throw new Error("mdPanelProvider: The panel preset you have requested has already been defined.");
      delete t.id, delete t.position, delete t.animation, g[e] = t;
    }

    function i() {
      return t.copy(g);
    }

    function r() {
      g = {};
    }

    function a() {
      return ["$rootElement", "$rootScope", "$injector", "$window", function (e, t, n, o) {
        return new d(g, e, t, n, o);
      }];
    }

    function d(e, n, o, i, r) {
      this._defaultConfigOptions = {
        bindToController: !0,
        clickOutsideToClose: !1,
        disableParentScroll: !1,
        escapeToClose: !1,
        focusOnOpen: !0,
        fullscreen: !1,
        hasBackdrop: !1,
        propagateContainerEvents: !1,
        transformTemplate: t.bind(this, this._wrapTemplate),
        trapFocus: !1,
        zIndex: p
      }, this._config = {}, this._presets = e, this._$rootElement = n, this._$rootScope = o, this._$injector = i, this._$window = r, this._$mdUtil = this._$injector.get("$mdUtil"), this._trackedPanels = {}, this._groups = Object.create(null), this.animation = l.animation, this.xPosition = c.xPosition, this.yPosition = c.yPosition, this.interceptorTypes = s.interceptorTypes, this.closeReasons = s.closeReasons, this.absPosition = c.absPosition;
    }

    function s(e, t) {
      this._$q = t.get("$q"), this._$mdCompiler = t.get("$mdCompiler"), this._$mdConstant = t.get("$mdConstant"), this._$mdUtil = t.get("$mdUtil"), this._$mdTheming = t.get("$mdTheming"), this._$rootScope = t.get("$rootScope"), this._$animate = t.get("$animate"), this._$mdPanel = t.get("$mdPanel"), this._$log = t.get("$log"), this._$window = t.get("$window"), this._$$rAF = t.get("$$rAF"), this.id = e.id, this.config = e, this.panelContainer, this.panelEl, this.isAttached = !1, this._removeListeners = [], this._topFocusTrap, this._bottomFocusTrap, this._backdropRef, this._restoreScroll = null, this._interceptors = Object.create(null), this._compilerCleanup = null, this._restoreCache = {
        styles: "",
        classes: ""
      };
    }

    function c(e) {
      this._$window = e.get("$window"), this._isRTL = "rtl" === e.get("$mdUtil").bidi(), this._$mdConstant = e.get("$mdConstant"), this._absolute = !1, this._relativeToEl, this._top = "", this._bottom = "", this._left = "", this._right = "", this._translateX = [], this._translateY = [], this._positions = [], this._actualPosition;
    }

    function l(e) {
      this._$mdUtil = e.get("$mdUtil"), this._openFrom, this._closeTo, this._animationClass = "", this._openDuration, this._closeDuration, this._rawDuration;
    }

    function m(e) {
      var n = t.isString(e) ? document.querySelector(e) : e;
      return t.element(n);
    }

    function u(e, t) {
      var n = getComputedStyle(e[0] || e)[t],
          o = n.indexOf("("),
          i = n.lastIndexOf(")"),
          r = {
        x: 0,
        y: 0
      };

      if (o > -1 && i > -1) {
        var a = n.substring(o + 1, i).split(", ").slice(-2);
        r.x = parseInt(a[0]), r.y = parseInt(a[1]);
      }

      return r;
    }

    d.$inject = ["presets", "$rootElement", "$rootScope", "$injector", "$window"], t.module("material.components.panel", ["material.core", "material.components.backdrop"]).provider("$mdPanel", e);
    var p = 80,
        h = "_md-panel-hidden",
        f = t.element('<div class="_md-panel-focus-trap" tabindex="0"></div>'),
        g = {};
    d.prototype.create = function (e, n) {
      if ("string" == typeof e ? e = this._getPresetByName(e) : "object" != typeof e || !t.isUndefined(n) && n || (n = e, e = {}), e = e || {}, n = n || {}, t.isDefined(n.id) && this._trackedPanels[n.id]) {
        var o = this._trackedPanels[n.id];
        return t.extend(o.config, n), o;
      }

      this._config = t.extend({
        id: n.id || "panel_" + this._$mdUtil.nextUid(),
        scope: this._$rootScope.$new(!0),
        attachTo: this._$rootElement
      }, this._defaultConfigOptions, n, e);
      var i = new s(this._config, this._$injector);
      return this._trackedPanels[n.id] = i, this._config.groupName && (t.isString(this._config.groupName) && (this._config.groupName = [this._config.groupName]), t.forEach(this._config.groupName, function (e) {
        i.addToGroup(e);
      })), this._config.scope.$on("$destroy", t.bind(i, i.detach)), i;
    }, d.prototype.open = function (e, t) {
      var n = this.create(e, t);
      return n.open().then(function () {
        return n;
      });
    }, d.prototype._getPresetByName = function (e) {
      if (!this._presets[e]) throw new Error("mdPanel: The panel preset configuration that you requested does not exist. Use the $mdPanelProvider to create a preset before requesting one.");
      return this._presets[e];
    }, d.prototype.newPanelPosition = function () {
      return new c(this._$injector);
    }, d.prototype.newPanelAnimation = function () {
      return new l(this._$injector);
    }, d.prototype.newPanelGroup = function (e, t) {
      if (!this._groups[e]) {
        t = t || {};
        var n = {
          panels: [],
          openPanels: [],
          maxOpen: t.maxOpen > 0 ? t.maxOpen : 1 / 0
        };
        this._groups[e] = n;
      }

      return this._groups[e];
    }, d.prototype.setGroupMaxOpen = function (e, t) {
      if (!this._groups[e]) throw new Error("mdPanel: Group does not exist yet. Call newPanelGroup().");
      this._groups[e].maxOpen = t;
    }, d.prototype._openCountExceedsMaxOpen = function (e) {
      if (this._groups[e]) {
        var t = this._groups[e];
        return t.maxOpen > 0 && t.openPanels.length > t.maxOpen;
      }

      return !1;
    }, d.prototype._closeFirstOpenedPanel = function (e) {
      this._groups[e].openPanels[0].close();
    }, d.prototype._wrapTemplate = function (e) {
      var t = e || "";
      return '<div class="md-panel-outer-wrapper">  <div class="md-panel _md-panel-offscreen">' + t + "</div></div>";
    }, d.prototype._wrapContentElement = function (e) {
      var n = t.element('<div class="md-panel-outer-wrapper">');
      return e.addClass("md-panel _md-panel-offscreen"), n.append(e), n;
    }, s.interceptorTypes = {
      CLOSE: "onClose"
    }, s.prototype.open = function () {
      var e = this;
      return this._$q(function (n, o) {
        var i = e._done(n, e),
            r = e._simpleBind(e.show, e),
            a = function () {
          e.config.groupName && t.forEach(e.config.groupName, function (t) {
            e._$mdPanel._openCountExceedsMaxOpen(t) && e._$mdPanel._closeFirstOpenedPanel(t);
          });
        };

        e.attach().then(r).then(a).then(i)["catch"](o);
      });
    }, s.prototype.close = function (e) {
      var n = this;
      return this._$q(function (o, i) {
        n._callInterceptors(s.interceptorTypes.CLOSE).then(function () {
          var r = n._done(o, n),
              a = n._simpleBind(n.detach, n),
              d = n.config.onCloseSuccess || t.noop;

          d = t.bind(n, d, n, e), n.hide().then(a).then(r).then(d)["catch"](i);
        }, i);
      });
    }, s.prototype.attach = function () {
      if (this.isAttached && this.panelEl) return this._$q.when(this);
      var e = this;
      return this._$q(function (n, o) {
        var i = e._done(n, e),
            r = e.config.onDomAdded || t.noop,
            a = function (t) {
          return e.isAttached = !0, e._addEventListeners(), t;
        };

        e._$q.all([e._createBackdrop(), e._createPanel().then(a)["catch"](o)]).then(r).then(i)["catch"](o);
      });
    }, s.prototype.detach = function () {
      if (!this.isAttached) return this._$q.when(this);

      var e = this,
          n = e.config.onDomRemoved || t.noop,
          o = function () {
        return e._removeEventListeners(), e._topFocusTrap && e._topFocusTrap.parentNode && e._topFocusTrap.parentNode.removeChild(e._topFocusTrap), e._bottomFocusTrap && e._bottomFocusTrap.parentNode && e._bottomFocusTrap.parentNode.removeChild(e._bottomFocusTrap), e._restoreCache.classes && (e.panelEl[0].className = e._restoreCache.classes), e.panelEl[0].style.cssText = e._restoreCache.styles || "", e._compilerCleanup(), e.panelContainer.remove(), e.isAttached = !1, e._$q.when(e);
      };

      return this._restoreScroll && (this._restoreScroll(), this._restoreScroll = null), this._$q(function (t, i) {
        var r = e._done(t, e);

        e._$q.all([o(), !e._backdropRef || e._backdropRef.detach()]).then(n).then(r)["catch"](i);
      });
    }, s.prototype.destroy = function () {
      var e = this;
      this.config.groupName && t.forEach(this.config.groupName, function (t) {
        e.removeFromGroup(t);
      }), this.config.scope.$destroy(), this.config.locals = null, this._interceptors = null;
    }, s.prototype.show = function () {
      if (!this.panelContainer) return this._$q(function (e, t) {
        t("mdPanel: Panel does not exist yet. Call open() or attach().");
      });
      if (!this.panelContainer.hasClass(h)) return this._$q.when(this);

      var e = this,
          n = function () {
        return e.panelContainer.removeClass(h), e._animateOpen();
      };

      return this._$q(function (o, i) {
        var r = e._done(o, e),
            a = e.config.onOpenComplete || t.noop,
            d = function () {
          e.config.groupName && t.forEach(e.config.groupName, function (t) {
            e._$mdPanel._groups[t].openPanels.push(e);
          });
        };

        e._$q.all([e._backdropRef ? e._backdropRef.show() : e, n().then(function () {
          e._focusOnOpen();
        }, i)]).then(a).then(d).then(r)["catch"](i);
      });
    }, s.prototype.hide = function () {
      if (!this.panelContainer) return this._$q(function (e, t) {
        t("mdPanel: Panel does not exist yet. Call open() or attach().");
      });
      if (this.panelContainer.hasClass(h)) return this._$q.when(this);
      var e = this;
      return this._$q(function (n, o) {
        var i = e._done(n, e),
            r = e.config.onRemoving || t.noop,
            a = function () {
          e.panelContainer.addClass(h);
        },
            d = function () {
          if (e.config.groupName) {
            var n;
            t.forEach(e.config.groupName, function (t) {
              t = e._$mdPanel._groups[t], n = t.openPanels.indexOf(e), n > -1 && t.openPanels.splice(n, 1);
            });
          }
        },
            s = function () {
          var t = e.config.origin;
          t && m(t).focus();
        };

        e._$q.all([e._backdropRef ? e._backdropRef.hide() : e, e._animateClose().then(r).then(a).then(d).then(s)["catch"](o)]).then(i, o);
      });
    }, s.prototype.addClass = function (e, t) {
      if (this._$log.warn("mdPanel: The addClass method is in the process of being deprecated. Full deprecation is scheduled for the AngularJS Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."), !this.panelContainer) throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");
      t || this.panelContainer.hasClass(e) ? t && !this.panelEl.hasClass(e) && this.panelEl.addClass(e) : this.panelContainer.addClass(e);
    }, s.prototype.removeClass = function (e, t) {
      if (this._$log.warn("mdPanel: The removeClass method is in the process of being deprecated. Full deprecation is scheduled for the AngularJS Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."), !this.panelContainer) throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");
      !t && this.panelContainer.hasClass(e) ? this.panelContainer.removeClass(e) : t && this.panelEl.hasClass(e) && this.panelEl.removeClass(e);
    }, s.prototype.toggleClass = function (e, t) {
      if (this._$log.warn("mdPanel: The toggleClass method is in the process of being deprecated. Full deprecation is scheduled for the AngularJS Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."), !this.panelContainer) throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");
      t ? this.panelEl.toggleClass(e) : this.panelContainer.toggleClass(e);
    }, s.prototype._compile = function () {
      var e = this;
      return e._$mdCompiler.compile(e.config).then(function (n) {
        var o = e.config;

        if (o.contentElement) {
          var i = n.element;
          e._restoreCache.styles = i[0].style.cssText, e._restoreCache.classes = i[0].className, e.panelContainer = e._$mdPanel._wrapContentElement(i), e.panelEl = i;
        } else e.panelContainer = n.link(o.scope), e.panelEl = t.element(e.panelContainer[0].querySelector(".md-panel"));

        return e._compilerCleanup = n.cleanup, m(e.config.attachTo).append(e.panelContainer), e;
      });
    }, s.prototype._createPanel = function () {
      var e = this;
      return this._$q(function (t, n) {
        e.config.locals || (e.config.locals = {}), e.config.locals.mdPanelRef = e, e._compile().then(function () {
          e.config.disableParentScroll && (e._restoreScroll = e._$mdUtil.disableScrollAround(null, e.panelContainer, {
            disableScrollMask: !0
          })), e.config.panelClass && e.panelEl.addClass(e.config.panelClass), e.config.propagateContainerEvents && e.panelContainer.css("pointer-events", "none"), e._$animate.pin && e._$animate.pin(e.panelContainer, m(e.config.attachTo)), e._configureTrapFocus(), e._addStyles().then(function () {
            t(e);
          }, n);
        }, n);
      });
    }, s.prototype._addStyles = function () {
      var e = this;
      return this._$q(function (t) {
        e.panelContainer.css("z-index", e.config.zIndex), e.panelEl.css("z-index", e.config.zIndex + 1);

        var n = function () {
          e._setTheming(), e.panelEl.removeClass("_md-panel-offscreen"), e.panelContainer.addClass(h), t(e);
        };

        if (e.config.fullscreen) return e.panelEl.addClass("_md-panel-fullscreen"), void n();
        var o = e.config.position;
        return o ? void e._$rootScope.$$postDigest(function () {
          e._updatePosition(!0), e._setTheming(), t(e);
        }) : void n();
      });
    }, s.prototype._setTheming = function () {
      this._$mdTheming(this.panelEl), this._$mdTheming(this.panelContainer);
    }, s.prototype.updatePosition = function (e) {
      if (!this.panelContainer) throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");
      this.config.position = e, this._updatePosition();
    }, s.prototype._updatePosition = function (e) {
      var t = this.config.position;
      t && (t._setPanelPosition(this.panelEl), e && (this.panelEl.removeClass("_md-panel-offscreen"), this.panelContainer.addClass(h)), this.panelEl.css(c.absPosition.TOP, t.getTop()), this.panelEl.css(c.absPosition.BOTTOM, t.getBottom()), this.panelEl.css(c.absPosition.LEFT, t.getLeft()), this.panelEl.css(c.absPosition.RIGHT, t.getRight()));
    }, s.prototype._focusOnOpen = function () {
      if (this.config.focusOnOpen) {
        var e = this;

        this._$rootScope.$$postDigest(function () {
          var t = e._$mdUtil.findFocusTarget(e.panelEl) || e.panelEl;
          t.focus();
        });
      }
    }, s.prototype._createBackdrop = function () {
      if (this.config.hasBackdrop) {
        if (!this._backdropRef) {
          var e = this._$mdPanel.newPanelAnimation().openFrom(this.config.attachTo).withAnimation({
            open: "_md-opaque-enter",
            close: "_md-opaque-leave"
          });

          this.config.animation && e.duration(this.config.animation._rawDuration);
          var t = {
            animation: e,
            attachTo: this.config.attachTo,
            focusOnOpen: !1,
            panelClass: "_md-panel-backdrop",
            zIndex: this.config.zIndex - 1
          };
          this._backdropRef = this._$mdPanel.create(t);
        }

        if (!this._backdropRef.isAttached) return this._backdropRef.attach();
      }
    }, s.prototype._addEventListeners = function () {
      this._configureEscapeToClose(), this._configureClickOutsideToClose(), this._configureScrollListener();
    }, s.prototype._removeEventListeners = function () {
      this._removeListeners && this._removeListeners.forEach(function (e) {
        e();
      }), this._removeListeners = [];
    }, s.prototype._configureEscapeToClose = function () {
      if (this.config.escapeToClose) {
        var e = m(this.config.attachTo),
            t = this,
            n = function (e) {
          e.keyCode === t._$mdConstant.KEY_CODE.ESCAPE && (e.stopPropagation(), e.preventDefault(), t.close(s.closeReasons.ESCAPE));
        };

        this.panelContainer.on("keydown", n), e.on("keydown", n), this._removeListeners.push(function () {
          t.panelContainer.off("keydown", n), e.off("keydown", n);
        });
      }
    }, s.prototype._configureClickOutsideToClose = function () {
      if (this.config.clickOutsideToClose) {
        var e,
            n = this.config.propagateContainerEvents ? t.element(document.body) : this.panelContainer,
            o = function (t) {
          e = t.target;
        },
            i = this,
            r = function (t) {
          i.config.propagateContainerEvents ? e === i.panelEl[0] || i.panelEl[0].contains(e) || i.close() : e === n[0] && t.target === n[0] && (t.stopPropagation(), t.preventDefault(), i.close(s.closeReasons.CLICK_OUTSIDE));
        };

        n.on("mousedown", o), n.on("mouseup", r), this._removeListeners.push(function () {
          n.off("mousedown", o), n.off("mouseup", r);
        });
      }
    }, s.prototype._configureScrollListener = function () {
      if (!this.config.disableParentScroll) {
        var e = t.bind(this, this._updatePosition),
            n = this._$$rAF.throttle(e),
            o = this,
            i = function () {
          n();
        };

        this._$window.addEventListener("scroll", i, !0), this._removeListeners.push(function () {
          o._$window.removeEventListener("scroll", i, !0);
        });
      }
    }, s.prototype._configureTrapFocus = function () {
      if (this.panelEl.attr("tabIndex", "-1"), this.config.trapFocus) {
        var e = this.panelEl;
        this._topFocusTrap = f.clone()[0], this._bottomFocusTrap = f.clone()[0];

        var t = function () {
          e.focus();
        };

        this._topFocusTrap.addEventListener("focus", t), this._bottomFocusTrap.addEventListener("focus", t), this._removeListeners.push(this._simpleBind(function () {
          this._topFocusTrap.removeEventListener("focus", t), this._bottomFocusTrap.removeEventListener("focus", t);
        }, this)), e[0].parentNode.insertBefore(this._topFocusTrap, e[0]), e.after(this._bottomFocusTrap);
      }
    }, s.prototype.updateAnimation = function (e) {
      this.config.animation = e, this._backdropRef && this._backdropRef.config.animation.duration(e._rawDuration);
    }, s.prototype._animateOpen = function () {
      this.panelContainer.addClass("md-panel-is-showing");
      var e = this.config.animation;
      if (!e) return this.panelContainer.addClass("_md-panel-shown"), this._$q.when(this);
      var t = this;
      return this._$q(function (n) {
        var o = t._done(n, t),
            i = function () {
          t._$log.warn("mdPanel: MdPanel Animations failed. Showing panel without animating."), o();
        };

        e.animateOpen(t.panelEl).then(o, i);
      });
    }, s.prototype._animateClose = function () {
      var e = this.config.animation;
      if (!e) return this.panelContainer.removeClass("md-panel-is-showing"), this.panelContainer.removeClass("_md-panel-shown"), this._$q.when(this);
      var t = this;
      return this._$q(function (n) {
        var o = function () {
          t.panelContainer.removeClass("md-panel-is-showing"), n(t);
        },
            i = function () {
          t._$log.warn("mdPanel: MdPanel Animations failed. Hiding panel without animating."), o();
        };

        e.animateClose(t.panelEl).then(o, i);
      });
    }, s.prototype.registerInterceptor = function (e, n) {
      var o = null;
      if (t.isString(e) ? t.isFunction(n) || (o = "Interceptor callback must be a function, instead got " + typeof n) : o = "Interceptor type must be a string, instead got " + typeof e, o) throw new Error("MdPanel: " + o);
      var i = this._interceptors[e] = this._interceptors[e] || [];
      return i.indexOf(n) === -1 && i.push(n), this;
    }, s.prototype.removeInterceptor = function (e, t) {
      var n = this._interceptors[e] ? this._interceptors[e].indexOf(t) : -1;
      return n > -1 && this._interceptors[e].splice(n, 1), this;
    }, s.prototype.removeAllInterceptors = function (e) {
      return e ? this._interceptors[e] = [] : this._interceptors = Object.create(null), this;
    }, s.prototype._callInterceptors = function (e) {
      var n = this,
          o = n._$q,
          i = n._interceptors && n._interceptors[e] || [];
      return i.reduceRight(function (e, i) {
        var r = i && t.isFunction(i.then),
            a = r ? i : null;
        return e.then(function () {
          if (!a) try {
            a = i(n);
          } catch (e) {
            a = o.reject(e);
          }
          return a;
        });
      }, o.resolve(n));
    }, s.prototype._simpleBind = function (e, t) {
      return function (n) {
        return e.apply(t, n);
      };
    }, s.prototype._done = function (e, t) {
      return function () {
        e(t);
      };
    }, s.prototype.addToGroup = function (e) {
      this._$mdPanel._groups[e] || this._$mdPanel.newPanelGroup(e);
      var t = this._$mdPanel._groups[e],
          n = t.panels.indexOf(this);
      n < 0 && t.panels.push(this);
    }, s.prototype.removeFromGroup = function (e) {
      if (!this._$mdPanel._groups[e]) throw new Error("mdPanel: The group " + e + " does not exist.");
      var t = this._$mdPanel._groups[e],
          n = t.panels.indexOf(this);
      n > -1 && t.panels.splice(n, 1);
    }, s.closeReasons = {
      CLICK_OUTSIDE: "clickOutsideToClose",
      ESCAPE: "escapeToClose"
    }, c.xPosition = {
      CENTER: "center",
      ALIGN_START: "align-start",
      ALIGN_END: "align-end",
      OFFSET_START: "offset-start",
      OFFSET_END: "offset-end"
    }, c.yPosition = {
      CENTER: "center",
      ALIGN_TOPS: "align-tops",
      ALIGN_BOTTOMS: "align-bottoms",
      ABOVE: "above",
      BELOW: "below"
    }, c.absPosition = {
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    }, c.viewportMargin = 8, c.prototype.absolute = function () {
      return this._absolute = !0, this;
    }, c.prototype._setPosition = function (e, n) {
      if (e === c.absPosition.RIGHT || e === c.absPosition.LEFT) this._left = this._right = "";else {
        if (e !== c.absPosition.BOTTOM && e !== c.absPosition.TOP) {
          var o = Object.keys(c.absPosition).join().toLowerCase();
          throw new Error("mdPanel: Position must be one of " + o + ".");
        }

        this._top = this._bottom = "";
      }
      return this["_" + e] = t.isString(n) ? n : "0", this;
    }, c.prototype.top = function (e) {
      return this._setPosition(c.absPosition.TOP, e);
    }, c.prototype.bottom = function (e) {
      return this._setPosition(c.absPosition.BOTTOM, e);
    }, c.prototype.start = function (e) {
      var t = this._isRTL ? c.absPosition.RIGHT : c.absPosition.LEFT;
      return this._setPosition(t, e);
    }, c.prototype.end = function (e) {
      var t = this._isRTL ? c.absPosition.LEFT : c.absPosition.RIGHT;
      return this._setPosition(t, e);
    }, c.prototype.left = function (e) {
      return this._setPosition(c.absPosition.LEFT, e);
    }, c.prototype.right = function (e) {
      return this._setPosition(c.absPosition.RIGHT, e);
    }, c.prototype.centerHorizontally = function () {
      return this._left = "50%", this._right = "", this._translateX = ["-50%"], this;
    }, c.prototype.centerVertically = function () {
      return this._top = "50%", this._bottom = "", this._translateY = ["-50%"], this;
    }, c.prototype.center = function () {
      return this.centerHorizontally().centerVertically();
    }, c.prototype.relativeTo = function (e) {
      return this._absolute = !1, this._relativeToEl = m(e), this;
    }, c.prototype.addPanelPosition = function (e, t) {
      if (!this._relativeToEl) throw new Error("mdPanel: addPanelPosition can only be used with relative positioning. Set relativeTo first.");
      return this._validateXPosition(e), this._validateYPosition(t), this._positions.push({
        x: e,
        y: t
      }), this;
    }, c.prototype._validateYPosition = function (e) {
      if (null != e) {
        for (var t, n = Object.keys(c.yPosition), o = [], i = 0; t = n[i]; i++) {
          var r = c.yPosition[t];
          if (o.push(r), r === e) return;
        }

        throw new Error("mdPanel: Panel y position only accepts the following values:\n" + o.join(" | "));
      }
    }, c.prototype._validateXPosition = function (e) {
      if (null != e) {
        for (var t, n = Object.keys(c.xPosition), o = [], i = 0; t = n[i]; i++) {
          var r = c.xPosition[t];
          if (o.push(r), r === e) return;
        }

        throw new Error("mdPanel: Panel x Position only accepts the following values:\n" + o.join(" | "));
      }
    }, c.prototype.withOffsetX = function (e) {
      return this._translateX.push(e), this;
    }, c.prototype.withOffsetY = function (e) {
      return this._translateY.push(e), this;
    }, c.prototype.getTop = function () {
      return this._top;
    }, c.prototype.getBottom = function () {
      return this._bottom;
    }, c.prototype.getLeft = function () {
      return this._left;
    }, c.prototype.getRight = function () {
      return this._right;
    }, c.prototype.getTransform = function () {
      var e = this._reduceTranslateValues("translateX", this._translateX),
          t = this._reduceTranslateValues("translateY", this._translateY);

      return (e + " " + t).trim();
    }, c.prototype._setTransform = function (e) {
      return e.css(this._$mdConstant.CSS.TRANSFORM, this.getTransform());
    }, c.prototype._isOnscreen = function (e) {
      var t = parseInt(this.getLeft()),
          n = parseInt(this.getTop());

      if (this._translateX.length || this._translateY.length) {
        var o = this._$mdConstant.CSS.TRANSFORM,
            i = u(e, o);
        t += i.x, n += i.y;
      }

      var r = t + e[0].offsetWidth,
          a = n + e[0].offsetHeight;
      return t >= 0 && n >= 0 && a <= this._$window.innerHeight && r <= this._$window.innerWidth;
    }, c.prototype.getActualPosition = function () {
      return this._actualPosition;
    }, c.prototype._reduceTranslateValues = function (e, n) {
      return n.map(function (n) {
        var o = t.isFunction(n) ? n(this) : n;
        return e + "(" + o + ")";
      }, this).join(" ");
    }, c.prototype._setPanelPosition = function (e) {
      if (e.removeClass("_md-panel-position-adjusted"), this._absolute) return void this._setTransform(e);
      if (this._actualPosition) return this._calculatePanelPosition(e, this._actualPosition), this._setTransform(e), void this._constrainToViewport(e);

      for (var t = 0; t < this._positions.length; t++) if (this._actualPosition = this._positions[t], this._calculatePanelPosition(e, this._actualPosition), this._setTransform(e), this._isOnscreen(e)) return;

      this._constrainToViewport(e);
    }, c.prototype._constrainToViewport = function (e) {
      var t = c.viewportMargin,
          n = this._top,
          o = this._left;

      if (this.getTop()) {
        var i = parseInt(this.getTop()),
            r = e[0].offsetHeight + i,
            a = this._$window.innerHeight;
        i < t ? this._top = t + "px" : r > a && (this._top = i - (r - a + t) + "px");
      }

      if (this.getLeft()) {
        var d = parseInt(this.getLeft()),
            s = e[0].offsetWidth + d,
            l = this._$window.innerWidth;
        d < t ? this._left = t + "px" : s > l && (this._left = d - (s - l + t) + "px");
      }

      e.toggleClass("_md-panel-position-adjusted", this._top !== n || this._left !== o);
    }, c.prototype._reverseXPosition = function (e) {
      if (e !== c.xPosition.CENTER) {
        var t = "start",
            n = "end";
        return e.indexOf(t) > -1 ? e.replace(t, n) : e.replace(n, t);
      }
    }, c.prototype._bidi = function (e) {
      return this._isRTL ? this._reverseXPosition(e) : e;
    }, c.prototype._calculatePanelPosition = function (e, t) {
      var n = e[0].getBoundingClientRect(),
          o = n.width,
          i = n.height,
          r = this._relativeToEl[0].getBoundingClientRect(),
          a = r.left,
          d = r.right,
          s = r.width;

      switch (this._bidi(t.x)) {
        case c.xPosition.OFFSET_START:
          this._left = a - o + "px";
          break;

        case c.xPosition.ALIGN_END:
          this._left = d - o + "px";
          break;

        case c.xPosition.CENTER:
          var l = a + .5 * s - .5 * o;
          this._left = l + "px";
          break;

        case c.xPosition.ALIGN_START:
          this._left = a + "px";
          break;

        case c.xPosition.OFFSET_END:
          this._left = d + "px";
      }

      var m = r.top,
          u = r.bottom,
          p = r.height;

      switch (t.y) {
        case c.yPosition.ABOVE:
          this._top = m - i + "px";
          break;

        case c.yPosition.ALIGN_BOTTOMS:
          this._top = u - i + "px";
          break;

        case c.yPosition.CENTER:
          var h = m + .5 * p - .5 * i;
          this._top = h + "px";
          break;

        case c.yPosition.ALIGN_TOPS:
          this._top = m + "px";
          break;

        case c.yPosition.BELOW:
          this._top = u + "px";
      }
    }, l.animation = {
      SLIDE: "md-panel-animate-slide",
      SCALE: "md-panel-animate-scale",
      FADE: "md-panel-animate-fade"
    }, l.prototype.openFrom = function (e) {
      return e = e.target ? e.target : e, this._openFrom = this._getPanelAnimationTarget(e), this._closeTo || (this._closeTo = this._openFrom), this;
    }, l.prototype.closeTo = function (e) {
      return this._closeTo = this._getPanelAnimationTarget(e), this;
    }, l.prototype.duration = function (e) {
      function n(e) {
        if (t.isNumber(e)) return e / 1e3;
      }

      return e && (t.isNumber(e) ? this._openDuration = this._closeDuration = n(e) : t.isObject(e) && (this._openDuration = n(e.open), this._closeDuration = n(e.close))), this._rawDuration = e, this;
    }, l.prototype._getPanelAnimationTarget = function (e) {
      return t.isDefined(e.top) || t.isDefined(e.left) ? {
        element: n,
        bounds: {
          top: e.top || 0,
          left: e.left || 0
        }
      } : this._getBoundingClientRect(m(e));
    }, l.prototype.withAnimation = function (e) {
      return this._animationClass = e, this;
    }, l.prototype.animateOpen = function (e) {
      var n = this._$mdUtil.dom.animator;

      this._fixBounds(e);

      var o = {},
          i = e[0].style.transform || "",
          r = n.toTransformCss(i),
          a = n.toTransformCss(i);

      switch (this._animationClass) {
        case l.animation.SLIDE:
          e.css("opacity", "1"), o = {
            transitionInClass: "_md-panel-animate-enter"
          };
          var d = n.calculateSlideToOrigin(e, this._openFrom) || "";
          r = n.toTransformCss(d + " " + i);
          break;

        case l.animation.SCALE:
          o = {
            transitionInClass: "_md-panel-animate-enter"
          };
          var s = n.calculateZoomToOrigin(e, this._openFrom) || "";
          r = n.toTransformCss(s + " " + i);
          break;

        case l.animation.FADE:
          o = {
            transitionInClass: "_md-panel-animate-enter"
          };
          break;

        default:
          o = t.isString(this._animationClass) ? {
            transitionInClass: this._animationClass
          } : {
            transitionInClass: this._animationClass.open,
            transitionOutClass: this._animationClass.close
          };
      }

      return o.duration = this._openDuration, n.translate3d(e, r, a, o);
    }, l.prototype.animateClose = function (e) {
      var n = this._$mdUtil.dom.animator,
          o = {},
          i = e[0].style.transform || "",
          r = n.toTransformCss(i),
          a = n.toTransformCss(i);

      switch (this._animationClass) {
        case l.animation.SLIDE:
          e.css("opacity", "1"), o = {
            transitionInClass: "_md-panel-animate-leave"
          };
          var d = n.calculateSlideToOrigin(e, this._closeTo) || "";
          a = n.toTransformCss(d + " " + i);
          break;

        case l.animation.SCALE:
          o = {
            transitionInClass: "_md-panel-animate-scale-out _md-panel-animate-leave"
          };
          var s = n.calculateZoomToOrigin(e, this._closeTo) || "";
          a = n.toTransformCss(s + " " + i);
          break;

        case l.animation.FADE:
          o = {
            transitionInClass: "_md-panel-animate-fade-out _md-panel-animate-leave"
          };
          break;

        default:
          o = t.isString(this._animationClass) ? {
            transitionOutClass: this._animationClass
          } : {
            transitionInClass: this._animationClass.close,
            transitionOutClass: this._animationClass.open
          };
      }

      return o.duration = this._closeDuration, n.translate3d(e, r, a, o);
    }, l.prototype._fixBounds = function (e) {
      var t = e[0].offsetWidth,
          n = e[0].offsetHeight;
      this._openFrom && null == this._openFrom.bounds.height && (this._openFrom.bounds.height = n), this._openFrom && null == this._openFrom.bounds.width && (this._openFrom.bounds.width = t), this._closeTo && null == this._closeTo.bounds.height && (this._closeTo.bounds.height = n), this._closeTo && null == this._closeTo.bounds.width && (this._closeTo.bounds.width = t);
    }, l.prototype._getBoundingClientRect = function (e) {
      if (e instanceof t.element) return {
        element: e,
        bounds: e[0].getBoundingClientRect()
      };
    };
  }(), function () {
    function e(e, n, o) {
      function i(e, t, n) {
        return e.attr("aria-valuemin", 0), e.attr("aria-valuemax", 100), e.attr("role", "progressbar"), r;
      }

      function r(o, i, r) {
        function u() {
          r.$observe("value", function (e) {
            var t = a(e);
            i.attr("aria-valuenow", t), h() != l && f($, t);
          }), r.$observe("mdBufferValue", function (e) {
            f(E, a(e));
          }), r.$observe("disabled", function (e) {
            b = e === !0 || e === !1 ? !!e : t.isDefined(e), i.toggleClass(m, b), C.toggleClass(g, !b);
          }), r.$observe("mdMode", function (e) {
            switch (g && C.removeClass(g), e) {
              case l:
              case c:
              case d:
              case s:
                C.addClass(g = "md-mode-" + e);
                break;

              default:
                C.addClass(g = "md-mode-" + s);
            }
          });
        }

        function p() {
          if (t.isUndefined(r.mdMode)) {
            var e = t.isDefined(r.value),
                n = e ? d : s;
            i.attr("md-mode", n), r.mdMode = n;
          }
        }

        function h() {
          var e = (r.mdMode || "").trim();
          if (e) switch (e) {
            case d:
            case s:
            case c:
            case l:
              break;

            default:
              e = s;
          }
          return e;
        }

        function f(e, o) {
          if (!b && h()) {
            var i = n.supplant("translateX({0}%) scale({1},1)", [(o - 100) / 2, o / 100]),
                r = v({
              transform: i
            });
            t.element(e).css(r);
          }
        }

        e(i);
        var g,
            b = r.hasOwnProperty("disabled"),
            v = n.dom.animator.toCss,
            E = t.element(i[0].querySelector(".md-bar1")),
            $ = t.element(i[0].querySelector(".md-bar2")),
            C = t.element(i[0].querySelector(".md-container"));
        i.attr("md-mode", h()).toggleClass(m, b), p(), u();
      }

      function a(e) {
        return Math.max(0, Math.min(e || 0, 100));
      }

      var d = "determinate",
          s = "indeterminate",
          c = "buffer",
          l = "query",
          m = "_md-progress-linear-disabled";
      return {
        restrict: "E",
        template: '<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',
        compile: i
      };
    }

    e.$inject = ["$mdTheming", "$mdUtil", "$log"], t.module("material.components.progressLinear", ["material.core"]).directive("mdProgressLinear", e);
  }(), function () {
    function e(e, n, o, i) {
      function r(r, a, d, s) {
        function c() {
          a.hasClass("md-focused") || a.addClass("md-focused");
        }

        function l(o) {
          var i = o.which || o.keyCode;
          if (i == n.KEY_CODE.ENTER || o.currentTarget == o.target) switch (i) {
            case n.KEY_CODE.LEFT_ARROW:
            case n.KEY_CODE.UP_ARROW:
              o.preventDefault(), m.selectPrevious(), c();
              break;

            case n.KEY_CODE.RIGHT_ARROW:
            case n.KEY_CODE.DOWN_ARROW:
              o.preventDefault(), m.selectNext(), c();
              break;

            case n.KEY_CODE.ENTER:
              var r = t.element(e.getClosest(a[0], "form"));
              r.length > 0 && r.triggerHandler("submit");
          }
        }

        a.addClass("_md"), o(a);
        var m = s[0],
            u = s[1] || e.fakeNgModel();
        m.init(u), r.mouseActive = !1, a.attr({
          role: "radiogroup",
          tabIndex: a.attr("tabindex") || "0"
        }).on("keydown", l).on("mousedown", function (e) {
          r.mouseActive = !0, i(function () {
            r.mouseActive = !1;
          }, 100);
        }).on("focus", function () {
          r.mouseActive === !1 && m.$element.addClass("md-focused");
        }).on("blur", function () {
          m.$element.removeClass("md-focused");
        });
      }

      function a(e) {
        this._radioButtonRenderFns = [], this.$element = e;
      }

      function d() {
        return {
          init: function (e) {
            this._ngModelCtrl = e, this._ngModelCtrl.$render = t.bind(this, this.render);
          },
          add: function (e) {
            this._radioButtonRenderFns.push(e);
          },
          remove: function (e) {
            var t = this._radioButtonRenderFns.indexOf(e);

            t !== -1 && this._radioButtonRenderFns.splice(t, 1);
          },
          render: function () {
            this._radioButtonRenderFns.forEach(function (e) {
              e();
            });
          },
          setViewValue: function (e, t) {
            this._ngModelCtrl.$setViewValue(e, t), this.render();
          },
          getViewValue: function () {
            return this._ngModelCtrl.$viewValue;
          },
          selectNext: function () {
            return s(this.$element, 1);
          },
          selectPrevious: function () {
            return s(this.$element, -1);
          },
          setActiveDescendant: function (e) {
            this.$element.attr("aria-activedescendant", e);
          },
          isDisabled: function () {
            return this.$element[0].hasAttribute("disabled");
          }
        };
      }

      function s(n, o) {
        var i = e.iterator(n[0].querySelectorAll("md-radio-button"), !0);

        if (i.count()) {
          var r = function (e) {
            return !t.element(e).attr("disabled");
          },
              a = n[0].querySelector("md-radio-button.md-checked"),
              d = i[o < 0 ? "previous" : "next"](a, r) || i.first();

          t.element(d).triggerHandler("click");
        }
      }

      return a.prototype = d(), {
        restrict: "E",
        controller: ["$element", a],
        require: ["mdRadioGroup", "?ngModel"],
        link: {
          pre: r
        }
      };
    }

    function n(e, t, n) {
      function o(o, r, a, d) {
        function s() {
          if (!d) throw "RadioButton: No RadioGroupController could be found.";
          d.add(l), a.$observe("value", l), r.on("click", c).on("$destroy", function () {
            d.remove(l);
          });
        }

        function c(e) {
          r[0].hasAttribute("disabled") || d.isDisabled() || o.$apply(function () {
            d.setViewValue(a.value, e && e.type);
          });
        }

        function l() {
          var e = d.getViewValue() == a.value;
          e !== u && ("md-radio-group" !== r[0].parentNode.nodeName.toLowerCase() && r.parent().toggleClass(i, e), e && d.setActiveDescendant(r.attr("id")), u = e, r.attr("aria-checked", e).toggleClass(i, e));
        }

        function m(n, o) {
          n.attr({
            id: a.id || "radio_" + t.nextUid(),
            role: "radio",
            "aria-checked": "false"
          }), e.expectWithText(n, "aria-label");
        }

        var u;
        n(r), m(r, o), a.ngValue ? t.nextTick(s, !1) : s();
      }

      var i = "md-checked";
      return {
        restrict: "E",
        require: "^mdRadioGroup",
        transclude: !0,
        template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',
        link: o
      };
    }

    e.$inject = ["$mdUtil", "$mdConstant", "$mdTheming", "$timeout"], n.$inject = ["$mdAria", "$mdUtil", "$mdTheming"], t.module("material.components.radioButton", ["material.core"]).directive("mdRadioGroup", e).directive("mdRadioButton", n);
  }(), function () {
    function e(e, t) {
      return ["$mdUtil", "$window", function (n, o) {
        return {
          restrict: "A",
          multiElement: !0,
          link: function (i, r, a) {
            var d = i.$on("$md-resize-enable", function () {
              d();
              var s = r[0],
                  c = s.nodeType === o.Node.ELEMENT_NODE ? o.getComputedStyle(s) : {};
              i.$watch(a[e], function (e) {
                if (!!e === t) {
                  n.nextTick(function () {
                    i.$broadcast("$md-resize");
                  });
                  var o = {
                    cachedTransitionStyles: c
                  };
                  n.dom.animator.waitTransitionEnd(r, o).then(function () {
                    i.$broadcast("$md-resize");
                  });
                }
              });
            });
          }
        };
      }];
    }

    t.module("material.components.showHide", ["material.core"]).directive("ngShow", e("ngShow", !0)).directive("ngHide", e("ngHide", !1));
  }(), function () {
    function e(e, o, i, r) {
      function a(e, n) {
        var r = function () {
          return !1;
        },
            a = function () {
          return i.when(o.supplant(c, [n || ""]));
        };

        return t.extend({
          isLockedOpen: r,
          isOpen: r,
          toggle: a,
          open: a,
          close: a,
          onClose: t.noop,
          then: function (e) {
            return s(n).then(e || t.noop);
          }
        }, e);
      }

      function d(t, i) {
        var a = e.get(t);
        return a || i ? a : (r.error(o.supplant(c, [t || ""])), n);
      }

      function s(t) {
        return e.when(t)["catch"](r.error);
      }

      var c = "SideNav '{0}' is not available! Did you use md-component-id='{0}'?",
          l = {
        find: d,
        waitFor: s
      };
      return function (e, n) {
        if (t.isUndefined(e)) return l;
        var o = n === !0,
            i = l.find(e, o);
        return !i && o ? l.waitFor(e) : !i && t.isUndefined(n) ? a(l, e) : i;
      };
    }

    function o() {
      return {
        restrict: "A",
        require: "^mdSidenav",
        link: function (e, t, n, o) {}
      };
    }

    function i(e, o, i, r, a, d, s, c, l, m, u, p, h) {
      function f(s, f, g, b) {
        function v(e, t) {
          s.isLockedOpen = e, e === t ? f.toggleClass("md-locked-open", !!e) : d[e ? "addClass" : "removeClass"](f, "md-locked-open"), w && w.toggleClass("md-locked-open", !!e);
        }

        function E(e) {
          var t = o.findFocusTarget(f) || o.findFocusTarget(f, "[md-sidenav-focus]") || f,
              n = f.parent();
          n[e ? "on" : "off"]("keydown", M), w && w[e ? "on" : "off"]("click", T);
          var i = $(n, e);
          return e && (N = u[0].activeElement, k = a.getLastInteractionType()), C(e), S = m.all([e && w ? d.enter(w, n) : w ? d.leave(w) : m.when(!0), d[e ? "removeClass" : "addClass"](f, "md-closed")]).then(function () {
            s.isOpen && (h(function () {
              I.triggerHandler("resize");
            }), t && t.focus()), i && i();
          });
        }

        function $(e, t) {
          var n = f[0],
              o = e[0].scrollTop;

          if (t && o) {
            _ = {
              top: n.style.top,
              bottom: n.style.bottom,
              height: n.style.height
            };
            var i = {
              top: o + "px",
              bottom: "auto",
              height: e[0].clientHeight + "px"
            };
            f.css(i), w.css(i);
          }

          if (!t && _) return function () {
            n.style.top = _.top, n.style.bottom = _.bottom, n.style.height = _.height, w[0].style.top = null, w[0].style.bottom = null, w[0].style.height = null, _ = null;
          };
        }

        function C(e) {
          e && !A ? (A = x.css("overflow"), x.css("overflow", "hidden")) : t.isDefined(A) && (x.css("overflow", A), A = n);
        }

        function y(e) {
          return s.isOpen == e ? m.when(!0) : (s.isOpen && b.onCloseCb && b.onCloseCb(), m(function (t) {
            s.isOpen = e, o.nextTick(function () {
              S.then(function (e) {
                !s.isOpen && N && "keyboard" === k && (N.focus(), N = null), t(e);
              });
            });
          }));
        }

        function M(e) {
          var t = e.keyCode === i.KEY_CODE.ESCAPE;
          return t ? T(e) : m.when(!0);
        }

        function T(e) {
          return e.preventDefault(), b.close();
        }

        var A,
            w,
            k,
            _,
            x = null,
            N = null,
            S = m.when(!0),
            D = c(g.mdIsLockedOpen),
            I = t.element(p),
            H = function () {
          return D(s.$parent, {
            $media: function (t) {
              return l.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."), e(t);
            },
            $mdMedia: e
          });
        };

        g.mdDisableScrollTarget && (x = u[0].querySelector(g.mdDisableScrollTarget), x ? x = t.element(x) : l.warn(o.supplant('mdSidenav: couldn\'t find element matching selector "{selector}". Falling back to parent.', {
          selector: g.mdDisableScrollTarget
        }))), x || (x = f.parent()), g.hasOwnProperty("mdDisableBackdrop") || (w = o.createBackdrop(s, "md-sidenav-backdrop md-opaque ng-enter")), f.addClass("_md"), r(f), w && r.inherit(w, f), f.on("$destroy", function () {
          w && w.remove(), b.destroy();
        }), s.$on("$destroy", function () {
          w && w.remove();
        }), s.$watch(H, v), s.$watch("isOpen", E), b.$toggleOpen = y;
      }

      return {
        restrict: "E",
        scope: {
          isOpen: "=?mdIsOpen"
        },
        controller: "$mdSidenavController",
        compile: function (e) {
          return e.addClass("md-closed").attr("tabIndex", "-1"), f;
        }
      };
    }

    function r(e, t, n, o, i) {
      var r = this;
      r.isOpen = function () {
        return !!e.isOpen;
      }, r.isLockedOpen = function () {
        return !!e.isLockedOpen;
      }, r.onClose = function (e) {
        return r.onCloseCb = e, r;
      }, r.open = function () {
        return r.$toggleOpen(!0);
      }, r.close = function () {
        return r.$toggleOpen(!1);
      }, r.toggle = function () {
        return r.$toggleOpen(!e.isOpen);
      }, r.$toggleOpen = function (t) {
        return o.when(e.isOpen = t);
      };
      var a = t.mdComponentId,
          d = a && a.indexOf(i.startSymbol()) > -1,
          s = d ? i(a)(e.$parent) : a;
      r.destroy = n.register(r, s), d && t.$observe("mdComponentId", function (e) {
        e && e !== r.$$mdHandle && (r.destroy(), r.destroy = n.register(r, e));
      });
    }

    e.$inject = ["$mdComponentRegistry", "$mdUtil", "$q", "$log"], i.$inject = ["$mdMedia", "$mdUtil", "$mdConstant", "$mdTheming", "$mdInteraction", "$animate", "$compile", "$parse", "$log", "$q", "$document", "$window", "$$rAF"], r.$inject = ["$scope", "$attrs", "$mdComponentRegistry", "$q", "$interpolate"], t.module("material.components.sidenav", ["material.core", "material.components.backdrop"]).factory("$mdSidenav", e).directive("mdSidenav", i).directive("mdSidenavFocus", o).controller("$mdSidenavController", r);
  }(), function () {
    function o(e, o, i, r, a, d, s, l) {
      function m(l, m) {
        var u = t.element("<md-select-value><span></span></md-select-value>");

        if (u.append('<span class="md-select-icon" aria-hidden="true"></span>'), u.addClass("md-select-value"), u[0].hasAttribute("id") || u.attr("id", "select_value_label_" + o.nextUid()), l.find("md-content").length || l.append(t.element("<md-content>").append(l.contents())), m.mdOnOpen && (l.find("md-content").prepend(t.element('<div> <md-progress-circular md-mode="indeterminate" ng-if="$$loadingAsyncDone === false" md-diameter="25px"></md-progress-circular></div>')), l.find("md-option").attr("ng-show", "$$loadingAsyncDone")), m.name) {
          var p = t.element('<select class="md-visually-hidden">');
          p.attr({
            name: m.name,
            "aria-hidden": "true",
            tabindex: "-1"
          });
          var h = l.find("md-option");
          t.forEach(h, function (e) {
            var n = t.element("<option>" + e.innerHTML + "</option>");
            e.hasAttribute("ng-value") ? n.attr("ng-value", e.getAttribute("ng-value")) : e.hasAttribute("value") && n.attr("value", e.getAttribute("value")), p.append(n);
          }), p.append('<option ng-value="' + m.ngModel + '" selected></option>'), l.parent().append(p);
        }

        var f = o.parseAttributeBoolean(m.multiple),
            g = f ? "multiple" : "",
            b = '<div class="md-select-menu-container" aria-hidden="true"><md-select-menu {0}>{1}</md-select-menu></div>';
        return b = o.supplant(b, [g, l.html()]), l.empty().append(u), l.append(b), m.tabindex || m.$set("tabindex", 0), function (l, m, u, p) {
          function h() {
            var e = m.attr("aria-label") || m.attr("placeholder");
            !e && A && A.label && (e = A.label.text()), M = e, a.expect(m, "aria-label", e);
          }

          function g() {
            I && (O = O || I.find("md-select-menu").controller("mdSelectMenu"), w.setLabelText(O.selectedLabels()));
          }

          function b() {
            if (M) {
              var e = O.selectedLabels({
                mode: "aria"
              });
              m.attr("aria-label", e.length ? M + ": " + e : M);
            }
          }

          function v() {
            A && A.setHasValue(O.selectedLabels().length > 0 || (m[0].validity || {}).badInput);
          }

          function E() {
            if (I = t.element(m[0].querySelector(".md-select-menu-container")), H = l, u.mdContainerClass) {
              var e = I[0].getAttribute("class") + " " + u.mdContainerClass;
              I[0].setAttribute("class", e);
            }

            O = I.find("md-select-menu").controller("mdSelectMenu"), O.init(k, u.ngModel), m.on("$destroy", function () {
              I.remove();
            });
          }

          function $(e) {
            if (i.isNavigationKey(e)) e.preventDefault(), C(e);else if (c(e, i)) {
              e.preventDefault();
              var n = O.optNodeForKeyboardSearch(e);
              if (!n || n.hasAttribute("disabled")) return;
              var o = t.element(n).controller("mdOption");
              O.isMultiple || O.deselect(Object.keys(O.selected)[0]), O.select(o.hashKey, o.value), O.refreshViewValue();
            }
          }

          function C() {
            H._mdSelectIsOpen = !0, m.attr("aria-expanded", "true"), e.show({
              scope: H,
              preserveScope: !0,
              skipCompile: !0,
              element: I,
              target: m[0],
              selectCtrl: w,
              preserveElement: !0,
              hasBackdrop: !0,
              loadingAsync: !!u.mdOnOpen && (l.$eval(u.mdOnOpen) || !0)
            })["finally"](function () {
              H._mdSelectIsOpen = !1, m.focus(), m.attr("aria-expanded", "false"), k.$setTouched();
            });
          }

          var y,
              M,
              T = !0,
              A = p[0],
              w = p[1],
              k = p[2],
              _ = p[3],
              x = m.find("md-select-value"),
              N = t.isDefined(u.readonly),
              S = o.parseAttributeBoolean(u.mdNoAsterisk);

          if (S && m.addClass("md-no-asterisk"), A) {
            var D = A.isErrorGetter || function () {
              return k.$invalid && (k.$touched || _ && _.$submitted);
            };

            if (A.input && m.find("md-select-header").find("input")[0] !== A.input[0]) throw new Error("<md-input-container> can only have *one* child <input>, <textarea> or <select> element!");
            A.input = m, A.label || a.expect(m, "aria-label", m.attr("placeholder")), l.$watch(D, A.setInvalid);
          }

          var I, H, O;
          E(), r(m), _ && t.isDefined(u.multiple) && o.nextTick(function () {
            var e = k.$modelValue || k.$viewValue;
            e && _.$setPristine();
          });
          var P = k.$render;
          k.$render = function () {
            P(), g(), b(), v();
          }, u.$observe("placeholder", k.$render), A && A.label && u.$observe("required", function (e) {
            A.label.toggleClass("md-required", e && !S);
          }), w.setLabelText = function (e) {
            w.setIsPlaceholder(!e);
            var t = !1;
            if (u.mdSelectedText && u.mdSelectedHtml) throw Error("md-select cannot have both `md-selected-text` and `md-selected-html`");
            if (u.mdSelectedText || u.mdSelectedHtml) e = d(u.mdSelectedText || u.mdSelectedHtml)(l), t = !0;else if (!e) {
              var n = u.placeholder || (A && A.label ? A.label.text() : "");
              e = n || "", t = !0;
            }
            var o = x.children().eq(0);
            u.mdSelectedHtml ? o.html(s.getTrustedHtml(e)) : t ? o.text(e) : o.html(e);
          }, w.setIsPlaceholder = function (e) {
            e ? (x.addClass("md-select-placeholder"), A && A.label && A.label.addClass("md-placeholder")) : (x.removeClass("md-select-placeholder"), A && A.label && A.label.removeClass("md-placeholder"));
          }, N || (m.on("focus", function (e) {
            A && A.setFocused(!0);
          }), m.on("blur", function (e) {
            T && (T = !1, H._mdSelectIsOpen && e.stopImmediatePropagation()), H._mdSelectIsOpen || (A && A.setFocused(!1), v());
          })), w.triggerClose = function () {
            d(u.mdOnClose)(l);
          }, l.$$postDigest(function () {
            h(), g(), b();
          }), l.$watch(function () {
            return O.selectedLabels();
          }, g);
          var L;
          u.$observe("ngMultiple", function (e) {
            L && L();
            var t = d(e);
            L = l.$watch(function () {
              return t(l);
            }, function (e, t) {
              e === n && t === n || (e ? m.attr("multiple", "multiple") : m.removeAttr("multiple"), m.attr("aria-multiselectable", e ? "true" : "false"), I && (O.setMultiple(e), P = k.$render, k.$render = function () {
                P(), g(), b(), v();
              }, k.$render()));
            });
          }), u.$observe("disabled", function (e) {
            t.isString(e) && (e = !0), y !== n && y === e || (y = e, e ? m.attr({
              "aria-disabled": "true"
            }).removeAttr("tabindex").off("click", C).off("keydown", $) : m.attr({
              tabindex: u.tabindex,
              "aria-disabled": "false"
            }).on("click", C).on("keydown", $));
          }), u.hasOwnProperty("disabled") || u.hasOwnProperty("ngDisabled") || (m.attr({
            "aria-disabled": "false"
          }), m.on("click", C), m.on("keydown", $));
          var R = {
            role: "listbox",
            "aria-expanded": "false",
            "aria-multiselectable": f && !u.ngMultiple ? "true" : "false"
          };
          m[0].hasAttribute("id") || (R.id = "select_" + o.nextUid());
          var F = "select_container_" + o.nextUid();
          I.attr("id", F), R["aria-owns"] = F, m.attr(R), l.$on("$destroy", function () {
            e.destroy()["finally"](function () {
              A && (A.setFocused(!1), A.setHasValue(!1), A.input = null), k.$setTouched();
            });
          });
        };
      }

      var u = i.KEY_CODE;
      [u.SPACE, u.ENTER, u.UP_ARROW, u.DOWN_ARROW];
      return {
        restrict: "E",
        require: ["^?mdInputContainer", "mdSelect", "ngModel", "?^form"],
        compile: m,
        controller: function () {}
      };
    }

    function i(e, o, i, r) {
      function a(e, n, i, a) {
        function d(e) {
          13 != e.keyCode && 32 != e.keyCode || s(e);
        }

        function s(n) {
          var i = o.getClosest(n.target, "md-option"),
              r = i && t.element(i).data("$mdOptionController");

          if (i && r) {
            if (i.hasAttribute("disabled")) return n.stopImmediatePropagation(), !1;
            var a = c.hashGetter(r.value),
                d = t.isDefined(c.selected[a]);
            e.$apply(function () {
              c.isMultiple ? d ? c.deselect(a) : c.select(a, r.value) : d || (c.deselect(Object.keys(c.selected)[0]), c.select(a, r.value)), c.refreshViewValue();
            });
          }
        }

        var c = a[0];
        n.addClass("_md"), r(n), n.on("click", s), n.on("keypress", d);
      }

      function d(r, a, d) {
        function s() {
          var e = l.ngModel.$modelValue || l.ngModel.$viewValue || [];

          if (t.isArray(e)) {
            var n = Object.keys(l.selected),
                o = e.map(l.hashGetter),
                i = n.filter(function (e) {
              return o.indexOf(e) === -1;
            });
            i.forEach(l.deselect), o.forEach(function (t, n) {
              l.select(t, e[n]);
            });
          }
        }

        function c() {
          var e = l.ngModel.$viewValue || l.ngModel.$modelValue;
          Object.keys(l.selected).forEach(l.deselect), l.select(l.hashGetter(e), e);
        }

        var l = this;
        l.isMultiple = t.isDefined(a.multiple), l.selected = {}, l.options = {}, r.$watchCollection(function () {
          return l.options;
        }, function () {
          l.ngModel.$render();
        });
        var u, p;

        l.setMultiple = function (e) {
          function n(e, n) {
            return t.isArray(e || n || []);
          }

          var o = l.ngModel;
          p = p || o.$isEmpty, l.isMultiple = e, u && u(), l.isMultiple ? (o.$validators["md-multiple"] = n, o.$render = s, r.$watchCollection(l.modelBinding, function (e) {
            n(e) && s(e), l.ngModel.$setPristine();
          }), o.$isEmpty = function (e) {
            return !e || 0 === e.length;
          }) : (delete o.$validators["md-multiple"], o.$render = c);
        };

        var h,
            f,
            g,
            b = "",
            v = 300;
        l.optNodeForKeyboardSearch = function (e) {
          h && clearTimeout(h), h = setTimeout(function () {
            h = n, b = "", g = n, f = n;
          }, v);
          var o = e.keyCode - (i.isNumPadKey(e) ? 48 : 0);
          b += String.fromCharCode(o);
          var r = new RegExp("^" + b, "i");
          f || (f = d.find("md-option"), g = new Array(f.length), t.forEach(f, function (e, t) {
            g[t] = e.textContent.trim();
          }));

          for (var a = 0; a < g.length; ++a) if (r.test(g[a])) return f[a];
        }, l.init = function (n, i) {
          l.ngModel = n, l.modelBinding = i, l.ngModel.$isEmpty = function (e) {
            return !l.options[l.hashGetter(e)];
          };
          var a = o.getModelOption(n, "trackBy");

          if (a) {
            var d = {},
                s = e(a);

            l.hashGetter = function (e, t) {
              return d.$value = e, s(t || r, d);
            };
          } else l.hashGetter = function (e) {
            return t.isObject(e) ? "object_" + (e.$$mdSelectId || (e.$$mdSelectId = ++m)) : e;
          };

          l.setMultiple(l.isMultiple);
        }, l.selectedLabels = function (e) {
          e = e || {};
          var t = e.mode || "html",
              n = o.nodesToArray(d[0].querySelectorAll("md-option[selected]"));

          if (n.length) {
            var i;
            return "html" == t ? i = function (e) {
              if (e.hasAttribute("md-option-empty")) return "";
              var t = e.innerHTML,
                  n = e.querySelector(".md-ripple-container");
              n && (t = t.replace(n.outerHTML, ""));
              var o = e.querySelector(".md-container");
              return o && (t = t.replace(o.outerHTML, "")), t;
            } : "aria" == t && (i = function (e) {
              return e.hasAttribute("aria-label") ? e.getAttribute("aria-label") : e.textContent;
            }), o.uniq(n.map(i)).join(", ");
          }

          return "";
        }, l.select = function (e, t) {
          var n = l.options[e];
          n && n.setSelected(!0), l.selected[e] = t;
        }, l.deselect = function (e) {
          var t = l.options[e];
          t && t.setSelected(!1), delete l.selected[e];
        }, l.addOption = function (e, n) {
          if (t.isDefined(l.options[e])) throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "' + n.value + '" found.');
          l.options[e] = n, t.isDefined(l.selected[e]) && (l.select(e, n.value), t.isDefined(l.ngModel.$modelValue) && l.hashGetter(l.ngModel.$modelValue) === e && l.ngModel.$validate(), l.refreshViewValue());
        }, l.removeOption = function (e) {
          delete l.options[e];
        }, l.refreshViewValue = function () {
          var e,
              n = [];

          for (var i in l.selected) (e = l.options[i]) ? n.push(e.value) : n.push(l.selected[i]);

          var r = o.getModelOption(l.ngModel, "trackBy"),
              a = l.isMultiple ? n : n[0],
              d = l.ngModel.$modelValue;
          (r ? t.equals(d, a) : d + "" === a) || (l.ngModel.$setViewValue(a), l.ngModel.$render());
        };
      }

      return d.$inject = ["$scope", "$attrs", "$element"], {
        restrict: "E",
        require: ["mdSelectMenu"],
        scope: !1,
        controller: d,
        link: {
          pre: a
        }
      };
    }

    function r(e, n, o) {
      function i(e, n) {
        return e.append(t.element('<div class="md-text">').append(e.contents())), e.attr("tabindex", n.tabindex || "0"), r(n) || e.attr("md-option-empty", ""), a;
      }

      function r(e) {
        var t = e.value,
            n = e.ngValue;
        return t || n;
      }

      function a(i, r, a, d) {
        function s(e, t, n) {
          if (!m.hashGetter) return void (n || i.$$postDigest(function () {
            s(e, t, !0);
          }));
          var o = m.hashGetter(t, i),
              r = m.hashGetter(e, i);
          l.hashKey = r, l.value = e, m.removeOption(o, l), m.addOption(r, l);
        }

        function c() {
          var e = {
            role: "option",
            "aria-selected": "false"
          };
          r[0].hasAttribute("id") || (e.id = "select_option_" + n.nextUid()), r.attr(e);
        }

        var l = d[0],
            m = d[1];
        o(r), m.isMultiple && (r.addClass("md-checkbox-enabled"), r.prepend(u.clone())), t.isDefined(a.ngValue) ? i.$watch(a.ngValue, s) : t.isDefined(a.value) ? s(a.value) : i.$watch(function () {
          return r.text().trim();
        }, s), a.$observe("disabled", function (e) {
          e ? r.attr("tabindex", "-1") : r.attr("tabindex", "0");
        }), i.$$postDigest(function () {
          a.$observe("selected", function (e) {
            t.isDefined(e) && ("string" == typeof e && (e = !0), e ? (m.isMultiple || m.deselect(Object.keys(m.selected)[0]), m.select(l.hashKey, l.value)) : m.deselect(l.hashKey), m.refreshViewValue());
          });
        }), e.attach(i, r), c(), i.$on("$destroy", function () {
          m.removeOption(l.hashKey, l);
        });
      }

      function d(e) {
        this.selected = !1, this.setSelected = function (t) {
          t && !this.selected ? e.attr({
            selected: "selected",
            "aria-selected": "true"
          }) : !t && this.selected && (e.removeAttr("selected"), e.attr("aria-selected", "false")), this.selected = t;
        };
      }

      return d.$inject = ["$element"], {
        restrict: "E",
        require: ["mdOption", "^^mdSelectMenu"],
        controller: d,
        compile: i
      };
    }

    function a() {
      function e(e, n) {
        function o() {
          return e.parent().find("md-select-header").length;
        }

        function i() {
          var o = e.find("label");
          o.length || (o = t.element("<label>"), e.prepend(o)), o.addClass("md-container-ignore"), n.label && o.text(n.label);
        }

        o() || i();
      }

      return {
        restrict: "E",
        compile: e
      };
    }

    function d() {
      return {
        restrict: "E"
      };
    }

    function s(o) {
      function i(o, i, m, u, p, h, f, g, b) {
        function v(e, t, n) {
          function o() {
            return f(t, {
              addClass: "md-leave"
            }).start();
          }

          function i() {
            t.removeClass("md-active"), t.attr("aria-hidden", "true"), t[0].style.display = "none", $(n), !n.$destroy && n.restoreFocus && n.target.focus();
          }

          return n = n || {}, n.cleanupInteraction(), n.cleanupResizing(), n.hideBackdrop(), n.$destroy === !0 ? i() : o().then(i);
        }

        function E(e, r, a) {
          function d(e, t, n) {
            return n.parent.append(t), p(function (e, n) {
              try {
                f(t, {
                  removeClass: "md-leave",
                  duration: 0
                }).start().then(s).then(e);
              } catch (o) {
                n(o);
              }
            });
          }

          function s() {
            return p(function (t) {
              if (a.isRemoved) return p.reject(!1);
              var n = C(e, r, a);
              n.container.element.css(M.toCss(n.container.styles)), n.dropDown.element.css(M.toCss(n.dropDown.styles)), h(function () {
                r.addClass("md-active"), n.dropDown.element.css(M.toCss({
                  transform: ""
                })), v(a.focusedNode), t();
              });
            });
          }

          function l(e, t, n) {
            return n.disableParentScroll && !m.getClosest(n.target, "MD-DIALOG") ? n.restoreScroll = m.disableScrollAround(n.element, n.parent) : n.disableParentScroll = !1, n.hasBackdrop && (n.backdrop = m.createBackdrop(e, "md-select-backdrop md-click-catcher"), g.enter(n.backdrop, b[0].body, null, {
              duration: 0
            })), function () {
              n.backdrop && n.backdrop.remove(), n.disableParentScroll && n.restoreScroll(), delete n.restoreScroll;
            };
          }

          function v(e) {
            e && !e.hasAttribute("disabled") && e.focus();
          }

          function E(e, n) {
            var o = r.find("md-select-menu");
            if (!n.target) throw new Error(m.supplant(y, [n.target]));
            t.extend(n, {
              isRemoved: !1,
              target: t.element(n.target),
              parent: t.element(n.parent),
              selectEl: o,
              contentEl: r.find("md-content"),
              optionNodes: o[0].getElementsByTagName("md-option")
            });
          }

          function $() {
            var n = function (e, t, n) {
              return function () {
                if (!n.isRemoved) {
                  var o = C(e, t, n),
                      i = o.container,
                      r = o.dropDown;
                  i.element.css(M.toCss(i.styles)), r.element.css(M.toCss(r.styles));
                }
              };
            }(e, r, a),
                o = t.element(u);

            return o.on("resize", n), o.on("orientationchange", n), function () {
              o.off("resize", n), o.off("orientationchange", n);
            };
          }

          function A() {
            a.loadingAsync && !a.isRemoved && (e.$$loadingAsyncDone = !1, p.when(a.loadingAsync).then(function () {
              e.$$loadingAsyncDone = !0, delete a.loadingAsync;
            }).then(function () {
              h(s);
            }));
          }

          function w() {
            function e(e) {
              e.preventDefault(), e.stopPropagation(), a.restoreFocus = !1, m.nextTick(o.hide, !0);
            }

            function t(e) {
              switch (e.preventDefault(), e.stopPropagation(), e.keyCode) {
                case T.UP_ARROW:
                  return l();

                case T.DOWN_ARROW:
                  return s();

                case T.SPACE:
                case T.ENTER:
                  var t = m.getClosest(e.target, "md-option");
                  t && (p.triggerHandler({
                    type: "click",
                    target: t
                  }), e.preventDefault()), u(e);
                  break;

                case T.TAB:
                case T.ESCAPE:
                  e.stopPropagation(), e.preventDefault(), a.restoreFocus = !0, m.nextTick(o.hide, !0);
                  break;

                default:
                  if (c(e, i)) {
                    var n = p.controller("mdSelectMenu").optNodeForKeyboardSearch(e);
                    a.focusedNode = n || a.focusedNode, n && n.focus();
                  }

              }
            }

            function d(e) {
              var t,
                  o = m.nodesToArray(a.optionNodes),
                  i = o.indexOf(a.focusedNode);

              do i === -1 ? i = 0 : "next" === e && i < o.length - 1 ? i++ : "prev" === e && i > 0 && i--, t = o[i], t.hasAttribute("disabled") && (t = n); while (!t && i < o.length - 1 && i > 0);

              t && t.focus(), a.focusedNode = t;
            }

            function s() {
              d("next");
            }

            function l() {
              d("prev");
            }

            function u(e) {
              function t() {
                var t = !1;

                if (e && e.currentTarget.children.length > 0) {
                  var n = e.currentTarget.children[0],
                      o = n.scrollHeight > n.clientHeight;

                  if (o && n.children.length > 0) {
                    var i = e.pageX - e.currentTarget.getBoundingClientRect().left;
                    i > n.querySelector("md-option").offsetWidth && (t = !0);
                  }
                }

                return t;
              }

              if (!(e && "click" == e.type && e.currentTarget != p[0] || t())) {
                var n = m.getClosest(e.target, "md-option");
                n && n.hasAttribute && !n.hasAttribute("disabled") && (e.preventDefault(), e.stopPropagation(), h.isMultiple || (a.restoreFocus = !0, m.nextTick(function () {
                  o.hide(h.ngModel.$viewValue);
                }, !0)));
              }
            }

            if (!a.isRemoved) {
              var p = a.selectEl,
                  h = p.controller("mdSelectMenu") || {};
              return r.addClass("md-clickable"), a.backdrop && a.backdrop.on("click", e), p.on("keydown", t), p.on("click", u), function () {
                a.backdrop && a.backdrop.off("click", e), p.off("keydown", t), p.off("click", u), r.removeClass("md-clickable"), a.isRemoved = !0;
              };
            }
          }

          return A(), E(e, a), a.hideBackdrop = l(e, r, a), d(e, r, a).then(function (e) {
            return r.attr("aria-hidden", "false"), a.alreadyOpen = !0, a.cleanupInteraction = w(), a.cleanupResizing = $(), e;
          }, a.hideBackdrop);
        }

        function $(e) {
          var t = e.selectCtrl;

          if (t) {
            var n = e.selectEl.controller("mdSelectMenu");
            t.setLabelText(n ? n.selectedLabels() : ""), t.triggerClose();
          }
        }

        function C(n, o, i) {
          var c,
              p = o[0],
              h = i.target[0].children[0],
              f = b[0].body,
              g = i.selectEl[0],
              v = i.contentEl[0],
              E = f.getBoundingClientRect(),
              $ = h.getBoundingClientRect(),
              C = !1,
              y = {
            left: E.left + l,
            top: l,
            bottom: E.height - l,
            right: E.width - l - (m.floatingScrollbars() ? 16 : 0)
          },
              M = {
            top: $.top - y.top,
            left: $.left - y.left,
            right: y.right - ($.left + $.width),
            bottom: y.bottom - ($.top + $.height)
          },
              T = E.width - 2 * l,
              A = g.querySelector("md-option[selected]"),
              w = g.getElementsByTagName("md-option"),
              k = g.getElementsByTagName("md-optgroup"),
              _ = s(o, v),
              x = r(i.loadingAsync);

          c = x ? v.firstElementChild || v : A ? A : k.length ? k[0] : w.length ? w[0] : v.firstElementChild || v, v.offsetWidth > T ? v.style["max-width"] = T + "px" : v.style.maxWidth = null, C && (v.style["min-width"] = $.width + "px"), _ && g.classList.add("md-overflow");
          var N = c;
          "MD-OPTGROUP" === (N.tagName || "").toUpperCase() && (N = w[0] || v.firstElementChild || v, c = N), i.focusedNode = N, p.style.display = "block";
          var S = g.getBoundingClientRect(),
              D = d(c);

          if (c) {
            var I = u.getComputedStyle(c);
            D.paddingLeft = parseInt(I.paddingLeft, 10) || 0, D.paddingRight = parseInt(I.paddingRight, 10) || 0;
          }

          if (_) {
            var H = v.offsetHeight / 2;
            v.scrollTop = D.top + D.height / 2 - H, M.top < H ? v.scrollTop = Math.min(D.top, v.scrollTop + H - M.top) : M.bottom < H && (v.scrollTop = Math.max(D.top + D.height - S.height, v.scrollTop - H + M.bottom));
          }

          var O, P, L, R, F;
          C ? (O = $.left, P = $.top + $.height, L = "50% 0", P + S.height > y.bottom && (P = $.top - S.height, L = "50% 100%")) : (O = $.left + D.left - D.paddingLeft + 2, P = Math.floor($.top + $.height / 2 - D.height / 2 - D.top + v.scrollTop) + 2, L = D.left + $.width / 2 + "px " + (D.top + D.height / 2 - v.scrollTop) + "px 0px", R = Math.min($.width + D.paddingLeft + D.paddingRight, T), F = e.getComputedStyle(h)["font-size"]);
          var B = p.getBoundingClientRect(),
              j = Math.round(100 * Math.min($.width / S.width, 1)) / 100,
              U = Math.round(100 * Math.min($.height / S.height, 1)) / 100;
          return {
            container: {
              element: t.element(p),
              styles: {
                left: Math.floor(a(y.left, O, y.right - B.width)),
                top: Math.floor(a(y.top, P, y.bottom - B.height)),
                "min-width": R,
                "font-size": F
              }
            },
            dropDown: {
              element: t.element(g),
              styles: {
                transformOrigin: L,
                transform: i.alreadyOpen ? "" : m.supplant("scale({0},{1})", [j, U])
              }
            }
          };
        }

        var y = "$mdSelect.show() expected a target element in options.target but got '{0}'!",
            M = m.dom.animator,
            T = i.KEY_CODE;
        return {
          parent: "body",
          themable: !0,
          onShow: E,
          onRemove: v,
          hasBackdrop: !0,
          disableParentScroll: !0
        };
      }

      function r(e) {
        return e && t.isFunction(e.then);
      }

      function a(e, t, n) {
        return Math.max(e, Math.min(t, n));
      }

      function d(e) {
        return e ? {
          left: e.offsetLeft,
          top: e.offsetTop,
          width: e.offsetWidth,
          height: e.offsetHeight
        } : {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        };
      }

      function s(e, t) {
        var n = !1;

        try {
          var o = e[0].style.display;
          e[0].style.display = "block", n = t.scrollHeight > t.offsetHeight, e[0].style.display = o;
        } finally {}

        return n;
      }

      return i.$inject = ["$mdSelect", "$mdConstant", "$mdUtil", "$window", "$q", "$$rAF", "$animateCss", "$animate", "$document"], o("$mdSelect").setDefaults({
        methods: ["target"],
        options: i
      });
    }

    function c(e, t) {
      var n = String.fromCharCode(e.keyCode),
          o = e.keyCode <= 31;
      return n && n.length && !o && !t.isMetaKey(e) && !t.isFnLockKey(e) && !t.hasModifierKey(e);
    }

    o.$inject = ["$mdSelect", "$mdUtil", "$mdConstant", "$mdTheming", "$mdAria", "$parse", "$sce", "$injector"], i.$inject = ["$parse", "$mdUtil", "$mdConstant", "$mdTheming"], r.$inject = ["$mdButtonInkRipple", "$mdUtil", "$mdTheming"], s.$inject = ["$$interimElementProvider"];
    var l = 8,
        m = 0,
        u = t.element('<div class="md-container"><div class="md-icon"></div></div>');
    t.module("material.components.select", ["material.core", "material.components.backdrop"]).directive("mdSelect", o).directive("mdSelectMenu", i).directive("mdOption", r).directive("mdOptgroup", a).directive("mdSelectHeader", d).provider("$mdSelect", s);
  }(), function () {
    function e() {
      return {
        controller: function () {},
        compile: function (e) {
          var o = e.find("md-slider");

          if (o) {
            var i = o.attr("md-vertical");
            return i !== n && e.attr("md-vertical", ""), o.attr("flex") || o.attr("flex", ""), function (e, n, o, i) {
              function r(e) {
                n.children().attr("disabled", e), n.find("input").attr("disabled", e);
              }

              n.addClass("_md");
              var a = t.noop;
              o.disabled ? r(!0) : o.ngDisabled && (a = e.$watch(o.ngDisabled, function (e) {
                r(e);
              })), e.$on("$destroy", function () {
                a();
              });
              var d;

              i.fitInputWidthToTextLength = function (e) {
                var t = n[0].querySelector("md-input-container");

                if (t) {
                  var o = getComputedStyle(t),
                      i = parseInt(o.minWidth),
                      r = 2 * parseInt(o.padding);
                  d = d || parseInt(o.maxWidth);
                  var a = Math.max(d, i + r + i / 2 * e);
                  t.style.maxWidth = a + "px";
                }
              };
            };
          }
        }
      };
    }

    function o(e, n, o, i, r, a, d, s, c, l) {
      function m(e, n) {
        var i = t.element(e[0].getElementsByClassName("md-slider-wrapper")),
            r = n.tabindex || 0;
        return i.attr("tabindex", r), (n.disabled || n.ngDisabled) && i.attr("tabindex", -1), i.attr("role", "slider"), o.expect(e, "aria-label"), u;
      }

      function u(o, m, u, p) {
        function h() {
          y(), x();
        }

        function f(e) {
          se = parseFloat(e), m.attr("aria-valuemin", e), h();
        }

        function g(e) {
          ce = parseFloat(e), m.attr("aria-valuemax", e), h();
        }

        function b(e) {
          le = parseFloat(e);
        }

        function v(e) {
          me = N(parseInt(e), 0, 6);
        }

        function E() {
          m.attr("aria-disabled", !!Y());
        }

        function $() {
          if (ie && !Y() && !t.isUndefined(le)) {
            if (le <= 0) {
              var e = "Slider step value must be greater than zero when in discrete mode";
              throw c.error(e), new Error(e);
            }

            var o = Math.floor((ce - se) / le);
            ue || (ue = t.element("<canvas>").css("position", "absolute"), J.append(ue), pe = ue[0].getContext("2d"));
            var i = M();
            !i || i.height || i.width || (y(), i = he), ue[0].width = i.width, ue[0].height = i.height;

            for (var r, a = 0; a <= o; a++) {
              var d = n.getComputedStyle(J[0]);
              pe.fillStyle = d.color || "black", r = Math.floor((oe ? i.height : i.width) * (a / o)), pe.fillRect(oe ? 0 : r - 1, oe ? r - 1 : 0, oe ? i.width : 2, oe ? 2 : i.height);
            }
          }
        }

        function C() {
          if (ue && pe) {
            var e = M();
            pe.clearRect(0, 0, e.width, e.height);
          }
        }

        function y() {
          he = Q[0].getBoundingClientRect();
        }

        function M() {
          return te(), he;
        }

        function T(e) {
          if (!Y()) {
            var t;
            (oe ? e.keyCode === r.KEY_CODE.DOWN_ARROW : e.keyCode === r.KEY_CODE.LEFT_ARROW) ? t = -le : (oe ? e.keyCode === r.KEY_CODE.UP_ARROW : e.keyCode === r.KEY_CODE.RIGHT_ARROW) && (t = le), t = re ? -t : t, t && ((e.metaKey || e.ctrlKey || e.altKey) && (t *= 4), e.preventDefault(), e.stopPropagation(), o.$evalAsync(function () {
              _(W.$viewValue + t);
            }));
          }
        }

        function A() {
          $(), o.mouseActive = !0, ee.removeClass("md-focused"), l(function () {
            o.mouseActive = !1;
          }, 100);
        }

        function w() {
          o.mouseActive === !1 && ee.addClass("md-focused");
        }

        function k() {
          ee.removeClass("md-focused"), m.removeClass("md-active"), C();
        }

        function _(e) {
          W.$setViewValue(N(S(e)));
        }

        function x() {
          isNaN(W.$viewValue) && (W.$viewValue = W.$modelValue), W.$viewValue = N(W.$viewValue);
          var e = z(W.$viewValue);
          o.modelValue = W.$viewValue, m.attr("aria-valuenow", W.$viewValue), D(e), G.text(W.$viewValue);
        }

        function N(e, n, o) {
          if (t.isNumber(e)) return n = t.isNumber(n) ? n : se, o = t.isNumber(o) ? o : ce, Math.max(n, Math.min(o, e));
        }

        function S(e) {
          if (t.isNumber(e)) {
            var n = Math.round((e - se) / le) * le + se;
            return n = Math.round(n * Math.pow(10, me)) / Math.pow(10, me), V && V.fitInputWidthToTextLength && i.debounce(function () {
              V.fitInputWidthToTextLength(n.toString().length);
            }, 100)(), n;
          }
        }

        function D(e) {
          e = j(e);
          var t = 100 * e + "%",
              n = re ? 100 * (1 - e) + "%" : t;
          oe ? X.css("bottom", t) : i.bidiProperty(X, "left", "right", t), Z.css(oe ? "height" : "width", n), m.toggleClass(re ? "md-max" : "md-min", 0 === e), m.toggleClass(re ? "md-min" : "md-max", 1 === e);
        }

        function I(e) {
          if (!Y()) {
            m.addClass("md-active"), m[0].focus(), y();
            var t = q(U(oe ? e.pointer.y : e.pointer.x)),
                n = N(S(t));
            o.$apply(function () {
              _(n), D(z(n));
            });
          }
        }

        function H(e) {
          if (!Y()) {
            m.removeClass("md-dragging");
            var t = q(U(oe ? e.pointer.y : e.pointer.x)),
                n = N(S(t));
            o.$apply(function () {
              _(n), x();
            });
          }
        }

        function O(e) {
          Y() || (fe = !0, e.stopPropagation(), m.addClass("md-dragging"), R(e));
        }

        function P(e) {
          fe && (e.stopPropagation(), R(e));
        }

        function L(e) {
          fe && (e.stopPropagation(), fe = !1);
        }

        function R(e) {
          ie ? B(oe ? e.pointer.y : e.pointer.x) : F(oe ? e.pointer.y : e.pointer.x);
        }

        function F(e) {
          o.$evalAsync(function () {
            _(q(U(e)));
          });
        }

        function B(e) {
          var t = q(U(e)),
              n = N(S(t));
          D(U(e)), G.text(n);
        }

        function j(e) {
          return Math.max(0, Math.min(e || 0, 1));
        }

        function U(e) {
          var t = oe ? he.top : he.left,
              n = oe ? he.height : he.width,
              o = (e - t) / n;
          return oe || "rtl" !== i.bidi() || (o = 1 - o), Math.max(0, Math.min(1, oe ? 1 - o : o));
        }

        function q(e) {
          var t = re ? 1 - e : e;
          return se + t * (ce - se);
        }

        function z(e) {
          var t = (e - se) / (ce - se);
          return re ? 1 - t : t;
        }

        a(m);
        var W = p[0] || {
          $setViewValue: function (e) {
            this.$viewValue = e, this.$viewChangeListeners.forEach(function (e) {
              e();
            });
          },
          $parsers: [],
          $formatters: [],
          $viewChangeListeners: []
        },
            V = p[1],
            Y = (t.element(i.getClosest(m, "_md-slider-container", !0)), u.ngDisabled ? t.bind(null, s(u.ngDisabled), o.$parent) : function () {
          return m[0].hasAttribute("disabled");
        }),
            K = t.element(m[0].querySelector(".md-thumb")),
            G = t.element(m[0].querySelector(".md-thumb-text")),
            X = K.parent(),
            Q = t.element(m[0].querySelector(".md-track-container")),
            Z = t.element(m[0].querySelector(".md-track-fill")),
            J = t.element(m[0].querySelector(".md-track-ticks")),
            ee = t.element(m[0].getElementsByClassName("md-slider-wrapper")),
            te = (t.element(m[0].getElementsByClassName("md-slider-content")), i.throttle(y, 5e3)),
            ne = 3,
            oe = t.isDefined(u.mdVertical),
            ie = t.isDefined(u.mdDiscrete),
            re = t.isDefined(u.mdInvert);
        t.isDefined(u.min) ? u.$observe("min", f) : f(0), t.isDefined(u.max) ? u.$observe("max", g) : g(100), t.isDefined(u.step) ? u.$observe("step", b) : b(1), t.isDefined(u.round) ? u.$observe("round", v) : v(ne);
        var ae = t.noop;
        u.ngDisabled && (ae = o.$parent.$watch(u.ngDisabled, E)), d.register(ee, "drag", {
          horizontal: !oe
        }), o.mouseActive = !1, ee.on("keydown", T).on("mousedown", A).on("focus", w).on("blur", k).on("$md.pressdown", I).on("$md.pressup", H).on("$md.dragstart", O).on("$md.drag", P).on("$md.dragend", L), setTimeout(h, 0);
        var de = e.throttle(h);
        t.element(n).on("resize", de), o.$on("$destroy", function () {
          t.element(n).off("resize", de);
        }), W.$render = x, W.$viewChangeListeners.push(x), W.$formatters.push(N), W.$formatters.push(S);
        var se,
            ce,
            le,
            me,
            ue,
            pe,
            he = {};
        y();
        var fe = !1;
      }

      return {
        scope: {},
        require: ["?ngModel", "?^mdSliderContainer"],
        template: '<div class="md-slider-wrapper"><div class="md-slider-content"><div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div></div></div>',
        compile: m
      };
    }

    o.$inject = ["$$rAF", "$window", "$mdAria", "$mdUtil", "$mdConstant", "$mdTheming", "$mdGesture", "$parse", "$log", "$timeout"], t.module("material.components.slider", ["material.core"]).directive("mdSlider", o).directive("mdSliderContainer", e);
  }(), function () {
    function e(e, t, o, i) {
      function r(i) {
        function r(e, t) {
          t.addClass("md-sticky-clone");
          var n = {
            element: e,
            clone: t
          };
          return f.items.push(n), o.nextTick(function () {
            p.prepend(n.clone);
          }), h(), function () {
            f.items.forEach(function (t, n) {
              t.element[0] === e[0] && (f.items.splice(n, 1), t.clone.remove());
            }), h();
          };
        }

        function d() {
          f.items.forEach(s), f.items = f.items.sort(function (e, t) {
            return e.top < t.top ? -1 : 1;
          });

          for (var e, t = p.prop("scrollTop"), n = f.items.length - 1; n >= 0; n--) if (t > f.items[n].top) {
            e = f.items[n];
            break;
          }

          l(e);
        }

        function s(e) {
          var t = e.element[0];

          for (e.top = 0, e.left = 0, e.right = 0; t && t !== p[0];) e.top += t.offsetTop, e.left += t.offsetLeft, t.offsetParent && (e.right += t.offsetParent.offsetWidth - t.offsetWidth - t.offsetLeft), t = t.offsetParent;

          e.height = e.element.prop("offsetHeight");
          var i = o.floatingScrollbars() ? "0" : n;
          o.bidi(e.clone, "margin-left", e.left, i), o.bidi(e.clone, "margin-right", i, e.right);
        }

        function c() {
          var e = p.prop("scrollTop"),
              t = e > (c.prevScrollTop || 0);
          if (c.prevScrollTop = e, 0 === e) return void l(null);

          if (t) {
            if (f.next && f.next.top <= e) return void l(f.next);
            if (f.current && f.next && f.next.top - e <= f.next.height) return void u(f.current, e + (f.next.top - f.next.height - e));
          }

          if (!t) {
            if (f.current && f.prev && e < f.current.top) return void l(f.prev);
            if (f.next && f.current && e >= f.next.top - f.current.height) return void u(f.current, e + (f.next.top - e - f.current.height));
          }

          f.current && u(f.current, e);
        }

        function l(e) {
          if (f.current !== e) {
            f.current && (u(f.current, null), m(f.current, null)), e && m(e, "active"), f.current = e;
            var t = f.items.indexOf(e);
            f.next = f.items[t + 1], f.prev = f.items[t - 1], m(f.next, "next"), m(f.prev, "prev");
          }
        }

        function m(e, t) {
          e && e.state !== t && (e.state && (e.clone.attr("sticky-prev-state", e.state), e.element.attr("sticky-prev-state", e.state)), e.clone.attr("sticky-state", t), e.element.attr("sticky-state", t), e.state = t);
        }

        function u(t, i) {
          t && (null === i || i === n ? t.translateY && (t.translateY = null, t.clone.css(e.CSS.TRANSFORM, "")) : (t.translateY = i, o.bidi(t.clone, e.CSS.TRANSFORM, "translate3d(" + t.left + "px," + i + "px,0)", "translateY(" + i + "px)")));
        }

        var p = i.$element,
            h = t.throttle(d);
        a(p), p.on("$scrollstart", h), p.on("$scroll", c);
        var f;
        return f = {
          prev: null,
          current: null,
          next: null,
          items: [],
          add: r,
          refreshElements: d
        };
      }

      function a(e) {
        function n() {
          +o.now() - r > a ? (i = !1, e.triggerHandler("$scrollend")) : (e.triggerHandler("$scroll"), t.throttle(n));
        }

        var i,
            r,
            a = 200;
        e.on("scroll touchmove", function () {
          i || (i = !0, t.throttle(n), e.triggerHandler("$scrollstart")), e.triggerHandler("$scroll"), r = +o.now();
        });
      }

      var d = o.checkStickySupport();
      return function (e, t, n) {
        var o = t.controller("mdContent");
        if (o) if (d) t.css({
          position: d,
          top: 0,
          "z-index": 2
        });else {
          var a = o.$element.data("$$sticky");
          a || (a = r(o), o.$element.data("$$sticky", a));
          var s = n || i(t.clone())(e),
              c = a.add(t, s);
          e.$on("$destroy", c);
        }
      };
    }

    e.$inject = ["$mdConstant", "$$rAF", "$mdUtil", "$compile"], t.module("material.components.sticky", ["material.core", "material.components.content"]).factory("$mdSticky", e);
  }(), function () {
    function e(e, n, o, i, r) {
      return {
        restrict: "E",
        replace: !0,
        transclude: !0,
        template: '<div class="md-subheader _md">  <div class="md-subheader-inner">    <div class="md-subheader-content"></div>  </div></div>',
        link: function (a, d, s, c, l) {
          function m(e) {
            return t.element(e[0].querySelector(".md-subheader-content"));
          }

          o(d), d.addClass("_md"), i.prefixer().removeAttribute(d, "ng-repeat");
          var u = d[0].outerHTML;
          s.$set("role", "heading"), r.expect(d, "aria-level", "2"), l(a, function (e) {
            m(d).append(e);
          }), d.hasClass("md-no-sticky") || l(a, function (t) {
            var o = n('<div class="md-subheader-wrapper" aria-hidden="true">' + u + "</div>")(a);
            i.nextTick(function () {
              m(o).append(t);
            }), e(a, d, o);
          });
        }
      };
    }

    e.$inject = ["$mdSticky", "$compile", "$mdTheming", "$mdUtil", "$mdAria"], t.module("material.components.subheader", ["material.core", "material.components.sticky"]).directive("mdSubheader", e);
  }(), function () {
    function e(e, n, o, i, r, a, d) {
      function s(e, s) {
        var l = c.compile(e, s).post;
        return e.addClass("md-dragging"), function (e, s, c, m) {
          function u(t) {
            b && b(e) || (t.stopPropagation(), s.addClass("md-dragging"), C = {
              width: v.prop("offsetWidth")
            });
          }

          function p(e) {
            if (C) {
              e.stopPropagation(), e.srcEvent && e.srcEvent.preventDefault();
              var t = e.pointer.distanceX / C.width,
                  n = g.$viewValue ? 1 + t : t;
              n = Math.max(0, Math.min(1, n)), v.css(o.CSS.TRANSFORM, "translate3d(" + 100 * n + "%,0,0)"), C.translate = n;
            }
          }

          function h(t) {
            if (C) {
              t.stopPropagation(), s.removeClass("md-dragging"), v.css(o.CSS.TRANSFORM, "");
              var n = g.$viewValue ? C.translate < .5 : C.translate > .5;
              n && f(!g.$viewValue), C = null, e.skipToggle = !0, d(function () {
                e.skipToggle = !1;
              }, 1);
            }
          }

          function f(t) {
            e.$apply(function () {
              g.$setViewValue(t), g.$render();
            });
          }

          var g = (m[0], m[1] || n.fakeNgModel()),
              b = (m[2], null);
          null != c.disabled ? b = function () {
            return !0;
          } : c.ngDisabled && (b = i(c.ngDisabled));
          var v = t.element(s[0].querySelector(".md-thumb-container")),
              E = t.element(s[0].querySelector(".md-container")),
              $ = t.element(s[0].querySelector(".md-label"));
          r(function () {
            s.removeClass("md-dragging");
          }), l(e, s, c, m), b && e.$watch(b, function (e) {
            s.attr("tabindex", e ? -1 : 0);
          }), c.$observe("mdInvert", function (e) {
            var t = n.parseAttributeBoolean(e);
            t ? s.prepend($) : s.prepend(E), s.toggleClass("md-inverted", t);
          }), a.register(E, "drag"), E.on("$md.dragstart", u).on("$md.drag", p).on("$md.dragend", h);
          var C;
        };
      }

      var c = e[0];
      return {
        restrict: "E",
        priority: o.BEFORE_NG_ARIA,
        transclude: !0,
        template: '<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',
        require: ["^?mdInputContainer", "?ngModel", "?^form"],
        compile: s
      };
    }

    e.$inject = ["mdCheckboxDirective", "$mdUtil", "$mdConstant", "$parse", "$$rAF", "$mdGesture", "$timeout"], t.module("material.components.switch", ["material.core", "material.components.checkbox"]).directive("mdSwitch", e);
  }(), function () {
    function e(e) {
      function t(e) {
        function t(t, i, r) {
          i.css("touch-action", r.mdSwipeTouchAction || "none");
          var a = e(r[n]);
          i.on(o, function (e) {
            t.$applyAsync(function () {
              a(t, {
                $event: e
              });
            });
          });
        }

        return {
          restrict: "A",
          link: t
        };
      }

      t.$inject = ["$parse"];
      var n = "md" + e,
          o = "$md." + e.toLowerCase();
      return t;
    }

    t.module("material.components.swipe", ["material.core"]).directive("mdSwipeLeft", e("SwipeLeft")).directive("mdSwipeRight", e("SwipeRight")).directive("mdSwipeUp", e("SwipeUp")).directive("mdSwipeDown", e("SwipeDown"));
  }(), function () {
    t.module("material.components.tabs", ["material.core", "material.components.icon"]);
  }(), function () {
    function e(e) {
      return {
        restrict: "E",
        link: function (t, n) {
          n.addClass("_md"), t.$on("$destroy", function () {
            e.destroy();
          });
        }
      };
    }

    function n(e) {
      function n(e) {
        i = e;
      }

      function o(e, n, o, r) {
        function a(t, a, d) {
          i = d.textContent || d.content;
          var l = !r("gt-sm");
          return a = o.extractElementByName(a, "md-toast", !0), d.element = a, d.onSwipe = function (e, t) {
            var i = e.type.replace("$md.", ""),
                r = i.replace("swipe", "");
            "down" === r && d.position.indexOf("top") != -1 && !l || "up" === r && (d.position.indexOf("bottom") != -1 || l) || ("left" !== r && "right" !== r || !l) && (a.addClass("md-" + i), o.nextTick(n.cancel));
          }, d.openClass = s(d.position), a.addClass(d.toastClass), d.parent.addClass(d.openClass), o.hasComputedStyle(d.parent, "position", "static") && d.parent.css("position", "relative"), a.on(c, d.onSwipe), a.addClass(l ? "md-bottom" : d.position.split(" ").map(function (e) {
            return "md-" + e;
          }).join(" ")), d.parent && d.parent.addClass("md-toast-animating"), e.enter(a, d.parent).then(function () {
            d.parent && d.parent.removeClass("md-toast-animating");
          });
        }

        function d(t, n, i) {
          return n.off(c, i.onSwipe), i.parent && i.parent.addClass("md-toast-animating"), i.openClass && i.parent.removeClass(i.openClass), (1 == i.$destroy ? n.remove() : e.leave(n)).then(function () {
            i.parent && i.parent.removeClass("md-toast-animating"), o.hasComputedStyle(i.parent, "position", "static") && i.parent.css("position", "");
          });
        }

        function s(e) {
          return r("gt-xs") ? "md-toast-open-" + (e.indexOf("top") > -1 ? "top" : "bottom") : "md-toast-open-bottom";
        }

        var c = "$md.swipeleft $md.swiperight $md.swipeup $md.swipedown";
        return {
          onShow: a,
          onRemove: d,
          toastClass: "",
          position: "bottom left",
          themable: !0,
          hideDelay: 3e3,
          autoWrap: !0,
          transformTemplate: function (e, n) {
            var o = n.autoWrap && e && !/md-toast-content/g.test(e);

            if (o) {
              var i = document.createElement("md-template");
              i.innerHTML = e;

              for (var r = 0; r < i.children.length; r++) if ("MD-TOAST" === i.children[r].nodeName) {
                var a = t.element('<div class="md-toast-content">');
                a.append(t.element(i.children[r].childNodes)), i.children[r].appendChild(a[0]);
              }

              return i.innerHTML;
            }

            return e || "";
          }
        };
      }

      o.$inject = ["$animate", "$mdToast", "$mdUtil", "$mdMedia"];
      var i,
          r = "ok",
          a = e("$mdToast").setDefaults({
        methods: ["position", "hideDelay", "capsule", "parent", "position", "toastClass"],
        options: o
      }).addPreset("simple", {
        argOption: "textContent",
        methods: ["textContent", "content", "action", "highlightAction", "highlightClass", "theme", "parent"],
        options: ["$mdToast", "$mdTheming", function (e, t) {
          return {
            template: '<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">  <div class="md-toast-content">    <span class="md-toast-text" role="alert" aria-relevant="all" aria-atomic="true">      {{ toast.content }}    </span>    <md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()"         ng-class="highlightClasses">      {{ toast.action }}    </md-button>  </div></md-toast>',
            controller: ["$scope", function (t) {
              var n = this;
              n.highlightAction && (t.highlightClasses = ["md-highlight", n.highlightClass]), t.$watch(function () {
                return i;
              }, function () {
                n.content = i;
              }), this.resolve = function () {
                e.hide(r);
              };
            }],
            theme: t.defaultTheme(),
            controllerAs: "toast",
            bindToController: !0
          };
        }]
      }).addMethod("updateTextContent", n).addMethod("updateContent", n);
      return a;
    }

    e.$inject = ["$mdToast"], n.$inject = ["$$interimElementProvider"], t.module("material.components.toast", ["material.core", "material.components.button"]).directive("mdToast", e).provider("$mdToast", n);
  }(), function () {
    function e(e, n, o, i, r) {
      var a = t.bind(null, o.supplant, "translate3d(0,{0}px,0)");
      return {
        template: "",
        restrict: "E",
        link: function (d, s, c) {
          function l() {
            function i(e) {
              var t = s.parent().find("md-content");
              !f && t.length && l(null, t), e = d.$eval(e), e === !1 ? g() : g = u();
            }

            function l(e, t) {
              t && s.parent()[0] === t.parent()[0] && (f && f.off("scroll", $), f = t, g = u());
            }

            function m(e) {
              var t = e ? e.target.scrollTop : v;
              C(), b = Math.min(h / E, Math.max(0, b + t - v)), s.css(n.CSS.TRANSFORM, a([-b * E])), f.css(n.CSS.TRANSFORM, a([(h - b) * E])), v = t, o.nextTick(function () {
                var e = s.hasClass("md-whiteframe-z1");
                e && !b ? r.removeClass(s, "md-whiteframe-z1") : !e && b && r.addClass(s, "md-whiteframe-z1");
              });
            }

            function u() {
              return f ? (f.on("scroll", $), f.attr("scroll-shrink", "true"), o.nextTick(p, !1), function () {
                f.off("scroll", $), f.attr("scroll-shrink", "false"), p();
              }) : t.noop;
            }

            function p() {
              h = s.prop("offsetHeight");
              var e = -h * E + "px";
              f.css({
                "margin-top": e,
                "margin-bottom": e
              }), m();
            }

            var h,
                f,
                g = t.noop,
                b = 0,
                v = 0,
                E = c.mdShrinkSpeedFactor || .5,
                $ = e.throttle(m),
                C = o.debounce(p, 5e3);
            d.$on("$mdContentLoaded", l), c.$observe("mdScrollShrink", i), c.ngShow && d.$watch(c.ngShow, p), c.ngHide && d.$watch(c.ngHide, p), d.$on("$destroy", g);
          }

          s.addClass("_md"), i(s), o.nextTick(function () {
            s.addClass("_md-toolbar-transitions");
          }, !1), t.isDefined(c.mdScrollShrink) && l();
        }
      };
    }

    e.$inject = ["$$rAF", "$mdConstant", "$mdUtil", "$mdTheming", "$animate"], t.module("material.components.toolbar", ["material.core", "material.components.content"]).directive("mdToolbar", e);
  }(), function () {
    function n(e, n, o, i, r, a, d, s) {
      function c(c, g, b) {
        function v() {
          c.mdZIndex = c.mdZIndex || u, c.mdDelay = c.mdDelay || p, f[c.mdDirection] || (c.mdDirection = h);
        }

        function E(e) {
          var t = e || r(g.text().trim())(c.$parent);
          (!H.attr("aria-label") && !H.attr("aria-labelledby") || H.attr("md-labeled-by-tooltip")) && (H.attr("aria-label", t), H.attr("md-labeled-by-tooltip") || H.attr("md-labeled-by-tooltip", I));
        }

        function $() {
          v(), N && N.panelEl && N.panelEl.removeClass(k), k = "md-origin-" + c.mdDirection, _ = f[c.mdDirection], x = d.newPanelPosition().relativeTo(H).addPanelPosition(_.x, _.y), N && N.panelEl && (N.panelEl.addClass(k), N.updatePosition(x));
        }

        function C() {
          function t(e) {
            return e.some(function (e) {
              return "disabled" === e.attributeName && H[0].disabled;
            }), !1;
          }

          function o() {
            M(!1);
          }

          function r() {
            L = document.activeElement === H[0];
          }

          function d(e) {
            "focus" === e.type && L ? L = !1 : c.mdVisible || (H.on(m, u), M(!0), "touchstart" === e.type && H.one("touchend", function () {
              a.nextTick(function () {
                i.one("touchend", u);
              }, !1);
            }));
          }

          function u() {
            S = c.hasOwnProperty("mdAutohide") ? c.mdAutohide : b.hasOwnProperty("mdAutohide"), (S || P || i[0].activeElement !== H[0]) && (D && (e.cancel(D), M.queued = !1, D = null), H.off(m, u), H.triggerHandler("blur"), M(!1)), P = !1;
          }

          function p() {
            P = !0;
          }

          function h() {
            s.deregister("scroll", o, !0), s.deregister("blur", r), s.deregister("resize", O), H.off(l, d).off(m, u).off("mousedown", p), u(), f && f.disconnect();
          }

          if (H[0] && "MutationObserver" in n) {
            var f = new MutationObserver(function (e) {
              t(e) && a.nextTick(function () {
                M(!1);
              });
            });
            f.observe(H[0], {
              attributes: !0
            });
          }

          L = !1, s.register("scroll", o, !0), s.register("blur", r), s.register("resize", O), c.$on("$destroy", h), H.on("mousedown", p), H.on(l, d);
        }

        function y() {
          function e() {
            c.$destroy();
          }

          if (g[0] && "MutationObserver" in n) {
            var t = new MutationObserver(function (e) {
              e.forEach(function (e) {
                "md-visible" !== e.attributeName || c.visibleWatcher || (c.visibleWatcher = c.$watch("mdVisible", T));
              });
            });
            t.observe(g[0], {
              attributes: !0
            }), b.hasOwnProperty("mdVisible") && (c.visibleWatcher = c.$watch("mdVisible", T));
          } else c.visibleWatcher = c.$watch("mdVisible", T);

          c.$watch("mdDirection", $), g.one("$destroy", e), H.one("$destroy", e), c.$on("$destroy", function () {
            M(!1), N && N.destroy(), t && t.disconnect(), g.remove();
          }), g.text().indexOf(r.startSymbol()) > -1 && c.$watch(function () {
            return g.text().trim();
          }, E);
        }

        function M(t) {
          M.queued && M.value === !!t || !M.queued && c.mdVisible === !!t || (M.value = !!t, M.queued || (t ? (M.queued = !0, D = e(function () {
            c.mdVisible = M.value, M.queued = !1, D = null, c.visibleWatcher || T(c.mdVisible);
          }, c.mdDelay)) : a.nextTick(function () {
            c.mdVisible = !1, c.visibleWatcher || T(!1);
          })));
        }

        function T(e) {
          e ? A() : w();
        }

        function A() {
          if (!g[0].textContent.trim()) throw new Error("Text for the tooltip has not been provided. Please include text within the mdTooltip element.");

          if (!N) {
            var e = t.element(document.body),
                n = d.newPanelAnimation().openFrom(H).closeTo(H).withAnimation({
              open: "md-show",
              close: "md-hide"
            }),
                o = {
              id: I,
              attachTo: e,
              contentElement: g,
              propagateContainerEvents: !0,
              panelClass: "md-tooltip " + k,
              animation: n,
              position: x,
              zIndex: c.mdZIndex,
              focusOnOpen: !1
            };
            N = d.create(o);
          }

          N.open().then(function () {
            N.panelEl.attr("role", "tooltip");
          });
        }

        function w() {
          N && N.close();
        }

        var k,
            _,
            x,
            N,
            S,
            D,
            I = "md-tooltip-" + a.nextUid(),
            H = a.getParentWithPointerEvents(g),
            O = o.throttle($),
            P = !1,
            L = null;

        v(), E(), g.detach(), $(), C(), y();
      }

      var l = "focus touchstart mouseenter",
          m = "blur touchcancel mouseleave",
          u = 100,
          p = 0,
          h = "bottom",
          f = {
        top: {
          x: d.xPosition.CENTER,
          y: d.yPosition.ABOVE
        },
        right: {
          x: d.xPosition.OFFSET_END,
          y: d.yPosition.CENTER
        },
        bottom: {
          x: d.xPosition.CENTER,
          y: d.yPosition.BELOW
        },
        left: {
          x: d.xPosition.OFFSET_START,
          y: d.yPosition.CENTER
        }
      };
      return {
        restrict: "E",
        priority: 210,
        scope: {
          mdZIndex: "=?mdZIndex",
          mdDelay: "=?mdDelay",
          mdVisible: "=?mdVisible",
          mdAutohide: "=?mdAutohide",
          mdDirection: "@?mdDirection"
        },
        link: c
      };
    }

    function o() {
      function n(e) {
        r[e.type] && r[e.type].forEach(function (t) {
          t.call(this, e);
        }, this);
      }

      function o(t, o, i) {
        var d = r[t] = r[t] || [];
        d.length || (i ? e.addEventListener(t, n, !0) : a.on(t, n)), d.indexOf(o) === -1 && d.push(o);
      }

      function i(t, o, i) {
        var d = r[t],
            s = d ? d.indexOf(o) : -1;
        s > -1 && (d.splice(s, 1), 0 === d.length && (i ? e.removeEventListener(t, n, !0) : a.off(t, n)));
      }

      var r = {},
          a = t.element(e);
      return {
        register: o,
        deregister: i
      };
    }

    n.$inject = ["$timeout", "$window", "$$rAF", "$document", "$interpolate", "$mdUtil", "$mdPanel", "$$mdTooltipRegistry"], t.module("material.components.tooltip", ["material.core", "material.components.panel"]).directive("mdTooltip", n).service("$$mdTooltipRegistry", o);
  }(), function () {
    function e() {
      return {
        restrict: "AE",
        controller: n,
        controllerAs: "$ctrl",
        bindToController: !0
      };
    }

    function n(e) {
      e.addClass("md-truncate");
    }

    n.$inject = ["$element"], t.module("material.components.truncate", ["material.core"]).directive("mdTruncate", e);
  }(), function () {
    function e() {
      return {
        controller: o,
        template: n,
        compile: function (e, t) {
          e.addClass("md-virtual-repeat-container").addClass(t.hasOwnProperty("mdOrientHorizontal") ? "md-orient-horizontal" : "md-orient-vertical");
        }
      };
    }

    function n(e) {
      return '<div class="md-virtual-repeat-scroller"><div class="md-virtual-repeat-sizer"></div><div class="md-virtual-repeat-offsetter">' + e[0].innerHTML + "</div></div>";
    }

    function o(e, n, o, i, r, a, d, s, c) {
      this.$rootScope = r, this.$scope = d, this.$element = s, this.$attrs = c, this.size = 0, this.scrollSize = 0, this.scrollOffset = 0, this.horizontal = this.$attrs.hasOwnProperty("mdOrientHorizontal"), this.repeater = null, this.autoShrink = this.$attrs.hasOwnProperty("mdAutoShrink"), this.autoShrinkMin = parseInt(this.$attrs.mdAutoShrinkMin, 10) || 0, this.originalSize = null, this.offsetSize = parseInt(this.$attrs.mdOffsetSize, 10) || 0, this.oldElementSize = null, this.maxElementPixels = o.ELEMENT_MAX_PIXELS, this.$attrs.mdTopIndex ? (this.bindTopIndex = i(this.$attrs.mdTopIndex), this.topIndex = this.bindTopIndex(this.$scope), t.isDefined(this.topIndex) || (this.topIndex = 0, this.bindTopIndex.assign(this.$scope, 0)), this.$scope.$watch(this.bindTopIndex, t.bind(this, function (e) {
        e !== this.topIndex && this.scrollToIndex(e);
      }))) : this.topIndex = 0, this.scroller = s[0].querySelector(".md-virtual-repeat-scroller"), this.sizer = this.scroller.querySelector(".md-virtual-repeat-sizer"), this.offsetter = this.scroller.querySelector(".md-virtual-repeat-offsetter");
      var l = t.bind(this, this.updateSize);
      e(t.bind(this, function () {
        l();
        var e = n.debounce(l, 10, null, !1),
            o = t.element(a);
        this.size || e(), o.on("resize", e), d.$on("$destroy", function () {
          o.off("resize", e);
        }), d.$emit("$md-resize-enable"), d.$on("$md-resize", l);
      }));
    }

    function i(e) {
      return {
        controller: r,
        priority: 1e3,
        require: ["mdVirtualRepeat", "^^mdVirtualRepeatContainer"],
        restrict: "A",
        terminal: !0,
        transclude: "element",
        compile: function (t, n) {
          var o = n.mdVirtualRepeat,
              i = o.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/),
              r = i[1],
              a = e(i[2]),
              d = n.mdExtraName && e(n.mdExtraName);
          return function (e, t, n, o, i) {
            o[0].link_(o[1], i, r, a, d);
          };
        }
      };
    }

    function r(e, n, o, i, r, a, d, s) {
      this.$scope = e, this.$element = n, this.$attrs = o, this.$browser = i, this.$document = r, this.$rootScope = a, this.$$rAF = d, this.onDemand = s.parseAttributeBoolean(o.mdOnDemand), this.browserCheckUrlChange = i.$$checkUrlChange, this.newStartIndex = 0, this.newEndIndex = 0, this.newVisibleEnd = 0, this.startIndex = 0, this.endIndex = 0, this.itemSize = e.$eval(o.mdItemSize) || null, this.isFirstRender = !0, this.isVirtualRepeatUpdating_ = !1, this.itemsLength = 0, this.unwatchItemSize_ = t.noop, this.blocks = {}, this.pooledBlocks = [], e.$on("$destroy", t.bind(this, this.cleanupBlocks_));
    }

    function a(e) {
      if (!t.isFunction(e.getItemAtIndex) || !t.isFunction(e.getLength)) throw Error("When md-on-demand is enabled, the Object passed to md-virtual-repeat must implement functions getItemAtIndex() and getLength() ");
      this.model = e;
    }

    o.$inject = ["$$rAF", "$mdUtil", "$mdConstant", "$parse", "$rootScope", "$window", "$scope", "$element", "$attrs"], r.$inject = ["$scope", "$element", "$attrs", "$browser", "$document", "$rootScope", "$$rAF", "$mdUtil"], i.$inject = ["$parse"], t.module("material.components.virtualRepeat", ["material.core", "material.components.showHide"]).directive("mdVirtualRepeatContainer", e).directive("mdVirtualRepeat", i);
    var d = 3;
    o.prototype.register = function (e) {
      this.repeater = e, t.element(this.scroller).on("scroll wheel touchmove touchend", t.bind(this, this.handleScroll_));
    }, o.prototype.isHorizontal = function () {
      return this.horizontal;
    }, o.prototype.getSize = function () {
      return this.size;
    }, o.prototype.setSize_ = function (e) {
      var t = this.getDimensionName_();
      this.size = e, this.$element[0].style[t] = e + "px";
    }, o.prototype.unsetSize_ = function () {
      this.$element[0].style[this.getDimensionName_()] = this.oldElementSize, this.oldElementSize = null;
    }, o.prototype.updateSize = function () {
      this.originalSize || (this.size = this.isHorizontal() ? this.$element[0].clientWidth : this.$element[0].clientHeight, this.handleScroll_(), this.repeater && this.repeater.containerUpdated());
    }, o.prototype.getScrollSize = function () {
      return this.scrollSize;
    }, o.prototype.getDimensionName_ = function () {
      return this.isHorizontal() ? "width" : "height";
    }, o.prototype.sizeScroller_ = function (e) {
      var t = this.getDimensionName_(),
          n = this.isHorizontal() ? "height" : "width";
      if (this.sizer.innerHTML = "", e < this.maxElementPixels) this.sizer.style[t] = e + "px";else {
        this.sizer.style[t] = "auto", this.sizer.style[n] = "auto";
        var o = Math.floor(e / this.maxElementPixels),
            i = document.createElement("div");
        i.style[t] = this.maxElementPixels + "px", i.style[n] = "1px";

        for (var r = 0; r < o; r++) this.sizer.appendChild(i.cloneNode(!1));

        i.style[t] = e - o * this.maxElementPixels + "px", this.sizer.appendChild(i);
      }
    }, o.prototype.autoShrink_ = function (e) {
      var t = Math.max(e, this.autoShrinkMin * this.repeater.getItemSize());

      if (this.autoShrink && t !== this.size) {
        null === this.oldElementSize && (this.oldElementSize = this.$element[0].style[this.getDimensionName_()]);
        var n = this.originalSize || this.size;
        if (!n || t < n) this.originalSize || (this.originalSize = this.size), this.setSize_(t);else if (null !== this.originalSize) {
          this.unsetSize_();
          var o = this.originalSize;
          this.originalSize = null, o || this.updateSize(), this.setSize_(o || this.size);
        }
        this.repeater.containerUpdated();
      }
    }, o.prototype.setScrollSize = function (e) {
      var t = e + this.offsetSize;
      this.scrollSize !== t && (this.sizeScroller_(t), this.autoShrink_(t), this.scrollSize = t);
    }, o.prototype.getScrollOffset = function () {
      return this.scrollOffset;
    }, o.prototype.scrollTo = function (e) {
      this.scroller[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = e, this.handleScroll_();
    }, o.prototype.scrollToIndex = function (e) {
      var t = this.repeater.getItemSize(),
          n = this.repeater.itemsLength;
      e > n && (e = n - 1), this.scrollTo(t * e);
    }, o.prototype.resetScroll = function () {
      this.scrollTo(0);
    }, o.prototype.handleScroll_ = function () {
      var e = "rtl" != document.dir && "rtl" != document.body.dir;
      e || this.maxSize || (this.scroller.scrollLeft = this.scrollSize, this.maxSize = this.scroller.scrollLeft);
      var t = this.isHorizontal() ? e ? this.scroller.scrollLeft : this.maxSize - this.scroller.scrollLeft : this.scroller.scrollTop;

      if (!(t === this.scrollOffset || t > this.scrollSize - this.size)) {
        var n = this.repeater.getItemSize();

        if (n) {
          var o = Math.max(0, Math.floor(t / n) - d),
              i = (this.isHorizontal() ? "translateX(" : "translateY(") + (!this.isHorizontal() || e ? o * n : -(o * n)) + "px)";

          if (this.scrollOffset = t, this.offsetter.style.webkitTransform = i, this.offsetter.style.transform = i, this.bindTopIndex) {
            var r = Math.floor(t / n);
            r !== this.topIndex && r < this.repeater.getItemCount() && (this.topIndex = r, this.bindTopIndex.assign(this.$scope, r), this.$rootScope.$$phase || this.$scope.$digest());
          }

          this.repeater.containerUpdated();
        }
      }
    }, r.Block, r.prototype.link_ = function (e, n, o, i, r) {
      this.container = e, this.transclude = n, this.repeatName = o, this.rawRepeatListExpression = i, this.extraName = r, this.sized = !1, this.repeatListExpression = t.bind(this, this.repeatListExpression_), this.container.register(this);
    }, r.prototype.cleanupBlocks_ = function () {
      t.forEach(this.pooledBlocks, function (e) {
        e.element.remove();
      });
    }, r.prototype.readItemSize_ = function () {
      if (!this.itemSize) {
        this.items = this.repeatListExpression(this.$scope), this.parentNode = this.$element[0].parentNode;
        var e = this.getBlock_(0);
        e.element[0].parentNode || this.parentNode.appendChild(e.element[0]), this.itemSize = e.element[0][this.container.isHorizontal() ? "offsetWidth" : "offsetHeight"] || null, this.blocks[0] = e, this.poolBlock_(0), this.itemSize && this.containerUpdated();
      }
    }, r.prototype.repeatListExpression_ = function (e) {
      var t = this.rawRepeatListExpression(e);

      if (this.onDemand && t) {
        var n = new a(t);
        return n.$$includeIndexes(this.newStartIndex, this.newVisibleEnd), n;
      }

      return t;
    }, r.prototype.containerUpdated = function () {
      return this.itemSize ? (this.sized || (this.items = this.repeatListExpression(this.$scope)), this.sized || (this.unwatchItemSize_(), this.sized = !0, this.$scope.$watchCollection(this.repeatListExpression, t.bind(this, function (e, t) {
        this.isVirtualRepeatUpdating_ || this.virtualRepeatUpdate_(e, t);
      }))), this.updateIndexes_(), void ((this.newStartIndex !== this.startIndex || this.newEndIndex !== this.endIndex || this.container.getScrollOffset() > this.container.getScrollSize()) && (this.items instanceof a && this.items.$$includeIndexes(this.newStartIndex, this.newEndIndex), this.virtualRepeatUpdate_(this.items, this.items)))) : (this.unwatchItemSize_ && this.unwatchItemSize_ !== t.noop && this.unwatchItemSize_(), this.unwatchItemSize_ = this.$scope.$watchCollection(this.repeatListExpression, t.bind(this, function (e) {
        e && e.length && this.readItemSize_();
      })), void (this.$rootScope.$$phase || this.$scope.$digest()));
    }, r.prototype.getItemSize = function () {
      return this.itemSize;
    }, r.prototype.getItemCount = function () {
      return this.itemsLength;
    }, r.prototype.virtualRepeatUpdate_ = function (e, n) {
      this.isVirtualRepeatUpdating_ = !0;
      var o = e && e.length || 0,
          i = !1;

      if (this.items && o < this.items.length && 0 !== this.container.getScrollOffset()) {
        this.items = e;
        var r = this.container.getScrollOffset();
        this.container.resetScroll(), this.container.scrollTo(r);
      }

      o !== this.itemsLength && (i = !0, this.itemsLength = o), this.items = e, (e !== n || i) && this.updateIndexes_(), this.parentNode = this.$element[0].parentNode, i && this.container.setScrollSize(o * this.itemSize);
      var a,
          d = !1;
      this.isFirstRender && (d = !0, this.isFirstRender = !1, a = this.$attrs.mdStartIndex ? this.$scope.$eval(this.$attrs.mdStartIndex) : this.container.topIndex, this.container.scrollToIndex(a)), Object.keys(this.blocks).forEach(function (e) {
        var t = parseInt(e, 10);
        (t < this.newStartIndex || t >= this.newEndIndex) && this.poolBlock_(t);
      }, this), this.$browser.$$checkUrlChange = t.noop;
      var s,
          c,
          l = [],
          m = [];

      for (s = this.newStartIndex; s < this.newEndIndex && null == this.blocks[s]; s++) c = this.getBlock_(s), this.updateBlock_(c, s), l.push(c);

      for (; null != this.blocks[s]; s++) this.updateBlock_(this.blocks[s], s);

      for (var u = s - 1; s < this.newEndIndex; s++) c = this.getBlock_(s), this.updateBlock_(c, s), m.push(c);

      l.length && this.parentNode.insertBefore(this.domFragmentFromBlocks_(l), this.$element[0].nextSibling), m.length && this.parentNode.insertBefore(this.domFragmentFromBlocks_(m), this.blocks[u] && this.blocks[u].element[0].nextSibling), d && this.container.scrollToIndex(a), this.$browser.$$checkUrlChange = this.browserCheckUrlChange, this.startIndex = this.newStartIndex, this.endIndex = this.newEndIndex, this.isVirtualRepeatUpdating_ = !1;
    }, r.prototype.getBlock_ = function (e) {
      if (this.pooledBlocks.length) return this.pooledBlocks.pop();
      var n;
      return this.transclude(t.bind(this, function (t, o) {
        n = {
          element: t,
          "new": !0,
          scope: o
        }, this.updateScope_(o, e), this.parentNode.appendChild(t[0]);
      })), n;
    }, r.prototype.updateBlock_ = function (e, t) {
      this.blocks[t] = e, (e["new"] || e.scope.$index !== t || e.scope[this.repeatName] !== this.items[t]) && (e["new"] = !1, this.updateScope_(e.scope, t), this.$rootScope.$$phase || e.scope.$digest());
    }, r.prototype.updateScope_ = function (e, t) {
      e.$index = t, e[this.repeatName] = this.items && this.items[t], this.extraName && (e[this.extraName(this.$scope)] = this.items[t]);
    }, r.prototype.poolBlock_ = function (e) {
      this.pooledBlocks.push(this.blocks[e]), this.parentNode.removeChild(this.blocks[e].element[0]), delete this.blocks[e];
    }, r.prototype.domFragmentFromBlocks_ = function (e) {
      var t = this.$document[0].createDocumentFragment();
      return e.forEach(function (e) {
        t.appendChild(e.element[0]);
      }), t;
    }, r.prototype.updateIndexes_ = function () {
      var e = this.items ? this.items.length : 0,
          t = Math.ceil(this.container.getSize() / this.itemSize);
      this.newStartIndex = Math.max(0, Math.min(e - t, Math.floor(this.container.getScrollOffset() / this.itemSize))), this.newVisibleEnd = this.newStartIndex + t + d, this.newEndIndex = Math.min(e, this.newVisibleEnd), this.newStartIndex = Math.max(0, this.newStartIndex - d);
    }, a.prototype.$$includeIndexes = function (e, t) {
      for (var n = e; n < t; n++) this.hasOwnProperty(n) || (this[n] = this.model.getItemAtIndex(n));

      this.length = this.model.getLength();
    };
  }(), function () {
    function e(e) {
      function t(t, a, d) {
        var s = "";
        d.$observe("mdWhiteframe", function (t) {
          t = parseInt(t, 10) || r, t != n && (t > i || t < o) && (e.warn("md-whiteframe attribute value is invalid. It should be a number between " + o + " and " + i, a[0]), t = r);
          var c = t == n ? "" : "md-whiteframe-" + t + "dp";
          d.$updateClass(c, s), s = c;
        });
      }

      var n = -1,
          o = 1,
          i = 24,
          r = 4;
      return {
        link: t
      };
    }

    e.$inject = ["$log"], t.module("material.components.whiteframe", ["material.core"]).directive("mdWhiteframe", e);
  }(), function () {
    function e(e, d, s, c, l, m, u, p, h, f, g, b) {
      function v() {
        s.initOptionalProperties(e, h, {
          searchText: "",
          selectedItem: null,
          clearButton: !1
        }), l(d), M(), s.nextTick(function () {
          w(), C(), e.autofocus && d.on("focus", y);
        });
      }

      function E() {
        e.requireMatch && De && De.$setValidity("md-require-match", !!e.selectedItem || !e.searchText);
      }

      function $() {
        function t() {
          var e = 0,
              t = d.find("md-input-container");

          if (t.length) {
            var n = t.find("input");
            e = t.prop("offsetHeight"), e -= n.prop("offsetTop"), e -= n.prop("offsetHeight"), e += t.prop("offsetTop");
          }

          return e;
        }

        function n() {
          var e = Ae.scrollContainer.getBoundingClientRect(),
              t = {};
          e.right > p.right - r && (t.left = m.right - e.width + "px"), Ae.$.scrollContainer.css(t);
        }

        if (!Ae) return s.nextTick($, !1, e);
        var c,
            l = (e.dropdownItems || i) * o,
            m = Ae.wrap.getBoundingClientRect(),
            u = Ae.snap.getBoundingClientRect(),
            p = Ae.root.getBoundingClientRect(),
            f = u.bottom - p.top,
            g = p.bottom - u.top,
            b = m.left - p.left,
            v = m.width,
            E = t(),
            C = e.dropdownPosition;
        if (C || (C = f > g && p.height - f - r < l ? "top" : "bottom"), h.mdFloatingLabel && (b += a, v -= 2 * a), c = {
          left: b + "px",
          minWidth: v + "px",
          maxWidth: Math.max(m.right - p.left, p.right - m.left) - r + "px"
        }, "top" === C) c.top = "auto", c.bottom = g + "px", c.maxHeight = Math.min(l, m.top - p.top - r) + "px";else {
          var y = p.bottom - m.bottom - r + s.getViewportTop();
          c.top = f - E + "px", c.bottom = "auto", c.maxHeight = Math.min(l, y) + "px";
        }
        Ae.$.scrollContainer.css(c), s.nextTick(n, !1);
      }

      function C() {
        Ae.$.root.length && (l(Ae.$.scrollContainer), Ae.$.scrollContainer.detach(), Ae.$.root.append(Ae.$.scrollContainer), u.pin && u.pin(Ae.$.scrollContainer, p));
      }

      function y() {
        Ae.input.focus();
      }

      function M() {
        var n = parseInt(e.delay, 10) || 0;
        h.$observe("disabled", function (e) {
          ye.isDisabled = s.parseAttributeBoolean(e, !1);
        }), h.$observe("required", function (e) {
          ye.isRequired = s.parseAttributeBoolean(e, !1);
        }), h.$observe("readonly", function (e) {
          ye.isReadonly = s.parseAttributeBoolean(e, !1);
        }), e.$watch("searchText", n ? s.debounce(B, n) : B), e.$watch("selectedItem", H), t.element(m).on("resize", Ie), e.$on("$destroy", T);
      }

      function T() {
        if (ye.hidden || s.enableScrolling(), t.element(m).off("resize", Ie), Ae) {
          var e = ["ul", "scroller", "scrollContainer", "input"];
          t.forEach(e, function (e) {
            Ae.$[e].remove();
          });
        }
      }

      function A() {
        ye.hidden || $();
      }

      function w() {
        var e = k();
        Ae = {
          main: d[0],
          scrollContainer: d[0].querySelector(".md-virtual-repeat-container"),
          scroller: d[0].querySelector(".md-virtual-repeat-scroller"),
          ul: d.find("ul")[0],
          input: d.find("input")[0],
          wrap: e.wrap,
          snap: e.snap,
          root: document.body
        }, Ae.li = Ae.ul.getElementsByTagName("li"), Ae.$ = _(Ae), De = Ae.$.input.controller("ngModel");
      }

      function k() {
        var e, n;

        for (e = d; e.length && (n = e.attr("md-autocomplete-snap"), !t.isDefined(n)); e = e.parent());

        if (e.length) return {
          snap: e[0],
          wrap: "width" === n.toLowerCase() ? e[0] : d.find("md-autocomplete-wrap")[0]
        };
        var o = d.find("md-autocomplete-wrap")[0];
        return {
          snap: o,
          wrap: o
        };
      }

      function _(e) {
        var n = {};

        for (var o in e) e.hasOwnProperty(o) && (n[o] = t.element(e[o]));

        return n;
      }

      function x(e, n) {
        !e && n ? ($(), ue(!0, He.Count | He.Selected), Ae && (s.disableScrollAround(Ae.ul), Se = N(t.element(Ae.wrap)))) : e && !n && (s.enableScrolling(), Se && (Se(), Se = null));
      }

      function N(e) {
        function t(e) {
          e.preventDefault();
        }

        return e.on("wheel", t), e.on("touchmove", t), function () {
          e.off("wheel", t), e.off("touchmove", t);
        };
      }

      function S() {
        ke = !0;
      }

      function D() {
        xe || ye.hidden || Ae.input.focus(), ke = !1, ye.hidden = X();
      }

      function I() {
        Ae.input.focus();
      }

      function H(n, o) {
        E(), n ? V(n).then(function (t) {
          e.searchText = t, L(n, o);
        }) : o && e.searchText && V(o).then(function (n) {
          t.isString(e.searchText) && n.toString().toLowerCase() === e.searchText.toLowerCase() && (e.searchText = "");
        }), n !== o && O();
      }

      function O() {
        t.isFunction(e.itemChange) && e.itemChange(Y(e.selectedItem));
      }

      function P() {
        t.isFunction(e.textChange) && e.textChange();
      }

      function L(e, t) {
        _e.forEach(function (n) {
          n(e, t);
        });
      }

      function R(e) {
        _e.indexOf(e) == -1 && _e.push(e);
      }

      function F(e) {
        var t = _e.indexOf(e);

        t != -1 && _e.splice(t, 1);
      }

      function B(t, n) {
        ye.index = K(), t !== n && (E(), V(e.selectedItem).then(function (o) {
          t !== o && (e.selectedItem = null, t !== n && P(), re() ? ve() : (ye.matches = [], G(!1), ue(!1, He.Count)));
        }));
      }

      function j(e) {
        xe = !1, ke || (ye.hidden = X(), Ce("ngBlur", {
          $event: e
        }));
      }

      function U(e) {
        e && (ke = !1, xe = !1), Ae.input.blur();
      }

      function q(e) {
        xe = !0, Q() && re() && ve(), ye.hidden = X(), Ce("ngFocus", {
          $event: e
        });
      }

      function z(t) {
        switch (t.keyCode) {
          case c.KEY_CODE.DOWN_ARROW:
            if (ye.loading) return;
            t.stopPropagation(), t.preventDefault(), ye.index = Math.min(ye.index + 1, ye.matches.length - 1), he(), ue(!1, He.Selected);
            break;

          case c.KEY_CODE.UP_ARROW:
            if (ye.loading) return;
            t.stopPropagation(), t.preventDefault(), ye.index = ye.index < 0 ? ye.matches.length - 1 : Math.max(0, ye.index - 1), he(), ue(!1, He.Selected);
            break;

          case c.KEY_CODE.TAB:
            if (D(), ye.hidden || ye.loading || ye.index < 0 || ye.matches.length < 1) return;
            de(ye.index);
            break;

          case c.KEY_CODE.ENTER:
            if (ye.hidden || ye.loading || ye.index < 0 || ye.matches.length < 1) return;
            if (ne()) return;
            t.stopPropagation(), t.preventDefault(), de(ye.index);
            break;

          case c.KEY_CODE.ESCAPE:
            if (t.preventDefault(), !Z()) return;
            t.stopPropagation(), ce(), e.searchText && J("clear") && le(), ye.hidden = !0, J("blur") && U(!0);
        }
      }

      function W() {
        return t.isNumber(e.minLength) ? e.minLength : 1;
      }

      function V(n) {
        function o(t) {
          return t && e.itemText ? e.itemText(Y(t)) : null;
        }

        return f.when(o(n) || n).then(function (e) {
          return e && !t.isString(e) && g.warn("md-autocomplete: Could not resolve display value to a string. Please check the `md-item-text` attribute."), e;
        });
      }

      function Y(e) {
        if (!e) return n;
        var t = {};
        return ye.itemName && (t[ye.itemName] = e), t;
      }

      function K() {
        return e.autoselect ? 0 : -1;
      }

      function G(e) {
        ye.loading != e && (ye.loading = e), ye.hidden = X();
      }

      function X() {
        return !Q() || !ee();
      }

      function Q() {
        return !(ye.loading && !te()) && !ne() && !!xe;
      }

      function Z() {
        return J("blur") || !ye.hidden || ye.loading || J("clear") && e.searchText;
      }

      function J(t) {
        return !e.escapeOptions || e.escapeOptions.toLowerCase().indexOf(t) !== -1;
      }

      function ee() {
        return re() && te() || be();
      }

      function te() {
        return !!ye.matches.length;
      }

      function ne() {
        return !!ye.scope.selectedItem;
      }

      function oe() {
        return ye.loading && !ne();
      }

      function ie() {
        return V(ye.matches[ye.index]);
      }

      function re() {
        return (e.searchText || "").length >= W();
      }

      function ae(e, t, n) {
        Object.defineProperty(ye, e, {
          get: function () {
            return n;
          },
          set: function (e) {
            var o = n;
            n = e, t(e, o);
          }
        });
      }

      function de(t) {
        s.nextTick(function () {
          V(ye.matches[t]).then(function (e) {
            var t = Ae.$.input.controller("ngModel");
            t.$setViewValue(e), t.$render();
          })["finally"](function () {
            e.selectedItem = ye.matches[t], G(!1);
          });
        }, !1);
      }

      function se() {
        ce(), le();
      }

      function ce() {
        ye.index = 0, ye.matches = [];
      }

      function le() {
        G(!0), e.searchText = "";
        var t = document.createEvent("CustomEvent");
        t.initCustomEvent("change", !0, !0, {
          value: ""
        }), Ae.input.dispatchEvent(t), Ae.input.blur(), e.searchText = "", Ae.input.focus();
      }

      function me(n) {
        function o(t) {
          t && (t = f.when(t), Ne++, G(!0), s.nextTick(function () {
            t.then(i)["finally"](function () {
              0 === --Ne && G(!1);
            });
          }, !0, e));
        }

        function i(t) {
          we[a] = t, (n || "") === (e.searchText || "") && Ee(t);
        }

        var r = e.$parent.$eval(Te),
            a = n.toLowerCase(),
            d = t.isArray(r),
            c = !!r.then;
        d ? i(r) : c && o(r);
      }

      function ue(e, t) {
        var n = e ? "polite" : "assertive",
            o = [];
        t & He.Selected && ye.index !== -1 && o.push(ie()), t & He.Count && o.push(f.resolve(pe())), f.all(o).then(function (e) {
          b.announce(e.join(" "), n);
        });
      }

      function pe() {
        switch (ye.matches.length) {
          case 0:
            return "There are no matches available.";

          case 1:
            return "There is 1 match available.";

          default:
            return "There are " + ye.matches.length + " matches available.";
        }
      }

      function he() {
        if (Ae.li[0]) {
          var e = Ae.li[0].offsetHeight,
              t = e * ye.index,
              n = t + e,
              o = Ae.scroller.clientHeight,
              i = Ae.scroller.scrollTop;
          t < i ? ge(t) : n > i + o && ge(n - o);
        }
      }

      function fe() {
        return 0 !== Ne;
      }

      function ge(e) {
        Ae.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(e);
      }

      function be() {
        var e = (ye.scope.searchText || "").length;
        return ye.hasNotFound && !te() && (!ye.loading || fe()) && e >= W() && (xe || ke) && !ne();
      }

      function ve() {
        var t = e.searchText || "",
            n = t.toLowerCase();
        !e.noCache && we[n] ? Ee(we[n]) : me(t), ye.hidden = X();
      }

      function Ee(t) {
        ye.matches = t, ye.hidden = X(), ye.loading && G(!1), e.selectOnMatch && $e(), $(), ue(!0, He.Count);
      }

      function $e() {
        var t = e.searchText,
            n = ye.matches,
            o = n[0];
        1 === n.length && V(o).then(function (n) {
          var o = t == n;
          e.matchInsensitive && !o && (o = t.toLowerCase() == n.toLowerCase()), o && de(0);
        });
      }

      function Ce(t, n) {
        h[t] && e.$parent.$eval(h[t], n || {});
      }

      var ye = this,
          Me = e.itemsExpr.split(/ in /i),
          Te = Me[1],
          Ae = null,
          we = {},
          ke = !1,
          _e = [],
          xe = !1,
          Ne = 0,
          Se = null,
          De = null,
          Ie = s.debounce(A);
      ae("hidden", x, !0), ye.scope = e, ye.parent = e.$parent, ye.itemName = Me[0], ye.matches = [], ye.loading = !1, ye.hidden = !0, ye.index = null, ye.id = s.nextUid(), ye.isDisabled = null, ye.isRequired = null, ye.isReadonly = null, ye.hasNotFound = !1, ye.keydown = z, ye.blur = j, ye.focus = q, ye.clear = se, ye.select = de, ye.listEnter = S, ye.listLeave = D, ye.mouseUp = I, ye.getCurrentDisplayValue = ie, ye.registerSelectedItemWatcher = R, ye.unregisterSelectedItemWatcher = F, ye.notFoundVisible = be, ye.loadingIsVisible = oe, ye.positionDropdown = $;
      var He = {
        Count: 1,
        Selected: 2
      };
      return v();
    }

    e.$inject = ["$scope", "$element", "$mdUtil", "$mdConstant", "$mdTheming", "$window", "$animate", "$rootElement", "$attrs", "$q", "$log", "$mdLiveAnnouncer"], t.module("material.components.autocomplete").controller("MdAutocompleteCtrl", e);
    var o = 48,
        i = 5,
        r = 8,
        a = 2;
  }(), function () {
    function e(e) {
      return {
        controller: "MdAutocompleteCtrl",
        controllerAs: "$mdAutocompleteCtrl",
        scope: {
          inputName: "@mdInputName",
          inputMinlength: "@mdInputMinlength",
          inputMaxlength: "@mdInputMaxlength",
          searchText: "=?mdSearchText",
          selectedItem: "=?mdSelectedItem",
          itemsExpr: "@mdItems",
          itemText: "&mdItemText",
          placeholder: "@placeholder",
          noCache: "=?mdNoCache",
          requireMatch: "=?mdRequireMatch",
          selectOnMatch: "=?mdSelectOnMatch",
          matchInsensitive: "=?mdMatchCaseInsensitive",
          itemChange: "&?mdSelectedItemChange",
          textChange: "&?mdSearchTextChange",
          minLength: "=?mdMinLength",
          delay: "=?mdDelay",
          autofocus: "=?mdAutofocus",
          floatingLabel: "@?mdFloatingLabel",
          autoselect: "=?mdAutoselect",
          menuClass: "@?mdMenuClass",
          inputId: "@?mdInputId",
          escapeOptions: "@?mdEscapeOptions",
          dropdownItems: "=?mdDropdownItems",
          dropdownPosition: "@?mdDropdownPosition",
          clearButton: "=?mdClearButton"
        },
        compile: function (e, n) {
          var o = ["md-select-on-focus", "md-no-asterisk", "ng-trim", "ng-pattern"],
              i = e.find("input");
          return o.forEach(function (e) {
            var t = n[n.$normalize(e)];
            null !== t && i.attr(e, t);
          }), function (e, n, o, i) {
            i.hasNotFound = !!n.attr("md-has-not-found"), t.isDefined(o.mdClearButton) || e.floatingLabel || (e.clearButton = !0);
          };
        },
        template: function (t, n) {
          function o() {
            var e = t.find("md-item-template").detach(),
                n = e.length ? e.html() : t.html();
            return e.length || t.empty(), "<md-autocomplete-parent-scope md-autocomplete-replace>" + n + "</md-autocomplete-parent-scope>";
          }

          function i() {
            var e = t.find("md-not-found").detach(),
                n = e.length ? e.html() : "";
            return n ? '<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>' + n + "</li>" : "";
          }

          function r() {
            return n.mdFloatingLabel ? '            <md-input-container ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  ' + (null != l ? 'tabindex="' + l + '"' : "") + '                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-readonly="$mdAutocompleteCtrl.isReadonly"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-model-options="{ allowInvalid: true }"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur($event)"                  ng-focus="$mdAutocompleteCtrl.focus($event)"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  role="combobox"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>' + c + "</div>            </md-input-container>" : '            <input type="search"                ' + (null != l ? 'tabindex="' + l + '"' : "") + '                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-readonly="$mdAutocompleteCtrl.isReadonly"                ng-minlength="inputMinlength"                ng-maxlength="inputMaxlength"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur($event)"                ng-focus="$mdAutocompleteCtrl.focus($event)"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                aria-label="{{placeholder}}"                aria-autocomplete="list"                role="combobox"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>';
          }

          function a() {
            return '<button type="button" aria-label="Clear Input" tabindex="-1" ng-if="clearButton && $mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled" ng-click="$mdAutocompleteCtrl.clear($event)"><md-icon md-svg-src="' + e.mdClose + '"></md-icon></button>';
          }

          var d = i(),
              s = o(),
              c = t.html(),
              l = n.tabindex;
          return d && t.attr("md-has-not-found", !0), t.attr("tabindex", "-1"), "        <md-autocomplete-wrap            ng-class=\"{ 'md-whiteframe-z1': !floatingLabel,                         'md-menu-showing': !$mdAutocompleteCtrl.hidden,                         'md-show-clear-button': !!clearButton }\">          " + r() + "          " + a() + '          <md-progress-linear              class="' + (n.mdFloatingLabel ? "md-inline" : "") + '"              ng-if="$mdAutocompleteCtrl.loadingIsVisible()"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()"              ng-hide="$mdAutocompleteCtrl.hidden"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              ng-class="{ \'md-not-found\': $mdAutocompleteCtrl.notFoundVisible() }"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  ' + s + "                  </li>" + d + "            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>";
        }
      };
    }

    e.$inject = ["$$mdSvgRegistry"], t.module("material.components.autocomplete").directive("mdAutocomplete", e);
  }(), function () {
    function e(e, t) {
      function n(e, n, o) {
        return function (e, n, i) {
          function r(n, o) {
            s[o] = e[n], e.$watch(n, function (e) {
              t.nextTick(function () {
                s[o] = e;
              });
            });
          }

          function a() {
            var t = !1,
                n = !1;
            e.$watch(function () {
              n || t || (t = !0, e.$$postDigest(function () {
                n || s.$digest(), t = n = !1;
              }));
            }), s.$watch(function () {
              n = !0;
            });
          }

          var d = e.$mdAutocompleteCtrl,
              s = d.parent.$new(),
              c = d.itemName;
          r("$index", "$index"), r("item", c), a(), o(s, function (e) {
            n.after(e);
          });
        };
      }

      return {
        restrict: "AE",
        compile: n,
        terminal: !0,
        transclude: "element"
      };
    }

    e.$inject = ["$compile", "$mdUtil"], t.module("material.components.autocomplete").directive("mdAutocompleteParentScope", e);
  }(), function () {
    function e(e, t, n) {
      this.$scope = e, this.$element = t, this.$attrs = n, this.regex = null;
    }

    e.$inject = ["$scope", "$element", "$attrs"], t.module("material.components.autocomplete").controller("MdHighlightCtrl", e), e.prototype.init = function (e, t) {
      this.flags = this.$attrs.mdHighlightFlags || "", this.unregisterFn = this.$scope.$watch(function (n) {
        return {
          term: e(n),
          contentText: t(n)
        };
      }.bind(this), this.onRender.bind(this), !0), this.$element.on("$destroy", this.unregisterFn);
    }, e.prototype.onRender = function (e, t) {
      var n = e.contentText;
      null !== this.regex && e.term === t.term || (this.regex = this.createRegex(e.term, this.flags)), e.term ? this.applyRegex(n) : this.$element.text(n);
    }, e.prototype.applyRegex = function (e) {
      var n = this.resolveTokens(e);
      this.$element.empty(), n.forEach(function (e) {
        if (e.isMatch) {
          var n = t.element('<span class="highlight">').text(e.text);
          this.$element.append(n);
        } else this.$element.append(document.createTextNode(e));
      }.bind(this));
    }, e.prototype.resolveTokens = function (e) {
      function t(t, o) {
        var i = e.slice(t, o);
        i && n.push(i);
      }

      var n = [],
          o = 0;
      return e.replace(this.regex, function (e, i) {
        t(o, i), n.push({
          text: e,
          isMatch: !0
        }), o = i + e.length;
      }), t(o), n;
    }, e.prototype.createRegex = function (e, t) {
      var n = "",
          o = "",
          i = this.sanitizeRegex(e);
      return t.indexOf("^") >= 0 && (n = "^"), t.indexOf("$") >= 0 && (o = "$"), new RegExp(n + i + o, t.replace(/[$\^]/g, ""));
    }, e.prototype.sanitizeRegex = function (e) {
      return e && e.toString().replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g, "\\$&");
    };
  }(), function () {
    function e(e, t) {
      return {
        terminal: !0,
        controller: "MdHighlightCtrl",
        compile: function (n, o) {
          var i = t(o.mdHighlightText),
              r = e(n.html());
          return function (e, t, n, o) {
            o.init(i, r);
          };
        }
      };
    }

    e.$inject = ["$interpolate", "$parse"], t.module("material.components.autocomplete").directive("mdHighlightText", e);
  }(), function () {
    function o(e, t, o, i, r) {
      this.$scope = e, this.$element = t, this.$mdConstant = o, this.$timeout = i, this.$mdUtil = r, this.isEditting = !1, this.parentController = n, this.enableChipEdit = !1;
    }

    o.$inject = ["$scope", "$element", "$mdConstant", "$timeout", "$mdUtil"], t.module("material.components.chips").controller("MdChipCtrl", o), o.prototype.init = function (e) {
      this.parentController = e, this.enableChipEdit = this.parentController.enableChipEdit, this.enableChipEdit && (this.$element.on("keydown", this.chipKeyDown.bind(this)), this.$element.on("mousedown", this.chipMouseDown.bind(this)), this.getChipContent().addClass("_md-chip-content-edit-is-enabled"));
    }, o.prototype.getChipContent = function () {
      var e = this.$element[0].getElementsByClassName("md-chip-content");
      return t.element(e[0]);
    }, o.prototype.getContentElement = function () {
      return t.element(this.getChipContent().children()[0]);
    }, o.prototype.getChipIndex = function () {
      return parseInt(this.$element.attr("index"));
    }, o.prototype.goOutOfEditMode = function () {
      if (this.isEditting) {
        this.isEditting = !1, this.$element.removeClass("_md-chip-editing"), this.getChipContent()[0].contentEditable = "false";
        var e = this.getChipIndex(),
            t = this.getContentElement().text();
        t ? (this.parentController.updateChipContents(e, this.getContentElement().text()), this.$mdUtil.nextTick(function () {
          this.parentController.selectedChip === e && this.parentController.focusChip(e);
        }.bind(this))) : this.parentController.removeChipAndFocusInput(e);
      }
    }, o.prototype.selectNodeContents = function (t) {
      var n, o;
      document.body.createTextRange ? (n = document.body.createTextRange(), n.moveToElementText(t), n.select()) : e.getSelection && (o = e.getSelection(), n = document.createRange(), n.selectNodeContents(t), o.removeAllRanges(), o.addRange(n));
    }, o.prototype.goInEditMode = function () {
      this.isEditting = !0, this.$element.addClass("_md-chip-editing"), this.getChipContent()[0].contentEditable = "true", this.getChipContent().on("blur", function () {
        this.goOutOfEditMode();
      }.bind(this)), this.selectNodeContents(this.getChipContent()[0]);
    }, o.prototype.chipKeyDown = function (e) {
      this.isEditting || e.keyCode !== this.$mdConstant.KEY_CODE.ENTER && e.keyCode !== this.$mdConstant.KEY_CODE.SPACE ? this.isEditting && e.keyCode === this.$mdConstant.KEY_CODE.ENTER && (e.preventDefault(), this.goOutOfEditMode()) : (e.preventDefault(), this.goInEditMode());
    }, o.prototype.chipMouseDown = function () {
      this.getChipIndex() == this.parentController.selectedChip && this.enableChipEdit && !this.isEditting && this.goInEditMode();
    };
  }(), function () {
    function e(e, o, i, r) {
      function a(n, o, a, s) {
        var c = s.shift(),
            l = s.shift(),
            m = t.element(o[0].querySelector(".md-chip-content"));
        e(o), c && (l.init(c), m.append(i(d)(n)), m.on("blur", function () {
          c.resetSelectedChip(), c.$scope.$applyAsync();
        })), r(function () {
          c && c.shouldFocusLastChip && c.focusLastChipThenInput();
        });
      }

      var d = o.processTemplate(n);
      return {
        restrict: "E",
        require: ["^?mdChips", "mdChip"],
        link: a,
        controller: "MdChipCtrl"
      };
    }

    e.$inject = ["$mdTheming", "$mdUtil", "$compile", "$timeout"], t.module("material.components.chips").directive("mdChip", e);
    var n = '    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>';
  }(), function () {
    function e(e) {
      function t(t, n, o, i) {
        n.on("click", function (e) {
          t.$apply(function () {
            i.removeChip(t.$$replacedScope.$index);
          });
        }), e(function () {
          n.attr({
            tabindex: -1,
            "aria-hidden": !0
          }), n.find("button").attr("tabindex", "-1");
        });
      }

      return {
        restrict: "A",
        require: "^mdChips",
        scope: !1,
        link: t
      };
    }

    e.$inject = ["$timeout"], t.module("material.components.chips").directive("mdChipRemove", e);
  }(), function () {
    function e(e) {
      function t(t, n, o) {
        var i = t.$parent.$mdChipsCtrl,
            r = i.parent.$new(!1, i.parent);
        r.$$replacedScope = t, r.$chip = t.$chip, r.$index = t.$index, r.$mdChipsCtrl = i;
        var a = i.$scope.$eval(o.mdChipTransclude);
        n.html(a), e(n.contents())(r);
      }

      return {
        restrict: "EA",
        terminal: !0,
        link: t,
        scope: !1
      };
    }

    e.$inject = ["$compile"], t.module("material.components.chips").directive("mdChipTransclude", e);
  }(), function () {
    function e(e, t, o, i, r, a, d) {
      this.$timeout = a, this.$mdConstant = o, this.$scope = e, this.parent = e.$parent, this.$mdUtil = d, this.$log = i, this.$element = r, this.$attrs = t, this.ngModelCtrl = null, this.userInputNgModelCtrl = null, this.autocompleteCtrl = null, this.userInputElement = null, this.items = [], this.selectedChip = -1, this.enableChipEdit = d.parseAttributeBoolean(t.mdEnableChipEdit), this.addOnBlur = d.parseAttributeBoolean(t.mdAddOnBlur), this.inputAriaLabel = "Chips input.", this.containerHint = "Chips container. Use arrow keys to select chips.", this.deleteHint = "Press delete to remove this chip.", this.deleteButtonLabel = "Remove", this.chipBuffer = "", this.useTransformChip = !1, this.useOnAdd = !1, this.useOnRemove = !1, this.wrapperId = "", this.contentIds = [], this.ariaTabIndex = null, this.chipAppendDelay = n, this.init();
    }

    e.$inject = ["$scope", "$attrs", "$mdConstant", "$log", "$element", "$timeout", "$mdUtil"];
    var n = 300;
    t.module("material.components.chips").controller("MdChipsCtrl", e), e.prototype.init = function () {
      var e = this;
      e.wrapperId = "_md-chips-wrapper-" + e.$mdUtil.nextUid(), e.$scope.$watchCollection("$mdChipsCtrl.items", function () {
        e.setupInputAria(), e.setupWrapperAria();
      }), e.$attrs.$observe("mdChipAppendDelay", function (t) {
        e.chipAppendDelay = parseInt(t) || n;
      });
    }, e.prototype.setupInputAria = function () {
      var e = this.$element.find("input");
      e && (e.attr("role", "textbox"), e.attr("aria-multiline", !0));
    }, e.prototype.setupWrapperAria = function () {
      var e = this,
          t = this.$element.find("md-chips-wrap");
      this.items && this.items.length ? (t.attr("role", "listbox"), this.contentIds = this.items.map(function () {
        return e.wrapperId + "-chip-" + e.$mdUtil.nextUid();
      }), t.attr("aria-owns", this.contentIds.join(" "))) : (t.removeAttr("role"), t.removeAttr("aria-owns"));
    }, e.prototype.inputKeydown = function (e) {
      var t = this.getChipBuffer();

      if (!(this.autocompleteCtrl && e.isDefaultPrevented && e.isDefaultPrevented())) {
        if (e.keyCode === this.$mdConstant.KEY_CODE.BACKSPACE) {
          if (0 !== this.getCursorPosition(e.target)) return;
          return e.preventDefault(), e.stopPropagation(), void (this.items.length && this.selectAndFocusChipSafe(this.items.length - 1));
        }

        if ((!this.separatorKeys || this.separatorKeys.length < 1) && (this.separatorKeys = [this.$mdConstant.KEY_CODE.ENTER]), this.separatorKeys.indexOf(e.keyCode) !== -1) {
          if (this.autocompleteCtrl && this.requireMatch || !t) return;
          if (e.preventDefault(), this.hasMaxChipsReached()) return;
          return this.appendChip(t.trim()), this.resetChipBuffer(), !1;
        }
      }
    }, e.prototype.getCursorPosition = function (e) {
      try {
        if (e.selectionStart === e.selectionEnd) return e.selectionStart;
      } catch (t) {
        if (!e.value) return 0;
      }
    }, e.prototype.updateChipContents = function (e, t) {
      e >= 0 && e < this.items.length && (this.items[e] = t, this.ngModelCtrl.$setDirty());
    }, e.prototype.isEditingChip = function () {
      return !!this.$element[0].querySelector("._md-chip-editing");
    }, e.prototype.isRemovable = function () {
      return !!this.ngModelCtrl && (this.readonly ? this.removable : !t.isDefined(this.removable) || this.removable);
    }, e.prototype.chipKeydown = function (e) {
      if (!this.getChipBuffer() && !this.isEditingChip()) switch (e.keyCode) {
        case this.$mdConstant.KEY_CODE.BACKSPACE:
        case this.$mdConstant.KEY_CODE.DELETE:
          if (this.selectedChip < 0) return;
          if (e.preventDefault(), !this.isRemovable()) return;
          this.removeAndSelectAdjacentChip(this.selectedChip);
          break;

        case this.$mdConstant.KEY_CODE.LEFT_ARROW:
          e.preventDefault(), (this.selectedChip < 0 || this.readonly && 0 == this.selectedChip) && (this.selectedChip = this.items.length), this.items.length && this.selectAndFocusChipSafe(this.selectedChip - 1);
          break;

        case this.$mdConstant.KEY_CODE.RIGHT_ARROW:
          e.preventDefault(), this.selectAndFocusChipSafe(this.selectedChip + 1);
          break;

        case this.$mdConstant.KEY_CODE.ESCAPE:
        case this.$mdConstant.KEY_CODE.TAB:
          if (this.selectedChip < 0) return;
          e.preventDefault(), this.onFocus();
      }
    }, e.prototype.getPlaceholder = function () {
      var e = this.items && this.items.length && ("" == this.secondaryPlaceholder || this.secondaryPlaceholder);
      return e ? this.secondaryPlaceholder : this.placeholder;
    }, e.prototype.removeAndSelectAdjacentChip = function (e) {
      var t = this,
          n = t.getAdjacentChipIndex(e);
      this.$element[0].querySelector("md-chips-wrap"), this.$element[0].querySelector('md-chip[index="' + e + '"]');
      t.removeChip(e), t.$timeout(function () {
        t.$timeout(function () {
          t.selectAndFocusChipSafe(n);
        });
      });
    }, e.prototype.resetSelectedChip = function () {
      this.selectedChip = -1, this.ariaTabIndex = null;
    }, e.prototype.getAdjacentChipIndex = function (e) {
      var t = this.items.length - 1;
      return 0 == t ? -1 : e == t ? e - 1 : e;
    }, e.prototype.appendChip = function (e) {
      if (this.shouldFocusLastChip = !0, this.useTransformChip && this.transformChip) {
        var n = this.transformChip({
          $chip: e
        });
        t.isDefined(n) && (e = n);
      }

      if (t.isObject(e)) {
        var o = this.items.some(function (n) {
          return t.equals(e, n);
        });
        if (o) return;
      }

      if (!(null == e || this.items.indexOf(e) + 1)) {
        var i = this.items.push(e),
            r = i - 1;
        this.ngModelCtrl.$setDirty(), this.validateModel(), this.useOnAdd && this.onAdd && this.onAdd({
          $chip: e,
          $index: r
        });
      }
    }, e.prototype.useTransformChipExpression = function () {
      this.useTransformChip = !0;
    }, e.prototype.useOnAddExpression = function () {
      this.useOnAdd = !0;
    }, e.prototype.useOnRemoveExpression = function () {
      this.useOnRemove = !0;
    }, e.prototype.useOnSelectExpression = function () {
      this.useOnSelect = !0;
    }, e.prototype.getChipBuffer = function () {
      var e = this.userInputElement ? this.userInputNgModelCtrl ? this.userInputNgModelCtrl.$viewValue : this.userInputElement[0].value : this.chipBuffer;
      return t.isString(e) ? e : "";
    }, e.prototype.resetChipBuffer = function () {
      this.userInputElement ? this.userInputNgModelCtrl ? (this.userInputNgModelCtrl.$setViewValue(""), this.userInputNgModelCtrl.$render()) : this.userInputElement[0].value = "" : this.chipBuffer = "";
    }, e.prototype.hasMaxChipsReached = function () {
      return t.isString(this.maxChips) && (this.maxChips = parseInt(this.maxChips, 10) || 0), this.maxChips > 0 && this.items.length >= this.maxChips;
    }, e.prototype.validateModel = function () {
      this.ngModelCtrl.$setValidity("md-max-chips", !this.hasMaxChipsReached());
    }, e.prototype.removeChip = function (e) {
      var t = this.items.splice(e, 1);
      this.ngModelCtrl.$setDirty(), this.validateModel(), t && t.length && this.useOnRemove && this.onRemove && this.onRemove({
        $chip: t[0],
        $index: e
      });
    }, e.prototype.removeChipAndFocusInput = function (e) {
      this.removeChip(e), this.autocompleteCtrl ? (this.autocompleteCtrl.hidden = !0, this.$mdUtil.nextTick(this.onFocus.bind(this))) : this.onFocus();
    }, e.prototype.selectAndFocusChipSafe = function (e) {
      if (!this.items.length || e === -1) return this.focusInput();

      if (e >= this.items.length) {
        if (!this.readonly) return this.onFocus();
        e = 0;
      }

      e = Math.max(e, 0), e = Math.min(e, this.items.length - 1), this.selectChip(e), this.focusChip(e);
    }, e.prototype.focusLastChipThenInput = function () {
      var e = this;
      e.shouldFocusLastChip = !1, e.focusChip(this.items.length - 1), e.$timeout(function () {
        e.focusInput();
      }, e.chipAppendDelay);
    }, e.prototype.focusInput = function () {
      this.selectChip(-1), this.onFocus();
    }, e.prototype.selectChip = function (e) {
      e >= -1 && e <= this.items.length ? (this.selectedChip = e, this.useOnSelect && this.onSelect && this.onSelect({
        $chip: this.items[e]
      })) : this.$log.warn("Selected Chip index out of bounds; ignoring.");
    }, e.prototype.selectAndFocusChip = function (e) {
      this.selectChip(e), e != -1 && this.focusChip(e);
    }, e.prototype.focusChip = function (e) {
      var t = this.$element[0].querySelector('md-chip[index="' + e + '"] .md-chip-content');
      this.ariaTabIndex = e, t.focus();
    }, e.prototype.configureNgModel = function (e) {
      this.ngModelCtrl = e;
      var t = this;

      e.$render = function () {
        t.items = t.ngModelCtrl.$viewValue;
      };
    }, e.prototype.onFocus = function () {
      var e = this.$element[0].querySelector("input");
      e && e.focus(), this.resetSelectedChip();
    }, e.prototype.onInputFocus = function () {
      this.inputHasFocus = !0, this.setupInputAria(), this.resetSelectedChip();
    }, e.prototype.onInputBlur = function () {
      this.inputHasFocus = !1, this.shouldAddOnBlur() && (this.appendChip(this.getChipBuffer().trim()), this.resetChipBuffer());
    }, e.prototype.configureUserInput = function (e) {
      this.userInputElement = e;
      var n = e.controller("ngModel");
      n != this.ngModelCtrl && (this.userInputNgModelCtrl = n);

      var o = this.$scope,
          i = this,
          r = function (e, n) {
        o.$evalAsync(t.bind(i, n, e));
      };

      e.attr({
        tabindex: 0
      }).on("keydown", function (e) {
        r(e, i.inputKeydown);
      }).on("focus", function (e) {
        r(e, i.onInputFocus);
      }).on("blur", function (e) {
        r(e, i.onInputBlur);
      });
    }, e.prototype.configureAutocomplete = function (e) {
      e && (this.autocompleteCtrl = e, e.registerSelectedItemWatcher(t.bind(this, function (e) {
        if (e) {
          if (this.hasMaxChipsReached()) return;
          this.appendChip(e), this.resetChipBuffer();
        }
      })), this.$element.find("input").on("focus", t.bind(this, this.onInputFocus)).on("blur", t.bind(this, this.onInputBlur)));
    }, e.prototype.shouldAddOnBlur = function () {
      this.validateModel();
      var e = this.getChipBuffer().trim(),
          t = this.ngModelCtrl.$valid,
          n = this.autocompleteCtrl && !this.autocompleteCtrl.hidden;
      return this.userInputNgModelCtrl && (t = t && this.userInputNgModelCtrl.$valid), this.addOnBlur && !this.requireMatch && e && t && !n;
    }, e.prototype.hasFocus = function () {
      return this.inputHasFocus || this.selectedChip >= 0;
    }, e.prototype.contentIdFor = function (e) {
      return this.contentIds[e];
    };
  }(), function () {
    function e(e, t, a, d, s, c) {
      function l(n, o) {
        function i(e) {
          if (o.ngModel) {
            var t = r[0].querySelector(e);
            return t && t.outerHTML;
          }
        }

        var r = o.$mdUserTemplate;
        o.$mdUserTemplate = null;
        var l = i("md-chips>md-chip-template"),
            m = t.prefixer().buildList("md-chip-remove").map(function (e) {
          return "md-chips>*[" + e + "]";
        }).join(","),
            p = i(m) || u.remove,
            h = l || u["default"],
            f = i("md-chips>md-autocomplete") || i("md-chips>input") || u.input,
            g = r.find("md-chip");
        return r[0].querySelector("md-chip-template>*[md-chip-remove]") && d.warn("invalid placement of md-chip-remove within md-chip-template."), function (n, i, r, d) {
          t.initOptionalProperties(n, o), e(i);
          var m = d[0];

          if (l && (m.enableChipEdit = !1), m.chipContentsTemplate = h, m.chipRemoveTemplate = p, m.chipInputTemplate = f, m.mdCloseIcon = c.mdClose, i.attr({
            tabindex: -1
          }).on("focus", function () {
            m.onFocus();
          }), o.ngModel && (m.configureNgModel(i.controller("ngModel")), r.mdTransformChip && m.useTransformChipExpression(), r.mdOnAppend && m.useOnAppendExpression(), r.mdOnAdd && m.useOnAddExpression(), r.mdOnRemove && m.useOnRemoveExpression(), r.mdOnSelect && m.useOnSelectExpression(), f != u.input && n.$watch("$mdChipsCtrl.readonly", function (e) {
            e || t.nextTick(function () {
              if (0 === f.indexOf("<md-autocomplete")) {
                var e = i.find("md-autocomplete");
                m.configureAutocomplete(e.controller("mdAutocomplete"));
              }

              m.configureUserInput(i.find("input"));
            });
          }), t.nextTick(function () {
            var e = i.find("input");
            e && e.toggleClass("md-input", !0);
          })), g.length > 0) {
            var b = a(g.clone())(n.$parent);
            s(function () {
              i.find("md-chips-wrap").prepend(b);
            });
          }
        };
      }

      function m() {
        return {
          chips: t.processTemplate(n),
          input: t.processTemplate(o),
          "default": t.processTemplate(i),
          remove: t.processTemplate(r)
        };
      }

      var u = m();
      return {
        template: function (e, t) {
          return t.$mdUserTemplate = e.clone(), u.chips;
        },
        require: ["mdChips"],
        restrict: "E",
        controller: "MdChipsCtrl",
        controllerAs: "$mdChipsCtrl",
        bindToController: !0,
        compile: l,
        scope: {
          readonly: "=readonly",
          removable: "=mdRemovable",
          placeholder: "@",
          secondaryPlaceholder: "@",
          maxChips: "@mdMaxChips",
          transformChip: "&mdTransformChip",
          onAppend: "&mdOnAppend",
          onAdd: "&mdOnAdd",
          onRemove: "&mdOnRemove",
          onSelect: "&mdOnSelect",
          inputAriaLabel: "@",
          containerHint: "@",
          deleteHint: "@",
          deleteButtonLabel: "@",
          separatorKeys: "=?mdSeparatorKeys",
          requireMatch: "=?mdRequireMatch",
          chipAppendDelayString: "@?mdChipAppendDelay"
        }
      };
    }

    e.$inject = ["$mdTheming", "$mdUtil", "$compile", "$log", "$timeout", "$$mdSvgRegistry"], t.module("material.components.chips").directive("mdChips", e);
    var n = '      <md-chips-wrap          id="{{$mdChipsCtrl.wrapperId}}"          tabindex="{{$mdChipsCtrl.readonly ? 0 : -1}}"          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus(),                       \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly,                      \'md-removable\': $mdChipsCtrl.isRemovable() }"          aria-setsize="{{$mdChipsCtrl.items.length}}"          class="md-chips">        <span ng-if="$mdChipsCtrl.readonly" class="md-visually-hidden">          {{$mdChipsCtrl.containerHint}}        </span>        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index, \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly}">          <div class="md-chip-content"              tabindex="{{$mdChipsCtrl.ariaTabIndex == $index ? 0 : -1}}"              id="{{$mdChipsCtrl.contentIdFor($index)}}"              role="option"              aria-selected="{{$mdChipsCtrl.selectedChip == $index}}"               aria-posinset="{{$index}}"              ng-click="!$mdChipsCtrl.readonly && $mdChipsCtrl.focusChip($index)"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div ng-if="$mdChipsCtrl.isRemovable()"               class="md-chip-remove-container"               tabindex="-1"               md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div class="md-chip-input-container" ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl">          <div md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>',
        o = '        <input            class="md-input"            tabindex="0"            aria-label="{{$mdChipsCtrl.inputAriaLabel}}"             placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">',
        i = "      <span>{{$chip}}</span>",
        r = '      <button          class="md-chip-remove"          ng-if="$mdChipsCtrl.isRemovable()"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          tabindex="-1">        <md-icon md-svg-src="{{ $mdChipsCtrl.mdCloseIcon }}"></md-icon>        <span class="md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>';
  }(), function () {
    function e() {
      this.selectedItem = null, this.searchText = "";
    }

    t.module("material.components.chips").controller("MdContactChipsCtrl", e), e.prototype.queryContact = function (e) {
      return this.contactQuery({
        $query: e
      });
    }, e.prototype.itemName = function (e) {
      return e[this.contactName];
    };
  }(), function () {
    function e(e, t) {
      function o(n, o) {
        return function (n, i, r, a) {
          var d = a;
          t.initOptionalProperties(n, o), e(i), i.attr("tabindex", "-1"), r.$observe("mdChipAppendDelay", function (e) {
            d.chipAppendDelay = e;
          });
        };
      }

      return {
        template: function (e, t) {
          return n;
        },
        restrict: "E",
        controller: "MdContactChipsCtrl",
        controllerAs: "$mdContactChipsCtrl",
        bindToController: !0,
        compile: o,
        scope: {
          contactQuery: "&mdContacts",
          placeholder: "@",
          secondaryPlaceholder: "@",
          contactName: "@mdContactName",
          contactImage: "@mdContactImage",
          contactEmail: "@mdContactEmail",
          contacts: "=ngModel",
          requireMatch: "=?mdRequireMatch",
          minLength: "=?mdMinLength",
          highlightFlags: "@?mdHighlightFlags",
          chipAppendDelay: "@?mdChipAppendDelay"
        }
      };
    }

    e.$inject = ["$mdTheming", "$mdUtil"], t.module("material.components.chips").directive("mdContactChips", e);
    var n = '      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-chip-append-delay="{{$mdContactChipsCtrl.chipAppendDelay}}"           md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.itemName(item)"              md-no-cache="true"              md-min-length="$mdContactChipsCtrl.minLength"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}"                  ng-if="item[$mdContactChipsCtrl.contactImage]" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText"                    md-highlight-flags="{{$mdContactChipsCtrl.highlightFlags}}">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}"                  ng-if="$chip[$mdContactChipsCtrl.contactImage]" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>';
  }(), function () {
    !function () {
      function e() {
        return {
          template: function (e, t) {
            var n = t.hasOwnProperty("ngIf") ? "" : 'ng-if="calendarCtrl.isInitialized"',
                o = '<div ng-switch="calendarCtrl.currentView" ' + n + '><md-calendar-year ng-switch-when="year"></md-calendar-year><md-calendar-month ng-switch-default></md-calendar-month></div>';
            return o;
          },
          scope: {
            minDate: "=mdMinDate",
            maxDate: "=mdMaxDate",
            dateFilter: "=mdDateFilter",
            _currentView: "@mdCurrentView"
          },
          require: ["ngModel", "mdCalendar"],
          controller: n,
          controllerAs: "calendarCtrl",
          bindToController: !0,
          link: function (e, t, n, o) {
            var i = o[0],
                r = o[1];
            r.configureNgModel(i);
          }
        };
      }

      function n(e, n, o, r, a, d, s, c, l) {
        d(e), this.$element = e, this.$scope = n, this.dateUtil = o, this.$mdUtil = r, this.keyCode = a.KEY_CODE, this.$$rAF = s, this.$mdDateLocale = l, this.today = this.dateUtil.createDateAtMidnight(), this.ngModelCtrl = null, this.SELECTED_DATE_CLASS = "md-calendar-selected-date", this.TODAY_CLASS = "md-calendar-date-today", this.FOCUSED_DATE_CLASS = "md-focus", this.id = i++, this.displayDate = null, this.selectedDate = null, this.firstRenderableDate = null, this.lastRenderableDate = null, this.isInitialized = !1, this.width = 0, this.scrollbarWidth = 0, c.tabindex || e.attr("tabindex", "-1");
        var m,
            u = t.bind(this, this.handleKeyEvent);
        m = e.parent().hasClass("md-datepicker-calendar") ? t.element(document.body) : e, m.on("keydown", u), n.$on("$destroy", function () {
          m.off("keydown", u);
        }), 1 === t.version.major && t.version.minor <= 4 && this.$onInit();
      }

      n.$inject = ["$element", "$scope", "$$mdDateUtil", "$mdUtil", "$mdConstant", "$mdTheming", "$$rAF", "$attrs", "$mdDateLocale"], t.module("material.components.datepicker").directive("mdCalendar", e);
      var o = 340,
          i = 0;
      n.prototype.$onInit = function () {
        this.currentView = this._currentView || "month";
        var e = this.$mdDateLocale;
        this.minDate && this.minDate > e.firstRenderableDate ? this.firstRenderableDate = this.minDate : this.firstRenderableDate = e.firstRenderableDate, this.maxDate && this.maxDate < e.lastRenderableDate ? this.lastRenderableDate = this.maxDate : this.lastRenderableDate = e.lastRenderableDate;
      }, n.prototype.configureNgModel = function (e) {
        var t = this;
        t.ngModelCtrl = e, t.$mdUtil.nextTick(function () {
          t.isInitialized = !0;
        }), e.$render = function () {
          var e = this.$viewValue;
          t.$scope.$broadcast("md-calendar-parent-changed", e), t.selectedDate || (t.selectedDate = e), t.displayDate || (t.displayDate = t.selectedDate || t.today);
        };
      }, n.prototype.setNgModelValue = function (e) {
        var t = this.dateUtil.createDateAtMidnight(e);
        return this.focus(t), this.$scope.$emit("md-calendar-change", t), this.ngModelCtrl.$setViewValue(t), this.ngModelCtrl.$render(), t;
      }, n.prototype.setCurrentView = function (e, n) {
        var o = this;
        o.$mdUtil.nextTick(function () {
          o.currentView = e, n && (o.displayDate = t.isDate(n) ? n : new Date(n));
        });
      }, n.prototype.focus = function (e) {
        if (this.dateUtil.isValidDate(e)) {
          var t = this.$element[0].querySelector(".md-focus");
          t && t.classList.remove(this.FOCUSED_DATE_CLASS);
          var n = this.getDateId(e, this.currentView),
              o = document.getElementById(n);
          o && (o.classList.add(this.FOCUSED_DATE_CLASS), o.focus(), this.displayDate = e);
        } else {
          var i = this.$element[0].querySelector("[ng-switch]");
          i && i.focus();
        }
      }, n.prototype.getActionFromKeyEvent = function (e) {
        var t = this.keyCode;

        switch (e.which) {
          case t.ENTER:
            return "select";

          case t.RIGHT_ARROW:
            return "move-right";

          case t.LEFT_ARROW:
            return "move-left";

          case t.DOWN_ARROW:
            return e.metaKey ? "move-page-down" : "move-row-down";

          case t.UP_ARROW:
            return e.metaKey ? "move-page-up" : "move-row-up";

          case t.PAGE_DOWN:
            return "move-page-down";

          case t.PAGE_UP:
            return "move-page-up";

          case t.HOME:
            return "start";

          case t.END:
            return "end";

          default:
            return null;
        }
      }, n.prototype.handleKeyEvent = function (e) {
        var t = this;
        this.$scope.$apply(function () {
          if (e.which == t.keyCode.ESCAPE || e.which == t.keyCode.TAB) return t.$scope.$emit("md-calendar-close"), void (e.which == t.keyCode.TAB && e.preventDefault());
          var n = t.getActionFromKeyEvent(e);
          n && (e.preventDefault(), e.stopPropagation(), t.$scope.$broadcast("md-calendar-parent-action", n));
        });
      }, n.prototype.hideVerticalScrollbar = function (e) {
        function t() {
          var t = n.width || o,
              i = n.scrollbarWidth,
              a = e.calendarScroller;
          r.style.width = t + "px", a.style.width = t + i + "px", a.style.paddingRight = i + "px";
        }

        var n = this,
            i = e.$element[0],
            r = i.querySelector(".md-calendar-scroll-mask");
        n.width > 0 ? t() : n.$$rAF(function () {
          var o = e.calendarScroller;
          n.scrollbarWidth = o.offsetWidth - o.clientWidth, n.width = i.querySelector("table").offsetWidth, t();
        });
      }, n.prototype.getDateId = function (e, t) {
        if (!t) throw new Error("A namespace for the date id has to be specified.");
        return ["md", this.id, t, e.getFullYear(), e.getMonth(), e.getDate()].join("-");
      }, n.prototype.updateVirtualRepeat = function () {
        var e = this.$scope,
            t = e.$on("$md-resize-enable", function () {
          e.$$phase || e.$apply(), t();
        });
      };
    }();
  }(), function () {
    !function () {
      function e() {
        return {
          template: '<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="' + (i - o) + '"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-month-body role="rowgroup" md-virtual-repeat="i in monthCtrl.items" md-month-offset="$index" class="md-calendar-month" md-start-index="monthCtrl.getSelectedMonthIndex()" md-item-size="' + o + '"><tr aria-hidden="true" style="height:' + o + 'px;"></tr></tbody></table></md-virtual-repeat-container></div>',
          require: ["^^mdCalendar", "mdCalendarMonth"],
          controller: n,
          controllerAs: "monthCtrl",
          bindToController: !0,
          link: function (e, t, n, o) {
            var i = o[0],
                r = o[1];
            r.initialize(i);
          }
        };
      }

      function n(e, t, n, o, i, r) {
        this.$element = e, this.$scope = t, this.$animate = n, this.$q = o, this.dateUtil = i, this.dateLocale = r, this.calendarScroller = e[0].querySelector(".md-virtual-repeat-scroller"), this.isInitialized = !1, this.isMonthTransitionInProgress = !1;
        var a = this;
        this.cellClickHandler = function () {
          var e = i.getTimestampFromNode(this);
          a.$scope.$apply(function () {
            a.calendarCtrl.setNgModelValue(e);
          });
        }, this.headerClickHandler = function () {
          a.calendarCtrl.setCurrentView("year", i.getTimestampFromNode(this));
        };
      }

      n.$inject = ["$element", "$scope", "$animate", "$q", "$$mdDateUtil", "$mdDateLocale"], t.module("material.components.datepicker").directive("mdCalendarMonth", e);
      var o = 265,
          i = 45;
      n.prototype.initialize = function (e) {
        this.items = {
          length: this.dateUtil.getMonthDistance(e.firstRenderableDate, e.lastRenderableDate) + 2
        }, this.calendarCtrl = e, this.attachScopeListeners(), e.updateVirtualRepeat(), e.ngModelCtrl && e.ngModelCtrl.$render();
      }, n.prototype.getSelectedMonthIndex = function () {
        var e = this.calendarCtrl;
        return this.dateUtil.getMonthDistance(e.firstRenderableDate, e.displayDate || e.selectedDate || e.today);
      }, n.prototype.changeSelectedDate = function (e) {
        var t = this,
            n = t.calendarCtrl,
            o = n.selectedDate;
        n.selectedDate = e, this.changeDisplayDate(e).then(function () {
          var t = n.SELECTED_DATE_CLASS,
              i = "month";

          if (o) {
            var r = document.getElementById(n.getDateId(o, i));
            r && (r.classList.remove(t), r.setAttribute("aria-selected", "false"));
          }

          if (e) {
            var a = document.getElementById(n.getDateId(e, i));
            a && (a.classList.add(t), a.setAttribute("aria-selected", "true"));
          }
        });
      }, n.prototype.changeDisplayDate = function (e) {
        if (!this.isInitialized) return this.buildWeekHeader(), this.calendarCtrl.hideVerticalScrollbar(this), this.isInitialized = !0, this.$q.when();
        if (!this.dateUtil.isValidDate(e) || this.isMonthTransitionInProgress) return this.$q.when();
        this.isMonthTransitionInProgress = !0;
        var t = this.animateDateChange(e);
        this.calendarCtrl.displayDate = e;
        var n = this;
        return t.then(function () {
          n.isMonthTransitionInProgress = !1;
        }), t;
      }, n.prototype.animateDateChange = function (e) {
        if (this.dateUtil.isValidDate(e)) {
          var t = this.dateUtil.getMonthDistance(this.calendarCtrl.firstRenderableDate, e);
          this.calendarScroller.scrollTop = t * o;
        }

        return this.$q.when();
      }, n.prototype.buildWeekHeader = function () {
        for (var e = this.dateLocale.firstDayOfWeek, t = this.dateLocale.shortDays, n = document.createElement("tr"), o = 0; o < 7; o++) {
          var i = document.createElement("th");
          i.textContent = t[(o + e) % 7], n.appendChild(i);
        }

        this.$element.find("thead").append(n);
      }, n.prototype.attachScopeListeners = function () {
        var e = this;
        e.$scope.$on("md-calendar-parent-changed", function (t, n) {
          e.changeSelectedDate(n);
        }), e.$scope.$on("md-calendar-parent-action", t.bind(this, this.handleKeyEvent));
      }, n.prototype.handleKeyEvent = function (e, t) {
        var n = this.calendarCtrl,
            o = n.displayDate;
        if ("select" === t) n.setNgModelValue(o);else {
          var i = null,
              r = this.dateUtil;

          switch (t) {
            case "move-right":
              i = r.incrementDays(o, 1);
              break;

            case "move-left":
              i = r.incrementDays(o, -1);
              break;

            case "move-page-down":
              i = r.incrementMonths(o, 1);
              break;

            case "move-page-up":
              i = r.incrementMonths(o, -1);
              break;

            case "move-row-down":
              i = r.incrementDays(o, 7);
              break;

            case "move-row-up":
              i = r.incrementDays(o, -7);
              break;

            case "start":
              i = r.getFirstDateOfMonth(o);
              break;

            case "end":
              i = r.getLastDateOfMonth(o);
          }

          i && (i = this.dateUtil.clampDate(i, n.minDate, n.maxDate), this.changeDisplayDate(i).then(function () {
            n.focus(i);
          }));
        }
      };
    }();
  }(), function () {
    !function () {
      function e(e, o) {
        var i = e('<md-icon md-svg-src="' + o.mdTabsArrow + '"></md-icon>')({})[0];
        return {
          require: ["^^mdCalendar", "^^mdCalendarMonth", "mdCalendarMonthBody"],
          scope: {
            offset: "=mdMonthOffset"
          },
          controller: n,
          controllerAs: "mdMonthBodyCtrl",
          bindToController: !0,
          link: function (e, n, o, r) {
            var a = r[0],
                d = r[1],
                s = r[2];
            s.calendarCtrl = a, s.monthCtrl = d, s.arrowIcon = i.cloneNode(!0), e.$watch(function () {
              return s.offset;
            }, function (e) {
              t.isNumber(e) && s.generateContent();
            });
          }
        };
      }

      function n(e, t, n) {
        this.$element = e, this.dateUtil = t, this.dateLocale = n, this.monthCtrl = null, this.calendarCtrl = null, this.offset = null, this.focusAfterAppend = null;
      }

      e.$inject = ["$compile", "$$mdSvgRegistry"], n.$inject = ["$element", "$$mdDateUtil", "$mdDateLocale"], t.module("material.components.datepicker").directive("mdCalendarMonthBody", e), n.prototype.generateContent = function () {
        var e = this.dateUtil.incrementMonths(this.calendarCtrl.firstRenderableDate, this.offset);
        this.$element.empty().append(this.buildCalendarForMonth(e)), this.focusAfterAppend && (this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS), this.focusAfterAppend.focus(), this.focusAfterAppend = null);
      }, n.prototype.buildDateCell = function (e) {
        var t = this.monthCtrl,
            n = this.calendarCtrl,
            o = document.createElement("td");

        if (o.tabIndex = -1, o.classList.add("md-calendar-date"), o.setAttribute("role", "gridcell"), e) {
          o.setAttribute("tabindex", "-1"), o.setAttribute("aria-label", this.dateLocale.longDateFormatter(e)), o.id = n.getDateId(e, "month"), o.setAttribute("data-timestamp", e.getTime()), this.dateUtil.isSameDay(e, n.today) && o.classList.add(n.TODAY_CLASS), this.dateUtil.isValidDate(n.selectedDate) && this.dateUtil.isSameDay(e, n.selectedDate) && (o.classList.add(n.SELECTED_DATE_CLASS), o.setAttribute("aria-selected", "true"));
          var i = this.dateLocale.dates[e.getDate()];

          if (this.isDateEnabled(e)) {
            var r = document.createElement("span");
            r.classList.add("md-calendar-date-selection-indicator"), r.textContent = i, o.appendChild(r), o.addEventListener("click", t.cellClickHandler), n.displayDate && this.dateUtil.isSameDay(e, n.displayDate) && (this.focusAfterAppend = o);
          } else o.classList.add("md-calendar-date-disabled"), o.textContent = i;
        }

        return o;
      }, n.prototype.isDateEnabled = function (e) {
        return this.dateUtil.isDateWithinRange(e, this.calendarCtrl.minDate, this.calendarCtrl.maxDate) && (!t.isFunction(this.calendarCtrl.dateFilter) || this.calendarCtrl.dateFilter(e));
      }, n.prototype.buildDateRow = function (e) {
        var t = document.createElement("tr");
        return t.setAttribute("role", "row"), t.setAttribute("aria-label", this.dateLocale.weekNumberFormatter(e)), t;
      }, n.prototype.buildCalendarForMonth = function (e) {
        var t = this.dateUtil.isValidDate(e) ? e : new Date(),
            n = this.dateUtil.getFirstDateOfMonth(t),
            o = this.getLocaleDay_(n),
            i = this.dateUtil.getNumberOfDaysInMonth(t),
            r = document.createDocumentFragment(),
            a = 1,
            d = this.buildDateRow(a);
        r.appendChild(d);
        var s = this.offset === this.monthCtrl.items.length - 1,
            c = 0,
            l = document.createElement("td"),
            m = document.createElement("span");

        if (m.textContent = this.dateLocale.monthHeaderFormatter(t), l.appendChild(m), l.classList.add("md-calendar-month-label"), this.calendarCtrl.maxDate && n > this.calendarCtrl.maxDate ? l.classList.add("md-calendar-month-label-disabled") : (l.addEventListener("click", this.monthCtrl.headerClickHandler), l.setAttribute("data-timestamp", n.getTime()), l.setAttribute("aria-label", this.dateLocale.monthFormatter(t)), l.appendChild(this.arrowIcon.cloneNode(!0))), o <= 2) {
          l.setAttribute("colspan", "7");
          var u = this.buildDateRow();
          if (u.appendChild(l), r.insertBefore(u, d), s) return r;
        } else c = 3, l.setAttribute("colspan", "3"), d.appendChild(l);

        for (var p = c; p < o; p++) d.appendChild(this.buildDateCell());

        for (var h = o, f = n, g = 1; g <= i; g++) {
          if (7 === h) {
            if (s) return r;
            h = 0, a++, d = this.buildDateRow(a), r.appendChild(d);
          }

          f.setDate(g);
          var b = this.buildDateCell(f);
          d.appendChild(b), h++;
        }

        for (; d.childNodes.length < 7;) d.appendChild(this.buildDateCell());

        for (; r.childNodes.length < 6;) {
          for (var v = this.buildDateRow(), E = 0; E < 7; E++) v.appendChild(this.buildDateCell());

          r.appendChild(v);
        }

        return r;
      }, n.prototype.getLocaleDay_ = function (e) {
        return (e.getDay() + (7 - this.dateLocale.firstDayOfWeek)) % 7;
      };
    }();
  }(), function () {
    !function () {
      function e() {
        return {
          template: '<div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-year-body role="rowgroup" md-virtual-repeat="i in yearCtrl.items" md-year-offset="$index" class="md-calendar-year" md-start-index="yearCtrl.getFocusedYearIndex()" md-item-size="' + o + '"><tr aria-hidden="true" style="height:' + o + 'px;"></tr></tbody></table></md-virtual-repeat-container></div>',
          require: ["^^mdCalendar", "mdCalendarYear"],
          controller: n,
          controllerAs: "yearCtrl",
          bindToController: !0,
          link: function (e, t, n, o) {
            var i = o[0],
                r = o[1];
            r.initialize(i);
          }
        };
      }

      function n(e, t, n, o, i) {
        this.$element = e, this.$scope = t, this.$animate = n, this.$q = o, this.dateUtil = i, this.calendarScroller = e[0].querySelector(".md-virtual-repeat-scroller"), this.isInitialized = !1, this.isMonthTransitionInProgress = !1;
        var r = this;

        this.cellClickHandler = function () {
          r.calendarCtrl.setCurrentView("month", i.getTimestampFromNode(this));
        };
      }

      n.$inject = ["$element", "$scope", "$animate", "$q", "$$mdDateUtil"], t.module("material.components.datepicker").directive("mdCalendarYear", e);
      var o = 88;
      n.prototype.initialize = function (e) {
        this.items = {
          length: this.dateUtil.getYearDistance(e.firstRenderableDate, e.lastRenderableDate) + 1
        }, this.calendarCtrl = e, this.attachScopeListeners(), e.updateVirtualRepeat(), e.ngModelCtrl && e.ngModelCtrl.$render();
      }, n.prototype.getFocusedYearIndex = function () {
        var e = this.calendarCtrl;
        return this.dateUtil.getYearDistance(e.firstRenderableDate, e.displayDate || e.selectedDate || e.today);
      }, n.prototype.changeDate = function (e) {
        if (!this.isInitialized) return this.calendarCtrl.hideVerticalScrollbar(this), this.isInitialized = !0, this.$q.when();

        if (this.dateUtil.isValidDate(e) && !this.isMonthTransitionInProgress) {
          var t = this,
              n = this.animateDateChange(e);
          return t.isMonthTransitionInProgress = !0, t.calendarCtrl.displayDate = e, n.then(function () {
            t.isMonthTransitionInProgress = !1;
          });
        }
      }, n.prototype.animateDateChange = function (e) {
        if (this.dateUtil.isValidDate(e)) {
          var t = this.dateUtil.getYearDistance(this.calendarCtrl.firstRenderableDate, e);
          this.calendarScroller.scrollTop = t * o;
        }

        return this.$q.when();
      }, n.prototype.handleKeyEvent = function (e, t) {
        var n = this.calendarCtrl,
            o = n.displayDate;
        if ("select" === t) this.changeDate(o).then(function () {
          n.setCurrentView("month", o), n.focus(o);
        });else {
          var i = null,
              r = this.dateUtil;

          switch (t) {
            case "move-right":
              i = r.incrementMonths(o, 1);
              break;

            case "move-left":
              i = r.incrementMonths(o, -1);
              break;

            case "move-row-down":
              i = r.incrementMonths(o, 6);
              break;

            case "move-row-up":
              i = r.incrementMonths(o, -6);
          }

          if (i) {
            var a = n.minDate ? r.getFirstDateOfMonth(n.minDate) : null,
                d = n.maxDate ? r.getFirstDateOfMonth(n.maxDate) : null;
            i = r.getFirstDateOfMonth(this.dateUtil.clampDate(i, a, d)), this.changeDate(i).then(function () {
              n.focus(i);
            });
          }
        }
      }, n.prototype.attachScopeListeners = function () {
        var e = this;
        e.$scope.$on("md-calendar-parent-changed", function (t, n) {
          e.changeDate(n);
        }), e.$scope.$on("md-calendar-parent-action", t.bind(e, e.handleKeyEvent));
      };
    }();
  }(), function () {
    !function () {
      function e() {
        return {
          require: ["^^mdCalendar", "^^mdCalendarYear", "mdCalendarYearBody"],
          scope: {
            offset: "=mdYearOffset"
          },
          controller: n,
          controllerAs: "mdYearBodyCtrl",
          bindToController: !0,
          link: function (e, n, o, i) {
            var r = i[0],
                a = i[1],
                d = i[2];
            d.calendarCtrl = r, d.yearCtrl = a, e.$watch(function () {
              return d.offset;
            }, function (e) {
              t.isNumber(e) && d.generateContent();
            });
          }
        };
      }

      function n(e, t, n) {
        this.$element = e, this.dateUtil = t, this.dateLocale = n, this.calendarCtrl = null, this.yearCtrl = null, this.offset = null, this.focusAfterAppend = null;
      }

      n.$inject = ["$element", "$$mdDateUtil", "$mdDateLocale"], t.module("material.components.datepicker").directive("mdCalendarYearBody", e), n.prototype.generateContent = function () {
        var e = this.dateUtil.incrementYears(this.calendarCtrl.firstRenderableDate, this.offset);
        this.$element.empty().append(this.buildCalendarForYear(e)), this.focusAfterAppend && (this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS), this.focusAfterAppend.focus(), this.focusAfterAppend = null);
      }, n.prototype.buildMonthCell = function (e, t) {
        var n = this.calendarCtrl,
            o = this.yearCtrl,
            i = this.buildBlankCell(),
            r = new Date(e, t, 1);
        i.setAttribute("aria-label", this.dateLocale.monthFormatter(r)), i.id = n.getDateId(r, "year"), i.setAttribute("data-timestamp", r.getTime()), this.dateUtil.isSameMonthAndYear(r, n.today) && i.classList.add(n.TODAY_CLASS), this.dateUtil.isValidDate(n.selectedDate) && this.dateUtil.isSameMonthAndYear(r, n.selectedDate) && (i.classList.add(n.SELECTED_DATE_CLASS), i.setAttribute("aria-selected", "true"));
        var a = this.dateLocale.shortMonths[t];

        if (this.dateUtil.isMonthWithinRange(r, n.minDate, n.maxDate)) {
          var d = document.createElement("span");
          d.classList.add("md-calendar-date-selection-indicator"), d.textContent = a, i.appendChild(d), i.addEventListener("click", o.cellClickHandler), n.displayDate && this.dateUtil.isSameMonthAndYear(r, n.displayDate) && (this.focusAfterAppend = i);
        } else i.classList.add("md-calendar-date-disabled"), i.textContent = a;

        return i;
      }, n.prototype.buildBlankCell = function () {
        var e = document.createElement("td");
        return e.tabIndex = -1, e.classList.add("md-calendar-date"), e.setAttribute("role", "gridcell"), e.setAttribute("tabindex", "-1"), e;
      }, n.prototype.buildCalendarForYear = function (e) {
        var t,
            n = e.getFullYear(),
            o = document.createDocumentFragment(),
            i = document.createElement("tr"),
            r = document.createElement("td");

        for (r.className = "md-calendar-month-label", r.textContent = n, i.appendChild(r), t = 0; t < 6; t++) i.appendChild(this.buildMonthCell(n, t));

        o.appendChild(i);
        var a = document.createElement("tr");

        for (a.appendChild(this.buildBlankCell()), t = 6; t < 12; t++) a.appendChild(this.buildMonthCell(n, t));

        return o.appendChild(a), o;
      };
    }();
  }(), function () {
    !function () {
      t.module("material.components.datepicker").config(["$provide", function (e) {
        function t() {
          this.months = null, this.shortMonths = null, this.days = null, this.shortDays = null, this.dates = null, this.firstDayOfWeek = 0, this.formatDate = null, this.parseDate = null, this.monthHeaderFormatter = null, this.weekNumberFormatter = null, this.longDateFormatter = null, this.msgCalendar = "", this.msgOpenCalendar = "";
        }

        t.prototype.$get = function (e, t) {
          function n(e, n) {
            if (!e) return "";
            var o = e.toLocaleTimeString(),
                i = e;
            return 0 !== e.getHours() || o.indexOf("11:") === -1 && o.indexOf("23:") === -1 || (i = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 1, 0, 0)), t("date")(i, "M/d/yyyy", n);
          }

          function o(e) {
            return new Date(e);
          }

          function i(e) {
            e = e.trim();
            var t = /^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;
            return t.test(e);
          }

          function r(e) {
            return g.shortMonths[e.getMonth()] + " " + e.getFullYear();
          }

          function a(e) {
            return g.months[e.getMonth()] + " " + e.getFullYear();
          }

          function d(e) {
            return "Week " + e;
          }

          function s(e) {
            return [g.days[e.getDay()], g.months[e.getMonth()], g.dates[e.getDate()], e.getFullYear()].join(" ");
          }

          for (var c = e.DATETIME_FORMATS.SHORTDAY.map(function (e) {
            return e.substring(0, 1);
          }), l = Array(32), m = 1; m <= 31; m++) l[m] = m;

          var u = "Calendar",
              p = "Open calendar",
              h = new Date(1880, 0, 1),
              f = new Date(h.getFullYear() + 250, 0, 1),
              g = {
            months: this.months || e.DATETIME_FORMATS.MONTH,
            shortMonths: this.shortMonths || e.DATETIME_FORMATS.SHORTMONTH,
            days: this.days || e.DATETIME_FORMATS.DAY,
            shortDays: this.shortDays || c,
            dates: this.dates || l,
            firstDayOfWeek: this.firstDayOfWeek || 0,
            formatDate: this.formatDate || n,
            parseDate: this.parseDate || o,
            isDateComplete: this.isDateComplete || i,
            monthHeaderFormatter: this.monthHeaderFormatter || r,
            monthFormatter: this.monthFormatter || a,
            weekNumberFormatter: this.weekNumberFormatter || d,
            longDateFormatter: this.longDateFormatter || s,
            msgCalendar: this.msgCalendar || u,
            msgOpenCalendar: this.msgOpenCalendar || p,
            firstRenderableDate: this.firstRenderableDate || h,
            lastRenderableDate: this.lastRenderableDate || f
          };
          return g;
        }, t.prototype.$get.$inject = ["$locale", "$filter"], e.provider("$mdDateLocale", new t());
      }]);
    }();
  }(), function () {
    !function () {
      t.module("material.components.datepicker").factory("$$mdDateUtil", function () {
        function e(e) {
          return new Date(e.getFullYear(), e.getMonth(), 1);
        }

        function n(e) {
          return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
        }

        function o(e) {
          return new Date(e.getFullYear(), e.getMonth() + 1, 1);
        }

        function i(e) {
          return new Date(e.getFullYear(), e.getMonth() - 1, 1);
        }

        function r(e, t) {
          return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth();
        }

        function a(e, t) {
          return e.getDate() == t.getDate() && r(e, t);
        }

        function d(e, t) {
          var n = o(e);
          return r(n, t);
        }

        function s(e, t) {
          var n = i(e);
          return r(t, n);
        }

        function c(e, t) {
          return b((e.getTime() + t.getTime()) / 2);
        }

        function l(t) {
          var n = e(t);
          return Math.floor((n.getDay() + t.getDate() - 1) / 7);
        }

        function m(e, t) {
          return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
        }

        function u(e, t) {
          var o = new Date(e.getFullYear(), e.getMonth() + t, 1),
              i = n(o);
          return i < e.getDate() ? o.setDate(i) : o.setDate(e.getDate()), o;
        }

        function p(e, t) {
          return 12 * (t.getFullYear() - e.getFullYear()) + (t.getMonth() - e.getMonth());
        }

        function h(e) {
          return new Date(e.getFullYear(), e.getMonth(), n(e));
        }

        function f(e) {
          return e && e.getTime && !isNaN(e.getTime());
        }

        function g(e) {
          f(e) && e.setHours(0, 0, 0, 0);
        }

        function b(e) {
          var n;
          return n = t.isUndefined(e) ? new Date() : new Date(e), g(n), n;
        }

        function v(e, t, n) {
          var o = b(e),
              i = f(t) ? b(t) : null,
              r = f(n) ? b(n) : null;
          return (!i || i <= o) && (!r || r >= o);
        }

        function E(e, t) {
          return u(e, 12 * t);
        }

        function $(e, t) {
          return t.getFullYear() - e.getFullYear();
        }

        function C(e, t, n) {
          var o = e;
          return t && e < t && (o = new Date(t.getTime())), n && e > n && (o = new Date(n.getTime())), o;
        }

        function y(e) {
          if (e && e.hasAttribute("data-timestamp")) return Number(e.getAttribute("data-timestamp"));
        }

        function M(e, t, n) {
          var o = e.getMonth(),
              i = e.getFullYear();
          return (!t || t.getFullYear() < i || t.getMonth() <= o) && (!n || n.getFullYear() > i || n.getMonth() >= o);
        }

        return {
          getFirstDateOfMonth: e,
          getNumberOfDaysInMonth: n,
          getDateInNextMonth: o,
          getDateInPreviousMonth: i,
          isInNextMonth: d,
          isInPreviousMonth: s,
          getDateMidpoint: c,
          isSameMonthAndYear: r,
          getWeekOfMonth: l,
          incrementDays: m,
          incrementMonths: u,
          getLastDateOfMonth: h,
          isSameDay: a,
          getMonthDistance: p,
          isValidDate: f,
          setDateTimeToMidnight: g,
          createDateAtMidnight: b,
          isDateWithinRange: v,
          incrementYears: E,
          getYearDistance: $,
          clampDate: C,
          getTimestampFromNode: y,
          isMonthWithinRange: M
        };
      });
    }();
  }(), function () {
    !function () {
      function n(e, n, i, r) {
        return {
          template: function (t, n) {
            var o = n.mdHideIcons,
                i = n.ariaLabel || n.mdPlaceholder,
                r = "all" === o || "calendar" === o ? "" : '<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" aria-label="md-calendar" md-svg-src="' + e.mdCalendar + '"></md-icon></md-button>',
                a = "";
            return "all" !== o && "triangle" !== o && (a = '<md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.locale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button>', t.addClass(c)), r + '<div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input ' + (i ? 'aria-label="' + i + '" ' : "") + 'class="md-datepicker-input" aria-haspopup="true" aria-expanded="{{ctrl.isCalendarOpen}}" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)"> ' + a + '</div><div class="md-datepicker-calendar-pane md-whiteframe-z1" id="{{::ctrl.calendarPaneId}}"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.locale.msgCalendar}}" md-current-view="{{::ctrl.currentView}}"md-min-date="ctrl.minDate"md-max-date="ctrl.maxDate"md-date-filter="ctrl.dateFilter"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>';
          },
          require: ["ngModel", "mdDatepicker", "?^mdInputContainer", "?^form"],
          scope: {
            minDate: "=mdMinDate",
            maxDate: "=mdMaxDate",
            placeholder: "@mdPlaceholder",
            currentView: "@mdCurrentView",
            dateFilter: "=mdDateFilter",
            isOpen: "=?mdIsOpen",
            debounceInterval: "=mdDebounceInterval",
            dateLocale: "=mdDateLocale"
          },
          controller: o,
          controllerAs: "ctrl",
          bindToController: !0,
          link: function (e, o, a, c) {
            var l = c[0],
                m = c[1],
                u = c[2],
                p = c[3],
                h = n.parseAttributeBoolean(a.mdNoAsterisk);

            if (m.configureNgModel(l, u, r), u) {
              var f = o[0].querySelector(".md-errors-spacer");
              f && o.after(t.element("<div>").append(f)), u.setHasPlaceholder(a.mdPlaceholder), u.input = o, u.element.addClass(d).toggleClass(s, "calendar" !== a.mdHideIcons && "all" !== a.mdHideIcons), u.label ? h || a.$observe("required", function (e) {
                u.label.toggleClass("md-required", !!e);
              }) : i.expect(o, "aria-label", a.mdPlaceholder), e.$watch(u.isErrorGetter || function () {
                return l.$invalid && (l.$touched || p && p.$submitted);
              }, u.setInvalid);
            } else if (p) var g = e.$watch(function () {
              return p.$submitted;
            }, function (e) {
              e && (m.updateErrorState(), g());
            });
          }
        };
      }

      function o(n, o, i, r, a, d, s, c, l, m, u) {
        this.$window = r, this.dateUtil = l, this.$mdConstant = a, this.$mdUtil = s, this.$$rAF = m, this.$mdDateLocale = c, this.documentElement = t.element(document.documentElement), this.ngModelCtrl = null, this.inputElement = o[0].querySelector("input"), this.ngInputElement = t.element(this.inputElement), this.inputContainer = o[0].querySelector(".md-datepicker-input-container"), this.calendarPane = o[0].querySelector(".md-datepicker-calendar-pane"), this.calendarButton = o[0].querySelector(".md-datepicker-button"), this.inputMask = t.element(o[0].querySelector(".md-datepicker-input-mask-opaque")), this.$element = o, this.$attrs = i, this.$scope = n, this.date = null, this.isFocused = !1, this.isDisabled, this.setDisabled(o[0].disabled || t.isString(i.disabled)), this.isCalendarOpen = !1, this.openOnFocus = i.hasOwnProperty("mdOpenOnFocus"), this.mdInputContainer = null, this.calendarPaneOpenedFrom = null, this.calendarPaneId = "md-date-pane-" + s.nextUid(), this.bodyClickHandler = t.bind(this, this.handleBodyClick), this.windowEventName = p.test(navigator.userAgent || navigator.vendor || e.opera) ? "orientationchange" : "resize", this.windowEventHandler = s.debounce(t.bind(this, this.closeCalendarPane), 100), this.windowBlurHandler = t.bind(this, this.handleWindowBlur), this.ngDateFilter = u("date"), this.leftMargin = 20, this.topMargin = null, i.tabindex ? (this.ngInputElement.attr("tabindex", i.tabindex), i.$set("tabindex", null)) : i.$set("tabindex", "-1"), i.$set("aria-owns", this.calendarPaneId), d(o), d(t.element(this.calendarPane));
        var h = this;
        n.$on("$destroy", function () {
          h.detachCalendarPane();
        }), i.mdIsOpen && n.$watch("ctrl.isOpen", function (e) {
          e ? h.openCalendarPane({
            target: h.inputElement
          }) : h.closeCalendarPane();
        }), 1 === t.version.major && t.version.minor <= 4 && this.$onInit();
      }

      o.$inject = ["$scope", "$element", "$attrs", "$window", "$mdConstant", "$mdTheming", "$mdUtil", "$mdDateLocale", "$$mdDateUtil", "$$rAF", "$filter"], n.$inject = ["$$mdSvgRegistry", "$mdUtil", "$mdAria", "inputDirective"], t.module("material.components.datepicker").directive("mdDatepicker", n);
      var i = 3,
          r = "md-datepicker-invalid",
          a = "md-datepicker-open",
          d = "_md-datepicker-floating-label",
          s = "_md-datepicker-has-calendar-icon",
          c = "_md-datepicker-has-triangle-icon",
          l = 500,
          m = 368,
          u = 360,
          p = /ipad|iphone|ipod|android/i;
      o.prototype.$onInit = function () {
        this.locale = this.dateLocale ? t.extend({}, this.$mdDateLocale, this.dateLocale) : this.$mdDateLocale, this.installPropertyInterceptors(), this.attachChangeListeners(), this.attachInteractionListeners();
      }, o.prototype.configureNgModel = function (e, n, o) {
        this.ngModelCtrl = e, this.mdInputContainer = n, this.$attrs.$set("type", "date"), o[0].link.pre(this.$scope, {
          on: t.noop,
          val: t.noop,
          0: {}
        }, this.$attrs, [e]);
        var i = this;
        i.ngModelCtrl.$formatters.push(function (e) {
          var n = t.isDefined(e) ? Date.parse(e) : null;
          if (!isNaN(n) && t.isNumber(n) && (e = new Date(n)), e && !(e instanceof Date)) throw Error("The ng-model for md-datepicker must be a Date instance or a value that can be parsed into a date. Currently the model is of type: " + typeof e);
          return i.onExternalChange(e), e;
        }), e.$viewChangeListeners.unshift(t.bind(this, this.updateErrorState));
        var r = i.$mdUtil.getModelOption(e, "updateOn");
        r && this.ngInputElement.on(r, t.bind(this.$element, this.$element.triggerHandler, r));
      }, o.prototype.attachChangeListeners = function () {
        var e = this;
        e.$scope.$on("md-calendar-change", function (t, n) {
          e.setModelValue(n), e.onExternalChange(n), e.closeCalendarPane();
        }), e.ngInputElement.on("input", t.bind(e, e.resizeInputElement));
        var n = t.isDefined(this.debounceInterval) ? this.debounceInterval : l;
        e.ngInputElement.on("input", e.$mdUtil.debounce(e.handleInputEvent, n, e));
      }, o.prototype.attachInteractionListeners = function () {
        var e = this,
            n = this.$scope,
            o = this.$mdConstant.KEY_CODE;
        e.ngInputElement.on("keydown", function (t) {
          t.altKey && t.keyCode == o.DOWN_ARROW && (e.openCalendarPane(t), n.$digest());
        }), e.openOnFocus && (e.ngInputElement.on("focus", t.bind(e, e.openCalendarPane)), t.element(e.$window).on("blur", e.windowBlurHandler), n.$on("$destroy", function () {
          t.element(e.$window).off("blur", e.windowBlurHandler);
        })), n.$on("md-calendar-close", function () {
          e.closeCalendarPane();
        });
      }, o.prototype.installPropertyInterceptors = function () {
        var e = this;

        if (this.$attrs.ngDisabled) {
          var t = this.$scope.$parent;
          t && t.$watch(this.$attrs.ngDisabled, function (t) {
            e.setDisabled(t);
          });
        }

        Object.defineProperty(this, "placeholder", {
          get: function () {
            return e.inputElement.placeholder;
          },
          set: function (t) {
            e.inputElement.placeholder = t || "";
          }
        });
      }, o.prototype.setDisabled = function (e) {
        this.isDisabled = e, this.inputElement.disabled = e, this.calendarButton && (this.calendarButton.disabled = e);
      }, o.prototype.updateErrorState = function (e) {
        var n = e || this.date;

        if (this.clearErrorState(), this.dateUtil.isValidDate(n)) {
          if (n = this.dateUtil.createDateAtMidnight(n), this.dateUtil.isValidDate(this.minDate)) {
            var o = this.dateUtil.createDateAtMidnight(this.minDate);
            this.ngModelCtrl.$setValidity("mindate", n >= o);
          }

          if (this.dateUtil.isValidDate(this.maxDate)) {
            var i = this.dateUtil.createDateAtMidnight(this.maxDate);
            this.ngModelCtrl.$setValidity("maxdate", n <= i);
          }

          t.isFunction(this.dateFilter) && this.ngModelCtrl.$setValidity("filtered", this.dateFilter(n));
        } else this.ngModelCtrl.$setValidity("valid", null == n);

        t.element(this.inputContainer).toggleClass(r, !this.ngModelCtrl.$valid);
      }, o.prototype.clearErrorState = function () {
        this.inputContainer.classList.remove(r), ["mindate", "maxdate", "filtered", "valid"].forEach(function (e) {
          this.ngModelCtrl.$setValidity(e, !0);
        }, this);
      }, o.prototype.resizeInputElement = function () {
        this.inputElement.size = this.inputElement.value.length + i;
      }, o.prototype.handleInputEvent = function () {
        var e = this.inputElement.value,
            t = e ? this.locale.parseDate(e) : null;
        this.dateUtil.setDateTimeToMidnight(t);
        var n = "" == e || this.dateUtil.isValidDate(t) && this.locale.isDateComplete(e) && this.isDateEnabled(t);
        n && (this.setModelValue(t), this.date = t), this.updateErrorState(t);
      }, o.prototype.isDateEnabled = function (e) {
        return this.dateUtil.isDateWithinRange(e, this.minDate, this.maxDate) && (!t.isFunction(this.dateFilter) || this.dateFilter(e));
      }, o.prototype.attachCalendarPane = function () {
        var e = this.calendarPane,
            n = document.body;
        e.style.transform = "", this.$element.addClass(a), this.mdInputContainer && this.mdInputContainer.element.addClass(a), t.element(n).addClass("md-datepicker-is-showing");
        var o = this.inputContainer.getBoundingClientRect(),
            i = n.getBoundingClientRect();
        (!this.topMargin || this.topMargin < 0) && (this.topMargin = (this.inputMask.parent().prop("clientHeight") - this.ngInputElement.prop("clientHeight")) / 2);
        var r = o.top - i.top - this.topMargin,
            d = o.left - i.left - this.leftMargin,
            s = i.top < 0 && 0 == document.body.scrollTop ? -i.top : document.body.scrollTop,
            c = i.left < 0 && 0 == document.body.scrollLeft ? -i.left : document.body.scrollLeft,
            l = s + this.$window.innerHeight,
            p = c + this.$window.innerWidth;

        if (this.inputMask.css({
          position: "absolute",
          left: this.leftMargin + "px",
          top: this.topMargin + "px",
          width: o.width - 1 + "px",
          height: o.height - 2 + "px"
        }), d + u > p) {
          if (p - u > 0) d = p - u;else {
            d = c;
            var h = this.$window.innerWidth / u;
            e.style.transform = "scale(" + h + ")";
          }
          e.classList.add("md-datepicker-pos-adjusted");
        }

        r + m > l && l - m > s && (r = l - m, e.classList.add("md-datepicker-pos-adjusted")), e.style.left = d + "px", e.style.top = r + "px", document.body.appendChild(e), this.$$rAF(function () {
          e.classList.add("md-pane-open");
        });
      }, o.prototype.detachCalendarPane = function () {
        this.$element.removeClass(a), this.mdInputContainer && this.mdInputContainer.element.removeClass(a), t.element(document.body).removeClass("md-datepicker-is-showing"), this.calendarPane.classList.remove("md-pane-open"), this.calendarPane.classList.remove("md-datepicker-pos-adjusted"), this.isCalendarOpen && this.$mdUtil.enableScrolling(), this.calendarPane.parentNode && this.calendarPane.parentNode.removeChild(this.calendarPane);
      }, o.prototype.openCalendarPane = function (t) {
        if (!this.isCalendarOpen && !this.isDisabled && !this.inputFocusedOnWindowBlur) {
          this.isCalendarOpen = this.isOpen = !0, this.calendarPaneOpenedFrom = t.target, this.$mdUtil.disableScrollAround(this.calendarPane), this.attachCalendarPane(), this.focusCalendar(), this.evalAttr("ngFocus");
          var n = this;
          this.$mdUtil.nextTick(function () {
            n.documentElement.on("click touchstart", n.bodyClickHandler);
          }, !1), e.addEventListener(this.windowEventName, this.windowEventHandler);
        }
      }, o.prototype.closeCalendarPane = function () {
        function t() {
          n.isCalendarOpen = n.isOpen = !1;
        }

        if (this.isCalendarOpen) {
          var n = this;
          n.detachCalendarPane(), n.ngModelCtrl.$setTouched(), n.evalAttr("ngBlur"), n.documentElement.off("click touchstart", n.bodyClickHandler), e.removeEventListener(n.windowEventName, n.windowEventHandler), n.calendarPaneOpenedFrom.focus(), n.calendarPaneOpenedFrom = null, n.openOnFocus ? n.$mdUtil.nextTick(t) : t();
        }
      }, o.prototype.getCalendarCtrl = function () {
        return t.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar");
      }, o.prototype.focusCalendar = function () {
        var e = this;
        this.$mdUtil.nextTick(function () {
          e.getCalendarCtrl().focus();
        }, !1);
      }, o.prototype.setFocused = function (e) {
        e || this.ngModelCtrl.$setTouched(), this.openOnFocus || this.evalAttr(e ? "ngFocus" : "ngBlur"), this.isFocused = e;
      }, o.prototype.handleBodyClick = function (e) {
        if (this.isCalendarOpen) {
          var t = this.$mdUtil.getClosest(e.target, "md-calendar");
          t || this.closeCalendarPane(), this.$scope.$digest();
        }
      }, o.prototype.handleWindowBlur = function () {
        this.inputFocusedOnWindowBlur = document.activeElement === this.inputElement;
      }, o.prototype.evalAttr = function (e) {
        this.$attrs[e] && this.$scope.$parent.$eval(this.$attrs[e]);
      }, o.prototype.setModelValue = function (e) {
        var t = this.$mdUtil.getModelOption(this.ngModelCtrl, "timezone");
        this.ngModelCtrl.$setViewValue(this.ngDateFilter(e, "yyyy-MM-dd", t));
      }, o.prototype.onExternalChange = function (e) {
        var t = this.$mdUtil.getModelOption(this.ngModelCtrl, "timezone");
        this.date = e, this.inputElement.value = this.locale.formatDate(e, t), this.mdInputContainer && this.mdInputContainer.setHasValue(!!e), this.resizeInputElement(), this.updateErrorState();
      };
    }();
  }(), function () {
    function e(e, t, n, o) {
      function i(o, i, r) {
        function a() {
          r.mdSvgIcon || r.mdSvgSrc || (r.mdFontIcon && i.addClass("md-font " + r.mdFontIcon), i.addClass(c));
        }

        function d() {
          if (!r.mdSvgIcon && !r.mdSvgSrc) {
            r.mdFontIcon && (i.removeClass(s), i.addClass(r.mdFontIcon), s = r.mdFontIcon);
            var t = e.fontSet(r.mdFontSet);
            c !== t && (i.removeClass(c), i.addClass(t), c = t);
          }
        }

        t(i);
        var s = r.mdFontIcon,
            c = e.fontSet(r.mdFontSet);
        a(), r.$observe("mdFontIcon", d), r.$observe("mdFontSet", d);
        var l = (i[0].getAttribute(r.$attr.mdSvgSrc), r.$normalize(r.$attr.mdSvgIcon || r.$attr.mdSvgSrc || ""));

        if (r.role || (n.expect(i, "role", "img"), r.role = "img"), "img" === r.role && !r.ariaHidden && !n.hasAriaLabel(i)) {
          var m;
          r.alt ? n.expect(i, "aria-label", r.alt) : n.parentHasAriaLabel(i, 2) ? n.expect(i, "aria-hidden", "true") : (m = r.mdFontIcon || r.mdSvgIcon || i.text()) ? n.expect(i, "aria-label", m) : n.expect(i, "aria-hidden", "true");
        }

        l && r.$observe(l, function (t) {
          i.empty(), t && e(t).then(function (e) {
            i.empty(), i.append(e);
          });
        });
      }

      return {
        restrict: "E",
        link: i
      };
    }

    t.module("material.components.icon").directive("mdIcon", ["$mdIcon", "$mdTheming", "$mdAria", "$sce", e]);
  }(), function () {
    function n() {}

    function o(e, t) {
      this.url = e, this.viewBoxSize = t || r.defaultViewBoxSize;
    }

    function i(n, o, i, r, a, d) {
      function s(e) {
        if (e = e || "", t.isString(e) || (e = d.getTrustedUrl(e)), E[e]) return i.when(l(E[e]));
        if (C.test(e) || y.test(e)) return h(e).then(m(e));
        e.indexOf(":") == -1 && (e = "$default:" + e);
        var o = n[e] ? u : p;
        return o(e).then(m(e));
      }

      function c(e) {
        var o = t.isUndefined(e) || !(e && e.length);
        if (o) return n.defaultFontSet;
        var i = e;
        return t.forEach(n.fontSets, function (t) {
          t.alias == e && (i = t.fontSet || i);
        }), i;
      }

      function l(e) {
        var n = e.clone(),
            o = "_cache" + a.nextUid();
        return n.id && (n.id += o), t.forEach(n.querySelectorAll("[id]"), function (e) {
          e.id += o;
        }), n;
      }

      function m(e) {
        return function (t) {
          return E[e] = f(t) ? t : new g(t, n[e]), E[e].clone();
        };
      }

      function u(e) {
        var t = n[e];
        return h(t.url).then(function (e) {
          return new g(e, t);
        });
      }

      function p(e) {
        function t(t) {
          var n = e.slice(e.lastIndexOf(":") + 1),
              i = t.querySelector("#" + n);
          return i ? new g(i, d) : o(e);
        }

        function o(e) {
          var t = "icon " + e + " not found";
          return r.warn(t), i.reject(t || e);
        }

        var a = e.substring(0, e.lastIndexOf(":")) || "$default",
            d = n[a];
        return d ? h(d.url).then(t) : o(e);
      }

      function h(n) {
        function a(n) {
          var o = y.exec(n),
              r = /base64/i.test(n),
              a = r ? e.atob(o[2]) : o[2];
          return i.when(t.element(a)[0]);
        }

        function d(e) {
          return i(function (n, i) {
            var a = function (e) {
              var n = t.isString(e) ? e : e.message || e.data || e.statusText;
              r.warn(n), i(e);
            },
                d = function (o) {
              $[e] || ($[e] = t.element("<div>").append(o)[0].querySelector("svg")), n($[e]);
            };

            o(e, !0).then(d, a);
          });
        }

        return y.test(n) ? a(n) : d(n);
      }

      function f(e) {
        return t.isDefined(e.element) && t.isDefined(e.config);
      }

      function g(e, n) {
        e && "svg" != e.tagName && (e = t.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e.cloneNode(!0))[0]), e.getAttribute("xmlns") || e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.element = e, this.config = n, this.prepare();
      }

      function b() {
        var e = this.config ? this.config.viewBoxSize : n.defaultViewBoxSize;
        t.forEach({
          fit: "",
          height: "100%",
          width: "100%",
          preserveAspectRatio: "xMidYMid meet",
          viewBox: this.element.getAttribute("viewBox") || "0 0 " + e + " " + e,
          focusable: !1
        }, function (e, t) {
          this.element.setAttribute(t, e);
        }, this);
      }

      function v() {
        return this.element.cloneNode(!0);
      }

      var E = {},
          $ = {},
          C = /[-\w@:%\+.~#?&\/\/=]{2,}\.[a-z]{2,4}\b(\/[-\w@:%\+.~#?&\/\/=]*)?/i,
          y = /^data:image\/svg\+xml[\s*;\w\-\=]*?(base64)?,(.*)$/i;
      return g.prototype = {
        clone: v,
        prepare: b
      }, s.fontSet = c, s;
    }

    i.$inject = ["config", "$templateRequest", "$q", "$log", "$mdUtil", "$sce"], t.module("material.components.icon").constant("$$mdSvgRegistry", {
      mdTabsArrow: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyICIvPjwvZz48L3N2Zz4=",
      mdClose: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xOSA2LjQxbC0xLjQxLTEuNDEtNS41OSA1LjU5LTUuNTktNS41OS0xLjQxIDEuNDEgNS41OSA1LjU5LTUuNTkgNS41OSAxLjQxIDEuNDEgNS41OS01LjU5IDUuNTkgNS41OSAxLjQxLTEuNDEtNS41OS01LjU5eiIvPjwvZz48L3N2Zz4=",
      mdCancel: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xMiAyYy01LjUzIDAtMTAgNC40Ny0xMCAxMHM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTAtNC40Ny0xMC0xMC0xMHptNSAxMy41OWwtMS40MSAxLjQxLTMuNTktMy41OS0zLjU5IDMuNTktMS40MS0xLjQxIDMuNTktMy41OS0zLjU5LTMuNTkgMS40MS0xLjQxIDMuNTkgMy41OSAzLjU5LTMuNTkgMS40MSAxLjQxLTMuNTkgMy41OSAzLjU5IDMuNTl6Ii8+PC9nPjwvc3ZnPg==",
      mdMenu: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0zLDZIMjFWOEgzVjZNMywxMUgyMVYxM0gzVjExTTMsMTZIMjFWMThIM1YxNloiIC8+PC9zdmc+",
      mdToggleArrow: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiPjxwYXRoIGQ9Ik0yNCAxNmwtMTIgMTIgMi44MyAyLjgzIDkuMTctOS4xNyA5LjE3IDkuMTcgMi44My0yLjgzeiIvPjxwYXRoIGQ9Ik0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==",
      mdCalendar: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY4aDE0djExek03IDEwaDV2NUg3eiIvPjwvc3ZnPg==",
      mdChecked: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXoiLz48L2c+PC9zdmc+"
    }).provider("$mdIcon", n);
    var r = {
      defaultViewBoxSize: 24,
      defaultFontSet: "material-icons",
      fontSets: []
    };
    n.prototype = {
      icon: function (e, t, n) {
        return e.indexOf(":") == -1 && (e = "$default:" + e), r[e] = new o(t, n), this;
      },
      iconSet: function (e, t, n) {
        return r[e] = new o(t, n), this;
      },
      defaultIconSet: function (e, t) {
        var n = "$default";
        return r[n] || (r[n] = new o(e, t)), r[n].viewBoxSize = t || r.defaultViewBoxSize, this;
      },
      defaultViewBoxSize: function (e) {
        return r.defaultViewBoxSize = e, this;
      },
      fontSet: function (e, t) {
        return r.fontSets.push({
          alias: e,
          fontSet: t || e
        }), this;
      },
      defaultFontSet: function (e) {
        return r.defaultFontSet = e ? e : "", this;
      },
      defaultIconSize: function (e) {
        return r.defaultIconSize = e, this;
      },
      $get: ["$templateRequest", "$q", "$log", "$mdUtil", "$sce", function (e, t, n, o, a) {
        return i(r, e, t, n, o, a);
      }]
    };
  }(), function () {
    function e(e, o, i, r, a, d, s, c, l) {
      var m,
          u,
          p = a.prefixer(),
          h = this;
      this.nestLevel = parseInt(o.mdNestLevel, 10) || 0, this.init = function (n, o) {
        o = o || {}, m = n, u = i[0].querySelector(p.buildSelector(["ng-click", "ng-mouseenter"])), u.setAttribute("aria-expanded", "false"), this.isInMenuBar = o.isInMenuBar, this.nestedMenus = a.nodesToArray(m[0].querySelectorAll(".md-nested-menu")), m.on("$mdInterimElementRemove", function () {
          h.isOpen = !1, a.nextTick(function () {
            h.onIsOpenChanged(h.isOpen);
          });
        }), a.nextTick(function () {
          h.onIsOpenChanged(h.isOpen);
        });
        var d = "menu_container_" + a.nextUid();
        m.attr("id", d), t.element(u).attr({
          "aria-owns": d,
          "aria-haspopup": "true"
        }), r.$on("$destroy", t.bind(this, function () {
          this.disableHoverListener(), e.destroy();
        })), m.on("$destroy", function () {
          e.destroy();
        });
      };
      var f,
          g,
          b = [];
      this.enableHoverListener = function () {
        b.push(s.$on("$mdMenuOpen", function (e, t) {
          m[0].contains(t[0]) && (h.currentlyOpenMenu = t.controller("mdMenu"), h.isAlreadyOpening = !1, h.currentlyOpenMenu.registerContainerProxy(h.triggerContainerProxy.bind(h)));
        })), b.push(s.$on("$mdMenuClose", function (e, t) {
          m[0].contains(t[0]) && (h.currentlyOpenMenu = n);
        })), g = t.element(a.nodesToArray(m[0].children[0].children)), g.on("mouseenter", h.handleMenuItemHover), g.on("mouseleave", h.handleMenuItemMouseLeave);
      }, this.disableHoverListener = function () {
        for (; b.length;) b.shift()();

        g && g.off("mouseenter", h.handleMenuItemHover), g && g.off("mouseleave", h.handleMenuItemMouseLeave);
      }, this.handleMenuItemHover = function (e) {
        if (!h.isAlreadyOpening) {
          var n = e.target.querySelector("md-menu") || a.getClosest(e.target, "MD-MENU");
          f = d(function () {
            if (n && (n = t.element(n).controller("mdMenu")), h.currentlyOpenMenu && h.currentlyOpenMenu != n) {
              var e = h.nestLevel + 1;
              h.currentlyOpenMenu.close(!0, {
                closeTo: e
              }), h.isAlreadyOpening = !!n, n && n.open();
            } else n && !n.isOpen && n.open && (h.isAlreadyOpening = !!n, n && n.open());
          }, n ? 100 : 250);
          var o = e.currentTarget.querySelector(".md-button:not([disabled])");
          o && o.focus();
        }
      }, this.handleMenuItemMouseLeave = function () {
        f && (d.cancel(f), f = n);
      }, this.open = function (t) {
        t && t.stopPropagation(), t && t.preventDefault(), h.isOpen || (h.enableHoverListener(), h.isOpen = !0, a.nextTick(function () {
          h.onIsOpenChanged(h.isOpen);
        }), u = u || (t ? t.target : i[0]), u.setAttribute("aria-expanded", "true"), r.$emit("$mdMenuOpen", i), e.show({
          scope: r,
          mdMenuCtrl: h,
          nestLevel: h.nestLevel,
          element: m,
          target: u,
          preserveElement: !0,
          parent: "body"
        })["finally"](function () {
          u.setAttribute("aria-expanded", "false"), h.disableHoverListener();
        }));
      }, this.onIsOpenChanged = function (e) {
        e ? (m.attr("aria-hidden", "false"), i[0].classList.add("md-open"), t.forEach(h.nestedMenus, function (e) {
          e.classList.remove("md-open");
        })) : (m.attr("aria-hidden", "true"), i[0].classList.remove("md-open")), r.$mdMenuIsOpen = h.isOpen;
      }, this.focusMenuContainer = function () {
        var e = m[0].querySelector(p.buildSelector(["md-menu-focus-target", "md-autofocus"]));
        e || (e = m[0].querySelector(".md-button:not([disabled])")), e.focus();
      }, this.registerContainerProxy = function (e) {
        this.containerProxy = e;
      }, this.triggerContainerProxy = function (e) {
        this.containerProxy && this.containerProxy(e);
      }, this.destroy = function () {
        return h.isOpen ? e.destroy() : c.when(!1);
      }, this.close = function (n, o) {
        if (h.isOpen) {
          h.isOpen = !1, a.nextTick(function () {
            h.onIsOpenChanged(h.isOpen);
          });
          var d = t.extend({}, o, {
            skipFocus: n
          });

          if (r.$emit("$mdMenuClose", i, d), e.hide(null, o), !n) {
            var s = h.restoreFocusTo || i.find("button")[0];
            s instanceof t.element && (s = s[0]), s && s.focus();
          }
        }
      }, this.positionMode = function () {
        var e = (o.mdPositionMode || "target").split(" ");
        return 1 == e.length && e.push(e[0]), {
          left: e[0],
          top: e[1]
        };
      }, this.offsets = function () {
        var e = (o.mdOffset || "0 0").split(" ").map(parseFloat);
        if (2 == e.length) return {
          left: e[0],
          top: e[1]
        };
        if (1 == e.length) return {
          top: e[0],
          left: e[0]
        };
        throw Error("Invalid offsets specified. Please follow format <x, y> or <n>");
      }, r.$mdMenu = {
        open: this.open,
        close: this.close
      }, r.$mdOpenMenu = t.bind(this, function () {
        return l.warn("mdMenu: The $mdOpenMenu method is deprecated. Please use `$mdMenu.open`."), this.open.apply(this, arguments);
      });
    }

    e.$inject = ["$mdMenu", "$attrs", "$element", "$scope", "$mdUtil", "$timeout", "$rootScope", "$q", "$log"], t.module("material.components.menu").controller("mdMenuCtrl", e);
  }(), function () {
    function e(e) {
      function n(n) {
        n.addClass("md-menu");
        var r = n.children()[0],
            a = n.children()[1],
            d = e.prefixer();
        d.hasAttribute(r, "ng-click") || (r = r.querySelector(d.buildSelector(["ng-click", "ng-mouseenter"])) || r);
        var s = "MD-BUTTON" === r.nodeName || "BUTTON" === r.nodeName;
        if (r && s && !r.hasAttribute("type") && r.setAttribute("type", "button"), !r) throw Error(i + "Expected the menu to have a trigger element.");
        if (!a || "MD-MENU-CONTENT" !== a.nodeName) throw Error(i + "Expected the menu to contain a `md-menu-content` element.");
        r && r.setAttribute("aria-haspopup", "true");
        var c = n[0].querySelectorAll("md-menu"),
            l = parseInt(n[0].getAttribute("md-nest-level"), 10) || 0;
        return c && t.forEach(e.nodesToArray(c), function (e) {
          e.hasAttribute("md-position-mode") || e.setAttribute("md-position-mode", "cascade"), e.classList.add("_md-nested-menu"), e.setAttribute("md-nest-level", l + 1);
        }), o;
      }

      function o(e, n, o, i) {
        var r = i[0],
            a = !!i[1],
            d = t.element('<div class="_md md-open-menu-container md-whiteframe-z2"></div>'),
            s = n.children()[1];
        n.addClass("_md"), s.hasAttribute("role") || s.setAttribute("role", "menu"), d.append(s), n.on("$destroy", function () {
          d.remove();
        }), n.append(d), d[0].style.display = "none", r.init(d, {
          isInMenuBar: a
        });
      }

      var i = "Invalid HTML for md-menu: ";
      return {
        restrict: "E",
        require: ["mdMenu", "?^mdMenuBar"],
        controller: "mdMenuCtrl",
        scope: !0,
        compile: n
      };
    }

    e.$inject = ["$mdUtil"], t.module("material.components.menu").directive("mdMenu", e);
  }(), function () {
    function e(e) {
      function o(e, o, a, d, s, c, l, m, u, p) {
        function h(n, o, i) {
          return i.nestLevel ? t.noop : (i.disableParentScroll && !e.getClosest(i.target, "MD-DIALOG") ? i.restoreScroll = e.disableScrollAround(i.element, i.parent) : i.disableParentScroll = !1, i.hasBackdrop && (i.backdrop = e.createBackdrop(n, "md-menu-backdrop md-click-catcher"), u.enter(i.backdrop, d[0].body)), function () {
            i.backdrop && i.backdrop.remove(), i.disableParentScroll && i.restoreScroll();
          });
        }

        function f(e, t, n) {
          function o() {
            return m(t, {
              addClass: "md-leave"
            }).start();
          }

          function i() {
            t.removeClass("md-active"), E(t, n), n.alreadyOpen = !1;
          }

          return n.cleanupInteraction(), n.cleanupBackdrop(), n.cleanupResizing(), n.hideBackdrop(), t.removeClass("md-clickable"), n.$destroy === !0 ? i() : o().then(i);
        }

        function g(n, i, r) {
          function d() {
            return r.parent.append(i), i[0].style.display = "", c(function (e) {
              var t = $(i, r);
              i.removeClass("md-leave"), m(i, {
                addClass: "md-active",
                from: y.toCss(t),
                to: y.toCss({
                  transform: ""
                })
              }).start().then(e);
            });
          }

          function u() {
            if (!r.target) throw Error("$mdMenu.show() expected a target to animate from in options.target");
            t.extend(r, {
              alreadyOpen: !1,
              isRemoved: !1,
              target: t.element(r.target),
              parent: t.element(r.parent),
              menuContentEl: t.element(i[0].querySelector("md-menu-content"))
            });
          }

          function f() {
            var e = function (e, t) {
              return l.throttle(function () {
                if (!r.isRemoved) {
                  var n = $(e, t);
                  e.css(y.toCss(n));
                }
              });
            }(i, r);

            return s.addEventListener("resize", e), s.addEventListener("orientationchange", e), function () {
              s.removeEventListener("resize", e), s.removeEventListener("orientationchange", e);
            };
          }

          function g() {
            return r.backdrop ? (r.backdrop.on("click", v), function () {
              r.backdrop.off("click", v);
            }) : t.noop;
          }

          function v(e) {
            e.preventDefault(), e.stopPropagation(), n.$apply(function () {
              r.mdMenuCtrl.close(!0, {
                closeAll: !0
              });
            });
          }

          function E() {
            function o(t) {
              var n;

              switch (t.keyCode) {
                case a.KEY_CODE.ESCAPE:
                  r.mdMenuCtrl.close(!1, {
                    closeAll: !0
                  }), n = !0;
                  break;

                case a.KEY_CODE.UP_ARROW:
                  b(t, r.menuContentEl, r, -1) || r.nestLevel || r.mdMenuCtrl.triggerContainerProxy(t), n = !0;
                  break;

                case a.KEY_CODE.DOWN_ARROW:
                  b(t, r.menuContentEl, r, 1) || r.nestLevel || r.mdMenuCtrl.triggerContainerProxy(t), n = !0;
                  break;

                case a.KEY_CODE.LEFT_ARROW:
                  r.nestLevel ? r.mdMenuCtrl.close() : r.mdMenuCtrl.triggerContainerProxy(t), n = !0;
                  break;

                case a.KEY_CODE.RIGHT_ARROW:
                  var o = e.getClosest(t.target, "MD-MENU");
                  o && o != r.parent[0] ? t.target.click() : r.mdMenuCtrl.triggerContainerProxy(t), n = !0;
              }

              n && (t.preventDefault(), t.stopImmediatePropagation());
            }

            function i(t) {
              function o() {
                n.$apply(function () {
                  r.mdMenuCtrl.close(!0, {
                    closeAll: !0
                  });
                });
              }

              function i(e, t) {
                if (!e) return !1;

                for (var n, o = 0; n = t[o]; ++o) if (C.hasAttribute(e, n)) return !0;

                return !1;
              }

              var a = t.target;

              do {
                if (a == r.menuContentEl[0]) return;

                if ((i(a, ["ng-click", "ng-href", "ui-sref"]) || "BUTTON" == a.nodeName || "MD-BUTTON" == a.nodeName) && !i(a, ["md-prevent-menu-close"])) {
                  var d = e.getClosest(a, "MD-MENU");
                  a.hasAttribute("disabled") || d && d != r.parent[0] || o();
                  break;
                }
              } while (a = a.parentNode);
            }

            if (!r.menuContentEl[0]) return t.noop;
            r.menuContentEl.on("keydown", o), r.menuContentEl[0].addEventListener("click", i, !0);
            var d = r.menuContentEl[0].querySelector(C.buildSelector(["md-menu-focus-target", "md-autofocus"]));
            if (!d) for (var s = r.menuContentEl[0].children.length, c = 0; c < s; c++) {
              var l = r.menuContentEl[0].children[c];
              if (d = l.querySelector(".md-button:not([disabled])")) break;

              if (l.firstElementChild && !l.firstElementChild.disabled) {
                d = l.firstElementChild;
                break;
              }
            }
            return d && d.focus(), function () {
              r.menuContentEl.off("keydown", o), r.menuContentEl[0].removeEventListener("click", i, !0);
            };
          }

          return u(r), r.menuContentEl[0] ? o.inherit(r.menuContentEl, r.target) : p.warn("$mdMenu: Menu elements should always contain a `md-menu-content` element,otherwise interactivity features will not work properly.", i), r.cleanupResizing = f(), r.hideBackdrop = h(n, i, r), d().then(function (e) {
            return r.alreadyOpen = !0, r.cleanupInteraction = E(), r.cleanupBackdrop = g(), i.addClass("md-clickable"), e;
          });
        }

        function b(t, n, o, i) {
          for (var r, a = e.getClosest(t.target, "MD-MENU-ITEM"), d = e.nodesToArray(n[0].children), s = d.indexOf(a), c = s + i; c >= 0 && c < d.length; c += i) {
            var l = d[c].querySelector(".md-button");
            if (r = v(l)) break;
          }

          return r;
        }

        function v(e) {
          if (e && e.getAttribute("tabindex") != -1) return e.focus(), d[0].activeElement == e;
        }

        function E(e, t) {
          t.preserveElement ? i(e).style.display = "none" : i(e).parentNode === i(t.parent) && i(t.parent).removeChild(i(e));
        }

        function $(t, o) {
          function i(e) {
            e.top = Math.max(Math.min(e.top, v.bottom - l.offsetHeight), v.top), e.left = Math.max(Math.min(e.left, v.right - l.offsetWidth), v.left);
          }

          function a() {
            for (var e = 0; e < m.children.length; ++e) if ("none" != s.getComputedStyle(m.children[e]).display) return m.children[e];
          }

          var c,
              l = t[0],
              m = t[0].firstElementChild,
              u = m.getBoundingClientRect(),
              p = d[0].body,
              h = p.getBoundingClientRect(),
              f = s.getComputedStyle(m),
              g = o.target[0].querySelector(C.buildSelector("md-menu-origin")) || o.target[0],
              b = g.getBoundingClientRect(),
              v = {
            left: h.left + r,
            top: Math.max(h.top, 0) + r,
            bottom: Math.max(h.bottom, Math.max(h.top, 0) + h.height) - r,
            right: h.right - r
          },
              E = {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          },
              $ = {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          },
              y = o.mdMenuCtrl.positionMode();
          "target" != y.top && "target" != y.left && "target-right" != y.left || (c = a(), c && (c = c.firstElementChild || c, c = c.querySelector(C.buildSelector("md-menu-align-target")) || c, E = c.getBoundingClientRect(), $ = {
            top: parseFloat(l.style.top || 0),
            left: parseFloat(l.style.left || 0)
          }));
          var M = {},
              T = "top ";

          switch (y.top) {
            case "target":
              M.top = $.top + b.top - E.top;
              break;

            case "cascade":
              M.top = b.top - parseFloat(f.paddingTop) - g.style.top;
              break;

            case "bottom":
              M.top = b.top + b.height;
              break;

            default:
              throw new Error('Invalid target mode "' + y.top + '" specified for md-menu on Y axis.');
          }

          var A = "rtl" == e.bidi();

          switch (y.left) {
            case "target":
              M.left = $.left + b.left - E.left, T += A ? "right" : "left";
              break;

            case "target-left":
              M.left = b.left, T += "left";
              break;

            case "target-right":
              M.left = b.right - u.width + (u.right - E.right), T += "right";
              break;

            case "cascade":
              var w = A ? b.left - u.width < v.left : b.right + u.width < v.right;
              M.left = w ? b.right - g.style.left : b.left - g.style.left - u.width, T += w ? "left" : "right";
              break;

            case "right":
              A ? (M.left = b.right - b.width, T += "left") : (M.left = b.right - u.width, T += "right");
              break;

            case "left":
              A ? (M.left = b.right - u.width, T += "right") : (M.left = b.left, T += "left");
              break;

            default:
              throw new Error('Invalid target mode "' + y.left + '" specified for md-menu on X axis.');
          }

          var k = o.mdMenuCtrl.offsets();
          M.top += k.top, M.left += k.left, i(M);

          var _ = Math.round(100 * Math.min(b.width / l.offsetWidth, 1)) / 100,
              x = Math.round(100 * Math.min(b.height / l.offsetHeight, 1)) / 100;

          return {
            top: Math.round(M.top),
            left: Math.round(M.left),
            transform: o.alreadyOpen ? n : e.supplant("scale({0},{1})", [_, x]),
            transformOrigin: T
          };
        }

        var C = e.prefixer(),
            y = e.dom.animator;
        return {
          parent: "body",
          onShow: g,
          onRemove: f,
          hasBackdrop: !0,
          disableParentScroll: !0,
          skipCompile: !0,
          preserveScope: !0,
          multiple: !0,
          themable: !0
        };
      }

      function i(e) {
        return e instanceof t.element && (e = e[0]), e;
      }

      o.$inject = ["$mdUtil", "$mdTheming", "$mdConstant", "$document", "$window", "$q", "$$rAF", "$animateCss", "$animate", "$log"];
      var r = 8;
      return e("$mdMenu").setDefaults({
        methods: ["target"],
        options: o
      });
    }

    e.$inject = ["$$interimElementProvider"], t.module("material.components.menu").provider("$mdMenu", e);
  }(), function () {
    function e(e, n, i, r, a, d, s, c) {
      this.$element = i, this.$attrs = r, this.$mdConstant = a, this.$mdUtil = s, this.$document = d, this.$scope = e, this.$rootScope = n, this.$timeout = c;
      var l = this;
      t.forEach(o, function (e) {
        l[e] = t.bind(l, l[e]);
      });
    }

    e.$inject = ["$scope", "$rootScope", "$element", "$attrs", "$mdConstant", "$document", "$mdUtil", "$timeout"], t.module("material.components.menuBar").controller("MenuBarController", e);
    var o = ["handleKeyDown", "handleMenuHover", "scheduleOpenHoveredMenu", "cancelScheduledOpen"];
    e.prototype.init = function () {
      var e = this.$element,
          t = this.$mdUtil,
          o = this.$scope,
          i = this,
          r = [];
      e.on("keydown", this.handleKeyDown), this.parentToolbar = t.getClosest(e, "MD-TOOLBAR"), r.push(this.$rootScope.$on("$mdMenuOpen", function (t, n) {
        i.getMenus().indexOf(n[0]) != -1 && (e[0].classList.add("md-open"), n[0].classList.add("md-open"), i.currentlyOpenMenu = n.controller("mdMenu"), i.currentlyOpenMenu.registerContainerProxy(i.handleKeyDown), i.enableOpenOnHover());
      })), r.push(this.$rootScope.$on("$mdMenuClose", function (o, r, a) {
        var d = i.getMenus();

        if (d.indexOf(r[0]) != -1 && (e[0].classList.remove("md-open"), r[0].classList.remove("md-open")), e[0].contains(r[0])) {
          for (var s = r[0]; s && d.indexOf(s) == -1;) s = t.getClosest(s, "MD-MENU", !0);

          s && (a.skipFocus || s.querySelector("button:not([disabled])").focus(), i.currentlyOpenMenu = n, i.disableOpenOnHover(), i.setKeyboardMode(!0));
        }
      })), o.$on("$destroy", function () {
        for (i.disableOpenOnHover(); r.length;) r.shift()();
      }), this.setKeyboardMode(!0);
    }, e.prototype.setKeyboardMode = function (e) {
      e ? this.$element[0].classList.add("md-keyboard-mode") : this.$element[0].classList.remove("md-keyboard-mode");
    }, e.prototype.enableOpenOnHover = function () {
      if (!this.openOnHoverEnabled) {
        var e = this;
        e.openOnHoverEnabled = !0, e.parentToolbar && (e.parentToolbar.classList.add("md-has-open-menu"), e.$mdUtil.nextTick(function () {
          t.element(e.parentToolbar).on("click", e.handleParentClick);
        }, !1)), t.element(e.getMenus()).on("mouseenter", e.handleMenuHover);
      }
    }, e.prototype.handleMenuHover = function (e) {
      this.setKeyboardMode(!1), this.openOnHoverEnabled && this.scheduleOpenHoveredMenu(e);
    }, e.prototype.disableOpenOnHover = function () {
      this.openOnHoverEnabled && (this.openOnHoverEnabled = !1, this.parentToolbar && (this.parentToolbar.classList.remove("md-has-open-menu"), t.element(this.parentToolbar).off("click", this.handleParentClick)), t.element(this.getMenus()).off("mouseenter", this.handleMenuHover));
    }, e.prototype.scheduleOpenHoveredMenu = function (e) {
      var n = t.element(e.currentTarget),
          o = n.controller("mdMenu");
      this.setKeyboardMode(!1), this.scheduleOpenMenu(o);
    }, e.prototype.scheduleOpenMenu = function (e) {
      var t = this,
          o = this.$timeout;
      e != t.currentlyOpenMenu && (o.cancel(t.pendingMenuOpen), t.pendingMenuOpen = o(function () {
        t.pendingMenuOpen = n, t.currentlyOpenMenu && t.currentlyOpenMenu.close(!0, {
          closeAll: !0
        }), e.open();
      }, 200, !1));
    }, e.prototype.handleKeyDown = function (e) {
      var n = this.$mdConstant.KEY_CODE,
          o = this.currentlyOpenMenu,
          i = o && o.isOpen;
      this.setKeyboardMode(!0);
      var r, a, d;

      switch (e.keyCode) {
        case n.DOWN_ARROW:
          o ? o.focusMenuContainer() : this.openFocusedMenu(), r = !0;
          break;

        case n.UP_ARROW:
          o && o.close(), r = !0;
          break;

        case n.LEFT_ARROW:
          a = this.focusMenu(-1), i && (d = t.element(a).controller("mdMenu"), this.scheduleOpenMenu(d)), r = !0;
          break;

        case n.RIGHT_ARROW:
          a = this.focusMenu(1), i && (d = t.element(a).controller("mdMenu"), this.scheduleOpenMenu(d)), r = !0;
      }

      r && (e && e.preventDefault && e.preventDefault(), e && e.stopImmediatePropagation && e.stopImmediatePropagation());
    }, e.prototype.focusMenu = function (e) {
      var t = this.getMenus(),
          n = this.getFocusedMenuIndex();
      n == -1 && (n = this.getOpenMenuIndex());
      var o = !1;
      if (n == -1 ? (n = 0, o = !0) : (e < 0 && n > 0 || e > 0 && n < t.length - e) && (n += e, o = !0), o) return t[n].querySelector("button").focus(), t[n];
    }, e.prototype.openFocusedMenu = function () {
      var e = this.getFocusedMenu();
      e && t.element(e).controller("mdMenu").open();
    }, e.prototype.getMenus = function () {
      var e = this.$element;
      return this.$mdUtil.nodesToArray(e[0].children).filter(function (e) {
        return "MD-MENU" == e.nodeName;
      });
    }, e.prototype.getFocusedMenu = function () {
      return this.getMenus()[this.getFocusedMenuIndex()];
    }, e.prototype.getFocusedMenuIndex = function () {
      var e = this.$mdUtil,
          t = e.getClosest(this.$document[0].activeElement, "MD-MENU");
      if (!t) return -1;
      var n = this.getMenus().indexOf(t);
      return n;
    }, e.prototype.getOpenMenuIndex = function () {
      for (var e = this.getMenus(), t = 0; t < e.length; ++t) if (e[t].classList.contains("md-open")) return t;

      return -1;
    }, e.prototype.handleParentClick = function (e) {
      var n = this.querySelector("md-menu.md-open");
      n && !n.contains(e.target) && t.element(n).controller("mdMenu").close(!0, {
        closeAll: !0
      });
    };
  }(), function () {
    function e(e, n) {
      return {
        restrict: "E",
        require: "mdMenuBar",
        controller: "MenuBarController",
        compile: function (o, i) {
          return i.ariaRole || o[0].setAttribute("role", "menubar"), t.forEach(o[0].children, function (n) {
            if ("MD-MENU" == n.nodeName) {
              n.hasAttribute("md-position-mode") || (n.setAttribute("md-position-mode", "left bottom"), n.querySelector("button, a, md-button").setAttribute("role", "menuitem"));
              var o = e.nodesToArray(n.querySelectorAll("md-menu-content"));
              t.forEach(o, function (e) {
                e.classList.add("md-menu-bar-menu"), e.classList.add("md-dense"), e.hasAttribute("width") || e.setAttribute("width", 5);
              });
            }
          }), o.find("md-menu-item").addClass("md-in-menu-bar"), function (e, t, o, i) {
            t.addClass("_md"), n(e, t), i.init();
          };
        }
      };
    }

    e.$inject = ["$mdUtil", "$mdTheming"], t.module("material.components.menuBar").directive("mdMenuBar", e);
  }(), function () {
    function e() {
      return {
        restrict: "E",
        compile: function (e, t) {
          t.role || e[0].setAttribute("role", "separator");
        }
      };
    }

    t.module("material.components.menuBar").directive("mdMenuDivider", e);
  }(), function () {
    function e(e, t, n) {
      this.$element = t, this.$attrs = n, this.$scope = e;
    }

    e.$inject = ["$scope", "$element", "$attrs"], t.module("material.components.menuBar").controller("MenuItemController", e), e.prototype.init = function (e) {
      var t = this.$element,
          n = this.$attrs;
      this.ngModel = e, "checkbox" != n.type && "radio" != n.type || (this.mode = n.type, this.iconEl = t[0].children[0], this.buttonEl = t[0].children[1], e && this.initClickListeners());
    }, e.prototype.clearNgAria = function () {
      var e = this.$element[0],
          n = ["role", "tabindex", "aria-invalid", "aria-checked"];
      t.forEach(n, function (t) {
        e.removeAttribute(t);
      });
    }, e.prototype.initClickListeners = function () {
      function e() {
        if ("radio" == d) {
          var e = a.ngValue ? r.$eval(a.ngValue) : a.value;
          return i.$modelValue == e;
        }

        return i.$modelValue;
      }

      function n(e) {
        e ? c.off("click", l) : c.on("click", l);
      }

      var o = this,
          i = this.ngModel,
          r = this.$scope,
          a = this.$attrs,
          d = (this.$element, this.mode);
      this.handleClick = t.bind(this, this.handleClick);
      var s = this.iconEl,
          c = t.element(this.buttonEl),
          l = this.handleClick;
      a.$observe("disabled", n), n(a.disabled), i.$render = function () {
        o.clearNgAria(), e() ? (s.style.display = "", c.attr("aria-checked", "true")) : (s.style.display = "none", c.attr("aria-checked", "false"));
      }, r.$$postDigest(i.$render);
    }, e.prototype.handleClick = function (e) {
      var t,
          n = this.mode,
          o = this.ngModel,
          i = this.$attrs;
      "checkbox" == n ? t = !o.$modelValue : "radio" == n && (t = i.ngValue ? this.$scope.$eval(i.ngValue) : i.value), o.$setViewValue(t), o.$render();
    };
  }(), function () {
    function e(e, n, o) {
      return {
        controller: "MenuItemController",
        require: ["mdMenuItem", "?ngModel"],
        priority: n.BEFORE_NG_ARIA,
        compile: function (n, i) {
          function r(e, o, i) {
            i = i || n, i instanceof t.element && (i = i[0]), i.hasAttribute(e) || i.setAttribute(e, o);
          }

          function a(o) {
            var i = e.prefixer(o);
            t.forEach(i, function (e) {
              if (n[0].hasAttribute(e)) {
                var t = n[0].getAttribute(e);
                l[0].setAttribute(e, t), n[0].removeAttribute(e);
              }
            });
          }

          var d = i.type,
              s = "md-in-menu-bar";
          if ("checkbox" != d && "radio" != d || !n.hasClass(s)) r("role", "menuitem", n[0].querySelector("md-button, button, a"));else {
            var c = n[0].textContent,
                l = t.element('<md-button type="button"></md-button>'),
                m = '<md-icon md-svg-src="' + o.mdChecked + '"></md-icon>';
            l.html(c), l.attr("tabindex", "0"), n.html(""), n.append(t.element(m)), n.append(l), n.addClass("md-indent").removeClass(s), r("role", "checkbox" == d ? "menuitemcheckbox" : "menuitemradio", l), a("ng-disabled");
          }
          return function (e, t, n, o) {
            var i = o[0],
                r = o[1];
            i.init(r);
          };
        }
      };
    }

    e.$inject = ["$mdUtil", "$mdConstant", "$$mdSvgRegistry"], t.module("material.components.menuBar").directive("mdMenuItem", e);
  }(), function () {
    function e(e, n, o, i, r, a) {
      function d(a, d, E) {
        function $(t, o, r, d, s, l) {
          function h(e) {
            _.attr("stroke-dashoffset", c(v, E, e, M)), _.attr("transform", "rotate(" + y + " " + v / 2 + " " + v / 2 + ")");
          }

          var f = ++D,
              g = i.now(),
              b = o - t,
              v = m(a.mdDiameter),
              E = u(v),
              $ = r || n.easeFn,
              C = d || n.duration,
              y = -90 * (s || 0),
              M = l || 100;
          o === t ? h(o) : T = p(function A() {
            var n = e.Math.max(0, e.Math.min(i.now() - g, C));
            h($(n, t, b, C)), f === D && n < C && (T = p(A));
          });
        }

        function C() {
          $(x, N, n.easeFnIndeterminate, n.durationIndeterminate, S, 75), S = ++S % 4;
        }

        function y() {
          A || (A = r(C, n.durationIndeterminate, 0, !1), C(), d.addClass(v).removeAttr("aria-valuenow"));
        }

        function M() {
          A && (r.cancel(A), A = null, d.removeClass(v));
        }

        var T,
            A,
            w = d[0],
            k = t.element(w.querySelector("svg")),
            _ = t.element(w.querySelector("path")),
            x = n.startIndeterminate,
            N = n.endIndeterminate,
            S = 0,
            D = 0;

        o(d), d.toggleClass(b, E.hasOwnProperty("disabled")), a.mdMode === g && y(), a.$on("$destroy", function () {
          M(), T && h(T);
        }), a.$watchGroup(["value", "mdMode", function () {
          var e = w.disabled;
          return e === !0 || e === !1 ? e : t.isDefined(d.attr("disabled"));
        }], function (e, t) {
          var n = e[1],
              o = e[2],
              i = t[2];
          if (o !== i && d.toggleClass(b, !!o), o) M();else if (n !== f && n !== g && (n = g, E.$set("mdMode", n)), n === g) y();else {
            var r = l(e[0]);
            M(), d.attr("aria-valuenow", r), $(l(t[0]), r);
          }
        }), a.$watch("mdDiameter", function (t) {
          var n = m(t),
              o = u(n),
              i = l(a.value),
              r = n / 2 + "px",
              p = {
            width: n + "px",
            height: n + "px"
          };
          k[0].setAttribute("viewBox", "0 0 " + n + " " + n), k.css(p).css("transform-origin", r + " " + r + " " + r), d.css(p), _.attr("stroke-width", o), _.attr("stroke-linecap", "square"), a.mdMode == g ? (_.attr("d", s(n, o, !0)), _.attr("stroke-dasharray", (n - o) * e.Math.PI * .75), _.attr("stroke-dashoffset", c(n, o, 1, 75))) : (_.attr("d", s(n, o, !1)), _.attr("stroke-dasharray", (n - o) * e.Math.PI), _.attr("stroke-dashoffset", c(n, o, 0, 100)), $(i, i));
        });
      }

      function s(e, t, n) {
        var o = e / 2,
            i = t / 2,
            r = o + "," + i,
            a = i + "," + o,
            d = o - i;
        return "M" + r + "A" + d + "," + d + " 0 1 1 " + a + (n ? "" : "A" + d + "," + d + " 0 0 1 " + r);
      }

      function c(t, n, o, i) {
        return (t - n) * e.Math.PI * (3 * (i || 100) / 100 - o / 100);
      }

      function l(t) {
        return e.Math.max(0, e.Math.min(t || 0, 100));
      }

      function m(e) {
        var t = n.progressSize;

        if (e) {
          var o = parseFloat(e);
          return e.lastIndexOf("%") === e.length - 1 && (o = o / 100 * t), o;
        }

        return t;
      }

      function u(e) {
        return n.strokeWidth / 100 * e;
      }

      var p = e.requestAnimationFrame || e.webkitRequestAnimationFrame || t.noop,
          h = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame || t.noop,
          f = "determinate",
          g = "indeterminate",
          b = "_md-progress-circular-disabled",
          v = "md-mode-indeterminate";
      return {
        restrict: "E",
        scope: {
          value: "@",
          mdDiameter: "@",
          mdMode: "@"
        },
        template: '<svg xmlns="http://www.w3.org/2000/svg"><path fill="none"/></svg>',
        compile: function (e, n) {
          if (e.attr({
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            role: "progressbar"
          }), t.isUndefined(n.mdMode)) {
            var o = n.hasOwnProperty("value") ? f : g;
            n.$set("mdMode", o);
          } else n.$set("mdMode", n.mdMode.trim());

          return d;
        }
      };
    }

    e.$inject = ["$window", "$mdProgressCircular", "$mdTheming", "$mdUtil", "$interval", "$log"], t.module("material.components.progressCircular").directive("mdProgressCircular", e);
  }(), function () {
    function e() {
      function e(e, t, n, o) {
        return n * e / o + t;
      }

      function n(e, t, n, o) {
        var i = (e /= o) * e,
            r = i * e;
        return t + n * (6 * r * i + -15 * i * i + 10 * r);
      }

      var o = {
        progressSize: 50,
        strokeWidth: 10,
        duration: 100,
        easeFn: e,
        durationIndeterminate: 1333,
        startIndeterminate: 1,
        endIndeterminate: 149,
        easeFnIndeterminate: n,
        easingPresets: {
          linearEase: e,
          materialEase: n
        }
      };
      return {
        configure: function (e) {
          return o = t.extend(o, e || {});
        },
        $get: function () {
          return o;
        }
      };
    }

    t.module("material.components.progressCircular").provider("$mdProgressCircular", e);
  }(), function () {
    function e() {
      function e(e, o, i, r) {
        if (r) {
          var a = r.getTabElementIndex(o),
              d = n(o, "md-tab-body").remove(),
              s = n(o, "md-tab-label").remove(),
              c = r.insertTab({
            scope: e,
            parent: e.$parent,
            index: a,
            element: o,
            template: d.html(),
            label: s.html()
          }, a);
          e.select = e.select || t.noop, e.deselect = e.deselect || t.noop, e.$watch("active", function (e) {
            e && r.select(c.getIndex(), !0);
          }), e.$watch("disabled", function () {
            r.refreshIndex();
          }), e.$watch(function () {
            return r.getTabElementIndex(o);
          }, function (e) {
            c.index = e, r.updateTabOrder();
          }), e.$on("$destroy", function () {
            r.removeTab(c);
          });
        }
      }

      function n(e, n) {
        for (var o = e[0].children, i = 0, r = o.length; i < r; i++) {
          var a = o[i];
          if (a.tagName === n.toUpperCase()) return t.element(a);
        }

        return t.element();
      }

      return {
        require: "^?mdTabs",
        terminal: !0,
        compile: function (o, i) {
          var r = n(o, "md-tab-label"),
              a = n(o, "md-tab-body");

          if (0 === r.length && (r = t.element("<md-tab-label></md-tab-label>"), i.label ? r.text(i.label) : r.append(o.contents()), 0 === a.length)) {
            var d = o.contents().detach();
            a = t.element("<md-tab-body></md-tab-body>"), a.append(d);
          }

          return o.append(r), a.html() && o.append(a), e;
        },
        scope: {
          active: "=?mdActive",
          disabled: "=?ngDisabled",
          select: "&?mdOnSelect",
          deselect: "&?mdOnDeselect"
        }
      };
    }

    t.module("material.components.tabs").directive("mdTab", e);
  }(), function () {
    function e() {
      return {
        require: "^?mdTabs",
        link: function (e, t, n, o) {
          o && o.attachRipple(e, t);
        }
      };
    }

    t.module("material.components.tabs").directive("mdTabItem", e);
  }(), function () {
    function e() {
      return {
        terminal: !0
      };
    }

    t.module("material.components.tabs").directive("mdTabLabel", e);
  }(), function () {
    function e(e) {
      return {
        restrict: "A",
        compile: function (t, n) {
          var o = e(n.mdTabScroll, null, !0);
          return function (e, t) {
            t.on("mousewheel", function (t) {
              e.$apply(function () {
                o(e, {
                  $event: t
                });
              });
            });
          };
        }
      };
    }

    e.$inject = ["$parse"], t.module("material.components.tabs").directive("mdTabScroll", e);
  }(), function () {
    function e(e, o, i, r, a, d, s, c, l, m, u) {
      function p() {
        v("stretchTabs", C), G("focusIndex", k, ue.selectedIndex || 0), G("offsetLeft", w, 0), G("hasContent", A, !1), G("maxTabWidth", M, Z()), G("shouldPaginate", T, !1), E("noInkBar", L), E("dynamicHeight", R), E("noPagination"), E("swipeContent"), E("noDisconnect"), E("autoselect"), E("noSelectClick"), E("centerTabs", y, !1), E("enableDisconnect"), ue.scope = e, ue.parent = e.$parent, ue.tabs = [], ue.lastSelectedIndex = null, ue.hasFocus = !1, ue.styleTabItemFocus = !1, ue.shouldCenterTabs = V(), ue.tabContentPrefix = "tab-content-", h();
      }

      function h() {
        ue.selectedIndex = ue.selectedIndex || 0, f(), b(), g(), m(o), d.nextTick(function () {
          he = j(), ae(), ne(), de(), ue.tabs[ue.selectedIndex] && ue.tabs[ue.selectedIndex].scope.select(), be = !0, X();
        });
      }

      function f() {
        var e = c.$mdTabsTemplate,
            n = t.element(o[0].querySelector("md-tab-data"));
        n.html(e), l(n.contents())(ue.parent), delete c.$mdTabsTemplate;
      }

      function g() {
        t.element(i).on("resize", P), e.$on("$destroy", $);
      }

      function b() {
        e.$watch("$mdTabsCtrl.selectedIndex", _);
      }

      function v(e, t) {
        var n = c.$normalize("md-" + e);
        t && G(e, t), c.$observe(n, function (t) {
          ue[e] = t;
        });
      }

      function E(e, t) {
        function n(t) {
          ue[e] = "false" !== t;
        }

        var o = c.$normalize("md-" + e);
        t && G(e, t), c.hasOwnProperty(o) && n(c[o]), c.$observe(o, n);
      }

      function $() {
        ge = !0, t.element(i).off("resize", P);
      }

      function C(e) {
        var n = j();
        t.element(n.wrapper).toggleClass("md-stretch-tabs", W()), de();
      }

      function y(e) {
        ue.shouldCenterTabs = V();
      }

      function M(e, n) {
        if (e !== n) {
          var o = j();
          t.forEach(o.tabs, function (t) {
            t.style.maxWidth = e + "px";
          }), d.nextTick(ue.updateInkBarStyles);
        }
      }

      function T(e, t) {
        e !== t && (ue.maxTabWidth = Z(), ue.shouldCenterTabs = V(), d.nextTick(function () {
          ue.maxTabWidth = Z(), ne(ue.selectedIndex);
        }));
      }

      function A(e) {
        o[e ? "removeClass" : "addClass"]("md-no-tab-content");
      }

      function w(n) {
        var o = j(),
            i = ue.shouldCenterTabs ? "" : "-" + n + "px";
        t.element(o.paging).css(r.CSS.TRANSFORM, "translate3d(" + i + ", 0, 0)"), e.$broadcast("$mdTabsPaginationChanged");
      }

      function k(e, t) {
        e !== t && j().tabs[e] && (ne(), te());
      }

      function _(t, n) {
        t !== n && (ue.selectedIndex = K(t), ue.lastSelectedIndex = n, ue.updateInkBarStyles(), ae(), ne(t), e.$broadcast("$mdTabsChanged"), ue.tabs[n] && ue.tabs[n].scope.deselect(), ue.tabs[t] && ue.tabs[t].scope.select());
      }

      function x(e) {
        var t = o[0].getElementsByTagName("md-tab");
        return Array.prototype.indexOf.call(t, e[0]);
      }

      function N() {
        N.watcher || (N.watcher = e.$watch(function () {
          d.nextTick(function () {
            N.watcher && o.prop("offsetParent") && (N.watcher(), N.watcher = null, P());
          }, !1);
        }));
      }

      function S(e) {
        switch (e.keyCode) {
          case r.KEY_CODE.LEFT_ARROW:
            e.preventDefault(), ee(-1, !0);
            break;

          case r.KEY_CODE.RIGHT_ARROW:
            e.preventDefault(), ee(1, !0);
            break;

          case r.KEY_CODE.SPACE:
          case r.KEY_CODE.ENTER:
            e.preventDefault(), pe || D(ue.focusIndex);
        }
      }

      function D(e, t) {
        pe || (ue.focusIndex = ue.selectedIndex = e), t && ue.noSelectClick || d.nextTick(function () {
          ue.tabs[e].element.triggerHandler("click");
        }, !1);
      }

      function I(e) {
        ue.shouldPaginate && (e.preventDefault(), ue.offsetLeft = ce(ue.offsetLeft - e.wheelDelta));
      }

      function H() {
        var e,
            t,
            n = j(),
            o = n.canvas.clientWidth,
            i = o + ue.offsetLeft;

        for (e = 0; e < n.tabs.length && (t = n.tabs[e], !(t.offsetLeft + t.offsetWidth > i)); e++);

        o > t.offsetWidth ? ue.offsetLeft = ce(t.offsetLeft) : ue.offsetLeft = ce(t.offsetLeft + (t.offsetWidth - o + 1));
      }

      function O() {
        var e,
            t,
            n = j();

        for (e = 0; e < n.tabs.length && (t = n.tabs[e], !(t.offsetLeft + t.offsetWidth >= ue.offsetLeft)); e++);

        n.canvas.clientWidth > t.offsetWidth ? ue.offsetLeft = ce(t.offsetLeft + t.offsetWidth - n.canvas.clientWidth) : ue.offsetLeft = ce(t.offsetLeft);
      }

      function P() {
        ue.lastSelectedIndex = ue.selectedIndex, ue.offsetLeft = ce(ue.offsetLeft), d.nextTick(function () {
          ue.updateInkBarStyles(), X();
        });
      }

      function L(e) {
        t.element(j().inkBar).toggleClass("ng-hide", e);
      }

      function R(e) {
        o.toggleClass("md-dynamic-height", e);
      }

      function F(e) {
        if (!ge) {
          var t = ue.selectedIndex,
              n = ue.tabs.splice(e.getIndex(), 1)[0];
          re(), ue.selectedIndex === t && (n.scope.deselect(), ue.tabs[ue.selectedIndex] && ue.tabs[ue.selectedIndex].scope.select()), d.nextTick(function () {
            X(), ue.offsetLeft = ce(ue.offsetLeft);
          });
        }
      }

      function B(e, n) {
        var o = be,
            i = {
          getIndex: function () {
            return ue.tabs.indexOf(r);
          },
          isActive: function () {
            return this.getIndex() === ue.selectedIndex;
          },
          isLeft: function () {
            return this.getIndex() < ue.selectedIndex;
          },
          isRight: function () {
            return this.getIndex() > ue.selectedIndex;
          },
          shouldRender: function () {
            return !ue.noDisconnect || this.isActive();
          },
          hasFocus: function () {
            return ue.styleTabItemFocus && ue.hasFocus && this.getIndex() === ue.focusIndex;
          },
          id: d.nextUid(),
          hasContent: !(!e.template || !e.template.trim())
        },
            r = t.extend(i, e);
        return t.isDefined(n) ? ue.tabs.splice(n, 0, r) : ue.tabs.push(r), oe(), ie(), d.nextTick(function () {
          X(), me(r), o && ue.autoselect && d.nextTick(function () {
            d.nextTick(function () {
              D(ue.tabs.indexOf(r));
            });
          });
        }), r;
      }

      function j() {
        var e = {},
            t = o[0];
        return e.wrapper = t.querySelector("md-tabs-wrapper"), e.canvas = e.wrapper.querySelector("md-tabs-canvas"), e.paging = e.canvas.querySelector("md-pagination-wrapper"), e.inkBar = e.paging.querySelector("md-ink-bar"), e.contents = t.querySelectorAll("md-tabs-content-wrapper > md-tab-content"), e.tabs = e.paging.querySelectorAll("md-tab-item"), e.dummies = e.canvas.querySelectorAll("md-dummy-tab"), e;
      }

      function U() {
        return ue.offsetLeft > 0;
      }

      function q() {
        var e = j(),
            t = e.tabs[e.tabs.length - 1];
        return t && t.offsetLeft + t.offsetWidth > e.canvas.clientWidth + ue.offsetLeft;
      }

      function z() {
        var e = ue.tabs[ue.focusIndex];
        return e && e.id ? "tab-item-" + e.id : null;
      }

      function W() {
        switch (ue.stretchTabs) {
          case "always":
            return !0;

          case "never":
            return !1;

          default:
            return !ue.shouldPaginate && i.matchMedia("(max-width: 600px)").matches;
        }
      }

      function V() {
        return ue.centerTabs && !ue.shouldPaginate;
      }

      function Y() {
        if (ue.noPagination || !be) return !1;
        var e = o.prop("clientWidth");
        return t.forEach(j().dummies, function (t) {
          e -= t.offsetWidth;
        }), e < 0;
      }

      function K(e) {
        if (e === -1) return -1;
        var t,
            n,
            o = Math.max(ue.tabs.length - e, e);

        for (t = 0; t <= o; t++) {
          if (n = ue.tabs[e + t], n && n.scope.disabled !== !0) return n.getIndex();
          if (n = ue.tabs[e - t], n && n.scope.disabled !== !0) return n.getIndex();
        }

        return e;
      }

      function G(e, t, n) {
        Object.defineProperty(ue, e, {
          get: function () {
            return n;
          },
          set: function (e) {
            var o = n;
            n = e, t && t(e, o);
          }
        });
      }

      function X() {
        ue.maxTabWidth = Z(), ue.shouldPaginate = Y();
      }

      function Q(e) {
        var n = 0;
        return t.forEach(e, function (e) {
          n += Math.max(e.offsetWidth, e.getBoundingClientRect().width);
        }), Math.ceil(n);
      }

      function Z() {
        return o.prop("clientWidth");
      }

      function J() {
        var e = ue.tabs[ue.selectedIndex],
            t = ue.tabs[ue.focusIndex];
        ue.tabs = ue.tabs.sort(function (e, t) {
          return e.index - t.index;
        }), ue.selectedIndex = ue.tabs.indexOf(e), ue.focusIndex = ue.tabs.indexOf(t);
      }

      function ee(e, t) {
        var n,
            o = t ? "focusIndex" : "selectedIndex",
            i = ue[o];

        for (n = i + e; ue.tabs[n] && ue.tabs[n].scope.disabled; n += e);

        ue.tabs[n] && (ue[o] = n);
      }

      function te() {
        ue.styleTabItemFocus = "keyboard" === u.getLastInteractionType(), j().dummies[ue.focusIndex].focus();
      }

      function ne(e) {
        var n = j();

        if (t.isNumber(e) || (e = ue.focusIndex), n.tabs[e] && !ue.shouldCenterTabs) {
          var o = n.tabs[e],
              i = o.offsetLeft,
              r = o.offsetWidth + i;
          ue.offsetLeft = Math.max(ue.offsetLeft, ce(r - n.canvas.clientWidth + 64)), ue.offsetLeft = Math.min(ue.offsetLeft, ce(i));
        }
      }

      function oe() {
        fe.forEach(function (e) {
          d.nextTick(e);
        }), fe = [];
      }

      function ie() {
        for (var e = !1, t = 0; t < ue.tabs.length; t++) if (ue.tabs[t].hasContent) {
          e = !0;
          break;
        }

        ue.hasContent = e;
      }

      function re() {
        ue.selectedIndex = K(ue.selectedIndex), ue.focusIndex = K(ue.focusIndex);
      }

      function ae() {
        if (!ue.dynamicHeight) return o.css("height", "");
        if (!ue.tabs.length) return fe.push(ae);
        var e = j(),
            t = e.contents[ue.selectedIndex],
            i = t ? t.offsetHeight : 0,
            r = e.wrapper.offsetHeight,
            a = i + r,
            c = o.prop("clientHeight");

        if (c !== a) {
          "bottom" === o.attr("md-align-tabs") && (c -= r, a -= r, o.attr("md-border-bottom") !== n && ++c), pe = !0;
          var l = {
            height: c + "px"
          },
              m = {
            height: a + "px"
          };
          o.css(l), s(o, {
            from: l,
            to: m,
            easing: "cubic-bezier(0.35, 0, 0.25, 1)",
            duration: .5
          }).start().done(function () {
            o.css({
              transition: "none",
              height: ""
            }), d.nextTick(function () {
              o.css("transition", "");
            }), pe = !1;
          });
        }
      }

      function de() {
        var e = j();
        if (!e.tabs[ue.selectedIndex]) return void t.element(e.inkBar).css({
          left: "auto",
          right: "auto"
        });
        if (!ue.tabs.length) return fe.push(ue.updateInkBarStyles);
        if (!o.prop("offsetParent")) return N();
        var n = ue.selectedIndex,
            i = e.paging.offsetWidth,
            r = e.tabs[n],
            a = r.offsetLeft,
            s = i - a - r.offsetWidth;

        if (ue.shouldCenterTabs) {
          var c = Q(e.tabs);
          i > c && d.nextTick(de, !1);
        }

        se(), t.element(e.inkBar).css({
          left: a + "px",
          right: s + "px"
        });
      }

      function se() {
        var e = j(),
            n = ue.selectedIndex,
            o = ue.lastSelectedIndex,
            i = t.element(e.inkBar);
        t.isNumber(o) && i.toggleClass("md-left", n < o).toggleClass("md-right", n > o);
      }

      function ce(e) {
        var t = j();
        if (!t.tabs.length || !ue.shouldPaginate) return 0;
        var n = t.tabs[t.tabs.length - 1],
            o = n.offsetLeft + n.offsetWidth;
        return e = Math.max(0, e), e = Math.min(o - t.canvas.clientWidth, e);
      }

      function le(e, n) {
        var o = j(),
            i = {
          colorElement: t.element(o.inkBar)
        };
        a.attach(e, n, i);
      }

      function me(e) {
        if (e.hasContent) {
          var n = o[0].querySelectorAll('[md-tab-id="' + e.id + '"]');
          t.element(n).attr("aria-controls", ue.tabContentPrefix + e.id);
        }
      }

      var ue = this,
          pe = !1,
          he = j(),
          fe = [],
          ge = !1,
          be = !1;
      ue.$onInit = p, ue.updatePagination = d.debounce(X, 100), ue.redirectFocus = te, ue.attachRipple = le, ue.insertTab = B, ue.removeTab = F, ue.select = D, ue.scroll = I, ue.nextPage = H, ue.previousPage = O, ue.keydown = S, ue.canPageForward = q, ue.canPageBack = U, ue.refreshIndex = re, ue.incrementIndex = ee, ue.getTabElementIndex = x, ue.updateInkBarStyles = d.debounce(de, 100), ue.updateTabOrder = d.debounce(J, 100), ue.getFocusedTabId = z, 1 === t.version.major && t.version.minor <= 4 && this.$onInit();
    }

    e.$inject = ["$scope", "$element", "$window", "$mdConstant", "$mdTabInkRipple", "$mdUtil", "$animateCss", "$attrs", "$compile", "$mdTheming", "$mdInteraction"], t.module("material.components.tabs").controller("MdTabsController", e);
  }(), function () {
    function e(e) {
      return {
        scope: {
          selectedIndex: "=?mdSelected"
        },
        template: function (t, n) {
          return n.$mdTabsTemplate = t.html(), '<md-tabs-wrapper> <md-tab-data></md-tab-data> <md-prev-button tabindex="-1" role="button" aria-label="Previous Page" aria-disabled="{{!$mdTabsCtrl.canPageBack()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.previousPage()"> <md-icon md-svg-src="' + e.mdTabsArrow + '"></md-icon> </md-prev-button> <md-next-button tabindex="-1" role="button" aria-label="Next Page" aria-disabled="{{!$mdTabsCtrl.canPageForward()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.nextPage()"> <md-icon md-svg-src="' + e.mdTabsArrow + '"></md-icon> </md-next-button> <md-tabs-canvas tabindex="{{ $mdTabsCtrl.hasFocus ? -1 : 0 }}" aria-activedescendant="{{$mdTabsCtrl.getFocusedTabId()}}" ng-focus="$mdTabsCtrl.redirectFocus()" ng-class="{ \'md-paginated\': $mdTabsCtrl.shouldPaginate, \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" ng-keydown="$mdTabsCtrl.keydown($event)" role="tablist"> <md-pagination-wrapper ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" md-tab-scroll="$mdTabsCtrl.scroll($event)"> <md-tab-item tabindex="-1" class="md-tab" ng-repeat="tab in $mdTabsCtrl.tabs" role="tab" md-tab-id="{{::tab.id}}"aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-click="$mdTabsCtrl.select(tab.getIndex())" ng-class="{ \'md-active\':    tab.isActive(), \'md-focused\':   tab.hasFocus(), \'md-disabled\':  tab.scope.disabled }" ng-disabled="tab.scope.disabled" md-swipe-left="$mdTabsCtrl.nextPage()" md-swipe-touch-action="pan-y" md-swipe-right="$mdTabsCtrl.previousPage()" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-tab-item> <md-ink-bar></md-ink-bar> </md-pagination-wrapper> <md-tabs-dummy-wrapper class="md-visually-hidden md-dummy-wrapper"> <md-dummy-tab class="md-tab" tabindex="-1" id="tab-item-{{::tab.id}}" md-tab-id="{{::tab.id}}"aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-focus="$mdTabsCtrl.hasFocus = true" ng-blur="$mdTabsCtrl.hasFocus = false" ng-repeat="tab in $mdTabsCtrl.tabs" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-dummy-tab> </md-tabs-dummy-wrapper> </md-tabs-canvas> </md-tabs-wrapper> <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent && $mdTabsCtrl.selectedIndex >= 0" class="_md"> <md-tab-content id="{{:: $mdTabsCtrl.tabContentPrefix + tab.id}}" class="_md" role="tabpanel" aria-labelledby="tab-item-{{::tab.id}}" md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)" md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)" md-swipe-touch-action="pan-y" ng-if="tab.hasContent" ng-repeat="(index, tab) in $mdTabsCtrl.tabs" ng-class="{ \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null, \'md-active\':        tab.isActive(), \'md-left\':          tab.isLeft(), \'md-right\':         tab.isRight(), \'md-no-scroll\':     $mdTabsCtrl.dynamicHeight }"> <div md-tabs-template="::tab.template" md-connected-if="tab.isActive()" md-scope="::tab.parent" ng-if="$mdTabsCtrl.enableDisconnect || tab.shouldRender()"></div> </md-tab-content> </md-tabs-content-wrapper>';
        },
        controller: "MdTabsController",
        controllerAs: "$mdTabsCtrl",
        bindToController: !0
      };
    }

    e.$inject = ["$$mdSvgRegistry"], t.module("material.components.tabs").directive("mdTabs", e);
  }(), function () {
    function e(e, t) {
      return {
        require: "^?mdTabs",
        link: function (n, o, i, r) {
          if (r) {
            var a,
                d,
                s = function () {
              r.updatePagination(), r.updateInkBarStyles();
            };

            if ("MutationObserver" in t) {
              var c = {
                childList: !0,
                subtree: !0,
                characterData: !0
              };
              a = new MutationObserver(s), a.observe(o[0], c), d = a.disconnect.bind(a);
            } else {
              var l = e.debounce(s, 15, null, !1);
              o.on("DOMSubtreeModified", l), d = o.off.bind(o, "DOMSubtreeModified", l);
            }

            n.$on("$destroy", function () {
              d();
            });
          }
        }
      };
    }

    e.$inject = ["$mdUtil", "$window"], t.module("material.components.tabs").directive("mdTabsDummyWrapper", e);
  }(), function () {
    function e(e, t) {
      function n(n, o, i, r) {
        function a() {
          n.$watch("connected", function (e) {
            e === !1 ? d() : s();
          }), n.$on("$destroy", s);
        }

        function d() {
          r.enableDisconnect && t.disconnectScope(c);
        }

        function s() {
          r.enableDisconnect && t.reconnectScope(c);
        }

        if (r) {
          var c = r.enableDisconnect ? n.compileScope.$new() : n.compileScope;
          return o.html(n.template), e(o.contents())(c), t.nextTick(a);
        }
      }

      return {
        restrict: "A",
        link: n,
        scope: {
          template: "=mdTabsTemplate",
          connected: "=?mdConnectedIf",
          compileScope: "=mdScope"
        },
        require: "^?mdTabs"
      };
    }

    e.$inject = ["$compile", "$mdUtil"], t.module("material.components.tabs").directive("mdTabsTemplate", e);
  }(), function () {
    t.module("material.core").constant("$MD_THEME_CSS", 'md-autocomplete.md-THEME_NAME-theme{background:"{{background-A100}}"}md-autocomplete.md-THEME_NAME-theme[disabled]:not([md-floating-label]){background:"{{background-100}}"}md-autocomplete.md-THEME_NAME-theme button md-icon path{fill:"{{background-600}}"}md-autocomplete.md-THEME_NAME-theme button:after{background:"{{background-600-0.3}}"}.md-autocomplete-suggestions-container.md-THEME_NAME-theme{background:"{{background-A100}}"}.md-autocomplete-suggestions-container.md-THEME_NAME-theme li{color:"{{background-900}}"}.md-autocomplete-suggestions-container.md-THEME_NAME-theme li .highlight{color:"{{background-600}}"}.md-autocomplete-suggestions-container.md-THEME_NAME-theme li.selected,.md-autocomplete-suggestions-container.md-THEME_NAME-theme li:hover{background:"{{background-200}}"}md-backdrop{background-color:"{{background-900-0.0}}"}md-backdrop.md-opaque.md-THEME_NAME-theme{background-color:"{{background-900-1.0}}"}md-bottom-sheet.md-THEME_NAME-theme{background-color:"{{background-50}}";border-top-color:"{{background-300}}"}md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item{color:"{{foreground-1}}"}md-bottom-sheet.md-THEME_NAME-theme .md-subheader{background-color:"{{background-50}}";color:"{{foreground-1}}"}.md-button.md-THEME_NAME-theme:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme:not([disabled]):hover{background-color:"{{background-500-0.2}}"}.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover{background-color:transparent}.md-button.md-THEME_NAME-theme.md-fab md-icon{color:"{{accent-contrast}}"}.md-button.md-THEME_NAME-theme.md-primary{color:"{{primary-color}}"}.md-button.md-THEME_NAME-theme.md-primary.md-fab,.md-button.md-THEME_NAME-theme.md-primary.md-raised{color:"{{primary-contrast}}";background-color:"{{primary-color}}"}.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon,.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon{color:"{{primary-contrast}}"}.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover,.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover{background-color:"{{primary-600}}"}.md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon{color:"{{primary-color}}"}.md-button.md-THEME_NAME-theme.md-fab{background-color:"{{accent-color}}";color:"{{accent-contrast}}"}.md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon{color:"{{accent-contrast}}"}.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover{background-color:"{{accent-A700}}"}.md-button.md-THEME_NAME-theme.md-raised{color:"{{background-900}}";background-color:"{{background-50}}"}.md-button.md-THEME_NAME-theme.md-raised:not([disabled]) md-icon{color:"{{background-900}}"}.md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover{background-color:"{{background-50}}"}.md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused{background-color:"{{background-200}}"}.md-button.md-THEME_NAME-theme.md-warn{color:"{{warn-color}}"}.md-button.md-THEME_NAME-theme.md-warn.md-fab,.md-button.md-THEME_NAME-theme.md-warn.md-raised{color:"{{warn-contrast}}";background-color:"{{warn-color}}"}.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon,.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon{color:"{{warn-contrast}}"}.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover,.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover{background-color:"{{warn-600}}"}.md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon{color:"{{warn-color}}"}.md-button.md-THEME_NAME-theme.md-accent{color:"{{accent-color}}"}.md-button.md-THEME_NAME-theme.md-accent.md-fab,.md-button.md-THEME_NAME-theme.md-accent.md-raised{color:"{{accent-contrast}}";background-color:"{{accent-color}}"}.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon,.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon{color:"{{accent-contrast}}"}.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover,.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover{background-color:"{{accent-A700}}"}.md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon{color:"{{accent-color}}"}.md-button.md-THEME_NAME-theme.md-accent[disabled],.md-button.md-THEME_NAME-theme.md-fab[disabled],.md-button.md-THEME_NAME-theme.md-raised[disabled],.md-button.md-THEME_NAME-theme.md-warn[disabled],.md-button.md-THEME_NAME-theme[disabled]{color:"{{foreground-3}}";cursor:default}.md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon,.md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon,.md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon,.md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon,.md-button.md-THEME_NAME-theme[disabled] md-icon{color:"{{foreground-3}}"}.md-button.md-THEME_NAME-theme.md-fab[disabled],.md-button.md-THEME_NAME-theme.md-raised[disabled]{background-color:"{{foreground-4}}"}.md-button.md-THEME_NAME-theme[disabled]{background-color:transparent}._md a.md-THEME_NAME-theme:not(.md-button).md-primary{color:"{{primary-color}}"}._md a.md-THEME_NAME-theme:not(.md-button).md-primary:hover{color:"{{primary-700}}"}._md a.md-THEME_NAME-theme:not(.md-button).md-accent{color:"{{accent-color}}"}._md a.md-THEME_NAME-theme:not(.md-button).md-accent:hover{color:"{{accent-A700}}"}._md a.md-THEME_NAME-theme:not(.md-button).md-warn{color:"{{warn-color}}"}._md a.md-THEME_NAME-theme:not(.md-button).md-warn:hover{color:"{{warn-700}}"}md-card.md-THEME_NAME-theme{color:"{{foreground-1}}";background-color:"{{background-hue-1}}";border-radius:2px}md-card.md-THEME_NAME-theme .md-card-image{border-radius:2px 2px 0 0}md-card.md-THEME_NAME-theme md-card-header md-card-avatar md-icon{color:"{{background-color}}";background-color:"{{foreground-3}}"}md-card.md-THEME_NAME-theme md-card-header md-card-header-text .md-subhead,md-card.md-THEME_NAME-theme md-card-title md-card-title-text:not(:only-child) .md-subhead{color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme .md-ripple{color:"{{accent-A700}}"}md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple{color:"{{background-600}}"}md-checkbox.md-THEME_NAME-theme.md-checked.md-focused .md-container:before{background-color:"{{accent-color-0.26}}"}md-checkbox.md-THEME_NAME-theme .md-ink-ripple{color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme.md-checked .md-ink-ripple{color:"{{accent-color-0.87}}"}md-checkbox.md-THEME_NAME-theme:not(.md-checked) .md-icon{border-color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme.md-checked .md-icon{background-color:"{{accent-color-0.87}}"}md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after{border-color:"{{accent-contrast-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple{color:"{{primary-600}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple{color:"{{background-600}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ink-ripple{color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple{color:"{{primary-color-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary:not(.md-checked) .md-icon{border-color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon{background-color:"{{primary-color-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused .md-container:before{background-color:"{{primary-color-0.26}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after{border-color:"{{primary-contrast-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-indeterminate[disabled] .md-container{color:"{{foreground-3}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple{color:"{{warn-600}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ink-ripple{color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple{color:"{{warn-color-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn:not(.md-checked) .md-icon{border-color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon{background-color:"{{warn-color-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container:before{background-color:"{{warn-color-0.26}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after{border-color:"{{background-200}}"}md-checkbox.md-THEME_NAME-theme[disabled]:not(.md-checked) .md-icon{border-color:"{{foreground-3}}"}md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon{background-color:"{{foreground-3}}"}md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon:after{border-color:"{{background-200}}"}md-checkbox.md-THEME_NAME-theme[disabled] .md-icon:after{border-color:"{{foreground-3}}"}md-checkbox.md-THEME_NAME-theme[disabled] .md-label{color:"{{foreground-3}}"}md-chips.md-THEME_NAME-theme .md-chips{box-shadow:0 1px "{{foreground-4}}"}md-chips.md-THEME_NAME-theme .md-chips.md-focused{box-shadow:0 2px "{{primary-color}}"}md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input{color:"{{foreground-1}}"}md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input:-moz-placeholder,md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-moz-placeholder{color:"{{foreground-3}}"}md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input:-ms-input-placeholder{color:"{{foreground-3}}"}md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-webkit-input-placeholder{color:"{{foreground-3}}"}md-chips.md-THEME_NAME-theme md-chip{background:"{{background-300}}";color:"{{background-800}}"}md-chips.md-THEME_NAME-theme md-chip md-icon{color:"{{background-700}}"}md-chips.md-THEME_NAME-theme md-chip.md-focused{background:"{{primary-color}}";color:"{{primary-contrast}}"}md-chips.md-THEME_NAME-theme md-chip.md-focused md-icon{color:"{{primary-contrast}}"}md-chips.md-THEME_NAME-theme md-chip._md-chip-editing{background:transparent;color:"{{background-800}}"}md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path{fill:"{{background-500}}"}.md-contact-suggestion span.md-contact-email{color:"{{background-400}}"}md-content.md-THEME_NAME-theme{color:"{{foreground-1}}";background-color:"{{background-default}}"}.md-calendar.md-THEME_NAME-theme{background:"{{background-A100}}";color:"{{background-A200-0.87}}"}.md-calendar.md-THEME_NAME-theme tr:last-child td{border-bottom-color:"{{background-200}}"}.md-THEME_NAME-theme .md-calendar-day-header{background:"{{background-300}}";color:"{{background-A200-0.87}}"}.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator{border:1px solid "{{primary-500}}"}.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled{color:"{{primary-500-0.6}}"}.md-calendar-date.md-focus .md-THEME_NAME-theme .md-calendar-date-selection-indicator,.md-THEME_NAME-theme .md-calendar-date-selection-indicator:hover{background:"{{background-300}}"}.md-THEME_NAME-theme .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,.md-THEME_NAME-theme .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator{background:"{{primary-500}}";color:"{{primary-500-contrast}}";border-color:transparent}.md-THEME_NAME-theme .md-calendar-date-disabled,.md-THEME_NAME-theme .md-calendar-month-label-disabled{color:"{{background-A200-0.435}}"}.md-THEME_NAME-theme .md-datepicker-input{color:"{{foreground-1}}"}.md-THEME_NAME-theme .md-datepicker-input:-moz-placeholder,.md-THEME_NAME-theme .md-datepicker-input::-moz-placeholder{color:"{{foreground-3}}"}.md-THEME_NAME-theme .md-datepicker-input:-ms-input-placeholder{color:"{{foreground-3}}"}.md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder{color:"{{foreground-3}}"}.md-THEME_NAME-theme .md-datepicker-input-container{border-bottom-color:"{{foreground-4}}"}.md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused{border-bottom-color:"{{primary-color}}"}.md-accent .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused{border-bottom-color:"{{accent-color}}"}.md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-invalid,.md-warn .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused{border-bottom-color:"{{warn-A700}}"}.md-THEME_NAME-theme .md-datepicker-calendar-pane{border-color:"{{background-hue-1}}"}.md-THEME_NAME-theme .md-datepicker-triangle-button .md-datepicker-expand-triangle{border-top-color:"{{foreground-2}}"}.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon{color:"{{primary-color}}"}.md-accent .md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon,.md-THEME_NAME-theme .md-datepicker-open.md-accent .md-datepicker-calendar-icon{color:"{{accent-color}}"}.md-THEME_NAME-theme .md-datepicker-open.md-warn .md-datepicker-calendar-icon,.md-warn .md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon{color:"{{warn-A700}}"}.md-THEME_NAME-theme .md-datepicker-calendar{background:"{{background-A100}}"}.md-THEME_NAME-theme .md-datepicker-input-mask-opaque{box-shadow:0 0 0 9999px "{{background-hue-1}}"}.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-input-container{background:"{{background-hue-1}}"}md-dialog.md-THEME_NAME-theme{border-radius:4px;background-color:"{{background-hue-1}}";color:"{{foreground-1}}"}md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions,md-dialog.md-THEME_NAME-theme.md-content-overflow md-dialog-actions,md-divider.md-THEME_NAME-theme{border-top-color:"{{foreground-4}}"}.layout-gt-lg-row>md-divider.md-THEME_NAME-theme,.layout-gt-md-row>md-divider.md-THEME_NAME-theme,.layout-gt-sm-row>md-divider.md-THEME_NAME-theme,.layout-gt-xs-row>md-divider.md-THEME_NAME-theme,.layout-lg-row>md-divider.md-THEME_NAME-theme,.layout-md-row>md-divider.md-THEME_NAME-theme,.layout-row>md-divider.md-THEME_NAME-theme,.layout-sm-row>md-divider.md-THEME_NAME-theme,.layout-xl-row>md-divider.md-THEME_NAME-theme,.layout-xs-row>md-divider.md-THEME_NAME-theme{border-right-color:"{{foreground-4}}"}md-icon.md-THEME_NAME-theme{color:"{{foreground-2}}"}md-icon.md-THEME_NAME-theme.md-primary{color:"{{primary-color}}"}md-icon.md-THEME_NAME-theme.md-accent{color:"{{accent-color}}"}md-icon.md-THEME_NAME-theme.md-warn{color:"{{warn-color}}"}md-input-container.md-THEME_NAME-theme .md-input{color:"{{foreground-1}}";border-color:"{{foreground-4}}"}md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder,md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder{color:"{{foreground-3}}"}md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder{color:"{{foreground-3}}"}md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder{color:"{{foreground-3}}"}md-input-container.md-THEME_NAME-theme>md-icon{color:"{{foreground-1}}"}md-input-container.md-THEME_NAME-theme .md-placeholder,md-input-container.md-THEME_NAME-theme label{color:"{{foreground-3}}"}md-input-container.md-THEME_NAME-theme label.md-required:after{color:"{{warn-A700}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-focused):not(.md-input-invalid) label.md-required:after{color:"{{foreground-2}}"}md-input-container.md-THEME_NAME-theme .md-input-message-animation,md-input-container.md-THEME_NAME-theme .md-input-messages-animation{color:"{{warn-A700}}"}md-input-container.md-THEME_NAME-theme .md-input-message-animation .md-char-counter,md-input-container.md-THEME_NAME-theme .md-input-messages-animation .md-char-counter{color:"{{foreground-1}}"}md-input-container.md-THEME_NAME-theme.md-input-focused .md-input:-moz-placeholder,md-input-container.md-THEME_NAME-theme.md-input-focused .md-input::-moz-placeholder{color:"{{foreground-2}}"}md-input-container.md-THEME_NAME-theme.md-input-focused .md-input:-ms-input-placeholder{color:"{{foreground-2}}"}md-input-container.md-THEME_NAME-theme.md-input-focused .md-input::-webkit-input-placeholder{color:"{{foreground-2}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label{color:"{{foreground-2}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-resized .md-input{border-color:"{{primary-color}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon{color:"{{primary-color}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input{border-color:"{{accent-color}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent md-icon{color:"{{accent-color}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input{border-color:"{{warn-A700}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn md-icon{color:"{{warn-A700}}"}md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input{border-color:"{{warn-A700}}"}md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter,md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input-message-animation,md-input-container.md-THEME_NAME-theme.md-input-invalid label{color:"{{warn-A700}}"}[disabled] md-input-container.md-THEME_NAME-theme .md-input,md-input-container.md-THEME_NAME-theme .md-input[disabled]{border-bottom-color:transparent;color:"{{foreground-3}}";background-image:linear-gradient(90deg,"{{foreground-3}}" 0,"{{foreground-3}}" 33%,transparent 0);background-image:-ms-linear-gradient(left,transparent 0,"{{foreground-3}}" 100%)}md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3,md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4{color:"{{foreground-1}}"}md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p{color:"{{foreground-2}}"}md-list.md-THEME_NAME-theme .md-proxy-focus.md-focused div.md-no-style{background-color:"{{background-100}}"}md-list.md-THEME_NAME-theme md-list-item .md-avatar-icon{background-color:"{{foreground-3}}";color:"{{background-color}}"}md-list.md-THEME_NAME-theme md-list-item>md-icon{color:"{{foreground-2}}"}md-list.md-THEME_NAME-theme md-list-item>md-icon.md-highlight{color:"{{primary-color}}"}md-list.md-THEME_NAME-theme md-list-item>md-icon.md-highlight.md-accent{color:"{{accent-color}}"}md-menu-content.md-THEME_NAME-theme{background-color:"{{background-A100}}"}md-menu-content.md-THEME_NAME-theme md-menu-item{color:"{{background-A200-0.87}}"}md-menu-content.md-THEME_NAME-theme md-menu-item md-icon{color:"{{background-A200-0.54}}"}md-menu-content.md-THEME_NAME-theme md-menu-item .md-button[disabled],md-menu-content.md-THEME_NAME-theme md-menu-item .md-button[disabled] md-icon{color:"{{background-A200-0.25}}"}md-menu-content.md-THEME_NAME-theme md-menu-divider{background-color:"{{background-A200-0.11}}"}md-menu-bar.md-THEME_NAME-theme>button.md-button{color:"{{foreground-2}}";border-radius:2px}md-menu-bar.md-THEME_NAME-theme md-menu.md-open>button,md-menu-bar.md-THEME_NAME-theme md-menu>button:focus{outline:none;background:"{{background-200}}"}md-menu-bar.md-THEME_NAME-theme.md-open:not(.md-keyboard-mode) md-menu:hover>button{background-color:"{{ background-500-0.2}}"}md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:focus,md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:hover{background:transparent}md-menu-content.md-THEME_NAME-theme .md-menu>.md-button:after{color:"{{background-A200-0.54}}"}md-menu-content.md-THEME_NAME-theme .md-menu.md-open>.md-button{background-color:"{{ background-500-0.2}}"}md-toolbar.md-THEME_NAME-theme.md-menu-toolbar{background-color:"{{background-A100}}";color:"{{background-A200}}"}md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler{background-color:"{{primary-color}}";color:"{{background-A100-0.87}}"}md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler md-icon{color:"{{background-A100-0.87}}"}md-nav-bar.md-THEME_NAME-theme .md-nav-bar{background-color:transparent;border-color:"{{foreground-4}}"}md-nav-bar.md-THEME_NAME-theme .md-button._md-nav-button.md-unselected{color:"{{foreground-2}}"}md-nav-bar.md-THEME_NAME-theme md-nav-ink-bar{color:"{{accent-color}}";background:"{{accent-color}}"}md-nav-bar.md-THEME_NAME-theme.md-accent>.md-nav-bar{background-color:"{{accent-color}}"}md-nav-bar.md-THEME_NAME-theme.md-accent>.md-nav-bar .md-button._md-nav-button{color:"{{accent-A100}}"}md-nav-bar.md-THEME_NAME-theme.md-accent>.md-nav-bar .md-button._md-nav-button.md-active,md-nav-bar.md-THEME_NAME-theme.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused{color:"{{accent-contrast}}"}md-nav-bar.md-THEME_NAME-theme.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused{background:"{{accent-contrast-0.1}}"}md-nav-bar.md-THEME_NAME-theme.md-accent>.md-nav-bar md-nav-ink-bar{color:"{{primary-600-1}}";background:"{{primary-600-1}}"}md-nav-bar.md-THEME_NAME-theme.md-warn>.md-nav-bar{background-color:"{{warn-color}}"}md-nav-bar.md-THEME_NAME-theme.md-warn>.md-nav-bar .md-button._md-nav-button{color:"{{warn-100}}"}md-nav-bar.md-THEME_NAME-theme.md-warn>.md-nav-bar .md-button._md-nav-button.md-active,md-nav-bar.md-THEME_NAME-theme.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused{color:"{{warn-contrast}}"}md-nav-bar.md-THEME_NAME-theme.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused{background:"{{warn-contrast-0.1}}"}md-nav-bar.md-THEME_NAME-theme.md-primary>.md-nav-bar{background-color:"{{primary-color}}"}md-nav-bar.md-THEME_NAME-theme.md-primary>.md-nav-bar .md-button._md-nav-button{color:"{{primary-100}}"}md-nav-bar.md-THEME_NAME-theme.md-primary>.md-nav-bar .md-button._md-nav-button.md-active,md-nav-bar.md-THEME_NAME-theme.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused{color:"{{primary-contrast}}"}md-nav-bar.md-THEME_NAME-theme.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused{background:"{{primary-contrast-0.1}}"}md-toolbar>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar{background-color:"{{primary-color}}"}md-toolbar>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button{color:"{{primary-100}}"}md-toolbar>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-active,md-toolbar>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-focused{color:"{{primary-contrast}}"}md-toolbar>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-focused{background:"{{primary-contrast-0.1}}"}md-toolbar.md-accent>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar{background-color:"{{accent-color}}"}md-toolbar.md-accent>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button{color:"{{accent-A100}}"}md-toolbar.md-accent>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-active,md-toolbar.md-accent>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-focused{color:"{{accent-contrast}}"}md-toolbar.md-accent>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-focused{background:"{{accent-contrast-0.1}}"}md-toolbar.md-accent>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar md-nav-ink-bar{color:"{{primary-600-1}}";background:"{{primary-600-1}}"}md-toolbar.md-warn>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar{background-color:"{{warn-color}}"}md-toolbar.md-warn>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button{color:"{{warn-100}}"}md-toolbar.md-warn>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-active,md-toolbar.md-warn>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-focused{color:"{{warn-contrast}}"}md-toolbar.md-warn>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-focused{background:"{{warn-contrast-0.1}}"}md-progress-circular.md-THEME_NAME-theme path{stroke:"{{primary-color}}"}md-progress-circular.md-THEME_NAME-theme.md-warn path{stroke:"{{warn-color}}"}md-progress-circular.md-THEME_NAME-theme.md-accent path{stroke:"{{accent-color}}"}._md-panel-backdrop.md-THEME_NAME-theme{background-color:"{{background-900-1.0}}"}md-progress-linear.md-THEME_NAME-theme .md-container{background-color:"{{primary-100}}"}md-progress-linear.md-THEME_NAME-theme .md-bar{background-color:"{{primary-color}}"}md-progress-linear.md-THEME_NAME-theme.md-warn .md-container{background-color:"{{warn-100}}"}md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar{background-color:"{{warn-color}}"}md-progress-linear.md-THEME_NAME-theme.md-accent .md-container{background-color:"{{accent-100}}"}md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar{background-color:"{{accent-color}}"}md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1{background-color:"{{warn-100}}"}md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before{background:radial-gradient("{{warn-100}}" 0,"{{warn-100}}" 16%,transparent 42%)}md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1{background-color:"{{accent-100}}"}md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before{background:radial-gradient("{{accent-100}}" 0,"{{accent-100}}" 16%,transparent 42%)}md-radio-button.md-THEME_NAME-theme .md-off{border-color:"{{foreground-2}}"}md-radio-button.md-THEME_NAME-theme .md-on{background-color:"{{accent-color-0.87}}"}md-radio-button.md-THEME_NAME-theme.md-checked .md-off{border-color:"{{accent-color-0.87}}"}md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple{color:"{{accent-color-0.87}}"}md-radio-button.md-THEME_NAME-theme .md-container .md-ripple{color:"{{accent-A700}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-on,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on{background-color:"{{primary-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off{border-color:"{{primary-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple{color:"{{primary-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple{color:"{{primary-600}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-on,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on{background-color:"{{warn-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off{border-color:"{{warn-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple{color:"{{warn-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple{color:"{{warn-600}}"}md-radio-button.md-THEME_NAME-theme[disabled],md-radio-group.md-THEME_NAME-theme[disabled]{color:"{{foreground-3}}"}md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off,md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on,md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-off,md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-on{border-color:"{{foreground-3}}"}md-radio-group.md-THEME_NAME-theme .md-checked .md-ink-ripple{color:"{{accent-color-0.26}}"}md-radio-group.md-THEME_NAME-theme .md-checked:not([disabled]).md-primary .md-ink-ripple,md-radio-group.md-THEME_NAME-theme.md-primary .md-checked:not([disabled]) .md-ink-ripple{color:"{{primary-color-0.26}}"}md-radio-group.md-THEME_NAME-theme .md-checked.md-primary .md-ink-ripple{color:"{{warn-color-0.26}}"}md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked .md-container:before{background-color:"{{accent-color-0.26}}"}md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-primary .md-checked .md-container:before{background-color:"{{primary-color-0.26}}"}md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-warn .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-warn .md-checked .md-container:before{background-color:"{{warn-color-0.26}}"}md-sidenav.md-THEME_NAME-theme,md-sidenav.md-THEME_NAME-theme md-content{background-color:"{{background-hue-1}}"}md-input-container md-select.md-THEME_NAME-theme .md-select-value span:first-child:after{color:"{{warn-A700}}"}md-input-container:not(.md-input-focused):not(.md-input-invalid) md-select.md-THEME_NAME-theme .md-select-value span:first-child:after{color:"{{foreground-3}}"}md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-THEME_NAME-theme .md-select-value,md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder{color:"{{primary-color}}"}md-input-container.md-input-invalid md-select.md-THEME_NAME-theme .md-select-value{color:"{{warn-A700}}"!important;border-bottom-color:"{{warn-A700}}"!important}md-input-container.md-input-invalid md-select.md-THEME_NAME-theme.md-no-underline .md-select-value{border-bottom-color:transparent!important}md-select.md-THEME_NAME-theme[disabled] .md-select-value{border-bottom-color:transparent;background-image:linear-gradient(90deg,"{{foreground-3}}" 0,"{{foreground-3}}" 33%,transparent 0);background-image:-ms-linear-gradient(left,transparent 0,"{{foreground-3}}" 100%)}md-select.md-THEME_NAME-theme .md-select-value{border-bottom-color:"{{foreground-4}}"}md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder{color:"{{foreground-3}}"}md-select.md-THEME_NAME-theme .md-select-value span:first-child:after{color:"{{warn-A700}}"}md-select.md-THEME_NAME-theme.md-no-underline .md-select-value{border-bottom-color:transparent!important}md-select.md-THEME_NAME-theme.ng-invalid.ng-touched .md-select-value{color:"{{warn-A700}}"!important;border-bottom-color:"{{warn-A700}}"!important}md-select.md-THEME_NAME-theme.ng-invalid.ng-touched.md-no-underline .md-select-value{border-bottom-color:transparent!important}md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value{border-bottom-color:"{{primary-color}}";color:"{{ foreground-1 }}"}md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value.md-select-placeholder{color:"{{ foreground-1 }}"}md-select.md-THEME_NAME-theme:not([disabled]):focus.md-no-underline .md-select-value{border-bottom-color:transparent!important}md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-value{border-bottom-color:"{{accent-color}}"}md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-value{border-bottom-color:"{{warn-color}}"}md-select.md-THEME_NAME-theme[disabled] .md-select-icon,md-select.md-THEME_NAME-theme[disabled] .md-select-value,md-select.md-THEME_NAME-theme[disabled] .md-select-value.md-select-placeholder{color:"{{foreground-3}}"}md-select.md-THEME_NAME-theme .md-select-icon{color:"{{foreground-2}}"}md-select-menu.md-THEME_NAME-theme md-content{background:"{{background-A100}}"}md-select-menu.md-THEME_NAME-theme md-content md-optgroup{color:"{{background-600-0.87}}"}md-select-menu.md-THEME_NAME-theme md-content md-option{color:"{{background-900-0.87}}"}md-select-menu.md-THEME_NAME-theme md-content md-option[disabled] .md-text{color:"{{background-400-0.87}}"}md-select-menu.md-THEME_NAME-theme md-content md-option:not([disabled]):focus,md-select-menu.md-THEME_NAME-theme md-content md-option:not([disabled]):hover{background:"{{background-200}}"}md-select-menu.md-THEME_NAME-theme md-content md-option[selected]{color:"{{primary-500}}"}md-select-menu.md-THEME_NAME-theme md-content md-option[selected]:focus{color:"{{primary-600}}"}md-select-menu.md-THEME_NAME-theme md-content md-option[selected].md-accent{color:"{{accent-color}}"}md-select-menu.md-THEME_NAME-theme md-content md-option[selected].md-accent:focus{color:"{{accent-A700}}"}.md-checkbox-enabled.md-THEME_NAME-theme .md-ripple{color:"{{primary-600}}"}.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ripple{color:"{{background-600}}"}.md-checkbox-enabled.md-THEME_NAME-theme .md-ink-ripple{color:"{{foreground-2}}"}.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ink-ripple{color:"{{primary-color-0.87}}"}.md-checkbox-enabled.md-THEME_NAME-theme:not(.md-checked) .md-icon{border-color:"{{foreground-2}}"}.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-icon{background-color:"{{primary-color-0.87}}"}.md-checkbox-enabled.md-THEME_NAME-theme[selected].md-focused .md-container:before{background-color:"{{primary-color-0.26}}"}.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-icon:after{border-color:"{{primary-contrast-0.87}}"}.md-checkbox-enabled.md-THEME_NAME-theme .md-indeterminate[disabled] .md-container{color:"{{foreground-3}}"}.md-checkbox-enabled.md-THEME_NAME-theme md-option .md-text{color:"{{background-900-0.87}}"}md-slider.md-THEME_NAME-theme .md-track{background-color:"{{foreground-3}}"}md-slider.md-THEME_NAME-theme .md-track-ticks{color:"{{background-contrast}}"}md-slider.md-THEME_NAME-theme .md-focus-ring{background-color:"{{accent-A200-0.2}}"}md-slider.md-THEME_NAME-theme .md-disabled-thumb{border-color:"{{background-color}}";background-color:"{{background-color}}"}md-slider.md-THEME_NAME-theme.md-min .md-thumb:after{background-color:"{{background-color}}";border-color:"{{foreground-3}}"}md-slider.md-THEME_NAME-theme.md-min .md-focus-ring{background-color:"{{foreground-3-0.38}}"}md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-thumb:after{background-color:"{{background-contrast}}";border-color:transparent}md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-sign{background-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-sign:after{border-top-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme.md-min[md-discrete][md-vertical] .md-sign:after{border-top-color:transparent;border-left-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme .md-track.md-track-fill{background-color:"{{accent-color}}"}md-slider.md-THEME_NAME-theme .md-thumb:after{border-color:"{{accent-color}}";background-color:"{{accent-color}}"}md-slider.md-THEME_NAME-theme .md-sign{background-color:"{{accent-color}}"}md-slider.md-THEME_NAME-theme .md-sign:after{border-top-color:"{{accent-color}}"}md-slider.md-THEME_NAME-theme[md-vertical] .md-sign:after{border-top-color:transparent;border-left-color:"{{accent-color}}"}md-slider.md-THEME_NAME-theme .md-thumb-text{color:"{{accent-contrast}}"}md-slider.md-THEME_NAME-theme.md-warn .md-focus-ring{background-color:"{{warn-200-0.38}}"}md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill{background-color:"{{warn-color}}"}md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after{border-color:"{{warn-color}}";background-color:"{{warn-color}}"}md-slider.md-THEME_NAME-theme.md-warn .md-sign{background-color:"{{warn-color}}"}md-slider.md-THEME_NAME-theme.md-warn .md-sign:after{border-top-color:"{{warn-color}}"}md-slider.md-THEME_NAME-theme.md-warn[md-vertical] .md-sign:after{border-top-color:transparent;border-left-color:"{{warn-color}}"}md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text{color:"{{warn-contrast}}"}md-slider.md-THEME_NAME-theme.md-primary .md-focus-ring{background-color:"{{primary-200-0.38}}"}md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill{background-color:"{{primary-color}}"}md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after{border-color:"{{primary-color}}";background-color:"{{primary-color}}"}md-slider.md-THEME_NAME-theme.md-primary .md-sign{background-color:"{{primary-color}}"}md-slider.md-THEME_NAME-theme.md-primary .md-sign:after{border-top-color:"{{primary-color}}"}md-slider.md-THEME_NAME-theme.md-primary[md-vertical] .md-sign:after{border-top-color:transparent;border-left-color:"{{primary-color}}"}md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text{color:"{{primary-contrast}}"}md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after{border-color:transparent}md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after,md-slider.md-THEME_NAME-theme[disabled][md-discrete] .md-thumb:after{background-color:"{{foreground-3}}";border-color:transparent}md-slider.md-THEME_NAME-theme[disabled][readonly] .md-sign{background-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme[disabled][readonly] .md-sign:after{border-top-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme[disabled][readonly][md-vertical] .md-sign:after{border-top-color:transparent;border-left-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme[disabled][readonly] .md-disabled-thumb{border-color:transparent;background-color:transparent}md-slider-container[disabled]>:first-child:not(md-slider),md-slider-container[disabled]>:last-child:not(md-slider){color:"{{foreground-3}}"}.md-subheader.md-THEME_NAME-theme{color:"{{ foreground-2-0.23 }}";background-color:"{{background-default}}"}.md-subheader.md-THEME_NAME-theme.md-primary{color:"{{primary-color}}"}.md-subheader.md-THEME_NAME-theme.md-accent{color:"{{accent-color}}"}.md-subheader.md-THEME_NAME-theme.md-warn{color:"{{warn-color}}"}md-switch.md-THEME_NAME-theme .md-ink-ripple{color:"{{background-500}}"}md-switch.md-THEME_NAME-theme .md-thumb{background-color:"{{background-50}}"}md-switch.md-THEME_NAME-theme .md-bar{background-color:"{{background-500}}"}md-switch.md-THEME_NAME-theme.md-checked .md-ink-ripple{color:"{{accent-color}}"}md-switch.md-THEME_NAME-theme.md-checked .md-thumb{background-color:"{{accent-color}}"}md-switch.md-THEME_NAME-theme.md-checked .md-bar{background-color:"{{accent-color-0.5}}"}md-switch.md-THEME_NAME-theme.md-checked.md-focused .md-thumb:before{background-color:"{{accent-color-0.26}}"}md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-ink-ripple{color:"{{primary-color}}"}md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb{background-color:"{{primary-color}}"}md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar{background-color:"{{primary-color-0.5}}"}md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused .md-thumb:before{background-color:"{{primary-color-0.26}}"}md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-ink-ripple{color:"{{warn-color}}"}md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb{background-color:"{{warn-color}}"}md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar{background-color:"{{warn-color-0.5}}"}md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused .md-thumb:before{background-color:"{{warn-color-0.26}}"}md-switch.md-THEME_NAME-theme[disabled] .md-thumb{background-color:"{{background-400}}"}md-switch.md-THEME_NAME-theme[disabled] .md-bar{background-color:"{{foreground-4}}"}md-tabs.md-THEME_NAME-theme md-tabs-wrapper{background-color:transparent;border-color:"{{foreground-4}}"}md-tabs.md-THEME_NAME-theme .md-paginator md-icon{color:"{{primary-color}}"}md-tabs.md-THEME_NAME-theme md-ink-bar{color:"{{accent-color}}";background:"{{accent-color}}"}md-tabs.md-THEME_NAME-theme .md-tab{color:"{{foreground-2}}"}md-tabs.md-THEME_NAME-theme .md-tab[disabled],md-tabs.md-THEME_NAME-theme .md-tab[disabled] md-icon{color:"{{foreground-3}}"}md-tabs.md-THEME_NAME-theme .md-tab.md-active,md-tabs.md-THEME_NAME-theme .md-tab.md-active md-icon,md-tabs.md-THEME_NAME-theme .md-tab.md-focused,md-tabs.md-THEME_NAME-theme .md-tab.md-focused md-icon{color:"{{primary-color}}"}md-tabs.md-THEME_NAME-theme .md-tab.md-focused{background:"{{primary-color-0.1}}"}md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container{color:"{{accent-A100}}"}md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper{background-color:"{{accent-color}}"}md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{accent-A100}}"}md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{accent-contrast}}"}md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{accent-contrast-0.1}}"}md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar{color:"{{primary-600-1}}";background:"{{primary-600-1}}"}md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper{background-color:"{{primary-color}}"}md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{primary-100}}"}md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{primary-contrast}}"}md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{primary-contrast-0.1}}"}md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper{background-color:"{{warn-color}}"}md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{warn-100}}"}md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{warn-contrast}}"}md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{warn-contrast-0.1}}"}md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper{background-color:"{{primary-color}}"}md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{primary-100}}"}md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{primary-contrast}}"}md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{primary-contrast-0.1}}"}md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper{background-color:"{{accent-color}}"}md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{accent-A100}}"}md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{accent-contrast}}"}md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{accent-contrast-0.1}}"}md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar{color:"{{primary-600-1}}";background:"{{primary-600-1}}"}md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper{background-color:"{{warn-color}}"}md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{warn-100}}"}md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{warn-contrast}}"}md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{warn-contrast-0.1}}"}md-toast.md-THEME_NAME-theme .md-toast-content{background-color:#323232;color:"{{background-50}}"}md-toast.md-THEME_NAME-theme .md-toast-content .md-button{color:"{{background-50}}"}md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight{color:"{{accent-color}}"}md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-primary{color:"{{primary-color}}"}md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-warn{color:"{{warn-color}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar){background-color:"{{primary-color}}";color:"{{primary-contrast}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) md-icon{color:"{{primary-contrast}}";fill:"{{primary-contrast}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) .md-button[disabled] md-icon{color:"{{primary-contrast-0.26}}";fill:"{{primary-contrast-0.26}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent{background-color:"{{accent-color}}";color:"{{accent-contrast}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent .md-ink-ripple{color:"{{accent-contrast}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent md-icon{color:"{{accent-contrast}}";fill:"{{accent-contrast}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent .md-button[disabled] md-icon{color:"{{accent-contrast-0.26}}";fill:"{{accent-contrast-0.26}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-warn{background-color:"{{warn-color}}";color:"{{warn-contrast}}"}.md-panel.md-tooltip.md-THEME_NAME-theme{color:"{{background-700-contrast}}";background-color:"{{background-700}}"}body.md-THEME_NAME-theme,html.md-THEME_NAME-theme{color:"{{foreground-1}}";background-color:"{{background-color}}"}');
  }();
}(window, window.angular), window.ngMaterial = {
  version: {
    full: "1.1.4"
  }
};

/***/ }),

/***/ "./static/vendors/angular-messages/angular-messages.min.js":
/*!*****************************************************************!*\
  !*** ./static/vendors/angular-messages/angular-messages.min.js ***!
  \*****************************************************************/
/***/ (() => {

/*
 AngularJS v1.6.5
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (y, l) {
  'use strict';

  function w() {
    return ["$animate", function (t) {
      return {
        restrict: "AE",
        transclude: "element",
        priority: 1,
        terminal: !0,
        require: "^^ngMessages",
        link: function link(u, n, a, c, f) {
          var e = n[0],
              d,
              r = a.ngMessage || a.when;
          a = a.ngMessageExp || a.whenExp;

          var k = function k(a) {
            d = a ? p(a) ? a : a.split(/[\s,]+/) : null;
            c.reRender();
          };

          a ? (k(u.$eval(a)), u.$watchCollection(a, k)) : k(r);
          var g, s;
          c.register(e, s = {
            test: function test(a) {
              var m = d;
              a = m ? p(m) ? 0 <= m.indexOf(a) : m.hasOwnProperty(a) : void 0;
              return a;
            },
            attach: function attach() {
              g || f(function (a, m) {
                t.enter(a, null, n);
                g = a;
                var d = g.$$attachId = c.getAttachId();
                g.on("$destroy", function () {
                  g && g.$$attachId === d && (c.deregister(e), s.detach());
                  m.$destroy();
                });
              });
            },
            detach: function detach() {
              if (g) {
                var a = g;
                g = null;
                t.leave(a);
              }
            }
          });
        }
      };
    }];
  }

  var v, p, q, x;
  l.module("ngMessages", [], function () {
    v = l.forEach;
    p = l.isArray;
    q = l.isString;
    x = l.element;
  }).info({
    angularVersion: "1.6.5"
  }).directive("ngMessages", ["$animate", function (t) {
    function u(a, c) {
      return q(c) && 0 === c.length || n(a.$eval(c));
    }

    function n(a) {
      return q(a) ? a.length : !!a;
    }

    return {
      require: "ngMessages",
      restrict: "AE",
      controller: ["$element", "$scope", "$attrs", function (a, c, f) {
        function e(a, c) {
          for (var b = c, d = []; b && b !== a;) {
            var h = b.$$ngMessageNode;
            if (h && h.length) return g[h];
            b.childNodes.length && -1 === d.indexOf(b) ? (d.push(b), b = b.childNodes[b.childNodes.length - 1]) : b.previousSibling ? b = b.previousSibling : (b = b.parentNode, d.push(b));
          }
        }

        var d = this,
            r = 0,
            k = 0;

        this.getAttachId = function () {
          return k++;
        };

        var g = this.messages = {},
            s,
            l;

        this.render = function (m) {
          m = m || {};
          s = !1;
          l = m;

          for (var g = u(c, f.ngMessagesMultiple) || u(c, f.multiple), b = [], e = {}, h = d.head, r = !1, k = 0; null != h;) {
            k++;
            var q = h.message,
                p = !1;
            r || v(m, function (a, b) {
              !p && n(a) && q.test(b) && !e[b] && (p = e[b] = !0, q.attach());
            });
            p ? r = !g : b.push(q);
            h = h.next;
          }

          v(b, function (a) {
            a.detach();
          });
          b.length !== k ? t.setClass(a, "ng-active", "ng-inactive") : t.setClass(a, "ng-inactive", "ng-active");
        };

        c.$watchCollection(f.ngMessages || f["for"], d.render);
        a.on("$destroy", function () {
          v(g, function (a) {
            a.message.detach();
          });
        });

        this.reRender = function () {
          s || (s = !0, c.$evalAsync(function () {
            s && l && d.render(l);
          }));
        };

        this.register = function (c, f) {
          var b = r.toString();
          g[b] = {
            message: f
          };
          var k = a[0],
              h = g[b];
          d.head ? (k = e(k, c)) ? (h.next = k.next, k.next = h) : (h.next = d.head, d.head = h) : d.head = h;
          c.$$ngMessageNode = b;
          r++;
          d.reRender();
        };

        this.deregister = function (c) {
          var f = c.$$ngMessageNode;
          delete c.$$ngMessageNode;
          var b = g[f];
          (c = e(a[0], c)) ? c.next = b.next : d.head = b.next;
          delete g[f];
          d.reRender();
        };
      }]
    };
  }]).directive("ngMessagesInclude", ["$templateRequest", "$document", "$compile", function (l, p, n) {
    function a(a, f) {
      var e = n.$$createComment ? n.$$createComment("ngMessagesInclude", f) : p[0].createComment(" ngMessagesInclude: " + f + " "),
          e = x(e);
      a.after(e);
      a.remove();
    }

    return {
      restrict: "AE",
      require: "^^ngMessages",
      link: function link(c, f, e) {
        var d = e.ngMessagesInclude || e.src;
        l(d).then(function (e) {
          c.$$destroyed || (q(e) && !e.trim() ? a(f, d) : n(e)(c, function (c) {
            f.after(c);
            a(f, d);
          }));
        });
      }
    };
  }]).directive("ngMessage", w()).directive("ngMessageExp", w());
})(window, window.angular);

/***/ }),

/***/ "./static/vendors/angular.min.js":
/*!***************************************!*\
  !*** ./static/vendors/angular.min.js ***!
  \***************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (C) {
  'use strict';

  function re(a) {
    if (D(a)) w(a.objectMaxDepth) && (Wb.objectMaxDepth = Xb(a.objectMaxDepth) ? a.objectMaxDepth : NaN), w(a.urlErrorParamsEnabled) && Ga(a.urlErrorParamsEnabled) && (Wb.urlErrorParamsEnabled = a.urlErrorParamsEnabled);else return Wb;
  }

  function Xb(a) {
    return W(a) && 0 < a;
  }

  function F(a, b) {
    b = b || Error;
    return function () {
      var d = arguments[0],
          c;
      c = "[" + (a ? a + ":" : "") + d + "] http://errors.angularjs.org/1.7.8/" + (a ? a + "/" : "") + d;

      for (d = 1; d < arguments.length; d++) {
        c = c + (1 == d ? "?" : "&") + "p" + (d - 1) + "=";
        var e = encodeURIComponent,
            f;
        f = arguments[d];
        f = "function" == typeof f ? f.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof f ? "undefined" : "string" != typeof f ? JSON.stringify(f) : f;
        c += e(f);
      }

      return new b(c);
    };
  }

  function ya(a) {
    if (null == a || $a(a)) return !1;
    if (H(a) || A(a) || x && a instanceof x) return !0;
    var b = "length" in Object(a) && a.length;
    return W(b) && (0 <= b && b - 1 in a || "function" === typeof a.item);
  }

  function r(a, b, d) {
    var c, e;
    if (a) if (B(a)) for (c in a) {
      "prototype" !== c && "length" !== c && "name" !== c && a.hasOwnProperty(c) && b.call(d, a[c], c, a);
    } else if (H(a) || ya(a)) {
      var f = "object" !== _typeof(a);

      c = 0;

      for (e = a.length; c < e; c++) {
        (f || c in a) && b.call(d, a[c], c, a);
      }
    } else if (a.forEach && a.forEach !== r) a.forEach(b, d, a);else if (Nc(a)) for (c in a) {
      b.call(d, a[c], c, a);
    } else if ("function" === typeof a.hasOwnProperty) for (c in a) {
      a.hasOwnProperty(c) && b.call(d, a[c], c, a);
    } else for (c in a) {
      ta.call(a, c) && b.call(d, a[c], c, a);
    }
    return a;
  }

  function Oc(a, b, d) {
    for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) {
      b.call(d, a[c[e]], c[e]);
    }

    return c;
  }

  function Yb(a) {
    return function (b, d) {
      a(d, b);
    };
  }

  function se() {
    return ++pb;
  }

  function Zb(a, b, d) {
    for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
      var g = b[e];
      if (D(g) || B(g)) for (var k = Object.keys(g), h = 0, l = k.length; h < l; h++) {
        var m = k[h],
            p = g[m];
        d && D(p) ? ha(p) ? a[m] = new Date(p.valueOf()) : ab(p) ? a[m] = new RegExp(p) : p.nodeName ? a[m] = p.cloneNode(!0) : $b(p) ? a[m] = p.clone() : (D(a[m]) || (a[m] = H(p) ? [] : {}), Zb(a[m], [p], !0)) : a[m] = p;
      }
    }

    c ? a.$$hashKey = c : delete a.$$hashKey;
    return a;
  }

  function S(a) {
    return Zb(a, Ha.call(arguments, 1), !1);
  }

  function te(a) {
    return Zb(a, Ha.call(arguments, 1), !0);
  }

  function fa(a) {
    return parseInt(a, 10);
  }

  function ac(a, b) {
    return S(Object.create(a), b);
  }

  function E() {}

  function Ta(a) {
    return a;
  }

  function ia(a) {
    return function () {
      return a;
    };
  }

  function bc(a) {
    return B(a.toString) && a.toString !== la;
  }

  function z(a) {
    return "undefined" === typeof a;
  }

  function w(a) {
    return "undefined" !== typeof a;
  }

  function D(a) {
    return null !== a && "object" === _typeof(a);
  }

  function Nc(a) {
    return null !== a && "object" === _typeof(a) && !Pc(a);
  }

  function A(a) {
    return "string" === typeof a;
  }

  function W(a) {
    return "number" === typeof a;
  }

  function ha(a) {
    return "[object Date]" === la.call(a);
  }

  function H(a) {
    return Array.isArray(a) || a instanceof Array;
  }

  function cc(a) {
    switch (la.call(a)) {
      case "[object Error]":
        return !0;

      case "[object Exception]":
        return !0;

      case "[object DOMException]":
        return !0;

      default:
        return a instanceof Error;
    }
  }

  function B(a) {
    return "function" === typeof a;
  }

  function ab(a) {
    return "[object RegExp]" === la.call(a);
  }

  function $a(a) {
    return a && a.window === a;
  }

  function bb(a) {
    return a && a.$evalAsync && a.$watch;
  }

  function Ga(a) {
    return "boolean" === typeof a;
  }

  function ue(a) {
    return a && W(a.length) && ve.test(la.call(a));
  }

  function $b(a) {
    return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
  }

  function we(a) {
    var b = {};
    a = a.split(",");
    var d;

    for (d = 0; d < a.length; d++) {
      b[a[d]] = !0;
    }

    return b;
  }

  function ua(a) {
    return K(a.nodeName || a[0] && a[0].nodeName);
  }

  function cb(a, b) {
    var d = a.indexOf(b);
    0 <= d && a.splice(d, 1);
    return d;
  }

  function Ia(a, b, d) {
    function c(a, b, c) {
      c--;
      if (0 > c) return "...";
      var d = b.$$hashKey,
          f;

      if (H(a)) {
        f = 0;

        for (var g = a.length; f < g; f++) {
          b.push(e(a[f], c));
        }
      } else if (Nc(a)) for (f in a) {
        b[f] = e(a[f], c);
      } else if (a && "function" === typeof a.hasOwnProperty) for (f in a) {
        a.hasOwnProperty(f) && (b[f] = e(a[f], c));
      } else for (f in a) {
        ta.call(a, f) && (b[f] = e(a[f], c));
      }

      d ? b.$$hashKey = d : delete b.$$hashKey;
      return b;
    }

    function e(a, b) {
      if (!D(a)) return a;
      var d = g.indexOf(a);
      if (-1 !== d) return k[d];
      if ($a(a) || bb(a)) throw pa("cpws");
      var d = !1,
          e = f(a);
      void 0 === e && (e = H(a) ? [] : Object.create(Pc(a)), d = !0);
      g.push(a);
      k.push(e);
      return d ? c(a, e, b) : e;
    }

    function f(a) {
      switch (la.call(a)) {
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object Int32Array]":
        case "[object Float32Array]":
        case "[object Float64Array]":
        case "[object Uint8Array]":
        case "[object Uint8ClampedArray]":
        case "[object Uint16Array]":
        case "[object Uint32Array]":
          return new a.constructor(e(a.buffer), a.byteOffset, a.length);

        case "[object ArrayBuffer]":
          if (!a.slice) {
            var b = new ArrayBuffer(a.byteLength);
            new Uint8Array(b).set(new Uint8Array(a));
            return b;
          }

          return a.slice(0);

        case "[object Boolean]":
        case "[object Number]":
        case "[object String]":
        case "[object Date]":
          return new a.constructor(a.valueOf());

        case "[object RegExp]":
          return b = new RegExp(a.source, a.toString().match(/[^/]*$/)[0]), b.lastIndex = a.lastIndex, b;

        case "[object Blob]":
          return new a.constructor([a], {
            type: a.type
          });
      }

      if (B(a.cloneNode)) return a.cloneNode(!0);
    }

    var g = [],
        k = [];
    d = Xb(d) ? d : NaN;

    if (b) {
      if (ue(b) || "[object ArrayBuffer]" === la.call(b)) throw pa("cpta");
      if (a === b) throw pa("cpi");
      H(b) ? b.length = 0 : r(b, function (a, c) {
        "$$hashKey" !== c && delete b[c];
      });
      g.push(a);
      k.push(b);
      return c(a, b, d);
    }

    return e(a, d);
  }

  function dc(a, b) {
    return a === b || a !== a && b !== b;
  }

  function va(a, b) {
    if (a === b) return !0;
    if (null === a || null === b) return !1;
    if (a !== a && b !== b) return !0;

    var d = _typeof(a),
        c;

    if (d === _typeof(b) && "object" === d) if (H(a)) {
      if (!H(b)) return !1;

      if ((d = a.length) === b.length) {
        for (c = 0; c < d; c++) {
          if (!va(a[c], b[c])) return !1;
        }

        return !0;
      }
    } else {
      if (ha(a)) return ha(b) ? dc(a.getTime(), b.getTime()) : !1;
      if (ab(a)) return ab(b) ? a.toString() === b.toString() : !1;
      if (bb(a) || bb(b) || $a(a) || $a(b) || H(b) || ha(b) || ab(b)) return !1;
      d = T();

      for (c in a) {
        if ("$" !== c.charAt(0) && !B(a[c])) {
          if (!va(a[c], b[c])) return !1;
          d[c] = !0;
        }
      }

      for (c in b) {
        if (!(c in d) && "$" !== c.charAt(0) && w(b[c]) && !B(b[c])) return !1;
      }

      return !0;
    }
    return !1;
  }

  function db(a, b, d) {
    return a.concat(Ha.call(b, d));
  }

  function Va(a, b) {
    var d = 2 < arguments.length ? Ha.call(arguments, 2) : [];
    return !B(b) || b instanceof RegExp ? b : d.length ? function () {
      return arguments.length ? b.apply(a, db(d, arguments, 0)) : b.apply(a, d);
    } : function () {
      return arguments.length ? b.apply(a, arguments) : b.call(a);
    };
  }

  function Qc(a, b) {
    var d = b;
    "string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : $a(b) ? d = "$WINDOW" : b && C.document === b ? d = "$DOCUMENT" : bb(b) && (d = "$SCOPE");
    return d;
  }

  function eb(a, b) {
    if (!z(a)) return W(b) || (b = b ? 2 : null), JSON.stringify(a, Qc, b);
  }

  function Rc(a) {
    return A(a) ? JSON.parse(a) : a;
  }

  function ec(a, b) {
    a = a.replace(xe, "");
    var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;
    return X(d) ? b : d;
  }

  function Sc(a, b) {
    a = new Date(a.getTime());
    a.setMinutes(a.getMinutes() + b);
    return a;
  }

  function fc(a, b, d) {
    d = d ? -1 : 1;
    var c = a.getTimezoneOffset();
    b = ec(b, c);
    return Sc(a, d * (b - c));
  }

  function za(a) {
    a = x(a).clone().empty();
    var b = x("<div></div>").append(a).html();

    try {
      return a[0].nodeType === Pa ? K(b) : b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (a, b) {
        return "<" + K(b);
      });
    } catch (d) {
      return K(b);
    }
  }

  function Tc(a) {
    try {
      return decodeURIComponent(a);
    } catch (b) {}
  }

  function gc(a) {
    var b = {};
    r((a || "").split("&"), function (a) {
      var c, e, f;
      a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = Tc(e), w(e) && (f = w(f) ? Tc(f) : !0, ta.call(b, e) ? H(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f));
    });
    return b;
  }

  function ye(a) {
    var b = [];
    r(a, function (a, c) {
      H(a) ? r(a, function (a) {
        b.push(ba(c, !0) + (!0 === a ? "" : "=" + ba(a, !0)));
      }) : b.push(ba(c, !0) + (!0 === a ? "" : "=" + ba(a, !0)));
    });
    return b.length ? b.join("&") : "";
  }

  function hc(a) {
    return ba(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
  }

  function ba(a, b) {
    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
  }

  function ze(a, b) {
    var d,
        c,
        e = Qa.length;

    for (c = 0; c < e; ++c) {
      if (d = Qa[c] + b, A(d = a.getAttribute(d))) return d;
    }

    return null;
  }

  function Ae(a, b) {
    var d,
        c,
        e = {};
    r(Qa, function (b) {
      b += "app";
      !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
    });
    r(Qa, function (b) {
      b += "app";
      var e;
      !d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b));
    });
    d && (Be ? (e.strictDi = null !== ze(d, "strict-di"), b(d, c ? [c] : [], e)) : C.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."));
  }

  function Uc(a, b, d) {
    D(d) || (d = {});
    d = S({
      strictDi: !1
    }, d);

    var c = function c() {
      a = x(a);

      if (a.injector()) {
        var c = a[0] === C.document ? "document" : za(a);
        throw pa("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
      }

      b = b || [];
      b.unshift(["$provide", function (b) {
        b.value("$rootElement", a);
      }]);
      d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
        a.debugInfoEnabled(!0);
      }]);
      b.unshift("ng");
      c = fb(b, d.strictDi);
      c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
        a.$apply(function () {
          b.data("$injector", d);
          c(b)(a);
        });
      }]);
      return c;
    },
        e = /^NG_ENABLE_DEBUG_INFO!/,
        f = /^NG_DEFER_BOOTSTRAP!/;

    C && e.test(C.name) && (d.debugInfoEnabled = !0, C.name = C.name.replace(e, ""));
    if (C && !f.test(C.name)) return c();
    C.name = C.name.replace(f, "");

    ca.resumeBootstrap = function (a) {
      r(a, function (a) {
        b.push(a);
      });
      return c();
    };

    B(ca.resumeDeferredBootstrap) && ca.resumeDeferredBootstrap();
  }

  function Ce() {
    C.name = "NG_ENABLE_DEBUG_INFO!" + C.name;
    C.location.reload();
  }

  function De(a) {
    a = ca.element(a).injector();
    if (!a) throw pa("test");
    return a.get("$$testability");
  }

  function Vc(a, b) {
    b = b || "_";
    return a.replace(Ee, function (a, c) {
      return (c ? b : "") + a.toLowerCase();
    });
  }

  function Fe() {
    var a;

    if (!Wc) {
      var b = qb();
      (rb = z(b) ? C.jQuery : b ? C[b] : void 0) && rb.fn.on ? (x = rb, S(rb.fn, {
        scope: Wa.scope,
        isolateScope: Wa.isolateScope,
        controller: Wa.controller,
        injector: Wa.injector,
        inheritedData: Wa.inheritedData
      })) : x = Y;
      a = x.cleanData;

      x.cleanData = function (b) {
        for (var c, e = 0, f; null != (f = b[e]); e++) {
          (c = (x._data(f) || {}).events) && c.$destroy && x(f).triggerHandler("$destroy");
        }

        a(b);
      };

      ca.element = x;
      Wc = !0;
    }
  }

  function gb(a, b, d) {
    if (!a) throw pa("areq", b || "?", d || "required");
    return a;
  }

  function sb(a, b, d) {
    d && H(a) && (a = a[a.length - 1]);
    gb(B(a), b, "not a function, got " + (a && "object" === _typeof(a) ? a.constructor.name || "Object" : _typeof(a)));
    return a;
  }

  function Ja(a, b) {
    if ("hasOwnProperty" === a) throw pa("badname", b);
  }

  function Ge(a, b, d) {
    if (!b) return a;
    b = b.split(".");

    for (var c, e = a, f = b.length, g = 0; g < f; g++) {
      c = b[g], a && (a = (e = a)[c]);
    }

    return !d && B(a) ? Va(e, a) : a;
  }

  function tb(a) {
    for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++) {
      if (c || a[e] !== b) c || (c = x(Ha.call(a, 0, e))), c.push(b);
    }

    return c || a;
  }

  function T() {
    return Object.create(null);
  }

  function ic(a) {
    if (null == a) return "";

    switch (_typeof(a)) {
      case "string":
        break;

      case "number":
        a = "" + a;
        break;

      default:
        a = !bc(a) || H(a) || ha(a) ? eb(a) : a.toString();
    }

    return a;
  }

  function He(a) {
    function b(a, b, c) {
      return a[b] || (a[b] = c());
    }

    var d = F("$injector"),
        c = F("ng");
    a = b(a, "angular", Object);
    a.$$minErr = a.$$minErr || F;
    return b(a, "module", function () {
      var a = {};
      return function (f, g, k) {
        var h = {};
        if ("hasOwnProperty" === f) throw c("badname", "module");
        g && a.hasOwnProperty(f) && (a[f] = null);
        return b(a, f, function () {
          function a(b, c, d, f) {
            f || (f = e);
            return function () {
              f[d || "push"]([b, c, arguments]);
              return t;
            };
          }

          function b(a, c, d) {
            d || (d = e);
            return function (b, e) {
              e && B(e) && (e.$$moduleName = f);
              d.push([a, c, arguments]);
              return t;
            };
          }

          if (!g) throw d("nomod", f);
          var e = [],
              n = [],
              s = [],
              G = a("$injector", "invoke", "push", n),
              t = {
            _invokeQueue: e,
            _configBlocks: n,
            _runBlocks: s,
            info: function info(a) {
              if (w(a)) {
                if (!D(a)) throw c("aobj", "value");
                h = a;
                return this;
              }

              return h;
            },
            requires: g,
            name: f,
            provider: b("$provide", "provider"),
            factory: b("$provide", "factory"),
            service: b("$provide", "service"),
            value: a("$provide", "value"),
            constant: a("$provide", "constant", "unshift"),
            decorator: b("$provide", "decorator", n),
            animation: b("$animateProvider", "register"),
            filter: b("$filterProvider", "register"),
            controller: b("$controllerProvider", "register"),
            directive: b("$compileProvider", "directive"),
            component: b("$compileProvider", "component"),
            config: G,
            run: function run(a) {
              s.push(a);
              return this;
            }
          };
          k && G(k);
          return t;
        });
      };
    });
  }

  function ja(a, b) {
    if (H(a)) {
      b = b || [];

      for (var d = 0, c = a.length; d < c; d++) {
        b[d] = a[d];
      }
    } else if (D(a)) for (d in b = b || {}, a) {
      if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
    }

    return b || a;
  }

  function Ie(a, b) {
    var d = [];
    Xb(b) && (a = ca.copy(a, null, b));
    return JSON.stringify(a, function (a, b) {
      b = Qc(a, b);

      if (D(b)) {
        if (0 <= d.indexOf(b)) return "...";
        d.push(b);
      }

      return b;
    });
  }

  function Je(a) {
    S(a, {
      errorHandlingConfig: re,
      bootstrap: Uc,
      copy: Ia,
      extend: S,
      merge: te,
      equals: va,
      element: x,
      forEach: r,
      injector: fb,
      noop: E,
      bind: Va,
      toJson: eb,
      fromJson: Rc,
      identity: Ta,
      isUndefined: z,
      isDefined: w,
      isString: A,
      isFunction: B,
      isObject: D,
      isNumber: W,
      isElement: $b,
      isArray: H,
      version: Ke,
      isDate: ha,
      callbacks: {
        $$counter: 0
      },
      getTestability: De,
      reloadWithDebugInfo: Ce,
      $$minErr: F,
      $$csp: Aa,
      $$encodeUriSegment: hc,
      $$encodeUriQuery: ba,
      $$lowercase: K,
      $$stringify: ic,
      $$uppercase: ub
    });
    kc = He(C);
    kc("ng", ["ngLocale"], ["$provide", function (a) {
      a.provider({
        $$sanitizeUri: Le
      });
      a.provider("$compile", Xc).directive({
        a: Me,
        input: Yc,
        textarea: Yc,
        form: Ne,
        script: Oe,
        select: Pe,
        option: Qe,
        ngBind: Re,
        ngBindHtml: Se,
        ngBindTemplate: Te,
        ngClass: Ue,
        ngClassEven: Ve,
        ngClassOdd: We,
        ngCloak: Xe,
        ngController: Ye,
        ngForm: Ze,
        ngHide: $e,
        ngIf: af,
        ngInclude: bf,
        ngInit: cf,
        ngNonBindable: df,
        ngPluralize: ef,
        ngRef: ff,
        ngRepeat: gf,
        ngShow: hf,
        ngStyle: jf,
        ngSwitch: kf,
        ngSwitchWhen: lf,
        ngSwitchDefault: mf,
        ngOptions: nf,
        ngTransclude: of,
        ngModel: pf,
        ngList: qf,
        ngChange: rf,
        pattern: Zc,
        ngPattern: Zc,
        required: $c,
        ngRequired: $c,
        minlength: ad,
        ngMinlength: ad,
        maxlength: bd,
        ngMaxlength: bd,
        ngValue: sf,
        ngModelOptions: tf
      }).directive({
        ngInclude: uf,
        input: vf
      }).directive(vb).directive(cd);
      a.provider({
        $anchorScroll: wf,
        $animate: xf,
        $animateCss: yf,
        $$animateJs: zf,
        $$animateQueue: Af,
        $$AnimateRunner: Bf,
        $$animateAsyncRun: Cf,
        $browser: Df,
        $cacheFactory: Ef,
        $controller: Ff,
        $document: Gf,
        $$isDocumentHidden: Hf,
        $exceptionHandler: If,
        $filter: dd,
        $$forceReflow: Jf,
        $interpolate: Kf,
        $interval: Lf,
        $$intervalFactory: Mf,
        $http: Nf,
        $httpParamSerializer: Of,
        $httpParamSerializerJQLike: Pf,
        $httpBackend: Qf,
        $xhrFactory: Rf,
        $jsonpCallbacks: Sf,
        $location: Tf,
        $log: Uf,
        $parse: Vf,
        $rootScope: Wf,
        $q: Xf,
        $$q: Yf,
        $sce: Zf,
        $sceDelegate: $f,
        $sniffer: ag,
        $$taskTrackerFactory: bg,
        $templateCache: cg,
        $templateRequest: dg,
        $$testability: eg,
        $timeout: fg,
        $window: gg,
        $$rAF: hg,
        $$jqLite: ig,
        $$Map: jg,
        $$cookieReader: kg
      });
    }]).info({
      angularVersion: "1.7.8"
    });
  }

  function wb(a, b) {
    return b.toUpperCase();
  }

  function xb(a) {
    return a.replace(lg, wb);
  }

  function lc(a) {
    a = a.nodeType;
    return 1 === a || !a || 9 === a;
  }

  function ed(a, b) {
    var d,
        c,
        e = b.createDocumentFragment(),
        f = [];

    if (mc.test(a)) {
      d = e.appendChild(b.createElement("div"));
      c = (mg.exec(a) || ["", ""])[1].toLowerCase();
      c = oa[c] || oa._default;
      d.innerHTML = c[1] + a.replace(ng, "<$1></$2>") + c[2];

      for (c = c[0]; c--;) {
        d = d.lastChild;
      }

      f = db(f, d.childNodes);
      d = e.firstChild;
      d.textContent = "";
    } else f.push(b.createTextNode(a));

    e.textContent = "";
    e.innerHTML = "";
    r(f, function (a) {
      e.appendChild(a);
    });
    return e;
  }

  function Y(a) {
    if (a instanceof Y) return a;
    var b;
    A(a) && (a = U(a), b = !0);

    if (!(this instanceof Y)) {
      if (b && "<" !== a.charAt(0)) throw nc("nosel");
      return new Y(a);
    }

    if (b) {
      b = C.document;
      var d;
      a = (d = og.exec(a)) ? [b.createElement(d[1])] : (d = ed(a, b)) ? d.childNodes : [];
      oc(this, a);
    } else B(a) ? fd(a) : oc(this, a);
  }

  function pc(a) {
    return a.cloneNode(!0);
  }

  function yb(a, b) {
    !b && lc(a) && x.cleanData([a]);
    a.querySelectorAll && x.cleanData(a.querySelectorAll("*"));
  }

  function gd(a) {
    for (var b in a) {
      return !1;
    }

    return !0;
  }

  function hd(a) {
    var b = a.ng339,
        d = b && Ka[b],
        c = d && d.events,
        d = d && d.data;
    d && !gd(d) || c && !gd(c) || (delete Ka[b], a.ng339 = void 0);
  }

  function id(a, b, d, c) {
    if (w(c)) throw nc("offargs");
    var e = (c = zb(a)) && c.events,
        f = c && c.handle;

    if (f) {
      if (b) {
        var g = function g(b) {
          var c = e[b];
          w(d) && cb(c || [], d);
          w(d) && c && 0 < c.length || (a.removeEventListener(b, f), delete e[b]);
        };

        r(b.split(" "), function (a) {
          g(a);
          Ab[a] && g(Ab[a]);
        });
      } else for (b in e) {
        "$destroy" !== b && a.removeEventListener(b, f), delete e[b];
      }

      hd(a);
    }
  }

  function qc(a, b) {
    var d = a.ng339;
    if (d = d && Ka[d]) b ? delete d.data[b] : d.data = {}, hd(a);
  }

  function zb(a, b) {
    var d = a.ng339,
        d = d && Ka[d];
    b && !d && (a.ng339 = d = ++pg, d = Ka[d] = {
      events: {},
      data: {},
      handle: void 0
    });
    return d;
  }

  function rc(a, b, d) {
    if (lc(a)) {
      var c,
          e = w(d),
          f = !e && b && !D(b),
          g = !b;
      a = (a = zb(a, !f)) && a.data;
      if (e) a[xb(b)] = d;else {
        if (g) return a;
        if (f) return a && a[xb(b)];

        for (c in b) {
          a[xb(c)] = b[c];
        }
      }
    }
  }

  function Bb(a, b) {
    return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
  }

  function Cb(a, b) {
    if (b && a.setAttribute) {
      var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
          c = d;
      r(b.split(" "), function (a) {
        a = U(a);
        c = c.replace(" " + a + " ", " ");
      });
      c !== d && a.setAttribute("class", U(c));
    }
  }

  function Db(a, b) {
    if (b && a.setAttribute) {
      var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
          c = d;
      r(b.split(" "), function (a) {
        a = U(a);
        -1 === c.indexOf(" " + a + " ") && (c += a + " ");
      });
      c !== d && a.setAttribute("class", U(c));
    }
  }

  function oc(a, b) {
    if (b) if (b.nodeType) a[a.length++] = b;else {
      var d = b.length;

      if ("number" === typeof d && b.window !== b) {
        if (d) for (var c = 0; c < d; c++) {
          a[a.length++] = b[c];
        }
      } else a[a.length++] = b;
    }
  }

  function jd(a, b) {
    return Eb(a, "$" + (b || "ngController") + "Controller");
  }

  function Eb(a, b, d) {
    9 === a.nodeType && (a = a.documentElement);

    for (b = H(b) ? b : [b]; a;) {
      for (var c = 0, e = b.length; c < e; c++) {
        if (w(d = x.data(a, b[c]))) return d;
      }

      a = a.parentNode || 11 === a.nodeType && a.host;
    }
  }

  function kd(a) {
    for (yb(a, !0); a.firstChild;) {
      a.removeChild(a.firstChild);
    }
  }

  function Fb(a, b) {
    b || yb(a);
    var d = a.parentNode;
    d && d.removeChild(a);
  }

  function qg(a, b) {
    b = b || C;
    if ("complete" === b.document.readyState) b.setTimeout(a);else x(b).on("load", a);
  }

  function fd(a) {
    function b() {
      C.document.removeEventListener("DOMContentLoaded", b);
      C.removeEventListener("load", b);
      a();
    }

    "complete" === C.document.readyState ? C.setTimeout(a) : (C.document.addEventListener("DOMContentLoaded", b), C.addEventListener("load", b));
  }

  function ld(a, b) {
    var d = Gb[b.toLowerCase()];
    return d && md[ua(a)] && d;
  }

  function rg(a, b) {
    var d = function d(c, _d) {
      c.isDefaultPrevented = function () {
        return c.defaultPrevented;
      };

      var f = b[_d || c.type],
          g = f ? f.length : 0;

      if (g) {
        if (z(c.immediatePropagationStopped)) {
          var k = c.stopImmediatePropagation;

          c.stopImmediatePropagation = function () {
            c.immediatePropagationStopped = !0;
            c.stopPropagation && c.stopPropagation();
            k && k.call(c);
          };
        }

        c.isImmediatePropagationStopped = function () {
          return !0 === c.immediatePropagationStopped;
        };

        var h = f.specialHandlerWrapper || sg;
        1 < g && (f = ja(f));

        for (var l = 0; l < g; l++) {
          c.isImmediatePropagationStopped() || h(a, c, f[l]);
        }
      }
    };

    d.elem = a;
    return d;
  }

  function sg(a, b, d) {
    d.call(a, b);
  }

  function tg(a, b, d) {
    var c = b.relatedTarget;
    c && (c === a || ug.call(a, c)) || d.call(a, b);
  }

  function ig() {
    this.$get = function () {
      return S(Y, {
        hasClass: function hasClass(a, b) {
          a.attr && (a = a[0]);
          return Bb(a, b);
        },
        addClass: function addClass(a, b) {
          a.attr && (a = a[0]);
          return Db(a, b);
        },
        removeClass: function removeClass(a, b) {
          a.attr && (a = a[0]);
          return Cb(a, b);
        }
      });
    };
  }

  function La(a, b) {
    var d = a && a.$$hashKey;
    if (d) return "function" === typeof d && (d = a.$$hashKey()), d;
    d = _typeof(a);
    return d = "function" === d || "object" === d && null !== a ? a.$$hashKey = d + ":" + (b || se)() : d + ":" + a;
  }

  function nd() {
    this._keys = [];
    this._values = [];
    this._lastKey = NaN;
    this._lastIndex = -1;
  }

  function od(a) {
    a = Function.prototype.toString.call(a).replace(vg, "");
    return a.match(wg) || a.match(xg);
  }

  function yg(a) {
    return (a = od(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
  }

  function fb(a, b) {
    function d(a) {
      return function (b, c) {
        if (D(b)) r(b, Yb(a));else return a(b, c);
      };
    }

    function c(a, b) {
      Ja(a, "service");
      if (B(b) || H(b)) b = n.instantiate(b);
      if (!b.$get) throw Ba("pget", a);
      return p[a + "Provider"] = b;
    }

    function e(a, b) {
      return function () {
        var c = t.invoke(b, this);
        if (z(c)) throw Ba("undef", a);
        return c;
      };
    }

    function f(a, b, d) {
      return c(a, {
        $get: !1 !== d ? e(a, b) : b
      });
    }

    function g(a) {
      gb(z(a) || H(a), "modulesToLoad", "not an array");
      var b = [],
          c;
      r(a, function (a) {
        function d(a) {
          var b, c;
          b = 0;

          for (c = a.length; b < c; b++) {
            var e = a[b],
                f = n.get(e[0]);
            f[e[1]].apply(f, e[2]);
          }
        }

        if (!m.get(a)) {
          m.set(a, !0);

          try {
            A(a) ? (c = kc(a), t.modules[a] = c, b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : B(a) ? b.push(n.invoke(a)) : H(a) ? b.push(n.invoke(a)) : sb(a, "module");
          } catch (e) {
            throw H(a) && (a = a[a.length - 1]), e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ba("modulerr", a, e.stack || e.message || e);
          }
        }
      });
      return b;
    }

    function k(a, c) {
      function d(b, e) {
        if (a.hasOwnProperty(b)) {
          if (a[b] === h) throw Ba("cdep", b + " <- " + l.join(" <- "));
          return a[b];
        }

        try {
          return l.unshift(b), a[b] = h, a[b] = c(b, e), a[b];
        } catch (f) {
          throw a[b] === h && delete a[b], f;
        } finally {
          l.shift();
        }
      }

      function e(a, c, f) {
        var g = [];
        a = fb.$$annotate(a, b, f);

        for (var h = 0, k = a.length; h < k; h++) {
          var l = a[h];
          if ("string" !== typeof l) throw Ba("itkn", l);
          g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f));
        }

        return g;
      }

      return {
        invoke: function invoke(a, b, c, d) {
          "string" === typeof c && (d = c, c = null);
          c = e(a, c, d);
          H(a) && (a = a[a.length - 1]);
          d = a;
          if (Ca || "function" !== typeof d) d = !1;else {
            var f = d.$$ngIsClass;
            Ga(f) || (f = d.$$ngIsClass = /^class\b/.test(Function.prototype.toString.call(d)));
            d = f;
          }
          return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))()) : a.apply(b, c);
        },
        instantiate: function instantiate(a, b, c) {
          var d = H(a) ? a[a.length - 1] : a;
          a = e(a, b, c);
          a.unshift(null);
          return new (Function.prototype.bind.apply(d, a))();
        },
        get: d,
        annotate: fb.$$annotate,
        has: function has(b) {
          return p.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b);
        }
      };
    }

    b = !0 === b;
    var h = {},
        l = [],
        m = new Hb(),
        p = {
      $provide: {
        provider: d(c),
        factory: d(f),
        service: d(function (a, b) {
          return f(a, ["$injector", function (a) {
            return a.instantiate(b);
          }]);
        }),
        value: d(function (a, b) {
          return f(a, ia(b), !1);
        }),
        constant: d(function (a, b) {
          Ja(a, "constant");
          p[a] = b;
          s[a] = b;
        }),
        decorator: function decorator(a, b) {
          var c = n.get(a + "Provider"),
              d = c.$get;

          c.$get = function () {
            var a = t.invoke(d, c);
            return t.invoke(b, null, {
              $delegate: a
            });
          };
        }
      }
    },
        n = p.$injector = k(p, function (a, b) {
      ca.isString(b) && l.push(b);
      throw Ba("unpr", l.join(" <- "));
    }),
        s = {},
        G = k(s, function (a, b) {
      var c = n.get(a + "Provider", b);
      return t.invoke(c.$get, c, void 0, a);
    }),
        t = G;
    p.$injectorProvider = {
      $get: ia(G)
    };
    t.modules = n.modules = T();
    var N = g(a),
        t = G.get("$injector");
    t.strictDi = b;
    r(N, function (a) {
      a && t.invoke(a);
    });

    t.loadNewModules = function (a) {
      r(g(a), function (a) {
        a && t.invoke(a);
      });
    };

    return t;
  }

  function wf() {
    var a = !0;

    this.disableAutoScrolling = function () {
      a = !1;
    };

    this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
      function e(a) {
        var b = null;
        Array.prototype.some.call(a, function (a) {
          if ("a" === ua(a)) return b = a, !0;
        });
        return b;
      }

      function f(a) {
        if (a) {
          a.scrollIntoView();
          var c;
          c = g.yOffset;
          B(c) ? c = c() : $b(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : W(c) || (c = 0);
          c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
        } else b.scrollTo(0, 0);
      }

      function g(a) {
        a = A(a) ? a : W(a) ? a.toString() : d.hash();
        var b;
        a ? (b = k.getElementById(a)) ? f(b) : (b = e(k.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
      }

      var k = b.document;
      a && c.$watch(function () {
        return d.hash();
      }, function (a, b) {
        a === b && "" === a || qg(function () {
          c.$evalAsync(g);
        });
      });
      return g;
    }];
  }

  function hb(a, b) {
    if (!a && !b) return "";
    if (!a) return b;
    if (!b) return a;
    H(a) && (a = a.join(" "));
    H(b) && (b = b.join(" "));
    return a + " " + b;
  }

  function zg(a) {
    A(a) && (a = a.split(" "));
    var b = T();
    r(a, function (a) {
      a.length && (b[a] = !0);
    });
    return b;
  }

  function ra(a) {
    return D(a) ? a : {};
  }

  function Ag(a, b, d, c, e) {
    function f() {
      qa = null;
      k();
    }

    function g() {
      t = y();
      t = z(t) ? null : t;
      va(t, P) && (t = P);
      N = P = t;
    }

    function k() {
      var a = N;
      g();
      if (v !== h.url() || a !== t) v = h.url(), N = t, r(J, function (a) {
        a(h.url(), t);
      });
    }

    var h = this,
        l = a.location,
        m = a.history,
        p = a.setTimeout,
        n = a.clearTimeout,
        s = {},
        G = e(d);
    h.isMock = !1;
    h.$$completeOutstandingRequest = G.completeTask;
    h.$$incOutstandingRequestCount = G.incTaskCount;
    h.notifyWhenNoOutstandingRequests = G.notifyWhenNoPendingTasks;
    var t,
        N,
        v = l.href,
        jc = b.find("base"),
        qa = null,
        y = c.history ? function () {
      try {
        return m.state;
      } catch (a) {}
    } : E;
    g();

    h.url = function (b, d, e) {
      z(e) && (e = null);
      l !== a.location && (l = a.location);
      m !== a.history && (m = a.history);

      if (b) {
        var f = N === e;
        b = ga(b).href;
        if (v === b && (!c.history || f)) return h;
        var k = v && Da(v) === Da(b);
        v = b;
        N = e;
        !c.history || k && f ? (k || (qa = b), d ? l.replace(b) : k ? (d = l, e = b, f = e.indexOf("#"), e = -1 === f ? "" : e.substr(f), d.hash = e) : l.href = b, l.href !== b && (qa = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), g());
        qa && (qa = b);
        return h;
      }

      return (qa || l.href).replace(/#$/, "");
    };

    h.state = function () {
      return t;
    };

    var J = [],
        I = !1,
        P = null;

    h.onUrlChange = function (b) {
      if (!I) {
        if (c.history) x(a).on("popstate", f);
        x(a).on("hashchange", f);
        I = !0;
      }

      J.push(b);
      return b;
    };

    h.$$applicationDestroyed = function () {
      x(a).off("hashchange popstate", f);
    };

    h.$$checkUrlChange = k;

    h.baseHref = function () {
      var a = jc.attr("href");
      return a ? a.replace(/^(https?:)?\/\/[^/]*/, "") : "";
    };

    h.defer = function (a, b, c) {
      var d;
      b = b || 0;
      c = c || G.DEFAULT_TASK_TYPE;
      G.incTaskCount(c);
      d = p(function () {
        delete s[d];
        G.completeTask(a, c);
      }, b);
      s[d] = c;
      return d;
    };

    h.defer.cancel = function (a) {
      if (s.hasOwnProperty(a)) {
        var b = s[a];
        delete s[a];
        n(a);
        G.completeTask(E, b);
        return !0;
      }

      return !1;
    };
  }

  function Df() {
    this.$get = ["$window", "$log", "$sniffer", "$document", "$$taskTrackerFactory", function (a, b, d, c, e) {
      return new Ag(a, c, b, d, e);
    }];
  }

  function Ef() {
    this.$get = function () {
      function a(a, c) {
        function e(a) {
          a !== p && (n ? n === a && (n = a.n) : n = a, f(a.n, a.p), f(a, p), p = a, p.n = null);
        }

        function f(a, b) {
          a !== b && (a && (a.p = b), b && (b.n = a));
        }

        if (a in b) throw F("$cacheFactory")("iid", a);
        var g = 0,
            k = S({}, c, {
          id: a
        }),
            h = T(),
            l = c && c.capacity || Number.MAX_VALUE,
            m = T(),
            p = null,
            n = null;
        return b[a] = {
          put: function put(a, b) {
            if (!z(b)) {
              if (l < Number.MAX_VALUE) {
                var c = m[a] || (m[a] = {
                  key: a
                });
                e(c);
              }

              a in h || g++;
              h[a] = b;
              g > l && this.remove(n.key);
              return b;
            }
          },
          get: function get(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];
              if (!b) return;
              e(b);
            }

            return h[a];
          },
          remove: function remove(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];
              if (!b) return;
              b === p && (p = b.p);
              b === n && (n = b.n);
              f(b.n, b.p);
              delete m[a];
            }

            a in h && (delete h[a], g--);
          },
          removeAll: function removeAll() {
            h = T();
            g = 0;
            m = T();
            p = n = null;
          },
          destroy: function destroy() {
            m = k = h = null;
            delete b[a];
          },
          info: function info() {
            return S({}, k, {
              size: g
            });
          }
        };
      }

      var b = {};

      a.info = function () {
        var a = {};
        r(b, function (b, e) {
          a[e] = b.info();
        });
        return a;
      };

      a.get = function (a) {
        return b[a];
      };

      return a;
    };
  }

  function cg() {
    this.$get = ["$cacheFactory", function (a) {
      return a("templates");
    }];
  }

  function Xc(a, b) {
    function d(a, b, c) {
      var d = /^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,
          e = T();
      r(a, function (a, f) {
        a = a.trim();
        if (a in p) e[f] = p[a];else {
          var g = a.match(d);
          if (!g) throw $("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
          e[f] = {
            mode: g[1][0],
            collection: "*" === g[2],
            optional: "?" === g[3],
            attrName: g[4] || f
          };
          g[4] && (p[a] = e[f]);
        }
      });
      return e;
    }

    function c(a) {
      var b = a.charAt(0);
      if (!b || b !== K(b)) throw $("baddir", a);
      if (a !== a.trim()) throw $("baddir", a);
    }

    function e(a) {
      var b = a.require || a.controller && a.name;
      !H(b) && D(b) && r(b, function (a, c) {
        var d = a.match(l);
        a.substring(d[0].length) || (b[c] = d[0] + c);
      });
      return b;
    }

    var f = {},
        g = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
        k = /(([\w-]+)(?::([^;]+))?;?)/,
        h = we("ngSrc,ngSrcset,src,srcset"),
        l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        m = /^(on[a-z]+|formaction)$/,
        p = T();

    this.directive = function qa(b, d) {
      gb(b, "name");
      Ja(b, "directive");
      A(b) ? (c(b), gb(d, "directiveFactory"), f.hasOwnProperty(b) || (f[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
        var d = [];
        r(f[b], function (f, g) {
          try {
            var h = a.invoke(f);
            B(h) ? h = {
              compile: ia(h)
            } : !h.compile && h.link && (h.compile = ia(h.link));
            h.priority = h.priority || 0;
            h.index = g;
            h.name = h.name || b;
            h.require = e(h);
            var k = h,
                l = h.restrict;
            if (l && (!A(l) || !/[EACM]/.test(l))) throw $("badrestrict", l, b);
            k.restrict = l || "EA";
            h.$$moduleName = f.$$moduleName;
            d.push(h);
          } catch (m) {
            c(m);
          }
        });
        return d;
      }])), f[b].push(d)) : r(b, Yb(qa));
      return this;
    };

    this.component = function y(a, b) {
      function c(a) {
        function e(b) {
          return B(b) || H(b) ? function (c, d) {
            return a.invoke(b, this, {
              $element: c,
              $attrs: d
            });
          } : b;
        }

        var f = b.template || b.templateUrl ? b.template : "",
            g = {
          controller: d,
          controllerAs: Bg(b.controller) || b.controllerAs || "$ctrl",
          template: e(f),
          templateUrl: e(b.templateUrl),
          transclude: b.transclude,
          scope: {},
          bindToController: b.bindings || {},
          restrict: "E",
          require: b.require
        };
        r(b, function (a, b) {
          "$" === b.charAt(0) && (g[b] = a);
        });
        return g;
      }

      if (!A(a)) return r(a, Yb(Va(this, y))), this;

      var d = b.controller || function () {};

      r(b, function (a, b) {
        "$" === b.charAt(0) && (c[b] = a, B(d) && (d[b] = a));
      });
      c.$inject = ["$injector"];
      return this.directive(a, c);
    };

    this.aHrefSanitizationWhitelist = function (a) {
      return w(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
    };

    this.imgSrcSanitizationWhitelist = function (a) {
      return w(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
    };

    var n = !0;

    this.debugInfoEnabled = function (a) {
      return w(a) ? (n = a, this) : n;
    };

    var s = !1;

    this.strictComponentBindingsEnabled = function (a) {
      return w(a) ? (s = a, this) : s;
    };

    var G = 10;

    this.onChangesTtl = function (a) {
      return arguments.length ? (G = a, this) : G;
    };

    var t = !0;

    this.commentDirectivesEnabled = function (a) {
      return arguments.length ? (t = a, this) : t;
    };

    var N = !0;

    this.cssClassDirectivesEnabled = function (a) {
      return arguments.length ? (N = a, this) : N;
    };

    var v = T();

    this.addPropertySecurityContext = function (a, b, c) {
      var d = a.toLowerCase() + "|" + b.toLowerCase();
      if (d in v && v[d] !== c) throw $("ctxoverride", a, b, v[d], c);
      v[d] = c;
      return this;
    };

    (function () {
      function a(b, c) {
        r(c, function (a) {
          v[a.toLowerCase()] = b;
        });
      }

      a(V.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]);
      a(V.CSS, ["*|style"]);
      a(V.URL, "area|href area|ping a|href a|ping blockquote|cite body|background del|cite input|src ins|cite q|cite".split(" "));
      a(V.MEDIA_URL, "audio|src img|src img|srcset source|src source|srcset track|src video|src video|poster".split(" "));
      a(V.RESOURCE_URL, "*|formAction applet|code applet|codebase base|href embed|src frame|src form|action head|profile html|manifest iframe|src link|href media|src object|codebase object|data script|src".split(" "));
    })();

    this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", function (a, b, c, e, p, M, L, u, R) {
      function q() {
        try {
          if (! --Ja) throw Ua = void 0, $("infchng", G);
          L.$apply(function () {
            for (var a = 0, b = Ua.length; a < b; ++a) {
              try {
                Ua[a]();
              } catch (d) {
                c(d);
              }
            }

            Ua = void 0;
          });
        } finally {
          Ja++;
        }
      }

      function ma(a, b) {
        if (!a) return a;
        if (!A(a)) throw $("srcset", b, a.toString());

        for (var c = "", d = U(a), e = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, e = /\s/.test(d) ? e : /(,)/, d = d.split(e), e = Math.floor(d.length / 2), f = 0; f < e; f++) {
          var g = 2 * f,
              c = c + u.getTrustedMediaUrl(U(d[g])),
              c = c + (" " + U(d[g + 1]));
        }

        d = U(d[2 * f]).split(/\s/);
        c += u.getTrustedMediaUrl(U(d[0]));
        2 === d.length && (c += " " + U(d[1]));
        return c;
      }

      function w(a, b) {
        if (b) {
          var c = Object.keys(b),
              d,
              e,
              f;
          d = 0;

          for (e = c.length; d < e; d++) {
            f = c[d], this[f] = b[f];
          }
        } else this.$attr = {};

        this.$$element = a;
      }

      function O(a, b, c) {
        Fa.innerHTML = "<span " + b + ">";
        b = Fa.firstChild.attributes;
        var d = b[0];
        b.removeNamedItem(d.name);
        d.value = c;
        a.attributes.setNamedItem(d);
      }

      function sa(a, b) {
        try {
          a.addClass(b);
        } catch (c) {}
      }

      function da(a, b, c, d, e) {
        a instanceof x || (a = x(a));
        var f = Xa(a, b, a, c, d, e);
        da.$$addScopeClass(a);
        var g = null;
        return function (b, c, d) {
          if (!a) throw $("multilink");
          gb(b, "scope");
          e && e.needsNewScope && (b = b.$parent.$new());
          d = d || {};
          var h = d.parentBoundTranscludeFn,
              k = d.transcludeControllers;
          d = d.futureParentElement;
          h && h.$$boundTransclude && (h = h.$$boundTransclude);
          g || (g = (d = d && d[0]) ? "foreignobject" !== ua(d) && la.call(d).match(/SVG/) ? "svg" : "html" : "html");
          d = "html" !== g ? x(ja(g, x("<div></div>").append(a).html())) : c ? Wa.clone.call(a) : a;
          if (k) for (var l in k) {
            d.data("$" + l + "Controller", k[l].instance);
          }
          da.$$addScopeInfo(d, b);
          c && c(d, b);
          f && f(b, d, d, h);
          c || (a = f = null);
          return d;
        };
      }

      function Xa(a, b, c, d, e, f) {
        function g(a, c, d, e) {
          var f, k, l, m, p, I, t;
          if (n) for (t = Array(c.length), m = 0; m < h.length; m += 3) {
            f = h[m], t[f] = c[f];
          } else t = c;
          m = 0;

          for (p = h.length; m < p;) {
            k = t[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), da.$$addScopeInfo(x(k), l)) : l = a, I = c.transcludeOnThisElement ? ka(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? ka(a, b) : null, c(f, l, k, d, I)) : f && f(a, k.childNodes, void 0, e);
          }
        }

        for (var h = [], k = H(a) || a instanceof x, l, m, p, I, n, t = 0; t < a.length; t++) {
          l = new w();
          11 === Ca && ib(a, t, k);
          m = sc(a[t], [], l, 0 === t ? d : void 0, e);
          (f = m.length ? aa(m, a[t], l, b, c, null, [], [], f) : null) && f.scope && da.$$addScopeClass(l.$$element);
          l = f && f.terminal || !(p = a[t].childNodes) || !p.length ? null : Xa(p, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
          if (f || l) h.push(t, f, l), I = !0, n = n || f;
          f = null;
        }

        return I ? g : null;
      }

      function ib(a, b, c) {
        var d = a[b],
            e = d.parentNode,
            f;
        if (d.nodeType === Pa) for (;;) {
          f = e ? d.nextSibling : a[b + 1];
          if (!f || f.nodeType !== Pa) break;
          d.nodeValue += f.nodeValue;
          f.parentNode && f.parentNode.removeChild(f);
          c && f === a[b + 1] && a.splice(b + 1, 1);
        }
      }

      function ka(a, b, c) {
        function d(e, f, g, h, k) {
          e || (e = a.$new(!1, k), e.$$transcluded = !0);
          return b(e, f, {
            parentBoundTranscludeFn: c,
            transcludeControllers: g,
            futureParentElement: h
          });
        }

        var e = d.$$slots = T(),
            f;

        for (f in b.$$slots) {
          e[f] = b.$$slots[f] ? ka(a, b.$$slots[f], c) : null;
        }

        return d;
      }

      function sc(a, b, d, e, f) {
        var g = d.$attr,
            h;

        switch (a.nodeType) {
          case 1:
            h = ua(a);
            X(b, wa(h), "E", e, f);

            for (var l, m, n, t, J, s = a.attributes, v = 0, G = s && s.length; v < G; v++) {
              var P = !1,
                  N = !1,
                  r = !1,
                  y = !1,
                  u = !1,
                  M;
              l = s[v];
              m = l.name;
              t = l.value;
              n = wa(m.toLowerCase());
              (J = n.match(Ra)) ? (r = "Attr" === J[1], y = "Prop" === J[1], u = "On" === J[1], m = m.replace(pd, "").toLowerCase().substr(4 + J[1].length).replace(/_(.)/g, function (a, b) {
                return b.toUpperCase();
              })) : (M = n.match(Sa)) && ca(M[1]) && (P = m, N = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6));
              if (y || u) d[n] = t, g[n] = l.name, y ? Ea(a, b, n, m) : b.push(qd(p, L, c, n, m, !1));else {
                n = wa(m.toLowerCase());
                g[n] = m;
                if (r || !d.hasOwnProperty(n)) d[n] = t, ld(a, n) && (d[n] = !0);
                Ia(a, b, t, n, r);
                X(b, n, "A", e, f, P, N);
              }
            }

            "input" === h && "hidden" === a.getAttribute("type") && a.setAttribute("autocomplete", "off");
            if (!Qa) break;
            g = a.className;
            D(g) && (g = g.animVal);
            if (A(g) && "" !== g) for (; a = k.exec(g);) {
              n = wa(a[2]), X(b, n, "C", e, f) && (d[n] = U(a[3])), g = g.substr(a.index + a[0].length);
            }
            break;

          case Pa:
            na(b, a.nodeValue);
            break;

          case 8:
            if (!Oa) break;
            F(a, b, d, e, f);
        }

        b.sort(ia);
        return b;
      }

      function F(a, b, c, d, e) {
        try {
          var f = g.exec(a.nodeValue);

          if (f) {
            var h = wa(f[1]);
            X(b, h, "M", d, e) && (c[h] = U(f[2]));
          }
        } catch (k) {}
      }

      function V(a, b, c) {
        var d = [],
            e = 0;

        if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a) throw $("uterdir", b, c);
            1 === a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
            d.push(a);
            a = a.nextSibling;
          } while (0 < e);
        } else d.push(a);

        return x(d);
      }

      function Y(a, b, c) {
        return function (d, e, f, g, h) {
          e = V(e[0], b, c);
          return a(d, e, f, g, h);
        };
      }

      function Z(a, b, c, d, e, f) {
        var g;
        return a ? da(b, c, d, e, f) : function () {
          g || (g = da(b, c, d, e, f), b = c = f = null);
          return g.apply(this, arguments);
        };
      }

      function aa(a, b, d, e, f, g, h, k, l) {
        function m(a, b, c, d) {
          if (a) {
            c && (a = Y(a, c, d));
            a.require = u.require;
            a.directiveName = Q;
            if (s === u || u.$$isolateScope) a = Aa(a, {
              isolateScope: !0
            });
            h.push(a);
          }

          if (b) {
            c && (b = Y(b, c, d));
            b.require = u.require;
            b.directiveName = Q;
            if (s === u || u.$$isolateScope) b = Aa(b, {
              isolateScope: !0
            });
            k.push(b);
          }
        }

        function p(a, e, f, g, l) {
          function m(a, b, c, d) {
            var e;
            bb(a) || (d = c, c = b, b = a, a = void 0);
            N && (e = P);
            c || (c = N ? Q.parent() : Q);

            if (d) {
              var f = l.$$slots[d];
              if (f) return f(a, b, e, c, R);
              if (z(f)) throw $("noslot", d, za(Q));
            } else return l(a, b, e, c, R);
          }

          var n, u, L, y, G, P, M, Q;
          b === f ? (g = d, Q = d.$$element) : (Q = x(f), g = new w(Q, d));
          G = e;
          s ? y = e.$new(!0) : t && (G = e.$parent);
          l && (M = m, M.$$boundTransclude = l, M.isSlotFilled = function (a) {
            return !!l.$$slots[a];
          });
          J && (P = ea(Q, g, M, J, y, e, s));
          s && (da.$$addScopeInfo(Q, y, !0, !(v && (v === s || v === s.$$originalDirective))), da.$$addScopeClass(Q, !0), y.$$isolateBindings = s.$$isolateBindings, u = Da(e, g, y, y.$$isolateBindings, s), u.removeWatches && y.$on("$destroy", u.removeWatches));

          for (n in P) {
            u = J[n];
            L = P[n];
            var Cg = u.$$bindings.bindToController;
            L.instance = L();
            Q.data("$" + u.name + "Controller", L.instance);
            L.bindingInfo = Da(G, g, L.instance, Cg, u);
          }

          r(J, function (a, b) {
            var c = a.require;
            a.bindToController && !H(c) && D(c) && S(P[b].instance, W(b, c, Q, P));
          });
          r(P, function (a) {
            var b = a.instance;
            if (B(b.$onChanges)) try {
              b.$onChanges(a.bindingInfo.initialChanges);
            } catch (d) {
              c(d);
            }
            if (B(b.$onInit)) try {
              b.$onInit();
            } catch (e) {
              c(e);
            }
            B(b.$doCheck) && (G.$watch(function () {
              b.$doCheck();
            }), b.$doCheck());
            B(b.$onDestroy) && G.$on("$destroy", function () {
              b.$onDestroy();
            });
          });
          n = 0;

          for (u = h.length; n < u; n++) {
            L = h[n], Ba(L, L.isolateScope ? y : e, Q, g, L.require && W(L.directiveName, L.require, Q, P), M);
          }

          var R = e;
          s && (s.template || null === s.templateUrl) && (R = y);
          a && a(R, f.childNodes, void 0, l);

          for (n = k.length - 1; 0 <= n; n--) {
            L = k[n], Ba(L, L.isolateScope ? y : e, Q, g, L.require && W(L.directiveName, L.require, Q, P), M);
          }

          r(P, function (a) {
            a = a.instance;
            B(a.$postLink) && a.$postLink();
          });
        }

        l = l || {};

        for (var n = -Number.MAX_VALUE, t = l.newScopeDirective, J = l.controllerDirectives, s = l.newIsolateScopeDirective, v = l.templateDirective, L = l.nonTlbTranscludeDirective, G = !1, P = !1, N = l.hasElementTranscludeDirective, y = d.$$element = x(b), u, Q, M, R = e, q, ma = !1, Ib = !1, O, sa = 0, A = a.length; sa < A; sa++) {
          u = a[sa];
          var E = u.$$start,
              ib = u.$$end;
          E && (y = V(b, E, ib));
          M = void 0;
          if (n > u.priority) break;
          if (O = u.scope) u.templateUrl || (D(O) ? (ba("new/isolated scope", s || t, u, y), s = u) : ba("new/isolated scope", s, u, y)), t = t || u;
          Q = u.name;

          if (!ma && (u.replace && (u.templateUrl || u.template) || u.transclude && !u.$$tlb)) {
            for (O = sa + 1; ma = a[O++];) {
              if (ma.transclude && !ma.$$tlb || ma.replace && (ma.templateUrl || ma.template)) {
                Ib = !0;
                break;
              }
            }

            ma = !0;
          }

          !u.templateUrl && u.controller && (J = J || T(), ba("'" + Q + "' controller", J[Q], u, y), J[Q] = u);
          if (O = u.transclude) if (G = !0, u.$$tlb || (ba("transclusion", L, u, y), L = u), "element" === O) N = !0, n = u.priority, M = y, y = d.$$element = x(da.$$createComment(Q, d[Q])), b = y[0], pa(f, Ha.call(M, 0), b), R = Z(Ib, M, e, n, g && g.name, {
            nonTlbTranscludeDirective: L
          });else {
            var ka = T();

            if (D(O)) {
              M = C.document.createDocumentFragment();
              var Xa = T(),
                  F = T();
              r(O, function (a, b) {
                var c = "?" === a.charAt(0);
                a = c ? a.substring(1) : a;
                Xa[a] = b;
                ka[b] = null;
                F[b] = c;
              });
              r(y.contents(), function (a) {
                var b = Xa[wa(ua(a))];
                b ? (F[b] = !0, ka[b] = ka[b] || C.document.createDocumentFragment(), ka[b].appendChild(a)) : M.appendChild(a);
              });
              r(F, function (a, b) {
                if (!a) throw $("reqslot", b);
              });

              for (var K in ka) {
                ka[K] && (R = x(ka[K].childNodes), ka[K] = Z(Ib, R, e));
              }

              M = x(M.childNodes);
            } else M = x(pc(b)).contents();

            y.empty();
            R = Z(Ib, M, e, void 0, void 0, {
              needsNewScope: u.$$isolateScope || u.$$newScope
            });
            R.$$slots = ka;
          }
          if (u.template) if (P = !0, ba("template", v, u, y), v = u, O = B(u.template) ? u.template(y, d) : u.template, O = Na(O), u.replace) {
            g = u;
            M = mc.test(O) ? rd(ja(u.templateNamespace, U(O))) : [];
            b = M[0];
            if (1 !== M.length || 1 !== b.nodeType) throw $("tplrt", Q, "");
            pa(f, y, b);
            A = {
              $attr: {}
            };
            O = sc(b, [], A);
            var Dg = a.splice(sa + 1, a.length - (sa + 1));
            (s || t) && fa(O, s, t);
            a = a.concat(O).concat(Dg);
            ga(d, A);
            A = a.length;
          } else y.html(O);
          if (u.templateUrl) P = !0, ba("template", v, u, y), v = u, u.replace && (g = u), p = ha(a.splice(sa, a.length - sa), y, d, f, G && R, h, k, {
            controllerDirectives: J,
            newScopeDirective: t !== u && t,
            newIsolateScopeDirective: s,
            templateDirective: v,
            nonTlbTranscludeDirective: L
          }), A = a.length;else if (u.compile) try {
            q = u.compile(y, d, R);
            var X = u.$$originalDirective || u;
            B(q) ? m(null, Va(X, q), E, ib) : q && m(Va(X, q.pre), Va(X, q.post), E, ib);
          } catch (ca) {
            c(ca, za(y));
          }
          u.terminal && (p.terminal = !0, n = Math.max(n, u.priority));
        }

        p.scope = t && !0 === t.scope;
        p.transcludeOnThisElement = G;
        p.templateOnThisElement = P;
        p.transclude = R;
        l.hasElementTranscludeDirective = N;
        return p;
      }

      function W(a, b, c, d) {
        var e;

        if (A(b)) {
          var f = b.match(l);
          b = b.substring(f[0].length);
          var g = f[1] || f[3],
              f = "?" === f[2];
          "^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;

          if (!e) {
            var h = "$" + b + "Controller";
            e = "^^" === g && c[0] && 9 === c[0].nodeType ? null : g ? c.inheritedData(h) : c.data(h);
          }

          if (!e && !f) throw $("ctreq", b, a);
        } else if (H(b)) for (e = [], g = 0, f = b.length; g < f; g++) {
          e[g] = W(a, b[g], c, d);
        } else D(b) && (e = {}, r(b, function (b, f) {
          e[f] = W(a, b, c, d);
        }));

        return e || null;
      }

      function ea(a, b, c, d, e, f, g) {
        var h = T(),
            k;

        for (k in d) {
          var l = d[k],
              m = {
            $scope: l === g || l.$$isolateScope ? e : f,
            $element: a,
            $attrs: b,
            $transclude: c
          },
              p = l.controller;
          "@" === p && (p = b[l.name]);
          m = M(p, m, !0, l.controllerAs);
          h[l.name] = m;
          a.data("$" + l.name + "Controller", m.instance);
        }

        return h;
      }

      function fa(a, b, c) {
        for (var d = 0, e = a.length; d < e; d++) {
          a[d] = ac(a[d], {
            $$isolateScope: b,
            $$newScope: c
          });
        }
      }

      function X(b, c, e, g, h, k, l) {
        if (c === h) return null;
        var m = null;

        if (f.hasOwnProperty(c)) {
          h = a.get(c + "Directive");

          for (var p = 0, n = h.length; p < n; p++) {
            if (c = h[p], (z(g) || g > c.priority) && -1 !== c.restrict.indexOf(e)) {
              k && (c = ac(c, {
                $$start: k,
                $$end: l
              }));

              if (!c.$$bindings) {
                var I = m = c,
                    t = c.name,
                    u = {
                  isolateScope: null,
                  bindToController: null
                };
                D(I.scope) && (!0 === I.bindToController ? (u.bindToController = d(I.scope, t, !0), u.isolateScope = {}) : u.isolateScope = d(I.scope, t, !1));
                D(I.bindToController) && (u.bindToController = d(I.bindToController, t, !0));
                if (u.bindToController && !I.controller) throw $("noctrl", t);
                m = m.$$bindings = u;
                D(m.isolateScope) && (c.$$isolateBindings = m.isolateScope);
              }

              b.push(c);
              m = c;
            }
          }
        }

        return m;
      }

      function ca(b) {
        if (f.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, e = c.length; d < e; d++) {
          if (b = c[d], b.multiElement) return !0;
        }
        return !1;
      }

      function ga(a, b) {
        var c = b.$attr,
            d = a.$attr;
        r(a, function (d, e) {
          "$" !== e.charAt(0) && (b[e] && b[e] !== d && (d = d.length ? d + (("style" === e ? ";" : " ") + b[e]) : b[e]), a.$set(e, d, !0, c[e]));
        });
        r(b, function (b, e) {
          a.hasOwnProperty(e) || "$" === e.charAt(0) || (a[e] = b, "class" !== e && "style" !== e && (d[e] = c[e]));
        });
      }

      function ha(a, b, d, f, g, h, k, l) {
        var m = [],
            p,
            n,
            t = b[0],
            u = a.shift(),
            J = ac(u, {
          templateUrl: null,
          transclude: null,
          replace: null,
          $$originalDirective: u
        }),
            s = B(u.templateUrl) ? u.templateUrl(b, d) : u.templateUrl,
            L = u.templateNamespace;
        b.empty();
        e(s).then(function (c) {
          var e, I;
          c = Na(c);

          if (u.replace) {
            c = mc.test(c) ? rd(ja(L, U(c))) : [];
            e = c[0];
            if (1 !== c.length || 1 !== e.nodeType) throw $("tplrt", u.name, s);
            c = {
              $attr: {}
            };
            pa(f, b, e);
            var v = sc(e, [], c);
            D(u.scope) && fa(v, !0);
            a = v.concat(a);
            ga(d, c);
          } else e = t, b.html(c);

          a.unshift(J);
          p = aa(a, e, d, g, b, u, h, k, l);
          r(f, function (a, c) {
            a === e && (f[c] = b[0]);
          });

          for (n = Xa(b[0].childNodes, g); m.length;) {
            c = m.shift();
            I = m.shift();
            var y = m.shift(),
                P = m.shift(),
                v = b[0];

            if (!c.$$destroyed) {
              if (I !== t) {
                var G = I.className;
                l.hasElementTranscludeDirective && u.replace || (v = pc(e));
                pa(y, x(I), v);
                sa(x(v), G);
              }

              I = p.transcludeOnThisElement ? ka(c, p.transclude, P) : P;
              p(n, c, v, f, I);
            }
          }

          m = null;
        })["catch"](function (a) {
          cc(a) && c(a);
        });
        return function (a, b, c, d, e) {
          a = e;
          b.$$destroyed || (m ? m.push(b, c, d, a) : (p.transcludeOnThisElement && (a = ka(b, p.transclude, e)), p(n, b, c, d, a)));
        };
      }

      function ia(a, b) {
        var c = b.priority - a.priority;
        return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
      }

      function ba(a, b, c, d) {
        function e(a) {
          return a ? " (module: " + a + ")" : "";
        }

        if (b) throw $("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, za(d));
      }

      function na(a, c) {
        var d = b(c, !0);
        d && a.push({
          priority: 0,
          compile: function compile(a) {
            a = a.parent();
            var b = !!a.length;
            b && da.$$addBindingClass(a);
            return function (a, c) {
              var e = c.parent();
              b || da.$$addBindingClass(e);
              da.$$addBindingInfo(e, d.expressions);
              a.$watch(d, function (a) {
                c[0].nodeValue = a;
              });
            };
          }
        });
      }

      function ja(a, b) {
        a = K(a || "html");

        switch (a) {
          case "svg":
          case "math":
            var c = C.document.createElement("div");
            c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
            return c.childNodes[0].childNodes;

          default:
            return b;
        }
      }

      function oa(a, b) {
        if ("srcdoc" === b) return u.HTML;
        if ("src" === b || "ngSrc" === b) return -1 === ["img", "video", "audio", "source", "track"].indexOf(a) ? u.RESOURCE_URL : u.MEDIA_URL;
        if ("xlinkHref" === b) return "image" === a ? u.MEDIA_URL : "a" === a ? u.URL : u.RESOURCE_URL;
        if ("form" === a && "action" === b || "base" === a && "href" === b || "link" === a && "href" === b) return u.RESOURCE_URL;
        if ("a" === a && ("href" === b || "ngHref" === b)) return u.URL;
      }

      function xa(a, b) {
        var c = b.toLowerCase();
        return v[a + "|" + c] || v["*|" + c];
      }

      function ya(a) {
        return ma(u.valueOf(a), "ng-prop-srcset");
      }

      function Ea(a, b, c, d) {
        if (m.test(d)) throw $("nodomevents");
        a = ua(a);
        var e = xa(a, d),
            f = Ta;
        "srcset" !== d || "img" !== a && "source" !== a ? e && (f = u.getTrusted.bind(u, e)) : f = ya;
        b.push({
          priority: 100,
          compile: function compile(a, b) {
            var e = p(b[c]),
                g = p(b[c], function (a) {
              return u.valueOf(a);
            });
            return {
              pre: function pre(a, b) {
                function c() {
                  var g = e(a);
                  b[0][d] = f(g);
                }

                c();
                a.$watch(g, c);
              }
            };
          }
        });
      }

      function Ia(a, c, d, e, f) {
        var g = ua(a),
            k = oa(g, e),
            l = h[e] || f,
            p = b(d, !f, k, l);

        if (p) {
          if ("multiple" === e && "select" === g) throw $("selmulti", za(a));
          if (m.test(e)) throw $("nodomevents");
          c.push({
            priority: 100,
            compile: function compile() {
              return {
                pre: function pre(a, c, f) {
                  c = f.$$observers || (f.$$observers = T());
                  var g = f[e];
                  g !== d && (p = g && b(g, !0, k, l), d = g);
                  p && (f[e] = p(a), (c[e] || (c[e] = [])).$$inter = !0, (f.$$observers && f.$$observers[e].$$scope || a).$watch(p, function (a, b) {
                    "class" === e && a !== b ? f.$updateClass(a, b) : f.$set(e, a);
                  }));
                }
              };
            }
          });
        }
      }

      function pa(a, b, c) {
        var d = b[0],
            e = b.length,
            f = d.parentNode,
            g,
            h;
        if (a) for (g = 0, h = a.length; g < h; g++) {
          if (a[g] === d) {
            a[g++] = c;
            h = g + e - 1;

            for (var k = a.length; g < k; g++, h++) {
              h < k ? a[g] = a[h] : delete a[g];
            }

            a.length -= e - 1;
            a.context === d && (a.context = c);
            break;
          }
        }
        f && f.replaceChild(c, d);
        a = C.document.createDocumentFragment();

        for (g = 0; g < e; g++) {
          a.appendChild(b[g]);
        }

        x.hasData(d) && (x.data(c, x.data(d)), x(d).off("$destroy"));
        x.cleanData(a.querySelectorAll("*"));

        for (g = 1; g < e; g++) {
          delete b[g];
        }

        b[0] = c;
        b.length = 1;
      }

      function Aa(a, b) {
        return S(function () {
          return a.apply(null, arguments);
        }, a, b);
      }

      function Ba(a, b, d, e, f, g) {
        try {
          a(b, d, e, f, g);
        } catch (h) {
          c(h, za(d));
        }
      }

      function ra(a, b) {
        if (s) throw $("missingattr", a, b);
      }

      function Da(a, c, d, e, f) {
        function g(b, c, e) {
          B(d.$onChanges) && !dc(c, e) && (Ua || (a.$$postDigest(q), Ua = []), m || (m = {}, Ua.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Jb(e, c));
        }

        function h() {
          d.$onChanges(m);
          m = void 0;
        }

        var k = [],
            l = {},
            m;
        r(e, function (e, h) {
          var m = e.attrName,
              n = e.optional,
              I,
              t,
              u,
              s;

          switch (e.mode) {
            case "@":
              n || ta.call(c, m) || (ra(m, f.name), d[h] = c[m] = void 0);
              n = c.$observe(m, function (a) {
                if (A(a) || Ga(a)) g(h, a, d[h]), d[h] = a;
              });
              c.$$observers[m].$$scope = a;
              I = c[m];
              A(I) ? d[h] = b(I)(a) : Ga(I) && (d[h] = I);
              l[h] = new Jb(tc, d[h]);
              k.push(n);
              break;

            case "=":
              if (!ta.call(c, m)) {
                if (n) break;
                ra(m, f.name);
                c[m] = void 0;
              }

              if (n && !c[m]) break;
              t = p(c[m]);
              s = t.literal ? va : dc;

              u = t.assign || function () {
                I = d[h] = t(a);
                throw $("nonassign", c[m], m, f.name);
              };

              I = d[h] = t(a);

              n = function n(b) {
                s(b, d[h]) || (s(b, I) ? u(a, b = d[h]) : d[h] = b);
                return I = b;
              };

              n.$stateful = !0;
              n = e.collection ? a.$watchCollection(c[m], n) : a.$watch(p(c[m], n), null, t.literal);
              k.push(n);
              break;

            case "<":
              if (!ta.call(c, m)) {
                if (n) break;
                ra(m, f.name);
                c[m] = void 0;
              }

              if (n && !c[m]) break;
              t = p(c[m]);
              var v = t.literal,
                  L = d[h] = t(a);
              l[h] = new Jb(tc, d[h]);
              n = a[e.collection ? "$watchCollection" : "$watch"](t, function (a, b) {
                if (b === a) {
                  if (b === L || v && va(b, L)) return;
                  b = L;
                }

                g(h, a, b);
                d[h] = a;
              });
              k.push(n);
              break;

            case "&":
              n || ta.call(c, m) || ra(m, f.name);
              t = c.hasOwnProperty(m) ? p(c[m]) : E;
              if (t === E && n) break;

              d[h] = function (b) {
                return t(a, b);
              };

          }
        });
        return {
          initialChanges: l,
          removeWatches: k.length && function () {
            for (var a = 0, b = k.length; a < b; ++a) {
              k[a]();
            }
          }
        };
      }

      var Ma = /^\w/,
          Fa = C.document.createElement("div"),
          Oa = t,
          Qa = N,
          Ja = G,
          Ua;
      w.prototype = {
        $normalize: wa,
        $addClass: function $addClass(a) {
          a && 0 < a.length && R.addClass(this.$$element, a);
        },
        $removeClass: function $removeClass(a) {
          a && 0 < a.length && R.removeClass(this.$$element, a);
        },
        $updateClass: function $updateClass(a, b) {
          var c = sd(a, b);
          c && c.length && R.addClass(this.$$element, c);
          (c = sd(b, a)) && c.length && R.removeClass(this.$$element, c);
        },
        $set: function $set(a, b, d, e) {
          var f = ld(this.$$element[0], a),
              g = td[a],
              h = a;
          f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);
          this[a] = b;
          e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Vc(a, "-"));
          "img" === ua(this.$$element) && "srcset" === a && (this[a] = b = ma(b, "$set('srcset', value)"));
          !1 !== d && (null === b || z(b) ? this.$$element.removeAttr(e) : Ma.test(e) ? f && !1 === b ? this.$$element.removeAttr(e) : this.$$element.attr(e, b) : O(this.$$element[0], e, b));
          (a = this.$$observers) && r(a[h], function (a) {
            try {
              a(b);
            } catch (d) {
              c(d);
            }
          });
        },
        $observe: function $observe(a, b) {
          var c = this,
              d = c.$$observers || (c.$$observers = T()),
              e = d[a] || (d[a] = []);
          e.push(b);
          L.$evalAsync(function () {
            e.$$inter || !c.hasOwnProperty(a) || z(c[a]) || b(c[a]);
          });
          return function () {
            cb(e, b);
          };
        }
      };
      var Ka = b.startSymbol(),
          La = b.endSymbol(),
          Na = "{{" === Ka && "}}" === La ? Ta : function (a) {
        return a.replace(/\{\{/g, Ka).replace(/}}/g, La);
      },
          Ra = /^ng(Attr|Prop|On)([A-Z].*)$/,
          Sa = /^(.+)Start$/;
      da.$$addBindingInfo = n ? function (a, b) {
        var c = a.data("$binding") || [];
        H(b) ? c = c.concat(b) : c.push(b);
        a.data("$binding", c);
      } : E;
      da.$$addBindingClass = n ? function (a) {
        sa(a, "ng-binding");
      } : E;
      da.$$addScopeInfo = n ? function (a, b, c, d) {
        a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
      } : E;
      da.$$addScopeClass = n ? function (a, b) {
        sa(a, b ? "ng-isolate-scope" : "ng-scope");
      } : E;

      da.$$createComment = function (a, b) {
        var c = "";
        n && (c = " " + (a || "") + ": ", b && (c += b + " "));
        return C.document.createComment(c);
      };

      return da;
    }];
  }

  function Jb(a, b) {
    this.previousValue = a;
    this.currentValue = b;
  }

  function wa(a) {
    return a.replace(pd, "").replace(Eg, function (a, d, c) {
      return c ? d.toUpperCase() : d;
    });
  }

  function sd(a, b) {
    var d = "",
        c = a.split(/\s+/),
        e = b.split(/\s+/),
        f = 0;

    a: for (; f < c.length; f++) {
      for (var g = c[f], k = 0; k < e.length; k++) {
        if (g === e[k]) continue a;
      }

      d += (0 < d.length ? " " : "") + g;
    }

    return d;
  }

  function rd(a) {
    a = x(a);
    var b = a.length;
    if (1 >= b) return a;

    for (; b--;) {
      var d = a[b];
      (8 === d.nodeType || d.nodeType === Pa && "" === d.nodeValue.trim()) && Fg.call(a, b, 1);
    }

    return a;
  }

  function Bg(a, b) {
    if (b && A(b)) return b;

    if (A(a)) {
      var d = ud.exec(a);
      if (d) return d[3];
    }
  }

  function Ff() {
    var a = {};

    this.has = function (b) {
      return a.hasOwnProperty(b);
    };

    this.register = function (b, d) {
      Ja(b, "controller");
      D(b) ? S(a, b) : a[b] = d;
    };

    this.$get = ["$injector", function (b) {
      function d(a, b, d, g) {
        if (!a || !D(a.$scope)) throw F("$controller")("noscp", g, b);
        a.$scope[b] = d;
      }

      return function (c, e, f, g) {
        var k, h, l;
        f = !0 === f;
        g && A(g) && (l = g);

        if (A(c)) {
          g = c.match(ud);
          if (!g) throw vd("ctrlfmt", c);
          h = g[1];
          l = l || g[3];
          c = a.hasOwnProperty(h) ? a[h] : Ge(e.$scope, h, !0);
          if (!c) throw vd("ctrlreg", h);
          sb(c, h, !0);
        }

        if (f) return f = (H(c) ? c[c.length - 1] : c).prototype, k = Object.create(f || null), l && d(e, l, k, h || c.name), S(function () {
          var a = b.invoke(c, k, e, h);
          a !== k && (D(a) || B(a)) && (k = a, l && d(e, l, k, h || c.name));
          return k;
        }, {
          instance: k,
          identifier: l
        });
        k = b.instantiate(c, e, h);
        l && d(e, l, k, h || c.name);
        return k;
      };
    }];
  }

  function Gf() {
    this.$get = ["$window", function (a) {
      return x(a.document);
    }];
  }

  function Hf() {
    this.$get = ["$document", "$rootScope", function (a, b) {
      function d() {
        e = c.hidden;
      }

      var c = a[0],
          e = c && c.hidden;
      a.on("visibilitychange", d);
      b.$on("$destroy", function () {
        a.off("visibilitychange", d);
      });
      return function () {
        return e;
      };
    }];
  }

  function If() {
    this.$get = ["$log", function (a) {
      return function (b, d) {
        a.error.apply(a, arguments);
      };
    }];
  }

  function uc(a) {
    return D(a) ? ha(a) ? a.toISOString() : eb(a) : a;
  }

  function Of() {
    this.$get = function () {
      return function (a) {
        if (!a) return "";
        var b = [];
        Oc(a, function (a, c) {
          null === a || z(a) || B(a) || (H(a) ? r(a, function (a) {
            b.push(ba(c) + "=" + ba(uc(a)));
          }) : b.push(ba(c) + "=" + ba(uc(a))));
        });
        return b.join("&");
      };
    };
  }

  function Pf() {
    this.$get = function () {
      return function (a) {
        function b(a, e, f) {
          H(a) ? r(a, function (a, c) {
            b(a, e + "[" + (D(a) ? c : "") + "]");
          }) : D(a) && !ha(a) ? Oc(a, function (a, c) {
            b(a, e + (f ? "" : "[") + c + (f ? "" : "]"));
          }) : (B(a) && (a = a()), d.push(ba(e) + "=" + (null == a ? "" : ba(uc(a)))));
        }

        if (!a) return "";
        var d = [];
        b(a, "", !0);
        return d.join("&");
      };
    };
  }

  function vc(a, b) {
    if (A(a)) {
      var d = a.replace(Gg, "").trim();

      if (d) {
        var c = b("Content-Type"),
            c = c && 0 === c.indexOf(wd),
            e;
        (e = c) || (e = (e = d.match(Hg)) && Ig[e[0]].test(d));
        if (e) try {
          a = Rc(d);
        } catch (f) {
          if (!c) return a;
          throw Kb("baddata", a, f);
        }
      }
    }

    return a;
  }

  function xd(a) {
    var b = T(),
        d;
    A(a) ? r(a.split("\n"), function (a) {
      d = a.indexOf(":");
      var e = K(U(a.substr(0, d)));
      a = U(a.substr(d + 1));
      e && (b[e] = b[e] ? b[e] + ", " + a : a);
    }) : D(a) && r(a, function (a, d) {
      var f = K(d),
          g = U(a);
      f && (b[f] = b[f] ? b[f] + ", " + g : g);
    });
    return b;
  }

  function yd(a) {
    var b;
    return function (d) {
      b || (b = xd(a));
      return d ? (d = b[K(d)], void 0 === d && (d = null), d) : b;
    };
  }

  function zd(a, b, d, c) {
    if (B(c)) return c(a, b, d);
    r(c, function (c) {
      a = c(a, b, d);
    });
    return a;
  }

  function Nf() {
    var a = this.defaults = {
      transformResponse: [vc],
      transformRequest: [function (a) {
        return D(a) && "[object File]" !== la.call(a) && "[object Blob]" !== la.call(a) && "[object FormData]" !== la.call(a) ? eb(a) : a;
      }],
      headers: {
        common: {
          Accept: "application/json, text/plain, */*"
        },
        post: ja(wc),
        put: ja(wc),
        patch: ja(wc)
      },
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      paramSerializer: "$httpParamSerializer",
      jsonpCallbackParam: "callback"
    },
        b = !1;

    this.useApplyAsync = function (a) {
      return w(a) ? (b = !!a, this) : b;
    };

    var d = this.interceptors = [],
        c = this.xsrfWhitelistedOrigins = [];
    this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function (e, f, g, k, h, l, m, p) {
      function n(b) {
        function c(a, b) {
          for (var d = 0, e = b.length; d < e;) {
            var f = b[d++],
                g = b[d++];
            a = a.then(f, g);
          }

          b.length = 0;
          return a;
        }

        function d(a, b) {
          var c,
              e = {};
          r(a, function (a, d) {
            B(a) ? (c = a(b), null != c && (e[d] = c)) : e[d] = a;
          });
          return e;
        }

        function f(a) {
          var b = S({}, a);
          b.data = zd(a.data, a.headers, a.status, g.transformResponse);
          a = a.status;
          return 200 <= a && 300 > a ? b : l.reject(b);
        }

        if (!D(b)) throw F("$http")("badreq", b);
        if (!A(p.valueOf(b.url))) throw F("$http")("badreq", b.url);
        var g = S({
          method: "get",
          transformRequest: a.transformRequest,
          transformResponse: a.transformResponse,
          paramSerializer: a.paramSerializer,
          jsonpCallbackParam: a.jsonpCallbackParam
        }, b);

        g.headers = function (b) {
          var c = a.headers,
              e = S({}, b.headers),
              f,
              g,
              h,
              c = S({}, c.common, c[K(b.method)]);

          a: for (f in c) {
            g = K(f);

            for (h in e) {
              if (K(h) === g) continue a;
            }

            e[f] = c[f];
          }

          return d(e, ja(b));
        }(b);

        g.method = ub(g.method);
        g.paramSerializer = A(g.paramSerializer) ? m.get(g.paramSerializer) : g.paramSerializer;
        e.$$incOutstandingRequestCount("$http");
        var h = [],
            k = [];
        b = l.resolve(g);
        r(v, function (a) {
          (a.request || a.requestError) && h.unshift(a.request, a.requestError);
          (a.response || a.responseError) && k.push(a.response, a.responseError);
        });
        b = c(b, h);
        b = b.then(function (b) {
          var c = b.headers,
              d = zd(b.data, yd(c), void 0, b.transformRequest);
          z(d) && r(c, function (a, b) {
            "content-type" === K(b) && delete c[b];
          });
          z(b.withCredentials) && !z(a.withCredentials) && (b.withCredentials = a.withCredentials);
          return s(b, d).then(f, f);
        });
        b = c(b, k);
        return b = b["finally"](function () {
          e.$$completeOutstandingRequest(E, "$http");
        });
      }

      function s(c, d) {
        function e(a) {
          if (a) {
            var c = {};
            r(a, function (a, d) {
              c[d] = function (c) {
                function d() {
                  a(c);
                }

                b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d);
              };
            });
            return c;
          }
        }

        function k(a, c, d, e, f) {
          function g() {
            m(c, a, d, e, f);
          }

          R && (200 <= a && 300 > a ? R.put(O, [a, c, xd(d), e, f]) : R.remove(O));
          b ? h.$applyAsync(g) : (g(), h.$$phase || h.$apply());
        }

        function m(a, b, d, e, f) {
          b = -1 <= b ? b : 0;
          (200 <= b && 300 > b ? L.resolve : L.reject)({
            data: a,
            status: b,
            headers: yd(d),
            config: c,
            statusText: e,
            xhrStatus: f
          });
        }

        function s(a) {
          m(a.data, a.status, ja(a.headers()), a.statusText, a.xhrStatus);
        }

        function v() {
          var a = n.pendingRequests.indexOf(c);
          -1 !== a && n.pendingRequests.splice(a, 1);
        }

        var L = l.defer(),
            u = L.promise,
            R,
            q,
            ma = c.headers,
            x = "jsonp" === K(c.method),
            O = c.url;
        x ? O = p.getTrustedResourceUrl(O) : A(O) || (O = p.valueOf(O));
        O = G(O, c.paramSerializer(c.params));
        x && (O = t(O, c.jsonpCallbackParam));
        n.pendingRequests.push(c);
        u.then(v, v);
        !c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (R = D(c.cache) ? c.cache : D(a.cache) ? a.cache : N);
        R && (q = R.get(O), w(q) ? q && B(q.then) ? q.then(s, s) : H(q) ? m(q[1], q[0], ja(q[2]), q[3], q[4]) : m(q, 200, {}, "OK", "complete") : R.put(O, u));
        z(q) && ((q = jc(c.url) ? g()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (ma[c.xsrfHeaderName || a.xsrfHeaderName] = q), f(c.method, O, d, k, ma, c.timeout, c.withCredentials, c.responseType, e(c.eventHandlers), e(c.uploadEventHandlers)));
        return u;
      }

      function G(a, b) {
        0 < b.length && (a += (-1 === a.indexOf("?") ? "?" : "&") + b);
        return a;
      }

      function t(a, b) {
        var c = a.split("?");
        if (2 < c.length) throw Kb("badjsonp", a);
        c = gc(c[1]);
        r(c, function (c, d) {
          if ("JSON_CALLBACK" === c) throw Kb("badjsonp", a);
          if (d === b) throw Kb("badjsonp", b, a);
        });
        return a += (-1 === a.indexOf("?") ? "?" : "&") + b + "=JSON_CALLBACK";
      }

      var N = k("$http");
      a.paramSerializer = A(a.paramSerializer) ? m.get(a.paramSerializer) : a.paramSerializer;
      var v = [];
      r(d, function (a) {
        v.unshift(A(a) ? m.get(a) : m.invoke(a));
      });
      var jc = Jg(c);
      n.pendingRequests = [];

      (function (a) {
        r(arguments, function (a) {
          n[a] = function (b, c) {
            return n(S({}, c || {}, {
              method: a,
              url: b
            }));
          };
        });
      })("get", "delete", "head", "jsonp");

      (function (a) {
        r(arguments, function (a) {
          n[a] = function (b, c, d) {
            return n(S({}, d || {}, {
              method: a,
              url: b,
              data: c
            }));
          };
        });
      })("post", "put", "patch");

      n.defaults = a;
      return n;
    }];
  }

  function Rf() {
    this.$get = function () {
      return function () {
        return new C.XMLHttpRequest();
      };
    };
  }

  function Qf() {
    this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (a, b, d, c) {
      return Kg(a, c, a.defer, b, d[0]);
    }];
  }

  function Kg(a, b, d, c, e) {
    function f(a, b, d) {
      a = a.replace("JSON_CALLBACK", b);
      var f = e.createElement("script"),
          _m = null;
      f.type = "text/javascript";
      f.src = a;
      f.async = !0;

      _m = function m(a) {
        f.removeEventListener("load", _m);
        f.removeEventListener("error", _m);
        e.body.removeChild(f);
        f = null;
        var g = -1,
            s = "unknown";
        a && ("load" !== a.type || c.wasCalled(b) || (a = {
          type: "error"
        }), s = a.type, g = "error" === a.type ? 404 : 200);
        d && d(g, s);
      };

      f.addEventListener("load", _m);
      f.addEventListener("error", _m);
      e.body.appendChild(f);
      return _m;
    }

    return function (e, k, h, l, m, p, n, s, G, t) {
      function N(a) {
        J = "timeout" === a;
        qa && qa();
        y && y.abort();
      }

      function v(a, b, c, e, f, g) {
        w(P) && d.cancel(P);
        qa = y = null;
        a(b, c, e, f, g);
      }

      k = k || a.url();
      if ("jsonp" === K(e)) var q = c.createCallback(k),
          qa = f(k, q, function (a, b) {
        var d = 200 === a && c.getResponse(q);
        v(l, a, d, "", b, "complete");
        c.removeCallback(q);
      });else {
        var y = b(e, k),
            J = !1;
        y.open(e, k, !0);
        r(m, function (a, b) {
          w(a) && y.setRequestHeader(b, a);
        });

        y.onload = function () {
          var a = y.statusText || "",
              b = "response" in y ? y.response : y.responseText,
              c = 1223 === y.status ? 204 : y.status;
          0 === c && (c = b ? 200 : "file" === ga(k).protocol ? 404 : 0);
          v(l, c, b, y.getAllResponseHeaders(), a, "complete");
        };

        y.onerror = function () {
          v(l, -1, null, null, "", "error");
        };

        y.ontimeout = function () {
          v(l, -1, null, null, "", "timeout");
        };

        y.onabort = function () {
          v(l, -1, null, null, "", J ? "timeout" : "abort");
        };

        r(G, function (a, b) {
          y.addEventListener(b, a);
        });
        r(t, function (a, b) {
          y.upload.addEventListener(b, a);
        });
        n && (y.withCredentials = !0);
        if (s) try {
          y.responseType = s;
        } catch (I) {
          if ("json" !== s) throw I;
        }
        y.send(z(h) ? null : h);
      }
      if (0 < p) var P = d(function () {
        N("timeout");
      }, p);else p && B(p.then) && p.then(function () {
        N(w(p.$$timeoutId) ? "timeout" : "abort");
      });
    };
  }

  function Kf() {
    var a = "{{",
        b = "}}";

    this.startSymbol = function (b) {
      return b ? (a = b, this) : a;
    };

    this.endSymbol = function (a) {
      return a ? (b = a, this) : b;
    };

    this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, e) {
      function f(a) {
        return "\\\\\\" + a;
      }

      function g(c) {
        return c.replace(p, a).replace(n, b);
      }

      function k(a, b, c, d) {
        var e = a.$watch(function (a) {
          e();
          return d(a);
        }, b, c);
        return e;
      }

      function h(f, h, n, p) {
        function v(a) {
          try {
            return a = n && !r ? e.getTrusted(n, a) : e.valueOf(a), p && !w(a) ? a : ic(a);
          } catch (b) {
            c(Ma.interr(f, b));
          }
        }

        var r = n === e.URL || n === e.MEDIA_URL;

        if (!f.length || -1 === f.indexOf(a)) {
          if (h) return;
          h = g(f);
          r && (h = e.getTrusted(n, h));
          h = ia(h);
          h.exp = f;
          h.expressions = [];
          h.$$watchDelegate = k;
          return h;
        }

        p = !!p;

        for (var q, y, J = 0, I = [], P, Q = f.length, M = [], L = [], u; J < Q;) {
          if (-1 !== (q = f.indexOf(a, J)) && -1 !== (y = f.indexOf(b, q + l))) J !== q && M.push(g(f.substring(J, q))), J = f.substring(q + l, y), I.push(J), J = y + m, L.push(M.length), M.push("");else {
            J !== Q && M.push(g(f.substring(J)));
            break;
          }
        }

        u = 1 === M.length && 1 === L.length;
        var R = r && u ? void 0 : v;
        P = I.map(function (a) {
          return d(a, R);
        });

        if (!h || I.length) {
          var x = function x(a) {
            for (var b = 0, c = I.length; b < c; b++) {
              if (p && z(a[b])) return;
              M[L[b]] = a[b];
            }

            if (r) return e.getTrusted(n, u ? M[0] : M.join(""));
            n && 1 < M.length && Ma.throwNoconcat(f);
            return M.join("");
          };

          return S(function (a) {
            var b = 0,
                d = I.length,
                e = Array(d);

            try {
              for (; b < d; b++) {
                e[b] = P[b](a);
              }

              return x(e);
            } catch (g) {
              c(Ma.interr(f, g));
            }
          }, {
            exp: f,
            expressions: I,
            $$watchDelegate: function $$watchDelegate(a, b) {
              var c;
              return a.$watchGroup(P, function (d, e) {
                var f = x(d);
                b.call(this, f, d !== e ? c : f, a);
                c = f;
              });
            }
          });
        }
      }

      var l = a.length,
          m = b.length,
          p = new RegExp(a.replace(/./g, f), "g"),
          n = new RegExp(b.replace(/./g, f), "g");

      h.startSymbol = function () {
        return a;
      };

      h.endSymbol = function () {
        return b;
      };

      return h;
    }];
  }

  function Lf() {
    this.$get = ["$$intervalFactory", "$window", function (a, b) {
      var d = {},
          c = function c(a) {
        b.clearInterval(a);
        delete d[a];
      },
          e = a(function (a, c, e) {
        a = b.setInterval(a, c);
        d[a] = e;
        return a;
      }, c);

      e.cancel = function (a) {
        if (!a) return !1;
        if (!a.hasOwnProperty("$$intervalId")) throw Lg("badprom");
        if (!d.hasOwnProperty(a.$$intervalId)) return !1;
        a = a.$$intervalId;
        var b = d[a],
            e = b.promise;
        e.$$state && (e.$$state.pur = !0);
        b.reject("canceled");
        c(a);
        return !0;
      };

      return e;
    }];
  }

  function Mf() {
    this.$get = ["$browser", "$q", "$$q", "$rootScope", function (a, b, d, c) {
      return function (e, f) {
        return function (g, k, h, l) {
          function m() {
            p ? g.apply(null, n) : g(s);
          }

          var p = 4 < arguments.length,
              n = p ? Ha.call(arguments, 4) : [],
              s = 0,
              G = w(l) && !l,
              t = (G ? d : b).defer(),
              r = t.promise;
          h = w(h) ? h : 0;
          r.$$intervalId = e(function () {
            G ? a.defer(m) : c.$evalAsync(m);
            t.notify(s++);
            0 < h && s >= h && (t.resolve(s), f(r.$$intervalId));
            G || c.$apply();
          }, k, t, G);
          return r;
        };
      };
    }];
  }

  function Ad(a, b) {
    var d = ga(a);
    b.$$protocol = d.protocol;
    b.$$host = d.hostname;
    b.$$port = fa(d.port) || Mg[d.protocol] || null;
  }

  function Bd(a, b, d) {
    if (Ng.test(a)) throw jb("badpath", a);
    var c = "/" !== a.charAt(0);
    c && (a = "/" + a);
    a = ga(a);

    for (var c = (c && "/" === a.pathname.charAt(0) ? a.pathname.substring(1) : a.pathname).split("/"), e = c.length; e--;) {
      c[e] = decodeURIComponent(c[e]), d && (c[e] = c[e].replace(/\//g, "%2F"));
    }

    d = c.join("/");
    b.$$path = d;
    b.$$search = gc(a.search);
    b.$$hash = decodeURIComponent(a.hash);
    b.$$path && "/" !== b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
  }

  function xc(a, b) {
    return a.slice(0, b.length) === b;
  }

  function xa(a, b) {
    if (xc(b, a)) return b.substr(a.length);
  }

  function Da(a) {
    var b = a.indexOf("#");
    return -1 === b ? a : a.substr(0, b);
  }

  function yc(a, b, d) {
    this.$$html5 = !0;
    d = d || "";
    Ad(a, this);

    this.$$parse = function (a) {
      var d = xa(b, a);
      if (!A(d)) throw jb("ipthprfx", a, b);
      Bd(d, this, !0);
      this.$$path || (this.$$path = "/");
      this.$$compose();
    };

    this.$$normalizeUrl = function (a) {
      return b + a.substr(1);
    };

    this.$$parseLinkUrl = function (c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
      var f, g;
      w(f = xa(a, c)) ? (g = f, g = d && w(f = xa(d, f)) ? b + (xa("/", f) || f) : a + g) : w(f = xa(b, c)) ? g = b + f : b === c + "/" && (g = b);
      g && this.$$parse(g);
      return !!g;
    };
  }

  function zc(a, b, d) {
    Ad(a, this);

    this.$$parse = function (c) {
      var e = xa(a, c) || xa(b, c),
          f;
      z(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", z(e) && (a = c, this.replace())) : (f = xa(d, e), z(f) && (f = e));
      Bd(f, this, !1);
      c = this.$$path;
      var e = a,
          g = /^\/[A-Z]:(\/.*)/;
      xc(f, e) && (f = f.replace(e, ""));
      g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);
      this.$$path = c;
      this.$$compose();
    };

    this.$$normalizeUrl = function (b) {
      return a + (b ? d + b : "");
    };

    this.$$parseLinkUrl = function (b, d) {
      return Da(a) === Da(b) ? (this.$$parse(b), !0) : !1;
    };
  }

  function Cd(a, b, d) {
    this.$$html5 = !0;
    zc.apply(this, arguments);

    this.$$parseLinkUrl = function (c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
      var f, g;
      a === Da(c) ? f = c : (g = xa(b, c)) ? f = a + d + g : b === c + "/" && (f = b);
      f && this.$$parse(f);
      return !!f;
    };

    this.$$normalizeUrl = function (b) {
      return a + d + b;
    };
  }

  function Lb(a) {
    return function () {
      return this[a];
    };
  }

  function Dd(a, b) {
    return function (d) {
      if (z(d)) return this[a];
      this[a] = b(d);
      this.$$compose();
      return this;
    };
  }

  function Tf() {
    var a = "!",
        b = {
      enabled: !1,
      requireBase: !0,
      rewriteLinks: !0
    };

    this.hashPrefix = function (b) {
      return w(b) ? (a = b, this) : a;
    };

    this.html5Mode = function (a) {
      if (Ga(a)) return b.enabled = a, this;

      if (D(a)) {
        Ga(a.enabled) && (b.enabled = a.enabled);
        Ga(a.requireBase) && (b.requireBase = a.requireBase);
        if (Ga(a.rewriteLinks) || A(a.rewriteLinks)) b.rewriteLinks = a.rewriteLinks;
        return this;
      }

      return b;
    };

    this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, e, f, g) {
      function k(a, b) {
        return a === b || ga(a).href === ga(b).href;
      }

      function h(a, b, d) {
        var e = m.url(),
            f = m.$$state;

        try {
          c.url(a, b, d), m.$$state = c.state();
        } catch (g) {
          throw m.url(e), m.$$state = f, g;
        }
      }

      function l(a, b) {
        d.$broadcast("$locationChangeSuccess", m.absUrl(), a, m.$$state, b);
      }

      var m, p;
      p = c.baseHref();
      var n = c.url(),
          s;

      if (b.enabled) {
        if (!p && b.requireBase) throw jb("nobase");
        s = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (p || "/");
        p = e.history ? yc : Cd;
      } else s = Da(n), p = zc;

      var r = s.substr(0, Da(s).lastIndexOf("/") + 1);
      m = new p(s, r, "#" + a);
      m.$$parseLinkUrl(n, n);
      m.$$state = c.state();
      var t = /^\s*(javascript|mailto):/i;
      f.on("click", function (a) {
        var e = b.rewriteLinks;

        if (e && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 !== a.which && 2 !== a.button) {
          for (var g = x(a.target); "a" !== ua(g[0]);) {
            if (g[0] === f[0] || !(g = g.parent())[0]) return;
          }

          if (!A(e) || !z(g.attr(e))) {
            var e = g.prop("href"),
                h = g.attr("href") || g.attr("xlink:href");
            D(e) && "[object SVGAnimatedString]" === e.toString() && (e = ga(e.animVal).href);
            t.test(e) || !e || g.attr("target") || a.isDefaultPrevented() || !m.$$parseLinkUrl(e, h) || (a.preventDefault(), m.absUrl() !== c.url() && d.$apply());
          }
        }
      });
      m.absUrl() !== n && c.url(m.absUrl(), !0);
      var N = !0;
      c.onUrlChange(function (a, b) {
        xc(a, r) ? (d.$evalAsync(function () {
          var c = m.absUrl(),
              e = m.$$state,
              f;
          m.$$parse(a);
          m.$$state = b;
          f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;
          m.absUrl() === a && (f ? (m.$$parse(c), m.$$state = e, h(c, !1, e)) : (N = !1, l(c, e)));
        }), d.$$phase || d.$digest()) : g.location.href = a;
      });
      d.$watch(function () {
        if (N || m.$$urlUpdatedByLocation) {
          m.$$urlUpdatedByLocation = !1;
          var a = c.url(),
              b = m.absUrl(),
              f = c.state(),
              g = m.$$replace,
              n = !k(a, b) || m.$$html5 && e.history && f !== m.$$state;
          if (N || n) N = !1, d.$evalAsync(function () {
            var b = m.absUrl(),
                c = d.$broadcast("$locationChangeStart", b, a, m.$$state, f).defaultPrevented;
            m.absUrl() === b && (c ? (m.$$parse(a), m.$$state = f) : (n && h(b, g, f === m.$$state ? null : m.$$state), l(a, f)));
          });
        }

        m.$$replace = !1;
      });
      return m;
    }];
  }

  function Uf() {
    var a = !0,
        b = this;

    this.debugEnabled = function (b) {
      return w(b) ? (a = b, this) : a;
    };

    this.$get = ["$window", function (d) {
      function c(a) {
        cc(a) && (a.stack && f ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
        return a;
      }

      function e(a) {
        var b = d.console || {},
            e = b[a] || b.log || E;
        return function () {
          var a = [];
          r(arguments, function (b) {
            a.push(c(b));
          });
          return Function.prototype.apply.call(e, b, a);
        };
      }

      var f = Ca || /\bEdge\//.test(d.navigator && d.navigator.userAgent);
      return {
        log: e("log"),
        info: e("info"),
        warn: e("warn"),
        error: e("error"),
        debug: function () {
          var c = e("debug");
          return function () {
            a && c.apply(b, arguments);
          };
        }()
      };
    }];
  }

  function Og(a) {
    return a + "";
  }

  function Pg(a, b) {
    return "undefined" !== typeof a ? a : b;
  }

  function Ed(a, b) {
    return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b;
  }

  function Qg(a, b) {
    switch (a.type) {
      case q.MemberExpression:
        if (a.computed) return !1;
        break;

      case q.UnaryExpression:
        return 1;

      case q.BinaryExpression:
        return "+" !== a.operator ? 1 : !1;

      case q.CallExpression:
        return !1;
    }

    return void 0 === b ? Fd : b;
  }

  function Z(a, b, d) {
    var c,
        e,
        f = a.isPure = Qg(a, d);

    switch (a.type) {
      case q.Program:
        c = !0;
        r(a.body, function (a) {
          Z(a.expression, b, f);
          c = c && a.expression.constant;
        });
        a.constant = c;
        break;

      case q.Literal:
        a.constant = !0;
        a.toWatch = [];
        break;

      case q.UnaryExpression:
        Z(a.argument, b, f);
        a.constant = a.argument.constant;
        a.toWatch = a.argument.toWatch;
        break;

      case q.BinaryExpression:
        Z(a.left, b, f);
        Z(a.right, b, f);
        a.constant = a.left.constant && a.right.constant;
        a.toWatch = a.left.toWatch.concat(a.right.toWatch);
        break;

      case q.LogicalExpression:
        Z(a.left, b, f);
        Z(a.right, b, f);
        a.constant = a.left.constant && a.right.constant;
        a.toWatch = a.constant ? [] : [a];
        break;

      case q.ConditionalExpression:
        Z(a.test, b, f);
        Z(a.alternate, b, f);
        Z(a.consequent, b, f);
        a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
        a.toWatch = a.constant ? [] : [a];
        break;

      case q.Identifier:
        a.constant = !1;
        a.toWatch = [a];
        break;

      case q.MemberExpression:
        Z(a.object, b, f);
        a.computed && Z(a.property, b, f);
        a.constant = a.object.constant && (!a.computed || a.property.constant);
        a.toWatch = a.constant ? [] : [a];
        break;

      case q.CallExpression:
        c = d = a.filter ? !b(a.callee.name).$stateful : !1;
        e = [];
        r(a.arguments, function (a) {
          Z(a, b, f);
          c = c && a.constant;
          e.push.apply(e, a.toWatch);
        });
        a.constant = c;
        a.toWatch = d ? e : [a];
        break;

      case q.AssignmentExpression:
        Z(a.left, b, f);
        Z(a.right, b, f);
        a.constant = a.left.constant && a.right.constant;
        a.toWatch = [a];
        break;

      case q.ArrayExpression:
        c = !0;
        e = [];
        r(a.elements, function (a) {
          Z(a, b, f);
          c = c && a.constant;
          e.push.apply(e, a.toWatch);
        });
        a.constant = c;
        a.toWatch = e;
        break;

      case q.ObjectExpression:
        c = !0;
        e = [];
        r(a.properties, function (a) {
          Z(a.value, b, f);
          c = c && a.value.constant;
          e.push.apply(e, a.value.toWatch);
          a.computed && (Z(a.key, b, !1), c = c && a.key.constant, e.push.apply(e, a.key.toWatch));
        });
        a.constant = c;
        a.toWatch = e;
        break;

      case q.ThisExpression:
        a.constant = !1;
        a.toWatch = [];
        break;

      case q.LocalsExpression:
        a.constant = !1, a.toWatch = [];
    }
  }

  function Gd(a) {
    if (1 === a.length) {
      a = a[0].expression;
      var b = a.toWatch;
      return 1 !== b.length ? b : b[0] !== a ? b : void 0;
    }
  }

  function Hd(a) {
    return a.type === q.Identifier || a.type === q.MemberExpression;
  }

  function Id(a) {
    if (1 === a.body.length && Hd(a.body[0].expression)) return {
      type: q.AssignmentExpression,
      left: a.body[0].expression,
      right: {
        type: q.NGValueParameter
      },
      operator: "="
    };
  }

  function Jd(a) {
    this.$filter = a;
  }

  function Kd(a) {
    this.$filter = a;
  }

  function Mb(a, b, d) {
    this.ast = new q(a, d);
    this.astCompiler = d.csp ? new Kd(b) : new Jd(b);
  }

  function Ac(a) {
    return B(a.valueOf) ? a.valueOf() : Rg.call(a);
  }

  function Vf() {
    var a = T(),
        b = {
      "true": !0,
      "false": !1,
      "null": null,
      undefined: void 0
    },
        d,
        c;

    this.addLiteral = function (a, c) {
      b[a] = c;
    };

    this.setIdentifierFns = function (a, b) {
      d = a;
      c = b;
      return this;
    };

    this.$get = ["$filter", function (e) {
      function f(b, c) {
        var d, f;

        switch (_typeof(b)) {
          case "string":
            return f = b = b.trim(), d = a[f], d || (d = new Nb(G), d = new Mb(d, e, G).parse(b), a[f] = p(d)), s(d, c);

          case "function":
            return s(b, c);

          default:
            return s(E, c);
        }
      }

      function g(a, b, c) {
        return null == a || null == b ? a === b : "object" !== _typeof(a) || (a = Ac(a), "object" !== _typeof(a) || c) ? a === b || a !== a && b !== b : !1;
      }

      function k(a, b, c, d, e) {
        var f = d.inputs,
            h;

        if (1 === f.length) {
          var k = g,
              f = f[0];
          return a.$watch(function (a) {
            var b = f(a);
            g(b, k, f.isPure) || (h = d(a, void 0, void 0, [b]), k = b && Ac(b));
            return h;
          }, b, c, e);
        }

        for (var l = [], m = [], n = 0, p = f.length; n < p; n++) {
          l[n] = g, m[n] = null;
        }

        return a.$watch(function (a) {
          for (var b = !1, c = 0, e = f.length; c < e; c++) {
            var k = f[c](a);
            if (b || (b = !g(k, l[c], f[c].isPure))) m[c] = k, l[c] = k && Ac(k);
          }

          b && (h = d(a, void 0, void 0, m));
          return h;
        }, b, c, e);
      }

      function h(a, b, c, d, e) {
        function f() {
          h(m) && k();
        }

        function g(a, b, c, d) {
          m = u && d ? d[0] : n(a, b, c, d);
          h(m) && a.$$postDigest(f);
          return s(m);
        }

        var h = d.literal ? l : w,
            k,
            m,
            n = d.$$intercepted || d,
            s = d.$$interceptor || Ta,
            u = d.inputs && !n.inputs;
        g.literal = d.literal;
        g.constant = d.constant;
        g.inputs = d.inputs;
        p(g);
        return k = a.$watch(g, b, c, e);
      }

      function l(a) {
        var b = !0;
        r(a, function (a) {
          w(a) || (b = !1);
        });
        return b;
      }

      function m(a, b, c, d) {
        var e = a.$watch(function (a) {
          e();
          return d(a);
        }, b, c);
        return e;
      }

      function p(a) {
        a.constant ? a.$$watchDelegate = m : a.oneTime ? a.$$watchDelegate = h : a.inputs && (a.$$watchDelegate = k);
        return a;
      }

      function n(a, b) {
        function c(d) {
          return b(a(d));
        }

        c.$stateful = a.$stateful || b.$stateful;
        c.$$pure = a.$$pure && b.$$pure;
        return c;
      }

      function s(a, b) {
        if (!b) return a;
        a.$$interceptor && (b = n(a.$$interceptor, b), a = a.$$intercepted);

        var c = !1,
            d = function d(_d2, e, f, g) {
          _d2 = c && g ? g[0] : a(_d2, e, f, g);
          return b(_d2);
        };

        d.$$intercepted = a;
        d.$$interceptor = b;
        d.literal = a.literal;
        d.oneTime = a.oneTime;
        d.constant = a.constant;
        b.$stateful || (c = !a.inputs, d.inputs = a.inputs ? a.inputs : [a], b.$$pure || (d.inputs = d.inputs.map(function (a) {
          return a.isPure === Fd ? function (b) {
            return a(b);
          } : a;
        })));
        return p(d);
      }

      var G = {
        csp: Aa().noUnsafeEval,
        literals: Ia(b),
        isIdentifierStart: B(d) && d,
        isIdentifierContinue: B(c) && c
      };

      f.$$getAst = function (a) {
        var b = new Nb(G);
        return new Mb(b, e, G).getAst(a).ast;
      };

      return f;
    }];
  }

  function Xf() {
    var a = !0;
    this.$get = ["$rootScope", "$exceptionHandler", function (b, d) {
      return Ld(function (a) {
        b.$evalAsync(a);
      }, d, a);
    }];

    this.errorOnUnhandledRejections = function (b) {
      return w(b) ? (a = b, this) : a;
    };
  }

  function Yf() {
    var a = !0;
    this.$get = ["$browser", "$exceptionHandler", function (b, d) {
      return Ld(function (a) {
        b.defer(a);
      }, d, a);
    }];

    this.errorOnUnhandledRejections = function (b) {
      return w(b) ? (a = b, this) : a;
    };
  }

  function Ld(a, b, d) {
    function c() {
      return new e();
    }

    function e() {
      var a = this.promise = new f();

      this.resolve = function (b) {
        h(a, b);
      };

      this.reject = function (b) {
        m(a, b);
      };

      this.notify = function (b) {
        n(a, b);
      };
    }

    function f() {
      this.$$state = {
        status: 0
      };
    }

    function g() {
      for (; !w && x.length;) {
        var a = x.shift();

        if (!a.pur) {
          a.pur = !0;
          var c = a.value,
              c = "Possibly unhandled rejection: " + ("function" === typeof c ? c.toString().replace(/ \{[\s\S]*$/, "") : z(c) ? "undefined" : "string" !== typeof c ? Ie(c, void 0) : c);
          cc(a.value) ? b(a.value, c) : b(c);
        }
      }
    }

    function k(c) {
      !d || c.pending || 2 !== c.status || c.pur || (0 === w && 0 === x.length && a(g), x.push(c));
      !c.processScheduled && c.pending && (c.processScheduled = !0, ++w, a(function () {
        var e, f, k;
        k = c.pending;
        c.processScheduled = !1;
        c.pending = void 0;

        try {
          for (var l = 0, n = k.length; l < n; ++l) {
            c.pur = !0;
            f = k[l][0];
            e = k[l][c.status];

            try {
              B(e) ? h(f, e(c.value)) : 1 === c.status ? h(f, c.value) : m(f, c.value);
            } catch (p) {
              m(f, p), p && !0 === p.$$passToExceptionHandler && b(p);
            }
          }
        } finally {
          --w, d && 0 === w && a(g);
        }
      }));
    }

    function h(a, b) {
      a.$$state.status || (b === a ? p(a, v("qcycle", b)) : l(a, b));
    }

    function l(a, b) {
      function c(b) {
        g || (g = !0, l(a, b));
      }

      function d(b) {
        g || (g = !0, p(a, b));
      }

      function e(b) {
        n(a, b);
      }

      var f,
          g = !1;

      try {
        if (D(b) || B(b)) f = b.then;
        B(f) ? (a.$$state.status = -1, f.call(b, c, d, e)) : (a.$$state.value = b, a.$$state.status = 1, k(a.$$state));
      } catch (h) {
        d(h);
      }
    }

    function m(a, b) {
      a.$$state.status || p(a, b);
    }

    function p(a, b) {
      a.$$state.value = b;
      a.$$state.status = 2;
      k(a.$$state);
    }

    function n(c, d) {
      var e = c.$$state.pending;
      0 >= c.$$state.status && e && e.length && a(function () {
        for (var a, c, f = 0, g = e.length; f < g; f++) {
          c = e[f][0];
          a = e[f][3];

          try {
            n(c, B(a) ? a(d) : d);
          } catch (h) {
            b(h);
          }
        }
      });
    }

    function s(a) {
      var b = new f();
      m(b, a);
      return b;
    }

    function G(a, b, c) {
      var d = null;

      try {
        B(c) && (d = c());
      } catch (e) {
        return s(e);
      }

      return d && B(d.then) ? d.then(function () {
        return b(a);
      }, s) : b(a);
    }

    function t(a, b, c, d) {
      var e = new f();
      h(e, a);
      return e.then(b, c, d);
    }

    function q(a) {
      if (!B(a)) throw v("norslvr", a);
      var b = new f();
      a(function (a) {
        h(b, a);
      }, function (a) {
        m(b, a);
      });
      return b;
    }

    var v = F("$q", TypeError),
        w = 0,
        x = [];
    S(f.prototype, {
      then: function then(a, b, c) {
        if (z(a) && z(b) && z(c)) return this;
        var d = new f();
        this.$$state.pending = this.$$state.pending || [];
        this.$$state.pending.push([d, a, b, c]);
        0 < this.$$state.status && k(this.$$state);
        return d;
      },
      "catch": function _catch(a) {
        return this.then(null, a);
      },
      "finally": function _finally(a, b) {
        return this.then(function (b) {
          return G(b, y, a);
        }, function (b) {
          return G(b, s, a);
        }, b);
      }
    });
    var y = t;
    q.prototype = f.prototype;
    q.defer = c;
    q.reject = s;
    q.when = t;
    q.resolve = y;

    q.all = function (a) {
      var b = new f(),
          c = 0,
          d = H(a) ? [] : {};
      r(a, function (a, e) {
        c++;
        t(a).then(function (a) {
          d[e] = a;
          --c || h(b, d);
        }, function (a) {
          m(b, a);
        });
      });
      0 === c && h(b, d);
      return b;
    };

    q.race = function (a) {
      var b = c();
      r(a, function (a) {
        t(a).then(b.resolve, b.reject);
      });
      return b.promise;
    };

    return q;
  }

  function hg() {
    this.$get = ["$window", "$timeout", function (a, b) {
      var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
          c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
          e = !!d,
          f = e ? function (a) {
        var b = d(a);
        return function () {
          c(b);
        };
      } : function (a) {
        var c = b(a, 16.66, !1);
        return function () {
          b.cancel(c);
        };
      };
      f.supported = e;
      return f;
    }];
  }

  function Wf() {
    function a(a) {
      function b() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
        this.$$listeners = {};
        this.$$listenerCount = {};
        this.$$watchersCount = 0;
        this.$id = ++pb;
        this.$$ChildScope = null;
        this.$$suspended = !1;
      }

      b.prototype = a;
      return b;
    }

    var b = 10,
        d = F("$rootScope"),
        c = null,
        e = null;

    this.digestTtl = function (a) {
      arguments.length && (b = a);
      return b;
    };

    this.$get = ["$exceptionHandler", "$parse", "$browser", function (f, g, k) {
      function h(a) {
        a.currentScope.$$destroyed = !0;
      }

      function l(a) {
        9 === Ca && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));
        a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
      }

      function m() {
        this.$id = ++pb;
        this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
        this.$root = this;
        this.$$suspended = this.$$destroyed = !1;
        this.$$listeners = {};
        this.$$listenerCount = {};
        this.$$watchersCount = 0;
        this.$$isolateBindings = null;
      }

      function p(a) {
        if (v.$$phase) throw d("inprog", v.$$phase);
        v.$$phase = a;
      }

      function n(a, b) {
        do {
          a.$$watchersCount += b;
        } while (a = a.$parent);
      }

      function s(a, b, c) {
        do {
          a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
        } while (a = a.$parent);
      }

      function G() {}

      function t() {
        for (; y.length;) {
          try {
            y.shift()();
          } catch (a) {
            f(a);
          }
        }

        e = null;
      }

      function q() {
        null === e && (e = k.defer(function () {
          v.$apply(t);
        }, null, "$applyAsync"));
      }

      m.prototype = {
        constructor: m,
        $new: function $new(b, c) {
          var d;
          c = c || this;
          b ? (d = new m(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope());
          d.$parent = c;
          d.$$prevSibling = c.$$childTail;
          c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
          (b || c !== this) && d.$on("$destroy", h);
          return d;
        },
        $watch: function $watch(a, b, d, e) {
          var f = g(a);
          b = B(b) ? b : E;
          if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);
          var h = this,
              k = h.$$watchers,
              l = {
            fn: b,
            last: G,
            get: f,
            exp: e || a,
            eq: !!d
          };
          c = null;
          k || (k = h.$$watchers = [], k.$$digestWatchIndex = -1);
          k.unshift(l);
          k.$$digestWatchIndex++;
          n(this, 1);
          return function () {
            var a = cb(k, l);
            0 <= a && (n(h, -1), a < k.$$digestWatchIndex && k.$$digestWatchIndex--);
            c = null;
          };
        },
        $watchGroup: function $watchGroup(a, b) {
          function c() {
            h = !1;

            try {
              k ? (k = !1, b(e, e, g)) : b(e, d, g);
            } finally {
              for (var f = 0; f < a.length; f++) {
                d[f] = e[f];
              }
            }
          }

          var d = Array(a.length),
              e = Array(a.length),
              f = [],
              g = this,
              h = !1,
              k = !0;

          if (!a.length) {
            var l = !0;
            g.$evalAsync(function () {
              l && b(e, e, g);
            });
            return function () {
              l = !1;
            };
          }

          if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
            e[0] = a;
            d[0] = c;
            b(e, a === c ? e : d, f);
          });
          r(a, function (a, b) {
            var d = g.$watch(a, function (a) {
              e[b] = a;
              h || (h = !0, g.$evalAsync(c));
            });
            f.push(d);
          });
          return function () {
            for (; f.length;) {
              f.shift()();
            }
          };
        },
        $watchCollection: function $watchCollection(a, b) {
          function c(a) {
            e = a;
            var b, d, g, h;

            if (!z(e)) {
              if (D(e)) {
                if (ya(e)) for (f !== n && (f = n, t = f.length = 0, l++), a = e.length, t !== a && (l++, f.length = t = a), b = 0; b < a; b++) {
                  h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
                } else {
                  f !== p && (f = p = {}, t = 0, l++);
                  a = 0;

                  for (b in e) {
                    ta.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (t++, f[b] = g, l++));
                  }

                  if (t > a) for (b in l++, f) {
                    ta.call(e, b) || (t--, delete f[b]);
                  }
                }
              } else f !== e && (f = e, l++);
              return l;
            }
          }

          c.$$pure = g(a).literal;
          c.$stateful = !c.$$pure;
          var d = this,
              e,
              f,
              h,
              k = 1 < b.length,
              l = 0,
              m = g(a, c),
              n = [],
              p = {},
              s = !0,
              t = 0;
          return this.$watch(m, function () {
            s ? (s = !1, b(e, e, d)) : b(e, h, d);
            if (k) if (D(e)) {
              if (ya(e)) {
                h = Array(e.length);

                for (var a = 0; a < e.length; a++) {
                  h[a] = e[a];
                }
              } else for (a in h = {}, e) {
                ta.call(e, a) && (h[a] = e[a]);
              }
            } else h = e;
          });
        },
        $digest: function $digest() {
          var a,
              g,
              h,
              l,
              m,
              n,
              s,
              r = b,
              q,
              y = w.length ? v : this,
              N = [],
              z,
              A;
          p("$digest");
          k.$$checkUrlChange();
          this === v && null !== e && (k.defer.cancel(e), t());
          c = null;

          do {
            s = !1;
            q = y;

            for (n = 0; n < w.length; n++) {
              try {
                A = w[n], l = A.fn, l(A.scope, A.locals);
              } catch (C) {
                f(C);
              }

              c = null;
            }

            w.length = 0;

            a: do {
              if (n = !q.$$suspended && q.$$watchers) for (n.$$digestWatchIndex = n.length; n.$$digestWatchIndex--;) {
                try {
                  if (a = n[n.$$digestWatchIndex]) if (m = a.get, (g = m(q)) !== (h = a.last) && !(a.eq ? va(g, h) : X(g) && X(h))) s = !0, c = a, a.last = a.eq ? Ia(g, null) : g, l = a.fn, l(g, h === G ? g : h, q), 5 > r && (z = 4 - r, N[z] || (N[z] = []), N[z].push({
                    msg: B(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                    newVal: g,
                    oldVal: h
                  }));else if (a === c) {
                    s = !1;
                    break a;
                  }
                } catch (E) {
                  f(E);
                }
              }
              if (!(n = !q.$$suspended && q.$$watchersCount && q.$$childHead || q !== y && q.$$nextSibling)) for (; q !== y && !(n = q.$$nextSibling);) {
                q = q.$parent;
              }
            } while (q = n);

            if ((s || w.length) && !r--) throw v.$$phase = null, d("infdig", b, N);
          } while (s || w.length);

          for (v.$$phase = null; J < x.length;) {
            try {
              x[J++]();
            } catch (D) {
              f(D);
            }
          }

          x.length = J = 0;
          k.$$checkUrlChange();
        },
        $suspend: function $suspend() {
          this.$$suspended = !0;
        },
        $isSuspended: function $isSuspended() {
          return this.$$suspended;
        },
        $resume: function $resume() {
          this.$$suspended = !1;
        },
        $destroy: function $destroy() {
          if (!this.$$destroyed) {
            var a = this.$parent;
            this.$broadcast("$destroy");
            this.$$destroyed = !0;
            this === v && k.$$applicationDestroyed();
            n(this, -this.$$watchersCount);

            for (var b in this.$$listenerCount) {
              s(this, this.$$listenerCount[b], b);
            }

            a && a.$$childHead === this && (a.$$childHead = this.$$nextSibling);
            a && a.$$childTail === this && (a.$$childTail = this.$$prevSibling);
            this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
            this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
            this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = E;

            this.$on = this.$watch = this.$watchGroup = function () {
              return E;
            };

            this.$$listeners = {};
            this.$$nextSibling = null;
            l(this);
          }
        },
        $eval: function $eval(a, b) {
          return g(a)(this, b);
        },
        $evalAsync: function $evalAsync(a, b) {
          v.$$phase || w.length || k.defer(function () {
            w.length && v.$digest();
          }, null, "$evalAsync");
          w.push({
            scope: this,
            fn: g(a),
            locals: b
          });
        },
        $$postDigest: function $$postDigest(a) {
          x.push(a);
        },
        $apply: function $apply(a) {
          try {
            p("$apply");

            try {
              return this.$eval(a);
            } finally {
              v.$$phase = null;
            }
          } catch (b) {
            f(b);
          } finally {
            try {
              v.$digest();
            } catch (c) {
              throw f(c), c;
            }
          }
        },
        $applyAsync: function $applyAsync(a) {
          function b() {
            c.$eval(a);
          }

          var c = this;
          a && y.push(b);
          a = g(a);
          q();
        },
        $on: function $on(a, b) {
          var c = this.$$listeners[a];
          c || (this.$$listeners[a] = c = []);
          c.push(b);
          var d = this;

          do {
            d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
          } while (d = d.$parent);

          var e = this;
          return function () {
            var d = c.indexOf(b);
            -1 !== d && (delete c[d], s(e, 1, a));
          };
        },
        $emit: function $emit(a, b) {
          var c = [],
              d,
              e = this,
              g = !1,
              h = {
            name: a,
            targetScope: e,
            stopPropagation: function stopPropagation() {
              g = !0;
            },
            preventDefault: function preventDefault() {
              h.defaultPrevented = !0;
            },
            defaultPrevented: !1
          },
              k = db([h], arguments, 1),
              l,
              m;

          do {
            d = e.$$listeners[a] || c;
            h.currentScope = e;
            l = 0;

            for (m = d.length; l < m; l++) {
              if (d[l]) try {
                d[l].apply(null, k);
              } catch (n) {
                f(n);
              } else d.splice(l, 1), l--, m--;
            }

            if (g) break;
            e = e.$parent;
          } while (e);

          h.currentScope = null;
          return h;
        },
        $broadcast: function $broadcast(a, b) {
          var c = this,
              d = this,
              e = {
            name: a,
            targetScope: this,
            preventDefault: function preventDefault() {
              e.defaultPrevented = !0;
            },
            defaultPrevented: !1
          };
          if (!this.$$listenerCount[a]) return e;

          for (var g = db([e], arguments, 1), h, k; c = d;) {
            e.currentScope = c;
            d = c.$$listeners[a] || [];
            h = 0;

            for (k = d.length; h < k; h++) {
              if (d[h]) try {
                d[h].apply(null, g);
              } catch (l) {
                f(l);
              } else d.splice(h, 1), h--, k--;
            }

            if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) {
              c = c.$parent;
            }
          }

          e.currentScope = null;
          return e;
        }
      };
      var v = new m(),
          w = v.$$asyncQueue = [],
          x = v.$$postDigestQueue = [],
          y = v.$$applyAsyncQueue = [],
          J = 0;
      return v;
    }];
  }

  function Le() {
    var a = /^\s*(https?|s?ftp|mailto|tel|file):/,
        b = /^\s*((https?|ftp|file|blob):|data:image\/)/;

    this.aHrefSanitizationWhitelist = function (b) {
      return w(b) ? (a = b, this) : a;
    };

    this.imgSrcSanitizationWhitelist = function (a) {
      return w(a) ? (b = a, this) : b;
    };

    this.$get = function () {
      return function (d, c) {
        var e = c ? b : a,
            f = ga(d && d.trim()).href;
        return "" === f || f.match(e) ? d : "unsafe:" + f;
      };
    };
  }

  function Sg(a) {
    if ("self" === a) return a;

    if (A(a)) {
      if (-1 < a.indexOf("***")) throw Ea("iwcard", a);
      a = Md(a).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*");
      return new RegExp("^" + a + "$");
    }

    if (ab(a)) return new RegExp("^" + a.source + "$");
    throw Ea("imatcher");
  }

  function Nd(a) {
    var b = [];
    w(a) && r(a, function (a) {
      b.push(Sg(a));
    });
    return b;
  }

  function $f() {
    this.SCE_CONTEXTS = V;
    var a = ["self"],
        b = [];

    this.resourceUrlWhitelist = function (b) {
      arguments.length && (a = Nd(b));
      return a;
    };

    this.resourceUrlBlacklist = function (a) {
      arguments.length && (b = Nd(a));
      return b;
    };

    this.$get = ["$injector", "$$sanitizeUri", function (d, c) {
      function e(a, b) {
        var c;
        "self" === a ? (c = Bc(b, Od)) || (C.document.baseURI ? c = C.document.baseURI : (Na || (Na = C.document.createElement("a"), Na.href = ".", Na = Na.cloneNode(!1)), c = Na.href), c = Bc(b, c)) : c = !!a.exec(b.href);
        return c;
      }

      function f(a) {
        var b = function b(a) {
          this.$$unwrapTrustedValue = function () {
            return a;
          };
        };

        a && (b.prototype = new a());

        b.prototype.valueOf = function () {
          return this.$$unwrapTrustedValue();
        };

        b.prototype.toString = function () {
          return this.$$unwrapTrustedValue().toString();
        };

        return b;
      }

      var g = function g(a) {
        throw Ea("unsafe");
      };

      d.has("$sanitize") && (g = d.get("$sanitize"));
      var k = f(),
          h = {};
      h[V.HTML] = f(k);
      h[V.CSS] = f(k);
      h[V.MEDIA_URL] = f(k);
      h[V.URL] = f(h[V.MEDIA_URL]);
      h[V.JS] = f(k);
      h[V.RESOURCE_URL] = f(h[V.URL]);
      return {
        trustAs: function trustAs(a, b) {
          var c = h.hasOwnProperty(a) ? h[a] : null;
          if (!c) throw Ea("icontext", a, b);
          if (null === b || z(b) || "" === b) return b;
          if ("string" !== typeof b) throw Ea("itype", a);
          return new c(b);
        },
        getTrusted: function getTrusted(d, f) {
          if (null === f || z(f) || "" === f) return f;
          var k = h.hasOwnProperty(d) ? h[d] : null;
          if (k && f instanceof k) return f.$$unwrapTrustedValue();
          B(f.$$unwrapTrustedValue) && (f = f.$$unwrapTrustedValue());
          if (d === V.MEDIA_URL || d === V.URL) return c(f.toString(), d === V.MEDIA_URL);

          if (d === V.RESOURCE_URL) {
            var k = ga(f.toString()),
                n,
                s,
                r = !1;
            n = 0;

            for (s = a.length; n < s; n++) {
              if (e(a[n], k)) {
                r = !0;
                break;
              }
            }

            if (r) for (n = 0, s = b.length; n < s; n++) {
              if (e(b[n], k)) {
                r = !1;
                break;
              }
            }
            if (r) return f;
            throw Ea("insecurl", f.toString());
          }

          if (d === V.HTML) return g(f);
          throw Ea("unsafe");
        },
        valueOf: function valueOf(a) {
          return a instanceof k ? a.$$unwrapTrustedValue() : a;
        }
      };
    }];
  }

  function Zf() {
    var a = !0;

    this.enabled = function (b) {
      arguments.length && (a = !!b);
      return a;
    };

    this.$get = ["$parse", "$sceDelegate", function (b, d) {
      if (a && 8 > Ca) throw Ea("iequirks");
      var c = ja(V);

      c.isEnabled = function () {
        return a;
      };

      c.trustAs = d.trustAs;
      c.getTrusted = d.getTrusted;
      c.valueOf = d.valueOf;
      a || (c.trustAs = c.getTrusted = function (a, b) {
        return b;
      }, c.valueOf = Ta);

      c.parseAs = function (a, d) {
        var e = b(d);
        return e.literal && e.constant ? e : b(d, function (b) {
          return c.getTrusted(a, b);
        });
      };

      var e = c.parseAs,
          f = c.getTrusted,
          g = c.trustAs;
      r(V, function (a, b) {
        var d = K(b);

        c[("parse_as_" + d).replace(Cc, wb)] = function (b) {
          return e(a, b);
        };

        c[("get_trusted_" + d).replace(Cc, wb)] = function (b) {
          return f(a, b);
        };

        c[("trust_as_" + d).replace(Cc, wb)] = function (b) {
          return g(a, b);
        };
      });
      return c;
    }];
  }

  function ag() {
    this.$get = ["$window", "$document", function (a, b) {
      var d = {},
          c = !((!a.nw || !a.nw.process) && a.chrome && (a.chrome.app && a.chrome.app.runtime || !a.chrome.app && a.chrome.runtime && a.chrome.runtime.id)) && a.history && a.history.pushState,
          e = fa((/android (\d+)/.exec(K((a.navigator || {}).userAgent)) || [])[1]),
          f = /Boxee/i.test((a.navigator || {}).userAgent),
          g = b[0] || {},
          k = g.body && g.body.style,
          h = !1,
          l = !1;
      k && (h = !!("transition" in k || "webkitTransition" in k), l = !!("animation" in k || "webkitAnimation" in k));
      return {
        history: !(!c || 4 > e || f),
        hasEvent: function hasEvent(a) {
          if ("input" === a && Ca) return !1;

          if (z(d[a])) {
            var b = g.createElement("div");
            d[a] = "on" + a in b;
          }

          return d[a];
        },
        csp: Aa(),
        transitions: h,
        animations: l,
        android: e
      };
    }];
  }

  function bg() {
    this.$get = ia(function (a) {
      return new Tg(a);
    });
  }

  function Tg(a) {
    function b() {
      var a = e.pop();
      return a && a.cb;
    }

    function d(a) {
      for (var b = e.length - 1; 0 <= b; --b) {
        var c = e[b];
        if (c.type === a) return e.splice(b, 1), c.cb;
      }
    }

    var c = {},
        e = [],
        f = this.ALL_TASKS_TYPE = "$$all$$",
        g = this.DEFAULT_TASK_TYPE = "$$default$$";

    this.completeTask = function (e, h) {
      h = h || g;

      try {
        e();
      } finally {
        var l;
        l = h || g;
        c[l] && (c[l]--, c[f]--);
        l = c[h];
        var m = c[f];
        if (!m || !l) for (l = m ? d : b; m = l(h);) {
          try {
            m();
          } catch (p) {
            a.error(p);
          }
        }
      }
    };

    this.incTaskCount = function (a) {
      a = a || g;
      c[a] = (c[a] || 0) + 1;
      c[f] = (c[f] || 0) + 1;
    };

    this.notifyWhenNoPendingTasks = function (a, b) {
      b = b || f;
      c[b] ? e.push({
        type: b,
        cb: a
      }) : a();
    };
  }

  function dg() {
    var a;

    this.httpOptions = function (b) {
      return b ? (a = b, this) : a;
    };

    this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function (b, d, c, e, f) {
      function g(k, h) {
        g.totalPendingRequests++;
        if (!A(k) || z(d.get(k))) k = f.getTrustedResourceUrl(k);
        var l = c.defaults && c.defaults.transformResponse;
        H(l) ? l = l.filter(function (a) {
          return a !== vc;
        }) : l === vc && (l = null);
        return c.get(k, S({
          cache: d,
          transformResponse: l
        }, a))["finally"](function () {
          g.totalPendingRequests--;
        }).then(function (a) {
          return d.put(k, a.data);
        }, function (a) {
          h || (a = Ug("tpload", k, a.status, a.statusText), b(a));
          return e.reject(a);
        });
      }

      g.totalPendingRequests = 0;
      return g;
    }];
  }

  function eg() {
    this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
      return {
        findBindings: function findBindings(a, b, d) {
          a = a.getElementsByClassName("ng-binding");
          var g = [];
          r(a, function (a) {
            var c = ca.element(a).data("$binding");
            c && r(c, function (c) {
              d ? new RegExp("(^|\\s)" + Md(b) + "(\\s|\\||$)").test(c) && g.push(a) : -1 !== c.indexOf(b) && g.push(a);
            });
          });
          return g;
        },
        findModels: function findModels(a, b, d) {
          for (var g = ["ng-", "data-ng-", "ng\\:"], k = 0; k < g.length; ++k) {
            var h = a.querySelectorAll("[" + g[k] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
            if (h.length) return h;
          }
        },
        getLocation: function getLocation() {
          return d.url();
        },
        setLocation: function setLocation(b) {
          b !== d.url() && (d.url(b), a.$digest());
        },
        whenStable: function whenStable(a) {
          b.notifyWhenNoOutstandingRequests(a);
        }
      };
    }];
  }

  function fg() {
    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, e) {
      function f(f, h, l) {
        B(f) || (l = h, h = f, f = E);
        var m = Ha.call(arguments, 3),
            p = w(l) && !l,
            n = (p ? c : d).defer(),
            s = n.promise,
            r;
        r = b.defer(function () {
          try {
            n.resolve(f.apply(null, m));
          } catch (b) {
            n.reject(b), e(b);
          } finally {
            delete g[s.$$timeoutId];
          }

          p || a.$apply();
        }, h, "$timeout");
        s.$$timeoutId = r;
        g[r] = n;
        return s;
      }

      var g = {};

      f.cancel = function (a) {
        if (!a) return !1;
        if (!a.hasOwnProperty("$$timeoutId")) throw Vg("badprom");
        if (!g.hasOwnProperty(a.$$timeoutId)) return !1;
        a = a.$$timeoutId;
        var c = g[a],
            d = c.promise;
        d.$$state && (d.$$state.pur = !0);
        c.reject("canceled");
        delete g[a];
        return b.defer.cancel(a);
      };

      return f;
    }];
  }

  function ga(a) {
    if (!A(a)) return a;
    Ca && (aa.setAttribute("href", a), a = aa.href);
    aa.setAttribute("href", a);
    a = aa.hostname;
    !Wg && -1 < a.indexOf(":") && (a = "[" + a + "]");
    return {
      href: aa.href,
      protocol: aa.protocol ? aa.protocol.replace(/:$/, "") : "",
      host: aa.host,
      search: aa.search ? aa.search.replace(/^\?/, "") : "",
      hash: aa.hash ? aa.hash.replace(/^#/, "") : "",
      hostname: a,
      port: aa.port,
      pathname: "/" === aa.pathname.charAt(0) ? aa.pathname : "/" + aa.pathname
    };
  }

  function Jg(a) {
    var b = [Od].concat(a.map(ga));
    return function (a) {
      a = ga(a);
      return b.some(Bc.bind(null, a));
    };
  }

  function Bc(a, b) {
    a = ga(a);
    b = ga(b);
    return a.protocol === b.protocol && a.host === b.host;
  }

  function gg() {
    this.$get = ia(C);
  }

  function Pd(a) {
    function b(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {
        return a;
      }
    }

    var d = a[0] || {},
        c = {},
        e = "";
    return function () {
      var a, g, k, h, l;

      try {
        a = d.cookie || "";
      } catch (m) {
        a = "";
      }

      if (a !== e) for (e = a, a = e.split("; "), c = {}, k = 0; k < a.length; k++) {
        g = a[k], h = g.indexOf("="), 0 < h && (l = b(g.substring(0, h)), z(c[l]) && (c[l] = b(g.substring(h + 1))));
      }
      return c;
    };
  }

  function kg() {
    this.$get = Pd;
  }

  function dd(a) {
    function b(d, c) {
      if (D(d)) {
        var e = {};
        r(d, function (a, c) {
          e[c] = b(c, a);
        });
        return e;
      }

      return a.factory(d + "Filter", c);
    }

    this.register = b;
    this.$get = ["$injector", function (a) {
      return function (b) {
        return a.get(b + "Filter");
      };
    }];
    b("currency", Qd);
    b("date", Rd);
    b("filter", Xg);
    b("json", Yg);
    b("limitTo", Zg);
    b("lowercase", $g);
    b("number", Sd);
    b("orderBy", Td);
    b("uppercase", ah);
  }

  function Xg() {
    return function (a, b, d, c) {
      if (!ya(a)) {
        if (null == a) return a;
        throw F("filter")("notarray", a);
      }

      c = c || "$";
      var e;

      switch (Dc(b)) {
        case "function":
          break;

        case "boolean":
        case "null":
        case "number":
        case "string":
          e = !0;

        case "object":
          b = bh(b, d, c, e);
          break;

        default:
          return a;
      }

      return Array.prototype.filter.call(a, b);
    };
  }

  function bh(a, b, d, c) {
    var e = D(a) && d in a;
    !0 === b ? b = va : B(b) || (b = function b(a, _b) {
      if (z(a)) return !1;
      if (null === a || null === _b) return a === _b;
      if (D(_b) || D(a) && !bc(a)) return !1;
      a = K("" + a);
      _b = K("" + _b);
      return -1 !== a.indexOf(_b);
    });
    return function (f) {
      return e && !D(f) ? Fa(f, a[d], b, d, !1) : Fa(f, a, b, d, c);
    };
  }

  function Fa(a, b, d, c, e, f) {
    var g = Dc(a),
        k = Dc(b);
    if ("string" === k && "!" === b.charAt(0)) return !Fa(a, b.substring(1), d, c, e);
    if (H(a)) return a.some(function (a) {
      return Fa(a, b, d, c, e);
    });

    switch (g) {
      case "object":
        var h;

        if (e) {
          for (h in a) {
            if (h.charAt && "$" !== h.charAt(0) && Fa(a[h], b, d, c, !0)) return !0;
          }

          return f ? !1 : Fa(a, b, d, c, !1);
        }

        if ("object" === k) {
          for (h in b) {
            if (f = b[h], !B(f) && !z(f) && (g = h === c, !Fa(g ? a : a[h], f, d, c, g, g))) return !1;
          }

          return !0;
        }

        return d(a, b);

      case "function":
        return !1;

      default:
        return d(a, b);
    }
  }

  function Dc(a) {
    return null === a ? "null" : _typeof(a);
  }

  function Qd(a) {
    var b = a.NUMBER_FORMATS;
    return function (a, c, e) {
      z(c) && (c = b.CURRENCY_SYM);
      z(e) && (e = b.PATTERNS[1].maxFrac);
      var f = c ? /\u00A4/g : /\s*\u00A4\s*/g;
      return null == a ? a : Ud(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(f, c);
    };
  }

  function Sd(a) {
    var b = a.NUMBER_FORMATS;
    return function (a, c) {
      return null == a ? a : Ud(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
    };
  }

  function ch(a) {
    var b = 0,
        d,
        c,
        e,
        f,
        g;
    -1 < (c = a.indexOf(Vd)) && (a = a.replace(Vd, ""));
    0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);

    for (e = 0; a.charAt(e) === Ec; e++) {
      ;
    }

    if (e === (g = a.length)) d = [0], c = 1;else {
      for (g--; a.charAt(g) === Ec;) {
        g--;
      }

      c -= e;
      d = [];

      for (f = 0; e <= g; e++, f++) {
        d[f] = +a.charAt(e);
      }
    }
    c > Wd && (d = d.splice(0, Wd - 1), b = c - 1, c = 1);
    return {
      d: d,
      e: b,
      i: c
    };
  }

  function dh(a, b, d, c) {
    var e = a.d,
        f = e.length - a.i;
    b = z(b) ? Math.min(Math.max(d, f), c) : +b;
    d = b + a.i;
    c = e[d];

    if (0 < d) {
      e.splice(Math.max(a.i, d));

      for (var g = d; g < e.length; g++) {
        e[g] = 0;
      }
    } else for (f = Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1), e[0] = 0, g = 1; g < d; g++) {
      e[g] = 0;
    }

    if (5 <= c) if (0 > d - 1) {
      for (c = 0; c > d; c--) {
        e.unshift(0), a.i++;
      }

      e.unshift(1);
      a.i++;
    } else e[d - 1]++;

    for (; f < Math.max(0, b); f++) {
      e.push(0);
    }

    if (b = e.reduceRight(function (a, b, c, d) {
      b += a;
      d[c] = b % 10;
      return Math.floor(b / 10);
    }, 0)) e.unshift(b), a.i++;
  }

  function Ud(a, b, d, c, e) {
    if (!A(a) && !W(a) || isNaN(a)) return "";
    var f = !isFinite(a),
        g = !1,
        k = Math.abs(a) + "",
        h = "";
    if (f) h = "\u221E";else {
      g = ch(k);
      dh(g, e, b.minFrac, b.maxFrac);
      h = g.d;
      k = g.i;
      e = g.e;
      f = [];

      for (g = h.reduce(function (a, b) {
        return a && !b;
      }, !0); 0 > k;) {
        h.unshift(0), k++;
      }

      0 < k ? f = h.splice(k, h.length) : (f = h, h = [0]);
      k = [];

      for (h.length >= b.lgSize && k.unshift(h.splice(-b.lgSize, h.length).join("")); h.length > b.gSize;) {
        k.unshift(h.splice(-b.gSize, h.length).join(""));
      }

      h.length && k.unshift(h.join(""));
      h = k.join(d);
      f.length && (h += c + f.join(""));
      e && (h += "e+" + e);
    }
    return 0 > a && !g ? b.negPre + h + b.negSuf : b.posPre + h + b.posSuf;
  }

  function Ob(a, b, d, c) {
    var e = "";
    if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, e = "-");

    for (a = "" + a; a.length < b;) {
      a = Ec + a;
    }

    d && (a = a.substr(a.length - b));
    return e + a;
  }

  function ea(a, b, d, c, e) {
    d = d || 0;
    return function (f) {
      f = f["get" + a]();
      if (0 < d || f > -d) f += d;
      0 === f && -12 === d && (f = 12);
      return Ob(f, b, c, e);
    };
  }

  function kb(a, b, d) {
    return function (c, e) {
      var f = c["get" + a](),
          g = ub((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);
      return e[g][f];
    };
  }

  function Xd(a) {
    var b = new Date(a, 0, 1).getDay();
    return new Date(a, 0, (4 >= b ? 5 : 12) - b);
  }

  function Yd(a) {
    return function (b) {
      var d = Xd(b.getFullYear());
      b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;
      b = 1 + Math.round(b / 6048E5);
      return Ob(b, a);
    };
  }

  function Fc(a, b) {
    return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
  }

  function Rd(a) {
    function b(a) {
      var b;

      if (b = a.match(d)) {
        a = new Date(0);
        var f = 0,
            g = 0,
            k = b[8] ? a.setUTCFullYear : a.setFullYear,
            h = b[8] ? a.setUTCHours : a.setHours;
        b[9] && (f = fa(b[9] + b[10]), g = fa(b[9] + b[11]));
        k.call(a, fa(b[1]), fa(b[2]) - 1, fa(b[3]));
        f = fa(b[4] || 0) - f;
        g = fa(b[5] || 0) - g;
        k = fa(b[6] || 0);
        b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
        h.call(a, f, g, k, b);
      }

      return a;
    }

    var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, d, f) {
      var g = "",
          k = [],
          h,
          l;
      d = d || "mediumDate";
      d = a.DATETIME_FORMATS[d] || d;
      A(c) && (c = eh.test(c) ? fa(c) : b(c));
      W(c) && (c = new Date(c));
      if (!ha(c) || !isFinite(c.getTime())) return c;

      for (; d;) {
        (l = fh.exec(d)) ? (k = db(k, l, 1), d = k.pop()) : (k.push(d), d = null);
      }

      var m = c.getTimezoneOffset();
      f && (m = ec(f, m), c = fc(c, f, !0));
      r(k, function (b) {
        h = gh[b];
        g += h ? h(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
      });
      return g;
    };
  }

  function Yg() {
    return function (a, b) {
      z(b) && (b = 2);
      return eb(a, b);
    };
  }

  function Zg() {
    return function (a, b, d) {
      b = Infinity === Math.abs(Number(b)) ? Number(b) : fa(b);
      if (X(b)) return a;
      W(a) && (a = a.toString());
      if (!ya(a)) return a;
      d = !d || isNaN(d) ? 0 : fa(d);
      d = 0 > d ? Math.max(0, a.length + d) : d;
      return 0 <= b ? Gc(a, d, d + b) : 0 === d ? Gc(a, b, a.length) : Gc(a, Math.max(0, d + b), d);
    };
  }

  function Gc(a, b, d) {
    return A(a) ? a.slice(b, d) : Ha.call(a, b, d);
  }

  function Td(a) {
    function b(b) {
      return b.map(function (b) {
        var c = 1,
            d = Ta;
        if (B(b)) d = b;else if (A(b)) {
          if ("+" === b.charAt(0) || "-" === b.charAt(0)) c = "-" === b.charAt(0) ? -1 : 1, b = b.substring(1);
          if ("" !== b && (d = a(b), d.constant)) var e = d(),
              d = function d(a) {
            return a[e];
          };
        }
        return {
          get: d,
          descending: c
        };
      });
    }

    function d(a) {
      switch (_typeof(a)) {
        case "number":
        case "boolean":
        case "string":
          return !0;

        default:
          return !1;
      }
    }

    function c(a, b) {
      var c = 0,
          d = a.type,
          h = b.type;

      if (d === h) {
        var h = a.value,
            l = b.value;
        "string" === d ? (h = h.toLowerCase(), l = l.toLowerCase()) : "object" === d && (D(h) && (h = a.index), D(l) && (l = b.index));
        h !== l && (c = h < l ? -1 : 1);
      } else c = "undefined" === d ? 1 : "undefined" === h ? -1 : "null" === d ? 1 : "null" === h ? -1 : d < h ? -1 : 1;

      return c;
    }

    return function (a, f, g, k) {
      if (null == a) return a;
      if (!ya(a)) throw F("orderBy")("notarray", a);
      H(f) || (f = [f]);
      0 === f.length && (f = ["+"]);
      var h = b(f),
          l = g ? -1 : 1,
          m = B(k) ? k : c;
      a = Array.prototype.map.call(a, function (a, b) {
        return {
          value: a,
          tieBreaker: {
            value: b,
            type: "number",
            index: b
          },
          predicateValues: h.map(function (c) {
            var e = c.get(a);
            c = _typeof(e);
            if (null === e) c = "null";else if ("object" === c) a: {
              if (B(e.valueOf) && (e = e.valueOf(), d(e))) break a;
              bc(e) && (e = e.toString(), d(e));
            }
            return {
              value: e,
              type: c,
              index: b
            };
          })
        };
      });
      a.sort(function (a, b) {
        for (var d = 0, e = h.length; d < e; d++) {
          var f = m(a.predicateValues[d], b.predicateValues[d]);
          if (f) return f * h[d].descending * l;
        }

        return (m(a.tieBreaker, b.tieBreaker) || c(a.tieBreaker, b.tieBreaker)) * l;
      });
      return a = a.map(function (a) {
        return a.value;
      });
    };
  }

  function Ra(a) {
    B(a) && (a = {
      link: a
    });
    a.restrict = a.restrict || "AC";
    return ia(a);
  }

  function Pb(a, b, d, c, e) {
    this.$$controls = [];
    this.$error = {};
    this.$$success = {};
    this.$pending = void 0;
    this.$name = e(b.name || b.ngForm || "")(d);
    this.$dirty = !1;
    this.$valid = this.$pristine = !0;
    this.$submitted = this.$invalid = !1;
    this.$$parentForm = lb;
    this.$$element = a;
    this.$$animate = c;
    Zd(this);
  }

  function Zd(a) {
    a.$$classCache = {};
    a.$$classCache[$d] = !(a.$$classCache[mb] = a.$$element.hasClass(mb));
  }

  function ae(a) {
    function b(a, b, c) {
      c && !a.$$classCache[b] ? (a.$$animate.addClass(a.$$element, b), a.$$classCache[b] = !0) : !c && a.$$classCache[b] && (a.$$animate.removeClass(a.$$element, b), a.$$classCache[b] = !1);
    }

    function d(a, c, d) {
      c = c ? "-" + Vc(c, "-") : "";
      b(a, mb + c, !0 === d);
      b(a, $d + c, !1 === d);
    }

    var c = a.set,
        e = a.unset;

    a.clazz.prototype.$setValidity = function (a, g, k) {
      z(g) ? (this.$pending || (this.$pending = {}), c(this.$pending, a, k)) : (this.$pending && e(this.$pending, a, k), be(this.$pending) && (this.$pending = void 0));
      Ga(g) ? g ? (e(this.$error, a, k), c(this.$$success, a, k)) : (c(this.$error, a, k), e(this.$$success, a, k)) : (e(this.$error, a, k), e(this.$$success, a, k));
      this.$pending ? (b(this, "ng-pending", !0), this.$valid = this.$invalid = void 0, d(this, "", null)) : (b(this, "ng-pending", !1), this.$valid = be(this.$error), this.$invalid = !this.$valid, d(this, "", this.$valid));
      g = this.$pending && this.$pending[a] ? void 0 : this.$error[a] ? !1 : this.$$success[a] ? !0 : null;
      d(this, a, g);
      this.$$parentForm.$setValidity(a, g, this);
    };
  }

  function be(a) {
    if (a) for (var b in a) {
      if (a.hasOwnProperty(b)) return !1;
    }
    return !0;
  }

  function Hc(a) {
    a.$formatters.push(function (b) {
      return a.$isEmpty(b) ? b : b.toString();
    });
  }

  function Sa(a, b, d, c, e, f) {
    var g = K(b[0].type);

    if (!e.android) {
      var k = !1;
      b.on("compositionstart", function () {
        k = !0;
      });
      b.on("compositionupdate", function (a) {
        if (z(a.data) || "" === a.data) k = !1;
      });
      b.on("compositionend", function () {
        k = !1;
        l();
      });
    }

    var h,
        l = function l(a) {
      h && (f.defer.cancel(h), h = null);

      if (!k) {
        var e = b.val();
        a = a && a.type;
        "password" === g || d.ngTrim && "false" === d.ngTrim || (e = U(e));
        (c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a);
      }
    };

    if (e.hasEvent("input")) b.on("input", l);else {
      var m = function m(a, b, c) {
        h || (h = f.defer(function () {
          h = null;
          b && b.value === c || l(a);
        }));
      };

      b.on("keydown", function (a) {
        var b = a.keyCode;
        91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
      });
      if (e.hasEvent("paste")) b.on("paste cut drop", m);
    }
    b.on("change", l);
    if (ce[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown", function (a) {
      if (!h) {
        var b = this.validity,
            c = b.badInput,
            d = b.typeMismatch;
        h = f.defer(function () {
          h = null;
          b.badInput === c && b.typeMismatch === d || l(a);
        });
      }
    });

    c.$render = function () {
      var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
      b.val() !== a && b.val(a);
    };
  }

  function Qb(a, b) {
    return function (d, c) {
      var e, f;
      if (ha(d)) return d;

      if (A(d)) {
        '"' === d.charAt(0) && '"' === d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
        if (hh.test(d)) return new Date(d);
        a.lastIndex = 0;
        if (e = a.exec(d)) return e.shift(), f = c ? {
          yyyy: c.getFullYear(),
          MM: c.getMonth() + 1,
          dd: c.getDate(),
          HH: c.getHours(),
          mm: c.getMinutes(),
          ss: c.getSeconds(),
          sss: c.getMilliseconds() / 1E3
        } : {
          yyyy: 1970,
          MM: 1,
          dd: 1,
          HH: 0,
          mm: 0,
          ss: 0,
          sss: 0
        }, r(e, function (a, c) {
          c < b.length && (f[b[c]] = +a);
        }), e = new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0), 100 > f.yyyy && e.setFullYear(f.yyyy), e;
      }

      return NaN;
    };
  }

  function nb(a, b, d, c) {
    return function (e, f, g, k, h, l, m, p) {
      function n(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime());
      }

      function s(a) {
        return w(a) && !ha(a) ? r(a) || void 0 : a;
      }

      function r(a, b) {
        var c = k.$options.getOption("timezone");
        v && v !== c && (b = Sc(b, ec(v)));
        var e = d(a, b);
        !isNaN(e) && c && (e = fc(e, c));
        return e;
      }

      Ic(e, f, g, k, a);
      Sa(e, f, g, k, h, l);
      var t = "time" === a || "datetimelocal" === a,
          q,
          v;
      k.$parsers.push(function (c) {
        if (k.$isEmpty(c)) return null;
        if (b.test(c)) return r(c, q);
        k.$$parserName = a;
      });
      k.$formatters.push(function (a) {
        if (a && !ha(a)) throw ob("datefmt", a);

        if (n(a)) {
          q = a;
          var b = k.$options.getOption("timezone");
          b && (v = b, q = fc(q, b, !0));
          var d = c;
          t && A(k.$options.getOption("timeSecondsFormat")) && (d = c.replace("ss.sss", k.$options.getOption("timeSecondsFormat")).replace(/:$/, ""));
          a = m("date")(a, d, b);
          t && k.$options.getOption("timeStripZeroSeconds") && (a = a.replace(/(?::00)?(?:\.000)?$/, ""));
          return a;
        }

        v = q = null;
        return "";
      });

      if (w(g.min) || g.ngMin) {
        var x = g.min || p(g.ngMin)(e),
            B = s(x);

        k.$validators.min = function (a) {
          return !n(a) || z(B) || d(a) >= B;
        };

        g.$observe("min", function (a) {
          a !== x && (B = s(a), x = a, k.$validate());
        });
      }

      if (w(g.max) || g.ngMax) {
        var y = g.max || p(g.ngMax)(e),
            J = s(y);

        k.$validators.max = function (a) {
          return !n(a) || z(J) || d(a) <= J;
        };

        g.$observe("max", function (a) {
          a !== y && (J = s(a), y = a, k.$validate());
        });
      }
    };
  }

  function Ic(a, b, d, c, e) {
    (c.$$hasNativeValidators = D(b[0].validity)) && c.$parsers.push(function (a) {
      var d = b.prop("validity") || {};
      if (d.badInput || d.typeMismatch) c.$$parserName = e;else return a;
    });
  }

  function de(a) {
    a.$parsers.push(function (b) {
      if (a.$isEmpty(b)) return null;
      if (ih.test(b)) return parseFloat(b);
      a.$$parserName = "number";
    });
    a.$formatters.push(function (b) {
      if (!a.$isEmpty(b)) {
        if (!W(b)) throw ob("numfmt", b);
        b = b.toString();
      }

      return b;
    });
  }

  function na(a) {
    w(a) && !W(a) && (a = parseFloat(a));
    return X(a) ? void 0 : a;
  }

  function Jc(a) {
    var b = a.toString(),
        d = b.indexOf(".");
    return -1 === d ? -1 < a && 1 > a && (a = /e-(\d+)$/.exec(b)) ? Number(a[1]) : 0 : b.length - d - 1;
  }

  function ee(a, b, d) {
    a = Number(a);
    var c = (a | 0) !== a,
        e = (b | 0) !== b,
        f = (d | 0) !== d;

    if (c || e || f) {
      var g = c ? Jc(a) : 0,
          k = e ? Jc(b) : 0,
          h = f ? Jc(d) : 0,
          g = Math.max(g, k, h),
          g = Math.pow(10, g);
      a *= g;
      b *= g;
      d *= g;
      c && (a = Math.round(a));
      e && (b = Math.round(b));
      f && (d = Math.round(d));
    }

    return 0 === (a - b) % d;
  }

  function fe(a, b, d, c, e) {
    if (w(c)) {
      a = a(c);
      if (!a.constant) throw ob("constexpr", d, c);
      return a(b);
    }

    return e;
  }

  function Kc(a, b) {
    function d(a, b) {
      if (!a || !a.length) return [];
      if (!b || !b.length) return a;
      var c = [],
          d = 0;

      a: for (; d < a.length; d++) {
        for (var e = a[d], m = 0; m < b.length; m++) {
          if (e === b[m]) continue a;
        }

        c.push(e);
      }

      return c;
    }

    function c(a) {
      if (!a) return a;
      var b = a;
      H(a) ? b = a.map(c).join(" ") : D(a) ? b = Object.keys(a).filter(function (b) {
        return a[b];
      }).join(" ") : A(a) || (b = a + "");
      return b;
    }

    a = "ngClass" + a;
    var e;
    return ["$parse", function (f) {
      return {
        restrict: "AC",
        link: function link(g, k, h) {
          function l(a, b) {
            var c = [];
            r(a, function (a) {
              if (0 < b || p[a]) p[a] = (p[a] || 0) + b, p[a] === +(0 < b) && c.push(a);
            });
            return c.join(" ");
          }

          function m(a) {
            if (a === b) {
              var c = s,
                  c = l(c && c.split(" "), 1);
              h.$addClass(c);
            } else c = s, c = l(c && c.split(" "), -1), h.$removeClass(c);

            n = a;
          }

          var p = k.data("$classCounts"),
              n = !0,
              s;
          p || (p = T(), k.data("$classCounts", p));
          "ngClass" !== a && (e || (e = f("$index", function (a) {
            return a & 1;
          })), g.$watch(e, m));
          g.$watch(f(h[a], c), function (a) {
            if (n === b) {
              var c = s && s.split(" "),
                  e = a && a.split(" "),
                  f = d(c, e),
                  c = d(e, c),
                  f = l(f, -1),
                  c = l(c, 1);
              h.$addClass(c);
              h.$removeClass(f);
            }

            s = a;
          });
        }
      };
    }];
  }

  function qd(a, b, d, c, e, f) {
    return {
      restrict: "A",
      compile: function compile(g, k) {
        var h = a(k[c]);
        return function (a, c) {
          c.on(e, function (c) {
            var e = function e() {
              h(a, {
                $event: c
              });
            };

            if (b.$$phase) {
              if (f) a.$evalAsync(e);else try {
                e();
              } catch (g) {
                d(g);
              }
            } else a.$apply(e);
          });
        };
      }
    };
  }

  function Rb(a, b, d, c, e, f, g, k, h) {
    this.$modelValue = this.$viewValue = Number.NaN;
    this.$$rawModelValue = void 0;
    this.$validators = {};
    this.$asyncValidators = {};
    this.$parsers = [];
    this.$formatters = [];
    this.$viewChangeListeners = [];
    this.$untouched = !0;
    this.$touched = !1;
    this.$pristine = !0;
    this.$dirty = !1;
    this.$valid = !0;
    this.$invalid = !1;
    this.$error = {};
    this.$$success = {};
    this.$pending = void 0;
    this.$name = h(d.name || "", !1)(a);
    this.$$parentForm = lb;
    this.$options = Sb;
    this.$$updateEvents = "";
    this.$$updateEventHandler = this.$$updateEventHandler.bind(this);
    this.$$parsedNgModel = e(d.ngModel);
    this.$$parsedNgModelAssign = this.$$parsedNgModel.assign;
    this.$$ngModelGet = this.$$parsedNgModel;
    this.$$ngModelSet = this.$$parsedNgModelAssign;
    this.$$pendingDebounce = null;
    this.$$parserValid = void 0;
    this.$$parserName = "parse";
    this.$$currentValidationRunId = 0;
    this.$$scope = a;
    this.$$rootScope = a.$root;
    this.$$attr = d;
    this.$$element = c;
    this.$$animate = f;
    this.$$timeout = g;
    this.$$parse = e;
    this.$$q = k;
    this.$$exceptionHandler = b;
    Zd(this);
    jh(this);
  }

  function jh(a) {
    a.$$scope.$watch(function (b) {
      b = a.$$ngModelGet(b);
      b === a.$modelValue || a.$modelValue !== a.$modelValue && b !== b || a.$$setModelValue(b);
      return b;
    });
  }

  function Lc(a) {
    this.$$options = a;
  }

  function ge(a, b) {
    r(b, function (b, c) {
      w(a[c]) || (a[c] = b);
    });
  }

  function Oa(a, b) {
    a.prop("selected", b);
    a.attr("selected", b);
  }

  function he(a, b, d) {
    if (a) {
      A(a) && (a = new RegExp("^" + a + "$"));
      if (!a.test) throw F("ngPattern")("noregexp", b, a, za(d));
      return a;
    }
  }

  function Tb(a) {
    a = fa(a);
    return X(a) ? -1 : a;
  }

  var Wb = {
    objectMaxDepth: 5,
    urlErrorParamsEnabled: !0
  },
      ie = /^\/(.+)\/([a-z]*)$/,
      ta = Object.prototype.hasOwnProperty,
      K = function K(a) {
    return A(a) ? a.toLowerCase() : a;
  },
      ub = function ub(a) {
    return A(a) ? a.toUpperCase() : a;
  },
      Ca,
      x,
      rb,
      Ha = [].slice,
      Fg = [].splice,
      kh = [].push,
      la = Object.prototype.toString,
      Pc = Object.getPrototypeOf,
      pa = F("ng"),
      ca = C.angular || (C.angular = {}),
      kc,
      pb = 0;

  Ca = C.document.documentMode;

  var X = Number.isNaN || function (a) {
    return a !== a;
  };

  E.$inject = [];
  Ta.$inject = [];

  var ve = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
      U = function U(a) {
    return A(a) ? a.trim() : a;
  },
      Md = function Md(a) {
    return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
  },
      Aa = function Aa() {
    if (!w(Aa.rules)) {
      var a = C.document.querySelector("[ng-csp]") || C.document.querySelector("[data-ng-csp]");

      if (a) {
        var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
        Aa.rules = {
          noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"),
          noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")
        };
      } else {
        a = Aa;

        try {
          new Function(""), b = !1;
        } catch (d) {
          b = !0;
        }

        a.rules = {
          noUnsafeEval: b,
          noInlineStyle: !1
        };
      }
    }

    return Aa.rules;
  },
      qb = function qb() {
    if (w(qb.name_)) return qb.name_;
    var a,
        b,
        d = Qa.length,
        c,
        e;

    for (b = 0; b < d; ++b) {
      if (c = Qa[b], a = C.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
        e = a.getAttribute(c + "jq");
        break;
      }
    }

    return qb.name_ = e;
  },
      xe = /:/g,
      Qa = ["ng-", "data-ng-", "ng:", "x-ng-"],
      Be = function (a) {
    var b = a.currentScript;
    if (!b) return !0;
    if (!(b instanceof C.HTMLScriptElement || b instanceof C.SVGScriptElement)) return !1;
    b = b.attributes;
    return [b.getNamedItem("src"), b.getNamedItem("href"), b.getNamedItem("xlink:href")].every(function (b) {
      if (!b) return !0;
      if (!b.value) return !1;
      var c = a.createElement("a");
      c.href = b.value;
      if (a.location.origin === c.origin) return !0;

      switch (c.protocol) {
        case "http:":
        case "https:":
        case "ftp:":
        case "blob:":
        case "file:":
        case "data:":
          return !0;

        default:
          return !1;
      }
    });
  }(C.document),
      Ee = /[A-Z]/g,
      Wc = !1,
      Pa = 3,
      Ke = {
    full: "1.7.8",
    major: 1,
    minor: 7,
    dot: 8,
    codeName: "enthusiastic-oblation"
  };

  Y.expando = "ng339";
  var Ka = Y.cache = {},
      pg = 1;

  Y._data = function (a) {
    return this.cache[a[this.expando]] || {};
  };

  var lg = /-([a-z])/g,
      lh = /^-ms-/,
      Ab = {
    mouseleave: "mouseout",
    mouseenter: "mouseover"
  },
      nc = F("jqLite"),
      og = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      mc = /<|&#?\w+;/,
      mg = /<([\w:-]+)/,
      ng = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      oa = {
    option: [1, '<select multiple="multiple">', "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  oa.optgroup = oa.option;
  oa.tbody = oa.tfoot = oa.colgroup = oa.caption = oa.thead;
  oa.th = oa.td;

  var ug = C.Node.prototype.contains || function (a) {
    return !!(this.compareDocumentPosition(a) & 16);
  },
      Wa = Y.prototype = {
    ready: fd,
    toString: function toString() {
      var a = [];
      r(this, function (b) {
        a.push("" + b);
      });
      return "[" + a.join(", ") + "]";
    },
    eq: function eq(a) {
      return 0 <= a ? x(this[a]) : x(this[this.length + a]);
    },
    length: 0,
    push: kh,
    sort: [].sort,
    splice: [].splice
  },
      Gb = {};

  r("multiple selected checked disabled readOnly required open".split(" "), function (a) {
    Gb[K(a)] = a;
  });
  var md = {};
  r("input select option textarea button form details".split(" "), function (a) {
    md[a] = !0;
  });
  var td = {
    ngMinlength: "minlength",
    ngMaxlength: "maxlength",
    ngMin: "min",
    ngMax: "max",
    ngPattern: "pattern",
    ngStep: "step"
  };
  r({
    data: rc,
    removeData: qc,
    hasData: function hasData(a) {
      for (var b in Ka[a.ng339]) {
        return !0;
      }

      return !1;
    },
    cleanData: function cleanData(a) {
      for (var b = 0, d = a.length; b < d; b++) {
        qc(a[b]), id(a[b]);
      }
    }
  }, function (a, b) {
    Y[b] = a;
  });
  r({
    data: rc,
    inheritedData: Eb,
    scope: function scope(a) {
      return x.data(a, "$scope") || Eb(a.parentNode || a, ["$isolateScope", "$scope"]);
    },
    isolateScope: function isolateScope(a) {
      return x.data(a, "$isolateScope") || x.data(a, "$isolateScopeNoTemplate");
    },
    controller: jd,
    injector: function injector(a) {
      return Eb(a, "$injector");
    },
    removeAttr: function removeAttr(a, b) {
      a.removeAttribute(b);
    },
    hasClass: Bb,
    css: function css(a, b, d) {
      b = xb(b.replace(lh, "ms-"));
      if (w(d)) a.style[b] = d;else return a.style[b];
    },
    attr: function attr(a, b, d) {
      var c = a.nodeType;

      if (c !== Pa && 2 !== c && 8 !== c && a.getAttribute) {
        var c = K(b),
            e = Gb[c];
        if (w(d)) null === d || !1 === d && e ? a.removeAttribute(b) : a.setAttribute(b, e ? c : d);else return a = a.getAttribute(b), e && null !== a && (a = c), null === a ? void 0 : a;
      }
    },
    prop: function prop(a, b, d) {
      if (w(d)) a[b] = d;else return a[b];
    },
    text: function () {
      function a(a, d) {
        if (z(d)) {
          var c = a.nodeType;
          return 1 === c || c === Pa ? a.textContent : "";
        }

        a.textContent = d;
      }

      a.$dv = "";
      return a;
    }(),
    val: function val(a, b) {
      if (z(b)) {
        if (a.multiple && "select" === ua(a)) {
          var d = [];
          r(a.options, function (a) {
            a.selected && d.push(a.value || a.text);
          });
          return d;
        }

        return a.value;
      }

      a.value = b;
    },
    html: function html(a, b) {
      if (z(b)) return a.innerHTML;
      yb(a, !0);
      a.innerHTML = b;
    },
    empty: kd
  }, function (a, b) {
    Y.prototype[b] = function (b, c) {
      var e,
          f,
          g = this.length;

      if (a !== kd && z(2 === a.length && a !== Bb && a !== jd ? b : c)) {
        if (D(b)) {
          for (e = 0; e < g; e++) {
            if (a === rc) a(this[e], b);else for (f in b) {
              a(this[e], f, b[f]);
            }
          }

          return this;
        }

        e = a.$dv;
        g = z(e) ? Math.min(g, 1) : g;

        for (f = 0; f < g; f++) {
          var k = a(this[f], b, c);
          e = e ? e + k : k;
        }

        return e;
      }

      for (e = 0; e < g; e++) {
        a(this[e], b, c);
      }

      return this;
    };
  });
  r({
    removeData: qc,
    on: function on(a, b, d, c) {
      if (w(c)) throw nc("onargs");

      if (lc(a)) {
        c = zb(a, !0);
        var e = c.events,
            f = c.handle;
        f || (f = c.handle = rg(a, e));
        c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];

        for (var g = c.length, k = function k(b, c, g) {
          var k = e[b];
          k || (k = e[b] = [], k.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f));
          k.push(d);
        }; g--;) {
          b = c[g], Ab[b] ? (k(Ab[b], tg), k(b, void 0, !0)) : k(b);
        }
      }
    },
    off: id,
    one: function one(a, b, d) {
      a = x(a);
      a.on(b, function e() {
        a.off(b, d);
        a.off(b, e);
      });
      a.on(b, d);
    },
    replaceWith: function replaceWith(a, b) {
      var d,
          c = a.parentNode;
      yb(a);
      r(new Y(b), function (b) {
        d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
        d = b;
      });
    },
    children: function children(a) {
      var b = [];
      r(a.childNodes, function (a) {
        1 === a.nodeType && b.push(a);
      });
      return b;
    },
    contents: function contents(a) {
      return a.contentDocument || a.childNodes || [];
    },
    append: function append(a, b) {
      var d = a.nodeType;

      if (1 === d || 11 === d) {
        b = new Y(b);

        for (var d = 0, c = b.length; d < c; d++) {
          a.appendChild(b[d]);
        }
      }
    },
    prepend: function prepend(a, b) {
      if (1 === a.nodeType) {
        var d = a.firstChild;
        r(new Y(b), function (b) {
          a.insertBefore(b, d);
        });
      }
    },
    wrap: function wrap(a, b) {
      var d = x(b).eq(0).clone()[0],
          c = a.parentNode;
      c && c.replaceChild(d, a);
      d.appendChild(a);
    },
    remove: Fb,
    detach: function detach(a) {
      Fb(a, !0);
    },
    after: function after(a, b) {
      var d = a,
          c = a.parentNode;

      if (c) {
        b = new Y(b);

        for (var e = 0, f = b.length; e < f; e++) {
          var g = b[e];
          c.insertBefore(g, d.nextSibling);
          d = g;
        }
      }
    },
    addClass: Db,
    removeClass: Cb,
    toggleClass: function toggleClass(a, b, d) {
      b && r(b.split(" "), function (b) {
        var e = d;
        z(e) && (e = !Bb(a, b));
        (e ? Db : Cb)(a, b);
      });
    },
    parent: function parent(a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    },
    next: function next(a) {
      return a.nextElementSibling;
    },
    find: function find(a, b) {
      return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
    },
    clone: pc,
    triggerHandler: function triggerHandler(a, b, d) {
      var c,
          e,
          f = b.type || b,
          g = zb(a);
      if (g = (g = g && g.events) && g[f]) c = {
        preventDefault: function preventDefault() {
          this.defaultPrevented = !0;
        },
        isDefaultPrevented: function isDefaultPrevented() {
          return !0 === this.defaultPrevented;
        },
        stopImmediatePropagation: function stopImmediatePropagation() {
          this.immediatePropagationStopped = !0;
        },
        isImmediatePropagationStopped: function isImmediatePropagationStopped() {
          return !0 === this.immediatePropagationStopped;
        },
        stopPropagation: E,
        type: f,
        target: a
      }, b.type && (c = S(c, b)), b = ja(g), e = d ? [c].concat(d) : [c], r(b, function (b) {
        c.isImmediatePropagationStopped() || b.apply(a, e);
      });
    }
  }, function (a, b) {
    Y.prototype[b] = function (b, c, e) {
      for (var f, g = 0, k = this.length; g < k; g++) {
        z(f) ? (f = a(this[g], b, c, e), w(f) && (f = x(f))) : oc(f, a(this[g], b, c, e));
      }

      return w(f) ? f : this;
    };
  });
  Y.prototype.bind = Y.prototype.on;
  Y.prototype.unbind = Y.prototype.off;
  var mh = Object.create(null);
  nd.prototype = {
    _idx: function _idx(a) {
      a !== this._lastKey && (this._lastKey = a, this._lastIndex = this._keys.indexOf(a));
      return this._lastIndex;
    },
    _transformKey: function _transformKey(a) {
      return X(a) ? mh : a;
    },
    get: function get(a) {
      a = this._transformKey(a);
      a = this._idx(a);
      if (-1 !== a) return this._values[a];
    },
    has: function has(a) {
      a = this._transformKey(a);
      return -1 !== this._idx(a);
    },
    set: function set(a, b) {
      a = this._transformKey(a);

      var d = this._idx(a);

      -1 === d && (d = this._lastIndex = this._keys.length);
      this._keys[d] = a;
      this._values[d] = b;
    },
    "delete": function _delete(a) {
      a = this._transformKey(a);
      a = this._idx(a);
      if (-1 === a) return !1;

      this._keys.splice(a, 1);

      this._values.splice(a, 1);

      this._lastKey = NaN;
      this._lastIndex = -1;
      return !0;
    }
  };
  var Hb = nd,
      jg = [function () {
    this.$get = [function () {
      return Hb;
    }];
  }],
      wg = /^([^(]+?)=>/,
      xg = /^[^(]*\(\s*([^)]*)\)/m,
      nh = /,/,
      oh = /^\s*(_?)(\S+?)\1\s*$/,
      vg = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
      Ba = F("$injector");

  fb.$$annotate = function (a, b, d) {
    var c;

    if ("function" === typeof a) {
      if (!(c = a.$inject)) {
        c = [];

        if (a.length) {
          if (b) throw A(d) && d || (d = a.name || yg(a)), Ba("strictdi", d);
          b = od(a);
          r(b[1].split(nh), function (a) {
            a.replace(oh, function (a, b, d) {
              c.push(d);
            });
          });
        }

        a.$inject = c;
      }
    } else H(a) ? (b = a.length - 1, sb(a[b], "fn"), c = a.slice(0, b)) : sb(a, "fn", !0);

    return c;
  };

  var je = F("$animate"),
      zf = function zf() {
    this.$get = E;
  },
      Af = function Af() {
    var a = new Hb(),
        b = [];
    this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
      function e(a, b, c) {
        var d = !1;
        b && (b = A(b) ? b.split(" ") : H(b) ? b : [], r(b, function (b) {
          b && (d = !0, a[b] = c);
        }));
        return d;
      }

      function f() {
        r(b, function (b) {
          var c = a.get(b);

          if (c) {
            var d = zg(b.attr("class")),
                e = "",
                f = "";
            r(c, function (a, b) {
              a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b);
            });
            r(b, function (a) {
              e && Db(a, e);
              f && Cb(a, f);
            });
            a["delete"](b);
          }
        });
        b.length = 0;
      }

      return {
        enabled: E,
        on: E,
        off: E,
        pin: E,
        push: function push(g, k, h, l) {
          l && l();
          h = h || {};
          h.from && g.css(h.from);
          h.to && g.css(h.to);
          if (h.addClass || h.removeClass) if (k = h.addClass, l = h.removeClass, h = a.get(g) || {}, k = e(h, k, !0), l = e(h, l, !1), k || l) a.set(g, h), b.push(g), 1 === b.length && c.$$postDigest(f);
          g = new d();
          g.complete();
          return g;
        }
      };
    }];
  },
      xf = ["$provide", function (a) {
    var b = this,
        d = null,
        c = null;
    this.$$registeredAnimations = Object.create(null);

    this.register = function (c, d) {
      if (c && "." !== c.charAt(0)) throw je("notcsel", c);
      var g = c + "-animation";
      b.$$registeredAnimations[c.substr(1)] = g;
      a.factory(g, d);
    };

    this.customFilter = function (a) {
      1 === arguments.length && (c = B(a) ? a : null);
      return c;
    };

    this.classNameFilter = function (a) {
      if (1 === arguments.length && (d = a instanceof RegExp ? a : null) && /[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString())) throw d = null, je("nongcls", "ng-animate");
      return d;
    };

    this.$get = ["$$animateQueue", function (a) {
      function b(a, c, d) {
        if (d) {
          var e;

          a: {
            for (e = 0; e < d.length; e++) {
              var f = d[e];

              if (1 === f.nodeType) {
                e = f;
                break a;
              }
            }

            e = void 0;
          }

          !e || e.parentNode || e.previousElementSibling || (d = null);
        }

        d ? d.after(a) : c.prepend(a);
      }

      return {
        on: a.on,
        off: a.off,
        pin: a.pin,
        enabled: a.enabled,
        cancel: function cancel(a) {
          a.cancel && a.cancel();
        },
        enter: function enter(c, d, h, l) {
          d = d && x(d);
          h = h && x(h);
          d = d || h.parent();
          b(c, d, h);
          return a.push(c, "enter", ra(l));
        },
        move: function move(c, d, h, l) {
          d = d && x(d);
          h = h && x(h);
          d = d || h.parent();
          b(c, d, h);
          return a.push(c, "move", ra(l));
        },
        leave: function leave(b, c) {
          return a.push(b, "leave", ra(c), function () {
            b.remove();
          });
        },
        addClass: function addClass(b, c, d) {
          d = ra(d);
          d.addClass = hb(d.addclass, c);
          return a.push(b, "addClass", d);
        },
        removeClass: function removeClass(b, c, d) {
          d = ra(d);
          d.removeClass = hb(d.removeClass, c);
          return a.push(b, "removeClass", d);
        },
        setClass: function setClass(b, c, d, f) {
          f = ra(f);
          f.addClass = hb(f.addClass, c);
          f.removeClass = hb(f.removeClass, d);
          return a.push(b, "setClass", f);
        },
        animate: function animate(b, c, d, f, m) {
          m = ra(m);
          m.from = m.from ? S(m.from, c) : c;
          m.to = m.to ? S(m.to, d) : d;
          m.tempClasses = hb(m.tempClasses, f || "ng-inline-animate");
          return a.push(b, "animate", m);
        }
      };
    }];
  }],
      Cf = function Cf() {
    this.$get = ["$$rAF", function (a) {
      function b(b) {
        d.push(b);
        1 < d.length || a(function () {
          for (var a = 0; a < d.length; a++) {
            d[a]();
          }

          d = [];
        });
      }

      var d = [];
      return function () {
        var a = !1;
        b(function () {
          a = !0;
        });
        return function (d) {
          a ? d() : b(d);
        };
      };
    }];
  },
      Bf = function Bf() {
    this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function (a, b, d, c, e) {
      function f(a) {
        this.setHost(a);
        var b = d();
        this._doneCallbacks = [];

        this._tick = function (a) {
          c() ? e(a, 0, !1) : b(a);
        };

        this._state = 0;
      }

      f.chain = function (a, b) {
        function c() {
          if (d === a.length) b(!0);else a[d](function (a) {
            !1 === a ? b(!1) : (d++, c());
          });
        }

        var d = 0;
        c();
      };

      f.all = function (a, b) {
        function c(f) {
          e = e && f;
          ++d === a.length && b(e);
        }

        var d = 0,
            e = !0;
        r(a, function (a) {
          a.done(c);
        });
      };

      f.prototype = {
        setHost: function setHost(a) {
          this.host = a || {};
        },
        done: function done(a) {
          2 === this._state ? a() : this._doneCallbacks.push(a);
        },
        progress: E,
        getPromise: function getPromise() {
          if (!this.promise) {
            var b = this;
            this.promise = a(function (a, c) {
              b.done(function (b) {
                !1 === b ? c() : a();
              });
            });
          }

          return this.promise;
        },
        then: function then(a, b) {
          return this.getPromise().then(a, b);
        },
        "catch": function _catch(a) {
          return this.getPromise()["catch"](a);
        },
        "finally": function _finally(a) {
          return this.getPromise()["finally"](a);
        },
        pause: function pause() {
          this.host.pause && this.host.pause();
        },
        resume: function resume() {
          this.host.resume && this.host.resume();
        },
        end: function end() {
          this.host.end && this.host.end();

          this._resolve(!0);
        },
        cancel: function cancel() {
          this.host.cancel && this.host.cancel();

          this._resolve(!1);
        },
        complete: function complete(a) {
          var b = this;
          0 === b._state && (b._state = 1, b._tick(function () {
            b._resolve(a);
          }));
        },
        _resolve: function _resolve(a) {
          2 !== this._state && (r(this._doneCallbacks, function (b) {
            b(a);
          }), this._doneCallbacks.length = 0, this._state = 2);
        }
      };
      return f;
    }];
  },
      yf = function yf() {
    this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
      return function (b, e) {
        function f() {
          a(function () {
            g.addClass && (b.addClass(g.addClass), g.addClass = null);
            g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);
            g.to && (b.css(g.to), g.to = null);
            k || h.complete();
            k = !0;
          });
          return h;
        }

        var g = e || {};
        g.$$prepared || (g = Ia(g));
        g.cleanupStyles && (g.from = g.to = null);
        g.from && (b.css(g.from), g.from = null);
        var k,
            h = new d();
        return {
          start: f,
          end: f
        };
      };
    }];
  },
      $ = F("$compile"),
      tc = new function () {}();

  Xc.$inject = ["$provide", "$$sanitizeUriProvider"];

  Jb.prototype.isFirstChange = function () {
    return this.previousValue === tc;
  };

  var pd = /^((?:x|data)[:\-_])/i,
      Eg = /[:\-_]+(.)/g,
      vd = F("$controller"),
      ud = /^(\S+)(\s+as\s+([\w$]+))?$/,
      Jf = function Jf() {
    this.$get = ["$document", function (a) {
      return function (b) {
        b ? !b.nodeType && b instanceof x && (b = b[0]) : b = a[0].body;
        return b.offsetWidth + 1;
      };
    }];
  },
      wd = "application/json",
      wc = {
    "Content-Type": wd + ";charset=utf-8"
  },
      Hg = /^\[|^\{(?!\{)/,
      Ig = {
    "[": /]$/,
    "{": /}$/
  },
      Gg = /^\)]\}',?\n/,
      Kb = F("$http"),
      Ma = ca.$interpolateMinErr = F("$interpolate");

  Ma.throwNoconcat = function (a) {
    throw Ma("noconcat", a);
  };

  Ma.interr = function (a, b) {
    return Ma("interr", a, b.toString());
  };

  var Lg = F("$interval"),
      Sf = function Sf() {
    this.$get = function () {
      function a(a) {
        var b = function b(a) {
          b.data = a;
          b.called = !0;
        };

        b.id = a;
        return b;
      }

      var b = ca.callbacks,
          d = {};
      return {
        createCallback: function createCallback(c) {
          c = "_" + (b.$$counter++).toString(36);
          var e = "angular.callbacks." + c,
              f = a(c);
          d[e] = b[c] = f;
          return e;
        },
        wasCalled: function wasCalled(a) {
          return d[a].called;
        },
        getResponse: function getResponse(a) {
          return d[a].data;
        },
        removeCallback: function removeCallback(a) {
          delete b[d[a].id];
          delete d[a];
        }
      };
    };
  },
      ph = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
      Mg = {
    http: 80,
    https: 443,
    ftp: 21
  },
      jb = F("$location"),
      Ng = /^\s*[\\/]{2,}/,
      qh = {
    $$absUrl: "",
    $$html5: !1,
    $$replace: !1,
    $$compose: function $$compose() {
      for (var a = this.$$path, b = this.$$hash, d = ye(this.$$search), b = b ? "#" + hc(b) : "", a = a.split("/"), c = a.length; c--;) {
        a[c] = hc(a[c].replace(/%2F/g, "/"));
      }

      this.$$url = a.join("/") + (d ? "?" + d : "") + b;
      this.$$absUrl = this.$$normalizeUrl(this.$$url);
      this.$$urlUpdatedByLocation = !0;
    },
    absUrl: Lb("$$absUrl"),
    url: function url(a) {
      if (z(a)) return this.$$url;
      var b = ph.exec(a);
      (b[1] || "" === a) && this.path(decodeURIComponent(b[1]));
      (b[2] || b[1] || "" === a) && this.search(b[3] || "");
      this.hash(b[5] || "");
      return this;
    },
    protocol: Lb("$$protocol"),
    host: Lb("$$host"),
    port: Lb("$$port"),
    path: Dd("$$path", function (a) {
      a = null !== a ? a.toString() : "";
      return "/" === a.charAt(0) ? a : "/" + a;
    }),
    search: function search(a, b) {
      switch (arguments.length) {
        case 0:
          return this.$$search;

        case 1:
          if (A(a) || W(a)) a = a.toString(), this.$$search = gc(a);else if (D(a)) a = Ia(a, {}), r(a, function (b, c) {
            null == b && delete a[c];
          }), this.$$search = a;else throw jb("isrcharg");
          break;

        default:
          z(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;
      }

      this.$$compose();
      return this;
    },
    hash: Dd("$$hash", function (a) {
      return null !== a ? a.toString() : "";
    }),
    replace: function replace() {
      this.$$replace = !0;
      return this;
    }
  };

  r([Cd, zc, yc], function (a) {
    a.prototype = Object.create(qh);

    a.prototype.state = function (b) {
      if (!arguments.length) return this.$$state;
      if (a !== yc || !this.$$html5) throw jb("nostate");
      this.$$state = z(b) ? null : b;
      this.$$urlUpdatedByLocation = !0;
      return this;
    };
  });
  var Ya = F("$parse"),
      Rg = {}.constructor.prototype.valueOf,
      Ub = T();
  r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
    Ub[a] = !0;
  });

  var rh = {
    n: "\n",
    f: "\f",
    r: "\r",
    t: "\t",
    v: "\v",
    "'": "'",
    '"': '"'
  },
      Nb = function Nb(a) {
    this.options = a;
  };

  Nb.prototype = {
    constructor: Nb,
    lex: function lex(a) {
      this.text = a;
      this.index = 0;

      for (this.tokens = []; this.index < this.text.length;) {
        if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
          index: this.index,
          text: a
        }), this.index++;else if (this.isWhitespace(a)) this.index++;else {
          var b = a + this.peek(),
              d = b + this.peek(2),
              c = Ub[b],
              e = Ub[d];
          Ub[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({
            index: this.index,
            text: a,
            operator: !0
          }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
        }
      }

      return this.tokens;
    },
    is: function is(a, b) {
      return -1 !== b.indexOf(a);
    },
    peek: function peek(a) {
      a = a || 1;
      return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    },
    isNumber: function isNumber(a) {
      return "0" <= a && "9" >= a && "string" === typeof a;
    },
    isWhitespace: function isWhitespace(a) {
      return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\xA0" === a;
    },
    isIdentifierStart: function isIdentifierStart(a) {
      return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a);
    },
    isValidIdentifierStart: function isValidIdentifierStart(a) {
      return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
    },
    isIdentifierContinue: function isIdentifierContinue(a) {
      return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a);
    },
    isValidIdentifierContinue: function isValidIdentifierContinue(a, b) {
      return this.isValidIdentifierStart(a, b) || this.isNumber(a);
    },
    codePointAt: function codePointAt(a) {
      return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888;
    },
    peekMultichar: function peekMultichar() {
      var a = this.text.charAt(this.index),
          b = this.peek();
      if (!b) return a;
      var d = a.charCodeAt(0),
          c = b.charCodeAt(0);
      return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a;
    },
    isExpOperator: function isExpOperator(a) {
      return "-" === a || "+" === a || this.isNumber(a);
    },
    throwError: function throwError(a, b, d) {
      d = d || this.index;
      b = w(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;
      throw Ya("lexerr", a, b, this.text);
    },
    readNumber: function readNumber() {
      for (var a = "", b = this.index; this.index < this.text.length;) {
        var d = K(this.text.charAt(this.index));
        if ("." === d || this.isNumber(d)) a += d;else {
          var c = this.peek();
          if ("e" === d && this.isExpOperator(c)) a += d;else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" === a.charAt(a.length - 1)) a += d;else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" !== a.charAt(a.length - 1)) break;else this.throwError("Invalid exponent");
        }
        this.index++;
      }

      this.tokens.push({
        index: b,
        text: a,
        constant: !0,
        value: Number(a)
      });
    },
    readIdent: function readIdent() {
      var a = this.index;

      for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
        var b = this.peekMultichar();
        if (!this.isIdentifierContinue(b)) break;
        this.index += b.length;
      }

      this.tokens.push({
        index: a,
        text: this.text.slice(a, this.index),
        identifier: !0
      });
    },
    readString: function readString(a) {
      var b = this.index;
      this.index++;

      for (var d = "", c = a, e = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index),
            c = c + f;
        if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += rh[f] || f, e = !1;else if ("\\" === f) e = !0;else {
          if (f === a) {
            this.index++;
            this.tokens.push({
              index: b,
              text: c,
              constant: !0,
              value: d
            });
            return;
          }

          d += f;
        }
        this.index++;
      }

      this.throwError("Unterminated quote", b);
    }
  };

  var q = function q(a, b) {
    this.lexer = a;
    this.options = b;
  };

  q.Program = "Program";
  q.ExpressionStatement = "ExpressionStatement";
  q.AssignmentExpression = "AssignmentExpression";
  q.ConditionalExpression = "ConditionalExpression";
  q.LogicalExpression = "LogicalExpression";
  q.BinaryExpression = "BinaryExpression";
  q.UnaryExpression = "UnaryExpression";
  q.CallExpression = "CallExpression";
  q.MemberExpression = "MemberExpression";
  q.Identifier = "Identifier";
  q.Literal = "Literal";
  q.ArrayExpression = "ArrayExpression";
  q.Property = "Property";
  q.ObjectExpression = "ObjectExpression";
  q.ThisExpression = "ThisExpression";
  q.LocalsExpression = "LocalsExpression";
  q.NGValueParameter = "NGValueParameter";
  q.prototype = {
    ast: function ast(a) {
      this.text = a;
      this.tokens = this.lexer.lex(a);
      a = this.program();
      0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
      return a;
    },
    program: function program() {
      for (var a = [];;) {
        if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {
          type: q.Program,
          body: a
        };
      }
    },
    expressionStatement: function expressionStatement() {
      return {
        type: q.ExpressionStatement,
        expression: this.filterChain()
      };
    },
    filterChain: function filterChain() {
      for (var a = this.expression(); this.expect("|");) {
        a = this.filter(a);
      }

      return a;
    },
    expression: function expression() {
      return this.assignment();
    },
    assignment: function assignment() {
      var a = this.ternary();

      if (this.expect("=")) {
        if (!Hd(a)) throw Ya("lval");
        a = {
          type: q.AssignmentExpression,
          left: a,
          right: this.assignment(),
          operator: "="
        };
      }

      return a;
    },
    ternary: function ternary() {
      var a = this.logicalOR(),
          b,
          d;
      return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), {
        type: q.ConditionalExpression,
        test: a,
        alternate: b,
        consequent: d
      }) : a;
    },
    logicalOR: function logicalOR() {
      for (var a = this.logicalAND(); this.expect("||");) {
        a = {
          type: q.LogicalExpression,
          operator: "||",
          left: a,
          right: this.logicalAND()
        };
      }

      return a;
    },
    logicalAND: function logicalAND() {
      for (var a = this.equality(); this.expect("&&");) {
        a = {
          type: q.LogicalExpression,
          operator: "&&",
          left: a,
          right: this.equality()
        };
      }

      return a;
    },
    equality: function equality() {
      for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) {
        a = {
          type: q.BinaryExpression,
          operator: b.text,
          left: a,
          right: this.relational()
        };
      }

      return a;
    },
    relational: function relational() {
      for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) {
        a = {
          type: q.BinaryExpression,
          operator: b.text,
          left: a,
          right: this.additive()
        };
      }

      return a;
    },
    additive: function additive() {
      for (var a = this.multiplicative(), b; b = this.expect("+", "-");) {
        a = {
          type: q.BinaryExpression,
          operator: b.text,
          left: a,
          right: this.multiplicative()
        };
      }

      return a;
    },
    multiplicative: function multiplicative() {
      for (var a = this.unary(), b; b = this.expect("*", "/", "%");) {
        a = {
          type: q.BinaryExpression,
          operator: b.text,
          left: a,
          right: this.unary()
        };
      }

      return a;
    },
    unary: function unary() {
      var a;
      return (a = this.expect("+", "-", "!")) ? {
        type: q.UnaryExpression,
        operator: a.text,
        prefix: !0,
        argument: this.unary()
      } : this.primary();
    },
    primary: function primary() {
      var a;
      this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = Ia(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = {
        type: q.Literal,
        value: this.options.literals[this.consume().text]
      } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());

      for (var b; b = this.expect("(", "[", ".");) {
        "(" === b.text ? (a = {
          type: q.CallExpression,
          callee: a,
          arguments: this.parseArguments()
        }, this.consume(")")) : "[" === b.text ? (a = {
          type: q.MemberExpression,
          object: a,
          property: this.expression(),
          computed: !0
        }, this.consume("]")) : "." === b.text ? a = {
          type: q.MemberExpression,
          object: a,
          property: this.identifier(),
          computed: !1
        } : this.throwError("IMPOSSIBLE");
      }

      return a;
    },
    filter: function filter(a) {
      a = [a];

      for (var b = {
        type: q.CallExpression,
        callee: this.identifier(),
        arguments: a,
        filter: !0
      }; this.expect(":");) {
        a.push(this.expression());
      }

      return b;
    },
    parseArguments: function parseArguments() {
      var a = [];

      if (")" !== this.peekToken().text) {
        do {
          a.push(this.filterChain());
        } while (this.expect(","));
      }

      return a;
    },
    identifier: function identifier() {
      var a = this.consume();
      a.identifier || this.throwError("is not a valid identifier", a);
      return {
        type: q.Identifier,
        name: a.text
      };
    },
    constant: function constant() {
      return {
        type: q.Literal,
        value: this.consume().value
      };
    },
    arrayDeclaration: function arrayDeclaration() {
      var a = [];

      if ("]" !== this.peekToken().text) {
        do {
          if (this.peek("]")) break;
          a.push(this.expression());
        } while (this.expect(","));
      }

      this.consume("]");
      return {
        type: q.ArrayExpression,
        elements: a
      };
    },
    object: function object() {
      var a = [],
          b;

      if ("}" !== this.peekToken().text) {
        do {
          if (this.peek("}")) break;
          b = {
            type: q.Property,
            kind: "init"
          };
          this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(":"), b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = !1, this.peek(":") ? (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), b.key = this.expression(), this.consume("]"), b.computed = !0, this.consume(":"), b.value = this.expression()) : this.throwError("invalid key", this.peek());
          a.push(b);
        } while (this.expect(","));
      }

      this.consume("}");
      return {
        type: q.ObjectExpression,
        properties: a
      };
    },
    throwError: function throwError(a, b) {
      throw Ya("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
    },
    consume: function consume(a) {
      if (0 === this.tokens.length) throw Ya("ueoe", this.text);
      var b = this.expect(a);
      b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
      return b;
    },
    peekToken: function peekToken() {
      if (0 === this.tokens.length) throw Ya("ueoe", this.text);
      return this.tokens[0];
    },
    peek: function peek(a, b, d, c) {
      return this.peekAhead(0, a, b, d, c);
    },
    peekAhead: function peekAhead(a, b, d, c, e) {
      if (this.tokens.length > a) {
        a = this.tokens[a];
        var f = a.text;
        if (f === b || f === d || f === c || f === e || !(b || d || c || e)) return a;
      }

      return !1;
    },
    expect: function expect(a, b, d, c) {
      return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1;
    },
    selfReferential: {
      "this": {
        type: q.ThisExpression
      },
      $locals: {
        type: q.LocalsExpression
      }
    }
  };
  var Fd = 2;
  Jd.prototype = {
    compile: function compile(a) {
      var b = this;
      this.state = {
        nextId: 0,
        filters: {},
        fn: {
          vars: [],
          body: [],
          own: {}
        },
        assign: {
          vars: [],
          body: [],
          own: {}
        },
        inputs: []
      };
      Z(a, b.$filter);
      var d = "",
          c;
      this.stage = "assign";
      if (c = Id(a)) this.state.computing = "assign", d = this.nextId(), this.recurse(c, d), this.return_(d), d = "fn.assign=" + this.generateFunction("assign", "s,v,l");
      c = Gd(a.body);
      b.stage = "inputs";
      r(c, function (a, c) {
        var d = "fn" + c;
        b.state[d] = {
          vars: [],
          body: [],
          own: {}
        };
        b.state.computing = d;
        var k = b.nextId();
        b.recurse(a, k);
        b.return_(k);
        b.state.inputs.push({
          name: d,
          isPure: a.isPure
        });
        a.watchId = c;
      });
      this.state.computing = "fn";
      this.stage = "main";
      this.recurse(a);
      a = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + d + this.watchFns() + "return fn;";
      a = new Function("$filter", "getStringValue", "ifDefined", "plus", a)(this.$filter, Og, Pg, Ed);
      this.state = this.stage = void 0;
      return a;
    },
    USE: "use",
    STRICT: "strict",
    watchFns: function watchFns() {
      var a = [],
          b = this.state.inputs,
          d = this;
      r(b, function (b) {
        a.push("var " + b.name + "=" + d.generateFunction(b.name, "s"));
        b.isPure && a.push(b.name, ".isPure=" + JSON.stringify(b.isPure) + ";");
      });
      b.length && a.push("fn.inputs=[" + b.map(function (a) {
        return a.name;
      }).join(",") + "];");
      return a.join("");
    },
    generateFunction: function generateFunction(a, b) {
      return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
    },
    filterPrefix: function filterPrefix() {
      var a = [],
          b = this;
      r(this.state.filters, function (d, c) {
        a.push(d + "=$filter(" + b.escape(c) + ")");
      });
      return a.length ? "var " + a.join(",") + ";" : "";
    },
    varsPrefix: function varsPrefix(a) {
      return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
    },
    body: function body(a) {
      return this.state[a].body.join("");
    },
    recurse: function recurse(a, b, d, c, e, f) {
      var g,
          k,
          h = this,
          l,
          m,
          p;
      c = c || E;
      if (!f && w(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0));else switch (a.type) {
        case q.Program:
          r(a.body, function (b, c) {
            h.recurse(b.expression, void 0, void 0, function (a) {
              k = a;
            });
            c !== a.body.length - 1 ? h.current().body.push(k, ";") : h.return_(k);
          });
          break;

        case q.Literal:
          m = this.escape(a.value);
          this.assign(b, m);
          c(b || m);
          break;

        case q.UnaryExpression:
          this.recurse(a.argument, void 0, void 0, function (a) {
            k = a;
          });
          m = a.operator + "(" + this.ifDefined(k, 0) + ")";
          this.assign(b, m);
          c(m);
          break;

        case q.BinaryExpression:
          this.recurse(a.left, void 0, void 0, function (a) {
            g = a;
          });
          this.recurse(a.right, void 0, void 0, function (a) {
            k = a;
          });
          m = "+" === a.operator ? this.plus(g, k) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(k, 0) : "(" + g + ")" + a.operator + "(" + k + ")";
          this.assign(b, m);
          c(m);
          break;

        case q.LogicalExpression:
          b = b || this.nextId();
          h.recurse(a.left, b);
          h.if_("&&" === a.operator ? b : h.not(b), h.lazyRecurse(a.right, b));
          c(b);
          break;

        case q.ConditionalExpression:
          b = b || this.nextId();
          h.recurse(a.test, b);
          h.if_(b, h.lazyRecurse(a.alternate, b), h.lazyRecurse(a.consequent, b));
          c(b);
          break;

        case q.Identifier:
          b = b || this.nextId();
          d && (d.context = "inputs" === h.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);
          h.if_("inputs" === h.stage || h.not(h.getHasOwnProperty("l", a.name)), function () {
            h.if_("inputs" === h.stage || "s", function () {
              e && 1 !== e && h.if_(h.isNull(h.nonComputedMember("s", a.name)), h.lazyAssign(h.nonComputedMember("s", a.name), "{}"));
              h.assign(b, h.nonComputedMember("s", a.name));
            });
          }, b && h.lazyAssign(b, h.nonComputedMember("l", a.name)));
          c(b);
          break;

        case q.MemberExpression:
          g = d && (d.context = this.nextId()) || this.nextId();
          b = b || this.nextId();
          h.recurse(a.object, g, void 0, function () {
            h.if_(h.notNull(g), function () {
              a.computed ? (k = h.nextId(), h.recurse(a.property, k), h.getStringValue(k), e && 1 !== e && h.if_(h.not(h.computedMember(g, k)), h.lazyAssign(h.computedMember(g, k), "{}")), m = h.computedMember(g, k), h.assign(b, m), d && (d.computed = !0, d.name = k)) : (e && 1 !== e && h.if_(h.isNull(h.nonComputedMember(g, a.property.name)), h.lazyAssign(h.nonComputedMember(g, a.property.name), "{}")), m = h.nonComputedMember(g, a.property.name), h.assign(b, m), d && (d.computed = !1, d.name = a.property.name));
            }, function () {
              h.assign(b, "undefined");
            });
            c(b);
          }, !!e);
          break;

        case q.CallExpression:
          b = b || this.nextId();
          a.filter ? (k = h.filter(a.callee.name), l = [], r(a.arguments, function (a) {
            var b = h.nextId();
            h.recurse(a, b);
            l.push(b);
          }), m = k + "(" + l.join(",") + ")", h.assign(b, m), c(b)) : (k = h.nextId(), g = {}, l = [], h.recurse(a.callee, k, g, function () {
            h.if_(h.notNull(k), function () {
              r(a.arguments, function (b) {
                h.recurse(b, a.constant ? void 0 : h.nextId(), void 0, function (a) {
                  l.push(a);
                });
              });
              m = g.name ? h.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")" : k + "(" + l.join(",") + ")";
              h.assign(b, m);
            }, function () {
              h.assign(b, "undefined");
            });
            c(b);
          }));
          break;

        case q.AssignmentExpression:
          k = this.nextId();
          g = {};
          this.recurse(a.left, void 0, g, function () {
            h.if_(h.notNull(g.context), function () {
              h.recurse(a.right, k);
              m = h.member(g.context, g.name, g.computed) + a.operator + k;
              h.assign(b, m);
              c(b || m);
            });
          }, 1);
          break;

        case q.ArrayExpression:
          l = [];
          r(a.elements, function (b) {
            h.recurse(b, a.constant ? void 0 : h.nextId(), void 0, function (a) {
              l.push(a);
            });
          });
          m = "[" + l.join(",") + "]";
          this.assign(b, m);
          c(b || m);
          break;

        case q.ObjectExpression:
          l = [];
          p = !1;
          r(a.properties, function (a) {
            a.computed && (p = !0);
          });
          p ? (b = b || this.nextId(), this.assign(b, "{}"), r(a.properties, function (a) {
            a.computed ? (g = h.nextId(), h.recurse(a.key, g)) : g = a.key.type === q.Identifier ? a.key.name : "" + a.key.value;
            k = h.nextId();
            h.recurse(a.value, k);
            h.assign(h.member(b, g, a.computed), k);
          })) : (r(a.properties, function (b) {
            h.recurse(b.value, a.constant ? void 0 : h.nextId(), void 0, function (a) {
              l.push(h.escape(b.key.type === q.Identifier ? b.key.name : "" + b.key.value) + ":" + a);
            });
          }), m = "{" + l.join(",") + "}", this.assign(b, m));
          c(b || m);
          break;

        case q.ThisExpression:
          this.assign(b, "s");
          c(b || "s");
          break;

        case q.LocalsExpression:
          this.assign(b, "l");
          c(b || "l");
          break;

        case q.NGValueParameter:
          this.assign(b, "v"), c(b || "v");
      }
    },
    getHasOwnProperty: function getHasOwnProperty(a, b) {
      var d = a + "." + b,
          c = this.current().own;
      c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));
      return c[d];
    },
    assign: function assign(a, b) {
      if (a) return this.current().body.push(a, "=", b, ";"), a;
    },
    filter: function filter(a) {
      this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));
      return this.state.filters[a];
    },
    ifDefined: function ifDefined(a, b) {
      return "ifDefined(" + a + "," + this.escape(b) + ")";
    },
    plus: function plus(a, b) {
      return "plus(" + a + "," + b + ")";
    },
    return_: function return_(a) {
      this.current().body.push("return ", a, ";");
    },
    if_: function if_(a, b, d) {
      if (!0 === a) b();else {
        var c = this.current().body;
        c.push("if(", a, "){");
        b();
        c.push("}");
        d && (c.push("else{"), d(), c.push("}"));
      }
    },
    not: function not(a) {
      return "!(" + a + ")";
    },
    isNull: function isNull(a) {
      return a + "==null";
    },
    notNull: function notNull(a) {
      return a + "!=null";
    },
    nonComputedMember: function nonComputedMember(a, b) {
      var d = /[^$_a-zA-Z0-9]/g;
      return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]';
    },
    computedMember: function computedMember(a, b) {
      return a + "[" + b + "]";
    },
    member: function member(a, b, d) {
      return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
    },
    getStringValue: function getStringValue(a) {
      this.assign(a, "getStringValue(" + a + ")");
    },
    lazyRecurse: function lazyRecurse(a, b, d, c, e, f) {
      var g = this;
      return function () {
        g.recurse(a, b, d, c, e, f);
      };
    },
    lazyAssign: function lazyAssign(a, b) {
      var d = this;
      return function () {
        d.assign(a, b);
      };
    },
    stringEscapeRegex: /[^ a-zA-Z0-9]/g,
    stringEscapeFn: function stringEscapeFn(a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    },
    escape: function escape(a) {
      if (A(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
      if (W(a)) return a.toString();
      if (!0 === a) return "true";
      if (!1 === a) return "false";
      if (null === a) return "null";
      if ("undefined" === typeof a) return "undefined";
      throw Ya("esc");
    },
    nextId: function nextId(a, b) {
      var d = "v" + this.state.nextId++;
      a || this.current().vars.push(d + (b ? "=" + b : ""));
      return d;
    },
    current: function current() {
      return this.state[this.state.computing];
    }
  };
  Kd.prototype = {
    compile: function compile(a) {
      var b = this;
      Z(a, b.$filter);
      var d, c;
      if (d = Id(a)) c = this.recurse(d);
      d = Gd(a.body);
      var e;
      d && (e = [], r(d, function (a, c) {
        var d = b.recurse(a);
        d.isPure = a.isPure;
        a.input = d;
        e.push(d);
        a.watchId = c;
      }));
      var f = [];
      r(a.body, function (a) {
        f.push(b.recurse(a.expression));
      });
      a = 0 === a.body.length ? E : 1 === a.body.length ? f[0] : function (a, b) {
        var c;
        r(f, function (d) {
          c = d(a, b);
        });
        return c;
      };
      c && (a.assign = function (a, b, d) {
        return c(a, d, b);
      });
      e && (a.inputs = e);
      return a;
    },
    recurse: function recurse(a, b, d) {
      var c,
          e,
          f = this,
          g;
      if (a.input) return this.inputs(a.input, a.watchId);

      switch (a.type) {
        case q.Literal:
          return this.value(a.value, b);

        case q.UnaryExpression:
          return e = this.recurse(a.argument), this["unary" + a.operator](e, b);

        case q.BinaryExpression:
          return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);

        case q.LogicalExpression:
          return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);

        case q.ConditionalExpression:
          return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);

        case q.Identifier:
          return f.identifier(a.name, b, d);

        case q.MemberExpression:
          return c = this.recurse(a.object, !1, !!d), a.computed || (e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d) : this.nonComputedMember(c, e, b, d);

        case q.CallExpression:
          return g = [], r(a.arguments, function (a) {
            g.push(f.recurse(a));
          }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
            for (var p = [], n = 0; n < g.length; ++n) {
              p.push(g[n](a, c, d, f));
            }

            a = e.apply(void 0, p, f);
            return b ? {
              context: void 0,
              name: void 0,
              value: a
            } : a;
          } : function (a, c, d, f) {
            var p = e(a, c, d, f),
                n;

            if (null != p.value) {
              n = [];

              for (var s = 0; s < g.length; ++s) {
                n.push(g[s](a, c, d, f));
              }

              n = p.value.apply(p.context, n);
            }

            return b ? {
              value: n
            } : n;
          };

        case q.AssignmentExpression:
          return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, f, g) {
            var p = c(a, d, f, g);
            a = e(a, d, f, g);
            p.context[p.name] = a;
            return b ? {
              value: a
            } : a;
          };

        case q.ArrayExpression:
          return g = [], r(a.elements, function (a) {
            g.push(f.recurse(a));
          }), function (a, c, d, e) {
            for (var f = [], n = 0; n < g.length; ++n) {
              f.push(g[n](a, c, d, e));
            }

            return b ? {
              value: f
            } : f;
          };

        case q.ObjectExpression:
          return g = [], r(a.properties, function (a) {
            a.computed ? g.push({
              key: f.recurse(a.key),
              computed: !0,
              value: f.recurse(a.value)
            }) : g.push({
              key: a.key.type === q.Identifier ? a.key.name : "" + a.key.value,
              computed: !1,
              value: f.recurse(a.value)
            });
          }), function (a, c, d, e) {
            for (var f = {}, n = 0; n < g.length; ++n) {
              g[n].computed ? f[g[n].key(a, c, d, e)] = g[n].value(a, c, d, e) : f[g[n].key] = g[n].value(a, c, d, e);
            }

            return b ? {
              value: f
            } : f;
          };

        case q.ThisExpression:
          return function (a) {
            return b ? {
              value: a
            } : a;
          };

        case q.LocalsExpression:
          return function (a, c) {
            return b ? {
              value: c
            } : c;
          };

        case q.NGValueParameter:
          return function (a, c, d) {
            return b ? {
              value: d
            } : d;
          };
      }
    },
    "unary+": function unary(a, b) {
      return function (d, c, e, f) {
        d = a(d, c, e, f);
        d = w(d) ? +d : 0;
        return b ? {
          value: d
        } : d;
      };
    },
    "unary-": function unary(a, b) {
      return function (d, c, e, f) {
        d = a(d, c, e, f);
        d = w(d) ? -d : -0;
        return b ? {
          value: d
        } : d;
      };
    },
    "unary!": function unary(a, b) {
      return function (d, c, e, f) {
        d = !a(d, c, e, f);
        return b ? {
          value: d
        } : d;
      };
    },
    "binary+": function binary(a, b, d) {
      return function (c, e, f, g) {
        var k = a(c, e, f, g);
        c = b(c, e, f, g);
        k = Ed(k, c);
        return d ? {
          value: k
        } : k;
      };
    },
    "binary-": function binary(a, b, d) {
      return function (c, e, f, g) {
        var k = a(c, e, f, g);
        c = b(c, e, f, g);
        k = (w(k) ? k : 0) - (w(c) ? c : 0);
        return d ? {
          value: k
        } : k;
      };
    },
    "binary*": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) * b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary/": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) / b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary%": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) % b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary===": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) === b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary!==": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) !== b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary==": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) == b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary!=": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) != b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary<": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) < b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary>": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) > b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary<=": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) <= b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary>=": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) >= b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary&&": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) && b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "binary||": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) || b(c, e, f, g);
        return d ? {
          value: c
        } : c;
      };
    },
    "ternary?:": function ternary(a, b, d, c) {
      return function (e, f, g, k) {
        e = a(e, f, g, k) ? b(e, f, g, k) : d(e, f, g, k);
        return c ? {
          value: e
        } : e;
      };
    },
    value: function value(a, b) {
      return function () {
        return b ? {
          context: void 0,
          name: void 0,
          value: a
        } : a;
      };
    },
    identifier: function identifier(a, b, d) {
      return function (c, e, f, g) {
        c = e && a in e ? e : c;
        d && 1 !== d && c && null == c[a] && (c[a] = {});
        e = c ? c[a] : void 0;
        return b ? {
          context: c,
          name: a,
          value: e
        } : e;
      };
    },
    computedMember: function computedMember(a, b, d, c) {
      return function (e, f, g, k) {
        var h = a(e, f, g, k),
            l,
            m;
        null != h && (l = b(e, f, g, k), l += "", c && 1 !== c && h && !h[l] && (h[l] = {}), m = h[l]);
        return d ? {
          context: h,
          name: l,
          value: m
        } : m;
      };
    },
    nonComputedMember: function nonComputedMember(a, b, d, c) {
      return function (e, f, g, k) {
        e = a(e, f, g, k);
        c && 1 !== c && e && null == e[b] && (e[b] = {});
        f = null != e ? e[b] : void 0;
        return d ? {
          context: e,
          name: b,
          value: f
        } : f;
      };
    },
    inputs: function inputs(a, b) {
      return function (d, c, e, f) {
        return f ? f[b] : a(d, c, e);
      };
    }
  };
  Mb.prototype = {
    constructor: Mb,
    parse: function parse(a) {
      a = this.getAst(a);
      var b = this.astCompiler.compile(a.ast),
          d = a.ast;
      b.literal = 0 === d.body.length || 1 === d.body.length && (d.body[0].expression.type === q.Literal || d.body[0].expression.type === q.ArrayExpression || d.body[0].expression.type === q.ObjectExpression);
      b.constant = a.ast.constant;
      b.oneTime = a.oneTime;
      return b;
    },
    getAst: function getAst(a) {
      var b = !1;
      a = a.trim();
      ":" === a.charAt(0) && ":" === a.charAt(1) && (b = !0, a = a.substring(2));
      return {
        ast: this.ast.ast(a),
        oneTime: b
      };
    }
  };
  var Ea = F("$sce"),
      V = {
    HTML: "html",
    CSS: "css",
    MEDIA_URL: "mediaUrl",
    URL: "url",
    RESOURCE_URL: "resourceUrl",
    JS: "js"
  },
      Cc = /_([a-z])/g,
      Ug = F("$templateRequest"),
      Vg = F("$timeout"),
      aa = C.document.createElement("a"),
      Od = ga(C.location.href),
      Na;
  aa.href = "http://[::1]";
  var Wg = "[::1]" === aa.hostname;
  Pd.$inject = ["$document"];
  dd.$inject = ["$provide"];
  var Wd = 22,
      Vd = ".",
      Ec = "0";
  Qd.$inject = ["$locale"];
  Sd.$inject = ["$locale"];
  var gh = {
    yyyy: ea("FullYear", 4, 0, !1, !0),
    yy: ea("FullYear", 2, 0, !0, !0),
    y: ea("FullYear", 1, 0, !1, !0),
    MMMM: kb("Month"),
    MMM: kb("Month", !0),
    MM: ea("Month", 2, 1),
    M: ea("Month", 1, 1),
    LLLL: kb("Month", !1, !0),
    dd: ea("Date", 2),
    d: ea("Date", 1),
    HH: ea("Hours", 2),
    H: ea("Hours", 1),
    hh: ea("Hours", 2, -12),
    h: ea("Hours", 1, -12),
    mm: ea("Minutes", 2),
    m: ea("Minutes", 1),
    ss: ea("Seconds", 2),
    s: ea("Seconds", 1),
    sss: ea("Milliseconds", 3),
    EEEE: kb("Day"),
    EEE: kb("Day", !0),
    a: function a(_a, b) {
      return 12 > _a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
    },
    Z: function Z(a, b, d) {
      a = -1 * d;
      return a = (0 <= a ? "+" : "") + (Ob(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Ob(Math.abs(a % 60), 2));
    },
    ww: Yd(2),
    w: Yd(1),
    G: Fc,
    GG: Fc,
    GGG: Fc,
    GGGG: function GGGG(a, b) {
      return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
    }
  },
      fh = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
      eh = /^-?\d+$/;
  Rd.$inject = ["$locale"];
  var $g = ia(K),
      ah = ia(ub);
  Td.$inject = ["$parse"];
  var Me = ia({
    restrict: "E",
    compile: function compile(a, b) {
      if (!b.href && !b.xlinkHref) return function (a, b) {
        if ("a" === b[0].nodeName.toLowerCase()) {
          var e = "[object SVGAnimatedString]" === la.call(b.prop("href")) ? "xlink:href" : "href";
          b.on("click", function (a) {
            b.attr(e) || a.preventDefault();
          });
        }
      };
    }
  }),
      vb = {};
  r(Gb, function (a, b) {
    function d(a, d, e) {
      a.$watch(e[c], function (a) {
        e.$set(b, !!a);
      });
    }

    if ("multiple" !== a) {
      var c = wa("ng-" + b),
          e = d;
      "checked" === a && (e = function e(a, b, _e) {
        _e.ngModel !== _e[c] && d(a, b, _e);
      });

      vb[c] = function () {
        return {
          restrict: "A",
          priority: 100,
          link: e
        };
      };
    }
  });
  r(td, function (a, b) {
    vb[b] = function () {
      return {
        priority: 100,
        link: function link(a, c, e) {
          if ("ngPattern" === b && "/" === e.ngPattern.charAt(0) && (c = e.ngPattern.match(ie))) {
            e.$set("ngPattern", new RegExp(c[1], c[2]));
            return;
          }

          a.$watch(e[b], function (a) {
            e.$set(b, a);
          });
        }
      };
    };
  });
  r(["src", "srcset", "href"], function (a) {
    var b = wa("ng-" + a);
    vb[b] = ["$sce", function (d) {
      return {
        priority: 99,
        link: function link(c, e, f) {
          var g = a,
              k = a;
          "href" === a && "[object SVGAnimatedString]" === la.call(e.prop("href")) && (k = "xlinkHref", f.$attr[k] = "xlink:href", g = null);
          f.$set(b, d.getTrustedMediaUrl(f[b]));
          f.$observe(b, function (b) {
            b ? (f.$set(k, b), Ca && g && e.prop(g, f[k])) : "href" === a && f.$set(k, null);
          });
        }
      };
    }];
  });
  var lb = {
    $addControl: E,
    $getControls: ia([]),
    $$renameControl: function $$renameControl(a, b) {
      a.$name = b;
    },
    $removeControl: E,
    $setValidity: E,
    $setDirty: E,
    $setPristine: E,
    $setSubmitted: E,
    $$setSubmitted: E
  };
  Pb.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
  Pb.prototype = {
    $rollbackViewValue: function $rollbackViewValue() {
      r(this.$$controls, function (a) {
        a.$rollbackViewValue();
      });
    },
    $commitViewValue: function $commitViewValue() {
      r(this.$$controls, function (a) {
        a.$commitViewValue();
      });
    },
    $addControl: function $addControl(a) {
      Ja(a.$name, "input");
      this.$$controls.push(a);
      a.$name && (this[a.$name] = a);
      a.$$parentForm = this;
    },
    $getControls: function $getControls() {
      return ja(this.$$controls);
    },
    $$renameControl: function $$renameControl(a, b) {
      var d = a.$name;
      this[d] === a && delete this[d];
      this[b] = a;
      a.$name = b;
    },
    $removeControl: function $removeControl(a) {
      a.$name && this[a.$name] === a && delete this[a.$name];
      r(this.$pending, function (b, d) {
        this.$setValidity(d, null, a);
      }, this);
      r(this.$error, function (b, d) {
        this.$setValidity(d, null, a);
      }, this);
      r(this.$$success, function (b, d) {
        this.$setValidity(d, null, a);
      }, this);
      cb(this.$$controls, a);
      a.$$parentForm = lb;
    },
    $setDirty: function $setDirty() {
      this.$$animate.removeClass(this.$$element, Za);
      this.$$animate.addClass(this.$$element, Vb);
      this.$dirty = !0;
      this.$pristine = !1;
      this.$$parentForm.$setDirty();
    },
    $setPristine: function $setPristine() {
      this.$$animate.setClass(this.$$element, Za, Vb + " ng-submitted");
      this.$dirty = !1;
      this.$pristine = !0;
      this.$submitted = !1;
      r(this.$$controls, function (a) {
        a.$setPristine();
      });
    },
    $setUntouched: function $setUntouched() {
      r(this.$$controls, function (a) {
        a.$setUntouched();
      });
    },
    $setSubmitted: function $setSubmitted() {
      for (var a = this; a.$$parentForm && a.$$parentForm !== lb;) {
        a = a.$$parentForm;
      }

      a.$$setSubmitted();
    },
    $$setSubmitted: function $$setSubmitted() {
      this.$$animate.addClass(this.$$element, "ng-submitted");
      this.$submitted = !0;
      r(this.$$controls, function (a) {
        a.$$setSubmitted && a.$$setSubmitted();
      });
    }
  };
  ae({
    clazz: Pb,
    set: function set(a, b, d) {
      var c = a[b];
      c ? -1 === c.indexOf(d) && c.push(d) : a[b] = [d];
    },
    unset: function unset(a, b, d) {
      var c = a[b];
      c && (cb(c, d), 0 === c.length && delete a[b]);
    }
  });

  var ke = function ke(a) {
    return ["$timeout", "$parse", function (b, d) {
      function c(a) {
        return "" === a ? d('this[""]').assign : d(a).assign || E;
      }

      return {
        name: "form",
        restrict: a ? "EAC" : "E",
        require: ["form", "^^?form"],
        controller: Pb,
        compile: function compile(d, f) {
          d.addClass(Za).addClass(mb);
          var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;
          return {
            pre: function pre(a, d, e, f) {
              var p = f[0];

              if (!("action" in e)) {
                var n = function n(b) {
                  a.$apply(function () {
                    p.$commitViewValue();
                    p.$setSubmitted();
                  });
                  b.preventDefault();
                };

                d[0].addEventListener("submit", n);
                d.on("$destroy", function () {
                  b(function () {
                    d[0].removeEventListener("submit", n);
                  }, 0, !1);
                });
              }

              (f[1] || p.$$parentForm).$addControl(p);
              var s = g ? c(p.$name) : E;
              g && (s(a, p), e.$observe(g, function (b) {
                p.$name !== b && (s(a, void 0), p.$$parentForm.$$renameControl(p, b), s = c(p.$name), s(a, p));
              }));
              d.on("$destroy", function () {
                p.$$parentForm.$removeControl(p);
                s(a, void 0);
                S(p, lb);
              });
            }
          };
        }
      };
    }];
  },
      Ne = ke(),
      Ze = ke(!0),
      hh = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
      sh = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
      th = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
      ih = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
      le = /^(\d{4,})-(\d{2})-(\d{2})$/,
      me = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Mc = /^(\d{4,})-W(\d\d)$/,
      ne = /^(\d{4,})-(\d\d)$/,
      oe = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      ce = T();

  r(["date", "datetime-local", "month", "time", "week"], function (a) {
    ce[a] = !0;
  });

  var pe = {
    text: function text(a, b, d, c, e, f) {
      Sa(a, b, d, c, e, f);
      Hc(c);
    },
    date: nb("date", le, Qb(le, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
    "datetime-local": nb("datetimelocal", me, Qb(me, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
    time: nb("time", oe, Qb(oe, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
    week: nb("week", Mc, function (a, b) {
      if (ha(a)) return a;

      if (A(a)) {
        Mc.lastIndex = 0;
        var d = Mc.exec(a);

        if (d) {
          var c = +d[1],
              e = +d[2],
              f = d = 0,
              g = 0,
              k = 0,
              h = Xd(c),
              e = 7 * (e - 1);
          b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), k = b.getMilliseconds());
          return new Date(c, 0, h.getDate() + e, d, f, g, k);
        }
      }

      return NaN;
    }, "yyyy-Www"),
    month: nb("month", ne, Qb(ne, ["yyyy", "MM"]), "yyyy-MM"),
    number: function number(a, b, d, c, e, f, g, k) {
      Ic(a, b, d, c, "number");
      de(c);
      Sa(a, b, d, c, e, f);
      var h;

      if (w(d.min) || d.ngMin) {
        var l = d.min || k(d.ngMin)(a);
        h = na(l);

        c.$validators.min = function (a, b) {
          return c.$isEmpty(b) || z(h) || b >= h;
        };

        d.$observe("min", function (a) {
          a !== l && (h = na(a), l = a, c.$validate());
        });
      }

      if (w(d.max) || d.ngMax) {
        var m = d.max || k(d.ngMax)(a),
            p = na(m);

        c.$validators.max = function (a, b) {
          return c.$isEmpty(b) || z(p) || b <= p;
        };

        d.$observe("max", function (a) {
          a !== m && (p = na(a), m = a, c.$validate());
        });
      }

      if (w(d.step) || d.ngStep) {
        var n = d.step || k(d.ngStep)(a),
            s = na(n);

        c.$validators.step = function (a, b) {
          return c.$isEmpty(b) || z(s) || ee(b, h || 0, s);
        };

        d.$observe("step", function (a) {
          a !== n && (s = na(a), n = a, c.$validate());
        });
      }
    },
    url: function url(a, b, d, c, e, f) {
      Sa(a, b, d, c, e, f);
      Hc(c);

      c.$validators.url = function (a, b) {
        var d = a || b;
        return c.$isEmpty(d) || sh.test(d);
      };
    },
    email: function email(a, b, d, c, e, f) {
      Sa(a, b, d, c, e, f);
      Hc(c);

      c.$validators.email = function (a, b) {
        var d = a || b;
        return c.$isEmpty(d) || th.test(d);
      };
    },
    radio: function radio(a, b, d, c) {
      var e = !d.ngTrim || "false" !== U(d.ngTrim);
      z(d.name) && b.attr("name", ++pb);
      b.on("change", function (a) {
        var g;
        b[0].checked && (g = d.value, e && (g = U(g)), c.$setViewValue(g, a && a.type));
      });

      c.$render = function () {
        var a = d.value;
        e && (a = U(a));
        b[0].checked = a === c.$viewValue;
      };

      d.$observe("value", c.$render);
    },
    range: function range(a, b, d, c, e, f) {
      function g(a, c) {
        b.attr(a, d[a]);
        var e = d[a];
        d.$observe(a, function (a) {
          a !== e && (e = a, c(a));
        });
      }

      function k(a) {
        p = na(a);
        X(c.$modelValue) || (m ? (a = b.val(), p > a && (a = p, b.val(a)), c.$setViewValue(a)) : c.$validate());
      }

      function h(a) {
        n = na(a);
        X(c.$modelValue) || (m ? (a = b.val(), n < a && (b.val(n), a = n < p ? p : n), c.$setViewValue(a)) : c.$validate());
      }

      function l(a) {
        s = na(a);
        X(c.$modelValue) || (m ? c.$viewValue !== b.val() && c.$setViewValue(b.val()) : c.$validate());
      }

      Ic(a, b, d, c, "range");
      de(c);
      Sa(a, b, d, c, e, f);
      var m = c.$$hasNativeValidators && "range" === b[0].type,
          p = m ? 0 : void 0,
          n = m ? 100 : void 0,
          s = m ? 1 : void 0,
          r = b[0].validity;
      a = w(d.min);
      e = w(d.max);
      f = w(d.step);
      var q = c.$render;
      c.$render = m && w(r.rangeUnderflow) && w(r.rangeOverflow) ? function () {
        q();
        c.$setViewValue(b.val());
      } : q;
      a && (p = na(d.min), c.$validators.min = m ? function () {
        return !0;
      } : function (a, b) {
        return c.$isEmpty(b) || z(p) || b >= p;
      }, g("min", k));
      e && (n = na(d.max), c.$validators.max = m ? function () {
        return !0;
      } : function (a, b) {
        return c.$isEmpty(b) || z(n) || b <= n;
      }, g("max", h));
      f && (s = na(d.step), c.$validators.step = m ? function () {
        return !r.stepMismatch;
      } : function (a, b) {
        return c.$isEmpty(b) || z(s) || ee(b, p || 0, s);
      }, g("step", l));
    },
    checkbox: function checkbox(a, b, d, c, e, f, g, k) {
      var h = fe(k, a, "ngTrueValue", d.ngTrueValue, !0),
          l = fe(k, a, "ngFalseValue", d.ngFalseValue, !1);
      b.on("change", function (a) {
        c.$setViewValue(b[0].checked, a && a.type);
      });

      c.$render = function () {
        b[0].checked = c.$viewValue;
      };

      c.$isEmpty = function (a) {
        return !1 === a;
      };

      c.$formatters.push(function (a) {
        return va(a, h);
      });
      c.$parsers.push(function (a) {
        return a ? h : l;
      });
    },
    hidden: E,
    button: E,
    submit: E,
    reset: E,
    file: E
  },
      Yc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
    return {
      restrict: "E",
      require: ["?ngModel"],
      link: {
        pre: function pre(e, f, g, k) {
          k[0] && (pe[K(g.type)] || pe.text)(e, f, g, k[0], b, a, d, c);
        }
      }
    };
  }],
      vf = function vf() {
    var a = {
      configurable: !0,
      enumerable: !1,
      get: function get() {
        return this.getAttribute("value") || "";
      },
      set: function set(a) {
        this.setAttribute("value", a);
      }
    };
    return {
      restrict: "E",
      priority: 200,
      compile: function compile(b, d) {
        if ("hidden" === K(d.type)) return {
          pre: function pre(b, d, f, g) {
            b = d[0];
            b.parentNode && b.parentNode.insertBefore(b, b.nextSibling);
            Object.defineProperty && Object.defineProperty(b, "value", a);
          }
        };
      }
    };
  },
      uh = /^(true|false|\d+)$/,
      sf = function sf() {
    function a(a, d, c) {
      var e = w(c) ? c : 9 === Ca ? "" : null;
      a.prop("value", e);
      d.$set("value", c);
    }

    return {
      restrict: "A",
      priority: 100,
      compile: function compile(b, d) {
        return uh.test(d.ngValue) ? function (b, d, f) {
          b = b.$eval(f.ngValue);
          a(d, f, b);
        } : function (b, d, f) {
          b.$watch(f.ngValue, function (b) {
            a(d, f, b);
          });
        };
      }
    };
  },
      Re = ["$compile", function (a) {
    return {
      restrict: "AC",
      compile: function compile(b) {
        a.$$addBindingClass(b);
        return function (b, c, e) {
          a.$$addBindingInfo(c, e.ngBind);
          c = c[0];
          b.$watch(e.ngBind, function (a) {
            c.textContent = ic(a);
          });
        };
      }
    };
  }],
      Te = ["$interpolate", "$compile", function (a, b) {
    return {
      compile: function compile(d) {
        b.$$addBindingClass(d);
        return function (c, d, f) {
          c = a(d.attr(f.$attr.ngBindTemplate));
          b.$$addBindingInfo(d, c.expressions);
          d = d[0];
          f.$observe("ngBindTemplate", function (a) {
            d.textContent = z(a) ? "" : a;
          });
        };
      }
    };
  }],
      Se = ["$sce", "$parse", "$compile", function (a, b, d) {
    return {
      restrict: "A",
      compile: function compile(c, e) {
        var f = b(e.ngBindHtml),
            g = b(e.ngBindHtml, function (b) {
          return a.valueOf(b);
        });
        d.$$addBindingClass(c);
        return function (b, c, e) {
          d.$$addBindingInfo(c, e.ngBindHtml);
          b.$watch(g, function () {
            var d = f(b);
            c.html(a.getTrustedHtml(d) || "");
          });
        };
      }
    };
  }],
      rf = ia({
    restrict: "A",
    require: "ngModel",
    link: function link(a, b, d, c) {
      c.$viewChangeListeners.push(function () {
        a.$eval(d.ngChange);
      });
    }
  }),
      Ue = Kc("", !0),
      We = Kc("Odd", 0),
      Ve = Kc("Even", 1),
      Xe = Ra({
    compile: function compile(a, b) {
      b.$set("ngCloak", void 0);
      a.removeClass("ng-cloak");
    }
  }),
      Ye = [function () {
    return {
      restrict: "A",
      scope: !0,
      controller: "@",
      priority: 500
    };
  }],
      cd = {},
      vh = {
    blur: !0,
    focus: !0
  };

  r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
    var b = wa("ng-" + a);
    cd[b] = ["$parse", "$rootScope", "$exceptionHandler", function (d, c, e) {
      return qd(d, c, e, b, a, vh[a]);
    }];
  });

  var af = ["$animate", "$compile", function (a, b) {
    return {
      multiElement: !0,
      transclude: "element",
      priority: 600,
      terminal: !0,
      restrict: "A",
      $$tlb: !0,
      link: function link(d, c, e, f, g) {
        var k, h, l;
        d.$watch(e.ngIf, function (d) {
          d ? h || g(function (d, f) {
            h = f;
            d[d.length++] = b.$$createComment("end ngIf", e.ngIf);
            k = {
              clone: d
            };
            a.enter(d, c.parent(), c);
          }) : (l && (l.remove(), l = null), h && (h.$destroy(), h = null), k && (l = tb(k.clone), a.leave(l).done(function (a) {
            !1 !== a && (l = null);
          }), k = null));
        });
      }
    };
  }],
      bf = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
    return {
      restrict: "ECA",
      priority: 400,
      terminal: !0,
      transclude: "element",
      controller: ca.noop,
      compile: function compile(c, e) {
        var f = e.ngInclude || e.src,
            g = e.onload || "",
            k = e.autoscroll;
        return function (c, e, m, p, n) {
          var r = 0,
              q,
              t,
              x,
              v = function v() {
            t && (t.remove(), t = null);
            q && (q.$destroy(), q = null);
            x && (d.leave(x).done(function (a) {
              !1 !== a && (t = null);
            }), t = x, x = null);
          };

          c.$watch(f, function (f) {
            var m = function m(a) {
              !1 === a || !w(k) || k && !c.$eval(k) || b();
            },
                t = ++r;

            f ? (a(f, !0).then(function (a) {
              if (!c.$$destroyed && t === r) {
                var b = c.$new();
                p.template = a;
                a = n(b, function (a) {
                  v();
                  d.enter(a, null, e).done(m);
                });
                q = b;
                x = a;
                q.$emit("$includeContentLoaded", f);
                c.$eval(g);
              }
            }, function () {
              c.$$destroyed || t !== r || (v(), c.$emit("$includeContentError", f));
            }), c.$emit("$includeContentRequested", f)) : (v(), p.template = null);
          });
        };
      }
    };
  }],
      uf = ["$compile", function (a) {
    return {
      restrict: "ECA",
      priority: -400,
      require: "ngInclude",
      link: function link(b, d, c, e) {
        la.call(d[0]).match(/SVG/) ? (d.empty(), a(ed(e.template, C.document).childNodes)(b, function (a) {
          d.append(a);
        }, {
          futureParentElement: d
        })) : (d.html(e.template), a(d.contents())(b));
      }
    };
  }],
      cf = Ra({
    priority: 450,
    compile: function compile() {
      return {
        pre: function pre(a, b, d) {
          a.$eval(d.ngInit);
        }
      };
    }
  }),
      qf = function qf() {
    return {
      restrict: "A",
      priority: 100,
      require: "ngModel",
      link: function link(a, b, d, c) {
        var e = d.ngList || ", ",
            f = "false" !== d.ngTrim,
            g = f ? U(e) : e;
        c.$parsers.push(function (a) {
          if (!z(a)) {
            var b = [];
            a && r(a.split(g), function (a) {
              a && b.push(f ? U(a) : a);
            });
            return b;
          }
        });
        c.$formatters.push(function (a) {
          if (H(a)) return a.join(e);
        });

        c.$isEmpty = function (a) {
          return !a || !a.length;
        };
      }
    };
  },
      mb = "ng-valid",
      $d = "ng-invalid",
      Za = "ng-pristine",
      Vb = "ng-dirty",
      ob = F("ngModel");

  Rb.$inject = "$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");
  Rb.prototype = {
    $$initGetterSetters: function $$initGetterSetters() {
      if (this.$options.getOption("getterSetter")) {
        var a = this.$$parse(this.$$attr.ngModel + "()"),
            b = this.$$parse(this.$$attr.ngModel + "($$$p)");

        this.$$ngModelGet = function (b) {
          var c = this.$$parsedNgModel(b);
          B(c) && (c = a(b));
          return c;
        };

        this.$$ngModelSet = function (a, c) {
          B(this.$$parsedNgModel(a)) ? b(a, {
            $$$p: c
          }) : this.$$parsedNgModelAssign(a, c);
        };
      } else if (!this.$$parsedNgModel.assign) throw ob("nonassign", this.$$attr.ngModel, za(this.$$element));
    },
    $render: E,
    $isEmpty: function $isEmpty(a) {
      return z(a) || "" === a || null === a || a !== a;
    },
    $$updateEmptyClasses: function $$updateEmptyClasses(a) {
      this.$isEmpty(a) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty"));
    },
    $setPristine: function $setPristine() {
      this.$dirty = !1;
      this.$pristine = !0;
      this.$$animate.removeClass(this.$$element, Vb);
      this.$$animate.addClass(this.$$element, Za);
    },
    $setDirty: function $setDirty() {
      this.$dirty = !0;
      this.$pristine = !1;
      this.$$animate.removeClass(this.$$element, Za);
      this.$$animate.addClass(this.$$element, Vb);
      this.$$parentForm.$setDirty();
    },
    $setUntouched: function $setUntouched() {
      this.$touched = !1;
      this.$untouched = !0;
      this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched");
    },
    $setTouched: function $setTouched() {
      this.$touched = !0;
      this.$untouched = !1;
      this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched");
    },
    $rollbackViewValue: function $rollbackViewValue() {
      this.$$timeout.cancel(this.$$pendingDebounce);
      this.$viewValue = this.$$lastCommittedViewValue;
      this.$render();
    },
    $validate: function $validate() {
      if (!X(this.$modelValue)) {
        var a = this.$$lastCommittedViewValue,
            b = this.$$rawModelValue,
            d = this.$valid,
            c = this.$modelValue,
            e = this.$options.getOption("allowInvalid"),
            f = this;
        this.$$runValidators(b, a, function (a) {
          e || d === a || (f.$modelValue = a ? b : void 0, f.$modelValue !== c && f.$$writeModelToScope());
        });
      }
    },
    $$runValidators: function $$runValidators(a, b, d) {
      function c() {
        var c = !0;
        r(h.$validators, function (d, e) {
          var g = Boolean(d(a, b));
          c = c && g;
          f(e, g);
        });
        return c ? !0 : (r(h.$asyncValidators, function (a, b) {
          f(b, null);
        }), !1);
      }

      function e() {
        var c = [],
            d = !0;
        r(h.$asyncValidators, function (e, g) {
          var h = e(a, b);
          if (!h || !B(h.then)) throw ob("nopromise", h);
          f(g, void 0);
          c.push(h.then(function () {
            f(g, !0);
          }, function () {
            d = !1;
            f(g, !1);
          }));
        });
        c.length ? h.$$q.all(c).then(function () {
          g(d);
        }, E) : g(!0);
      }

      function f(a, b) {
        k === h.$$currentValidationRunId && h.$setValidity(a, b);
      }

      function g(a) {
        k === h.$$currentValidationRunId && d(a);
      }

      this.$$currentValidationRunId++;
      var k = this.$$currentValidationRunId,
          h = this;
      (function () {
        var a = h.$$parserName;
        if (z(h.$$parserValid)) f(a, null);else return h.$$parserValid || (r(h.$validators, function (a, b) {
          f(b, null);
        }), r(h.$asyncValidators, function (a, b) {
          f(b, null);
        })), f(a, h.$$parserValid), h.$$parserValid;
        return !0;
      })() ? c() ? e() : g(!1) : g(!1);
    },
    $commitViewValue: function $commitViewValue() {
      var a = this.$viewValue;
      this.$$timeout.cancel(this.$$pendingDebounce);
      if (this.$$lastCommittedViewValue !== a || "" === a && this.$$hasNativeValidators) this.$$updateEmptyClasses(a), this.$$lastCommittedViewValue = a, this.$pristine && this.$setDirty(), this.$$parseAndValidate();
    },
    $$parseAndValidate: function $$parseAndValidate() {
      var a = this.$$lastCommittedViewValue,
          b = this;
      this.$$parserValid = z(a) ? void 0 : !0;
      this.$setValidity(this.$$parserName, null);
      this.$$parserName = "parse";
      if (this.$$parserValid) for (var d = 0; d < this.$parsers.length; d++) {
        if (a = this.$parsers[d](a), z(a)) {
          this.$$parserValid = !1;
          break;
        }
      }
      X(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
      var c = this.$modelValue,
          e = this.$options.getOption("allowInvalid");
      this.$$rawModelValue = a;
      e && (this.$modelValue = a, b.$modelValue !== c && b.$$writeModelToScope());
      this.$$runValidators(a, this.$$lastCommittedViewValue, function (d) {
        e || (b.$modelValue = d ? a : void 0, b.$modelValue !== c && b.$$writeModelToScope());
      });
    },
    $$writeModelToScope: function $$writeModelToScope() {
      this.$$ngModelSet(this.$$scope, this.$modelValue);
      r(this.$viewChangeListeners, function (a) {
        try {
          a();
        } catch (b) {
          this.$$exceptionHandler(b);
        }
      }, this);
    },
    $setViewValue: function $setViewValue(a, b) {
      this.$viewValue = a;
      this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(b);
    },
    $$debounceViewValueCommit: function $$debounceViewValueCommit(a) {
      var b = this.$options.getOption("debounce");
      W(b[a]) ? b = b[a] : W(b["default"]) && -1 === this.$options.getOption("updateOn").indexOf(a) ? b = b["default"] : W(b["*"]) && (b = b["*"]);
      this.$$timeout.cancel(this.$$pendingDebounce);
      var d = this;
      0 < b ? this.$$pendingDebounce = this.$$timeout(function () {
        d.$commitViewValue();
      }, b) : this.$$rootScope.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function () {
        d.$commitViewValue();
      });
    },
    $overrideModelOptions: function $overrideModelOptions(a) {
      this.$options = this.$options.createChild(a);
      this.$$setUpdateOnEvents();
    },
    $processModelValue: function $processModelValue() {
      var a = this.$$format();
      this.$viewValue !== a && (this.$$updateEmptyClasses(a), this.$viewValue = this.$$lastCommittedViewValue = a, this.$render(), this.$$runValidators(this.$modelValue, this.$viewValue, E));
    },
    $$format: function $$format() {
      for (var a = this.$formatters, b = a.length, d = this.$modelValue; b--;) {
        d = a[b](d);
      }

      return d;
    },
    $$setModelValue: function $$setModelValue(a) {
      this.$modelValue = this.$$rawModelValue = a;
      this.$$parserValid = void 0;
      this.$processModelValue();
    },
    $$setUpdateOnEvents: function $$setUpdateOnEvents() {
      this.$$updateEvents && this.$$element.off(this.$$updateEvents, this.$$updateEventHandler);
      if (this.$$updateEvents = this.$options.getOption("updateOn")) this.$$element.on(this.$$updateEvents, this.$$updateEventHandler);
    },
    $$updateEventHandler: function $$updateEventHandler(a) {
      this.$$debounceViewValueCommit(a && a.type);
    }
  };
  ae({
    clazz: Rb,
    set: function set(a, b) {
      a[b] = !0;
    },
    unset: function unset(a, b) {
      delete a[b];
    }
  });
  var pf = ["$rootScope", function (a) {
    return {
      restrict: "A",
      require: ["ngModel", "^?form", "^?ngModelOptions"],
      controller: Rb,
      priority: 1,
      compile: function compile(b) {
        b.addClass(Za).addClass("ng-untouched").addClass(mb);
        return {
          pre: function pre(a, b, e, f) {
            var g = f[0];
            b = f[1] || g.$$parentForm;
            if (f = f[2]) g.$options = f.$options;
            g.$$initGetterSetters();
            b.$addControl(g);
            e.$observe("name", function (a) {
              g.$name !== a && g.$$parentForm.$$renameControl(g, a);
            });
            a.$on("$destroy", function () {
              g.$$parentForm.$removeControl(g);
            });
          },
          post: function post(b, c, e, f) {
            function g() {
              k.$setTouched();
            }

            var k = f[0];
            k.$$setUpdateOnEvents();
            c.on("blur", function () {
              k.$touched || (a.$$phase ? b.$evalAsync(g) : b.$apply(g));
            });
          }
        };
      }
    };
  }],
      Sb,
      wh = /(\s+|^)default(\s+|$)/;
  Lc.prototype = {
    getOption: function getOption(a) {
      return this.$$options[a];
    },
    createChild: function createChild(a) {
      var b = !1;
      a = S({}, a);
      r(a, function (d, c) {
        "$inherit" === d ? "*" === c ? b = !0 : (a[c] = this.$$options[c], "updateOn" === c && (a.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === c && (a.updateOnDefault = !1, a[c] = U(d.replace(wh, function () {
          a.updateOnDefault = !0;
          return " ";
        })));
      }, this);
      b && (delete a["*"], ge(a, this.$$options));
      ge(a, Sb.$$options);
      return new Lc(a);
    }
  };
  Sb = new Lc({
    updateOn: "",
    updateOnDefault: !0,
    debounce: 0,
    getterSetter: !1,
    allowInvalid: !1,
    timezone: null
  });

  var tf = function tf() {
    function a(a, d) {
      this.$$attrs = a;
      this.$$scope = d;
    }

    a.$inject = ["$attrs", "$scope"];
    a.prototype = {
      $onInit: function $onInit() {
        var a = this.parentCtrl ? this.parentCtrl.$options : Sb,
            d = this.$$scope.$eval(this.$$attrs.ngModelOptions);
        this.$options = a.createChild(d);
      }
    };
    return {
      restrict: "A",
      priority: 10,
      require: {
        parentCtrl: "?^^ngModelOptions"
      },
      bindToController: !0,
      controller: a
    };
  },
      df = Ra({
    terminal: !0,
    priority: 1E3
  }),
      xh = F("ngOptions"),
      yh = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
      nf = ["$compile", "$document", "$parse", function (a, b, d) {
    function c(a, b, c) {
      function e(a, b, c, d, f) {
        this.selectValue = a;
        this.viewValue = b;
        this.label = c;
        this.group = d;
        this.disabled = f;
      }

      function f(a) {
        var b;
        if (!r && ya(a)) b = a;else {
          b = [];

          for (var c in a) {
            a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
          }
        }
        return b;
      }

      var p = a.match(yh);
      if (!p) throw xh("iexp", a, za(b));
      var n = p[5] || p[7],
          r = p[6];
      a = / as /.test(p[0]) && p[1];
      var q = p[9];
      b = d(p[2] ? p[1] : n);

      var t = a && d(a) || b,
          w = q && d(q),
          v = q ? function (a, b) {
        return w(c, b);
      } : function (a) {
        return La(a);
      },
          x = function x(a, b) {
        return v(a, A(a, b));
      },
          z = d(p[2] || p[1]),
          y = d(p[3] || ""),
          J = d(p[4] || ""),
          I = d(p[8]),
          B = {},
          A = r ? function (a, b) {
        B[r] = b;
        B[n] = a;
        return B;
      } : function (a) {
        B[n] = a;
        return B;
      };

      return {
        trackBy: q,
        getTrackByValue: x,
        getWatchables: d(I, function (a) {
          var b = [];
          a = a || [];

          for (var d = f(a), e = d.length, g = 0; g < e; g++) {
            var k = a === d ? g : d[g],
                l = a[k],
                k = A(l, k),
                l = v(l, k);
            b.push(l);
            if (p[2] || p[1]) l = z(c, k), b.push(l);
            p[4] && (k = J(c, k), b.push(k));
          }

          return b;
        }),
        getOptions: function getOptions() {
          for (var a = [], b = {}, d = I(c) || [], g = f(d), k = g.length, n = 0; n < k; n++) {
            var p = d === g ? n : g[n],
                r = A(d[p], p),
                s = t(c, r),
                p = v(s, r),
                w = z(c, r),
                B = y(c, r),
                r = J(c, r),
                s = new e(p, s, w, B, r);
            a.push(s);
            b[p] = s;
          }

          return {
            items: a,
            selectValueMap: b,
            getOptionFromViewValue: function getOptionFromViewValue(a) {
              return b[x(a)];
            },
            getViewValueFromOption: function getViewValueFromOption(a) {
              return q ? Ia(a.viewValue) : a.viewValue;
            }
          };
        }
      };
    }

    var e = C.document.createElement("option"),
        f = C.document.createElement("optgroup");
    return {
      restrict: "A",
      terminal: !0,
      require: ["select", "ngModel"],
      link: {
        pre: function pre(a, b, c, d) {
          d[0].registerOption = E;
        },
        post: function post(d, k, h, l) {
          function m(a) {
            var b = (a = v.getOptionFromViewValue(a)) && a.element;
            b && !b.selected && (b.selected = !0);
            return a;
          }

          function p(a, b) {
            a.element = b;
            b.disabled = a.disabled;
            a.label !== b.label && (b.label = a.label, b.textContent = a.label);
            b.value = a.selectValue;
          }

          var n = l[0],
              q = l[1],
              z = h.multiple;
          l = 0;

          for (var t = k.children(), B = t.length; l < B; l++) {
            if ("" === t[l].value) {
              n.hasEmptyOption = !0;
              n.emptyOption = t.eq(l);
              break;
            }
          }

          k.empty();
          l = !!n.emptyOption;
          x(e.cloneNode(!1)).val("?");
          var v,
              A = c(h.ngOptions, k, d),
              C = b[0].createDocumentFragment();

          n.generateUnknownOptionValue = function (a) {
            return "?";
          };

          z ? (n.writeValue = function (a) {
            if (v) {
              var b = a && a.map(m) || [];
              v.items.forEach(function (a) {
                a.element.selected && -1 === Array.prototype.indexOf.call(b, a) && (a.element.selected = !1);
              });
            }
          }, n.readValue = function () {
            var a = k.val() || [],
                b = [];
            r(a, function (a) {
              (a = v.selectValueMap[a]) && !a.disabled && b.push(v.getViewValueFromOption(a));
            });
            return b;
          }, A.trackBy && d.$watchCollection(function () {
            if (H(q.$viewValue)) return q.$viewValue.map(function (a) {
              return A.getTrackByValue(a);
            });
          }, function () {
            q.$render();
          })) : (n.writeValue = function (a) {
            if (v) {
              var b = k[0].options[k[0].selectedIndex],
                  c = v.getOptionFromViewValue(a);
              b && b.removeAttribute("selected");
              c ? (k[0].value !== c.selectValue && (n.removeUnknownOption(), k[0].value = c.selectValue, c.element.selected = !0), c.element.setAttribute("selected", "selected")) : n.selectUnknownOrEmptyOption(a);
            }
          }, n.readValue = function () {
            var a = v.selectValueMap[k.val()];
            return a && !a.disabled ? (n.unselectEmptyOption(), n.removeUnknownOption(), v.getViewValueFromOption(a)) : null;
          }, A.trackBy && d.$watch(function () {
            return A.getTrackByValue(q.$viewValue);
          }, function () {
            q.$render();
          }));
          l && (a(n.emptyOption)(d), k.prepend(n.emptyOption), 8 === n.emptyOption[0].nodeType ? (n.hasEmptyOption = !1, n.registerOption = function (a, b) {
            "" === b.val() && (n.hasEmptyOption = !0, n.emptyOption = b, n.emptyOption.removeClass("ng-scope"), q.$render(), b.on("$destroy", function () {
              var a = n.$isEmptyOptionSelected();
              n.hasEmptyOption = !1;
              n.emptyOption = void 0;
              a && q.$render();
            }));
          }) : n.emptyOption.removeClass("ng-scope"));
          d.$watchCollection(A.getWatchables, function () {
            var a = v && n.readValue();
            if (v) for (var b = v.items.length - 1; 0 <= b; b--) {
              var c = v.items[b];
              w(c.group) ? Fb(c.element.parentNode) : Fb(c.element);
            }
            v = A.getOptions();
            var d = {};
            v.items.forEach(function (a) {
              var b;

              if (w(a.group)) {
                b = d[a.group];
                b || (b = f.cloneNode(!1), C.appendChild(b), b.label = null === a.group ? "null" : a.group, d[a.group] = b);
                var c = e.cloneNode(!1);
                b.appendChild(c);
                p(a, c);
              } else b = e.cloneNode(!1), C.appendChild(b), p(a, b);
            });
            k[0].appendChild(C);
            q.$render();
            q.$isEmpty(a) || (b = n.readValue(), (A.trackBy || z ? va(a, b) : a === b) || (q.$setViewValue(b), q.$render()));
          });
        }
      }
    };
  }],
      ef = ["$locale", "$interpolate", "$log", function (a, b, d) {
    var c = /{}/g,
        e = /^when(Minus)?(.+)$/;
    return {
      link: function link(f, g, k) {
        function h(a) {
          g.text(a || "");
        }

        var l = k.count,
            m = k.$attr.when && g.attr(k.$attr.when),
            p = k.offset || 0,
            n = f.$eval(m) || {},
            q = {},
            w = b.startSymbol(),
            t = b.endSymbol(),
            x = w + l + "-" + p + t,
            v = ca.noop,
            A;
        r(k, function (a, b) {
          var c = e.exec(b);
          c && (c = (c[1] ? "-" : "") + K(c[2]), n[c] = g.attr(k.$attr[b]));
        });
        r(n, function (a, d) {
          q[d] = b(a.replace(c, x));
        });
        f.$watch(l, function (b) {
          var c = parseFloat(b),
              e = X(c);
          e || c in n || (c = a.pluralCat(c - p));
          c === A || e && X(A) || (v(), e = q[c], z(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), v = E, h()) : v = f.$watch(e, h), A = c);
        });
      }
    };
  }],
      qe = F("ngRef"),
      ff = ["$parse", function (a) {
    return {
      priority: -1,
      restrict: "A",
      compile: function compile(b, d) {
        var c = wa(ua(b)),
            e = a(d.ngRef),
            f = e.assign || function () {
          throw qe("nonassign", d.ngRef);
        };

        return function (a, b, h) {
          var l;
          if (h.hasOwnProperty("ngRefRead")) {
            if ("$element" === h.ngRefRead) l = b;else {
              if (l = b.data("$" + h.ngRefRead + "Controller"), !l) throw qe("noctrl", h.ngRefRead, d.ngRef);
            }
          } else l = b.data("$" + c + "Controller");
          l = l || b;
          f(a, l);
          b.on("$destroy", function () {
            e(a) === l && f(a, null);
          });
        };
      }
    };
  }],
      gf = ["$parse", "$animate", "$compile", function (a, b, d) {
    var c = F("ngRepeat"),
        e = function e(a, b, c, d, _e2, f, g) {
      a[c] = d;
      _e2 && (a[_e2] = f);
      a.$index = b;
      a.$first = 0 === b;
      a.$last = b === g - 1;
      a.$middle = !(a.$first || a.$last);
      a.$odd = !(a.$even = 0 === (b & 1));
    },
        f = function f(a, b, c) {
      return La(c);
    },
        g = function g(a, b) {
      return b;
    };

    return {
      restrict: "A",
      multiElement: !0,
      transclude: "element",
      priority: 1E3,
      terminal: !0,
      $$tlb: !0,
      compile: function compile(k, h) {
        var l = h.ngRepeat,
            m = d.$$createComment("end ngRepeat", l),
            p = l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
        if (!p) throw c("iexp", l);
        var n = p[1],
            q = p[2],
            w = p[3],
            t = p[4],
            p = n.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);
        if (!p) throw c("iidexp", n);
        var x = p[3] || p[1],
            v = p[2];
        if (w && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(w) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(w))) throw c("badident", w);
        var z;

        if (t) {
          var A = {
            $id: La
          },
              y = a(t);

          z = function z(a, b, c, d) {
            v && (A[v] = b);
            A[x] = c;
            A.$index = d;
            return y(a, A);
          };
        }

        return function (a, d, h, k, n) {
          var p = T();
          a.$watchCollection(q, function (h) {
            var k,
                q,
                t = d[0],
                s,
                y = T(),
                B,
                C,
                E,
                D,
                H,
                F,
                K;
            w && (a[w] = h);
            if (ya(h)) H = h, q = z || f;else for (K in q = z || g, H = [], h) {
              ta.call(h, K) && "$" !== K.charAt(0) && H.push(K);
            }
            B = H.length;
            K = Array(B);

            for (k = 0; k < B; k++) {
              if (C = h === H ? k : H[k], E = h[C], D = q(a, C, E, k), p[D]) F = p[D], delete p[D], y[D] = F, K[k] = F;else {
                if (y[D]) throw r(K, function (a) {
                  a && a.scope && (p[a.id] = a);
                }), c("dupes", l, D, E);
                K[k] = {
                  id: D,
                  scope: void 0,
                  clone: void 0
                };
                y[D] = !0;
              }
            }

            A && (A[x] = void 0);

            for (s in p) {
              F = p[s];
              D = tb(F.clone);
              b.leave(D);
              if (D[0].parentNode) for (k = 0, q = D.length; k < q; k++) {
                D[k].$$NG_REMOVED = !0;
              }
              F.scope.$destroy();
            }

            for (k = 0; k < B; k++) {
              if (C = h === H ? k : H[k], E = h[C], F = K[k], F.scope) {
                s = t;

                do {
                  s = s.nextSibling;
                } while (s && s.$$NG_REMOVED);

                F.clone[0] !== s && b.move(tb(F.clone), null, t);
                t = F.clone[F.clone.length - 1];
                e(F.scope, k, x, E, v, C, B);
              } else n(function (a, c) {
                F.scope = c;
                var d = m.cloneNode(!1);
                a[a.length++] = d;
                b.enter(a, null, t);
                t = d;
                F.clone = a;
                y[F.id] = F;
                e(F.scope, k, x, E, v, C, B);
              });
            }

            p = y;
          });
        };
      }
    };
  }],
      hf = ["$animate", function (a) {
    return {
      restrict: "A",
      multiElement: !0,
      link: function link(b, d, c) {
        b.$watch(c.ngShow, function (b) {
          a[b ? "removeClass" : "addClass"](d, "ng-hide", {
            tempClasses: "ng-hide-animate"
          });
        });
      }
    };
  }],
      $e = ["$animate", function (a) {
    return {
      restrict: "A",
      multiElement: !0,
      link: function link(b, d, c) {
        b.$watch(c.ngHide, function (b) {
          a[b ? "addClass" : "removeClass"](d, "ng-hide", {
            tempClasses: "ng-hide-animate"
          });
        });
      }
    };
  }],
      jf = Ra(function (a, b, d) {
    a.$watchCollection(d.ngStyle, function (a, d) {
      d && a !== d && (a || (a = {}), r(d, function (b, d) {
        null == a[d] && (a[d] = "");
      }));
      a && b.css(a);
    });
  }),
      kf = ["$animate", "$compile", function (a, b) {
    return {
      require: "ngSwitch",
      controller: ["$scope", function () {
        this.cases = {};
      }],
      link: function link(d, c, e, f) {
        var g = [],
            k = [],
            h = [],
            l = [],
            m = function m(a, b) {
          return function (c) {
            !1 !== c && a.splice(b, 1);
          };
        };

        d.$watch(e.ngSwitch || e.on, function (c) {
          for (var d, e; h.length;) {
            a.cancel(h.pop());
          }

          d = 0;

          for (e = l.length; d < e; ++d) {
            var q = tb(k[d].clone);
            l[d].$destroy();
            (h[d] = a.leave(q)).done(m(h, d));
          }

          k.length = 0;
          l.length = 0;
          (g = f.cases["!" + c] || f.cases["?"]) && r(g, function (c) {
            c.transclude(function (d, e) {
              l.push(e);
              var f = c.element;
              d[d.length++] = b.$$createComment("end ngSwitchWhen");
              k.push({
                clone: d
              });
              a.enter(d, f.parent(), f);
            });
          });
        });
      }
    };
  }],
      lf = Ra({
    transclude: "element",
    priority: 1200,
    require: "^ngSwitch",
    multiElement: !0,
    link: function link(a, b, d, c, e) {
      a = d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function (a, b, c) {
        return c[b - 1] !== a;
      });
      r(a, function (a) {
        c.cases["!" + a] = c.cases["!" + a] || [];
        c.cases["!" + a].push({
          transclude: e,
          element: b
        });
      });
    }
  }),
      mf = Ra({
    transclude: "element",
    priority: 1200,
    require: "^ngSwitch",
    multiElement: !0,
    link: function link(a, b, d, c, e) {
      c.cases["?"] = c.cases["?"] || [];
      c.cases["?"].push({
        transclude: e,
        element: b
      });
    }
  }),
      zh = F("ngTransclude"),
      of = ["$compile", function (a) {
    return {
      restrict: "EAC",
      compile: function compile(b) {
        var d = a(b.contents());
        b.empty();
        return function (a, b, f, g, k) {
          function h() {
            d(a, function (a) {
              b.append(a);
            });
          }

          if (!k) throw zh("orphan", za(b));
          f.ngTransclude === f.$attr.ngTransclude && (f.ngTransclude = "");
          f = f.ngTransclude || f.ngTranscludeSlot;
          k(function (a, c) {
            var d;
            if (d = a.length) a: {
              d = 0;

              for (var f = a.length; d < f; d++) {
                var g = a[d];

                if (g.nodeType !== Pa || g.nodeValue.trim()) {
                  d = !0;
                  break a;
                }
              }

              d = void 0;
            }
            d ? b.append(a) : (h(), c.$destroy());
          }, null, f);
          f && !k.isSlotFilled(f) && h();
        };
      }
    };
  }],
      Oe = ["$templateCache", function (a) {
    return {
      restrict: "E",
      terminal: !0,
      compile: function compile(b, d) {
        "text/ng-template" === d.type && a.put(d.id, b[0].text);
      }
    };
  }],
      Ah = {
    $setViewValue: E,
    $render: E
  },
      Bh = ["$element", "$scope", function (a, b) {
    function d() {
      g || (g = !0, b.$$postDigest(function () {
        g = !1;
        e.ngModelCtrl.$render();
      }));
    }

    function c(a) {
      k || (k = !0, b.$$postDigest(function () {
        b.$$destroyed || (k = !1, e.ngModelCtrl.$setViewValue(e.readValue()), a && e.ngModelCtrl.$render());
      }));
    }

    var e = this,
        f = new Hb();
    e.selectValueMap = {};
    e.ngModelCtrl = Ah;
    e.multiple = !1;
    e.unknownOption = x(C.document.createElement("option"));
    e.hasEmptyOption = !1;
    e.emptyOption = void 0;

    e.renderUnknownOption = function (b) {
      b = e.generateUnknownOptionValue(b);
      e.unknownOption.val(b);
      a.prepend(e.unknownOption);
      Oa(e.unknownOption, !0);
      a.val(b);
    };

    e.updateUnknownOption = function (b) {
      b = e.generateUnknownOptionValue(b);
      e.unknownOption.val(b);
      Oa(e.unknownOption, !0);
      a.val(b);
    };

    e.generateUnknownOptionValue = function (a) {
      return "? " + La(a) + " ?";
    };

    e.removeUnknownOption = function () {
      e.unknownOption.parent() && e.unknownOption.remove();
    };

    e.selectEmptyOption = function () {
      e.emptyOption && (a.val(""), Oa(e.emptyOption, !0));
    };

    e.unselectEmptyOption = function () {
      e.hasEmptyOption && Oa(e.emptyOption, !1);
    };

    b.$on("$destroy", function () {
      e.renderUnknownOption = E;
    });

    e.readValue = function () {
      var b = a.val(),
          b = b in e.selectValueMap ? e.selectValueMap[b] : b;
      return e.hasOption(b) ? b : null;
    };

    e.writeValue = function (b) {
      var c = a[0].options[a[0].selectedIndex];
      c && Oa(x(c), !1);
      e.hasOption(b) ? (e.removeUnknownOption(), c = La(b), a.val(c in e.selectValueMap ? c : b), Oa(x(a[0].options[a[0].selectedIndex]), !0)) : e.selectUnknownOrEmptyOption(b);
    };

    e.addOption = function (a, b) {
      if (8 !== b[0].nodeType) {
        Ja(a, '"option value"');
        "" === a && (e.hasEmptyOption = !0, e.emptyOption = b);
        var c = f.get(a) || 0;
        f.set(a, c + 1);
        d();
      }
    };

    e.removeOption = function (a) {
      var b = f.get(a);
      b && (1 === b ? (f["delete"](a), "" === a && (e.hasEmptyOption = !1, e.emptyOption = void 0)) : f.set(a, b - 1));
    };

    e.hasOption = function (a) {
      return !!f.get(a);
    };

    e.$hasEmptyOption = function () {
      return e.hasEmptyOption;
    };

    e.$isUnknownOptionSelected = function () {
      return a[0].options[0] === e.unknownOption[0];
    };

    e.$isEmptyOptionSelected = function () {
      return e.hasEmptyOption && a[0].options[a[0].selectedIndex] === e.emptyOption[0];
    };

    e.selectUnknownOrEmptyOption = function (a) {
      null == a && e.emptyOption ? (e.removeUnknownOption(), e.selectEmptyOption()) : e.unknownOption.parent().length ? e.updateUnknownOption(a) : e.renderUnknownOption(a);
    };

    var g = !1,
        k = !1;

    e.registerOption = function (a, b, f, g, k) {
      if (f.$attr.ngValue) {
        var q, r;
        f.$observe("value", function (a) {
          var d,
              f = b.prop("selected");
          w(r) && (e.removeOption(q), delete e.selectValueMap[r], d = !0);
          r = La(a);
          q = a;
          e.selectValueMap[r] = a;
          e.addOption(a, b);
          b.attr("value", r);
          d && f && c();
        });
      } else g ? f.$observe("value", function (a) {
        e.readValue();
        var d,
            f = b.prop("selected");
        w(q) && (e.removeOption(q), d = !0);
        q = a;
        e.addOption(a, b);
        d && f && c();
      }) : k ? a.$watch(k, function (a, d) {
        f.$set("value", a);
        var g = b.prop("selected");
        d !== a && e.removeOption(d);
        e.addOption(a, b);
        d && g && c();
      }) : e.addOption(f.value, b);

      f.$observe("disabled", function (a) {
        if ("true" === a || a && b.prop("selected")) e.multiple ? c(!0) : (e.ngModelCtrl.$setViewValue(null), e.ngModelCtrl.$render());
      });
      b.on("$destroy", function () {
        var a = e.readValue(),
            b = f.value;
        e.removeOption(b);
        d();
        (e.multiple && a && -1 !== a.indexOf(b) || a === b) && c(!0);
      });
    };
  }],
      Pe = function Pe() {
    return {
      restrict: "E",
      require: ["select", "?ngModel"],
      controller: Bh,
      priority: 1,
      link: {
        pre: function pre(a, b, d, c) {
          var e = c[0],
              f = c[1];

          if (f) {
            if (e.ngModelCtrl = f, b.on("change", function () {
              e.removeUnknownOption();
              a.$apply(function () {
                f.$setViewValue(e.readValue());
              });
            }), d.multiple) {
              e.multiple = !0;

              e.readValue = function () {
                var a = [];
                r(b.find("option"), function (b) {
                  b.selected && !b.disabled && (b = b.value, a.push(b in e.selectValueMap ? e.selectValueMap[b] : b));
                });
                return a;
              };

              e.writeValue = function (a) {
                r(b.find("option"), function (b) {
                  var c = !!a && (-1 !== Array.prototype.indexOf.call(a, b.value) || -1 !== Array.prototype.indexOf.call(a, e.selectValueMap[b.value]));
                  c !== b.selected && Oa(x(b), c);
                });
              };

              var g,
                  k = NaN;
              a.$watch(function () {
                k !== f.$viewValue || va(g, f.$viewValue) || (g = ja(f.$viewValue), f.$render());
                k = f.$viewValue;
              });

              f.$isEmpty = function (a) {
                return !a || 0 === a.length;
              };
            }
          } else e.registerOption = E;
        },
        post: function post(a, b, d, c) {
          var e = c[1];

          if (e) {
            var f = c[0];

            e.$render = function () {
              f.writeValue(e.$viewValue);
            };
          }
        }
      }
    };
  },
      Qe = ["$interpolate", function (a) {
    return {
      restrict: "E",
      priority: 100,
      compile: function compile(b, d) {
        var c, e;
        w(d.ngValue) || (w(d.value) ? c = a(d.value, !0) : (e = a(b.text(), !0)) || d.$set("value", b.text()));
        return function (a, b, d) {
          var h = b.parent();
          (h = h.data("$selectController") || h.parent().data("$selectController")) && h.registerOption(a, b, d, c, e);
        };
      }
    };
  }],
      $c = ["$parse", function (a) {
    return {
      restrict: "A",
      require: "?ngModel",
      link: function link(b, d, c, e) {
        if (e) {
          var f = c.hasOwnProperty("required") || a(c.ngRequired)(b);
          c.ngRequired || (c.required = !0);

          e.$validators.required = function (a, b) {
            return !f || !e.$isEmpty(b);
          };

          c.$observe("required", function (a) {
            f !== a && (f = a, e.$validate());
          });
        }
      }
    };
  }],
      Zc = ["$parse", function (a) {
    return {
      restrict: "A",
      require: "?ngModel",
      compile: function compile(b, d) {
        var c, e;
        d.ngPattern && (c = d.ngPattern, e = "/" === d.ngPattern.charAt(0) && ie.test(d.ngPattern) ? function () {
          return d.ngPattern;
        } : a(d.ngPattern));
        return function (a, b, d, h) {
          if (h) {
            var l = d.pattern;
            d.ngPattern ? l = e(a) : c = d.pattern;
            var m = he(l, c, b);
            d.$observe("pattern", function (a) {
              var d = m;
              m = he(a, c, b);
              (d && d.toString()) !== (m && m.toString()) && h.$validate();
            });

            h.$validators.pattern = function (a, b) {
              return h.$isEmpty(b) || z(m) || m.test(b);
            };
          }
        };
      }
    };
  }],
      bd = ["$parse", function (a) {
    return {
      restrict: "A",
      require: "?ngModel",
      link: function link(b, d, c, e) {
        if (e) {
          var f = c.maxlength || a(c.ngMaxlength)(b),
              g = Tb(f);
          c.$observe("maxlength", function (a) {
            f !== a && (g = Tb(a), f = a, e.$validate());
          });

          e.$validators.maxlength = function (a, b) {
            return 0 > g || e.$isEmpty(b) || b.length <= g;
          };
        }
      }
    };
  }],
      ad = ["$parse", function (a) {
    return {
      restrict: "A",
      require: "?ngModel",
      link: function link(b, d, c, e) {
        if (e) {
          var f = c.minlength || a(c.ngMinlength)(b),
              g = Tb(f) || -1;
          c.$observe("minlength", function (a) {
            f !== a && (g = Tb(a) || -1, f = a, e.$validate());
          });

          e.$validators.minlength = function (a, b) {
            return e.$isEmpty(b) || b.length >= g;
          };
        }
      }
    };
  }];

  C.angular.bootstrap ? C.console && console.log("WARNING: Tried to load AngularJS more than once.") : (Fe(), Je(ca), ca.module("ngLocale", [], ["$provide", function (a) {
    function b(a) {
      a += "";
      var b = a.indexOf(".");
      return -1 == b ? 0 : a.length - b - 1;
    }

    a.value("$locale", {
      DATETIME_FORMATS: {
        AMPMS: ["AM", "PM"],
        DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        ERANAMES: ["Before Christ", "Anno Domini"],
        ERAS: ["BC", "AD"],
        FIRSTDAYOFWEEK: 6,
        MONTH: "January February March April May June July August September October November December".split(" "),
        SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
        WEEKENDRANGE: [5, 6],
        fullDate: "EEEE, MMMM d, y",
        longDate: "MMMM d, y",
        medium: "MMM d, y h:mm:ss a",
        mediumDate: "MMM d, y",
        mediumTime: "h:mm:ss a",
        "short": "M/d/yy h:mm a",
        shortDate: "M/d/yy",
        shortTime: "h:mm a"
      },
      NUMBER_FORMATS: {
        CURRENCY_SYM: "$",
        DECIMAL_SEP: ".",
        GROUP_SEP: ",",
        PATTERNS: [{
          gSize: 3,
          lgSize: 3,
          maxFrac: 3,
          minFrac: 0,
          minInt: 1,
          negPre: "-",
          negSuf: "",
          posPre: "",
          posSuf: ""
        }, {
          gSize: 3,
          lgSize: 3,
          maxFrac: 2,
          minFrac: 2,
          minInt: 1,
          negPre: "-\xA4",
          negSuf: "",
          posPre: "\xA4",
          posSuf: ""
        }]
      },
      id: "en-us",
      localeID: "en_US",
      pluralCat: function pluralCat(a, c) {
        var e = a | 0,
            f = c;
        void 0 === f && (f = Math.min(b(a), 3));
        Math.pow(10, f);
        return 1 == e && 0 == f ? "one" : "other";
      }
    });
  }]), x(function () {
    Ae(C.document, Uc);
  }));
})(window);

!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./static/css/authentication.css":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./static/css/authentication.css ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #f8f8f8;\n  margin: auto;\n  height: 100vh;\n  /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */\n  font-family: assistant, Sans-serif;\n}\n\n/* .positioning{\n    display: table;\n    width: 100%;\n    align-items: center;\n    vertical-align: middle;\n    justify-content: center;\n} */\n.errorMessage {\n  font-size: 20px;\n  border-radius: 2px;\n  padding: 2px;\n  background-color: red;\n  opacity: 0.9;\n  size: 12px;\n}\n\n.errorDiv {\n  margin-left: 50px;\n  margin-top: 70px;\n}\n\n.formSignUp {\n  border-radius: 5%;\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  background-color: transparent;\n  /* background: linear-gradient(to right,rgb(0, 105, 143),rgb(12, 74, 207) ); */\n  display: flex;\n  /* box-shadow: 4px 4px 10px; */\n  flex-direction: column;\n  align-items: center;\n  min-width: 370px;\n  min-height: 500px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 2%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\nmd-toast.md-default-theme .md-toast-content, md-toast .md-toast-content {\n  font-size: 16px;\n  background-color: #ff2f2f;\n  color: #fafafa;\n  position: sticky;\n  overflow: visible;\n}\n\n.formLogin {\n  border-radius: 5%;\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  background-color: transparent;\n  /* background: linear-gradient(to right,rgb(0, 105, 143),rgb(12, 74, 207) ); */\n  display: flex;\n  /* box-shadow: 4px 4px 10px; */\n  flex-direction: column;\n  align-items: center;\n  min-width: 350px;\n  min-height: 400px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 2%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.nameANDpass {\n  background-color: #eee;\n  font-size: 20px;\n  border: none;\n  padding: 8px 10px;\n  margin: 5% 0;\n}\n\n.inputsContainer {\n  display: grid;\n}\n\n.center {\n  margin: auto;\n}\n\n.check {\n  align-items: baseline;\n  font-size: 20px;\n  align-self: center;\n  color: black;\n  display: inline-flex;\n}\n\n.margin0 {\n  margin: 0;\n}\n\n.margin5 {\n  margin: 0 0 5% 0;\n}\n\n.formHead {\n  font-size: 30px;\n  margin: 5% 0 0 0;\n}\n\n.signIn {\n  font-size: 20px;\n  opacity: 0.9;\n  font-weight: bold;\n  border-radius: 10%;\n  color: black;\n  /* margin: 0 5% 5% 5%; */\n  background-color: transparent;\n  border-color: white;\n  border-width: 1px;\n  padding: 6px 12px;\n}\n\n.signIn:hover {\n  color: black;\n  transition: background-color 0.3s linear, color 0.3s;\n  background-color: white;\n}\n\n.white {\n  color: white;\n  transition: background-color 0.1s linear, color 0.1s;\n}\n\n.black {\n  color: black;\n  transition: background-color 0.1s linear, color 0.1s;\n}\n\n.moveTo {\n  opacity: 0.7;\n  margin: 0 0 5% 0;\n  background-color: transparent;\n  border-color: white;\n  text-decoration: none;\n  font-size: 20px;\n  padding: 6px 12px;\n}\n\n.moveTo:hover {\n  opacity: 1;\n  text-decoration: underline;\n}", "",{"version":3,"sources":["webpack://./static/css/authentication.css"],"names":[],"mappings":"AAAA;EACI,yBAAA;EACA,YAAA;EACA,aAAA;EACA,4HAAA;EACA,kCAAA;AACJ;;AAGA;;;;;;GAAA;AAQA;EACI,eAAA;EACA,kBAAA;EACA,YAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AADJ;;AAIA;EACI,iBAAA;EACA,gBAAA;AADJ;;AAIA;EACI,iBAAA;EACA,mBAAA;EACA,mBAAA;EACA,iBAAA;EACA,6BAAA;EACA,8EAAA;EACA,aAAA;EACA,8BAAA;EACA,sBAAA;EACA,mBAAA;EAEA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,6BAAA;AAFJ;;AAKA;EACI,eAAA;EACA,yBAAA;EACA,cAAA;EACA,gBAAA;EACA,iBAAA;AAFJ;;AAKA;EACI,iBAAA;EACA,mBAAA;EACA,mBAAA;EACA,iBAAA;EACA,6BAAA;EACA,8EAAA;EACA,aAAA;EACA,8BAAA;EACA,sBAAA;EACA,mBAAA;EAEA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,6BAAA;AAHJ;;AAOA;EACI,sBAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;EACA,YAAA;AAJJ;;AAOA;EACA,aAAA;AAJA;;AAOA;EACI,YAAA;AAJJ;;AAOA;EACI,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,oBAAA;AAJJ;;AAMA;EACI,SAAA;AAHJ;;AAMA;EACI,gBAAA;AAHJ;;AAMA;EACI,eAAA;EACA,gBAAA;AAHJ;;AAMA;EACI,eAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,6BAAA;EACA,mBAAA;EACA,iBAAA;EACA,iBAAA;AAHJ;;AAKA;EACI,YAAA;EACA,oDAAA;EACA,uBAAA;AAFJ;;AAKA;EACI,YAAA;EACA,oDAAA;AAFJ;;AAMA;EACI,YAAA;EACA,oDAAA;AAHJ;;AAMA;EACI,YAAA;EACA,gBAAA;EACA,6BAAA;EACA,mBAAA;EACA,qBAAA;EACA,eAAA;EACA,iBAAA;AAHJ;;AAKA;EACI,UAAA;EACA,0BAAA;AAFJ","sourcesContent":["body{\r\n    background-color: #f8f8f8;\r\n    margin: auto;\r\n    height: 100vh;\r\n    /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */\r\n    font-family: assistant,Sans-serif;\r\n\r\n}\r\n\r\n/* .positioning{\r\n    display: table;\r\n    width: 100%;\r\n    align-items: center;\r\n    vertical-align: middle;\r\n    justify-content: center;\r\n} */\r\n\r\n.errorMessage{\r\n    font-size: 20px;\r\n    border-radius: 2px;\r\n    padding: 2px;\r\n    background-color: red;\r\n    opacity: 0.9;\r\n    size: 12px;\r\n}\r\n\r\n.errorDiv{\r\n    margin-left: 50px;\r\n    margin-top: 70px;\r\n}\r\n\r\n.formSignUp{\r\n    border-radius: 5%;\r\n    border-color: black;\r\n    border-style: solid;\r\n    border-width:1px;\r\n    background-color: transparent;\r\n    /* background: linear-gradient(to right,rgb(0, 105, 143),rgb(12, 74, 207) ); */\r\n    display: flex;\r\n    /* box-shadow: 4px 4px 10px; */\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    min-width: 370px;\r\n    min-height:500px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    margin: 2%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n}\r\n\r\nmd-toast.md-default-theme .md-toast-content, md-toast .md-toast-content {\r\n    font-size:16px;\r\n    background-color: #ff2f2f;\r\n    color: rgb(250,250,250);\r\n    position: sticky;\r\n    overflow: visible;\r\n\r\n}\r\n.formLogin{\r\n    border-radius: 5%;\r\n    border-color: black;\r\n    border-style: solid;\r\n    border-width:1px;\r\n    background-color: transparent;\r\n    /* background: linear-gradient(to right,rgb(0, 105, 143),rgb(12, 74, 207) ); */\r\n    display: flex;\r\n    /* box-shadow: 4px 4px 10px; */\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    min-width: 350px;\r\n    min-height:400px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    margin: 2%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n}\r\n\r\n\r\n.nameANDpass{\r\n    background-color: #eee;\r\n    font-size: 20px;\r\n    border: none;\r\n    padding: 8px 10px;\r\n    margin: 5% 0;\r\n}\r\n\r\n.inputsContainer{\r\ndisplay: grid;\r\n}\r\n\r\n.center{\r\n    margin: auto;\r\n}\r\n\r\n.check{\r\n    align-items: baseline;\r\n    font-size: 20px;\r\n    align-self: center;\r\n    color: black;\r\n    display: inline-flex;\r\n}\r\n.margin0{\r\n    margin: 0\r\n}\r\n\r\n.margin5{\r\n    margin: 0 0 5% 0\r\n}\r\n\r\n.formHead{\r\n    font-size: 30px;\r\n    margin: 5% 0 0 0\r\n\r\n}\r\n.signIn{\r\n    font-size: 20px;\r\n    opacity: 0.9;\r\n    font-weight: bold;\r\n    border-radius: 10%;\r\n    color: black;\r\n    /* margin: 0 5% 5% 5%; */\r\n    background-color: transparent;\r\n    border-color:white;\r\n    border-width: 1px;\r\n    padding: 6px 12px;\r\n}\r\n.signIn:hover{\r\n    color: black;\r\n    transition: background-color .3s linear,color .3s;\r\n    background-color: white;\r\n}\r\n\r\n.white{\r\n    color: white;\r\n    transition: background-color .1s linear,color .1s;\r\n\r\n\r\n}\r\n.black{\r\n    color: black;\r\n    transition: background-color .1s linear,color .1s;\r\n\r\n    }\r\n.moveTo{\r\n    opacity: 0.7;\r\n    margin: 0 0 5% 0;\r\n    background-color: transparent;\r\n    border-color:white;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    padding: 6px 12px;\r\n}\r\n.moveTo:hover{\r\n    opacity: 1;\r\n    text-decoration: underline;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./static/css/navBars.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./static/css/navBars.css ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".navBar a {\n  font-family: assistant, Sans-serif;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 33px;\n  border-width: 0px;\n  border-style: solid;\n  text-decoration: none;\n  padding: 16px 30px;\n  color: black;\n}\n\n.navBarBody {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  height: 76px;\n  background-color: #f8f8f8;\n}\n\n.flexNav {\n  width: 100%;\n  height: 76px;\n  display: flex;\n  align-items: center;\n  flex-direction: row-reverse;\n}\n\n.navBar {\n  border-radius: 38px 38px 38px 38px;\n  border-top-left-radius: 38px;\n  border-top-right-radius: 38px;\n  border-bottom-right-radius: 38px;\n  border-bottom-left-radius: 38px;\n  width: 95%;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.21);\n  height: 100%;\n  z-index: 1;\n  position: sticky;\n  list-style-type: none;\n  margin: 0;\n  background-color: white;\n  display: flex;\n}\n\n.toLogIn {\n  justify-self: flex-start;\n  margin-right: auto;\n  margin-left: 1%;\n}\n\n.navBar a::after {\n  transition-duration: 0.5s;\n  content: \"\";\n  background-color: transparent;\n  display: block;\n  width: 100%;\n  height: 2px;\n}\n\n.navBar a:hover::after {\n  content: \"\";\n  background-color: #1e294e;\n  display: block;\n  width: 100%;\n  height: 2px;\n}", "",{"version":3,"sources":["webpack://./static/css/navBars.css"],"names":[],"mappings":"AACA;EACI,kCAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,qBAAA;EACA,kBAAA;EACA,YAAA;AAAJ;;AAEA;EACI,iBAAA;EACA,oBAAA;EACA,YAAA;EACA,yBAAA;AACJ;;AAGA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;AAAJ;;AAIA;EACI,kCAAA;EACA,4BAAA;EACA,6BAAA;EACA,gCAAA;EACA,+BAAA;EACA,UAAA;EAGA,0CAAA;EACA,YAAA;EACA,UAAA;EACA,gBAAA;EACA,qBAAA;EACA,SAAA;EACA,uBAAA;EACA,aAAA;AAHJ;;AAMA;EACI,wBAAA;EACA,kBAAA;EACA,eAAA;AAHJ;;AAMA;EACI,yBAAA;EACA,WAAA;EACA,6BAAA;EACA,cAAA;EACA,WAAA;EACA,WAAA;AAHJ;;AAKA;EACI,WAAA;EACA,yBAAA;EACA,cAAA;EACA,WAAA;EACA,WAAA;AAFJ","sourcesContent":["\r\n.navBar a{\r\n    font-family: assistant,Sans-serif;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    line-height: 33px;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    text-decoration: none;\r\n    padding: 16px 30px;\r\n    color: black;\r\n}\r\n.navBarBody{\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    height: 76px;\r\n    background-color: #f8f8f8;\r\n\r\n\r\n}\r\n.flexNav{\r\n    width: 100%;\r\n    height: 76px;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: row-reverse;\r\n\r\n}\r\n\r\n.navBar{\r\n    border-radius: 38px 38px 38px 38px;\r\n    border-top-left-radius: 38px;\r\n    border-top-right-radius: 38px;\r\n    border-bottom-right-radius: 38px;\r\n    border-bottom-left-radius: 38px;\r\n    width: 95%;\r\n\r\n\r\n    box-shadow: 0 0 10px 0 rgb(0 0 0 / 21%);\r\n    height: 100%;\r\n    z-index: 1;\r\n    position: sticky;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    background-color: white;\r\n    display:flex;\r\n}\r\n\r\n.toLogIn{\r\n    justify-self: flex-start;\r\n    margin-right: auto;\r\n    margin-left: 1%;\r\n}\r\n\r\n.navBar a::after{\r\n    transition-duration:0.5s;\r\n    content: '';\r\n    background-color:transparent;\r\n    display: block;\r\n    width:100%;\r\n    height:2px;\r\n}\r\n.navBar a:hover::after{\r\n    content: '';\r\n    background-color:#1e294e;\r\n    display: block;\r\n    width: 100%;\r\n    height:2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./static/vendors/angular-material/angular-material.min.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./static/vendors/angular-material/angular-material.min.css ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC */ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMjA4IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyIAkJIiBzdHlsZT0iZmlsbDp3aGl0ZTsiLz4gPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+IDwvZz4gPC9nPiA8ZyBpZD0iR3JpZCIgZGlzcGxheT0ibm9uZSI+IDxnIGRpc3BsYXk9ImlubGluZSI+IDwvZz4gPC9nPiA8L3N2Zz4NCg== */ "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMjA4IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyIAkJIiBzdHlsZT0iZmlsbDp3aGl0ZTsiLz4gPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+IDwvZz4gPC9nPiA8ZyBpZD0iR3JpZCIgZGlzcGxheT0ibm9uZSI+IDxnIGRpc3BsYXk9ImlubGluZSI+IDwvZz4gPC9nPiA8L3N2Zz4NCg=="), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMzM2IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTAsNiA4LjYsNy40IDEzLjIsMTIgOC42LDE2LjYgMTAsMTggMTYsMTIgCQkiIHN0eWxlPSJmaWxsOndoaXRlOyIvPiA8cmVjdCBmaWxsPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz4gPC9nPiA8L2c+IDxnIGlkPSJHcmlkIiBkaXNwbGF5PSJub25lIj4gPGcgZGlzcGxheT0iaW5saW5lIj4gPC9nPiA8L2c+IDwvc3ZnPg0K */ "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMzM2IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTAsNiA4LjYsNy40IDEzLjIsMTIgOC42LDE2LjYgMTAsMTggMTYsMTIgCQkiIHN0eWxlPSJmaWxsOndoaXRlOyIvPiA8cmVjdCBmaWxsPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz4gPC9nPiA8L2c+IDxnIGlkPSJHcmlkIiBkaXNwbGF5PSJub25lIj4gPGcgZGlzcGxheT0iaW5saW5lIj4gPC9nPiA8L2c+IDwvc3ZnPg0K"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./static/css/authentication.css":
/*!***************************************!*\
  !*** ./static/css/authentication.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_authentication_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./authentication.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./static/css/authentication.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_authentication_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_authentication_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_authentication_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_authentication_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./static/css/navBars.css":
/*!********************************!*\
  !*** ./static/css/navBars.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navBars_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./navBars.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./static/css/navBars.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navBars_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navBars_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navBars_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navBars_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./static/vendors/angular-material/angular-material.min.css":
/*!******************************************************************!*\
  !*** ./static/vendors/angular-material/angular-material.min.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_angular_material_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./angular-material.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./static/vendors/angular-material/angular-material.min.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_angular_material_min_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_angular_material_min_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_angular_material_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_angular_material_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC":
/*!******************************************************************************************************************************************************************************!*\
  !*** data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC ***!
  \******************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC";

/***/ }),

/***/ "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMjA4IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyIAkJIiBzdHlsZT0iZmlsbDp3aGl0ZTsiLz4gPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+IDwvZz4gPC9nPiA8ZyBpZD0iR3JpZCIgZGlzcGxheT0ibm9uZSI+IDxnIGRpc3BsYXk9ImlubGluZSI+IDwvZz4gPC9nPiA8L3N2Zz4NCg==":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMjA4IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyIAkJIiBzdHlsZT0iZmlsbDp3aGl0ZTsiLz4gPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+IDwvZz4gPC9nPiA8ZyBpZD0iR3JpZCIgZGlzcGxheT0ibm9uZSI+IDxnIGRpc3BsYXk9ImlubGluZSI+IDwvZz4gPC9nPiA8L3N2Zz4NCg== ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMjA4IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyIAkJIiBzdHlsZT0iZmlsbDp3aGl0ZTsiLz4gPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+IDwvZz4gPC9nPiA8ZyBpZD0iR3JpZCIgZGlzcGxheT0ibm9uZSI+IDxnIGRpc3BsYXk9ImlubGluZSI+IDwvZz4gPC9nPiA8L3N2Zz4NCg==";

/***/ }),

/***/ "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMzM2IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTAsNiA4LjYsNy40IDEzLjIsMTIgOC42LDE2LjYgMTAsMTggMTYsMTIgCQkiIHN0eWxlPSJmaWxsOndoaXRlOyIvPiA8cmVjdCBmaWxsPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz4gPC9nPiA8L2c+IDxnIGlkPSJHcmlkIiBkaXNwbGF5PSJub25lIj4gPGcgZGlzcGxheT0iaW5saW5lIj4gPC9nPiA8L2c+IDwvc3ZnPg0K":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMzM2IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTAsNiA4LjYsNy40IDEzLjIsMTIgOC42LDE2LjYgMTAsMTggMTYsMTIgCQkiIHN0eWxlPSJmaWxsOndoaXRlOyIvPiA8cmVjdCBmaWxsPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz4gPC9nPiA8L2c+IDxnIGlkPSJHcmlkIiBkaXNwbGF5PSJub25lIj4gPGcgZGlzcGxheT0iaW5saW5lIj4gPC9nPiA8L2c+IDwvc3ZnPg0K ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMzM2IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTAsNiA4LjYsNy40IDEzLjIsMTIgOC42LDE2LjYgMTAsMTggMTYsMTIgCQkiIHN0eWxlPSJmaWxsOndoaXRlOyIvPiA8cmVjdCBmaWxsPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz4gPC9nPiA8L2c+IDxnIGlkPSJHcmlkIiBkaXNwbGF5PSJub25lIj4gPGcgZGlzcGxheT0iaW5saW5lIj4gPC9nPiA8L2c+IDwvc3ZnPg0K";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"authentication": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************************!*\
  !*** ./static/apps/Authentication/Authentication.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_css_authentication_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../static/css/authentication.css */ "./static/css/authentication.css");
/* harmony import */ var _vendors_angular_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vendors/angular.min.js */ "./static/vendors/angular.min.js");
/* harmony import */ var _vendors_angular_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendors_angular_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendors_angular_material_angular_material_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vendors/angular-material/angular-material.min.js */ "./static/vendors/angular-material/angular-material.min.js");
/* harmony import */ var _vendors_angular_material_angular_material_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendors_angular_material_angular_material_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendors_angular_aria_angular_aria_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vendors/angular-aria/angular-aria.min.js */ "./static/vendors/angular-aria/angular-aria.min.js");
/* harmony import */ var _vendors_angular_aria_angular_aria_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendors_angular_aria_angular_aria_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vendors_angular_animate_angular_animate_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vendors/angular-animate/angular-animate.min.js */ "./static/vendors/angular-animate/angular-animate.min.js");
/* harmony import */ var _vendors_angular_animate_angular_animate_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendors_angular_animate_angular_animate_min_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vendors_angular_messages_angular_messages_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../vendors/angular-messages/angular-messages.min.js */ "./static/vendors/angular-messages/angular-messages.min.js");
/* harmony import */ var _vendors_angular_messages_angular_messages_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendors_angular_messages_angular_messages_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vendors_angular_material_angular_material_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../vendors/angular-material/angular-material.min.css */ "./static/vendors/angular-material/angular-material.min.css");
/* harmony import */ var _AuthenticationModule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AuthenticationModule */ "./static/apps/Authentication/AuthenticationModule.js");
/* harmony import */ var _navbar_navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../navbar/navbar */ "./static/apps/navbar/navbar.js");









var authentication = angular.module('authentication', ['ngMaterial', 'ngMessages', 'navbar', 'AuthenticationModule']);
authentication.controller('authenticationController', ['$scope', 'AuthenticationHttpMethods', '$mdToast', function ($scope, AuthenticationHttpMethods, $mdToast) {
  $scope.passwordType = "password";
  $scope.checkBoxColor = "black";

  $scope.showPassword = function () {
    $scope.passwordType = $scope.passwordType === "password" ? "text" : "password";
    $scope.checkBoxColor = $scope.checkBoxColor === "black" ? "white" : "black";
  };

  $scope.IsSigned = function (name, password) {
    if (!(name && password)) {
      $mdToast.show($mdToast.simple().textContent('נא למלא את כל התאים').hideDelay(2000).position('top left'));
    } else {
      AuthenticationHttpMethods.isSigned(name, password).then(function (res) {
        if (res.data) window.location.href = "/home";else {
          $mdToast.show($mdToast.simple().textContent('שם או סיסמא שגויים').hideDelay(2000).position('top left'));
        }
      });
    }
  };

  $scope.openToast = function () {
    $mdToast.show($mdToast.simple().textContent('חיים להיות רשום').hideDelay(2000).position('top left'));
  };

  $scope.checkIfNamEmailNew = function (name, password, email) {
    if (!(name && email && password)) {
      $mdToast.show($mdToast.simple().textContent('נא למלא את כל התאים').hideDelay(2000).position('top left'));
    } else {
      AuthenticationHttpMethods.checkIfNamEmailNew(name, password, email).then(function (res) {
        if (res.data) window.location.href = "/login";

        if (!res.data) {
          $mdToast.show($mdToast.simple().textContent('שם או מייל כבר קיימים במערכת').hideDelay(2000).position('top left'));
        }
      });
    }
  };
}]);
})();

/******/ })()
;
//# sourceMappingURL=authentication.js.map