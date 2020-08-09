function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tipoinspecao-tipoinspecoes-tipoinspecoes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes.page.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes.page.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTipoinspecaoTipoinspecoesTipoinspecoesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Tipo de Inspeção</ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n\r\n    <ion-buttons class=\"bt-pesquisa-bar\" slot=\"end\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-input [(ngModel)]=\"value\" name=\"value\" color=\"light\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button (click)=\"carregartipoinspecao(value)\" size=\"small\" shape=\"round\" color=\"light\" >\r\n        <ion-icon name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">      \r\n        <ion-item-sliding *ngFor=\"let tipoinspecao of tipoinspecoes\" class=\"animated fadeInUp\">\r\n          <ion-item >\r\n            <div>                            \r\n              <ion-label>{{ tipoinspecao.nome }}</ion-label> <br />                   \r\n                <ion-button  shape=\"round\" color=\"primary\" icon-right tappable (click)=\"editar(tipoinspecao)\">\r\n                  <ion-icon name=\"create\" color=\"warning\"></ion-icon>\r\n                  Editar\r\n                </ion-button>\r\n                <ion-button  shape=\"round\" color=\"primary\" icon-right tappable (click)=\"excluir(tipoinspecao)\" >\r\n                  <ion-icon name=\"trash\" color=\"danger\"></ion-icon>\r\n                  Excluir\r\n                </ion-button>\r\n            </div>\r\n          </ion-item>\r\n        </ion-item-sliding>             \r\n    <div margin-top aling=\"center\" class=\"fixa-bottom\">\r\n      <ion-button color=\"primary\" size=\"medium\" expand=\"full\" shape=\"round\" icon-right tappable (click)=\"inserir()\">\r\n        Inserir\r\n        <ion-icon name=\"arrow-dropright-circle\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: TipoinspecoesPageRoutingModule */

  /***/
  function srcAppPagesTipoinspecaoTipoinspecoesTipoinspecoesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TipoinspecoesPageRoutingModule", function () {
      return TipoinspecoesPageRoutingModule;
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


    var _tipoinspecoes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tipoinspecoes.page */
    "./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes.page.ts");

    var routes = [{
      path: '',
      component: _tipoinspecoes_page__WEBPACK_IMPORTED_MODULE_3__["TipoinspecoesPage"]
    }];

    var TipoinspecoesPageRoutingModule = function TipoinspecoesPageRoutingModule() {
      _classCallCheck(this, TipoinspecoesPageRoutingModule);
    };

    TipoinspecoesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TipoinspecoesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes.module.ts ***!
    \**************************************************************************/

  /*! exports provided: TipoinspecoesPageModule */

  /***/
  function srcAppPagesTipoinspecaoTipoinspecoesTipoinspecoesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TipoinspecoesPageModule", function () {
      return TipoinspecoesPageModule;
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


    var _tipoinspecoes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tipoinspecoes-routing.module */
    "./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes-routing.module.ts");
    /* harmony import */


    var _tipoinspecoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tipoinspecoes.page */
    "./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes.page.ts");

    var TipoinspecoesPageModule = function TipoinspecoesPageModule() {
      _classCallCheck(this, TipoinspecoesPageModule);
    };

    TipoinspecoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tipoinspecoes_routing_module__WEBPACK_IMPORTED_MODULE_5__["TipoinspecoesPageRoutingModule"]],
      declarations: [_tipoinspecoes_page__WEBPACK_IMPORTED_MODULE_6__["TipoinspecoesPage"]]
    })], TipoinspecoesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTipoinspecaoTipoinspecoesTipoinspecoesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGlwb2luc3BlY2FvL3RpcG9pbnNwZWNvZXMvQzpcXFVzZXJzXFxyb2JlclxcT25lRHJpdmVcXGlvbmljXFxzaWdvYnJhLXVpL3NyY1xcYXBwXFxwYWdlc1xcdGlwb2luc3BlY2FvXFx0aXBvaW5zcGVjb2VzXFx0aXBvaW5zcGVjb2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGlwb2luc3BlY2FvL3RpcG9pbnNwZWNvZXMvdGlwb2luc3BlY29lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0k7RUFDRSw0Q0FBQTtBQ0FOOztBREdJO0VBQ0UsZ0JBQUE7RUFDQSxpREFBQTtBQ0ROOztBREtNO0VBQ0UsZ0JBQUE7QUNIUjs7QURRRTtFQUNFLFlBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RpcG9pbnNwZWNhby90aXBvaW5zcGVjb2VzL3RpcG9pbnNwZWNvZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICA6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAmLm5vLXJhZGl1cyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYm90YW8tY29yIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9IiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jYXJkLm5vLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ib3Rhby1jb3Ige1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes.page.ts ***!
    \************************************************************************/

  /*! exports provided: TipoinspecoesPage */

  /***/
  function srcAppPagesTipoinspecaoTipoinspecoesTipoinspecoesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TipoinspecoesPage", function () {
      return TipoinspecoesPage;
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


    var _model_objetc_tipoinspecao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../model/objetc/tipoinspecao */
    "./src/app/model/objetc/tipoinspecao.ts");
    /* harmony import */


    var _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../service/sigobra/tipoinspecao.service */
    "./src/app/service/sigobra/tipoinspecao.service.ts");
    /* harmony import */


    var _model_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../model/base */
    "./src/app/model/base.ts");

    var TipoinspecoesPage = /*#__PURE__*/function () {
      function TipoinspecoesPage(base, tis, router) {
        _classCallCheck(this, TipoinspecoesPage);

        this.base = base;
        this.tis = tis;
        this.router = router;
        this.value = '';
      }

      _createClass(TipoinspecoesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.carregartipoinspecoes(" ");
        }
      }, {
        key: "excluir",
        value: function excluir(tipoinspecao) {
          this.base.Confirma('Deseja excluir essa empresa', this.removerativo.bind(this), tipoinspecao);
        }
      }, {
        key: "remover",
        value: function remover(tipoinspecao) {
          var _this = this;

          this.base.present();
          return this.tis["delete"](tipoinspecao).subscribe(function (data) {
            _this.base.dismiss();

            _this.base.menssagemSucesso('Tipo inspecao Excluida');
          }, function (error) {
            _this.base.dismiss();

            _this.base.mensagemErro('Falha  ao Excluir  empresa ' + tipoinspecao.id + _this.base.tratarErro(error));
          });
        }
      }, {
        key: "editar",
        value: function editar(tipoinspecao) {
          this.tis.tipoinspecao = tipoinspecao;
          this.router.navigate(['tipoinspecao-inserir']);
        }
      }, {
        key: "carregartipoinspecao",
        value: function carregartipoinspecao(value) {
          var _this2 = this;

          this.base.present();
          return this.tis.pesquisar(value).subscribe(function (data) {
            _this2.tipoinspecoes = data;

            _this2.base.dismiss();
          }, function (error) {
            _this2.base.dismiss();

            _this2.base.mensagemErro('Falha  ao listar  tipoinspecao ' + _this2.base.tratarErro(error));
          });
        }
      }, {
        key: "carregartipoinspecoes",
        value: function carregartipoinspecoes(value) {
          var _this3 = this;

          this.base.present();
          return this.tis.pesquisa(value).subscribe(function (data) {
            _this3.tipoinspecoes = data;

            _this3.base.dismiss();
          }, function (error) {
            _this3.base.dismiss();

            _this3.base.mensagemErro('Falha  ao listar  tipoinspecao ' + _this3.base.tratarErro(error));
          });
        }
      }, {
        key: "inserir",
        value: function inserir() {
          this.tis.tipoinspecao = new _model_objetc_tipoinspecao__WEBPACK_IMPORTED_MODULE_3__["TipoInspecao"]();
          this.router.navigate(['tipoinspecao-inserir']);
        }
      }, {
        key: "removerativo",
        value: function removerativo(tipoinspecao) {
          var _this4 = this;

          this.tipoinspecao = tipoinspecao;
          this.base.present();

          if (this.tipoinspecao.ativo !== null && this.tipoinspecao.ativo !== undefined) {
            this.tipoinspecao.ativo = false;
          }

          return this.tis.editarativo(this.tipoinspecao).subscribe(function (data) {
            _this4.base.dismiss();

            _this4.router.navigate(['tipoinspecoes']);
          }, function (error) {
            _this4.base.dismiss();

            _this4.base.mensagemErro('Falha  ao Excluir  tipoinspecao' + _this4.tipoinspecao.id + _this4.tipoinspecao.ativo + _this4.base.tratarErro(error));
          });
        }
      }]);

      return TipoinspecoesPage;
    }();

    TipoinspecoesPage.ctorParameters = function () {
      return [{
        type: _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"]
      }, {
        type: _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_4__["TipoinspecaoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    TipoinspecoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tipoinspecoes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tipoinspecoes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tipoinspecoes.page.scss */
      "./src/app/pages/tipoinspecao/tipoinspecoes/tipoinspecoes.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_5__["Base"], _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_4__["TipoinspecaoService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], TipoinspecoesPage);
    /***/
  },

  /***/
  "./src/app/service/sigobra/tipoinspecao.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/service/sigobra/tipoinspecao.service.ts ***!
    \*********************************************************/

  /*! exports provided: TipoinspecaoService */

  /***/
  function srcAppServiceSigobraTipoinspecaoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TipoinspecaoService", function () {
      return TipoinspecaoService;
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

    var TipoinspecaoService = /*#__PURE__*/function () {
      function TipoinspecaoService(http, as) {
        _classCallCheck(this, TipoinspecaoService);

        this.http = http;
        this.as = as;
        this.url = '/tipoinspecao';
      }

      _createClass(TipoinspecaoService, [{
        key: "salvar",
        value: function salvar(tipoinspecao) {
          return this.http.post(this.as.url + this.url, tipoinspecao, this.as.getOptions());
        }
      }, {
        key: "editar",
        value: function editar(tipoinspecao) {
          return this.http.put(this.as.url + this.url, tipoinspecao, this.as.getOptions());
        }
      }, {
        key: "delete",
        value: function _delete(tipoinspecao) {
          return this.http.post(this.as.url + this.url + '/deletar', tipoinspecao, this.as.getOptions());
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
        value: function edit(tipoinspecao) {
          return this.http.post(this.as.url + this.url + '/editar', tipoinspecao, this.as.getOptions());
        }
      }, {
        key: "editarativo",
        value: function editarativo(tipoinspecao) {
          return this.http.post(this.as.url + this.url + '/editarativo', tipoinspecao, this.as.getOptions());
        }
      }]);

      return TipoinspecaoService;
    }();

    TipoinspecaoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]
      }];
    };

    TipoinspecaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])], TipoinspecaoService);
    /***/
  }
}]);
//# sourceMappingURL=pages-tipoinspecao-tipoinspecoes-tipoinspecoes-module-es5.js.map