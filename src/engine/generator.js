const createNormalName = (answers) => [answers.originalName];

const createOccupationalName = (answers, diceRoll) => {
    const firstNames = [
        answers.personality,
        answers.goodAt,
        answers.nameSoundsLike,
        answers.favoriteFilmCharacter,
    ]

    return [firstNames[diceRoll - 1], " ", answers.profession];
};

const createHornyName = (answers, diceRoll) => {
    const firstNames = [
        answers.stateOfMatter,
        "Naked",
        answers.goodAt,
        answers.zodiacSign,
    ];

    return [firstNames[diceRoll - 1], " ", answers.firstPet];
};

const createTheName = (answers, diceRoll) => {
    let names = [
        answers.intangibleFear,
        answers.tangibleFear,
        answers.embarassingStory,
        answers.militaryHardware,
    ];

    return ["The ", names[diceRoll - 1]];
};

const createCoolName = (answers, diceRoll) => {
    let names = [
        answers.kubrickWord,
        answers.joyDivisionAlbum,
        answers.scientificTerm,
        answers.goodAt,
        answers.intangibleFear,
        answers.nameSoundsLike,
    ];

    return [answers.madsAction, " ", names[diceRoll - 1]];
};

const createViolentName = (answers, diceRoll) => {
    let names = [
        answers.scientificTerm,
        answers.stateOfMatter,
        answers.militaryHardware,
        answers.tangibleFear,
    ];

    return [names[diceRoll - 1], " ", answers.stabbingObject];
};

const createNameThatLacksSubtext = (answers) => [answers.lastThing];

const addConditions = (nameParts, answers, conditions) => {
    let finalName = nameParts.slice();
    if (conditions.hasTheMan) {
        finalName = finalName.concat("man");
    }

    if (conditions.hasOldMan) {
        finalName = ["Old "].concat(...finalName);
    }

    if (conditions.hasBigMan) {
        finalName = ["Big "].concat(...finalName);
    }

    if (conditions.hasBodyCondition) {
        finalName = [answers.bodyCondition, " "].concat(...finalName);
    }

    return finalName;
};

const categories = {
    "NORMAL": createNormalName,
    "OCCUPATIONAL": createOccupationalName,
    "HORNY": createHornyName,
    "THE": createTheName,
    "COOL": createCoolName,
    "VIOLENT": createViolentName,
    "SUBTEXT": createNameThatLacksSubtext
};

const generateKojimaName = (answers, conditions, diceRoll) => {
    if (conditions.isHideoKojima) {
        return "Hideo Kojima";
    }

    const name = categories[conditions.category](answers, diceRoll);

    return "".concat(...addConditions(name, answers, conditions));
};

export default generateKojimaName;