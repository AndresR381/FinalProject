import { useState, useEffect } from "react"
import axios from 'axios'

import Card from "./Card"

const Songs =()=> {

    const [ songs, setSongs ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/song')
        .then(res =>{
            setSongs(res.data)
        })
    }, [])

    const songsCards = songs.map(song => {
        return <Card
            key={song.song_id}
            id={song.song_id}
            name={song.title}
            imgUrl={song.song_cover}
            path={'/song'}
        />
    })
    
    return (
        <main className="main" id="songsMain">
            <div className="container">
                <h2>songs</h2>
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {songsCards}
                </div>
            </div>
        </main>
    )
}

export default Songs