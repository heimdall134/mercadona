import { Extractor } from "./index";

describe("index", () => {
  describe("starting 84 EAN digit", () => {
    const digitCodes = [{
      digitCode: "8480000278623",
      expectedMercaCode: "27862"
    }, {
      digitCode: "8480000298623",
      expectedMercaCode: "29862"
    }];

    it("extra merca code expected 27862", () => {
      const extractor = new Extractor(digitCodes[0].digitCode);
      const mercaCode = extractor.mercaCode();

      expect(mercaCode).toBe(digitCodes[0].expectedMercaCode);
    });

    it("extra merca code expected 29862", () => {
      const extractor = new Extractor(digitCodes[1].digitCode);
      const mercaCode = extractor.mercaCode();

      expect(mercaCode).toBe(digitCodes[1].expectedMercaCode);
    });
  });

  describe("starting 23 EAN digit", () => {

    it("extract merca code for 13 digits", () => {
      const digitCode = "2369664001999";
      const extractor = new Extractor(digitCode);
      const mercaCode = extractor.mercaCode();

      expect(mercaCode).toBe("69664");

    });

    it("extract merca code for 13 digits", () => {
      const digitCode = "2370664001999";
      const extractor = new Extractor(digitCode);
      const mercaCode = extractor.mercaCode();

      expect(mercaCode).toBe("70664");

    });

    it("extract price for 13 digits", () => {
      const digitCode = "2370664001999";
      const extractor = new Extractor(digitCode);
      const priceInEuro = extractor.priceInEuro();

      expect(priceInEuro).toBe("00199");

    });

    it("extract price for 13 digits", () => {
      const digitCode = "2370664001989";
      const extractor = new Extractor(digitCode);
      const priceInEuro = extractor.priceInEuro();

      expect(priceInEuro).toBe("00198");

    });

    it("extract merca code for 24 digits", () => {
      const digitCode = "230036490033000165000542";
      const extractor = new Extractor(digitCode);
      const mercaCode = extractor.mercaCode();

      expect(mercaCode).toBe("03649");

    });

    it("extract merca code for 24 digits", () => {
      const digitCode = "230046490033000165000542";
      const extractor = new Extractor(digitCode);
      const mercaCode = extractor.mercaCode();

      expect(mercaCode).toBe("04649");

    });

    it("extract price for 24 digits", () => {
      const digitCode = "230046490033000165000542";
      const extractor = new Extractor(digitCode);
      const priceInEuro = extractor.priceInEuro();

      expect(priceInEuro).toBe("00054");

    });

    it("extract pvp for 24 digits", () => {
      const digitCode = "230046490033000165000542";
      const extractor = new Extractor(digitCode);
      const pvp = extractor.pvp();

      expect(pvp).toBe("00165");

    });

    it("extract pvp for 24 digits", () => {
      const digitCode = "230046490033000166000542";
      const extractor = new Extractor(digitCode);
      const pvp = extractor.pvp();

      expect(pvp).toBe("00166");

    });
  });

});

