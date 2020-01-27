import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrecordlistComponent } from './adminrecordlist.component';

describe('AdminrecordlistComponent', () => {
  let component: AdminrecordlistComponent;
  let fixture: ComponentFixture<AdminrecordlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminrecordlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrecordlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
