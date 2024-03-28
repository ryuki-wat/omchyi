
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-detail-sip',
  templateUrl: './detail-sip.page.html',
  styleUrls: ['./detail-sip.page.scss'],
})
export class DetailSipPage implements OnInit {
  item:any
  loading:any
  sub:Subscription
  page=1;
  limit=200
  Result:any
  sipArea:any[]
  constructor(
    private router :Router,
    private ds :DataService,
    private navCtrl :NavController,
    public loadingController:LoadingController
  ) { 
    const currState = this.router.getCurrentNavigation().extras.state;
    this.item= currState ? currState.item : null
  }

 
  async ngOnInit() {
    //หมุนก่อน subscribe
    this.loading=await this.loadingController.create
    ({
      message:'กำลังโหลด...'
    });
    await this.loading.present();
    this.getsipDetail();
    
  }
  doRefresh(event:any){
    //refresh 
    //enable infinite scroll
    event.target.complete();
   //refresh ให้ไปget news มาใหม่ ใส่ event ให้หายโหลด
   this.getsipDetail(event);
  }
  getsipDetail(event?:any){
    this.sub = this.ds.getSipTrunk(this.item.short,this.page,this.limit).subscribe((res:any)=>{
      //console.log(res)
        this.Result=res.data.sip
        //this.sipArea=res.data.tt.map((data: { chum: string;totalnum: number; })=>({name:data.chum,y: data.totalnum}));
       
    

 },async (error:any)=>{
   //หายไปตอนerror
   await this.loading.dismiss(); //loading
 
 },
 async ()=>{
   //หายไปตอนสมบูรณ์
   await this.loading.dismiss();
   
 });

  }
  home(){
    this.navCtrl.navigateRoot([''])
    }
    
    ngOnDestroy(){
      //clear memory
       this.sub.unsubscribe();
     }  
  
}
