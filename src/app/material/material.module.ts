import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatAutocompleteModule,
  ],
  exports: [
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatAutocompleteModule,
  ],
})
export class MaterialModule {
}
