import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { createCustomElement } from '@angular/elements';
import { TestBodyComponent } from './test-body/test-body.component';

const APP_NAME = 'thkim'

const LIBRARY_LIST = [
  AppComponent,
  FormComponent,
  TestBodyComponent,
]

@NgModule({
  declarations: LIBRARY_LIST,
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: LIBRARY_LIST,
})
// export class AppModule { }

// define injector for creating custom element
export class AppModule {
    constructor(private injector: Injector) {
      const elList = [
        {
        'name': 'root',
        'element': createCustomElement(AppComponent, {injector: this.injector})
        },
        {
        'name': 'form',
        'element': createCustomElement(FormComponent, {injector: this.injector})
        },
        {
        'name': 'test-body',
        'element': createCustomElement(TestBodyComponent, {injector: this.injector})
        }
      ]

      elList.map( (el) => {
        customElements.define(APP_NAME + '-' + el.name, el.element)
      })
    }
    ngDoBootstrap() {}
}
