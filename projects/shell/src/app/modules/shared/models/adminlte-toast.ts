export interface AdminLTEToastOptions {
  title?: string;
  body?: string;
  autohide?: boolean;
  delay?: number;
  class?: string;
}

export class AdminLTEToastOptions implements AdminLTEToastOptions {
  constructor(data: any = null) {
    this.title = data?.title || "";
  }
}
