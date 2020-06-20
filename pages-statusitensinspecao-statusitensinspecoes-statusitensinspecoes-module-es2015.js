(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-statusitensinspecao-statusitensinspecoes-statusitensinspecoes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.page.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.page.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"#04ff0c\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Status</ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-input name=\"value\" color=\"#04ff0c\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button size=\"small\" shape=\"round\" color=\"dark\" >\r\n        <ion-icon name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">      \r\n        <ion-item-sliding *ngFor=\"let status of statusitens\" class=\"animated fadeInUp\" color=\"secondary\">\r\n          <ion-item >\r\n            <div>                            \r\n              <ion-label color=\"light\">{{ status.nome }}</ion-label> <br />                   \r\n                <ion-button  shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"editar(status)\">\r\n                  <ion-icon name=\"create\"></ion-icon>\r\n                  Editar\r\n                </ion-button>\r\n                <ion-button  shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"excluir(status)\" >\r\n                  <ion-icon name=\"trash\"></ion-icon>\r\n                  Excluir\r\n                </ion-button>\r\n            </div>\r\n          </ion-item>\r\n        </ion-item-sliding>   \r\n    <div margin-top aling=\"center\" class=\"fixa-bottom\">\r\n      <ion-button color=\"secondary\" size=\"medium\" expand=\"full\" shape=\"round\" icon-right tappable (click)=\"inserir()\">\r\n        Inserir\r\n        <ion-icon name=\"arrow-dropright-circle\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: StatusitensinspecoesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusitensinspecoesPageRoutingModule", function() { return StatusitensinspecoesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _statusitensinspecoes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statusitensinspecoes.page */ "./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.page.ts");




const routes = [
    {
        path: '',
        component: _statusitensinspecoes_page__WEBPACK_IMPORTED_MODULE_3__["StatusitensinspecoesPage"]
    }
];
let StatusitensinspecoesPageRoutingModule = class StatusitensinspecoesPageRoutingModule {
};
StatusitensinspecoesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StatusitensinspecoesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: StatusitensinspecoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusitensinspecoesPageModule", function() { return StatusitensinspecoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _statusitensinspecoes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statusitensinspecoes-routing.module */ "./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes-routing.module.ts");
/* harmony import */ var _statusitensinspecoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statusitensinspecoes.page */ "./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.page.ts");







let StatusitensinspecoesPageModule = class StatusitensinspecoesPageModule {
};
StatusitensinspecoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _statusitensinspecoes_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatusitensinspecoesPageRoutingModule"]
        ],
        declarations: [_statusitensinspecoes_page__WEBPACK_IMPORTED_MODULE_6__["StatusitensinspecoesPage"]]
    })
], StatusitensinspecoesPageModule);



/***/ }),

/***/ "./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.page.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: linear-gradient(\n    135deg,\n    var(--ion-color-primary),\n    #ffffff\n  );\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhdHVzaXRlbnNpbnNwZWNhby9zdGF0dXNpdGVuc2luc3BlY29lcy9DOlxcVXNlcnNcXHJvYmVyXFxPbmVEcml2ZVxcaW9uaWNcXHNpZ29icmEtdWkvc3JjXFxhcHBcXHBhZ2VzXFxzdGF0dXNpdGVuc2luc3BlY2FvXFxzdGF0dXNpdGVuc2luc3BlY29lc1xcc3RhdHVzaXRlbnNpbnNwZWNvZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdGF0dXNpdGVuc2luc3BlY2FvL3N0YXR1c2l0ZW5zaW5zcGVjb2VzL3N0YXR1c2l0ZW5zaW5zcGVjb2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUNFOzs7O0dBQUE7QUNJTjs7QURHSTtFQUNFLGdCQUFBO0VBQ0EsaURBQUE7QUNETjs7QURLTTtFQUNFLGdCQUFBO0FDSFI7O0FEUUU7RUFDRSxZQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGF0dXNpdGVuc2luc3BlY2FvL3N0YXR1c2l0ZW5zaW5zcGVjb2VzL3N0YXR1c2l0ZW5zaW5zcGVjb2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAxMzVkZWcsXHJcbiAgICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxyXG4gICAgICAgICNmZmZmZmZcclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgJi5uby1yYWRpdXMge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJvdGFvLWNvciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfSIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTM1ZGVnLFxuICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSxcbiAgICAjZmZmZmZmXG4gICk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZC5uby1yYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYm90YW8tY29yIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: StatusitensinspecoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusitensinspecoesPage", function() { return StatusitensinspecoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/base */ "./src/app/model/base.ts");
/* harmony import */ var _model_objetc_statusiteminspecao__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/objetc/statusiteminspecao */ "./src/app/model/objetc/statusiteminspecao.ts");
/* harmony import */ var _service_sigobra_statusitensinspecao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../service/sigobra/statusitensinspecao.service */ "./src/app/service/sigobra/statusitensinspecao.service.ts");






let StatusitensinspecoesPage = class StatusitensinspecoesPage {
    constructor(base, siis, router) {
        this.base = base;
        this.siis = siis;
        this.router = router;
    }
    ngOnInit() {
        this.carregarstatus(" ");
    }
    excluir(status) {
        this.base.Confirma('Deseja excluir essa status', this.removerativo.bind(this), status);
    }
    remover(status) {
        this.base.present();
        return this.siis.delete(status).subscribe(data => {
            this.base.dismiss();
            this.base.menssagemSucesso('Status Excluido');
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha  ao Excluir  status ' + status.id + this.base.tratarErro(error));
        });
    }
    editar(status) {
        this.siis.status = status;
        this.router.navigate(['statusitensinspecao-inserir']);
    }
    carregarstatus(value) {
        return this.siis.pesquisar(value).subscribe(data => {
            this.statusitens = data;
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha  ao listar  status ' + this.base.tratarErro(error));
        });
    }
    inserir() {
        this.siis.status = new _model_objetc_statusiteminspecao__WEBPACK_IMPORTED_MODULE_4__["StatusItemInspecao"];
        this.router.navigate(['statusitensinspecao-inserir']);
    }
    removerativo(status) {
        this.status = status;
        this.base.present();
        if ((this.status.ativo !== null) && (this.status.ativo !== undefined)) {
            this.status.ativo = false;
        }
        return this.siis.editarativo(this.status).subscribe(data => {
            this.base.dismiss();
            this.router.navigate(['statusitensinspecoes']);
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha  ao Excluir  status ' + this.status.id + this.status.ativo
                + this.base.tratarErro(error));
        });
    }
};
StatusitensinspecoesPage.ctorParameters = () => [
    { type: _model_base__WEBPACK_IMPORTED_MODULE_3__["Base"] },
    { type: _service_sigobra_statusitensinspecao_service__WEBPACK_IMPORTED_MODULE_5__["StatusitensinspecaoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StatusitensinspecoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statusitensinspecoes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./statusitensinspecoes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./statusitensinspecoes.page.scss */ "./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_3__["Base"], _service_sigobra_statusitensinspecao_service__WEBPACK_IMPORTED_MODULE_5__["StatusitensinspecaoService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], StatusitensinspecoesPage);



/***/ })

}]);
//# sourceMappingURL=pages-statusitensinspecao-statusitensinspecoes-statusitensinspecoes-module-es2015.js.map