import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { CreatePersonComponent } from './people/create-person/create-person.component';
import { UpdatePersonComponent } from './people/update-person/update-person.component';
import { SearchPersonComponent } from './people/search-person/search-person.component';
import { DeletePersonComponent } from './people/delete-person/delete-person.component';
import { CreateFairgroundComponent } from './fairgrounds/create-fairground/create-fairground.component';
import { UpdateFairgroundComponent } from './fairgrounds/update-fairground/update-fairground.component';
import { SearchFairgroundComponent } from './fairgrounds/search-fairground/search-fairground.component';
import { DeleteFairgroundComponent } from './fairgrounds/delete-fairground/delete-fairground.component';
import { TechnicalHandbookComponent } from './handbooks/technical-handbook/technical-handbook.component';
import { UserHandbookComponent } from './handbooks/user-handbook/user-handbook.component';


@NgModule({
  declarations: [
    CreatePersonComponent,
    UpdatePersonComponent,
    SearchPersonComponent,
    DeletePersonComponent,
    CreateFairgroundComponent,
    UpdateFairgroundComponent,
    SearchFairgroundComponent,
    DeleteFairgroundComponent,
    TechnicalHandbookComponent,
    UserHandbookComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
