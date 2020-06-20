(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./src/app/model/enums/tipo-status.enum.ts":
/*!*************************************************!*\
  !*** ./src/app/model/enums/tipo-status.enum.ts ***!
  \*************************************************/
/*! exports provided: TipoStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoStatus", function() { return TipoStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TipoStatus;
(function (TipoStatus) {
    TipoStatus[TipoStatus["aberto"] = 0] = "aberto";
    TipoStatus[TipoStatus["finalizado"] = 1] = "finalizado";
    TipoStatus[TipoStatus["reprovado"] = 2] = "reprovado";
})(TipoStatus || (TipoStatus = {}));


/***/ }),

/***/ "./src/app/model/objetc/empresa.ts":
/*!*****************************************!*\
  !*** ./src/app/model/objetc/empresa.ts ***!
  \*****************************************/
/*! exports provided: Empresa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Empresa", function() { return Empresa; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Empresa {
}


/***/ }),

/***/ "./src/app/model/objetc/inspecao.ts":
/*!******************************************!*\
  !*** ./src/app/model/objetc/inspecao.ts ***!
  \******************************************/
/*! exports provided: Inspecao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inspecao", function() { return Inspecao; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Inspecao {
}


/***/ }),

/***/ "./src/app/model/objetc/obras.ts":
/*!***************************************!*\
  !*** ./src/app/model/objetc/obras.ts ***!
  \***************************************/
/*! exports provided: Obras */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Obras", function() { return Obras; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Obras {
}


/***/ }),

/***/ "./src/app/model/objetc/statusiteminspecao.ts":
/*!****************************************************!*\
  !*** ./src/app/model/objetc/statusiteminspecao.ts ***!
  \****************************************************/
/*! exports provided: StatusItemInspecao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusItemInspecao", function() { return StatusItemInspecao; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class StatusItemInspecao {
    constructor() {
        this.cor = 'var(--ion-color-primary)';
    }
}


/***/ }),

/***/ "./src/app/model/objetc/tipo-status-oj.ts":
/*!************************************************!*\
  !*** ./src/app/model/objetc/tipo-status-oj.ts ***!
  \************************************************/
/*! exports provided: TipoStatusOJ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoStatusOJ", function() { return TipoStatusOJ; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TipoStatusOJ {
}


/***/ }),

/***/ "./src/app/model/objetc/tipoinspecao.ts":
/*!**********************************************!*\
  !*** ./src/app/model/objetc/tipoinspecao.ts ***!
  \**********************************************/
/*! exports provided: TipoInspecao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoInspecao", function() { return TipoInspecao; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TipoInspecao {
}


/***/ }),

/***/ "./src/app/model/objetc/usuario.ts":
/*!*****************************************!*\
  !*** ./src/app/model/objetc/usuario.ts ***!
  \*****************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Usuario {
}


/***/ }),

/***/ "./src/app/service/sigobra/empresa.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/sigobra/empresa.service.ts ***!
  \****************************************************/
/*! exports provided: EmpresaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaService", function() { return EmpresaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autentificacao/autentificacao.service */ "./src/app/service/autentificacao/autentificacao.service.ts");




let EmpresaService = class EmpresaService {
    constructor(http, as) {
        this.http = http;
        this.as = as;
        this.url = '/empresas';
    }
    salvar(empresa) {
        return this.http.post(this.as.url + this.url, empresa, this.as.getOptions());
    }
    editar(empresa) {
        return this.http.put(this.as.url + this.url, empresa, this.as.getOptions());
    }
    delete(empresa) {
        return this.http.post(this.as.url + this.url + '/deletar', empresa, this.as.getOptions());
    }
    pesquisar(value) {
        return this.http.post(this.as.url + this.url + '/pesquisar', value, this.as.getOptions());
    }
    get(id) {
        return this.http.post(this.as.url + this.url, id, this.as.getOptions());
    }
    edit(empresa) {
        return this.http.post(this.as.url + this.url + '/editar', empresa, this.as.getOptions());
    }
    editarativo(empresa) {
        return this.http.post(this.as.url + this.url + '/editarativo', empresa, this.as.getOptions());
    }
    pesqemp(id) {
        return this.http.post(this.as.url + this.url + '/pesqemp', id, this.as.getOptions());
    }
};
EmpresaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"] }
];
EmpresaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])
], EmpresaService);



/***/ }),

/***/ "./src/app/service/sigobra/inspecao.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/sigobra/inspecao.service.ts ***!
  \*****************************************************/
/*! exports provided: InspecaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspecaoService", function() { return InspecaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autentificacao/autentificacao.service */ "./src/app/service/autentificacao/autentificacao.service.ts");




let InspecaoService = class InspecaoService {
    constructor(http, as) {
        this.http = http;
        this.as = as;
        this.url = '/inspecao';
    }
    salvar(inspecao) {
        return this.http.post(this.as.url + this.url, inspecao, this.as.getOptions());
    }
    editar(inspecao) {
        return this.http.put(this.as.url + this.url, inspecao, this.as.getOptions());
    }
    delete(inspecao) {
        return this.http.post(this.as.url + this.url + '/deletar', inspecao, this.as.getOptions());
    }
    pesquisar(value) {
        return this.http.post(this.as.url + this.url + '/pesquisar', value, this.as.getOptions());
    }
    get(id) {
        return this.http.post(this.as.url + this.url, id, this.as.getOptions());
    }
    edit(inspecao) {
        return this.http.post(this.as.url + this.url + '/editar', inspecao, this.as.getOptions());
    }
    editarativo(inspecao) {
        return this.http.post(this.as.url + this.url + '/editarativo', inspecao, this.as.getOptions());
    }
    byinspecaoitens(inspecao) {
        return this.http.post(this.as.url + this.url + '/byinspecaoitens', inspecao, this.as.getOptions());
    }
    aprova(inspecaoitem) {
        return this.http.post(this.as.url + this.url + '/aprova', inspecaoitem, this.as.getOptions());
    }
    reprova(inspecaoitem) {
        return this.http.post(this.as.url + this.url + '/reprova', inspecaoitem, this.as.getOptions());
    }
    raprova(inspecaoitem) {
        return this.http.post(this.as.url + this.url + '/raprova', inspecaoitem, this.as.getOptions());
    }
    pesqitem(value) {
        return this.http.post(this.as.url + this.url + '/pesqitem', value, this.as.getOptions());
    }
    filtra(filtro) {
        return this.http.post(this.as.url + this.url + '/filtrar', filtro, this.as.getOptions());
    }
};
InspecaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"] }
];
InspecaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])
], InspecaoService);



/***/ }),

/***/ "./src/app/service/sigobra/obra.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/sigobra/obra.service.ts ***!
  \*************************************************/
/*! exports provided: ObraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObraService", function() { return ObraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autentificacao/autentificacao.service */ "./src/app/service/autentificacao/autentificacao.service.ts");




let ObraService = class ObraService {
    constructor(http, as) {
        this.http = http;
        this.as = as;
        this.url = '/obras';
    }
    salvar(obras) {
        return this.http.post(this.as.url + this.url, obras, this.as.getOptions());
    }
    editar(obras) {
        return this.http.put(this.as.url + this.url, obras, this.as.getOptions());
    }
    delete(obras) {
        return this.http.post(this.as.url + this.url + '/deletar', obras, this.as.getOptions());
    }
    pesquisar(value) {
        return this.http.post(this.as.url + this.url + '/pesquisar', value, this.as.getOptions());
    }
    get(id) {
        return this.http.post(this.as.url + this.url, id, this.as.getOptions());
    }
    edit(obras) {
        return this.http.post(this.as.url + this.url + '/editar', obras, this.as.getOptions());
    }
    editarativo(obras) {
        return this.http.post(this.as.url + this.url + '/editarativo', obras, this.as.getOptions());
    }
    pesquisar1(value) {
        return this.http.post(this.as.url + this.url + '/pesquisar1', value, this.as.getOptions());
    }
};
ObraService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"] }
];
ObraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])
], ObraService);



/***/ }),

/***/ "./src/app/service/sigobra/statusitensinspecao.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/sigobra/statusitensinspecao.service.ts ***!
  \****************************************************************/
/*! exports provided: StatusitensinspecaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusitensinspecaoService", function() { return StatusitensinspecaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autentificacao/autentificacao.service */ "./src/app/service/autentificacao/autentificacao.service.ts");
/* harmony import */ var _model_objetc_tipo_status_oj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/objetc/tipo-status-oj */ "./src/app/model/objetc/tipo-status-oj.ts");
/* harmony import */ var src_app_model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/enums/tipo-status.enum */ "./src/app/model/enums/tipo-status.enum.ts");






let StatusitensinspecaoService = class StatusitensinspecaoService {
    constructor(http, as) {
        this.http = http;
        this.as = as;
        this.url = '/statusitensinspecao';
    }
    salvar(status) {
        return this.http.post(this.as.url + this.url, status, this.as.getOptions());
    }
    editar(status) {
        return this.http.put(this.as.url + this.url, status, this.as.getOptions());
    }
    delete(status) {
        return this.http.post(this.as.url + this.url + '/deletar', status, this.as.getOptions());
    }
    pesquisar(value) {
        return this.http.post(this.as.url + this.url + '/pesquisar', value, this.as.getOptions());
    }
    get(id) {
        return this.http.post(this.as.url + this.url, id, this.as.getOptions());
    }
    edit(status) {
        return this.http.post(this.as.url + this.url + '/editar', status, this.as.getOptions());
    }
    editarativo(status) {
        return this.http.post(this.as.url + this.url + '/editarativo', status, this.as.getOptions());
    }
    getListStatus() {
        const lista = new Array();
        let tipo = new _model_objetc_tipo_status_oj__WEBPACK_IMPORTED_MODULE_4__["TipoStatusOJ"]();
        tipo.nome = 'Aberto';
        tipo.tipoStatus = src_app_model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_5__["TipoStatus"].aberto;
        lista.push(tipo);
        tipo = new _model_objetc_tipo_status_oj__WEBPACK_IMPORTED_MODULE_4__["TipoStatusOJ"]();
        tipo.nome = 'Finalizado';
        tipo.tipoStatus = src_app_model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_5__["TipoStatus"].finalizado;
        lista.push(tipo);
        tipo = new _model_objetc_tipo_status_oj__WEBPACK_IMPORTED_MODULE_4__["TipoStatusOJ"]();
        tipo.nome = 'Reprovado';
        tipo.tipoStatus = src_app_model_enums_tipo_status_enum__WEBPACK_IMPORTED_MODULE_5__["TipoStatus"].reprovado;
        lista.push(tipo);
        return lista;
    }
};
StatusitensinspecaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"] }
];
StatusitensinspecaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])
], StatusitensinspecaoService);



/***/ }),

/***/ "./src/app/service/sigobra/tipoinspecao.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/service/sigobra/tipoinspecao.service.ts ***!
  \*********************************************************/
/*! exports provided: TipoinspecaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoinspecaoService", function() { return TipoinspecaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autentificacao/autentificacao.service */ "./src/app/service/autentificacao/autentificacao.service.ts");




let TipoinspecaoService = class TipoinspecaoService {
    constructor(http, as) {
        this.http = http;
        this.as = as;
        this.url = '/tipoinspecao';
    }
    salvar(tipoinspecao) {
        return this.http.post(this.as.url + this.url, tipoinspecao, this.as.getOptions());
    }
    editar(tipoinspecao) {
        return this.http.put(this.as.url + this.url, tipoinspecao, this.as.getOptions());
    }
    delete(tipoinspecao) {
        return this.http.post(this.as.url + this.url + '/deletar', tipoinspecao, this.as.getOptions());
    }
    pesquisar(value) {
        return this.http.post(this.as.url + this.url + '/pesquisar', value, this.as.getOptions());
    }
    get(id) {
        return this.http.post(this.as.url + this.url, id, this.as.getOptions());
    }
    edit(tipoinspecao) {
        return this.http.post(this.as.url + this.url + '/editar', tipoinspecao, this.as.getOptions());
    }
    editarativo(tipoinspecao) {
        return this.http.post(this.as.url + this.url + '/editarativo', tipoinspecao, this.as.getOptions());
    }
};
TipoinspecaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"] }
];
TipoinspecaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])
], TipoinspecaoService);



/***/ }),

/***/ "./src/app/service/sigobra/usuario.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/sigobra/usuario.service.ts ***!
  \****************************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autentificacao/autentificacao.service */ "./src/app/service/autentificacao/autentificacao.service.ts");




let UsuarioService = class UsuarioService {
    constructor(http, as) {
        this.http = http;
        this.as = as;
        this.url = '/usuario';
        this.imagem = '/imagem';
    }
    salvar(usuario) {
        return this.http.post(this.as.url + this.url, usuario, this.as.getOptions());
    }
    getToken(usuario) {
        return this.http.post(this.as.url + this.as.urlToken, this.as.getBodyToken(usuario.email, usuario.senha), this.as.getOptionsToken());
    }
    logar(usuario) {
        return this.http.post(this.as.url + this.url + '/logar', usuario, this.as.getOptions());
    }
    getImagem(usuario) {
        return this.http.post(this.as.url + this.url + this.imagem, usuario, this.as.getOptions());
    }
    pesquisar(value) {
        return this.http.post(this.as.url + this.url + '/pesquisar', value, this.as.getOptions());
    }
    byusuario(value) {
        return this.http.post(this.as.url + this.url + '/byusuario', value, this.as.getOptions());
    }
};
UsuarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"] }
];
UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_3__["AutentificacaoService"]])
], UsuarioService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map