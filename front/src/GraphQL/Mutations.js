import { gql } from "@apollo/client"

export const ADD_MOVIE_MUTATION = gql`
    mutation addMovie(
        $name: String! 
        $genre: String! 
        $directorId: ID
    ) {
        addMovie(
            name: $name 
            genre: $genre 
            directorId: $directorId
        ) {
            id
            name
            genre
            director {
                name
            }
        }
    }
`