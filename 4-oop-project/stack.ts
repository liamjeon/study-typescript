{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode; //next? : 값이 있거나 없거나, optional ; StackNode | undefined
  };

  class StackImpl implements Stack {
    private _size: number = 0; //내부에서만 쓰이는 변수는 _ 언더바 붙힘
    private head?: StackNode;

    get size() {
      return this._size;
    }
    push(value: string) {
      const node: StackNode = {
        value,
        next: this.head,
      };
      this.head = node;
      this._size++;
    }
    pop(): string {
      //null == undefined, null !== undefined
      if (this.head == null) {
        throw new Error("Stack is empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl();
  stack.push('liam');
  stack.push('julie');

  while(stack.size !== 0){
    console.log(stack.pop());
  }
}
