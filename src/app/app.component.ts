import { DataStoreService } from './shared/data-store.service';
import { FireService } from "./services/fire.service";
import { Observable } from "rxjs";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Component, OnInit } from "@angular/core";
import { Datas } from "./Datas";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  courses: Observable<any[]>;
  dataTo: Datas = {
    name: null,
    position: null,
    tz: null,
    date: null,
    id: null
  };
  triger: boolean = false;
  collection: AngularFirestoreCollection<Datas>;
  constructor(
    private db: FireService,
    private firestore: AngularFirestore,
    private shared: DataStoreService) {
    this.courses = db.getData();
    this.collection = this.firestore.collection("demo-courses");
    this.shared.dataAll = db.getData();
  }

  ngOnInit() {}

  addData() {
    const dateNow = Date.now();
    this.dataTo.date = dateNow;
    const myData = Object.assign({}, this.dataTo);
    this.db.addDatas(myData);
  }

  delete(id: string) {
    this.triger = !this.triger;
    this.firestore.doc("demo-courses/" + id).delete();
  }
}
