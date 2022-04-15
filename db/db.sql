CREATE DATABASE tcitchallenge;

CREATE TABLE posts (
    id SERIAL NOT NULL PRIMARY KEY,
    post_name VARCHAR ( 50 ) NOT NULL,
    post_content VARCHAR ( 255 ) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO posts (post_name,post_content) VALUES ('first post','hello world');