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
  
  function pay(employee:Employee) : Employee{
      employee.pay();
      return employee;
  }

  const liam = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  liam.workFullTime();
  bob.();
  const liamAfterPay = pay(liam);
  const bobAfterPay = pay(bob);
}
