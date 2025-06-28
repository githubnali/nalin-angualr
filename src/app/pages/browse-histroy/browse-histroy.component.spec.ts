import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseHistroyComponent } from './browse-histroy.component';

describe('BrowseHistroyComponent', () => {
  let component: BrowseHistroyComponent;
  let fixture: ComponentFixture<BrowseHistroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseHistroyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseHistroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
