import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { SecurityService } from '../../../services/security.service';
import { UserModel } from '../../../models/user.model';
import { Router } from '@angular/router';
const cryptor=require('crypto-js');

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    fgValidator: FormGroup=this.fb.group({
	'email': ['', [Validators.required, Validators.email]],
	'names': ['', [Validators.required]],
	'surnames': ['', [Validators.required]],
	'phone': ['', [Validators.required]],
	'charge': ['', [Validators.required]]
    });
    constructor(
	private uService: UserService,
	private fb: FormBuilder,
	private secService: SecurityService,
	private router: Router
    ){ }

    createUser(){
	let u=new UserModel()
	u.names=this.fgValidator.controls['names'].value;
	u.surnames=this.fgValidator.controls['surnames'].value;
	let password='my_aamount';
	let cipheredKey=cryptor.SHA256(password).toString();
	u.key=cipheredKey;
	u.email=this.fgValidator.controls['email'].value;
	u.phone=this.fgValidator.controls['phone'].value;
	u.charge=this.fgValidator.controls['charge'].value;
	this.uService.createU(u).subscribe(
	    (data: UserModel)=>{
		this.router.navigate(['/inicio'])
	    },
	    (error: any)=>{ alert('Inserción de datos fallida') }
	);
	/*
	   this.secService.identifySomeone(user, cipheredKey).subscribe(
	   (data: any)=>{
	   this.secService.saveSession(data);
	   this.router.navigate(['/normal/main'])
	   }, (error: any)=>{alert('Datos inválidos')});

*/
    }
}
