import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {

  staff=[{
  name:'นาย สุรสิทธิ์ ศรีอินทร์',
  code:'13709033', 
  jobPosition:'ผจ.อลภก.2(หาดใหญ่)',
  positon:'วิศวกร7',
  email:'surasits@tot.co.th',
  mobile:'0945859519,074251136',
  picture:'./assets/profile/surasits.png'
 
},{
  name:'นาย พงศธร นิคมรัตน์',
  code:'13308728', 
  positon:'วิศวกร6',
  email:'pongston.tot@gmail.com',
  mobile:'0812763271,074251135',
  picture:'./assets/profile/pongsatorn.png'
},{
  name:'นาย เกียรติยศ ชุมสุวรรณ',
  code:'13804415', 
  positon:'วิศวกร6',
  email:'kiattiyo@tot.co.th',
  mobile:'0896549090,074251135',
  picture:'./assets/profile/kiattiyod.png'
  },{
    name:'นาย นันทวัฒน์ เพชรมณี',
    code:'14800545', 
    positon:'วิศวกร6',
    email:'nuntavat@tot.co.th',
    mobile:'0810993407,074251134',
    picture:'./assets/profile/nuntavat.png'
  },{
    name:'น.ส.จุฑารัตน์ เลขะชัยวรกุล',
    code:'14800557', 
    positon:'วิศวกร5',
    email:'jutharle@tot.co.th',
    mobile:'0867479515,074251135',
    picture:'./assets/profile/jutharat.png'
  },{
    name:'นาย ภานุวัฒน์ หนูคาบแก้ว',
    code:'25400932', 
    positon:'วิศวกร',
    email:'panuwatn@tot.co.th',
    mobile:'0801368998,074251823',
    picture:'./assets/profile/panuwat.png'

  


}





]

  constructor( ) { 

  }

  ngOnInit() {
   
  }

  openStaff(){

  }
}
