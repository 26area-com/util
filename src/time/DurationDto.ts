import {Optional} from 'typescript-optional';

export class DurationDto {
  private readonly durationInMillis: number;

  private static readonly SecondInMillis: number = 1000;
  private static readonly MinuteInMillis: number = 60 * DurationDto.SecondInMillis;
  private static readonly HoursInMillis: number = 60 * DurationDto.MinuteInMillis;
  private static readonly DayInMillis: number = 24 * DurationDto.HoursInMillis;

  public constructor(durationInMillis: number) {
    this.durationInMillis = durationInMillis;
  }

  public getDay(): Optional<number> {
    if (this.durationInMillis < DurationDto.DayInMillis) {
      return Optional.empty();
    }

    return Optional.of(Math.floor(this.durationInMillis / DurationDto.DayInMillis));
  }

  public getHour(): Optional<number> {
    return this.getTimeSection(DurationDto.HoursInMillis, DurationDto.DayInMillis);
  }

  public getMinute(): Optional<number> {
    return this.getTimeSection(DurationDto.MinuteInMillis, DurationDto.HoursInMillis);
  }

  public getSecond(): Optional<number> {
    return this.getTimeSection(DurationDto.SecondInMillis, DurationDto.MinuteInMillis);
  }

  private getTimeSection(pivotTime: number, upperTime: number): Optional<number> {
    if (this.durationInMillis < pivotTime) {
      return Optional.empty();
    }

    const remainTime: number = (this.durationInMillis % upperTime);
    const duration = Math.floor(remainTime / pivotTime);

    if (duration === 0) {
      return Optional.empty();
    }

    return Optional.of(duration);
  }

  public getDurationInMillis(): number {
    return this.durationInMillis;
  }
}
