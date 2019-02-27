import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiterComponent } from './regiter.component';

describe('RegiterComponent', () => {
  let component: RegiterComponent;
  let fixture: ComponentFixture<RegiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
