import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { LOAD_DIRECTORS } from '../GraphQL/Queries'

const GetDirectors = (props) => {
    const { error, loading, data } = useQuery(LOAD_DIRECTORS)
    const [directors, setDirectors] = useState([])

    useEffect(() => {
        if(data){
            setDirectors(data.directors)
        }
    }, [data])

    return(
        <div>
            
        </div>
    )
}