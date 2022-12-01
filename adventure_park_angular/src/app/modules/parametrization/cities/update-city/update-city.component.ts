import { Component } from '@angular/core';
import { CityModel } from 'src/app/models/city.model';
import { CityService } from 'src/app/services/city.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-update-city',
    templateUrl: './update-city.component.html',
    styleUrls: ['./update-city.component.css']
})
export class UpdateCityComponent {
    id: string='';
    fgValidator: FormGroup=this.fb.group({
	'departmentName': ['', [Validators.required]],
	'id': ['', [Validators.required]],
	'name': ['', [Validators.required]] 
    });
    constructor(
	private cityService: CityService,
	private fb: FormBuilder,
	private router: Router,
	private route: ActivatedRoute
    ){}
    ngOnInit(){
	this.id=this.route.snapshot.params['id'];
	this.getCity();
    }
    getCity(){
	this.cityService.getCById(this.id).subscribe(
	    (data: CityModel)=>{
		this.fgValidator.controls['id'].setValue(this.id);
		this.fgValidator.controls['name'].setValue(data.name);
		this.fgValidator.controls['departmentName'].setValue(data.departmentId);
	    },
	);
    }
    editCity(){
	let c=new CityModel()
	c.name=this.fgValidator.controls['name'].value;
	c.id=this.fgValidator.controls['id'].value;
	c.departmentId=this.fgValidator.controls['departmentName'].value;
	this.cityService.updateC(c).subscribe(
	    (data: CityModel)=>{
		this.router.navigate(['/admin/main'])
	    },
	    (error: any)=>{ alert('Fallo al editar') }
	);
    }
}
