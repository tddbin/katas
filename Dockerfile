FROM node
WORKDIR /app
COPY . /app
ENV TDDBIN_ROOT_URL=http://tddbin.local:54321/
