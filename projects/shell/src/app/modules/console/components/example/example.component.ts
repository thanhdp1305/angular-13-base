import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGEXP_DATE_INPUT, REGEXP_EMAIL } from '../../../shared/configs/regexp';
import { ModalControl } from '../../../shared/services/modal-control.service';
import { ToastService } from '../../../shared/services/toast.service';

declare var $: any;
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit, AfterViewInit {

  formDateInput!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalcontrol: ModalControl,
    private toastControl: ToastService
  ) { 
    this.makeForm();
    this.makeFormValidation();
  }
  
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
  }

  makeForm() {
    this.formDateInput = this.fb.group({
      datepicker: ['', Validators.pattern(REGEXP_DATE_INPUT)],
      dateInputMask: ['', Validators.pattern(REGEXP_DATE_INPUT)],
      daterange: [''],
    })
  }

  /**
   * Mở popup thông báo
   */
  openModal() {
    this.modalcontrol.showAlert("Test open notification modal", "", true);
  }

  //VALIDATION FORM
  formValidation!: FormGroup;
  formValidationIsSubmit = false;
  validationError = {
    email: {
      required: "Vui lòng nhập email",
      pattern: "Sai định dạng email"
    }
  };

  /**
   * Khởi tạo form
   */
  makeFormValidation() {
    this.formValidation = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(REGEXP_EMAIL)]]
    })
  }

  /**
   * Submit form
   */  
  submitFormValidation() {
    this.formValidationIsSubmit = true;
  }


  //Toast
  toast() {
    this.toastControl.jqueryToastAdminLte("Thông báo", "Nội dung thông báo");
  }

  toastSweet2() {
    this.toastControl.sweet2ToastNoti("Your work has been saved", 'success');
  }
  
  //TABLES
  page = 1;
  totalRecords = 30;
  pageSize = 10;
  loadData(page: any) {
    this.page = page;
  }

  //Ng Select
  items = [
    { value: 1, label: "Giá trị 1" },
    { value: 2, label: "Giá trị 2" },
    { value: 3, label: "Giá trị 3" },
    { value: 4, label: "Giá trị 4" }
  ];
  selectedItem: any = null; //Giá trị mặc định của ng-select là null
  eventChangeSelected: any = null;

  /**
   * Bắt sự kiện thay đổi giá trị trên ng-select
   * @param e giá trị trả về
   */
  handleEventNgSelect(e: any) {
    this.eventChangeSelected = e;
  }
} 
