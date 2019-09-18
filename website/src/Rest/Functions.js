import { TablesAPI } from './TablesAPI';
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const URL_BASE_API = "http://"+window.location.hostname+":4040/api";

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