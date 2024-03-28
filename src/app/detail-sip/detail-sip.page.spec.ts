import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailSipPage } from './detail-sip.page';

describe('DetailSipPage', () => {
  let component: DetailSipPage;
  let fixture: ComponentFixture<DetailSipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailSipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
