# Formatting Review: v1

**Reviewer:** Formatting (Editorial Compliance)
**Draft:** v1.md
**Date:** 2026-07-04

---

## Scores

| Dimension | Weight | Score (1-10) | Weighted |
|---|---|---|---|
| Heading hierarchy | 1x | 8 | 8 |
| Code formatting | 1x | 4 | 4 |
| CTA placement | 2x | 3 | 6 |
| SEO readiness | 1x | 6 | 6 |
| Link strategy | 1x | 3 | 3 |
| Editorial compliance | 2x | 5 | 10 |
| Brand standards | 1x | 6 | 6 |
| Word count | 1x | 8 | 8 |
| **Total** | **10x** | | **51 / 100** |

**Normalized score: 5.1 / 10**

---

## Dimension Feedback

### Heading hierarchy (8/10)

Good cascade: `##` title, `###` subsections, no H1 in body, no skipped levels. Sentence case is applied consistently ("What is OMK?", "Challenges and solutions", "Try it yourself"). Minor deduction: "The HTTP wrapper approach" could be argued as slightly inconsistent since "HTTP" is an acronym mid-heading, but this is acceptable. Clean structure overall.

### Code formatting (4/10)

The draft uses backticks extensively throughout the body text, which violates the "no backticks in final output" rule. Specific violations:

- Line 9: `tsgo`
- Line 25: `registry.access.redhat.com/ubi9/nodejs-22`, `Dockerfile.ubi`
- Line 32: `require()`, `import`
- Line 36: `server.js`
- Line 42: `node:http`, `node:child_process`
- Line 57: `BuildConfig`
- Line 63: `quay.io/aicatalyst-team/oh-my-kimi-omk:latest`
- Line 65: `npm install`
- Line 75: `{"status":"ok","service":"omk-poc"}`
- Line 85: `--chown=1001:0`, `COPY`
- Line 87: `$oauthtoken`
- Line 100: `autopoc-artifacts`

Fenced code blocks (Dockerfile, bash, mermaid) are properly formatted with language tags. The code itself is real and runnable. The backtick issue is the primary problem.

### CTA placement (3/10)

A single CTA appears only at the very end of the post (lines 98-108). The rubric requires CTA placement near the top, mid-post, and at closing. There's no mid-post CTA and no top CTA. Additionally, the CTA links to GitHub rather than to redhat.com or a Red Hat resource. The abstract specifies a CTA about AutoPoC and OpenShift AI, but this doesn't appear anywhere in the draft.

Needed:
- Top CTA (within the first few paragraphs) linking to a Red Hat resource (OpenShift AI product page, developer program, etc.)
- Mid-post CTA after the deployment/testing section
- Closing CTA should reference redhat.com content, not just a GitHub repo

### SEO readiness (6/10)

Title is 65 characters ("From CLI to cluster: deploying a multi-agent coding tool on OpenShift"), exceeding the 50-60 character target. Keywords "OpenShift" and "multi-agent" appear in the title and first paragraph. "Deploy" keyword is present. The first paragraph covers the thesis and key terms well. Consider shortening the title or front-loading the primary keyword:

Suggestion: "Deploying a multi-agent coding tool on OpenShift" (49 characters)

### Link strategy (3/10)

Only one external link in the entire post (the GitHub repo on line 100). No internal links to redhat.com properties. Missing links:

- Red Hat OpenShift AI product page
- UBI image documentation
- OpenShift Builds documentation
- Red Hat Developer portal
- MCP protocol reference (if a neutral source exists)

The post should include at least 3-4 internal links to Red Hat resources.

### Editorial compliance (5/10)

**Oxford commas:** Consistently applied. Good.

**Contractions:** Used in some places ("aren't", "it's", "they're", "we're", "here's", "isn't", "can't") but missing opportunities: "We wanted to" (line 15), "We used" (lines 25, 57), "None of these are" (line 90). The rubric says "use contractions aggressively."

**Acronyms not expanded on first use:**
- "MCP" -- used on line 3 and line 7 without expansion. Should be "Model Context Protocol (MCP)" on first use.
- "CLI" -- used in the title (line 1) without expansion. Should expand on first body use.
- "UBI" -- used in heading (line 22) without prior expansion. Should be "Universal Base Image (UBI)."
- "DAG" -- line 7, never expanded. Should be "directed acyclic graph (DAG)."
- "ESM" -- line 32, never expanded. Should be "ECMAScript modules (ESM)."
- "TUI" -- line 7, never expanded. Should be "terminal user interface (TUI)."
- "RPC" -- line 94, never expanded.

**Product names:** "Red Hat OpenShift AI" appears only once (line 94). Earlier references say just "OpenShift" (lines 11, 17, 19, 55, 56, etc.). First mention should use the full product name. "UBI9" should be "Red Hat Universal Base Image 9 (UBI9)" on first mention.

**Em dashes:** None found. Compliant.

**Numerals:** "three things" on line 15 should be "3 things" per the rubric rule. "four issues" on line 83 should be "4 issues." "five npm workspace packages" on line 9 should be "5 npm workspace packages."

### Brand standards (6/10)

The mermaid diagram correctly references Red Hat brand colors (#EE0000, #A30000), which is a nice detail. "Red Hat OpenShift AI" is used correctly on line 94. However, the full branded name is used only once -- the post predominantly says just "OpenShift." No reference to Red Hat font families. The post doesn't link to any Red Hat branded resources.

### Word count (8/10)

At approximately 1,002 words (including code blocks), the post falls within the 800-1,300 word target for tutorial-style posts. The prose-to-code ratio is appropriate. No padding or filler content detected.

---

## Editorial Compliance Checklist

| Rule | Status | Notes |
|---|---|---|
| Sentence case headings | PASS | All headings use sentence case |
| Oxford commas | PASS | Consistently applied |
| No backticks | FAIL | 15+ inline backtick usages throughout |
| Full product name on first mention | FAIL | "OpenShift" used before "Red Hat OpenShift AI" |
| Lowercase component descriptors | PASS | "MCP protocol", "model catalog" |
| No H1 in body | PASS | Title is H2, sections are H3 |
| Expand acronyms on first use | FAIL | MCP, CLI, UBI, DAG, ESM, TUI, RPC all unexpanded |
| Use contractions aggressively | PARTIAL | Some contractions present, many opportunities missed |
| Numerals in running text | FAIL | "three things", "four issues", "five npm" should use numerals |
| No em dashes (or max 1-2) | PASS | None found |

---

## Top 3 Actionable Improvements

1. **Remove all inline backticks and expand acronyms.** Replace every backticked term with plain text or rewrite the sentence to avoid the need for inline code formatting. On first use, expand MCP, CLI, UBI, DAG, ESM, TUI, and RPC. This addresses both the code formatting score (4/10) and editorial compliance score (5/10), covering 3x total weight.

2. **Add CTAs at three positions with redhat.com links.** Insert a CTA in the introduction linking to the Red Hat OpenShift AI product page, a mid-post CTA after the test results table linking to Red Hat Developer resources, and revise the closing CTA to include a redhat.com link alongside the GitHub reference. This addresses CTA placement (2x weight) and link strategy (1x weight), covering 3x total weight.

3. **Use full product names on first mention and switch to numerals.** Change the first "OpenShift" reference to "Red Hat OpenShift AI," the first "UBI" to "Red Hat Universal Base Image (UBI)," and convert written-out numbers ("three things", "four issues", "five npm workspace packages") to numerals. This addresses editorial compliance (2x weight) and brand standards (1x weight).
