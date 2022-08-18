import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyB-tq_dMJNIhHHR6u4FsnQjc2bz3MH93mg',
      authDomain: 'test-4f90f.firebaseapp.com',
      projectId: 'test-4f90f',
      storageBucket: 'test-4f90f.appspot.com',
      messagingSenderId: '57524428694',
      appId: '1:57524428694:web:1b930c37389be74a2c87b7',
    }),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
