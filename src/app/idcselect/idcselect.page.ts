import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-idcselect',
  templateUrl: './idcselect.page.html',
  styleUrls: ['./idcselect.page.scss'],
})
export class IdcselectPage implements OnInit {

  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }
  openIdcserv(){
    this.navCtrl.navigateForward(['/idcserv']);
  }
}
