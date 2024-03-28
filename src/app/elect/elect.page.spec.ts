import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElectPage } from './elect.page';

describe('ElectPage', () => {
  let component: ElectPage;
  let fixture: ComponentFixture<ElectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
