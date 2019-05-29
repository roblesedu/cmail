export class FormValidate {
  //static não precisa instaciar a classe

  static validateForm(form) {
    for(let nameControl in form.controls) {
      form.controls[nameControl].markAsTouched();
    }
  }
}