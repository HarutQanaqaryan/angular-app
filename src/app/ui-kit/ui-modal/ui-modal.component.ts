import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/models/products';

@Component({
  selector: 'ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.scss'],
})
export class ModalComponent {
  @Input() product: IProduct;
  @Output() close = new EventEmitter();

  onClose() {
    this.close.emit();
  }
}
