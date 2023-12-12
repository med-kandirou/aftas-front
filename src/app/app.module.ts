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
import { SignInSectionComponent } from './modules/admin/components/sign-in-section/sign-in-section.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    CompetitionSectionComponent,
    SaveCompetitionComponent,
    SignInSectionComponent,
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
