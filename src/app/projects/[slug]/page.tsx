import { allProjects, loadProject } from "@/utils/projects";
import classes from "./page.module.css";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { ProjectHeader } from "@/components/projects/header";
import { ProjectContent } from "@/components/projects/content";

type HomeProps = {
    params: { slug: string }
}

export default async function Project({ params }: HomeProps) {
    const project = await loadProject(params.slug);
    if (!project) {
        return notFound();
    }
    const { title, thumbnail, content } = project;
    return <>
        <article className={classes.article}>
            <ProjectHeader title={title} image={thumbnail} />
            <ProjectContent content={content} />
        </article>
    </>
}

export async function generateMetadata(
    { params }: HomeProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const project = await loadProject(params.slug);
    return {
        title: project?.title ?? (await parent).title
    }
}

export async function generateStaticParams() {
    const posts = await allProjects();
   
    return posts.map((post) => ({
      slug: post,
    }))
  }