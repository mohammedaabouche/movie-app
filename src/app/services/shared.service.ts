// SharedService
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private sharedValueSource = new BehaviorSubject<string>('Initial Value');
  sharedValue$ = this.sharedValueSource.asObservable();
   data: any;
  updateSharedValue(newValue: string) {
    this.sharedValueSource.next(newValue);
    console.log('updateSharedValue', newValue);
    console.log('updateSharedValue', this.sharedValueSource);
    console.log('updateSharedValue', this.sharedValue$);
    this.data = newValue;
  }
  getSharedValue() {
    console.log('getSharedValue', this.data);
    return this.sharedValue$;
  }
}
