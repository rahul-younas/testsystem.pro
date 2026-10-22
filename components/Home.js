'use client'
export default function Home() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 flex-col items-center justify-center bg-blue-100 px-6 py-10 text-center text-blue-950"
    >
      <span className="mb-4 rounded-full bg-blue-200 px-4 py-1.5 text-sm font-semibold text-blue-800">
        Welcome to MyApp
      </span>

      <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
        Build Something Amazing
      </h1>

      <p className="max-w-2xl text-base leading-8 text-blue-900 sm:text-lg">
        Discover a simple and modern experience designed to help you achieve
        more with less effort.
      </p>

      <button
        onClick={() =>
          document.getElementById("features")?.scrollIntoView({
            behavior: "smooth",
          })
        }
        className="mt-8 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
      >
        Explore Features
      </button>
    </section>
  );
}