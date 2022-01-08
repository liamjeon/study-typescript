//상속의 문제점
// 족보가 꼬임..
// 상속의 깊이가 깊어지면 서로의 관계가 복잡해진다...
// 어떤 부모 클래스를 수정하면, 그 부모를 상속하는 자식 클래스에 영향을 끼친다..
// 타입스크립트에서는 한 가지 부모밖에 상속하지 못함!

//여기서 Composition의 단점!?
//class가 타이트하게 커플링되어 있다.
//다른 milk, sugar 메이커를 만들면 다 수정해줘야함...
//클래스간은 서로 잘 알고 있는게 좋지 않아...

//Decoupling(디커플링)의 원칙
//클래스들간 서로 상호작용하는 경우 클래스 자신을 노출하는 것이 아니라
//계약서를 통해, 계약서에 의거하여 의사소통을 해야한다.
//이때 계약서는? 바로 Interface~! Interface를 통해 서로간 상호작용을 하자.

{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface MilkFrother{
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }
  interface SugarProvider{
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots}`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  //싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Fancy Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Cold Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  //설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from candy...");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }
  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from jar!!!");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }



  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      shots: number,
      public readonly serialNumber: string,
      private milkFrother: MilkFrother
    ) {
      super(shots);
    }
    //overwrting
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugar: SugarProvider) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMahcine extends CoffeeMachine {
    constructor(
      private beans: number,
      private sugar: SugarProvider,
      private milk: MilkFrother
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = this.makeCoffee(shots);
      return this.milk.makeMilk(this.sugar.addSugar(coffee));
    }
  }

  //Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  //Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();

  //Machines
  const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
  const sweetMachine = new SweetCoffeeMaker(12, sugar);

  const latteMachine = new CaffeLatteMachine(12, "SS", cheapMilkMaker);
  const coldLatteMachine = new CaffeLatteMachine(12, "SS", coldMilkMaker);
  const sweetLatteMachine = new SweetCaffeLatteMahcine(
    12,
    candySugar,
    cheapMilkMaker
  );
}
