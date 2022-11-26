import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {path: 'traditional', component: UserComponent},
    {path: 'technical', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
