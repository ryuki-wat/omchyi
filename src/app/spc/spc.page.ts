import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';
import * as HighCharts from 'highcharts';
import * as HighCharts2 from 'highcharts';




@Component({
  selector: 'app-spc',
  templateUrl: './spc.page.html',
  styleUrls: ['./spc.page.scss'],
})
export class SpcPage implements OnInit {
  loading:any
  spcnor:any;
  spcpub:any;
  page=1;
  limit=18
  sub1:Subscription
  resultNorm:any[]
  resultpub:Array<any>



  constructor(
    private ds:DataService,
    public loadingController:LoadingController,

  ) { }

  async ngOnInit() {
    //หมุนก่อน subscribe
    this.loading=await this.loadingController.create
    ({
      message:'กำลังโหลด...'
    });
    await this.loading.present();
    this.getSpc();
   
  }

  getSpc(event?:any){
    //get spc again
  //this.sub1 = this.ds.getCovidToday().subscribe((res:any)=>{
   this.sub1 = this.ds.getSpc(this.page,this.limit).subscribe((res:any)=>{
   // console.log(res[0].data.spc)
      this.resultNorm = res[0].data.spc
      this.resultpub =  res[1].data.spc
      this.spcnor=res[0].data.spc.map((data: { province: string; portcrm: number; })=>([data.province,data.portcrm]));
      this.spcpub=res[1].data.spc.map((data: { province: string; portcrm: number; })=>([data.province,data.portcrm]));;
     //console.log(this.spcnor)
    //console.log(this.covidSum?.Gender.Female)
    this.plotChart(this.spcnor);
    this.plotChart2(this.spcpub);

  },async (error:any)=>{
    //หายไปตอนerror loading
    await this.loading.dismiss(); 
    
  },
  async ()=>{
    //หายไปตอนสมบูรณ์ loading
    await this.loading.dismiss();
   
  });
}

plotChart(n?:any[]) {
  let myChart = HighCharts.chart('highcharts', {
    chart: {
      type: 'column',
          },
    title: {
      text: 'SPC Phone Summary'
      
    },
   
      
    
    
    /* subtitle: {
      text: 'Source: <a>CRM</a>'
  }, */
  xAxis: {
    type: 'category',
    labels: {
        rotation: -45,
        style: {
            fontSize: '8px',
            fontFamily: 'Verdana, sans-serif'
        }
    }
},
yAxis: {
    min: 0,
    title: {
        text: 'number'
    }
},
credits:{
  text: 'CRM',
  //href: 'http://bms.intra.tot.co.th',
 },
legend: {
    enabled: false
},
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y} number </b>',
      style: {
        color: 'grey'
      }
    },

     series: [{
      name: 'จังหวัด',
      colorByPoint: true,
      type: undefined,
      data: n,
      dataLabels: {
        enabled: true,
        rotation: -90,
        //color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.0f}', // one decimal
        y: -31, // 10 pixels down from the top
        style: {
            fontSize: '8px',
            fontFamily: 'Verdana, sans-serif'
        }
    }}],
    
    });
}
plotChart2(n?:any[]) {
  let myChart2 = HighCharts2.chart('highCharts', {
    chart: {
             type: 'column',
           },
    title: {
      text: 'SPC interchange Phone Summary'
    },
   /*  subtitle: {
      text: 'Source: <a>CRM</a>'
  }, */
  xAxis: {
      type: 'category',
      labels: {
          rotation: -45,
          style: {
              fontSize: '8px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'ชุมสาย'
      }
  },
  legend: {
      enabled: false
  },
  credits:{
    text: 'CRM',
    //href: 'http://bms.intra.tot.co.th'
   },
    tooltip: {
      pointFormat: '{series.name}:<b>{point.y} ชุมสาย</b>',
      style: {
        color: 'grey'
      }
    },
    series: [{
      name: 'จังหวัด',
      colorByPoint: true,
      type: undefined,
      data: n,
      dataLabels: {
        enabled: true,
        rotation: -90,
        //color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.0f}', // one decimal
        y: -22, // 10 pixels down from the top
        style: {
            fontSize: '8px',
            fontFamily: 'Verdana, sans-serif'
        }
    }
    }]
    });
}



doRefresh(event:any){
  //refresh 
  //enable infinite scroll
  event.target.complete();
 //refresh ให้ไปget news มาใหม่ ใส่ event ให้หายโหลด
 this.getSpc(event);
}

ngOnDestroy(){
  //clear memory
   this.sub1.unsubscribe();
 }
}
