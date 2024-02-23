import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionSectionComponent } from './modules/admin/components/competition-section/competition-section.component';
import { ListParticipantComponent } from './modules/admin/components/list-participant/list-participant.component';
import { ListAddRankComponent } from './modules/admin/components/list-add-rank/list-add-rank.component';
import { PodiumComponent } from './core/shared/components/podium/podium.component';
import { LoginComponent } from './modules/admin/components/login/login.component';
import { RegisterComponent } from './modules/admin/components/register/register.component';
import { UsersComponent } from './modules/admin/components/users/users.component';
const routes: Routes = [
  { path : '', component: LoginComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'admin/competition', component: CompetitionSectionComponent},
  { path : 'admin/competition/:codeComp/participants', component: ListParticipantComponent},
  { path : 'admin/competition/:codeComp/addRanking', component: ListAddRankComponent},
  { path : 'admin/competition/:codeComp/podium', component: PodiumComponent},
  { path : 'admin/users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
