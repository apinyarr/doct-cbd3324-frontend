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