# nextJsByFrontEndMasters
Next.js is a complete full-stack framework for modern apps

next Will start Next.js in dev mode with hot reloading.

remember: Next.js is a full-stack framework, by default, it needs to be hosted on a platform that supports Node.js

To get started, create a directory on your called /pages. Next.js will associate any file in this directory as a route. The file names determine the route name or pattern, and whatever component is exported is the actual page.

Next.js has adopted webpack 5 as the default for compilation. We've spent a lot of effort into ensuring the transition from webpack 4 to 5 will be as smooth as possible.

Prerendering:
optimized by Next.js, and it was pre rendered ahead of time, The Html was created before it was sent to the server,
so it is not loaded on the client, your React component was actually rendered on the server and sent down as HTMl

Navigation:
There Link component allows you to do client-side routing. This is important because 
if you don't want that or are linking to another site, then you should just use an a tag instead.
Link component
<Link href="/settings">
  <a>settings</a>
</Link>

Customizing Next.js config

Plugins
npm i next-env dotenv-load --dev


Next, create a .env file on the root and add some envs.

HELP_APP_URL=https://google.com
⚠️   warning: don't check .env files into git

Now, we'll use the env in our app. Go to the Nav component and add an a tag to link to the external app.
href={process.env.HELP_APP_URL}

Most plugins follow the withPluginName format. They also usually take your custom Next.js config, 
if any, to ensure its returned and consumed by Next.js. This allows you to compose plugins: