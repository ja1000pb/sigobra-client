(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-empresa-empresas-empresas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresas/empresas.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresas/empresas.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"#04ff0c\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Empresas</ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-input name=\"value\" color=\"#04ff0c\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button size=\"small\" shape=\"round\" color=\"dark\" >\r\n        <ion-icon name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">      \r\n        <ion-item-sliding *ngFor=\"let empresa of empresas\" class=\"animated fadeInUp\" color=\"secondary\">\r\n          <ion-item >\r\n            <div>                            \r\n              <ion-label color=\"light\">{{ empresa.nome }}</ion-label><br />                   \r\n                <ion-button  shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"editar(empresa)\">\r\n                  <ion-icon name=\"create\"></ion-icon>\r\n                  Editar\r\n                </ion-button>\r\n                <ion-button  shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"excluir(empresa)\" >\r\n                  <ion-icon name=\"trash\"></ion-icon>\r\n                  Excluir\r\n                </ion-button>\r\n            </div>\r\n          </ion-item>\r\n        </ion-item-sliding>             \r\n    <div margin-top aling=\"center\" class=\"fixa-bottom\">\r\n      <ion-button color=\"secondary\" size=\"medium\" expand=\"full\" shape=\"round\" icon-right tappable (click)=\"inserir()\">\r\n        Inserir\r\n        <ion-icon name=\"arrow-dropright-circle\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/empresa/empresas/empresas-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/empresa/empresas/empresas-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EmpresasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresasPageRoutingModule", function() { return EmpresasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _empresas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empresas.page */ "./src/app/pages/empresa/empresas/empresas.page.ts");




const routes = [
    {
        path: '',
        component: _empresas_page__WEBPACK_IMPORTED_MODULE_3__["EmpresasPage"]
    }
];
let EmpresasPageRoutingModule = class EmpresasPageRoutingModule {
};
EmpresasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmpresasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/empresa/empresas/empresas.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/empresa/empresas/empresas.module.ts ***!
  \***********************************************************/
/*! exports provided: EmpresasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresasPageModule", function() { return EmpresasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _empresas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./empresas-routing.module */ "./src/app/pages/empresa/empresas/empresas-routing.module.ts");
/* harmony import */ var _empresas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empresas.page */ "./src/app/pages/empresa/empresas/empresas.page.ts");







let EmpresasPageModule = class EmpresasPageModule {
};
EmpresasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _empresas_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmpresasPageRoutingModule"]
        ],
        declarations: [_empresas_page__WEBPACK_IMPORTED_MODULE_6__["EmpresasPage"]]
    })
], EmpresasPageModule);



/***/ }),

/***/ "./src/app/pages/empresa/empresas/empresas.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/empresa/empresas/empresas.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: linear-gradient(\n    135deg,\n    var(--ion-color-primary),\n    #ffffff\n  );\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW1wcmVzYS9lbXByZXNhcy9DOlxcVXNlcnNcXHJvYmVyXFxPbmVEcml2ZVxcaW9uaWNcXHNpZ29icmEtdWkvc3JjXFxhcHBcXHBhZ2VzXFxlbXByZXNhXFxlbXByZXNhc1xcZW1wcmVzYXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lbXByZXNhL2VtcHJlc2FzL2VtcHJlc2FzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUNFOzs7O0dBQUE7QUNJTjs7QURHSTtFQUNFLGdCQUFBO0VBQ0EsaURBQUE7QUNETjs7QURLTTtFQUNFLGdCQUFBO0FDSFI7O0FEUUU7RUFDRSxZQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lbXByZXNhL2VtcHJlc2FzL2VtcHJlc2FzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAxMzVkZWcsXHJcbiAgICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxyXG4gICAgICAgICNmZmZmZmZcclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgJi5uby1yYWRpdXMge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJvdGFvLWNvciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfSIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTM1ZGVnLFxuICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSxcbiAgICAjZmZmZmZmXG4gICk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZC5uby1yYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYm90YW8tY29yIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/empresa/empresas/empresas.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/empresa/empresas/empresas.page.ts ***!
  \*********************************************************/
/*! exports provided: EmpresasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresasPage", function() { return EmpresasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_objetc_empresa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../model/objetc/empresa */ "./src/app/model/objetc/empresa.ts");
/* harmony import */ var _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../service/sigobra/empresa.service */ "./src/app/service/sigobra/empresa.service.ts");
/* harmony import */ var _model_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/base */ "./src/app/model/base.ts");






let EmpresasPage = class EmpresasPage {
    constructor(base, es, router) {
        this.base = base;
        this.es = es;
        this.router = router;
    }
    ngOnInit() {
        this.carregarEnpresas(" ");
    }
    excluir(empresa) {
        this.base.Confirma('Deseja excluir essa empresa', this.removerativo.bind(this), empresa);
    }
    remover(empresa) {
        this.base.present();
        return this.es.delete(empresa).subscribe(data => {
            this.base.dismiss();
            this.base.menssagemSucesso('Empresa Excluida');
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha  ao Excluir  empresa ' + empresa.id + this.base.tratarErro(error));
        });
    }
    editar(empresa) {
        this.es.empresa = empresa;
        this.router.navigate(['empresa-inserir']);
    }
    carregarEnpresas(value) {
        return this.es.pesquisar(value).subscribe(data => {
            this.empresas = data;
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha  ao listar  empresa ' + this.base.tratarErro(error));
        });
    }
    inserir() {
        this.es.empresa = new _model_objetc_empresa__WEBPACK_IMPORTED_MODULE_3__["Empresa"];
        this.router.navigate(['empresa-inserir']);
    }
    removerativo(empresa) {
        this.empresa = empresa;
        this.base.present();
        if ((this.empresa.ativo !== null) && (this.empresa.ativo !== undefined)) {
            this.empresa.ativo = false;
        }
        return this.es.editarativo(this.empresa).subscribe(data => {
            this.base.dismiss();
            this.router.navigate(['empresas']);
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha  ao Excluir  empresa ' + this.empresa.id + this.empresa.ativo
                + this.base.tratarErro(error));
        });
    }
};
EmpresasPage.ctorParameters = () => [
    { type: _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"] },
    { type: _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_4__["EmpresaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EmpresasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-empresas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./empresas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresas/empresas.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./empresas.page.scss */ "./src/app/pages/empresa/empresas/empresas.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_5__["Base"], _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_4__["EmpresaService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], EmpresasPage);



/***/ })

}]);
//# sourceMappingURL=pages-empresa-empresas-empresas-module-es2015.js.map