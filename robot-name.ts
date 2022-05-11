interface IRobot {
  name: string;
  resetName: () => void;
}

export class Robot implements IRobot {
  name: string;
  static usedNames = new Set<string>();
  static releaseNames() {
    this.usedNames.clear();
  }

  constructor() {
    this.name = this.uniqueRandomName;
  }

  resetName() {
    this.name = this.uniqueRandomName;
  }

  private get uniqueRandomName() {
    let newName;
    do {
      newName = this.randomName;
    } while (Robot.usedNames.has(newName));
    Robot.usedNames.add(newName);
    return newName;
  }

  private get randomName() {
    return `${this.twoRandomLetters}${this.randomThreeDigits90}`;
  }
  private get randomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomNumber = Math.floor(Math.random() * 26);
    return letters[randomNumber];
  }

  private get twoRandomLetters() {
    const letter1 = this.randomLetter;
    const letter2 = this.randomLetter;
    return `${letter1}${letter2}`;
  }

  private get randomThreeDigits90() {
    return `${this.RandomNumber0to9}${this.RandomNumber0to9}${this.RandomNumber0to9}`
  }

  private get RandomNumber0to9() {
    return Math.floor(Math.random() * 10);
  }
}
