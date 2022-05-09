export class Robot {
  name: string;
  constructor() {
    this.name = nameGenerator();
  }
  resetName() {
    this.name = nameGenerator();
  }
  releaseNames() {
    this.name = "";
  }
}

function nameGenerator(): string {
  const char = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  function randomchar() {
    return char[Math.floor(Math.random() * char.length)];
  }
  function randomnum() {
    return Math.floor(Math.random() * 10);
  }
  const name = `${randomchar()}${randomchar()}${randomnum()}${randomnum()}${randomnum()}`;
  return name;
}
