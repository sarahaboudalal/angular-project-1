import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchValue: string = '';
  // changeSearchValue(e: Event) {
  //   // console.log((<HTMLInputElement>e.target).value);
  //   this.searchValue = (<HTMLInputElement>e.target).value;
  //   // console.log(this.searchValue);
  // }
  @Output()
  inputChange: EventEmitter<string> = new EventEmitter<string>();

  onTextChange() {
    this.inputChange.emit(this.searchValue);
  }
}
