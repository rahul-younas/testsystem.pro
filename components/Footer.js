'use client'
const footerLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Features", id: "features" },
  { name: "Pricing", id: "pricing" },
  { name: "Contact Us", id: "contact" },
];

export default function Footer() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 lg:px-8">
        {/* Brand */}
        <div>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("home");
            }}
            className="text-2xl font-bold tracking-tight"
          >
            MyApp
          </a>

          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            A modern and simple experience designed to help you do more.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h2 className="text-sm font-semibold">Quick Links</h2>

          <ul className="mt-4 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(link.id);
                  }}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact information */}
        <div>
          <h2 className="text-sm font-semibold">Get in Touch</h2>

          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Have questions or feedback? Visit our contact section and
            send us a message.
          </p>

          <button
            type="button"
            onClick={() => handleScroll("contact")}
            className="mt-5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="text-sm text-muted-foreground">
            © Created by: Rahul Jonas - MyApp. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground">
            Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}