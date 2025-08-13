export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Page not found</h1>
        <p className="text-muted-foreground">The page you’re looking for doesn’t exist.</p>
        <a className="text-primary underline mt-4 inline-block" href="/">Go home</a>
      </div>
    </div>
  );
}


