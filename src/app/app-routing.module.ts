import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBodyComponent } from './02_mainBody/mainBody.component';
// import { LegalComponent } from './7_legal/legal.component';

const routes: Routes = [
  { path: '', component: MainBodyComponent }, 
  // { path: 'legal', component: LegalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
