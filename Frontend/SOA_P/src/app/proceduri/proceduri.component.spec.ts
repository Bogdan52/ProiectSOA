import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduriComponent } from './proceduri.component';

describe('ProceduriComponent', () => {
  let component: ProceduriComponent;
  let fixture: ComponentFixture<ProceduriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceduriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceduriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
