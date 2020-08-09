function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-relatorios-selecao-relatorio-selecao-relatorio-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRelatoriosSelecaoRelatorioSelecaoRelatorioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding class=\"login auth-page\" fullscreen>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Relatórios</ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n    <br>\r\n    <ion-toolbar>\r\n      <h3 no-margin>\r\n        <ion-text> &nbsp;Obras</ion-text>\r\n      </h3>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-label position=\"floating\">Status da obra</ion-label>\r\n              <ionic-selectable item-content name=\"statsobra\" [(ngModel)]=\"statusObra\" [(items)]=\"opcoesStatus\"\r\n                closeButtonTex=\"Cancelar\" itemValueField=\"index\" itemTextField=\"nome\" canSearch=\"true\">\r\n              </ionic-selectable>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-label position=\"floating\">Data da obra</ion-label>\r\n              <ionic-selectable item-content name=\"statsobra\" [(ngModel)]=\"dataDeApuracao\" [(items)]=\"opcoesDatas\"\r\n                closeButtonTex=\"Cancelar\" itemValueField=\"index\" itemTextField=\"nome\" canSearch=\"true\">\r\n              </ionic-selectable>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-input [(ngModel)]=\"dataInicial\" name=\"dtinicio\" type=\"text\" placeholder=\"00/00/0000\"\r\n                [brmasker]=\"{mask: '00/00/0000', type:'num', len:10}\">\r\n              </ion-input>\r\n\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              ate\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-input [(ngModel)]=\"datafinal\" name=\"datafinal\" type=\"text\" placeholder=\"00/00/0000\"\r\n                [brmasker]=\"{mask: '00/00/0000', type:'num', len:10}\">\r\n              </ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm class=\"\">\r\n            <div>\r\n              <ion-button color=\"primary\" shape=\"round\" icon-top tappable (click)=\"getRelatorioObras()\">\r\n                <ion-icon name=\"newspaper-outline\" ></ion-icon>\r\n                &nbsp;Relatorio Obras\r\n              </ion-button>\r\n            </div>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-toolbar>\r\n    <br><br>\r\n    <ion-toolbar>\r\n      <h3 no-margin>\r\n        <ion-text> &nbsp;Inspeções</ion-text>\r\n      </h3>\r\n      <ion-grid>\r\n        <ion-row>\r\n\r\n          <ion-col>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-label position=\"floating\">Obras</ion-label>\r\n              <ionic-selectable item-content name=\"fobra\" [(items)]=\"obras\" closeButtonText=\"Cancelar\" [canClear]=\"true\"\r\n                itemValueField=\"id\" itemTextField=\"nome\" canSearch=\"true\" [(ngModel)]=\"obra\"\r\n                [isConfirmButtonEnabled]=\"true\">\r\n              </ionic-selectable>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-label position=\"floating\">Status da inspeção</ion-label>\r\n              <ionic-selectable item-content name=\"statsobra\" [(ngModel)]=\"statusDaInpecaoApuracao\"\r\n                [(items)]=\"opcoesStatus\" closeButtonTex=\"Cancelar\" itemValueField=\"index\" itemTextField=\"nome\"\r\n                canSearch=\"true\">\r\n              </ionic-selectable>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-label position=\"floating\">Data inspeção</ion-label>\r\n              <ionic-selectable item-content name=\"statsInspecao\" [(ngModel)]=\"dataDeInpecaoApuracao\"\r\n                [(items)]=\"opcoesDatas\" closeButtonTex=\"Cancelar\" itemValueField=\"index\" itemTextField=\"nome\"\r\n                canSearch=\"true\">\r\n              </ionic-selectable>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm>\r\n            <div>\r\n              <ion-item no-padding class=\"animated fadeInUp\">\r\n                <ion-input [(ngModel)]=\"dataInspecaoInicial\" name=\"dtinicioinspecao\" type=\"text\"\r\n                  placeholder=\"00/00/0000\" [brmasker]=\"{mask: '00/00/0000', type:'num', len:10}\">\r\n                </ion-input>\r\n              </ion-item>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm>\r\n            <div>\r\n              <ion-item no-padding class=\"animated fadeInUp\">\r\n                ate\r\n              </ion-item>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm>\r\n            <div>\r\n              <ion-item no-padding class=\"animated fadeInUp\">\r\n                <ion-input [(ngModel)]=\"dataInspecaofinal\" name=\"datafinalinspecao\" type=\"text\" placeholder=\"00/00/0000\"\r\n                  [brmasker]=\"{mask: '00/00/0000', type:'num', len:10}\">\r\n                </ion-input>\r\n              </ion-item>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-button shape=\"round\" color=\"primary\" icon-right tappable\r\n                (click)=\"getRelatorioInspecaoPorObra(false)\">\r\n                <ion-icon name=\"newspaper-outline\"></ion-icon>\r\n                &nbsp;Relatórios de Inspeções por Obra\r\n              </ion-button>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-button shape=\"round\" color=\"primary\" icon-right tappable (click)=\"getRelatorioInspecaoPorObra(true)\">\r\n                <ion-icon name=\"newspaper-outline\"></ion-icon>\r\n                &nbsp;Rel. de Ins. por Obra consolidado\r\n              </ion-button>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-button shape=\"round\" color=\"primary\" icon-right tappable (click)=\"getRelatorioDeInspecao()\">\r\n                <ion-icon name=\"newspaper-outline\"></ion-icon>\r\n                &nbsp;relatório de inspeções\r\n              </ion-button>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-toolbar>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/model/objetc/filtro/generic.ts":
  /*!************************************************!*\
    !*** ./src/app/model/objetc/filtro/generic.ts ***!
    \************************************************/

  /*! exports provided: Generic */

  /***/
  function srcAppModelObjetcFiltroGenericTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Generic", function () {
      return Generic;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Generic = function Generic() {
      _classCallCheck(this, Generic);

      this.index = 0;
    };
    /***/

  },

  /***/
  "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: SelecaoRelatorioPageRoutingModule */

  /***/
  function srcAppPagesRelatoriosSelecaoRelatorioSelecaoRelatorioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelecaoRelatorioPageRoutingModule", function () {
      return SelecaoRelatorioPageRoutingModule;
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


    var _selecao_relatorio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./selecao-relatorio.page */
    "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.ts");

    var routes = [{
      path: '',
      component: _selecao_relatorio_page__WEBPACK_IMPORTED_MODULE_3__["SelecaoRelatorioPage"]
    }];

    var SelecaoRelatorioPageRoutingModule = function SelecaoRelatorioPageRoutingModule() {
      _classCallCheck(this, SelecaoRelatorioPageRoutingModule);
    };

    SelecaoRelatorioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SelecaoRelatorioPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.module.ts ***!
    \********************************************************************************/

  /*! exports provided: SelecaoRelatorioPageModule */

  /***/
  function srcAppPagesRelatoriosSelecaoRelatorioSelecaoRelatorioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelecaoRelatorioPageModule", function () {
      return SelecaoRelatorioPageModule;
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


    var _selecao_relatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./selecao-relatorio-routing.module */
    "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio-routing.module.ts");
    /* harmony import */


    var _selecao_relatorio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./selecao-relatorio.page */
    "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.ts");
    /* harmony import */


    var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! br-mask */
    "./node_modules/br-mask/dist/index.js");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");

    var SelecaoRelatorioPageModule = function SelecaoRelatorioPageModule() {
      _classCallCheck(this, SelecaoRelatorioPageModule);
    };

    SelecaoRelatorioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"], _selecao_relatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelecaoRelatorioPageRoutingModule"]],
      declarations: [_selecao_relatorio_page__WEBPACK_IMPORTED_MODULE_6__["SelecaoRelatorioPage"]]
    })], SelecaoRelatorioPageModule);
    /***/
  },

  /***/
  "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRelatoriosSelecaoRelatorioSelecaoRelatorioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\n.fica-botton {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n}\n\n.foto-creche {\n  width: 100%;\n  height: 100%;\n}\n\n.buttom-main {\n  width: 100%;\n  height: 200px;\n}\n\n.logo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 1%;\n  height: 150px;\n}\n\n.container {\n  height: 100%;\n}\n\n.op1 {\n  width: 38%;\n  display: inline-block;\n}\n\n.op2 {\n  width: 38%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvcy9zZWxlY2FvLXJlbGF0b3Jpby9DOlxcVXNlcnNcXHJvYmVyXFxPbmVEcml2ZVxcaW9uaWNcXHNpZ29icmEtdWkvc3JjXFxhcHBcXHBhZ2VzXFxyZWxhdG9yaW9zXFxzZWxlY2FvLXJlbGF0b3Jpb1xcc2VsZWNhby1yZWxhdG9yaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWxhdG9yaW9zL3NlbGVjYW8tcmVsYXRvcmlvL3NlbGVjYW8tcmVsYXRvcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURHRTtFQUNFLDRDQUFBO0FDQUo7O0FER0U7RUFDRSxnQkFBQTtFQUNBLGlEQUFBO0FDREo7O0FES0k7RUFDRSxnQkFBQTtBQ0hOOztBRFFBO0VBQ0UsWUFBQTtBQ0xGOztBRFFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNMRjs7QURRQTtFQUNFLFlBQUE7QUNMRjs7QURRQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQ0xGOztBRFFBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWxhdG9yaW9zL3NlbGVjYW8tcmVsYXRvcmlvL3NlbGVjYW8tcmVsYXRvcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICB9XHJcblxyXG4gIGlvbi1jYXJkIHtcclxuICAgICYubm8tcmFkaXVzIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib3Rhby1jb3Ige1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmZpY2EtYm90dG9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3RvLWNyZWNoZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9tLW1haW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ub3AxIHtcclxuICB3aWR0aDogMzglO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm9wMiB7XHJcbiAgd2lkdGg6IDM4JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNhcmQubm8tcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmJvdGFvLWNvciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmZpY2EtYm90dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3RvLWNyZWNoZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5idXR0b20tbWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm9wMSB7XG4gIHdpZHRoOiAzOCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm9wMiB7XG4gIHdpZHRoOiAzOCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.ts ***!
    \******************************************************************************/

  /*! exports provided: SelecaoRelatorioPage */

  /***/
  function srcAppPagesRelatoriosSelecaoRelatorioSelecaoRelatorioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelecaoRelatorioPage", function () {
      return SelecaoRelatorioPage;
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


    var _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../service/sigobra/obra.service */
    "./src/app/service/sigobra/obra.service.ts");
    /* harmony import */


    var _model_objetc_filtro_filtro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../model/objetc/filtro/filtro */
    "./src/app/model/objetc/filtro/filtro.ts");
    /* harmony import */


    var _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../model/objetc/filtro/pesquisa */
    "./src/app/model/objetc/filtro/pesquisa.ts");
    /* harmony import */


    var _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../service/sigobra/inspecao.service */
    "./src/app/service/sigobra/inspecao.service.ts");
    /* harmony import */


    var _model_objetc_filtro_generic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../model/objetc/filtro/generic */
    "./src/app/model/objetc/filtro/generic.ts");
    /* harmony import */


    var _model_enums_join_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../model/enums/join-type.enum */
    "./src/app/model/enums/join-type.enum.ts");

    var SelecaoRelatorioPage = /*#__PURE__*/function () {
      function SelecaoRelatorioPage(base, os, is) {
        _classCallCheck(this, SelecaoRelatorioPage);

        this.base = base;
        this.os = os;
        this.is = is;
        this.opcoesDatas = [{
          index: 0,
          nome: 'Não filtar'
        }, {
          index: 1,
          nome: 'Abertura'
        }, {
          index: 2,
          nome: 'Fechamento'
        }];
        this.opcoesStatus = [{
          index: 0,
          nome: 'Não filtar'
        }, {
          index: 1,
          nome: 'Aberta'
        }, {
          index: 2,
          nome: 'Fechada'
        }]; // dados informados nos filtros
        // dados relaciodos a obras

        this.statusObra = new _model_objetc_filtro_generic__WEBPACK_IMPORTED_MODULE_7__["Generic"]();
        this.dataDeApuracao = new _model_objetc_filtro_generic__WEBPACK_IMPORTED_MODULE_7__["Generic"]();
        this.statusDaInpecaoApuracao = new _model_objetc_filtro_generic__WEBPACK_IMPORTED_MODULE_7__["Generic"]();
        this.dataDeInpecaoApuracao = new _model_objetc_filtro_generic__WEBPACK_IMPORTED_MODULE_7__["Generic"]();
        this.filtroObra = new _model_objetc_filtro_filtro__WEBPACK_IMPORTED_MODULE_4__["Filtro"]();
      }

      _createClass(SelecaoRelatorioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filtroObra.nativo = true;
          this.filtroObra.sql = 'select obr.* from obras obr left join inspecao ins on ins.obras_id = obr.id where obr.id > 0 ';
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.carregarObras(" ");
        }
      }, {
        key: "carregarObras",
        value: function carregarObras(value) {
          var _this = this;

          this.base.present();
          return this.os.pesquisar(value).subscribe(function (data) {
            _this.obras = data;

            _this.base.dismiss();
          }, function (error) {
            _this.base.dismiss();

            _this.base.mensagemErro('Falha  ao listar  Obras ' + _this.base.tratarErro(error));
          });
        } // relatorio de obras  - levar em consideraçã a data da obra

      }, {
        key: "getRelatorioObras",
        value: function getRelatorioObras() {
          var _this2 = this;

          this.filtroObra.nativo = true;
          this.filtroObra.sql = 'select obr.* from obras obr where obr.id > 0 ';
          this.filtroObra.pesquisas = new Array(); // tslint:disable-next-line: ban-types

          var campo = this.dataDeApuracao.index !== 0 ? this.dataDeApuracao.index === 1 ? ' obr.dtinicio ' : ' obr.dtfinalizada ' : '';

          if (campo !== '') {
            var retorno = this.getDatas(' and  ' + campo, this.dataInicial, this.datafinal);
            this.filtroObra.pesquisas = this.filtroObra.pesquisas.concat(retorno);
          }

          campo = this.dataDeApuracao.index !== 0 ? this.dataDeApuracao.index === 1 ? '  and obr.dtfinalizada is  null ' : ' and obr.dtfinalizada is not null ' : '';
          var pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
          pesquisa.comparacao = '   ';
          pesquisa.valor = '  ';
          pesquisa.nome = 'and obr.ativo is true';
          this.filtroObra.pesquisas.push(pesquisa);

          if (campo !== '') {
            pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
            pesquisa.comparacao = ' ';
            pesquisa.valor = ' ';
            pesquisa.nome = campo;
            this.filtroObra.pesquisas.push(pesquisa);
          }

          this.base.present();
          return this.os.getRelatorioFiltro(this.filtroObra).subscribe(function (data) {
            _this2.base.dismiss();

            _this2.base.abrirPDF(data, 'declaração');
          }, function (error) {
            _this2.base.dismiss();

            console.log(error);

            _this2.base.mensagemErro('Erro ao gerar relatório ' + _this2.base.tratarErro(error));
          });
        } //

      }, {
        key: "getRelatorioInspecaoPorObra",
        value: function getRelatorioInspecaoPorObra() {
          var _this3 = this;

          var consolidado = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (this.obra === undefined || this.obra === null || this.obra.id === undefined || this.obra.id === null || !(this.obra.id > 0)) {
            this.base.mensagemErro('E necessário selecionar uma obra');
            return;
          }

          var filtroInspecao = new _model_objetc_filtro_filtro__WEBPACK_IMPORTED_MODULE_4__["Filtro"]();
          filtroInspecao.pesquisas = new Array();
          var campo = this.dataDeInpecaoApuracao.index !== 0 ? this.dataDeInpecaoApuracao.index === 1 ? 'dtinicio' : 'dtfinalizada' : '';

          if (campo !== '') {
            filtroInspecao.pesquisas = filtroInspecao.pesquisas.concat(this.getDatas(campo, this.dataInspecaoInicial, this.dataInspecaofinal));
          }

          var pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
          pesquisa.comparacao = '=';
          pesquisa.nome = 'id';
          pesquisa.tabela = 'obras';
          pesquisa.tipe = _model_enums_join_type_enum__WEBPACK_IMPORTED_MODULE_8__["JoinType"].INNER;
          pesquisa.valor = this.obra.id.toString();
          filtroInspecao.pesquisas.push(pesquisa);
          pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
          pesquisa.comparacao = '=';
          pesquisa.nome = 'ativo';
          pesquisa.tabela = 'obras';
          pesquisa.tipe = _model_enums_join_type_enum__WEBPACK_IMPORTED_MODULE_8__["JoinType"].INNER;
          pesquisa.valor = 'true';
          filtroInspecao.pesquisas.push(pesquisa);

          if (this.statusDaInpecaoApuracao.index === 1) {
            pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
            pesquisa.comparacao = 'is null';
            pesquisa.nome = 'dtfinalizada';
            filtroInspecao.pesquisas.push(pesquisa);
          } else {
            if (this.statusDaInpecaoApuracao.index === 2) {
              pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
              pesquisa.comparacao = 'is not null';
              pesquisa.nome = 'dtfinalizada';
              filtroInspecao.pesquisas.push(pesquisa);
            }
          }

          this.base.present();

          if (consolidado) {
            this.is.getRelatorioFiltroObraConsolidado(filtroInspecao).subscribe(function (data) {
              _this3.base.dismiss();

              _this3.base.abrirPDF(data, 'declaração');
            }, function (error) {
              _this3.base.dismiss();

              console.log(error);

              _this3.base.mensagemErro('Erro ao gerar relatório ' + _this3.obra.nome + _this3.base.tratarErro(error));
            });
          } else {
            this.is.getRelatorioFiltroObra(filtroInspecao).subscribe(function (data) {
              _this3.base.dismiss();

              _this3.base.abrirPDF(data, 'declaração');
            }, function (error) {
              _this3.base.dismiss();

              console.log(error);

              _this3.base.mensagemErro('Erro ao gerar relatório ' + _this3.obra.nome + ' ' + _this3.base.tratarErro(error));
            });
          }
        } //  aqui e relatorio de inspeção aquiu levar em consideração as inspeços

      }, {
        key: "getRelatorioDeInspecao",
        value: function getRelatorioDeInspecao() {
          var _this4 = this;

          var filtroInspecao = new _model_objetc_filtro_filtro__WEBPACK_IMPORTED_MODULE_4__["Filtro"]();
          filtroInspecao.pesquisas = new Array(); // tslint:disable-next-line: ban-types

          var campo = this.dataDeInpecaoApuracao.index !== 0 ? this.dataDeInpecaoApuracao.index === 1 ? 'dtinicio' : 'dtfinalizada' : '';

          if (campo !== '') {
            filtroInspecao.pesquisas = filtroInspecao.pesquisas.concat(this.getDatas(campo, this.dataInspecaoInicial, this.dataInspecaofinal));
          }

          var pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
          pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
          pesquisa.comparacao = '=';
          pesquisa.nome = 'ativo';
          pesquisa.valor = 'true';
          filtroInspecao.pesquisas.push(pesquisa);

          if (this.statusDaInpecaoApuracao.index === 1) {
            pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
            pesquisa.comparacao = 'is null';
            pesquisa.nome = 'dtfinalizada';
            filtroInspecao.pesquisas.push(pesquisa);
          } else {
            if (this.statusDaInpecaoApuracao.index === 2) {
              pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
              pesquisa.comparacao = 'is not null';
              pesquisa.nome = 'dtfinalizada';
              filtroInspecao.pesquisas.push(pesquisa);
            }
          }

          this.base.present();
          return this.is.getRelatorioFiltro(filtroInspecao).subscribe(function (data) {
            _this4.base.dismiss();

            _this4.base.abrirPDF(data, 'declaração');
          }, function (error) {
            _this4.base.dismiss();

            console.log(error);

            _this4.base.mensagemErro('Erro ao gerar relatório ' + _this4.obra.nome + ' ' + _this4.base.tratarErro(error));
          });
        }
      }, {
        key: "getDatas",
        value: function getDatas(campo, dataInicia, dataFinal) {
          var pesquisas = new Array();
          var pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();

          if (!this.base.vazio(dataInicia)) {
            pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
            pesquisa.comparacao = '>=';
            pesquisa.valor = '\'' + dataInicia + '\'';
            pesquisa.nome = campo;
            pesquisas.push(pesquisa);
          }

          if (!this.base.vazio(dataFinal)) {
            pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
            pesquisa.comparacao = '<=';
            pesquisa.valor = '\'' + dataFinal + '\'';
            pesquisa.nome = campo;
            pesquisas.push(pesquisa);
          }

          return pesquisas;
        }
      }]);

      return SelecaoRelatorioPage;
    }();

    SelecaoRelatorioPage.ctorParameters = function () {
      return [{
        type: _model_base__WEBPACK_IMPORTED_MODULE_2__["Base"]
      }, {
        type: _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_3__["ObraService"]
      }, {
        type: _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_6__["InspecaoService"]
      }];
    };

    SelecaoRelatorioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-selecao-relatorio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./selecao-relatorio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./selecao-relatorio.page.scss */
      "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_2__["Base"], _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_3__["ObraService"], _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_6__["InspecaoService"]])], SelecaoRelatorioPage);
    /***/
  },

  /***/
  "./src/app/service/sigobra/inspecao.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/service/sigobra/inspecao.service.ts ***!
    \*****************************************************/

  /*! exports provided: InspecaoService */

  /***/
  function srcAppServiceSigobraInspecaoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InspecaoService", function () {
      return InspecaoService;
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

    var InspecaoService = /*#__PURE__*/function () {
      function InspecaoService(http, as) {
        _classCallCheck(this, InspecaoService);

        this.http = http;
        this.as = as;
        this.url = '/inspecao';
      }

      _createClass(InspecaoService, [{
        key: "salvar",
        value: function salvar(inspecao) {
          return this.http.post(this.as.url + this.url, inspecao, this.as.getOptions());
        }
      }, {
        key: "editar",
        value: function editar(inspecao) {
          return this.http.put(this.as.url + this.url, inspecao, this.as.getOptions());
        }
      }, {
        key: "delete",
        value: function _delete(inspecao) {
          return this.http.post(this.as.url + this.url + '/deletar', inspecao, this.as.getOptions());
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
        value: function edit(inspecao) {
          return this.http.post(this.as.url + this.url + '/editar', inspecao, this.as.getOptions());
        }
      }, {
        key: "editarativo",
        value: function editarativo(inspecao) {
          return this.http.post(this.as.url + this.url + '/editarativo', inspecao, this.as.getOptions());
        }
      }, {
        key: "byinspecaoitens",
        value: function byinspecaoitens(inspecao) {
          return this.http.post(this.as.url + this.url + '/byinspecaoitens', inspecao, this.as.getOptions());
        }
      }, {
        key: "aprova",
        value: function aprova(inspecaoitem) {
          return this.http.post(this.as.url + this.url + '/aprova', inspecaoitem, this.as.getOptions());
        }
      }, {
        key: "reprova",
        value: function reprova(inspecaoitem) {
          return this.http.post(this.as.url + this.url + '/reprova', inspecaoitem, this.as.getOptions());
        }
      }, {
        key: "raprova",
        value: function raprova(inspecaoitem) {
          return this.http.post(this.as.url + this.url + '/raprova', inspecaoitem, this.as.getOptions());
        }
      }, {
        key: "filtra",
        value: function filtra(filtro) {
          return this.http.post(this.as.url + this.url + '/filtrar', filtro, this.as.getOptions());
        }
      }, {
        key: "pesquisarUltimosItens",
        value: function pesquisarUltimosItens() {
          return this.http.get(this.as.url + this.url + '/listarultimas', this.as.getOptions());
        }
      }, {
        key: "getRelatorioFiltroObra",
        value: function getRelatorioFiltroObra(filtro) {
          return this.http.post(this.as.url + this.url + '/getrelatoriofiltroobra', filtro, this.as.getOptionsPDF());
        }
      }, {
        key: "getRelatorioFiltroObraConsolidado",
        value: function getRelatorioFiltroObraConsolidado(filtro) {
          return this.http.post(this.as.url + this.url + '/getrelatoriofiltroobraconsolidado', filtro, this.as.getOptionsPDF());
        }
      }, {
        key: "getRelatorioFiltro",
        value: function getRelatorioFiltro(filtro) {
          return this.http.post(this.as.url + this.url + '/getrelatoriofiltro', filtro, this.as.getOptionsPDF());
        }
      }, {
        key: "getRelatorioInspecao",
        value: function getRelatorioInspecao(inspecao) {
          return this.http.post(this.as.url + this.url + '/relatoriodeinpecao', inspecao, this.as.getOptionsPDF());
        }
      }]);

      return InspecaoService;
    }();

    InspecaoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]
      }];
    };

    InspecaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])], InspecaoService);
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
//# sourceMappingURL=pages-relatorios-selecao-relatorio-selecao-relatorio-module-es5.js.map