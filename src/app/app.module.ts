import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormWithDpComponent } from "./components/form-with-dp/form-with-dp.component";
import { FormlyMatDatepickerModule } from "@ngx-formly/material/datepicker";
import {
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";
import { VanilaDpComponent } from './components/vanila-dp/vanila-dp.component';
@NgModule({
  declarations: [AppComponent, FormWithDpComponent, VanilaDpComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
