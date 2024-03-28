import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Chart } from 'chart.js';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-ipphone',
  templateUrl: './ipphone.page.html',
  styleUrls: ['./ipphone.page.scss'],
})

export class IpphonePage implements OnInit {
  //accesses the canvas element in a variable barChart
  @ViewChild('barChart')barChart

  bars: any;
  colorArray: any;
  loading:any
  sub:Subscription
  page=1;
  limit=18
  event:any
  Results:any[]=[]
  province:Array<any>
  dataApi:any[]
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
      this.getIpphone();
      
    }

    getIpphone(event?:any){
      //get again
    this.sub = this.ds.getIpphone(this.page,this.limit).subscribe((res:any)=>{
     
       this.Results=res.data.ipphone;
       this.totalItem=res.data.totalItems
       this.province =this.Results.map(data=>data.province)
       this.dataApi=this.Results.map(data=>data.total)
       
      // console.log(this.province)
       //console.log(this.dataApi)
     
      this.generateColorArray(this.totalItem)
      this.createBarChart(this.province,this.dataApi,this.colorArray)

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
     //refresh 
     //enable infinite scroll
     event.target.complete();
    //refresh ให้ไปget news มาใหม่ ใส่ event ให้หายโหลด
    this.getIpphone(event);
   }
     
  ngOnDestroy(){
    //clear memory
     this.sub.unsubscribe();
   }
  ionViewDidEnter() {
   
  }

  generateColorArray(num:number) {
    this.colorArray = [];
    for (let i = 0; i < num; i++) {
      this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
  }

  createBarChart(p?:any[],d?:any[],c?:any[]) {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'pie',
      data: {
        labels: p,
        datasets: [{
          label: 'Ipphone PPPOE',
          data: d,
          backgroundColor:c, // array should have same number of elements as number of dataset
          borderColor: 'rgb(0,0,0)',// array should have same number of elements as number of dataset
          borderWidth: 2,
          
        }]
      },
   /*    options: {
        scales: {
          yAxis: [
            {
            ticks: {
              beginAtZero: true
            }
            }   ]
                }
      } */
    });
  }



  home(){
    this.navCtrl.navigateRoot([''])
  }
}
