import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  newRealeases: any[] = [];

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewRealeases()
      .subscribe((data : any) => {
        console.log(data.albums.items);
        this.newRealeases = data.albums.items;
      });
  }

}

