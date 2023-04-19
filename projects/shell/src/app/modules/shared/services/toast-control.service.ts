import { Injectable, TemplateRef } from "@angular/core";
import { CustomToastTemplateComponent } from "../components/custom-toast-template/custom-toast-template.component";
import { AdminLTEToastOptions } from "../models/adminlte-toast";
import { SwalToastOptions } from "../models/swal-toast";
import { CustomToastService } from "./custom-toast.service";

declare let $: any;
declare let Swal: any;

@Injectable({ providedIn: "root" })
export class ToastControlService {
  toasts: any[] = [];

  constructor(private customToastService: CustomToastService) {}

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }

  /**
   * Show Toast with AdminLTE Toast Jquery
   * About AdminLTE Toast: https://adminlte.io/themes/v3/pages/UI/modals.html
   * @param options AdminLTEToastOptions
   */
  adminLTEToast(options: AdminLTEToastOptions): void {
    $(document).Toasts("create", {
      title: options.title || "",
      body: options.body || "",
      autohide: options.autohide || false,
      delay: options.delay || null,
      class: options.class || "",
    });
  }

  /**
   * Show Toast with sweetalert2.
   * About sweetalert2: https://sweetalert2.github.io/
   * @param options SwalToastOptions.
   */
  swalToast(
    options: SwalToastOptions = {
      position: "center",
      type: "",
      title: "",
      showConfirmButton: false,
      timer: null,
      customClass: {
        header: "border-0",
      },
    },
  ): void {
    Swal.fire({
      position: options.position || "center",
      type: options.type || "",
      title: options.title || "",
      showConfirmButton: options.showConfirmButton || false,
      timer: options.timer || null,
      customClass: options.customClass || {
        header: "border-0",
      },
    });
  }

  toastCopiedClipboard(msg = "Đây là nội dung thông báo của bạn.") {
    this.customToastService.config.component = CustomToastTemplateComponent;
    this.customToastService.config.msg = msg;
    this.customToastService.config.timeout = 1500;
    this.customToastService.show(msg);
  }
}
