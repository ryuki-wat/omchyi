import { Component, OnInit, ViewChild } from '@angular/core';
import {MapInfoWindow,MapMarker} from '@angular/google-maps'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.page.html',
  styleUrls: ['./gmap.page.scss'],
})
export class GmapPage implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow; //member class

  center: google.maps.LatLngLiteral ; 
  markerPositions: google.maps.LatLngLiteral[] = [];
  markerOptions: 
    google.maps.MarkerOptions = {
      draggable: false,
      animation: google.maps.Animation.DROP,
       label:'NT ญลภก.3(หญ.)' 
    
    };
  markInfo :any
  lati:number
  lngi:number
  zoom = 16;
  lat:number
  lon:number
  sub:Subscription
  event:any
  display?:google.maps.LatLngLiteral;

  addMarker(event?: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
        
   // console.log(this.markInfo.lat)
  // console.log(this.markerPositions)
    
    this.markInfo=event.latLng.toJSON()
    //console.log(this.markInfo)
     this.lati=this.markInfo.lat
   this.lngi=this.markInfo.lng 
    
  }
  
  openInfoWindow(marker: MapMarker) {
       
  
        this.infoWindow.open(marker);
      
          
      }

  constructor(public geolocation: Geolocation) { }

 ngOnInit() {
     
    }

async ionViewWillEnter(){
  this.getWatchLocation()
}

  getWatchLocation(){
    this.sub= this.geolocation.watchPosition().subscribe((position:any) => {
      this.lat=position.coords.latitude
      this.lon=position.coords.longitude 
      
      this.center={
        lat:this.lat,
        lng:this.lon
      }
      this.markerPositions.push(this.center)
   // console.log(this.lat)
   // console.log(this.lon) 
   // console.log(position) 
    },(error=>console.log(error)
    ));
    
    }
    doRefresh(event:any){
   
      //refresh ต้องมาหน้าแรก
    
      //enable infinite scroll
      if(this.event){
        this.event.target.disabled = false};
       event.target.complete();
      //refresh ให้ไปget news มาใหม่ ใส่ event หายโหลด
      this.markerPositions=[];
      this.markerPositions = [this.center];
     }
   
    ngOnDestroy() {
     this.markerPositions = [];
     
     this.sub.unsubscribe();
    }
}
