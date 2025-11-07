import express from "express";
import nunjucks from "nunjucks";
import path from "path";
import { PostController } from "./controller/postController";
import { PostModel } from "./model/postModel";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

nunjucks.configure(path.join(__dirname, "view"), {
  autoescape: true,
  express: app,
});


app.get("/", (req, res) => {
  const posts = PostModel.getAll();
  res.render("index.njk", { title: "Home", posts });
});

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
