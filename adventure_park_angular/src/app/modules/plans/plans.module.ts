import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { CreatePlanComponent } from './create-plan/create-plan.component';
import { UpdatePlanComponent } from './update-plan/update-plan.component';
import { GetPlanComponent } from './get-plan/get-plan.component';
import { DeletePlanComponent } from './delete-plan/delete-plan.component';


@NgModule({
    declarations: [
	CreatePlanComponent,
	UpdatePlanComponent,
	GetPlanComponent,
	DeletePlanComponent
    ],
    imports: [
	CommonModule,
	PlansRoutingModule
    ]
})
export class PlansModule { }
