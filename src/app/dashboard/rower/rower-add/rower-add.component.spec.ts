import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowerAddComponent } from './rower-add.component';

describe('RowerAddComponent', () => {
  let component: RowerAddComponent;
  let fixture: ComponentFixture<RowerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
