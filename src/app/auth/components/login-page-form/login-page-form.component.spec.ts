// import { Component, DebugElement } from '@angular/core';
// import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { LoginPageFormComponent } from './login-page-form.component';
//
// describe('LoginPageFormComponent', () => {
//   let component: TestLoginPageForm;
//   let loginPageFormDebugElement: DebugElement;
//   let fixture: ComponentFixture<TestLoginPageForm>;
//   let loginPageComponent: LoginPageFormComponent;
//
//   beforeEach(
//     waitForAsync(() => {
//       TestBed.configureTestingModule({
//         declarations: [TestLoginPageForm, LoginPageFormComponent],
//       });
//
//       TestBed.compileComponents();
//     })
//   );
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(TestLoginPageForm);
//     component = fixture.componentInstance;
//     loginPageFormDebugElement = fixture.debugElement.query(
//       By.css('rp-login-page-form')
//     );
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//     expect(loginPageFormDebugElement).toBeTruthy();
//   });
//
//   it('should call login on submit when credentials are provided', () => {
//     loginPageComponent = loginPageFormDebugElement.injector.get<LoginPageFormComponent>(
//       LoginPageFormComponent
//     );
//     loginPageComponent.form.get('username')?.setValue('admin');
//     loginPageComponent.form.get('password')?.setValue('123');
//     loginPageComponent.loginEmail();
//     expect(component.onLogin).toHaveBeenCalled();
//   });
//
//   it('should not call login event on submit when credentials are not provided', () => {
//     loginPageComponent = loginPageFormDebugElement.injector.get<LoginPageFormComponent>(
//       LoginPageFormComponent
//     );
//     loginPageComponent.form.get('username')?.setValue(null);
//     loginPageComponent.form.get('password')?.setValue(null);
//     loginPageComponent.loginEmail();
//     expect(component.onLogin).not.toHaveBeenCalled();
//   });
// });
//
// @Component({
//   template: ` <rp-login-page-form (login)="onLogin()"> </rp-login-page-form> `,
// })
// class TestLoginPageForm {
//   public onLogin = jasmine.createSpy();
// }
