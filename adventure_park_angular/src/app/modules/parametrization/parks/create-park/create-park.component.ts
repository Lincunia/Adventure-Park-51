import { Component } from '@angular/core';
import { ParkModel } from 'src/app/models/park.model';
import { ParkService } from 'src/app/services/park.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-park',
    templateUrl: './create-park.component.html',
    styleUrls: ['./create-park.component.css']
})
export class CreateParkComponent {
    fgValidator: FormGroup=this.fb.group({
	'name': ['', [Validators.required]],
	'dir': ['', [Validators.required]],
	'email': ['', [Validators.required, Validators.email]],
	/*
	'aGuests': ['', [Validators.required]],
	'imgLogo': ['', [Validators.required]],
	'imgMap': ['', [Validators.required]],
	'motto': ['', [Validators.required]],
	'description': ['', [Validators.required]],
	'cityName': ['', [Validators.required]]
	*/
    });
    constructor(
	private parService: ParkService,
	private fb: FormBuilder,
	private router: Router
    ){}
    savePark(){
	let p=new ParkModel()
	p.name=this.fgValidator.controls['name'].value;
	p.direction=this.fgValidator.controls['dir'].value;
	p.email=this.fgValidator.controls['email'].value;
	//p.amount_of_guests=this.fgValidator.controls['aGuests'].value;
	/*
	p.img_logo=this.fgValidator.controls['imgLogo'].value;
	p.img_map=this.fgValidator.controls['imgMap'].value;
	p.motto=this.fgValidator.controls['motto'].value;
	p.description=this.fgValidator.controls['description'].value;
	*/
	//p.cityId=this.fgValidator.controls['cityName'].value;

	this.parService.createP(p).subscribe(
	    (data: ParkModel)=>{
		this.router.navigate(['/admin/main'])
	    },
	    (error: any)=>{ alert('Error al insertar el parque') }
	);
    }
}
