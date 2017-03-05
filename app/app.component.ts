import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {Faq} from './faq/faq.component';
import {Contact} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {StateService} from './common/state.service';
import {ExperimentsService} from './common/experiments.service';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [StateService, ExperimentsService],
})
@Routes([
  {path: '/',            component: HomeComponent },
  {path: '/home',        component: HomeComponent },
  {path: '/about',       component: AboutComponent },
  {path: '/contact',     component: Contact },
  {path: '/faq',         component: Faq },
  {path: '/*',           component: HomeComponent }
])
export class AppComponent {}
