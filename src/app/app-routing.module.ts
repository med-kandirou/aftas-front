import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { CompetitionSectionComponent } from './modules/admin/components/competition-section/competition-section.component';
import { SignInSectionComponent } from './modules/admin/components/sign-in-section/sign-in-section.component';

const routes: Routes = [
  // { path : 'admin', component: AdminDashboardComponent},
  { path : 'admin/competition', component: CompetitionSectionComponent},
  { path : 'admin/competition/:codeComp/participants', component: SignInSectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
