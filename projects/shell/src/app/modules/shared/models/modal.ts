export interface ModalOptions {
  title?: string;
  content?: any | HTMLDivElement;
  type?: string;
  showConfirmButton?: boolean;
  cancelButtonTitle?: string;
  cancelButtonIcon?: string;
  cancelAction?: (...args: any) => void;
  confirmButtonTitle?: string;
  confirmButtonIcon?: string;
  confirmAction?: (...args: any) => void;
  showCloseButton?: boolean;
  additionalConfigNgbModal?: any;
}
