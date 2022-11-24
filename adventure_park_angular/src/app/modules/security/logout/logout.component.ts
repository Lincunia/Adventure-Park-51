import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
    constructor(
	private secService: SecurityService,
	private router: Router
    ){}
    ngOnInit(): void{
	this.secService.deleteInfoSession();
	this.router.navigate(['/inicio'])
    }
}
