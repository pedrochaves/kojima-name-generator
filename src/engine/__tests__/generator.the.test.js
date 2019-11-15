import generateKojimaName from '../generator';

let nameConditions, answers;

beforeEach(() => {
    nameConditions = {
        category: "THE"
    };

    answers = {
        intangibleFear: "Death", // 2.8
        tangibleFear: "Horse", // 2.9
        embarassingStory: "School Play", // 2.4a
        militaryHardware: "Gun", // 3.20
    };
});

describe("A The Hideo Kojima name", () => {
    it("should be intangible fear when D4 == 1", () => {
        const diceRoll = 1;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("The Death");
    });

    it("should be tangible fear when D4 == 2", () => {
        const diceRoll = 2;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("The Horse");
    });

    it("should be embarassing story when D4 == 3", () => {
        const diceRoll = 3;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("The School Play");
    });

    it("should be military hardware when D4 == 4", () => {
        const diceRoll = 4;
        const kojimaName = generateKojimaName(answers, nameConditions, diceRoll);
        
        expect(kojimaName).toBe("The Gun");
    });
});