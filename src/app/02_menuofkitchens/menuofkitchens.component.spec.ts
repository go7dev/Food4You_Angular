import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuofkitchensComponent } from './menuofkitchens.component';

describe('MenuofkitchensComponent', () => {
  let component: MenuofkitchensComponent;
  let fixture: ComponentFixture<MenuofkitchensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuofkitchensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuofkitchensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
