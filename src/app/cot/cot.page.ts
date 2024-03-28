import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cot',
  templateUrl: './cot.page.html',
  styleUrls: ['./cot.page.scss'],
})
export class CotPage implements OnInit {

  constructor(
    private navCtrl:NavController
  ) { }



  ngOnInit() {
  }
openCot073(){
  this.navCtrl.navigateForward(['/cot073']);
}
openCot074(){
  this.navCtrl.navigateForward(['/cot074']);
}
openCot075(){
  this.navCtrl.navigateForward(['/cot075']);
}
openCot076(){
  this.navCtrl.navigateForward(['/cot076']);
}
openCot077(){
  this.navCtrl.navigateForward(['/cot077']);
}
}
