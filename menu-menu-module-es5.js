function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-menu contentId=\"my-content\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"dark\" class=\"user-profile\">\r\n\r\n      <ion-item margin-bottom>\r\n        <ion-label>\r\n          <ion-text color=\"medium\">\r\n            <h1><strong>{{ usuario.login }}</strong></h1>     \r\n          </ion-text>\r\n           <ion-menu-toggle class=\"mto\" auto-hide=\"false\">\r\n             <ion-text color=\"secondary\"> | </ion-text>\r\n            <a class=\"text10\" tappable>\r\n              <ion-text color=\"medium\" (click)=\"logout()\">\r\n                <ion-icon name=\"log-out\"></ion-icon>\r\n                <strong>sair</strong>\r\n              </ion-text>\r\n            </a>\r\n          </ion-menu-toggle>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content class=\"bg-profile\" id=\"my-content\">\r\n    <div *ngFor=\"let p of appPages\">\r\n      <ion-menu-toggle auto-hide=\"false\" *ngIf=\"p.url\">\r\n        <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\r\n          <ion-icon slot=\"start\" [name]=\"p.icon\" [src]=\"p.src\" ></ion-icon>\r\n          <ion-label>\r\n            {{p.title}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n\r\n    </div>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet main></ion-router-outlet>";
    /***/
  },

  /***/
  "./src/app/menu/menu.module.ts":
  /*!*************************************!*\
    !*** ./src/app/menu/menu.module.ts ***!
    \*************************************/

  /*! exports provided: MenuPageModule */

  /***/
  function srcAppMenuMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageModule", function () {
      return MenuPageModule;
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


    var _menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menu.page */
    "./src/app/menu/menu.page.ts");
    /* harmony import */


    var _menu_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu.router.module */
    "./src/app/menu/menu.router.module.ts");

    var routes = [{
      path: '',
      component: _menu_page__WEBPACK_IMPORTED_MODULE_5__["MenuPage"]
    }];

    var MenuPageModule = function MenuPageModule() {
      _classCallCheck(this, MenuPageModule);
    };

    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_router_module__WEBPACK_IMPORTED_MODULE_6__["MenuPageRoutingModule"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
      declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_5__["MenuPage"]]
    })], MenuPageModule);
    /***/
  },

  /***/
  "./src/app/menu/menu.page.scss":
  /*!*************************************!*\
    !*** ./src/app/menu/menu.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ion-content {\n  --background: linear-gradient(\n    135deg,\n    var(--ion-color-dark),\n    var(--ion-color-primary)\n  );\n}\n:host ion-list.list-md {\n  padding: 0;\n}\n:host ion-label {\n  color: white;\n}\n:host ion-icon {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcVXNlcnNcXHJvYmVyXFxPbmVEcml2ZVxcaW9uaWNcXHNpZ29icmEtdWkvc3JjXFxhcHBcXG1lbnVcXG1lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0U7Ozs7R0FBQTtBQ0lKO0FER0k7RUFDRSxVQUFBO0FDRE47QURJRTtFQUNFLFlBQUE7QUNGSjtBRElFO0VBQ0UsWUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTM1ZGVnLFxyXG4gICAgICB2YXIoLS1pb24tY29sb3ItZGFyayksXHJcbiAgICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KVxyXG4gICAgKTtcclxuICB9XHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgJi5saXN0LW1kIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMzVkZWcsXG4gICAgdmFyKC0taW9uLWNvbG9yLWRhcmspLFxuICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KVxuICApO1xufVxuOmhvc3QgaW9uLWxpc3QubGlzdC1tZCB7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG46aG9zdCBpb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/menu/menu.page.ts":
  /*!***********************************!*\
    !*** ./src/app/menu/menu.page.ts ***!
    \***********************************/

  /*! exports provided: MenuPage */

  /***/
  function srcAppMenuMenuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPage", function () {
      return MenuPage;
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


    var _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/sigobra/usuario.service */
    "./src/app/service/sigobra/usuario.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _model_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../model/base */
    "./src/app/model/base.ts");
    /* harmony import */


    var _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../service/autentificacao/autentificacao.service */
    "./src/app/service/autentificacao/autentificacao.service.ts");

    var MenuPage = /*#__PURE__*/function () {
      function MenuPage(us, base, as, router) {
        _classCallCheck(this, MenuPage);

        this.us = us;
        this.base = base;
        this.as = as;
        this.router = router;
        this.usuario = new _model_objetc_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
        this.appPages = [{
          title: 'Home',
          url: '/home',
          icon: 'home',
          src: 'home'
        }, {
          title: 'Obras',
          icon: 'construct',
          url: '/obras'
        }, {
          title: 'Tipos de Inspeções',
          icon: 'checkbox',
          url: '/tipoinspecoes'
        }, {
          title: 'Status Itens',
          icon: 'attach',
          url: '/statusitensinspecoes'
        }, {
          title: 'Inspeção',
          icon: 'clipboard',
          url: '/inspecoes'
        }, {
          title: 'Tarefas',
          icon: 'pulse',
          url: '/tarefas'
        }, {
          title: 'Usuario',
          icon: 'person-add',
          url: '/usuarios'
        }, {
          title: 'Empresa',
          icon: 'business',
          url: '/empresas'
        }];
      }

      _createClass(MenuPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.us.usu != "admin") {
            this.usuario.login = this.as.token.usuario.login;
          } else {
            this.usuario.login = "Administrador";
          }
        }
      }, {
        key: "navegar",
        value: function navegar() {}
      }, {
        key: "logout",
        value: function logout() {
          this.as.logout();
          this.router.navigate(["login"]);
        }
      }]);

      return MenuPage;
    }();

    MenuPage.ctorParameters = function () {
      return [{
        type: _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }, {
        type: _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"]
      }, {
        type: _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_6__["AutentificacaoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.page.scss */
      "./src/app/menu/menu.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"], _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_6__["AutentificacaoService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], MenuPage);
    /***/
  },

  /***/
  "./src/app/menu/menu.router.module.ts":
  /*!********************************************!*\
    !*** ./src/app/menu/menu.router.module.ts ***!
    \********************************************/

  /*! exports provided: MenuPageRoutingModule */

  /***/
  function srcAppMenuMenuRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function () {
      return MenuPageRoutingModule;
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


    var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu.page */
    "./src/app/menu/menu.page.ts");

    var routes = [{
      path: "",
      component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
      children: [{
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }, {
        path: "home",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home-home-module */
          [__webpack_require__.e("default~home-home-module~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~~66912b3f"), __webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ../home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'obras',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-obra-obras-obras-module */
          [__webpack_require__.e("default~home-home-module~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~~66912b3f"), __webpack_require__.e("common"), __webpack_require__.e("pages-obra-obras-obras-module")]).then(__webpack_require__.bind(null,
          /*! ./../pages/obra/obras/obras.module */
          "./src/app/pages/obra/obras/obras.module.ts")).then(function (m) {
            return m.ObrasPageModule;
          });
        }
      }, {
        path: 'obra-inserir',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-obra-obra-inserir-obra-inserir-module */
          [__webpack_require__.e("default~home-home-module~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~~66912b3f"), __webpack_require__.e("default~pages-empresa-empresa-inserir-empresa-inserir-module~pages-inspecao-inspecao-inserir-inspeca~c4ccfdb3"), __webpack_require__.e("common"), __webpack_require__.e("pages-obra-obra-inserir-obra-inserir-module")]).then(__webpack_require__.bind(null,
          /*! ./../pages/obra/obra-inserir/obra-inserir.module */
          "./src/app/pages/obra/obra-inserir/obra-inserir.module.ts")).then(function (m) {
            return m.ObraInserirPageModule;
          });
        }
      }, {
        path: 'empresas',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-empresa-empresas-empresas-module */
          [__webpack_require__.e("default~home-home-module~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~~66912b3f"), __webpack_require__.e("common"), __webpack_require__.e("pages-empresa-empresas-empresas-module")]).then(__webpack_require__.bind(null,
          /*! ./../pages/empresa/empresas/empresas.module */
          "./src/app/pages/empresa/empresas/empresas.module.ts")).then(function (m) {
            return m.EmpresasPageModule;
          });
        }
      }, {
        path: 'empresa-inserir',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-empresa-empresa-inserir-empresa-inserir-module */
          [__webpack_require__.e("default~home-home-module~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~~66912b3f"), __webpack_require__.e("default~pages-empresa-empresa-inserir-empresa-inserir-module~pages-inspecao-inspecao-inserir-inspeca~c4ccfdb3"), __webpack_require__.e("common"), __webpack_require__.e("pages-empresa-empresa-inserir-empresa-inserir-module")]).then(__webpack_require__.bind(null,
          /*! ./../pages/empresa/empresa-inserir/empresa-inserir.module */
          "./src/app/pages/empresa/empresa-inserir/empresa-inserir.module.ts")).then(function (m) {
            return m.EmpresaInserirPageModule;
          });
        }
      }, {
        path: 'usuarios',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-usuario-usuarios-usuarios-module */
          [__webpack_require__.e("default~home-home-module~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~~66912b3f"), __webpack_require__.e("common"), __webpack_require__.e("pages-usuario-usuarios-usuarios-module")]).then(__webpack_require__.bind(null,
          /*! ./../pages/usuario/usuarios/usuarios.module */
          "./src/app/pages/usuario/usuarios/usuarios.module.ts")).then(function (m) {
            return m.UsuariosPageModule;
          });
        }
      }, {
        path: 'usuario-inserir',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-usuario-usuario-inserir-usuario-inserir-module */
          [__webpack_require__.e("default~home-home-module~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~~66912b3f"), __webpack_require__.e("default~pages-empresa-empresa-inserir-empresa-inserir-module~pages-inspecao-inspecao-inserir-inspeca~c4ccfdb3"), __webpack_require__.e("common"), __webpack_require__.e("pages-usuario-usuario-inserir-usuario-inserir-module")]).then(__webpack_require__.bind(null,
          /*! ./../pages/usuario/usuario-inserir/usuario-inserir.module */
          "./src/app/pages/usuario/usuario-inserir/usuario-inserir.module.ts")).then(function (m) {
            return m.UsuarioInserirPageModule;
          });
        }
      }, {
        path: 'tipoinspecoes',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-tipoinspecao-tipoinspecoes-tipoinspecoes-module */
          [__webpack_require__.e("default~home-home-module~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~~66912b3f"), __webpack_require__.e("common"), __webpack_require__.e("pages-tipoinspecao-tipoinspecoes-tipoinspecoes-module")]).then(__webpack_require__.bind(null,
          /*! ./../pages/tipoinspecao/tipoinspecoes/tipoinspecoes.module */
          "./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes.module.ts")).then(function (m) {
            return m.TipoinspecoesPageModule;
          });
        }
      }, {
        path: 'tipoinspecao-inserir',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-tipoinspecao-tipoinspecao-inserir-tipoinspecao-inserir-module */
          [__webpack_require__.e("default~home-home-module~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~~66912b3f"), __webpack_require__.e("common"), __webpack_require__.e("pages-tipoinspecao-tipoinspecao-inserir-tipoinspecao-inserir-module")]).then(__webpack_require__.bind(null,
          /*! ./../pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir.module */
          "./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir.module.ts")).then(function (m) {
            return m.TipoinspecaoInserirPageModule;
          });
        }
      }, {
        path: 'itenstipoinspecao',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-tipoinspecao-itenstipoinspecao-itenstipoinspecao-module */
          [__webpack_require__.e("default~home-home-module~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~~66912b3f"), __webpack_require__.e("common"), __webpack_require__.e("pages-tipoinspecao-itenstipoinspecao-itenstipoinspecao-module")]).then(__webpack_require__.bind(null,
          /*! ./../pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao.module */
          "./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao.module.ts")).then(function (m) {
            return m.ItenstipoinspecaoPageModule;
          });
        }
      }, {
        path: 'statusitensinspecoes',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-statusitensinspecao-statusitensinspecoes-statusitensinspecoes-module */
          [__webpack_require__.e("default~home-home-module~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~~66912b3f"), __webpack_require__.e("common"), __webpack_require__.e("pages-statusitensinspecao-statusitensinspecoes-statusitensinspecoes-module")]).then(__webpack_require__.bind(null,
          /*! ./../pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.module */
          "./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.module.ts")).then(function (m) {
            return m.StatusitensinspecoesPageModule;
          });
        }
      }, {
        path: 'statusitensinspecao-inserir',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-statusitensinspecao-statusitensinspecao-inserir-statusitensinspecao-inserir-module */
          [__webpack_require__.e("default~home-home-module~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~~66912b3f"), __webpack_require__.e("default~pages-empresa-empresa-inserir-empresa-inserir-module~pages-inspecao-inspecao-inserir-inspeca~c4ccfdb3"), __webpack_require__.e("common"), __webpack_require__.e("pages-statusitensinspecao-statusitensinspecao-inserir-statusitensinspecao-inserir-module")]).then(__webpack_require__.bind(null,
          /*! ./../pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir.module */
          "./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir.module.ts")).then(function (m) {
            return m.StatusitensinspecaoInserirPageModule;
          });
        }
      }, {
        path: 'inspecoes',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-inspecao-inspecoes-inspecoes-module */
          [__webpack_require__.e("default~home-home-module~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~~66912b3f"), __webpack_require__.e("common"), __webpack_require__.e("pages-inspecao-inspecoes-inspecoes-module")]).then(__webpack_require__.bind(null,
          /*! ./../pages/inspecao/inspecoes/inspecoes.module */
          "./src/app/pages/inspecao/inspecoes/inspecoes.module.ts")).then(function (m) {
            return m.InspecoesPageModule;
          });
        }
      }, {
        path: 'inspecao-inserir',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-inspecao-inspecao-inserir-inspecao-inserir-module */
          [__webpack_require__.e("default~home-home-module~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~~66912b3f"), __webpack_require__.e("default~pages-empresa-empresa-inserir-empresa-inserir-module~pages-inspecao-inspecao-inserir-inspeca~c4ccfdb3"), __webpack_require__.e("common"), __webpack_require__.e("pages-inspecao-inspecao-inserir-inspecao-inserir-module")]).then(__webpack_require__.bind(null,
          /*! ./../pages/inspecao/inspecao-inserir/inspecao-inserir.module */
          "./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir.module.ts")).then(function (m) {
            return m.InspecaoInserirPageModule;
          });
        }
      }, {
        path: 'inspecao-realizar',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-inspecao-inspecao-realizar-inspecao-realizar-module */
          [__webpack_require__.e("default~home-home-module~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~~66912b3f"), __webpack_require__.e("common"), __webpack_require__.e("pages-inspecao-inspecao-realizar-inspecao-realizar-module")]).then(__webpack_require__.bind(null,
          /*! ./../pages/inspecao/inspecao-realizar/inspecao-realizar.module */
          "./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar.module.ts")).then(function (m) {
            return m.InspecaoRealizarPageModule;
          });
        }
      }, {
        path: 'tarefas',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-dashboard-tarefas-tarefas-module */
          [__webpack_require__.e("default~home-home-module~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~~66912b3f"), __webpack_require__.e("common"), __webpack_require__.e("pages-dashboard-tarefas-tarefas-module")]).then(__webpack_require__.bind(null,
          /*! ./../pages/dashboard/tarefas/tarefas.module */
          "./src/app/pages/dashboard/tarefas/tarefas.module.ts")).then(function (m) {
            return m.TarefasPageModule;
          });
        }
      }]
    }];

    var MenuPageRoutingModule = function MenuPageRoutingModule() {
      _classCallCheck(this, MenuPageRoutingModule);
    };

    MenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MenuPageRoutingModule);
    /***/
  }
}]);
//# sourceMappingURL=menu-menu-module-es5.js.map