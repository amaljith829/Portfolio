import Section from "@/components/common/Section";

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="A brief introduction to who I am and what I do."
    >
      <div className="grid md:grid-cols-[240px,1fr] gap-8 items-start">
        <div className="glass rounded-2xl p-3 ring-animated">
          <img
            src="/images/amaljith.jpg"
            alt="Amaljith A A"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="max-w-none text-muted-foreground leading-relaxed space-y-4">
          <p>
            I’m <span className="text-foreground font-semibold">Amaljith A A</span>, a B.Tech Computer Science graduate (2024) and Web Developer specializing in the
            <span className="text-foreground font-semibold"> MERN stack</span>.
            Currently, I work as a Technical Support Engineer at Mozilor Technologies, where I assist global customers in resolving product-related
            issues, optimizing WordPress performance, and ensuring a smooth, reliable user experience.
          </p>
          <p>
            With a strong foundation in HTML, CSS, JavaScript and modern frameworks like React, I bring both technical expertise and
            problem-solving skills to every project. I’ve completed a comprehensive MERN stack development course, built full-stack applications,
            and worked with tools such as Git, Postman, and MongoDB.
          </p>
          <p>
            I’m passionate about solving real-world problems, communicating clearly with users, and contributing to impactful software solutions.
            My role in a product-based SaaS environment has sharpened my troubleshooting, collaboration, and adaptability skills, enabling me to
            thrive in fast-paced, team-driven settings.
          </p>
          <p>
            Driven by curiosity and a love for learning, I continuously explore new technologies to improve both technically and professionally—
            while delivering solutions that make a real difference. <span className="text-foreground">Let’s connect and create something impactful together!</span> 🚀🤝
          </p>
        </div>
      </div>
    </Section>
  );
}


