# source: baseline/sites/02b-cube-B2-slipstream/Dockerfile · project: deZign-pro 02b/TESQ · saved: 2026-06-18
# TESQ — static WebGL site, served by a tiny zero-dependency Node server.
# Build context = this folder. Railway injects $PORT; the server binds 0.0.0.0:$PORT.
FROM node:20-alpine

WORKDIR /app

# The static server (no npm install needed — it uses only Node core modules).
COPY server.js /app/server.js

# The site itself. .dockerignore keeps dev artifacts (.shots, *.md) and
# verified-dead assets (removed-planet textures, unused HDR candidates) out.
COPY . /app/site

# Drop deploy/config files that were copied into the served root.
RUN rm -f /app/site/server.js /app/site/Dockerfile /app/site/.dockerignore \
          /app/site/railway.toml /app/site/DEPLOY.md

ENV PORT=8080
EXPOSE 8080

# Run as the unprivileged user shipped with the base image.
USER node

# No Dockerfile HEALTHCHECK on purpose: Railway runs its own probe
# (railway.toml -> healthcheckPath "/"), and a duplicate container check would
# only add noise / risk spurious restarts.
CMD ["node", "/app/server.js"]
