export class OptionalUtil {
  public static orElse<T>(tValue: T, orElseValue: T): T {
    if (!!!tValue) {
      return orElseValue;
    }

    return tValue;
  }
}
