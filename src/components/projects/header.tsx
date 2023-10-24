import classes from "./header.module.css"
import Image from "next/image";

type ProjectHeaderProps = {
    title: string;
    image: string;
}

export function ProjectHeader({ title, image }: ProjectHeaderProps) {
    return <div className={classes.header}>
        <div className={classes.img}>
            <Image src={image} alt={title} fill objectFit="cover" />
        </div>
        <h1 className={classes.title}>
            {title}
        </h1>
    </div>
}