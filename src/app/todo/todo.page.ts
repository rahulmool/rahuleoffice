import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  taskList=[];
  taskName: string ="";
  constructor(public alertCtrl: AlertController) { 
    this.taskList.push("write 7th practical");
    this.taskList.push("Install ionic");
    this.taskList.push("buy manual");
    this.taskList.push("write cn tutorial");
    
    
    
  }
  async updateTask() {
    const alert = await this.alertCtrl.create({
      header: 'Update Task?',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
      {
        text: 'Update', handler: () => {
        }
      }
      ]
    });
    await alert.present();
  }
  ngOnInit() {
  }

}
