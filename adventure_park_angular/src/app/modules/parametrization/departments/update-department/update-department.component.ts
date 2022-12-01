import { Component } from '@angular/core';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-update-department',
    templateUrl: './update-department.component.html',
    styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent {
    id: string='';
    fgValidator: FormGroup=this.fb.group({
	'id': ['', [Validators.required]],
	'name': ['', [Validators.required]] 
    });
    constructor(
	private depService: DepartmentService,
	private fb: FormBuilder,
	private router: Router,
	private route: ActivatedRoute
    ){}
    ngOnInit(){
	this.id=this.route.snapshot.params['id'];
	this.getDepartment();
    }
    getDepartment(){
	this.depService.getDById(this.id).subscribe(
	    (data: DepartmentModel)=>{
		this.fgValidator.controls['id'].setValue(this.id);
		this.fgValidator.controls['name'].setValue(data.name);
	    },
	);
    }
    editDepartment(){
	let d=new DepartmentModel()
	d.name=this.fgValidator.controls['name'].value;
	d.id=this.fgValidator.controls['id'].value;
	this.depService.updateD(d).subscribe(
	    (data: DepartmentModel)=>{
		this.router.navigate(['/normal/main'])
	    },
	    (error: any)=>{ alert('Fallo al editar') }
	);
    }
}
