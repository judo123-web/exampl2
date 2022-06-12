import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAndCardComponent } from './popup-and-card.component';

describe('PopupAndCardComponent', () => {
  let component: PopupAndCardComponent;
  let fixture: ComponentFixture<PopupAndCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAndCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAndCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
