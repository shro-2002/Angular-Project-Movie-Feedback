import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors  | null {
  if (control.value as string) {
    const hasUpperCase = /[A-Z]/.test(control.value);
    const hasLowerCase = /[a-z]/.test(control.value);
    const hasDigit = /[0-9]/.test(control.value);
    const isLengthValid = control.value.length >= 8;

    // Check if the password meets the conditions
    if (!hasUpperCase || !hasLowerCase || !hasDigit || !isLengthValid) {
      return { 'invalidPassword': true };
    }
  }

  return null; // Password is valid
}
