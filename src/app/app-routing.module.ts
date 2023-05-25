import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FrontPageComponent } from './1_front-page/front-page.component';
// import { LegalComponent } from './7_legal/legal.component';

const routes: Routes = [
  // { path: '', component: FrontPageComponent }, 
  // { path: 'legal', component: LegalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
