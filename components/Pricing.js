'use client'
const plans = [
  {
    name: "Basic",
    price: "$0",
    description: "For getting started.",
    features: ["Core features", "Basic support", "One user"],
  },
  {
    name: "Pro",
    price: "$19",
    description: "For growing projects.",
    features: ["All basic features", "Priority support", "More flexibility"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    description: "For advanced needs.",
    features: ["All pro features", "Dedicated support", "Team access"],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 flex-col items-center justify-center bg-purple-100 px-6 py-10 text-center text-purple-950"
    >
      <span className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
        Pricing
      </span>

      <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Simple Pricing Plans
      </h2>

      <p className="mb-12 max-w-xl text-base leading-7 text-purple-900 sm:text-lg">
        Choose the plan that works best for you.
      </p>

      <div className="grid w-full max-w-5xl gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative rounded-2xl border p-7 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
              plan.popular
                ? "border-purple-500 bg-white ring-2 ring-purple-300"
                : "border-purple-200 bg-white/70"
            }`}
          >
            {plan.popular && (
              <span className="mb-4 inline-block rounded-full bg-purple-200 px-3 py-1 text-xs font-bold text-purple-900">
                MOST POPULAR
              </span>
            )}

            <h3 className="text-xl font-bold">{plan.name}</h3>

            <p className="mt-2 text-sm text-purple-800">
              {plan.description}
            </p>

            <p className="my-6 text-4xl font-bold">
              {plan.price}
              <span className="text-sm font-normal text-purple-700">
                {" "}
                / month
              </span>
            </p>

            <ul className="mb-8 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-purple-900"
                >
                  <span aria-hidden="true" className="font-bold">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className={`w-full rounded-lg px-4 py-3 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 ${
                plan.popular
                  ? "bg-purple-700 text-white hover:bg-purple-800"
                  : "border border-purple-300 bg-white text-purple-950 hover:bg-purple-50"
              }`}
            >
              Choose Plan
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}