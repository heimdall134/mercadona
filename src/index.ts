import dotenv from "dotenv";

dotenv.config();

export const main = async (): Promise<void> => {
  console.log("hello world!");

};

export class Extractor {
  private codeDigits: string;
  private initialDigits: string;

  constructor(codeDigits: string) {
    this.codeDigits = codeDigits;
    this.initialDigits = this.codeDigits.substring(0, 2);
  }

  public mercaCode(): string {
    if (this.initialDigits == "84") {
      return this.codeDigits.substring(7, 12);
    } else if (this.initialDigits == "23" && this.codeDigits.length == 13) {
      return this.codeDigits.substring(2, 7);
    } else {
      return this.codeDigits.substring(3, 8);
    }
  }

  public priceInEuro(): string {
    if (this.codeDigits.length == 13) {
      return this.codeDigits.substring(7, 12);
    }
    return this.codeDigits.substring(18, 23);
  }

  public pvp(): string {
    return this.codeDigits.substring(13, 18);
  }
}

main();