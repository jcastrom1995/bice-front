import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'dateFromNow' })
export class DateFromNowPipe implements PipeTransform {
  transform(value: any) {
    moment.locale('es');
    const dateLinking = moment(value * 1000);
    const now = moment();
    if (now.isSame(dateLinking, 'day')) {
      return dateLinking.fromNow();
    } else {
      return dateLinking.format('DD-MM-YYYY');
    }
  }
}
