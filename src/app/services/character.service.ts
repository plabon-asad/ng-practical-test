import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CharacterResponse} from '../model/icharacter';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private http = inject(HttpClient);
  private readonly BASE_URL = 'https://rickandmortyapi.com/api/character';

  fetchCharacters(page: number, name?: string): Observable<CharacterResponse> {
    let params = new HttpParams().set('page', page.toString());
    if (name) params = params.set('name', name);
    return this.http.get<CharacterResponse>(this.BASE_URL, { params });
  }

}
