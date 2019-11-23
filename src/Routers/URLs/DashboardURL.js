import { BASE_URL } from './URLs';

export const DashboardURL = () => {
    const DEFAULT = 'dashboard/';
    const BASE = BASE_URL + DEFAULT;
    const BASE_MEDIA = BASE + 'media/';
    const BASE_BAG = BASE + 'bag/';
    return {
        ROUTER : {
            BASE : BASE,
            BAG : BASE_BAG,
            MEDIA : BASE_MEDIA,
        },
        REDIRECT : {
            BASE : BASE,
            BAG : BASE_BAG,
            MEDIA : BASE_MEDIA,
        }
    };
};