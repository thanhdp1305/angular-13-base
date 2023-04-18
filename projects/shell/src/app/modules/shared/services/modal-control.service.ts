import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalTemplateComponent } from "../components/modal-template/modal-template.component";
import { StatusCodeEnum } from "../enums/status-code";
import { ModalType } from "../enums/modal";
import { ModalOptions } from "../models/modal";

@Injectable({
  providedIn: "root",
})
export class ModalControl {
  constructor(private modalService: NgbModal) {}

  show(
    options: ModalOptions = {
      title: "modal_title_noti",
      type: ModalType.BLANK,
      content: "",
      showConfirmButton: false,
      cancelButtonIcon: "",
      cancelButtonTitle: "btn_close",
      cancelAction: () => {
        //
      },
      confirmButtonIcon: "",
      confirmButtonTitle: "btn_ok",
      confirmAction: () => {
        //
      },
      showCloseButton: true,
      additionalConfigNgbModal: null,
    },
  ): void {
    const config = { ...options.additionalConfigNgbModal, centered: true };
    const modalRef = this.modalService.open(ModalTemplateComponent, config);
    modalRef.componentInstance.title = options.title || "modal_title_noti";
    modalRef.componentInstance.content = options.content || "";
    modalRef.componentInstance.type = options.type || ModalType.BLANK;
    modalRef.componentInstance.showConfirmButton = options.showConfirmButton || false;
    modalRef.componentInstance.cancelButtonIcon = options.cancelButtonIcon || "";
    modalRef.componentInstance.cancelButtonTitle = options.cancelButtonTitle || "btn_close";
    modalRef.componentInstance.cancelAction = options.cancelAction || null;
    modalRef.componentInstance.confirmButtonIcon = options.confirmButtonIcon || "";
    modalRef.componentInstance.confirmButtonTitle = options.confirmButtonTitle || "btn_ok";
    modalRef.componentInstance.confirmAction = options.confirmAction || null;
    modalRef.componentInstance.showCloseButton = options.showCloseButton;
  }

  //MARK: Handle Error
  // showErrorHandled(err: any, errorMsg: any = StatusCodeEnum) {
  //   if (err.error && err.error.error && JSON.stringify(err.error.error).toLowerCase() === "access denied") {
  //     this.showAlertOnlyNoti("default_error", ModalType.ERROR);
  //   } else if (err.error && err.error.code && errorMsg[err.error.code]) {
  //     this.showAlertOnlyNoti(errorMsg[err.error.code], ModalType.ERROR);
  //   } else if (err.error && err.error.message && errorMsg[err.error.message]) {
  //     this.showAlertOnlyNoti(errorMsg[err.error.message], ModalType.ERROR);
  //   } else if (err.error && err.error.error) {
  //     this.showAlertOnlyNoti(err.error.error?.toString(), ModalType.ERROR);
  //   } else {
  //     this.showAlertOnlyNoti("default_error", ModalType.ERROR);
  //   }
  // }
}
