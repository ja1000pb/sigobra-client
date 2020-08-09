(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inspecao-inspecao-realizar-inspecao-realizar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\" text-wrap>Inspeção de Serviço </ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <div padding-horizontal text-center>\r\n      <div class=\"logo\"></div>\r\n      <h3 no-margin>\r\n        <ion-text color=\"light\" class=\"fw700\">\r\n          <ion-text color=\"light\"> &nbsp;Descrição: {{ inspecao.tipoInspecao.nome }}</ion-text>\r\n        </ion-text>\r\n      </h3>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n  <div class=\"auth-content\">\r\n    <form class=\"list-form auth-content\">\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm>\r\n            <ion-item color=\"medium\">\r\n              <ion-label>Obra: {{ inspecao.obras.nome }}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item color=\"medium\" size=\"12\" size-sm>\r\n              <ion-label>Local: {{ inspecao.local }}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"medium\" size=\"12\" size-sm>\r\n              <ion-label>Data de Abertura: {{ inspecao.dtinicio }}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item color=\"medium\" size=\"12\" size-sm>\r\n              <ion-label>Data de Fechamento: {{ inspecao.dtfinalizada }}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"tamanho-item-ispecao\" size=\"12\" size-sm>\r\n            <ion-item color=\"primary\" size=\"12\" size-sm>\r\n              <ion-label>Item de Inspeção</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col class=\"tamanho-item-ispecao\" size=\"12\" size-sm>\r\n            <ion-item color=\"primary\" size=\"12\" size-sm>\r\n              <ion-label>Método de Verificação</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col class=\"tamanho-item-ispecao\" size=\"12\" size-sm>\r\n            <ion-item color=\"primary\" size=\"12\" size-sm>\r\n              <ion-label>Tolerância</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col class=\"tamanho-item-ispecao\" size=\"12\" size-sm> \r\n            <ion-item color=\"primary\" size=\"12\" size-sm>\r\n              <ion-label>Responsável pela Inspeção</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col class=\"tamanho-item-ispecao\" size=\"12\" size-sm>\r\n            <ion-item color=\"primary\" size=\"12\" size-sm>\r\n              <ion-label>Status</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item-sliding *ngFor=\"let inspecaoitem of inspecaoitens\" class=\"animated fadeInUp\">\r\n          <ion-row>\r\n            <ion-col class=\"tamanho-item-ispecao\" size=\"12\" size-sm>\r\n              <ion-item>\r\n                <ion-label>{{ inspecaoitem.itemtipoinspecao.nome }}</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col class=\"tamanho-item-ispecao\" size=\"12\" size-sm>\r\n              <ion-item >\r\n                <ion-label>{{ inspecaoitem.itemtipoinspecao.metodoverificacao }}</ion-label>\r\n                <ion-button shape=\"round\" color=\"primary\"(click)=\"msgExpmv(inspecaoitem)\">\r\n                    <ion-icon name=\"clipboard\" color=\"tertiary\"></ion-icon>\r\n                </ion-button>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col class=\"tamanho-item-ispecao\" size=\"12\" size-sm>\r\n              <ion-item>\r\n                <ion-label>{{ inspecaoitem.itemtipoinspecao.tolerancia }}</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col class=\"tamanho-item-ispecao\" size=\"12\" size-sm>\r\n              <ion-item>\r\n                <ion-label>{{ inspecaoitem.statusInspecao?.pessoa?.nome || \"Item não inspecionado\" }}</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col v size=\"12\" size-sm>\r\n              <ion-item [ngStyle]=\"{'background-color': getColor(inspecaoitem)}\">\r\n                <ion-label>{{ inspecaoitem.statusInspecao?.statusiteminspecao?.nome || \"Item não inspecionado\" }}\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-sm>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">\r\n                  Descrição do Problema\r\n                </ion-label>\r\n                <ion-input *ngIf=\"reprovadoAprovado(inspecaoitem)\"\r\n                  [(ngModel)]=\"inspecaoitem.statusInspecao.descricaoProblema\" name=\"descricao\" type=\"text\">\r\n                </ion-input>\r\n                <div>\r\n                  <ion-button shape=\"round\" color=\"primary\" icon-right tappable *ngIf=\"reprovadoAprovado(inspecaoitem)\"\r\n                    (click)=\"inspencionarReprovar(inspecaoitem)\">\r\n                    <ion-icon name=\"checkmark-circle\" color=\"warning\"></ion-icon>\r\n                    Salvar Descrição\r\n                  </ion-button>\r\n                  <ion-button shape=\"round\" color=\"primary\"\r\n                    *ngIf=\"reprovadoAprovado(inspecaoitem) && temMsg(inspecaoitem)\"\r\n                    (click)=\"msgExpandida(inspecaoitem)\">\r\n                    <ion-icon name=\"clipboard\" color=\"tertiary\"></ion-icon>\r\n                  </ion-button>\r\n                </div>               \r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm>\r\n              <ion-button shape=\"round\" color=\"primary\" icon-right tappable *ngIf=\"inicial(inspecaoitem)\"\r\n                (click)=\"inspencionar(inspecaoitem)\">\r\n                <ion-icon name=\"checkmark\" color=\"success\"></ion-icon>\r\n                Inspecionado Aprovado\r\n              </ion-button>\r\n              <ion-button shape=\"round\" color=\"primary\" icon-right tappable *ngIf=\"aberto(inspecaoitem)\"\r\n                (click)=\"inspencionarReprovar(inspecaoitem)\">\r\n                <ion-icon name=\"close\" color=\"danger\"></ion-icon>\r\n                Inspecionado Reprovado\r\n              </ion-button>\r\n              <br *ngIf=\" inicial(inspecaoitem) && aberto(inspecaoitem)\">\r\n              <ion-button shape=\"round\" color=\"primary\" icon-right tappable *ngIf=\"reprovadoAprovado(inspecaoitem)\"\r\n                (click)=\"ReinspencionarAprovar(inspecaoitem)\">\r\n                <ion-icon name=\"checkmark-circle\" color=\"warning\"></ion-icon>\r\n                Reinspecionado Aprovado\r\n              </ion-button>\r\n              <ion-button shape=\"round\" color=\"primary\" icon-right tappable *ngIf=\"inspecionado(inspecaoitem)\"\r\n                (click)=\"reabrir(inspecaoitem)\">\r\n                <ion-icon name=\"checkmark-circle\" color=\"warning\"></ion-icon>\r\n                Reabrir\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item-divider>\r\n          </ion-item-divider>\r\n        </ion-item-sliding>\r\n      </ion-grid>\r\n\r\n    </form>\r\n  </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/model/enums/tipo-status.enum.ts":
/*!*************************************************!*\
  !*** ./src/app/model/enums/tipo-status.enum.ts ***!
  \*************************************************/
/*! exports provided: TipoStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoStatus", function() { return TipoStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TipoStatus;
(function (TipoStatus) {
    TipoStatus[TipoStatus["aberto"] = 0] = "aberto";
    TipoStatus[TipoStatus["inspecionadaAprovado"] = 1] = "inspecionadaAprovado";
    TipoStatus[TipoStatus["inspecionadaReprovado"] = 2] = "inspecionadaReprovado";
    TipoStatus[TipoStatus["reinspecionadaAprovado"] = 3] = "reinspecionadaAprovado";
})(TipoStatus || (TipoStatus = {}));


/***/ }),

/***/ "./src/app/model/objetc/status-item-inspecionado.ts":
/*!**********************************************************!*\
  !*** ./src/app/model/objetc/status-item-inspecionado.ts ***!
  \**********************************************************/
/*! exports provided: StatusItemInspecionado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusItemInspecionado", function() { return StatusItemInspecionado; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _statusiteminspecao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statusiteminspecao */ "./src/app/model/objetc/statusiteminspecao.ts");


class StatusItemInspecionado {
    constructor() {
        this.statusiteminspecao = new _statusiteminspecao__WEBPACK_IMPORTED_MODULE_1__["StatusItemInspecao"]();
    }
}


/***/ }),

/***/ "./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: InspecaoRealizarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspecaoRealizarPageRoutingModule", function() { return InspecaoRealizarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inspecao_realizar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspecao-realizar.page */ "./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar.page.ts");




const routes = [
    {
        path: '',
        component: _inspecao_realizar_page__WEBPACK_IMPORTED_MODULE_3__["InspecaoRealizarPage"]
    }
];
let InspecaoRealizarPageRoutingModule = class InspecaoRealizarPageRoutingModule {
};
InspecaoRealizarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InspecaoRealizarPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar.module.ts ***!
  \******************************************************************************/
/*! exports provided: InspecaoRealizarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspecaoRealizarPageModule", function() { return InspecaoRealizarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _inspecao_realizar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspecao-realizar-routing.module */ "./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar-routing.module.ts");
/* harmony import */ var _inspecao_realizar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspecao-realizar.page */ "./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");








let InspecaoRealizarPageModule = class InspecaoRealizarPageModule {
};
InspecaoRealizarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
            _inspecao_realizar_routing_module__WEBPACK_IMPORTED_MODULE_5__["InspecaoRealizarPageRoutingModule"]
        ],
        declarations: [_inspecao_realizar_page__WEBPACK_IMPORTED_MODULE_6__["InspecaoRealizarPage"]]
    })
], InspecaoRealizarPageModule);



/***/ }),

/***/ "./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\nion-col {\n  border: 1px solid #120a8f;\n}\n\n.tamanho-item-ispecao {\n  min-width: 244px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zcGVjYW8vaW5zcGVjYW8tcmVhbGl6YXIvQzpcXFVzZXJzXFxyb2JlclxcT25lRHJpdmVcXGlvbmljXFxzaWdvYnJhLXVpL3NyY1xcYXBwXFxwYWdlc1xcaW5zcGVjYW9cXGluc3BlY2FvLXJlYWxpemFyXFxpbnNwZWNhby1yZWFsaXphci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luc3BlY2FvL2luc3BlY2FvLXJlYWxpemFyL2luc3BlY2FvLXJlYWxpemFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUNFLDRDQUFBO0FDQU47O0FER0k7RUFDRSxnQkFBQTtFQUNBLGlEQUFBO0FDRE47O0FES007RUFDRSxnQkFBQTtBQ0hSOztBRFFFO0VBQ0UsWUFBQTtBQ0xKOztBRFFFO0VBQ0UseUJBQUE7QUNMSjs7QURRQTtFQUNFLGdCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnNwZWNhby9pbnNwZWNhby1yZWFsaXphci9pbnNwZWNhby1yZWFsaXphci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgJi5uby1yYWRpdXMge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJvdGFvLWNvciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICBpb24tY29sIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjBhOGY7XHJcbiAgfVxyXG5cclxuLnRhbWFuaG8taXRlbS1pc3BlY2FvIHtcclxuICBtaW4td2lkdGg6IDI0NHB4O1xyXG59XHJcblxyXG4gIFxyXG5cclxuIiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jYXJkLm5vLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ib3Rhby1jb3Ige1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1jb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTIwYThmO1xufVxuXG4udGFtYW5oby1pdGVtLWlzcGVjYW8ge1xuICBtaW4td2lkdGg6IDI0NHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar.page.ts ***!
  \****************************************************************************/
/*! exports provided: InspecaoRealizarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspecaoRealizarPage", function() { return InspecaoRealizarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_sigobra_status_item_inspecionado_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../service/sigobra/status-item-inspecionado.service */ "./src/app/service/sigobra/status-item-inspecionado.service.ts");
/* harmony import */ var _service_sigobra_statusitensinspecao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../service/sigobra/statusitensinspecao.service */ "./src/app/service/sigobra/statusitensinspecao.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/base */ "./src/app/model/base.ts");
/* harmony import */ var _model_objetc_inspecao__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../model/objetc/inspecao */ "./src/app/model/objetc/inspecao.ts");
/* harmony import */ var _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../service/sigobra/inspecao.service */ "./src/app/service/sigobra/inspecao.service.ts");
/* harmony import */ var _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../service/sigobra/obra.service */ "./src/app/service/sigobra/obra.service.ts");
/* harmony import */ var _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../service/sigobra/tipoinspecao.service */ "./src/app/service/sigobra/tipoinspecao.service.ts");
/* harmony import */ var _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../service/sigobra/usuario.service */ "./src/app/service/sigobra/usuario.service.ts");
/* harmony import */ var _model_objetc_usuario__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../model/objetc/usuario */ "./src/app/model/objetc/usuario.ts");
/* harmony import */ var _model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../model/enums/tipo-status.enum */ "./src/app/model/enums/tipo-status.enum.ts");
/* harmony import */ var _model_objetc_status_item_inspecionado__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../model/objetc/status-item-inspecionado */ "./src/app/model/objetc/status-item-inspecionado.ts");
/* harmony import */ var _service_sigobra_item_inspesionado_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../service/sigobra/item-inspesionado.service */ "./src/app/service/sigobra/item-inspesionado.service.ts");















let InspecaoRealizarPage = class InspecaoRealizarPage {
    constructor(base, us, is, tis, os, siis, statusServe, iis, router) {
        this.base = base;
        this.us = us;
        this.is = is;
        this.tis = tis;
        this.os = os;
        this.siis = siis;
        this.statusServe = statusServe;
        this.iis = iis;
        this.router = router;
        this.inspecao = new _model_objetc_inspecao__WEBPACK_IMPORTED_MODULE_6__["Inspecao"]();
        this.usuario = new _model_objetc_usuario__WEBPACK_IMPORTED_MODULE_11__["Usuario"];
        this.statusBotao = _model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"];
    }
    ngOnInit() {
        if ((this.is.inspecao !== undefined) && (this.is.inspecao !== null)) {
            this.inspecao = this.is.inspecao;
        }
        this.carregarinspecaoitens();
        this.getuser();
        this.carregarStatus();
    }
    carregarinspecaoitens() {
        /*  if (this.inspecao.inspecaoItemTipoInspecao !== undefined &&
            this.inspecao.inspecaoItemTipoInspecao !== null &&
            this.inspecao.inspecaoItemTipoInspecao.length > 0 ) {
              this.inspecaoitens = this.inspecao.inspecaoItemTipoInspecao;
              return;
          } */
        this.base.present();
        this.is.byinspecaoitens(this.inspecao).subscribe(data => {
            this.base.dismiss();
            this.inspecaoitens = data;
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha ao cosultar  Inspecao Itens' + this.base.tratarErro(error));
        });
    }
    carregarStatus() {
        return this.siis.pesquisar(' ').subscribe(data => {
            this.statusItem = data;
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha  ao listar  status ' + this.base.tratarErro(error));
        });
    }
    get editando() {
        return Boolean(this.inspecao.id);
    }
    salvar() {
        this.salvando();
    }
    salvando() {
        this.base.present();
        this.is.salvar(this.inspecao).subscribe(data => {
            this.is.inspecao = new _model_objetc_inspecao__WEBPACK_IMPORTED_MODULE_6__["Inspecao"]();
            this.base.dismiss();
            this.router.navigate(['inspecoes']);
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha ao salvar inspecao :' + this.base.tratarErro(error));
        });
    }
    getClass(nome) {
        return true;
    }
    getuser() {
        return this.us.as.token.usuario;
    }
    inicial(inspecaoitem) {
        return (inspecaoitem.statusInspecao === null || inspecaoitem.statusInspecao === undefined) ||
            (inspecaoitem.statusInspecao.statusiteminspecao === null || inspecaoitem.statusInspecao.statusiteminspecao === undefined) ||
            (inspecaoitem.statusInspecao.statusiteminspecao.tipoStatus === null ||
                inspecaoitem.statusInspecao.statusiteminspecao.tipoStatus === undefined) ||
            _model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"][inspecaoitem.statusInspecao.statusiteminspecao.tipoStatus.toString()] === _model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"].aberto;
    }
    aberto(inspecaoitem) {
        return (inspecaoitem.statusInspecao === null || inspecaoitem.statusInspecao === undefined) ||
            (inspecaoitem.statusInspecao.statusiteminspecao === null || inspecaoitem.statusInspecao.statusiteminspecao === undefined) ||
            (inspecaoitem.statusInspecao.statusiteminspecao.tipoStatus === null ||
                inspecaoitem.statusInspecao.statusiteminspecao.tipoStatus === undefined) ||
            _model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"][inspecaoitem.statusInspecao.statusiteminspecao.tipoStatus.toString()] === _model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"].aberto ||
            _model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"][inspecaoitem.statusInspecao.statusiteminspecao.tipoStatus.toString()] === _model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"].inspecionadaReprovado;
    }
    inspecionado(inspecaoitem) {
        try {
            return (_model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"][inspecaoitem.statusInspecao.statusiteminspecao.tipoStatus.toString()]
                === _model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"].inspecionadaAprovado ||
                _model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"][inspecaoitem.statusInspecao.statusiteminspecao.tipoStatus.toString()]
                    === _model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"].reinspecionadaAprovado);
        }
        catch (error) {
            return false;
        }
    }
    reprovadoAprovado(inspecaoitem) {
        try {
            return (_model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"][inspecaoitem.statusInspecao.statusiteminspecao.tipoStatus.toString()]
                === _model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"].inspecionadaReprovado);
        }
        catch (error) {
            return false;
        }
    }
    inspencionar(itemInspencao) {
        /* if ((itemInspencao.statusInspecao.statusiteminspecao.tipoStatus in [TipoStatus.aberto, TipoStatus.finalizado, 'aberto', 'finalizado'])) {
           this.base.mensagemErro('Selecione um status de inspenção que tenha com tipo aberto ou finalizado');
           return;
         } */
        if (itemInspencao.statusInspecao === null || itemInspencao.statusInspecao === undefined) {
            itemInspencao.statusInspecao = new _model_objetc_status_item_inspecionado__WEBPACK_IMPORTED_MODULE_13__["StatusItemInspecionado"]();
        }
        itemInspencao.statusInspecao.pessoa = this.statusServe.as.token.usuario.pessoa;
        itemInspencao.statusInspecao.statusiteminspecao = this.buscarStatusPorTipo(_model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"].inspecionadaAprovado);
        this.base.present();
        this.statusServe.salvar(itemInspencao.statusInspecao, itemInspencao.id).subscribe(data => {
            itemInspencao.statusInspecao = data;
            this.base.dismiss();
            this.base.menssagemSucesso('Inspenção registrada com sucesso');
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Erro ao salvar inspenção :' + this.base.tratarErro(error));
        });
    }
    inspencionarReprovar(itemInspencao) {
        /*if (!(itemInspencao.statusInspecao.statusiteminspecao.tipoStatus === TipoStatus.reprovado ||
          itemInspencao.statusInspecao.statusiteminspecao.tipoStatus.toString() === 'reprovado')) {
          this.base.mensagemErro('Selecione um status de inspenção que tenha como tipo reprovado');
          return;
        } */
        if (itemInspencao.statusInspecao === null || itemInspencao.statusInspecao === undefined) {
            itemInspencao.statusInspecao = new _model_objetc_status_item_inspecionado__WEBPACK_IMPORTED_MODULE_13__["StatusItemInspecionado"]();
        }
        itemInspencao.statusInspecao.pessoa = this.statusServe.as.token.usuario.pessoa;
        itemInspencao.statusInspecao.statusiteminspecao = this.buscarStatusPorTipo(_model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"].inspecionadaReprovado);
        this.base.present();
        this.statusServe.salvar(itemInspencao.statusInspecao, itemInspencao.id).subscribe(data => {
            itemInspencao.statusInspecao = data;
            this.base.dismiss();
            this.base.menssagemSucesso('Inspenção registrada com sucesso');
            //itemInspencao.statusInspecao.push(itemInspencao.novoStatus);
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Erro ao salvar inspenção :' + this.base.tratarErro(error));
        });
    }
    ReinspencionarAprovar(itemInspencao) {
        /* if ((itemInspencao.statusInspecao.statusiteminspecao.tipoStatus in [TipoStatus.finalizado, 'finalizado'])) {
           this.base.mensagemErro('Selecione um status de inspenção que tenha com tipo finalizado');
           return;
         } */
        if (itemInspencao.statusInspecao === null || itemInspencao.statusInspecao === undefined) {
            itemInspencao.statusInspecao = new _model_objetc_status_item_inspecionado__WEBPACK_IMPORTED_MODULE_13__["StatusItemInspecionado"]();
        }
        itemInspencao.statusInspecao.pessoa = this.statusServe.as.token.usuario.pessoa;
        itemInspencao.statusInspecao.statusiteminspecao = this.buscarStatusPorTipo(_model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"].reinspecionadaAprovado);
        this.base.present();
        this.statusServe.salvar(itemInspencao.statusInspecao, itemInspencao.id).subscribe(data => {
            itemInspencao.statusInspecao = data;
            this.base.dismiss();
            this.base.menssagemSucesso('Inspenção registrada com sucesso');
            // itemInspencao.statusInspecao.push(itemInspencao.novoStatus);
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Erro ao salvar inspenção :' + this.base.tratarErro(error));
        });
    }
    reabrir(itemInspencao) {
        /* if ((itemInspencao.statusInspecao.statusiteminspecao.tipoStatus in [TipoStatus.finalizado, 'finalizado'])) {
           this.base.mensagemErro('Selecione um status de inspenção que tenha com tipo finalizado');
           return;
         } */
        if (itemInspencao.statusInspecao === null || itemInspencao.statusInspecao === undefined) {
            itemInspencao.statusInspecao = new _model_objetc_status_item_inspecionado__WEBPACK_IMPORTED_MODULE_13__["StatusItemInspecionado"]();
        }
        itemInspencao.statusInspecao.pessoa = this.statusServe.as.token.usuario.pessoa;
        itemInspencao.statusInspecao.statusiteminspecao = this.buscarStatusPorTipo(_model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"].aberto);
        this.base.present();
        this.statusServe.reabrir(itemInspencao.statusInspecao, itemInspencao.id).subscribe(data => {
            itemInspencao.statusInspecao = data;
            this.base.dismiss();
            this.base.menssagemSucesso('Inspenção reaberta com sucesso');
            // itemInspencao.statusInspecao.push(itemInspencao.novoStatus);
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Erro ao reabrir inspenção :' + this.base.tratarErro(error));
        });
    }
    getColor(inspecaoitem) {
        try {
            if (inspecaoitem.statusInspecao !== null && inspecaoitem.statusInspecao !== undefined &&
                inspecaoitem.statusInspecao.statusiteminspecao !== null && inspecaoitem.statusInspecao.statusiteminspecao !== undefined &&
                inspecaoitem.statusInspecao.statusiteminspecao.cor !== undefined && inspecaoitem.statusInspecao.statusiteminspecao.cor !== null) {
                return this.getColorStatus(inspecaoitem.statusInspecao.statusiteminspecao);
            }
            else {
                return this.getColorByStatus(_model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"].aberto);
            }
        }
        catch (error) {
            return 'transparent';
        }
    }
    getColorStatus(status) {
        return status.cor;
    }
    getColorByStatus(tipostatus) {
        let cor = '';
        this.statusItem.forEach(element => {
            if (_model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"][element.tipoStatus.toString()] === tipostatus) {
                cor = element.cor;
            }
        });
        if (cor !== '') {
            return cor;
        }
        else {
            return 'transparent';
        }
    }
    buscarStatusPorTipo(tipostatus) {
        let statu = this.statusItem[0];
        this.statusItem.forEach(element => {
            if (_model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_12__["TipoStatus"][element.tipoStatus.toString()] === tipostatus) {
                return statu = element;
            }
        });
        return statu;
    }
    msgExpandida(inspecaoitem) {
        this.base.mensagemAviso(inspecaoitem.statusInspecao.descricaoProblema, 'Descrição');
    }
    msgExpmv(inspecaoitem) {
        this.base.mensagemAviso(inspecaoitem.itemtipoinspecao.metodoverificacao, 'Método de Verificação');
    }
    temMsg(inspecaoitem) {
        try {
            return inspecaoitem.statusInspecao.descricaoProblema !== undefined &&
                inspecaoitem.statusInspecao.descricaoProblema !== null &&
                inspecaoitem.statusInspecao.descricaoProblema !== '';
        }
        catch (error) {
            return false;
        }
    }
    selecionarobra(event) { }
    selecionartipoinspecao(event) { }
    selecionarStatus(event) {
        // itemInspencao.statusInspecao.statusiteminspecao = null;
    }
};
InspecaoRealizarPage.ctorParameters = () => [
    { type: _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"] },
    { type: _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioService"] },
    { type: _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_7__["InspecaoService"] },
    { type: _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_9__["TipoinspecaoService"] },
    { type: _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_8__["ObraService"] },
    { type: _service_sigobra_statusitensinspecao_service__WEBPACK_IMPORTED_MODULE_2__["StatusitensinspecaoService"] },
    { type: _service_sigobra_status_item_inspecionado_service__WEBPACK_IMPORTED_MODULE_1__["StatusItemInspecionadoService"] },
    { type: _service_sigobra_item_inspesionado_service__WEBPACK_IMPORTED_MODULE_14__["ItemInspesionadoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
InspecaoRealizarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inspecao-realizar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inspecao-realizar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inspecao-realizar.page.scss */ "./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_5__["Base"], _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioService"], _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_7__["InspecaoService"], _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_9__["TipoinspecaoService"],
        _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_8__["ObraService"],
        _service_sigobra_statusitensinspecao_service__WEBPACK_IMPORTED_MODULE_2__["StatusitensinspecaoService"],
        _service_sigobra_status_item_inspecionado_service__WEBPACK_IMPORTED_MODULE_1__["StatusItemInspecionadoService"],
        _service_sigobra_item_inspesionado_service__WEBPACK_IMPORTED_MODULE_14__["ItemInspesionadoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], InspecaoRealizarPage);



/***/ }),

/***/ "./src/app/service/sigobra/status-item-inspecionado.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/service/sigobra/status-item-inspecionado.service.ts ***!
  \*********************************************************************/
/*! exports provided: StatusItemInspecionadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusItemInspecionadoService", function() { return StatusItemInspecionadoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autentificacao/autentificacao.service */ "./src/app/service/autentificacao/autentificacao.service.ts");




let StatusItemInspecionadoService = class StatusItemInspecionadoService {
    constructor(http, as) {
        this.http = http;
        this.as = as;
        this.url = '/statusiteminspecionado';
    }
    salvar(status, idItem) {
        return this.http.post(this.as.url + this.url + '/' + idItem.toString(), status, this.as.getOptions());
    }
    reabrir(status, idItem) {
        return this.http.post(this.as.url + this.url + '/reabri/' + idItem.toString(), status, this.as.getOptions());
    }
};
StatusItemInspecionadoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"] }
];
StatusItemInspecionadoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])
], StatusItemInspecionadoService);



/***/ })

}]);
//# sourceMappingURL=pages-inspecao-inspecao-realizar-inspecao-realizar-module-es2015.js.map