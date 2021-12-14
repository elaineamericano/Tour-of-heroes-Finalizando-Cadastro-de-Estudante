import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Estudante } from './estudante';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class EstudanteService {

  private heroesUrl = 'api/Estudantes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getEstudantes(): Observable<Estudante[]> {
    return this.http.get<Estudante[]>(this.estudantesUrl)
      .pipe(
        tap(_ => this.log('fetched estudantes')),
        catchError(this.handleError<Estudante[]>('getEstudantes', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getEstudanteNo404<Data>(id: number): Observable<Estudante> {
    const url = `${this.estudantesUrl}/?id=${id}`;
    return this.http.get<Estudante[]>(url)
      .pipe(
        map(estudantes => estudantes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} estudante id=${id}`);
        }),
        catchError(this.handleError<Estudante>(`getEstudante id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getEstudante(id: number): Observable<Estudante> {
    const url = `${this.EstudantesUrl}/${id}`;
    return this.http.get<Estudante>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getEstudante id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchEstudantes(term: string): Observable<Estudante[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Estudante[]>(`${this.estudantesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found estudantes matching "${term}"`) :
         this.log(`no estudantes matching "${term}"`)),
      catchError(this.handleError<Estudante[]>('searchEstudantes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addEstudante(estudante: Estudante): Observable<Estudante> {
    return this.http.post<Estudante>(this.heroesUrl, estudante, this.httpOptions).pipe(
      tap((newEstudante: Estudante) => this.log(`added estudante w/ id=${newEstudante.id}`)),
      catchError(this.handleError<Estudante>('addEstudante'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteEstudante(id: number): Observable<Estudante> {
    const url = `${this.estudantesUrl}/${id}`;

    return this.http.delete<Estudante>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted estudante id=${id}`)),
      catchError(this.handleError<Estudante>('deleteEstudante'))
    );
  }

  /** PUT: update the hero on the server */
  updateEstudante(estudante: Estudante): Observable<any> {
    return this.http.put(this.estudantesUrl, estudante, this.httpOptions).pipe(
      tap(_ => this.log(`updated estudante id=${hestudante.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`EstudanteService: ${message}`);
  }
}
