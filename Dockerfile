FROM node:20-alpine

WORKDIR /app

COPY . .

RUN echo '#!/bin/sh' > /worker.sh && \
    echo 'while true; do echo worker_alive; sleep 60; done' >> /worker.sh && \
    chmod +x /worker.sh

CMD sh -c "/worker.sh & node server.js"
