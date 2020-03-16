import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseuiAngularLibraryService } from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(public navCtrl: NavController,public afAuth:AngularFireAuth,private firebaseuiAngularLibraryService: FirebaseuiAngularLibraryService) {
    firebaseuiAngularLibraryService.firebaseUiInstance.disableAutoSignIn();
  }
  signOut(){
    this.afAuth.auth.signOut().then(()=>{
      location.reload();
      this.afAuth.auth.signOut();
    });
  }
  nextpage(): void {
    this.navCtrl.navigateForward('/tasks');
 }
  ngOnInit() {
  }

}
