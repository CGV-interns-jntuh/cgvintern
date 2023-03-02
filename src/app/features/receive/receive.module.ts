import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiveRoutingModule } from './receive-routing.module';
import { ReceiveComponent } from './receive.component';
import { InboundStagingComponent } from './inbound-staging/inbound-staging.component';
import { InboundPutawayComponent } from './inbound-putaway/inbound-putaway.component';
import { InboundOnestepComponent } from './inbound-onestep/inbound-onestep.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    ReceiveComponent,
    InboundStagingComponent,
    InboundPutawayComponent,
    InboundOnestepComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReceiveRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    FlexLayoutModule,
    MatGridListModule
  ]
})
export class ReceiveModule { }
