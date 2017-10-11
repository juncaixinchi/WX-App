#! /bin/bash
rm public/*.js
export NODE_ENV=production
npm run build
npm run start
