export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 flex-col items-center justify-center bg-green-100 px-6 py-10 text-center text-green-950"
    >
      <span className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
        About Us
      </span>

      <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
        Who We Are
      </h2>

      <p className="max-w-2xl text-base leading-8 text-green-900 sm:text-lg">
        We are passionate about creating useful digital experiences. Our goal
        is to make technology simple, accessible, and enjoyable for everyone.
      </p>

      <div className="mt-10 grid w-full max-w-3xl gap-5 sm:grid-cols-3">
        {[
          { title: "Our Mission", text: "Solve real problems." },
          { title: "Our Vision", text: "Make life simpler." },
          { title: "Our Values", text: "Quality and trust." },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-green-200 bg-white/60 p-6 shadow-sm"
          >
            <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-green-800">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}