const features = [
  {
    number: "01",
    title: "Easy to Use",
    description: "A clean and intuitive experience for every user.",
  },
  {
    number: "02",
    title: "Responsive Design",
    description: "Layouts that adapt to desktop, tablet, and mobile.",
  },
  {
    number: "03",
    title: "Fast Performance",
    description: "A modern foundation built for a smooth experience.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 flex-col items-center justify-center bg-amber-100 px-6 py-10 text-center text-amber-950"
    >
      <span className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
        Features
      </span>

      <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
        What We Offer
      </h2>

      <p className="mb-12 max-w-xl text-base leading-7 text-amber-900 sm:text-lg">
        Everything you need to get started with a simple, modern platform.
      </p>

      <div className="grid w-full max-w-5xl gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.number}
            className="rounded-2xl border border-amber-200 bg-white/70 p-7 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-amber-200 font-bold text-amber-900">
              {feature.number}
            </span>

            <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>

            <p className="leading-7 text-amber-900">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}