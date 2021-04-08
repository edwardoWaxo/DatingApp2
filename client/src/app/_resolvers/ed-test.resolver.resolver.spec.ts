import { TestBed } from '@angular/core/testing';

import { EdTest.ResolverResolver } from './ed-test.resolver.resolver';

describe('EdTest.ResolverResolver', () => {
  let resolver: EdTest.ResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EdTest.ResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
