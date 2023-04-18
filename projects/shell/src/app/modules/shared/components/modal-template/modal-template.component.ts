import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-modal-template",
  templateUrl: "./modal-template.component.html",
  styleUrls: ["./modal-template.component.scss"],
})
export class ModalTemplateComponent implements OnInit, AfterContentChecked, AfterViewInit {
  @Input() title = "modal_title_noti";
  @Input() type = "";
  @Input() content: any = "";
  @Input() showConfirmButton = false;
  @Input() cancelButtonTitle: string = this.translate.instant("btn_close");
  @Input() cancelButtonIcon = "";
  @Input() cancelAction: any;
  @Input() confirmButtonTitle: string = this.translate.instant("btn_ok");
  @Input() confirmButtonIcon = "";
  @Input() confirmAction: any;
  @Input() showCloseButton = false;

  constructor(
    public activeModal: NgbActiveModal,
    private changeDetector: ChangeDetectorRef,
    private translate: TranslateService,
  ) {}

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  ngOnInit() {
    this.changeDetector.detectChanges();
  }

  ngAfterViewInit() {
    this.changeDetector.detectChanges();
  }

  get contentHTML() {
    return this.translate.instant(this.content);
  }

  handleClickCancelButton() {
    if (this.cancelAction instanceof Function) {
      this.cancelAction();
    }
  }

  handleClickConfirmButton() {
    if (this.confirmAction instanceof Function) {
      this.confirmAction();
    }
  }
}
