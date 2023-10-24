import { loadProject } from "@/utils/projects";

type HomeProps = {
    params: { slug: string }
}

export default async function Home({ params }: HomeProps) {
    const { title, markdown } = await loadProject(params.slug);
    return <>
        <div>Project {title}</div>
        <div>{markdown}</div>
    </>
}
