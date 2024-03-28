import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pri565kPage } from './pri565k.page';

describe('Pri565kPage', () => {
  let component: Pri565kPage;
  let fixture: ComponentFixture<Pri565kPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pri565kPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pri565kPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
