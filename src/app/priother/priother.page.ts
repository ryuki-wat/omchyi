import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-priother',
  templateUrl: './priother.page.html',
  styleUrls: ['./priother.page.scss'],
})
export class PriotherPage implements OnInit {

  constructor(
    private navCtrl:NavController) { }

  ngOnInit() {
  }
  priSka(){
    this.navCtrl.navigateForward(['/priska']);
  }
  priNwt(){
    this.navCtrl.navigateForward(['/prinwt']);
  }
  priPna(){
    this.navCtrl.navigateForward(['/pripna']);
  }
  priSni(){
    this.navCtrl.navigateForward(['/prisni']);
  }
  priKbi(){
    this.navCtrl.navigateForward(['/prikbi']);
  }
  priNrt(){
    this.navCtrl.navigateForward(['/prinrt']);
  }
  priPkt(){
    this.navCtrl.navigateForward(['/pripkt']);
  }
  priCpn(){
    this.navCtrl.navigateForward(['/pricpn']);
  }
  priYla(){
    this.navCtrl.navigateForward(['/priyla']);
  }
  priTrg(){
    this.navCtrl.navigateForward(['/pritrg']);
  }
priChart(){
  this.navCtrl.navigateForward(['/prichart']);
}
priKos()
{
  this.navCtrl.navigateForward(['/prikos']);
}
priRng()
{
  this.navCtrl.navigateForward('/prirng');
}
}
