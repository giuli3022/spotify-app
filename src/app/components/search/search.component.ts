import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  search(termino:string) {
    console.log(termino)
    this.spotify.getResults( termino )
    .subscribe((data : any) => {
      console.log(data);
      this.artistas = data;
      //this.loading = false;
    });
  }

}
