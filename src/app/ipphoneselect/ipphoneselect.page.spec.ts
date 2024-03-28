import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IpphoneselectPage } from './ipphoneselect.page';

describe('IpphoneselectPage', () => {
  let component: IpphoneselectPage;
  let fixture: ComponentFixture<IpphoneselectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpphoneselectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IpphoneselectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
