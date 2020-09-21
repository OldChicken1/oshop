import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs-compat/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll(){
    return this.db.list('/categories', {
      query: {
        orderByChild: 'name'
      }
    });
  }
  // getAll() {
  //   return this.db
  //     .list('categories', reference => reference.orderByChild('name'))
  //     .snapshotChanges() // include snapshot itself (access to key property)
  //     .pipe(map(metadata => metadata.map(data => ({ key: data.payload.key, ...data.payload.val() }))));
  // }
}
