import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'rp-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent {
  @Input() steps: FormArray | null = null;


  public get stepControls(): AbstractControl[] | undefined {
    return this.steps?.controls;
  }

}
