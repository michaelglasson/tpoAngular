import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TposComponent } from './tpos.component';

describe('TposComponent', () => {
  let component: TposComponent;
  let fixture: ComponentFixture<TposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
