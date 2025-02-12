import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Character {
  _id: number;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  sourceUrl: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  __v: number;
}

@Injectable({
  providedIn: 'root'
})
export class ServicoCharacterService {
  private apiUrl = 'https://api.disneyapi.dev/character';

  constructor(private http: HttpClient) {}

  getDados(page: number = 1, pageSize: number = 50): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      tap(res => {
        console.log('Resposta da API:', res); // Verifique os dados recebidos
      })
    );
  }
}
