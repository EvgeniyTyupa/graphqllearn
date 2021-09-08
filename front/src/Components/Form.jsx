import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { LOAD_DIRECTORS } from '../GraphQL/Queries';
import { ADD_MOVIE_MUTATION } from '../GraphQL/Mutations';

const Form = (props) => {
    const { loading, data } = useQuery(LOAD_DIRECTORS)
    const [addMovie, { error }] = useMutation(ADD_MOVIE_MUTATION)

    const [name, setName] = useState("");
    const [genre, setGenre] = useState("")
    const [directorId, setDirectorId] = useState("")

    const [directors, setDirectors] = useState([])

    useEffect(() => {
        if(data){
            setDirectors(data.directors)
        }
    }, [data])

    const submit = () => {
        addMovie({
            variables: {
                name, 
                genre, 
                directorId
            }
        })
        if(error) {
            console.log(error)
        }
    }

    return(
        <div>
            <input type="text" placeholder="Movie name" onChange={(e) => {setName(e.target.value)}}/>
            <input type="text" placeholder="Movie genre" onChange={(e) => {setGenre(e.target.value)}}/>
            <select onChange={(e) => setDirectorId(e.target.value)}>
                {directors.map(item => <option value={item.id}>{item.name}</option>)}
            </select>
            <button onClick={submit}>Add Movie</button>
        </div>
    )
}

export default Form