import { CommonModule } from '@angular/common';
import { HelloWorldContainerComponent } from './hello-world.container';
import { NgModule } from '@angular/core';
import { HelloWorldThreeContainerComponent } from './hello-world-three.container';
import { HelloWorldTwoContainerComponent } from './hello-world-two.container';
import { HelloWorldComponent } from '@dashboard-widgets/hello-world/hello-world.component';

@NgModule({
    declarations: [ HelloWorldComponent, HelloWorldContainerComponent, HelloWorldThreeContainerComponent, HelloWorldTwoContainerComponent],
    imports: [CommonModule ],
    entryComponents: [HelloWorldContainerComponent, HelloWorldThreeContainerComponent]
  })
export class HelloWordModule {
    static entryComponents = {HelloWorldContainerComponent, HelloWorldThreeContainerComponent};
}
