import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-work',
  templateUrl: './work.page.html',
  styleUrls: ['./work.page.scss'],
})
export class WorkPage implements OnInit {
  public items=[
  ["danger","assets/male.png","Rahul","do Assignement","23/04/2020"],
  ["success","assets/female.png","Hauva","check papers","23/04/2020"],
  ["success","assets/female.png","Saundarya","create ppt for class","03/04/2020"],
  ["danger","assets/male.png","Ram","Bring bookay","02/03/2020"],
  ["success","assets/male.png","Parth","Sign certificates","13/02/2020"],
  ["success","assets/female.png","Vaishnavi","bring notes for class","25/04/2020"],
  ["danger","assets/male.png","Nihar","clan the classroom","12/03/2020"],
  ["success","assets/male.png","Onkar","Create question paper for exam","07/04/2020"],
  ];
  condition=[false,true,true,false,true,true,false,true];
  
  constructor(public toastController: ToastController,public navCtrl:NavController,public alertController: AlertController) {}

  editProfile(i):boolean{
    
      if (i) {
        return true
       }
    
    return false
  }
  async presentToast() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Do You want to send <strong>Reminder</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Send',
          handler: async () => {
            const toast = await this.toastController.create({
              message: 'Reminder Send',
              duration: 2000
            });
            toast.present();
          }
        }
      ]
    });

    await alert.present();
 
  }
  peoplepage(): void {
    this.navCtrl.navigateForward('/people');
  }
  async info(item ):Promise<void>{
    
    const alert = await this.alertController.create({
      header: item[2],

      message: item[3]+"<br/> Deadline is " +item[4] ,
      buttons: [
        
      {
        text: 'Remove Task', handler: async() => {
          const toast = await this.toastController.create({
            message: 'Task Removed',
            duration: 2000
          });
          toast.present();
        }
      },
      {
        text: 'Send Reminder', handler: async() => {
          const toast = await this.toastController.create({
            message: 'Reminder Send',
            duration: 2000
          });
          toast.present();
        }
      },
      { text: 'Cancel', role: 'cancel' },
      ]
    });

    await alert.present();
  }
  ngOnInit() {
  }
}
