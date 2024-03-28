import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root' //ใช้ได้ทุกเพจ ทุกหน้า
})

export class DataService {
  newsUrl="http://newsapi.org/v2/top-headlines?country=th&apiKey=d5be95662f6d4b718ca2fb0ece2c4603";
  covidThaiToday="https://covid19.th-stat.com/api/open/today";
  covidWorld="https://corona.lmao.ninja/v2/all";
  priUrl='http://10.192.135.107:7777/pri565k'


  constructor(private http:HttpClient,) { }

  getNews(page?:number,pageSize?:number):Observable<any>{
   // return observable
   //back tick plus
    return this.http.get<any>(`${this.newsUrl}&page=${page}&pageSize=${pageSize}`); 
  }

  /* getCovidToday():Observable<any>{
    
     return this.http.get<any>(this.covidThaiToday); 
   } */

   getDataCovid(): Observable<any> {
    const response1 = this.http.get(this.covidThaiToday);
    
    const response2 = this.http.get(this.covidWorld);
    return forkJoin([response1, response2]);
  }

  
 

 

}
