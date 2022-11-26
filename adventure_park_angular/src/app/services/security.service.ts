import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import { IdentifyModel } from '../models/identify.model';
import {
    Observable,
    BehaviorSubject
} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SecurityService {
    url='http://localhost:3000';

    dataUserInSession=new BehaviorSubject<IdentifyModel>(new IdentifyModel());

    constructor(private http: HttpClient) {
	this.checkCurrentSession();
    }

    checkCurrentSession(){
	let data=this.getInfoSession();
	this.refreshDataSession(data)
    }
    refreshDataSession(data: IdentifyModel){
	if(data) this.dataUserInSession.next(data);
    }
    getDataUserInSession(){
	return this.dataUserInSession.asObservable();
    }
    identifySomeone(user: string, key: string): Observable<IdentifyModel>{
	return this.http.post<IdentifyModel>(`${this.url}/identifySomeone`,
			      {user: user, key: key},
			      { headers: new HttpHeaders( {}) });
    }
    saveSession(data: IdentifyModel){
	data.isIdentified=true;
	localStorage.setItem('dataSession', JSON.stringify(data));
	this.refreshDataSession(data);
    }
    getInfoSession(){
	let dataString=localStorage.getItem('dataSession');
	if(!dataString) return null;
	return JSON.parse(dataString);
    }
    deleteInfoSession(){
	localStorage.removeItem('dataSession');
	this.refreshDataSession(new IdentifyModel());
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
