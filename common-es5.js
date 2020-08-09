function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticCcbda579Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeC2dc54d9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./src/app/model/enums/estado.enum.ts":
  /*!********************************************!*\
    !*** ./src/app/model/enums/estado.enum.ts ***!
    \********************************************/

  /*! exports provided: Estado */

  /***/
  function srcAppModelEnumsEstadoEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Estado", function () {
      return Estado;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Estado;

    (function (Estado) {
      Estado["AC"] = "Acre";
      Estado["AL"] = "Alagoas";
      Estado["AP"] = "Amap\xE1";
      Estado["AM"] = "Amazonas";
      Estado["BA"] = "Bahia";
      Estado["CE"] = "Cear\xE1";
      Estado["DF"] = "Distrito Federal";
      Estado["ES"] = "Esp\xEDrito Santo";
      Estado["GO"] = "Goi\xE1s";
      Estado["MA"] = "Maranh\xE3o";
      Estado["MT"] = "Mato Grosso";
      Estado["MS"] = "Mato Grosso do Sul";
      Estado["MG"] = "Minas Gerais";
      Estado["PA"] = "Par\xE1";
      Estado["PB"] = "Para\xEDba";
      Estado["PR"] = "Paran\xE1";
      Estado["PE"] = "Pernambuco";
      Estado["PI"] = "Piau\xED";
      Estado["RJ"] = "Rio de Janeiro";
      Estado["RN"] = "Rio Grande do Norte";
      Estado["RS"] = "Rio Grande do Sul";
      Estado["RO"] = "Rond\xF4nia";
      Estado["RR"] = "Roraima";
      Estado["SC"] = "Santa Catarina";
      Estado["SP"] = "S\xE3o Paulo";
      Estado["SE"] = "Sergipe";
      Estado["TO"] = "Tocantins";
    })(Estado || (Estado = {}));
    /***/

  },

  /***/
  "./src/app/model/enums/join-type.enum.ts":
  /*!***********************************************!*\
    !*** ./src/app/model/enums/join-type.enum.ts ***!
    \***********************************************/

  /*! exports provided: JoinType */

  /***/
  function srcAppModelEnumsJoinTypeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinType", function () {
      return JoinType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var JoinType;

    (function (JoinType) {
      JoinType[JoinType["INNER"] = 0] = "INNER";
      JoinType[JoinType["LEFT"] = 1] = "LEFT";
      JoinType[JoinType["RIGHT"] = 2] = "RIGHT";
    })(JoinType || (JoinType = {}));
    /***/

  },

  /***/
  "./src/app/model/objetc/empresa.ts":
  /*!*****************************************!*\
    !*** ./src/app/model/objetc/empresa.ts ***!
    \*****************************************/

  /*! exports provided: Empresa */

  /***/
  function srcAppModelObjetcEmpresaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Empresa", function () {
      return Empresa;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Empresa = function Empresa() {
      _classCallCheck(this, Empresa);
    };
    /***/

  },

  /***/
  "./src/app/model/objetc/filtro/filtro.ts":
  /*!***********************************************!*\
    !*** ./src/app/model/objetc/filtro/filtro.ts ***!
    \***********************************************/

  /*! exports provided: Filtro */

  /***/
  function srcAppModelObjetcFiltroFiltroTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Filtro", function () {
      return Filtro;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Filtro = function Filtro() {
      _classCallCheck(this, Filtro);

      this.nativo = false;
    };
    /***/

  },

  /***/
  "./src/app/model/objetc/filtro/pesquisa.ts":
  /*!*************************************************!*\
    !*** ./src/app/model/objetc/filtro/pesquisa.ts ***!
    \*************************************************/

  /*! exports provided: Pesquisa */

  /***/
  function srcAppModelObjetcFiltroPesquisaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pesquisa", function () {
      return Pesquisa;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Pesquisa = function Pesquisa() {
      _classCallCheck(this, Pesquisa);
    };
    /***/

  },

  /***/
  "./src/app/model/objetc/inspecao.ts":
  /*!******************************************!*\
    !*** ./src/app/model/objetc/inspecao.ts ***!
    \******************************************/

  /*! exports provided: Inspecao */

  /***/
  function srcAppModelObjetcInspecaoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Inspecao", function () {
      return Inspecao;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Inspecao = function Inspecao() {
      _classCallCheck(this, Inspecao);
    };
    /***/

  },

  /***/
  "./src/app/model/objetc/obras.ts":
  /*!***************************************!*\
    !*** ./src/app/model/objetc/obras.ts ***!
    \***************************************/

  /*! exports provided: Obras */

  /***/
  function srcAppModelObjetcObrasTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Obras", function () {
      return Obras;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Obras = function Obras() {
      _classCallCheck(this, Obras);
    };
    /***/

  },

  /***/
  "./src/app/model/objetc/statusiteminspecao.ts":
  /*!****************************************************!*\
    !*** ./src/app/model/objetc/statusiteminspecao.ts ***!
    \****************************************************/

  /*! exports provided: StatusItemInspecao */

  /***/
  function srcAppModelObjetcStatusiteminspecaoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusItemInspecao", function () {
      return StatusItemInspecao;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var StatusItemInspecao = function StatusItemInspecao() {
      _classCallCheck(this, StatusItemInspecao);

      this.cor = 'var(--ion-color-primary)';
    };
    /***/

  },

  /***/
  "./src/app/model/objetc/tipoinspecao.ts":
  /*!**********************************************!*\
    !*** ./src/app/model/objetc/tipoinspecao.ts ***!
    \**********************************************/

  /*! exports provided: TipoInspecao */

  /***/
  function srcAppModelObjetcTipoinspecaoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TipoInspecao", function () {
      return TipoInspecao;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TipoInspecao = function TipoInspecao() {
      _classCallCheck(this, TipoInspecao);
    };
    /***/

  },

  /***/
  "./src/app/service/sigobra/empresa.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/service/sigobra/empresa.service.ts ***!
    \****************************************************/

  /*! exports provided: EmpresaService */

  /***/
  function srcAppServiceSigobraEmpresaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresaService", function () {
      return EmpresaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../autentificacao/autentificacao.service */
    "./src/app/service/autentificacao/autentificacao.service.ts");

    var EmpresaService = /*#__PURE__*/function () {
      function EmpresaService(http, as) {
        _classCallCheck(this, EmpresaService);

        this.http = http;
        this.as = as;
        this.url = '/empresas';
      }

      _createClass(EmpresaService, [{
        key: "salvar",
        value: function salvar(empresa) {
          return this.http.post(this.as.url + this.url, empresa, this.as.getOptions());
        }
      }, {
        key: "editar",
        value: function editar(empresa) {
          return this.http.put(this.as.url + this.url, empresa, this.as.getOptions());
        }
      }, {
        key: "delete",
        value: function _delete(empresa) {
          return this.http.post(this.as.url + this.url + '/deletar', empresa, this.as.getOptions());
        }
      }, {
        key: "pesquisar",
        value: function pesquisar(value) {
          return this.http.post(this.as.url + this.url + '/pesquisar', value, this.as.getOptions());
        }
      }, {
        key: "get",
        value: function get(id) {
          return this.http.post(this.as.url + this.url, id, this.as.getOptions());
        }
      }, {
        key: "edit",
        value: function edit(empresa) {
          return this.http.post(this.as.url + this.url + '/editar', empresa, this.as.getOptions());
        }
      }, {
        key: "editarativo",
        value: function editarativo(empresa) {
          return this.http.post(this.as.url + this.url + '/editarativo', empresa, this.as.getOptions());
        }
      }, {
        key: "pesqemp",
        value: function pesqemp(id) {
          return this.http.post(this.as.url + this.url + '/pesqemp', id, this.as.getOptions());
        }
      }, {
        key: "pesquisa",
        value: function pesquisa(value) {
          return this.http.post(this.as.url + this.url + '/pesquisa', value, this.as.getOptions());
        }
      }, {
        key: "getImagem",
        value: function getImagem(id) {
          return this.http.get(this.as.url + this.url + '/imagemempresa/' + id.toString(), this.as.getOptions());
        }
      }]);

      return EmpresaService;
    }();

    EmpresaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]
      }];
    };

    EmpresaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])], EmpresaService);
    /***/
  },

  /***/
  "./src/app/service/sigobra/permissoes-acesso.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/service/sigobra/permissoes-acesso.service.ts ***!
    \**************************************************************/

  /*! exports provided: PermissoesAcessoService */

  /***/
  function srcAppServiceSigobraPermissoesAcessoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissoesAcessoService", function () {
      return PermissoesAcessoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../autentificacao/autentificacao.service */
    "./src/app/service/autentificacao/autentificacao.service.ts");

    var PermissoesAcessoService = /*#__PURE__*/function () {
      function PermissoesAcessoService(http, as) {
        _classCallCheck(this, PermissoesAcessoService);

        this.http = http;
        this.as = as;
        this.url = '/permissao';
      }

      _createClass(PermissoesAcessoService, [{
        key: "pesquisarPermissoes",
        value: function pesquisarPermissoes(value) {
          return this.http.post(this.as.url + this.url + '/pesquisarpermissoes', value, this.as.getOptions());
        }
        /*   COLOCAR METODOS REFERENTES A PERFIL USUARIO DESTE PONTO PARA BAIXO     */

      }, {
        key: "pesquisarPerfilUsuario",
        value: function pesquisarPerfilUsuario(value) {
          return this.http.post(this.as.url + this.url + '/pesquisarperfilusuario', value, this.as.getOptions());
        }
      }, {
        key: "pesquisarPerfilUsuario1",
        value: function pesquisarPerfilUsuario1(value) {
          return this.http.post(this.as.url + this.url + '/pesquisarperfilusuario1', value, this.as.getOptions());
        }
      }, {
        key: "salvarPerfilUsuario",
        value: function salvarPerfilUsuario(value) {
          return this.http.post(this.as.url + this.url + '/salvarperfilusuario', value, this.as.getOptions());
        }
      }, {
        key: "deletarPerfilUsuario",
        value: function deletarPerfilUsuario(value) {
          return this.http.post(this.as.url + this.url + '/excluirperfilusuario', value, this.as.getOptions());
        }
      }]);

      return PermissoesAcessoService;
    }();

    PermissoesAcessoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]
      }];
    };

    PermissoesAcessoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])], PermissoesAcessoService);
    /***/
  },

  /***/
  "./src/app/service/viacep/viacep.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/service/viacep/viacep.service.ts ***!
    \**************************************************/

  /*! exports provided: ViacepService */

  /***/
  function srcAppServiceViacepViacepServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViacepService", function () {
      return ViacepService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ViacepService = /*#__PURE__*/function () {
      function ViacepService(http) {
        _classCallCheck(this, ViacepService);

        this.http = http;
      }

      _createClass(ViacepService, [{
        key: "consultaCEP",
        value: function consultaCEP(cep) {
          console.log(cep); // Nova variável "cep" somente com dígitos.

          cep = cep.replace(/\D/g, ''); // Verifica se campo cep possui valor informado.

          if (cep !== '') {
            // Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/; // Valida o formato do CEP.

            if (validacep.test(cep)) {
              return this.http.get("https://viacep.com.br/ws/".concat(cep, "/json"));
            }
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
      }]);

      return ViacepService;
    }();

    ViacepService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ViacepService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ViacepService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map