import Section from "@/components/common/Section";

const experience = [
    {
        company: "Mozilor Technologies",
        role: "Technical Support Engineer",
        period: "June 2025 - Present",
        points: [
          "Diagnose and resolve WordPress-related issues.",
          "Provide clear solutions and documentation for users.",
          "Learned and developed plugins for WordPress to enhance user experience.",
          "Provide code snippets and documentation for users to troubleshoot issues."
        ],
      },
  {
    company: "Sutherland Global Services",
    role: "Associate CS",
    period: "July 2024 - December 2024",
    points: [
      "Provided Technical support for ATT, assisting customers with troubleshooting network and device-related issues.",
      "Worked as part of the Amazon HR support team, resolving employee queries and ensuring smooth HR operations.",
      "Developed strong problem-solving and customer interaction skills, improving customer satisfaction ratings.",
      "Resolved customer queries efficiently and empathetically."
    ],
  },
  
];

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience" subtitle="Roles where I delivered impact and growth.">
      <ol className="relative border-l pl-6">
        {experience.map((e) => (
          <li key={e.company} className="mb-10">
            <div className="absolute -left-2 mt-1 h-4 w-4 rounded-full bg-primary" />
            <h3 className="font-heading text-xl font-semibold">{e.role} — <span className="text-primary">{e.company}</span></h3>
            <p className="text-sm text-muted-foreground mb-2">{e.period}</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}


