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

## Run using Docker Compose
To run using Docker Compose (explicit the compose file name)

```docker compose -f docker-compose.yaml up -d```

## Run using Kubernetes
Starting order

*Remark* Skip step 1 if dictionary-namespace is created
1. Create namespace dictionary-namespace

```kubectl apply -f namespace.yaml```

*Remark* Skip step 2 if dic-config is created
2. Create configMap dic-config

```kubectl apply -f configmaps.yaml```

4. Create deployment dic-frontend-deployment

```kubectl apply -f frontend/frontend-deployment.yaml```

5. Create service dic-frontend-service

```kubectl apply -f frontend/frontend-service.yaml```