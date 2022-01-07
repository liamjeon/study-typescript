{
    //Type Assertions
    //타입 추론을 자주 사용하는 것은 좋은게 아니다.

    function jsStrFunc():any{
        return 2;
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); //에러

    function findNumbers():number[]|undefined{
        return undefined;
    }
    const numbers = findNumbers()!;
    numbers.push(2); 
}