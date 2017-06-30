CREATE TABLE IF NOT EXISTS users (
   user_id SERIAL primary key
   , name varchar(255)
   , email varchar(255) UNIQUE
   , password varchar(255)
);

CREATE TABLE IF NOT EXISTS events (
   event_id SERIAL primary key
   , title varchar(255)
   , allDay boolean
   , start date('?')
   , end date('?')
)