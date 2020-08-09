function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tipoinspecao-tipoinspecao-inserir-tipoinspecao-inserir-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir.page.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir.page.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTipoinspecaoTipoinspecaoInserirTipoinspecaoInserirPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Tipo Inspeção\r\n        </ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <div padding-horizontal text-center>\r\n      <div class=\"logo\"></div>\r\n      <h3 no-margin>\r\n        <ion-text color=\"light\" class=\"fw700\">\r\n          <ion-text color=\"light\"> &nbsp;Inserindo</ion-text>\r\n        </ion-text>\r\n      </h3>\r\n    </div>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n    <form class=\"list-form auth-conten\" >\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Nome\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"tipoinspecao.nome\" name=\"nome\"  type=\"text\"></ion-input>\r\n      </ion-item>\r\n    </form>\r\n    <div margin-top>\r\n      <ion-button size=\"medium\" expand=\"full\" shape=\"round\" icon-right tappable (click)=\"itensti()\">\r\n          Itens\r\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n      </ion-button>\r\n  </div>\r\n    <div margin-top>\r\n      <ion-button size=\"medium\" expand=\"full\" shape=\"round\" color=\"primary\" icon-right tappable (click)=\"salvar()\">\r\n        Salvar\r\n        <ion-icon name=\"checkmark-circle\" color=\"success\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir-routing.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir-routing.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: TipoinspecaoInserirPageRoutingModule */

  /***/
  function srcAppPagesTipoinspecaoTipoinspecaoInserirTipoinspecaoInserirRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TipoinspecaoInserirPageRoutingModule", function () {
      return TipoinspecaoInserirPageRoutingModule;
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


    var _tipoinspecao_inserir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tipoinspecao-inserir.page */
    "./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir.page.ts");

    var routes = [{
      path: '',
      component: _tipoinspecao_inserir_page__WEBPACK_IMPORTED_MODULE_3__["TipoinspecaoInserirPage"]
    }];

    var TipoinspecaoInserirPageRoutingModule = function TipoinspecaoInserirPageRoutingModule() {
      _classCallCheck(this, TipoinspecaoInserirPageRoutingModule);
    };

    TipoinspecaoInserirPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TipoinspecaoInserirPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: TipoinspecaoInserirPageModule */

  /***/
  function srcAppPagesTipoinspecaoTipoinspecaoInserirTipoinspecaoInserirModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TipoinspecaoInserirPageModule", function () {
      return TipoinspecaoInserirPageModule;
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


    var _tipoinspecao_inserir_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tipoinspecao-inserir-routing.module */
    "./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir-routing.module.ts");
    /* harmony import */


    var _tipoinspecao_inserir_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tipoinspecao-inserir.page */
    "./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir.page.ts");

    var TipoinspecaoInserirPageModule = function TipoinspecaoInserirPageModule() {
      _classCallCheck(this, TipoinspecaoInserirPageModule);
    };

    TipoinspecaoInserirPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tipoinspecao_inserir_routing_module__WEBPACK_IMPORTED_MODULE_5__["TipoinspecaoInserirPageRoutingModule"]],
      declarations: [_tipoinspecao_inserir_page__WEBPACK_IMPORTED_MODULE_6__["TipoinspecaoInserirPage"]]
    })], TipoinspecaoInserirPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir.page.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir.page.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTipoinspecaoTipoinspecaoInserirTipoinspecaoInserirPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\n.olho {\n  cursor: pointer;\n  left: 94%;\n}\n\n.div-time {\n  top: 30px;\n  position: relative;\n}\n\n.my-avatar {\n  left: 37%;\n  position: relative;\n}\n\n.zoon-eliminado {\n  zoom: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGlwb2luc3BlY2FvL3RpcG9pbnNwZWNhby1pbnNlcmlyL0M6XFxVc2Vyc1xccm9iZXJcXE9uZURyaXZlXFxpb25pY1xcc2lnb2JyYS11aS9zcmNcXGFwcFxccGFnZXNcXHRpcG9pbnNwZWNhb1xcdGlwb2luc3BlY2FvLWluc2VyaXJcXHRpcG9pbnNwZWNhby1pbnNlcmlyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGlwb2luc3BlY2FvL3RpcG9pbnNwZWNhby1pbnNlcmlyL3RpcG9pbnNwZWNhby1pbnNlcmlyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUNFLDRDQUFBO0FDQU47O0FER0k7RUFDRSxnQkFBQTtFQUNBLGlEQUFBO0FDRE47O0FES007RUFDRSxnQkFBQTtBQ0hSOztBRFFFO0VBQ0UsWUFBQTtBQ0xKOztBRFFFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7QUNMSjs7QURTRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFNFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0U7RUFDRSxTQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90aXBvaW5zcGVjYW8vdGlwb2luc3BlY2FvLWluc2VyaXIvdGlwb2luc3BlY2FvLWluc2VyaXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICA6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAmLm5vLXJhZGl1cyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYm90YW8tY29yIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLm9saG8ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbGVmdDogOTQlO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuZGl2LXRpbWUge1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLm15LWF2YXRhciB7XHJcbiAgICBsZWZ0OiAzNyU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuem9vbi1lbGltaW5hZG8ge1xyXG4gICAgem9vbTogMC42O1xyXG4gIH0iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNhcmQubm8tcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmJvdGFvLWNvciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm9saG8ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxlZnQ6IDk0JTtcbn1cblxuLmRpdi10aW1lIHtcbiAgdG9wOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5teS1hdmF0YXIge1xuICBsZWZ0OiAzNyU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnpvb24tZWxpbWluYWRvIHtcbiAgem9vbTogMC42O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir.page.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir.page.ts ***!
    \**************************************************************************************/

  /*! exports provided: TipoinspecaoInserirPage */

  /***/
  function srcAppPagesTipoinspecaoTipoinspecaoInserirTipoinspecaoInserirPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TipoinspecaoInserirPage", function () {
      return TipoinspecaoInserirPage;
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


    var _model_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../model/base */
    "./src/app/model/base.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _model_objetc_tipoinspecao__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../model/objetc/tipoinspecao */
    "./src/app/model/objetc/tipoinspecao.ts");
    /* harmony import */


    var _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../service/sigobra/tipoinspecao.service */
    "./src/app/service/sigobra/tipoinspecao.service.ts");

    var TipoinspecaoInserirPage = /*#__PURE__*/function () {
      function TipoinspecaoInserirPage(tis, base, router) {
        _classCallCheck(this, TipoinspecaoInserirPage);

        this.tis = tis;
        this.base = base;
        this.router = router;
        this.tipoinspecao = new _model_objetc_tipoinspecao__WEBPACK_IMPORTED_MODULE_4__["TipoInspecao"]();
      }

      _createClass(TipoinspecaoInserirPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.tis.tipoinspecao !== undefined && this.tis.tipoinspecao !== null) {
            this.tipoinspecao = this.tis.tipoinspecao;
          }
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.tipoinspecao = this.tis.tipoinspecao;
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

          if (this.tipoinspecao.ativo === undefined || this.tipoinspecao.ativo === null) {
            this.tipoinspecao.ativo = true;
          }

          this.tipoinspecao.empresa = this.tis.as.token.empresa;
          this.base.present();
          this.tis.salvar(this.tipoinspecao).subscribe(function (data) {
            _this.tis.tipoinspecao = new _model_objetc_tipoinspecao__WEBPACK_IMPORTED_MODULE_4__["TipoInspecao"]();

            _this.base.dismiss();

            _this.router.navigate(['tipoinspecoes']);
          }, function (error) {
            _this.base.dismiss();

            _this.base.mensagemErro('Falha ao salvar tipoinspecao :' + _this.base.tratarErro(error));
          });
        }
        /*itens tipo inspeção*/

        /*
         pesquisaAnamneseProduto(value: Anamnese) {
        
           return this.apos.byAnamnese(value).subscribe(
             data => {
        
               this.anamnese.anamneseproduto = data as Array<AnamneseProduto>;
             }, error => {
               this.anamnese.anamneseproduto = new Array<AnamneseProduto>();
        
               //this.base.mensagemErro('Falha  ao carregar ficha' + this.anamneseficha.id
               //+ this.base.tratarErro(error)); }
             }
           );
         }
        
        */

      }, {
        key: "itensti",
        value: function itensti() {
          var _this2 = this;

          if (this.tipoinspecao.ativo === undefined || this.tipoinspecao.ativo === null) {
            this.tipoinspecao.ativo = true;
          }

          this.tipoinspecao.empresa = this.tis.as.token.empresa;
          this.tis.salvar(this.tipoinspecao).subscribe(function (data) {
            _this2.tis.tipoinspecao = data;

            _this2.router.navigate(['itenstipoinspecao']);
          }, function (error) {
            _this2.base.mensagemErro('Falha ao salvar tipo inspenção  :' + _this2.base.tratarErro(error));
          });
        }
      }, {
        key: "editando",
        get: function get() {
          return Boolean(this.tipoinspecao.id);
        }
      }]);

      return TipoinspecaoInserirPage;
    }();

    TipoinspecaoInserirPage.ctorParameters = function () {
      return [{
        type: _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_5__["TipoinspecaoService"]
      }, {
        type: _model_base__WEBPACK_IMPORTED_MODULE_2__["Base"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    TipoinspecaoInserirPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tipoinspecao-inserir',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tipoinspecao-inserir.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tipoinspecao-inserir.page.scss */
      "./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_5__["TipoinspecaoService"], _model_base__WEBPACK_IMPORTED_MODULE_2__["Base"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], TipoinspecaoInserirPage);
    /***/
  },

  /***/
  "./src/app/service/sigobra/tipoinspecao.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/service/sigobra/tipoinspecao.service.ts ***!
    \*********************************************************/

  /*! exports provided: TipoinspecaoService */

  /***/
  function srcAppServiceSigobraTipoinspecaoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TipoinspecaoService", function () {
      return TipoinspecaoService;
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

    var TipoinspecaoService = /*#__PURE__*/function () {
      function TipoinspecaoService(http, as) {
        _classCallCheck(this, TipoinspecaoService);

        this.http = http;
        this.as = as;
        this.url = '/tipoinspecao';
      }

      _createClass(TipoinspecaoService, [{
        key: "salvar",
        value: function salvar(tipoinspecao) {
          return this.http.post(this.as.url + this.url, tipoinspecao, this.as.getOptions());
        }
      }, {
        key: "editar",
        value: function editar(tipoinspecao) {
          return this.http.put(this.as.url + this.url, tipoinspecao, this.as.getOptions());
        }
      }, {
        key: "delete",
        value: function _delete(tipoinspecao) {
          return this.http.post(this.as.url + this.url + '/deletar', tipoinspecao, this.as.getOptions());
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
        value: function edit(tipoinspecao) {
          return this.http.post(this.as.url + this.url + '/editar', tipoinspecao, this.as.getOptions());
        }
      }, {
        key: "editarativo",
        value: function editarativo(tipoinspecao) {
          return this.http.post(this.as.url + this.url + '/editarativo', tipoinspecao, this.as.getOptions());
        }
      }]);

      return TipoinspecaoService;
    }();

    TipoinspecaoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]
      }];
    };

    TipoinspecaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])], TipoinspecaoService);
    /***/
  }
}]);
//# sourceMappingURL=pages-tipoinspecao-tipoinspecao-inserir-tipoinspecao-inserir-module-es5.js.map