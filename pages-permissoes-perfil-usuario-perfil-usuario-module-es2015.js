(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-permissoes-perfil-usuario-perfil-usuario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/permissoes/perfil-usuario/perfil-usuario.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/permissoes/perfil-usuario/perfil-usuario.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Perfil de Usuário</ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n\r\n    <ion-buttons class=\"bt-pesquisa-bar\" slot=\"end\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-input name=\"value\" [(ngModel)]=\"value\" color=\"light\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"pesquisarPerfilUsuario(value)\">\r\n        <ion-icon name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n    <ion-item-sliding *ngFor=\"let perfilUsuario of perfisUsuarios\" class=\"animated fadeInUp\">\r\n      <ion-item>\r\n        <div>\r\n          <ion-label>{{ perfilUsuario.nome }}</ion-label> <br />\r\n          <ion-button *ngIf=\"perfilUsuario.id != 1\" shape=\"round\" color=\"primary\" icon-right tappable\r\n            (click)=\"editar(perfilUsuario)\">\r\n            <ion-icon name=\"create\" color=\"warning\"></ion-icon>\r\n            Editar\r\n          </ion-button>\r\n          <ion-button *ngIf=\"perfilUsuario.id != 1\" shape=\"round\" color=\"primary\" icon-right tappable\r\n            (click)=\"editar(perfilUsuario)\">\r\n            <ion-icon name=\"trash\" color=\"danger\"></ion-icon>\r\n            remover\r\n        </ion-button>\r\n        </div>\r\n      </ion-item>\r\n    </ion-item-sliding>\r\n    <div margin-top aling=\"center\" class=\"fixa-bottom\">\r\n      <ion-button color=\"primary\" size=\"medium\" expand=\"full\" shape=\"round\" icon-right tappable (click)=\"inserir()\">\r\n        Inserir       \r\n      </ion-button>\r\n    </div>\r\n    <div margin-top aling=\"center\" class=\"fixa-bottom\">\r\n      <ion-button color=\"primary\" size=\"medium\" expand=\"full\" shape=\"round\" icon-right tappable (click)=\"permissaoUsuario()\">\r\n        <ion-icon name=\"key\"></ion-icon>\r\n        Autorizar Usuario\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/permissoes/perfil-usuario/perfil-usuario-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/permissoes/perfil-usuario/perfil-usuario-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PerfilUsuarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilUsuarioPageRoutingModule", function() { return PerfilUsuarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perfil_usuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil-usuario.page */ "./src/app/pages/permissoes/perfil-usuario/perfil-usuario.page.ts");




const routes = [
    {
        path: '',
        component: _perfil_usuario_page__WEBPACK_IMPORTED_MODULE_3__["PerfilUsuarioPage"]
    }
];
let PerfilUsuarioPageRoutingModule = class PerfilUsuarioPageRoutingModule {
};
PerfilUsuarioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilUsuarioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/permissoes/perfil-usuario/perfil-usuario.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/permissoes/perfil-usuario/perfil-usuario.module.ts ***!
  \**************************************************************************/
/*! exports provided: PerfilUsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilUsuarioPageModule", function() { return PerfilUsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _perfil_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-usuario-routing.module */ "./src/app/pages/permissoes/perfil-usuario/perfil-usuario-routing.module.ts");
/* harmony import */ var _perfil_usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil-usuario.page */ "./src/app/pages/permissoes/perfil-usuario/perfil-usuario.page.ts");







let PerfilUsuarioPageModule = class PerfilUsuarioPageModule {
};
PerfilUsuarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilUsuarioPageRoutingModule"]
        ],
        declarations: [_perfil_usuario_page__WEBPACK_IMPORTED_MODULE_6__["PerfilUsuarioPage"]]
    })
], PerfilUsuarioPageModule);



/***/ }),

/***/ "./src/app/pages/permissoes/perfil-usuario/perfil-usuario.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/permissoes/perfil-usuario/perfil-usuario.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVybWlzc29lcy9wZXJmaWwtdXN1YXJpby9DOlxcVXNlcnNcXHJvYmVyXFxPbmVEcml2ZVxcaW9uaWNcXHNpZ29icmEtdWkvc3JjXFxhcHBcXHBhZ2VzXFxwZXJtaXNzb2VzXFxwZXJmaWwtdXN1YXJpb1xccGVyZmlsLXVzdWFyaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wZXJtaXNzb2VzL3BlcmZpbC11c3VhcmlvL3BlcmZpbC11c3VhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUNFLDRDQUFBO0FDQU47O0FER0k7RUFDRSxnQkFBQTtFQUNBLGlEQUFBO0FDRE47O0FES007RUFDRSxnQkFBQTtBQ0hSOztBRFFFO0VBQ0UsWUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGVybWlzc29lcy9wZXJmaWwtdXN1YXJpby9wZXJmaWwtdXN1YXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICYubm8tcmFkaXVzIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3Rhby1jb3Ige1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH0iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNhcmQubm8tcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmJvdGFvLWNvciB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/permissoes/perfil-usuario/perfil-usuario.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/permissoes/perfil-usuario/perfil-usuario.page.ts ***!
  \************************************************************************/
/*! exports provided: PerfilUsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilUsuarioPage", function() { return PerfilUsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_sigobra_permissoes_acesso_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/sigobra/permissoes-acesso.service */ "./src/app/service/sigobra/permissoes-acesso.service.ts");
/* harmony import */ var _model_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/base */ "./src/app/model/base.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let PerfilUsuarioPage = class PerfilUsuarioPage {
    constructor(pa, base, router) {
        this.pa = pa;
        this.base = base;
        this.router = router;
        this.value = ' ';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.pesquisarPerfilUsuario1();
    }
    inserir() {
        this.pa.perfilUsuario = null;
        this.router.navigate(['perfil-usuario-inserir']);
    }
    permissaoUsuario() {
        this.router.navigate(['permissao-usuario']);
    }
    editar(perfilUsuario) {
        this.pa.perfilUsuario = perfilUsuario;
        this.router.navigate(['perfil-usuario-inserir']);
    }
    pesquisarPerfilUsuario(value) {
        this.base.present();
        this.pa.pesquisarPerfilUsuario(value).subscribe(data => {
            this.perfisUsuarios = data;
            this.base.dismiss();
        }, error => {
            this.base.mensagemErro('Falha ao consultar perfil usuário ' + this.base.tratarErro(error));
            this.base.dismiss();
        });
    }
    deletar(perfilUsuario) {
        this.base.present();
        this.pa.deletarPerfilUsuario(perfilUsuario).subscribe(data => {
            this.perfisUsuarios = data;
            this.base.dismiss();
        }, error => {
            this.base.mensagemErro('Falha ao excluir perfil usuário ' + this.base.tratarErro(error));
            this.base.dismiss();
        });
    }
    pesquisarPerfilUsuario1() {
        this.base.present();
        this.pa.pesquisarPerfilUsuario1(this.value).subscribe(data => {
            this.perfisUsuarios = data;
            this.base.dismiss();
        }, error => {
            this.base.mensagemErro('Falha ao consultar perfil usuário ' + this.base.tratarErro(error));
            this.base.dismiss();
        });
    }
};
PerfilUsuarioPage.ctorParameters = () => [
    { type: _service_sigobra_permissoes_acesso_service__WEBPACK_IMPORTED_MODULE_2__["PermissoesAcessoService"] },
    { type: _model_base__WEBPACK_IMPORTED_MODULE_3__["Base"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PerfilUsuarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil-usuario',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./perfil-usuario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/permissoes/perfil-usuario/perfil-usuario.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./perfil-usuario.page.scss */ "./src/app/pages/permissoes/perfil-usuario/perfil-usuario.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_sigobra_permissoes_acesso_service__WEBPACK_IMPORTED_MODULE_2__["PermissoesAcessoService"],
        _model_base__WEBPACK_IMPORTED_MODULE_3__["Base"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], PerfilUsuarioPage);



/***/ })

}]);
//# sourceMappingURL=pages-permissoes-perfil-usuario-perfil-usuario-module-es2015.js.map