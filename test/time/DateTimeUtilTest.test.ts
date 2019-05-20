import {DateTimeUtil} from '../../src';

describe('getTimeString', () => {
  it('If 9:00 AM, return 09:00 AM', () => {
    const timeString = DateTimeUtil.getTimeString(new Date(2019, 1, 2, 9, 0, 0));
    expect(timeString).toEqual('09:00 AM')
  });
});
