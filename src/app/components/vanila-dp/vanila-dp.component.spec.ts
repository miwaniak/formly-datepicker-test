import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VanilaDpComponent } from "./vanila-dp.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe("VanilaDpComponent", () => {
  let component: VanilaDpComponent;
  let fixture: ComponentFixture<VanilaDpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NoopAnimationsModule
      ],
      declarations: [VanilaDpComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanilaDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render date picker", () => {
    expect(fixture).toMatchSnapshot();
  });
});
