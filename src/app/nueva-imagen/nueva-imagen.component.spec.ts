import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaImagenComponent } from './nueva-imagen.component';

describe('NuevaImagenComponent', () => {
  let component: NuevaImagenComponent;
  let fixture: ComponentFixture<NuevaImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaImagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
