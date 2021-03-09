import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
  ],
})
export class MaterialModule {
}
