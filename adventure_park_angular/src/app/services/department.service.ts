import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentModel } from '../models/department.model';
import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import { SecurityService } from './security.service';

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {
    basicUrl='http://localhost:3000';
    token: string='';
    constructor(
	private http: HttpClient,
	private secService: SecurityService
    ){
	this.token=this.secService.getToken();
    }

    getD(): Observable<DepartmentModel[]>{
	return this.http.get<DepartmentModel[]>(`${this.basicUrl}/departments`);
    }
    getDById(id: string): Observable<DepartmentModel>{
	return this.http.get<DepartmentModel>(`${this.basicUrl}/departments/${id}`);
    }
    createD(d: DepartmentModel): Observable<DepartmentModel>{
	return this.http.post<DepartmentModel>(`${this.basicUrl}/departments`, d,
					       {
						   headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`})
					       });
    }
    updateD(d: DepartmentModel): Observable<DepartmentModel>{
	return this.http.put<DepartmentModel>(`${this.basicUrl}/departments/${d.id}`, d,
					       {
						   headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`})
					       });
    }
    /*
     * DO NOT USE IT
     *

    deleketeD(id: string): Observable<any>{
	return this.http.delete(`${this.basicUrl}/departments/${id}`,
					       {
						   headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`})
					       });
    }
     */
}
