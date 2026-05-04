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

# Copy the entire .next folder
COPY --from=builder /app/.next ./.next

# Copy package.json for runtime
COPY --from=builder /app/package.json ./package.json

# Copy public assets
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]
