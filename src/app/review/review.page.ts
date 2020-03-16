import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  public items=[
    ["warning","assets/male.png","Rahul","do Assignement","23/04/2020"],
    ["warning","assets/female.png","Hauva","check papers","23/04/2020"],
    ["warning","assets/female.png","Saundarya","create ppt for class","03/04/2020"],
    ["warning","assets/male.png","Ram","Bring bookay","02/03/2020"],
    ["warning","assets/male.png","Parth","Sign certificates","13/02/2020"],
    ["warning","assets/female.png","Vaishnavi","bring notes for class","25/04/2020"],
    ["warning","assets/male.png","Nihar","clan the classroom","12/03/2020"],
    ["warning","assets/male.png","Onkar","Create question paper for exam","07/04/2020"],
    ];
    condition=[false,true,true,false,true,true,false,true];
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  info(item){
    if(item[0]=="danger"){
      this.infodanger(item);
    }else if(item[0]=="warning"){
      this.infowarning(item);
    }else{
      this.infosuccess(item);
    }
  }
  async infosuccess(item ):Promise<void>{
    
    const alert = await this.alertController.create({
      header: item[2]+" has completed the task",

      message: item[3]+"<br/> Deadline was " +item[4] ,
      buttons: [
        {
          text: 'ok',
        }
      ]
    });

    await alert.present();
  }
  async infowarning(item ):Promise<void>{
    
    const alert = await this.alertController.create({
      header: item[2],

      message: item[3]+"<br/> Deadline is " +item[4] ,
      buttons: [
      {
        text: 'Approve', handler: () => {
        }
      },
      {
        text: 'Reassign Task', handler: () => {
        }
      },
      { text: 'Cancel', role: 'cancel' },
      ]
    });

    await alert.present();
  }
  async infodanger(item ):Promise<void>{
    
    const alert = await this.alertController.create({
      header: item[2]+" sent you a task:",

      message: item[3]+"<br/> Deadline is " +item[4] ,
      buttons: [
        {
          text: 'ok',
        }
      ]
    });

    await alert.present();
  }

}
