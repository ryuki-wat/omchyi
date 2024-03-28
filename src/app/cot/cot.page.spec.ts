import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CotPage } from './cot.page';

describe('CotPage', () => {
  let component: CotPage;
  let fixture: ComponentFixture<CotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
