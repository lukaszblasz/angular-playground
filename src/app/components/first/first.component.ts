import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  @Input() prop1!: string
  @Output() handleTriggerAlert = new EventEmitter<any>();

  triggerAlert(event: Event) {
    this.handleTriggerAlert.emit({prop1: this.prop1, event})
  }
}
