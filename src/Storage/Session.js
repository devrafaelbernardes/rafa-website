import Cookies from 'universal-cookie';
const cookies = new Cookies();
const TIME_EXPIRES_COOKIE = 31536000000; // 365 * (24 * 60 * 60 * 1000), SEGUNDOS DE UM ANO
const PATH_COOKIE = '/';

const LOGIN = "rb_Login_u";
const LANGUAGE = "rb_LANGUAGE";
// FIM --> CONSTS TIPES COOKIES 

const setCookie = (cookie, data) => {
    return cookies.set(cookie, data, { path: PATH_COOKIE, expires: new Date(Date.now()+TIME_EXPIRES_COOKIE) });
}
const getCookie = (cookie) => {
    return cookies.get(cookie);
}
const removeCookie = (cookie) => {
    return cookies.remove(cookie, { path: PATH_COOKIE, expires: new Date(Date.now()+TIME_EXPIRES_COOKIE) });
}

export const milissecondsDay = (day) => {
    return day * 86400000; // 86400000(24 * 60 * 60 * 1000) É A QUANTIDADE DE MILISSEGUNDOS DE 1 DIA
}

export const getToken = () => {
    return getCookie(LOGIN);
}

export const setToken = (data) => {
    return setCookie(LOGIN, JSON.stringify(data));
}

export const isAuthenticated = () => {
    const login = getToken();
    return login !== null && login !== undefined;
}

export const clearToken = () => {
    removeCookie(LOGIN);
}


// --------------- LANGUAGE ---------------
export const PT_BR = { language : "pt-BR", currency : "BRL" };
export const USD = { language : "en-US", currency : "USD" };


export const setLanguage = (data) => {
    return setCookie(LANGUAGE, JSON.stringify(data));
}

export const getLanguage = () => {
    var language = getCookie(LANGUAGE);
    if(language === PT_BR){
        return language;
    }else{
        setLanguage(PT_BR);
    }
    return getCookie(LANGUAGE);
}