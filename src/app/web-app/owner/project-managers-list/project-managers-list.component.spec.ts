import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagersListComponent } from './project-managers-list.component';

describe('ProjectManagersListComponent', () => {
  let component: ProjectManagersListComponent;
  let fixture: ComponentFixture<ProjectManagersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
