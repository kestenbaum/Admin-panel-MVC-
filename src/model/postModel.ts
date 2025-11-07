import fs from "fs";
import path from "path";

export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}

const dataPath = path.join(__dirname, "..", "..", "data", "posts.json");

function readData(): Post[] {
  if (!fs.existsSync(dataPath)) return [];
  const fileContent = fs.readFileSync(dataPath, "utf8");
  if (!fileContent.trim()) return [];
  return JSON.parse(fileContent) as Post[];
}

function writeData(posts: Post[]): void {
  fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2), "utf8");
}

export const PostModel = {
  getAll(): Post[] {
    return readData();
  },

  getById(id: string): Post | undefined {
    return readData().find((p) => p.id === id);
  },

  create(post: Post): void {
    const posts = readData();
    posts.push(post);
    writeData(posts);
  },

  update(id: string, partial: Partial<Post>): void {
    const posts = readData().map((p) =>
      p.id === id ? { ...p, ...partial } : p
    );
    writeData(posts);
  },

  remove(id: string): void {
    const posts = readData().filter((p) => p.id !== id);
    writeData(posts);
  },
};
