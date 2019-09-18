import { BASE_URL } from './URLs';

export const DashboardURL = () => {
    const DEFAULT = 'dashboard/';
    return {
        ROUTER : {
            BASE : BASE_URL + DEFAULT,
        },
        REDIRECT : {
            BASE : BASE_URL + DEFAULT,
        }
    };
};