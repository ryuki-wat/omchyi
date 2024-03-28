import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cot074Page } from './cot074.page';

describe('Cot074Page', () => {
  let component: Cot074Page;
  let fixture: ComponentFixture<Cot074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cot074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cot074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
