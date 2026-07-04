# Blog Abstract: Deploying oh-my-kimi on OpenShift

## Thesis
Deploying a CLI-native multi-agent coding tool (OMK) on OpenShift proves that modern agentic AI runtimes can be containerized and run as platform-managed services, even when they weren't designed for server deployment.

## Target Audience
Platform engineers and developer experience teams evaluating agent runtime deployment strategies on OpenShift AI.

## Blog Type
Red Hat Developer Blog

## Key Points
1. CLI/TUI tools designed for local workstations can be adapted for container deployment with thin HTTP wrappers
2. UBI9 Node.js images support modern TypeScript monorepo builds with npm workspaces
3. OpenShift's build system handles complex multi-stage builds with binary source upload

## Products/Projects
- Red Hat OpenShift AI
- Open Data Hub
- UBI9 Node.js images
- OpenShift Build (BuildConfig)

## CTA
Explore how AutoPoC can automate PoC deployments for your own projects on OpenShift AI.

## Proposed Section Outline
1. What is OMK (Open Multi-Agent Kit)?
2. Why deploy a CLI agent tool on OpenShift?
3. Containerizing a TypeScript monorepo with UBI
4. Building and deploying on OpenShift
5. Validating the deployment
6. Challenges and solutions
7. Try it yourself
