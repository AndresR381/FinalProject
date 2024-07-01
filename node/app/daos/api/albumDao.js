const con = require('../../config/dbconfig')

const albumDao = {
    table: 'album',

    getInfo: (res, table)=> {
        con.execute(
            `SELECT so.song_id, so.title, so.yr_released, so.song_cover, so.album_id, so.artist_id,
            CASE
                WHEN al.album IS NULL THEN ''
                ELSE al.album
                END album,
            ar.artist_id,
            FROM song so
            JOIN album al USING (album_id)
            JOIN artist ar USING (artist_id)
            ;`,
            (error, rows)=> {
                if (!error) {
                    res.json(rows)
                } else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    },

    findById: (res, table, id)=> {
        con.execute(
            `SELECT so.song_id, so.title, so.yr_released, so.song_cover, so.album_id,
            CASE
                WHEN al.album IS NULL THEN ''
                ELSE al.album
                END album,
            ar.artist_id,
            FROM song so
            JOIN album al USING (album_id)
            JOIN artist ar USING (artist_id)
            WHERE ${table}_id = ${id}
            ;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length == 1) {
                        res.json(rows)
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
                "message": "Id must be a number"
            })
        } else if (Object.keys(req.body).length === 0) {
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
                        console.log('DAO ERROR:', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },

    sort: (req, res)=> {
        con.execute(
            `SELECT * FROM album ORDER BY album;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } console.log('DAO ERROR:', error)
            }
        )
    }
}

module.exports = albumDao