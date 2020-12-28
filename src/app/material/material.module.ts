import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [MatInputModule, MatProgressSpinnerModule],
  exports: [MatInputModule, MatProgressSpinnerModule],
})
export class MaterialModule {}
