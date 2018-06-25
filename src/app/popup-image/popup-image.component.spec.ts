import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupImageComponent } from './popup-image.component';

describe('PopupImageComponent', () => {
  let component: PopupImageComponent;
  let fixture: ComponentFixture<PopupImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
