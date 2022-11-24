import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-identification',
    templateUrl: './identification.component.html',
    styleUrls: ['./identification.component.css']
})
export class IdentificationComponent {
    fgValidator: FormGroup=this.fb.group({
	'user': ['', [Validators.required, Validators.email]],
	'password': ['', [Validators.required]]
    });
    constructor(private fb: FormBuilder){}
}
