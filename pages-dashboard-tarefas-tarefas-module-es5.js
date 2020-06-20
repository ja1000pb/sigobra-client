function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-tarefas-tarefas-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/tarefas/tarefas.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/tarefas/tarefas.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardTarefasTarefasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding class=\"login auth-page\">\r\n  <div>\r\n    <ion-toolbar color=\"#04ff0c\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button color=\"secondary\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        <ion-text color=\"light\">\r\n          <ion-text color=\"light\" class=\"fw700\">Dashboard Tarefas</ion-text>\r\n        </ion-text>\r\n      </ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-item no-padding class=\"animated fadeInUp\">\r\n          <ion-input [(ngModel)]=\"value\"  name=\"value\" color=\"#04ff0c\" type=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-button size=\"small\" shape=\"round\" color=\"dark\" (click)=\"pesquisar()\">\r\n          <ion-icon name=\"search\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button size=\"small\" shape=\"round\" color=\"dark\" (click)=\"habilitarFiltro()\">\r\n          <ion-icon src=\"assets/icon/options-outline.svg\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </div>\r\n  <div *ngIf=\"filtro\">\r\n    <ion-toolbar color=\"#04ff0c\">\r\n      <ion-buttons slot=\"end\">               \r\n        <ion-item no-padding class=\"animated fadeInUp\" color=\"success\">\r\n          <ion-label position=\"floating\" color=\"light\">Obras</ion-label>\r\n          <ionic-selectable color=\"secondary\" item-content name=\"sobra\" [(ngModel)]=\"obraPesquisa\" [(items)]=\"obras\" \r\n                            closeButtonTex=\"Cancelar\" itemValueField=\"id\" itemTextField=\"nome\" canSearch=\"true\"></ionic-selectable>\r\n        </ion-item>      \r\n        <ion-buttons slot=\"end\">         \r\n          <ion-item no-padding class=\"animated fadeInUp\" color=\"success\">\r\n            <ion-label position=\"floating\" color=\"light\">Local</ion-label>\r\n            <ion-input [(ngModel)]=\"filtros.local\" name=\"local\" type=\"text\" ></ion-input>\r\n          </ion-item>\r\n        </ion-buttons> \r\n        <ion-buttons slot=\"end\">\r\n          <ion-item no-padding class=\"animated fadeInUp\" color=\"success\">\r\n            <ion-label position=\"floating\" color=\"light\">Tipo de Inspeção</ion-label>\r\n            <ionic-selectable color=\"secondary\" item-content name=\"stipo\" [(ngModel)]=\"tipoInspecaoPesquisa\" [(items)]=\"tipoinspecoes\" \r\n                              closeButtonTex=\"Cancelar\" itemValueField=\"id\" itemTextField=\"nome\" canSearch=\"true\"></ionic-selectable>\r\n          </ion-item>\r\n        </ion-buttons>    \r\n        <ion-buttons slot=\"end\">\r\n          <ion-item no-padding class=\"animated fadeInUp\" color=\"success\">\r\n            <ion-label position=\"floating\" color=\"light\">Status</ion-label>\r\n            <ionic-selectable color=\"secondary\" item-content name=\"sstatus\" [(ngModel)]=\"statusPesquisa\" [(items)]=\"statusitens\" \r\n                              closeButtonTex=\"Cancelar\" itemValueField=\"id\" itemTextField=\"nome\" canSearch=\"true\"></ionic-selectable>\r\n          </ion-item>\r\n        </ion-buttons>                \r\n        <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"filtar()\" style=\"zoom: 1.5;\" >\r\n         <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n        </ion-button>  \r\n      </ion-buttons>      \r\n    </ion-toolbar>\r\n  </div>\r\n  <div class=\"auth-content\">\r\n    <form class=\"list-form auth-content\" >\r\n      <ion-grid>               \r\n        <ion-row>  \r\n          <ion-col><ion-item color=\"secondary\"><ion-label></ion-label>Obras</ion-item></ion-col>\r\n          <ion-col><ion-item color=\"secondary\"><ion-label></ion-label>Local de Inspeção</ion-item></ion-col>\r\n          <ion-col><ion-item color=\"secondary\"><ion-label></ion-label>Item de Inspeçãõ</ion-item></ion-col>\r\n          <ion-col><ion-item color=\"secondary\"><ion-label></ion-label>status</ion-item></ion-col>\r\n          <ion-col><ion-item color=\"secondary\"><ion-label></ion-label> . </ion-item></ion-col>      \r\n        </ion-row>\r\n        <ion-item-sliding *ngFor=\"let inspecaoitem of inspecaoitens\" class=\"animated fadeInUp\" color=\"secondary\">  \r\n        <ion-row>\r\n          <ion-col><ion-item><ion-label>{{inspecaoitem.inspecao.obras.nome}}</ion-label></ion-item></ion-col>\r\n          <ion-col><ion-item><ion-label>{{inspecaoitem.inspecao.local}}</ion-label></ion-item></ion-col>\r\n          <ion-col><ion-item><ion-label>{{inspecaoitem.itemtipoinspecao.nome}}</ion-label></ion-item></ion-col>\r\n          <ion-col><ion-item><ion-label>{{inspecaoitem.statusitensinspecao.nome}}</ion-label></ion-item></ion-col>\r\n          <ion-col><ion-item><ion-label>\r\n            <ion-button  shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"realizar(inspecaoitem)\" >\r\n              <ion-icon name=\"checkbox\"></ion-icon>\r\n                Realizar Inspeção\r\n            </ion-button>\r\n          </ion-label></ion-item></ion-col>\r\n        </ion-row>\r\n        </ion-item-sliding> \r\n      </ion-grid>        \r\n    </form>  \r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/model/objetc/filtro/filtro.ts":
  /*!***********************************************!*\
    !*** ./src/app/model/objetc/filtro/filtro.ts ***!
    \***********************************************/

  /*! exports provided: Filtro */

  /***/
  function srcAppModelObjetcFiltroFiltroTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Filtro", function () {
      return Filtro;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Filtro = function Filtro() {
      _classCallCheck(this, Filtro);
    };
    /***/

  },

  /***/
  "./src/app/model/objetc/filtro/pesquisa.ts":
  /*!*************************************************!*\
    !*** ./src/app/model/objetc/filtro/pesquisa.ts ***!
    \*************************************************/

  /*! exports provided: Pesquisa */

  /***/
  function srcAppModelObjetcFiltroPesquisaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pesquisa", function () {
      return Pesquisa;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Pesquisa = function Pesquisa() {
      _classCallCheck(this, Pesquisa);
    };
    /***/

  },

  /***/
  "./src/app/pages/dashboard/tarefas/tarefas-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/dashboard/tarefas/tarefas-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: TarefasPageRoutingModule */

  /***/
  function srcAppPagesDashboardTarefasTarefasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TarefasPageRoutingModule", function () {
      return TarefasPageRoutingModule;
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


    var _tarefas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tarefas.page */
    "./src/app/pages/dashboard/tarefas/tarefas.page.ts");

    var routes = [{
      path: '',
      component: _tarefas_page__WEBPACK_IMPORTED_MODULE_3__["TarefasPage"]
    }];

    var TarefasPageRoutingModule = function TarefasPageRoutingModule() {
      _classCallCheck(this, TarefasPageRoutingModule);
    };

    TarefasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TarefasPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/tarefas/tarefas.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/dashboard/tarefas/tarefas.module.ts ***!
    \***********************************************************/

  /*! exports provided: TarefasPageModule */

  /***/
  function srcAppPagesDashboardTarefasTarefasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TarefasPageModule", function () {
      return TarefasPageModule;
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


    var _tarefas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tarefas-routing.module */
    "./src/app/pages/dashboard/tarefas/tarefas-routing.module.ts");
    /* harmony import */


    var _tarefas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tarefas.page */
    "./src/app/pages/dashboard/tarefas/tarefas.page.ts");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");

    var TarefasPageModule = function TarefasPageModule() {
      _classCallCheck(this, TarefasPageModule);
    };

    TarefasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tarefas_routing_module__WEBPACK_IMPORTED_MODULE_5__["TarefasPageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"]],
      declarations: [_tarefas_page__WEBPACK_IMPORTED_MODULE_6__["TarefasPage"]]
    })], TarefasPageModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/tarefas/tarefas.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/dashboard/tarefas/tarefas.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardTarefasTarefasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: linear-gradient(\n    135deg,\n    var(--ion-color-primary),\n    #ffffff\n  );\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\nion-col {\n  border: 1px solid #120a8f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RhcmVmYXMvQzpcXFVzZXJzXFxyb2JlclxcT25lRHJpdmVcXGlvbmljXFxzaWdvYnJhLXVpL3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFx0YXJlZmFzXFx0YXJlZmFzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RhcmVmYXMvdGFyZWZhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0k7RUFDRTs7OztHQUFBO0FDSU47O0FER0k7RUFDRSxnQkFBQTtFQUNBLGlEQUFBO0FDRE47O0FES007RUFDRSxnQkFBQTtBQ0hSOztBRFFFO0VBQ0UsWUFBQTtBQ0xKOztBRFFFO0VBQ0UseUJBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC90YXJlZmFzL3RhcmVmYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICA6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIDEzNWRlZyxcclxuICAgICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXHJcbiAgICAgICAgI2ZmZmZmZlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAmLm5vLXJhZGl1cyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYm90YW8tY29yIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIGlvbi1jb2wge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzEyMGE4ZjtcclxuICB9IiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMzVkZWcsXG4gICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxuICAgICNmZmZmZmZcbiAgKTtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jYXJkLm5vLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ib3Rhby1jb3Ige1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1jb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTIwYThmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/tarefas/tarefas.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/dashboard/tarefas/tarefas.page.ts ***!
    \*********************************************************/

  /*! exports provided: TarefasPage */

  /***/
  function srcAppPagesDashboardTarefasTarefasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TarefasPage", function () {
      return TarefasPage;
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


    var _model_objetc_filtro_filtro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../model/objetc/filtro/filtro */
    "./src/app/model/objetc/filtro/filtro.ts");
    /* harmony import */


    var _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../model/objetc/filtro/pesquisa */
    "./src/app/model/objetc/filtro/pesquisa.ts");
    /* harmony import */


    var _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../service/sigobra/inspecao.service */
    "./src/app/service/sigobra/inspecao.service.ts");
    /* harmony import */


    var _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../service/sigobra/tipoinspecao.service */
    "./src/app/service/sigobra/tipoinspecao.service.ts");
    /* harmony import */


    var _service_sigobra_statusitensinspecao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../../service/sigobra/statusitensinspecao.service */
    "./src/app/service/sigobra/statusitensinspecao.service.ts");
    /* harmony import */


    var _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../../service/sigobra/obra.service */
    "./src/app/service/sigobra/obra.service.ts");

    var TarefasPage = /*#__PURE__*/function () {
      function TarefasPage(base, is, tis, siis, os, router) {
        _classCallCheck(this, TarefasPage);

        this.base = base;
        this.is = is;
        this.tis = tis;
        this.siis = siis;
        this.os = os;
        this.router = router;
        this.filtro = false;
        this.value = '';
        this.filtros = {
          local: ''
        };
      }

      _createClass(TarefasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.carregarinspecaoitens(" ");
          this.carregarobras();
          this.carregartipoinsp();
          this.carregarstatus();
        }
      }, {
        key: "pesquisar",
        value: function pesquisar() {
          this.carregarinspecaoitens(this.value);
        }
      }, {
        key: "realizar",
        value: function realizar(inspecaoitem) {
          this.is.inspecao = inspecaoitem.inspecao;
          this.router.navigate(['inspecao-realizar']);
        }
      }, {
        key: "carregarinspecaoitens",
        value: function carregarinspecaoitens(value) {
          var _this = this;

          this.is.pesqitem(value).subscribe(function (data) {
            _this.base.dismiss();

            _this.inspecaoitens = data;
          }, function (error) {
            _this.base.dismiss();

            _this.base.mensagemErro('Falha ao cosultar  Inspecao Itens' + _this.base.tratarErro(error));
          });
        }
      }, {
        key: "carregarstatus",
        value: function carregarstatus() {
          var _this2 = this;

          this.siis.pesquisar(" ").subscribe(function (data) {
            _this2.statusitens = data;
          }, function (error) {});
        }
      }, {
        key: "carregartipoinsp",
        value: function carregartipoinsp() {
          var _this3 = this;

          this.tis.pesquisar(" ").subscribe(function (data) {
            _this3.tipoinspecoes = data;
          }, function (error) {});
        }
      }, {
        key: "carregarobras",
        value: function carregarobras() {
          var _this4 = this;

          this.os.pesquisar(" ").subscribe(function (data) {
            _this4.obras = data;
          }, function (error) {});
        }
      }, {
        key: "habilitarFiltro",
        value: function habilitarFiltro() {
          this.filtro = !this.filtro;
        }
      }, {
        key: "filtar",
        value: function filtar() {
          var _this5 = this;

          var filtro = new _model_objetc_filtro_filtro__WEBPACK_IMPORTED_MODULE_4__["Filtro"]();
          filtro.pesquisas = new Array();
          var pesquisa;

          if (this.filtros.local !== undefined && this.filtros.local !== null && this.filtros.local !== '') {
            pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
            pesquisa.comparacao = '=';
            pesquisa.nome = 'local';
            pesquisa.valor = this.filtros.local;
            filtro.pesquisas.push(pesquisa);
          }

          if (this.obraPesquisa !== undefined && this.obraPesquisa !== null) {
            pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
            pesquisa.comparacao = '=';
            pesquisa.nome = 'id';
            pesquisa.valor = this.obraPesquisa.id.toString();
            filtro.pesquisas.push(pesquisa);
          }

          if (this.tipoInspecaoPesquisa !== undefined && this.tipoInspecaoPesquisa !== null) {
            pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
            pesquisa.comparacao = '=';
            pesquisa.nome = 'id';
            pesquisa.valor = this.tipoInspecaoPesquisa.id.toString();
            filtro.pesquisas.push(pesquisa);
          }

          if (this.statusPesquisa !== undefined && this.statusPesquisa !== null) {
            pesquisa = new _model_objetc_filtro_pesquisa__WEBPACK_IMPORTED_MODULE_5__["Pesquisa"]();
            pesquisa.comparacao = '=';
            pesquisa.nome = 'id';
            pesquisa.valor = this.statusPesquisa.id.toString();
            filtro.pesquisas.push(pesquisa);
          }

          this.base.present();
          this.is.filtra(filtro).subscribe(function (data) {
            _this5.base.dismiss();
          }, function (error) {
            _this5.base.dismiss();

            _this5.base.mensagemErro('Falha ao filtrar registros ' + _this5.base.tratarErro(error));
          });
        }
      }]);

      return TarefasPage;
    }();

    TarefasPage.ctorParameters = function () {
      return [{
        type: _model_base__WEBPACK_IMPORTED_MODULE_3__["Base"]
      }, {
        type: _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_6__["InspecaoService"]
      }, {
        type: _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_7__["TipoinspecaoService"]
      }, {
        type: _service_sigobra_statusitensinspecao_service__WEBPACK_IMPORTED_MODULE_8__["StatusitensinspecaoService"]
      }, {
        type: _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_9__["ObraService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    TarefasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tarefas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tarefas.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/tarefas/tarefas.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tarefas.page.scss */
      "./src/app/pages/dashboard/tarefas/tarefas.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_3__["Base"], _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_6__["InspecaoService"], _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_7__["TipoinspecaoService"], _service_sigobra_statusitensinspecao_service__WEBPACK_IMPORTED_MODULE_8__["StatusitensinspecaoService"], _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_9__["ObraService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], TarefasPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-dashboard-tarefas-tarefas-module-es5.js.map