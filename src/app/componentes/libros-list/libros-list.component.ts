import { Component, OnInit } from '@angular/core';
import{ Libro} from 'src/app/clase/libro';
import { LibrosService} from 'src/app/servicio/libros.service';

@Component({
  selector: 'app-libros-list',
  templateUrl: './libros-list.component.html',
  styleUrls: ['./libros-list.component.css']
})
export class LibrosListComponent implements OnInit {
  libros: Libro[];

  constructor(private librosService: LibrosService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.librosService.getLibro().subscribe(libros => {
      return this.libros = libros;
    });
    }
}
