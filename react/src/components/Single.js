import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Single =()=> {

    const [ data, setData] = useState({})
    const params = useParams()

    const url = `http://localhost:3005/api/${params.path}/${params.id}`

    useEffect(()=> {
        axios.get(url).then(res => setData(res.data))
    }, [])

    console.log(data);

    return(
        <main className='main' id='singleMain'>
            <div className='container'>
                <div className='card' id='singleCard'>
                    <img src={`/images/${data.song_cover}`} alt={`${data.title}`} class="img-fluid image rounded" />   
                    <div className='card-body'>
                        <h3 className='heading title' id='singleHeading'>{data.title}</h3>
                        <p className='sub-text artist-name text-capitalize' id='singleSubtext'>{data.band || data.alias || `${data.fName} ${data.lName}`}</p>
                        <p className='sub-text album' id='singleSubtext'>{data.album}</p>
                        <p className='sub-text year-released' id='singleSubtext'>{data.yr_released}</p>
                        <p className='sub-text price' id='singleSubtext'>${data.price}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Single