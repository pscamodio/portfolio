import { allProjects, loadProject } from "@/utils/projects";
import Image from "next/image";
import classes from "./page.module.css";
import Head from "next/head";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type HomeProps = {
    params: { slug: string }
}

export default async function Home({ params }: HomeProps) {
    const project = await loadProject(params.slug);
    if (!project) {
        return notFound();
    }
    const { title, thumbnail, content } = project;
    return <>
        <Head>
            <title>title</title>
        </Head>
        <article className={classes.article}>
            <ProjectHeader title={title} image={thumbnail} />
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
    </>
}

type ProjectHeaderProps = {
    title: string;
    image: string;
}

function ProjectHeader({ title, image }: ProjectHeaderProps) {
    return <div className={classes.header}>
        <div className={classes["header-img"]}>
            <Image src={image} alt={title} fill objectFit="cover" />
        </div>
        <h1 className={classes["header-title"]}>
            {title}
        </h1>
    </div>
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