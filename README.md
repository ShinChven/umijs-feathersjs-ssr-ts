# Full Stack TypeScript Server Side Rendering with Umijs and FeathersJS

> This is a full stack TypeScript Server-Side-Rendering with React/UmiJS and FeathersJS.

## Quick Start

```bash
# Install dependencies and compile web frontend project.
bash deploy-web.sh
# Start web server.
cd server && npm start
```

Open <a href='http://localhost:3030' target='_blank'>http://localhost:3030</a> in browser.

## Server

### Enable Allow JavaScript

Since Umijs' Server Side Render is exported as a JavaScript module, you need to `allowJs` in `tsconfig.json`, so that the JavaScript module will be copied to `lib` directory in `production` mode.

While `allowJs` is set to true, you'll also need to exclude `public` directory in `tsconfig.json` to avoid compiling `public` directory.

```json
{
  "compilerOptions": {
    "allowJs": true
  },
  "exclude": [
    "public"
  ]
}
```
