import {gql} from '@apollo/client'

export const LOGIN=gql`

    mutation Login($input:UsersPermissionsLoginInput!){
        login(input:$input){
            jwt
            user{
                username
                id
                email
            }
        }
    }
`