import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-routensc',
  templateUrl: './routensc.page.html',
  styleUrls: ['./routensc.page.scss'],
})
export class RoutenscPage implements OnInit {
  loading:any
  sub:Subscription
  page=1;
  limit=10
  event:any
  Results:any[]=[]
  pageTotal:number
  totalItem:number
  constructor(
    private navCtrl:NavController,
    private ds:DataService,
    public loadingController:LoadingController
  ) { }

  async ngOnInit() {
    //หมุนก่อน subscribe
    this.loading=await this.loadingController.create
    ({
      message:'กำลังโหลด...'
    });
    await this.loading.present();
    this.getNsc();
   
  }
  getNsc(event?:any){
    //get news again
  this.sub = this.ds.getNsc(this.page,this.limit).subscribe((res:any)=>{
     //console.log(res.data.pri565k)
     this.pageTotal=res.data.totalPages
     this.totalItem=res.data.totalItems
    //this.Results=res.data.pri565k;

    this.Results=this.Results.concat(res.data.nsc);
    
  },async (error:any)=>{
    //หายไปตอนerror
    await this.loading.dismiss(); //loading
    //infinite scroll
    if(event){event.target.complete();}
  },
  async ()=>{
    //หายไปตอนสมบูรณ์
    await this.loading.dismiss();
    if(event){event.target.complete();}
  });
}

doRefresh(event:any){
   
  //refresh ต้องมาหน้าแรก
  this.page=1;
  this.Results=[];
  //enable infinite scroll
  if(this.event){this.event.target.disabled = false};
   //event.target.complete();
  //refresh ให้ไปget news มาใหม่ ใส่ event หายโหลด
  this.getNsc(event);
 }

 loadData(event:any){
  this.event=event;
  this.page++;
 //console.log(this.page)
  //send event
  this.getNsc(event)
   //คำนวณหน้า ปัดเป็นจำนวนเต็ม
    if(this.page== this.pageTotal){
      this.event.target.disabled = true;
  } }

ngOnDestroy(){
  //clear memory
   this.sub.unsubscribe();
  }
  home(){
    this.navCtrl.navigateRoot([''])
  }
}
