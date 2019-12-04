import { TablesAPI } from './TablesAPI';
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { getToken } from '../Storage/Session';

const URL_BASE_SERVER_API = "http://"+window.location.hostname+":4040/";
const URL_BASE_API = URL_BASE_SERVER_API+"api";

const httpLink = createHttpLink({
    uri: URL_BASE_API
})
  
export const clientGraphql = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})


export async function query(body){
    return (
        window.fetch(
            URL_BASE_API, 
            {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    query: body
                })
            }
        ).then( r => { 
            if(r.ok){
                return r.json();
            } 
            throw new Error(404);
        })
    );  
} 

export async function mutation(query, input){
    return (
        window.fetch(
            URL_BASE_API, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    query,
                    variables : {
                        input
                    }
                })
            }
        ).then( r => { 
            if(r.ok){
                return r.json();
            } 
            throw new Error(404);
        })
    );  
} 

export async function findPOSTImage(url,body){
    return (
        await window.fetch(
            url, 
            {
                method : 'POST', 
                body : body,
            }
        ).then( r => { 
            if(r.ok){
                return r.json();
            } 
            throw new Error(404);
        })
    );  
} 

export async function listBags(){
    return await query(`{
        response : bags {
            ${TablesAPI.BAG.NAME}
            ${TablesAPI.BAG.LINK}
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

export async function listMedias(){
    return await query(`{
        response : medias {
            ${TablesAPI.MEDIA.LINK}
            image {
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

export async function validateLogin(login, password){ 
    var query = `mutation LoginValidate($input : Login){
        response : loginValidate(input: $input){
            token {
                ${TablesAPI.TOKEN_ACCESS.TOKEN}
            }
        }
    }
    `;
    return await mutation(query, {
        login : login,
        password : password
    })
}

export async function updatePositionBag(bags){ 
    var query = `mutation MutationUpdatePositionBags($input : InputUpdatePositionBags){
        response : updatePositionBags(input: $input)
    }
    `;
    return await mutation(query, {
        bags : bags,
        token : getToken()
    })
}

export async function addMedia(link, image){
    var form = new FormData();
    form.append('token', getToken());
    form.append('link', link);
    form.append('image', image);
    return await findPOSTImage(URL_BASE_SERVER_API+'media/', form);
}