(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-statusitensinspecao-statusitensinspecao-inserir-statusitensinspecao-inserir-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir.page.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir.page.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"login auth-page\">\r\n  <ion-toolbar color=\"#04ff0c\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-text color=\"light\">\r\n        <ion-text color=\"light\" class=\"fw700\">Status\r\n        </ion-text>\r\n      </ion-text>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n    <div padding-horizontal text-center>\r\n      <div class=\"logo\"></div>\r\n      <h3 no-margin>\r\n        <ion-text color=\"light\" class=\"fw700\">\r\n          <ion-text color=\"light\">Inserindo</ion-text>\r\n        </ion-text>\r\n      </h3>\r\n    </div>\r\n    <form class=\"list-form auth-conten\" (keydown)=\"keyDownFunction($event)\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Nome\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"status.nome\" name=\"nome\" color=\"secondary\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Tipo Status\r\n        </ion-label>\r\n        <ionic-selectable color=\"secondary\" item-content name=\"obra\" [(items)]=\"listaTipoStatusOJ\"\r\n          closeButtonText=\"Cancelar\" itemValueField=\"tipoStatus\" itemTextField=\"nome\" canSearch=\"true\" [isConfirmButtonEnabled]=\"true\"\r\n          (onSelect)=\"tipoStatusChange($event)\">\r\n        </ionic-selectable>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          &nbsp;Cor Status\r\n        </ion-label>\r\n\r\n        <ion-select name=\"scores\" (click)=\"prepareColorSelector()\" (ionChange)=\"setColor(this.status.cor)\" [(ngModel)]=\"status.cor\">\r\n          <ion-select-option (ionSelect)=\"selectColor(optioncolor)\" *ngFor=\"let optioncolor of cores\" [value]=\"optioncolor.nome\">\r\n            {{optioncolor.nome}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n    </form>\r\n    <div margin-top>\r\n      <ion-button size=\"medium\" expand=\"full\" shape=\"round\" color=\"secondary\" icon-right tappable (click)=\"salvar()\">\r\n        Salvar\r\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir-routing.module.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir-routing.module.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: StatusitensinspecaoInserirPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusitensinspecaoInserirPageRoutingModule", function() { return StatusitensinspecaoInserirPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _statusitensinspecao_inserir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statusitensinspecao-inserir.page */ "./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir.page.ts");




const routes = [
    {
        path: '',
        component: _statusitensinspecao_inserir_page__WEBPACK_IMPORTED_MODULE_3__["StatusitensinspecaoInserirPage"]
    }
];
let StatusitensinspecaoInserirPageRoutingModule = class StatusitensinspecaoInserirPageRoutingModule {
};
StatusitensinspecaoInserirPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StatusitensinspecaoInserirPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir.module.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: StatusitensinspecaoInserirPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusitensinspecaoInserirPageModule", function() { return StatusitensinspecaoInserirPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _statusitensinspecao_inserir_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statusitensinspecao-inserir-routing.module */ "./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir-routing.module.ts");
/* harmony import */ var _statusitensinspecao_inserir_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statusitensinspecao-inserir.page */ "./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");









let StatusitensinspecaoInserirPageModule = class StatusitensinspecaoInserirPageModule {
};
StatusitensinspecaoInserirPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_8__["BrMaskerModule"],
            _statusitensinspecao_inserir_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatusitensinspecaoInserirPageRoutingModule"]
        ],
        declarations: [_statusitensinspecao_inserir_page__WEBPACK_IMPORTED_MODULE_6__["StatusitensinspecaoInserirPage"]]
    })
], StatusitensinspecaoInserirPageModule);



/***/ }),

/***/ "./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir.page.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir.page.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n:host ion-content {\n  --background: linear-gradient(\n    135deg,\n    var(--ion-color-primary),\n    #ffffff\n  );\n}\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n.botao-cor {\n  color: black;\n}\n.olho {\n  cursor: pointer;\n  left: 94%;\n}\n.div-time {\n  top: 30px;\n  position: relative;\n}\n.my-avatar {\n  left: 37%;\n  position: relative;\n}\n.zoon-eliminado {\n  zoom: 0.6;\n}\n.colorselect .select-text {\n  width: 75px;\n  border-radius: 5px;\n}\n.colorselect .alert-radio-inner,\n.colorselect .alert-radio-icon,\n.colorselect .alert-radio-label {\n  display: none;\n}\n.colorselect.colorselected:before {\n  content: \"✓\";\n  color: white;\n  z-index: 999999;\n  width: 100%;\n  height: 100%;\n  font-size: 33px;\n  left: 50%;\n  top: 50%;\n  position: relative;\n  transform: translate(-50%);\n}\n.colorselect.color_d435a2, .colorselect.color_d435a2 .select-text {\n  color: #d435a2;\n  background-color: #d435a2;\n}\n.colorselect.color_a834bf, .colorselect.color_a834bf .select-text {\n  color: #a834bf;\n  background-color: #a834bf;\n}\n.colorselect.color_6011cf, .colorselect.color_6011cf .select-text {\n  color: #6011cf;\n  background-color: #6011cf;\n}\n.colorselect.color_0d0e81, .colorselect.color_0d0e81 .select-text {\n  color: #0d0e81;\n  background-color: #0d0e81;\n}\n.colorselect.color_0237f1, .colorselect.color_0237f1 .select-text {\n  color: #0237f1;\n  background-color: #0237f1;\n}\n.colorselect.color_0d8bcd, .colorselect.color_0d8bcd .select-text {\n  color: #0d8bcd;\n  background-color: #0d8bcd;\n}\n.colorselect.color_16aca4, .colorselect.color_16aca4 .select-text {\n  color: #16aca4;\n  background-color: #16aca4;\n}\n.colorselect.color_3c887e, .colorselect.color_3c887e .select-text {\n  color: #3c887e;\n  background-color: #3c887e;\n}\n.colorselect.color_157145, .colorselect.color_157145 .select-text {\n  color: #157145;\n  background-color: #157145;\n}\n.colorselect.color_57a773, .colorselect.color_57a773 .select-text {\n  color: #57a773;\n  background-color: #57a773;\n}\n.colorselect.color_88aa3d, .colorselect.color_88aa3d .select-text {\n  color: #88aa3d;\n  background-color: #88aa3d;\n}\n.colorselect.color_b7990d, .colorselect.color_b7990d .select-text {\n  color: #b7990d;\n  background-color: #b7990d;\n}\n.colorselect.color_fcbf55, .colorselect.color_fcbf55 .select-text {\n  color: #fcbf55;\n  background-color: #fcbf55;\n}\n.colorselect.color_ff8668, .colorselect.color_ff8668 .select-text {\n  color: #ff8668;\n  background-color: #ff8668;\n}\n.colorselect.color_ff5c6a, .colorselect.color_ff5c6a .select-text {\n  color: #ff5c6a;\n  background-color: #ff5c6a;\n}\n.colorselect.color_c2454c, .colorselect.color_c2454c .select-text {\n  color: #c2454c;\n  background-color: #c2454c;\n}\n.colorselect.color_c2183f, .colorselect.color_c2183f .select-text {\n  color: #c2183f;\n  background-color: #c2183f;\n}\n.colorselect.color_d8226b, .colorselect.color_d8226b .select-text {\n  color: #d8226b;\n  background-color: #d8226b;\n}\n.colorselect.color_8f2d56, .colorselect.color_8f2d56 .select-text {\n  color: #8f2d56;\n  background-color: #8f2d56;\n}\n.colorselect.color_482971, .colorselect.color_482971 .select-text {\n  color: #482971;\n  background-color: #482971;\n}\n.colorselect.color_000000, .colorselect.color_000000 .select-text {\n  color: #000000;\n  background-color: #000000;\n}\n.colorselect.color_561f37, .colorselect.color_561f37 .select-text {\n  color: #561f37;\n  background-color: #561f37;\n}\n.colorselect.color_433835, .colorselect.color_433835 .select-text {\n  color: #433835;\n  background-color: #433835;\n}\n.colorselect.color_797979, .colorselect.color_797979 .select-text {\n  color: #797979;\n  background-color: #797979;\n}\n.colorselect.color_819595, .colorselect.color_819595 .select-text {\n  color: #819595;\n  background-color: #819595;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhdHVzaXRlbnNpbnNwZWNhby9zdGF0dXNpdGVuc2luc3BlY2FvLWluc2VyaXIvc3RhdHVzaXRlbnNpbnNwZWNhby1pbnNlcmlyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RhdHVzaXRlbnNpbnNwZWNhby9zdGF0dXNpdGVuc2luc3BlY2FvLWluc2VyaXIvQzpcXFVzZXJzXFxyb2JlclxcT25lRHJpdmVcXGlvbmljXFxzaWdvYnJhLXVpL3NyY1xcYXBwXFxwYWdlc1xcc3RhdHVzaXRlbnNpbnNwZWNhb1xcc3RhdHVzaXRlbnNpbnNwZWNhby1pbnNlcmlyXFxzdGF0dXNpdGVuc2luc3BlY2FvLWluc2VyaXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0VJO0VBQ0U7Ozs7R0FBQTtBREtOO0FDRUk7RUFDRSxnQkFBQTtFQUNBLGlEQUFBO0FEQU47QUNJTTtFQUNFLGdCQUFBO0FERlI7QUNPRTtFQUNFLFlBQUE7QURKSjtBQ09FO0VBQ0UsZUFBQTtFQUNBLFNBQUE7QURKSjtBQ1FFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FETEo7QUNRRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBRExKO0FDUUU7RUFDRSxTQUFBO0FETEo7QUNhRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBRFZKO0FDYUU7OztFQUdFLGFBQUE7QURYSjtBQ2NFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FEWko7QUNxQk07RUFDRSxjQUFBO0VBQ0EseUJBQUE7QURuQlI7QUNpQk07RUFDRSxjQUFBO0VBQ0EseUJBQUE7QURmUjtBQ2FNO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FEWFI7QUNTTTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRFBSO0FDS007RUFDRSxjQUFBO0VBQ0EseUJBQUE7QURIUjtBQ0NNO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FEQ1I7QUNITTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBREtSO0FDUE07RUFDRSxjQUFBO0VBQ0EseUJBQUE7QURTUjtBQ1hNO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FEYVI7QUNmTTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRGlCUjtBQ25CTTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRHFCUjtBQ3ZCTTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRHlCUjtBQzNCTTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRDZCUjtBQy9CTTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRGlDUjtBQ25DTTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRHFDUjtBQ3ZDTTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRHlDUjtBQzNDTTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRDZDUjtBQy9DTTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRGlEUjtBQ25ETTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRHFEUjtBQ3ZETTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRHlEUjtBQzNETTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRDZEUjtBQy9ETTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRGlFUjtBQ25FTTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRHFFUjtBQ3ZFTTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRHlFUjtBQzNFTTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRDZFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXR1c2l0ZW5zaW5zcGVjYW8vc3RhdHVzaXRlbnNpbnNwZWNhby1pbnNlcmlyL3N0YXR1c2l0ZW5zaW5zcGVjYW8taW5zZXJpci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDEzNWRlZyxcbiAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXG4gICAgI2ZmZmZmZlxuICApO1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNhcmQubm8tcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmJvdGFvLWNvciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm9saG8ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxlZnQ6IDk0JTtcbn1cblxuLmRpdi10aW1lIHtcbiAgdG9wOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5teS1hdmF0YXIge1xuICBsZWZ0OiAzNyU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnpvb24tZWxpbWluYWRvIHtcbiAgem9vbTogMC42O1xufVxuXG4uY29sb3JzZWxlY3QgLnNlbGVjdC10ZXh0IHtcbiAgd2lkdGg6IDc1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb2xvcnNlbGVjdCAuYWxlcnQtcmFkaW8taW5uZXIsXG4uY29sb3JzZWxlY3QgLmFsZXJ0LXJhZGlvLWljb24sXG4uY29sb3JzZWxlY3QgLmFsZXJ0LXJhZGlvLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jb2xvcnNlbGVjdC5jb2xvcnNlbGVjdGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pyTXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5OTk5O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDMzcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG59XG4uY29sb3JzZWxlY3QuY29sb3JfZDQzNWEyLCAuY29sb3JzZWxlY3QuY29sb3JfZDQzNWEyIC5zZWxlY3QtdGV4dCB7XG4gIGNvbG9yOiAjZDQzNWEyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQzNWEyO1xufVxuLmNvbG9yc2VsZWN0LmNvbG9yX2E4MzRiZiwgLmNvbG9yc2VsZWN0LmNvbG9yX2E4MzRiZiAuc2VsZWN0LXRleHQge1xuICBjb2xvcjogI2E4MzRiZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4MzRiZjtcbn1cbi5jb2xvcnNlbGVjdC5jb2xvcl82MDExY2YsIC5jb2xvcnNlbGVjdC5jb2xvcl82MDExY2YgLnNlbGVjdC10ZXh0IHtcbiAgY29sb3I6ICM2MDExY2Y7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDExY2Y7XG59XG4uY29sb3JzZWxlY3QuY29sb3JfMGQwZTgxLCAuY29sb3JzZWxlY3QuY29sb3JfMGQwZTgxIC5zZWxlY3QtdGV4dCB7XG4gIGNvbG9yOiAjMGQwZTgxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQwZTgxO1xufVxuLmNvbG9yc2VsZWN0LmNvbG9yXzAyMzdmMSwgLmNvbG9yc2VsZWN0LmNvbG9yXzAyMzdmMSAuc2VsZWN0LXRleHQge1xuICBjb2xvcjogIzAyMzdmMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMzdmMTtcbn1cbi5jb2xvcnNlbGVjdC5jb2xvcl8wZDhiY2QsIC5jb2xvcnNlbGVjdC5jb2xvcl8wZDhiY2QgLnNlbGVjdC10ZXh0IHtcbiAgY29sb3I6ICMwZDhiY2Q7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDhiY2Q7XG59XG4uY29sb3JzZWxlY3QuY29sb3JfMTZhY2E0LCAuY29sb3JzZWxlY3QuY29sb3JfMTZhY2E0IC5zZWxlY3QtdGV4dCB7XG4gIGNvbG9yOiAjMTZhY2E0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZhY2E0O1xufVxuLmNvbG9yc2VsZWN0LmNvbG9yXzNjODg3ZSwgLmNvbG9yc2VsZWN0LmNvbG9yXzNjODg3ZSAuc2VsZWN0LXRleHQge1xuICBjb2xvcjogIzNjODg3ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjODg3ZTtcbn1cbi5jb2xvcnNlbGVjdC5jb2xvcl8xNTcxNDUsIC5jb2xvcnNlbGVjdC5jb2xvcl8xNTcxNDUgLnNlbGVjdC10ZXh0IHtcbiAgY29sb3I6ICMxNTcxNDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTcxNDU7XG59XG4uY29sb3JzZWxlY3QuY29sb3JfNTdhNzczLCAuY29sb3JzZWxlY3QuY29sb3JfNTdhNzczIC5zZWxlY3QtdGV4dCB7XG4gIGNvbG9yOiAjNTdhNzczO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTdhNzczO1xufVxuLmNvbG9yc2VsZWN0LmNvbG9yXzg4YWEzZCwgLmNvbG9yc2VsZWN0LmNvbG9yXzg4YWEzZCAuc2VsZWN0LXRleHQge1xuICBjb2xvcjogIzg4YWEzZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4YWEzZDtcbn1cbi5jb2xvcnNlbGVjdC5jb2xvcl9iNzk5MGQsIC5jb2xvcnNlbGVjdC5jb2xvcl9iNzk5MGQgLnNlbGVjdC10ZXh0IHtcbiAgY29sb3I6ICNiNzk5MGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzk5MGQ7XG59XG4uY29sb3JzZWxlY3QuY29sb3JfZmNiZjU1LCAuY29sb3JzZWxlY3QuY29sb3JfZmNiZjU1IC5zZWxlY3QtdGV4dCB7XG4gIGNvbG9yOiAjZmNiZjU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNiZjU1O1xufVxuLmNvbG9yc2VsZWN0LmNvbG9yX2ZmODY2OCwgLmNvbG9yc2VsZWN0LmNvbG9yX2ZmODY2OCAuc2VsZWN0LXRleHQge1xuICBjb2xvcjogI2ZmODY2ODtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODY2ODtcbn1cbi5jb2xvcnNlbGVjdC5jb2xvcl9mZjVjNmEsIC5jb2xvcnNlbGVjdC5jb2xvcl9mZjVjNmEgLnNlbGVjdC10ZXh0IHtcbiAgY29sb3I6ICNmZjVjNmE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjVjNmE7XG59XG4uY29sb3JzZWxlY3QuY29sb3JfYzI0NTRjLCAuY29sb3JzZWxlY3QuY29sb3JfYzI0NTRjIC5zZWxlY3QtdGV4dCB7XG4gIGNvbG9yOiAjYzI0NTRjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzI0NTRjO1xufVxuLmNvbG9yc2VsZWN0LmNvbG9yX2MyMTgzZiwgLmNvbG9yc2VsZWN0LmNvbG9yX2MyMTgzZiAuc2VsZWN0LXRleHQge1xuICBjb2xvcjogI2MyMTgzZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyMTgzZjtcbn1cbi5jb2xvcnNlbGVjdC5jb2xvcl9kODIyNmIsIC5jb2xvcnNlbGVjdC5jb2xvcl9kODIyNmIgLnNlbGVjdC10ZXh0IHtcbiAgY29sb3I6ICNkODIyNmI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkODIyNmI7XG59XG4uY29sb3JzZWxlY3QuY29sb3JfOGYyZDU2LCAuY29sb3JzZWxlY3QuY29sb3JfOGYyZDU2IC5zZWxlY3QtdGV4dCB7XG4gIGNvbG9yOiAjOGYyZDU2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGYyZDU2O1xufVxuLmNvbG9yc2VsZWN0LmNvbG9yXzQ4Mjk3MSwgLmNvbG9yc2VsZWN0LmNvbG9yXzQ4Mjk3MSAuc2VsZWN0LXRleHQge1xuICBjb2xvcjogIzQ4Mjk3MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4Mjk3MTtcbn1cbi5jb2xvcnNlbGVjdC5jb2xvcl8wMDAwMDAsIC5jb2xvcnNlbGVjdC5jb2xvcl8wMDAwMDAgLnNlbGVjdC10ZXh0IHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG4uY29sb3JzZWxlY3QuY29sb3JfNTYxZjM3LCAuY29sb3JzZWxlY3QuY29sb3JfNTYxZjM3IC5zZWxlY3QtdGV4dCB7XG4gIGNvbG9yOiAjNTYxZjM3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTYxZjM3O1xufVxuLmNvbG9yc2VsZWN0LmNvbG9yXzQzMzgzNSwgLmNvbG9yc2VsZWN0LmNvbG9yXzQzMzgzNSAuc2VsZWN0LXRleHQge1xuICBjb2xvcjogIzQzMzgzNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzMzgzNTtcbn1cbi5jb2xvcnNlbGVjdC5jb2xvcl83OTc5NzksIC5jb2xvcnNlbGVjdC5jb2xvcl83OTc5NzkgLnNlbGVjdC10ZXh0IHtcbiAgY29sb3I6ICM3OTc5Nzk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTc5Nzk7XG59XG4uY29sb3JzZWxlY3QuY29sb3JfODE5NTk1LCAuY29sb3JzZWxlY3QuY29sb3JfODE5NTk1IC5zZWxlY3QtdGV4dCB7XG4gIGNvbG9yOiAjODE5NTk1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODE5NTk1O1xufSIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAxMzVkZWcsXHJcbiAgICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxyXG4gICAgICAgICNmZmZmZmZcclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgJi5uby1yYWRpdXMge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJvdGFvLWNvciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5vbGhvIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxlZnQ6IDk0JTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmRpdi10aW1lIHtcclxuICAgIHRvcDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5teS1hdmF0YXIge1xyXG4gICAgbGVmdDogMzclO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLnpvb24tZWxpbWluYWRvIHtcclxuICAgIHpvb206IDAuNjtcclxuICB9XHJcblxyXG5cclxuXHJcbnBhZ2UtaG9tZSB7fVxyXG5cclxuLmNvbG9yc2VsZWN0IHtcclxuXHRcdC5zZWxlY3QtdGV4dCB7XHJcblx0XHRcdFx0d2lkdGg6IDc1cHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5hbGVydC1yYWRpby1pbm5lcixcclxuXHRcdC5hbGVydC1yYWRpby1pY29uLFxyXG5cdFx0LmFsZXJ0LXJhZGlvLWxhYmVsIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cclxuXHRcdCYuY29sb3JzZWxlY3RlZDpiZWZvcmUge1xyXG5cdFx0XHRcdGNvbnRlbnQ6ICdcXDI3MTMnO1xyXG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0XHR6LWluZGV4OiA5OTk5OTk7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMzNweDtcclxuXHRcdFx0XHRsZWZ0OiA1MCU7XHJcblx0XHRcdFx0dG9wOiA1MCU7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRjb2xvcnNUb1NlbGVjdDogXCIjZDQzNWEyXCIgXCIjYTgzNGJmXCIgXCIjNjAxMWNmXCIgXCIjMGQwZTgxXCIgXCIjMDIzN2YxXCIgXCIjMGQ4YmNkXCIgXCIjMTZhY2E0XCIgXCIjM2M4ODdlXCIgXCIjMTU3MTQ1XCIgXCIjNTdhNzczXCIgXCIjODhhYTNkXCIgXCIjYjc5OTBkXCIgXCIjZmNiZjU1XCIgXCIjZmY4NjY4XCIgXCIjZmY1YzZhXCIgXCIjYzI0NTRjXCIgXCIjYzIxODNmXCIgXCIjZDgyMjZiXCIgXCIjOGYyZDU2XCIgXCIjNDgyOTcxXCIgXCIjMDAwMDAwXCIgXCIjNTYxZjM3XCIgXCIjNDMzODM1XCIgXCIjNzk3OTc5XCIgXCIjODE5NTk1XCI7XHJcblxyXG5cdFx0QGVhY2ggJGNvbG9yT3B0aW9uIGluICRjb2xvcnNUb1NlbGVjdCB7XHJcblx0XHRcdFx0JGNvbG9yV2l0aG91dEhhc2g6IHN0ci1zbGljZSgkY29sb3JPcHRpb24sIDIsIDcpO1xyXG5cclxuXHRcdFx0XHQmLmNvbG9yXyN7JGNvbG9yV2l0aG91dEhhc2h9IHtcclxuXHRcdFx0XHRcdFx0JiwgJiAuc2VsZWN0LXRleHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICN7JGNvbG9yT3B0aW9ufTtcclxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICN7JGNvbG9yT3B0aW9ufTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir.page.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir.page.ts ***!
  \***********************************************************************************************************/
/*! exports provided: StatusitensinspecaoInserirPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusitensinspecaoInserirPage", function() { return StatusitensinspecaoInserirPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/base */ "./src/app/model/base.ts");
/* harmony import */ var _model_objetc_statusiteminspecao__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/objetc/statusiteminspecao */ "./src/app/model/objetc/statusiteminspecao.ts");
/* harmony import */ var _service_sigobra_statusitensinspecao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../service/sigobra/statusitensinspecao.service */ "./src/app/service/sigobra/statusitensinspecao.service.ts");






let StatusitensinspecaoInserirPage = class StatusitensinspecaoInserirPage {
    constructor(base, siis, router) {
        this.base = base;
        this.siis = siis;
        this.router = router;
        this.status = new _model_objetc_statusiteminspecao__WEBPACK_IMPORTED_MODULE_4__["StatusItemInspecao"]();
        this.listaTipoStatusOJ = new Array();
        this.cores = [];
        this.listaTipoStatusOJ = siis.getListStatus();
        this.carregarCores();
    }
    ngOnInit() {
        if ((this.siis.status !== undefined) && (this.siis.status !== null)) {
            this.status = this.siis.status;
        }
    }
    get editando() {
        return Boolean(this.status.id);
    }
    salvar() {
        this.salvando();
    }
    salvando() {
        if ((this.status.ativo === undefined) || (this.status.ativo === null)) {
            this.status.ativo = true;
        }
        this.status.empresa = this.siis.as.token.empresa;
        this.base.present();
        this.siis.salvar(this.status).subscribe(data => {
            this.siis.status = new _model_objetc_statusiteminspecao__WEBPACK_IMPORTED_MODULE_4__["StatusItemInspecao"]();
            this.base.dismiss();
            this.router.navigate(['statusitensinspecoes']);
        }, error => {
            this.base.dismiss();
            this.base.mensagemErro('Falha ao salvar status :' + this.base.tratarErro(error));
        });
    }
    keyDownFunction(event) {
        if (event.keyCode === 13) {
            this.salvando();
        }
    }
    tipoStatusChange(event) {
        this.status.tipoStatus = event.item.tipoStatus;
    }
    carregarCores() {
        const r = new Array("00", "33", "66", "99", "CC", "FF");
        const g = new Array("00", "33", "66", "99", "CC", "FF");
        const b = new Array("00", "33", "66", "99", "CC", "FF");
        for (let i = 0; i < r.length; i++) {
            for (let j = 0; j < g.length; j++) {
                for (let k = 0; k < b.length; k++) {
                    const novoc = "#" + r[i] + g[j] + b[k];
                    this.cores.push({ nome: novoc });
                }
            }
        }
    }
    corChange(event) {
        this.status.cor = event.item.nome;
    }
    prepareColorSelector() {
        setTimeout(() => {
            let buttonElements = document.querySelectorAll('div.alert-radio-group button');
            if (!buttonElements.length) {
                this.prepareColorSelector();
            }
            else {
                for (let index = 0; index < buttonElements.length; index++) {
                    let buttonElement = buttonElements[index];
                    let optionLabelElement = buttonElement.querySelector('.alert-radio-label');
                    let color = optionLabelElement.innerHTML.trim();
                    if (this.isHexColor(color)) {
                        buttonElement.classList.add('colorselect', 'color_' + color.slice(1, 7));
                        if (color == this.status.cor) {
                            buttonElement.classList.add('colorselected');
                        }
                    }
                }
            }
        }, 100);
    }
    isHexColor(color) {
        let hexColorRegEx = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
        return hexColorRegEx.test(color);
    }
    selectColor(color) {
        let buttonElements = document.querySelectorAll('div.alert-radio-group button.colorselect');
        for (let index = 0; index < buttonElements.length; index++) {
            let buttonElement = buttonElements[index];
            buttonElement.classList.remove('colorselected');
            if (buttonElement.classList.contains('color_' + color.slice(1, 7))) {
                buttonElement.classList.add('colorselected');
            }
        }
    }
    setColor(value) {
        //this.status.cor = value;
    }
};
StatusitensinspecaoInserirPage.ctorParameters = () => [
    { type: _model_base__WEBPACK_IMPORTED_MODULE_3__["Base"] },
    { type: _service_sigobra_statusitensinspecao_service__WEBPACK_IMPORTED_MODULE_5__["StatusitensinspecaoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StatusitensinspecaoInserirPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statusitensinspecao-inserir',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./statusitensinspecao-inserir.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./statusitensinspecao-inserir.page.scss */ "./src/app/pages/statusitensinspecao/statusitensinspecao-inserir/statusitensinspecao-inserir.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_base__WEBPACK_IMPORTED_MODULE_3__["Base"], _service_sigobra_statusitensinspecao_service__WEBPACK_IMPORTED_MODULE_5__["StatusitensinspecaoService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], StatusitensinspecaoInserirPage);



/***/ })

}]);
//# sourceMappingURL=pages-statusitensinspecao-statusitensinspecao-inserir-statusitensinspecao-inserir-module-es2015.js.map