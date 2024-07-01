DROP DATABASE IF EXISTS songdb;
CREATE DATABASE songdb;
USE songdb;

CREATE TABLE artist (
    artist_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    fName VARCHAR(30) NOT NULL,
    lName VARCHAR(30) NOT NULL,
    alias VARCHAR(30),
    CONSTRAINT pk_artist PRIMARY KEY (artist_id)
);

CREATE TABLE band (
    band_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    band VARCHAR(50) NOT NULL,
    CONSTRAINT pk_band PRIMARY KEY (band_id)
);

CREATE TABLE genre (
    genre_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    genre VARCHAR(50) NOT NULL,
    CONSTRAINT pk_genre PRIMARY KEY (genre_id)
);

CREATE TABLE album (
    album_id MEDIUMINT UNSIGNED AUTO_INCREMENT,
    album VARCHAR(100) NOT NULL,
    CONSTRAINT pk_album PRIMARY KEY (album_id)
);

CREATE TABLE song (
    song_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    artist_id MEDIUMINT UNSIGNED,
    band_id MEDIUMINT UNSIGNED,
    yr_released YEAR,
    album_id MEDIUMINT UNSIGNED,
    price DECIMAL(5,2),
    features BOOLEAN,
    song_cover MEDIUMTEXT,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    CONSTRAINT pk_song PRIMARY KEY (song_id),
    CONSTRAINT fk_artist FOREIGN KEY (artist_id) REFERENCES artist (artist_id),
    CONSTRAINT fk_band FOREIGN KEY (band_id) REFERENCES band (band_id)
);

CREATE TABLE song_to_genre (
    song_id SMALLINT UNSIGNED, 
    genre_id TINYINT UNSIGNED,
    CONSTRAINT fk_song FOREIGN KEY (song_id) REFERENCES song (song_id),
    CONSTRAINT fk_genre FOREIGN KEY (genre_id) REFERENCES genre (genre_id)
);

-- make user table

CREATE TABLE user (
    user_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    fName VARCHAR(20) NOT NULL,
    lName VARCHAR (20) NOT NULL,
    email VARCHAR (40) UNIQUE NOT NULL,
    username VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_user_id PRIMARY KEY (user_id)
);


-- added image columns for artist, band, and album

ALTER TABLE artist (
    ADD COLUMN artist_image MEDIUMTEXT
);

ALTER TABLE band (
    ADD COLUMN band_image MEDIUMTEXT
);

ALTER TABLE album (
    ADD COLUMN album_image MEDIUMTEXT
);