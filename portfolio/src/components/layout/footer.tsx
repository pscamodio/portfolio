import { IconLink } from "../ui/icon-link";
import classes from "./footer.module.css";

export function Footer() {
    return <footer className={classes.footer}>
        <p>Amodio Pesce</p>
        <nav>
            <IconLink alt="linkdin" src="/icons/linkdin.png" href="" />
        </nav>
    </footer>
}