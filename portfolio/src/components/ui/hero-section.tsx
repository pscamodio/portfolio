import Image from "next/image";
import classes from "./hero-section.module.css";

export function HeroSection() : JSX.Element {
    return <section className={classes.section}>
        <aside>
            Hi, <br/>
            I'm Amodio Pesce, a software engineer and a technology enthusiast from Italy.
        </aside>
        <div>
            <Image 
                src="/hero.jpeg" 
                alt="Amodio Pesce"         
                width={200}
                height={200}
                style={{
                    objectFit: 'contain',
                }}
            />
        </div>
    </section>
}