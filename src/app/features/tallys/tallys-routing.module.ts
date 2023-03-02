import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TallysComponent } from './tallys.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    component: TallysComponent,
    children: [{ path: 'tallys/add', component: CreateComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TallysRoutingModule {}
