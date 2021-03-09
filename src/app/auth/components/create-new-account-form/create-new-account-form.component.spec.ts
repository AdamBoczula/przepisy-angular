import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewAccountFormComponent } from './create-new-account-form.component';

describe('CreateNewAccountFormComponent', () => {
  let component: CreateNewAccountFormComponent;
  let fixture: ComponentFixture<CreateNewAccountFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewAccountFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
