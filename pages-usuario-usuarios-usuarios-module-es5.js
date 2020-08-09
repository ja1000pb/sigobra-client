function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-usuario-usuarios-usuarios-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/usuarios/usuarios.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/usuarios/usuarios.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUsuarioUsuariosUsuariosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Usuários</ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n    <ion-buttons class=\"bt-pesquisa-bar\" slot=\"end\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-input name=\"value\" [(ngModel)]=\"value\" color=\"light\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"pesquisa(value)\">\r\n        <ion-icon name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n      <ion-item-sliding *ngFor=\"let usuario of usuarios\" class=\"animated fadeInUp\">\r\n        <ion-item>\r\n          <div>\r\n            <ion-label>{{ usuario.login }} - {{ usuario.email }}</ion-label> <br>\r\n            <ion-button  shape=\"round\" color=\"primary\" icon-right tappable (click)=\"alteraSenha(usuario)\">\r\n              <ion-icon name=\"keypad\"></ion-icon>\r\n              Alterar Senha\r\n            </ion-button>\r\n            <ion-button  shape=\"round\" color=\"primary\" icon-right tappable (click)=\"permissaoUsuario(usuario)\">\r\n              <ion-icon name=\"key-outline\"></ion-icon>\r\n              Perfil Usuario\r\n            </ion-button>\r\n            <ion-button  shape=\"round\" color=\"primary\" icon-right tappable (click)=\"editar(usuario)\">\r\n              <ion-icon name=\"create\" color=\"warning\"></ion-icon>\r\n              Editar\r\n            </ion-button>\r\n            <ion-button  shape=\"round\" color=\"primary\" icon-right tappable (click)=\"excluir(usuario)\" >\r\n              <ion-icon name=\"trash\" color=\"danger\"></ion-icon>\r\n              Excluir\r\n            </ion-button>\r\n          </div>\r\n        </ion-item>\r\n      </ion-item-sliding>      \r\n    <div margin-top aling=\"center\" class=\"fixa-bottom\">\r\n      <ion-button color=\"primary\" size=\"medium\" expand=\"full\" shape=\"round\" icon-right tappable (click)=\"inserir()\">\r\n        Inserir        \r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/usuario/usuarios/usuarios-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/usuario/usuarios/usuarios-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: UsuariosPageRoutingModule */

  /***/
  function srcAppPagesUsuarioUsuariosUsuariosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuariosPageRoutingModule", function () {
      return UsuariosPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _usuarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./usuarios.page */
    "./src/app/pages/usuario/usuarios/usuarios.page.ts");

    var routes = [{
      path: '',
      component: _usuarios_page__WEBPACK_IMPORTED_MODULE_3__["UsuariosPage"]
    }];

    var UsuariosPageRoutingModule = function UsuariosPageRoutingModule() {
      _classCallCheck(this, UsuariosPageRoutingModule);
    };

    UsuariosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UsuariosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/usuario/usuarios/usuarios.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/usuario/usuarios/usuarios.module.ts ***!
    \***********************************************************/

  /*! exports provided: UsuariosPageModule */

  /***/
  function srcAppPagesUsuarioUsuariosUsuariosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuariosPageModule", function () {
      return UsuariosPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./usuarios-routing.module */
    "./src/app/pages/usuario/usuarios/usuarios-routing.module.ts");
    /* harmony import */


    var _usuarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./usuarios.page */
    "./src/app/pages/usuario/usuarios/usuarios.page.ts");

    var UsuariosPageModule = function UsuariosPageModule() {
      _classCallCheck(this, UsuariosPageModule);
    };

    UsuariosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuariosPageRoutingModule"]],
      declarations: [_usuarios_page__WEBPACK_IMPORTED_MODULE_6__["UsuariosPage"]]
    })], UsuariosPageModule);
    /***/
  },

  /***/
  "./src/app/pages/usuario/usuarios/usuarios.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/usuario/usuarios/usuarios.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUsuarioUsuariosUsuariosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\n.olho {\n  cursor: pointer;\n  left: 94%;\n}\n\n.div-time {\n  top: 30px;\n  position: relative;\n}\n\n.my-avatar {\n  left: 37%;\n  position: relative;\n}\n\n.zoon-eliminado {\n  zoom: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXN1YXJpby91c3Vhcmlvcy9DOlxcVXNlcnNcXHJvYmVyXFxPbmVEcml2ZVxcaW9uaWNcXHNpZ29icmEtdWkvc3JjXFxhcHBcXHBhZ2VzXFx1c3VhcmlvXFx1c3Vhcmlvc1xcdXN1YXJpb3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91c3VhcmlvL3VzdWFyaW9zL3VzdWFyaW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUNFLDRDQUFBO0FDQU47O0FER0k7RUFDRSxnQkFBQTtFQUNBLGlEQUFBO0FDRE47O0FES007RUFDRSxnQkFBQTtBQ0hSOztBRFFFO0VBQ0UsWUFBQTtBQ0xKOztBRFFFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7QUNMSjs7QURTRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFNFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0U7RUFDRSxTQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c3VhcmlvL3VzdWFyaW9zL3VzdWFyaW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgJi5uby1yYWRpdXMge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJvdGFvLWNvciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5vbGhvIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxlZnQ6IDk0JTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmRpdi10aW1lIHtcclxuICAgIHRvcDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5teS1hdmF0YXIge1xyXG4gICAgbGVmdDogMzclO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLnpvb24tZWxpbWluYWRvIHtcclxuICAgIHpvb206IDAuNjtcclxuICB9IiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jYXJkLm5vLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ib3Rhby1jb3Ige1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5vbGhvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsZWZ0OiA5NCU7XG59XG5cbi5kaXYtdGltZSB7XG4gIHRvcDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubXktYXZhdGFyIHtcbiAgbGVmdDogMzclO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi56b29uLWVsaW1pbmFkbyB7XG4gIHpvb206IDAuNjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/usuario/usuarios/usuarios.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/usuario/usuarios/usuarios.page.ts ***!
    \*********************************************************/

  /*! exports provided: UsuariosPage */

  /***/
  function srcAppPagesUsuarioUsuariosUsuariosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuariosPage", function () {
      return UsuariosPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_model_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../app/model/base */
    "./src/app/model/base.ts");
    /* harmony import */


    var _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../service/sigobra/usuario.service */
    "./src/app/service/sigobra/usuario.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UsuariosPage = /*#__PURE__*/function () {
      function UsuariosPage(router, base, us) {
        _classCallCheck(this, UsuariosPage);

        this.router = router;
        this.base = base;
        this.us = us;
        this.value = '';
      }

      _createClass(UsuariosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.pesquisar(" ");
        }
      }, {
        key: "excluir",
        value: function excluir(usuarios) {}
      }, {
        key: "inserir",
        value: function inserir() {
          this.us.usuario = null;
          this.router.navigate(['usuario-inserir']);
        }
      }, {
        key: "editar",
        value: function editar(usuario) {
          this.us.usuario = usuario;
          this.router.navigate(['usuario-inserir']);
        }
      }, {
        key: "pesquisa",
        value: function pesquisa(value) {
          var _this = this;

          this.base.present();
          return this.us.pesquisar(value).subscribe(function (data) {
            _this.usuarios = data;

            _this.base.dismiss();
          }, function (error) {
            _this.base.dismiss();

            _this.base.mensagemErro('Falha  ao listar  usuario ' + _this.base.tratarErro(error));
          });
        }
      }, {
        key: "pesquisar",
        value: function pesquisar(value) {
          var _this2 = this;

          this.base.present();
          return this.us.pesquisa(value).subscribe(function (data) {
            _this2.usuarios = data;

            _this2.base.dismiss();
          }, function (error) {
            _this2.base.dismiss();

            _this2.base.mensagemErro('Falha  ao listar  usuario ' + _this2.base.tratarErro(error));
          });
        }
      }, {
        key: "permissaoUsuario",
        value: function permissaoUsuario(usuario) {
          this.us.flag = "01";
          this.us.usuario = usuario;
          this.router.navigate(['permissao-usuario']);
        }
      }, {
        key: "alteraSenha",
        value: function alteraSenha(usuario) {
          this.base.atualizarSenha(usuario);
        }
      }]);

      return UsuariosPage;
    }();

    UsuariosPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _app_model_base__WEBPACK_IMPORTED_MODULE_1__["Base"]
      }, {
        type: _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }];
    };

    UsuariosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-usuarios',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./usuarios.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/usuarios/usuarios.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./usuarios.page.scss */
      "./src/app/pages/usuario/usuarios/usuarios.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_model_base__WEBPACK_IMPORTED_MODULE_1__["Base"], _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])], UsuariosPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-usuario-usuarios-usuarios-module-es5.js.map