import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualsComponent } from './quals.component';

describe('QualsComponent', () => {
  let component: QualsComponent;
  let fixture: ComponentFixture<QualsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
