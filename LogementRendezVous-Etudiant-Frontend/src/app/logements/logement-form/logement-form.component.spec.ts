import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogementFormComponent } from './logement-form.component';

describe('LogementFormComponent', () => {
  let component: LogementFormComponent;
  let fixture: ComponentFixture<LogementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogementFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
