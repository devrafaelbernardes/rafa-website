import { BASE_URL } from './URLs';

export const LoginURL = () => {
    const DEFAULT = 'login/';
    return {
        ROUTER : {
            BASE : BASE_URL + DEFAULT,
        },
        REDIRECT : {
            BASE : BASE_URL + DEFAULT,
        }
    };
};