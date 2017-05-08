import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGitusersComponent } from './search-gitusers.component';

describe('SearchGitusersComponent', () => {
  let component: SearchGitusersComponent;
  let fixture: ComponentFixture<SearchGitusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGitusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGitusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
