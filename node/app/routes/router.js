const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3005

const tables = ['song', 'artist', 'band', 'genre', 'album', 'user']

router.get('/', (req, res)=> {
    res.json({
        // 'Home': `http://localhost:${PORT}/`,
        'Songs': `http://localhost:${PORT}/api/song`,
        'Artists': `http://localhost:${PORT}/api/artist`,
        'Bands': `http://localhost:${PORT}/api/band`,
        'Genres': `http://localhost:${PORT}/api/genre`,
        'Albums': `http://localhost:${PORT}/api/album`,
        'Users': `http://localhost:${PORT}/api/user`,
    })
})

tables.forEach(table => {
    router.use(`/api/${table}`, require(`./api/${table}Routes`))
})

module.exports = router