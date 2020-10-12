import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  names = ['User 1', 'User 2', 'User 3'];

  constructor() {}
}
