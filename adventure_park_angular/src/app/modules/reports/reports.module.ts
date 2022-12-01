import { NgModule } from '@angular/core';

import { ReportsRoutingModule } from './reports-routing.module';
import { FairgroundsComponent } from './fairgrounds/fairgrounds.component';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
    declarations: [
	FairgroundsComponent
    ],
    imports: [
	ReportsRoutingModule,
	NgxEchartsModule.forRoot({
	    echarts: () => import('echarts')
	})
    ],
    providers: [],
    bootstrap: [FairgroundsComponent]
})
export class ReportsModule { }
