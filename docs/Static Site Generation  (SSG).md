Static Site Generation (SSG) happens at build time on the server.

During build process, content is generated and converted into HTML, CSS and JavaScript files. It doesn't require server interaction during runtime. The generated static files can be hosted on content delivery network (CDN) and then served to the client as it is.

The result, the rendered content is cached and reused on subsequent requests leading to fast content delivery and less server load. This minimal processing results in higher performance.

Although SSG handles dynamic data during the build process, it requires a rebuild if you update anything, as it happens during the build time!

An example use case would be any Documentation or Blog & News websites. All articles or content are static 90% of the time. It doesn't need any processing. Once build, we can ship it as it is. Whenever we want to update the content, we have to rebuild it!
