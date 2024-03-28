import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nsc-select',
  templateUrl: './nsc-select.page.html',
  styleUrls: ['./nsc-select.page.scss'],
})
export class NscSelectPage implements OnInit {

  constructor(
    private navCtrl:NavController
    ) { }

  ngOnInit() {
  }
  routeNsc(){
    this.navCtrl.navigateForward(['/routensc']);
  }
  ltgNsc1(){
    this.navCtrl.navigateForward(['/ltgnsc1']);
  }
  ltgNsc2(){
    this.navCtrl.navigateForward(['/ltgnsc2']);
  }
}
