import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TableComponent} from './table/table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LayoutModule} from '@angular/cdk/layout';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ToggleSidenavComponent} from './toggle-sidenav/toggle-sidenav.component';
import {StatsComponent} from './stats/stats.component';
import {DialogEditSubjectComponent} from './dialog-edit-subject/dialog-edit-subject.component';
import {DialogEditStudentComponent} from './dialog-edit-student/dialog-edit-student.component';
import {DialogDeleteSubjectComponent} from './dialog-delete-subject/dialog-delete-subject.component';
import {DialogDeleteStudentComponent} from './dialog-delete-student/dialog-delete-student.component';
import { DialogAddStudentComponent } from './dialog-add-student/dialog-add-student.component';
import { DialogAddSubjectComponent } from './dialog-add-subject/dialog-add-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ToolbarComponent,
    ToggleSidenavComponent,
    StatsComponent,
    DialogEditSubjectComponent,
    DialogEditStudentComponent,
    DialogDeleteSubjectComponent,
    DialogDeleteStudentComponent,
    DialogAddStudentComponent,
    DialogAddSubjectComponent,
  ],
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonToggleModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  entryComponents: [
    DialogEditSubjectComponent,
    DialogDeleteStudentComponent,
    DialogDeleteSubjectComponent,
    DialogEditStudentComponent,
    DialogAddStudentComponent,
    DialogAddSubjectComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
