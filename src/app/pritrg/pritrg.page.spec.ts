import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PritrgPage } from './pritrg.page';

describe('PritrgPage', () => {
  let component: PritrgPage;
  let fixture: ComponentFixture<PritrgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PritrgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PritrgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
