(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popmenu/popmenu.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popmenu/popmenu.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"animated fadeInDown\">\r\n  <ion-fab-button (click)=\"togglePopupMenu()\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"apps\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n<div class=\"popup-menu\">\r\n  <div class=\"popup-menu-overlay\" [ngClass]=\"{'in': openMenu}\"></div>\r\n  <div class=\"popup-menu-panel\" [ngClass]=\"{'in': openMenu}\">\r\n    <div class=\"popup-menu-item\">\r\n      <ion-icon name=\"cog\" slot=\"middle\" size=\"large\"></ion-icon>\r\n      <span>Config</span>\r\n    </div>\r\n    <div class=\"popup-menu-item\">\r\n      <ion-icon name=\"beer\" slot=\"middle\" size=\"large\"></ion-icon>\r\n      <span>Activities</span>\r\n    </div>\r\n    <div class=\"popup-menu-item\">\r\n      <ion-icon name=\"person\" slot=\"middle\" size=\"large\"></ion-icon>\r\n      <span>Settings</span>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"login auth-page\">\r\n  <ion-refresher slot=\"fixed\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-toolbar color=\"#04ff0c\">\r\n    <div padding-horizontal text-center class=\"animated fadeInDown\">\r\n      <div ><ion-img name=\"logo\" *ngIf=\"logo !== null && logo !== undefined\"\r\n        [src]=\"getImagemLogo()\" class=\"logo\" alt=\"Mundobit Informática\"  ></ion-img> </div>   \r\n    </div>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\">\r\n        <ion-icon name=\"notifications\"></ion-icon>\r\n        <ion-badge color=\"dark\" slot=\"end\">2</ion-badge>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"auth-content\">\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm class=\"\">\r\n          <div>\r\n            <ion-button color=\"secondary\" expand=\"full\" shape=\"round\" class=\"buttom-main\" icon-top tappable (click)=\"gotoObras()\" >\r\n              <div>\r\n                <ion-icon name=\"construct\" size=\"large\" class=\"zoom-botton\"></ion-icon><br>\r\n                <label>Obras</label>\r\n              </div>\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-sm>\r\n          <div>\r\n            <ion-button color=\"secondary\" expand=\"full\" shape=\"round\" class=\"buttom-main\" icon-top tappable (click)=\"gotoTipoinspecoes()\" > \r\n              <div>\r\n                <ion-icon name=\"checkbox\" size=\"large\" class=\"zoom-botton\"></ion-icon><br>\r\n                <label>Tipos de Inspeções</label>\r\n              </div>\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-sm>\r\n          <div>\r\n            <ion-button color=\"secondary\" expand=\"full\" shape=\"round\" class=\"buttom-main\" icon-top tappable (click)=\"gotoStatus()\" >\r\n              <div>\r\n                <ion-icon name=\"attach\" size=\"large\" class=\"zoom-botton\"></ion-icon><br>\r\n                <label>Status Itens</label>\r\n              </div>\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-sm>\r\n          <div>\r\n            <ion-button color=\"secondary\" expand=\"full\" shape=\"round\" class=\"buttom-main\" icon-top tappable (click)=\"gotoInspecoes()\" >\r\n              <div>\r\n                <ion-icon  name=\"clipboard\" size=\"large\" class=\"zoom-botton\"></ion-icon><br>\r\n                <label>Inspeção</label>\r\n              </div>\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>   \r\n        <ion-col size=\"12\" size-sm>\r\n          <div>\r\n            <ion-button color=\"secondary\" expand=\"full\" shape=\"round\" class=\"buttom-main\" icon-top tappableicon-top tappable (click)=\"gotoTarefas()\">\r\n              <div>\r\n                <ion-icon name=\"pulse\" size=\"large\" class=\"zoom-botton\" (click)=\"gotoTarefas()\"></ion-icon><br>\r\n                <label>Tarefas</label>\r\n              </div>              \r\n            </ion-button>\r\n          </div>\r\n        </ion-col>    \r\n        <ion-col size=\"12\" size-sm>\r\n          <div>\r\n            <ion-button color=\"secondary\" expand=\"full\" shape=\"round\" class=\"buttom-main\" icon-top tappableicon-top tappable (click)=\"gotoUsuarios()\">\r\n              <div>\r\n                <ion-icon name=\"person-add\" size=\"large\" class=\"zoom-botton\" (click)=\"gotoUsuarios()\"></ion-icon><br>\r\n                <label>Usuario</label>\r\n              </div>              \r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-sm>\r\n          <div>\r\n            <ion-button color=\"secondary\" expand=\"full\" shape=\"round\" class=\"buttom-main\" icon-top tappable (click)=\"gotoEmpresas()\">\r\n              <div>\r\n                <ion-icon name=\"business\" size=\"large\" class=\"zoom-botton\"></ion-icon><br>\r\n                <label>Empresa</label>\r\n              </div>\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"block\" shape=\"round\"  color=\"secondary\" (click)=\"logout()\" >\r\n            <ion-icon name=\"log-out\" class=\"zoom-botton\"></ion-icon>\r\n            <label>Sair</label>\r\n          </ion-button>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n     \r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/components/popmenu/popmenu.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".popup-menu-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.15s ease-in-out;\n  background-image: linear-gradient(rgba(79, 36, 172, 0.85) 0%, rgba(79, 36, 172, 0.65) 100%);\n}\n.popup-menu-overlay.in {\n  opacity: 1;\n  visibility: visible;\n}\n.popup-menu-toggle {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  bottom: 10px;\n  left: 50%;\n  margin-left: -20px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  z-index: 101;\n  transition: all 0.25s ease-in-out;\n}\n.popup-menu-toggle.out {\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(0);\n  transition: all 0.15s ease-in-out;\n}\n.popup-menu-toggle.out:before {\n  transition: all 0.15s ease-in-out;\n  transform: scale(0);\n}\n.popup-menu-panel {\n  position: fixed;\n  width: 300px;\n  border-radius: 5%;\n  bottom: 80px;\n  left: 50%;\n  margin-left: -150px;\n  padding: 20px;\n  background-color: var(--ion-color-primary);\n  z-index: 102;\n  transition: all 0.25s ease-in-out;\n  transition-delay: 0.15s;\n  transform-origin: 50% 100%;\n  transform: scale(0);\n  display: -moz-flex;\n  display: flex;\n  flex-wrap: wrap;\n}\n.popup-menu-panel .popup-menu-item {\n  margin: auto;\n  -moz-flex: 1 0 30%;\n  flex: 1 0 30%;\n  display: -moz-flex;\n  display: flex;\n  -moz-flex-direction: column;\n  flex-direction: column;\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.25s ease-in-out;\n}\n.popup-menu-panel .popup-menu-item ion-icon {\n  margin: 0 auto;\n  text-align: center;\n  color: #fff;\n}\n.popup-menu-panel .popup-menu-item span {\n  padding: 0;\n  margin: 0 0 auto 0;\n  color: #fff;\n  text-align: center;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: 500;\n  line-height: 18px;\n}\n.popup-menu-panel .popup-menu-item:active i {\n  color: #dd4135;\n  transition: all 0.15s;\n}\n.popup-menu-panel .popup-menu-item:active span {\n  color: #dd4135;\n  transition: all 0.15s;\n}\n.popup-menu-panel.in {\n  transform: scale(1);\n  transition-delay: 0s;\n}\n.popup-menu-panel.in .popup-menu-item {\n  transform: scale(1);\n  opacity: 1;\n  transition-delay: 0.15s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BtZW51L0M6XFxVc2Vyc1xccm9iZXJcXE9uZURyaXZlXFxpb25pY1xcc2lnb2JyYS11aS9zcmNcXGFwcFxcY29tcG9uZW50c1xccG9wbWVudVxccG9wbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3BtZW51L3BvcG1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQ0FBQTtFQUVBLDJGQUFBO0FDQUo7QURDSTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQ0NSO0FER0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSxpQ0FBQTtBQ0FKO0FEQ0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtFQUVBLGlDQUFBO0FDQ1I7QURBUTtFQUVJLGlDQUFBO0VBRUEsbUJBQUE7QUNFWjtBREdBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFFQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBRUEsaUNBQUE7RUFFQSx1QkFBQTtFQUVBLDBCQUFBO0VBRUEsbUJBQUE7RUFJQSxrQkFBQTtFQUVBLGFBQUE7RUFJQSxlQUFBO0FDREo7QURFSTtFQUNJLFlBQUE7RUFJQSxrQkFBQTtFQUVBLGFBQUE7RUFJQSxrQkFBQTtFQUVBLGFBQUE7RUFJQSwyQkFBQTtFQUVBLHNCQUFBO0VBRUEsbUJBQUE7RUFDQSxVQUFBO0VBRUEsaUNBQUE7QUNBUjtBRENRO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NaO0FEQ1E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ1o7QURFWTtFQUNJLGNBQUE7RUFFQSxxQkFBQTtBQ0FoQjtBREVZO0VBQ0ksY0FBQTtFQUVBLHFCQUFBO0FDQWhCO0FESUk7RUFFSSxtQkFBQTtFQUVBLG9CQUFBO0FDRlI7QURHUTtFQUVJLG1CQUFBO0VBQ0EsVUFBQTtFQUVBLHVCQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcG1lbnUvcG9wbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBvcHVwIE1lbnUgLy9cclxuLnBvcHVwLW1lbnUtb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDc5LDM2LDE3MiwgLjg1KSAwJSwgcmdiYSg3OSwzNiwxNzIsIC42NSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSg3OSwzNiwxNzIsIC44NSkgMCUsIHJnYmEoNzksMzYsMTcyLCAuNjUpIDEwMCUpO1xyXG4gICAgJi5pbiB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucG9wdXAtbWVudS10b2dnbGUge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxMDE7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAmLm91dCB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlLWluLW91dDtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucG9wdXAtbWVudS1wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICBib3R0b206IDgwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHotaW5kZXg6IDEwMjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogLjE1cztcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IC4xNXM7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLnBvcHVwLW1lbnUtaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDEgMCAzMCU7XHJcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxIDAgMzAlO1xyXG4gICAgICAgIC1tb3otYm94LWZsZXg6IDEgMCAzMCU7XHJcbiAgICAgICAgLW1vei1mbGV4OiAxIDAgMzAlO1xyXG4gICAgICAgIC1tcy1mbGV4OiAxIDAgMzAlO1xyXG4gICAgICAgIGZsZXg6IDEgMCAzMCU7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgYXV0byAwO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigyMjEsNjUsNTMpO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjE1cztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjIxLDY1LDUzKTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xNXM7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYuaW4ge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbiAgICAgICAgLnBvcHVwLW1lbnUtaXRlbSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAuMTVzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMTVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIucG9wdXAtbWVudS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDc5LCAzNiwgMTcyLCAwLjg1KSAwJSwgcmdiYSg3OSwgMzYsIDE3MiwgMC42NSkgMTAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDc5LCAzNiwgMTcyLCAwLjg1KSAwJSwgcmdiYSg3OSwgMzYsIDE3MiwgMC42NSkgMTAwJSk7XG59XG4ucG9wdXAtbWVudS1vdmVybGF5LmluIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnBvcHVwLW1lbnUtdG9nZ2xlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xufVxuLnBvcHVwLW1lbnUtdG9nZ2xlLm91dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuLnBvcHVwLW1lbnUtdG9nZ2xlLm91dDpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5wb3B1cC1tZW51LXBhbmVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBib3R0b206IDgwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB6LWluZGV4OiAxMDI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tb3otZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtIHtcbiAgbWFyZ2luOiBhdXRvO1xuICAtd2Via2l0LWJveC1mbGV4OiAxIDAgMzAlO1xuICAtd2Via2l0LWZsZXg6IDEgMCAzMCU7XG4gIC1tb3otYm94LWZsZXg6IDEgMCAzMCU7XG4gIC1tb3otZmxleDogMSAwIDMwJTtcbiAgLW1zLWZsZXg6IDEgMCAzMCU7XG4gIGZsZXg6IDEgMCAzMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtIGlvbi1pY29uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtIHNwYW4ge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCBhdXRvIDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtOmFjdGl2ZSBpIHtcbiAgY29sb3I6ICNkZDQxMzU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtOmFjdGl2ZSBzcGFuIHtcbiAgY29sb3I6ICNkZDQxMzU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG4ucG9wdXAtbWVudS1wYW5lbC5pbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG59XG4ucG9wdXAtbWVudS1wYW5lbC5pbiAucG9wdXAtbWVudS1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/popmenu/popmenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.ts ***!
  \*********************************************************/
/*! exports provided: PopmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopmenuComponent", function() { return PopmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let PopmenuComponent = class PopmenuComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.openMenu = false;
    }
    ngOnInit() {
    }
    togglePopupMenu() {
        return this.openMenu = !this.openMenu;
    }
};
PopmenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PopmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'popmenu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popmenu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popmenu/popmenu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popmenu.component.scss */ "./src/app/components/popmenu/popmenu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], PopmenuComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_popmenu_popmenu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/popmenu/popmenu.component */ "./src/app/components/popmenu/popmenu.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");








const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"], _components_popmenu_popmenu_component__WEBPACK_IMPORTED_MODULE_1__["PopmenuComponent"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:host ion-content {\n  --background: linear-gradient(\n    135deg,\n    var(--ion-color-primary),\n    #ffffff\n  );\n}\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n\n.botao-cor {\n  color: black;\n}\n\n.fica-botton {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n}\n\n.foto-creche {\n  width: 100%;\n  height: 100%;\n}\n\n.buttom-main {\n  width: 100%;\n  height: 200px;\n}\n\n.logo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHJvYmVyXFxPbmVEcml2ZVxcaW9uaWNcXHNpZ29icmEtdWkvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdJO0VBQ0U7Ozs7R0FBQTtBQ0lOOztBREdJO0VBQ0UsZ0JBQUE7RUFDQSxpREFBQTtBQ0ROOztBREtNO0VBQ0UsZ0JBQUE7QUNIUjs7QURRRTtFQUNFLFlBQUE7QUNMSjs7QURRRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRFFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNMSjs7QURRRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDTEo7O0FEUUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAxMzVkZWcsXHJcbiAgICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxyXG4gICAgICAgICNmZmZmZmZcdFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAmLm5vLXJhZGl1cyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYm90YW8tY29yIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmZpY2EtYm90dG9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3RvLWNyZWNoZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5idXR0b20tbWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAubG9nbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuIiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMzVkZWcsXG4gICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxuICAgICNmZmZmZmZcbiAgKTtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jYXJkLm5vLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ib3Rhby1jb3Ige1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5maWNhLWJvdHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm90by1jcmVjaGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYnV0dG9tLW1haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/autentificacao/autentificacao.service */ "./src/app/service/autentificacao/autentificacao.service.ts");
/* harmony import */ var _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/sigobra/empresa.service */ "./src/app/service/sigobra/empresa.service.ts");
/* harmony import */ var _model_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/base */ "./src/app/model/base.ts");






let HomePage = class HomePage {
    constructor(router, as, es, base) {
        this.router = router;
        this.as = as;
        this.es = es;
        this.base = base;
    }
    ngOnInit() {
        if (this.es.emp === "") {
            this.emp = "Mundobit Informática";
        }
        else {
            this.emp = this.es.emp;
            this.logo = this.es.logo;
        }
    }
    getImagemLogo() {
        return this.base.getImagem(this.as.token.empresa.logo);
    }
    gotoObras() {
        this.router.navigate(['obras']);
    }
    gotoTipoinspecoes() {
        this.router.navigate(['tipoinspecoes']);
    }
    gotoStatus() {
        this.router.navigate(['statusitensinspecoes']);
    }
    gotoInspecoes() {
        this.router.navigate(['inspecoes']);
    }
    gotoClientes() {
        this.router.navigate(['clientes']);
    }
    gotoUsuarios() {
        this.router.navigate(['usuarios']);
    }
    gotoEmpresas() {
        this.router.navigate(['empresas']);
    }
    gotoAnamneses() {
        this.router.navigate(['anamneses']);
    }
    gotoTarefas() {
        this.router.navigate(['tarefas']);
    }
    logout() {
        this.as.logout();
        this.router.navigate(["login"]);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"] },
    { type: _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_4__["EmpresaService"] },
    { type: _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"], _service_sigobra_empresa_service__WEBPACK_IMPORTED_MODULE_4__["EmpresaService"], _model_base__WEBPACK_IMPORTED_MODULE_5__["Base"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map