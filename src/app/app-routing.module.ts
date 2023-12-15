import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionSectionComponent } from './modules/admin/components/competition-section/competition-section.component';
import { ListParticipantComponent } from './modules/admin/components/list-participant/list-participant.component';
import { ListAddRankComponent } from './modules/admin/components/list-add-rank/list-add-rank.component';
const routes: Routes = [
  { path : 'admin/competition', component: CompetitionSectionComponent},
  { path : 'admin/competition/:codeComp/participants', component: ListParticipantComponent},
  { path : 'admin/competition/:codeComp/addRanking', component: ListAddRankComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
