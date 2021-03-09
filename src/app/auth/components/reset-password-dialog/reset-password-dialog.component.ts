import { Component, OnInit } from '@angular/core';

type emailObj = { email: string };

@Component({
  selector: 'rp-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
  styleUrls: ['./reset-password-dialog.component.scss']
})
export class ResetPasswordDialogComponent {
  public resetEmailObj: emailObj = { email: '' };
}
