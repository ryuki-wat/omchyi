import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';
import * as HighCharts from 'highcharts';


@Component({
  selector: 'app-tt-detail',
  templateUrl: './tt-detail.page.html',
  styleUrls: ['./tt-detail.page.scss'],
})
export class TtDetailPage implements OnInit {
  item:any
  loading:any
  sub:Subscription
  page=1;
  limit=18
  Result:any
  ttArea:any[]

  constructor(
    private router :Router,
    private ds :DataService,
    private navCtrl :NavController,
    public loadingController:LoadingController
  ) { //ส่ง item มา
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
    this.getTtDetail();
    
  }
  doRefresh(event:any){
    //refresh 
    //enable infinite scroll
    event.target.complete();
   //refresh ให้ไปget news มาใหม่ ใส่ event ให้หายโหลด
   this.getTtDetail(event);
  }
  getTtDetail(event?:any){
    this.sub = this.ds.getTtDetail(this.item.short,this.page,this.limit).subscribe((res:any)=>{
      //console.log(res)
        this.Result=res.data.tt
        this.ttArea=res.data.tt.map((data: { chum: string;totalnum: number; })=>({name:data.chum,y: data.totalnum}));
       
       //console.log(this.item)
       //console.log(this.ttArea) 
        //console.log(this.ttArea2) 
   //this.plotChart(this.ttArea);
    

 },async (error:any)=>{
   //หายไปตอนerror
   await this.loading.dismiss(); //loading
 
 },
 async ()=>{
   //หายไปตอนสมบูรณ์
   await this.loading.dismiss();
   
 });

  }
   plotChart(n?:any) {
    let myChart = HighCharts.chart('highcharts', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        /* options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
      } */
      },
      title: {
        text: 'จำนวนเลขหมาย TT&T ที่เปิดใช้งาน'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y} ชุมสาย</b>',
        style: {
          color: 'blue'
        }
      },

      accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          innerSize: 50,
          //depth:100,
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: 'blue'
              }
          }
      }
  },
      series: [{
        name: 'ชุมสาย',
        colorByPoint: true,
        type: undefined,
        data:n
      }]
      });
  }
  home(){
    this.navCtrl.navigateRoot([''])
    }
  ngOnDestroy(){
    //clear memory
     this.sub.unsubscribe();
   }
   ionViewDidEnter() {
    
  }
}
