import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss']
})
export class ModalComponent {
  @Input() width: number;
  @Input() openModal: boolean;
  @Input() disableClose = false;
  @Output() closeModal = new EventEmitter();

  constructor() {}

  clickClose(): any {
    this.closeModal.emit();
  }
}
