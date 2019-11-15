import generateKojimaName from '../generator';

let nameConditions, answers;

beforeEach(() => {
    nameConditions = {
        hasTheMan: true,
        category: "SUBTEXT"
    };

    answers = {
        lastThing: "Woke Up", // 2.10
    };
});

describe("A Hideo Kojima name that lacks subtext", () => {
    it("should the last thing you did", () => {
        const kojimaName = generateKojimaName(answers, nameConditions);
        
        expect(kojimaName).toBe("Woke Upman");
    });
});