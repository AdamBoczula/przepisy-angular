import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Credentials } from '../../models';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: TestLoginPage;
  let fixture: ComponentFixture<TestLoginPage>;
  let loginPageDebugElement: DebugElement;
  let loginPageComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestLoginPage, LoginPageComponent],
      });

      TestBed.compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLoginPage);
    component = fixture.componentInstance;
    loginPageDebugElement = fixture.debugElement.query(By.css('rp-login-page'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch login action with credentials while submit', () => {
    loginPageComponent = loginPageDebugElement.injector.get<LoginPageComponent>(
      LoginPageComponent
    );
    loginPageComponent.loginAction({
      username: 'admin',
      password: '123',
    } as Credentials);
  });

  it('should not dispatch login action with credentials is empty while submit', () => {
    loginPageComponent = loginPageDebugElement.injector.get<LoginPageComponent>(
      LoginPageComponent
    );
    loginPageComponent.loginAction({
      username: null,
      password: null,
    } as Credentials);
  });
});
@Component({
  template: `<rp-login-page></rp-login-page>`,
})
class TestLoginPage {
  public onLogin = jasmine.createSpy();
}
