# Stage 1
FROM node:16-alpine AS build
WORKDIR /frontend
COPY ./frontend .
RUN npm i
RUN npm run build

RUN npm i -g serve

CMD ["serve", "-s", "build"]

# Stage 2
# FROM nginx:alpine

# COPY --from=build /frontend/dist/ /usr/share/nginx/html/

# EXPOSE 80