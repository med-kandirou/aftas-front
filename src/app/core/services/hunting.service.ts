import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hunting } from '../models/hunt.model';
import { API_BASE_URL } from './api.config';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HuntService {

  constructor(private http:HttpClient) { }
  save(form:FormGroup): Observable<Hunting> {
    return this.http.post<Hunting>(API_BASE_URL+`/api/Hunting`,form ,{ headers: { Accept: 'application/json' } });
  }
}
