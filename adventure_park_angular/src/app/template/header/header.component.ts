import { Component } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription } from 'rxjs';
import { IdentifyModel } from 'src/app/models/identify.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    isIn: boolean=false;
    subs: Subscription=new Subscription();
    constructor(private secService: SecurityService){}
    ngOnInit(): void{
	this.subs=this.secService.getDataUserInSession().subscribe((data: IdentifyModel)=>{ this.isIn=data.isIdentified; });
    }
}
