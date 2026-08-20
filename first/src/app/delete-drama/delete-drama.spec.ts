import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDrama } from './delete-drama';

describe('DeleteDrama', () => {
  let component: DeleteDrama;
  let fixture: ComponentFixture<DeleteDrama>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDrama],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteDrama);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
