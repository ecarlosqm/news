import { Pipe, PipeTransform } from '@angular/core';
import { isObservable, of, Observable, from } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';
import { isPromise } from '@angular/compiler/src/util';

@Pipe({
  name: 'loadingObserbable'
})
export class LoadingObserbablePipe implements PipeTransform {

  transform<T>(val: Observable<T> | Promise<T>): Observable<{ loading: boolean; value: T, error: any; }> {



    if (isObservable(val)) {

      return val.pipe(
        map((value: any) => ({
          loading: value === null,
          value: value,
          error: null,
        })),
        startWith({ loading: true, value: null, error: null }),
        catchError(error => of({ loading: false, value: null, error }))
      );

    }

    console.error('promise')


    if(isPromise(val)){
      console.error('promise')
      return from(val).pipe(
        map((value: any) => ({
          loading: value === null,
          value: value,
          error: null,
        })),
        startWith({ loading: true, value: null, error: null }),
        catchError(error => of({ loading: false, value: null, error }))
      );
    }

  }

}
