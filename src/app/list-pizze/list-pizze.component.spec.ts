import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPizzeComponent } from './list-pizze.component';

describe('ListPizzeComponent', () => {
  let component: ListPizzeComponent;
  let fixture: ComponentFixture<ListPizzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPizzeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPizzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
