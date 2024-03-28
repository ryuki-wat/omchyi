import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PriylaPage } from './priyla.page';

describe('PriylaPage', () => {
  let component: PriylaPage;
  let fixture: ComponentFixture<PriylaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriylaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PriylaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
