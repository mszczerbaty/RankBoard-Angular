import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionFormComponent } from './extension-form.component';

describe('ExtensionFormComponent', () => {
  let component: ExtensionFormComponent;
  let fixture: ComponentFixture<ExtensionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
