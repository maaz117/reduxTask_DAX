# Set node version variable
ARG NODE_VERSION=20.17.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app

################################################################################
# Create a stage for installing production dependencies.
FROM base as deps

# Download dependencies as a separate step to take advantage of Docker's caching.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

################################################################################
# Create a stage for building the application.
FROM deps as build

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .
RUN npm run build

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
FROM base as final

ENV NODE_ENV production

# Fix permission issues before installing 'serve'
RUN chown -R node:node /usr/src/app

USER node

# Ensure node can access directories
RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app/node_modules

# Install serve to serve static files
RUN npm install serve --only=prod

COPY --from=build /usr/src/app/package.json .
COPY --from=build /usr/src/app/package-lock.json .
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 4173

# Use 'serve' to serve the production build
CMD ["npx", "serve", "dist", "-p", "4173"]
