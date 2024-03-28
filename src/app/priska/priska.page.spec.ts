import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PriskaPage } from './priska.page';

describe('PriskaPage', () => {
  let component: PriskaPage;
  let fixture: ComponentFixture<PriskaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriskaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PriskaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
