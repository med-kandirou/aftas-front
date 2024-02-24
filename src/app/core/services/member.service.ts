import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { App_user } from '../models/app_user.model';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { API_BASE_URL } from './api.config';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }
  save(form:FormGroup): Observable<App_user> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      .set('Accept', 'application/json');
    return this.http.post<App_user>(API_BASE_URL+`/api/Member`,form ,{ headers});
  }

  getAll(): Observable<App_user[]> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      .set('Accept', 'application/json');
    return this.http.get<App_user[]>(API_BASE_URL+`/api/Member`,{headers});
  }

  updateRole(m:App_user): Observable<App_user> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      .set('Accept', 'application/json');
    return this.http.post<App_user>(API_BASE_URL+`/api/Member`,m,{headers});
  }

  getMemberNotExistInComp(code: string): Observable<App_user[]> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      .set('Accept', 'application/json');
    return this.http.get<App_user[]>(API_BASE_URL+`/api/Member/MemberNotExistInComp/${code}`, { headers });
  }

  search(index:string,code:string): Observable<App_user[]> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      .set('Accept', 'application/json');
    return this.http.get<App_user[]>(API_BASE_URL+`/api/Member/find/${code}/${index}` ,{ headers });
  }
}
