import generateKojimaName from '../generator';

describe("A Hideo Kojima Hideo Kojima name", () => {
    it("should be Hideo Kojima", () => {
        const name = generateKojimaName({}, { isHideoKojima: true });

        expect(name).toBe("Hideo Kojima");
    });
});
