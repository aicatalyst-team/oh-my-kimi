# Image Review -- v1

## Scores

| Dimension | Weight | Score (1-10) | Weighted |
|---|---|---|---|
| Placement rationale | 2x | 3 | 6 |
| Prompt specificity | 2x | 2 | 4 |
| Brand compliance | 2x | 5 | 10 |
| Aspect ratio & sizing | 1x | 2 | 2 |
| Alt text quality | 1x | 2 | 2 |
| Image count | 1x | 3 | 3 |
| **Totals** | | | **27** |

**Normalized score: (27 / 90) * 10 = 3.0 / 10**

---

## Per-Image Feedback

### Mermaid Diagram: HTTP Wrapper Architecture (lines 44-53)

- **Diagram clarity:** Good. The left-to-right flow from HTTP client through `server.js` to the three endpoints and the OMK CLI is easy to follow. Node labels are concise and accurate.
- **Diagram type:** Correct choice. A `graph LR` flowchart is the right representation for a request-routing architecture.
- **Brand theming:** The `%%{init}%%` block is present and references correct Red Hat brand variables: `primaryColor: '#EE0000'`, `primaryBorderColor: '#A30000'`, `lineColor: '#6A6E73'`, `secondaryColor: '#F0F0F0'`, `tertiaryColor: '#0066CC'`. This is properly done.
- **Issue:** No alt text or caption is provided for the diagram. Readers using screen readers or text-only renderers will get nothing from this visual.

---

## Missing Image Opportunities

The draft has **one visual across 108 lines and 8 sections**. Several sections would benefit substantially from diagrams or images:

1. **Hero image (before or after the title).** A 16:9 hero showing the OMK agent architecture deployed on OpenShift would immediately establish context. Currently the post opens with pure text.

2. **Monorepo build pipeline diagram (Section: "Containerizing with UBI").** A Mermaid sequence or flowchart showing the five workspace packages building in dependency order would clarify the build chain described in prose. This is diagrammable content.

3. **OpenShift build pipeline diagram (Section: "Building on OpenShift").** The five-step build process (pull base image -> install git -> copy/install deps -> build packages -> push to Quay) maps directly to a Mermaid flowchart. Currently this is a numbered list that would be more effective as a visual.

4. **Deployment topology diagram (Section: "Deploying and testing").** A diagram showing the Deployment -> Service -> Route -> Pod architecture with readiness/liveness probes would make the Kubernetes pattern concrete. This is a standard pattern that readers expect to see visualized.

5. **Test results visualization.** The test results table is adequate, but a simple status diagram or annotated screenshot placeholder would add visual weight to the validation section.

6. **Challenges summary diagram (Section: "Challenges and solutions").** A simple 2x2 grid or flowchart showing problem -> solution pairs would make the four issues scannable at a glance.

---

## Dimension-by-Dimension Feedback

### Placement rationale (Score: 3/10)

The single Mermaid diagram is well-placed -- it directly illustrates the HTTP wrapper pattern described in the surrounding text. However, the post has 8 content sections and only 1 visual element. Sections on containerization, building, deployment, and testing are entirely text-based despite describing visual/spatial concepts (build pipelines, deployment topologies, test flows). The placement rationale for the one existing image is sound, but the absence of visuals in the remaining sections is a significant gap.

### Prompt specificity (Score: 2/10)

There are zero image placeholders with generation prompts in the entire draft. The Mermaid diagram is inline code rather than a prompted image, so it doesn't count toward prompt specificity. If a hero image or any placeholder images were included, they would need detailed prompts specifying subject, composition, color palette (with hex codes), and aspect ratio. None of this exists.

### Brand compliance (Score: 5/10)

The Mermaid diagram correctly uses the Red Hat brand palette in its `%%{init}%%` directive: primary red (#EE0000), dark red border (#A30000), neutral line color (#6A6E73), light neutral background (#F0F0F0), and extended blue (#0066CC). This is well done. However, with only one visual element, brand compliance is demonstrated in a very narrow scope. Any additional images or diagrams would need to maintain this standard.

### Aspect ratio & sizing (Score: 2/10)

No aspect ratios are specified anywhere in the draft. The Mermaid diagram handles its own sizing via the rendering engine, so no penalty for that specific element. However, there are no hero images (should be 16:9), no inline images (should be 4:3), and no wide diagrams (should be 16:9). The rubric expects explicit ratios for image placeholders.

### Alt text quality (Score: 2/10)

No alt text exists in the draft. The Mermaid diagram is embedded as a code block with no associated alt text, caption, or figure description. Screen reader users would encounter a code block with no semantic meaning. At minimum, a caption like "Figure 1: HTTP wrapper architecture routing requests to OMK CLI endpoints" should accompany the diagram.

### Image count (Score: 3/10)

One visual for a 108-line, 8-section technical blog post is insufficient. The rubric states "10 or fewer, each earns its place" for a score of 10 -- meaning the expectation is that images exist and earn their place, not that they are absent. A post of this length and technical depth should have 4-6 visuals (hero + 3-5 inline diagrams). Zero image placeholders exist; only one Mermaid diagram is present.

---

## Top 3 Actionable Improvements

1. **Add 3-4 Mermaid diagrams for the build pipeline, deployment topology, and monorepo structure.** The "Building on OpenShift" section's 5-step process and the "Deploying and testing" section's Kubernetes architecture are ideal candidates for `graph TD` or `graph LR` flowcharts. Use the same `%%{init}%%` theme block from the existing diagram to maintain brand consistency.

2. **Add a hero image placeholder with a detailed generation prompt.** Before the first section, include an image placeholder with a specific prompt, e.g.: `![Architecture diagram showing OMK multi-agent coding tool deployed as a containerized service on Red Hat OpenShift, with DAG-based task orchestration flowing through an HTTP wrapper to Kubernetes pods. Red Hat brand colors: primary #EE0000, neutrals #151515 and #F0F0F0, accent blue #0066CC. 16:9 aspect ratio, clean technical illustration style.](hero.png)`

3. **Add alt text or captions to all visual elements, including the existing Mermaid diagram.** Wrap the Mermaid block in a figure with a descriptive caption. For any new image placeholders, write alt text that describes the content and purpose (not just "architecture diagram" but "Flow diagram showing HTTP requests routed through server.js to three OMK CLI commands").
