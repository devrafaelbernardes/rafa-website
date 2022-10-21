import { isDevelopment } from "./InfoSite";

const STORE = "http://www.lojarbernardes.com.br/";
export const URL_STORE = STORE;
export const URL_COURSES =
  "https://www.lojarbernardes.com.br/cursos-online-ct-2915c3";
export const URL_BAGS = "https://www.lojarbernardes.com.br/bolsas-ct-311d9f";
export const URL_MODELINGS =
  "https://www.lojarbernardes.com.br/modelagens-ct-278491";
export const URL_CONTACT = STORE + "contact.html";
export const URL_WORKSHOP = STORE + "workshop-ct-257942";
export const URL_DASHBOARD = isDevelopment
  ? "http://localhost:3010/"
  : "https://dashboard.rbernardes.com.br/";
export const URL_EAD = isDevelopment
  ? "http://localhost:3020/"
  : "https://ead.rbernardes.com.br/";
