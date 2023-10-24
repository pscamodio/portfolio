import { readFile } from "fs/promises";
import matter from "gray-matter";

export type ProjectData = {
    title: string;
    markdown: string;
}

export async function loadProject(slug: string): Promise<ProjectData> {
    const projectSource = await readFile(`data/projects/${slug}.md`, "utf8");
    const parsed = matter(projectSource);
    return {
        title: parsed.data.title,
        markdown: parsed.content,
    };
}