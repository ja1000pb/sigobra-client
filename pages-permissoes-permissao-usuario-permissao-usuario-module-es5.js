function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-permissoes-permissao-usuario-permissao-usuario-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/permissoes/permissao-usuario/permissao-usuario.page.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/permissoes/permissao-usuario/permissao-usuario.page.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPermissoesPermissaoUsuarioPermissaoUsuarioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Perfil Usuário\r\n        </ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <div padding-horizontal text-center>\r\n      <div class=\"logo\"></div>\r\n      <h3 no-margin>\r\n        <ion-text color=\"light\" class=\"fw700\">\r\n          <ion-text color=\"light\"> &nbsp;Autorização</ion-text>\r\n        </ion-text>\r\n      </h3>\r\n    </div>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n    <form class=\"list-form auth-content\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp; Usuário\r\n        </ion-label>\r\n        <ionic-selectable item-content name=\"pusuario\" [(ngModel)]=\"usuario\" [(items)]=\"usuarios\"\r\n                          closeButtonTex=\"Cancelar\" itemValueField=\"id\" itemTextField=\"login\">\r\n        </ionic-selectable>\r\n      </ion-item>\r\n   \r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp; Perfil Usuário\r\n        </ion-label>\r\n        <ionic-selectable item-content name=\"pnome\" [(ngModel)]=\"usuario.perfilUsuario\" [(items)]=\"perfisUsuarios\"\r\n                          closeButtonTex=\"Cancelar\" itemValueField=\"id\" itemTextField=\"nome\">\r\n        </ionic-selectable>\r\n      </ion-item>\r\n    </form>\r\n    <div margin-top aling=\"center\" class=\"fixa-bottom\">\r\n      <ion-button color=\"primary\" size=\"medium\" expand=\"full\" shape=\"round\" icon-right tappable (click)=\"salvar()\">\r\n        Salvar\r\n        <ion-icon name=\"arrow-dropright-circle\" color=\"success\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/permissoes/permissao-usuario/permissao-usuario-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/permissoes/permissao-usuario/permissao-usuario-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: PermissaoUsuarioPageRoutingModule */

  /***/
  function srcAppPagesPermissoesPermissaoUsuarioPermissaoUsuarioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissaoUsuarioPageRoutingModule", function () {
      return PermissaoUsuarioPageRoutingModule;
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


    var _permissao_usuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./permissao-usuario.page */
    "./src/app/pages/permissoes/permissao-usuario/permissao-usuario.page.ts");

    var routes = [{
      path: '',
      component: _permissao_usuario_page__WEBPACK_IMPORTED_MODULE_3__["PermissaoUsuarioPage"]
    }];

    var PermissaoUsuarioPageRoutingModule = function PermissaoUsuarioPageRoutingModule() {
      _classCallCheck(this, PermissaoUsuarioPageRoutingModule);
    };

    PermissaoUsuarioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PermissaoUsuarioPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/permissoes/permissao-usuario/permissao-usuario.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/permissoes/permissao-usuario/permissao-usuario.module.ts ***!
    \********************************************************************************/

  /*! exports provided: PermissaoUsuarioPageModule */

  /***/
  function srcAppPagesPermissoesPermissaoUsuarioPermissaoUsuarioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissaoUsuarioPageModule", function () {
      return PermissaoUsuarioPageModule;
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


    var _permissao_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./permissao-usuario-routing.module */
    "./src/app/pages/permissoes/permissao-usuario/permissao-usuario-routing.module.ts");
    /* harmony import */


    var _permissao_usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./permissao-usuario.page */
    "./src/app/pages/permissoes/permissao-usuario/permissao-usuario.page.ts");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");

    var PermissaoUsuarioPageModule = function PermissaoUsuarioPageModule() {
      _classCallCheck(this, PermissaoUsuarioPageModule);
    };

    PermissaoUsuarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"], _permissao_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["PermissaoUsuarioPageRoutingModule"]],
      declarations: [_permissao_usuario_page__WEBPACK_IMPORTED_MODULE_6__["PermissaoUsuarioPage"]]
    })], PermissaoUsuarioPageModule);
    /***/
  },

  /***/
  "./src/app/pages/permissoes/permissao-usuario/permissao-usuario.page.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/permissoes/permissao-usuario/permissao-usuario.page.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPermissoesPermissaoUsuarioPermissaoUsuarioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\n.olho {\n  cursor: pointer;\n  left: 94%;\n}\n\n.div-time {\n  top: 30px;\n  position: relative;\n}\n\n.my-avatar {\n  left: 37%;\n  position: relative;\n}\n\n.zoon-eliminado {\n  zoom: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVybWlzc29lcy9wZXJtaXNzYW8tdXN1YXJpby9DOlxcVXNlcnNcXHJvYmVyXFxPbmVEcml2ZVxcaW9uaWNcXHNpZ29icmEtdWkvc3JjXFxhcHBcXHBhZ2VzXFxwZXJtaXNzb2VzXFxwZXJtaXNzYW8tdXN1YXJpb1xccGVybWlzc2FvLXVzdWFyaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wZXJtaXNzb2VzL3Blcm1pc3Nhby11c3VhcmlvL3Blcm1pc3Nhby11c3VhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUNFLDRDQUFBO0FDQU47O0FER0k7RUFDRSxnQkFBQTtFQUNBLGlEQUFBO0FDRE47O0FES007RUFDRSxnQkFBQTtBQ0hSOztBRFFFO0VBQ0UsWUFBQTtBQ0xKOztBRFFFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7QUNMSjs7QURTRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFNFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0U7RUFDRSxTQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZXJtaXNzb2VzL3Blcm1pc3Nhby11c3VhcmlvL3Blcm1pc3Nhby11c3VhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgJi5uby1yYWRpdXMge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJvdGFvLWNvciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5vbGhvIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxlZnQ6IDk0JTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmRpdi10aW1lIHtcclxuICAgIHRvcDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5teS1hdmF0YXIge1xyXG4gICAgbGVmdDogMzclO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLnpvb24tZWxpbWluYWRvIHtcclxuICAgIHpvb206IDAuNjtcclxuICB9IiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jYXJkLm5vLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ib3Rhby1jb3Ige1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5vbGhvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsZWZ0OiA5NCU7XG59XG5cbi5kaXYtdGltZSB7XG4gIHRvcDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubXktYXZhdGFyIHtcbiAgbGVmdDogMzclO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi56b29uLWVsaW1pbmFkbyB7XG4gIHpvb206IDAuNjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/permissoes/permissao-usuario/permissao-usuario.page.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/permissoes/permissao-usuario/permissao-usuario.page.ts ***!
    \******************************************************************************/

  /*! exports provided: PermissaoUsuarioPage */

  /***/
  function srcAppPagesPermissoesPermissaoUsuarioPermissaoUsuarioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissaoUsuarioPage", function () {
      return PermissaoUsuarioPage;
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


    var _model_objetc_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../model/objetc/usuario */
    "./src/app/model/objetc/usuario.ts");
    /* harmony import */


    var _model_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../model/base */
    "./src/app/model/base.ts");
    /* harmony import */


    var _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../service/sigobra/usuario.service */
    "./src/app/service/sigobra/usuario.service.ts");
    /* harmony import */


    var _service_sigobra_permissoes_acesso_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../service/sigobra/permissoes-acesso.service */
    "./src/app/service/sigobra/permissoes-acesso.service.ts");

    var PermissaoUsuarioPage = /*#__PURE__*/function () {
      function PermissaoUsuarioPage(router, base, us, pa) {
        _classCallCheck(this, PermissaoUsuarioPage);

        this.router = router;
        this.base = base;
        this.us = us;
        this.pa = pa;
        this.usuario = new _model_objetc_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        this.pesquisarPerfilUsuario();
        this.pesquisaUsuario();
      }

      _createClass(PermissaoUsuarioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.us.flag === "01") {
            this.usuario = this.us.usuario;
            this.us.flag = "00";
          }
        }
      }, {
        key: "pesquisaUsuario",
        value: function pesquisaUsuario() {
          var _this = this;

          this.base.present();
          return this.us.pesquisar(' ').subscribe(function (data) {
            _this.base.dismiss();

            _this.usuarios = data;
          }, function (error) {
            _this.base.dismiss();

            _this.base.mensagemErro('Falha  ao listar  usuario ' + _this.base.tratarErro(error));
          });
        }
      }, {
        key: "pesquisarPerfilUsuario",
        value: function pesquisarPerfilUsuario() {
          var _this2 = this;

          this.pa.pesquisarPerfilUsuario(' ').subscribe(function (data) {
            _this2.perfisUsuarios = data;
          }, function (error) {
            _this2.base.mensagemErro('Falha ao consultar perfil usuário ' + _this2.base.tratarErro(error));
          });
        }
      }, {
        key: "salvar",
        value: function salvar() {
          var _this3 = this;

          this.base.present();
          this.us.salvar(this.usuario).subscribe(function (data) {
            _this3.base.dismiss();

            _this3.router.navigate(['perfil-usuario']);
          }, function (error) {
            _this3.base.dismiss();
          });
        }
      }]);

      return PermissaoUsuarioPage;
    }();

    PermissaoUsuarioPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _model_base__WEBPACK_IMPORTED_MODULE_4__["Base"]
      }, {
        type: _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
      }, {
        type: _service_sigobra_permissoes_acesso_service__WEBPACK_IMPORTED_MODULE_6__["PermissoesAcessoService"]
      }];
    };

    PermissaoUsuarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-permissao-usuario',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./permissao-usuario.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/permissoes/permissao-usuario/permissao-usuario.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./permissao-usuario.page.scss */
      "./src/app/pages/permissoes/permissao-usuario/permissao-usuario.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _model_base__WEBPACK_IMPORTED_MODULE_4__["Base"], _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"], _service_sigobra_permissoes_acesso_service__WEBPACK_IMPORTED_MODULE_6__["PermissoesAcessoService"]])], PermissaoUsuarioPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-permissoes-permissao-usuario-permissao-usuario-module-es5.js.map