import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationUnComponent } from './illustration-un.component';

describe('IllustrationUnComponent', () => {
  let component: IllustrationUnComponent;
  let fixture: ComponentFixture<IllustrationUnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllustrationUnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
