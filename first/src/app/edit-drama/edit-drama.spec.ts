import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDrama } from './edit-drama';

describe('EditDrama', () => {
  let component: EditDrama;
  let fixture: ComponentFixture<EditDrama>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDrama],
    }).compileComponents();

    fixture = TestBed.createComponent(EditDrama);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
