FROM node
WORKDIR /app
COPY . /app
ENV PATH=$PATH:./node_modules/.bin
ENV TDDBIN_ROOT_URL=http://tddbin.local:54321/
