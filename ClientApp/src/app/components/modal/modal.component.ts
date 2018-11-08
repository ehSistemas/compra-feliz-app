import { Component, Input, Output, EventEmitter, trigger, state, style, animate, transition } from '@angular/core';

@Component({
  selector: 'component-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
      trigger('aberto', [
          state('in', style({ opacity: 1 })),
          state('void', style({ opacity: 0 })),
          transition('* => *', animate('200ms'))
      ])
  ]
})
export class ModalComponent {

  aberto: boolean = false;
  ocultaBotao: boolean;
  objeto: any;

  @Input() titulo: string = "";
  @Input() mensagem: string = "";
  @Output() fechandoModalEvent: EventEmitter<void> = new EventEmitter<void>();
  
  abrirModal(titulo: string, mensagem: string = '',  ocultaBotao: boolean = false): void {
    this.titulo = titulo;
    this.mensagem = mensagem;
    this.ocultaBotao = ocultaBotao;

    this.aberto = true;
  }

  fecharModal(): void {
    this.aberto = false;
    this.fechandoModalEvent.emit();
  }

  
}
