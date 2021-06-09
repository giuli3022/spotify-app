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
      'Authorization': 'Bearer BQDmAswxqsRLpTt-h--FrxOhGr7qbgWnp00pV-aePE8yB3nkcvxnrrFMlMFmSli1SS43S8qvRvDX9RjtDZE'
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

  getArtist(id: string) {

    return this.getQuery(`artists/${ id }`);
    //.pipe(map(data => data['artists'].items));
  }

}
