---
title: NextJS
publish: true
---

# NextJS - The React Framework for the Web

I will present here my notes from learning NextJS from two masterclass courseses and docuementation to gather all informations in one place and create Digital Developer Garden for future use.

I will also build the project using NextJS and put it here as well:

- [The Project GitHub DevthomasOverflow](https://github.com/Fremen1990/devthomas-overflow)

- [The Project Table](https://github.com/users/Fremen1990/projects/6/views/1?pane=issue&itemId=45939795)

## [[NextJS - Architecture]]

### [Client vs. Server Paradigm](https://courses.jsmastery.pro/course/ultimate-next-js-13-course-ebook/learn/module-next.js-routing/creating-routes-for-devflow)

[Docs # Less code, better UX: Fetching data faster with the Next.js 13 App Router](https://vercel.com/blog/nextjs-app-router-data-fetching)

**Route methods:**

- [[Pages Router]] - old one before NextJS v13
- [[App Router]] - Introduced in NextJS v13 - Server Side Components

For new applications, NextJS recommends using the [App Router](https://nextjs.org/docs/app). This router allows you to use React's latest features and is an evolution of the [Pages Router](https://nextjs.org/docs/pages) based on community feedback.

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
- [[Server Side Rendering (SSR)]]

  [[### NextJS Architecture - Quiz]]\*\*\*

---

## NextJS Authentication

In NextJS [[App Router]] there there are some common authentication solutions that support the App Router:

- [NextAuth.js](https://next-auth.js.org/configuration/nextjs#in-app-router)
- [Clerk](https://clerk.com/docs/quickstarts/nextjs)
- [Auth0](https://github.com/auth0/nextjs-auth0#app-router)
- [Stytch](https://stytch.com/docs/example-apps/frontend/nextjs)
- [Kinde](https://kinde.com/docs/developer-tools/nextjs-sdk/)
- Or manually handling sessions or JWTs
