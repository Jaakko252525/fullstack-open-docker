# fullstack-open-docker

exercises done: 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 12.10, 12.11
other exercises coming soon!

# starting the backend
- docker compose -f docker-compose.dev.yml down --volumes
- docker compose -f docker-compose.dev.yml up
- $env:MONGO_URL="mongodb://*****:*****@localhost:3456/******"; npm run dev


in the 12.8
- go exe inside the container
- then run 'mongosh'
- db.auth("***", "***")
