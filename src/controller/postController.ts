import { Request, Response } from "express";
import { randomUUID } from "crypto";
import { PostModel } from "../model/postModel";

export const PostController = {
  list(req: Request, res: Response) {
    const posts = PostModel.getAll();
    res.render("admin.njk", { title: "Admin", posts });
  },

  newForm(req: Request, res: Response) {
    res.render("form.njk", {
      title: "New Post",
      mode: "new",
      post: {},
    });
  },

  create(req: Request, res: Response) {
    const { title, content } = req.body;
    const post = {
      id: randomUUID(),
      title,
      content,
      date: new Date().toISOString(),
    };
    PostModel.create(post);
    res.redirect("/admin");
  },

  editForm(req: Request, res: Response) {
    const post = PostModel.getById(req.params.id);
    if (!post) {
      res.status(404).send("Post not found");
      return;
    }
    res.render("form.njk", {
      title: "Edit Post",
      mode: "edit",
      post,
    });
  },

  update(req: Request, res: Response) {
    const { title, content } = req.body;
    PostModel.update(req.params.id, { title, content });
    res.redirect("/admin");
  },

  delete(req: Request, res: Response) {
    PostModel.remove(req.params.id);
    res.redirect("/admin");
  },
};
