import { loadProject } from "@/utils/projects";
import Image from "next/image";
import classes from "./page.module.css";
import Head from "next/head";
import { Metadata, ResolvingMetadata } from "next";

type HomeProps = {
    params: { slug: string }
}

export default async function Home({ params }: HomeProps) {
    const { title, thumbnail, content } = await loadProject(params.slug);
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
    const { title } = await loadProject(params.slug);
    return {
        title
    }
}