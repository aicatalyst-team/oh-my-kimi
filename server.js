#!/usr/bin/env node
/**
 * AutoPoC HTTP Wrapper for OMK (Open Multi-Agent Kit)
 * 
 * Exposes health, version, and help endpoints as HTTP API
 * to validate containerized deployment on OpenShift.
 */
import http from "node:http";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = parseInt(process.env.PORT || "8080", 10);
const OMK_BIN = path.join(__dirname, "packages", "coding-agent", "dist", "cli.js");

let cachedVersion = null;
let cachedHelp = null;

function getVersion() {
  if (cachedVersion) return cachedVersion;
  try {
    cachedVersion = execSync(`node ${OMK_BIN} --version 2>&1`, {
      timeout: 15000,
      encoding: "utf-8",
    }).trim();
    return cachedVersion;
  } catch (err) {
    return `error: ${err.message}`;
  }
}

function getHelp() {
  if (cachedHelp) return cachedHelp;
  try {
    cachedHelp = execSync(`node ${OMK_BIN} --help 2>&1`, {
      timeout: 15000,
      encoding: "utf-8",
    }).trim();
    return cachedHelp;
  } catch (err) {
    return `error: ${err.message}`;
  }
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;

  res.setHeader("Content-Type", "application/json");

  if (pathname === "/health" || pathname === "/healthz") {
    res.writeHead(200);
    res.end(JSON.stringify({ status: "ok", service: "omk-poc", timestamp: new Date().toISOString() }));
  } else if (pathname === "/version") {
    const version = getVersion();
    res.writeHead(200);
    res.end(JSON.stringify({ version, service: "omk-poc" }));
  } else if (pathname === "/help") {
    const help = getHelp();
    res.writeHead(200);
    res.end(JSON.stringify({ help, service: "omk-poc" }));
  } else if (pathname === "/") {
    res.writeHead(200);
    res.end(JSON.stringify({
      service: "omk-poc",
      description: "Open Multi-Agent Kit (OMK) - AutoPoC HTTP Wrapper",
      endpoints: ["/health", "/version", "/help"],
    }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Not found", path: pathname }));
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`OMK AutoPoC server listening on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
