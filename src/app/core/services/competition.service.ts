import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from './api.config';
import { Competition } from '../models/competition.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http:HttpClient) { }

  getQuestions(page:number,size:number): Observable<Competition[]> {
    return this.http.get<Competition[]>(API_BASE_URL+`/api/Competition?page=${page}&size=${size}`, { headers: { Accept: 'application/json' } });
  }
}
