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
