import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/servicio/libros.service';
import { Libro } from 'src/app//clase/libro';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-libros-add',
  templateUrl: './libros-add.component.html',
  styleUrls: ['./libros-add.component.css']
})
export class LibrosAddComponent implements OnInit {

  libro: Libro;
  libros:Libro[]; 

  constructor(private librosService: LibrosService) { }
  ngOnInit() {
    this.libro = new Libro();
  }

  add(): void {
    if (!this.libro) { return; }
    this.librosService.addLibro(this.libro)
      .subscribe( libro  => {
          alert('Se agrego una nueva tarea =>'+libro.ISBN);
             });
  }

/*   delete(libro: Libro): void {
    this.libros = this.libros.filter(h => h !== libro);
    this.libroDService.deleteLibro(libro).subscribe();
  }*/

}
