(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu contentId=\"my-content\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"dark\" class=\"user-profile\">\r\n\r\n      <ion-item margin-bottom>\r\n        <ion-avatar slot=\"start\" class=\"user-avatar\">\r\n          <ion-img [src]=\"getImagemPerfil()\"></ion-img>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <ion-text color=\"medium\">\r\n            <h1><strong>{{ usuario.login }}</strong></h1>     \r\n          </ion-text>\r\n           <ion-menu-toggle class=\"mto\" auto-hide=\"false\">\r\n            <a class=\"text10\" tappable>\r\n              <ion-text color=\"medium\" (click)=\"alteraSenha()\">\r\n                <ion-icon name=\"keypad\"></ion-icon>\r\n                <strong>Alterar Senha </strong>\r\n              </ion-text>\r\n            </a>\r\n             <ion-text color=\"secondary\"> | </ion-text>\r\n            <a class=\"text10\" tappable>\r\n              <ion-text color=\"medium\" (click)=\"logout()\">\r\n                <ion-icon name=\"log-out\"></ion-icon>\r\n                <strong>sair</strong>\r\n              </ion-text>\r\n            </a>\r\n          </ion-menu-toggle>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content class=\"bg-profile\" id=\"my-content\">\r\n    <div *ngFor=\"let p of appPages\">\r\n      <ion-menu-toggle auto-hide=\"false\" *ngIf=\"p.url\">\r\n        <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\r\n          <ion-icon slot=\"start\" [name]=\"p.icon\" [src]=\"p.src\" ></ion-icon>\r\n          <ion-label>\r\n            {{p.title}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n\r\n    </div>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet main></ion-router-outlet>");

/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");
/* harmony import */ var _menu_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.router.module */ "./src/app/menu/menu.router.module.ts");







const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_5__["MenuPage"]
    }
];
let MenuPageModule = class MenuPageModule {
};
MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_router_module__WEBPACK_IMPORTED_MODULE_6__["MenuPageRoutingModule"]
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_5__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/menu/menu.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: linear-gradient(\n    135deg,\n    var(--ion-color-dark),\n    var(--ion-color-primary)\n  );\n}\n:host ion-list.list-md {\n  padding: 0;\n}\n:host ion-label {\n  color: white;\n}\n:host ion-icon {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcVXNlcnNcXHJvYmVyXFxPbmVEcml2ZVxcaW9uaWNcXHNpZ29icmEtdWkvc3JjXFxhcHBcXG1lbnVcXG1lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0U7Ozs7R0FBQTtBQ0lKO0FER0k7RUFDRSxVQUFBO0FDRE47QURJRTtFQUNFLFlBQUE7QUNGSjtBRElFO0VBQ0UsWUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTM1ZGVnLFxyXG4gICAgICB2YXIoLS1pb24tY29sb3ItZGFyayksXHJcbiAgICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KVxyXG4gICAgKTtcclxuICB9XHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgJi5saXN0LW1kIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMzVkZWcsXG4gICAgdmFyKC0taW9uLWNvbG9yLWRhcmspLFxuICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KVxuICApO1xufVxuOmhvc3QgaW9uLWxpc3QubGlzdC1tZCB7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG46aG9zdCBpb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/menu/menu.page.ts":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _model_objetc_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model/objetc/usuario */ "./src/app/model/objetc/usuario.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/sigobra/usuario.service */ "./src/app/service/sigobra/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/base */ "./src/app/model/base.ts");
/* harmony import */ var _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/autentificacao/autentificacao.service */ "./src/app/service/autentificacao/autentificacao.service.ts");
/* harmony import */ var _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/sigobra/empresa.service */ "./src/app/service/sigobra/empresa.service.ts");








let MenuPage = class MenuPage {
    constructor(us, base, as, router, es) {
        this.us = us;
        this.base = base;
        this.as = as;
        this.router = router;
        this.es = es;
        this.usuario = new _model_objetc_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
        this.appPages = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home',
                src: 'home'
            },
            {
                title: 'Obras',
                icon: 'construct',
                url: '/obras',
            },
            {
                title: 'Tipos de Inspeções',
                icon: 'checkbox',
                url: '/tipoinspecoes',
            },
            {
                title: 'Status Itens',
                icon: 'attach',
                url: '/statusitensinspecoes',
            },
            {
                title: 'Inspeção',
                icon: 'clipboard',
                url: '/inspecoes',
            },
            {
                title: 'Tarefas',
                icon: 'pulse',
                url: '/tarefas',
            },
            {
                title: 'Usuário',
                icon: 'person-add',
                url: '/usuarios',
            },
            {
                title: 'Empresa',
                icon: 'business',
                url: '/empresas',
            },
            {
                title: 'Segurança',
                icon: 'key-outline',
                url: '/perfil-usuario',
            },
            {
                title: 'relatórios ',
                icon: 'newspaper-outline',
                url: '/selecao-relatorio',
            }
        ];
    }
    ngOnInit() {
        try {
            if (this.as.token.nome !== "admin") {
                this.usuario.login = this.as.token.usuario.login;
            }
            else {
                this.usuario.login = "Administrador";
            }
            if (this.as.token.empresa !== null && this.as.token.empresa !== undefined) {
                this.es.getImagem(this.as.token.empresa.id).subscribe(data => {
                    try {
                        this.as.token.empresa.logo = data.logo;
                    }
                    catch (erro) {
                    }
                });
            }
            if (this.as.token.usuario !== null && this.as.token.usuario !== undefined) {
                this.us.getImagem(this.as.token.usuario.id).subscribe(data => {
                    try {
                        this.as.token.usuario.pessoa.foto = data.pessoa.foto;
                    }
                    catch (erro) {
                    }
                });
            }
            //   this.router.navigate(['home']);
        }
        catch (error) {
        }
    }
    navegar() {
    }
    getImagemPerfil() {
        try {
            if (this.as.token != null &&
                this.as.token.usuario != null &&
                this.as.token.usuario.pessoa.foto != null) {
                return "data:image/jpeg;base64," + this.as.token.usuario.pessoa.foto;
            }
            else {
                return "/assets/img/boy-512.png";
            }
        }
        catch (error) {
            return "/assets/img/boy-512.png";
        }
    }
    alteraSenha() {
        this.base.atualizarSenha(this.as.token.usuario);
    }
    logout() {
        this.as.logout();
        this.router.navigate(["login"]);
    }
};
MenuPage.ctorParameters = () => [
    { type: _service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"] },
    { type: _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_6__["AutentificacaoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_7__["EmpresaService"] }
];
MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_sigobra_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"],
        _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_6__["AutentificacaoService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_7__["EmpresaService"]])
], MenuPage);



/***/ }),

/***/ "./src/app/menu/menu.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/menu/menu.router.module.ts ***!
  \********************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");




const routes = [
    {
        path: "",
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
        children: [
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full"
            },
            {
                path: "home",
                loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomePageModule)
            },
            { path: 'login', loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ../login/login.module */ "./src/app/login/login.module.ts")).then(m => m.LoginPageModule) },
            {
                path: "menu/home",
                redirectTo: "home",
                pathMatch: "full"
            },
            {
                path: 'obras',
                loadChildren: () => Promise.all(/*! import() | pages-obra-obras-obras-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("common"), __webpack_require__.e("pages-obra-obras-obras-module")]).then(__webpack_require__.bind(null, /*! ./../pages/obra/obras/obras.module */ "./src/app/pages/obra/obras/obras.module.ts")).then(m => m.ObrasPageModule)
            },
            {
                path: 'obra-inserir',
                loadChildren: () => Promise.all(/*! import() | pages-obra-obra-inserir-obra-inserir-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("default~pages-dashboard-tarefas-tarefas-module~pages-empresa-empresa-inserir-empresa-inserir-module~~da94fea3"), __webpack_require__.e("common"), __webpack_require__.e("pages-obra-obra-inserir-obra-inserir-module")]).then(__webpack_require__.bind(null, /*! ./../pages/obra/obra-inserir/obra-inserir.module */ "./src/app/pages/obra/obra-inserir/obra-inserir.module.ts")).then(m => m.ObraInserirPageModule)
            },
            {
                path: 'empresas',
                loadChildren: () => Promise.all(/*! import() | pages-empresa-empresas-empresas-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("common"), __webpack_require__.e("pages-empresa-empresas-empresas-module")]).then(__webpack_require__.bind(null, /*! ./../pages/empresa/empresas/empresas.module */ "./src/app/pages/empresa/empresas/empresas.module.ts")).then(m => m.EmpresasPageModule)
            },
            {
                path: 'empresa-inserir',
                loadChildren: () => Promise.all(/*! import() | pages-empresa-empresa-inserir-empresa-inserir-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("default~pages-dashboard-tarefas-tarefas-module~pages-empresa-empresa-inserir-empresa-inserir-module~~da94fea3"), __webpack_require__.e("common"), __webpack_require__.e("pages-empresa-empresa-inserir-empresa-inserir-module")]).then(__webpack_require__.bind(null, /*! ./../pages/empresa/empresa-inserir/empresa-inserir.module */ "./src/app/pages/empresa/empresa-inserir/empresa-inserir.module.ts")).then(m => m.EmpresaInserirPageModule)
            },
            {
                path: 'usuarios',
                loadChildren: () => Promise.all(/*! import() | pages-usuario-usuarios-usuarios-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("pages-usuario-usuarios-usuarios-module")]).then(__webpack_require__.bind(null, /*! ./../pages/usuario/usuarios/usuarios.module */ "./src/app/pages/usuario/usuarios/usuarios.module.ts")).then(m => m.UsuariosPageModule)
            },
            {
                path: 'usuario-inserir',
                loadChildren: () => Promise.all(/*! import() | pages-usuario-usuario-inserir-usuario-inserir-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("default~pages-dashboard-tarefas-tarefas-module~pages-empresa-empresa-inserir-empresa-inserir-module~~da94fea3"), __webpack_require__.e("common"), __webpack_require__.e("pages-usuario-usuario-inserir-usuario-inserir-module")]).then(__webpack_require__.bind(null, /*! ./../pages/usuario/usuario-inserir/usuario-inserir.module */ "./src/app/pages/usuario/usuario-inserir/usuario-inserir.module.ts")).then(m => m.UsuarioInserirPageModule)
            },
            {
                path: 'tipoinspecoes',
                loadChildren: () => Promise.all(/*! import() | pages-tipoinspecao-tipoinspecoes-tipoinspecoes-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("common"), __webpack_require__.e("pages-tipoinspecao-tipoinspecoes-tipoinspecoes-module")]).then(__webpack_require__.bind(null, /*! ./../pages/tipoinspecao/tipoinspecoes/tipoinspecoes.module */ "./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes.module.ts")).then(m => m.TipoinspecoesPageModule)
            },
            {
                path: 'tipoinspecao-inserir',
                loadChildren: () => Promise.all(/*! import() | pages-tipoinspecao-tipoinspecao-inserir-tipoinspecao-inserir-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("common"), __webpack_require__.e("pages-tipoinspecao-tipoinspecao-inserir-tipoinspecao-inserir-module")]).then(__webpack_require__.bind(null, /*! ./../pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir.module */ "./src/app/pages/tipoinspecao/tipoinspecao-inserir/tipoinspecao-inserir.module.ts")).then(m => m.TipoinspecaoInserirPageModule)
            },
            {
                path: 'itenstipoinspecao',
                loadChildren: () => Promise.all(/*! import() | pages-tipoinspecao-itenstipoinspecao-itenstipoinspecao-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("pages-tipoinspecao-itenstipoinspecao-itenstipoinspecao-module")]).then(__webpack_require__.bind(null, /*! ./../pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao.module */ "./src/app/pages/tipoinspecao/itenstipoinspecao/itenstipoinspecao.module.ts")).then(m => m.ItenstipoinspecaoPageModule)
            },
            {
                path: 'statusitensinspecoes',
                loadChildren: () => Promise.all(/*! import() | pages-statusitensinspecao-statusitensinspecoes-statusitensinspecoes-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("common"), __webpack_require__.e("pages-statusitensinspecao-statusitensinspecoes-statusitensinspecoes-module")]).then(__webpack_require__.bind(null, /*! ./../pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.module */ "./src/app/pages/statusitensinspecao/statusitensinspecoes/statusitensinspecoes.module.ts")).then(m => m.StatusitensinspecoesPageModule)
            },
            {
                path: 'statusitensinspecao-inserir',
                loadChildren: () => Promise.all(/*! import() | pages-statusitensinspecao-statusitensinspecao-inserir-statusitensinspecao-inserir-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("default~pages-dashboard-tarefas-tarefas-module~pages-empresa-empresa-inserir-empresa-inserir-module~~da94fea3"), __webpack_require__.e("common"), __webpack_require__.e("pages-statusitensinspecao-statusitensinspecao-inserir-statusitensinspecao-inserir-module")]).then(__webpack_require__.bind(null, /*! ./../pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir.module */ "./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir.module.ts")).then(m => m.StatusitensinspecaoInserirPageModule)
            },
            {
                path: 'inspecoes',
                loadChildren: () => Promise.all(/*! import() | pages-inspecao-inspecoes-inspecoes-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("common"), __webpack_require__.e("pages-inspecao-inspecoes-inspecoes-module")]).then(__webpack_require__.bind(null, /*! ./../pages/inspecao/inspecoes/inspecoes.module */ "./src/app/pages/inspecao/inspecoes/inspecoes.module.ts")).then(m => m.InspecoesPageModule)
            },
            {
                path: 'inspecao-inserir',
                loadChildren: () => Promise.all(/*! import() | pages-inspecao-inspecao-inserir-inspecao-inserir-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("default~pages-dashboard-tarefas-tarefas-module~pages-empresa-empresa-inserir-empresa-inserir-module~~da94fea3"), __webpack_require__.e("common"), __webpack_require__.e("pages-inspecao-inspecao-inserir-inspecao-inserir-module")]).then(__webpack_require__.bind(null, /*! ./../pages/inspecao/inspecao-inserir/inspecao-inserir.module */ "./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir.module.ts")).then(m => m.InspecaoInserirPageModule)
            },
            {
                path: 'inspecao-realizar',
                loadChildren: () => Promise.all(/*! import() | pages-inspecao-inspecao-realizar-inspecao-realizar-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("default~pages-dashboard-tarefas-tarefas-module~pages-inspecao-inspecao-realizar-inspecao-realizar-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-inspecao-inspecao-realizar-inspecao-realizar-module")]).then(__webpack_require__.bind(null, /*! ./../pages/inspecao/inspecao-realizar/inspecao-realizar.module */ "./src/app/pages/inspecao/inspecao-realizar/inspecao-realizar.module.ts")).then(m => m.InspecaoRealizarPageModule)
            },
            {
                path: 'tarefas',
                loadChildren: () => Promise.all(/*! import() | pages-dashboard-tarefas-tarefas-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("default~pages-dashboard-tarefas-tarefas-module~pages-empresa-empresa-inserir-empresa-inserir-module~~da94fea3"), __webpack_require__.e("default~pages-dashboard-tarefas-tarefas-module~pages-inspecao-inspecao-realizar-inspecao-realizar-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-dashboard-tarefas-tarefas-module")]).then(__webpack_require__.bind(null, /*! ./../pages/dashboard/tarefas/tarefas.module */ "./src/app/pages/dashboard/tarefas/tarefas.module.ts")).then(m => m.TarefasPageModule)
            },
            {
                path: 'perfil-usuario',
                loadChildren: () => Promise.all(/*! import() | pages-permissoes-perfil-usuario-perfil-usuario-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("common"), __webpack_require__.e("pages-permissoes-perfil-usuario-perfil-usuario-module")]).then(__webpack_require__.bind(null, /*! ./../pages/permissoes/perfil-usuario/perfil-usuario.module */ "./src/app/pages/permissoes/perfil-usuario/perfil-usuario.module.ts")).then(m => m.PerfilUsuarioPageModule)
            },
            {
                path: 'perfil-usuario-inserir',
                loadChildren: () => Promise.all(/*! import() | pages-permissoes-perfil-usuario-inserir-perfil-usuario-inserir-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("common"), __webpack_require__.e("pages-permissoes-perfil-usuario-inserir-perfil-usuario-inserir-module")]).then(__webpack_require__.bind(null, /*! ./../pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir.module */ "./src/app/pages/permissoes/perfil-usuario-inserir/perfil-usuario-inserir.module.ts")).then(m => m.PerfilUsuarioInserirPageModule)
            },
            {
                path: 'permissao-usuario',
                loadChildren: () => Promise.all(/*! import() | pages-permissoes-permissao-usuario-permissao-usuario-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("common"), __webpack_require__.e("pages-permissoes-permissao-usuario-permissao-usuario-module")]).then(__webpack_require__.bind(null, /*! ./../pages/permissoes/permissao-usuario/permissao-usuario.module */ "./src/app/pages/permissoes/permissao-usuario/permissao-usuario.module.ts")).then(m => m.PermissaoUsuarioPageModule)
            },
            {
                path: 'selecao-relatorio',
                loadChildren: () => Promise.all(/*! import() | pages-relatorios-selecao-relatorio-selecao-relatorio-module */[__webpack_require__.e("default~login-login-module~menu-menu-module~pages-dashboard-tarefas-tarefas-module~pages-empresa-emp~9c81ffdb"), __webpack_require__.e("default~pages-dashboard-tarefas-tarefas-module~pages-empresa-empresa-inserir-empresa-inserir-module~~da94fea3"), __webpack_require__.e("common"), __webpack_require__.e("pages-relatorios-selecao-relatorio-selecao-relatorio-module")]).then(__webpack_require__.bind(null, /*! ./../pages/relatorios/selecao-relatorio/selecao-relatorio.module */ "./src/app/pages/relatorios/selecao-relatorio/selecao-relatorio.module.ts")).then(m => m.SelecaoRelatorioPageModule)
            }
        ]
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MenuPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es2015.js.map