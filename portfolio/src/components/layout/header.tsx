import classes from "./header.module.css";

export function Header() {
    return <header className={classes.header}>
        <div>Amodio Pesce</div>
        <nav>
            <ul className={classes.links}>
                <li><a href="">About Me</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </header>;
}