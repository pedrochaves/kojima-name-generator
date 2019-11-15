import generateKojimaName from '../generator';

let nameConditions, answers;

beforeEach(() => {
    nameConditions = {
        hasOneName: false,
        hasTheMan: false,
        hasBigMan: false,
        hasOldMan: false,
        hasBodyCondition: false,
        isClone: false,
        isHideoKojima: false,
        category: "OCCUPATIONAL",
    };

    answers = {
        profession: "Video Maker", // 2.2a
        goodAt: "Humor", // 2.6
        nameSoundsLike: "Brain", // 2.13
        personality: "Sassy", // 2.15
        favoriteFilmCharacter: "Santa" // 3.16
    };
});

describe("An Occupational Hideo Kojima name", () => {
    beforeEach(() => {
        nameConditions.category = "OCCUPATIONAL";
    });

    it("should be personality + profession when D4 == 1", () => {
        const diceRoll = 1;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Sassy Video Maker");
    });

    it("should be something you're good at + profession when D4 == 2", () => {
        const diceRoll = 2;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Humor Video Maker");
    });

    it("should be what name sounds like + profession when D4 == 3", () => {
        const diceRoll = 3;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Brain Video Maker");
    });

    it("should be favorite filme character + profession when D4 == 4", () => {
        const diceRoll = 4;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Santa Video Maker");
    });
});