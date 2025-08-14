import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, ChevronDown } from "lucide-react";
export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden">
            {/* Aurora background */}
            <div className="absolute inset-0 -z-10">
                <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-primary opacity-20" aria-hidden="true" />
            </div>

            <div className="container grid lg:grid-cols-2 gap-10 items-center py-20 md:py-28">
                {/* Left: copy */}
                <div className="animate-enter">
                    <p className="uppercase tracking-wider text-xs md:text-sm text-primary mb-2">Web Developer</p>
                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold leading-snug mb-4">
                        <span className="text-gradient">Amaljith A A</span>
                        <br className="hidden sm:block" /> — Web Developer
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl">
                        I craft modern, performant web experiences with the MERN stack and WordPress. Explore my projects or reach out to collaborate.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                        <Badge variant="default">React.js</Badge>
                        <Badge variant="default">MERN Stack</Badge>
                        <Badge variant="default">WordPress</Badge>
                

                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Button asChild variant="hero" size="lg" className="hover-scale">
                            <a href="#projects">View Projects</a>
                        </Button>
                        <Button asChild variant="accent" size="lg" className="hover-scale">
                            <a href="#contact">Get in Touch</a>
                        </Button>
                    </div>
                </div>

                {/* Right: profile + floating icons */}
                <div className="relative mx-auto max-w-md">
                     <div className="relative aspect-square rounded-3xl shadow-glow bg-card overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-primary opacity-10" aria-hidden="true" />
                         <div className="h-full w-full flex items-center justify-center">
                             <img src="images/20250316_130219.jpg" alt="Portrait of Amaljith A A, MERN & WordPress Web Developer" loading="lazy" className="h-40 w-40 md:h-56 md:w-56 rounded-full object-cover object-center shadow-elegant" />
                        </div>
                    </div>

                    {/* Floating icons */}
                    <div className="absolute -left-6 top-8 h-12 w-12 rounded-full border bg-background shadow-elegant grid place-items-center animate-pulse" aria-hidden="true">
                        <Code2 className="text-primary" />
                    </div>
                    <div className="absolute -right-6 top-24 h-12 w-12 rounded-full border bg-background shadow-elegant grid place-items-center animate-pulse" aria-hidden="true">
                        <Database className="text-primary" />
                    </div>
                    <div className="absolute left-1/2 -bottom-6 h-12 w-12 -translate-x-1/2 rounded-full border bg-background shadow-elegant grid place-items-center animate-pulse" aria-hidden="true">
                        <Globe className="text-accent" />
                    </div>
                </div>
            </div>

            <div className="container">
                <a href="#about" className="group mx-auto flex w-max items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <span>Scroll</span>
                    <ChevronDown className="transition-transform group-hover:translate-y-0.5" />
                </a>
            </div>
        </section>
    );
}


