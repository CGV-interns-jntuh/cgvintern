import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingsWorkWithComponent } from './buildings.component';
const routes: Routes = [
  {
    path: 'building',
    component: BuildingsWorkWithComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildingsRoutingModule {}
