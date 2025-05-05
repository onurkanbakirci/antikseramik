# Base image olarak Node.js kullanıyoruz
FROM node:18-alpine AS base

# Çalışma dizinini ayarlıyoruz
WORKDIR /app

# Bağımlılıkları yüklemek için gerekli dosyaları kopyalıyoruz
FROM base AS deps
COPY package.json package-lock.json* ./

# Bağımlılıkları yüklüyoruz
RUN npm i --legacy-peer-deps

# Builder aşaması
FROM base AS builder
WORKDIR /app

# Bağımlılıkları kopyalıyoruz
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js uygulamasını build ediyoruz
RUN npm run build

# Çalıştırma aşaması
FROM base AS runner
WORKDIR /app

# Ortam değişkenlerini ayarlıyoruz
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create the nextjs user and group
RUN addgroup -g 1001 nodejs
RUN adduser -S nextjs -u 1001 -G nodejs

# Copy necessary files and directories
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Next.js build çıktılarını kopyalıyoruz
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Kullanıcıyı değiştiriyoruz
USER nextjs

# Portu açıyoruz
EXPOSE 3000

# Ortam değişkenlerini ayarlıyoruz
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Uygulamayı çalıştırıyoruz
CMD ["node", "server.js"]
