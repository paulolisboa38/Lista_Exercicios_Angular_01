import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio06Component } from './exercicio06.component';

describe('Exercicio06Component', () => {
  let component: Exercicio06Component;
  let fixture: ComponentFixture<Exercicio06Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercicio06Component]
    });
    fixture = TestBed.createComponent(Exercicio06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
