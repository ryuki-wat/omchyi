import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdcservPage } from './idcserv.page';

describe('IdcservPage', () => {
  let component: IdcservPage;
  let fixture: ComponentFixture<IdcservPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdcservPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdcservPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
