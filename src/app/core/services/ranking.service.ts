import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api.config';
import { Ranking } from '../models/ranking.model';
import { FormBuilder } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class RankingService {


  constructor(private http:HttpClient) { }

  getRankingsbyComp(code:string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      .set('Accept', 'application/json');
    return this.http.get<any>(API_BASE_URL+`/api/Ranking/byCompetition/${code}`, { headers});
  }

  calculeRanks(code:string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      .set('Accept', 'application/json');
    return this.http.get<any>(API_BASE_URL+`/api/Ranking/calcule/${code}`, { headers });
  }

  save(form:any): Observable<Ranking> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      .set('Accept', 'application/json');
    return this.http.post<Ranking>(API_BASE_URL+`/api/Ranking`,form ,{ headers});
  }

}
