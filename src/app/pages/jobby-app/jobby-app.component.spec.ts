import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobbyAppComponent } from './jobby-app.component';

describe('JobbyAppComponent', () => {
  let component: JobbyAppComponent;
  let fixture: ComponentFixture<JobbyAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobbyAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobbyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
