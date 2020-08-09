(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-statusitensinspecao-statusitensinspecoes-statusitensinspecoes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.page.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.page.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Status</ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n\r\n    <ion-buttons class=\"bt-pesquisa-bar\" slot=\"end\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-input [(ngModel)]=\"value\" name=\"value\" color=\"light\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button (click)=\"carregarstatus(value)\" size=\"small\" shape=\"round\" color=\"light\" >\r\n        <ion-icon name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">      \r\n        <ion-item-sliding *ngFor=\"let status of statusitens\" class=\"animated fadeInUp\" color=\"secondary\">\r\n          <ion-item >\r\n            <div>                            \r\n              <ion-label>{{ status.nome }}</ion-label> <br />                   \r\n                <ion-button  shape=\"round\" color=\"primary\" icon-right tappable (click)=\"editar(status)\">\r\n                  <ion-icon name=\"create\" color=\"warning\"></ion-icon>\r\n                  Editar\r\n                </ion-button>\r\n            </div>\r\n          </ion-item>\r\n        </ion-item-sliding>   \r\n    <div *ngIf=\"false\"  margin-top aling=\"center\" class=\"fixa-bottom\">\r\n      <ion-button color=\"secondary\" size=\"medium\" expand=\"full\" shape=\"round\" icon-right tappable (click)=\"inserir()\">\r\n        Inserir\r\n        <ion-icon name=\"arrow-dropright-circle\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhdHVzaXRlbnNpbnNwZWNhby9zdGF0dXNpdGVuc2luc3BlY29lcy9DOlxcVXNlcnNcXHJvYmVyXFxPbmVEcml2ZVxcaW9uaWNcXHNpZ29icmEtdWkvc3JjXFxhcHBcXHBhZ2VzXFxzdGF0dXNpdGVuc2luc3BlY2FvXFxzdGF0dXNpdGVuc2luc3BlY29lc1xcc3RhdHVzaXRlbnNpbnNwZWNvZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdGF0dXNpdGVuc2luc3BlY2FvL3N0YXR1c2l0ZW5zaW5zcGVjb2VzL3N0YXR1c2l0ZW5zaW5zcGVjb2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUNFLDRDQUFBO0FDQU47O0FER0k7RUFDRSxnQkFBQTtFQUNBLGlEQUFBO0FDRE47O0FES007RUFDRSxnQkFBQTtBQ0hSOztBRFFFO0VBQ0UsWUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RhdHVzaXRlbnNpbnNwZWNhby9zdGF0dXNpdGVuc2luc3BlY29lcy9zdGF0dXNpdGVuc2luc3BlY29lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICYubm8tcmFkaXVzIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3Rhby1jb3Ige1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH0iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNhcmQubm8tcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmJvdGFvLWNvciB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */");

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
        this.value = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.carregarstatus1(" ");
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
    carregarstatus1(value) {
        return this.siis.pesquisa(value).subscribe(data => {
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



/***/ }),

/***/ "./src/app/service/sigobra/statusitensinspecao.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/sigobra/statusitensinspecao.service.ts ***!
  \****************************************************************/
/*! exports provided: StatusitensinspecaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusitensinspecaoService", function() { return StatusitensinspecaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autentificacao/autentificacao.service */ "./src/app/service/autentificacao/autentificacao.service.ts");




let StatusitensinspecaoService = class StatusitensinspecaoService {
    constructor(http, as) {
        this.http = http;
        this.as = as;
        this.url = '/statusitensinspecao';
    }
    salvar(status) {
        return this.http.post(this.as.url + this.url, status, this.as.getOptions());
    }
    editar(status) {
        return this.http.put(this.as.url + this.url, status, this.as.getOptions());
    }
    delete(status) {
        return this.http.post(this.as.url + this.url + '/deletar', status, this.as.getOptions());
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
    edit(status) {
        return this.http.post(this.as.url + this.url + '/editar', status, this.as.getOptions());
    }
    editarativo(status) {
        return this.http.post(this.as.url + this.url + '/editarativo', status, this.as.getOptions());
    }
    getListStatus() {
        const lista = new Array();
        return lista;
    }
};
StatusitensinspecaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"] }
];
StatusitensinspecaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])
], StatusitensinspecaoService);



/***/ })

}]);
//# sourceMappingURL=pages-statusitensinspecao-statusitensinspecoes-statusitensinspecoes-module-es2015.js.map