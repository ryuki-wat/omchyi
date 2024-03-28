import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController,ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-prinwt',
  templateUrl: './prinwt.page.html',
  styleUrls: ['./prinwt.page.scss'],
})
export class PrinwtPage implements OnInit {
  pdfSrc = ["https://omchyi.site/mcsouth/wp-content/uploads/omcppn/Single_line_Diagram.jpg",
              "https://omchyi.site/mcsouth/wp-content/uploads/omcppn/LAYOUT_PPNT_B1_1st_floor_power.pdf",
              "https://omchyi.site/mcsouth/wp-content/uploads/omcppn/LAYOUT_PPNT_B1_2nd_floor_iptnep.pdf",
              "https://omchyi.site/mcsouth/wp-content/uploads/omcppn/LAYOUT_RECTIFIER_BATTERY_PPN.pdf",
              "https://omchyi.site/mcsouth/wp-content/uploads/omcppn/RECTIFIER_PPN.pdf",
              "https://omchyi.site/mcsouth/wp-content/uploads/omcppn/TRANSFORMER_PPN.pdf",
              "https://omchyi.site/mcsouth/wp-content/uploads/omcppn/UPS_PPN.pdf",
              "https://omchyi.site/mcsouth/wp-content/uploads/omcppn/BATTERY_PPN.pdf",
              "https://omchyi.site/mcsouth/wp-content/uploads/omcppn/GENERATOR_PPN.pdf",
              "https://omchyi.site/mcsouth/wp-content/uploads/omcppn/powerppn.pdf"

               ]


  constructor(private modalCtrl:ModalController,
    private navCtrl:NavController) { }

 ngOnInit() {
 }
 home(){
  this.navCtrl.navigateRoot([''])
  }
  
}

// export class PrinwtPage implements OnInit {
//   loading:any
//   sub:Subscription
//   page=1;
//   limit=5
//   event:any
//   Results:any[]=[]
//   pageTotal:number
//   totalItem:number

//   constructor(
//    private navCtrl:NavController,
//    private ds:DataService,
//     public loadingController:LoadingController
//   ) { }

//   async ngOnInit() {
//     //หมุนก่อน subscribe
//     this.loading=await this.loadingController.create
//     ({
//       message:'กำลังโหลด...'
//     });
//     await this.loading.present();
//     this.getPriNwt();
   
//   }
//   getPriNwt(event?:any){
//     //get news again
//   this.sub = this.ds.getPriNwt(this.page,this.limit).subscribe((res:any)=>{
//      //console.log(res.data.pri565k)
//      this.pageTotal=res.data.totalPages
//      this.totalItem=res.data.totalItems
//     //this.Results=res.data.pri565k;

//     this.Results=this.Results.concat(res.data.prinwt);
    
//   },async (error:any)=>{
//     //หายไปตอนerror
//     await this.loading.dismiss(); //loading
//     //infinite scroll
//     if(event){event.target.complete();}
//   },
//   async ()=>{
//     //หายไปตอนสมบูรณ์
//     await this.loading.dismiss();
//     if(event){event.target.complete();}
//   });
// }

// doRefresh(event:any){
   
//   //refresh ต้องมาหน้าแรก
//   this.page=1;
//   this.Results=[];
//   //enable infinite scroll
//   if(this.event){this.event.target.disabled = false};
//    //event.target.complete();
//   //refresh ให้ไปget news มาใหม่ ใส่ event หายโหลด
//   this.getPriNwt(event);
//  }

//  loadData(event:any){
//   this.event=event;
//   this.page++;
//  //console.log(this.page)
//   //send event
//   this.getPriNwt(event)
//    //คำนวณหน้า ปัดเป็นจำนวนเต็ม
//     if(this.page== this.pageTotal){
//       this.event.target.disabled = true;
//   } }

// ngOnDestroy(){
//   //clear memory
//    this.sub.unsubscribe();
//  }

// }
