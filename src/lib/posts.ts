import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const baseDir = path.join(process.cwd(), "src", "blogPosts");

export function getSortedPostsMetaData() {
  // get all the file names
  const fileNames = fs.readdirSync(baseDir);
  const allPostsMetaDeta = fileNames.map((fileName) => {
    // remove md from file filename
    const fileId = fileName.replace(/\.md$/, "");

    //read markdown file as a string
    const fullPath = path.join(baseDir, fileName);
    const fileContent = fs.readFileSync(fullPath);
    //use gray matter to parse the post metadata section
    const matterResult = matter(fileContent);

    const blogPost: BlogPostMetaData = {
      id: fileId,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };
    return blogPost;
  });

  // sorting posts by date
  return allPostsMetaDeta.sort((a: BlogPostMetaData, b: BlogPostMetaData) =>
    a.date < b.date ? 1 : -1,
  );
}

export async function getBlogPost(id: string) {
  const fullPath = path.join(baseDir, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath);

  // use gray matter to parse meta data of file
  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml: processedContent.toString(),
  };
}
