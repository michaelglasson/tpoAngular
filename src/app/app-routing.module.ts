import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QualsComponent } from './quals/quals.component';
import { RolesComponent } from './roles/roles.component';
import { TposComponent } from './tpos/tpos.component';

const routes: Routes = [
  { path: 'quals', component: QualsComponent },
  { path: 'roles', component: RolesComponent},
  { path: 'tpos', component: TposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
