(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inspecao-inspecao-inserir-inspecao-inserir-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"#04ff0c\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Inspeção\r\n        </ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n    <div padding-horizontal text-center>\r\n      <div class=\"logo\"></div>\r\n      <h3 no-margin>\r\n        <ion-text color=\"light\" class=\"fw700\">\r\n          <ion-text color=\"light\">Inserindo</ion-text>\r\n        </ion-text>\r\n      </h3>\r\n    </div>\r\n    <form class=\"list-form auth-conten\">\r\n      <ion-item no-padding class=\"animated fadeInUp\" color=\"success\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp; Obras\r\n        </ion-label>\r\n        <ionic-selectable color=\"secondary\" item-content name=\"obra\" [(items)]=\"obras\" \r\n          closeButtonText=\"Cancelar\" itemTextField=\"nome\" canSearch=\"true\" [(ngModel)]=\"inspecao.obras\"\r\n          [isConfirmButtonEnabled]=\"true\" (onSelect)=\"selecionarobra($event)\">\r\n        </ionic-selectable>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Local\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"inspecao.local\" name=\"local\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n            &nbsp; Data do Início da inspeção\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"inspecao.dtinicio\" name=\"dtinicio\" color=\"secondary\" type=\"text\"\r\n                   placeholder=\"00/00/0000\" [brmasker]=\"{mask: '00/00/0000', type:'num', len:10}\">\r\n        </ion-input>\r\n      </ion-item>    \r\n      <ion-item no-padding class=\"animated fadeInUp\" color=\"success\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp; Tipo de Inspeção\r\n        </ion-label>\r\n        <ionic-selectable color=\"secondary\" item-content name=\"tipoinspecao\" [(items)]=\"tipoinspecoes\" \r\n          closeButtonText=\"Cancelar\" itemTextField=\"nome\" canSearch=\"true\" [(ngModel)]=\"inspecao.tipoInspecao\"\r\n          [isConfirmButtonEnabled]=\"true\" (onSelect)=\"selecionartipoinspecao($event)\">\r\n        </ionic-selectable>\r\n      </ion-item>\r\n    </form>\r\n    <div margin-top>\r\n      <ion-button size=\"medium\" expand=\"full\" shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"salvar()\">\r\n        Salvar\r\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: InspecaoInserirPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspecaoInserirPageRoutingModule", function() { return InspecaoInserirPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inspecao_inserir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspecao-inserir.page */ "./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir.page.ts");




const routes = [
    {
        path: '',
        component: _inspecao_inserir_page__WEBPACK_IMPORTED_MODULE_3__["InspecaoInserirPage"]
    }
];
let InspecaoInserirPageRoutingModule = class InspecaoInserirPageRoutingModule {
};
InspecaoInserirPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InspecaoInserirPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir.module.ts ***!
  \****************************************************************************/
/*! exports provided: InspecaoInserirPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspecaoInserirPageModule", function() { return InspecaoInserirPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _inspecao_inserir_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inspecao-inserir-routing.module */ "./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir-routing.module.ts");
/* harmony import */ var _inspecao_inserir_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inspecao-inserir.page */ "./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir.page.ts");









let InspecaoInserirPageModule = class InspecaoInserirPageModule {
};
InspecaoInserirPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_5__["BrMaskerModule"],
            _inspecao_inserir_routing_module__WEBPACK_IMPORTED_MODULE_7__["InspecaoInserirPageRoutingModule"]
        ],
        declarations: [_inspecao_inserir_page__WEBPACK_IMPORTED_MODULE_8__["InspecaoInserirPage"]]
    })
], InspecaoInserirPageModule);



/***/ }),

/***/ "./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: linear-gradient(\n    135deg,\n    var(--ion-color-primary),\n    #ffffff\n  );\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zcGVjYW8vaW5zcGVjYW8taW5zZXJpci9DOlxcVXNlcnNcXHJvYmVyXFxPbmVEcml2ZVxcaW9uaWNcXHNpZ29icmEtdWkvc3JjXFxhcHBcXHBhZ2VzXFxpbnNwZWNhb1xcaW5zcGVjYW8taW5zZXJpclxcaW5zcGVjYW8taW5zZXJpci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luc3BlY2FvL2luc3BlY2FvLWluc2VyaXIvaW5zcGVjYW8taW5zZXJpci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0k7RUFDRTs7OztHQUFBO0FDSU47O0FER0k7RUFDRSxnQkFBQTtFQUNBLGlEQUFBO0FDRE47O0FES007RUFDRSxnQkFBQTtBQ0hSOztBRFFFO0VBQ0UsWUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zcGVjYW8vaW5zcGVjYW8taW5zZXJpci9pbnNwZWNhby1pbnNlcmlyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAxMzVkZWcsXHJcbiAgICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxyXG4gICAgICAgICNmZmZmZmZcclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgJi5uby1yYWRpdXMge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJvdGFvLWNvciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfSIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTM1ZGVnLFxuICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSxcbiAgICAjZmZmZmZmXG4gICk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZC5uby1yYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYm90YW8tY29yIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir.page.ts ***!
  \**************************************************************************/
/*! exports provided: InspecaoInserirPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspecaoInserirPage", function() { return InspecaoInserirPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/base */ "./src/app/model/base.ts");
/* harmony import */ var _model_objetc_inspecao__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../model/objetc/inspecao */ "./src/app/model/objetc/inspecao.ts");
/* harmony import */ var _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../service/sigobra/inspecao.service */ "./src/app/service/sigobra/inspecao.service.ts");
/* harmony import */ var _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../service/sigobra/obra.service */ "./src/app/service/sigobra/obra.service.ts");
/* harmony import */ var _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../service/sigobra/tipoinspecao.service */ "./src/app/service/sigobra/tipoinspecao.service.ts");








let InspecaoInserirPage = class InspecaoInserirPage {
    constructor(base, is, tis, os, router) {
        this.base = base;
        this.is = is;
        this.tis = tis;
        this.os = os;
        this.router = router;
        this.inspecao = new _model_objetc_inspecao__WEBPACK_IMPORTED_MODULE_4__["Inspecao"]();
    }
    ngOnInit() {
        if ((this.is.inspecao !== undefined) && (this.is.inspecao !== null)) {
            this.inspecao = this.is.inspecao;
        }
        this.carregarobras();
        this.carregartipoinspecao();
    }
    carregarobras() {
        this.os.pesquisar1(' ').subscribe(data => {
            this.base.dismiss();
            this.obras = data;
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha ao cosultar Obra ' + this.base.tratarErro(error));
        });
    }
    carregartipoinspecao() {
        this.tis.pesquisar(' ').subscribe(data => {
            this.base.dismiss();
            this.tipoinspecoes = data;
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha ao cosultar Tipo Inspecao ' + this.base.tratarErro(error));
        });
    }
    get editando() {
        return Boolean(this.inspecao.id);
    }
    salvar() {
        this.salvando();
    }
    salvando() {
        if ((this.inspecao.ativo === undefined) || (this.inspecao.ativo === null)) {
            this.inspecao.ativo = true;
        }
        this.base.present();
        this.is.salvar(this.inspecao).subscribe(data => {
            this.is.inspecao = new _model_objetc_inspecao__WEBPACK_IMPORTED_MODULE_4__["Inspecao"]();
            this.base.dismiss();
            this.router.navigate(['inspecoes']);
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha ao salvar inspecao :' + this.base.tratarErro(error));
        });
    }
    editar() {
        this.base.present();
        if ((this.inspecao.ativo !== null) && (this.inspecao.ativo !== undefined)) {
            this.inspecao.ativo = true;
        }
        return this.is.edit(this.inspecao).subscribe(data => {
            this.base.dismiss();
            this.router.navigate(['inspecoes']);
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha  ao Editar  inspecao ' + this.inspecao.id + this.inspecao.ativo
                + this.base.tratarErro(error));
        });
    }
    selecionarobra(event) { }
    selecionartipoinspecao(event) {
        console.log(event);
    }
};
InspecaoInserirPage.ctorParameters = () => [
    { type: _model_base__WEBPACK_IMPORTED_MODULE_3__["Base"] },
    { type: _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_5__["InspecaoService"] },
    { type: _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_7__["TipoinspecaoService"] },
    { type: _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_6__["ObraService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
InspecaoInserirPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inspecao-inserir',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inspecao-inserir.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inspecao-inserir.page.scss */ "./src/app/pages/inspecao/inspecao-inserir/inspecao-inserir.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_3__["Base"], _service_sigobra_inspecao_service__WEBPACK_IMPORTED_MODULE_5__["InspecaoService"], _service_sigobra_tipoinspecao_service__WEBPACK_IMPORTED_MODULE_7__["TipoinspecaoService"],
        _service_sigobra_obra_service__WEBPACK_IMPORTED_MODULE_6__["ObraService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], InspecaoInserirPage);



/***/ })

}]);
//# sourceMappingURL=pages-inspecao-inspecao-inserir-inspecao-inserir-module-es2015.js.map