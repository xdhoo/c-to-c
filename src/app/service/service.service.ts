import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class ServiceService {

  private users = new BehaviorSubject<any>('jhon');
  cast = this.users.asObservable();
  constructor() {
  }

  EditUser(newName){
    this.users.next(newName);
  }

}
