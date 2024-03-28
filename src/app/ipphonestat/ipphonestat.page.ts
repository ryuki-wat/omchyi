import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';
import * as HighCharts from 'highcharts';
import * as HighCharts2 from 'highcharts';

@Component({
  selector: 'app-ipphonestat',
  templateUrl: './ipphonestat.page.html',
  styleUrls: ['./ipphonestat.page.scss'],
})
export class IpphonestatPage implements OnInit {
  loading:any
  sub:Subscription
  page=1;
  limit=18
  IpphoneArea:any[]
  ResultArea:any[]
  IpphoneSouth:any[]
  ResultSouth:any[]
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
    this.getIpphoneStat();
    
  }
  getIpphoneStat(event?:any){
    this.sub = this.ds.getIpphoneStat(this.page,this.limit).subscribe((res:any)=>{
      //console.log(res)

        this.ResultArea=res[0].data.ipphonearea.map((data: { area: any; total: any; })=>({name:data.area,y:data.total}));
        this.IpphoneArea =res[0].data.ipphonearea

        this.ResultSouth=res[1].data.ipphonesouth.map((data: { province: any; total: any; })=>({name:data.province,y:data.total}));;
        this.IpphoneSouth=res[1].data.ipphonesouth;
   //console.log(this.IpphoneSouth)
   //console.log(this.IpphoneArea) 
      
    this.plotChart(this.ResultArea);
    this.plotChart2(this.ResultSouth);

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
   this.getIpphoneStat(event);
  }
  ngOnDestroy(){
    //clear memory
     this.sub.unsubscribe();
   }

   ionViewDidEnter() {
    
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
        text: 'IP-PHONE Summary'
      },
     /*  subtitle: {
        text: 'Source: <a>bms.intra.tot.co.th</a>'
    }, */
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>',
        style: {
          color: 'grey',
          fontSize:'9px',
          fontFamily:'serif'

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
          innerSize: 30,
          //depth:100,
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.y} ',
              style: {
                color: 'grey',
                fontSize:'9px',
                fontFamily:'serif'

              }
          }
      }
  },
      series: [{
        name: 'ภาค',
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
        text: 'IP-PHONE ที่เปิดใช้ ภก.3'
      },
    /*   subtitle: {
        text: 'Source: <a>bms.intra.tot.co.th</a>'
    }, */
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>',
        style: {
          color: 'grey',
          fontSize:'9px',
          fontFamily:'serif'

        }
      },

      accessibility: {
        enabled: false,
        point: {
            valueSuffix: '%'
        }
    },
    credits:{
      text: 'http://10.227.6.10/sbc_new/main.html',
      //href: 'http://bms.intra.tot.co.th'
     },
    plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          innerSize: 30,
          //depth:100,
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.y}',
              style: {
                color: 'grey',
                fontSize:'9px',
                fontFamily:'serif'
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

}
