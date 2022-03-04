const { expect } = require("chai");
const { calcHand } = require("./src/store/funcs");

describe("calcHand testing", () => {
  it("works with no ace", () => {
    const hand = ["nineS", "fourH"];
    const answer = calcHand(hand);

    const hand1 = ["KS", "fourH", "eightC"];
    const answer1 = calcHand(hand1);

    const hand2 = ["nineS", "sevenH", "QD"];
    const answer2 = calcHand(hand2);

    expect(answer).to.equal(13);
    expect(answer1).to.equal(22);
    expect(answer2).to.equal(26);
  });

  it("works with 1 ace", () => {
    const hand = ["nineS", "fourH", "AC"];
    const answer = calcHand(hand);
    expect(answer).to.equal(14);

    const hand1 = ["eightS", "fourC", "AH"];
    const answer1 = calcHand(hand1);
    expect(answer1).to.equal(13);

    const hand2 = ["KS", "twoC", "AH"];
    const answer2 = calcHand(hand2);
    expect(answer2).to.equal(13);

    const hand3 = ["twoS", "twoC", "threeC", "fiveC", "fiveC", "AH"];
    const answer3 = calcHand(hand3);
    expect(answer3).to.equal(18);

    const hand4 = ["JS", "twoC", "threeC", "AC"];
    const answer4 = calcHand(hand4);
    expect(answer4).to.equal(16);

    const hand5 = ["JS", "twoC", "AC", "tenD"];
    const answer5 = calcHand(hand5);
    expect(answer5).to.equal(23);

    const hand6 = ["QS", "fiveC", "AC", "eightD"];
    const answer6 = calcHand(hand6);
    expect(answer6).to.equal(24);

    const hand7 = ["fiveC", "AC", "tenD", "twoD"];
    const answer7 = calcHand(hand7);
    expect(answer7).to.equal(18);
  });

  it("works with 2 aces", () => {
    const hand = ["AC", "eightD", "AD"];
    const answer = calcHand(hand);
    expect(answer).to.equal(20);
    const hand1 = ["AC", "fourD", "AD"];
    const answer1 = calcHand(hand1);
    expect(answer1).to.equal(16);
    const hand2 = ["AC", "fourD", "AD", "twoD"];
    const answer2 = calcHand(hand2);
    expect(answer2).to.equal(18);
    const hand3 = ["AC", "fourD", "AD", "nineD"];
    const answer3 = calcHand(hand3);
    expect(answer3).to.equal(15);
    const hand4 = ["AC", "fourD", "AD", "nineD", "eightH"];
    const answer4 = calcHand(hand4);
    expect(answer4).to.equal(23);
  });

  it("works with 3 aces", () => {
    const hand = ["AC", "fourD", "AH", "AD"];
    const answer = calcHand(hand);
    expect(answer).to.equal(17);

    const hand1 = ["AC", "fourD", "AH", "AD", "sixC"];
    const answer1 = calcHand(hand1);
    expect(answer1).to.equal(13);

    const hand2 = ["AC", "fourD", "AH", "AD", "sixC", "KS"];
    const answer2 = calcHand(hand2);
    expect(answer2).to.equal(23);
  });

  it("works with four aces", () => {
    const hand = ["AC", "twoD", "AH", "AD", "AS"];
    const answer = calcHand(hand);
    expect(answer).to.equal(16);

    const hand1 = ["AC", "twoD", "AH", "AD", "AS", "fiveH"];
    const answer1 = calcHand(hand1);
    expect(answer1).to.equal(21);

    const hand2 = ["AC", "twoD", "AH", "AD", "AS", "nineH"];
    const answer2 = calcHand(hand2);
    expect(answer2).to.equal(15);

    const hand3 = ["AC", "sixD", "AH", "AD", "AS", "nineH", "threeH"];
    const answer3 = calcHand(hand3);
    expect(answer3).to.equal(22);
  });
});
