CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL
  email VARCHAR(255) UNIQUE NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS jobapps (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  status VARCHAR(255),
  company VARCHAR(255),
  jobtitle VARCHAR(255),
  linktoapp TEXT,
  datesubmitted DATE,
  followup TEXT,
  intcontactname TEXT,
  intcontactemail TEXT,
  notes TEXT
);
