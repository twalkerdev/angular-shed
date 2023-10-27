import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsFiveComponent } from './is-five.component';

describe('IsFiveComponent', () => {
  let component: IsFiveComponent;
  let fixture: ComponentFixture<IsFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IsFiveComponent],
    });
    fixture = TestBed.createComponent(IsFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
