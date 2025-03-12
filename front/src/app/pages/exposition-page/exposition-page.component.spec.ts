import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpositionPageComponent } from './exposition-page.component';

describe('ExpositionPageComponent', () => {
  let component: ExpositionPageComponent;
  let fixture: ComponentFixture<ExpositionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpositionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpositionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
