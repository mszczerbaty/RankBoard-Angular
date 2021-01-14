import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotGamesComponent } from './hot-games.component';

describe('HotGamesComponent', () => {
  let component: HotGamesComponent;
  let fixture: ComponentFixture<HotGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
