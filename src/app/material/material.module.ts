import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [MatInputModule, MatProgressSpinnerModule, MatButtonModule],
  exports: [MatInputModule, MatProgressSpinnerModule, MatButtonModule],
})
export class MaterialModule {}
