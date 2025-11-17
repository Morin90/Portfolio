# Étape 1 : Build
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : Serveur nginx
FROM nginx:alpine

# Copier le build de Vite dans nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Optionnel : remplace la config par défaut de nginx (pour une SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]