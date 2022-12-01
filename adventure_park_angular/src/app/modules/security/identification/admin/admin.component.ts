import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
const cryptor=require('crypto-js');

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent {
    fgValidator: FormGroup=this.fb.group({
	'user': ['', [Validators.required, Validators.email]],
	'password': ['', [Validators.required]],
	'charge': ['', [Validators.required]],
	'phone': ['', [Validators.required]]
    });
    constructor( private fb: FormBuilder, private secService: SecurityService, private router: Router) { }
    ngOnInit(){
	this.fgValidator.controls['user'].setValue('medinagofe@gmail.com');
	this.fgValidator.controls['password'].setValue('amAx54E4');
	this.fgValidator.controls['charge'].setValue('Mantenimiento');
	this.fgValidator.controls['phone'].setValue(3103101376);
    }
    identifyAdmin(){
	let user=this.fgValidator.controls['user'].value,
	    password=this.fgValidator.controls['password'].value,
	    charge=this.fgValidator.controls['charge'].value,
	    phone=this.fgValidator.controls['phone'].value;

	let cipheredKey=cryptor.SHA256(password).toString();

	this.secService.identifyAdmin(user, cipheredKey, charge, phone).subscribe(
	    (data: any)=>{
		this.secService.saveSessionA(data);
		this.router.navigate(['/admin/main'])
	    }, (error: any)=>{alert('Datos inválidos')});
    }
}
