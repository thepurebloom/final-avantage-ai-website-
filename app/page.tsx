import { SplineSceneBasic } from "@/components/ui/hero-spline-demo";

export default function Page() {
  return (
    <>
      {/* Full width HERO */}
      <section id="home" className="w-full min-h-[90vh] bg-black relative overflow-hidden">
        <SplineSceneBasic />
      </section>

      {/* Main site content starts */}
      <main className="container mx-auto px-4 py-16 space-y-16">
        <section id="about" className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border bg-card">Feature 1</div>
          <div className="p-6 rounded-xl border bg-card">Feature 2</div>
          <div className="p-6 rounded-xl border bg-card">Feature 3</div>
        </section>

        <section id="gallery" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <img
              key={i}
              alt={`placeholder ${i}`}
              className="rounded-lg aspect-video object-cover"
              src={`https://images.unsplash.com/photo-150${i}234567?auto=format&fit=crop&w=1600&q=60`}
            />
          ))}
        </section>

        <section id="contact" className="text-center py-20">
          <h2 className="text-3xl font-semibold">Ready to get started?</h2>
          <p className="mt-2 text-muted-foreground">Replace this block with your real CTA.</p>
        </section>
      </main>
    </>
  );
}

