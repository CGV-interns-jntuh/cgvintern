import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboundOnestepComponent } from './inbound-onestep/inbound-onestep.component';
import { InboundPutawayComponent } from './inbound-putaway/inbound-putaway.component';
import { InboundStagingComponent } from './inbound-staging/inbound-staging.component';
import { ReceiveComponent } from './receive.component';

const routes: Routes = [
  { path: '',
    component: ReceiveComponent,
    children: [
      { path: 'staging',    component: InboundStagingComponent },
      { path: 'putaway', component: InboundPutawayComponent },
      { path: 'onestep',    component: InboundOnestepComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiveRoutingModule { }
