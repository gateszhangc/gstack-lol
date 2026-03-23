import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BriefcaseBusiness,
  Eye,
  Github,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const iconMap = {
  workflow: Workflow,
  review: ShieldCheck,
  founder: BriefcaseBusiness,
  design: Sparkles,
  browser: Eye,
  stack: Blocks,
} as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteContent.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "gstack",
      url: siteContent.metadata.url,
      description: siteContent.metadata.description,
      inLanguage: "en",
      keywords: siteContent.metadata.keywords.join(", "),
    },
    {
      "@type": "SoftwareSourceCode",
      name: "gstack",
      url: siteContent.metadata.url,
      codeRepository: siteContent.metadata.githubUrl,
      description: siteContent.metadata.description,
      license: "https://github.com/garrytan/gstack/blob/main/LICENSE",
      runtimePlatform: "Claude Code, Codex, compatible agents",
      keywords: siteContent.metadata.keywords.join(", "),
    },
    faqSchema,
  ],
};

export default function Home() {
  return (
    <main className="page-root">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />

      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-4 pb-12 pt-4 sm:px-6 lg:px-8">
        <header className="sticky top-3 z-30 mb-6 rounded-[28px] border border-stone-950/10 bg-[rgba(251,248,242,0.88)] px-4 py-3 shadow-[0_18px_50px_rgba(17,17,17,0.08)] backdrop-blur md:px-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <Link
              aria-label="gstack home"
              className="group flex items-center gap-3"
              href="/"
            >
              <Image
                alt="gstack brand mark"
                className="rounded-2xl border border-stone-950/10 bg-stone-50/80 shadow-[0_10px_30px_rgba(17,17,17,0.08)]"
                height={52}
                priority
                src="/brand/gstack-mark.png"
                unoptimized
                width={52}
              />
              <div className="flex flex-col leading-none">
                <span className="font-mono text-[0.64rem] uppercase tracking-[0.34em] text-stone-500">
                  gstack.lol
                </span>
                <span className="font-display text-[1.7rem] italic text-stone-950 transition group-hover:text-[#d3542a]">
                  gstack
                </span>
              </div>
            </Link>

            <nav
              aria-label="Primary"
              className="flex flex-wrap items-center gap-2 sm:gap-3"
            >
              <Link
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
                href="#workflow"
              >
                Workflow
              </Link>
              <Link
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
                href="#quick-start"
              >
                Install
              </Link>
              <Link
                className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                href={siteContent.metadata.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                <Github className="size-4" />
                GitHub
              </Link>
            </nav>
          </div>
        </header>

        <section className="relative overflow-hidden rounded-[36px] border border-stone-950/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(241,231,214,0.88))] px-5 py-8 shadow-[0_30px_80px_rgba(17,17,17,0.09)] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(211,84,42,0.17),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(90,98,108,0.12),transparent_28%),repeating-linear-gradient(90deg,rgba(17,17,17,0.05),rgba(17,17,17,0.05)_1px,transparent_1px,transparent_94px)] opacity-80" />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
            <div className="flex flex-col gap-7">
              <div className="space-y-5">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.35em] text-[#d3542a]">
                  {siteContent.hero.eyebrow}
                </p>
                <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_230px]">
                  <div className="space-y-5">
                    <h1 className="font-display max-w-4xl text-[clamp(3.6rem,9vw,7.5rem)] leading-[0.88] tracking-[-0.05em] text-stone-950">
                      {siteContent.hero.headline}
                    </h1>
                    <p className="max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
                      {siteContent.hero.lede}
                    </p>
                  </div>

                  <aside className="border-l border-stone-950/12 pl-5">
                    <div className="space-y-5">
                      {siteContent.hero.sideNotes.map((item) => (
                        <div key={item.label} className="space-y-1.5">
                          <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-stone-500">
                            {item.label}
                          </p>
                          <p className="text-sm leading-6 text-stone-700">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </aside>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  className={cn(buttonVariants({ size: "lg", variant: "brand" }))}
                  href="https://www.easyclaw.pro"
                  rel="noreferrer"
                  target="_blank"
                >
                  One-click deploy
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
                  href="#quick-start"
                >
                  See the quick start
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {siteContent.hero.proofChips.map((chip) => (
                  <li
                    className="rounded-full border border-stone-950/10 bg-stone-50/80 px-4 py-3 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-stone-700"
                    key={chip}
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex h-full flex-col justify-between gap-6 rounded-[30px] border border-stone-950/10 bg-[rgba(17,17,17,0.93)] p-5 text-stone-50 shadow-[0_24px_70px_rgba(17,17,17,0.2)] sm:p-6">
              <div className="absolute inset-x-6 top-6 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.5),transparent)]" />
              <div className="space-y-6 pt-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-stone-400">
                    Sprint Shape
                  </p>
                  <Image
                    alt="gstack logo"
                    className="h-11 w-auto"
                    height={44}
                    src="/brand/gstack-logo.png"
                    style={{ height: "44px", width: "auto" }}
                    unoptimized
                    width={158}
                  />
                </div>

                <ol className="space-y-3">
                  {siteContent.workflow.slice(0, 5).map((item, index) => (
                    <li
                      className="grid grid-cols-[42px_minmax(0,1fr)] gap-3 rounded-[22px] border border-white/10 bg-white/5 px-4 py-4"
                      key={item.step}
                    >
                      <span className="font-display text-3xl italic text-[#ff8d5d]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="space-y-1">
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-400">
                          {item.step}
                        </p>
                        <p className="text-sm leading-6 text-stone-200">
                          {item.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-3 rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-400">
                    Install snippet
                  </p>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-stone-300">
                    30 seconds
                  </span>
                </div>
                <pre className="overflow-x-auto font-mono text-[0.75rem] leading-6 text-stone-100">
                  <code>{siteContent.hero.installCommand}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {siteContent.trustRail.map((item) => (
            <div
              className="rounded-[24px] border border-stone-950/10 bg-stone-50/75 px-4 py-4 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-stone-700"
              key={item}
            >
              {item}
            </div>
          ))}
        </section>

        <section
          className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]"
          id="workflow"
        >
          <div className="rounded-[32px] border border-stone-950/10 bg-[rgba(255,255,255,0.8)] p-6 shadow-[0_20px_60px_rgba(17,17,17,0.07)] sm:p-8">
            <p className="section-kicker">Who it is for</p>
            <h2 className="section-title">
              For builders who want agent speed without lowering the engineering
              bar.
            </h2>
            <div className="mt-8 space-y-4">
              {siteContent.audiences.map((item, index) => (
                <article
                  className="rounded-[26px] border border-stone-950/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(244,236,224,0.86))] p-5"
                  key={item.title}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-stone-500">
                        Audience {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-display mt-2 text-[2rem] leading-none text-stone-950">
                        {item.title}
                      </h3>
                    </div>
                    <div className="rounded-full border border-stone-950/10 bg-stone-50 p-3">
                      {index === 0 ? (
                        <BriefcaseBusiness className="size-5 text-[#d3542a]" />
                      ) : index === 1 ? (
                        <Sparkles className="size-5 text-[#d3542a]" />
                      ) : (
                        <ShieldCheck className="size-5 text-[#d3542a]" />
                      )}
                    </div>
                  </div>
                  <p className="mt-4 max-w-xl text-base leading-7 text-stone-700">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-stone-950/10 bg-stone-950 p-6 text-stone-50 shadow-[0_24px_70px_rgba(17,17,17,0.18)] sm:p-8">
            <p className="section-kicker text-stone-400">Sprint workflow</p>
            <h2 className="section-title max-w-2xl text-stone-50">
              A delivery system for AI coding, not a pile of prompts.
            </h2>
            <div className="mt-8 grid gap-4">
              {siteContent.workflow.map((item) => (
                <article
                  className="grid gap-3 rounded-[24px] border border-white/10 bg-white/5 p-4 sm:grid-cols-[120px_minmax(0,1fr)] sm:items-start"
                  key={item.step}
                >
                  <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[#ff8d5d]">
                    {item.step}
                  </div>
                  <p className="text-sm leading-7 text-stone-200">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[32px] border border-stone-950/10 bg-[rgba(255,255,255,0.76)] p-6 shadow-[0_20px_60px_rgba(17,17,17,0.07)] sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="section-kicker">Six of the eighteen</p>
              <h2 className="section-title">
                These are the commands that make gstack useful every sprint.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-stone-600">
              Each one covers a job that usually gets skipped when teams chase raw
              agent speed: sharper framing, better plans, tougher review, real QA,
              and cleaner releases.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.specialists.map((item, index) => {
              const Icon =
                index === 0
                  ? iconMap.founder
                  : index === 1
                    ? iconMap.design
                    : index === 2
                      ? iconMap.workflow
                      : index === 3
                        ? iconMap.review
                        : index === 4
                          ? iconMap.browser
                          : iconMap.stack;

              return (
                <article
                  className="group rounded-[28px] border border-stone-950/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,230,214,0.7))] p-5 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(17,17,17,0.08)]"
                  key={item.name}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="rounded-full border border-stone-950/10 bg-stone-50 p-3 transition group-hover:border-[#d3542a]/20">
                      <Icon className="size-5 text-[#d3542a]" />
                    </div>
                    <span className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-stone-500">
                      {item.role}
                    </span>
                  </div>
                  <h3 className="font-display mt-6 text-[2.2rem] leading-none tracking-[-0.03em] text-stone-950">
                    {item.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-stone-700">
                    {item.summary}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
          id="quick-start"
        >
          <div className="rounded-[32px] border border-stone-950/10 bg-[linear-gradient(135deg,rgba(211,84,42,0.96),rgba(120,45,17,0.96))] p-6 text-stone-50 shadow-[0_24px_70px_rgba(141,63,28,0.18)] sm:p-8">
            <p className="section-kicker text-stone-200">Quick start</p>
            <h2 className="section-title max-w-xl text-stone-50">
              Install once. Start with /office-hours. Use it on every branch.
            </h2>

            <ol className="mt-8 space-y-4">
              {siteContent.quickStart.map((item, index) => (
                <li
                  className="grid grid-cols-[42px_minmax(0,1fr)] gap-4 rounded-[24px] border border-white/12 bg-white/7 px-4 py-4"
                  key={item}
                >
                  <span className="font-display text-3xl italic text-stone-50/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-7 text-stone-100">{item}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[32px] border border-stone-950/10 bg-stone-950 p-6 text-stone-50 shadow-[0_24px_70px_rgba(17,17,17,0.18)] sm:p-8">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="section-kicker text-stone-400">Install command</p>
                  <h3 className="font-display mt-2 text-[2.8rem] italic leading-none text-stone-50">
                    Copy, run, then start with <span className="text-[#ff8d5d]">/office-hours</span>.
                  </h3>
                </div>
                <Github className="hidden size-7 text-[#ff8d5d] sm:block" />
              </div>

              <pre className="overflow-x-auto rounded-[26px] border border-white/10 bg-black/25 p-5 font-mono text-[0.82rem] leading-7 text-stone-100">
                <code>{siteContent.hero.installCommand}</code>
              </pre>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  className={cn(buttonVariants({ size: "lg" }))}
                  href={siteContent.metadata.githubUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Github className="size-4" />
                  Open the repo
                </Link>
                <Link
                  className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
                  href={siteContent.metadata.githubUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  See the full setup guide
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="rounded-[32px] border border-stone-950/10 bg-[rgba(255,255,255,0.8)] p-6 shadow-[0_20px_60px_rgba(17,17,17,0.07)] sm:p-8">
            <p className="section-kicker">FAQ</p>
            <h2 className="section-title max-w-2xl">
              The questions serious builders ask before they install.
            </h2>

            <Accordion className="mt-8" collapsible initialValue="item-1" type="single">
              {siteContent.faq.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index + 1}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <aside className="rounded-[32px] border border-stone-950/10 bg-stone-50/85 p-6 shadow-[0_20px_60px_rgba(17,17,17,0.07)] sm:p-8">
            <p className="section-kicker">Final nudge</p>
            <h2 className="font-display text-[3rem] leading-[0.92] tracking-[-0.05em] text-stone-950">
              Fast agent output is easy. Reliable shipping is the hard part.
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-700">
              If you already believe agents can generate code, the remaining
              question is operational: can your workflow catch bad decisions, UX
              bugs, and release risk before production does? gstack is built for
              that.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                className={cn(buttonVariants({ size: "lg" }))}
                href={siteContent.metadata.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                Read the GitHub README
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
                href="#quick-start"
              >
                Jump to quick start
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
