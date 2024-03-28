import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  image='./assets/shapes.svg'
  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }


  openMenu(){
    //console.log("clicked menu")
    this.navCtrl.navigateRoot('');
  }
  slideOpts = {
    initialSlide: 0,
    speed: 1000,
    autoplay:true
  };

  getPri(){
    console.log("pri")

  }



}
