import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionTileComponent } from './extension-tile.component';

describe('ExtensionTileComponent', () => {
  let component: ExtensionTileComponent;
  let fixture: ComponentFixture<ExtensionTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensionTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
