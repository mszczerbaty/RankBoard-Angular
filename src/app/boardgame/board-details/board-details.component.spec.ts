import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDetailsComponent } from './board-details.component';

describe('BoardDetailsComponent', () => {
  let component: BoardDetailsComponent;
  let fixture: ComponentFixture<BoardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
