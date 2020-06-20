function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-obra-obras-obras-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/obra/obras/obras.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/obra/obras/obras.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesObraObrasObrasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"#04ff0c\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Obras</ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-input name=\"value\" color=\"#04ff0c\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button size=\"small\" shape=\"round\" color=\"dark\" >\r\n        <ion-icon name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n      \r\n        <ion-item-sliding *ngFor=\"let obra of obras\" class=\"animated fadeInUp\" color=\"secondary\">\r\n          <ion-item >\r\n            <div>                            \r\n                <ion-label color=\"light\">{{ obra.nome }}</ion-label>\r\n                <ion-toggle style=\"top: 8px;\" disabled=true [(ngModel)]=\"obra.fechamentoobra\" color=\"tertiary\" \r\n                            name=\"fechamento\" [checked]=\"obra.fechamentoobra\" check></ion-toggle>               \r\n                <br />                   \r\n                <ion-button  shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"editar(obra)\">\r\n                  <ion-icon name=\"create\"></ion-icon>\r\n                  Editar\r\n                </ion-button>\r\n                <ion-button  shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"excluir(obra)\" >\r\n                  <ion-icon name=\"trash\"></ion-icon>\r\n                  Excluir\r\n                </ion-button>\r\n            </div>\r\n          </ion-item>\r\n        </ion-item-sliding>       \r\n    <div margin-top aling=\"center\" class=\"fixa-bottom\">\r\n      <ion-button color=\"secondary\" size=\"medium\" expand=\"full\" shape=\"round\" icon-right tappable (click)=\"inserir()\">\r\n        Inserir\r\n        <ion-icon name=\"arrow-dropright-circle\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/obra/obras/obras-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/obra/obras/obras-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: ObrasPageRoutingModule */

  /***/
  function srcAppPagesObraObrasObrasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObrasPageRoutingModule", function () {
      return ObrasPageRoutingModule;
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


    var _obras_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./obras.page */
    "./src/app/pages/obra/obras/obras.page.ts");

    var routes = [{
      path: '',
      component: _obras_page__WEBPACK_IMPORTED_MODULE_3__["ObrasPage"]
    }];

    var ObrasPageRoutingModule = function ObrasPageRoutingModule() {
      _classCallCheck(this, ObrasPageRoutingModule);
    };

    ObrasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ObrasPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/obra/obras/obras.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/obra/obras/obras.module.ts ***!
    \**************************************************/

  /*! exports provided: ObrasPageModule */

  /***/
  function srcAppPagesObraObrasObrasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObrasPageModule", function () {
      return ObrasPageModule;
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


    var _obras_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./obras-routing.module */
    "./src/app/pages/obra/obras/obras-routing.module.ts");
    /* harmony import */


    var _obras_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./obras.page */
    "./src/app/pages/obra/obras/obras.page.ts");

    var ObrasPageModule = function ObrasPageModule() {
      _classCallCheck(this, ObrasPageModule);
    };

    ObrasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _obras_routing_module__WEBPACK_IMPORTED_MODULE_5__["ObrasPageRoutingModule"]],
      declarations: [_obras_page__WEBPACK_IMPORTED_MODULE_6__["ObrasPage"]]
    })], ObrasPageModule);
    /***/
  },

  /***/
  "./src/app/pages/obra/obras/obras.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/obra/obras/obras.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesObraObrasObrasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: linear-gradient(\n    135deg,\n    var(--ion-color-primary),\n    #ffffff\n  );\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb2JyYS9vYnJhcy9DOlxcVXNlcnNcXHJvYmVyXFxPbmVEcml2ZVxcaW9uaWNcXHNpZ29icmEtdWkvc3JjXFxhcHBcXHBhZ2VzXFxvYnJhXFxvYnJhc1xcb2JyYXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vYnJhL29icmFzL29icmFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUNFOzs7O0dBQUE7QUNJTjs7QURHSTtFQUNFLGdCQUFBO0VBQ0EsaURBQUE7QUNETjs7QURLTTtFQUNFLGdCQUFBO0FDSFI7O0FEUUU7RUFDRSxZQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vYnJhL29icmFzL29icmFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAxMzVkZWcsXHJcbiAgICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxyXG4gICAgICAgICNmZmZmZmZcclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgJi5uby1yYWRpdXMge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJvdGFvLWNvciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfSIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTM1ZGVnLFxuICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSxcbiAgICAjZmZmZmZmXG4gICk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZC5uby1yYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYm90YW8tY29yIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/obra/obras/obras.page.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/obra/obras/obras.page.ts ***!
    \************************************************/

  /*! exports provided: ObrasPage */

  /***/
  function srcAppPagesObraObrasObrasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObrasPage", function () {
      return ObrasPage;
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


    var _model_objetc_obras__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../model/objetc/obras */
    "./src/app/model/objetc/obras.ts");
    /* harmony import */


    var _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../service/sigobra/obra.service */
    "./src/app/service/sigobra/obra.service.ts");
    /* harmony import */


    var _model_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../model/base */
    "./src/app/model/base.ts");

    var ObrasPage = /*#__PURE__*/function () {
      function ObrasPage(base, os, router) {
        _classCallCheck(this, ObrasPage);

        this.base = base;
        this.os = os;
        this.router = router;
      }

      _createClass(ObrasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.carregarObras(" ");
        }
      }, {
        key: "excluir",
        value: function excluir(obra) {
          this.base.Confirma('Deseja excluir essa empresa', this.removerativo.bind(this), obra);
        }
      }, {
        key: "remover",
        value: function remover(obra) {
          var _this = this;

          this.base.present();
          return this.os["delete"](obra).subscribe(function (data) {
            _this.base.dismiss();

            _this.base.menssagemSucesso('Empresa Excluida');
          }, function (error) {
            _this.base.dismiss();

            _this.base.mensagemErro('Falha  ao Excluir  empresa ' + obra.id + _this.base.tratarErro(error));
          });
        }
      }, {
        key: "editar",
        value: function editar(obra) {
          this.os.obra = obra;
          this.router.navigate(['obra-inserir']);
        }
      }, {
        key: "carregarObras",
        value: function carregarObras(value) {
          var _this2 = this;

          return this.os.pesquisar(value).subscribe(function (data) {
            _this2.obras = data;
          }, function (error) {
            _this2.base.dismiss();

            _this2.base.mensagemErro('Falha  ao listar  Obras ' + _this2.base.tratarErro(error));
          });
        }
      }, {
        key: "inserir",
        value: function inserir() {
          this.os.obra = new _model_objetc_obras__WEBPACK_IMPORTED_MODULE_3__["Obras"]();
          this.router.navigate(['obra-inserir']);
        }
      }, {
        key: "removerativo",
        value: function removerativo(obra) {
          var _this3 = this;

          this.obra = obra;
          this.base.present();

          if (this.obra.ativo !== null && this.obra.ativo !== undefined) {
            this.obra.ativo = false;
          }

          return this.os.editarativo(this.obra).subscribe(function (data) {
            _this3.base.dismiss();

            _this3.router.navigate(['obras']);
          }, function (error) {
            _this3.base.dismiss();

            _this3.base.mensagemErro('Falha  ao Excluir  empresa ' + _this3.obra.id + _this3.obra.ativo + _this3.base.tratarErro(error));
          });
        }
      }]);

      return ObrasPage;
    }();

    ObrasPage.ctorParameters = function () {
      return [{
        type: _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"]
      }, {
        type: _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_4__["ObraService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ObrasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-obras',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./obras.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/obra/obras/obras.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./obras.page.scss */
      "./src/app/pages/obra/obras/obras.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_5__["Base"], _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_4__["ObraService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ObrasPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-obra-obras-obras-module-es5.js.map