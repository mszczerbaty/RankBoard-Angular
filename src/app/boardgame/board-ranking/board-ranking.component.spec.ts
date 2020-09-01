import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRankingComponent } from './board-ranking.component';

describe('BoardRankingComponent', () => {
  let component: BoardRankingComponent;
  let fixture: ComponentFixture<BoardRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
