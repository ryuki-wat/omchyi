import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrirngPage } from './prirng.page';

describe('PrirngPage', () => {
  let component: PrirngPage;
  let fixture: ComponentFixture<PrirngPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrirngPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrirngPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
