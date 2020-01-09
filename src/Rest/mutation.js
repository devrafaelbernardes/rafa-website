import gql from 'graphql-tag';
import { TablesAPI } from './TablesAPI';
import { mutation } from './ConfigAPI';
import { getToken } from '../Storage/Session';

export const ADD_BAG = gql`
    mutation MutationAddBag($input : InputAddBag, $first_image : Upload, $second_image : Upload){
        response : addBag(input: $input, first_image : $first_image, second_image : $second_image)
    }
`;

export const EDIT_BAG = gql`
    mutation MutationEditBag($input : InputEditBag){
        response : editBag(input: $input)
    }
`;

export const ADD_MEDIA = gql`
    mutation MutationAddMedia($input : InputAddMedia, $image : Upload){
        response : addMedia(input: $input, image : $image)
    }
`;

export const ADD_SOCIAL_NETWORK = gql`
    mutation MutationAddSocialNetwork($input : InputAddSocialNetwork, $image : Upload){
        response : addSocialNetwork(input: $input, image : $image)
    }
`;

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

export async function updatePositionMedias(medias){ 
    var query = `mutation MutationUpdatePositionMedias($input : InputUpdatePositionMedias){
        response : updatePositionMedias(input: $input)
    }
    `;
    return await mutation(query, {
        medias : medias,
        token : getToken()
    })
}

export async function updatePositionSocialNetworks(social_networks){ 
    var query = `mutation MutationUpdatePositionSocialNetworks($input : InputUpdatePositionSocialNetwork){
        response : updatePositionSocialNetworks(input: $input)
    }
    `;
    return await mutation(query, {
        social_networks : social_networks,
        token : getToken()
    })
}

export async function removeBag(code){ 
    var query = `mutation MutationRemoveBag($input : InputRemove){
        response : removeBag(input: $input)
    }
    `;
    return await mutation(query, {
        code,
        token : getToken()
    })
}

export async function removeMedia(code){ 
    var query = `mutation MutationRemoveMedia($input : InputRemove){
        response : removeMedia(input: $input)
    }
    `;
    return await mutation(query, {
        code,
        token : getToken()
    })
}

export async function removeSocialNetwork(code){ 
    var query = `mutation MutationRemoveSocialNetwork($input : InputRemove){
        response : removeSocialNetwork(input: $input)
    }
    `;
    return await mutation(query, {
        code,
        token : getToken()
    })
}

export default function(input, params){
    return {
        variables: { input, ...params }
    }
};