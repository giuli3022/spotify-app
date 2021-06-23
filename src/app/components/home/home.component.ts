import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  newRealeases: any[] = [];
  loading: boolean;
  error: boolean = false;
  errorMessage: string;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewRealeases()
      .subscribe((data : any) => {
        console.log(data);
        this.newRealeases = data;
        this.loading = false;
      }, (errorService) => {
        this.loading = false;
        this.error = true;
        console.log(errorService);
        this.errorMessage = errorService.error.error.message;
      });
  }

}

