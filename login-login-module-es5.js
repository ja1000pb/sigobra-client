function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"animated fadeIn login auth-page ion-padding\">\r\n  <div class=\"theme-bg\"></div>\r\n  <div class=\"auth-content\">\r\n    <!-- Logo -->\r\n    <ion-toolbar color=\"primary\"> \r\n      <ion-button (click)=\"aberto()\">\r\n        <ion-icon name=\"cloud\" slot=\"icon-only\" color=\"light\"></ion-icon> \r\n      </ion-button>\r\n      <div padding-horizontal text-center class=\"animated fadeInDown\">\r\n        <div align=\"center\"><img src=\"/assets/sigobrabranco.png\" alt=\"\" width=\"300\" height=\"150\" /></div>      \r\n      </div>\r\n    </ion-toolbar>\r\n    <!-- Login form -->\r\n    <form #loginForm=\"ngForm\" class=\"list-form\" (keydown)=\"keyDownFunction($event)\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">         \r\n          Login:\r\n        </ion-label>\r\n        <ion-input  name=\"username\" [(ngModel)]=\"usuario.email\"  type=\"email\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">          \r\n          Senha:\r\n        </ion-label>\r\n        <ion-input name=\"password\"  [(ngModel)]=\"usuario.senha\" type=\"password\"></ion-input>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"btn\" no-padding class=\"animated fadeInUp\"> \r\n        <ion-label >URL:</ion-label>\r\n        <ion-input name=\"urlb\" [(ngModel)]=\"urlBase\" type=\"text\" ></ion-input>            \r\n      </ion-item>\r\n    </form>\r\n\r\n    <p text-right tappable  class=\"paz\" class=\"texto\" >\r\n      <ion-text color=\"primary\" (click)=\"esqueceuSenha()\">\r\n        <strong>Esqueceu Senha ?</strong>\r\n      </ion-text>\r\n    </p>\r\n\r\n    <div>\r\n      <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"primary\" (click)=\"logar()\" \r\n        tappable>\r\n        <ion-icon name=\"log-in\"></ion-icon>\r\n        Logar\r\n      </ion-button>\r\n    </div>\r\n    <br/><br/><br/><br/>\r\n    <div text-center margin-top class=\"texto\">\r\n      <span class=\"paz\" tappable>\r\n        <ion-text color=\"primary\">\r\n          <ion-icon name=\"mail-open\"></ion-icon>          \r\n          Desenvolvido por \r\n        </ion-text>\r\n        <ion-text color=\"dark\">\r\n          <strong>MundoBit</strong>\r\n        </ion-text>\r\n        <ion-text color=\"danger\">\r\n          <strong>Info</strong>\r\n        </ion-text>\r\n          \r\n          \r\n        \r\n      </span>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }, {
      path: 'menu',
      loadChildren: '../menu/menu.module#MenuPageModule'
    }];

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
      exports: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n.paz {\n  position: relative;\n  z-index: 10;\n}\n\n.logo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.texto {\n  text-align: center;\n}\n\n/*.list-form {\n  ion-label {    \n    color: var(--ion-color-light);\n  }\n  ion-input {\n    color: var(--ion-color-light);\n  }\n  input {\n  color: var(--ion-color-light);\n  }\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxyb2JlclxcT25lRHJpdmVcXGlvbmljXFxzaWdvYnJhLXVpL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSw0Q0FBQTtBQ0RKOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURPQTs7Ozs7Ozs7OztFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcclxuICB9XHJcbn1cclxuXHJcbi5wYXoge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bzsgIFxyXG5cclxufVxyXG5cclxuLnRleHRvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxufVxyXG5cclxuXHJcbi8qLmxpc3QtZm9ybSB7XHJcbiAgaW9uLWxhYmVsIHsgICAgXHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICB9XHJcbiAgaW9uLWlucHV0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgfVxyXG59Ki8iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xufVxuXG4ucGF6IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnRleHRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKi5saXN0LWZvcm0ge1xuICBpb24tbGFiZWwgeyAgICBcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgfVxuICBpb24taW5wdXQge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB9XG4gIGlucHV0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIH1cbn0qLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _model_objetc_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../model/objetc/usuario */
    "./src/app/model/objetc/usuario.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/autentificacao/autentificacao.service */
    "./src/app/service/autentificacao/autentificacao.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _model_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../model/base */
    "./src/app/model/base.ts");
    /* harmony import */


    var _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../service/sigobra/usuario.service */
    "./src/app/service/sigobra/usuario.service.ts");
    /* harmony import */


    var _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../service/sigobra/empresa.service */
    "./src/app/service/sigobra/empresa.service.ts");
    /* harmony import */


    var _model_objetc_empresa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../model/objetc/empresa */
    "./src/app/model/objetc/empresa.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(as, es, usuarioService, router, base, storage) {
        _classCallCheck(this, LoginPage);

        this.as = as;
        this.es = es;
        this.usuarioService = usuarioService;
        this.router = router;
        this.base = base;
        this.storage = storage;
        this.slideOpts = {
          initialSlide: 0,
          speed: 400
        };
        this.usuario = new _model_objetc_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
        this.empresa = new _model_objetc_empresa__WEBPACK_IMPORTED_MODULE_8__["Empresa"]();
        this.btn = false;
        this.submitted = false;
        this.urlBase = '';
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.storage.get('urlBase').then(function (data) {
            if (data !== null) {
              _this.urlBase = data;
            } else {
              _this.urlBase = _this.as.url;
            }
          }, function () {
            _this.urlBase = _this.as.url;
          });
        }
      }, {
        key: "keyDownFunction",
        value: function keyDownFunction(event) {
          if (event.keyCode === 13) {
            this.logar();
          }
        }
      }, {
        key: "logar",
        value: function logar() {
          var _this2 = this;

          this.base.present();
          this.as.url = this.urlBase;
          var senhaDigita = this.usuario.senha;
          this.usuarioService.getToken(this.usuario).subscribe(function (data) {
            _this2.base.dismiss();

            _this2.storage.set('urlBase', _this2.urlBase);

            _this2.as.token = data;

            _this2.router.navigate(['menu']);

            if (senhaDigita === 'abc123') {
              _this2.as.deveAtualizarSenha = true;
            }

            _this2.usuario = new _model_objetc_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
          }, function (error) {
            _this2.base.dismiss();

            _this2.base.mensagemErro('Falha ao acessar :\n' + _this2.base.tratarErro(error));
          });
        }
      }, {
        key: "esqueceuSenha",
        value: function esqueceuSenha() {
          this.base.esqueceuSenha();
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          console.log('Begin async operation');
          setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
          }, 2000);
        }
      }, {
        key: "aberto",
        value: function aberto() {
          this.btn = !this.btn;
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]
      }, {
        type: _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_7__["EmpresaService"]
      }, {
        type: _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"], _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_7__["EmpresaService"], _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"], _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map