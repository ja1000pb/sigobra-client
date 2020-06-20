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


    __webpack_exports__["default"] = "<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"#04ff0c\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Inspeções</ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-input name=\"value\" color=\"#04ff0c\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button size=\"small\" shape=\"round\" color=\"dark\" >\r\n        <ion-icon name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">      \r\n        <ion-item-sliding *ngFor=\"let inspecao of inspecoes\" class=\"animated fadeInUp\" color=\"secondary\">\r\n          <ion-item>\r\n            <div>                            \r\n                <ion-label color=\"light\">{{ inspecao.obras.nome }} - {{ inspecao.local }} - {{ inspecao.dtfinalizada }}</ion-label> <br />                   \r\n                <ion-button  shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"editar(inspecao)\">\r\n                  <ion-icon name=\"create\"></ion-icon>\r\n                  Editar\r\n                </ion-button>\r\n                <ion-button  shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"excluir(inspecao)\" >\r\n                  <ion-icon name=\"trash\"></ion-icon>\r\n                  Excluir\r\n                </ion-button>\r\n                <ion-button  shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"realizar(inspecao)\" >\r\n                  <ion-icon name=\"checkbox\"></ion-icon>\r\n                  Realizar Inspeção\r\n                </ion-button>\r\n            </div>\r\n          </ion-item>\r\n        </ion-item-sliding>      \r\n    <div margin-top aling=\"center\" class=\"fixa-bottom\">\r\n      <ion-button color=\"secondary\" size=\"medium\" expand=\"full\" shape=\"round\" icon-right tappable (click)=\"inserir()\">\r\n        Inserir\r\n        <ion-icon name=\"arrow-dropright-circle\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>";
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


    __webpack_exports__["default"] = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: linear-gradient(\n    135deg,\n    var(--ion-color-primary),\n    #ffffff\n  );\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zcGVjYW8vaW5zcGVjb2VzL0M6XFxVc2Vyc1xccm9iZXJcXE9uZURyaXZlXFxpb25pY1xcc2lnb2JyYS11aS9zcmNcXGFwcFxccGFnZXNcXGluc3BlY2FvXFxpbnNwZWNvZXNcXGluc3BlY29lcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luc3BlY2FvL2luc3BlY29lcy9pbnNwZWNvZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdJO0VBQ0U7Ozs7R0FBQTtBQ0lOOztBREdJO0VBQ0UsZ0JBQUE7RUFDQSxpREFBQTtBQ0ROOztBREtNO0VBQ0UsZ0JBQUE7QUNIUjs7QURRRTtFQUNFLFlBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3BlY2FvL2luc3BlY29lcy9pbnNwZWNvZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICA6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIDEzNWRlZyxcclxuICAgICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXHJcbiAgICAgICAgI2ZmZmZmZlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAmLm5vLXJhZGl1cyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYm90YW8tY29yIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9IiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMzVkZWcsXG4gICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxuICAgICNmZmZmZmZcbiAgKTtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jYXJkLm5vLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ib3Rhby1jb3Ige1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";
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
      }

      _createClass(InspecoesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.carregarinspecoes(" ");
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

          return this.is.pesquisar(value).subscribe(function (data) {
            _this2.inspecoes = data;
          }, function (error) {
            _this2.base.dismiss();

            _this2.base.mensagemErro('Falha  ao listar  inspecao ' + _this2.base.tratarErro(error));
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
          var _this3 = this;

          this.inspecao = inspecao;
          this.base.present();

          if (this.inspecao.ativo !== null && this.inspecao.ativo !== undefined) {
            this.inspecao.ativo = false;
          }

          return this.is.editarativo(this.inspecao).subscribe(function (data) {
            _this3.base.dismiss();

            _this3.router.navigate(['inspecoes']);
          }, function (error) {
            _this3.base.dismiss();

            _this3.base.mensagemErro('Falha  ao Excluir  inspecao ' + _this3.inspecao.id + _this3.inspecao.ativo + _this3.base.tratarErro(error));
          });
        }
      }, {
        key: "realizar",
        value: function realizar(inspecao) {
          this.is.inspecao = inspecao;
          this.router.navigate(['inspecao-realizar']);
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
  }
}]);
//# sourceMappingURL=pages-inspecao-inspecoes-inspecoes-module-es5.js.map