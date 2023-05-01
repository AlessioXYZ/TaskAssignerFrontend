import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';


@Injectable()
export class ProjectForm {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        projectManager: ['', Validators.required],
        employees: [''],
      },
    );
  }

  get name() {
    return this.form.get('name');
  }

  get description() {
    return this.form.get('description');
  }

  get company() {
    return this.form.get('company');
  }

  get projectManager() {
    return this.form.get('projectManager');
  }

  get employees() {
    return this.form.get('employees');
  }
}

