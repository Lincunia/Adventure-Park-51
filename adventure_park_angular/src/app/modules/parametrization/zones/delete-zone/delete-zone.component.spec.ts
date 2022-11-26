import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteZoneComponent } from './delete-zone.component';

describe('DeleteZoneComponent', () => {
  let component: DeleteZoneComponent;
  let fixture: ComponentFixture<DeleteZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
