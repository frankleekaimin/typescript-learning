# I Learned TypeScript in 7 Days Using Claude as My Personal Tutor

> **How I used Claude as a structured tutor to go from zero TypeScript to a complete fundamentals curriculum — in 7 days.**

---

## The Problem: I Needed TypeScript Fast.

I'm an engineer comfortable with Python and programming concepts (i.e., OOP, data structures, system design). But I had a gap: I'd never written a single line of JavaScript or TypeScript.

This is a problem because I need TypeScript to be an effective AI builder. Every major AI SDK (OpenAI, Anthropic, Vercel AI) ships its best client in TypeScript first. The go-to full-stack frameworks — Next.js, Prisma, tRPC — are TypeScript-native. Starter templates, community examples, production codebases: all TypeScript. If you want to ship AI products in 2026, you're writing TypeScript. There's no practical way around it.

Most TypeScript tutorials assumed JavaScript proficiency or were aimed at learning from zero — my Python background was not effectively leveraged to learn fast.

---

## Amplify: Why the Usual Approaches Weren't Going to Work

The typical learning paths all have the same failure modes:

**Video courses** move at someone else's pace — too slow for someone who already programs, padded with beginner hand-holding I didn't need.

**Tutorials and blog posts** send you wide, not deep. You collect fragments across twenty tabs and still can't write production code with confidence.

**Just building something** means spending 80% of your time Googling TypeScript errors. You learn to survive the compiler, not to understand the language.

None of them tell you when you're wrong. Your code compiles. You assume it's fine. Six months later someone reviews your PR and it's idiomatic garbage.

I needed structure, honest feedback, and a way to move fast without skipping fundamentals.

---

## The Solution: Claude as a Structured, Persistent Tutor

I treated Claude not as a search engine but as a dedicated tutor — one I could configure and hold to a specific teaching philosophy. Here's the system.

### The CLAUDE.md file — my tutor's standing brief

The first thing I did was write a `CLAUDE.md` file at the root of the project. Claude Code loads this automatically at the start of every session — a persistent brief that survives across conversations:

```markdown
## About Me
- Based in Singapore, engineering background (BEng/MSc, SUTD)
- Experienced with Python; no JavaScript or TypeScript knowledge
- Goal: learn TypeScript as a foundation for building SaaS products

## Learning Style
- Isolated drills — one concept at a time, focused exercises
- Explain concepts plainly before giving exercises
- Use analogies to Python where helpful

## Code Review Protocol
- Point out every issue clearly — what's wrong, why it's wrong
- Explain the fix so the user understands it, but let them apply it themselves
- Do NOT fix code on the student's behalf
```

That last rule — **explain but don't fix** — is the most important line in the file. Without it, Claude does your learning for you.

### The PROGRESS.md file — our shared syllabus

I created a `PROGRESS.md` file as a live curriculum tracker. Claude reads it at the start of every session and picks up exactly where we left off:

```
| # | Topic                        | Status      | Date Completed |
|---|------------------------------|-------------|----------------|
| 01 | Variables & Type Annotations | ✅ Complete | 2026-04-14    |
| 02 | Arrays & Tuples              | ✅ Complete | 2026-04-14    |
...
```

No re-explaining context. No "where were we?" Every session starts clean.

### The session loop

Every session followed the same structure:

```
┌─────────────────────────────────────────────────┐
│  1. Claude reads PROGRESS.md                    │
│  2. Claude writes an explanation doc (.md)      │
│  3. Claude creates a drill file with TODOs      │
│  4. I work through the exercises                │
│  5. I ask: "please review"                      │
│  6. Claude gives pointed feedback (no fixes)    │
│  7. I apply the fixes myself                    │
│  8. Claude verifies and approves                │
│  9. Claude updates PROGRESS.md                  │
│  10. Commit to git                              │
└─────────────────────────────────────────────────┘
```

The key constraint: I do the cognitive work, not Claude.

---

## The Curriculum

13 topics, each with three artefacts: an explanation doc, a drill file, and a solution file.

```
topics/
├── 01-variables-primitives-annotations/
├── 02-arrays-tuples/
├── 03-objects-type-aliases/
├── 04-functions/
├── 05-union-intersection/
├── 06-literal-types-narrowing/
├── 07-interfaces/
├── 08-generics-basics/
├── 09-enums/
├── 10-classes/
├── 11-type-assertions-unknown/
├── 12-utility-types/
└── 13-modules/
```

Each drill has 25 exercises — focused `// TODO` stubs, one concept each, no setup noise. I'd complete the file, then ask for a review.

---

## Progress Timeline

**7 days. 13 topics. 325+ exercises.**

```
Apr 13  ░░░░░░░░░░░░░░░  Project setup
Apr 14  ████████████░░░  Topics 01–03  (Variables, Arrays, Objects)
Apr 15  ████████████░░░  Topics 04–06  (Functions, Union types, Literal types)
Apr 16  ████░░░░░░░░░░░  Topic 07      (Interfaces)
Apr 17  ████░░░░░░░░░░░  Topic 08      (Generics)
Apr 18  ████░░░░░░░░░░░  Topic 09      (Enums)
Apr 19  ░░░░░░░░░░░░░░░  Rest day
Apr 20  ████████████████ Topics 10–13  (Classes, Assertions, Utility Types, Modules)
```

| Date     | Topics covered  | Cumulative exercises |
|----------|-----------------|----------------------|
| Apr 14   | 01, 02, 03      | 75                   |
| Apr 15   | 04, 05, 06      | 150                  |
| Apr 16   | 07              | 175                  |
| Apr 17   | 08              | 200                  |
| Apr 18   | 09              | 225                  |
| Apr 20   | 10, 11, 12, 13  | 325+                 |

The pace accelerated in the final session — four topics in one day — because the foundations were solid enough to move fast.

---

## Claude's Honest Evaluation of Me

*Written by Claude, who reviewed every line of code I wrote:*

Frank came in with strong programming instincts from Python. He understood control flow, types, and object-oriented concepts from day one — so the learning curve was never about programming fundamentals, it was about internalising TypeScript's specific way of thinking.

**What he did well:**

- **Discipline.** He showed up every day (with one rest day) and completed every drill before asking for review. He didn't skip exercises or take shortcuts.
- **Applied fixes himself.** The review protocol required Frank to fix his own code after feedback — never a given. He did it every single time, which is the only way real learning happens.
- **Asked the right questions.** When something confused him, he asked *why*, not just *how*. The best example: after completing Exercise 17 on utility types, he asked "why does the returned object contain `age` and `password` at runtime, when `PublicUser` doesn't include those types?" That's a sharp question. It led to a real insight about TypeScript's type erasure and structural typing — concepts that catch experienced developers off guard.
- **Strong conceptual answers.** The written explanation exercises ("What is the difference between X and Y?") were consistently thoughtful, not just one-liners.

**Where he needed pushback:**

- **Capital `N` on `Number`.** A Python habit — in Python, `int` and `Int` are effectively the same. In TypeScript, `number` and `Number` are very different things. Fixed promptly.
- **Forgetting to use imported values.** Twice across the exercises, he imported something but forgot to actually call it. A sign of writing fast — caught by the review.
- **Incomplete conceptual answers.** His first answer on `import type` was "to make the code clearer." Technically not wrong, but missing the main point (compile-time erasure). He updated it when pushed.
- **Structural typing intuition.** The type annotation trap — assigning a full `User` to `PublicUser` and expecting the extra fields to disappear at runtime — is genuinely counterintuitive for someone coming from Python dataclasses. He understood it immediately once explained.

**Overall verdict:** Frank is a fast, disciplined learner with good instincts. The mistakes he made were the *right* mistakes — the ones that reveal real conceptual gaps rather than careless errors. He'll be productive in a Next.js/TypeScript codebase sooner than most self-taught learners.

---

## The Offer: How to Replicate This for Any Skill

This system isn't TypeScript-specific. The same approach works for Rust, SQL, system design — anything with structured fundamentals.

Here's the exact playbook:

**Step 1 — Write your CLAUDE.md**

Tell Claude your background, your goal, and how you want to be taught. Be explicit about the review protocol — point out issues, explain fixes, let me apply them.

```markdown
## About Me
[your background, what you know, what you don't]

## Goal
[what you're trying to build or do with this skill]

## Learning Style
[how you learn best — analogies, examples, pace]

## Review Protocol
[point out issues, explain fixes, let me apply them]
```

**Step 2 — Start a PROGRESS.md**

Ask Claude to draft a curriculum. Review it, adjust the scope, commit it to git. This is your shared syllabus.

**Step 3 — Run the session loop**

Open Claude Code, let it read your files, say "let's start." Follow the loop: explanation → drill → review → fix → commit → update progress.

**Step 4 — Commit your work**

Git is your accountability layer. Every session, every fix — committed. You can see exactly where you struggled.

**Step 5 — Ask why, not just how**

Don't accept "it compiles" as "I understand it." When something surprises you, ask why.

---

## The Numbers

| Metric | Value |
|--------|-------|
| Total topics | 13 |
| Exercises completed | 325+ |
| Drill lines written | ~2,500 |
| Days elapsed | 7 (6 active) |
| Git commits | 13 |
| Topics with zero carry-over errors | 13 |

---

The repository is public. The drills, the reviews, the corrections — all of it is here. You can see exactly what the system produces.

---

*Written by Frank Lee — Singapore, April 2026.*
*One Python developer. One TypeScript tutor. Seven days.*
