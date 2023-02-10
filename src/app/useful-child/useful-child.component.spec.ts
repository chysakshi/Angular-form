import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulChildComponent } from './useful-child.component';

describe('UsefulChildComponent', () => {
  let component: UsefulChildComponent;
  let fixture: ComponentFixture<UsefulChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsefulChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsefulChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
