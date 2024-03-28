import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrikbiPage } from './prikbi.page';

describe('PrikbiPage', () => {
  let component: PrikbiPage;
  let fixture: ComponentFixture<PrikbiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikbiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrikbiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
