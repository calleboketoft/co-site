///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bind} from 'angular2/core'
import {bootstrap} from 'angular2/platform/browser'
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router'
import {provideStore} from '@ngrx/store'

import {cbsReducer} from 'co-browser-storage/co-browser-storage'

import {AppCmp} from './app-cmp'

bootstrap(AppCmp, [
  ROUTER_PROVIDERS,
  bind(LocationStrategy).toClass(HashLocationStrategy),
  provideStore({cbsReducer}, {cbsReducer: []})
])