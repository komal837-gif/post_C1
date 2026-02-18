import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  emitLoadingStatus:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  emitLoadingStatus$:Observable<boolean> = this.emitLoadingStatus.asObservable()


  loadingStatus(flag:boolean){
    this.emitLoadingStatus.next(flag)
  }
}
