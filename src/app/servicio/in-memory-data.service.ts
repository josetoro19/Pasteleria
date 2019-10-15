import { Injectable } from '@angular/core';
import{ Libro} from '../clase/libro';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements  InMemoryDbService{

  createDb() {
    const libros = [
      {ISBN: 11, title: 'Analisis de Requerimiento', precioVenta: 'Se requiere ...', popularidad: true},
      {ISBN: 12, title: 'Diseño de la arquitectura', precioVenta: 'Se requiere ...', popularidad: true}
    ];

    return {libros};
  }
  genId(libros: Libro[]): number {
    return libros.length > 0 ? Math.max(...libros.map(libro=> libro.ISBN)) + 1 : 11;
  }
  
}
