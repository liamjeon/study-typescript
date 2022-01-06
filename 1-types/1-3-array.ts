{
  //Array
  const fruits: string[] = ["apple", "tomato"];
  const scroes: Array<number> = [1, 3, 4];
  //readonly면 변경이 불가하다.(오브젝트의 불변성 보장)
  function printArray(fruits: readonly string[]) {}
  //   function printArray(fruits: readonly Array<number>) {} //불가

  //Tuple : 서로다른 타입의 데이터를 담을 수 있다.
  //Tuple 사용은 권장하지 않음. 가독성이 떨어진다.
  //Tuple을 쓸때는, 동적으로 데이터를 묶어서, 사용자가 이름을 정의해서 쓸 때 고려해보자
  //Tuple -> interface, type alias, class로 대체해서 사용하자.
  let student: [string, number];
  student = ["name", 123];
  student[0];
  student[1];
  const [name, age] = student;
}
