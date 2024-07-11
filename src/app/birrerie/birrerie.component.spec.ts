import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirrerieComponent } from './birrerie.component';

describe('BirrerieComponent', () => {
  let component: BirrerieComponent;
  let fixture: ComponentFixture<BirrerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirrerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirrerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
