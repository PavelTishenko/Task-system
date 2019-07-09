import { FireService } from "./../../services/fire.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-third-employee',
  templateUrl: './third-employee.component.html',
  styleUrls: ['./third-employee.component.scss']
})
export class ThirdEmployeeComponent implements OnInit {
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
