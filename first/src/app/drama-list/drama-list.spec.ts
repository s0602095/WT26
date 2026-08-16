import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaList } from './drama-list';

describe('DramaList', () => {
  let component: DramaList;
  let fixture: ComponentFixture<DramaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DramaList],
    }).compileComponents();

    fixture = TestBed.createComponent(DramaList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
