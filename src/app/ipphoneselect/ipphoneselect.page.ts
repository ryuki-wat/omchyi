import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ipphoneselect',
  templateUrl: './ipphoneselect.page.html',
  styleUrls: ['./ipphoneselect.page.scss'],
})
export class IpphoneselectPage implements OnInit {

  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }
  openIpphone(){
this.navCtrl.navigateForward(['/ipphone'])
  }
}
