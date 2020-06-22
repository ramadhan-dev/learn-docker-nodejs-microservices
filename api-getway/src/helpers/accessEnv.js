const cache = {};

const accessEnv = (key, defaulValue) => {
    if (!(key in process.env)) {
        process.env['PORT'] = defaulValue;
    }

    if (cache[key]) return cache[key]

    cache[key] = process.env;

    return process.env;

}

export default accessEnv;