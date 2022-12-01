import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityModel } from '../models/city.model';
import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import { SecurityService } from './security.service';

@Injectable({
    providedIn: 'root'
})
export class CityService {
    basicUrl='http://localhost:3000';
    token: string='';
    constructor(
	private http: HttpClient,
	private secService: SecurityService
    ){
	this.token=this.secService.getToken();
    }

    getC(): Observable<CityModel[]>{
	return this.http.get<CityModel[]>(`${this.basicUrl}/cities`);
    }
    getCById(id: string): Observable<CityModel>{
	return this.http.get<CityModel>(`${this.basicUrl}/cities/${id}`);
    }
    createC(d: CityModel): Observable<CityModel>{
	return this.http.post<CityModel>(`${this.basicUrl}/cities`, d,
					       {
						   headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`})
					       });
    }
    updateC(d: CityModel): Observable<CityModel>{
	return this.http.put<CityModel>(`${this.basicUrl}/cities/${d.id}`, d,
					      {
						  headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`})
					      });
    }
}
