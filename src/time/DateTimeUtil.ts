export class DateTimeUtil {

  public static format(dateTime: Date, isTimeSet: boolean) {
    if (isTimeSet) {
      return `${this.getDateString(dateTime)} ${this.getTimeString(dateTime)}`;
    } else {
      return this.getDateString(dateTime);
    }
  }

  // '4/12/2019, 8:54 AM'
  public static getDateString(date: Date): string {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  public static getDateWideString(date: Date): string {
    return this.getDateString(date).replace(/\//g, ' / ');
  }

  public static getTimeString(time: Date): string {
    return `${this.getTimeIn12(time)}:${DateTimeUtil.getXXInNumber(time.getMinutes())} ${this.getMeridiem(time)}`;
  }

  public static addHours(date: Date, hour: number): Date {
    return new Date(date.getTime() + hour + 60 * 60 * 1000);
  }

  public static isBefore(from: Date, to: Date): boolean {
    return from.getTime() < to.getTime();
  }

  public static clearToSecond(date: Date): Date {
    const clearedDate = new Date(date.getTime());
    clearedDate.setMilliseconds(0);
    clearedDate.setSeconds(0);

    return clearedDate;
  }

  public static clearToHour(date: Date): Date {
    const clearedDate = new Date(date.getTime());
    clearedDate.setMilliseconds(0);
    clearedDate.setSeconds(0);
    clearedDate.setMinutes(0);
    clearedDate.setHours(0);

    return clearedDate;
  }

  /**
   *
   * Private Function
   *
   */

  private static getTimeIn12(time: Date): string {
    return DateTimeUtil.getXXInNumber(time.getHours() % 12);
  }

  private static getXXInNumber(num: number): string {
    if(num < 10) {
      return '0' + num;
    }

    return num.toString();
  }

  private static getMeridiem(time: Date): string {
    if (time.getHours() > 12) {
      return 'PM';
    } else {
      return 'AM';
    }
  }
}
