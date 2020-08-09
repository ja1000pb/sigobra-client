(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-obra-obras-obras-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/obra/obras/obras.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/obra/obras/obras.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Obras</ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n\r\n    <ion-buttons style=\"max-width: 40%;\" slot=\"end\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-input name=\"value\" [(ngModel)]=\"value\" color=\"light\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"carregarObras(value)\">\r\n        <ion-icon name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">      \r\n        <ion-item-sliding *ngFor=\"let obra of obras\" class=\"animated fadeInUp\">\r\n          <ion-item >\r\n            <div>                            \r\n                <ion-label >{{ obra.nome }}</ion-label> \r\n                <ion-toggle style=\"top: 8px;\" disabled=true [(ngModel)]=\"obra.fechamentoobra\" color=\"tertiary\" \r\n                            name=\"fechamento\" [checked]=\"obra.fechamentoobra\" check></ion-toggle>               \r\n                <br />                   \r\n                <ion-button  shape=\"round\" color=\"primary\" icon-right tappable (click)=\"editar(obra)\">\r\n                  <ion-icon name=\"create\" color=\"warning\"></ion-icon>\r\n                  Editar\r\n                </ion-button>\r\n                <ion-button  shape=\"round\" color=\"primary\" icon-right tappable (click)=\"excluir(obra)\" >\r\n                  <ion-icon name=\"trash\" color=\"danger\"></ion-icon>\r\n                  Excluir\r\n                </ion-button>\r\n            </div>\r\n          </ion-item>\r\n        </ion-item-sliding>       \r\n    <div margin-top aling=\"center\" class=\"fixa-bottom\">\r\n      <ion-button color=\"primary\" size=\"medium\" expand=\"full\" shape=\"round\" icon-right tappable (click)=\"inserir()\">\r\n        Inserir\r\n        <ion-icon name=\"arrow-dropright-circle\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/obra/obras/obras-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/obra/obras/obras-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ObrasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObrasPageRoutingModule", function() { return ObrasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _obras_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./obras.page */ "./src/app/pages/obra/obras/obras.page.ts");




const routes = [
    {
        path: '',
        component: _obras_page__WEBPACK_IMPORTED_MODULE_3__["ObrasPage"]
    }
];
let ObrasPageRoutingModule = class ObrasPageRoutingModule {
};
ObrasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ObrasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/obra/obras/obras.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/obra/obras/obras.module.ts ***!
  \**************************************************/
/*! exports provided: ObrasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObrasPageModule", function() { return ObrasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _obras_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./obras-routing.module */ "./src/app/pages/obra/obras/obras-routing.module.ts");
/* harmony import */ var _obras_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./obras.page */ "./src/app/pages/obra/obras/obras.page.ts");







let ObrasPageModule = class ObrasPageModule {
};
ObrasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _obras_routing_module__WEBPACK_IMPORTED_MODULE_5__["ObrasPageRoutingModule"]
        ],
        declarations: [_obras_page__WEBPACK_IMPORTED_MODULE_6__["ObrasPage"]]
    })
], ObrasPageModule);



/***/ }),

/***/ "./src/app/pages/obra/obras/obras.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/obra/obras/obras.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb2JyYS9vYnJhcy9DOlxcVXNlcnNcXHJvYmVyXFxPbmVEcml2ZVxcaW9uaWNcXHNpZ29icmEtdWkvc3JjXFxhcHBcXHBhZ2VzXFxvYnJhXFxvYnJhc1xcb2JyYXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vYnJhL29icmFzL29icmFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUNFLDRDQUFBO0FDQU47O0FER0k7RUFDRSxnQkFBQTtFQUNBLGlEQUFBO0FDRE47O0FES007RUFDRSxnQkFBQTtBQ0hSOztBRFFFO0VBQ0UsWUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb2JyYS9vYnJhcy9vYnJhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICYubm8tcmFkaXVzIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3Rhby1jb3Ige1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH0iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNhcmQubm8tcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmJvdGFvLWNvciB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/obra/obras/obras.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/obra/obras/obras.page.ts ***!
  \************************************************/
/*! exports provided: ObrasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObrasPage", function() { return ObrasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_objetc_obras__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../model/objetc/obras */ "./src/app/model/objetc/obras.ts");
/* harmony import */ var _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../service/sigobra/obra.service */ "./src/app/service/sigobra/obra.service.ts");
/* harmony import */ var _model_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/base */ "./src/app/model/base.ts");






let ObrasPage = class ObrasPage {
    constructor(base, os, router) {
        this.base = base;
        this.os = os;
        this.router = router;
        this.value = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.carregarObras(" ");
    }
    excluir(obra) {
        this.base.Confirma('Deseja excluir essa empresa', this.removerativo.bind(this), obra);
    }
    remover(obra) {
        this.base.present();
        return this.os.delete(obra).subscribe(data => {
            this.base.dismiss();
            this.base.menssagemSucesso('Empresa Excluida');
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha  ao Excluir  empresa ' + obra.id + this.base.tratarErro(error));
        });
    }
    editar(obra) {
        this.os.obra = obra;
        this.router.navigate(['obra-inserir']);
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
    carregarObra(value) {
        this.base.present();
        return this.os.pesquisa(value).subscribe(data => {
            this.obras = data;
            this.base.dismiss();
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha  ao listar  Obras ' + this.base.tratarErro(error));
        });
    }
    inserir() {
        this.os.obra = new _model_objetc_obras__WEBPACK_IMPORTED_MODULE_3__["Obras"];
        this.router.navigate(['obra-inserir']);
    }
    removerativo(obra) {
        this.obra = obra;
        this.base.present();
        if ((this.obra.ativo !== null) && (this.obra.ativo !== undefined)) {
            this.obra.ativo = false;
        }
        return this.os.editarativo(this.obra).subscribe(data => {
            this.base.dismiss();
            this.router.navigate(['obras']);
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha  ao Excluir  empresa ' + this.obra.id + this.obra.ativo
                + this.base.tratarErro(error));
        });
    }
};
ObrasPage.ctorParameters = () => [
    { type: _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"] },
    { type: _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_4__["ObraService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ObrasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-obras',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./obras.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/obra/obras/obras.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./obras.page.scss */ "./src/app/pages/obra/obras/obras.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_5__["Base"],
        _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_4__["ObraService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ObrasPage);



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
//# sourceMappingURL=pages-obra-obras-obras-module-es2015.js.map