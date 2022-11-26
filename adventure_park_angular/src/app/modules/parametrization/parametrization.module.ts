import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ParametrizationRoutingModule } from './parametrization-routing.module';
import { CreateDepartmentComponent } from './departments/create-department/create-department.component';
import { CreateZoneComponent } from './zones/create-zone/create-zone.component';
import { UpdateZoneComponent } from './zones/update-zone/update-zone.component';
import { DeleteZoneComponent } from './zones/delete-zone/delete-zone.component';
import { SearchZoneComponent } from './zones/search-zone/search-zone.component';
import { CreateParkComponent } from './parks/create-park/create-park.component';
import { UpdateParkComponent } from './parks/update-park/update-park.component';
import { DeleteParkComponent } from './parks/delete-park/delete-park.component';
import { SearchParkComponent } from './parks/search-park/search-park.component';
import { SearchDepartmentComponent } from './departments/search-department/search-department.component';
import { UpdateDepartmentComponent } from './departments/update-department/update-department.component';
import { CreateCityComponent } from './cities/create-city/create-city.component';
import { SearchCityComponent } from './cities/search-city/search-city.component';
import { UpdateCityComponent } from './cities/update-city/update-city.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    CreateZoneComponent,
    UpdateZoneComponent,
    DeleteZoneComponent,
    SearchZoneComponent,

    CreateParkComponent,
    UpdateParkComponent,
    DeleteParkComponent,
    SearchParkComponent,

    CreateDepartmentComponent,
    SearchDepartmentComponent,
    UpdateDepartmentComponent,

    CreateCityComponent,
    SearchCityComponent,
    UpdateCityComponent,

    MainComponent,
  ],
  imports: [
    CommonModule,
    ParametrizationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParametrizationModule { }
