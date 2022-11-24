import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePlanComponent } from './create-plan/create-plan.component';
import { GetPlanComponent } from './get-plan/get-plan.component';
import { UpdatePlanComponent } from './update-plan/update-plan.component';
import { DeletePlanComponent } from './delete-plan/delete-plan.component';

const routes: Routes = [
    { path: 'reservar', component: CreatePlanComponent },
    { path: 'obtener', component: GetPlanComponent },
    { path: 'desechar', component: UpdatePlanComponent },
    { path: 'editar', component: UpdatePlanComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansRoutingModule { }
