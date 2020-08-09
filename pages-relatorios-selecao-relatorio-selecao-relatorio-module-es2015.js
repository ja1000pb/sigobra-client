(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-relatorios-selecao-relatorio-selecao-relatorio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"login auth-page\" fullscreen>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Relatórios</ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n    <br>\r\n    <ion-toolbar>\r\n      <h3 no-margin>\r\n        <ion-text> &nbsp;Obras</ion-text>\r\n      </h3>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-label position=\"floating\">Status da obra</ion-label>\r\n              <ionic-selectable item-content name=\"statsobra\" [(ngModel)]=\"statusObra\" [(items)]=\"opcoesStatus\"\r\n                closeButtonTex=\"Cancelar\" itemValueField=\"index\" itemTextField=\"nome\" canSearch=\"true\">\r\n              </ionic-selectable>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-label position=\"floating\">Data da obra</ion-label>\r\n              <ionic-selectable item-content name=\"statsobra\" [(ngModel)]=\"dataDeApuracao\" [(items)]=\"opcoesDatas\"\r\n                closeButtonTex=\"Cancelar\" itemValueField=\"index\" itemTextField=\"nome\" canSearch=\"true\">\r\n              </ionic-selectable>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-input [(ngModel)]=\"dataInicial\" name=\"dtinicio\" type=\"text\" placeholder=\"00/00/0000\"\r\n                [brmasker]=\"{mask: '00/00/0000', type:'num', len:10}\">\r\n              </ion-input>\r\n\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              ate\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-input [(ngModel)]=\"datafinal\" name=\"datafinal\" type=\"text\" placeholder=\"00/00/0000\"\r\n                [brmasker]=\"{mask: '00/00/0000', type:'num', len:10}\">\r\n              </ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm class=\"\">\r\n            <div>\r\n              <ion-button color=\"primary\" shape=\"round\" icon-top tappable (click)=\"getRelatorioObras()\">\r\n                <ion-icon name=\"newspaper-outline\" ></ion-icon>\r\n                &nbsp;Relatorio Obras\r\n              </ion-button>\r\n            </div>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-toolbar>\r\n    <br><br>\r\n    <ion-toolbar>\r\n      <h3 no-margin>\r\n        <ion-text> &nbsp;Inspeções</ion-text>\r\n      </h3>\r\n      <ion-grid>\r\n        <ion-row>\r\n\r\n          <ion-col>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-label position=\"floating\">Obras</ion-label>\r\n              <ionic-selectable item-content name=\"fobra\" [(items)]=\"obras\" closeButtonText=\"Cancelar\" [canClear]=\"true\"\r\n                itemValueField=\"id\" itemTextField=\"nome\" canSearch=\"true\" [(ngModel)]=\"obra\"\r\n                [isConfirmButtonEnabled]=\"true\">\r\n              </ionic-selectable>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-label position=\"floating\">Status da inspeção</ion-label>\r\n              <ionic-selectable item-content name=\"statsobra\" [(ngModel)]=\"statusDaInpecaoApuracao\"\r\n                [(items)]=\"opcoesStatus\" closeButtonTex=\"Cancelar\" itemValueField=\"index\" itemTextField=\"nome\"\r\n                canSearch=\"true\">\r\n              </ionic-selectable>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-label position=\"floating\">Data inspeção</ion-label>\r\n              <ionic-selectable item-content name=\"statsInspecao\" [(ngModel)]=\"dataDeInpecaoApuracao\"\r\n                [(items)]=\"opcoesDatas\" closeButtonTex=\"Cancelar\" itemValueField=\"index\" itemTextField=\"nome\"\r\n                canSearch=\"true\">\r\n              </ionic-selectable>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm>\r\n            <div>\r\n              <ion-item no-padding class=\"animated fadeInUp\">\r\n                <ion-input [(ngModel)]=\"dataInspecaoInicial\" name=\"dtinicioinspecao\" type=\"text\"\r\n                  placeholder=\"00/00/0000\" [brmasker]=\"{mask: '00/00/0000', type:'num', len:10}\">\r\n                </ion-input>\r\n              </ion-item>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm>\r\n            <div>\r\n              <ion-item no-padding class=\"animated fadeInUp\">\r\n                ate\r\n              </ion-item>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm>\r\n            <div>\r\n              <ion-item no-padding class=\"animated fadeInUp\">\r\n                <ion-input [(ngModel)]=\"dataInspecaofinal\" name=\"datafinalinspecao\" type=\"text\" placeholder=\"00/00/0000\"\r\n                  [brmasker]=\"{mask: '00/00/0000', type:'num', len:10}\">\r\n                </ion-input>\r\n              </ion-item>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-button shape=\"round\" color=\"primary\" icon-right tappable\r\n                (click)=\"getRelatorioInspecaoPorObra(false)\">\r\n                <ion-icon name=\"newspaper-outline\"></ion-icon>\r\n                &nbsp;Relatórios de Inspeções por Obra\r\n              </ion-button>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-button shape=\"round\" color=\"primary\" icon-right tappable (click)=\"getRelatorioInspecaoPorObra(true)\">\r\n                <ion-icon name=\"newspaper-outline\"></ion-icon>\r\n                &nbsp;Rel. de Ins. por Obra consolidado\r\n              </ion-button>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-button shape=\"round\" color=\"primary\" icon-right tappable (click)=\"getRelatorioDeInspecao()\">\r\n                <ion-icon name=\"newspaper-outline\"></ion-icon>\r\n                &nbsp;relatório de inspeções\r\n              </ion-button>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-toolbar>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/model/objetc/filtro/generic.ts":
/*!************************************************!*\
  !*** ./src/app/model/objetc/filtro/generic.ts ***!
  \************************************************/
/*! exports provided: Generic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Generic", function() { return Generic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Generic {
    constructor() {
        this.index = 0;
    }
}


/***/ }),

/***/ "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: SelecaoRelatorioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecaoRelatorioPageRoutingModule", function() { return SelecaoRelatorioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _selecao_relatorio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selecao-relatorio.page */ "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.ts");




const routes = [
    {
        path: '',
        component: _selecao_relatorio_page__WEBPACK_IMPORTED_MODULE_3__["SelecaoRelatorioPage"]
    }
];
let SelecaoRelatorioPageRoutingModule = class SelecaoRelatorioPageRoutingModule {
};
SelecaoRelatorioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelecaoRelatorioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.module.ts ***!
  \********************************************************************************/
/*! exports provided: SelecaoRelatorioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecaoRelatorioPageModule", function() { return SelecaoRelatorioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _selecao_relatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selecao-relatorio-routing.module */ "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio-routing.module.ts");
/* harmony import */ var _selecao_relatorio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selecao-relatorio.page */ "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.ts");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");









let SelecaoRelatorioPageModule = class SelecaoRelatorioPageModule {
};
SelecaoRelatorioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
            _selecao_relatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelecaoRelatorioPageRoutingModule"]
        ],
        declarations: [_selecao_relatorio_page__WEBPACK_IMPORTED_MODULE_6__["SelecaoRelatorioPage"]]
    })
], SelecaoRelatorioPageModule);



/***/ }),

/***/ "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\n.fica-botton {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n}\n\n.foto-creche {\n  width: 100%;\n  height: 100%;\n}\n\n.buttom-main {\n  width: 100%;\n  height: 200px;\n}\n\n.logo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 1%;\n  height: 150px;\n}\n\n.container {\n  height: 100%;\n}\n\n.op1 {\n  width: 38%;\n  display: inline-block;\n}\n\n.op2 {\n  width: 38%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvcy9zZWxlY2FvLXJlbGF0b3Jpby9DOlxcVXNlcnNcXHJvYmVyXFxPbmVEcml2ZVxcaW9uaWNcXHNpZ29icmEtdWkvc3JjXFxhcHBcXHBhZ2VzXFxyZWxhdG9yaW9zXFxzZWxlY2FvLXJlbGF0b3Jpb1xcc2VsZWNhby1yZWxhdG9yaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWxhdG9yaW9zL3NlbGVjYW8tcmVsYXRvcmlvL3NlbGVjYW8tcmVsYXRvcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURHRTtFQUNFLDRDQUFBO0FDQUo7O0FER0U7RUFDRSxnQkFBQTtFQUNBLGlEQUFBO0FDREo7O0FES0k7RUFDRSxnQkFBQTtBQ0hOOztBRFFBO0VBQ0UsWUFBQTtBQ0xGOztBRFFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNMRjs7QURRQTtFQUNFLFlBQUE7QUNMRjs7QURRQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQ0xGOztBRFFBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWxhdG9yaW9zL3NlbGVjYW8tcmVsYXRvcmlvL3NlbGVjYW8tcmVsYXRvcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICB9XHJcblxyXG4gIGlvbi1jYXJkIHtcclxuICAgICYubm8tcmFkaXVzIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib3Rhby1jb3Ige1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmZpY2EtYm90dG9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3RvLWNyZWNoZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9tLW1haW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ub3AxIHtcclxuICB3aWR0aDogMzglO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm9wMiB7XHJcbiAgd2lkdGg6IDM4JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNhcmQubm8tcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmJvdGFvLWNvciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmZpY2EtYm90dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3RvLWNyZWNoZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5idXR0b20tbWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm9wMSB7XG4gIHdpZHRoOiAzOCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm9wMiB7XG4gIHdpZHRoOiAzOCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.ts ***!
  \******************************************************************************/
/*! exports provided: SelecaoRelatorioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecaoRelatorioPage", function() { return SelecaoRelatorioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/base */ "./src/app/model/base.ts");
/* harmony import */ var _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/sigobra/obra.service */ "./src/app/service/sigobra/obra.service.ts");
/* harmony import */ var _model_objetc_filtro_filtro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/objetc/filtro/filtro */ "./src/app/model/objetc/filtro/filtro.ts");
/* harmony import */ var _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/objetc/filtro/pesquisa */ "./src/app/model/objetc/filtro/pesquisa.ts");
/* harmony import */ var _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/sigobra/inspecao.service */ "./src/app/service/sigobra/inspecao.service.ts");
/* harmony import */ var _model_objetc_filtro_generic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../model/objetc/filtro/generic */ "./src/app/model/objetc/filtro/generic.ts");
/* harmony import */ var _model_enums_join_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../model/enums/join-type.enum */ "./src/app/model/enums/join-type.enum.ts");









let SelecaoRelatorioPage = class SelecaoRelatorioPage {
    constructor(base, os, is) {
        this.base = base;
        this.os = os;
        this.is = is;
        this.opcoesDatas = [
            { index: 0, nome: 'Não filtar' },
            { index: 1, nome: 'Abertura' },
            { index: 2, nome: 'Fechamento' },
        ];
        this.opcoesStatus = [
            { index: 0, nome: 'Não filtar' },
            { index: 1, nome: 'Aberta' },
            { index: 2, nome: 'Fechada' },
        ];
        // dados informados nos filtros
        // dados relaciodos a obras
        this.statusObra = new _model_objetc_filtro_generic__WEBPACK_IMPORTED_MODULE_7__["Generic"]();
        this.dataDeApuracao = new _model_objetc_filtro_generic__WEBPACK_IMPORTED_MODULE_7__["Generic"]();
        this.statusDaInpecaoApuracao = new _model_objetc_filtro_generic__WEBPACK_IMPORTED_MODULE_7__["Generic"]();
        this.dataDeInpecaoApuracao = new _model_objetc_filtro_generic__WEBPACK_IMPORTED_MODULE_7__["Generic"]();
        this.filtroObra = new _model_objetc_filtro_filtro__WEBPACK_IMPORTED_MODULE_4__["Filtro"]();
    }
    ngOnInit() {
        this.filtroObra.nativo = true;
        this.filtroObra.sql = 'select obr.* from obras obr left join inspecao ins on ins.obras_id = obr.id where obr.id > 0 ';
    }
    ionViewWillEnter() {
        this.carregarObras(" ");
    }
    carregarObras(value) {
        this.base.present();
        return this.os.pesquisar(value).subscribe(data => {
            this.obras = data;
            this.base.dismiss();
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha  ao listar  Obras ' + this.base.tratarErro(error));
        });
    }
    // relatorio de obras  - levar em consideraçã a data da obra
    getRelatorioObras() {
        this.filtroObra.nativo = true;
        this.filtroObra.sql = 'select obr.* from obras obr where obr.id > 0 ';
        this.filtroObra.pesquisas = new Array();
        // tslint:disable-next-line: ban-types
        let campo = this.dataDeApuracao.index !== 0 ? this.dataDeApuracao.index === 1 ? ' obr.dtinicio ' : ' obr.dtfinalizada ' : '';
        if (campo !== '') {
            const retorno = this.getDatas(' and  ' + campo, this.dataInicial, this.datafinal);
            this.filtroObra.pesquisas = this.filtroObra.pesquisas.concat(retorno);
        }
        campo = this.dataDeApuracao.index !==
            0 ? this.dataDeApuracao.index === 1 ? '  and obr.dtfinalizada is  null ' : ' and obr.dtfinalizada is not null ' : '';
        let pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
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
        return this.os.getRelatorioFiltro(this.filtroObra).subscribe(data => {
            this.base.dismiss();
            this.base.abrirPDF(data, 'declaração');
        }, error => {
            this.base.dismiss();
            console.log(error);
            this.base.mensagemErro('Erro ao gerar relatório '
                + this.base.tratarErro(error));
        });
    }
    //
    getRelatorioInspecaoPorObra(consolidado = false) {
        if (this.obra === undefined || this.obra === null || this.obra.id === undefined || this.obra.id === null || !(this.obra.id > 0)) {
            this.base.mensagemErro('E necessário selecionar uma obra');
            return;
        }
        const filtroInspecao = new _model_objetc_filtro_filtro__WEBPACK_IMPORTED_MODULE_4__["Filtro"]();
        filtroInspecao.pesquisas = new Array();
        const campo = this.dataDeInpecaoApuracao.index !== 0 ? this.dataDeInpecaoApuracao.index === 1 ? 'dtinicio' : 'dtfinalizada' : '';
        if (campo !== '') {
            filtroInspecao.pesquisas = filtroInspecao.pesquisas.concat(this.getDatas(campo, this.dataInspecaoInicial, this.dataInspecaofinal));
        }
        let pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
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
        }
        else {
            if (this.statusDaInpecaoApuracao.index === 2) {
                pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
                pesquisa.comparacao = 'is not null';
                pesquisa.nome = 'dtfinalizada';
                filtroInspecao.pesquisas.push(pesquisa);
            }
        }
        this.base.present();
        if (consolidado) {
            this.is.getRelatorioFiltroObraConsolidado(filtroInspecao).subscribe(data => {
                this.base.dismiss();
                this.base.abrirPDF(data, 'declaração');
            }, error => {
                this.base.dismiss();
                console.log(error);
                this.base.mensagemErro('Erro ao gerar relatório ' + this.obra.nome
                    + this.base.tratarErro(error));
            });
        }
        else {
            this.is.getRelatorioFiltroObra(filtroInspecao).subscribe(data => {
                this.base.dismiss();
                this.base.abrirPDF(data, 'declaração');
            }, error => {
                this.base.dismiss();
                console.log(error);
                this.base.mensagemErro('Erro ao gerar relatório ' + this.obra.nome + ' '
                    + this.base.tratarErro(error));
            });
        }
    }
    //  aqui e relatorio de inspeção aquiu levar em consideração as inspeços
    getRelatorioDeInspecao() {
        const filtroInspecao = new _model_objetc_filtro_filtro__WEBPACK_IMPORTED_MODULE_4__["Filtro"]();
        filtroInspecao.pesquisas = new Array();
        // tslint:disable-next-line: ban-types
        const campo = (this.dataDeInpecaoApuracao.index !== 0) ? this.dataDeInpecaoApuracao.index === 1 ? 'dtinicio' : 'dtfinalizada' : '';
        if (campo !== '') {
            filtroInspecao.pesquisas = filtroInspecao.pesquisas.concat(this.getDatas(campo, this.dataInspecaoInicial, this.dataInspecaofinal));
        }
        let pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
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
        }
        else {
            if (this.statusDaInpecaoApuracao.index === 2) {
                pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
                pesquisa.comparacao = 'is not null';
                pesquisa.nome = 'dtfinalizada';
                filtroInspecao.pesquisas.push(pesquisa);
            }
        }
        this.base.present();
        return this.is.getRelatorioFiltro(filtroInspecao).subscribe(data => {
            this.base.dismiss();
            this.base.abrirPDF(data, 'declaração');
        }, error => {
            this.base.dismiss();
            console.log(error);
            this.base.mensagemErro('Erro ao gerar relatório ' + this.obra.nome + ' '
                + this.base.tratarErro(error));
        });
    }
    getDatas(campo, dataInicia, dataFinal) {
        const pesquisas = new Array();
        let pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
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
};
SelecaoRelatorioPage.ctorParameters = () => [
    { type: _model_base__WEBPACK_IMPORTED_MODULE_2__["Base"] },
    { type: _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_3__["ObraService"] },
    { type: _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_6__["InspecaoService"] }
];
SelecaoRelatorioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selecao-relatorio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./selecao-relatorio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./selecao-relatorio.page.scss */ "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_2__["Base"],
        _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_3__["ObraService"],
        _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_6__["InspecaoService"]])
], SelecaoRelatorioPage);



/***/ }),

/***/ "./src/app/service/sigobra/inspecao.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/sigobra/inspecao.service.ts ***!
  \*****************************************************/
/*! exports provided: InspecaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspecaoService", function() { return InspecaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autentificacao/autentificacao.service */ "./src/app/service/autentificacao/autentificacao.service.ts");




let InspecaoService = class InspecaoService {
    constructor(http, as) {
        this.http = http;
        this.as = as;
        this.url = '/inspecao';
    }
    salvar(inspecao) {
        return this.http.post(this.as.url + this.url, inspecao, this.as.getOptions());
    }
    editar(inspecao) {
        return this.http.put(this.as.url + this.url, inspecao, this.as.getOptions());
    }
    delete(inspecao) {
        return this.http.post(this.as.url + this.url + '/deletar', inspecao, this.as.getOptions());
    }
    pesquisar(value) {
        return this.http.post(this.as.url + this.url + '/pesquisar', value, this.as.getOptions());
    }
    pesquisa(value) {
        return this.http.post(this.as.url + this.url + '/pesquisa', value, this.as.getOptions());
    }
    get(id) {
        return this.http.post(this.as.url + this.url, id, this.as.getOptions());
    }
    edit(inspecao) {
        return this.http.post(this.as.url + this.url + '/editar', inspecao, this.as.getOptions());
    }
    editarativo(inspecao) {
        return this.http.post(this.as.url + this.url + '/editarativo', inspecao, this.as.getOptions());
    }
    byinspecaoitens(inspecao) {
        return this.http.post(this.as.url + this.url + '/byinspecaoitens', inspecao, this.as.getOptions());
    }
    aprova(inspecaoitem) {
        return this.http.post(this.as.url + this.url + '/aprova', inspecaoitem, this.as.getOptions());
    }
    reprova(inspecaoitem) {
        return this.http.post(this.as.url + this.url + '/reprova', inspecaoitem, this.as.getOptions());
    }
    raprova(inspecaoitem) {
        return this.http.post(this.as.url + this.url + '/raprova', inspecaoitem, this.as.getOptions());
    }
    filtra(filtro) {
        return this.http.post(this.as.url + this.url + '/filtrar', filtro, this.as.getOptions());
    }
    pesquisarUltimosItens() {
        return this.http.get(this.as.url + this.url + '/listarultimas', this.as.getOptions());
    }
    getRelatorioFiltroObra(filtro) {
        return this.http.post(this.as.url + this.url + '/getrelatoriofiltroobra', filtro, this.as.getOptionsPDF());
    }
    getRelatorioFiltroObraConsolidado(filtro) {
        return this.http.post(this.as.url + this.url + '/getrelatoriofiltroobraconsolidado', filtro, this.as.getOptionsPDF());
    }
    getRelatorioFiltro(filtro) {
        return this.http.post(this.as.url + this.url + '/getrelatoriofiltro', filtro, this.as.getOptionsPDF());
    }
    getRelatorioInspecao(inspecao) {
        return this.http.post(this.as.url + this.url + '/relatoriodeinpecao', inspecao, this.as.getOptionsPDF());
    }
};
InspecaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"] }
];
InspecaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])
], InspecaoService);



/***/ }),

/***/ "./src/app/service/sigobra/obra.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/sigobra/obra.service.ts ***!
  \*************************************************/
/*! exports provided: ObraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObraService", function() { return ObraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autentificacao/autentificacao.service */ "./src/app/service/autentificacao/autentificacao.service.ts");




let ObraService = class ObraService {
    constructor(http, as) {
        this.http = http;
        this.as = as;
        this.url = '/obras';
    }
    salvar(obras) {
        return this.http.post(this.as.url + this.url, obras, this.as.getOptions());
    }
    editar(obras) {
        return this.http.put(this.as.url + this.url, obras, this.as.getOptions());
    }
    delete(obras) {
        return this.http.post(this.as.url + this.url + '/deletar', obras, this.as.getOptions());
    }
    pesquisar(value) {
        return this.http.post(this.as.url + this.url + '/pesquisar', value, this.as.getOptions());
    }
    pesquisa(value) {
        return this.http.post(this.as.url + this.url + '/pesquisa', value, this.as.getOptions());
    }
    get(id) {
        return this.http.post(this.as.url + this.url, id, this.as.getOptions());
    }
    edit(obras) {
        return this.http.post(this.as.url + this.url + '/editar', obras, this.as.getOptions());
    }
    editarativo(obras) {
        return this.http.post(this.as.url + this.url + '/editarativo', obras, this.as.getOptions());
    }
    pesquisar1(value) {
        return this.http.post(this.as.url + this.url + '/pesquisar1', value, this.as.getOptions());
    }
    findTop10ComInspencoesAbertas() {
        return this.http.get(this.as.url + this.url + '/ultimasobrasabertas', this.as.getOptions());
    }
    filtra(filtro) {
        return this.http.post(this.as.url + this.url + '/filtrar', filtro, this.as.getOptions());
    }
    // relatorio por filtro
    getRelatorioFiltro(filtro) {
        return this.http.post(this.as.url + this.url + '/relatoriofiltro', filtro, this.as.getOptionsPDF());
    }
    // relatorio por obras
    getRelatorioObras(obras) {
        return this.http.post(this.as.url + this.url + '/relatorioobras', obras, this.as.getOptionsPDF());
    }
    // relatorio por obra
    getRelatorioObra(obra) {
        return this.http.post(this.as.url + this.url + '/relatorioobra', obra, this.as.getOptionsPDF());
    }
};
ObraService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"] }
];
ObraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])
], ObraService);



/***/ })

}]);
//# sourceMappingURL=pages-relatorios-selecao-relatorio-selecao-relatorio-module-es2015.js.map