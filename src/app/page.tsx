import { HeroSection } from "@/components/ui/hero-section";
import classes from "./page.module.css";

export default function Home() {
  return <div className={classes.main}>
    <HeroSection />
  </div>
}
