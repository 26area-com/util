import {DateTimeUtil} from '../../src';

describe('isBefore', () => {
  it('Compare same time, return false', () => {
    const date = new Date();
    const isBefore = DateTimeUtil.isBefore(date, date);

    expect(isBefore).toEqual(false)
  });

  it('Compare 9:00 and 10:00 return true', () => {
    const date1 = new Date(1989, 1, 20, 9, 0);
    const date2 = new Date(1989, 1, 20, 10, 0);
    const isBefore = DateTimeUtil.isBefore(date1, date2);

    expect(isBefore).toEqual(true)
  });

  it('Compare 10:00 and 9:00 return true', () => {
    const date1 = new Date(1989, 1, 20, 9, 0);
    const date2 = new Date(1989, 1, 20, 10, 0);
    const isBefore = DateTimeUtil.isBefore(date2, date1);

    expect(isBefore).toEqual(false)
  });
});

describe('isBeforeOrAt', () => {
  it('Compare same time, return true', () => {
    const date = new Date();
    const isBefore = DateTimeUtil.isBeforeOrAt(date, date);

    expect(isBefore).toEqual(true)
  });

  it('Compare 9:00 and 10:00 return true', () => {
    const date1 = new Date(1989, 1, 20, 9, 0);
    const date2 = new Date(1989, 1, 20, 10, 0);
    const isBefore = DateTimeUtil.isBeforeOrAt(date1, date2);

    expect(isBefore).toEqual(true)
  });

  it('Compare 10:00 and 9:00 return true', () => {
    const date1 = new Date(1989, 1, 20, 9, 0);
    const date2 = new Date(1989, 1, 20, 10, 0);
    const isBefore = DateTimeUtil.isBeforeOrAt(date2, date1);

    expect(isBefore).toEqual(false)
  });
});
