import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './templates/main/main.component';
import { FooterComponent } from './templates/footer/footer.component';
import { NavigatorComponent } from './templates/navigator/navigator.component';
import { ErrorComponent } from './templates/error/error.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
	AppComponent,
	MainComponent,
	FooterComponent,
	NavigatorComponent,
	ErrorComponent
    ],
    imports: [
	BrowserModule,
	AppRoutingModule,
	HttpClientModule 
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
