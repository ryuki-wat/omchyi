import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoutenscPage } from './routensc.page';

describe('RoutenscPage', () => {
  let component: RoutenscPage;
  let fixture: ComponentFixture<RoutenscPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutenscPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoutenscPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
