#!/usr/bin/env bash

set -v

(cd ./web && npm install && npm run build)
rm -rf ./server/public ./server/src/middleware/ssr/render ./web/dist/index.html # remove index.html to prevent loading it instead of ssr middleware
mkdir -p ./server/src/middleware/ssr/render
mv ./web/dist/umi.server.js ./server/src/middleware/ssr/render/index.js
rm -rf ./web/dist/umi.server.d.ts
mv ./web/dist ./server/public

(cd server && npm install && npm run compile)
