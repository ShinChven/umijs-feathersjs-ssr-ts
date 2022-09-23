# Full Stack TypeScript Server Side Rendering with Umijs and FeathersJS

> This is a full stack TypeScript Server-Side-Rendering with React/UmiJS and FeathersJS.

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
