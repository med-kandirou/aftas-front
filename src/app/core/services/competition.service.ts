import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from './api.config';
import { Competition } from '../models/competition.model';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http:HttpClient) { }

  getOne(code: string) :Observable<Competition>{
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      .set('Accept', 'application/json');
    return this.http.get<Competition>(API_BASE_URL+`/api/Competition/${code}`,{ headers });
  }

  getcompetitions(page:number,size:number,filtre:String): Observable<Competition[]> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      .set('Accept', 'application/json');
    return this.http.get<Competition[]>(API_BASE_URL+`/api/Competition/byStatus/${filtre}?page=${page}&size=${size}`, { headers });
  }

  save(form:FormGroup): Observable<Competition> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      .set('Accept', 'application/json');
    return this.http.post<Competition>(API_BASE_URL+`/api/Competition`,form ,{ headers });
  }


}
