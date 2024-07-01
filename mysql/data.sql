INSERT INTO artist (fName, lName, alias)
VALUES
('SALOMON', 'HOYOS', 'FEID'),
('CHRISTOPHER', 'WOOD', 'BRENT FAIYAZ'),
('CHRISTOPHER', 'BREAUX', 'FRANK OCEAN'),
('GEORGE', 'MILLER', 'JOJI'),
('DAVID', 'BURKE', 'D4VD'),
('ARISTOS', 'PETROU', 'DUCKBOY'),
('BENITO', 'OCASIO', 'BAD BUNNY'),
('TOMMY', 'RICHMAN', NULL),
('ALEXANDER', 'GUMUCHIAN', 'BBNO$'),
('DAYSTAR', 'PETERSON', 'TORY LANEZ'),
('BENJAMIN', 'LASKY', 'QUADECA'),
('NATHAN', 'FULLER', '1NONLY'),
('JORDAN', 'CARDY', 'RAT BOY'),
('ANTHONY', 'SANTOS', 'ROMEO SANTOS'),
('KARLY', 'LOAIZA', 'KALI UCHIS');

INSERT INTO band (band)
VALUES
('BETWEEN FRIENDS'),
('NIGHT TAPES');

INSERT INTO album (album)
VALUES
('MOR, NO LE TEMAS A LA OSCURIDAD'),
('LARGER THAN LIFE'),
('BLONDE'),
('NECTAR'),
('EXISTENTIAL HYMNS FOR THE AVERAGE SIGMA [VOL. 9]'),
("I LOVE MY BOY, SHE'S MY BOY"),
('CUTIE'),
('DATA'),
('MY OH MY'),
('BALLAD 1'),
('UN VERANO SIN TI'),
('GARAGE SALE'),
('ALONE AT PROM'),
('SCRAPYARD'),
('HOMESICK'),
('3M3N2 KBRN'),
('SIN MIEDO (DEL AMOR Y OTROS DEMONIOS)'),
('ASSISTED MEMORIES'),
('FORMULA, VOL 1');

INSERT INTO song (title, artist_id, band_id, yr_released, album_id, price, features)
VALUES
('ROMÁNTICOS DE LUNES', 1, NULL, 2023, 1, 1.29, FALSE),
('UPSET', 2, NULL, 2023, 2, 1.29, TRUE),
('NIGHTS' 3, NULL, 2016, 3, 1.29, FALSE),
('MODUS', 4, NULL, 2020, 4, 1.29, FALSE),
('FEEL IT', 5, NULL, 2024, NULL, 1.29, FALSE),
('EXCALIBUR', 6, NULL, 2023, 5, 1.29, FALSE),
('YONAGUNI', 7, NULL, 2021, NULL, 1.29, FALSE),
('BB', NULL, 1, 2023, 6, 1.29, TRUE),
('MORE', NULL, 1, 2022, 7, 1.29, FALSE),
('EL CIELO', 1, NULL, 2023, NULL, 1.29, TRUE),
('MILLION DOLLAR BABY', 8, NULL, 2024, NULL, 1.29, FALSE),
('LO SIENTO BB', 7, NULL, 2021, 8, 1.29, TRUE),
('HELP HERSELF', 9, NULL, 2021, 9, 1.29, FALSE),
('TEST DRIVE', 4, NULL, 2018, 10, 1.29, FALSE),
('OJITOS LINDOS', 7, NULL, 2023, 11, 1.29, TRUE),
('DRIVE OVER ME', NULL, 1, 2024, 12, 1.29, FALSE),
('LAVENDER SUNFLOWER', 10, NULL, 2021, 13, 1.29, FALSE),
('GUESS WHO?', 11, NULL, 2024, 14, 1.29, FALSE),
('MINE', 12, NULL, 2022, 15, 1.29, FALSE),
('DUSTCUTTER', 11, NULL, 2024, 14, 1.29, FALSE),
('COCO CHANEL', 7, NULL, 2023, 16, 1.29, TRUE),
('UNDER MY SKIN', 11, NULL, 2024, 14, 1.29, FALSE),
('TAROT', 7, NULL, 2023, 11, 1.29, TRUE),
("WHO'S READY FOR TOMORROW", 13, NULL, 2020, NULL, 1.29, FALSE),
('LA LUZ', 14, NULL, 2020, 17, 1.29, TRUE),
('IGUAL QUE UN ÁNGEL', 14, NULL, 2020, 17, 1.29, TRUE),
('DRIFTING', NULL, 2, 2024, 18, 1.29, FALSE),
('LOTTO', NULL, 1, 2023, 6, 1.29, FALSE),
('LA DIABLA', 15, NULL, 2011, 19, 1.29, FALSE),
('WAY TOO MANY FRIENDS', 11, NULL, 2024, 14, 1.29, FALSE);

-- INSERT INTO song (title, artist_id, band_id, yr_released, album_id, price, features)
-- VALUES
-- ('DRIFTING', NULL, 2, 2024, 18, 1.29, FALSE),
-- ('LOTTO', NULL, 1, 2023, 6, 1.29, FALSE),
-- ('LA DIABLA', 15, NULL, 2011, 19, 1.29, FALSE),
-- ('WAY TOO MANY FRIENDS', 11, NULL, 2024, 14, 1.29, FALSE);

INSERT INTO genre (genre)
VALUES
('reggaeton'),
('r&b'),
('indie'),
('alternative'),
('punk'),
('hip-hop'),
('rap'),
('pop'),
('bachata'),
('soul');

INSERT INTO song_to_genre (song_id, genre_id)
VALUES
(4, 2),
(4, 10),
(5, 2),
(5, 10),
(6, 3),
(6, 4),
(7, 3),
(7, 4),
(8, 5),
(9, 1),
(10, 3),
(11, 3),
(12, 1),
(13, 6),
(14, 1),
(15, 3),
(15, 8),
(16, 3),
(16, 4),
(17, 1),
(17, 8),
(18, 3),
(18, 8),
(19, 2),
(20, 4),
(20, 6),
(21, 7),
(22, 4),
(22, 6),
(23, 1),
(24, 6),
(25, 1),
(26, 6),
(27, 1),
(28, 1),
(29, 3),
(29, 4),
(30, 3),
(30, 8),
(31, 9),
(32, 4),
(32, 6),
(32, 7);

-- ALTER TABLE song DROP COLUMN duration;

SELECT so.title,
CASE
    WHEN ar.fName IS NULL THEN ''
    ELSE ar.fName
    END fName,
CASE
    WHEN ar.lName IS NULL THEN ''
    ELSE ar.lName
    END lName,
CASE 
    WHEN ar.alias IS NULL THEN ''
    ELSE ar.alias
    END alias,
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
so.features

FROM song so
LEFT OUTER JOIN artist ar ON so.artist_id = ar.artist_id
LEFT OUTER JOIN band b ON so.band_id = b.band_id
LEFT OUTER JOIN album al ON so.album_id = al.album_id
ORDER BY yr_released;

INSERT INTO user (fName, lName, username, email, password)
VALUES (
    'andres',
    'ramirez',
    'drr33ad',
    'satchwerk@gmail.com',
    'test1234'
);                                                                                                                                  9