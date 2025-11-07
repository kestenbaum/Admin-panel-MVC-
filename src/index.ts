import express from "express";
import nunjucks from "nunjucks";
import path from "path";
import { PostController } from "./controller/postController";

const app = express();

// статика (если понадобится)
app.use(express.static(path.join(__dirname, "..", "public")));

// парсинг body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// nunjucks
nunjucks.configure(path.join(__dirname, "view"), {
  autoescape: true,
  express: app,
});

// главная (пока без данных)
app.get("/", (req, res) => {
  res.render("index.njk", { title: "Home", posts: [] });
});

// админ-маршруты CRUD
app.get("/admin", PostController.list);
app.get("/admin/new", PostController.newForm);
app.post("/admin/new", PostController.create);
app.get("/admin/edit/:id", PostController.editForm);
app.post("/admin/edit/:id", PostController.update);
app.get("/admin/delete/:id", PostController.delete);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
