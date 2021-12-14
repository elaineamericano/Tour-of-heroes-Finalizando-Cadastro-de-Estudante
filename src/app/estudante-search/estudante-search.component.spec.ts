import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudanteSearchComponent } from './estudante-search.component';

describe('EstudanteSearchComponent', () => {
  let component: EstudanteSearchComponent;
  let fixture: ComponentFixture<EstudanteSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudanteSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudanteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
