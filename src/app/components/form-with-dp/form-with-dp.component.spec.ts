import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";
import { FormWithDpComponent } from "./form-with-dp.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";
import { FormlyMatDatepickerModule } from "@ngx-formly/material/datepicker";
describe("FormWithDpComponent", () => {
  let component: FormWithDpComponent;
  let fixture: ComponentFixture<FormWithDpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NoopAnimationsModule,
        MatNativeDateModule,
        FormlyModule.forRoot(),
        FormlyMaterialModule,
        FormlyMatDatepickerModule
      ],
      declarations: [FormWithDpComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render", () => {
    const fixture = TestBed.createComponent(FormWithDpComponent);
    fixture.detectChanges();
    const copiledComp = fixture.debugElement.nativeElement;
    expect(copiledComp.querySelector("mat-label").textContent).toContain(
      "Datepicker"
    );
  });
});
