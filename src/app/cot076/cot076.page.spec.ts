import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cot076Page } from './cot076.page';

describe('Cot076Page', () => {
  let component: Cot076Page;
  let fixture: ComponentFixture<Cot076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cot076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cot076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
