---
title: NextJS
publish: true
---

[The Project GitHub DevthomasOverflow](https://github.com/Fremen1990/devthomas-overflow)
[The Project Table](https://github.com/users/Fremen1990/projects/6/views/1?pane=issue&itemId=45939795)

### [[NextJS - Architecture]]

### [Client vs. Server Paradigm](https://courses.jsmastery.pro/course/ultimate-next-js-13-course-ebook/learn/module-next.js-routing/creating-routes-for-devflow)

[Docs # Less code, better UX: Fetching data faster with the Next.js 13 App Router](https://vercel.com/blog/nextjs-app-router-data-fetching)

**Route methods:**

- [[Pages Directory]] - old one before NextJS v13
- [[App Directory]] - Introduced in NextJS v13 - Server Side Components

**Component types split:**
Does the component require user interactivity? [[ServerOrClient.excalidraw]]

- NO! [[Server Side Rendering (SSR)]]
- YES! [[Client Side Rendering (CSR)]]

**NextJS rendering strategies:**

|                           | Client                                                                                                                       | Server                                                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Rendering Process         | Occurs on the users browser                                                                                                  | Happens on the server before sending the page to the client                                                   |
| Interactivity & Load Time | Provides a dynamic and intereactive user experience                                                                          | Provides a fully rendered HTML page to the client resulting in faster initial load page                       |
| Fetching & SEO            | Smother transition between the pages and real-time data fetching                                                             | Fully rendered content enhancing search engine rankings and social media shaing previews                      |
| Load & Performance        | Reduced server load and potentially lower cost as the clients browser is responsible for handling the rendering              | Performs well on any slower devices as rendering is done on the server                                        |
| Consistent Rendering      | Compatibility and performance depend on the users device configuration                                                       | Consistent rendering across any devices regardless of configuration reducing the risk of compatibility issues |
| Security                  | Potential risk of security vulnerabilities such as Cross-Site-Scripting (XSS), Code Injection (CI), Data Exposure (DU), etc. |                                                                                                               |

Two runtimes available in NextJS:

- NodeJS Runtime - default
- Edge Runtime - Web APIs

```ts
export const runtime = "edge" // 'nodejs' (default) | 'edge'
```

Three NextJS rendering strategies:

- [[Static Site Generation  (SSG)]]
- [[Incremental Static Generation (ISG)]]
- ***

  ***

  ***

### NextJS Architecture - Quiz:

**1. What are the different types of components in NextJS, explain differences?**

Client Components - which uses user activities like input data, triggers events (like onClick etc.) on buttons, usage of hooks, needs directive use client on the top of the file

Server Components - which are rendered on the server, faster, better SEO, with smaller JS bundle size, faster initial load, more efficient utilize server resources - closer to the server data, default nextJS components

2. What are the benefits of server-side rendering?

- smaller JS bundle size
- enhanced SEO
- Faster Initial Load
- More efficient utilization of server resources

3. What are the latest features of the app directory regarding the client/server rendering?

App Directory introduced new way of creating routes by nesting folders, the folder name is the route name and the file inside need to have name page.tsx, new way of defining routes for Loading, Errors and Layouts.

---

5. What does rendering mean? Explain different rendering strategies of NextJS

6. What is build time and run time? explains the difference between them in web application life.

7. What are the benefits of rendering content in a Client VS Server Environment?

8. Imagine, you are developing a large scale e-commerce platform that requires a rendering strategy to handle a high volume of products listings. The platform needs to display product information, pricing, availability and customer rewievs. Additionaly, the platform aims to provide a fast and interactive user experience. Considering the complex requirements of the e-commerce platform, discuss the trade-offs and factors you would consider when choosing between [[Static Site Generation  (SSG)]] and [[Server Side Rendering (SSR)]] as the primary rendering strategy.
