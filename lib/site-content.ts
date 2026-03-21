export const siteContent = {
  metadata: {
    title: "gstack | AI software factory for founders and technical teams",
    description:
      "Explore gstack, Garry Tan's open source AI software factory: 15 specialists, 6 power tools, a sprint-shaped workflow, and a 10-minute path from install to useful output.",
    url: "https://gstack.lol",
    githubUrl: "https://github.com/garrytan/gstack",
  },
  hero: {
    eyebrow: "Garry Tan's AI software factory, reframed like an editorial front page.",
    headline: "gstack is the AI software factory that lets one builder ship like a team of twenty.",
    lede:
      "gstack turns Claude Code into a managed virtual engineering org: CEO review, design review, paranoid code review, browser QA, release automation, and a sprint workflow that keeps speed from becoming chaos.",
    proofChips: [
      "15 specialists",
      "6 power tools",
      "Free & MIT licensed",
      "10-minute quick start",
    ],
    sideNotes: [
      {
        label: "Angle",
        value: "structured agent workflow instead of blank-prompt chaos",
      },
      {
        label: "Audience",
        value: "founders, first-time Claude Code users, tech leads",
      },
      {
        label: "Differentiator",
        value: "review gates, browser QA, docs, release, and retro in one system",
      },
    ],
    installCommand:
      "git clone https://github.com/garrytan/gstack.git ~/.codex/skills/gstack\ncd ~/.codex/skills/gstack && ./setup --host codex",
  },
  trustRail: [
    "Open source MIT license",
    "Structured sprint process",
    "Cross-role review gates",
    "Works with Claude Code and Codex",
  ],
  audiences: [
    {
      title: "Founders & CEOs",
      description:
        "Keep product judgment in the loop while shipping at a pace that usually requires a full stack team.",
    },
    {
      title: "First-time Claude Code users",
      description:
        "Start with named specialists and forcing functions instead of improvising your own operating system from scratch.",
    },
    {
      title: "Tech leads & staff engineers",
      description:
        "Add architecture review, QA, release discipline, and regression pressure to every feature branch.",
    },
  ],
  workflow: [
    {
      step: "Think",
      detail:
        "/office-hours reframes the pain, challenges the feature request, and writes the design doc.",
    },
    {
      step: "Plan",
      detail:
        "/plan-ceo-review and /plan-eng-review lock scope, architecture, edge cases, and tests.",
    },
    {
      step: "Build",
      detail:
        "Implementation happens against a tighter spec, with design and engineering intent already aligned.",
    },
    {
      step: "Review",
      detail:
        "/review and /codex inspect the branch like senior engineers trying to break it before prod does.",
    },
    {
      step: "Test",
      detail:
        "/qa opens a real browser, finds UX bugs, fixes them, and generates regression coverage.",
    },
    {
      step: "Ship",
      detail:
        "/ship runs the release checklist, coverage audit, PR creation, and documentation sync.",
    },
    {
      step: "Reflect",
      detail:
        "/retro closes the loop with team-aware stats, streaks, and process pressure for the next sprint.",
    },
  ],
  specialists: [
    {
      name: "/office-hours",
      role: "YC-style product reframing",
      summary:
        "Pushes back on the feature request and finds the sharper wedge hiding inside it.",
    },
    {
      name: "/plan-ceo-review",
      role: "Founder-level scope judgment",
      summary:
        "Rethinks the product surface and looks for the 10-star version worth expanding toward.",
    },
    {
      name: "/plan-eng-review",
      role: "Architecture lock-in",
      summary:
        "Turns hand-wavy implementation intent into data flow, failure modes, and a testable plan.",
    },
    {
      name: "/review",
      role: "Staff engineer bug finder",
      summary:
        "Targets production regressions, completeness gaps, and the issues CI usually misses.",
    },
    {
      name: "/qa",
      role: "Browser QA that can fix",
      summary:
        "Navigates your staging app with a real browser and converts discovered issues into regression fixes.",
    },
    {
      name: "/ship",
      role: "Release automation",
      summary:
        "Runs tests, audits coverage, pushes the branch, opens the PR, and keeps the sprint moving.",
    },
  ],
  quickStart: [
    "Clone the repo into your Codex or Claude skills directory.",
    "Run setup and let gstack register the slash-command specialists.",
    "Start with /office-hours before implementation so downstream skills inherit a real spec.",
    "Use /review and /qa on every branch that touches the user experience.",
  ],
  faq: [
    {
      question: "What is gstack?",
      answer:
        "gstack is Garry Tan's open source AI software factory: a collection of specialized slash commands and power tools that structure how an agent thinks, plans, reviews, tests, and ships software.",
    },
    {
      question: "Who is gstack for?",
      answer:
        "The primary audience is founders, technical CEOs, first-time Claude Code users, and senior engineers who want the speed of agents without losing review discipline.",
    },
    {
      question: "Why does gstack feel different from a blank AI coding setup?",
      answer:
        "Because the value is not just better prompting. gstack imposes roles, review gates, QA, release automation, and a sprint order so each stage has context from the one before it.",
    },
    {
      question: "How do I install it?",
      answer:
        "Install it like a skill package, run the setup script, then start with /office-hours and /plan-* before you ask the agent to implement anything.",
    },
  ],
} as const;
