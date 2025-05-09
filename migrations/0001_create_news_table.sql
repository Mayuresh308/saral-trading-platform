CREATE TABLE IF NOT EXISTS news (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  link TEXT NOT NULL,
  summary TEXT,
  image TEXT,
  publisher TEXT,
  sentiment TEXT,
  published_at TEXT NOT NULL
);
