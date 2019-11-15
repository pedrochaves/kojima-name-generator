import generateKojimaName from '../generator';

let nameConditions, answers;

beforeEach(() => {
    nameConditions = {
        category: "HORNY"
    };

    answers = {
        firstPet: "Poodle", // 2.3
        goodAt: "Humor", // 2.6
        stateOfMatter: "Liquid", // 2.12
        zodiacSign: "Cancer", // 2.14
    };
});

describe("A Horny Hideo Kojima name", () => {
    it("should be state of matter + pet when D4 == 1", () => {
        const diceRoll = 1;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Liquid Poodle");
    });

    it("should be Naked + pet when D4 == 2", () => {
        const diceRoll = 2;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Naked Poodle");
    });

    it("should be what you're good at + pet when D4 == 3", () => {
        const diceRoll = 3;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Humor Poodle");
    });

    it("should be zodiac sign + pet when D4 == 4", () => {
        const diceRoll = 4;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Cancer Poodle");
    });
});