import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvendorproductComponent } from './addvendorproduct.component';

describe('AddvendorproductComponent', () => {
  let component: AddvendorproductComponent;
  let fixture: ComponentFixture<AddvendorproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvendorproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvendorproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
