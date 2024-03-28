import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-elect-select',
  templateUrl: './elect-select.page.html',
  styleUrls: ['./elect-select.page.scss'],
})
export class ElectSelectPage implements OnInit {

  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }
  openElect(){
    this.navCtrl.navigateForward(['/elect']);
  }
  openDgknl(){
    this.navCtrl.navigateForward(['/priyla']);
  }
  openDgppn(){
    this.navCtrl.navigateForward(['/prinwt']);
  }
}
