import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElectSelectPage } from './elect-select.page';

describe('ElectSelectPage', () => {
  let component: ElectSelectPage;
  let fixture: ComponentFixture<ElectSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElectSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
