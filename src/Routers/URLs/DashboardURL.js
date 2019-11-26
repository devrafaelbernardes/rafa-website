import { BASE_URL } from './URLs';

export const DashboardURL = () => {
    const DEFAULT = 'dashboard/';
    const BASE = BASE_URL + DEFAULT;
    const BASE_MEDIA = BASE + 'media/';
    const BASE_BAG = BASE;
    const BASE_ADD_BAG = BASE + 'addbag/';
    const BASE_EDIT_BAG = BASE + 'editbag/';
    const BASE_ADD_MEDIA = BASE + 'addmedia/';
    const BASE_EDIT_MEDIA = BASE + 'editmedia/';
    return {
        ROUTER : {
            BASE : BASE,
            BAG : BASE_BAG,
            MEDIA : BASE_MEDIA,
            ADD_BAG : BASE_ADD_BAG,
            ADD_MEDIA : BASE_ADD_MEDIA,
            EDIT_BAG : BASE_EDIT_BAG + ":bag?",
            EDIT_MEDIA : BASE_EDIT_MEDIA + ":media?",
        },
        REDIRECT : {
            BASE : BASE,
            BAG : BASE_BAG,
            MEDIA : BASE_MEDIA,
            ADD_BAG : BASE_ADD_BAG,
            ADD_MEDIA : BASE_ADD_MEDIA,
            EDIT_BAG : (link) => BASE_EDIT_BAG + link,
            EDIT_MEDIA : (link) => BASE_EDIT_MEDIA + link,
        }
    };
};