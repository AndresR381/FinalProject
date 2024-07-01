const daoCommon = require("./common/daoCommon")

const songDao = {...daoCommon, ...require("./api/songDao")}
const artistDao = {...daoCommon, ...require('./api/artistDao')}
const bandDao = {...daoCommon, ...require('./api/bandDao')}
const albumDao = {...daoCommon, ...require('./api/albumDao')}
const genreDao = {...daoCommon, ...require('./api/genreDao')}
const userDao = {...daoCommon, ...require('./api/userDao')}

module.exports = {
    songDao,
    artistDao,
    bandDao,
    albumDao,
    genreDao,
    userDao
}