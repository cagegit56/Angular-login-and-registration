import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path : '', redirectTo:'home', pathMatch:'full'},
  {path : '', component: HomeComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'dashboard', component : DashboardComponent, canActivate: [AuthGuard]},
  {path : 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
