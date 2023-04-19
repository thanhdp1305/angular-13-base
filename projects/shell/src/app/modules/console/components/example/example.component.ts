import { AfterViewInit, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { REGEXP_DATE_INPUT, REGEXP_EMAIL } from "../../../shared/constants/regexp";
import { ModalControl } from "../../../shared/services/modal-control.service";
import { ToastControlService } from "../../../shared/services/toast-control.service";

@Component({
  selector: "app-example",
  templateUrl: "./example.component.html",
  styleUrls: ["./example.component.scss"],
})
export class ExampleComponent implements OnInit, AfterViewInit {
  formDateInput!: FormGroup;
  //TABLES
  page = 1;
  totalRecords = 30;
  pageSize = 10;
  //Ng Select
  items = [
    { value: 1, label: "Giá trị 1" },
    { value: 2, label: "Giá trị 2" },
    { value: 3, label: "Giá trị 3" },
    { value: 4, label: "Giá trị 4" },
  ];
  selectedItem: any = null; //Giá trị mặc định của ng-select là null
  eventChangeSelected: any = null;

  constructor(private fb: FormBuilder, private modalcontrol: ModalControl, private toastControl: ToastControlService) {
    this.makeForm();
    this.makeFormValidation();
  }

  ngAfterViewInit(): void {
    //
  }

  ngOnInit(): void {
    //
  }

  makeForm() {
    this.formDateInput = this.fb.group({
      datepicker: ["", Validators.pattern(REGEXP_DATE_INPUT)],
      dateInputMask: ["", Validators.pattern(REGEXP_DATE_INPUT)],
      daterange: [""],
    });
  }

  /**
   * Mở popup thông báo
   */
  openModal() {
    this.modalcontrol.show({
      content: "btn_confirm",
      showConfirmButton: false,
      showCloseButton: true,
      confirmAction: () => {
        // this.toastControl.sweet2ToastNoti("Clicked Confirm Button", "success");
      },
      cancelAction: () => {
        // this.toastControl.sweet2ToastNoti("Clicked Cancel Button", "error");
      },
      additionalConfigNgbModal: {
        // backdrop: "static",
      },
    });
  }

  //VALIDATION FORM
  formValidation!: FormGroup;
  formValidationIsSubmit = false;
  validationError = {
    email: {
      required: "Vui lòng nhập email",
      pattern: "Sai định dạng email",
    },
  };

  /**
   * Khởi tạo form
   */
  makeFormValidation() {
    this.formValidation = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(REGEXP_EMAIL)]],
    });
  }

  /**
   * Submit form
   */
  submitFormValidation() {
    this.formValidationIsSubmit = true;
  }

  //Toast
  toast() {
    this.toastControl.adminLTEToast({
      title: "Thông báo",
      body: "Nội dung thông báo",
      autohide: true,
      delay: 1500,
    });
  }

  toastSweet2() {
    this.toastControl.swalToast({
      title: "Toast successfully",
      type: "success",
      timer: 1500,
    });
  }

  toastCopyClipboard(): void {
    this.toastControl.show("Copied Clipboard");
  }

  loadData(page: any) {
    this.page = page;
  }

  /**
   * Bắt sự kiện thay đổi giá trị trên ng-select
   * @param e giá trị trả về
   */
  handleEventNgSelect(e: any) {
    this.eventChangeSelected = e;
  }
}
