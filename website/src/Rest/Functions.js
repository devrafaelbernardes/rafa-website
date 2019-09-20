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

export async function listaBolsas(){
    return await query(`{
        response : bolsas {
            ${TablesAPI.BOLSA.NOME}
            ${TablesAPI.BOLSA.LINK}
            ${TablesAPI.BOLSA.PRECO_DESCONTO}
            ${TablesAPI.BOLSA.PRECO_TOTAL}
            ${TablesAPI.BOLSA.PRECO_PARCELAS}
            ${TablesAPI.BOLSA.PARCELAS}
            imagens {
                ${TablesAPI.IMAGEM.CAMINHO}
            }
        }
    }`);
}

export async function listaMidias(){
    return await query(`{
        response : midias {
            ${TablesAPI.MIDIA.LINK}
            imagem {
                ${TablesAPI.IMAGEM.CAMINHO}
            }
        }
    }`);
}

export async function validateLogin(email, senha){
    var query = `mutation ValidaLogin($input : Login){
        response : validaLogin(input: $input){
            ${TablesAPI.TOKEN_ACCESS.TOKEN}
        }
    }
    `;
    return await mutation(query, {
        email : email,
        senha : senha
    })
}

export async function addMidia(link, imagem){
    var form = new FormData();
    form.append('token', getToken());
    form.append('link', link);
    form.append('image', imagem);
    return await findPOSTImage(URL_BASE_SERVER_API+'addMidia/', form);
}