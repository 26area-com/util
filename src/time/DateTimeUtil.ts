export class DateTimeUtil {

  public static addHours(date: Date, hour: number): Date {
    return new Date(date.getTime() + hour + 60 * 60 * 1000);
  }

  public static isBefore(from: Date, to: Date): boolean {
    return from.getTime() < to.getTime();
  }

  public static isBeforeOrAt(from: Date, to: Date): boolean {
    return from.getTime() <= to.getTime();
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
}
