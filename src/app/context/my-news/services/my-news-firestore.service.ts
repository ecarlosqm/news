import { Injectable } from '@angular/core';
import { QuerySnapshot } from "@firebase/firestore-types";
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from '@angular/fire/firestore';
import { MyNewsService } from '../domain/my-news.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { MyNews } from '../domain/my_news';
import { map } from 'rxjs/internal/operators/map';

@Injectable()
export class MyNewsFirestoreService implements MyNewsService {

  readonly collectionPath: string = 'my-news';

  private _myNews: BehaviorSubject<MyNews[]> = new BehaviorSubject<MyNews[]>([]);

  constructor(private firestore: AngularFirestore) {

  }

  getMyNews(userId: string): Observable<MyNews[]> {
    return this.firestore.collection<any>(this.collectionPath, (ref: CollectionReference) => ref.where("userId", "==", userId)).valueChanges().pipe(map((primitivesArray: any, index: number) => {
      return primitivesArray.map((primitives: any) => MyNews.fromPrimitives(primitives))
    }));
  }

  async addNews(news: MyNews): Promise<void> {
    await this.firestore.collection(this.collectionPath).doc(news.id).set(news.toPrimitives());
  }

  async removeNews(id: string): Promise<void> {
    await this.firestore.collection(this.collectionPath).doc(id).delete();
  }

}
