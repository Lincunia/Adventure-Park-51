import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import {
    IdentifyUModel,
    IdentifyAModel
} from '../models';
import {
    Observable,
    BehaviorSubject
} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SecurityService {
    url='http://localhost:3000';

    dataUserInSession=new BehaviorSubject<IdentifyUModel>(new IdentifyUModel());
    dataAdminInSession=new BehaviorSubject<IdentifyAModel>(new IdentifyAModel());

    constructor(private http: HttpClient) {
	this.checkCurrentSession();
    }

    checkCurrentSession(){
	let data=this.getInfoSession();
	this.refreshDataSession(data, data)
    }
    refreshDataSession(dataA: any, dataU: any){
	if(dataA) this.dataAdminInSession.next(dataA);
	if(dataU) this.dataUserInSession.next(dataU);
    }
    // ADMIN
    getDataAdminInSession(){
	return this.dataAdminInSession.asObservable();
    }
    identifyAdmin(user: string, key: string, charge: string, phone: number): Observable<IdentifyAModel>{
	return this.http.post<IdentifyAModel>(`${this.url}/identifyAdmin`,
			      {user: user, key: key, charge: charge, phone: phone},
			      { headers: new HttpHeaders( {}) });
    }
    saveSessionA(data: IdentifyAModel){
	data.isIdentified=true;
	localStorage.setItem('dataSession', JSON.stringify(data));
	this.refreshDataSession(data, null);
    }
    // USER 
    getDataUserInSession(){
	return this.dataUserInSession.asObservable();
    }
    identifySomeone(user: string, key: string): Observable<IdentifyUModel>{
	return this.http.post<IdentifyUModel>(`${this.url}/identifySomeone`,
			      {user: user, key: key},
			      { headers: new HttpHeaders( {}) });
    }
    saveSessionU(data: IdentifyUModel){
	data.isIdentified=true;
	localStorage.setItem('dataSession', JSON.stringify(data));
	this.refreshDataSession(null, data);
    }
    getInfoSession(){
	let dataString=localStorage.getItem('dataSession');
	if(!dataString) return null;
	return JSON.parse(dataString);
    }
    deleteInfoSession(){
	localStorage.removeItem('dataSession');
	this.refreshDataSession(new IdentifyAModel(), new IdentifyUModel());
    }
    isTheUserIn(){
	return localStorage.getItem('dataSession');
    }
    getToken(){
	let data=localStorage.getItem('dataSession');
	if(!data) return '';
	let d=JSON.parse(data);
	return d.tk;
    }
}
