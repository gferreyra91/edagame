import { goods, regulars, areDifferents } from "./Controller";

export const generateRandom = () => {
  const correct = Math.floor(1000 + Math.random() * 9000);
  return areDifferents(correct) ? correct : generateRandom();
};

export class CpuPlayer {
  constructor() {
    this.seeds = [];
    this.seed = "0123";
    this.isAproxWithSeeds = this.isAproxWithSeeds.bind(this);
  }

  nextSeed(seed) {
    seed = parseInt(seed) + 1;
    seed = seed.toString().padStart(4, "0");
    if (areDifferents(seed)) {
      return seed;
    }
    return this.nextSeed(seed);
  }

  isAproxWithSeeds(seed) {
    if (this.seeds.length === 0) {
      return true;
    }
    return this.seeds.every(element => {
      if (
        goods(seed, element.guess) === element.goods &&
        regulars(seed, element.guess) === element.regulars
      ) {
        return true;
      }
      return false;
    });
  }

  newAttemp() {
    if (this.isAproxWithSeeds(this.seed)) {
      return this.seed;
    }
    this.seed = this.nextSeed(this.seed);
    return this.newAttemp();
  }

  saveSeedResult(guess, goodsDigits, regularsDigits) {
    this.seed = this.nextSeed(this.seed);
    return this.seeds.push({
      guess,
      goods: goodsDigits,
      regulars: regularsDigits
    });
  }
}
