import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersModule } from './users.module';

import { MainComponent } from './main/main.component';
import { StaticPageComponent } from './static-page/static-page.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent},
  { path: 'howtobuy', component: StaticPageComponent, data: {
    fileName: 'howtobuy.html',
    title: 'Оплата'
  }},
  { path: 'about', component: StaticPageComponent, data: {
    fileName: 'about.html',
    title: 'О фирме'}
  },
  { path: '**', component: StaticPageComponent, data: {
    fileName: '404.html',
    title: 'Ошибка'
  }},
  { path: 'user', loadChildren: 'app/users.module#UsersModule'},
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    UsersModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }


