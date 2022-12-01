import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ZoneModel } from '../models/zone.model';
import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import { SecurityService } from './security.service';

@Injectable({
    providedIn: 'root'
})
export class ZoneService {
    basicUrl='http://localhost:3000';
    token: string='';
    constructor(
	private http: HttpClient,
	private secService: SecurityService
    ){
	this.token=this.secService.getToken();
    }

    getZ(): Observable<ZoneModel[]>{
	return this.http.get<ZoneModel[]>(`${this.basicUrl}/zones`);
    }
    getZById(id: string): Observable<ZoneModel>{
	return this.http.get<ZoneModel>(`${this.basicUrl}/zones/${id}`);
    }
    createZ(d: ZoneModel): Observable<ZoneModel>{
	return this.http.post<ZoneModel>(`${this.basicUrl}/zones`, d,
					 {
					     headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`})
					 });
    }
    updateZ(d: ZoneModel): Observable<ZoneModel>{
	return this.http.put<ZoneModel>(`${this.basicUrl}/zones/${d.id}`, d,
					{
					    headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`})
					});
    }
}
