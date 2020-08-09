function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inspecao-inspecoes-inspecoes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspecao/inspecoes/inspecoes.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspecao/inspecoes/inspecoes.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInspecaoInspecoesInspecoesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Inspeções</ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n\r\n    <ion-buttons class=\"bt-pesquisa-bar\" slot=\"end\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-input name=\"value\" [(ngModel)]=\"value\" color=\"light\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button size=\"small\" (click)=\"carregarinspecoes(value)\" shape=\"round\" color=\"light\" >\r\n        <ion-icon name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">      \r\n        <ion-item-sliding *ngFor=\"let inspecao of inspecoes\" class=\"animated fadeInUp\">\r\n          <ion-item>\r\n            <div>                            \r\n                <ion-label>{{ inspecao.obras.nome }} - {{ inspecao.local }} - {{ inspecao.dtfinalizada }}</ion-label> <br />                   \r\n                <ion-button  shape=\"round\" color=\"primary\" icon-right tappable (click)=\"editar(inspecao)\">\r\n                  <ion-icon name=\"create\" color=\"warning\"></ion-icon>\r\n                  Editar\r\n                </ion-button>\r\n                <ion-button  shape=\"round\" color=\"primary\" icon-right tappable (click)=\"excluir(inspecao)\" >\r\n                  <ion-icon name=\"trash\" color=\"danger\"></ion-icon>\r\n                  Excluir\r\n                </ion-button>\r\n                <ion-button  shape=\"round\" color=\"primary\" icon-right tappable (click)=\"realizar(inspecao)\" >\r\n                  <ion-icon name=\"checkbox\"></ion-icon>\r\n                  Realizar Inspeção\r\n                </ion-button>\r\n                <ion-button  shape=\"round\" color=\"primary\" icon-right tappable (click)=\"getRelatorioInspecao(inspecao)\" >\r\n                  <ion-icon name=\"newspaper-outline\"></ion-icon>\r\n                   Relatório\r\n                </ion-button>\r\n            </div>\r\n          </ion-item>\r\n        </ion-item-sliding>      \r\n    <div margin-top aling=\"center\" class=\"fixa-bottom\">\r\n      <ion-button color=\"primary\" size=\"medium\" expand=\"full\" shape=\"round\" icon-right tappable (click)=\"inserir()\">\r\n        Inserir\r\n        <ion-icon name=\"arrow-dropright-circle\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/inspecao/inspecoes/inspecoes-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/inspecao/inspecoes/inspecoes-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: InspecoesPageRoutingModule */

  /***/
  function srcAppPagesInspecaoInspecoesInspecoesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InspecoesPageRoutingModule", function () {
      return InspecoesPageRoutingModule;
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


    var _inspecoes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inspecoes.page */
    "./src/app/pages/inspecao/inspecoes/inspecoes.page.ts");

    var routes = [{
      path: '',
      component: _inspecoes_page__WEBPACK_IMPORTED_MODULE_3__["InspecoesPage"]
    }];

    var InspecoesPageRoutingModule = function InspecoesPageRoutingModule() {
      _classCallCheck(this, InspecoesPageRoutingModule);
    };

    InspecoesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InspecoesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/inspecao/inspecoes/inspecoes.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/inspecao/inspecoes/inspecoes.module.ts ***!
    \**************************************************************/

  /*! exports provided: InspecoesPageModule */

  /***/
  function srcAppPagesInspecaoInspecoesInspecoesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InspecoesPageModule", function () {
      return InspecoesPageModule;
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


    var _inspecoes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inspecoes-routing.module */
    "./src/app/pages/inspecao/inspecoes/inspecoes-routing.module.ts");
    /* harmony import */


    var _inspecoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inspecoes.page */
    "./src/app/pages/inspecao/inspecoes/inspecoes.page.ts");

    var InspecoesPageModule = function InspecoesPageModule() {
      _classCallCheck(this, InspecoesPageModule);
    };

    InspecoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inspecoes_routing_module__WEBPACK_IMPORTED_MODULE_5__["InspecoesPageRoutingModule"]],
      declarations: [_inspecoes_page__WEBPACK_IMPORTED_MODULE_6__["InspecoesPage"]]
    })], InspecoesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/inspecao/inspecoes/inspecoes.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/inspecao/inspecoes/inspecoes.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInspecaoInspecoesInspecoesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zcGVjYW8vaW5zcGVjb2VzL0M6XFxVc2Vyc1xccm9iZXJcXE9uZURyaXZlXFxpb25pY1xcc2lnb2JyYS11aS9zcmNcXGFwcFxccGFnZXNcXGluc3BlY2FvXFxpbnNwZWNvZXNcXGluc3BlY29lcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luc3BlY2FvL2luc3BlY29lcy9pbnNwZWNvZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdJO0VBQ0UsNENBQUE7QUNBTjs7QURHSTtFQUNFLGdCQUFBO0VBQ0EsaURBQUE7QUNETjs7QURLTTtFQUNFLGdCQUFBO0FDSFI7O0FEUUU7RUFDRSxZQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnNwZWNhby9pbnNwZWNvZXMvaW5zcGVjb2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgJi5uby1yYWRpdXMge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJvdGFvLWNvciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfSIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZC5uby1yYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYm90YW8tY29yIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/inspecao/inspecoes/inspecoes.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/inspecao/inspecoes/inspecoes.page.ts ***!
    \************************************************************/

  /*! exports provided: InspecoesPage */

  /***/
  function srcAppPagesInspecaoInspecoesInspecoesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InspecoesPage", function () {
      return InspecoesPage;
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


    var _model_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../model/base */
    "./src/app/model/base.ts");
    /* harmony import */


    var _model_objetc_inspecao__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../model/objetc/inspecao */
    "./src/app/model/objetc/inspecao.ts");
    /* harmony import */


    var _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../service/sigobra/inspecao.service */
    "./src/app/service/sigobra/inspecao.service.ts");

    var InspecoesPage = /*#__PURE__*/function () {
      function InspecoesPage(base, is, router) {
        _classCallCheck(this, InspecoesPage);

        this.base = base;
        this.is = is;
        this.router = router;
        this.value = '';
      }

      _createClass(InspecoesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.carregarinspecao(" ");
        }
      }, {
        key: "excluir",
        value: function excluir(inspecao) {
          this.base.Confirma('Deseja excluir essa inspeção', this.removerativo.bind(this), inspecao);
        }
      }, {
        key: "remover",
        value: function remover(inspecao) {
          var _this = this;

          this.base.present();
          return this.is["delete"](inspecao).subscribe(function (data) {
            _this.base.dismiss();

            _this.base.menssagemSucesso('Inspeção Excluida');
          }, function (error) {
            _this.base.dismiss();

            _this.base.mensagemErro('Falha  ao Excluir  inspeção ' + inspecao.id + _this.base.tratarErro(error));
          });
        }
      }, {
        key: "editar",
        value: function editar(inspecao) {
          this.is.inspecao = inspecao;
          this.router.navigate(['inspecao-inserir']);
        }
      }, {
        key: "carregarinspecoes",
        value: function carregarinspecoes(value) {
          var _this2 = this;

          this.base.present();
          return this.is.pesquisar(value).subscribe(function (data) {
            _this2.base.dismiss();

            _this2.inspecoes = data;
          }, function (error) {
            _this2.base.dismiss();

            _this2.base.mensagemErro('Falha  ao listar  inspecao ' + _this2.base.tratarErro(error));
          });
        }
      }, {
        key: "carregarinspecao",
        value: function carregarinspecao(value) {
          var _this3 = this;

          this.base.present();
          return this.is.pesquisa(value).subscribe(function (data) {
            _this3.inspecoes = data;

            _this3.base.dismiss();
          }, function (error) {
            _this3.base.dismiss();

            _this3.base.mensagemErro('Falha  ao listar  inspecao ' + _this3.base.tratarErro(error));
          });
        }
      }, {
        key: "inserir",
        value: function inserir() {
          this.is.inspecao = new _model_objetc_inspecao__WEBPACK_IMPORTED_MODULE_4__["Inspecao"]();
          this.router.navigate(['inspecao-inserir']);
        }
      }, {
        key: "removerativo",
        value: function removerativo(inspecao) {
          var _this4 = this;

          this.inspecao = inspecao;
          this.base.present();

          if (this.inspecao.ativo !== null && this.inspecao.ativo !== undefined) {
            this.inspecao.ativo = false;
          }

          return this.is.editarativo(this.inspecao).subscribe(function (data) {
            _this4.base.dismiss();

            _this4.router.navigate(['inspecoes']);
          }, function (error) {
            _this4.base.dismiss();

            _this4.base.mensagemErro('Falha  ao Excluir  inspecao ' + _this4.inspecao.id + _this4.inspecao.ativo + _this4.base.tratarErro(error));
          });
        }
      }, {
        key: "realizar",
        value: function realizar(inspecao) {
          this.is.inspecao = inspecao;
          this.router.navigate(['inspecao-realizar']);
        }
      }, {
        key: "getRelatorioInspecao",
        value: function getRelatorioInspecao(inspecao) {
          var _this5 = this;

          return this.is.getRelatorioInspecao(inspecao).subscribe(function (data) {
            _this5.base.abrirPDF(data, 'declaração');
          }, function (error) {
            _this5.base.dismiss();

            console.log(error);

            _this5.base.mensagemErro('Gerar Declaração' + inspecao.local + _this5.base.tratarErro(error));
          });
        }
      }]);

      return InspecoesPage;
    }();

    InspecoesPage.ctorParameters = function () {
      return [{
        type: _model_base__WEBPACK_IMPORTED_MODULE_3__["Base"]
      }, {
        type: _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_5__["InspecaoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    InspecoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inspecoes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inspecoes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspecao/inspecoes/inspecoes.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inspecoes.page.scss */
      "./src/app/pages/inspecao/inspecoes/inspecoes.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_3__["Base"], _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_5__["InspecaoService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], InspecoesPage);
    /***/
  },

  /***/
  "./src/app/service/sigobra/inspecao.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/service/sigobra/inspecao.service.ts ***!
    \*****************************************************/

  /*! exports provided: InspecaoService */

  /***/
  function srcAppServiceSigobraInspecaoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InspecaoService", function () {
      return InspecaoService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../autentificacao/autentificacao.service */
    "./src/app/service/autentificacao/autentificacao.service.ts");

    var InspecaoService = /*#__PURE__*/function () {
      function InspecaoService(http, as) {
        _classCallCheck(this, InspecaoService);

        this.http = http;
        this.as = as;
        this.url = '/inspecao';
      }

      _createClass(InspecaoService, [{
        key: "salvar",
        value: function salvar(inspecao) {
          return this.http.post(this.as.url + this.url, inspecao, this.as.getOptions());
        }
      }, {
        key: "editar",
        value: function editar(inspecao) {
          return this.http.put(this.as.url + this.url, inspecao, this.as.getOptions());
        }
      }, {
        key: "delete",
        value: function _delete(inspecao) {
          return this.http.post(this.as.url + this.url + '/deletar', inspecao, this.as.getOptions());
        }
      }, {
        key: "pesquisar",
        value: function pesquisar(value) {
          return this.http.post(this.as.url + this.url + '/pesquisar', value, this.as.getOptions());
        }
      }, {
        key: "pesquisa",
        value: function pesquisa(value) {
          return this.http.post(this.as.url + this.url + '/pesquisa', value, this.as.getOptions());
        }
      }, {
        key: "get",
        value: function get(id) {
          return this.http.post(this.as.url + this.url, id, this.as.getOptions());
        }
      }, {
        key: "edit",
        value: function edit(inspecao) {
          return this.http.post(this.as.url + this.url + '/editar', inspecao, this.as.getOptions());
        }
      }, {
        key: "editarativo",
        value: function editarativo(inspecao) {
          return this.http.post(this.as.url + this.url + '/editarativo', inspecao, this.as.getOptions());
        }
      }, {
        key: "byinspecaoitens",
        value: function byinspecaoitens(inspecao) {
          return this.http.post(this.as.url + this.url + '/byinspecaoitens', inspecao, this.as.getOptions());
        }
      }, {
        key: "aprova",
        value: function aprova(inspecaoitem) {
          return this.http.post(this.as.url + this.url + '/aprova', inspecaoitem, this.as.getOptions());
        }
      }, {
        key: "reprova",
        value: function reprova(inspecaoitem) {
          return this.http.post(this.as.url + this.url + '/reprova', inspecaoitem, this.as.getOptions());
        }
      }, {
        key: "raprova",
        value: function raprova(inspecaoitem) {
          return this.http.post(this.as.url + this.url + '/raprova', inspecaoitem, this.as.getOptions());
        }
      }, {
        key: "filtra",
        value: function filtra(filtro) {
          return this.http.post(this.as.url + this.url + '/filtrar', filtro, this.as.getOptions());
        }
      }, {
        key: "pesquisarUltimosItens",
        value: function pesquisarUltimosItens() {
          return this.http.get(this.as.url + this.url + '/listarultimas', this.as.getOptions());
        }
      }, {
        key: "getRelatorioFiltroObra",
        value: function getRelatorioFiltroObra(filtro) {
          return this.http.post(this.as.url + this.url + '/getrelatoriofiltroobra', filtro, this.as.getOptionsPDF());
        }
      }, {
        key: "getRelatorioFiltroObraConsolidado",
        value: function getRelatorioFiltroObraConsolidado(filtro) {
          return this.http.post(this.as.url + this.url + '/getrelatoriofiltroobraconsolidado', filtro, this.as.getOptionsPDF());
        }
      }, {
        key: "getRelatorioFiltro",
        value: function getRelatorioFiltro(filtro) {
          return this.http.post(this.as.url + this.url + '/getrelatoriofiltro', filtro, this.as.getOptionsPDF());
        }
      }, {
        key: "getRelatorioInspecao",
        value: function getRelatorioInspecao(inspecao) {
          return this.http.post(this.as.url + this.url + '/relatoriodeinpecao', inspecao, this.as.getOptionsPDF());
        }
      }]);

      return InspecaoService;
    }();

    InspecaoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]
      }];
    };

    InspecaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])], InspecaoService);
    /***/
  }
}]);
//# sourceMappingURL=pages-inspecao-inspecoes-inspecoes-module-es5.js.map