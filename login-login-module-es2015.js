(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"animated fadeIn login auth-page ion-padding\">\r\n  <div class=\"theme-bg\"></div>\r\n  <div class=\"auth-content\">\r\n    <!-- Logo -->\r\n    <div padding-horizontal text-center class=\"animated fadeInDown\">\r\n      <div align=\"center\"><img src=\"/assets/sigobratrans.png\" alt=\"\" width=\"300\" height=\"150\" /></div>      \r\n    </div>\r\n    <!-- Login form -->\r\n    <form #loginForm=\"ngForm\" class=\"list-form\" (keydown)=\"keyDownFunction($event)\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">         \r\n          Login:\r\n        </ion-label>\r\n        <ion-input  name=\"username\" [(ngModel)]=\"usuario.email\"   color=\"secondary\" type=\"email\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">          \r\n          Senha:\r\n        </ion-label>\r\n        <ion-input color=\"secondary\"  name=\"password\"  [(ngModel)]=\"usuario.senha\" type=\"password\">\r\n        </ion-input>\r\n      </ion-item>\r\n    </form>\r\n\r\n    <p text-right tappable  class=\"paz\" class=\"texto\">\r\n      <ion-text color=\"light\">\r\n        <strong>Esqueceu Senha ?</strong>\r\n      </ion-text>\r\n    </p>\r\n\r\n    <div>\r\n      <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"secondary\" (click)=\"logar()\" \r\n        tappable>\r\n        <ion-icon name=\"log-in\"></ion-icon>\r\n        Logar\r\n      </ion-button>\r\n    </div>\r\n    <br/><br/><br/><br/>\r\n    <div text-center margin-top class=\"texto\">\r\n      <span class=\"paz\" tappable>\r\n        <ion-text color=\"light\">\r\n          <ion-icon name=\"mail-open\"></ion-icon>          \r\n          Desenvolvido por <strong>Mundobit</strong>\r\n        </ion-text>\r\n      </span>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    },
    {
        path: 'menu',
        loadChildren: '../menu/menu.module#MenuPageModule'
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
        exports: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-primary),\trgb(255, 255, 255)\t);\n}\n\n.paz {\n  position: relative;\n  z-index: 10;\n}\n\n.logo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.texto {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxyb2JlclxcT25lRHJpdmVcXGlvbmljXFxzaWdvYnJhLXVpL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDSSxvRkFBQTtBQ0ROOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46aG9zdCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSwgXHRyZ2IoMjU1LCAyNTUsIDI1NSlcdCk7XHJcbiAgfVxyXG59XHJcblxyXG4ucGF6IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87ICBcclxuXHJcbn1cclxuXHJcbi50ZXh0byB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbn0iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFx0cmdiKDI1NSwgMjU1LCAyNTUpXHQpO1xufVxuXG4ucGF6IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnRleHRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _model_objetc_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model/objetc/usuario */ "./src/app/model/objetc/usuario.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/autentificacao/autentificacao.service */ "./src/app/service/autentificacao/autentificacao.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/base */ "./src/app/model/base.ts");
/* harmony import */ var _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/sigobra/usuario.service */ "./src/app/service/sigobra/usuario.service.ts");
/* harmony import */ var _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/sigobra/empresa.service */ "./src/app/service/sigobra/empresa.service.ts");
/* harmony import */ var _model_objetc_empresa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/objetc/empresa */ "./src/app/model/objetc/empresa.ts");









let LoginPage = class LoginPage {
    constructor(as, es, usuarioService, router, base) {
        this.as = as;
        this.es = es;
        this.usuarioService = usuarioService;
        this.router = router;
        this.base = base;
        this.usuario = new _model_objetc_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
        this.usua = new _model_objetc_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
        this.empresa = new _model_objetc_empresa__WEBPACK_IMPORTED_MODULE_8__["Empresa"]();
        this.submitted = false;
    }
    ngOnInit() { }
    keyDownFunction(event) {
        if (event.keyCode == 13) {
            this.logar();
        }
    }
    logar() {
        this.base.present();
        this.usuarioService.getToken(this.usuario).subscribe(data => {
            this.as.token = data;
            this.base.dismiss();
            this.router.navigate(["menu"]);
            this.usuario = null;
            this.usua = null;
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha ao acessar :\n' + this.base.tratarErro(error));
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
};
LoginPage.ctorParameters = () => [
    { type: _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"] },
    { type: _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_7__["EmpresaService"] },
    { type: _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"], _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_7__["EmpresaService"], _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map