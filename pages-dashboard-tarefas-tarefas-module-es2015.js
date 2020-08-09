(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-tarefas-tarefas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expandable/expandable.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expandable/expandable.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\n  <ng-content></ng-content>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/tarefas/tarefas.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/tarefas/tarefas.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"login auth-page\">\r\n  <div>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button color=\"light\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        <ion-text color=\"light\">\r\n          <ion-text color=\"light\" class=\"fw700\">Dashboard Tarefas</ion-text>\r\n        </ion-text>\r\n      </ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-item no-padding class=\"animated fadeInUp\">\r\n          <ion-input [(ngModel)]=\"value\" name=\"value\" color=\"light\" type=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"pesquisar()\">\r\n          <ion-icon name=\"search\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"habilitarFiltro()\">\r\n          <ion-icon name=\"list\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </div>\r\n  <div *ngIf=\"filtro\">\r\n    <ion-toolbar color=\"#04ff0c\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-label position=\"floating\">Obras</ion-label>\r\n              <ionic-selectable item-content name=\"sobra\" [(ngModel)]=\"obraPesquisa\" [(items)]=\"obrasPesquisa\"\r\n                closeButtonTex=\"Cancelar\" itemValueField=\"id\" itemTextField=\"nome\" canSearch=\"true\"\r\n                [canClear]=\"true\" clearButtonText=\"Limpar\"></ionic-selectable>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-label position=\"floating\">Local</ion-label>\r\n              <ion-input [(ngModel)]=\"filtros.local\" name=\"local\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-label position=\"floating\">Tipo de Inspeção</ion-label>\r\n              <ionic-selectable item-content name=\"stipo\" [(ngModel)]=\"tipoInspecaoPesquisa\" [(items)]=\"tipoinspecoes\"\r\n                closeButtonTex=\"Cancelar\" itemValueField=\"id\" itemTextField=\"nome\" canSearch=\"true\"\r\n                [canClear]=\"true\" clearButtonText=\"Limpar\"></ionic-selectable>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-label position=\"floating\">Status inspeção</ion-label>\r\n              <ionic-selectable item-content name=\"statsInspecao\" [(ngModel)]=\"tipoFechamento\"\r\n                [(items)]=\"opcoesTipoFechamento\" closeButtonTex=\"Cancelar\" itemValueField=\"index\" itemTextField=\"nome\"\r\n                canSearch=\"true\"></ionic-selectable>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-label position=\"floating\">Data inicio</ion-label>\r\n              <ion-input [(ngModel)]=\"filtros.dtAbertura\" name=\"databetura\" placeholder=\"00/00/0000\"\r\n                [brmasker]=\"{mask: '00/00/0000', type:'num', len:10}\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col >\r\n            <ion-item no-padding class=\"animated fadeInUp\">\r\n              <ion-label position=\"floating\">Data fechamento</ion-label>\r\n              <ion-input [(ngModel)]=\"filtros.dtFechamento\" name=\"dtfechamente\" placeholder=\"00/00/0000\"\r\n                [brmasker]=\"{mask: '00/00/0000', type:'num', len:10}\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-button slot=\"end\" size=\"small\" shape=\"round\" color=\"primary\" (click)=\"filtar()\" style=\"zoom: 1.5;\">\r\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n      </ion-button>\r\n    </ion-toolbar>\r\n  </div>\r\n  <div class=\"auth-content\">\r\n    <form class=\"list-form auth-content\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"primary\">\r\n              <ion-label>Obra</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item color=\"primary\">\r\n              <ion-label>cidade</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item color=\"primary\">\r\n              <ion-label>data abertura</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item color=\"primary\">\r\n              <ion-label>Data fechamento</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n\r\n\r\n\r\n      </ion-grid>\r\n      <ion-item-sliding *ngFor=\"let obra of obrasRelatorio; let i = index\" class=\"animated fadeInUp\">\r\n\r\n        <ion-card (click)=\"selecionarIndex(obra,i)\" icon-right tappable>\r\n          <ion-card-header icon-right tappable>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label>{{obra.nome}}</ion-label>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label>{{obra.cidade}}</ion-label>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label>{{obra.dtinicio}}</ion-label>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label>{{obra.dtfinalizada}}</ion-label>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n            <ion-icon [name]=\"getNomeIco(i)\"></ion-icon>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <app-expandable  [expanded]=\"i == indexSelecionado\"\r\n              [expandHeight]=\"getTamanhoExpacao(obra)\">\r\n              <ion-item-sliding *ngFor=\"let inspecao of obra.inspecoes\"\r\n                class=\"animated fadeInUp\">\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col sm class=\"my-col-nome-tipo-inspecao\">\r\n\r\n                      <ion-label>{{inspecao.local}} </ion-label>\r\n\r\n                    </ion-col>\r\n                    <ion-col sm class=\"my-col-status\">\r\n\r\n                      <ion-label>{{inspecao.tipoInspecao.nome }}\r\n                      </ion-label>\r\n\r\n                    </ion-col>\r\n                    <ion-col sm class=\"my-col-usuario\">\r\n\r\n                      <ion-label>{{inspecao.dtinicio }}</ion-label>\r\n\r\n                    </ion-col>\r\n                    <ion-col sm class=\"my-col-data-hora\">\r\n\r\n                      <ion-label>{{inspecao?.dtfinalizada || \"\"}}</ion-label>\r\n\r\n                    </ion-col>\r\n                    <ion-col sm class=\"my-col-bt-realizar-inspecao\">\r\n\r\n                      <ion-button shape=\"round\" color=\"primary\" icon-right tappable (click)=\"realizar(inspecao)\">\r\n                        <ion-icon name=\"checkbox\"></ion-icon>\r\n                        Realizar Inspeção\r\n                      </ion-button>\r\n                    </ion-col>\r\n\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-item-sliding>\r\n            </app-expandable>\r\n          </ion-card-content>\r\n\r\n        </ion-card>\r\n      </ion-item-sliding>\r\n    </form>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/components/expandable/expandable.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBhbmRhYmxlL0M6XFxVc2Vyc1xccm9iZXJcXE9uZURyaXZlXFxpb25pY1xcc2lnb2JyYS11aS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZXhwYW5kYWJsZVxcZXhwYW5kYWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9leHBhbmRhYmxlL2V4cGFuZGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuZC13cmFwcGVyIHtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jb2xsYXBzZWQge1xyXG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxufVxyXG4iLCIuZXhwYW5kLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHMgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNvbGxhcHNlZCB7XG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/expandable/expandable.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.ts ***!
  \***************************************************************/
/*! exports provided: ExpandableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableComponent", function() { return ExpandableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExpandableComponent = class ExpandableComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "150px";
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
    }
};
ExpandableComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('expandWrapper', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ExpandableComponent.prototype, "expandWrapper", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ExpandableComponent.prototype, "expanded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ExpandableComponent.prototype, "expandHeight", void 0);
ExpandableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expandable',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expandable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expandable/expandable.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expandable.component.scss */ "./src/app/components/expandable/expandable.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], ExpandableComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/tarefas/tarefas-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/dashboard/tarefas/tarefas-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: TarefasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarefasPageRoutingModule", function() { return TarefasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tarefas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tarefas.page */ "./src/app/pages/dashboard/tarefas/tarefas.page.ts");




const routes = [
    {
        path: '',
        component: _tarefas_page__WEBPACK_IMPORTED_MODULE_3__["TarefasPage"]
    }
];
let TarefasPageRoutingModule = class TarefasPageRoutingModule {
};
TarefasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TarefasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/dashboard/tarefas/tarefas.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/dashboard/tarefas/tarefas.module.ts ***!
  \***********************************************************/
/*! exports provided: TarefasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarefasPageModule", function() { return TarefasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../components/expandable/expandable.component */ "./src/app/components/expandable/expandable.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tarefas_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tarefas-routing.module */ "./src/app/pages/dashboard/tarefas/tarefas-routing.module.ts");
/* harmony import */ var _tarefas_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tarefas.page */ "./src/app/pages/dashboard/tarefas/tarefas.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");










let TarefasPageModule = class TarefasPageModule {
};
TarefasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _tarefas_routing_module__WEBPACK_IMPORTED_MODULE_6__["TarefasPageRoutingModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_9__["BrMaskerModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]
        ],
        declarations: [_tarefas_page__WEBPACK_IMPORTED_MODULE_7__["TarefasPage"], _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_1__["ExpandableComponent"]]
    })
], TarefasPageModule);



/***/ }),

/***/ "./src/app/pages/dashboard/tarefas/tarefas.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/dashboard/tarefas/tarefas.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\nion-col {\n  border: 0px solid #120a8f;\n}\n\nion-col.my-thin-col {\n  flex: 0 0 4px;\n  padding: 0;\n  margin-right: 10px;\n  width: 165px;\n}\n\nion-col.my-col-icon {\n  margin: auto;\n  width: 40px;\n}\n\n/*\n\nion-col[_ngcontent-lum-c4] {\n    border: 1px solid #120a8f;\n}\n  */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RhcmVmYXMvQzpcXFVzZXJzXFxyb2JlclxcT25lRHJpdmVcXGlvbmljXFxzaWdvYnJhLXVpL3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFx0YXJlZmFzXFx0YXJlZmFzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RhcmVmYXMvdGFyZWZhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0k7RUFDRSw0Q0FBQTtBQ0FOOztBREdJO0VBQ0UsZ0JBQUE7RUFDQSxpREFBQTtBQ0ROOztBREtNO0VBQ0UsZ0JBQUE7QUNIUjs7QURRRTtFQUNFLFlBQUE7QUNMSjs7QURRRTtFQUNFLHlCQUFBO0FDTEo7O0FEUUU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRFFFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNMSjs7QURPRTs7Ozs7R0FBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC90YXJlZmFzL3RhcmVmYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICA6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAmLm5vLXJhZGl1cyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYm90YW8tY29yIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIGlvbi1jb2wge1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgIzEyMGE4ZjtcclxuICB9XHJcblxyXG4gIGlvbi1jb2wubXktdGhpbi1jb2wge1xyXG4gICAgZmxleDogMCAwIDRweDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gICAgd2lkdGg6IDE2NXB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWNvbC5teS1jb2wtaWNvbiB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNDBweDtcclxuICB9XHJcbiAgLypcclxuXHJcbmlvbi1jb2xbX25nY29udGVudC1sdW0tYzRdIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjBhOGY7XHJcbn1cclxuICAqLyIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZC5uby1yYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYm90YW8tY29yIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tY29sIHtcbiAgYm9yZGVyOiAwcHggc29saWQgIzEyMGE4Zjtcbn1cblxuaW9uLWNvbC5teS10aGluLWNvbCB7XG4gIGZsZXg6IDAgMCA0cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDE2NXB4O1xufVxuXG5pb24tY29sLm15LWNvbC1pY29uIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNDBweDtcbn1cblxuLypcblxuaW9uLWNvbFtfbmdjb250ZW50LWx1bS1jNF0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjBhOGY7XG59XG4gICovIl19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/tarefas/tarefas.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/tarefas/tarefas.page.ts ***!
  \*********************************************************/
/*! exports provided: TarefasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarefasPage", function() { return TarefasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/base */ "./src/app/model/base.ts");
/* harmony import */ var _model_objetc_filtro_filtro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/objetc/filtro/filtro */ "./src/app/model/objetc/filtro/filtro.ts");
/* harmony import */ var _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/objetc/filtro/pesquisa */ "./src/app/model/objetc/filtro/pesquisa.ts");
/* harmony import */ var _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../service/sigobra/inspecao.service */ "./src/app/service/sigobra/inspecao.service.ts");
/* harmony import */ var _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../service/sigobra/tipoinspecao.service */ "./src/app/service/sigobra/tipoinspecao.service.ts");
/* harmony import */ var _service_sigobra_statusitensinspecao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../service/sigobra/statusitensinspecao.service */ "./src/app/service/sigobra/statusitensinspecao.service.ts");
/* harmony import */ var _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../service/sigobra/obra.service */ "./src/app/service/sigobra/obra.service.ts");
/* harmony import */ var _service_sigobra_item_inspesionado_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/sigobra/item-inspesionado.service */ "./src/app/service/sigobra/item-inspesionado.service.ts");
/* harmony import */ var src_app_model_enums_join_type_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/model/enums/join-type.enum */ "./src/app/model/enums/join-type.enum.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");













let TarefasPage = class TarefasPage {
    constructor(base, is, tis, siis, os, itensinspesionados, router, plataforma) {
        this.base = base;
        this.is = is;
        this.tis = tis;
        this.siis = siis;
        this.os = os;
        this.itensinspesionados = itensinspesionados;
        this.router = router;
        this.plataforma = plataforma;
        this.filtro = false;
        this.value = '';
        // filtros
        this.filtros = {
            local: '',
            dtAbertura: '',
            dtFechamento: '',
        };
        this.tipoFechamento = { index: 0, nome: 'Não filtar' };
        this.opcoesTipoFechamento = [
            { index: 0, nome: 'Não filtar' },
            { index: 1, nome: 'Abertas' },
            { index: 2, nome: 'Fechadas' },
        ];
        // end filtros
        this.indexSelecionado = -1;
        this.multiplicador = 150;
        this.plataforma.ready().then((readsourcey) => {
            this.multiplicador = (this.plataforma.width() > 600) ? 150 : 200;
        });
    }
    ngOnInit() {
        this.carregarUltimasObrasAbertas();
        this.carregarobras();
        this.carregartipoinsp();
        this.carregarstatus();
    }
    pesquisar() {
        this.carregarUltimasObrasAbertas();
    }
    realizar(inspencao) {
        this.is.inspecao = inspencao;
        this.router.navigate(['inspecao-realizar']);
    }
    carregarUltimasObrasAbertas() {
        this.base.present();
        this.os.findTop10ComInspencoesAbertas().subscribe(data => {
            this.base.dismiss();
            this.obrasRelatorio = data;
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha ao consultar  Inspecao Itens' + this.base.tratarErro(error));
        });
    }
    carregarstatus() {
        this.siis.pesquisar(" ").subscribe(data => {
            this.statusitens = data;
        }, error => {
        });
    }
    carregartipoinsp() {
        this.tis.pesquisar(" ").subscribe(data => {
            this.tipoinspecoes = data;
        }, error => {
        });
    }
    carregarobras() {
        this.os.pesquisar(" ").subscribe(data => {
            this.obrasPesquisa = data;
        }, error => {
        });
    }
    habilitarFiltro() {
        this.filtro = !this.filtro;
    }
    filtar() {
        const filtro = new _model_objetc_filtro_filtro__WEBPACK_IMPORTED_MODULE_4__["Filtro"]();
        filtro.nativo = true;
        filtro.pesquisas = new Array();
        filtro.sql = 'select obr.* from obras obr inner join inspecao ins on ins.obras_id = obr.id where obr.id > 0';
        let pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
        if (this.filtros.local !== undefined && this.filtros.local !== null && this.filtros.local !== '') {
            pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
            pesquisa.comparacao = 'like';
            pesquisa.nome = ' and  ins.local';
            pesquisa.valor = '\'%' + (this.filtros.local) + '%\'';
            filtro.pesquisas.push(pesquisa);
        }
        if (this.obraPesquisa !== undefined && this.obraPesquisa !== null) {
            pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
            pesquisa.comparacao = '=';
            pesquisa.nome = ' and obr.id';
            pesquisa.valor = this.obraPesquisa.id.toString();
            filtro.pesquisas.push(pesquisa);
        }
        if (this.tipoInspecaoPesquisa !== undefined && this.tipoInspecaoPesquisa !== null) {
            pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
            pesquisa.comparacao = '=';
            pesquisa.nome = ' and ins.tipo_inspecao_id';
            pesquisa.valor = this.tipoInspecaoPesquisa.id.toString();
            filtro.pesquisas.push(pesquisa);
        }
        switch (this.tipoFechamento.index) {
            case 1: {
                pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
                pesquisa.comparacao = 'is null';
                pesquisa.nome = ' and ins.dtfinalizada';
                pesquisa.valor = ' ';
                filtro.pesquisas.push(pesquisa);
                break;
            }
            case 2: {
                pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
                pesquisa.comparacao = 'is not null';
                pesquisa.nome = ' and ins.dtfinalizada';
                filtro.pesquisas.push(pesquisa);
                break;
            }
        }
        if (this.filtros.dtAbertura !== undefined && this.filtros.dtAbertura !== null && this.filtros.dtAbertura !== '') {
            pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
            pesquisa.comparacao = '>=';
            pesquisa.nome = ' and dtinicio';
            pesquisa.valor = this.filtros.dtAbertura;
            filtro.pesquisas.push(pesquisa);
        }
        if (this.filtros.dtFechamento !== undefined && this.filtros.dtFechamento !== null && this.filtros.dtFechamento !== '') {
            pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
            pesquisa.comparacao = '>=';
            pesquisa.nome = ' and dtFechamento';
            pesquisa.valor = this.filtros.dtFechamento;
            filtro.pesquisas.push(pesquisa);
        }
        this.indexSelecionado = -1;
        filtro.groupBy = ' group by obr.id';
        this.base.present();
        this.os.filtra(filtro).subscribe(data => {
            this.base.dismiss();
            this.obrasRelatorio = data;
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha ao filtrar registros ' + this.base.tratarErro(error));
        });
    }
    getNome(inspecaoitem) {
        try {
            return inspecaoitem.statusInspecao.statusiteminspecao.nome;
        }
        catch (error) {
            return 'Item nao inspencisonado';
        }
    }
    selecionarIndex(obra, value) {
        if (obra.inspecoes === undefined || obra.inspecoes === null || obra.inspecoes.length <= 0) {
            const filtro = new _model_objetc_filtro_filtro__WEBPACK_IMPORTED_MODULE_4__["Filtro"]();
            filtro.pesquisas = new Array();
            let pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
            pesquisa.comparacao = '=';
            pesquisa.nome = 'id';
            pesquisa.tabela = 'obras';
            pesquisa.tipe = src_app_model_enums_join_type_enum__WEBPACK_IMPORTED_MODULE_11__["JoinType"].INNER;
            pesquisa.valor = obra.id.toString();
            filtro.pesquisas.push(pesquisa);
            this.base.present();
            this.is.filtra(filtro).subscribe(data => {
                this.base.dismiss();
                obra.inspecoes = data;
            }, error => {
                this.base.dismiss();
                this.base.mensagemErro('Falha ao consultar inspecões ' + this.base.tratarErro(error));
            });
        }
        if (this.indexSelecionado === value) {
            this.indexSelecionado = -1;
        }
        else {
            this.indexSelecionado = value;
        }
    }
    getTamanhoExpacao(obra) {
        try {
            return (obra.inspecoes.length * this.multiplicador).toString() + 'px';
        }
        catch (error) {
            return (1 * this.multiplicador).toString() + 'px';
        }
    }
    getNomeIco(value) {
        if (this.indexSelecionado === value) {
            return 'arrow-up-outline';
        }
        else {
            return 'arrow-down-outline';
        }
    }
};
TarefasPage.ctorParameters = () => [
    { type: _model_base__WEBPACK_IMPORTED_MODULE_3__["Base"] },
    { type: _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_6__["InspecaoService"] },
    { type: _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_7__["TipoinspecaoService"] },
    { type: _service_sigobra_statusitensinspecao_service__WEBPACK_IMPORTED_MODULE_8__["StatusitensinspecaoService"] },
    { type: _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_9__["ObraService"] },
    { type: _service_sigobra_item_inspesionado_service__WEBPACK_IMPORTED_MODULE_10__["ItemInspesionadoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Platform"] }
];
TarefasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tarefas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tarefas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/tarefas/tarefas.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tarefas.page.scss */ "./src/app/pages/dashboard/tarefas/tarefas.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_3__["Base"], _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_6__["InspecaoService"],
        _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_7__["TipoinspecaoService"],
        _service_sigobra_statusitensinspecao_service__WEBPACK_IMPORTED_MODULE_8__["StatusitensinspecaoService"],
        _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_9__["ObraService"],
        _service_sigobra_item_inspesionado_service__WEBPACK_IMPORTED_MODULE_10__["ItemInspesionadoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Platform"]])
], TarefasPage);



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-tarefas-tarefas-module-es2015.js.map