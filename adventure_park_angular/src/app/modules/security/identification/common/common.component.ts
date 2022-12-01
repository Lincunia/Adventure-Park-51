import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';

import { Router } from '@angular/router';
const cryptor=require('crypto-js');

@Component({
    selector: 'app-common',
    templateUrl: './common.component.html',
    styleUrls: ['./common.component.css']
})
export class CommonComponent {
    fgValidator: FormGroup=this.fb.group({
	'user': ['', [Validators.required, Validators.email]],
	'password': ['', [Validators.required]],
    });
    constructor( private fb: FormBuilder, private secService: SecurityService, private router: Router){ }
    ngOnInit(){
	this.fgValidator.controls['user'].setValue('medinagofe@gmail.com');
	this.fgValidator.controls['password'].setValue('iKb9gZfd');
    }
    identifyUser(){
	let user=this.fgValidator.controls['user'].value,
	    password=this.fgValidator.controls['password'].value;

	let cipheredKey=cryptor.SHA256(password).toString();
	this.secService.identifySomeone(user, cipheredKey).subscribe(
	    (data: any)=>{
		this.secService.saveSessionU(data);
		this.router.navigate(['/normal/main'])
	    }, (error: any)=>{alert('Datos inválidos')});
    }
}
