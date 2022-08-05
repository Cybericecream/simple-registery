import { validateVariables } from "./validators";

export interface DbVariables {
    dbHost: string;
    dbUser: string;
    dbPass: string;
    dbDatabase: string;
    dbPort: number;
    dbMaxConnections: number;
}

export interface ServerVariables {
    projectPort: number;
}

export interface EnvConfig {
    dbVariables: DbVariables;
    serverVariables: ServerVariables;
}

export const envConfig = (): EnvConfig => {

    const dbVariables: DbVariables = {
        dbHost: validateEnvString('dbHost'),
        dbUser: validateEnvString('dbUser'),
        dbPass: validateEnvString('dbPass'),
        dbDatabase: validateEnvString('dbSchema'),
        dbPort: validateEnvNumber('dbPort'),
        dbMaxConnections: validateEnvNumber('connectionLimits'),
    }

    const serverVariables: ServerVariables = {
        projectPort: validateEnvNumber('projectPort'),
    }

    return {
        dbVariables,
        serverVariables,
    }
}

const validateEnvString = (envVariable: string): string => {
    const envKey = process.env[envVariable];
    if (!validateVariables().isString(envKey) || typeof envKey === 'undefined') {
        throw new Error(`Couldn't Validate String ${envVariable}.`);
    }
    return envKey;
}

const validateEnvNumber = (envVariable: string): number => {
    const envKey = process.env[envVariable];
    if (typeof envKey === 'undefined' || !validateVariables().isNumber(parseInt(envKey))) {
        throw new Error(`Couldn't Validate Number ${envVariable}.`);
    }
    return parseInt(envKey);
}