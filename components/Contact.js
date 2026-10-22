'use client'
export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 flex-col items-center justify-center bg-rose-100 px-6 py-10 text-center text-rose-950"
    >
      <span className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
        Contact Us
      </span>

      <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Let us Talk
      </h2>

      <p className="mb-8 max-w-xl text-base leading-7 text-rose-900 sm:text-lg">
        Have a question or an idea? We would love to hear from you.
      </p>

      <div className="w-full max-w-lg rounded-2xl border border-rose-200 bg-white/70 p-6 text-left shadow-sm sm:p-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Demo form submitted!");
          }}
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium"
            >
              Your Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full rounded-lg border border-rose-200 bg-white px-4 py-3 text-rose-950 outline-none transition placeholder:text-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-rose-200 bg-white px-4 py-3 text-rose-950 outline-none transition placeholder:text-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Write your message..."
              className="w-full resize-y rounded-lg border border-rose-200 bg-white px-4 py-3 text-rose-950 outline-none transition placeholder:text-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-rose-700 px-5 py-3 font-semibold text-white transition hover:bg-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-700 focus-visible:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}