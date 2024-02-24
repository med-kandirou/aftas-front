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
import { LoginComponent } from './modules/admin/components/login/login.component';
import { RegisterComponent } from './modules/admin/components/register/register.component';
import { UsersComponent } from './modules/admin/components/users/users.component';
import { AuthGuard } from './core/guard/auth.guard';
import { isloggedInGuard } from './core/guard/islogged-in.guard';
import { NoneComponent } from './modules/admin/components/none/none.component';


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
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    NoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [AuthGuard,isloggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
