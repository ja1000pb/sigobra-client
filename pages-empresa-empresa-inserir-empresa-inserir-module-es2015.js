(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-empresa-empresa-inserir-empresa-inserir-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"#04ff0c\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Empresas\r\n        </ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n    <div padding-horizontal text-center>\r\n      <div class=\"logo\"></div>\r\n      <h3 no-margin>\r\n        <ion-text color=\"light\" class=\"fw700\">\r\n          <ion-text color=\"light\">Inserindo</ion-text>\r\n        </ion-text>\r\n      </h3>\r\n    </div>\r\n    <form class=\"list-form auth-conten\" (keydown)=\"keyDownFunction($event)\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Nome\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.nome\" name=\"nome\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;CNPJCPF\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.cnpjcpf\" name=\"cnpjcpf\" color=\"secondary\" type=\"text\"\r\n        placeholder=\"CPF/CNPJ\" [brmasker]=\"{person: true}\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;IERG\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.ierg\" name=\"ierg\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Logradouro\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.logradouro\" name=\"logradouro\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Numero\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.numero\" name=\"numero\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Complemento\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.complemento\" name=\"complemento\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Bairro\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.bairro\" name=\"bairro\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Cidade\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.cidade\" name=\"cidade\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;CEP\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.cep\" name=\"cep\" color=\"secondary\" type=\"text\" [brmasker]=\"{mask:'00.000-000', len:10, userCaracters: true}\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Estado\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.estado\" name=\"estado\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>  \r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;UF\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"empresa.uf\" name=\"uf\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>    \r\n      <ion-grid>\r\n        <ion-row>\r\n            <ion-col size=\"12\" size-sm class=\"\">\r\n              <div>\r\n                <div>\r\n                  <ion-text color=\"light\">&nbsp;Logo</ion-text> \r\n                </div>\r\n                <div>  \r\n                  <ion-item no-padding class=\"animated fadeInUp\">   \r\n                    <input name=\"imgLogo\" type=\"file\" class=\"olho\" color=\"secondary\" accept=\"image/*\"\r\n                           capture=\"camera\" (change)=\"onFileSelected($event)\" id=\"fileInput\" /> \r\n                  </ion-item> \r\n                </div>\r\n                <div>\r\n                  <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"tirarFoto()\">\r\n                    <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n                      Tirar Foto\r\n                  </ion-button>  \r\n                </div>\r\n                <div>                \r\n                  <ion-img name=\"logo\" *ngIf=\"empresa.logo !== null && empresa.logo !== undefined\"\r\n                           [src]=\"base.getImagem(empresa.logo)\"></ion-img> \r\n                </div>\r\n              </div>  \r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>      \r\n    </form>\r\n    <div margin-top>\r\n      <ion-button size=\"medium\" expand=\"full\" shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"salvar()\">\r\n        Salvar\r\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/empresa/empresa-inserir/empresa-inserir-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/empresa/empresa-inserir/empresa-inserir-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EmpresaInserirPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaInserirPageRoutingModule", function() { return EmpresaInserirPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _empresa_inserir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empresa-inserir.page */ "./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.ts");




const routes = [
    {
        path: '',
        component: _empresa_inserir_page__WEBPACK_IMPORTED_MODULE_3__["EmpresaInserirPage"]
    }
];
let EmpresaInserirPageRoutingModule = class EmpresaInserirPageRoutingModule {
};
EmpresaInserirPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmpresaInserirPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/empresa/empresa-inserir/empresa-inserir.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/empresa/empresa-inserir/empresa-inserir.module.ts ***!
  \*************************************************************************/
/*! exports provided: EmpresaInserirPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaInserirPageModule", function() { return EmpresaInserirPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _empresa_inserir_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./empresa-inserir-routing.module */ "./src/app/pages/empresa/empresa-inserir/empresa-inserir-routing.module.ts");
/* harmony import */ var _empresa_inserir_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empresa-inserir.page */ "./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");









let EmpresaInserirPageModule = class EmpresaInserirPageModule {
};
EmpresaInserirPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_8__["BrMaskerModule"],
            _empresa_inserir_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmpresaInserirPageRoutingModule"]
        ],
        declarations: [_empresa_inserir_page__WEBPACK_IMPORTED_MODULE_6__["EmpresaInserirPage"]]
    })
], EmpresaInserirPageModule);



/***/ }),

/***/ "./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: linear-gradient(\n    135deg,\n    var(--ion-color-primary),\n    #ffffff\n  );\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\n.olho {\n  cursor: pointer;\n  left: 94%;\n}\n\n.div-time {\n  top: 30px;\n  position: relative;\n}\n\n.my-avatar {\n  left: 37%;\n  position: relative;\n}\n\n.zoon-eliminado {\n  zoom: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW1wcmVzYS9lbXByZXNhLWluc2VyaXIvQzpcXFVzZXJzXFxyb2JlclxcT25lRHJpdmVcXGlvbmljXFxzaWdvYnJhLXVpL3NyY1xcYXBwXFxwYWdlc1xcZW1wcmVzYVxcZW1wcmVzYS1pbnNlcmlyXFxlbXByZXNhLWluc2VyaXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lbXByZXNhL2VtcHJlc2EtaW5zZXJpci9lbXByZXNhLWluc2VyaXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdJO0VBQ0U7Ozs7R0FBQTtBQ0lOOztBREdJO0VBQ0UsZ0JBQUE7RUFDQSxpREFBQTtBQ0ROOztBREtNO0VBQ0UsZ0JBQUE7QUNIUjs7QURRRTtFQUNFLFlBQUE7QUNMSjs7QURRRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDTEo7O0FEU0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFNFO0VBQ0UsU0FBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZW1wcmVzYS9lbXByZXNhLWluc2VyaXIvZW1wcmVzYS1pbnNlcmlyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAxMzVkZWcsXHJcbiAgICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxyXG4gICAgICAgICNmZmZmZmZcclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgJi5uby1yYWRpdXMge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJvdGFvLWNvciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5vbGhvIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxlZnQ6IDk0JTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmRpdi10aW1lIHtcclxuICAgIHRvcDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5teS1hdmF0YXIge1xyXG4gICAgbGVmdDogMzclO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLnpvb24tZWxpbWluYWRvIHtcclxuICAgIHpvb206IDAuNjtcclxuICB9IiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMzVkZWcsXG4gICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxuICAgICNmZmZmZmZcbiAgKTtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jYXJkLm5vLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ib3Rhby1jb3Ige1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5vbGhvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsZWZ0OiA5NCU7XG59XG5cbi5kaXYtdGltZSB7XG4gIHRvcDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubXktYXZhdGFyIHtcbiAgbGVmdDogMzclO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi56b29uLWVsaW1pbmFkbyB7XG4gIHpvb206IDAuNjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.ts ***!
  \***********************************************************************/
/*! exports provided: EmpresaInserirPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaInserirPage", function() { return EmpresaInserirPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../service/sigobra/empresa.service */ "./src/app/service/sigobra/empresa.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_objetc_empresa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/objetc/empresa */ "./src/app/model/objetc/empresa.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/base */ "./src/app/model/base.ts");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");







let EmpresaInserirPage = class EmpresaInserirPage {
    constructor(base, es, camera, router) {
        this.base = base;
        this.es = es;
        this.camera = camera;
        this.router = router;
        this.empresa = new _model_objetc_empresa__WEBPACK_IMPORTED_MODULE_3__["Empresa"]();
    }
    ngOnInit() {
        if ((this.es.empresa !== undefined) && (this.es.empresa !== null)) {
            this.empresa = this.es.empresa;
        }
    }
    salvar() {
        this.salvando();
    }
    salvando() {
        if ((this.empresa.ativo === undefined) || (this.empresa.ativo === null)) {
            this.empresa.ativo = true;
        }
        this.base.present();
        this.es.salvar(this.empresa).subscribe(data => {
            this.es.empresa = new _model_objetc_empresa__WEBPACK_IMPORTED_MODULE_3__["Empresa"]();
            this.base.dismiss();
            this.router.navigate(['empresas']);
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha ao salvar empresa :' + this.base.tratarErro(error));
        });
    }
    keyDownFunction(event) {
    }
    onFileSelected(event) {
        console.log(event);
        let files = event.target.files;
        let file = files[0];
        if (files && file) {
            let reader = new FileReader();
            reader.onload = this.converteToBase64Depois.bind(this);
            reader.readAsBinaryString(file);
        }
        console.log(this.empresa);
    }
    converteToBase64Depois(readerEvt) {
        const binaryString = readerEvt.target.result;
        this.empresa.logo = btoa(binaryString);
    }
    addFoto(local) {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: local
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.empresa.logo = imageData;
        }, (err) => {
            // Handle error
        });
    }
    tirarFoto() {
        this.addFoto(1);
    }
};
EmpresaInserirPage.ctorParameters = () => [
    { type: _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"] },
    { type: _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_1__["EmpresaService"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EmpresaInserirPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-empresa-inserir',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./empresa-inserir.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./empresa-inserir.page.scss */ "./src/app/pages/empresa/empresa-inserir/empresa-inserir.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_5__["Base"], _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_1__["EmpresaService"], _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], EmpresaInserirPage);



/***/ })

}]);
//# sourceMappingURL=pages-empresa-empresa-inserir-empresa-inserir-module-es2015.js.map