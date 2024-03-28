import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrikosPage } from './prikos.page';

describe('PrikosPage', () => {
  let component: PrikosPage;
  let fixture: ComponentFixture<PrikosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrikosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
