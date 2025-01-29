const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
  try {
    const postsDirectory = path.join(process.cwd(), "src", "posts");
    const files = fs.readdirSync(postsDirectory);

    const posts = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const content = fs.readFileSync(
          path.join(postsDirectory, file),
          "utf8"
        );
        const stats = fs.statSync(path.join(postsDirectory, file));
        return {
          slug: file.replace(".md", ""),
          content,
          created: stats.birthtime,
          modified: stats.mtime,
        };
      });

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error loading posts:", error);
    res.status(500).json({ error: "Failed to load posts" });
  }
}
