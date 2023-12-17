import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { CompetitionSectionComponent } from './modules/admin/components/competition-section/competition-section.component';
import { SaveCompetitionComponent } from './core/shared/components/save-competition/save-competition.component';
import { CardParticipantComponent } from './core/shared/components/card-participant/card-participant.component';
import { ListParticipantComponent } from './modules/admin/components/list-participant/list-participant.component';
import { AddHuntComponent } from './core/shared/components/add-hunt/add-hunt.component';
import { ListAddRankComponent } from './modules/admin/components/list-add-rank/list-add-rank.component';
import { AddMemberComponent } from './core/shared/components/add-member/add-member.component';
import { PodiumComponent } from './core/shared/components/podium/podium.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    CompetitionSectionComponent,
    SaveCompetitionComponent,
    CardParticipantComponent,
    ListParticipantComponent,
    AddHuntComponent,
    ListAddRankComponent,
    AddMemberComponent,
    PodiumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
