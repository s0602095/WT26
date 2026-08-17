import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDrama } from './add-drama';

describe('AddDrama', () => {
  let component: AddDrama;
  let fixture: ComponentFixture<AddDrama>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDrama],
    }).compileComponents();

    fixture = TestBed.createComponent(AddDrama);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
