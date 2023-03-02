import { BuildingContactComponent } from './building-contact/building-contact.component';
import { DoorsComponent } from './doors/doors.component';
import { BuildingsWorkWithComponent } from './buildings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdateBuildingComponent } from './update-building/update-building.component';
import { CreateBuildingComponent } from './create-building/create-building.component';
import { DeleteBuildingComponent } from './delete-building/delete-building.component';
import { BuildingsRoutingModule } from './buildings-routing.module';

@NgModule({
  declarations: [
    BuildingsWorkWithComponent,
    CreateBuildingComponent,
    UpdateBuildingComponent,
    DeleteBuildingComponent,
    DoorsComponent,
    BuildingContactComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    BuildingsRoutingModule,
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
    Ng2SearchPipeModule,
  ],
})
export class BuildingsModule {}
