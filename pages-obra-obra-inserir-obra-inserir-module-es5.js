function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-obra-obra-inserir-obra-inserir-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/obra/obra-inserir/obra-inserir.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/obra/obra-inserir/obra-inserir.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesObraObraInserirObraInserirPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"#04ff0c\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Obras\r\n        </ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n    <div padding-horizontal text-center>\r\n      <div class=\"logo\"></div>\r\n      <h3 no-margin>\r\n        <ion-text color=\"light\" class=\"fw700\">\r\n          <ion-text color=\"light\">Inserindo</ion-text>\r\n        </ion-text>\r\n      </h3>\r\n    </div>\r\n    <form class=\"list-form auth-conten\" (keydown)=\"keyDownFunction($event)\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Nome\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.nome\" name=\"nome\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Logradouro\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.logradouro\" name=\"logradouro\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Numero\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.numero\" name=\"numero\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Complemento\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.complemento\" name=\"complemento\" color=\"secondary\" \r\n                   type=\"text\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Bairro\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.bairro\" name=\"bairro\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Cidade\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.cidade\" name=\"cidade\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;CEP\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.cep\" name=\"cep\" color=\"secondary\" type=\"text\" \r\n                   [brmasker]=\"{mask:'00.000-000', len:10, userCaracters: true}\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;UF\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.uf\" name=\"uf\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>    \r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Estado\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.estado\" name=\"estado\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n            &nbsp; Data do Início da obra\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"obra.dtinicio\" name=\"dtinicio\" color=\"secondary\" type=\"text\"\r\n                   placeholder=\"00/00/0000\" [brmasker]=\"{mask: '00/00/0000', type:'num', len:10}\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n           &nbsp; Fechamento da Obra\r\n        </ion-label>\r\n        <ion-toggle style=\"top: 8px;\" [(ngModel)]=\"obra.fechamentoobra\" color=\"tertiary\" \r\n                    name=\"fechamentoobra\" [checked]=\"obra.fechamentoobra\" check>\r\n        </ion-toggle>\r\n        <ion-input [(ngModel)]=\"obra.dtfinalizada\" name=\"dtfinalizada\" color=\"secondary\" type=\"text\" disabled=true\r\n                   placeholder=\"00/00/0000\" [brmasker]=\"{mask: '00/00/0000', type:'num', len:10}\">\r\n      </ion-input>\r\n      </ion-item>\r\n      \r\n    </form>\r\n    <div margin-top>\r\n      <ion-button size=\"medium\" expand=\"full\" shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"salvar()\">\r\n        Salvar\r\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/obra/obra-inserir/obra-inserir-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/obra/obra-inserir/obra-inserir-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: ObraInserirPageRoutingModule */

  /***/
  function srcAppPagesObraObraInserirObraInserirRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObraInserirPageRoutingModule", function () {
      return ObraInserirPageRoutingModule;
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


    var _obra_inserir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./obra-inserir.page */
    "./src/app/pages/obra/obra-inserir/obra-inserir.page.ts");

    var routes = [{
      path: '',
      component: _obra_inserir_page__WEBPACK_IMPORTED_MODULE_3__["ObraInserirPage"]
    }];

    var ObraInserirPageRoutingModule = function ObraInserirPageRoutingModule() {
      _classCallCheck(this, ObraInserirPageRoutingModule);
    };

    ObraInserirPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ObraInserirPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/obra/obra-inserir/obra-inserir.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/obra/obra-inserir/obra-inserir.module.ts ***!
    \****************************************************************/

  /*! exports provided: ObraInserirPageModule */

  /***/
  function srcAppPagesObraObraInserirObraInserirModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObraInserirPageModule", function () {
      return ObraInserirPageModule;
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


    var _obra_inserir_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./obra-inserir-routing.module */
    "./src/app/pages/obra/obra-inserir/obra-inserir-routing.module.ts");
    /* harmony import */


    var _obra_inserir_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./obra-inserir.page */
    "./src/app/pages/obra/obra-inserir/obra-inserir.page.ts");
    /* harmony import */


    var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! br-mask */
    "./node_modules/br-mask/dist/index.js");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");

    var ObraInserirPageModule = function ObraInserirPageModule() {
      _classCallCheck(this, ObraInserirPageModule);
    };

    ObraInserirPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"], _obra_inserir_routing_module__WEBPACK_IMPORTED_MODULE_5__["ObraInserirPageRoutingModule"]],
      declarations: [_obra_inserir_page__WEBPACK_IMPORTED_MODULE_6__["ObraInserirPage"]]
    })], ObraInserirPageModule);
    /***/
  },

  /***/
  "./src/app/pages/obra/obra-inserir/obra-inserir.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/obra/obra-inserir/obra-inserir.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesObraObraInserirObraInserirPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: linear-gradient(\n    135deg,\n    var(--ion-color-primary),\n    #ffffff\n  );\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\n.olho {\n  cursor: pointer;\n  left: 94%;\n}\n\n.div-time {\n  top: 30px;\n  position: relative;\n}\n\n.my-avatar {\n  left: 37%;\n  position: relative;\n}\n\n.zoon-eliminado {\n  zoom: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb2JyYS9vYnJhLWluc2VyaXIvQzpcXFVzZXJzXFxyb2JlclxcT25lRHJpdmVcXGlvbmljXFxzaWdvYnJhLXVpL3NyY1xcYXBwXFxwYWdlc1xcb2JyYVxcb2JyYS1pbnNlcmlyXFxvYnJhLWluc2VyaXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vYnJhL29icmEtaW5zZXJpci9vYnJhLWluc2VyaXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdJO0VBQ0U7Ozs7R0FBQTtBQ0lOOztBREdJO0VBQ0UsZ0JBQUE7RUFDQSxpREFBQTtBQ0ROOztBREtNO0VBQ0UsZ0JBQUE7QUNIUjs7QURRRTtFQUNFLFlBQUE7QUNMSjs7QURRRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDTEo7O0FEU0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFNFO0VBQ0UsU0FBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb2JyYS9vYnJhLWluc2VyaXIvb2JyYS1pbnNlcmlyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAxMzVkZWcsXHJcbiAgICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxyXG4gICAgICAgICNmZmZmZmZcclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgJi5uby1yYWRpdXMge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJvdGFvLWNvciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5vbGhvIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxlZnQ6IDk0JTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmRpdi10aW1lIHtcclxuICAgIHRvcDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5teS1hdmF0YXIge1xyXG4gICAgbGVmdDogMzclO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLnpvb24tZWxpbWluYWRvIHtcclxuICAgIHpvb206IDAuNjtcclxuICB9IiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMzVkZWcsXG4gICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxuICAgICNmZmZmZmZcbiAgKTtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jYXJkLm5vLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ib3Rhby1jb3Ige1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5vbGhvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsZWZ0OiA5NCU7XG59XG5cbi5kaXYtdGltZSB7XG4gIHRvcDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubXktYXZhdGFyIHtcbiAgbGVmdDogMzclO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi56b29uLWVsaW1pbmFkbyB7XG4gIHpvb206IDAuNjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/obra/obra-inserir/obra-inserir.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/obra/obra-inserir/obra-inserir.page.ts ***!
    \**************************************************************/

  /*! exports provided: ObraInserirPage */

  /***/
  function srcAppPagesObraObraInserirObraInserirPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObraInserirPage", function () {
      return ObraInserirPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../service/autentificacao/autentificacao.service */
    "./src/app/service/autentificacao/autentificacao.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _model_objetc_obras__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../model/objetc/obras */
    "./src/app/model/objetc/obras.ts");
    /* harmony import */


    var _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../service/sigobra/obra.service */
    "./src/app/service/sigobra/obra.service.ts");
    /* harmony import */


    var _model_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../model/base */
    "./src/app/model/base.ts");

    var ObraInserirPage = /*#__PURE__*/function () {
      function ObraInserirPage(base, os, router, as) {
        _classCallCheck(this, ObraInserirPage);

        this.base = base;
        this.os = os;
        this.router = router;
        this.as = as;
        this.obra = new _model_objetc_obras__WEBPACK_IMPORTED_MODULE_4__["Obras"]();
      }

      _createClass(ObraInserirPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.os.obra !== undefined && this.os.obra !== null) {
            this.obra = this.os.obra;
          }
        }
      }, {
        key: "salvar",
        value: function salvar() {
          this.salvando();
        }
      }, {
        key: "salvando",
        value: function salvando() {
          var _this = this;

          if (this.obra.ativo === undefined || this.obra.ativo === null) {
            this.obra.ativo = true;
          }

          this.obra.empresa = this.as.token.empresa;
          this.base.present();
          this.os.salvar(this.obra).subscribe(function (data) {
            _this.os.obra = new _model_objetc_obras__WEBPACK_IMPORTED_MODULE_4__["Obras"]();

            _this.base.dismiss();

            _this.router.navigate(['obras']);
          }, function (error) {
            _this.base.dismiss();

            _this.base.mensagemErro('Falha ao salvar obra :' + _this.base.tratarErro(error));
          });
        }
      }, {
        key: "editando",
        get: function get() {
          return Boolean(this.obra.id);
        }
      }]);

      return ObraInserirPage;
    }();

    ObraInserirPage.ctorParameters = function () {
      return [{
        type: _model_base__WEBPACK_IMPORTED_MODULE_6__["Base"]
      }, {
        type: _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_5__["ObraService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_1__["AutentificacaoService"]
      }];
    };

    ObraInserirPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-obra-inserir',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./obra-inserir.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/obra/obra-inserir/obra-inserir.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./obra-inserir.page.scss */
      "./src/app/pages/obra/obra-inserir/obra-inserir.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_6__["Base"], _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_5__["ObraService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_1__["AutentificacaoService"]])], ObraInserirPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-obra-obra-inserir-obra-inserir-module-es5.js.map