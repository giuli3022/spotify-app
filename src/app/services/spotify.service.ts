import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('hola');
  }
  getNewRealeases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCZ_vpPbGVH8j5hpBvp6DlgZFBRQtecuXfRMO7fBbobnrSI3L5oVMGzdKJneXXaTkjW9HnLmGhUN20UPBc'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe(data => {
        console.log(data)
      });
  }
}
