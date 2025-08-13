import Section from "@/components/common/Section";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip as ReTooltip } from "recharts";

const data = [
  { skill: "HTML/CSS", level: 90 },
  { skill: "JavaScript", level: 80 },
  { skill: "React.js", level: 70 },
  { skill: "Node.js", level: 65 },
  { skill: "Express", level: 65 },
  { skill: "MongoDB", level: 70 },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="A quick snapshot of my core strengths.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-xl border p-6 shadow-elegant">
          <h3 className="font-heading text-xl font-semibold mb-4">Technical</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground) / 0.2)" />
                <XAxis dataKey="skill" tick={{ fill: "hsl(var(--muted-foreground))" }} angle={-15} height={50} interval={0} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} domain={[0, 100]} />
                <ReTooltip cursor={{ fill: "hsl(var(--muted) / 0.4)" }} contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                <Bar dataKey="level" radius={[6, 6, 0, 0]} fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js"] },
            { title: "Backend", items: ["Node.js", "Express", "MongoDB", "PHP", "Python (basics)",] },
            {title: "Tools & Platforms", items: ["Microsoft Office Tools", "Postman", "VS Code", "Cursor", "Git", "GitHub", "WordPress"] },
            { title: "Soft Skills", items: ["Teamwork", "Communication", "Presentation", "Leadership", "Adaptability"] },
             
          ].map((group) => (
            <div key={group.title} className="rounded-xl border p-6">
              <h4 className="font-heading font-semibold mb-2">{group.title}</h4>
              <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}


