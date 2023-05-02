import {Component} from '@angular/core';
import {ProjectDialogComponent} from "../project-dialog.component";
import {ProjectForm} from "../project-form/project-form";

@Component({
  selector: 'app-edit-project-dialog',
  templateUrl: '../project-dialog.component.html',
  styleUrls: ['../project-dialog.component.less'],
  providers: [ProjectForm]
})
export class EditProjectDialogComponent extends ProjectDialogComponent {
  handleButtonText = 'Aggiorna';

  override ngOnInit() {
    this.projectForm.name?.setValue(this.data.project.name);
    this.projectForm.description?.setValue(this.data.project.description);

    let projectManager = this.data.project.project_manager;
    let projectManagerId = typeof projectManager === 'object' && 'id' in projectManager ? projectManager.id : projectManager;
    this.projectForm.projectManager?.setValue(projectManagerId);

    this.projectForm.employees?.setValue(this.data.project.employees?.map(
        (employee: any) => typeof employee === 'object' && 'id' in employee ? employee.id : employee
      )
    );


    super.ngOnInit();
  }

  override handleProject(): void {
    if (!this.projectForm.form.valid) {
      this.projectForm.form.markAllAsTouched();
      this.projectForm.form.setErrors({'backendErrors': null});
      return;
    }

    this.projectService.updateProject(this.data.project.id, this.formToProject()).subscribe({
      next: (project: any) => {
        this.handledProject.emit(project);
        this.dialogRef.close();
      },
      error: (error: any) => {
        this.error.emit(error);
      }
    });
  }
}
