import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverBoxComponent } from './over-box.component';

describe('OverBoxComponent', () => {
  let component: OverBoxComponent;
  let fixture: ComponentFixture<OverBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
