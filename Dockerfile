FROM nodejs:alphine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
CMD {"npm" , "start"}