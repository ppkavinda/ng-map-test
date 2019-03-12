import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  getUsers() {
    return this.db.collection('users').valueChanges();
  }
  getPoints() {
    // return this.db.list('users').g
  }

}
