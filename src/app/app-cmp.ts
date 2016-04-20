import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'
import {CbsCmp, CbsModel} from 'co-browser-storage/co-browser-storage'
import {browserStorageConfig} from '../browser-storage-config'

import {PageCmp} from './page-cmp'

@Component({
  selector: 'app',
  providers: [CbsModel],
  directives: [ROUTER_DIRECTIVES, CbsCmp],
  template: `
    <a [routerLink]="['/Page']">Page</a><br>
    <router-outlet></router-outlet>
    <cbs-cmp [cbsConfig]='_browserStorageConfig'></cbs-cmp>
  `
})
@RouteConfig([
  {path: '/page', as: 'Page', component: PageCmp}
])
export class AppCmp {
  private _browserStorageConfig = browserStorageConfig
}