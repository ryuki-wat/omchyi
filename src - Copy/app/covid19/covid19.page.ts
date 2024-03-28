import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Subscription } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.page.html',
  styleUrls: ['./covid19.page.scss'],
})

export class Covid19Page implements OnInit {
  loading:any
  covidToday:any;
   covidWorld:any;
  sub1:Subscription
 

  constructor(
    private ds:DataService,
    public loadingController:LoadingController,

  ) { }


   

//เปิดมาดึงข้อมูล
  async ngOnInit() {
    //หมุนก่อน subscribe
    this.loading=await this.loadingController.create
    ({
      message:'กำลังโหลด...'
    });
    await this.loading.present();
    this.getCovidToday();
   
  }

  getCovidToday(event?:any){
    //get news again
  //this.sub1 = this.ds.getCovidToday().subscribe((res:any)=>{
   this.sub1 = this.ds.getDataCovid().subscribe((res:any)=>{
    //console.log(res)
      this.covidToday=res[0];
      this.covidWorld=res[1];
    //console.log(this.covidByCase)
    //console.log(this.covidSum?.Gender.Female)
       

  },async (error:any)=>{
    //หายไปตอนerror loading
    await this.loading.dismiss(); 
    //refresher
    if(event){event.target.complete();}
  },
  async ()=>{
    //หายไปตอนสมบูรณ์ loading
    await this.loading.dismiss();
    //refresher
    if(event){event.target.complete();}
  });
}



doRefresh(event:any){
  
  this.getCovidToday(event);
  }

ngOnDestroy(){
    //clear memory
     this.sub1.unsubscribe();
   }

ionViewDidEnter() {
   // this.plotChart();
  }

ionViewWillEnter() {
     } 
    
    
    

  plotChart() {
    let myChart = Highcharts.chart('highcharts', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'ผู้ติดเชื้อ covid-19 ',
        style: {
          color: 'red'
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y:.0f}</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f}% ',
            style: {
              color: 'blue'
            }
          }
        }
      },
      series: [{
        name: 'จำนวน (คน) ',
        colorByPoint: true,
        type: undefined,

        data: [{
          name: 'ชาย',
          y:1928,
          sliced: true,
          selected: true
        }, {
          name: 'หญิง',
          y: 1518
              }] 
            }]
    });
  }



}
