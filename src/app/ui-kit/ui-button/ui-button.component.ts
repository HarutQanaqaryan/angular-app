import { Component, EventEmitter, Input, Output } from '@angular/core';

type buttonTypes =
  | 'login-user_btn'
  | 'claims-head_btn create-mobile'
  | 'create-new-claim cancel'
  | 'login-user_btn';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string;
  @Input() iconSrc: string;
  @Input() color: string;
  @Input() btnClass: buttonTypes = 'login-user_btn';
  @Input() isDisabled = false;
  @Output() btnClick = new EventEmitter();

  constructor() {}

  onClick() {
    this.btnClick.emit();
  }
}
