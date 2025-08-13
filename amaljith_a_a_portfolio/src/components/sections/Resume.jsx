import Section from "@/components/common/Section";
import { Button } from "@/components/ui/button";

export default function Resume() {
  return (
    <Section id="resume" title="Resume" subtitle="Download a copy of my latest resume.">
      <div className="flex items-center gap-4">
        <Button asChild variant="accent" size="lg" className="hover-scale">
          <a href="/Amaljith_A_A_Resume.pdf" download>Download Resume</a>
        </Button>
      </div>
    </Section>
  );
}


