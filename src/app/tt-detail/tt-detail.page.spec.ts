import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TtDetailPage } from './tt-detail.page';

describe('TtDetailPage', () => {
  let component: TtDetailPage;
  let fixture: ComponentFixture<TtDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TtDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
