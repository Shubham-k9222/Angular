import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfacechartComponent } from './surfacechart.component';

describe('SurfacechartComponent', () => {
  let component: SurfacechartComponent;
  let fixture: ComponentFixture<SurfacechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurfacechartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurfacechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
