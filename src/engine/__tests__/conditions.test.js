import determineNameConditions from '../conditions';

const range = (size, startAt = 0) => {
    return [...Array(size).keys()].map(i => i + startAt);
}

describe("A Hideo Kojima name", () => {
    it("should have 6 names", () => {
        const conditions = determineNameConditions({ d6: 6 });

        expect(conditions.hasOneName).toBe(false);
    });

    it("should have 1 name", () => {
        for (let i of range(1, 5)) {
            const conditions = determineNameConditions({ d6: i });

            expect(conditions.hasOneName).toBe(true);
        }
    });

    it("should have -man", () => {
        const conditions = determineNameConditions({ d4: 4 });

        expect(conditions.hasTheMan).toBe(true);
    });

    it("should not have -man", () => {
        for (let i of range(1, 3)) {
            const conditions = determineNameConditions({ d4: i });

            expect(conditions.hasTheMan).toBe(false);
        }
    });

    it("should have big man", () => {
        const conditions = determineNameConditions({ d8: 6 });

        expect(conditions.hasBigMan).toBe(true);
        expect(conditions.hasOldMan).toBe(false);
        expect(conditions.hasBodyCondition).toBe(false);
    });

    it("should have old man", () => {
        const conditions = determineNameConditions({ d8: 7 });

        expect(conditions.hasBigMan).toBe(false);
        expect(conditions.hasOldMan).toBe(true);
        expect(conditions.hasBodyCondition).toBe(false);
    });

    it("should have body condition", () => {
        const conditions = determineNameConditions({ d8: 8 });

        expect(conditions.hasBigMan).toBe(false);
        expect(conditions.hasOldMan).toBe(false);
        expect(conditions.hasBodyCondition).toBe(true);
    });

    it("should not have nothing", () => {
        for (let i of range(1, 5)) {
            const conditions = determineNameConditions({ d8: i });

            expect(conditions.hasBigMan).toBe(false);
            expect(conditions.hasOldMan).toBe(false);
            expect(conditions.hasBodyCondition).toBe(false);
        }
    });

    it("should be Hideo Kojima", () => {
        const conditions = determineNameConditions({ d100: 69 });

        expect(conditions.isHideoKojima).toBe(true);
    });

    it("should be a clone", () => {
        const conditions = determineNameConditions({ d12: 12 });

        expect(conditions.isClone).toBe(true);
    });

    it("should not be a clone", () => {
        for (let i of range(1, 11)) {
            const conditions = determineNameConditions({ d12: i });

            expect(conditions.isClone).toBe(false);
        }
    });

    it("should be a normal name", () => {
        const conditions = determineNameConditions({ d20: 1 });

        expect(conditions.category).toBe("NORMAL");
    });

    it("should be a occupational name", () => {
        for (let i of range(5, 2)) {
            const conditions = determineNameConditions({ d20: i });

            expect(conditions.category).toBe("OCCUPATIONAL");
        }
    });

    it("should be a horny name", () => {
        for (let i of range(4, 7)) {
            const conditions = determineNameConditions({ d20: i });

            expect(conditions.category).toBe("HORNY");
        }
    });

    it("should be a the name", () => {
        for (let i of range(3, 11)) {
            const conditions = determineNameConditions({ d20: i });

            expect(conditions.category).toBe("THE");
        }
    });

    it("should be a cool name", () => {
        for (let i of range(4, 14)) {
            const conditions = determineNameConditions({ d20: i });

            expect(conditions.category).toBe("COOL");
        }
    });

    it("should be a violent name", () => {
        for (let i of range(2, 18)) {
            const conditions = determineNameConditions({ d20: i });

            expect(conditions.category).toBe("VIOLENT");
        }
    });

    it("should be a name that lacks subtext", () => {
        const conditions = determineNameConditions({ d20: 20 });

        expect(conditions.category).toBe("SUBTEXT");
    });
});