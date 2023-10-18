import Image from "next/image";
import classes from "./hero-section.module.css";

export function HeroSection() : JSX.Element {
    return <section className={classes.section}>
        <aside>
            Hi, <br/>
            I&apos;m Amodio Pesce, a software engineer and a technology enthusiast from Italy. <br/>
            I don&apos;t care if it is c++ or typescript, I thrive solving complex challenges in elegant ways <br/>
            But personal connections and customers feedbacks are always more important than the development tools
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