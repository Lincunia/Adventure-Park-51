import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { Observable, } from 'rxjs';
import { SecurityService } from './security.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    basicUrl='http://localhost:3000';
    token: string='';
    constructor(
	private http: HttpClient,
	private secService: SecurityService
    ){
	this.token=this.secService.getToken();
    }

    getU(): Observable<UserModel[]>{
	return this.http.get<UserModel[]>(`${this.basicUrl}/users`);
    }
    getUById(id: string): Observable<UserModel>{
	return this.http.get<UserModel>(`${this.basicUrl}/users/${id}`);
    }
    createU(d: UserModel): Observable<UserModel>{
	return this.http.post<UserModel>(`${this.basicUrl}/users`, d, { headers: new HttpHeaders({}) });
    }
    updateU(d: UserModel): Observable<UserModel>{
	return this.http.put<UserModel>(`${this.basicUrl}/users/${d.id}`, d,
					      {
						  headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`})
					      });
    }
    deleteU(id: string): Observable<any>{
	return this.http.delete(`${this.basicUrl}/users/${id}`,
					       {
						   headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`})
					       });
    }
}
