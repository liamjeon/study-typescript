{
    //추상화를 도와주는 문법
    //
  
    type CoffeeCup = {
      shots: number;
      hasMilk?: boolean;
      hasSugar?: boolean;
    };
  
    interface CoffeeMaker {
      makeCoffee(shots: number): CoffeeCup;
    }
  
    abstract class CoffeeMachine implements CoffeeMaker {
      private static BEANS_GRAMM_PER_SHOT: number = 7;
      private coffeeBeans: number = 0;
  
      public constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
      }
  
      fillCoffeeBeans(beans: number) {
        if (beans < 0) {
          throw new Error("value for beans should be greater than 0");
        }
        this.coffeeBeans += beans;
      }
  
      clean(): void {
        console.log("cleaning the machine...");
      }
  
      private grindBeans(shots: number): void {
        console.log(`grinding beans for ${shots}`);
        if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
          throw new Error("Not enough coffee beans!");
        }
        this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      }
  
      private preheat(): void {
        console.log("heating up...");
      }
  
      protected abstract extract(shots: number): CoffeeCup;
  
      makeCoffee(shots: number): CoffeeCup {
        this.grindBeans(shots);
        this.preheat();
        return this.extract(shots);
      }
    }
  
    class CaffeLatteMachine extends CoffeeMachine {
      constructor(shots: number, public readonly serialNumber: string) {
        super(shots);
      }
  
      private steamMilk(): void {
        console.log("Steaming some milk...");
      }
      //overwrting
      makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots);
        this.steamMilk();
        return {
          ...coffee,
          hasMilk: true,
        };
      }
  
      protected extract(shots: number): CoffeeCup {
        this.steamMilk();
        return {
          shots,
          hasMilk: true,
        };
      }
    }
  
    class SweetCoffeeMaker extends CoffeeMachine {
      makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots);
        return {
          ...coffee,
          hasSugar: true,
        };
      }
      protected extract(shots: number): CoffeeCup {
        return {
          shots,
          hasSugar: true,
        };
      }
    }
  
    //다형성의 장점 :
    // 내부적으로 구현된 다양한 클래스들이 한 가지의 인터페이스를 구현하거나
    //또는 동일한 부모 클래스를 상속했을 때 어떤 클레스인지 구분하지 않고 공통된 api를 호출할 수 있다.
  
    const machines: CoffeeMaker[] = [
      new CaffeLatteMachine(32, "S123"),
      new SweetCoffeeMaker(32),
      new CaffeLatteMachine(32, "S123"),
      new SweetCoffeeMaker(32),
    ];
  
    machines.forEach((machine) => {
      console.log("-------------------------");
      machine.makeCoffee(1);
    });
  }
  