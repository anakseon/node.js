const express = require("express");
const path = require("path");
const app = express();

// Обработчик для главной страницы
let homePageViews = 0;
app.get("/", (req, res) => {
  homePageViews++;
  res.sendFile(path.join(__dirname, "index.html"));
});

// Обработчик для страницы "О нас"
let aboutPageViews = 0;
app.get("/about", (req, res) => {
  aboutPageViews++;
  res.sendFile(path.join(__dirname, "about.html"));
});

// Обработка несуществующих роутов (404)
app.use((req, res, next) => {
  res.status(404).send("Страница не найдена");
});

// Получение количества просмотров для каждой страницы
app.get("/pageViews", (req, res) => {
  res.json({ homePageViews, aboutPageViews });
});

app.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
