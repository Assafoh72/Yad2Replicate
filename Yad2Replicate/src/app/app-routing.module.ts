import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { SearchBarComponent } from './search-property-bar/search-bar/search-bar.component';
import { HeaderComponent } from './header/header.component';
import { MaterialComponent } from './material/material.component';


const routes: Routes = [
{path: '', component: MaterialComponent},
{path:'header', component: HeaderComponent},
{path: 'signUp', component: SignUpComponent},
{path: 'login', component: LogInComponent},
{path: 'main', component: SearchBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
