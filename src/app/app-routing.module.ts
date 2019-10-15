import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LibrosAddComponent}from './componentes/libros-add/libros-add.component';
import{LibrosListComponent}from './componentes/libros-list/libros-list.component';
import{LibrosEditComponent}from './componentes/libros-edit/libros-edit.component';


const routes: Routes = [ 
{path:'librosAdd', component :LibrosAddComponent,},
{path:'LibrosList', component :LibrosListComponent,},
{path:'librosEdit/:id', component :LibrosEditComponent,}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
