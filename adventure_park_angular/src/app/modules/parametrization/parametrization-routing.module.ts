import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
    {path: 'main', component: MainComponent},
    {path: 'add-department', component: CreateDepartmentComponent},
    {path: 'search-department', component: SearchDepartmentComponent},
    {path: 'update-department/:id', component: UpdateDepartmentComponent},

    {path: 'add-city', component: CreateCityComponent},
    {path: 'search-city', component: SearchCityComponent},
    {path: 'update-city', component: UpdateCityComponent},

    {path: 'add-park', component: CreateParkComponent},
    {path: 'search-park', component: SearchParkComponent},
    {path: 'update-park', component: UpdateParkComponent},
    {path: 'delete-park', component: DeleteParkComponent},

    {path: 'add-zone', component: CreateZoneComponent},
    {path: 'search-zone', component: SearchZoneComponent},
    {path: 'update-zone', component: UpdateZoneComponent},
    {path: 'delete-zone', component: DeleteZoneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrizationRoutingModule { }
