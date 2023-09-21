import { $ } from './request';

interface RandomStrI {
    charType?: string,
    customizeChar?: string,
    length?: number
}
const getRandomStr = async (params: RandomStrI) => {
    const res = await $.get('/utils/random-string', { 
        params
    });
    return res;
}

export {
    getRandomStr
}
