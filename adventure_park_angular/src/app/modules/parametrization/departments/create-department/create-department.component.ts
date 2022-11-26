import { Component } from '@angular/core';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-department',
    templateUrl: './create-department.component.html',
    styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent {
    fgValidator: FormGroup=this.fb.group({
	'name': ['', [Validators.required]] 
    });
    constructor(
	private depService: DepartmentService,
	private fb: FormBuilder,
	private router: Router
    ){}
    saveDepartment(){
	let d=new DepartmentModel()
	d.name=this.fgValidator.controls['name'].value;
	this.depService.createD(d).subscribe(
	    (data: DepartmentModel)=>{
		this.router.navigate(['/normal/main'])
	    },
	    (error: any)=>{ alert('Was macht das schon') }
	);
    }
}
