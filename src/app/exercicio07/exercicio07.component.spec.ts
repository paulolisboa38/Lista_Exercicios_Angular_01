import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio07Component } from './exercicio07.component';

describe('Exercicio07Component', () => {
  let component: Exercicio07Component;
  let fixture: ComponentFixture<Exercicio07Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercicio07Component]
    });
    fixture = TestBed.createComponent(Exercicio07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});