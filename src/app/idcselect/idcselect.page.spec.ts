import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdcselectPage } from './idcselect.page';

describe('IdcselectPage', () => {
  let component: IdcselectPage;
  let fixture: ComponentFixture<IdcselectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdcselectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdcselectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
