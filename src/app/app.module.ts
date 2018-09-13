import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas

import { APP_ROUTE } from './app.route';

// Modulos
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
   ],
  imports: [
    BrowserModule,
    APP_ROUTE,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
