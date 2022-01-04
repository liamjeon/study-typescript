{
  //JavaScript
  //Primitive: number, boolean, null, undefined, symbol, string, bigint
  //Object : function, Array...

  //string
  const str: string = "hello";

  //boolean
  const boal: boolean = false;

  //undefine
//   const name: undefined;
  let age: number | undefined;
  age = undefined;

  //null
  let person: null;
  let person2: string | null;

  //unknwon 가능하면 사용하지 않음.
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any 가능하면 사용하지 않음
  let anything: any = 0;
  anything = "hello";

  //void
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; //이렇게는 안씀

  //naver
  function throwError(message: string): never {
    //message -> server(log)
    throw new Error(message);
    //   while(true){}
  }
  let neverEnding: never; //이렇게 선언하지 않음

  //object
  let obj: object; //object 타입 명시를 해줘야 좋다~!! 
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "liam" });
  acceptSomeObject({ animal: "dog" });
}
