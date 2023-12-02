---
title: Server Side Rendering (SSR)
publish: true
---

Dynamic rendering in a nutshell enables the generation of dynamic content for each request, providing fresh and interactive experiences. 

If we have SSG and ISG, why we need SSR??

Given the availability of [[Static Site Generation  (SSG)]] and [[Incremental Static Generation (ISG)]], one might wonder why [[Server Side Rendering (SSR)]] is still needed. Both approaches offer valuable benefits, but their suitability depends on specific use cases.

[[Server Side Rendering (SSR)]] excels in situations where a website heavily relies on client-side interactivity and requires real-time updates. It is particularly well-suited for authentication, real-time collaborative applications such as chat platforms, editing tools and video streaming services.

[[Server Side Rendering (SSR)]] involves heavy-server-side processing, where the server executes code for every individual request, generates the necessary HTML and delivers the response along with the required JavaScript code for client-side interactivity.

Due to this dynamic nature, caching content responses becomes challenging, resulting in increased server load when compared to [[Static Site Generation  (SSG)]] or [[Incremental Static Generation (ISG)]]. However, the benefits of real-time interactivity and up-to-date content make [[Server Side Rendering (SSR)]] a valuable choice for specific application requirements.

We have the freedom to choose any of these rendering techniques for any part of your page code! By default NextJS uses [[Static Site Generation  (SSG)]].

However we can easily switch to [[Incremental Static Generation (ISG)]] od [[Server Side Rendering (SSR)]] as per our specific requirements for different parts of your application. The flexibility of NextJS allows us to pick the most suitable rendering approach for each page of our website.

![Server Side Rendering (SSR)-1701519541235.jpeg](Server%20Side%20Rendering%20%28SSR%29-1701519541235.jpeg)

-----

Rendering components on the server side (Server Component) - it is default behavior's in NextJS

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
