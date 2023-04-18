import { ApplicationRef, ComponentRef, EmbeddedViewRef, Injectable, Injector, ViewContainerRef } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CustomToastService {
  config: any = {
    component: null,
    msg: "Đây là nội dung thông báo của bạn.",
    timeout: 3000,
  };

  viewRef!: ViewContainerRef;

  constructor(private appRef: ApplicationRef, private injector: Injector) {}

  show(msg = "") {
    // 0. config component
    if (this.config.component == null) {
      console.log("Không tìm thấy component để toast");
      return;
    }

    this.appRef = this.injector.get(ApplicationRef);

    // 1. Create a component reference from the component
    const componentRef: ComponentRef<any> = this.viewRef.createComponent(this.config.component, {
      injector: this.injector,
    });
    // .resolveComponentFactory(this.config.component)
    // .create(this.injector);
    // let componentRef!: ViewContainerRef;
    // componentRef.createComponent(this.config.component);

    // let ViewContainerRef!: ViewContainerRef;
    // let componentRef: any = ViewContainerRef.createComponent(this.config.component);

    // console.log(componentRef);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    document.body.appendChild(domElem);
    componentRef.instance.msg = msg;

    // 5. Wait some time and remove it from the component tree and from the DOM
    setTimeout(() => {
      componentRef.instance.state = "removed";
      setTimeout(() => {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
      }, 400);
    }, this.config.timeout);
  }
}
