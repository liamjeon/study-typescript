/**
 * Let's make a calculator 🧮
 */
{
  type Command = "add" | "substract" | "multiply" | "divide" | "remainder";

  function calculate(command: Command, a: number, b: number): number {
    if (command === "add") return a + b;
    else if (command === "substract") return a - b;
    else if (command === "multiply") return a * b;
    else if (command === "divide") return a / b;
    else if (command === "remainder") throw Error('unknown error');
    else return 0;
  }

  console.log(calculate("add", 1, 3)); // 4
  console.log(calculate("substract", 3, 1)); // 2
  console.log(calculate("multiply", 4, 2)); // 8
  console.log(calculate("divide", 4, 2)); // 2
  console.log(calculate("remainder", 5, 2)); // 1
}
