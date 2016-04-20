"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var co_browser_storage_1 = require('co-browser-storage/co-browser-storage');
var browser_storage_config_1 = require('../browser-storage-config');
var page_cmp_1 = require('./page-cmp');
var AppCmp = (function () {
    function AppCmp() {
        this._browserStorageConfig = browser_storage_config_1.browserStorageConfig;
    }
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app',
            providers: [co_browser_storage_1.CbsModel],
            directives: [router_1.ROUTER_DIRECTIVES, co_browser_storage_1.CbsCmp],
            template: "\n    <a [routerLink]=\"['/Page']\">Page</a><br>\n    <router-outlet></router-outlet>\n    <cbs-cmp [cbsConfig]='_browserStorageConfig'></cbs-cmp>\n  "
        }),
        router_1.RouteConfig([
            { path: '/page', as: 'Page', component: page_cmp_1.PageCmp }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
//# sourceMappingURL=app-cmp.js.map