(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-dashboard-tarefas-tarefas-module~pages-inspecao-inspecao-realizar-inspecao-realizar-module"],{

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
    pesquisa(value) {
        return this.http.post(this.as.url + this.url + '/pesquisa', value, this.as.getOptions());
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
    filtra(filtro) {
        return this.http.post(this.as.url + this.url + '/filtrar', filtro, this.as.getOptions());
    }
    pesquisarUltimosItens() {
        return this.http.get(this.as.url + this.url + '/listarultimas', this.as.getOptions());
    }
    getRelatorioFiltroObra(filtro) {
        return this.http.post(this.as.url + this.url + '/getrelatoriofiltroobra', filtro, this.as.getOptionsPDF());
    }
    getRelatorioFiltroObraConsolidado(filtro) {
        return this.http.post(this.as.url + this.url + '/getrelatoriofiltroobraconsolidado', filtro, this.as.getOptionsPDF());
    }
    getRelatorioFiltro(filtro) {
        return this.http.post(this.as.url + this.url + '/getrelatoriofiltro', filtro, this.as.getOptionsPDF());
    }
    getRelatorioInspecao(inspecao) {
        return this.http.post(this.as.url + this.url + '/relatoriodeinpecao', inspecao, this.as.getOptionsPDF());
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

/***/ "./src/app/service/sigobra/item-inspesionado.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/service/sigobra/item-inspesionado.service.ts ***!
  \**************************************************************/
/*! exports provided: ItemInspesionadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemInspesionadoService", function() { return ItemInspesionadoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../autentificacao/autentificacao.service */ "./src/app/service/autentificacao/autentificacao.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ItemInspesionadoService = class ItemInspesionadoService {
    constructor(http, as) {
        this.http = http;
        this.as = as;
        this.url = '/iteminspecionado';
    }
    salvar(item, idInspecao) {
        return this.http.post(this.as.url + this.url + '/' + idInspecao.toString(), item, this.as.getOptions());
    }
    pesquisarUltimosItens() {
        return this.http.get(this.as.url + this.url + '/pesquisarultimositens', this.as.getOptions());
    }
};
ItemInspesionadoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_1__["AutentificacaoService"] }
];
ItemInspesionadoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _autentificacao_autentificacao_service__WEBPACK_IMPORTED_MODULE_1__["AutentificacaoService"]])
], ItemInspesionadoService);



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
    pesquisa(value) {
        return this.http.post(this.as.url + this.url + '/pesquisa', value, this.as.getOptions());
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
    findTop10ComInspencoesAbertas() {
        return this.http.get(this.as.url + this.url + '/ultimasobrasabertas', this.as.getOptions());
    }
    filtra(filtro) {
        return this.http.post(this.as.url + this.url + '/filtrar', filtro, this.as.getOptions());
    }
    // relatorio por filtro
    getRelatorioFiltro(filtro) {
        return this.http.post(this.as.url + this.url + '/relatoriofiltro', filtro, this.as.getOptionsPDF());
    }
    // relatorio por obras
    getRelatorioObras(obras) {
        return this.http.post(this.as.url + this.url + '/relatorioobras', obras, this.as.getOptionsPDF());
    }
    // relatorio por obra
    getRelatorioObra(obra) {
        return this.http.post(this.as.url + this.url + '/relatorioobra', obra, this.as.getOptionsPDF());
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
    pesquisa(value) {
        return this.http.post(this.as.url + this.url + '/pesquisa', value, this.as.getOptions());
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
    pesquisa(value) {
        return this.http.post(this.as.url + this.url + '/pesquisa', value, this.as.getOptions());
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



/***/ })

}]);
//# sourceMappingURL=default~pages-dashboard-tarefas-tarefas-module~pages-inspecao-inspecao-realizar-inspecao-realizar-module-es2015.js.map