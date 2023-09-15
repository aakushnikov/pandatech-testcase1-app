import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnimalsApiSerivce } from 'src/api/animals.api.service';
import { IAnimal } from 'src/model/animal.interface';
import { IAnimalsOut } from 'src/model/animals-out.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'pandatech-testcase1-app';

	constructor(protected animalsService: AnimalsApiSerivce)
	{
	}

	ngOnInit(): void {

		
	}
}
