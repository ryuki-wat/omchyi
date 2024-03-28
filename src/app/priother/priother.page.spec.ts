import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PriotherPage } from './priother.page';

describe('PriotherPage', () => {
  let component: PriotherPage;
  let fixture: ComponentFixture<PriotherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriotherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PriotherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
