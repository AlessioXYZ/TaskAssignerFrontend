import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskExpansionPanelComponent } from './task-expansion-panel.component';

describe('TaskExpansionPanelComponent', () => {
  let component: TaskExpansionPanelComponent;
  let fixture: ComponentFixture<TaskExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskExpansionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
