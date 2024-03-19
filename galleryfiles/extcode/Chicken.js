class ChickenBlock {
  constructor(runtime) {
    this.runtime = runtime;
  }

  getInfo() {
    return {
      id: 'chicken',
      name: 'Chicken',
      blocks: [
        {
          opcode: 'sayChicken',
          blockType: Scratch.BlockType.REPORTER,
          text: 'say chicken',
        },
      ],
    };
  }

  sayChicken() {
    return 'chicken';
  }
}

Scratch.extensions.register(new ChickenBlock());
