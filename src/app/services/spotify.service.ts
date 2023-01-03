import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBjNMj_-w60SawdedPfPfy-ZbvnnWQE5RoyK4X05VnNmTYKdS8snZaFeMkZlGRXEpB2F0Xkf1ino2ver6j_7lS0kdU37zz2HS1lDIZvpquWU2FmZUw',
    });

    return this.http.get(url, { headers });
  }

  getNewRealeases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data) => data['albums'].items)
    );
  }

  getResults(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=10`).pipe(
      map((data) => data['artists'].items)
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
    //.pipe(map(data => data['artists'].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data) => data['tracks'])
    );
  }
}
