import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { StaticPageComponent } from './static-page/static-page.component';

import { UsersModule } from './users.module';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    StaticPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    UsersModule,
    UsersRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
