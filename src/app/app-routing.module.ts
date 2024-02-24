import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionSectionComponent } from './modules/admin/components/competition-section/competition-section.component';
import { ListParticipantComponent } from './modules/admin/components/list-participant/list-participant.component';
import { ListAddRankComponent } from './modules/admin/components/list-add-rank/list-add-rank.component';
import { PodiumComponent } from './core/shared/components/podium/podium.component';
import { LoginComponent } from './modules/admin/components/login/login.component';
import { RegisterComponent } from './modules/admin/components/register/register.component';
import { UsersComponent } from './modules/admin/components/users/users.component';
import { AuthGuard } from './core/guard/auth.guard';
import { isloggedInGuard } from './core/guard/islogged-in.guard';
import { NoneComponent } from './modules/admin/components/none/none.component';
const routes: Routes = [
  { path : '', component: LoginComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'admin/competition', component: CompetitionSectionComponent,canActivate:[isloggedInGuard,AuthGuard]},
  { path : 'admin/competition/:codeComp/participants', component: ListParticipantComponent,canActivate:[isloggedInGuard]},
  { path : 'admin/competition/:codeComp/addRanking', component: ListAddRankComponent,canActivate:[isloggedInGuard]},
  { path : 'admin/competition/:codeComp/podium', component: PodiumComponent,canActivate:[isloggedInGuard]},
  { path : 'admin/users', component: UsersComponent,canActivate:[AuthGuard]},
  { path : 'none', component: NoneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
