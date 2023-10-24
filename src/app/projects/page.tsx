import { allProjectsMeta } from "@/utils/projects"
import Image from "next/image";

export default async function Project() {
    const projects = await allProjectsMeta();

    return <>
        <h1>All projects</h1>
        {projects.map((p) => {
            return <div>
                <h2>{p.title}</h2>
                <Image src={p.thumbnail} alt={p.title} width={200} height={200} />
            </div>
        })}
    </>
}
