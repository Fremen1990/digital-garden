---
title: Server Side Rendering (SSR)
publish: true
---

Rendering components on the server side (Server Component) - it is default behaviour in NextJS

Benefits of Server Side Rendering (SSR) Components:

- Smaller JS Bundler Size
- Enhanced SEO - indexing etc
- Faster Initial Page Load
- Efficient Utilization Of Server Resources - Fetching data closer to the server and reducing waiting time for data

Recommendation for SSR components (no user activity ):

- Fetching data from server
- Displaying static content
- Performing server-side computation
- Keeping sensitive information on the server (access tokens, API keys, etc)
