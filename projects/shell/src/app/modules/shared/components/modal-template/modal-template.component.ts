import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss']
})
export class ModalTemplateComponent implements OnInit {

  @Input() title: string = 'Thông báo';
  @Input() typeAlert: string = '';
  @Input() message: string = '';
  @Input() twoBtn: boolean = false;
  @Input() iconBtn1: string = '';
  @Input() iconBtn2: string = '';
  @Input() titleButton1: string = this.translate.instant('btn_cancel');
  @Input() titleButton2: string = this.translate.instant('btn_ok');
  @Input() callback1: any;
  @Input() callback2: any;
  @Input() noClose: boolean = false;

  imgAlert = {
    'success': '/assets/img/icon/success-icon.png',
    'error': '/assets/img/icon/error-icon.png'
  }

  constructor(
    public activeModal: NgbActiveModal, 
    private changeDetector: ChangeDetectorRef,
    private translate: TranslateService) {}
  
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
  
  ngOnInit() {
    this.changeDetector.detectChanges();
  }

  ngAfterViewInit() {
    this.changeDetector.detectChanges();
  }

  actButton1() {
    if (this.callback1 instanceof Function) {
      this.callback1();
    }
  }

  actButton2() {
    if (this.callback2 instanceof Function) {
      this.callback2();
    }
  }

}
