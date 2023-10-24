import { readFile, readdir,  } from "fs/promises";
import matter from "gray-matter";
import { markdownToHtml } from "./markdown";

export type ProjectData = {
    slug: string;
    title: string;
    thumbnail: string;
    content: string;
}

export async function loadProject(slug: string): Promise<ProjectData | undefined> {
    try {
        const projectSource = await readFile(`data/projects/${slug}.md`, "utf8");
        const parsed = matter(projectSource);
        const content = await markdownToHtml(parsed.content);
        return {
            slug,
            title: parsed.data.title,
            thumbnail: parsed.data.thumbnail,
            content: content,
        };
    } catch {
        return undefined;
    }
}

export async function allProjects(): Promise<string[]> {
    return (await readdir("data/projects")).filter((f) => f.endsWith(".md")).map((f) => f.replace(".md", ""));
}

export async function allProjectsMeta(): Promise<Omit<ProjectData, "content">[]> {
    const projects = (await readdir("data/projects")).filter((f) => f.endsWith(".md"));

    return await Promise.all(projects.map(async (p) => {
        const projectSource = await readFile(`data/projects/${p}`, "utf8");
        const meta = matter(projectSource);
        return {
            slug: p.replace(".md", ""),
            title: meta.data.title,
            thumbnail: meta.data.thumbnail,
        }
    }));
}