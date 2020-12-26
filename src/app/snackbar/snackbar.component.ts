import { Component, OnDestroy, OnInit } from '@angular/core';
import { SnackbarI } from '../models';
import { ManageErrorService } from '../services';

@Component({
  selector: 'app-snackbar',
  templateUrl: 'snackbar.component.html',
  styleUrls: ['snackbar.component.scss']
})
export class SnackbarComponent implements OnInit, OnDestroy {
  public snackbar: SnackbarI;

  constructor(private manageErrorSerivce: ManageErrorService) {}

  ngOnInit(): void {
    this.manageErrorSerivce.openSnackbar.subscribe((snackbar) => {
      this.snackbar = snackbar;
      if (this.snackbar.status) {
        setTimeout(() => (this.snackbar.status = false), 4000);
      }
    });
  }

  closeSnackbar(): void {
    this.snackbar.status = false;
  }

  ngOnDestroy(): void {
    if (this.manageErrorSerivce.activeSnackbar) {
      this.manageErrorSerivce.openSnackbar.unsubscribe();
    }
  }
}
