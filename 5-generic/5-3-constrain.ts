{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay(): void {
      console.log("full time...");
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay(): void {
      console.log("full time...");
    }
    workPartTime() {}
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const liam = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  liam.workFullTime();
  bob.workPartTime();

  const liamAfterPay = pay(liam);
  const bobAfterPay = pay(bob);

  //K extends keyof T : T obj안에 있는 key의 타입
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  const obj = {
      name: 'liam',
      age: 20,
  }
  console.log(getValue(obj, 'age'));
}
