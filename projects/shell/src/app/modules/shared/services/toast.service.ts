import { Injectable, TemplateRef } from "@angular/core";
import { CustomToastTemplateComponent } from "../components/custom-toast-template/custom-toast-template.component";
import { CustomToastService } from "./custom-toast.service";

declare var $: any;
declare var toastr: any;

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  constructor(private customToastService: CustomToastService) {
    
  }

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }

  jqueryToastAdminLte(title: string, subTitle: string, delay: any = 2500, className: string = "") {
    $(document).Toasts('create', {
      title: title,
      body: subTitle,
      autohide: true,
      delay: delay || 1500,
      class: className || ''
    })
  }

  /**
   * Sweet 2 Toast only noti (no button)
   * @param title Title
   * @param icon success, error, warning
   * @param position center-center, top-end, top-start, bottom-end, bottom-start
   * @param timer default: 1500ms (1.5s)
   */
  sweet2ToastNoti(title: string, icon: string = '', position: string = 'center', timer: any = 1500) {
    Swal.fire({
      position: position,
      type: icon,
      title: title,
      showConfirmButton: false,
      timer: timer,
      customClass: {
        header: "border-0"
      }
    })
  }
  sweet3ToastNoti(title: string, icon: string = '', position: string = 'center', timer: any = 3000) {
    Swal.fire({
      position: position,
      type: icon,
      title: title,
      showConfirmButton: false,
      timer: timer,
      customClass: {
        header: "border-0"
      }
    })
  }

  toastCopiedClipboard(msg = "Đây là nội dung thông báo của bạn.") {
    this.customToastService.config.component = CustomToastTemplateComponent;
    this.customToastService.config.msg = msg;
    this.customToastService.config.timeout = 1500;
    this.customToastService.show(msg);
  }
}