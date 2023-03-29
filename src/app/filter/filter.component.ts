import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;

  selectedRadio: string = 'All';

  @Output()
  filterSelectionChange: EventEmitter<string> = new EventEmitter<string>();

  onRadioChange() {
    this.filterSelectionChange.emit(this.selectedRadio);
    // console.log(this.selectedRadio);
  }
}
