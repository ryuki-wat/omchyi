import { Component, OnInit ,OnDestroy} from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { DataService } from '../shared/data.service';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit,OnDestroy {
  
  totalResults:number
  //กำหนดเป็น array เปล่า
  articles:Array<any>=[];
  loading:any;
  page=1;
  pageSize=5;
  event:any;
  //clear memory
  sub:Subscription

  constructor(
    private navCtrl:NavController,
    private ds:DataService,
    public loadingController:LoadingController,
    private inAppBrowser:InAppBrowser
    
  ) { }

 async ngOnInit() {
    //หมุนก่อน subscribe
    this.loading=await this.loadingController.create
    ({
      message:'กำลังโหลดข่าว...'
    });
    await this.loading.present();
    this.getNews();
   
  }
  //event?เป็น optional
  getNews(event?:any){
      //get news again
    this.sub = this.ds.getNews(this.page,this.pageSize).subscribe((res:any)=>{
      //console.log(res.articles)
      this.totalResults=res.totalResults;
      //this.articles=res.articles;
      this.articles=this.articles.concat(res.articles);
      
    },async (error:any)=>{
      //หายไปตอนerror
      await this.loading.dismiss(); 
      if(event){event.target.complete();}
    },
    async ()=>{
      //หายไปตอนสมบูรณ์
      await this.loading.dismiss();
      if(event){event.target.complete();}
    });

  }

  ClickDetailNews(url:string){
   
    const opitons : InAppBrowserOptions = {
        zoom:'no',
        location:'yes',
        clearcache:'yes'
    }
    const browser = this.inAppBrowser.create(url,'_blank',opitons);
  }

  doRefresh(event:any){
   
   //refresh ต้องมาหน้าแรก
   this.page=1;
   this.articles=[];
   //enable infinite scroll
   if(this.event){this.event.target.disabled = false};
    //event.target.complete();
   //refresh ให้ไปget news มาใหม่ ใส่ event หายโหลด
   this.getNews(event);
  }


  loadData(event:any){
  this.event=event;
  this.page++;
 // console.log(this.page)
  //send event
  this.getNews(event)
   //คำนวณหน้า ปัดเป็นจำนวนเต็ม
    if(this.page== Math.ceil(this.totalResults/this.pageSize)){
      this.event.target.disabled = true;
  } }
 
  ngOnDestroy(){
   //clear memory
    this.sub.unsubscribe();
  }

}
