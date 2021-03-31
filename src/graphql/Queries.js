import {gql} from '@apollo/client'

export const ME=gql`

    query Me{
        me{
            username
            id
            email
    
         }
    }


`
export const CLUBS=gql`

    query Clubs($limit:Int!){
        clubs(limit:$limit){
            Name
        }
    }

`
