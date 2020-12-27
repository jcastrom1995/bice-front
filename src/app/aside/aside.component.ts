import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  public modal = false;

  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.modal = !this.modal;
    document.body.style.overflowY = this.modal ? 'hidden' : 'auto';
  }
}
