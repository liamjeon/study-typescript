{
  //Enum
  //Javascript
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNSDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNSDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //Typescript
  //Enum은 타입 보장이 명확하지 않아 되도록이면 사용하지 않고
  //union 타입을 사용하여 타입을 보장하는 것을 추천한다.
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednsday";
  enum Days {
    Monday,
    Tuesday,
    Wednsday,
  }
  console.log(Days.Monday); //0
  let day: Days = Days.Tuesday;
  day = 10; //범위를 벗어나도 에러 발생하지 않음, 타입이 명확하지 않음.
  console.log(day);

  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Tuesday";
}
