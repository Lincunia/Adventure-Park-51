import { Component } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription } from 'rxjs';
import { IdentifyUModel } from 'src/app/models/identify-u.model';
import { IdentifyAModel } from 'src/app/models/identify-a.model';

@Component({
    selector: 'app-navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent {
    isIn: boolean=false;
    isThereAnybody: boolean=false;
    subs: Subscription=new Subscription();
    constructor(private secService: SecurityService){}
    ngOnInit(): void{
	let a=this.secService.getDataAdminInSession().subscribe((data: IdentifyAModel)=>{ this.isIn=data.isIdentified; });
	let b=this.secService.getDataUserInSession().subscribe((data: IdentifyUModel)=>{ this.isThereAnybody=data.isIdentified; });
	if(a) this.subs=a;
	if(b) this.subs=b;
    }
}
