import { Component, OnInit } from '@angular/core';
import { IonThumbnail, LoadingController, NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  image='./assets/shapes.svg'
  loading:any
  sub:Subscription
  sub1 : Subscription
  lat:number
  lon:number
  key='798749b8e4527c3e069fb448b4419123'
  event:any
 weather:any
 weatherAdd:any
icon:string
gold:any
crypto:any[]
  constructor(
  private navCtrl:NavController,
  private ds:DataService,
  public loadingController:LoadingController,
  public geolocation:Geolocation
  ) { }

  
 async ngOnInit() {
     //หมุนก่อน subscribe
     this.loading=await this.loadingController.create
     ({message:'กำลังโหลด...'});
     await this.loading.present();
      this.getCrypAndGold(); 
       }
// async ionViewWillEnter(){
//        //หมุนก่อน subscribe
//       this.loading=await this.loadingController.create
//     ({message:'กำลังโหลด...'});
//     await this.loading.present();
//      this.getCrypAndGold();
//   //  this.getCurrentLocation(); 
//     }

getCrypAndGold(){
  //get news again
  this.sub1 = this.ds.getCrypAndGold().subscribe((res:any)=>{
    this.crypto=res[0]
    //console.log(res[0])
    this.crypto=[
      {
            name:'BTC/THB',
            price:res[0].THB_BTC.last,
            change:res[0].THB_BTC.percentChange,
            icon:'btc.png'
       } ,
      {     name:'ETH/THB',
            price:res[0].THB_ETH.last,
            change:res[0].THB_ETH.percentChange,
            icon:'eth.png'  
      }, 
      {     name:'XRP/THB',
            price:res[0].THB_XRP.last,
            change:res[0].THB_XRP.percentChange,
            icon:'xrp.png'  
              
    },
     
    {     name:'BNB/THB',
            price:res[0].THB_BNB.last,
            change:res[0].THB_BNB.percentChange,
            icon:'bnb.png'    
      },
     
      {     name:'JFIN/THB',
            price:res[0].THB_JFIN.last,
            change:res[0].THB_JFIN.percentChange,
            icon:'jfin.png'   
       } ,
      
        ]

    //this.crypto=res[1].map((data: { last: number; percentChange: number; })=>({name:data.province,y:data.totalchum}));
   //console.log(this.crypto)
    
},async (error:any)=>{
  //หายไปตอนerror
  await this.loading.dismiss(); //loading
 
},
async ()=>{
  //หายไปตอนสมบูรณ์
  await this.loading.dismiss();
   });

}

    getCurrentLocation(){
    this.geolocation.getCurrentPosition().then((position)=>{
      this.lat=position.coords.latitude 
      this.lon=position.coords.longitude 
      //console.log(this.lat,this.lon)
      this.getWeather();

    }).catch((error)=>{this.getWeather();})
    } 

   getWeather(event?:any){
    //get news again
  this.sub = this.ds.getWeather(this.lat,this.lon,this.key).subscribe((res:any)=>{
      this.weather=res[0]
      this.weatherAdd=res[1]
      this.icon=`https://openweathermap.org/img/wn/${this.weather?.current.weather[0].icon}@2x.png` 
      
  },async (error:any)=>{
    //หายไปตอนerror
    await this.loading.dismiss(); //loading
   
  },
  async ()=>{
    //หายไปตอนสมบูรณ์
    await this.loading.dismiss();
     });
}
 
doRefresh(event:any){
   event.target.complete();
  //refresh ให้ไปget news มาใหม่ ใส่ event หายโหลด
  //this.getCurrentLocation()
  this.getCrypAndGold();
 }

 
ngOnDestroy(){
  //clear memory
 // this.sub.unsubscribe();
   this.sub1.unsubscribe();
 }

  slideOpts = {
    initialSlide: 0,
    speed: 1000,
    autoplay:true
  };

  openPri(){
    this.navCtrl.navigateForward(['/pri565k']);

  }

  openPriOther(){
    this.navCtrl.navigateForward(['/priother']);

  }
  openCot(){
    this.navCtrl.navigateForward(['/cot']);
  }
  openNsc(){
    this.navCtrl.navigateForward(['/nsc-select']);
  }
  openElectSelect(){
    this.navCtrl.navigateForward(['/elect-select']);
    }
  openIpphoneSelect(){
    this.navCtrl.navigateForward(['/ipphoneselect']); 
    }
    openIpphone(){
      this.navCtrl.navigateForward(['/ipphonestat']); 
      }
    openIdcSelect(){
      this.navCtrl.navigateForward(['/idcselect']); 
      }
      openTT(){
        this.navCtrl.navigateForward(['/tt']);
      }
      openSip(){
        this.navCtrl.navigateForward(['/siptotal']);
      }
      openSpc(){
        this.navCtrl.navigateForward(['/spc']);
      }
}
