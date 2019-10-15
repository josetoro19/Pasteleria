import { Injectable } from '@angular/core';
import { Libro} from '../clase/libro';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private libroUrl = 'api/libros';  // URL to web api
  constructor( private http: HttpClient ) { }

  addLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.libroUrl, libro,  this.httpOptions).pipe(
      tap((newLibro: Libro) => this.log(`Se registro la informacion con el ISBN=${newLibro.ISBN}`)),
      catchError(this.handleError<Libro>('addLibro'))
      );
  }
/* GET heroes whose name contains search term */
searchLibro(ISBN: number): Observable<Libro> {
  if (!ISBN) {
    // if not search term, return empty hero array.
    return of();
  }
  return this.http.get<Libro>(`${this.libroUrl}/${ISBN}`).pipe(
    tap(_ => this.log(`Se encontro la tarea ${ISBN}`)),
    catchError(this.handleError<Libro>(`searchLibro ISBN=${ISBN}`))
  );
}
getLibro(): Observable<Libro[]> {
  return this.http.get<Libro[]>(this.libroUrl).pipe(
    tap(libros => {
      return this.log('Consulta de Tareas');
    }),
    catchError(this.handleError<Libro[]>('getLibro', [])));
}
/** DELETE: delete the Task from the server */
deleteLibro(libro: Libro | number): Observable<Libro> {
  const ISBN = typeof libro === 'number' ? libro : libro.ISBN;
  const url = `${this.libroUrl}/${ISBN}`;

  return this.http.delete<Libro>(url, this.httpOptions).pipe(
    tap(_ => this.log(`Se eliminó la tarea con ISBN=${ISBN}`)),
    catchError(this.handleError<Libro>('deleteLibro'))
  );
}
/** PUT: update the hero on the server */
updateLibro(libro: Libro): Observable<any> {
  return this.http.put(this.libroUrl, libro, this.httpOptions).pipe(
    tap(_ => this.log(`Se actualizo la tarea con ISBN=${libro.ISBN}`)),
    catchError(this.handleError<any>('updateLibro'))
  );
}
private log(message: string) {
  // this.messageService.add(`taskService: ${message}`);
  alert(`libroService: ${message}`);
 }


 private handleError<T>(operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {
       // TODO: send the error to remote logging infrastructure
     console.error(error); // log to console instead
       // TODO: better job of transforming error for user consumption
     this.log(`${operation} Fallo: ${error.message}`);
       // Let the app keep running by returning an empty result.
     return of(result as T);
   };
 }
}
