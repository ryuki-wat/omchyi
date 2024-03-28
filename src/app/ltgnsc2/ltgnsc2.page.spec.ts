import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ltgnsc2Page } from './ltgnsc2.page';

describe('Ltgnsc2Page', () => {
  let component: Ltgnsc2Page;
  let fixture: ComponentFixture<Ltgnsc2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ltgnsc2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ltgnsc2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
