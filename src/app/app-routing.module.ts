import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
 
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./staff/staff.module').then( m => m.StaffPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'covid19',
    loadChildren: () => import('./covid19/covid19.module').then( m => m.Covid19PageModule)
  },
  {
    path: 'pri565k',
    loadChildren: () => import('./pri565k/pri565k.module').then( m => m.Pri565kPageModule)
  },
  {
    path: 'priother',
    loadChildren: () => import('./priother/priother.module').then( m => m.PriotherPageModule)
  },
  {
    path: 'priska',
    loadChildren: () => import('./priska/priska.module').then( m => m.PriskaPageModule)
  },
  {
    path: 'prinwt',
    loadChildren: () => import('./prinwt/prinwt.module').then( m => m.PrinwtPageModule)
  },
  {
    path: 'pripna',
    loadChildren: () => import('./pripna/pripna.module').then( m => m.PripnaPageModule)
  },
  {
    path: 'prisni',
    loadChildren: () => import('./prisni/prisni.module').then( m => m.PrisniPageModule)
  },
  {
    path: 'prikbi',
    loadChildren: () => import('./prikbi/prikbi.module').then( m => m.PrikbiPageModule)
  },
  {
    path: 'prinrt',
    loadChildren: () => import('./prinrt/prinrt.module').then( m => m.PrinrtPageModule)
  },
  {
    path: 'pripkt',
    loadChildren: () => import('./pripkt/pripkt.module').then( m => m.PripktPageModule)
  },
  {
    path: 'pricpn',
    loadChildren: () => import('./pricpn/pricpn.module').then( m => m.PricpnPageModule)
  },
  {
    path: 'priyla',
    loadChildren: () => import('./priyla/priyla.module').then( m => m.PriylaPageModule)
  },
  {
    path: 'pritrg',
    loadChildren: () => import('./pritrg/pritrg.module').then( m => m.PritrgPageModule)
  },
  {
    path: 'cot',
    loadChildren: () => import('./cot/cot.module').then( m => m.CotPageModule)
  },
  {
    path: 'cot073',
    loadChildren: () => import('./cot073/cot073.module').then( m => m.Cot073PageModule)
  },
  {
    path: 'cot074',
    loadChildren: () => import('./cot074/cot074.module').then( m => m.Cot074PageModule)
  },
  {
    path: 'cot075',
    loadChildren: () => import('./cot075/cot075.module').then( m => m.Cot075PageModule)
  },
  {
    path: 'cot076',
    loadChildren: () => import('./cot076/cot076.module').then( m => m.Cot076PageModule)
  },
  {
    path: 'cot077',
    loadChildren: () => import('./cot077/cot077.module').then( m => m.Cot077PageModule)
  },
  {
    path: 'nsc-select',
    loadChildren: () => import('./nsc-select/nsc-select.module').then( m => m.NscSelectPageModule)
  },
  {
    path: 'routensc',
    loadChildren: () => import('./routensc/routensc.module').then( m => m.RoutenscPageModule)
  },
  {
    path: 'elect-select',
    loadChildren: () => import('./elect-select/elect-select.module').then( m => m.ElectSelectPageModule)
  },
  {
    path: 'elect',
    loadChildren: () => import('./elect/elect.module').then( m => m.ElectPageModule)
  },
  {
    path: 'ipphoneselect',
    loadChildren: () => import('./ipphoneselect/ipphoneselect.module').then( m => m.IpphoneselectPageModule)
  },
  {
    path: 'ipphone',
    loadChildren: () => import('./ipphone/ipphone.module').then( m => m.IpphonePageModule)
  },
  {
    path: 'prichart',
    loadChildren: () => import('./prichart/prichart.module').then( m => m.PrichartPageModule)
  },
  {
    path: 'idcserv',
    loadChildren: () => import('./idcserv/idcserv.module').then( m => m.IdcservPageModule)
  },
  {
    path: 'idcselect',
    loadChildren: () => import('./idcselect/idcselect.module').then( m => m.IdcselectPageModule)
  },
  {
    path: 'ltgnsc1',
    loadChildren: () => import('./ltgnsc1/ltgnsc1.module').then( m => m.Ltgnsc1PageModule)
  },
  {
    path: 'ltgnsc2',
    loadChildren: () => import('./ltgnsc2/ltgnsc2.module').then( m => m.Ltgnsc2PageModule)
  },
  {
    path: 'gmap',
    loadChildren: () => import('./gmap/gmap.module').then( m => m.GmapPageModule)
  },
  {
    path: 'prikos',
    loadChildren: () => import('./prikos/prikos.module').then( m => m.PrikosPageModule)
  },
  {
    path: 'prirng',
    loadChildren: () => import('./prirng/prirng.module').then( m => m.PrirngPageModule)
  },
  {
    path: 'ipphonestat',
    loadChildren: () => import('./ipphonestat/ipphonestat.module').then( m => m.IpphonestatPageModule)
  },
  {
    path: 'tt',
    loadChildren: () => import('./tt/tt.module').then( m => m.TtPageModule)
  },
  {
    path: 'tt-detail',
    loadChildren: () => import('./tt-detail/tt-detail.module').then( m => m.TtDetailPageModule)
  },
  {
    path: 'siptotal',
    loadChildren: () => import('./siptotal/siptotal.module').then( m => m.SiptotalPageModule)
  },
  {
    path: 'detail-sip',
    loadChildren: () => import('./detail-sip/detail-sip.module').then( m => m.DetailSipPageModule)
  },
  {
    path: 'spc',
    loadChildren: () => import('./spc/spc.module').then( m => m.SpcPageModule)
  }

  
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
