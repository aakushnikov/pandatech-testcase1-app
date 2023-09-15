import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsApiSerivce } from 'src/api/animals.api.service';
import { Config } from 'src/config/config';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { AnimalsListModule } from './animals/animals-list/animals-list.module';
import { AnimalEditorModule } from './animals/animal-editor/animal-editor.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		RouterModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,

		LoginModule,
		AnimalsListModule,
		AnimalEditorModule,
	],
	providers: [
		AnimalsApiSerivce,
		Config,
		HttpClientModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
