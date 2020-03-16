import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  public items=[
    ["2","assets/male.png","Rahul","complete assignement","23/04/2020"],
    ["0","assets/female.png","Hauva","check paper","23/04/2020"],
    ["6","assets/male.png","Saundarya","create ppt for class","03/04/2020"],
    ["2","assets/female.png","Ram","bring bookay","02/03/2020"],
    ["9","assets/male.png","Parth","Sign certificates","13/02/2020"],
    ["4","assets/female.png","Vaishnavi","bring notes for class","25/04/2020"],
    ["0","assets/male.png","Nihar","clean the classroom","12/03/2020"],
    ["0","assets/male.png","Onkar","Create question paper for exam","07/04/2020"],
    ];
    condition=[false,true,true,false,true,true,false,true];
  constructor(public navCtrl:NavController,public alertController: AlertController) { }
  dash(): void {
    this.navCtrl.navigateForward('/dashboard');
 }
  ngOnInit() {
  }
  async info(item ):Promise<void>{
    
    const alert = await this.alertController.create({
      header: item[2]+" sent you a task:",

      message: item[3]+"<br/> Deadline is " +item[4] ,
      buttons: [{ text: 'Cancel', role: 'cancel' },
      {
        text: 'Submit', handler: () => {
          console.log('the submit button is working');
        },
      }
      ]
    });

    await alert.present();
  }

}
