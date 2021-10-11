# nextJsByFrontEndMasters
Next.js is a complete full-stack framework for modern apps

next Will start Next.js in dev mode with hot reloading.

remember: Next.js is a full-stack framework, by default, it needs to be hosted on a platform that supports Node.js

To get started, create a directory on your called /pages. Next.js will associate any file in this directory as a route. The file names determine the route name or pattern, and whatever component is exported is the actual page.

Next.js has adopted webpack 5 as the default for compilation. We've spent a lot of effort into ensuring the transition from webpack 4 to 5 will be as smooth as possible.

Prerendering:
optimized by Next.js, and it was pre rendered ahead of time, The Html was created before it was sent to the server,
so it is not loaded on the client, your React component was actually rendered on the server and sent down as HTMl