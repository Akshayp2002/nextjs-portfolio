export const dynamic = "force-dynamic";

export default function BlogPage() {
  const time = new Date().toISOString();

  return (
    <main style={{ padding: "24px" }}>
      <h1>Blog Page</h1>
      <p>Rendered at: {time}</p>
    </main>
  );
}
