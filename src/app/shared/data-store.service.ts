import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  dataAll: Observable<any[]>;
  constructor() { }
}
