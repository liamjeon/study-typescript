//예상하지 못한 error 처리(thorw Error)를 남발하지 않고
//예상 가능한 것들은 state 으로 정의하고 관리하자!!

{

    type NetworkErrorState = {
        result: 'fail';
        reson: 'offilne' | 'down' | 'timeout';
    }
    type SuccessState = {
        result: 'success';
    }
    type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      throw new Error("no network!");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      //login..
    }
  }

  class App {
    constructor(private service: UserService) {}
    run() {
      try {
        this.service.login();
      } catch (error) {
        console.log("catched~!");
        //show dialog to user;
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);

  app.run();
}
