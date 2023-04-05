import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Api } from '../shared/networks/api';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { ModalTemplateComponent } from './components/modal-template/modal-template.component';
import { ToastTemplateComponent } from './components/toast-template/toast-template.component';
import { IDatetimepickerComponent } from './components/i-datetimepicker/i-datetimepicker.component';
import { IDateinputComponent } from './components/i-dateinput/i-dateinput.component';
import { IDaterangepickerComponent } from './components/i-daterangepicker/i-daterangepicker.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DragDropDirective } from './directives/drag-drop.directive';
import { CodeblockViewerComponent } from './components/codeblock-viewer/codeblock-viewer.component';
import { CustomToastTemplateComponent } from './components/custom-toast-template/custom-toast-template.component';

@NgModule({
  declarations: [
    FormErrorComponent,
    ToastTemplateComponent,
    ModalTemplateComponent,
    IDatetimepickerComponent,
    IDateinputComponent,
    IDaterangepickerComponent,
    DragDropDirective,
    CodeblockViewerComponent,
    CustomToastTemplateComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    TranslateModule,
    NgSelectModule,
    NgbDropdownModule,
  ],
  providers: [
    Api
  ],
  exports: [
    FormErrorComponent,
    ToastTemplateComponent,
    IDatetimepickerComponent,
    IDateinputComponent,
    IDaterangepickerComponent,
    DragDropDirective,
    CodeblockViewerComponent
  ]
})
export class SharedModule { }
