import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PricpnPage } from './pricpn.page';

describe('PricpnPage', () => {
  let component: PricpnPage;
  let fixture: ComponentFixture<PricpnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricpnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PricpnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
