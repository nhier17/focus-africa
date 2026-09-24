import {Hero} from "@/components/Hero";
import {Stats} from "@/components/Stats";
import {About} from "@/components/About";
import {Services} from "@/components/Services";
import {Values} from "@/components/Values";
import {Impact} from "@/components/Impact";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
       <Hero />
    <section className="root-container">
        <Stats />
       <About />
        <Services />
        <Values />
        <Impact />
        <CTA />
    </section>
    </>
  );
}
