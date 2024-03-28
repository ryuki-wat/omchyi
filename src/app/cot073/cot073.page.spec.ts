import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cot073Page } from './cot073.page';

describe('Cot073Page', () => {
  let component: Cot073Page;
  let fixture: ComponentFixture<Cot073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cot073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cot073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
