import { gql } from '@apollo/client'

export const LOAD_MOVIES = gql`
    query {
        movies {
            id
            name
            genre
        }
    }
`

export const LOAD_DIRECTORS = gql`
    query{
        directors {
            id
            name
            age
        }
    }
`