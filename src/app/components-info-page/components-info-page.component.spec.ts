import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsInfoPageComponent } from './components-info-page.component';

describe('ComponentsInfoPageComponent', () => {
  let component: ComponentsInfoPageComponent;
  let fixture: ComponentFixture<ComponentsInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsInfoPageComponent],
    });
    fixture = TestBed.createComponent(ComponentsInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
