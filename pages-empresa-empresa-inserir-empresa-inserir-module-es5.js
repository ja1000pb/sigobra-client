function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-empresa-empresa-inserir-empresa-inserir-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEmpresaEmpresaInserirEmpresaInserirPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Empresas\r\n        </ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <div padding-horizontal text-center>\r\n      <div class=\"logo\"></div>\r\n      <h3 no-margin>\r\n        <ion-text color=\"light\" class=\"fw700\">\r\n          <ion-text color=\"light\"> &nbsp;Inserindo</ion-text>\r\n        </ion-text>\r\n      </h3>\r\n    </div>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n    <form class=\"list-form auth-conten\" >\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Nome\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.nome\" name=\"nome\"  type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;CNPJCPF\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.cnpjcpf\" name=\"cnpjcpf\"  type=\"text\"\r\n        placeholder=\"CPF/CNPJ\" [brmasker]=\"{person: true}\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;IERG\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.ierg\" name=\"ierg\"  type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;CEP\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.cep\" name=\"cep\"  type=\"text\"  (ionBlur)= \"consultaCEP($event.target.value)\" \r\n                   [brmasker]=\"{mask:'00.000-000', len:10, userCaracters: true}\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Numero\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.numero\" name=\"numero\"  type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Complemento\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.complemento\" name=\"complemento\"  type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Logradouro\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.logradouro\" name=\"logradouro\"  type=\"text\"></ion-input>\r\n      </ion-item>     \r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Bairro\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.bairro\" name=\"bairro\"  type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Cidade\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.cidade\" name=\"cidade\"  type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Estado\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.estado\" name=\"estado\"  type=\"text\"></ion-input>\r\n      </ion-item>  \r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;UF\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.uf\" name=\"uf\"  type=\"text\"></ion-input>\r\n      </ion-item>    \r\n      <ion-grid>\r\n        <ion-row>\r\n            <ion-col size=\"12\" size-sm class=\"\">\r\n              <div>\r\n                <div>\r\n                  <ion-text >&nbsp;Logo</ion-text> \r\n                </div>\r\n                <div>  \r\n                  <ion-item no-padding class=\"animated fadeInUp\">   \r\n                    <input name=\"imgLogo\" type=\"file\" class=\"olho\" color=\"secondary\" accept=\"image/*\"\r\n                           capture=\"camera\" (change)=\"onFileSelected($event)\" id=\"fileInput\" /> \r\n                  </ion-item> \r\n                </div>\r\n                <div>\r\n                  <ion-button fill=\"clear\" expand=\"full\" (click)=\"tirarFoto()\">\r\n                    <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n                      Tirar Foto\r\n                  </ion-button>  \r\n                </div>\r\n                <div>                \r\n                  <ion-img name=\"logo\" *ngIf=\"empresa.logo !== null && empresa.logo !== undefined\"\r\n                           [src]=\"base.getImagem(empresa.logo)\"></ion-img> \r\n                </div>\r\n              </div>  \r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>      \r\n    </form>\r\n    <div margin-top>\r\n      <ion-button size=\"medium\" expand=\"full\" shape=\"round\" color=\"primary\" icon-right tappable (click)=\"salvar()\">\r\n        Salvar\r\n        <ion-icon name=\"checkmark-circle\" color=\"success\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/empresa/empresa-inserir/empresa-inserir-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/empresa/empresa-inserir/empresa-inserir-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: EmpresaInserirPageRoutingModule */

  /***/
  function srcAppPagesEmpresaEmpresaInserirEmpresaInserirRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresaInserirPageRoutingModule", function () {
      return EmpresaInserirPageRoutingModule;
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


    var _empresa_inserir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./empresa-inserir.page */
    "./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.ts");

    var routes = [{
      path: '',
      component: _empresa_inserir_page__WEBPACK_IMPORTED_MODULE_3__["EmpresaInserirPage"]
    }];

    var EmpresaInserirPageRoutingModule = function EmpresaInserirPageRoutingModule() {
      _classCallCheck(this, EmpresaInserirPageRoutingModule);
    };

    EmpresaInserirPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EmpresaInserirPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/empresa/empresa-inserir/empresa-inserir.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/empresa/empresa-inserir/empresa-inserir.module.ts ***!
    \*************************************************************************/

  /*! exports provided: EmpresaInserirPageModule */

  /***/
  function srcAppPagesEmpresaEmpresaInserirEmpresaInserirModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresaInserirPageModule", function () {
      return EmpresaInserirPageModule;
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


    var _empresa_inserir_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./empresa-inserir-routing.module */
    "./src/app/pages/empresa/empresa-inserir/empresa-inserir-routing.module.ts");
    /* harmony import */


    var _empresa_inserir_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./empresa-inserir.page */
    "./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.ts");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
    /* harmony import */


    var br_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! br-mask */
    "./node_modules/br-mask/dist/index.js");

    var EmpresaInserirPageModule = function EmpresaInserirPageModule() {
      _classCallCheck(this, EmpresaInserirPageModule);
    };

    EmpresaInserirPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"], br_mask__WEBPACK_IMPORTED_MODULE_8__["BrMaskerModule"], _empresa_inserir_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmpresaInserirPageRoutingModule"]],
      declarations: [_empresa_inserir_page__WEBPACK_IMPORTED_MODULE_6__["EmpresaInserirPage"]]
    })], EmpresaInserirPageModule);
    /***/
  },

  /***/
  "./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEmpresaEmpresaInserirEmpresaInserirPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: var(--ion-color-success-shade);\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\n.olho {\n  cursor: pointer;\n  left: 94%;\n}\n\n.div-time {\n  top: 30px;\n  position: relative;\n}\n\n.my-avatar {\n  left: 37%;\n  position: relative;\n}\n\n.zoon-eliminado {\n  zoom: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW1wcmVzYS9lbXByZXNhLWluc2VyaXIvQzpcXFVzZXJzXFxyb2JlclxcT25lRHJpdmVcXGlvbmljXFxzaWdvYnJhLXVpL3NyY1xcYXBwXFxwYWdlc1xcZW1wcmVzYVxcZW1wcmVzYS1pbnNlcmlyXFxlbXByZXNhLWluc2VyaXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lbXByZXNhL2VtcHJlc2EtaW5zZXJpci9lbXByZXNhLWluc2VyaXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdJO0VBQ0UsNENBQUE7QUNBTjs7QURHSTtFQUNFLGdCQUFBO0VBQ0EsaURBQUE7QUNETjs7QURLTTtFQUNFLGdCQUFBO0FDSFI7O0FEUUU7RUFDRSxZQUFBO0FDTEo7O0FEUUU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ0xKOztBRFNFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTRTtFQUNFLFNBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcHJlc2EvZW1wcmVzYS1pbnNlcmlyL2VtcHJlc2EtaW5zZXJpci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICYubm8tcmFkaXVzIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3Rhby1jb3Ige1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAub2xobyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsZWZ0OiA5NCU7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5kaXYtdGltZSB7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAubXktYXZhdGFyIHtcclxuICAgIGxlZnQ6IDM3JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC56b29uLWVsaW1pbmFkbyB7XHJcbiAgICB6b29tOiAwLjY7XHJcbiAgfVxyXG5cclxuIiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jYXJkLm5vLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ib3Rhby1jb3Ige1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5vbGhvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsZWZ0OiA5NCU7XG59XG5cbi5kaXYtdGltZSB7XG4gIHRvcDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubXktYXZhdGFyIHtcbiAgbGVmdDogMzclO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi56b29uLWVsaW1pbmFkbyB7XG4gIHpvb206IDAuNjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.ts ***!
    \***********************************************************************/

  /*! exports provided: EmpresaInserirPage */

  /***/
  function srcAppPagesEmpresaEmpresaInserirEmpresaInserirPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresaInserirPage", function () {
      return EmpresaInserirPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../service/sigobra/empresa.service */
    "./src/app/service/sigobra/empresa.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_objetc_empresa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../model/objetc/empresa */
    "./src/app/model/objetc/empresa.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _model_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../model/base */
    "./src/app/model/base.ts");
    /* harmony import */


    var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/Camera/ngx */
    "./node_modules/@ionic-native/Camera/ngx/index.js");
    /* harmony import */


    var _service_viacep_viacep_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../service/viacep/viacep.service */
    "./src/app/service/viacep/viacep.service.ts");
    /* harmony import */


    var _model_enums_estado_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../model/enums/estado.enum */
    "./src/app/model/enums/estado.enum.ts");

    var EmpresaInserirPage = /*#__PURE__*/function () {
      function EmpresaInserirPage(base, es, camera, router, vcs) {
        _classCallCheck(this, EmpresaInserirPage);

        this.base = base;
        this.es = es;
        this.camera = camera;
        this.router = router;
        this.vcs = vcs;
        this.empresa = new _model_objetc_empresa__WEBPACK_IMPORTED_MODULE_3__["Empresa"]();
      }

      _createClass(EmpresaInserirPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.es.empresa !== undefined && this.es.empresa !== null) {
            this.empresa = this.es.empresa;
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

          if (this.empresa.ativo === undefined || this.empresa.ativo === null) {
            this.empresa.ativo = true;
          }

          this.base.present();
          this.es.salvar(this.empresa).subscribe(function (data) {
            _this.es.empresa = new _model_objetc_empresa__WEBPACK_IMPORTED_MODULE_3__["Empresa"]();

            _this.base.dismiss();

            _this.router.navigate(['empresas']);
          }, function (error) {
            _this.base.dismiss();

            _this.base.mensagemErro('Falha ao salvar empresa :' + _this.base.tratarErro(error));
          });
        }
      }, {
        key: "keyDownFunction",
        value: function keyDownFunction(event) {}
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          console.log(event);
          var files = event.target.files;
          var file = files[0];

          if (files && file) {
            var reader = new FileReader();
            reader.onload = this.converteToBase64Depois.bind(this);
            reader.readAsBinaryString(file);
          }

          console.log(this.empresa);
        }
      }, {
        key: "converteToBase64Depois",
        value: function converteToBase64Depois(readerEvt) {
          var binaryString = readerEvt.target.result;
          this.empresa.logo = btoa(binaryString);
        }
      }, {
        key: "addFoto",
        value: function addFoto(local) {
          var _this2 = this;

          var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: local
          };
          this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this2.empresa.logo = imageData;
          }, function (err) {// Handle error
          });
        }
      }, {
        key: "tirarFoto",
        value: function tirarFoto() {
          this.addFoto(1);
        }
      }, {
        key: "consultaCEP",
        value: function consultaCEP(cep) {
          var _this3 = this;

          if (cep !== null && cep !== undefined && cep !== '') {
            cep = cep.replace(/\D/g, '');

            if (cep.length > 7) {
              this.base.present();
              this.vcs.consultaCEP(cep).subscribe(function (data) {
                _this3.base.dismiss();

                _this3.popula(data);
              }, function (error) {
                _this3.base.dismiss();

                _this3.base.mensagemErro('Falha ao buscar CEP :' + _this3.base.tratarErro(error));
              });
            }
          }
        }
      }, {
        key: "popula",
        value: function popula(data) {
          if (data.erro !== undefined && data.erro !== null && data.erro) {
            this.base.mensagemErro('Falha ao consultar endereço do CEP');
            return;
          }

          this.empresa.logradouro = data.logradouro;
          this.empresa.complemento = data.complemento;
          this.empresa.bairro = data.bairro;
          this.empresa.cidade = data.localidade;
          this.empresa.uf = data.uf;

          for (var uf in _model_enums_estado_enum__WEBPACK_IMPORTED_MODULE_8__["Estado"]) {
            if (data.uf === uf) {
              this.empresa.estado = _model_enums_estado_enum__WEBPACK_IMPORTED_MODULE_8__["Estado"][uf];
              break;
            }
          }
        }
      }]);

      return EmpresaInserirPage;
    }();

    EmpresaInserirPage.ctorParameters = function () {
      return [{
        type: _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"]
      }, {
        type: _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_1__["EmpresaService"]
      }, {
        type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _service_viacep_viacep_service__WEBPACK_IMPORTED_MODULE_7__["ViacepService"]
      }];
    };

    EmpresaInserirPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-empresa-inserir',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./empresa-inserir.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./empresa-inserir.page.scss */
      "./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_5__["Base"], _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_1__["EmpresaService"], _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_viacep_viacep_service__WEBPACK_IMPORTED_MODULE_7__["ViacepService"]])], EmpresaInserirPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-empresa-empresa-inserir-empresa-inserir-module-es5.js.map