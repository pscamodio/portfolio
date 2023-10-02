import Image from "next/image";
import classes from "./icon-link.module.css";

export type SocialButtonProps = {
    /** Path to the icon source */
    src: string;

    /** Url to redirect to */
    href: string;

    /** Alt text for the image */
    alt: string;
}

export function IconLink({src, href, alt}: SocialButtonProps) {
    return <a href={href} className={classes.link}>
        <Image fill src={src} alt={alt} />
    </a>
}