function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tipoinspecao-itenstipoinspecao-itenstipoinspecao-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao.page.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao.page.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTipoinspecaoItenstipoinspecaoItenstipoinspecaoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"#04ff0c\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Itens</ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-input name=\"value\" color=\"#04ff0c\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button size=\"small\" shape=\"round\" color=\"dark\">\r\n        <ion-icon name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">    \r\n    <form class=\"list-form auth-content\" (keydown)=\"keyDownFunction($event)\">     \r\n      <ion-item padding class=\"animated fadeInUp\"> \r\n        <ion-label>Tipo Inspeção: {{ tipoinspecao.nome }}</ion-label>\r\n      </ion-item>       \r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp; Nome\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"itenstipoinspecao.nome\" name=\"nome\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n          <ion-label position=\"floating\">\r\n            &nbsp; Método de verificação\r\n          </ion-label>\r\n          <ion-input [(ngModel)]=\"itenstipoinspecao.metodoverificacao\" name=\"metodoverificacao\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp; Tolerância\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"itenstipoinspecao.tolerancia\" name=\"tolerancia\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n    </form>\r\n    <div margin-top>\r\n      <ion-button size=\"medium\" expand=\"full\" shape=\"round\" color=\"secondary\" icon-right tappable\r\n        (click)=\"inserir(tipoinspecao)\">\r\n        inserir\r\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n      <ion-item-sliding *ngFor=\"let itenstipoinspecao of itenstipoinspecoes ; let index\" class=\"animated fadeInUp\"\r\n        color=\"secondary\">\r\n        <ion-item>          \r\n          <div>\r\n            <ion-label color=\"light\">{{ itenstipoinspecao.nome }} - {{ itenstipoinspecao.metodoverificacao }} - {{ itenstipoinspecao.tolerancia }}</ion-label>\r\n            <br />\r\n            <ion-button shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"editar(itenstipoinspecao,index)\">\r\n              <ion-icon name=\"create\"></ion-icon>\r\n              Editar\r\n            </ion-button>\r\n            <ion-button shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"editar(itenstipoinspecao)\">\r\n              <ion-icon name=\"trash\"></ion-icon>\r\n              Excluir\r\n            </ion-button>\r\n          </div>\r\n        </ion-item>\r\n      </ion-item-sliding>    \r\n    <div margin-top aling=\"center\" class=\"fixa-bottom\">\r\n      <ion-button color=\"secondary\" size=\"medium\" expand=\"full\" shape=\"round\" icon-right tappable (click)=\"salvar()\">\r\n        Salvar\r\n        <ion-icon name=\"arrow-dropright-circle\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/model/objetc/itemtipoinspecao.ts":
  /*!**************************************************!*\
    !*** ./src/app/model/objetc/itemtipoinspecao.ts ***!
    \**************************************************/

  /*! exports provided: ItemTipoInspecao */

  /***/
  function srcAppModelObjetcItemtipoinspecaoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemTipoInspecao", function () {
      return ItemTipoInspecao;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ItemTipoInspecao = function ItemTipoInspecao() {
      _classCallCheck(this, ItemTipoInspecao);
    };
    /***/

  },

  /***/
  "./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: ItenstipoinspecaoPageRoutingModule */

  /***/
  function srcAppPagesTipoinspecaoItenstipoinspecaoItenstipoinspecaoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItenstipoinspecaoPageRoutingModule", function () {
      return ItenstipoinspecaoPageRoutingModule;
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


    var _itenstipoinspecao_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./itenstipoinspecao.page */
    "./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao.page.ts");

    var routes = [{
      path: '',
      component: _itenstipoinspecao_page__WEBPACK_IMPORTED_MODULE_3__["ItenstipoinspecaoPage"]
    }];

    var ItenstipoinspecaoPageRoutingModule = function ItenstipoinspecaoPageRoutingModule() {
      _classCallCheck(this, ItenstipoinspecaoPageRoutingModule);
    };

    ItenstipoinspecaoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ItenstipoinspecaoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: ItenstipoinspecaoPageModule */

  /***/
  function srcAppPagesTipoinspecaoItenstipoinspecaoItenstipoinspecaoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItenstipoinspecaoPageModule", function () {
      return ItenstipoinspecaoPageModule;
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


    var _itenstipoinspecao_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./itenstipoinspecao-routing.module */
    "./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao-routing.module.ts");
    /* harmony import */


    var _itenstipoinspecao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./itenstipoinspecao.page */
    "./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao.page.ts");

    var ItenstipoinspecaoPageModule = function ItenstipoinspecaoPageModule() {
      _classCallCheck(this, ItenstipoinspecaoPageModule);
    };

    ItenstipoinspecaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _itenstipoinspecao_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItenstipoinspecaoPageRoutingModule"]],
      declarations: [_itenstipoinspecao_page__WEBPACK_IMPORTED_MODULE_6__["ItenstipoinspecaoPage"]]
    })], ItenstipoinspecaoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao.page.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao.page.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTipoinspecaoItenstipoinspecaoItenstipoinspecaoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: linear-gradient(\n    135deg,\n    var(--ion-color-primary),\n    #ffffff\n  );\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\n.olho {\n  cursor: pointer;\n  left: 94%;\n}\n\n.div-time {\n  top: 30px;\n  position: relative;\n}\n\n.my-avatar {\n  left: 37%;\n  position: relative;\n}\n\n.zoon-eliminado {\n  zoom: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGlwb2luc3BlY2FvL2l0ZW5zdGlwb2luc3BlY2FvL0M6XFxVc2Vyc1xccm9iZXJcXE9uZURyaXZlXFxpb25pY1xcc2lnb2JyYS11aS9zcmNcXGFwcFxccGFnZXNcXHRpcG9pbnNwZWNhb1xcaXRlbnN0aXBvaW5zcGVjYW9cXGl0ZW5zdGlwb2luc3BlY2FvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGlwb2luc3BlY2FvL2l0ZW5zdGlwb2luc3BlY2FvL2l0ZW5zdGlwb2luc3BlY2FvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUNFOzs7O0dBQUE7QUNJTjs7QURHSTtFQUNFLGdCQUFBO0VBQ0EsaURBQUE7QUNETjs7QURLTTtFQUNFLGdCQUFBO0FDSFI7O0FEUUU7RUFDRSxZQUFBO0FDTEo7O0FEUUU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ0xKOztBRFNFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTRTtFQUNFLFNBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RpcG9pbnNwZWNhby9pdGVuc3RpcG9pbnNwZWNhby9pdGVuc3RpcG9pbnNwZWNhby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgMTM1ZGVnLFxyXG4gICAgICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSxcclxuICAgICAgICAjZmZmZmZmXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICYubm8tcmFkaXVzIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3Rhby1jb3Ige1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAub2xobyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsZWZ0OiA5NCU7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5kaXYtdGltZSB7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAubXktYXZhdGFyIHtcclxuICAgIGxlZnQ6IDM3JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC56b29uLWVsaW1pbmFkbyB7XHJcbiAgICB6b29tOiAwLjY7XHJcbiAgfSIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTM1ZGVnLFxuICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSxcbiAgICAjZmZmZmZmXG4gICk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZC5uby1yYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYm90YW8tY29yIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ub2xobyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGVmdDogOTQlO1xufVxuXG4uZGl2LXRpbWUge1xuICB0b3A6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm15LWF2YXRhciB7XG4gIGxlZnQ6IDM3JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uem9vbi1lbGltaW5hZG8ge1xuICB6b29tOiAwLjY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao.page.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao.page.ts ***!
    \********************************************************************************/

  /*! exports provided: ItenstipoinspecaoPage */

  /***/
  function srcAppPagesTipoinspecaoItenstipoinspecaoItenstipoinspecaoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItenstipoinspecaoPage", function () {
      return ItenstipoinspecaoPage;
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


    var src_app_service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/sigobra/tipoinspecao.service */
    "./src/app/service/sigobra/tipoinspecao.service.ts");
    /* harmony import */


    var _service_sigobra_itens_tipo_inspecao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../service/sigobra/itens-tipo-inspecao.service */
    "./src/app/service/sigobra/itens-tipo-inspecao.service.ts");
    /* harmony import */


    var _model_objetc_itemtipoinspecao__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../model/objetc/itemtipoinspecao */
    "./src/app/model/objetc/itemtipoinspecao.ts");

    var ItenstipoinspecaoPage = /*#__PURE__*/function () {
      function ItenstipoinspecaoPage(base, router, tis, itis) {
        _classCallCheck(this, ItenstipoinspecaoPage);

        this.base = base;
        this.router = router;
        this.tis = tis;
        this.itis = itis;
        this.itenstipoinspecao = new _model_objetc_itemtipoinspecao__WEBPACK_IMPORTED_MODULE_6__["ItemTipoInspecao"]();
        this.itiSelecionado = new _model_objetc_itemtipoinspecao__WEBPACK_IMPORTED_MODULE_6__["ItemTipoInspecao"]();
      }

      _createClass(ItenstipoinspecaoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.tis.tipoinspecao !== undefined && this.tis.tipoinspecao !== null) {
            this.tipoinspecao = this.tis.tipoinspecao;

            if (this.tipoinspecao.itenstipoinspecao === undefined || this.tipoinspecao.itenstipoinspecao === null) {
              this.pesquisaTipoInspecao(this.tipoinspecao);
            }
          } else {
            this.tipoinspecao.itenstipoinspecao = new Array();
          }
        }
      }, {
        key: "pesquisaTipoInspecao",
        value: function pesquisaTipoInspecao(value) {
          var _this = this;

          this.base.present();
          return this.itis.bytipoinspecao(value).subscribe(function (data) {
            _this.base.dismiss();

            _this.itenstipoinspecoes = data;
            _this.tipoinspecao.itenstipoinspecao = _this.itenstipoinspecoes;
          }, function (error) {
            _this.base.dismiss();

            _this.tipoinspecao.itenstipoinspecao = new Array();
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(event) {
          if (event.item === undefined || event.item === null) {
            return;
          }
        }
      }, {
        key: "inserir",
        value: function inserir() {
          this.itenstipoinspecao.ativo = true;

          if (this.indexInserir > 0) {
            this.itenstipoinspecoes.includes(this.itenstipoinspecao, this.indexInserir);
          } else {
            this.itenstipoinspecoes.push(this.itenstipoinspecao);
          }

          this.indexInserir = 0;
          this.itenstipoinspecao = new _model_objetc_itemtipoinspecao__WEBPACK_IMPORTED_MODULE_6__["ItemTipoInspecao"]();
        }
      }, {
        key: "editar",
        value: function editar(itens) {
          var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          this.indexInserir = 1;
          this.itenstipoinspecao = itens;
        }
      }, {
        key: "keyDownFunction",
        value: function keyDownFunction(event) {}
      }, {
        key: "salvar",
        value: function salvar() {
          var _this2 = this;

          this.tipoinspecao.itenstipoinspecao = this.itenstipoinspecoes;
          this.itis.salvarbytipoinspecao(this.tipoinspecao).subscribe(function (data) {
            _this2.base.router.navigate(['tipoinspecao-inserir']);
          }, function (error) {
            _this2.base.mensagemErro('Falha ao salvar esta ficha  :' + _this2.base.tratarErro(error));
          });
        }
      }]);

      return ItenstipoinspecaoPage;
    }();

    ItenstipoinspecaoPage.ctorParameters = function () {
      return [{
        type: _model_base__WEBPACK_IMPORTED_MODULE_2__["Base"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_4__["TipoinspecaoService"]
      }, {
        type: _service_sigobra_itens_tipo_inspecao_service__WEBPACK_IMPORTED_MODULE_5__["ItensTipoInspecaoService"]
      }];
    };

    ItenstipoinspecaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-itenstipoinspecao',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./itenstipoinspecao.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./itenstipoinspecao.page.scss */
      "./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_2__["Base"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_4__["TipoinspecaoService"], _service_sigobra_itens_tipo_inspecao_service__WEBPACK_IMPORTED_MODULE_5__["ItensTipoInspecaoService"]])], ItenstipoinspecaoPage);
    /***/
  },

  /***/
  "./src/app/service/sigobra/itens-tipo-inspecao.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/service/sigobra/itens-tipo-inspecao.service.ts ***!
    \****************************************************************/

  /*! exports provided: ItensTipoInspecaoService */

  /***/
  function srcAppServiceSigobraItensTipoInspecaoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItensTipoInspecaoService", function () {
      return ItensTipoInspecaoService;
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

    var ItensTipoInspecaoService = /*#__PURE__*/function () {
      function ItensTipoInspecaoService(http, as) {
        _classCallCheck(this, ItensTipoInspecaoService);

        this.http = http;
        this.as = as;
        this.url = '/itenstipoinspecao';
      }

      _createClass(ItensTipoInspecaoService, [{
        key: "bytipoinspecao",
        value: function bytipoinspecao(value) {
          return this.http.post(this.as.url + this.url + '/bytipoinspecao', value, this.as.getOptions());
        }
      }, {
        key: "salvar",
        value: function salvar(value) {
          return this.http.post(this.as.url + this.url, value, this.as.getOptions());
        }
      }, {
        key: "salvarbytipoinspecao",
        value: function salvarbytipoinspecao(value) {
          return this.http.post(this.as.url + this.url + '/salvarbytipoinspecao', value, this.as.getOptions());
        }
      }]);

      return ItensTipoInspecaoService;
    }();

    ItensTipoInspecaoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]
      }];
    };

    ItensTipoInspecaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])], ItensTipoInspecaoService);
    /***/
  }
}]);
//# sourceMappingURL=pages-tipoinspecao-itenstipoinspecao-itenstipoinspecao-module-es5.js.map