import { Injectable } from '@angular/core';

import { Image } from './image';
import { IMAGES } from './mock-images';

import { Observable, of } from 'rxjs';
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

  constructor(private http: HttpClient) { }

  // Постраницная загрузка
  getImagesPerPage(perPage: number, page: number): Observable<Image[]> {
    console.log((perPage-1) * (page - 1));
    let start = (perPage-1) * (page - 1);
    let limit = perPage;

    // Расчет параметров для текущей страницы
    const url = `${this.apiUrl}/?_start=${start}&_limit=${limit}`;
    console.log('url');
    console.log(url);
    return this.http.get<Image[]>(url);
  }

}
