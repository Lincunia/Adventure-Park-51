import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './people/create-person/create-person.component';
import { SearchPersonComponent } from './people/search-person/search-person.component';
import { UpdatePersonComponent } from './people/update-person/update-person.component';
import { TechnicalHandbookComponent } from './handbooks/technical-handbook/technical-handbook.component';
import { UserHandbookComponent } from './handbooks/user-handbook/user-handbook.component';

const routes: Routes = [
    { path: 'create-person', component: CreatePersonComponent },
    {
	path: 'edit-person',
	component: UpdatePersonComponent,
    },
    { path: 'search-person', component: SearchPersonComponent},
    { path: 'technical-handbook', component: TechnicalHandbookComponent},
    { path: 'user-handbook', component: UserHandbookComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrationRoutingModule { }
