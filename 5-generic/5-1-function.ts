{
  function checkNotnull(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number...");
    }
    return arg;
  }
  const result = checkNotnull(123);
  console.log(result);

  //나쁜 예제
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number...");
    }
    return arg;
  }
  const result1 = checkNotNullAnyBad(123);
  console.log(result1);

  //Generic
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number...");
    }
    return arg;
  }
  const result2 = checkNotNull(123);
  console.log(result2);
}
