const readline = require('readline');
const reader = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.stacks = [[3, 2, 1],[],[]];
  }

  run(ccb) {
    if (this.isWon) {
      return ccb();
    }
    this.render();
    // get move
    this.promptMove();

    this.run();

    // if (this.isWon) {
    //   ccb();
    // } else {
    //   this.run();
    // }
  }


  isValidMove (start, end) {
    let sRing = this.stacks[start][this.stacks[start].length-1];
    let fRing = this.stacks[end][this.stacks[end].length-1];
    if ( sRing < fRing)  {
      return true;
    }
    return false;
  }

  promptMove() {
    reader.question('Enter your source stack: ', (start) => {
      start = parseInt(start);
      reader.question('Enter destination stack ', (end) => {
        end = parseInt(end);
        this.move(start, end);
      });
    });
  }

  move(start, end)  {
    if (this.isValidMove(start, end)) {
      // move yo shit
      let ring = this.stacks[start].pop();
      this.stacks[end].push(ring);
      return true;
    }
    return false;
  }

  render() {
    this.stacks.forEach((stack) => {
      console.log(JSON.stringify(stack));
    });
  }

  isWon(){
    return this.stacks[2].length === 3;
  }

}
