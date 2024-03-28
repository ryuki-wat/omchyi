import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PripktPage } from './pripkt.page';

describe('PripktPage', () => {
  let component: PripktPage;
  let fixture: ComponentFixture<PripktPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PripktPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PripktPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
