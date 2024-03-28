import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TtPage } from './tt.page';

describe('TtPage', () => {
  let component: TtPage;
  let fixture: ComponentFixture<TtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
