'use strict';

const express = require(`express`);

const registerRoutes = require(`./routes/register`);
const loginRoutes = require(`./routes/login`);
const myRoutes = require(`./routes/my`);
const articlesRoutes = require(`./routes/articles`);
const searchRoutes = require(`./routes/search`);
const categoriesRoutes = require(`./routes/categories`);
const mainRoutes = require(`./routes/main`);

const DEFAULT_PORT = 8080;

const app = express();

app.use(`/register`, registerRoutes);
app.use(`/login`, loginRoutes);
app.use(`/my`, myRoutes);
app.use(`/articles`, articlesRoutes);
app.use(`/search`, searchRoutes);
app.use(`/categories`, categoriesRoutes);
app.use(`/`, mainRoutes);

app.listen(DEFAULT_PORT, () => {
  console.info(`Сервер запущен на порту ${DEFAULT_PORT}`);
});
