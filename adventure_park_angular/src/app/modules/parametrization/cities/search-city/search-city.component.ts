import { Component } from '@angular/core';
import { CityModel } from 'src/app/models/city.model';
import { CityService } from 'src/app/services/city.service';

@Component({
    selector: 'app-search-city',
    templateUrl: './search-city.component.html',
    styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent {
    listC: CityModel[]=[];
    constructor(private cityService: CityService){}
    ngOnInit(){
	this.getListC();
    }
    getListC(){
	return this.cityService.getC().subscribe((data: CityModel[])=>{this.listC=data;});
    }

}
