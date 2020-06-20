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


    __webpack_exports__["default"] = "<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"#04ff0c\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Tipo Inspeção\r\n        </ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n    <div padding-horizontal text-center>\r\n      <div class=\"logo\"></div>\r\n      <h3 no-margin>\r\n        <ion-text color=\"light\" class=\"fw700\">\r\n          <ion-text color=\"light\">Inserindo</ion-text>\r\n        </ion-text>\r\n      </h3>\r\n    </div>\r\n    <form class=\"list-form auth-conten\" (keydown)=\"keyDownFunction($event)\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Nome\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"tipoinspecao.nome\" name=\"nome\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n    </form>\r\n    <div margin-top>\r\n      <ion-button size=\"medium\" expand=\"full\" shape=\"round\" color=\"secondary\" icon-right tappable\r\n          (click)=\"itensti()\">\r\n          Itens\r\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n      </ion-button>\r\n  </div>\r\n    <div margin-top>\r\n      <ion-button size=\"medium\" expand=\"full\" shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"salvar()\">\r\n        Salvar\r\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>";
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


    __webpack_exports__["default"] = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: linear-gradient(\n    135deg,\n    var(--ion-color-primary),\n    #ffffff\n  );\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\n.olho {\n  cursor: pointer;\n  left: 94%;\n}\n\n.div-time {\n  top: 30px;\n  position: relative;\n}\n\n.my-avatar {\n  left: 37%;\n  position: relative;\n}\n\n.zoon-eliminado {\n  zoom: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGlwb2luc3BlY2FvL3RpcG9pbnNwZWNhby1pbnNlcmlyL0M6XFxVc2Vyc1xccm9iZXJcXE9uZURyaXZlXFxpb25pY1xcc2lnb2JyYS11aS9zcmNcXGFwcFxccGFnZXNcXHRpcG9pbnNwZWNhb1xcdGlwb2luc3BlY2FvLWluc2VyaXJcXHRpcG9pbnNwZWNhby1pbnNlcmlyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGlwb2luc3BlY2FvL3RpcG9pbnNwZWNhby1pbnNlcmlyL3RpcG9pbnNwZWNhby1pbnNlcmlyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUNFOzs7O0dBQUE7QUNJTjs7QURHSTtFQUNFLGdCQUFBO0VBQ0EsaURBQUE7QUNETjs7QURLTTtFQUNFLGdCQUFBO0FDSFI7O0FEUUU7RUFDRSxZQUFBO0FDTEo7O0FEUUU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ0xKOztBRFNFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTRTtFQUNFLFNBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RpcG9pbnNwZWNhby90aXBvaW5zcGVjYW8taW5zZXJpci90aXBvaW5zcGVjYW8taW5zZXJpci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgMTM1ZGVnLFxyXG4gICAgICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSxcclxuICAgICAgICAjZmZmZmZmXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICYubm8tcmFkaXVzIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3Rhby1jb3Ige1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAub2xobyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsZWZ0OiA5NCU7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5kaXYtdGltZSB7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAubXktYXZhdGFyIHtcclxuICAgIGxlZnQ6IDM3JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC56b29uLWVsaW1pbmFkbyB7XHJcbiAgICB6b29tOiAwLjY7XHJcbiAgfSIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTM1ZGVnLFxuICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSxcbiAgICAjZmZmZmZmXG4gICk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZC5uby1yYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYm90YW8tY29yIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ub2xobyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGVmdDogOTQlO1xufVxuXG4uZGl2LXRpbWUge1xuICB0b3A6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm15LWF2YXRhciB7XG4gIGxlZnQ6IDM3JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uem9vbi1lbGltaW5hZG8ge1xuICB6b29tOiAwLjY7XG59Il19 */";
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
  }
}]);
//# sourceMappingURL=pages-tipoinspecao-tipoinspecao-inserir-tipoinspecao-inserir-module-es5.js.map