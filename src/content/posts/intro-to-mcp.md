---
title: 'Integrating Model Context Protocol'
date: '2024-12-30'
tags: ['MCP', 'AI', 'Architecture']
---

# Integrating Model Context Protocol (MCP)

The **Model Context Protocol (MCP)** is a standardized way to connect AI models to external tools and data contexts. In this system, we are using it to bridge the gap between the frontend vault and external data sources.

## Why MCP?

Traditional AI integrations often require custom glue code for every new tool. MCP standardizes this with:

- **Clients**: The frontend (like this Vault).
- **Servers**: Backend services exposing tools/resources.
- **Transports**: SSE or Stdio for communication.

## Implementation Strategy

We implemented a custom `useMCP` hook in React that connects via **Server-Sent Events (SSE)**.

```typescript
const client = new Client({
    name: "cyber-portfolio-client",
    version: "1.0.0"
});
await client.connect(transport);
```

This allows the Vault to dynamically discover tools like database queries or terminal commands without hardcoding them.
