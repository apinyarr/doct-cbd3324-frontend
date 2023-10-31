# doct-cbd3324-frontend

Containerization and Container Delivery - Frontend Application

## Structure

```
doct-cbd3324-frontend/
├── app/
│   ├── server.js
│   ├── ...
├── Dockerfile
├── docker-compose.yml
├── k8s/
│   ├── helm/
│   │   ├── frontend/
│   │   │   ├── charts/
│   │   │   │   ├── frontend/
│   │   │   │   ├── ...
│   │   ├── values.yaml
│   ├── manifests/
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   ├── ...
├── package.json
├── .gitignore
└── ...
```

## Dependencies Installation
```npm install dependencies```

## Run the application
```node app/server.js```

## Build and Run Docker Container
To build an image, use the command

```docker build -t apinyarr/dic-frontend:test .```

To run a container, use the command

```docker run -d --rm --name doc-frontend -p 8080:8080 -e BACKEND_URL=http://host.docker.internal:8088/search apinyarr/dic-frontend:test```