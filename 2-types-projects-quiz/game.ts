/**
 * Let's make a game 🕹
 */
namespace Game {
  let position = { x: 0, y: 0 };
  type Direction = "up" | "down" | "left" | "right";

  function move(direction: Direction): void {
    if (direction === "up") position.y++;
    else if (direction === "down") position.y--;
    else if (direction === "left") position.x--;
    else if (direction === "right") position.x++;
    else throw Error("unknown error");
  }

  console.log(position); // { x: 0, y: 0}
  move("up");
  console.log(position); // { x: 0, y: 1}
  move("down");
  console.log(position); // { x: 0, y: 0}
  move("left");
  console.log(position); // { x: -1, y: 0}
  move("right");
  console.log(position); // { x: 0, y: 0}
}
