import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './core/auth.guard';
import { UserResolver } from './user/user.resolver';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'map', component: MapComponent },
  { path: 'login', component: LoginComponent,  canActivate: [AuthGuard]},
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}},
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
