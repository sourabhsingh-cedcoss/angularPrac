import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'firebase-angular-auth';
  isSignedIn = false;
  constructor(public firebaseService: FirebaseService) {}
  ngOnInit() {
    this.firebaseService.signup('sourabhh@mail.com', '12345');
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }

  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password);

    this.firebaseService.isLoggedIn === true && (this.isSignedIn = true);
  }
  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password);

    this.firebaseService.isLoggedIn === true && (this.isSignedIn = true);
  }

  handleLogout() {
    this.isSignedIn = false;
  }
}
