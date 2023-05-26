import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMenuComponent } from './TabMenu.component';

describe('TabMenuComponent', () => {
  let component: TabMenuComponent;
  let fixture: ComponentFixture<TabMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
