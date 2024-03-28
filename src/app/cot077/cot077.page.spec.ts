import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cot077Page } from './cot077.page';

describe('Cot077Page', () => {
  let component: Cot077Page;
  let fixture: ComponentFixture<Cot077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cot077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cot077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
