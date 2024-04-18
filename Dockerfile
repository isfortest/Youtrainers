FROM cypress/browsers:node-20.12.0-chrome-123.0.6312.86-1-ff-124.0.2-edge-123.0.2420.65-1
LABEL authors="zakso"
WORKDIR /tests
COPY package.json .
COPY cypress.config.js .
COPY ./cypress ./cypress

RUN npm install
ENTRYPOINT ["npx", "cypress", "run"]