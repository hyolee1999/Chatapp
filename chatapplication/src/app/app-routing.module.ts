import { Component, NgModule, Type } from '@angular/core';
import { provideRoutes, RouterModule, ROUTES, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ChatappComponent } from './chatapp/chatapp.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'' , component :LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:ChatappComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }

// export function configUser() : Type<Component>{
//   if (AuthGuard.prototype.canActivate){
//     return <Type<Component>>ChatappComponent;
//   }
//   else{
//     return <Type<Component>>LoginComponent;
//   }
// }