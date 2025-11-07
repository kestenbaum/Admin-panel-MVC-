import express from "express";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import path from "path";

import { Request, Response } from "express";

const app = express();
const viewsPath = path.join(process.cwd(), 'src/view');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

nunjucks.configure(viewsPath, {
  autoescape: true,
  express: app
});

app.get("/", (req: Request, res: Response) => {
  res.render("index.njk", { posts: [] });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
