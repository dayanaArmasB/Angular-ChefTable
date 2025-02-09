import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderSticksComponent } from './loader-sticks.component';

describe('LoaderSticksComponent', () => {
  let component: LoaderSticksComponent;
  let fixture: ComponentFixture<LoaderSticksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderSticksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderSticksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
