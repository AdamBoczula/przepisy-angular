import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundContentWrapperComponent } from './background-content-wrapper.component';

describe('BackgroundContentWrapperComponent', () => {
  let component: BackgroundContentWrapperComponent;
  let fixture: ComponentFixture<BackgroundContentWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundContentWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundContentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
