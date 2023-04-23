import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {HomepageComponent} from './homepage/homepage.component';
import {RouterModule, Routes} from "@angular/router";
import { AuthComponent } from './auth/auth.component';
import { IndexComponent } from './index.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'auth', component: AuthComponent },
    ]
  }
];

@NgModule({
  declarations: [
    NavbarComponent,
    HomepageComponent,
    AuthComponent,
    IndexComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgOptimizedImage,
    ReactiveFormsModule,
  ]
})
export class IndexModule {

}
