import generateKojimaName from '../generator';

let nameConditions, answers;

beforeEach(() => {
    nameConditions = {
        category: "COOL"
    };

    answers = {
        madsAction: "Cooking", // 3.21a
        goodAt: "Humor", // 2.6
        intangibleFear: "Death", // 2.8
        nameSoundsLike: "Brain", // 2.13
        kubrickWord: "Orange", // 3.17
        joyDivisionAlbum: "??", // 3.18
        scientificTerm: "Quantic", // 3.19
    };
});

describe("A Violent Hideo Kojima name", () => {
    it("should be Mads Mikkelsen action + first Kubrick film word when D6 == 1", () => {
        const diceRoll = 1;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Cooking Orange");
    });

    it("should be Mads Mikkelsen action + Joy Division album when D6 == 2", () => {
        const diceRoll = 2;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Cooking ??");
    });

    it("should be Mads Mikkelsen action + scientific term when D6 == 3", () => {
        const diceRoll = 3;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Cooking Quantic");
    });

    it("should be Mads Mikkelsen action + what you're goot at when D6 == 4", () => {
        const diceRoll = 4;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Cooking Humor");
    });

    it("should be Mads Mikkelsen action + intangible fear when D6 == 5", () => {
        const diceRoll = 5;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Cooking Death");
    });

    it("should be Mads Mikkelsen action + what your name sounds like when D6 == 6", () => {
        const diceRoll = 6;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Cooking Brain");
    });
});