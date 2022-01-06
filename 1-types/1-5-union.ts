{
  //Union Types: OR
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 6 | 12 | 24;
  const tile: TileSize = 6;

  
  //function: login -> success, fail
  type SucessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SucessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: "logged In",
      },
    };
  }

  //printLoginState(state: LoginState)
  //success -> body
  //fail -> reason
  
  function printLoginState(state: LoginState): void {
    if ("response" in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
