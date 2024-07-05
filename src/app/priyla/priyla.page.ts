import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController,ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-priyla',
  templateUrl: './priyla.page.html',
  styleUrls: ['./priyla.page.scss'],
})

export class PriylaPage implements OnInit {
  pdfSrc = ["https://omchyi.site/mcsouth/wp-content/uploads/omchyi/powerISP.pdf",
            "https://omchyi.site/mcsouth/wp-content/uploads/omchyi/powerISPfloor2.pdf",
            "https://omchyi.site/mcsouth/wp-content/uploads/omchyi/powerIDC.pdf",
            "https://omchyi.site/mcsouth/wp-content/uploads/omchyi/powerIDCfloor2.pdf",
            "https://omchyi.site/mcsouth/wp-content/uploads/omchyi/powerIDCfloor3.pdf" ,
            "https://omchyi.site/mcsouth/wp-content/uploads/omchyi/powerSW.pdf",
            "https://omchyi.site/mcsouth/wp-content/uploads/omchyi/powerSWfloor2.pdf",
            "https://omchyi.site/mcsouth/wp-content/uploads/omchyi/powerSWfloor3.pdf", 
            "https://omchyi.site/mcsouth/wp-content/uploads/omchyi/powerSWfloor2list.pdf",
            "https://omchyi.site/mcsouth/wp-content/uploads/omchyi/powerISPfloor2list.pdf",
            "https://omchyi.site/mcsouth/wp-content/uploads/omchyi/powerIDCfloor2list.pdf",
            "https://omchyi.site/mcsouth/wp-content/uploads/omchyi/LoadSWfloor3.pdf",
            "https://omchyi.site/mcsouth/wp-content/uploads/omchyi/LoadSWfloor2.pdf",
            "https://omchyi.site/mcsouth/wp-content/uploads/omchyi/LoadISPfloor3.pdf",
            "https://omchyi.site/mcsouth/wp-content/uploads/omchyi/LoadISPfloor2.pdf",
            "https://omchyi.site/mcsouth/wp-content/uploads/omchyi/LoadIDCfloor2.pdf",
            "https://omchyi.site/mcsouth/wp-content/uploads/omchyi/power1.pdf",
            ]
  constructor(private modalCtrl:ModalController,
    private navCtrl:NavController) { }

 ngOnInit() {
 }
 home () {
  this.navCtrl.navigateRoot([''])
  }
}
// export class PriylaPage implements OnInit {
//   loading:any
//   sub:Subscription
//   page=1;
//   limit=5
//   event:any
//   Results:any[]=[]
//   pageTotal:number
//   totalItem:number
//   constructor(
//     private navCtrl:NavController,
//     private ds:DataService,
//     public loadingController:LoadingController,
    

//   ) { }

//   async ngOnInit() {
//     //หมุนก่อน subscribe
//     this.loading=await this.loadingController.create
//     ({
//       message:'กำลังโหลด...'
//     });
//     await this.loading.present();
//     this.getPriYla();
   
//   }
//   getPriYla(event?:any){
//     //get news again
//   this.sub = this.ds.getPriYla(this.page,this.limit).subscribe((res:any)=>{
//      //console.log(res.data.pri565k)
//      this.pageTotal=res.data.totalPages
//      this.totalItem=res.data.totalItems
//     //this.Results=res.data.pri565k;

//     this.Results=this.Results.concat(res.data.priyla);
    
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
//   this.getPriYla(event);
//  }

//  loadData(event:any){
//   this.event=event;
//   this.page++;
//  //console.log(this.page)
//   //send event
//   this.getPriYla(event)
//    //คำนวณหน้า ปัดเป็นจำนวนเต็ม
//     if(this.page== this.pageTotal){
//       this.event.target.disabled = true;
//   } }

// ngOnDestroy(){
//   //clear memory
//    this.sub.unsubscribe();
//  }
//   home(){
//     this.navCtrl.navigateRoot([''])
//     }
// }
