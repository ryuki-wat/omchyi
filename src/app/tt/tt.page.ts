import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController,ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';
import * as HighCharts from 'highcharts';
import * as HighCharts2 from 'highCharts';

@Component({
  selector: 'app-tt',
  templateUrl: './tt.page.html',
  styleUrls: ['./tt.page.scss'],
})
export class TtPage implements OnInit {
     //pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
    constructor(private modalCtrl:ModalController) { }
  
    ngOnInit() {
    }
  
  /*   dismissModal(){
      this.modalCtrl.dismiss({
        'dismissed': true
      });
    } */
  
  }
  // loading:any
  // sub:Subscription
  // page=1;
  // limit=18
  // ttArea:any[]
  // ttArea2:any[]
  // ResultArea:any[]
  
  


 /*  constructor(
    private navCtrl:NavController,
    private ds:DataService,
    public loadingController:LoadingController

  ) { } */

  // async ngOnInit() {
  //   //หมุนก่อน subscribe
  //   this.loading=await this.loadingController.create
  //   ({
  //     message:'กำลังโหลด...'
  //   });
  //   await this.loading.present();
  //   this.getttStat();
    
  // }

//   getttStat(event?:any){
//     this.sub = this.ds.getTtStat(this.page,this.limit).subscribe((res:any)=>{
//       //console.log(res)
//         this.ResultArea=res.data.tttotal
//         this.ttArea=res.data.tttotal.map((data: { province: string; totalchum: number; })=>({name:data.province,y:data.totalchum}));
//         this.ttArea2=res.data.tttotal.map((data: { province: string; totalnum: number; })=>({name:data.province,y:data.totalnum}));
//       // console.log(this.ResultArea)
//         //console.log(this.ttArea) 
//         //console.log(this.ttArea2) 
//     this.plotChart(this.ttArea);
//     this.plotChart2(this.ttArea2);

//  },async (error:any)=>{
//    //หายไปตอนerror
//    await this.loading.dismiss(); //loading
 
//  },
//  async ()=>{
//    //หายไปตอนสมบูรณ์
//    await this.loading.dismiss();
   
//  });

//   }

  // doRefresh(event:any){
  //   //refresh 
  //   //enable infinite scroll
  //   event.target.complete();
  //  //refresh ให้ไปget news มาใหม่ ใส่ event ให้หายโหลด
  //  this.getttStat(event);
  // }

  /* plotChart(n?:any[]) {
    let myChart = HighCharts.chart('highcharts', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie', */
        /* options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
      } */
     /*  },
      title: {
        text: 'จำนวนชุมสาย TT&T ที่เปิดใช้งาน'
      }, */
   /*    subtitle: {
        text: 'Source: <a>bms.intra.tot.co.th</a>'
    }, */
    /*   tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>',
        style: {
          color: 'red'
        }
      }, */
      /* credits:{
        text: 'bms.intra.tot.co.th',
        //href: 'http://bms.intra.tot.co.th'
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
          innerSize: 50, */
          //depth:100,
          /* dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.y} ชุมสาย',
              style: {
                color: 'blue'
              }
          }
      }
  }, */
      /* series: [{
        name: 'จังหวัด',
        colorByPoint: true,
        type: undefined,
        data: n
      }] */
  /*     });
  } */
  /* plotChart2(n?:any[]) {
    let myChart2 = HighCharts2.chart('highCharts', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie', */
        /* options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
      } */
     /*  },
      title: {
        text: 'จำนวนเลขหมาย TT&T ที่เปิดใช้งาน'
      }, */
     /*  subtitle: {
        text: 'Source: <a>bms.intra.tot.co.th</a>'
    }, */
     /*  tooltip: {
        pointFormat: '{series.name}:<b>{point.percentage:.1f} %</b>',
        style: {
          color: 'brown'
        }
      },

      accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    credits:{
      text: 'bms.intra.tot.co.th', */
    //href: 'http://bms.intra.tot.co.th'
    /*  },
    plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          innerSize: 50,
          //depth:100,
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>:  {point.y} เลขหมาย',
              style: {
                color: 'blue'
              }
          }
      } */
  // },
  //     series: [{
  //       name: 'จังหวัด',
  //       colorByPoint: true,
  //       type: undefined,
  //       data: n
  //     }]
  //     });
  // }
 

 /*  detail(R:any){ */
    //console.log(R)
    //R object
   /*  this.navCtrl.navigateForward(['/tt-detail'],{state:{item:R}})
  }

  ngOnDestroy(){
    //clear memory
     this.sub.unsubscribe();
   } */



