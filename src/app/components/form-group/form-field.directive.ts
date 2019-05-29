import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[cmailFormField]'
})

export class FormFieldDirective implements OnInit {
  
  //lifecycle hooks - momentos  que acontecem no componente pós constructor. Ex: OnInit

  //o TS cria uma propriedade do elemento para ser instanciado via private
  constructor(private element: ElementRef) {}

  ngOnInit(){
    //HTMLINputElement acessa os elementos do input nativamente
    let inputs:HTMLInputElement = this.element.nativeElement;

    if(!inputs.name) throw new Error('Para usar a diretiva cmailFormField, um atributo name deve ser definido')

    inputs.placeholder = ' ';
    inputs.classList.add("mdl-textfield__input");
    inputs.id = inputs.name;
  }
}