import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cot075Page } from './cot075.page';

describe('Cot075Page', () => {
  let component: Cot075Page;
  let fixture: ComponentFixture<Cot075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cot075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cot075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
