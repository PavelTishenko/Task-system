import { FireService } from "./../../services/fire.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-first-employee",
  templateUrl: "./first-employee.component.html",
  styleUrls: ["./first-employee.component.scss"]
})
export class FirstEmployeeComponent implements OnInit {
  dataArr: Observable<any[]>;
  triger: boolean = false;
  constructor(
    private service: FireService,
    private firestore: AngularFirestore
  ) {
    this.dataArr = this.service.getData();
  }

  ngOnInit() {}

  delete(id: string) {
    this.firestore.doc("demo-courses/" + id).delete();
  }
}
