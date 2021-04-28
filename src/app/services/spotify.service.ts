import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    
  }
  getNewRealeases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAKjakKwSVeJR9Zf3-0tFJ7CziLg0i3f0BReLy7-GQExN7MlVSGfc0awGiM47A0bcTDx4Yq9lYyPukUuqU'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
    
  }
}
