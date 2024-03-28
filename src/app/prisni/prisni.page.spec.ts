import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrisniPage } from './prisni.page';

describe('PrisniPage', () => {
  let component: PrisniPage;
  let fixture: ComponentFixture<PrisniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrisniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrisniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
