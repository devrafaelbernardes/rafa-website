import { isDevelopment } from "./InfoSite";

const STORE = 'http://www.lojarbernardes.com.br/';
export const URL_STORE = STORE;
export const URL_CONTACT = STORE + 'contact.html';
export const URL_WORKSHOP = STORE + 'workshop-ct-257942';
export const URL_DASHBOARD = isDevelopment ? 'http://localhost:3010/' : 'https://dashboard.rbernardes.com.br/';