import { TablesAPI } from './TablesAPI';
import { query } from './ConfigAPI';
import { getToken } from '../Storage/Session';

export async function listBags(){
    return await query(`{
        response : bags {
            ${TablesAPI.BAG.CODE}
            ${TablesAPI.BAG.NAME}
            ${TablesAPI.BAG.LINK}
            ${TablesAPI.BAG.DEPOSIT}
            ${TablesAPI.BAG.DISCOUNT_PRICE}
            ${TablesAPI.BAG.TOTAL_PRICE}
            ${TablesAPI.BAG.INSTALLMENTS}
            ${TablesAPI.BAG.INSTALLMENTS_PRICE}
            first_image {
                ${TablesAPI.IMAGE.LOCATION}
            }
            second_image {
                ${TablesAPI.IMAGE.LOCATION}
            }
        }
    }`);
} 

export async function listBagsToEditPosition(){
    return await query(`{
        response : bags {
            ${TablesAPI.BAG.NAME}
            ${TablesAPI.BAG.LINK}
            ${TablesAPI.BAG.CODE}
            first_image {
                ${TablesAPI.IMAGE.LOCATION}
            }
        }
    }`);
}

export async function listBagsToEdit(){
    return await query(`{
        response : bags {
            ${TablesAPI.BAG.NAME}
            ${TablesAPI.BAG.CODE}
            first_image {
                ${TablesAPI.IMAGE.LOCATION}
            }
        }
    }`);
}

export async function listMediasToEditPosition(){
    return await query(`{
        response : medias {
            ${TablesAPI.MEDIA.CODE}
            image {
                ${TablesAPI.IMAGE.LOCATION}
            }
        }
    }`);
}

export async function listMedias(){
    return await query(`{
        response : medias {
            ${TablesAPI.MEDIA.LINK}
            ${TablesAPI.MEDIA.CODE}
            image {
                ${TablesAPI.IMAGE.LOCATION}
            }
        }
    }`);
}

export async function getBagToEdit({ code }){
    return await query(`{
        response : bag(code : "${code}"){
            ${TablesAPI.BAG.NAME}
            ${TablesAPI.BAG.LINK}
            ${TablesAPI.BAG.DEPOSIT}
            ${TablesAPI.BAG.DISCOUNT_PRICE}
            ${TablesAPI.BAG.TOTAL_PRICE}
            ${TablesAPI.BAG.INSTALLMENTS}
            ${TablesAPI.BAG.INSTALLMENTS_PRICE}
            first_image {
                ${TablesAPI.IMAGE.LOCATION}
            }
            second_image {
                ${TablesAPI.IMAGE.LOCATION}
            }
        }
    }`);
}

export async function currentUser(){
    return await query(`{
        response : user(token : "${getToken()}") {
            ${TablesAPI.USER.NAME}
            ${TablesAPI.USER.LASTNAME}
            fullName
        }
    }`);
}