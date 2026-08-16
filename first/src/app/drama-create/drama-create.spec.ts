import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaCreate } from './drama-create';

describe('DramaCreate', () => {
  let component: DramaCreate;
  let fixture: ComponentFixture<DramaCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DramaCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(DramaCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
