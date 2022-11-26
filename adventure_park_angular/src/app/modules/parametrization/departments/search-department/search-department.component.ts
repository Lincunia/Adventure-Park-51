import { Component } from '@angular/core';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
    selector: 'app-search-department',
    templateUrl: './search-department.component.html',
    styleUrls: ['./search-department.component.css']
})
export class SearchDepartmentComponent {
    listD: DepartmentModel[]=[];
    constructor(private depService: DepartmentService){}
    ngOnInit(){
	this.getListD();
    }
    getListD(){
	return this.depService.getD().subscribe((data: DepartmentModel[])=>{this.listD=data;});
    }
}
