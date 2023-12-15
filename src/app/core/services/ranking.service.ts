import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api.config';
import { Ranking } from '../models/ranking.model';


@Injectable({
  providedIn: 'root'
})
export class RankingService {


  constructor(private http:HttpClient) { }

  getRankingsbyComp(code:string): Observable<Ranking[]> {
    return this.http.get<Ranking[]>(API_BASE_URL+`/api/Ranking/byCompetition/${code}`, { headers: { Accept: 'application/json' } });
  }

  calculeRanks(code:string): Observable<any> {
    return this.http.get<any>(API_BASE_URL+`/api/Ranking/calcule/${code}`, { headers: { Accept: 'application/json' } });
  }

  // save(form:FormGroup): Observable<Ranking> {
  //   return this.http.post<Ranking>(API_BASE_URL+`/api/Ranking`,form ,{ headers: { Accept: 'application/json' } });
  // }

}
