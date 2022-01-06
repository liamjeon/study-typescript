{
  //Discriminated Union
  //유니온 타입의 차별화되는 이름의 동일한 타입을 둠으로써 간편하게 구분할 수 있게함
  //즉 공통적인 프로퍼티를 가지고 구분하기 쉽게 만듬

  //function: login -> success, fail
  type SucessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SucessState | FailState;
  function login1(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged In",
      },
    };
  }

  //printLoginState(state: LoginState)
  //success -> body
  //fail -> reason
  function printLoginState1(state: LoginState): void {
    if (state.result === "success") {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
