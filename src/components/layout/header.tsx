import classes from "./header.module.css";
import Link from "next/link";

export function Header() {
    return <header className={classes.header}>
        <Link href="/">Amodio Pesce</Link>
        <nav>
            <ul className={classes.links}>
                <Link href="/about">About Me</Link>
                <Link href="/contact">Contact</Link>
            </ul>
        </nav>
    </header>;
}