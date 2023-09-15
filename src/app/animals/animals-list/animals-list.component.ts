import { DecimalPipe } from '@angular/common';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalsApiSerivce } from 'src/api/animals.api.service';
import { IAnimal } from 'src/model/animal.interface';
import { IAnimalsOut } from 'src/model/animals-out.interface';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {
	private _page: number = 1;
	private _limit: number = 10;
	protected pages: number = 1;
	protected data : IAnimalsOut | undefined;

	constructor(
		protected animalsService: AnimalsApiSerivce,
		protected router: Router,
		private _activatedRoute: ActivatedRoute
		) {
	}

	ngOnInit(): void {
		this._activatedRoute.paramMap.subscribe((params) => {
			this._page = (params.get('page') ?? 1) as number;
			this._limit = (params.get('limit') ?? 10) as number;

			this.animalsService.subscribe(
				this.animalsService.getAll(this._page, this._limit),
				response => {
					this.data = response as IAnimalsOut;
					this.pages = this.data.total / this.data.limit;
					this.pages = this.pages - this.pages % 1 + 1;

					if (this._page > this.pages)
						this.router.navigateByUrl('/animals/' + this.pages + '/' + this._limit);
				},
				err => {
					console.error(err);
				},
			);
		});
	}

	removeAnimal(animal: IAnimal)
	{
		this.animalsService.subscribe(
			this.animalsService.removeAnimal(animal.name),
			_ => {
				var index = this.data!.animals.indexOf(animal);
				this.data!.animals.splice(index, 1);
			},
			err => {
				var httpResponse = err as HttpResponse<any>;
				if (httpResponse.status == 404) {
					var index = this.data!.animals.indexOf(animal);
					this.data!.animals.splice(index, 1);
				}
				else
					console.error(err);
			},
		);
	}
}
