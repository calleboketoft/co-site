import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'
import {PageCmp} from './page-cmp'

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <a [routerLink]="['/Page']">Page</a><br>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {path: '/page', as: 'Page', component: PageCmp}
])
export class AppCmp {}