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
        category: "NORMAL",
    };

    answers = {
        originalName: "Brian David Gilbert", // 2.1
        bodyCondition: "Tired", // 2.11
    };
});

describe("A Normal Hideo Kojima name", () => {
    it("should have be person's name when no conditions", () => {
        const kojimaName = generateKojimaName(answers, nameConditions);
        
        expect(kojimaName).toBe("Brian David Gilbert");
    });

    it("should have the -man suffix", () => {
        nameConditions.hasTheMan = true;
        const kojimaName = generateKojimaName(answers, nameConditions);
        
        expect(kojimaName).toBe("Brian David Gilbertman");
    });

    it("should have the -old prefix", () => {
        nameConditions.hasOldMan = true;
        const kojimaName = generateKojimaName(answers, nameConditions);
        
        expect(kojimaName).toBe("Old Brian David Gilbert");
    });

    it("should have the -big prefix", () => {
        nameConditions.hasBigMan = true;
        const kojimaName = generateKojimaName(answers, nameConditions);
        
        expect(kojimaName).toBe("Big Brian David Gilbert");
    });

    it("should have the body condition", () => {
        nameConditions.hasBodyCondition = true;
        const kojimaName = generateKojimaName(answers, nameConditions);
        
        expect(kojimaName).toBe("Tired Brian David Gilbert");
    });
});