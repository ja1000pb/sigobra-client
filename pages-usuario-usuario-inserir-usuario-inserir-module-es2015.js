(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-usuario-usuario-inserir-usuario-inserir-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/usuario-inserir/usuario-inserir.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/usuario-inserir/usuario-inserir.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Usuário\r\n        </ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <div padding-horizontal text-center>\r\n      <div class=\"logo\"></div>\r\n      <h3 no-margin>\r\n        <ion-text color=\"light\" class=\"fw700\">\r\n          <ion-text color=\"light\">&nbsp;Inserindo</ion-text>\r\n        </ion-text>\r\n      </h3>\r\n    </div>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n    <form class=\"list-form auth-conten\" (keydown)=\"keyDownFunction($event)\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp; Empresa\r\n        </ion-label>\r\n        <ionic-selectable  [(ngModel)]=\"usuario.pessoa.empresa\" item-content name=\"empresas\" [(items)]=\"empresas\"\r\n          closeButtonText=\"Cancelar\" itemTextField=\"nome\" itemValueField=\"id\" canSearch=\"true\"\r\n          [isConfirmButtonEnabled]=\"true\" (onSelect)=\"selecionarEmpresa($event)\">\r\n        </ionic-selectable>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Nome\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.pessoa.nome\" name=\"nome\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;CPF\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.pessoa.cpf\" name=\"cpf\" type=\"text\" placeholder=\" \" \r\n                   [brmasker]=\"{person: true}\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;RG\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.pessoa.rg\" name=\"rg\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Telefone\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.pessoa.telefone1\" name=\"telefone1\" type=\"text\" \r\n                   [brmasker]=\"{phone: true}\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Telefone 2\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.pessoa.telefone2\" name=\"telefone2\" type=\"text\" \r\n                   [brmasker]=\"{phone: true}\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;CEP\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.pessoa.cep\" name=\"cep\" type=\"text\" (ionBlur)= \"consultaCEP($event.target.value)\"\r\n                   [brmasker]=\"{mask:'00.000-000', len:10, userCaracters: true}\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Numero\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.pessoa.numero\" name=\"numero\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Complemento\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.pessoa.complemento\" name=\"complemento\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Logradouro\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.pessoa.logradouro\" name=\"logradouro\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Bairro\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.pessoa.bairro\" name=\"bairro\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Cidade\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.pessoa.cidade\" name=\"cidade\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;UF\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.pessoa.uf\" name=\"uf\" type=\"text\"></ion-input>\r\n      </ion-item>    \r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Estado\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.pessoa.estado\" name=\"estado\" type=\"text\"></ion-input>\r\n      </ion-item> \r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Login\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.login\" name=\"login\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;E-Mail\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.email\" name=\"email\" type=\"email\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Senha\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.senha\" name=\"senha\" type=\"password\"></ion-input>\r\n      </ion-item>     \r\n      <ion-grid>\r\n        <ion-row>\r\n            <ion-col size=\"12\" size-sm class=\"\">\r\n              <div>\r\n                <div>\r\n                  <ion-text>&nbsp;Foto</ion-text> \r\n                </div>\r\n                <div>  \r\n                  <ion-item no-padding class=\"animated fadeInUp\">   \r\n                    <input name=\"imgLogo\" type=\"file\" class=\"olho\" accept=\"image/*\"\r\n                           capture=\"camera\" (change)=\"onFileSelected($event)\" id=\"fileInput\" /> \r\n                  </ion-item> \r\n                </div>\r\n                <div>\r\n                  <ion-button fill=\"clear\" expand=\"full\" (click)=\"tirarFoto()\">\r\n                    <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n                      Tirar Foto\r\n                  </ion-button>  \r\n                </div>\r\n                <div>                \r\n                  <ion-img name=\"logo\" *ngIf=\"temFoto()\"\r\n                           [src]=\"base.getImagem(usuario.pessoa.foto)\"></ion-img> \r\n                </div>\r\n              </div>  \r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid> \r\n    </form>\r\n    <div margin-top>\r\n      <ion-button size=\"medium\" expand=\"full\" shape=\"round\" color=\"primary\" icon-right tappable (click)=\"salvar()\">\r\n        Salvar\r\n        <ion-icon name=\"checkmark-circle\" color=\"success\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\n.olho {\n  cursor: pointer;\n  left: 94%;\n}\n\n.div-time {\n  top: 30px;\n  position: relative;\n}\n\n.my-avatar {\n  left: 37%;\n  position: relative;\n}\n\n.zoon-eliminado {\n  zoom: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXN1YXJpby91c3VhcmlvLWluc2VyaXIvQzpcXFVzZXJzXFxyb2JlclxcT25lRHJpdmVcXGlvbmljXFxzaWdvYnJhLXVpL3NyY1xcYXBwXFxwYWdlc1xcdXN1YXJpb1xcdXN1YXJpby1pbnNlcmlyXFx1c3VhcmlvLWluc2VyaXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91c3VhcmlvL3VzdWFyaW8taW5zZXJpci91c3VhcmlvLWluc2VyaXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdJO0VBQ0UsNENBQUE7QUNBTjs7QURHSTtFQUNFLGdCQUFBO0VBQ0EsaURBQUE7QUNETjs7QURLTTtFQUNFLGdCQUFBO0FDSFI7O0FEUUU7RUFDRSxZQUFBO0FDTEo7O0FEUUU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ0xKOztBRFNFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTRTtFQUNFLFNBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8vdXN1YXJpby1pbnNlcmlyL3VzdWFyaW8taW5zZXJpci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICYubm8tcmFkaXVzIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3Rhby1jb3Ige1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAub2xobyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsZWZ0OiA5NCU7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5kaXYtdGltZSB7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAubXktYXZhdGFyIHtcclxuICAgIGxlZnQ6IDM3JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC56b29uLWVsaW1pbmFkbyB7XHJcbiAgICB6b29tOiAwLjY7XHJcbiAgfSIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZC5uby1yYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYm90YW8tY29yIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ub2xobyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGVmdDogOTQlO1xufVxuXG4uZGl2LXRpbWUge1xuICB0b3A6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm15LWF2YXRhciB7XG4gIGxlZnQ6IDM3JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uem9vbi1lbGltaW5hZG8ge1xuICB6b29tOiAwLjY7XG59Il19 */");

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
/* harmony import */ var _service_viacep_viacep_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../service/viacep/viacep.service */ "./src/app/service/viacep/viacep.service.ts");
/* harmony import */ var _model_enums_estado_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../model/enums/estado.enum */ "./src/app/model/enums/estado.enum.ts");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");











let UsuarioInserirPage = class UsuarioInserirPage {
    constructor(router, base, es, us, vcs, camera) {
        this.router = router;
        this.base = base;
        this.es = es;
        this.us = us;
        this.vcs = vcs;
        this.camera = camera;
        this.usuario = new _model_objetc_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
    }
    selecionarusuario(evente) {
    }
    ngOnInit() {
        if (this.us.usuario !== undefined && this.us.usuario !== null) {
            this.usuario = this.us.usuario;
        }
        else {
            this.usuario.pessoa = new _model_objetc_pessoa__WEBPACK_IMPORTED_MODULE_6__["Pessoa"]();
        }
        this.carregarEnpresas(" ");
    }
    remover(usuario) {
    }
    salvar() {
        this.base.present();
        this.usuario.pessoa.ativo = true;
        this.usuario.ativo = true;
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
        this.usuario.pessoa.empresa = event.empresa;
    }
    consultaCEP(cep) {
        if (cep !== null && cep !== undefined && cep !== '') {
            cep = cep.replace(/\D/g, '');
            if (cep.length > 7) {
                this.base.present();
                this.vcs.consultaCEP(cep).subscribe(data => {
                    this.base.dismiss();
                    this.popula(data);
                }, error => {
                    this.base.dismiss();
                    this.base.mensagemErro('Falha ao buscar CEP :' + this.base.tratarErro(error));
                });
            }
        }
    }
    popula(data) {
        if (data.erro !== undefined && data.erro !== null && data.erro) {
            this.base.mensagemErro('Falha ao consultar endereço do CEP');
            return;
        }
        this.usuario.pessoa.logradouro = data.logradouro;
        this.usuario.pessoa.complemento = data.complemento;
        this.usuario.pessoa.bairro = data.bairro;
        this.usuario.pessoa.cidade = data.localidade;
        this.usuario.pessoa.uf = data.uf;
        for (var uf in _model_enums_estado_enum__WEBPACK_IMPORTED_MODULE_9__["Estado"]) {
            if (data.uf === uf) {
                this.usuario.pessoa.estado = _model_enums_estado_enum__WEBPACK_IMPORTED_MODULE_9__["Estado"][uf];
                break;
            }
        }
    }
    temFoto() {
        try {
            return this.usuario.pessoa.foto !== null && this.usuario.pessoa.foto !== undefined;
        }
        catch (error) {
            return false;
        }
    }
    addFoto(local) {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: local
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.usuario.pessoa.foto = imageData;
        }, (err) => {
            // Handle error
        });
    }
    tirarFoto() {
        this.addFoto(1);
    }
    onFileSelected(event) {
        console.log(event);
        let files = event.target.files;
        let file = files[0];
        if (files && file) {
            let reader = new FileReader();
            reader.onload = this.converteToBase64Depois.bind(this);
            reader.readAsBinaryString(file);
        }
    }
    converteToBase64Depois(readerEvt) {
        const binaryString = readerEvt.target.result;
        this.usuario.pessoa.foto = btoa(binaryString);
    }
};
UsuarioInserirPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _model_base__WEBPACK_IMPORTED_MODULE_2__["Base"] },
    { type: _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_7__["EmpresaService"] },
    { type: _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"] },
    { type: _service_viacep_viacep_service__WEBPACK_IMPORTED_MODULE_8__["ViacepService"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"] }
];
UsuarioInserirPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-usuario-inserir',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usuario-inserir.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/usuario-inserir/usuario-inserir.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usuario-inserir.page.scss */ "./src/app/pages/usuario/usuario-inserir/usuario-inserir.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _model_base__WEBPACK_IMPORTED_MODULE_2__["Base"],
        _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_7__["EmpresaService"],
        _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
        _service_viacep_viacep_service__WEBPACK_IMPORTED_MODULE_8__["ViacepService"],
        _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"]])
], UsuarioInserirPage);



/***/ })

}]);
//# sourceMappingURL=pages-usuario-usuario-inserir-usuario-inserir-module-es2015.js.map