import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcontactoComponent } from './editcontacto.component';

describe('EditcontactoComponent', () => {
  let component: EditcontactoComponent;
  let fixture: ComponentFixture<EditcontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcontactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
