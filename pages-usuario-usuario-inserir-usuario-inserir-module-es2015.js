(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-usuario-usuario-inserir-usuario-inserir-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/usuario-inserir/usuario-inserir.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/usuario-inserir/usuario-inserir.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"#04ff0c\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Usuario\r\n        </ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n    <div padding-horizontal text-center>\r\n      <div class=\"logo\"></div>\r\n      <h3 no-margin>\r\n        <ion-text color=\"light\" class=\"fw700\">\r\n          <ion-text color=\"light\">Inserindo</ion-text>\r\n        </ion-text>\r\n      </h3>\r\n    </div>\r\n    <form class=\"list-form auth-conten\" (keydown)=\"keyDownFunction($event)\">\r\n      <ion-item no-padding class=\"animated fadeInUp\" color=\"success\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp; Empresa\r\n        </ion-label>\r\n        <ionic-selectable  [(ngModel)]=\"pessoa.empresa\" color=\"secondary\" item-content name=\"empresas\" [(items)]=\"empresas\"\r\n          closeButtonText=\"Cancelar\" itemTextField=\"nome\" itemValueField=\"id\" canSearch=\"true\"\r\n          [isConfirmButtonEnabled]=\"true\" (onSelect)=\"selecionarEmpresa($event)\">\r\n        </ionic-selectable>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Nome\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"pessoa.nome\" name=\"nome\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;CPF\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"pessoa.cpf\" name=\"cpf\" color=\"secondary\" type=\"text\"\r\n        placeholder=\" \" [brmasker]=\"{person: true}\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;RG\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"pessoa.rg\" name=\"rg\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Telefone\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"pessoa.telefone1\" name=\"telefone1\" color=\"secondary\" type=\"text\" \r\n                   [brmasker]=\"{phone: true}\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Telefone 2\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"pessoa.telefone2\" name=\"telefone2\" color=\"secondary\" type=\"text\" \r\n                   [brmasker]=\"{phone: true}\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Logradouro\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"pessoa.logradouro\" name=\"logradouro\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Numero\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"pessoa.numero\" name=\"numero\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Complemento\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"pessoa.complemento\" name=\"complemento\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Bairro\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"pessoa.bairro\" name=\"bairro\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Cidade\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"pessoa.cidade\" name=\"cidade\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;CEP\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"pessoa.cep\" name=\"cep\" color=\"secondary\" type=\"text\" \r\n                   [brmasker]=\"{mask:'00.000-000', len:10, userCaracters: true}\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;UF\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"pessoa.uf\" name=\"uf\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>    \r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Estado\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"pessoa.estado\" name=\"estado\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item> \r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Login\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.login\" name=\"login\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;E-Mail\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.email\" name=\"email\" color=\"secondary\" type=\"email\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Senha\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.senha\" name=\"senha\" color=\"secondary\" type=\"password\"></ion-input>\r\n      </ion-item>      \r\n    </form>\r\n    <div margin-top>\r\n      <ion-button size=\"medium\" expand=\"full\" shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"salvar()\">\r\n        Salvar\r\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/model/objetc/pessoa.ts":
/*!****************************************!*\
  !*** ./src/app/model/objetc/pessoa.ts ***!
  \****************************************/
/*! exports provided: Pessoa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pessoa", function() { return Pessoa; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Pessoa {
}


/***/ }),

/***/ "./src/app/pages/usuario/usuario-inserir/usuario-inserir-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/usuario/usuario-inserir/usuario-inserir-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: UsuarioInserirPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioInserirPageRoutingModule", function() { return UsuarioInserirPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _usuario_inserir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario-inserir.page */ "./src/app/pages/usuario/usuario-inserir/usuario-inserir.page.ts");




const routes = [
    {
        path: '',
        component: _usuario_inserir_page__WEBPACK_IMPORTED_MODULE_3__["UsuarioInserirPage"]
    }
];
let UsuarioInserirPageRoutingModule = class UsuarioInserirPageRoutingModule {
};
UsuarioInserirPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsuarioInserirPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/usuario/usuario-inserir/usuario-inserir.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/usuario/usuario-inserir/usuario-inserir.module.ts ***!
  \*************************************************************************/
/*! exports provided: UsuarioInserirPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioInserirPageModule", function() { return UsuarioInserirPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _usuario_inserir_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuario-inserir-routing.module */ "./src/app/pages/usuario/usuario-inserir/usuario-inserir-routing.module.ts");
/* harmony import */ var _usuario_inserir_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario-inserir.page */ "./src/app/pages/usuario/usuario-inserir/usuario-inserir.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");









let UsuarioInserirPageModule = class UsuarioInserirPageModule {
};
UsuarioInserirPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_8__["BrMaskerModule"],
            _usuario_inserir_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuarioInserirPageRoutingModule"]
        ],
        declarations: [_usuario_inserir_page__WEBPACK_IMPORTED_MODULE_6__["UsuarioInserirPage"]]
    })
], UsuarioInserirPageModule);



/***/ }),

/***/ "./src/app/pages/usuario/usuario-inserir/usuario-inserir.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/usuario/usuario-inserir/usuario-inserir.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: linear-gradient(\n    135deg,\n    var(--ion-color-primary),\n    #ffffff\n  );\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\n.olho {\n  cursor: pointer;\n  left: 94%;\n}\n\n.div-time {\n  top: 30px;\n  position: relative;\n}\n\n.my-avatar {\n  left: 37%;\n  position: relative;\n}\n\n.zoon-eliminado {\n  zoom: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXN1YXJpby91c3VhcmlvLWluc2VyaXIvQzpcXFVzZXJzXFxyb2JlclxcT25lRHJpdmVcXGlvbmljXFxzaWdvYnJhLXVpL3NyY1xcYXBwXFxwYWdlc1xcdXN1YXJpb1xcdXN1YXJpby1pbnNlcmlyXFx1c3VhcmlvLWluc2VyaXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91c3VhcmlvL3VzdWFyaW8taW5zZXJpci91c3VhcmlvLWluc2VyaXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdJO0VBQ0U7Ozs7R0FBQTtBQ0lOOztBREdJO0VBQ0UsZ0JBQUE7RUFDQSxpREFBQTtBQ0ROOztBREtNO0VBQ0UsZ0JBQUE7QUNIUjs7QURRRTtFQUNFLFlBQUE7QUNMSjs7QURRRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDTEo7O0FEU0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFNFO0VBQ0UsU0FBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXN1YXJpby91c3VhcmlvLWluc2VyaXIvdXN1YXJpby1pbnNlcmlyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAxMzVkZWcsXHJcbiAgICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxyXG4gICAgICAgICNmZmZmZmZcclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgJi5uby1yYWRpdXMge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJvdGFvLWNvciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5vbGhvIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxlZnQ6IDk0JTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmRpdi10aW1lIHtcclxuICAgIHRvcDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5teS1hdmF0YXIge1xyXG4gICAgbGVmdDogMzclO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLnpvb24tZWxpbWluYWRvIHtcclxuICAgIHpvb206IDAuNjtcclxuICB9IiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMzVkZWcsXG4gICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxuICAgICNmZmZmZmZcbiAgKTtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jYXJkLm5vLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ib3Rhby1jb3Ige1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5vbGhvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsZWZ0OiA5NCU7XG59XG5cbi5kaXYtdGltZSB7XG4gIHRvcDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubXktYXZhdGFyIHtcbiAgbGVmdDogMzclO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi56b29uLWVsaW1pbmFkbyB7XG4gIHpvb206IDAuNjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/usuario/usuario-inserir/usuario-inserir.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/usuario/usuario-inserir/usuario-inserir.page.ts ***!
  \***********************************************************************/
/*! exports provided: UsuarioInserirPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioInserirPage", function() { return UsuarioInserirPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../service/sigobra/usuario.service */ "./src/app/service/sigobra/usuario.service.ts");
/* harmony import */ var _model_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../model/base */ "./src/app/model/base.ts");
/* harmony import */ var _model_objetc_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../model/objetc/usuario */ "./src/app/model/objetc/usuario.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_objetc_pessoa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../model/objetc/pessoa */ "./src/app/model/objetc/pessoa.ts");
/* harmony import */ var _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/sigobra/empresa.service */ "./src/app/service/sigobra/empresa.service.ts");








let UsuarioInserirPage = class UsuarioInserirPage {
    constructor(router, base, es, us) {
        this.router = router;
        this.base = base;
        this.es = es;
        this.us = us;
        this.usuario = new _model_objetc_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        this.pessoa = new _model_objetc_pessoa__WEBPACK_IMPORTED_MODULE_6__["Pessoa"]();
    }
    selecionarusuario(evente) {
    }
    ngOnInit() {
        this.carregarEnpresas(" ");
        if (this.us.usuario !== undefined && this.us.usuario !== null) {
            this.usuario = this.us.usuario;
            this.pessoa = this.usuario.pessoa;
        }
    }
    remover(usuario) {
    }
    salvar() {
        this.base.present();
        this.pessoa.ativo = true;
        this.usuario.ativo = true;
        this.usuario.pessoa = this.pessoa;
        this.us.salvar(this.usuario).subscribe(data => {
            this.us.usuario = null;
            this.base.dismiss();
            this.router.navigate(['/usuarios']);
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falhar ao salvar usuario ' + this.base.tratarErro(error));
        });
    }
    keyDownFunction(event) {
    }
    selecionarProfissionais(event) {
    }
    carregarEnpresas(value) {
        return this.es.pesquisar(value).subscribe(data => {
            this.empresas = data;
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha  ao listar  empresa ' + this.base.tratarErro(error));
        });
    }
    selecionarEmpresa(event) {
        this.pessoa.empresa = event.empresa;
    }
};
UsuarioInserirPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _model_base__WEBPACK_IMPORTED_MODULE_2__["Base"] },
    { type: _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_7__["EmpresaService"] },
    { type: _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"] }
];
UsuarioInserirPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-usuario-inserir',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usuario-inserir.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/usuario-inserir/usuario-inserir.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usuario-inserir.page.scss */ "./src/app/pages/usuario/usuario-inserir/usuario-inserir.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _model_base__WEBPACK_IMPORTED_MODULE_2__["Base"],
        _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_7__["EmpresaService"],
        _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]])
], UsuarioInserirPage);



/***/ })

}]);
//# sourceMappingURL=pages-usuario-usuario-inserir-usuario-inserir-module-es2015.js.map