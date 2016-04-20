"use strict";
///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var app_cmp_1 = require('./app-cmp');
browser_1.bootstrap(app_cmp_1.AppCmp, [
    router_1.ROUTER_PROVIDERS,
    core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
]);
//# sourceMappingURL=bootstrap.js.map