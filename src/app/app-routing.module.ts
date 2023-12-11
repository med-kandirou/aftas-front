import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { CompetitionSectionComponent } from './modules/admin/components/competition-section/competition-section.component';
const routes: Routes = [
  { path : 'admin', component: AdminDashboardComponent},
  { path : 'admin/competition', component: CompetitionSectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
