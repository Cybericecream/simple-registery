export const validateVariables = () => {
    const isValidUuid = (uuid: string) => {
        return uuid.match("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$") !== null;
    }

    const isString = (stringVar: string | undefined) => {
        return typeof stringVar === 'string';
    }

    const isNotEmptyString = (stringVar: string) => {
        return (stringVar.length > 0);
    }

    const isNumber = (numberVar: number | undefined) => {
        return typeof numberVar !== 'undefined' && !isNaN(numberVar);
    }

    const isPositiveNumber = (numberVar: number) => {
        return numberVar > 0;
    }

    return {
        isValidUuid,
        isString,
        isNotEmptyString,
        isNumber,
        isPositiveNumber
    }
}

export const variableValidators = () => {
    const uuid = (uuid: string) => {
        if (!validateVariables().isValidUuid(uuid)) {
            throw new Error("UUID is not Valid.");
        }
    }

    const string = (stringVar: string) => {
        if (!validateVariables().isString(stringVar) && !validateVariables().isNotEmptyString(stringVar)) {
            throw new Error("String is not a valid string.");
        }
    }

    const number = (numberVar: number) => {
        if (!validateVariables().isNumber(numberVar)) {
            throw new Error("Number is not a valid Number.");
        }
    }

    const positiveNumber = (numberVar: number) => {
        if (!validateVariables().isPositiveNumber(numberVar)) {
            throw new Error("Number is not a positive number.")
        }
    }

    return {
        uuid,
        string,
        number,
        positiveNumber
    }
}