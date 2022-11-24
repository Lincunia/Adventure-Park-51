import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SecurityRoutingModule } from './security-routing.module';
import { IdentificationComponent } from './identification/identification.component';
import { KeyChangeComponent } from './key-change/key-change.component';
import { KeyRecoveryComponent } from './key-recovery/key-recovery.component';


@NgModule({
    declarations: [
	IdentificationComponent,
	KeyChangeComponent,
	KeyRecoveryComponent
    ],
    imports: [
	CommonModule,
	SecurityRoutingModule,
	FormsModule,
	ReactiveFormsModule
    ]
})
export class SecurityModule { }
