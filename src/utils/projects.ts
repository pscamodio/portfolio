import { readFile } from "fs/promises";
import matter from "gray-matter";
import { markdownToHtml } from "./markdown";

export type ProjectData = {
    title: string;
    thumbnail: string;
    content: string;
}

export async function loadProject(slug: string): Promise<ProjectData> {
    const projectSource = await readFile(`data/projects/${slug}.md`, "utf8");
    const parsed = matter(projectSource);
    const content = await markdownToHtml(parsed.content);
    return {
        title: parsed.data.title,
        thumbnail: parsed.data.thumbnail,
        content: content,
    };
}