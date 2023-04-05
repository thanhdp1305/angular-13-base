import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalTemplateComponent } from "../components/modal-template/modal-template.component";
import { ModalType } from "../configs/enums";
import { StatusCodeEnum } from "../configs/status-code";

@Injectable({
    providedIn: 'root'
})
export class ModalControl {

    constructor(
        private modalService: NgbModal
    ) {}

    showAlert(msg: any, type: any, twoBtn = false, iconBtn2 = '', titleBtn2 = "btn_ok", actBtn2 = () => { }, iconBtn1 = '', titleBtn1 = "btn_cancel", actBtn1 = () => { }, title: string = "modal_title_noti", config = {}) {
        const modalRef = this.modalService.open(ModalTemplateComponent, config);
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = msg;
        modalRef.componentInstance.typeAlert = type;
        modalRef.componentInstance.twoBtn = twoBtn;
        modalRef.componentInstance.iconBtn1 = iconBtn1;
        modalRef.componentInstance.iconBtn2 = iconBtn2;
        modalRef.componentInstance.titleButton1 = titleBtn1;
        modalRef.componentInstance.titleButton2 = titleBtn2;
        modalRef.componentInstance.callback1 = actBtn1;
        modalRef.componentInstance.callback2 = actBtn2;
    }

    showAlertNoClose(msg: any, type: any, iconBtn = '', titleBtn = "btn_ok", actBtn = () => { }, title: string = "modal_title_noti") {
        const modalRef = this.modalService.open(ModalTemplateComponent, {backdrop: 'static'});
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = msg;
        modalRef.componentInstance.typeAlert = type;
        modalRef.componentInstance.twoBtn = false;
        modalRef.componentInstance.iconBtn2 = iconBtn;
        modalRef.componentInstance.titleButton2 = titleBtn;
        modalRef.componentInstance.callback2 = actBtn;
        modalRef.componentInstance.noClose = true;
    }

    showAlertOnlyNoti(msg: any, type: any, iconBtn = '', titleBtn = "btn_close", actBtn = () => { }, title: string = "modal_title_noti", config = {}, 
        close = () => {}, dimiss = () => {}) {
        const modalRef = this.modalService.open(ModalTemplateComponent, config);
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = msg;
        modalRef.componentInstance.typeAlert = type;
        modalRef.componentInstance.twoBtn = false;
        modalRef.componentInstance.iconBtn2 = iconBtn;
        modalRef.componentInstance.titleButton2 = titleBtn;
        modalRef.componentInstance.callback2 = actBtn;
        modalRef.componentInstance.noClose = false;
        modalRef.result.then((result) => {
            if (close) {
                close();
            }
        }, (reason) => {
            if (dimiss) {
                dimiss();
            }
        });
    }

    //MARK: Handle Error
    showErrorHandled(err: any, errorMsg: any = StatusCodeEnum) {
        if (err.error && err.error.error && JSON.stringify(err.error.error).toLowerCase() === "access denied") {
            this.showAlertOnlyNoti("default_error", ModalType.error);
        } else if (err.error && err.error.code && errorMsg[err.error.code]) {
            this.showAlertOnlyNoti(errorMsg[err.error.code], ModalType.error);
        } else if (err.error && err.error.message && errorMsg[err.error.message]) {
            this.showAlertOnlyNoti(errorMsg[err.error.message], ModalType.error);
        }  else if (err.error && err.error.error) {
            this.showAlertOnlyNoti(err.error.error?.toString(), ModalType.error);
        } else {
            this.showAlertOnlyNoti("default_error", ModalType.error);
        }
    }
}