import { BASE_URL } from './URLs';

export const CoursesURL = () => {
    const DEFAULT = 'courses/';
    return {
        ROUTER : {
            BASE : BASE_URL + DEFAULT,
        },
        REDIRECT : {
            BASE : BASE_URL + DEFAULT,
        }
    };
};