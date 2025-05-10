FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY frontend/package*.json ./frontend/

# Install dependencies
RUN yarn install
RUN cd frontend && yarn install

# Bundle app source
COPY . .

# Build frontend
RUN cd frontend && yarn build

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Copy frontend build to backend public directory
RUN mkdir -p backend/public && cp -r frontend/build/* backend/public/

EXPOSE 3000

# Start the application
CMD ["node", "backend/server.js"]
