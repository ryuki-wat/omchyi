import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IpphonePage } from './ipphone.page';

describe('IpphonePage', () => {
  let component: IpphonePage;
  let fixture: ComponentFixture<IpphonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpphonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IpphonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
