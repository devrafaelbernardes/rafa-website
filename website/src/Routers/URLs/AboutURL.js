import { BASE_URL } from './URLs';

export const AboutURL = () => {
    const DEFAULT = 'about/';
    return {
        ROUTER : {
            BASE : BASE_URL + DEFAULT,
        },
        REDIRECT : {
            BASE : BASE_URL + DEFAULT,
        }
    };
};