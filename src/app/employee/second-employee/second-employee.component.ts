import { Component, OnInit } from '@angular/core';
import { FireService } from "./../../services/fire.service";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-second-employee',
  templateUrl: './second-employee.component.html',
  styleUrls: ['./second-employee.component.scss']
})
export class SecondEmployeeComponent implements OnInit {
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
