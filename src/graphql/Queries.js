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
