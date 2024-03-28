import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrinrtPage } from './prinrt.page';

describe('PrinrtPage', () => {
  let component: PrinrtPage;
  let fixture: ComponentFixture<PrinrtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinrtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrinrtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
