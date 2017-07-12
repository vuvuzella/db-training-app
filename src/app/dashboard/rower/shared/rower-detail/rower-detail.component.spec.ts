import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowerDetailComponent } from './rower-detail.component';

describe('RowerDetailComponent', () => {
  let component: RowerDetailComponent;
  let fixture: ComponentFixture<RowerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
