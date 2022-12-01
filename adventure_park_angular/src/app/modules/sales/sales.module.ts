import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { CreatePlanComponent } from './plans/create-plan/create-plan.component';
import { SearchPlanComponent } from './plans/search-plan/search-plan.component';
import { UpdatePlanComponent } from './plans/update-plan/update-plan.component';
import { DeletePlanComponent } from './plans/delete-plan/delete-plan.component';
import { MainPlanComponent } from './plans/main-plan/main-plan.component';


@NgModule({
    declarations: [
	CreatePlanComponent,
	SearchPlanComponent,
	UpdatePlanComponent,
	DeletePlanComponent,
	MainPlanComponent
    ],
    imports: [
	CommonModule,
	SalesRoutingModule
    ]
})
export class SalesModule { }
