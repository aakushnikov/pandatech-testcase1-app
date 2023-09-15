import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AnimalsListComponent } from './animals/animals-list/animals-list.component';
import { AnimalEditorComponent } from './animals/animal-editor/animal-editor.component';

const routes: Routes = [
	{ path: 'login',						component: LoginComponent			},
	{ path: 'animals',						component: AnimalsListComponent		},
	{ path: 'animals/:page/:limit',			component: AnimalsListComponent		},
	{ path: 'animal/new',					component: AnimalEditorComponent	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
