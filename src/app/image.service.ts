import { Injectable } from '@angular/core';

import { Image } from './image';
import { IMAGES } from './mock-images';
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

// Параметры http запроса
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root' // Уровень видимости
})
export class ImageService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';  // Источник данных

  constructor(
              private http: HttpClient,
              private messageService: MessageService
            ) { }

  // Постраницная загрузка
  getImagesPerPage(perPage: number, page: number): Observable<Image[]> {
    console.log((perPage-1) * (page - 1));
    let start = (perPage-1) * (page - 1);
    let limit = perPage;

    // Расчет параметров для текущей страницы
    const url = `${this.apiUrl}/?_start=${start}&_limit=${limit}`;
    console.log('url');
    console.log(url);
    return this.http.get<Image[]>(url)
                    .pipe(
                        tap(images => this.log(`Ошибка загрузки изображений.`)),
                        catchError(this.handleError('getImagesPerPage', []))
                    );
  }

  private log(message: string) {
    this.messageService.add('Сервис загрузки изображений: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} ошибка: ${error.message}`);
      return of(result as T);
    };
  }

}
