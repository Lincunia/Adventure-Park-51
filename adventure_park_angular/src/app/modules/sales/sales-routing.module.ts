import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPlanComponent } from './plans/main-plan/main-plan.component';
import { CreatePlanComponent } from './plans/create-plan/create-plan.component';
import { SearchPlanComponent } from './plans/search-plan/search-plan.component';
import { UpdatePlanComponent } from './plans/update-plan/update-plan.component';
import { DeletePlanComponent } from './plans/delete-plan/delete-plan.component';

const routes: Routes = [
    {path: 'main', component: MainPlanComponent},
    {path: 'add-plan', component: CreatePlanComponent},
    {path: 'search-plan', component: SearchPlanComponent},
    {path: 'update-plan/:id', component: UpdatePlanComponent},
    {path: 'update-plan/:id', component: UpdatePlanComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
