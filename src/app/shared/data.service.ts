import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root' //ใช้ได้ทุกเพจ ทุกหน้า
})

export class DataService {
  newsUrl="https://newsapi.org/v2/top-headlines?country=th&apiKey=d5be95662f6d4b718ca2fb0ece2c4603";
  covidThaiToday="https://corona.lmao.ninja/v2/countries/thailand";
  covidWorld="https://corona.lmao.ninja/v2/all";
  priUrl='http://1.10.191.134:7259/pri565k'
  priSka='http://1.10.191.134:7259/priska'
  priNwt='http://1.10.191.134:7259/prinwt'
  priYla='http://1.10.191.134:7259/priyla'
  priPna='http://1.10.191.134:7259/pripna'
  priSni='http://1.10.191.134:7259/prisni'
  priKos='http://1.10.191.134:7259/prikos'
  priRng='http://1.10.191.134:7259/prirng'
  priKbi='http://1.10.191.134:7259/prikbi'
  priNrt='http://1.10.191.134:7259/prinrt'
  priPkt='http://1.10.191.134:7259/pripkt'
  priCpn='http://1.10.191.134:7259/pricpn'
  priTrg='http://1.10.191.134:7259/pritrg'
  cot073='http://1.10.191.134:7259/cot073'
  cot074='http://1.10.191.134:7259/cot074'
  cot075='http://1.10.191.134:7259/cot075'
  cot076='http://1.10.191.134:7259/cot076'
  cot077='http://1.10.191.134:7259/cot077'
   nsc='http://1.10.191.134:7259/nsc'
  staff='http://1.10.191.134:7259/staff'
  elect='http://1.10.191.134:7259/elect'
  ipphone='http://1.10.191.134:7259/ipphone'
  ipphonearea='http://1.10.191.134:7259/ipphonearea'
  ipphonesouth='http://1.10.191.134:7259/ipphonesouth'
  weather='https://api.openweathermap.org/data/2.5/onecall'
  weatherAdd='https://api.openweathermap.org/data/2.5/weather'
  priTotal='http://1.10.191.134:7259/pritotal'
  idcServ='http://1.10.191.134:7259/idcserv'
  ltgNsc1='http://1.10.191.134:7259/nsc1e1'
  ltgNsc2='http://1.10.191.134:7259/nsc2e1'
  pritotalCase='http://1.10.191.134:7259/pritotalcase'
  ttTotal='http://1.10.191.134:7259/tttotal'
  tt='http://1.10.191.134:7259/tt'
  siptrunk='http://1.10.191.134:7259/sip'
  spcnor='http://1.10.191.134:7259/spcnor'
  spcpub='http://1.10.191.134:7259/spcpub'
  //gold = 'https://thai-gold-api.herokuapp.com/latest'
  crypto = 'https://api.bitkub.com/api/market/ticker'

  constructor(private http:HttpClient,) { }

  getCrypAndGold():Observable<any>{
    // return observable
    //back tick plus
           // return observable
    //back tick plus
    //const response1 = this.http.get<any>(this.gold);
    const response2 =this.http.get<any>(this.crypto);
     return forkJoin([ response2]);
  }
  getLtgNsc1(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.ltgNsc1}?page=${page}&limit=${limit}`); 
   }
   getLtgNsc2(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.ltgNsc2}?page=${page}&limit=${limit}`); 
   }
  getIdcServ(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.idcServ}?page=${page}&limit=${limit}`); 
   }
  getPritotal(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     //return this.http.get<any>(`${this.priTotal}?page=${page}&limit=${limit}`);
      // return observable
    //back tick plus
    const response1 = this.http.get<any>(`${this.priTotal}?page=${page}&limit=${limit}`);
    const response2 =this.http.get<any>(`${this.pritotalCase}?page=${page}&limit=${limit}`);
     return forkJoin([response1, response2]); 
   }
   getSpc(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
           // return observable
    //back tick plus
    const response1 = this.http.get<any>(`${this.spcnor}?page=${page}&limit=${limit}`);
    const response2 =this.http.get<any>(`${this.spcpub}?page=${page}&limit=${limit}`);
     return forkJoin([response1, response2]); 
   }
 



  getWeather(lat?:number,lon?:number,key?:string):Observable<any>{
    // return observable
    //back tick plus
    const response1 = this.http.get<any>(`${this.weather}?lat=${lat}&lon=${lon}&lang=th&exclude=minutely,alerts&units=metric&appid=${key}`);
    const response2 =this.http.get<any>(`${this.weatherAdd}?lat=${lat}&lon=${lon}&lang=th&exclude=minutely,alerts&units=metric&appid=${key}`);
     return forkJoin([response1, response2]);
   }
  getIpphone(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.ipphone}?page=${page}&limit=${limit}`); 
   }
   getIpphoneStat(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
    const response1 = this.http.get<any>(`${this.ipphonearea}?page=${page}&limit=${limit}`);
    const response2 = this.http.get<any>(`${this.ipphonesouth}?page=${page}&limit=${limit}`);
     return forkJoin([response1, response2]);
   }
   getTtStat(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
    return this.http.get<any>(`${this.ttTotal}?page=${page}&limit=${limit}`); 
   }
   getTtDetail(province?:string,page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
    return this.http.get<any>(`${this.tt}${province}?page=${page}&limit=${limit}`); 
   }
   getSipTrunk(province?:string,page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
    return this.http.get<any>(`${this.siptrunk}${province}?page=${page}&limit=${limit}`); 
   }
  getElect(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.elect}?page=${page}&limit=${limit}`); 
   }
  getStaff(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.staff}?page=${page}&limit=${limit}`); 
   }
  getNsc(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.nsc}?page=${page}&limit=${limit}`); 
   }

  getCot073(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.cot073}?page=${page}&limit=${limit}`); 
   }
   getCot074(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.cot074}?page=${page}&limit=${limit}`); 
   }
   getCot075(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.cot075}?page=${page}&limit=${limit}`); 
   }
   getCot076(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.cot076}?page=${page}&limit=${limit}`); 
   }
   getCot077(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.cot077}?page=${page}&limit=${limit}`); 
   }
  getPriSka(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.priSka}?page=${page}&limit=${limit}`); 
   }
   getPriNwt(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.priNwt}?page=${page}&limit=${limit}`); 
   }
   getPriYla(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.priYla}?page=${page}&limit=${limit}`); 
   }
   getPriPna(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.priPna}?page=${page}&limit=${limit}`); 
   }
   getPriSni(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.priSni}?page=${page}&limit=${limit}`); 
   }
   getPriKos(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.priKos}?page=${page}&limit=${limit}`); 
   }
   getPriRng(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.priRng}?page=${page}&limit=${limit}`); 
   }
   getPriKbi(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.priKbi}?page=${page}&limit=${limit}`); 
   }
   getPriNrt(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.priNrt}?page=${page}&limit=${limit}`); 
   }
   getPriPkt(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.priPkt}?page=${page}&limit=${limit}`); 
   }
   getPriCpn(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.priCpn}?page=${page}&limit=${limit}`); 
   }
   getPriTrg(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.priTrg}?page=${page}&limit=${limit}`); 
   }

  getNews(page?:number,pageSize?:number):Observable<any>{
   // return observable
   //back tick plus
    return this.http.get<any>(`${this.newsUrl}&page=${page}&pageSize=${pageSize}`); 
  }

  getPri565k(page?:number,limit?:number):Observable<any>{
    // return observable
    //back tick plus
     return this.http.get<any>(`${this.priUrl}?page=${page}&limit=${limit}`); 
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
