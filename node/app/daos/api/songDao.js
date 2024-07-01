const con = require('../../config/dbconfig')

const songDao = {
    table: 'song',

    findAll: (res, table)=> {
        con.execute(
            `SELECT so.song_id, so.title, so.artist_id, so.band_id, so.album_id,
            CASE
                WHEN ar.alias IS NULL THEN ''
                ELSE ar.alias
                END alias,
            CASE
                WHEN ar.fName IS NULL THEN ''
                ELSE ar.fName
                END fName,
            CASE
                WHEN ar.lName IS NULL THEN ''
                ELSE ar.lName
                END lName,
            CASE
                WHEN b.band IS NULL THEN ''
                ELSE b.band
                END band,
            CASE
                WHEN al.album IS NULL THEN ''
                ELSE al.album
                END album,
            so.yr_released,
            so.price,
            so.features,
            so.song_cover

            FROM ${table} so
            LEFT OUTER JOIN artist ar USING (artist_id)
            LEFT OUTER JOIN band b USING (band_id)
            LEFT OUTER JOIN album al using (album_id)
            ;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length == 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(('DAO ERROR: ', error));
                }
            }
        )
    },

    findById: (res, table, id)=> {
        con.execute(
            `SELECT so.song_id, so.title, so.artist_id, so.band_id, so.album_id,
            CASE
                WHEN ar.alias IS NULL THEN ''
                ELSE ar.alias
                END alias,
            CASE
                WHEN ar.fName IS NULL THEN ''
                ELSE ar.fName
                END fName,
            CASE
                WHEN ar.lName IS NULL THEN ''
                ELSE ar.lName
                END lName,
            CASE
                WHEN b.band IS NULL THEN ''
                ELSE b.band
                END band,
            CASE
                WHEN al.album IS NULL THEN ''
                ELSE al.album
                END album,
            so.yr_released,
            so.price,
            so.features,
            so.song_cover
            FROM ${table} so
            LEFT OUTER JOIN artist ar USING (artist_id)
            LEFT OUTER JOIN band b USING (band_id)
            LEFT OUTER JOIN album al USING (album_id)
            WHERE ${table}_id = ${id};`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length == 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    },

    create: (req, res, table)=> {
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "no fields to create"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `INSERT INTO ${table}
                SET ${fields.join(' = ?, ')} = ?;`,
                values,
                (error, dbres)=> {
                    if (!error) {
                        res.send(`Last id: ${dbres.insertId}`)
                    } else {
                        console.log('DAO ERROR: ', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },

    update: (req, res, table)=> {
        if (isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "No fields to update"
            })
        } else if (Object.keys(req.bod).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to update"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `UPDATE ${table}
                SET ${fields.join(' = ?, ')} = ? WHERE ${table}_id = ?;`,
                [...values, req.params.id],
                (error, dbres)=> {
                    if (!error) {
                        res.send(`Changed ${dbres.changedRows} row(s)`)
                    } else {
                        console.log('DAO ERROR: ', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },

    sort: (req, res)=> {
        con.execute(
            `SELECT * FROM song ORDER BY title;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } console.log('DAO ERROR: ', error)
            }
        )
    }
}

module.exports = songDao