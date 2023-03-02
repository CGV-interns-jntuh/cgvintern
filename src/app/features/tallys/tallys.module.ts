import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TallysRoutingModule } from './tallys-routing.module';
import { TallysComponent } from './tallys.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { CreateComponent } from './create/create.component';
import { CommentsComponent } from './comments/comments.component';
import { MaintainComponent } from './maintain/maintain.component';
import { MaintainReadComponent } from './maintain-read/maintain-read.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdateComponent } from './update/update.component';
import { TallyPostingComponent } from './tally-posting/tally-posting.component';
import { TallyDetailWorkComponent } from './tally-detail-work/tally-detail-work.component';
import { TallyInquiryComponent } from './tally-inquiry/tally-inquiry.component';
import { TallyDetailCommentsComponent } from './tally-detail-comments/tally-detail-comments.component';
import { TallyEventComponent } from './tally-event/tally-event.component';
import { TallyDetailDeleteComponent } from './tally-detail-delete/tally-detail-delete.component';
import { TallyDetailUpdateComponent } from './tally-detail-update/tally-detail-update.component';
import { TallyDetailPutawayLocationComponent } from './tally-detail-putaway-location/tally-detail-putaway-location.component';
import { TallyPutawayUpdateComponent } from './tally-putaway-update/tally-putaway-update.component';

@NgModule({
  declarations: [TallysComponent, CreateComponent, CommentsComponent, MaintainComponent, MaintainReadComponent, UpdateComponent, TallyPostingComponent, TallyDetailWorkComponent, TallyInquiryComponent, TallyDetailCommentsComponent, TallyEventComponent, TallyDetailDeleteComponent, TallyDetailUpdateComponent, TallyDetailPutawayLocationComponent, TallyPutawayUpdateComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    TallysRoutingModule,
    MatListModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatToolbarModule,
    MatInputModule,
    Ng2SearchPipeModule
  ],
})
export class TallysModule {}
