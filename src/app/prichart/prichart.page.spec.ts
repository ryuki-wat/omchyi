import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrichartPage } from './prichart.page';

describe('PrichartPage', () => {
  let component: PrichartPage;
  let fixture: ComponentFixture<PrichartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrichartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrichartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
