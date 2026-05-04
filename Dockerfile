# 1. Build stage
FROM node:20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# 2. Runtime stage
FROM node:20 AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy standalone server
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
