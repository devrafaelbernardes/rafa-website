import { BASE_URL } from './URLs';

export const MediaURL = () => {
    const DEFAULT = 'media/';
    return {
        ROUTER : {
            BASE : BASE_URL + DEFAULT,
        },
        REDIRECT : {
            BASE : BASE_URL + DEFAULT,
        }
    };
};