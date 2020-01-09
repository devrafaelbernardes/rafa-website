import { BASE_URL } from './URLs';

export const SocialNetworkURL = () => {
    const DEFAULT = 'socialNetwork/';
    return {
        ROUTER : {
            BASE : BASE_URL + DEFAULT,
        },
        REDIRECT : {
            BASE : BASE_URL + DEFAULT,
        }
    };
};