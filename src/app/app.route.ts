
import { RouterModule,  Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const appRoute: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NopagefoundComponent}
];


export const APP_ROUTE = RouterModule.forRoot( appRoute, {useHash: true}  );
