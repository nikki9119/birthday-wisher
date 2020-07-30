import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { About, BasicDetails, Wish, Full } from '../models/wish.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WishTransportService {

  wishes: Observable<Full[]>;
  wishesRef: AngularFirestoreCollection<Full>;
  constructor( private firestore: AngularFirestore ) { }

  addWish(about:About, basicDetails:BasicDetails, wish:Wish){
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("birthdayWish")
          .add({
            name:basicDetails.name,
            gender:basicDetails.gender,
            whenKnown:about.whenKnown=="Other"? about.whenKnownSpecify:about.whenKnown,
            //rememberMet:about.rememberMet=="yes"?true:false,
            howMet:about.howMet,
            //hasNickname:about.hasNickname=="yes"?true:false,
            nickname:about.nickname,
            likedThings:about.likedThings,
            bestMemory:about.bestMemory,
            wish:wish.wish
          })
          .then(res => resolve('Success'), err => reject(err));
    });
  }

  getAll(){
    this.wishesRef = this.firestore.collection<Full>("birthdayWish");
    return this.wishesRef.valueChanges();
    }
}
