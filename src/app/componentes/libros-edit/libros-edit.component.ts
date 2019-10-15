import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from 'src/app/servicio/libros.service';
import { Libro } from 'src/app//clase/libro';

@Component({
  selector: 'app-libros-edit',
  templateUrl: './libros-edit.component.html',
  styleUrls: ['./libros-edit.component.css']
})
export class LibrosEditComponent implements OnInit {
  libro: Libro;

  constructor(
    private route: ActivatedRoute,
    private librosService: LibrosService ,
    private location: Location
  ) { this.libro = new Libro(); }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.librosService.searchLibro(id)
      .subscribe( t => this.libro = t);
  }

  update(): void {
    this.librosService.updateLibro(this.libro)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.librosService.deleteLibro(this.libro)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  

}
