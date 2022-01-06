//타입 추론 Type Inference
{
  //타입을 지정하지 않으면 암묵적으로 'any' 타입을 가진다
  //void는 생략이 가능하다.
  //명확하고 가독성을 생각해서 일관성있게 코딩하는 것이 중요!
  let text = "hello";
  function print(messgae = "hello") {
    console.log(messgae);
  }

  function add(x: number, y: number): number {
    return x + y;
  }
  const result = add(1, 2);
}
