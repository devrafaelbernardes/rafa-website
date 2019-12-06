import gql from 'graphql-tag';



export const ADD_BAG = gql`
    mutation MutationAddBag($input : InputAddBag, $first_image : Upload, $second_image : Upload){
        response : addBag(input: $input, first_image : $first_image, second_image : $second_image)
    }
`;

export default function(input, params){
    return {
        variables: { input, ...params }
    }
};