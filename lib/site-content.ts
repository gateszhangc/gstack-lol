export const siteContent = {
  metadata: {
    title: "gstack | Garry Tan's Workflow for Claude Code and Codex",
    description:
      "gstack is Garry Tan's open-source workflow for Claude Code and Codex: frame the work, review harder, run browser QA, and ship with release discipline.",
    url: "https://gstack.lol",
    githubUrl: "https://github.com/garrytan/gstack",
    keywords: [
      "gstack",
      "garry tan gstack",
      "claude code workflow",
      "codex workflow",
      "ai engineering workflow",
      "browser qa for ai coding",
      "ai code review workflow",
      "gstack install",
    ],
  },
  hero: {
    eyebrow:
      "Garry Tan's open-source workflow for Claude Code, Codex, and compatible agents.",
    headline: "Turn your coding agent into a software team with standards.",
    lede:
      "gstack adds a real delivery loop to agent-driven work: reframe the problem, lock the plan, review the code, run browser QA, ship cleanly, and learn from the sprint. You move faster without trusting a blank prompt.",
    proofChips: [
      "18 specialists",
      "7 power tools",
      "MIT licensed",
      "30-second install",
    ],
    sideNotes: [
      {
        label: "Best for",
        value: "founders, technical leads, and first-time agent users",
      },
      {
        label: "Outcome",
        value: "more shipped work without dropping review, QA, or release discipline",
      },
      {
        label: "Difference",
        value: "an ordered workflow instead of one-off prompts and manual cleanup",
      },
    ],
    installCommand:
      "git clone https://github.com/garrytan/gstack.git ~/.codex/skills/gstack\ncd ~/.codex/skills/gstack && ./setup --host codex",
  },
  trustRail: [
    "Free and MIT licensed",
    "Works with Claude Code and Codex",
    "Browser QA built in",
    "Review and release workflow included",
  ],
  audiences: [
    {
      title: "Founders & CEOs",
      description:
        "Ship more product ideas without rebuilding an engineering org around every new bet.",
    },
    {
      title: "First-time agent users",
      description:
        "Start with named roles, concrete commands, and a system that tells you what to do next.",
    },
    {
      title: "Tech leads & staff engineers",
      description:
        "Add architecture review, regression pressure, browser QA, and release discipline to every branch.",
    },
  ],
  workflow: [
    {
      step: "Think",
      detail:
        "/office-hours turns a feature request into a sharper problem, a better wedge, and a design doc the rest of the stack can use.",
    },
    {
      step: "Plan",
      detail:
        "/plan-ceo-review, /plan-eng-review, and /plan-design-review pressure-test scope, architecture, UX, and tests before code starts.",
    },
    {
      step: "Build",
      detail:
        "Implementation runs against a real brief instead of improvised prompts and shifting intent.",
    },
    {
      step: "Review",
      detail:
        "/review inspects the branch like a senior engineer looking for regressions, gaps, and hidden risk before prod does.",
    },
    {
      step: "Test",
      detail:
        "/qa opens a real browser, walks the app like a user, fixes issues, and turns them into regression coverage.",
    },
    {
      step: "Ship",
      detail:
        "/ship handles the last-mile checks so branches land with tests, docs, and release discipline intact.",
    },
    {
      step: "Reflect",
      detail:
        "/retro closes the loop with stats, patterns, and pressure for a better next sprint.",
    },
  ],
  specialists: [
    {
      name: "/office-hours",
      role: "Product reframing",
      summary:
        "Pushes past the first idea, sharpens the wedge, and writes the brief downstream commands inherit.",
    },
    {
      name: "/plan-ceo-review",
      role: "Scope and ambition",
      summary:
        "Challenges the request, finds the stronger product move, and protects you from shipping a weak version.",
    },
    {
      name: "/plan-eng-review",
      role: "Architecture and tests",
      summary:
        "Turns hand-wavy intent into data flow, failure modes, edge cases, and a plan the code can actually follow.",
    },
    {
      name: "/review",
      role: "Production-minded review",
      summary:
        "Targets regressions, missing tests, and the issues happy-path implementation usually leaves behind.",
    },
    {
      name: "/qa",
      role: "Browser QA that can fix",
      summary:
        "Navigates your app in a real browser and converts discovered issues into concrete fixes and regression coverage.",
    },
    {
      name: "/ship",
      role: "Release automation",
      summary:
        "Runs the release checklist so code lands with the tests, docs, and process support it needs.",
    },
  ],
  quickStart: [
    "Clone the repo into your agent's skills directory.",
    "Run setup and let gstack register the commands for your host.",
    "Start with /office-hours so the rest of the sprint inherits a real brief.",
    "Use /review, /qa, and /ship before you merge.",
  ],
  faq: [
    {
      question: "What is gstack?",
      answer:
        "gstack is Garry Tan's open-source workflow for Claude Code, Codex, and compatible agents. It packages specialist commands and power tools into one software delivery system.",
    },
    {
      question: "Who is gstack for?",
      answer:
        "It is built for founders, first-time agent users, and technical leads who want AI speed without lowering the bar on planning, review, QA, and release quality.",
    },
    {
      question: "Why not just use a blank prompt?",
      answer:
        "Because raw speed is not the bottleneck. Trust is. gstack adds roles, order, review gates, QA, and release checks so each step inherits context from the one before it.",
    },
    {
      question: "Does gstack work with Claude Code and Codex?",
      answer:
        "Yes. gstack is designed for Claude Code, Codex, and similar agent hosts, so the same workflow can carry product framing, review, browser QA, and release discipline across tools.",
    },
    {
      question: "How quickly can I try it?",
      answer:
        "You can install it in about 30 seconds and get to a first useful run in a few minutes on a repo that already knows how to run tests.",
    },
  ],
} as const;
