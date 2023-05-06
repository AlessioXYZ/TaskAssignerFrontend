import { Injectable } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CreateTaskForm {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _router: Router) {
    this.form = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        project: ['', Validators.required],
        employee: ['', Validators.required],
        estimated_minutes: ['', Validators.required],
        due_date: ['', Validators.required],
      },
    );
  }

  get name() {
    return this.form.get('name');
  }

  get description() {
    return this.form.get('description');
  }

  get project() {
    return this.form.get('project');
  }

  get estimatedMinutes() {
    return this.form.get('estimated_minutes');
  }

  get dueDate() {
    return this.form.get('due_date');
  }
}
