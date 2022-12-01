import { Component } from '@angular/core';
import { CityModel } from 'src/app/models/city.model';
import { CityService } from 'src/app/services/city.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-city',
    templateUrl: './create-city.component.html',
    styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent {
    fgValidator: FormGroup=this.fb.group({
	'name': ['', [Validators.required]],
	'departmentName': ['', [Validators.required]] 
    });
    constructor(
	private depService: CityService,
	private fb: FormBuilder,
	private router: Router
    ){}
    saveCity(){
	let c=new CityModel()
	c.name=this.fgValidator.controls['name'].value;
	c.departmentId=this.fgValidator.controls['departmentName'].value;
	this.depService.createC(c).subscribe(
	    (data: CityModel)=>{
		this.router.navigate(['/admin/main'])
	    },
	    (error: any)=>{ alert('Error al insertar la ciudad') }
	);
    }
}
