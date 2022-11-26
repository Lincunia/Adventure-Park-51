import { Component } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription } from 'rxjs';
import { IdentifyModel } from 'src/app/models/identify.model';

@Component({
    selector: 'app-navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent {
    isIn: boolean=false;
    subs: Subscription=new Subscription();
    constructor(private secService: SecurityService){}
    ngOnInit(): void{
	this.subs=this.secService.getDataUserInSession().subscribe((data: IdentifyModel)=>{ this.isIn=data.isIdentified; });
    }
}
