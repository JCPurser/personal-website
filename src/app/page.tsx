import { ArrowUpRight, Download, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Systems", href: "#systems" },
  { label: "Delivery", href: "#systems" },
  { label: "Writing", href: "#writing" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const expertise = [
  {
    title: "Data Analytics and Software",
    description:
      "Designing dependable software and operating models that make complex work easier to understand, run, and improve.",
  },
  {
    title: "Project Delivery",
    description:
      "Bringing structure, pace, and clear decision-making to cross-functional work from discovery through execution.",
  },
  {
    title: "Writing and Reviews",
    description:
      "Turning analysis, observation, and field notes into clear essays, reviews, and practical working documents.",
  },
];

const projects = [
  {
    title: "Systems Review for a Growing Operations Team",
    summary:
      "Mapped fragmented workflows, clarified ownership, and created a practical delivery rhythm for a team scaling beyond informal processes.",
    category: "Systems",
  },
  {
    title: "Product Delivery Reset",
    summary:
      "Reframed an uncertain roadmap into a focused sequence of decisions, milestones, and measurable delivery outcomes.",
    category: "Delivery",
  },
  {
    title: "Technical Knowledge Base",
    summary:
      "Designed a writing-led documentation system to help teams preserve context, reduce repeat questions, and onboard with confidence.",
    category: "Software",
  },
];

const writing = [
  {
    title: "The Quiet Value of Better Defaults",
    description:
      "A short essay on how systems improve when teams make the expected path clear, useful, and hard to misread.",
    category: "Systems Thinking",
    date: "Apr 2026",
  },
  {
    title: "Delivery Is a Communication Discipline",
    description:
      "Notes on project momentum, decision quality, and why calm reporting often matters more than louder status updates.",
    category: "Delivery",
    date: "Mar 2026",
  },
  {
    title: "Reviewing With Attention",
    description:
      "A reflection on writing useful reviews by noticing context, constraints, craft, and the small details that shape experience.",
    category: "Writing",
    date: "Feb 2026",
  },
];

const reviews = [
  {
    name: "The Larder Room",
    location: "London",
    verdict: "Precise cooking, warm service, and a room that rewards slower evenings.",
    rating: "4.5",
  },
  {
    name: "North Street Table",
    location: "Bristol",
    verdict: "Confident seasonal plates with a short menu and a quietly excellent wine list.",
    rating: "4.0",
  },
  {
    name: "Marlow House",
    location: "Bath",
    verdict: "Elegant, restrained, and best when the kitchen keeps things simple.",
    rating: "4.0",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <nav
          className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4"
          aria-label="Main navigation"
        >
          <a href="#" className="shrink-0 text-sm font-semibold text-slate-950">
            James Purser
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            <Download className="size-4" aria-hidden="true" />
            Download CV
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:items-center lg:py-28"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            COMPUTER SCIENCE, PROJECT DELIVERY, AND WRITING
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] text-slate-950 sm:text-5xl lg:text-6xl">
            Building clear systems for complex work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I am James Purser, a Computer Science graduate with a strong interest in software, project delivery, and structured problem solving. My work focuses on turning difficult technical and operational challenges into practical, understandable solutions.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#systems"
              className="inline-flex h-11 items-center justify-center rounded-md bg-slate-950 px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:border-blue-200 hover:bg-blue-50"
            >
              <Mail className="size-4" aria-hidden="true" />
              Get in Touch
            </a>
          </div>
        </div>

        <aside
          className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:p-6"
          aria-label="Selected experience"
        >
          <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Selected Experience
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-950">
                Areas of focus
              </h2>
            </div>
            <div className="hidden rounded-md border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-medium text-blue-800 sm:block">
              Available for selected work
            </div>
          </div>

          <div className="space-y-3">
            {expertise.map((item, index) => (
              <div
                key={item.title}
                className="rounded-lg border border-slate-200 bg-slate-50/70 p-5 transition-colors hover:border-blue-200 hover:bg-blue-50/50"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-md border border-slate-200 bg-white text-sm font-semibold text-blue-800">
                    0{index + 1}
                  </span>
                  <h3 className="font-semibold text-slate-950">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section id="systems" className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Featured Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Flagship projects and structured outcomes.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex min-h-[300px] flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <span className="mb-8 w-fit rounded-md border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold leading-7 text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                  {project.summary}
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors group-hover:text-blue-800"
                >
                  Read Case Study
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="writing" className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="mb-10 grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Writing
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Recent essays and field notes.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 md:justify-self-end">
            Short, considered pieces on software, delivery, review practice,
            and the habits that make work easier to sustain.
          </p>
        </div>

        <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white shadow-sm">
          {writing.map((piece) => (
            <article
              key={piece.title}
              className="grid gap-4 p-6 transition-colors hover:bg-slate-50 md:grid-cols-[160px_1fr_auto] md:items-start"
            >
              <div className="text-sm text-slate-500">{piece.date}</div>
              <div>
                <div className="mb-3 w-fit rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {piece.category}
                </div>
                <h3 className="text-xl font-semibold text-slate-950">
                  {piece.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                  {piece.description}
                </p>
              </div>
              <a
                href="#contact"
                aria-label={`Read ${piece.title}`}
                className="inline-flex size-9 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800"
              >
                <ArrowUpRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="reviews" className="border-y border-slate-200 bg-slate-100/60">
        <div className="mx-auto w-full max-w-7xl px-6 py-16">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Reviews
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">
              Restaurant notes, lightly held.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-950">
                      {review.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {review.location}
                    </p>
                  </div>
                  <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
                    {review.rating}
                  </span>
                </div>
                <p className="text-sm leading-6 text-slate-600">
                  {review.verdict}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="grid gap-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[0.65fr_1.35fr] md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Practical, observant, and systems-minded.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              I work across software, systems thinking, project delivery, and
              writing. My focus is helping people make better sense of complex
              work: what is happening, what matters, and what should happen
              next.
            </p>
            <p>
              This site collects selected projects, essays, and reviews. The
              common thread is attention: to structure, language, operating
              detail, and the experience of the people using what gets built.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-slate-950">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-16 text-white md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Let&apos;s Work Together</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              If you need clear thinking, structured delivery, or careful
              writing around complex work, I would be glad to hear from you.
            </p>
          </div>
          <a
            href="mailto:hello@example.com"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-medium text-slate-950 shadow-sm transition-colors hover:bg-blue-50"
          >
            <Mail className="size-4" aria-hidden="true" />
            Contact Me
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Your Name. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="transition-colors hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="transition-colors hover:text-white">
              GitHub
            </a>
            <a href="#writing" className="transition-colors hover:text-white">
              Writing
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
