# RHOAI Evaluation: oh-my-kimi (Open Multi-Agent Kit)

## Strategy: Red Hat AI 2026

## Scores

| Dimension | Score (0-20) | Rationale |
|-----------|-------------|-----------|
| Audience Value | 14 | Multi-agent orchestration is of high interest to platform engineering teams evaluating coding agent deployment. The provider-neutral design (Anthropic, OpenAI, Google, Bedrock, Mistral) is enterprise-relevant. However, the primary audience is individual developers, not teams deploying on shared infrastructure. |
| Strategic Alignment | 12 | Aligns with agentic-ai strategy area through MCP support, tool calling, and multi-agent orchestration. However, it's a CLI/TUI tool designed for local workstation use, not a platform-native agent runtime. The strategy emphasizes "agents as governable platform workloads" — this project is the opposite. |
| Strategy Fit | 11 | Touches MCP, agent-runtime, and developer-experience capability labels. However, it's a local-first tool that doesn't leverage OpenShift AI, Llama Stack, AI Hub, or GenAI Studio directly. The DAG planning and quality gates are interesting but designed for local coding workflows, not platform-managed agent deployment. |
| Platform Leverage | 8 | Limited platform leverage. As a CLI tool with no HTTP interface, it doesn't naturally demonstrate Service routing, scaling, GPU scheduling, or other OpenShift capabilities. The PoC would primarily validate that the tool can build and run in a container, which is a low-signal platform test. |
| Demo Potential | 10 | The RPC mode could be demonstrated via a thin HTTP wrapper, showing the agent responding to prompts. However, the real value of the tool (interactive TUI, file editing, code generation) cannot be meaningfully demoed in a container deployment. |

## Total Score
- **Impact Score**: (14 + 12 + 11 + 8 + 10) / 5 = **11.0 / 20**

## Feasibility

| Dimension | Score (0-10) | Rationale |
|-----------|-------------|-----------|
| Container Readiness | 5 | Has a reference Dockerfile in docs but requires Node.js >= 22.19.0 (not available in UBI9 nodejs-22 image). Monorepo build is complex. No existing production Dockerfile. |
| Dependency Profile | 7 | npm workspace with well-defined dependencies. No native binaries except WASM modules. Should install cleanly. |
| Reproduction Confidence | 6 | Build process is documented. Monorepo build order matters. Tests exist but require API keys. |
| Complexity Sweet Spot | 5 | Moderately complex — monorepo with 5 packages, specific Node.js version requirement, CLI tool needing service wrapping for PoC. |

- **Feasibility Score**: (5 + 7 + 6 + 5) / 4 = **5.75 / 10**

## Relationship to Red Hat AI
**validates-platform-story**: The PoC would validate that a modern TypeScript agent runtime can be containerized and deployed on OpenShift, running in headless RPC mode as a containerized service.

## Strategy Areas
- agentic-ai

## Capability Labels
- mcp, agent-runtime, tool-calling, developer-experience

## Strengths
- Provider-neutral LLM support (works with any provider)
- MCP protocol support for tool connectivity
- DAG-based task planning with quality gates
- Active development (v0.90.3)
- MIT license

## Risks
- CLI/TUI tool not designed for server deployment
- Requires Node.js >= 22.19.0 (very recent)
- No HTTP/API interface — needs a service wrapper
- Complex monorepo build
- Requires LLM API keys for meaningful operation
