import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SnackbarI } from '../models';

@Injectable()
export class ManageErrorService {
  public openSnackbar = new Subject<SnackbarI>();
  constructor() {}

  activeSnackbar(title = null, message = null, status = null, errorMode = null) {
    this.openSnackbar.next({
      title: title ? title : 'Error de sistema',
      message: message ? message : 'No se a realizado la operación, por favor intente nuevamente',
      status: status ? status : true,
      errorMode: errorMode ? errorMode : true
    });
  }
}
