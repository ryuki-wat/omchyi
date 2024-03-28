import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpcPage } from './spc.page';

describe('SpcPage', () => {
  let component: SpcPage;
  let fixture: ComponentFixture<SpcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
