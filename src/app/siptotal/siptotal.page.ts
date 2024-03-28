import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import * as HighCharts from 'highcharts';
import * as HighCharts2 from 'highcharts';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-siptotal',
  templateUrl: './siptotal.page.html',
  styleUrls: ['./siptotal.page.scss'],
})
export class SiptotalPage implements OnInit {
  loading:any
  sub:Subscription
  page=1;
  limit=18
  sipArea:any[]
  sipArea2:any[]
  resultArea:any[]
  text:string ='total'
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
    this.getSip();
    }
    
  

  getSip(event?:any){
    this.sub = this.ds.getSipTrunk(this.text,this.page,this.limit).subscribe((res:any)=>{
     // console.log(res)
        this.resultArea=res.data.siptotal
        this.sipArea=res.data.siptotal.map((data: { province: string; Soft: number; })=>({name:data.province,y:data.Soft}));
        this.sipArea2=res.data.siptotal.map((data: { province: string; Crm: number; })=>({name:data.province,y:data.Crm}));
      // console.log(this.ResultArea)
        //console.log(this.ttArea) 
        //console.log(this.ttArea2) 
        
    //this.plotChart(this.sipArea);
    this.plotChart2(this.sipArea2);

 },async (error:any)=>{
   //หายไปตอนerror
   await this.loading.dismiss(); //loading
 
 },
 async ()=>{
   //หายไปตอนสมบูรณ์
   await this.loading.dismiss();
   
 });

  }

  plotChart(n?:any[]) {
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
        text: 'เลขหมาย Sip Trunk ตาม Soft'
      },
     /*  subtitle: {
        text: 'Source: <a>http://bms.intra.tot.co.th</a>'
    }, */
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y} </b>',
        style: {
          color: 'grey',
          fontSize:'9px',
        }
      },

      accessibility: {
        enabled: false,
        point: {
            valueSuffix: '%'
        }
    },
    credits:{
      text: 'bms.intra.tot.co.th',
      //href: 'http://bms.intra.tot.co.th'
     },
    plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          innerSize: 40,
          //depth:100,
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: 'grey'
              }
          }
      }
  },
      series: [{
        name: 'จังหวัด',
        colorByPoint: true,
        type: undefined,
        data: n
      }]
      });
  }
  plotChart2(n?:any[]) {
    let myChart2 = HighCharts2.chart('highCharts', {
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
        text: 'SIP TRUNK Summary '
      },
    /*   subtitle: {
        text: 'Source: <a>bms.intra.tot.co.th</a>'
    }, */
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>',
        style: {
          color: 'grey',
          fontSize:'9px',
        }
      },

      accessibility: {
        enabled: false,
        point: {
            valueSuffix: '%'
        }
    },/* credits:{
      text: 'bms.intra.tot.co.th',
      //href: 'http://bms.intra.tot.co.th'
     }, */
    plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          innerSize: 40,
          //depth:100,
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>:{point.y} ',
              style: {
                color: 'grey',
                fontSize:'9px',
              }
          }
      }
  },
      series: [{
        name: 'จังหวัด',
        colorByPoint: true,
        type: undefined,
        data: n
      }]
      });
  }
  detailSip(R:any){
   // console.log(R)
    //R object
    this.navCtrl.navigateForward(['/detail-sip'],{state:{item:R}})
  }

  doRefresh(event:any){
    //refresh 
    //enable infinite scroll
    event.target.complete();
   //refresh ให้ไปget news มาใหม่ ใส่ event ให้หายโหลด
   this.getSip(event);
  }


  ngOnDestroy(){
    //clear memory
     this.sub.unsubscribe();
   }


}
