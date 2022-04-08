FROM debian

RUN apt-get update -yq \
   && apt-get install curl gnupg -yq \
   && curl -sL https://deb.nodesource.com/setup_16.x | bash \
   && apt-get install nodejs -yq \
   && apt-get clean -y

RUN apt-get install -y nodejs

WORKDIR /app

RUN chmod 777 /app

COPY package*.json ./
RUN npm i -g yarn
RUN npm i

COPY . .

CMD npm run selenoid