import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ltgnsc1Page } from './ltgnsc1.page';

describe('Ltgnsc1Page', () => {
  let component: Ltgnsc1Page;
  let fixture: ComponentFixture<Ltgnsc1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ltgnsc1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ltgnsc1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
