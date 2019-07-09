import { ThirdEmployeeComponent } from './employee/third-employee/third-employee.component';
import { SecondEmployeeComponent } from './employee/second-employee/second-employee.component';
import { FirstEmployeeComponent } from './employee/first-employee/first-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'Pavlo', component: FirstEmployeeComponent},
  {path:'Kiril', component: SecondEmployeeComponent},
  {path:'Evgeniy', component: ThirdEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
