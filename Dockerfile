# Stage 1: Build React app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code and build
COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy React build from previous stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy your nginx config
COPY ./nginx /etc/nginx/conf.d

EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
