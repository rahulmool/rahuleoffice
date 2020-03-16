import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseuiAngularLibraryService } from 'firebaseui-angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

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
    this.navCtrl.navigateForward('');
 }
  ngOnInit() {
  }

}
