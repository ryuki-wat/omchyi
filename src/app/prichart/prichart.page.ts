import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-prichart',
  templateUrl: './prichart.page.html',
  styleUrls: ['./prichart.page.scss'],
})
export class PrichartPage implements OnInit {
  @ViewChild('barChart')barChart
  
  bars: any;
  bars2:any;
  colorArray: any;
  loading:any
  sub:Subscription
  page=1;
  limit=15
  event:any
  Results:any[]=[]
  system:Array<any>
  ResultsCase:any[]=[]
  dataApi:any[]
  systemCase:any
  dataApiCase:any
  totalItem:number
  totalItemCase:number
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
    this.getPriTotal();
    
  }

  getPriTotal(event?:any){
    //get again
  this.sub = this.ds.getPritotal(this.page,this.limit).subscribe((res:any)=>{
    
   // console.log(this.pritotalCase)
    //res[0] pritotal
    //res[1] pritotalCase
     this.Results=res[0].data.pritotal;
     this.totalItem=res[0].data.totalItems
     
     this.ResultsCase=res[1].data.pritotalcase
     this.totalItemCase=res[1].data.totalItems

     //console.log(this.ResultsCase)

     this.system =this.Results.map(data=>data.system)
     this.dataApi=this.Results.map(data=>data.total)     
    this.generateColorArray(this.totalItem)
    this.createBarChart(this.system,this.dataApi,this.colorArray)
    
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
  this.getPriTotal(event);
 }
   
ngOnDestroy(){
  //clear memory
   this.sub.unsubscribe();
 }
ionViewDidEnter() {
 // this.createBarChart();
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
        label: 'PRI',
        data: d,
        backgroundColor:c, // array should have same number of elements as number of dataset
        borderColor: 'rgb(0,0,0)',// array should have same number of elements as number of dataset
        borderWidth: 2,
       
      }]
    },
    /* options: {
      scales: {
        yAxis: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      
    } */
  });
}


  home(){
    this.navCtrl.navigateRoot([''])
  }
}
