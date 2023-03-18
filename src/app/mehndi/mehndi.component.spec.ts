import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MehndiComponent } from './mehndi.component';

describe('MehndiComponent', () => {
  let component: MehndiComponent;
  let fixture: ComponentFixture<MehndiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MehndiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MehndiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
