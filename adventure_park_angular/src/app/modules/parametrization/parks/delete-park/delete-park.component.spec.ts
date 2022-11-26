import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteParkComponent } from './delete-park.component';

describe('DeleteParkComponent', () => {
  let component: DeleteParkComponent;
  let fixture: ComponentFixture<DeleteParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteParkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
