{
  interface Stack {
    size: number; //readonly : 안에서만 변경가능
    push(str: string): void;
    pop(): string;
  }

  class List implements Stack {
    constructor(public size: number, private arr: string[]) {
      this.size = 0;
    }
    public push(str: string): void {
      this.arr[this.size++] = str;
    }
    public pop(): string {
      return this.arr[this.size--];
    }
  }
}
    