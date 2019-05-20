import { List } from 'immutable';

export class ListUtil {
  public static forAll<T>(list: List<T>, f: (ele: T) => boolean): boolean {
    return list.filter(l => !f(l)).isEmpty();
  }

  public static all(list: List<boolean>): boolean {
    return ListUtil.forAll(list, bool => bool);
  }

  public static async sequence<T>(listPromise: List<Promise<T>>): Promise<List<T>> {
    const promiseList = await Promise.all(listPromise.toArray());
    return List(promiseList);
  }

  public static equals<T>(fromList: List<T>, toList: List<T>): boolean {
    if (fromList.size !== toList.size) {
      return false;
    }

    for (let idx = 0; idx < fromList.size; idx++) {
      if (fromList.get(idx) !== toList.get(idx)) {
        return false;
      }
    }
    return true;
  }
}
