import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IpphonestatPage } from './ipphonestat.page';

describe('IpphonestatPage', () => {
  let component: IpphonestatPage;
  let fixture: ComponentFixture<IpphonestatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpphonestatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IpphonestatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
