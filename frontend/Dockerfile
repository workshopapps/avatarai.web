FROM node:16-alpine
WORKDIR /frontend
COPY ./frontend .
RUN npm i
RUN npm run build
ENV NODE_ENV production
EXPOSE 5173
CMD [ "npm", "run", "dev", "--", "--host"]