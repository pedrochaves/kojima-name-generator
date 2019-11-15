import generateKojimaName from '../generator';

let nameConditions, answers;

beforeEach(() => {
    nameConditions = {
        category: "VIOLENT"
    };

    answers = {
        stabbingObject: "Fork", // 2.5
        tangibleFear: "Horse", // 2.9
        stateOfMatter: "Liquid", // 2.12
        scientificTerm: "Quantic", // 3.19
        militaryHardware: "Gun", // 3.20
    };
});

describe("A Violent Hideo Kojima name", () => {
    it("should be scientific term + stabbing object when D4 == 1", () => {
        const diceRoll = 1;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Quantic Fork");
    });

    it("should be state of matter + stabbing object when D4 == 2", () => {
        const diceRoll = 2;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Liquid Fork");
    });

    it("should be military hardware + stabbing object when D4 == 3", () => {
        const diceRoll = 3;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Gun Fork");
    });

    it("should be tangible fear + stabbing object when D4 == 4", () => {
        const diceRoll = 4;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("Horse Fork");
    });
});