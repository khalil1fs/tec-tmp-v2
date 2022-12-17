import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MaterialModule} from 'src/app/module/view/shared/material.module';
import {SharedModule} from 'src/app/module/view/shared/shared.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {NgApexchartsModule} from 'ng-apexcharts';
import {ComponentsModule} from 'src/app/module/view/shared/components/components.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {RendezVousRoutingModule} from './rendez-vous-routing-module';
import {RendezVousAddComponent} from './rendez-vous-add/rendez-vous-add.component';
import {RendezVousEditComponent} from './rendez-vous-edit/rendez-vous-edit.component';
import {RendezVousListComponent} from './rendez-vous-list/rendez-vous-list.component';
import {RendezVousViewComponent} from './rendez-vous-view/rendez-vous-view.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatRippleModule} from '@angular/material/core';
@NgModule({
  declarations: [
    RendezVousAddComponent,
    RendezVousEditComponent,
    RendezVousViewComponent,
    RendezVousListComponent,


  ],
  imports: [
    RendezVousRoutingModule,

    CommonModule,
    MatMenuModule,
    MaterialModule,
    SharedModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule,
    MatDialogModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgApexchartsModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSortModule,

    ],

})
export class RendezVousModule {}