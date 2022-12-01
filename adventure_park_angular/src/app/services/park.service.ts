import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkModel } from '../models/park.model';
import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import { SecurityService } from './security.service';

@Injectable({
    providedIn: 'root'
})
export class ParkService {
    basicUrl='http://localhost:3000';
    token: string='';
    constructor(
	private http: HttpClient,
	private secService: SecurityService
    ){
	this.token=this.secService.getToken();
    }

    getP(): Observable<ParkModel[]>{
	return this.http.get<ParkModel[]>(`${this.basicUrl}/parks`);
    }
    getPById(id: string): Observable<ParkModel>{
	return this.http.get<ParkModel>(`${this.basicUrl}/parks/${id}`);
    }
    createP(d: ParkModel): Observable<ParkModel>{
	return this.http.post<ParkModel>(`${this.basicUrl}/parks`, d,
					 {
					     headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`})
					 });
    }
    updateP(d: ParkModel): Observable<ParkModel>{
	return this.http.put<ParkModel>(`${this.basicUrl}/parks/${d.id}`, d,
					{
					    headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`})
					});
    }
}
