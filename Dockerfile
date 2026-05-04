# 1. Build stage
FROM node:20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --cache .npm --prefer-offline --force

COPY . .
RUN npm run build

# 2. Runtime stage
FROM node:20 AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy the entire .next folder
COPY --from=builder /app/.next ./.next

# Copy public assets
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]
