import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrinwtPage } from './prinwt.page';

describe('PrinwtPage', () => {
  let component: PrinwtPage;
  let fixture: ComponentFixture<PrinwtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinwtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrinwtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
