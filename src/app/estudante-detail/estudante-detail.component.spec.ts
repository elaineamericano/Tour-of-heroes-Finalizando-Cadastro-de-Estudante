import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudanteDetailComponent } from './estudante-detail.component';

describe('EstudanteDetailComponent', () => {
  let component: EstudanteDetailComponent;
  let fixture: ComponentFixture<EstudanteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudanteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudanteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
