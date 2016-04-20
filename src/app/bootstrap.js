"use strict";
///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var store_1 = require('@ngrx/store');
var co_browser_storage_1 = require('co-browser-storage/co-browser-storage');
var app_cmp_1 = require('./app-cmp');
browser_1.bootstrap(app_cmp_1.AppCmp, [
    router_1.ROUTER_PROVIDERS,
    core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy),
    store_1.provideStore({ cbsReducer: co_browser_storage_1.cbsReducer }, { cbsReducer: [] })
]);
//# sourceMappingURL=bootstrap.js.map