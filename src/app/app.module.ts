import { FireService } from "./services/fire.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "src/environments/environment";
import { FirstEmployeeComponent } from './employee/first-employee/first-employee.component';
import { SecondEmployeeComponent } from './employee/second-employee/second-employee.component';
import { ThirdEmployeeComponent } from './employee/third-employee/third-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstEmployeeComponent,
    SecondEmployeeComponent,
    ThirdEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
