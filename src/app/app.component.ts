import {Component} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-firebase-app';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;

      console.log(this.isLoggedIn)
    });

    console.log(this.isLoggedIn)
  }


}
