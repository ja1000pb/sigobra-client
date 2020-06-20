(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inspecao-inspecao-realizar-inspecao-realizar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"#04ff0c\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Inspeção de Serviço </ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-input name=\"value\" color=\"#04ff0c\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button size=\"small\" shape=\"round\" color=\"dark\">\r\n        <ion-icon name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n    <form class=\"list-form auth-content\">\r\n      <ion-item>\r\n        <ion-label>Descrição: {{ inspecao.tipoInspecao.nome }}</ion-label>\r\n      </ion-item>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label>Obra: {{ inspecao.obras.nome }}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label>Local: {{ inspecao.local }}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label>Data de Abertura: {{ inspecao.dtinicio }}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label>Data de Fechamento: {{ inspecao.dtfinalizada }}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"secondary\">\r\n              <ion-label>Item de Inspeção</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item color=\"secondary\">\r\n              <ion-label>Método de Verificação</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item color=\"secondary\">\r\n              <ion-label>Tolerância</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item color=\"secondary\">\r\n              <ion-label>Responsável pela Inspeção</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item color=\"secondary\">\r\n              <ion-label>Status</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item-sliding *ngFor=\"let inspecaoitem of inspecaoitens\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label>{{ inspecaoitem.itemtipoinspecao.nome }}</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label>{{ inspecaoitem.itemtipoinspecao.metodoverificacao }}</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label>{{ inspecaoitem.itemtipoinspecao.tolerancia }}</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label>{{ inspecaoitem.ultimoStatus?.pessoa?.nome || \"Item não inspecionado\" }}</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-item [ngStyle]=\"{'background-color': getColor(inspecaoitem)}\">\r\n                <ion-label>{{ inspecaoitem.ultimoStatus?.statusiteminspecao?.nome || \"Item não inspecionado\" }}\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label>Selecionar Status</ion-label>\r\n                <ionic-selectable item-content name=\"statuss\" [(items)]=\"statusItem\"\r\n                  [(ngModel)]=\"inspecaoitem.novoStatus.statusiteminspecao\" closeButtonText=\"Cancelar\"\r\n                  itemValueField=\"id\" itemTextField=\"nome\" canSearch=\"true\" [isConfirmButtonEnabled]=\"true\"\r\n                  (onSelect)=\"selecionarStatus($event)\">\r\n                </ionic-selectable>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">\r\n                  Descrição do Problema\r\n                </ion-label>\r\n                <ion-input [(ngModel)]=\"inspecaoitem.novoStatus.descricaoProblema\" name=\"descricao\" type=\"text\" color=\"light\">\r\n                </ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button shape=\"round\" color=\"secondary\" icon-right tappable *ngIf=\"inicial(inspecaoitem)\"\r\n                (click)=\"inspencionar(inspecaoitem)\">\r\n                <ion-icon name=\"checkmark\"></ion-icon>\r\n                Inspecionado Aprovado\r\n              </ion-button>\r\n              <ion-button shape=\"round\" color=\"secondary\" icon-right tappable *ngIf=\"aberto(inspecaoitem)\"\r\n                (click)=\"inspencionarReprovar(inspecaoitem)\">\r\n                <ion-icon name=\"close\"></ion-icon>\r\n                Inspecionado Reprovado\r\n              </ion-button>\r\n              <ion-button shape=\"round\" color=\"secondary\" icon-right tappable *ngIf=\"reprovadoAprovado(inspecaoitem)\"\r\n                (click)=\"ReinspencionarAprovar(inspecaoitem)\">\r\n                <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n                Reinspecionado Aprovado\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item-sliding>\r\n      </ion-grid>\r\n\r\n\r\n\r\n    </form>\r\n  </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/model/enums/status-item.enum.ts":
/*!*************************************************!*\
  !*** ./src/app/model/enums/status-item.enum.ts ***!
  \*************************************************/
/*! exports provided: StatusItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusItem", function() { return StatusItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var StatusItem;
(function (StatusItem) {
    StatusItem[StatusItem["aberto"] = 0] = "aberto";
    StatusItem[StatusItem["inspecionado"] = 1] = "inspecionado";
    StatusItem[StatusItem["inspecionadoReprovado"] = 2] = "inspecionadoReprovado";
    StatusItem[StatusItem["reinspencionadoAprovado"] = 3] = "reinspencionadoAprovado";
})(StatusItem || (StatusItem = {}));


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
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: linear-gradient(\n    135deg,\n    var(--ion-color-primary),\n    #ffffff\n  );\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\nion-col {\n  border: 1px solid #120a8f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zcGVjYW8vaW5zcGVjYW8tcmVhbGl6YXIvQzpcXFVzZXJzXFxyb2JlclxcT25lRHJpdmVcXGlvbmljXFxzaWdvYnJhLXVpL3NyY1xcYXBwXFxwYWdlc1xcaW5zcGVjYW9cXGluc3BlY2FvLXJlYWxpemFyXFxpbnNwZWNhby1yZWFsaXphci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luc3BlY2FvL2luc3BlY2FvLXJlYWxpemFyL2luc3BlY2FvLXJlYWxpemFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUNFOzs7O0dBQUE7QUNJTjs7QURHSTtFQUNFLGdCQUFBO0VBQ0EsaURBQUE7QUNETjs7QURLTTtFQUNFLGdCQUFBO0FDSFI7O0FEUUU7RUFDRSxZQUFBO0FDTEo7O0FEUUU7RUFDRSx5QkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zcGVjYW8vaW5zcGVjYW8tcmVhbGl6YXIvaW5zcGVjYW8tcmVhbGl6YXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICA6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIDEzNWRlZyxcclxuICAgICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXHJcbiAgICAgICAgI2ZmZmZmZlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAmLm5vLXJhZGl1cyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYm90YW8tY29yIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIGlvbi1jb2wge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzEyMGE4ZjtcclxuICB9IiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMzVkZWcsXG4gICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxuICAgICNmZmZmZmZcbiAgKTtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jYXJkLm5vLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ib3Rhby1jb3Ige1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1jb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTIwYThmO1xufSJdfQ== */");

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
/* harmony import */ var src_app_model_enums_status_item_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/model/enums/status-item.enum */ "./src/app/model/enums/status-item.enum.ts");
/* harmony import */ var _service_sigobra_item_inspesionado_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../service/sigobra/item-inspesionado.service */ "./src/app/service/sigobra/item-inspesionado.service.ts");














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
        /*
        if (inspecaoitem === undefined || inspecaoitem === null) {
          return true;
        } else {
          try {
            return (inspecaoitem.statusInspecao === undefined ||
              inspecaoitem.statusInspecao === null ||
              inspecaoitem.statusInspecao.length === 0 || (
                 ((inspecaoitem.statusInspecao[inspecaoitem.statusInspecao.length].statusiteminspecao !== null &&
                   inspecaoitem.statusInspecao[inspecaoitem.statusInspecao.length].statusiteminspecao !== undefined) &&
              (inspecaoitem.statusInspecao[inspecaoitem.statusInspecao.length].statusiteminspecao.tipoStatus === TipoStatus.aberto ||
                inspecaoitem.statusInspecao[inspecaoitem.statusInspecao.length].statusiteminspecao.tipoStatus.toString() === 'aberto'))
              )) ;
          } catch (error) {
            return true;
          }
        } */
        return inspecaoitem.statusItem === null || src_app_model_enums_status_item_enum__WEBPACK_IMPORTED_MODULE_12__["StatusItem"][inspecaoitem.statusItem.toString()] === src_app_model_enums_status_item_enum__WEBPACK_IMPORTED_MODULE_12__["StatusItem"].aberto;
    }
    aberto(inspecaoitem) {
        /*
       if (inspecaoitem === undefined || inspecaoitem === null) {
         return true;
       } else {
         try {
           return ((inspecaoitem.statusInspecao !== undefined &&
             inspecaoitem.statusInspecao !== null) && (
             inspecaoitem.statusInspecao.length === 0 ||
             (inspecaoitem.statusInspecao[inspecaoitem.statusInspecao.length].statusiteminspecao.tipoStatus in
             [TipoStatus.aberto, TipoStatus.reprovado] ||
             inspecaoitem.statusInspecao[inspecaoitem.statusInspecao.length].statusiteminspecao.tipoStatus.toString() in
             ['aberto', 'reprovado'] )
             ));
         } catch (error) {
           return true;
         }
         
       } */
        console.log(inspecaoitem);
        console.log(src_app_model_enums_status_item_enum__WEBPACK_IMPORTED_MODULE_12__["StatusItem"][inspecaoitem.statusItem.toString()]);
        return inspecaoitem.statusItem === null ||
            src_app_model_enums_status_item_enum__WEBPACK_IMPORTED_MODULE_12__["StatusItem"][inspecaoitem.statusItem.toString()] === src_app_model_enums_status_item_enum__WEBPACK_IMPORTED_MODULE_12__["StatusItem"].aberto ||
            src_app_model_enums_status_item_enum__WEBPACK_IMPORTED_MODULE_12__["StatusItem"][inspecaoitem.statusItem.toString()] === src_app_model_enums_status_item_enum__WEBPACK_IMPORTED_MODULE_12__["StatusItem"].inspecionadoReprovado;
    }
    reprovadoAprovado(inspecaoitem) {
        /**
       if (inspecaoitem === undefined || inspecaoitem === null) {
         return false;
       } else {
         try {
           return (inspecaoitem.statusInspecao !== undefined &&
             inspecaoitem.statusInspecao !== null &&
             inspecaoitem.statusInspecao.length !== 0 &&
             inspecaoitem.statusInspecao[inspecaoitem.statusInspecao.length].statusiteminspecao.tipoStatus in
             [TipoStatus.reprovado, 'reprovado']);
         } catch (error) {
           return true;
         }
         
       } */
        console.log(inspecaoitem);
        return src_app_model_enums_status_item_enum__WEBPACK_IMPORTED_MODULE_12__["StatusItem"][inspecaoitem.statusItem.toString()] === src_app_model_enums_status_item_enum__WEBPACK_IMPORTED_MODULE_12__["StatusItem"].inspecionadoReprovado;
    }
    inspencionar(itemInspencao) {
        /* if ((itemInspencao.ultimoStatus.statusiteminspecao.tipoStatus in [TipoStatus.aberto, TipoStatus.finalizado, 'aberto', 'finalizado'])) {
           this.base.mensagemErro('Selecione um status de inspenção que tenha com tipo aberto ou finalizado');
           return;
         } */
        itemInspencao.novoStatus.pessoa = this.statusServe.as.token.usuario.pessoa;
        itemInspencao.novoStatus.id = null;
        itemInspencao.statusItem = src_app_model_enums_status_item_enum__WEBPACK_IMPORTED_MODULE_12__["StatusItem"].inspecionado;
        this.iis.salvar(itemInspencao, this.inspecao.id).subscribe(data => {
            itemInspencao = data;
            if (itemInspencao.statusInspecao === undefined || itemInspencao.statusInspecao === null) {
                itemInspencao.statusInspecao = new Array();
            }
            itemInspencao.statusInspecao.push(itemInspencao.novoStatus);
        }, error => {
            this.base.mensagemErro('Erro ao salvar isnpenção :' + this.base.tratarErro(error));
        });
    }
    inspencionarReprovar(itemInspencao) {
        /*if (!(itemInspencao.ultimoStatus.statusiteminspecao.tipoStatus === TipoStatus.reprovado ||
          itemInspencao.ultimoStatus.statusiteminspecao.tipoStatus.toString() === 'reprovado')) {
          this.base.mensagemErro('Selecione um status de inspenção que tenha como tipo reprovado');
          return;
        } */
        itemInspencao.novoStatus.pessoa = this.statusServe.as.token.usuario.pessoa;
        itemInspencao.novoStatus.id = null;
        itemInspencao.statusItem = src_app_model_enums_status_item_enum__WEBPACK_IMPORTED_MODULE_12__["StatusItem"].inspecionadoReprovado;
        this.iis.salvar(itemInspencao, this.inspecao.id).subscribe(data => {
            itemInspencao = data;
            if (itemInspencao.statusInspecao === undefined || itemInspencao.statusInspecao === null) {
                itemInspencao.statusInspecao = new Array();
            }
            //itemInspencao.statusInspecao.push(itemInspencao.novoStatus);
        }, error => {
            this.base.mensagemErro('Erro ao salvar isnpenção :' + this.base.tratarErro(error));
        });
    }
    ReinspencionarAprovar(itemInspencao) {
        /* if ((itemInspencao.ultimoStatus.statusiteminspecao.tipoStatus in [TipoStatus.finalizado, 'finalizado'])) {
           this.base.mensagemErro('Selecione um status de inspenção que tenha com tipo finalizado');
           return;
         } */
        itemInspencao.novoStatus.id = null;
        itemInspencao.novoStatus.pessoa = this.statusServe.as.token.usuario.pessoa;
        itemInspencao.statusItem = src_app_model_enums_status_item_enum__WEBPACK_IMPORTED_MODULE_12__["StatusItem"].reinspencionadoAprovado;
        let guarda = itemInspencao.novoStatus;
        this.iis.salvar(itemInspencao, this.inspecao.id).subscribe(data => {
            itemInspencao = data;
            if (itemInspencao.statusInspecao === undefined || itemInspencao.statusInspecao === null) {
                itemInspencao.statusInspecao = new Array();
            }
            // itemInspencao.statusInspecao.push(itemInspencao.novoStatus);
        }, error => {
            this.base.mensagemErro('Erro ao salvar isnpenção :' + this.base.tratarErro(error));
        });
    }
    getColor(inspecaoitem) {
        try {
            if (inspecaoitem.ultimoStatus !== null && inspecaoitem.ultimoStatus !== undefined &&
                inspecaoitem.ultimoStatus.statusiteminspecao !== null && inspecaoitem.ultimoStatus.statusiteminspecao !== undefined &&
                inspecaoitem.ultimoStatus.statusiteminspecao.cor !== undefined && inspecaoitem.ultimoStatus.statusiteminspecao.cor !== null) {
                return inspecaoitem.ultimoStatus.statusiteminspecao.cor;
            }
            else {
                return 'transparent';
            }
        }
        catch (error) {
            return 'transparent';
        }
    }
    selecionarobra(event) { }
    selecionartipoinspecao(event) { }
    selecionarStatus(event) {
        // itemInspencao.ultimoStatus.statusiteminspecao = null;
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
    { type: _service_sigobra_item_inspesionado_service__WEBPACK_IMPORTED_MODULE_13__["ItemInspesionadoService"] },
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
        _service_sigobra_item_inspesionado_service__WEBPACK_IMPORTED_MODULE_13__["ItemInspesionadoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], InspecaoRealizarPage);



/***/ }),

/***/ "./src/app/service/sigobra/item-inspesionado.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/service/sigobra/item-inspesionado.service.ts ***!
  \**************************************************************/
/*! exports provided: ItemInspesionadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemInspesionadoService", function() { return ItemInspesionadoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../autentificacao/autentificacao.service */ "./src/app/service/autentificacao/autentificacao.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ItemInspesionadoService = class ItemInspesionadoService {
    constructor(http, as) {
        this.http = http;
        this.as = as;
        this.url = '/iteminspecionado';
    }
    salvar(item, idInspecao) {
        return this.http.post(this.as.url + this.url + '/' + idInspecao.toString(), item, this.as.getOptions());
    }
};
ItemInspesionadoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_1__["AutentificacaoService"] }
];
ItemInspesionadoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_1__["AutentificacaoService"]])
], ItemInspesionadoService);



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