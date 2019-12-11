import { createUploadLink } from 'apollo-upload-client';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const isDevelopment = process.env.NODE_ENV === "development";

const URL_BASE_SERVER_API = isDevelopment ? "http://"+window.location.hostname+":4040/" : "https://api.rbernardes.com.br/";
const URL_BASE_API = URL_BASE_SERVER_API+"api";

const httpLink = createUploadLink({
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

export async function mutation(query, input, ...params){
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
                        input,
                        ...params
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

export async function mutationFile(body, ...params){
    return (
        window.fetch(
            URL_BASE_API, 
            {
                method: 'POST',
                body : body
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