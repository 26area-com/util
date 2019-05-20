import {ListUtil} from '../../src';
import {List} from 'immutable';

describe('forAll', () => {
  it('If all is even, return true', () => {
    const forAllResult = ListUtil.forAll(List([2, 4, 6, 8]), n => n % 2 === 0);
    expect(forAllResult).toEqual(true);
  });

  it('If all is not even, return true', () => {
    const forAllResult = ListUtil.forAll(List([1, 4, 6, 8]), n => n % 2 === 0);
    expect(forAllResult).toEqual(false);
  });
});
