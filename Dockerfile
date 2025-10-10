# Step 1: build the react app
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: serve with nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
