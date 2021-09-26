+++
title = "Rustpad"
date = 2021-06-23

[extra]
repo = "ekzhang/rustpad"
topics = "Rust,Systems,TypeScript,React"
lead = "A self-hosted online collaborative code editor."
image = "rustpad.png"
+++

Rustpad is an efficient and minimal collaborative text editor based on the
_operational transformation_ algorithm. It lets users collaborate in real time
while writing code in their browser. Rustpad is completely self-hosted and fits
in a tiny Docker image, no database required.

Architecturally, client-side code communicates via WebSocket with a central
server that stores in-memory data structures. This makes the editor very fast,
allows us to avoid provisioning a database, and makes testing much easier. It
showcases the power of distributed systems and concurrent network programming,
designing while taking the entire stack into consideration.

**Links: [GitHub](https://github.com/ekzhang/rustpad),
[Website](https://rustpad.io/)**