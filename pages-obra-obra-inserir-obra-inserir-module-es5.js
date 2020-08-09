function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-obra-obra-inserir-obra-inserir-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/obra/obra-inserir/obra-inserir.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/obra/obra-inserir/obra-inserir.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesObraObraInserirObraInserirPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"#04ff0c\" color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Obras\r\n        </ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"#04ff0c\" color=\"primary\">\r\n    <div padding-horizontal text-center>\r\n      <div class=\"logo\"></div>\r\n      <h3 no-margin>\r\n        <ion-text color=\"light\" class=\"fw700\">\r\n          <ion-text color=\"light\"> &nbsp;Inserindo</ion-text>\r\n        </ion-text>\r\n      </h3>\r\n    </div>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n    <form class=\"list-form auth-conten\" >\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Nome\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.nome\" name=\"nome\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;CEP\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.cep\" name=\"cep\" type=\"text\" (ionBlur)= \"consultaCEP($event.target.value)\"\r\n                   [brmasker]=\"{mask:'00.000-000', len:10, userCaracters: true}\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Numero\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.numero\" name=\"numero\"  type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Complemento\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.complemento\" name=\"complemento\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Logradouro\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.logradouro\" name=\"logradouro\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Bairro\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.bairro\" name=\"bairro\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Cidade\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.cidade\" name=\"cidade\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;UF\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.uf\" name=\"uf\" type=\"text\"></ion-input>\r\n      </ion-item>    \r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Estado\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.estado\" name=\"estado\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n            &nbsp; Data do Início da obra\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.dtinicio\" name=\"dtinicio\" type=\"text\"\r\n                   placeholder=\"00/00/0000\" [brmasker]=\"{mask: '00/00/0000', type:'num', len:10}\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n           &nbsp; Fechamento da Obra\r\n        </ion-label>\r\n        <ion-toggle style=\"top: 8px;\" [(ngModel)]=\"obra.fechamentoobra\" color=\"tertiary\" \r\n                    name=\"fechamentoobra\" [checked]=\"obra.fechamentoobra\" check=\"false\">\r\n        </ion-toggle>\r\n        <ion-input [disabled]=\"!obra.fechamentoobra\" [(ngModel)]=\"obra.dtfinalizada\" name=\"dtfinalizada\" type=\"text\" \r\n                   placeholder=\"00/00/0000\" [brmasker]=\"{mask: '00/00/0000', type:'num', len:10}\">\r\n        </ion-input>\r\n      </ion-item>\r\n      \r\n    </form>\r\n    <div margin-top>\r\n      <ion-button size=\"medium\" expand=\"full\" shape=\"round\" color=\"primary\" \r\n      icon-right tappable (click)=\"salvar()\" *ngIf=\"close()\">\r\n        Salvar\r\n        <ion-icon name=\"checkmark-circle\" color=\"success\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/obra/obra-inserir/obra-inserir-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/obra/obra-inserir/obra-inserir-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: ObraInserirPageRoutingModule */

  /***/
  function srcAppPagesObraObraInserirObraInserirRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObraInserirPageRoutingModule", function () {
      return ObraInserirPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _obra_inserir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./obra-inserir.page */
    "./src/app/pages/obra/obra-inserir/obra-inserir.page.ts");

    var routes = [{
      path: '',
      component: _obra_inserir_page__WEBPACK_IMPORTED_MODULE_3__["ObraInserirPage"]
    }];

    var ObraInserirPageRoutingModule = function ObraInserirPageRoutingModule() {
      _classCallCheck(this, ObraInserirPageRoutingModule);
    };

    ObraInserirPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ObraInserirPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/obra/obra-inserir/obra-inserir.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/obra/obra-inserir/obra-inserir.module.ts ***!
    \****************************************************************/

  /*! exports provided: ObraInserirPageModule */

  /***/
  function srcAppPagesObraObraInserirObraInserirModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObraInserirPageModule", function () {
      return ObraInserirPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _obra_inserir_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./obra-inserir-routing.module */
    "./src/app/pages/obra/obra-inserir/obra-inserir-routing.module.ts");
    /* harmony import */


    var _obra_inserir_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./obra-inserir.page */
    "./src/app/pages/obra/obra-inserir/obra-inserir.page.ts");
    /* harmony import */


    var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! br-mask */
    "./node_modules/br-mask/dist/index.js");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");

    var ObraInserirPageModule = function ObraInserirPageModule() {
      _classCallCheck(this, ObraInserirPageModule);
    };

    ObraInserirPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"], _obra_inserir_routing_module__WEBPACK_IMPORTED_MODULE_5__["ObraInserirPageRoutingModule"]],
      declarations: [_obra_inserir_page__WEBPACK_IMPORTED_MODULE_6__["ObraInserirPage"]]
    })], ObraInserirPageModule);
    /***/
  },

  /***/
  "./src/app/pages/obra/obra-inserir/obra-inserir.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/obra/obra-inserir/obra-inserir.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesObraObraInserirObraInserirPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\n.olho {\n  cursor: pointer;\n  left: 94%;\n}\n\n.div-time {\n  top: 30px;\n  position: relative;\n}\n\n.my-avatar {\n  left: 37%;\n  position: relative;\n}\n\n.zoon-eliminado {\n  zoom: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb2JyYS9vYnJhLWluc2VyaXIvQzpcXFVzZXJzXFxyb2JlclxcT25lRHJpdmVcXGlvbmljXFxzaWdvYnJhLXVpL3NyY1xcYXBwXFxwYWdlc1xcb2JyYVxcb2JyYS1pbnNlcmlyXFxvYnJhLWluc2VyaXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vYnJhL29icmEtaW5zZXJpci9vYnJhLWluc2VyaXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdJO0VBQ0UsNENBQUE7QUNBTjs7QURHSTtFQUNFLGdCQUFBO0VBQ0EsaURBQUE7QUNETjs7QURLTTtFQUNFLGdCQUFBO0FDSFI7O0FEUUU7RUFDRSxZQUFBO0FDTEo7O0FEUUU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ0xKOztBRFNFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTRTtFQUNFLFNBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29icmEvb2JyYS1pbnNlcmlyL29icmEtaW5zZXJpci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICYubm8tcmFkaXVzIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3Rhby1jb3Ige1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAub2xobyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsZWZ0OiA5NCU7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5kaXYtdGltZSB7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAubXktYXZhdGFyIHtcclxuICAgIGxlZnQ6IDM3JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC56b29uLWVsaW1pbmFkbyB7XHJcbiAgICB6b29tOiAwLjY7XHJcbiAgfSIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZC5uby1yYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYm90YW8tY29yIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ub2xobyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGVmdDogOTQlO1xufVxuXG4uZGl2LXRpbWUge1xuICB0b3A6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm15LWF2YXRhciB7XG4gIGxlZnQ6IDM3JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uem9vbi1lbGltaW5hZG8ge1xuICB6b29tOiAwLjY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/obra/obra-inserir/obra-inserir.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/obra/obra-inserir/obra-inserir.page.ts ***!
    \**************************************************************/

  /*! exports provided: ObraInserirPage */

  /***/
  function srcAppPagesObraObraInserirObraInserirPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObraInserirPage", function () {
      return ObraInserirPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../service/autentificacao/autentificacao.service */
    "./src/app/service/autentificacao/autentificacao.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _model_objetc_obras__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../model/objetc/obras */
    "./src/app/model/objetc/obras.ts");
    /* harmony import */


    var _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../service/sigobra/obra.service */
    "./src/app/service/sigobra/obra.service.ts");
    /* harmony import */


    var _model_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../model/base */
    "./src/app/model/base.ts");
    /* harmony import */


    var _service_viacep_viacep_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../service/viacep/viacep.service */
    "./src/app/service/viacep/viacep.service.ts");
    /* harmony import */


    var _model_enums_estado_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../model/enums/estado.enum */
    "./src/app/model/enums/estado.enum.ts");

    var ObraInserirPage = /*#__PURE__*/function () {
      function ObraInserirPage(base, os, router, vcs, as) {
        _classCallCheck(this, ObraInserirPage);

        this.base = base;
        this.os = os;
        this.router = router;
        this.vcs = vcs;
        this.as = as;
        this.obra = new _model_objetc_obras__WEBPACK_IMPORTED_MODULE_4__["Obras"]();
      }

      _createClass(ObraInserirPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.os.obra !== undefined && this.os.obra !== null) {
            this.obra = this.os.obra;
          }

          this.fechamento();
        }
      }, {
        key: "salvar",
        value: function salvar() {
          this.salvando();
        }
      }, {
        key: "salvando",
        value: function salvando() {
          var _this = this;

          if (this.obra.ativo === undefined || this.obra.ativo === null) {
            this.obra.ativo = true;
            this.obra.fechamentoobra = false;
          }

          this.obra.empresa = this.as.token.empresa;
          this.base.present();
          this.os.salvar(this.obra).subscribe(function (data) {
            _this.os.obra = new _model_objetc_obras__WEBPACK_IMPORTED_MODULE_4__["Obras"]();

            _this.base.dismiss();

            _this.router.navigate(['obras']);
          }, function (error) {
            _this.base.dismiss();

            _this.base.mensagemErro('Falha ao salvar obra :' + _this.base.tratarErro(error));
          });
        }
      }, {
        key: "fechamento",
        value: function fechamento() {
          this.fecha = false;

          if (this.obra.fechamentoobra === true) {
            this.fecha = true;
          } else {
            this.fecha = false;
          }
        }
      }, {
        key: "close",
        value: function close() {
          try {
            return this.fecha === false;
          } catch (error) {
            return true;
          }
        }
      }, {
        key: "consultaCEP",
        value: function consultaCEP(cep) {
          var _this2 = this;

          if (cep !== null && cep !== undefined && cep !== '') {
            cep = cep.replace(/\D/g, '');

            if (cep.length > 7) {
              this.base.present();
              this.vcs.consultaCEP(cep).subscribe(function (data) {
                _this2.base.dismiss();

                _this2.popula(data);
              }, function (error) {
                _this2.base.dismiss();

                _this2.base.mensagemErro('Falha ao buscar CEP :' + _this2.base.tratarErro(error));
              });
            }
          }
        }
      }, {
        key: "popula",
        value: function popula(data) {
          if (data.erro !== undefined && data.erro !== null && data.erro) {
            this.base.mensagemErro('Falha ao consultar endereço do CEP');
            return;
          }

          this.obra.logradouro = data.logradouro;
          this.obra.complemento = data.complemento;
          this.obra.bairro = data.bairro;
          this.obra.cidade = data.localidade;
          this.obra.uf = data.uf;

          for (var uf in _model_enums_estado_enum__WEBPACK_IMPORTED_MODULE_8__["Estado"]) {
            if (data.uf === uf) {
              this.obra.estado = _model_enums_estado_enum__WEBPACK_IMPORTED_MODULE_8__["Estado"][uf];
              break;
            }
          }
        }
      }, {
        key: "editando",
        get: function get() {
          return Boolean(this.obra.id);
        }
      }]);

      return ObraInserirPage;
    }();

    ObraInserirPage.ctorParameters = function () {
      return [{
        type: _model_base__WEBPACK_IMPORTED_MODULE_6__["Base"]
      }, {
        type: _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_5__["ObraService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_viacep_viacep_service__WEBPACK_IMPORTED_MODULE_7__["ViacepService"]
      }, {
        type: _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_1__["AutentificacaoService"]
      }];
    };

    ObraInserirPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-obra-inserir',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./obra-inserir.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/obra/obra-inserir/obra-inserir.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./obra-inserir.page.scss */
      "./src/app/pages/obra/obra-inserir/obra-inserir.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_6__["Base"], _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_5__["ObraService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_viacep_viacep_service__WEBPACK_IMPORTED_MODULE_7__["ViacepService"], _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_1__["AutentificacaoService"]])], ObraInserirPage);
    /***/
  },

  /***/
  "./src/app/service/sigobra/obra.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/service/sigobra/obra.service.ts ***!
    \*************************************************/

  /*! exports provided: ObraService */

  /***/
  function srcAppServiceSigobraObraServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObraService", function () {
      return ObraService;
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

    var ObraService = /*#__PURE__*/function () {
      function ObraService(http, as) {
        _classCallCheck(this, ObraService);

        this.http = http;
        this.as = as;
        this.url = '/obras';
      }

      _createClass(ObraService, [{
        key: "salvar",
        value: function salvar(obras) {
          return this.http.post(this.as.url + this.url, obras, this.as.getOptions());
        }
      }, {
        key: "editar",
        value: function editar(obras) {
          return this.http.put(this.as.url + this.url, obras, this.as.getOptions());
        }
      }, {
        key: "delete",
        value: function _delete(obras) {
          return this.http.post(this.as.url + this.url + '/deletar', obras, this.as.getOptions());
        }
      }, {
        key: "pesquisar",
        value: function pesquisar(value) {
          return this.http.post(this.as.url + this.url + '/pesquisar', value, this.as.getOptions());
        }
      }, {
        key: "pesquisa",
        value: function pesquisa(value) {
          return this.http.post(this.as.url + this.url + '/pesquisa', value, this.as.getOptions());
        }
      }, {
        key: "get",
        value: function get(id) {
          return this.http.post(this.as.url + this.url, id, this.as.getOptions());
        }
      }, {
        key: "edit",
        value: function edit(obras) {
          return this.http.post(this.as.url + this.url + '/editar', obras, this.as.getOptions());
        }
      }, {
        key: "editarativo",
        value: function editarativo(obras) {
          return this.http.post(this.as.url + this.url + '/editarativo', obras, this.as.getOptions());
        }
      }, {
        key: "pesquisar1",
        value: function pesquisar1(value) {
          return this.http.post(this.as.url + this.url + '/pesquisar1', value, this.as.getOptions());
        }
      }, {
        key: "findTop10ComInspencoesAbertas",
        value: function findTop10ComInspencoesAbertas() {
          return this.http.get(this.as.url + this.url + '/ultimasobrasabertas', this.as.getOptions());
        }
      }, {
        key: "filtra",
        value: function filtra(filtro) {
          return this.http.post(this.as.url + this.url + '/filtrar', filtro, this.as.getOptions());
        } // relatorio por filtro

      }, {
        key: "getRelatorioFiltro",
        value: function getRelatorioFiltro(filtro) {
          return this.http.post(this.as.url + this.url + '/relatoriofiltro', filtro, this.as.getOptionsPDF());
        } // relatorio por obras

      }, {
        key: "getRelatorioObras",
        value: function getRelatorioObras(obras) {
          return this.http.post(this.as.url + this.url + '/relatorioobras', obras, this.as.getOptionsPDF());
        } // relatorio por obra

      }, {
        key: "getRelatorioObra",
        value: function getRelatorioObra(obra) {
          return this.http.post(this.as.url + this.url + '/relatorioobra', obra, this.as.getOptionsPDF());
        }
      }]);

      return ObraService;
    }();

    ObraService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]
      }];
    };

    ObraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])], ObraService);
    /***/
  }
}]);
//# sourceMappingURL=pages-obra-obra-inserir-obra-inserir-module-es5.js.map