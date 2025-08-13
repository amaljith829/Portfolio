import Section from "@/components/common/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const projects = [
    {
        title: "Netflix Clone",
        description: "A Netflix-inspired clone with modern UI and basic backend features.",
        tech: ["React", "TMDB API", "Firebase/Node"],
        link: "https://github.com/amaljith829/Netflix-Clone",
      },
      {
        title: "E-Commerce Website",
        description: "A e-commerce website built using MERN stack.",
        tech: ["React","React Router", "Axios", "Vite","Node.js", "Express", "MongoDB"],
        clientLink: "https://github.com/amaljith829/E-com-Client",
        serverLink: "https://github.com/amaljith829/E-com-Server",
      },
    {
        title: "Portfolio Website",
        description: "A portfolio website to showcase my projects and skills.",
        tech: ["React", "Tailwind CSS", "Shadcn UI", "Vite"],
        link: "https://github.com/amaljith829/Portfolio-Website",
    },  
    {
        title: "Content Management System",
        description: "A simple articles CMS built with vanilla PHP and MySQL.",
        tech: ["PHP", "MySQL", "jQuery", "PHPMailer"],
        link: "https://github.com/amaljith829/Content_Management_System",
    },
    {
        title: "Doctor Booking Appointment System",
        description: "A doctor booking appointment system built using MERN stack.",
        tech: ["MERN", "REST"],
        clientLink: "https://github.com/amaljith829/WellCare_Frontend",
        serverLink: "https://github.com/amaljith829/WellCare_Backend",
      },
  {
    title: "Malayalam Abstractive Text Summarization",
    description: "An NLP project to generate abstractive summaries for Malayalam texts using Seq2Seq model.",
    tech: ["Python", "NLP", "Seq2Seq","Keras","TensorFlow","Transformer Model"],
  },
  {
    title: "CineMotion",
    description: "Movie recommendations with mood-based suggestions using sentiment analysis.",
    tech: ["Python", "ML", "Sentiment Analysis"],
  },
 
  
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work showcasing full‑stack and WordPress expertise.">
      <div className="relative">
        <Carousel className="w-full" opts={{ align: "start" }}>
          <CarouselContent>
            {projects.map((p) => (
              <CarouselItem key={p.title} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full flex flex-col card-hover">
                  <CardHeader>
                    <CardTitle className="text-gradient">{p.title}</CardTitle>
                    <CardDescription>{p.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">{t}</span>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      {p.clientLink && p.serverLink ? (
                        <>
                          <Button asChild variant="secondary" size="sm">
                            <a href={p.clientLink} target="_blank" rel="noreferrer noopener">
                              Client Repository
                            </a>
                          </Button>
                          <Button asChild variant="outline" size="sm">
                            <a href={p.serverLink} target="_blank" rel="noreferrer noopener">
                              Server Repository
                            </a>
                          </Button>
                        </>
                      ) : p.link ? (
                        <Button asChild variant="secondary">
                          <a href={p.link} target="_blank" rel="noreferrer noopener">View on GitHub</a>
                        </Button>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      </div>
    </Section>
  );
}


