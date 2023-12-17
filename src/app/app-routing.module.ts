import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionSectionComponent } from './modules/admin/components/competition-section/competition-section.component';
import { ListParticipantComponent } from './modules/admin/components/list-participant/list-participant.component';
import { ListAddRankComponent } from './modules/admin/components/list-add-rank/list-add-rank.component';
import { PodiumComponent } from './core/shared/components/podium/podium.component';
const routes: Routes = [
  { path : 'admin/competition', component: CompetitionSectionComponent},
  { path : 'admin/competition/:codeComp/participants', component: ListParticipantComponent},
  { path : 'admin/competition/:codeComp/addRanking', component: ListAddRankComponent},
  { path : 'admin/competition/:codeComp/podium', component: PodiumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
