import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NscSelectPage } from './nsc-select.page';

describe('NscSelectPage', () => {
  let component: NscSelectPage;
  let fixture: ComponentFixture<NscSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NscSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NscSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
