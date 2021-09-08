import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_MOVIES } from '../GraphQL/Queries'

const GetUsers = (props) => {
    const { error, loading, data } = useQuery(LOAD_MOVIES)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        if(data){
            setMovies(data.movies)
        }
    }, [data])

    return(
        <div>

        </div>
    )
}

export default GetUsers