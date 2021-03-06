import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";

import { Observable, of } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { User } from './user.model';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import * as firebase from 'firebase';
import { environment } from '../../environments/environment';
import { LoadingController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor(
      private afAuth: AngularFireAuth,
      private afs: AngularFirestore,
      private router: Router,
      private gplus: GooglePlus,
      private platform: Platform,
      private loadingController: LoadingController
  ) {
      this.user$ = this.afAuth.authState.pipe(
          switchMap (user => {
          if (user) {
              return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
              return of(null);
          }
          })
      )
  }
  
  async googleSigninCordova() {
      const loading = await this.loadingController.create({
       message: 'Please wait...'
      });
      this.presentLoading(loading);
      if (!this.platform.is('cordova')) {
      const provider = new auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      loading.dismiss();
      return this.updateUserData(credential.user)
      } else {
      const user = await this.gplus.login({
          //webClientId: environment.googleWebClientId,
          offline: true,
          scopes: 'profile email'
      });
          const credential = await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(user.idToken));
      loading.dismiss();
      return this.updateUserData(credential.user)
      }
  }
  
  
  
  async signOut() {
      await this.afAuth.auth.signOut();
      return this.router.navigate(['/']);
  }
  
  private updateUserData(user) {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
      }
      return userRef.set(data, { merge: true });
  }
  
  async presentLoading(loading) {
      return await loading.present();
  }
  
  }
 
