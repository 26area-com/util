import {OptionalUtil} from '../../src';

function getOrElse(value: any): any {
  return OptionalUtil.orElse(value, 1);
}

describe('orElse', () => {
  it('If value is undefined return default value', () => {
    let orElseResult = getOrElse(undefined);
    expect(orElseResult).toEqual(1);
  });

  it('If value is not undefined return that value', () => {
    let orElseResult = getOrElse(2);
    expect(orElseResult).toEqual(2);
  });
});
