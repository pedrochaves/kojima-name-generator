const getNameCategory = (d20Value) => {
    if (d20Value === 1) {
        return "NORMAL";
    }

    if (d20Value <= 6) {
        return "OCCUPATIONAL";
    }

    if (d20Value <= 10) {
        return "HORNY";
    }

    if (d20Value <= 13) {
        return "THE";
    }

    if (d20Value <= 17) {
        return "COOL";
    }

    if (d20Value <= 19) {
        return "VIOLENT";
    }

    return "SUBTEXT";
};

const determineNameConditions = (dices) => ({
    hasOneName: dices.d6 < 6,
    hasTheMan: dices.d4 === 4,
    hasBigMan: dices.d8 === 6,
    hasOldMan: dices.d8 === 7,
    hasBodyCondition: dices.d8 === 8,
    isClone: dices.d12 === 12,
    isHideoKojima: dices.d100 === 69,
    category: getNameCategory(dices.d20),
});

export default determineNameConditions;