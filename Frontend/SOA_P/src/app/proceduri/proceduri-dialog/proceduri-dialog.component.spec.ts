import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduriDialogComponent } from './proceduri-dialog.component';

describe('ProceduriDialogComponent', () => {
  let component: ProceduriDialogComponent;
  let fixture: ComponentFixture<ProceduriDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceduriDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceduriDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
