import { Directive, EventEmitter, Output, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appDragDrop]",
})
export class DragDropDirective {
  @Output() dropped = new EventEmitter<any>();

  @HostBinding("style.opacity") private opacity = "1";

  //Dragover listener
  @HostListener("dragover", ["$event"]) onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = "0.6";
  }

  //Dragleave listener
  @HostListener("dragleave", ["$event"]) public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = "1";
  }

  //Drop listener
  @HostListener("drop", ["$event"]) public ondrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = "1";
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.dropped.emit(files);
    }
  }
}
