import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalsApiSerivce } from 'src/api/animals.api.service';

@Component({
  selector: 'app-animal-editor',
  templateUrl: './animal-editor.component.html',
  styleUrls: ['./animal-editor.component.css']
})
export class AnimalEditorComponent {
	constructor(protected router: Router, protected animalsService : AnimalsApiSerivce) {
	}

	addAnimal(name: string) {
		if (name == '' || name == undefined)
			return;

		this.animalsService.subscribe(
			this.animalsService.addAnimal(name),
			_ => {
				console.log('ok')
				this.router.navigateByUrl('/animals');
			},
			err => {
				console.error(err);
			},
		);
	}
}
