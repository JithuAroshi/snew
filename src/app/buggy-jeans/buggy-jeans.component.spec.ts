import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuggyJeansComponent } from './buggy-jeans.component';

describe('BuggyJeansComponent', () => {
  let component: BuggyJeansComponent;
  let fixture: ComponentFixture<BuggyJeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuggyJeansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuggyJeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
