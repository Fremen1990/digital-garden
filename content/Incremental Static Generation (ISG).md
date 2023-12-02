It allows us to update these static pages after we build them without needing to rebuild the entire site.

The on-demand generation of ISR allows us to generate a specific page on-demand or in response to user's request. Meaning a certain part of website or pages will be rendered at build time while other is generated only when needed, i.e., at run time.

This reduces the build time and improves the overall performance of the website by updating only requested pages for regeneration.

With this hybrid strategy we now have the flexibility to manage content updates. We can cache the static content as well as revalidate them if needed.

An example use case would be the same where we can use SSG for the article details page and use ISG for showing a list of articles.
