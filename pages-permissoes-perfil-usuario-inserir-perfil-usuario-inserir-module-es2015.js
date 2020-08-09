(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-permissoes-perfil-usuario-inserir-perfil-usuario-inserir-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir.page.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir.page.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Perfil Usuário\r\n        </ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <div padding-horizontal text-center>\r\n      <div class=\"logo\"></div>\r\n      <h3 no-margin>\r\n        <ion-text color=\"light\" class=\"fw700\">\r\n          <ion-text color=\"light\"> &nbsp;Inserindo</ion-text>\r\n        </ion-text>\r\n      </h3>\r\n    </div>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n    <form class=\"list-form auth-content\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp; Nome\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"perfilUsuario.nome\" name=\"nome\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n   \r\n      <ion-item no-padding class=\"animated fadeInUp\"> \r\n        <ion-label position=\"floating\">\r\n          &nbsp; permissões\r\n        </ion-label>\r\n        <ionic-selectable  item-content name=\"pnome\" [(ngModel)]=\"perfilUsuario.permissoes\"\r\n            [(items)]=\"permissoes\" closeButtonTex=\"Cancelar\" itemValueField=\"id\" itemTextField=\"descricao\"\r\n            canSearch=\"true\" [isMultiple]=\"true\"></ionic-selectable>\r\n      </ion-item>\r\n    </form>\r\n    <div margin-top aling=\"center\" class=\"fixa-bottom\">\r\n      <ion-button color=\"primary\" size=\"medium\" expand=\"full\" shape=\"round\" icon-right tappable (click)=\"salvar()\">\r\n        Salvar\r\n        <ion-icon name=\"arrow-dropright-circle\" color=\"success\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/model/objetc/perfil-usuario.ts":
/*!************************************************!*\
  !*** ./src/app/model/objetc/perfil-usuario.ts ***!
  \************************************************/
/*! exports provided: PerfilUsuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilUsuario", function() { return PerfilUsuario; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PerfilUsuario {
}


/***/ }),

/***/ "./src/app/pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: PerfilUsuarioInserirPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilUsuarioInserirPageRoutingModule", function() { return PerfilUsuarioInserirPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perfil_usuario_inserir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil-usuario-inserir.page */ "./src/app/pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir.page.ts");




const routes = [
    {
        path: '',
        component: _perfil_usuario_inserir_page__WEBPACK_IMPORTED_MODULE_3__["PerfilUsuarioInserirPage"]
    }
];
let PerfilUsuarioInserirPageRoutingModule = class PerfilUsuarioInserirPageRoutingModule {
};
PerfilUsuarioInserirPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilUsuarioInserirPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir.module.ts ***!
  \******************************************************************************************/
/*! exports provided: PerfilUsuarioInserirPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilUsuarioInserirPageModule", function() { return PerfilUsuarioInserirPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _perfil_usuario_inserir_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-usuario-inserir-routing.module */ "./src/app/pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir-routing.module.ts");
/* harmony import */ var _perfil_usuario_inserir_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil-usuario-inserir.page */ "./src/app/pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");








let PerfilUsuarioInserirPageModule = class PerfilUsuarioInserirPageModule {
};
PerfilUsuarioInserirPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
            _perfil_usuario_inserir_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilUsuarioInserirPageRoutingModule"]
        ],
        declarations: [_perfil_usuario_inserir_page__WEBPACK_IMPORTED_MODULE_6__["PerfilUsuarioInserirPage"]]
    })
], PerfilUsuarioInserirPageModule);



/***/ }),

/***/ "./src/app/pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir.page.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir.page.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\n.olho {\n  cursor: pointer;\n  left: 94%;\n}\n\n.div-time {\n  top: 30px;\n  position: relative;\n}\n\n.my-avatar {\n  left: 37%;\n  position: relative;\n}\n\n.zoon-eliminado {\n  zoom: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVybWlzc29lcy9wZXJmaWwtdXN1YXJpby1pbnNlcmlyL0M6XFxVc2Vyc1xccm9iZXJcXE9uZURyaXZlXFxpb25pY1xcc2lnb2JyYS11aS9zcmNcXGFwcFxccGFnZXNcXHBlcm1pc3NvZXNcXHBlcmZpbC11c3VhcmlvLWluc2VyaXJcXHBlcmZpbC11c3VhcmlvLWluc2VyaXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wZXJtaXNzb2VzL3BlcmZpbC11c3VhcmlvLWluc2VyaXIvcGVyZmlsLXVzdWFyaW8taW5zZXJpci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0k7RUFDRSw0Q0FBQTtBQ0FOOztBREdJO0VBQ0UsZ0JBQUE7RUFDQSxpREFBQTtBQ0ROOztBREtNO0VBQ0UsZ0JBQUE7QUNIUjs7QURRRTtFQUNFLFlBQUE7QUNMSjs7QURRRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDTEo7O0FEU0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFNFO0VBQ0UsU0FBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGVybWlzc29lcy9wZXJmaWwtdXN1YXJpby1pbnNlcmlyL3BlcmZpbC11c3VhcmlvLWluc2VyaXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICA6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAmLm5vLXJhZGl1cyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYm90YW8tY29yIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLm9saG8ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbGVmdDogOTQlO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuZGl2LXRpbWUge1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLm15LWF2YXRhciB7XHJcbiAgICBsZWZ0OiAzNyU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuem9vbi1lbGltaW5hZG8ge1xyXG4gICAgem9vbTogMC42O1xyXG4gIH0iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNhcmQubm8tcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmJvdGFvLWNvciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm9saG8ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxlZnQ6IDk0JTtcbn1cblxuLmRpdi10aW1lIHtcbiAgdG9wOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5teS1hdmF0YXIge1xuICBsZWZ0OiAzNyU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnpvb24tZWxpbWluYWRvIHtcbiAgem9vbTogMC42O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir.page.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir.page.ts ***!
  \****************************************************************************************/
/*! exports provided: PerfilUsuarioInserirPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilUsuarioInserirPage", function() { return PerfilUsuarioInserirPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_sigobra_permissoes_acesso_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/sigobra/permissoes-acesso.service */ "./src/app/service/sigobra/permissoes-acesso.service.ts");
/* harmony import */ var _model_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/base */ "./src/app/model/base.ts");
/* harmony import */ var _model_objetc_perfil_usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/objetc/perfil-usuario */ "./src/app/model/objetc/perfil-usuario.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let PerfilUsuarioInserirPage = class PerfilUsuarioInserirPage {
    constructor(pa, base, router) {
        this.pa = pa;
        this.base = base;
        this.router = router;
        this.perfilUsuario = new _model_objetc_perfil_usuario__WEBPACK_IMPORTED_MODULE_4__["PerfilUsuario"]();
        if (this.pa.perfilUsuario !== undefined && this.pa.perfilUsuario !== null) {
            this.perfilUsuario = this.pa.perfilUsuario;
        }
        else {
            this.perfilUsuario.permissoes = new Array();
        }
    }
    ngOnInit() {
        this.carregarPermissoes();
    }
    salvar() {
        this.base.present();
        this.perfilUsuario.empresa = this.pa.as.token.empresa;
        this.pa.salvarPerfilUsuario(this.perfilUsuario).subscribe(data => {
            this.base.dismiss();
            this.pa.perfilUsuario = new _model_objetc_perfil_usuario__WEBPACK_IMPORTED_MODULE_4__["PerfilUsuario"]();
            this.router.navigate(['perfil-usuario']);
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha ao salvar perfil de usuário ' + this.base.tratarErro(error));
        });
    }
    carregarPermissoes() {
        this.base.present();
        this.pa.pesquisarPermissoes(' ').subscribe(data => {
            this.permissoes = data;
            this.base.dismiss();
        }, error => {
            this.base.mensagemErro('Falha ao consultar permissões ' + this.base.tratarErro(error));
            this.base.dismiss();
        });
    }
};
PerfilUsuarioInserirPage.ctorParameters = () => [
    { type: _service_sigobra_permissoes_acesso_service__WEBPACK_IMPORTED_MODULE_2__["PermissoesAcessoService"] },
    { type: _model_base__WEBPACK_IMPORTED_MODULE_3__["Base"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PerfilUsuarioInserirPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil-usuario-inserir',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./perfil-usuario-inserir.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./perfil-usuario-inserir.page.scss */ "./src/app/pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_sigobra_permissoes_acesso_service__WEBPACK_IMPORTED_MODULE_2__["PermissoesAcessoService"],
        _model_base__WEBPACK_IMPORTED_MODULE_3__["Base"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], PerfilUsuarioInserirPage);



/***/ })

}]);
//# sourceMappingURL=pages-permissoes-perfil-usuario-inserir-perfil-usuario-inserir-module-es2015.js.map