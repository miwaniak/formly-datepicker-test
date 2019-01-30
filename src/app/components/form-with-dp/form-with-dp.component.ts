import { Component, OnInit } from "@angular/core";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-form-with-dp",
  templateUrl: "./form-with-dp.component.html",
  styleUrls: ["./form-with-dp.component.scss"]
})
export class FormWithDpComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: "Datepicker",
      type: "datepicker",
      templateOptions: {
        label: "Datepicker",
        placeholder: "Placeholder",
        description: "Description",
        required: true
      }
    }
  ];

  constructor() {}

  ngOnInit() {}
}
