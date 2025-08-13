export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container">
        <header className="mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl">{subtitle}</p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}


