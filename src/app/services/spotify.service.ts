import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBqVBsJQF1H7Eqo5lNfEtiQT3vZ2P9a6eTq3VAp_j5vIvg-64IqoRU9eAVBdExmIe8fT8rHLgnIY6CeiXY'
    });

    return this.http.get(url, { headers })
  }

  getNewRealeases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => data['albums'].items));
  }

  getResults(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=10`)
    .pipe(map(data => data['artists'].items));
  }
}
