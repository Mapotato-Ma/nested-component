import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedComponentComponent } from './nested-component/nested-component.component';
import { ExpandAnimationDirective } from './expand-animation.directive';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NestedComponentComponent,
    ExpandAnimationDirective,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
