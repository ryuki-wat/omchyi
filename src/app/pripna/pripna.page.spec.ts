import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PripnaPage } from './pripna.page';

describe('PripnaPage', () => {
  let component: PripnaPage;
  let fixture: ComponentFixture<PripnaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PripnaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PripnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
