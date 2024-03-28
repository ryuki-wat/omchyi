import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiptotalPage } from './siptotal.page';

describe('SiptotalPage', () => {
  let component: SiptotalPage;
  let fixture: ComponentFixture<SiptotalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiptotalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiptotalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
