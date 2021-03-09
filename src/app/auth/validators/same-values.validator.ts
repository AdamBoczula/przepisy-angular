import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function SameValuesValidator(comparedValueControl: AbstractControl | null,
                                    errorMsg: string = 'value are not the same'): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const errorObj = {};
    // @ts-ignore
    errorObj[errorMsg] = true;
    if (!comparedValueControl) {
      return errorObj;
    }
    const value = control.value;
    const valueToCompare = comparedValueControl.value;

    return value === valueToCompare
      ? null
      : errorObj;
  };
}
