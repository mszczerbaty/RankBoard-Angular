import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreTileComponent } from './score-tile.component';

describe('ScoreTileComponent', () => {
  let component: ScoreTileComponent;
  let fixture: ComponentFixture<ScoreTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
